'use client';

import React from 'react';

export const GroupsSection = () => {
  const groups = [
    { name: 'AI Automation', desc: 'Workflows, agents and automation systems that replace manual work.', tag: 'Core Group' },
    { name: 'Vibe Coders', desc: 'Ship products fast using AI-assisted vibe coding. From idea to deployed in hours.', tag: 'Dev' },
    { name: 'Graphic Designers', desc: 'Brand, visual identity, UI design and AI-augmented creative tools.', tag: 'Creative' },
    { name: 'AI Media Editors', desc: 'Video, audio, and content production using the latest AI media tools.', tag: 'Media' },
    { name: 'LinkedIn Cartel', desc: 'Personal brand growth, LinkedIn strategy and professional leverage.', tag: 'Growth' },
    { name: 'Vibe Marketing', desc: 'AI-powered marketing systems and growth strategies for builders.', tag: 'Marketing' },
    { name: 'Business Syndicate', desc: 'Mastering Web3, modern business models, and high-leverage stock strategies.', tag: 'Wealth' },
    { name: 'Good Students', desc: 'Learn, discuss, debate and grow together — for serious learners.', tag: 'Learning' },
  ];

  return (
    <section className="groups-section" id="groups">
      <div className="wrap">
        <div className="sec-label">Active Groups Inside</div>
        <h2 className="sec-title">9 Groups.<br /><span className="inv">One Ecosystem</span></h2>

        <div className="groups-grid">
          {groups.map((g, i) => (
            <div key={i} className="group-card">
              <div className="group-name">{g.name}</div>
              <div className="group-desc">{g.desc}</div>
              <div className="group-tag">{g.tag}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .groups-section { padding: 100px 0; }
        .groups-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .group-card {
          background: var(--B);
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: background 0.2s;
          cursor: default;
        }
        .group-card:hover { background: rgba(255,255,255,0.05); }
        .group-name { font-family: var(--D); font-size: 20px; letter-spacing: 2px; text-transform: uppercase; color: var(--W); line-height: 1; }
        .group-desc { font-size: 10.5px; font-weight: 300; color: rgba(255,255,255,0.45); line-height: 1.5; }
        .group-tag { font-family: var(--M); font-size: 7px; letter-spacing: 2px; color: rgba(255,255,255,0.3); text-transform: uppercase; border: 1px solid rgba(255,255,255,0.15); padding: 3px 7px; align-self: flex-start; margin-top: 4px; }
        @media (max-width: 900px) {
          .groups-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 540px) {
          .groups-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export const ManifestoBlock = () => {
  return (
    <div className="manifesto-sec">
      <div className="wrap" style={{ display: 'flex', gap: '80px', alignItems: 'flex-start' }}>
        <div className="manifesto-left">
          <div className="manifesto-quote">
            We don't build<br />
            <em>wrappers</em><br />
            we engineer<br />
            ecosystems
          </div>
        </div>
        <div className="manifesto-right">
          <p className="manifesto-body">
            At Artificial Studio, we transcend the role of a mere agency or tool. We are the forge of tomorrow's intelligence — visionaries who harness raw computational power and first-principles engineering to birth AI ecosystems that evolve, interconnect, and dominate.
          </p>
          <p className="manifesto-body" style={{ marginTop: '16px' }}>
            This community is the living extension of that philosophy. Where every member is both student and builder. Where knowledge compounds and collective ambition eclipses individual limits.
          </p>
          <a href="#join" className="btn-primary" style={{ marginTop: '28px', display: 'inline-block' }}>Become Part of It &rarr;</a>
        </div>
      </div>
      <style jsx>{`
        .manifesto-sec { padding: 80px 0; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); }
        .manifesto-left { flex: 1; }
        .manifesto-quote { font-family: var(--D); font-size: clamp(28px, 4vw, 48px); line-height: 1.0; letter-spacing: 1px; text-transform: uppercase; color: var(--W); }
        .manifesto-quote em { font-style: normal; background: var(--W); color: var(--B); padding: 0 6px; }
        .manifesto-right { width: 340px; flex-shrink: 0; }
        .manifesto-body { font-size: 13px; font-weight: 300; color: rgba(255,255,255,0.6); line-height: 1.75; border-left: 1px solid rgba(255,255,255,0.2); padding-left: 20px; }
        .btn-primary { font-family: var(--M); font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: var(--B); background: var(--W); border: none; padding: 16px 32px; cursor: pointer; text-decoration: none; display: inline-block; transition: opacity 0.2s, transform 0.2s; }
        @media (max-width: 900px) {
          .manifesto-sec { flex-direction: column; gap: 40px; padding: 60px 24px; }
          .manifesto-right { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div className="footer-logo">Artificial Studio</div>
        <div className="footer-copy">&copy; 2026 Artificial Studio. The Future Ecosystem.</div>
        <a href="https://artificialstudio.vercel.app" className="footer-link" target="_blank">artificialstudio.vercel.app &rarr;</a>
      </div>
      <style jsx>{`
        footer { border-top: 1px solid rgba(255,255,255,0.1); padding: 40px 0; }
        .footer-logo { font-family: var(--D); font-size: 16px; letter-spacing: 4px; color: var(--W); text-transform: uppercase; }
        .footer-copy { font-family: var(--M); font-size: 7.5px; letter-spacing: 2px; color: rgba(255,255,255,0.2); text-transform: uppercase; }
        .footer-link { font-family: var(--M); font-size: 8px; letter-spacing: 2px; color: rgba(255,255,255,0.35); text-transform: uppercase; text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: var(--W); }
        @media (max-width: 900px) {
          footer { padding: 32px 24px; }
        }
      `}</style>
    </footer>
  );
};
