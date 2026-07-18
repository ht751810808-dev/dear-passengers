import Link from 'next/link';

export default function OfficialTrailer() {
  return (
    <div className="official-trailer">
      <div className="trailer-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/XRvd_HZesys"
          title="Dear Passengers official announcement trailer by FLEXUS"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="trailer-copy">
        <span className="kicker">OFFICIAL ANNOUNCEMENT TRAILER</span>
        <h3>Watch the FLEXUS Reveal</h3>
        <p>
          The official trailer demonstrates the game’s tone and visible situations. It does not, by itself, confirm a
          maximum player count, local co-op, voice-chat system, controller support, or a precise release date.
        </p>
        <a href="https://www.youtube.com/watch?v=XRvd_HZesys" target="_blank" rel="noopener noreferrer">
          Watch on the official FLEXUS channel ↗
        </a>
        <Link href="/dear-passengers-trailer">
          Read the scene and feature breakdown →
        </Link>
      </div>
    </div>
  );
}
