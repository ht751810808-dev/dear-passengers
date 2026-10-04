/** Locally synthesized engine, wind, cabin chimes and interaction sounds. */
export class CabinAudio {
  private ctx:AudioContext|null=null; private master:GainNode|null=null; private engine:OscillatorNode|null=null; private wind:GainNode|null=null;
  muted=false;
  start(){
    if(!this.ctx){
      const ctx=new AudioContext();this.ctx=ctx;const master=ctx.createGain();this.master=master;master.gain.value=this.muted?0:.32;master.connect(ctx.destination);
      const motor=ctx.createGain();motor.gain.value=.065;motor.connect(master);
      [48,96,145].forEach((frequency,i)=>{const oscillator=ctx.createOscillator();oscillator.type=i===0?'triangle':'sine';oscillator.frequency.value=frequency;oscillator.connect(motor);oscillator.start();if(i===0)this.engine=oscillator;});
      const noise=ctx.createBuffer(1,ctx.sampleRate*3,ctx.sampleRate),data=noise.getChannelData(0);let previous=0;
      for(let i=0;i<data.length;i++){previous=(previous+(Math.random()*2-1)*.04)/1.02;data[i]=previous*3;}
      const source=ctx.createBufferSource();source.buffer=noise;source.loop=true;const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1000;
      this.wind=ctx.createGain();this.wind.gain.value=.06;source.connect(filter);filter.connect(this.wind);this.wind.connect(master);source.start();
    }
    void this.ctx.resume().catch(()=>{});
  }
  update(speed:number,pressure:number,turbulence:boolean){if(!this.ctx)return;const t=this.ctx.currentTime;this.engine?.frequency.setTargetAtTime(38+speed*.11,t,.2);this.wind?.gain.setTargetAtTime(.03+speed*.0003+(100-pressure)*.004+(turbulence?.04:0),t,.2);}
  tone(type:'good'|'alert'|'pick'|'impact'|'step'){
    const ctx=this.ctx;if(!ctx||this.muted||ctx.state!=='running')return;const t=ctx.currentTime,o=ctx.createOscillator(),g=ctx.createGain();
    o.type=type==='impact'||type==='step'?'triangle':'sine';const f=type==='alert'?460:type==='impact'?95:type==='step'?68:660;
    o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(type==='good'?990:type==='pick'?850:Math.max(30,f*.6),t+.16);
    g.gain.setValueAtTime(type==='step'?.035:.10,t);g.gain.exponentialRampToValueAtTime(.001,t+(type==='step'?.06:.27));o.connect(g);g.connect(this.master!);o.start(t);o.stop(t+.3);
  }
  pause(){void this.ctx?.suspend().catch(()=>{});}
  mute(){this.muted=!this.muted;if(this.master)this.master.gain.value=this.muted?0:.32;return this.muted;}
  dispose(){void this.ctx?.close().catch(()=>{});this.ctx=null;}
}
