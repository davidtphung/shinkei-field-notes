'use client';

import { useEffect, useState } from 'react';
import './brief.css';

const pages = [
  ['COVER', 'Six seconds.', 'Stories from the boats and the factory floor.'],
  ['00', 'Read this before the stories.', 'A compact field guide to ike jime, the tools, and the sequence.'],
  ['01', 'Surgery, at sea, in six seconds.', 'The engineers building delicate systems for brutal conditions.'],
  ['02', 'The boat is the product.', 'Three fishermen, three coasts, and the value of every catch.'],
  ['PSDN-S', 'The machine.', 'One cycle, drawn to scale.'],
  ['03', 'The factory floor.', 'The people and production behind the system.'],
  ['04', 'The record follows the fish.', 'A closer look at the signal from deck to plate.'],
];
const spreads = [[0], [1, 2], [3, 4], [5, 6]];

export default function SixSeconds() {
  const [spread, setSpread] = useState(0);
  const activePages = spreads[spread];
  const previous = () => setSpread(value => Math.max(0, value - 1));
  const next = () => setSpread(value => Math.min(spreads.length - 1, value + 1));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return <main className="brief-reader">
    <header className="brief-nav">
      <a href="/" className="wordmark">SHINKEI<span>®</span></a>
      <p>FIELD BRIEF / VOL. 01</p>
      <a className="brief-download" href="/assets/six-seconds/six-seconds-field-brief.pdf" download>DOWNLOAD PDF ↓</a>
    </header>
    <section className="brief-intro" aria-labelledby="brief-title">
      <p className="eyebrow">INTERACTIVE READER</p>
      <h1 id="brief-title">SIX<br />SECONDS.</h1>
      <p>Stories from the boats and the factory floor. Explore the field brief one spread at a time.</p>
    </section>
    <section className="brief-stage" aria-label="Six Seconds field brief reader">
      <div className="brief-meta"><span>SPREAD {String(spread + 1).padStart(2, '0')} / {String(spreads.length).padStart(2, '0')}</span><span>{activePages.map(index => pages[index][0]).join(' + ')}</span></div>
      <div className={`zine-book ${spread === 0 ? 'cover-open' : ''}`} aria-label={`Six Seconds spread ${spread + 1}`}>
        <div className="zine-spread" key={spread}>
          {activePages.map((index, position) => <figure className={`zine-sheet sheet-${position}`} key={index}>
            <img src={`/assets/six-seconds/page-${index + 1}.jpg`} alt={`Page ${index + 1}: ${pages[index][1]}`} />
            <figcaption>{String(index + 1).padStart(2, '0')} / 07</figcaption>
          </figure>)}
          {activePages.length === 1 && <div className="zine-blank" aria-hidden="true"><span>SHINKEI SYSTEMS<br />FIELD BRIEF / VOL. 01</span></div>}
        </div>
      </div>
      <p className="brief-caption">{activePages.map(index => pages[index][2]).join('  ')}</p>
      <div className="brief-controls">
        <button type="button" onClick={previous} disabled={spread === 0} aria-label="Previous spread">← TURN BACK</button>
        <div className="brief-dots" aria-label="Choose a spread">{spreads.map((_, index) => <button type="button" key={index} className={index === spread ? 'active' : ''} onClick={() => setSpread(index)} aria-label={`Go to spread ${index + 1}`} aria-current={index === spread ? 'page' : undefined}>{String(index + 1).padStart(2, '0')}</button>)}</div>
        <button type="button" onClick={next} disabled={spread === spreads.length - 1} aria-label="Next spread">TURN PAGE →</button>
      </div>
    </section>
    <footer className="brief-footer"><p>Use the arrow keys to navigate.</p><a href="/">BACK TO FIELD NOTES ↑</a></footer>
  </main>;
}
