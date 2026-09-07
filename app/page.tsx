const steps = [
  ["01", "Capture", "Hold the shutter and move sideways. Gentle haptics mark every frame."],
  ["02", "See it", "Release, relax your eyes, and the scene opens into real depth."],
  ["03", "Keep it", "Save a paper-mounted stereo card to Photos or share it anywhere."],
];

export default function Home() {
  return <>
    <header className="site-header">
      <a className="brand" href="#top">Stereogrammy</a>
      <nav aria-label="Primary navigation"><a href="#how">How it works</a><a href="#modes">Capture modes</a><a href="/privacy">Privacy</a></nav>
      <span className="status-pill">Coming to iPhone</span>
    </header>
    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Stereoscopic camera for iPhone</p>
          <h1>Two moments.<br /><em>One deeper view.</em></h1>
          <p className="lede">Stereogrammy turns a smooth sideways movement into a true stereoscopic photograph—ready to view with parallel or cross-eye vision.</p>
          <div className="hero-actions"><a className="button" href="#how">See how it works</a><span>Free · No account · No tracking</span></div>
        </div>
        <div className="stereo-window" aria-label="Two matching views form one stereoscopic scene">
          <div className="eye eye-left"><span className="cloud cloud-small" /><span className="horizon" /><span className="cloud cloud-large" /></div>
          <div className="eye eye-right"><span className="cloud cloud-small" /><span className="horizon" /><span className="cloud cloud-large" /></div>
          <div className="depth-mark"><span /><span /></div>
        </div>
      </section>
      <section className="stereo-statement"><p>Left eye</p><strong>Look between the pictures.</strong><p>Right eye</p></section>
      <section className="how section-shell" id="how">
        <div className="section-intro"><p className="eyebrow">A camera with a baseline</p><h2>Move the phone.<br />Keep looking straight.</h2><p>Stereogrammy records a short sequence, finds a useful pair, and presents it immediately. The automatic result is the main event; careful controls stay nearby when you want them.</p></div>
        <div className="steps">{steps.map(([number,title,body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className="paper-section" id="modes">
        <div className="paper-card"><div className="sample-pair" aria-hidden="true"><div /><div /></div><div className="signature">◉ Created with Stereogrammy · September 2026</div></div>
        <div className="paper-copy"><p className="eyebrow">Made to be kept</p><h2>A small stereo print, from your camera roll.</h2><p>Every export arrives mounted on warm, lightly textured paper, with room to let the two images breathe.</p><ul><li>Parallel and cross-eye viewing</li><li>Automatic pair selection and alignment</li><li>Optional convergence and frame controls</li><li>Local library for later viewing</li></ul></div>
      </section>
      <section className="modes section-shell">
        <p className="eyebrow">On foot by default</p><h2>The right guidance for the way you move.</h2>
        <div className="mode-grid"><article><b>Walk</b><span>Take one smooth sideways step.</span></article><article><b>Train</b><span>Let the carriage become your camera rail.</span></article><article><b>Flight</b><span>Turn takeoff and landing into vast stereo baselines.</span></article><article><b>Auto</b><span>Optional, on-device motion guidance. Location is requested only when selected.</span></article></div>
      </section>
      <section className="maker section-shell"><p className="eyebrow">Who made it</p><h2>Designed in Sweden.<br />Built for curious eyes.</h2><p>Stereogrammy is designed and built by <a href="https://fredrikpahlmandesign.github.io/">Fredrik Påhlman</a>. It is a sibling to <a href="https://fredrikpahlmandesign.github.io/linelift-site/">Line Lift</a>: tactile, focused, and respectful of your work.</p></section>
      <section className="final-cta"><p className="eyebrow">Stereogrammy</p><h2>See more than one moment can hold.</h2><p>Coming soon to the App Store for iPhone.</p><span className="button button-muted">App Store release in preparation</span></section>
    </main>
    <footer className="section-shell"><span>© 2026 Fredrik Påhlman</span><div><a href="/privacy">Privacy</a><a href="https://fredrikpahlmandesign.github.io/">More work</a></div></footer>
  </>;
}
