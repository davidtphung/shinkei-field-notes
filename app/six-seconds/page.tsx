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

export default function SixSeconds() {
  const [page, setPage] = useState(0);
  const previous = () => setPage(value => Math.max(0, value - 1));
  const next = () => setPage(value => Math.min(pages.length - 1, value + 1));

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
      <div className="brief-meta"><span>{pages[page][0]} / {String(page + 1).padStart(2, '0')}</span><span>{pages[page][1]}</span></div>
      <div className="brief-page-wrap">
        <img key={page} src={`/assets/six-seconds/page-${page + 1}.jpg`} alt={`Page ${page + 1}: ${pages[page][1]}`} />
      </div>
      <p className="brief-caption">{pages[page][2]}</p>
      <div className="brief-controls">
        <button type="button" onClick={previous} disabled={page === 0} aria-label="Previous page">← PREVIOUS</button>
        <div className="brief-dots" aria-label="Choose a page">{pages.map((item, index) => <button type="button" key={item[0]} className={index === page ? 'active' : ''} onClick={() => setPage(index)} aria-label={`Go to page ${index + 1}`} aria-current={index === page ? 'page' : undefined}>{String(index + 1).padStart(2, '0')}</button>)}</div>
        <button type="button" onClick={next} disabled={page === pages.length - 1} aria-label="Next page">NEXT →</button>
      </div>
    </section>
    <footer className="brief-footer"><p>Use the arrow keys to navigate.</p><a href="/">BACK TO FIELD NOTES ↑</a></footer>
  </main>;
}
