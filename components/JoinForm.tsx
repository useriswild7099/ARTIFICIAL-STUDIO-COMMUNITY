'use client';

import React, { useState } from 'react';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[]
  });
  const [loading, setLoading] = useState(false);
  const [shaking, setShaking] = useState<string | null>(null);

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const triggerShake = (field: string) => {
    setShaking(field);
    setTimeout(() => setShaking(null), 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) return triggerShake('name');
    if (!formData.email || !formData.email.includes('@')) return triggerShake('email');
    if (!formData.phone) return triggerShake('phone');

    setLoading(true);

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setTimeout(() => {
          window.location.href = 'https://chat.whatsapp.com/Cz8kcODDIygKJcGruASUAQ';
        }, 900);
      } else {
        alert('Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert('Internal server error.');
      setLoading(false);
    }
  };

  const interests = [
    "AI Automation", "Vibe Coding", "Design", "Media Editing",
    "Marketing", "Networking", "Learning", "Everything"
  ];

  return (
    <section className="form-section" id="join">
      <div className="wrap">
        <div className="form-layout">
          <div className="form-left">
            <div className="sec-label">Join the Community</div>
            <h2 className="sec-title">One Step.<br /><span className="inv">Infinite</span><br />Access.</h2>
            <p className="form-desc">
              Fill in your details and you'll be redirected straight into the Artificial Studio WhatsApp community. Free. Instant. No gatekeeping.
            </p>
            <div className="form-perks">
              {["Immediate access to all 9 groups", "Daily curated AI knowledge drops", "Direct access to builders, founders", "First access to new platforms", "Collaborative project opportunities", "Zero cost. Always free."].map((p, i) => (
                <div key={i} className="perk"><div className="perk-dot"></div>{p}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="form-card">
              <div className="form-card-title">Get Access</div>
              <div className="form-card-sub">// Complete to join — instant redirect</div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text" id="name" placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={shaking === 'name' ? { animation: 'shake 0.35s ease', borderColor: '#fff' } : {}}
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email" id="email" placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={shaking === 'email' ? { animation: 'shake 0.35s ease', borderColor: '#fff' } : {}}
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">Mobile Number</label>
                  <input
                    type="tel" id="phone" placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={shaking === 'phone' ? { animation: 'shake 0.35s ease', borderColor: '#fff' } : {}}
                  />
                </div>

                <div className="field">
                  <label>Your Interests</label>
                  <div className="interests-grid">
                    {interests.map((interest, i) => (
                      <label
                        key={i}
                        className={`check-item ${formData.interests.includes(interest) ? 'selected' : ''}`}
                        onClick={() => handleInterestToggle(interest)}
                      >
                        <span className="check-box"><span className="check-tick"></span></span>
                        <span className="check-label">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className={`btn-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                  <span>{loading ? 'Opening WhatsApp...' : 'Join Artificial Studio'}</span>
                  <span className="btn-submit-arrow">{loading ? '↗' : '→'}</span>
                </button>
              </form>

              <p className="form-note">
                Redirecting to WhatsApp — no spam, no paywall — free forever<br />
                artificialstudio.vercel.app
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-section { padding: 100px 0 120px; border-top: 1px solid rgba(255,255,255,0.1); }
        .form-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: flex-start; }
        .sec-label { font-family: var(--M); font-size: 8px; letter-spacing: 6px; color: rgba(255,255,255,0.35); text-transform: uppercase; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .sec-label::before { content:'//'; color:rgba(255,255,255,0.2); }
        .sec-title { font-family: var(--D); font-size: clamp(42px, 6vw, 72px); line-height: 0.9; letter-spacing: 2px; text-transform: uppercase; color: var(--W); margin-bottom: 24px; }
        .form-desc { font-size: 13px; font-weight: 300; color: rgba(255,255,255,0.55); line-height: 1.75; margin-bottom: 32px; max-width: 400px; }
        .form-perks { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
        .perk { display: flex; align-items: flex-start; gap: 12px; font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.55); line-height: 1.45; }
        .perk-dot { width: 5px; height: 5px; border: 1px solid rgba(255,255,255,0.4); border-radius: 50%; flex-shrink: 0; margin-top: 5px; }

        .form-card { border: 1px solid rgba(255,255,255,0.18); padding: 40px 36px 36px; background: rgba(255,255,255,0.02); position: relative; }
        .form-card::before, .form-card::after { content: ''; position: absolute; width: 20px; height: 20px; border-color: rgba(255,255,255,0.5); border-style: solid; }
        .form-card::before { top:-1px; left:-1px; border-width: 2px 0 0 2px; }
        .form-card::after  { bottom:-1px; right:-1px; border-width: 0 2px 2px 0; }
        .form-card-title { font-family: var(--D); font-size: 28px; letter-spacing: 3px; text-transform: uppercase; color: var(--W); margin-bottom: 6px; line-height: 1; }
        .form-card-sub { font-family: var(--M); font-size: 8px; letter-spacing: 3px; color: rgba(255,255,255,0.3); text-transform: uppercase; margin-bottom: 32px; }

        .field { margin-bottom: 20px; }
        .field label { display: block; font-family: var(--M); font-size: 7.5px; letter-spacing: 3px; color: rgba(255,255,255,0.4); text-transform: uppercase; margin-bottom: 8px; }
        .field input { width: 100%; background: transparent; border: 1px solid rgba(255,255,255,0.18); color: var(--W); font-family: var(--C); font-size: 13px; font-weight: 400; padding: 13px 14px; outline: none; transition: border-color 0.2s; }
        .field input:focus { border-color: var(--W); }

        .interests-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .check-item { display: flex; align-items: center; gap: 14px; cursor: pointer; padding: 10px 14px; border: 1px solid rgba(255,255,255,0.1); transition: border-color 0.15s, background 0.15s; user-select: none; }
        .check-item:hover { border-color: rgba(255,255,255,0.35); }
        .check-item.selected { border-color: var(--W); background: rgba(255,255,255,0.06); }
        .check-box { width: 14px; height: 14px; border: 1px solid rgba(255,255,255,0.35); flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .selected .check-box { background: var(--W); border-color: var(--W); }
        .check-tick { width: 6px; height: 6px; border-bottom: 1.5px solid var(--B); border-right: 1.5px solid var(--B); transform: rotate(45deg) translateY(-1px); display: none; }
        .selected .check-tick { display: block; }
        .check-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.65); }
        .selected .check-label { color: var(--W); }

        .btn-submit { width: 100%; margin-top: 28px; background: var(--W); color: var(--B); border: none; font-family: var(--M); font-size: 10px; letter-spacing: 4px; text-transform: uppercase; padding: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 12px; transition: opacity 0.2s, transform 0.15s; position: relative; overflow: hidden; }
        .btn-submit:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-submit.loading::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent); animation: shimmer 1s infinite; }
        .form-note { margin-top: 14px; font-family: var(--M); font-size: 7.5px; letter-spacing: 2px; color: rgba(255,255,255,0.2); text-transform: uppercase; text-align: center; line-height: 1.6; }

        @media (max-width: 900px) {
          .form-section { padding: 72px 24px; }
          .form-layout { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 540px) {
          .form-card { padding: 28px 22px 24px; }
          .interests-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default JoinForm;
