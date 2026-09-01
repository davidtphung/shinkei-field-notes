const proof = [
  ['poseidon', 'VISION / LOCKED', 'POSEIDON', 'Computer vision identifies the harvest point. Automated ike jime makes a difficult deck operation repeatable, fast, and precise.'],
  ['freshness', 'QUALITY / PROTECTED', 'FRESHNESS', 'Less physiological stress at harvest helps preserve texture, flavor, and the working life of every fish.'],
  ['traceability', 'RECORD / CONTINUOUS', 'TRACEABILITY', 'A clear record follows the catch from vessel to buyer, making quality a visible standard rather than a promise.'],
];

export default function Home() {
  return <main>
    <a className="skip" href="#story">Skip to story</a>
    <header className="nav">
      <a className="wordmark" href="#top" aria-label="Shinkei Systems home">SHINKEI<span>®</span></a>
      <nav aria-label="Main navigation"><a href="#story">Story</a><a href="#system">System</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="#contact">JOIN THE FLEET ↗</a>
    </header>
    <section id="top" className="hero" aria-labelledby="hero-title">
      <img src="/assets/fast-company/hero.jpg" alt="A fisherman in blue gloves guides a salmon toward a Shinkei processing machine on deck." />
      <div className="hero-copy">
        <p className="eyebrow">FIELD NOTES / 001</p>
        <h1 id="hero-title">PRECISION ON DECK.<br />QUALITY BY DESIGN.</h1>
        <p>Shinkei turns the first moments after catch into a better standard for seafood.</p>
        <a className="button" href="#story">READ THE CASE ↓</a>
      </div>
      <p className="hero-caption">COOK INLET, ALASKA / PHOTO: MATT &amp; ALEX LOWBER, LOBO / VIA FAST COMPANY</p>
    </section>
    <section id="story" className="manifesto" aria-labelledby="story-title">
      <p className="eyebrow">THE OPERATING IDEA</p>
      <h2 id="story-title">BETTER HANDLING.<br />BETTER SEAFOOD.</h2>
      <div>
        <p>A fish can be caught with skill and still lose value in the minutes that follow. Shinkei equips crews with computer vision and automated ike jime so the harvest is handled with care, consistency, and speed when it matters most.</p>
        <p>This is infrastructure for people who cannot afford vague claims: fishermen protecting a catch, buyers protecting a standard, and chefs protecting the plate. We build for the fleet first. The rest of the chain gets stronger because of it.</p>
      </div>
    </section>
    <section className="fisher-story" aria-labelledby="fisher-title">
      <img src="/assets/youtube/little-feat.jpg" alt="A fisherman at the helm of the boat Little Feat at sunset." />
      <div>
        <p className="eyebrow">THE FLEET / LITTLE FEAT</p>
        <h2 id="fisher-title">THE FIRST EXPERT IS ON THE BOAT.</h2>
        <p>Crews read weather, water, and catch in real time. Shinkei is designed to support that expertise with a practical tool that performs in the working conditions of a fishing day.</p>
        <a className="button" href="https://www.youtube.com/watch?v=gtQcduy-s-0" target="_blank" rel="noreferrer">WATCH THE STORY ↗</a>
      </div>
    </section>
    <section id="system" className="proof" aria-labelledby="system-title">
      <div><p className="eyebrow">THE SHINKEI SYSTEM</p><h2 id="system-title">FROM CATCH<br />TO CONFIDENCE.</h2></div>
      <ol>{proof.map(([key, tag, title, description]) => <li className={`system-module ${key}`} key={key}>
        <div className="module-head"><span>{tag}</span><i aria-hidden="true" /></div>
        <div className="module-art" aria-hidden="true"><b /><em /><strong /></div>
        <div className="module-copy"><h3>{title}</h3><p>{description}</p></div>
      </li>)}</ol>
    </section>
    <section className="press-note" aria-label="Independent coverage">
      <p className="eyebrow">INDEPENDENT COVERAGE</p>
      <blockquote>A humane harvest can also be a higher standard of quality.</blockquote>
      <p>Outside observers have tracked Shinkei’s work from the vessel to the market. Their reporting describes a model that pairs on-deck automation with a direct route for responsibly handled fish into the Seremoni supply chain.</p>
      <p className="byline"><a href="https://time.com/collections/best-inventions-2025/7318338/shinkei-poseidon/?filters=food-and-drink" target="_blank" rel="noreferrer">TIME: BEST INVENTIONS 2025 ↗</a><br /><a href="https://techcrunch.com/2026/06/20/founders-funds-outlier-bet-on-humanely-killed-fish/" target="_blank" rel="noreferrer">TECHCRUNCH: THE FISHER-FIRST MODEL ↗</a></p>
    </section>
    <section className="callout"><p className="eyebrow">A BETTER STANDARD</p><blockquote>Build the handling system the catch deserves.</blockquote><p>Practical technology for a seafood economy that values precision, proof, and people.</p></section>
    <footer id="contact"><a className="wordmark" href="#top">SHINKEI<span>®</span></a><p>1301 E. El Segundo Blvd<br />El Segundo, CA 90245</p><a href="mailto:info@shinkei.systems">INFO@SHINKEI.SYSTEMS ↗</a><small>© 2026 SHINKEI SYSTEMS</small></footer>
  </main>;
}
