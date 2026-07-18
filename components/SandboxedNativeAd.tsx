export default function SandboxedNativeAd() {
  return (
    <section className="native-ad-section" aria-label="Advertisement">
      <div className="container native-ad-shell">
        <div className="native-ad-header">
          <div>
            <span>ADVERTISEMENT</span>
            <strong>Sponsored cabin bulletin</strong>
          </div>
          <small>Third-party advertising</small>
        </div>
        <iframe
          className="native-ad-frame"
          src="/adsterra-native"
          title="Sponsored offers"
          width="100%"
          height="340"
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
