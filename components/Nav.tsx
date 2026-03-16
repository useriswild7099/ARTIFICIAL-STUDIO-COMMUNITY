'use client';

import React, { useState } from 'react';

const Nav = () => {
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
        <div style={{
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
      </div>

      <style jsx>{`
        .nav-link {
          font-family: var(--M);
          font-size: 9px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--W); }
        .nav-cta {
          font-family: var(--M);
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--B);
          background: var(--W);
          border: none;
          padding: 9px 18px;
          text-decoration: none;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.85; }

        @media (max-width: 900px) {
          .nav-link { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
