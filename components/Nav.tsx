'use client';

import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="main-nav">
      <div className="wrap nav-bar">
        <a href="#" className="nav-logo">Artificial Studio</a>

        {/* Desktop links */}
        <div className="desktop-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#groups" className="nav-link">Groups</a>
          <a href="#join" className="nav-link">Join</a>
          <a href="/admin" className="nav-link">Admin</a>
          <a href="#join" className="nav-cta">Join Free</a>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-burger" onClick={toggle} aria-label="Menu">
          <span className={`burger-line ${isOpen ? 'open' : ''}`} />
          <span className={`burger-line ${isOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Full-screen mobile overlay */}
      {isOpen && (
        <div className="mobile-overlay" onClick={toggle}>
          <div className="mobile-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <a href="#about" className="mo-link" onClick={toggle}>About</a>
            <a href="#groups" className="mo-link" onClick={toggle}>Groups</a>
            <a href="#join" className="mo-link" onClick={toggle}>Join</a>
            <a href="/admin" className="mo-link" onClick={toggle}>Admin / Login</a>
            <a href="#join" className="mo-cta" onClick={toggle}>Join Free &rarr;</a>
          </div>
        </div>
      )}

      <style jsx>{`
        .main-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.88); backdrop-filter: blur(12px);
        }
        .nav-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 18px; padding-bottom: 18px;
        }
        .nav-logo {
          font-family: var(--D); font-size: 20px; letter-spacing: 4px;
          color: var(--W); text-decoration: none; text-transform: uppercase;
        }
        .desktop-links { display: flex; align-items: center; gap: 32px; }
        .nav-link {
          font-family: var(--M); font-size: 9px; letter-spacing: 3px;
          color: rgba(255,255,255,0.5); text-decoration: none;
          text-transform: uppercase; transition: color 0.2s;
        }
        .nav-link:hover { color: var(--W); }
        .nav-cta {
          font-family: var(--M); font-size: 9px; letter-spacing: 2px;
          color: var(--B); background: var(--W); border: none;
          padding: 9px 18px; text-decoration: none; text-transform: uppercase;
          cursor: pointer; transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.85; }

        /* ── Hamburger ── */
        .mobile-burger {
          display: none; background: none; border: none; cursor: pointer;
          padding: 8px; flex-direction: column; gap: 6px; z-index: 1001;
        }
        .burger-line {
          display: block; width: 24px; height: 1.5px; background: var(--W);
          transition: transform 0.3s ease;
        }
        .burger-line.open:first-child { transform: translateY(3.75px) rotate(45deg); }
        .burger-line.open:last-child  { transform: translateY(-3.75px) rotate(-45deg); }

        /* ── Mobile Overlay ── */
        .mobile-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.96);
          z-index: 998; display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.25s ease;
        }
        .mobile-overlay-inner {
          display: flex; flex-direction: column; align-items: center; gap: 28px;
        }
        .mo-link {
          font-family: var(--D); font-size: 18px; letter-spacing: 3px;
          color: var(--W); text-decoration: none; text-transform: uppercase;
          opacity: 0.65; transition: opacity 0.2s;
        }
        .mo-link:hover, .mo-link:active { opacity: 1; }
        .mo-cta {
          font-family: var(--M); font-size: 10px; letter-spacing: 3px;
          color: var(--B); background: var(--W); padding: 12px 24px;
          text-decoration: none; text-transform: uppercase; margin-top: 8px;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .nav-logo { font-size: 16px; letter-spacing: 3px; }
          .desktop-links { display: none !important; }
          .mobile-burger { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
