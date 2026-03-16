'use client';

import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 999,
      borderBottom: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(0,0,0,0.88)',
      backdropFilter: 'blur(12px)',
    }}>
      <div className="wrap" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 48px',
      }}>
        <a href="#" style={{
          fontFamily: 'var(--D)',
          fontSize: '20px',
          letterSpacing: '4px',
          color: 'var(--W)',
          textDecoration: 'none',
          textTransform: 'uppercase',
        }}>Artificial Studio</a>

        {/* Desktop Nav */}
        <div className="desktop-links" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#groups" className="nav-link">Groups</a>
          <a href="#join" className="nav-link">Join</a>
          <a href="/admin" className="nav-link">Admin</a>
          <a href="#join" className="nav-cta">Join Free</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggle}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-inner">
          <a href="#about" className="m-link" onClick={toggle}>About</a>
          <a href="#groups" className="m-link" onClick={toggle}>Groups</a>
          <a href="#join" className="m-link" onClick={toggle}>Join</a>
          <a href="/admin" className="m-link" onClick={toggle}>Admin / Login</a>
          <a href="#join" className="m-cta" onClick={toggle}>Join Free &rarr;</a>
        </div>
      </div>

      <style jsx>{`
        .nav-link { font-family:var(--M); font-size:9px; letter-spacing:3px; color:rgba(255,255,255,0.5); text-decoration:none; text-transform:uppercase; transition:color 0.2s; }
        .nav-link:hover { color: var(--W); }
        .nav-cta { font-family:var(--M); font-size:9px; letter-spacing:2px; color:var(--B); background:var(--W); border:none; padding:9px 18px; text-decoration:none; text-transform:uppercase; cursor:pointer; transition:opacity 0.2s; }
        .nav-cta:hover { opacity:0.85; }

        .mobile-toggle { display:none; background:none; border:none; cursor:pointer; padding:10px; z-index:1001; flex-direction:column; gap:6px; }
        .bar { width:22px; height:1.5px; background:var(--W); transition:transform 0.3s, opacity 0.3s; }
        .bar.open:nth-child(1) { transform:translateY(4px) rotate(45deg); }
        .bar.open:nth-child(2) { transform:translateY(-4px) rotate(-45deg); }

        .mobile-menu { position:fixed; inset:0; background:#000; z-index:1000; display:flex; align-items:center; justify-content:center; transform:translateY(-100%); transition:transform 0.4s cubic-bezier(0.8, 0, 0.2, 1); }
        .mobile-menu.active { transform:translateY(0); }
        .mobile-menu-inner { display:flex; flex-direction:column; align-items:center; gap:32px; }
        .m-link { font-family:var(--D); font-size:32px; letter-spacing:4px; color:var(--W); text-decoration:none; text-transform:uppercase; opacity:0.6; transition:opacity 0.2s; }
        .m-link:hover { opacity:1; }
        .m-cta { font-family:var(--M); font-size:12px; letter-spacing:4px; color:var(--B); background:var(--W); padding:16px 32px; text-decoration:none; text-transform:uppercase; margin-top:10px; }

        @media (max-width: 900px) {
          nav .wrap { padding: 14px 24px !important; }
          .desktop-links { display:none !important; }
          .mobile-toggle { display:flex; }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
