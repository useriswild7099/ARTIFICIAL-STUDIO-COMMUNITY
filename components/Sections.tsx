'use client';

import React, { useEffect, useRef } from 'react';

export const ManifestoStrip = () => {
  return (
    <div className="manifesto-strip">
      <div className="wrap" style={{ display: 'flex', gap: '64px' }}>
        <div className="manifesto-ticker">
          <span className="lit">AI Knowledge</span>
          <span>&mdash;</span>
          <span>Industry News</span>
          <span>&mdash;</span>
          <span className="lit">Collaborative Work</span>
          <span>&mdash;</span>
          <span>Networking</span>
          <span>&mdash;</span>
          <span className="lit">Skill Building</span>
          <span>&mdash;</span>
          <span>Opportunities</span>
          <span>&mdash;</span>
          <span className="lit">Live Projects</span>
          <span>&mdash;</span>
          <span>Everything</span>
          <span>&mdash;</span>
          {/* Duplicate for seamless loop */}
          <span className="lit">AI Knowledge</span>
          <span>&mdash;</span>
          <span>Industry News</span>
          <span>&mdash;</span>
          <span className="lit">Collaborative Work</span>
          <span>&mdash;</span>
          <span>Networking</span>
          <span>&mdash;</span>
          <span className="lit">Skill Building</span>
          <span>&mdash;</span>
          <span>Opportunities</span>
          <span>&mdash;</span>
          <span className="lit">Live Projects</span>
          <span>&mdash;</span>
          <span>Everything</span>
          <span>&mdash;</span>
        </div>
      </div>
      <style jsx>{`
        .manifesto-strip {
          border-top: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          padding: 28px 48px;
          overflow: hidden;
          position: relative;
        }
        .manifesto-ticker {
          display: flex;
          gap: 64px;
          animation: ticker 22s linear infinite;
          white-space: nowrap;
        }
        .manifesto-ticker span {
          font-family: var(--D);
          font-size: 13px;
          letter-spacing: 6px;
          color: rgba(255,255,255,0.18);
          text-transform: uppercase;
          flex-shrink: 0;
        }
        .manifesto-ticker span.lit {
          color: rgba(255,255,255,0.55);
        }
        @media (max-width: 900px) {
          .manifesto-strip { padding: 20px 24px; }
        }
      `}</style>
    </div>
  );
};

export const AboutSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    if (gridRef.current) {
      gridRef.current.querySelectorAll('.benefit').forEach((el, i) => {
        const item = el as HTMLElement;
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ${i * 0.05}s ease, transform 0.5s ${i * 0.05}s ease`;
        observer.observe(item);
      });
    }
  }, []);

  const benefits = [
    { num: '01', title: 'AI Knowledge', desc: 'Deep dives, tool breakdowns, model analysis and weekly intelligence drops — curated so you never fall behind.' },
    { num: '02', title: 'Industry News', desc: 'First-to-know AI and tech breakthroughs, filtered from noise. Only signal, zero fluff.' },
    { num: '03', title: 'Collaborative Work', desc: 'Build real products alongside builders, designers and creators. Ship things together. Grow faster.' },
    { num: '04', title: 'Networking', desc: 'Connect directly with designers, coders, founders, marketers and creatives building the future.' },
    { num: '05', title: 'Skill Building', desc: 'AI automation, vibe coding, media editing, marketing strategy and more — learn by doing with real people.' },
    { num: '07', title: 'Live Projects', desc: 'Contribute to real, active Artificial Studio ecosystems. Your work ships into the world.' },
    { num: '08', title: 'Everything', desc: 'No gatekeeping. No paywalls. Full spectrum — knowledge, community, growth — compounding over time.' },
  ];

  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="wrap">
        <div className="sec-label">What You Gain Inside</div>
        <h2 className="sec-title">The Full<br /><span className="inv">Spectrum</span></h2>

        <div className="benefits-grid" ref={gridRef}>
          {benefits.map((b, i) => (
            <div key={i} className="benefit">
              <div className="benefit-num">{b.num}</div>
              <div className="benefit-title">{b.title}</div>
              <div className="benefit-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        section { padding: 100px 0; }
        .sec-label {
          font-family: var(--M);
          font-size: 8px;
          letter-spacing: 6px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sec-label::before { content:'//'; color:rgba(255,255,255,0.2); }
        .sec-title {
          font-family: var(--D);
          font-size: clamp(42px, 6vw, 72px);
          line-height: 0.9;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--W);
          margin-bottom: 48px;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .benefit {
          background: var(--B);
          padding: 32px 24px;
          transition: background 0.25s;
          cursor: default;
        }
        .benefit:hover { background: rgba(255,255,255,0.04); }
        .benefit-num {
          font-family: var(--D);
          font-size: 36px;
          color: rgba(255,255,255,0.08);
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: 1px;
          transition: color 0.25s;
        }
        .benefit:hover .benefit-num { color: rgba(255,255,255,0.2); }
        .benefit-title {
          font-family: var(--C);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--W);
          margin-bottom: 8px;
        }
        .benefit-desc {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.55;
        }
        @media (max-width: 900px) {
          section { padding: 60px 0; }
          .benefits-grid { grid-template-columns: 1fr 1fr; }
          .sec-title { margin-bottom: 32px; }
        }
        @media (max-width: 540px) {
          .benefits-grid { grid-template-columns: 1fr; }
          .benefit { padding: 24px 20px; }
        }
      `}</style>
    </section>
  );
};
