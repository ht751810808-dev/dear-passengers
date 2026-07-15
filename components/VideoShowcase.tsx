'use client';

import { useEffect, useRef, useState } from 'react';

const clips = [
  {
    src: '/video/cabin-turbulence.mp4',
    label: 'Turbulence test',
    title: 'Keep the cabin together',
    description: 'Loose luggage turns a routine service run into a physics-driven scramble.',
  },
  {
    src: '/video/risky-cargo.mp4',
    label: 'Cargo manifest',
    title: 'Choose risk before takeoff',
    description: 'Unusual cargo can increase the reward while making the flight harder to control.',
  },
  {
    src: '/video/passenger-service.mp4',
    label: 'Cabin service',
    title: 'Serve passengers under pressure',
    description: 'Food, drinks, impatient travelers, and an aircraft that refuses to stay calm.',
  },
  {
    src: '/video/cabin-emergency.mp4',
    label: 'Crew response',
    title: 'Improvise when plans fail',
    description: 'The funniest solutions are rarely the ones in the safety manual.',
  },
];

export default function VideoShowcase() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.load();
    void videoRef.current?.play().catch(() => undefined);
  }, [active]);

  const clip = clips[active];

  return (
    <div className="video-console">
      <div className="video-screen">
        <div className="screen-toolbar">
          <span><i /> CABIN FEED 0{active + 1}</span>
          <span>1170 × 658 · LOOP</span>
        </div>
        <video
          key={clip.src}
          ref={videoRef}
          src={clip.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${clip.title}: ${clip.description}`}
        />
        <div className="video-caption">
          <span>{clip.label}</span>
          <strong>{clip.title}</strong>
          <p>{clip.description}</p>
        </div>
      </div>

      <div className="clip-selector" aria-label="Select gameplay clip">
        {clips.map((item, index) => (
          <button
            className={index === active ? 'is-active' : ''}
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={index === active}
          >
            <span>0{index + 1}</span>
            <b>{item.label}</b>
          </button>
        ))}
      </div>
    </div>
  );
}
