'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      <div className="hero-inner">
        <div className="hero-eyebrow">Community — Open Access — 100% Free</div>

        <h1 className="hero-h1">
          Where<br />
          <span className="inv">Builders</span><br />
          Converge
        </h1>

        <p className="hero-sub">
          We don't build wrappers — we engineer ecosystems. Join the inner circle of AI practitioners, creators, coders and founders shaping what comes next. Knowledge, news, collaboration and everything in between.
        </p>

        <div className="hero-actions">
          <a href="#join" className="btn-primary">Join the Community &rarr;</a>
          <a href="#about" className="btn-ghost">Learn More</a>
        </div>

        <div className="hero-stats">
          <div className="hstat">
            <div className="hstat-n">9</div>
            <div className="hstat-l">Active Groups</div>
          </div>
          <div className="hstat">
            <div className="hstat-n">0</div>
            <div className="hstat-l">Context Switch</div>
          </div>
          <div className="hstat">
            <div className="hstat-n">∞</div>
            <div className="hstat-l">Signal</div>
          </div>
          <div className="hstat">
            <div className="hstat-n">FREE</div>
            <div className="hstat-l">Always</div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 160px 0 100px;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridshift 20s linear infinite;
        }

        .hero-glow {
          position: absolute;
          top: 30%; left: 55%;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        .hero-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; width: 100%; }

        .hero-eyebrow {
          font-family: var(--M);
          font-size: 9px;
          letter-spacing: 5px;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          animation: fadeup 0.8s ease both;
        }
        .hero-eyebrow::before { content:''; display:block; width:24px; height:1px; background:rgba(255,255,255,0.4); }

        .hero-h1 {
          font-family: var(--D);
          font-size: clamp(64px, 10vw, 120px);
          line-height: 0.95;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--W);
          animation: fadeup 0.8s 0.1s ease both;
        }

        .hero-sub {
          margin-top: 28px;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.65);
          max-width: 560px;
          border-left: 1px solid rgba(255,255,255,0.3);
          padding-left: 16px;
          animation: fadeup 0.8s 0.2s ease both;
        }

        .hero-actions {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          animation: fadeup 0.8s 0.3s ease both;
        }

        .btn-primary {
          font-family: var(--M);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--B);
          background: var(--W);
          border: none;
          padding: 16px 32px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s, transform 0.2s;
        }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }

        .btn-ghost {
          font-family: var(--M);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--W);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 16px 32px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s, transform 0.2s;
        }
        .btn-ghost:hover { border-color: var(--W); transform: translateY(-2px); }

        .hero-stats {
          margin-top: 72px;
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid rgba(255,255,255,0.14);
          max-width: 560px;
          animation: fadeup 0.8s 0.4s ease both;
        }
        .hstat {
          flex: 1;
          padding: 18px 20px;
          border-right: 1px solid rgba(255,255,255,0.14);
          text-align: center;
        }
        .hstat:last-child { border-right: none; }
        .hstat-n {
          font-family: var(--D);
          font-size: 28px;
          color: var(--W);
          letter-spacing: 1px;
          line-height: 1;
        }
        .hstat-l {
          font-family: var(--M);
          font-size: 7px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          margin-top: 4px;
        }

        .scroll-hint {
          position: absolute;
          bottom: 36px; left: 0;
          font-family: var(--M);
          font-size: 7.5px;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 2;
          animation: scrollbounce 2s ease-in-out infinite;
        }
        .scroll-hint::after { content:''; display:block; width:1px; height:24px; background:rgba(255,255,255,0.25); }

        @media (max-width: 900px) {
          .hero { padding: 120px 0 72px; }
          .hero-h1 { font-size: 58px; }
          .hero-stats { max-width: 100%; }
        }
        @media (max-width: 540px) {
          .hero-h1 { font-size: 46px; }
          .hero-stats { flex-wrap: wrap; }
          .hstat { min-width: 80px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
