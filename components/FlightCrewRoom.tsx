'use client';

import { useEffect, useRef, useState } from 'react';
import { createFlightRoom, joinFlightRoom, type CrewPlayer, type FlightRoomSession, type FlightRoomStatus } from '@/lib/flight-network';
import styles from './FlightCrewRoom.module.css';

export type FlightCrewRoomProps = {
  locale: 'en' | 'zh';
  endpoint?: string;
  onHostReady: (session: FlightRoomSession) => void;
  onJoinReady: (session: FlightRoomSession) => void;
  onLeave: () => void;
};

const errors: Record<string, [string, string]> = {
  ROOM_CODE_INVALID: ['Enter an eight-character room code.', '请输入 8 位房间码。'],
  ROOM_FULL: ['This flight already has four crew members.', '这趟航班已有 4 位机组成员。'],
  ROOM_CONNECTION_FAILED: ['Could not join. Check the code and ask the host to keep the room open.', '无法加入。请核对房间码，并确认房主仍在房间。'],
  ROOM_CREATE_FAILED: ['Could not create a room. Please try again.', '暂时无法创建房间，请重试。'],
  ROOM_ENDPOINT_INVALID: ['The multiplayer service address is invalid.', '多人服务地址无效。'],
  HOST_NOT_READY: ['The host has not connected yet.', '房主尚未连接，请稍后再试。'],
  HOST_RECONNECTING: ['The host is reconnecting. Wait a moment.', '房主正在重连，请稍候。'],
  HOST_LEFT: ['The host left. This shared flight has ended.', '房主已离开，共享航班结束。'],
  HOST_DISCONNECTED: ['The host could not reconnect. This flight has ended.', '房主未能恢复连接，共享航班结束。'],
  RECONNECT_TIMEOUT: ['The connection could not be restored. Rejoin a room to continue.', '连接未能恢复，请重新加入房间。'],
  ROOM_EXPIRED: ['This room expired. Create a new flight room.', '房间已到期，请重新创建。'],
  ROOM_ENDED: ['This shared flight has ended.', '共享航班已结束。'],
  RESUME_EXPIRED: ['Your reconnect window expired. Join the room again.', '重连窗口已过期，请重新加入房间。'],
  SESSION_REPLACED: ['This crew session connected elsewhere.', '这位机组成员已在其他连接中上线。'],
  CREATE_RATE_LIMIT: ['Too many rooms were created. Please wait a minute.', '创建房间过于频繁，请稍后重试。'],
  PROTOCOL_MISMATCH: ['Refresh the page to use the latest multiplayer version.', '请刷新页面以使用最新多人版本。'],
};
function messageFor(code: string, zh: boolean): string {
  return errors[code]?.[zh ? 1 : 0] || (zh ? '连接暂时不可用，请检查网络后重试。' : 'The connection is unavailable. Check your network and try again.');
}

/** Keep mounted while a flight runs. A menu/tab change never leaves a shared room. */
export default function FlightCrewRoom({ locale, endpoint = process.env.NEXT_PUBLIC_FLIGHT_ROOM_URL || '', onHostReady, onJoinReady, onLeave }: FlightCrewRoomProps) {
  const zh = locale === 'zh';
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState<'host' | 'guest' | null>(null);
  const [session, setSession] = useState<FlightRoomSession | null>(null);
  const [players, setPlayers] = useState<CrewPlayer[]>([]);
  const [status, setStatus] = useState<FlightRoomStatus>('closed');
  const [errorCode, setErrorCode] = useState('');
  const [hostAway, setHostAway] = useState(false);
  const [worldReceived, setWorldReceived] = useState(false);
  const [copied, setCopied] = useState(false);
  const mounted = useRef(true);
  const callbacks = useRef({ onHostReady, onJoinReady, onLeave });
  callbacks.current = { onHostReady, onJoinReady, onLeave };

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
    // The parent owns the handed-off session and closes it when the entire game is disposed.
  }, []);
  useEffect(() => {
    if (!session) return;
    return session.subscribe(event => {
      if (event.type === 'state') setStatus(event.status);
      else if (event.type === 'roster') setPlayers(event.players);
      else if (event.type === 'world') setWorldReceived(true);
      else if (event.type === 'host-away') setHostAway(true);
      else if (event.type === 'host-back') setHostAway(false);
      else if (event.type === 'ended') setErrorCode(event.reason);
    });
  }, [session]);

  async function connect(role: 'host' | 'guest') {
    if (!endpoint || busy) return;
    setBusy(role); setErrorCode(''); setWorldReceived(false); setHostAway(false); setCopied(false);
    try {
      const result = role === 'host' ? await createFlightRoom(endpoint, name) : await joinFlightRoom(endpoint, code, name);
      if (!mounted.current) { result.close(); return; }
      setSession(result);
      if (role === 'host') callbacks.current.onHostReady(result);
      else callbacks.current.onJoinReady(result);
    } catch (error) {
      if (mounted.current) setErrorCode(error instanceof Error ? error.message : 'ROOM_CONNECTION_FAILED');
    } finally { if (mounted.current) setBusy(null); }
  }

  function leave() {
    session?.close(); setSession(null); setPlayers([]); setErrorCode(''); setHostAway(false); setWorldReceived(false);
    callbacks.current.onLeave();
  }

  async function copyCode() {
    if (!session) return;
    try { await navigator.clipboard.writeText(session.code); setCopied(true); }
    catch { setCopied(false); }
  }

  return <section className={styles.room} aria-label={zh ? '在线机组房间' : 'Online crew room'}>
    <div className={styles.heading}><span className={styles.symbol} aria-hidden="true">✈</span><div><p>{zh ? '同一架飞机 · 2–4 人' : 'ONE AIRCRAFT · 2–4 CREW'}</p><h3>{zh ? '和朋友一起值班' : 'Take a shift together'}</h3></div><span className={styles.tag}>{zh ? '在线合作' : 'ONLINE CO-OP'}</span></div>
    <p className={styles.intro}>{zh ? '房主选择合约并开始航班。每个人都有自己的物品，共同照顾乘客、处理故障和驾驶同一架飞机。' : 'The host selects a contract and starts the flight. Carry your own tools while everyone serves passengers, handles incidents, and flies the same aircraft.'}</p>
    {!endpoint ? <div className={styles.notice} role="status"><strong>{zh ? '多人服务尚未启用' : 'Multiplayer is not available yet'}</strong><p>{zh ? '当前没有连接到房间服务。你仍然可以从出发大厅开始单人航班。' : 'A room service is not connected. You can still start a solo flight from departures.'}</p></div> : !session ? <>
      <label className={styles.field}>{zh ? '机组昵称' : 'Crew name'}<input value={name} onChange={event => setName(event.target.value)} maxLength={24} placeholder={zh ? '例如：机长小天' : 'For example: Captain Tian'} autoComplete="off" disabled={!!busy} /></label>
      <div className={styles.connectGrid}>
        <div className={styles.option}><span className={styles.step}>01</span><strong>{zh ? '创建航班房间' : 'Host a flight room'}</strong><p>{zh ? '生成房间码，发给同行朋友。' : 'Get a room code to share with your crew.'}</p><button type="button" disabled={!!busy} onClick={() => void connect('host')} className={styles.primary}>{busy === 'host' ? (zh ? '正在创建…' : 'Creating…') : (zh ? '创建房间' : 'Create room')}</button></div>
        <form className={styles.option} onSubmit={event => { event.preventDefault(); void connect('guest'); }}><span className={styles.step}>02</span><strong>{zh ? '加入朋友的机组' : 'Join your friend’s crew'}</strong><label className={styles.codeField}><span className={styles.srOnly}>{zh ? '8 位房间码' : 'Eight-character room code'}</span><input value={code} onChange={event => setCode(event.target.value.toUpperCase().replace(/[^A-Z2-9]/g, '').slice(0, 8))} placeholder="ABCD2345" maxLength={8} autoCapitalize="characters" autoCorrect="off" spellCheck={false} disabled={!!busy} /></label><button type="submit" disabled={!!busy || code.length !== 8}>{busy === 'guest' ? (zh ? '正在加入…' : 'Joining…') : (zh ? '加入房间' : 'Join room')}</button></form>
      </div>
    </> : <div className={styles.connected}>
      <div className={styles.roomCode}><div><span>{zh ? '房间码' : 'ROOM CODE'}</span><strong>{session.code}</strong></div><button type="button" onClick={() => void copyCode()}>{copied ? (zh ? '已复制' : 'Copied') : (zh ? '复制房间码' : 'Copy code')}</button></div>
      <div className={styles.status} role="status"><i className={status === 'connected' && !hostAway ? styles.live : ''} />{status === 'closed' ? (zh ? '房间已关闭' : 'Room closed') : status === 'reconnecting' ? (zh ? '连接中断，正在重连…' : 'Connection lost. Reconnecting…') : hostAway ? (zh ? '房主正在重连，航班暂时等待…' : 'Waiting for the host to reconnect…') : (zh ? `机组已连接 · ${players.filter(player => player.connected).length}/4 人` : `Crew connected · ${players.filter(player => player.connected).length}/4`)}</div>
      <ul className={styles.players}>{players.map((player, index) => <li key={player.id}><span className={styles.avatar} data-colour={index % 4}>{player.name.slice(0, 1).toUpperCase()}</span><div><strong>{player.name}{player.id === session.playerId ? (zh ? '（你）' : ' (you)') : ''}</strong><small>{player.role === 'host' ? (zh ? '房主 · 航班控制' : 'Host · flight authority') : (zh ? '机组成员' : 'Crew member')}</small></div><span className={styles.memberStatus}>{player.connected ? (zh ? '就绪' : 'Ready') : (zh ? '重连中' : 'Reconnecting')}</span></li>)}</ul>
      <p className={styles.nextStep}>{session.role === 'host' ? (zh ? '准备好后，回到出发大厅选择合约并登机。房间会保持连接。' : 'When ready, choose a contract in departures and board. Your room stays connected.') : worldReceived ? (zh ? '已收到房主的共享航班状态。' : 'The host’s shared flight state has arrived.') : (zh ? '等待房主从出发大厅开始航班。' : 'Waiting for the host to start a flight from departures.')}</p>
      <button className={styles.leave} type="button" onClick={leave}>{session.role === 'host' ? (zh ? '结束房间并离开' : 'End room and leave') : (zh ? '离开房间' : 'Leave room')}</button>
    </div>}
    {errorCode && <p className={styles.error} role="alert">{messageFor(errorCode, zh)}</p>}
    <p className={styles.footnote}>{zh ? '房主离开会结束共享航班；短暂断线会自动重连。使用你们自己的语音软件沟通。' : 'The shared flight ends if its host leaves; brief interruptions reconnect automatically. Use your preferred voice app to talk.'}</p>
  </section>;
}
