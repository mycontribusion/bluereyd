'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Image src="/logo.png" alt="BlueReyd Logo" width={40} height={40} style={{ objectFit: 'contain' }} priority />
    <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary)', lineHeight: 1.1 }}>
      BlueReyd <br />
      <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.05em', opacity: 0.8 }}>HealthTech Solutions</span>
    </div>
  </div>
);

const ThemeToggle = ({ theme, toggle }: { theme: string; toggle: () => void }) => (
  <button onClick={toggle} className="theme-toggle" aria-label="Toggle Theme">
    {theme === 'light' ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    )}
  </button>
);

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('bluereyd-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('bluereyd-theme', newTheme);
  };

  const portfolio = [
    {
      title: "Likita Ba Boka Ba",
      tag: "Health Awareness",
      link: "https://likita-ba-boka-ba.vercel.app",
      description: "Localized health education and awareness platform delivered entirely in Hausa for the unique challenges of Northern Nigeria.",
      features: ["Hausa Language", "Health Education", "Community Focused"]
    },
    {
      title: "CalcForDocs",
      tag: "Proof of Utility",
      link: "https://calcfordocs.vercel.app",
      description: "45+ clinical calculators serving as an essential tool for healthcare professionals across Nigeria.",
      features: ["Full Offline Support", "Clinician-Verified", "Instant Results"]
    },
    {
      title: "Hausaclerking",
      tag: "Language Localization",
      link: "https://hausaclerking.vercel.app",
      description: "Specialized medical clerking tool built for underdeveloped healthcare settings where language is a barrier.",
      features: ["Audio Support", "Structured History", "Offline-First"]
    },
    {
      title: "4MyTeam",
      tag: "Workflow Excellence",
      link: "https://4myteam.vercel.app",
      description: "Real-time patient management system for medical teams to synchronize care and track mortality/discharges.",
      features: ["Multi-user Synch", "Secure Data", "Modular Tabs"]
    },
    {
      title: "Kano Lab Connect",
      tag: "Infrastructure",
      link: "https://kanolabconnect.vercel.app",
      description: "Infrastructure project linking local diagnostic labs to clinicians for faster results and better patient outcomes.",
      features: ["Lab Integration", "Secure Messaging", "Analytics"]
    }
  ];

  const contactEmail = "ahmadmusamuhd@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/ahmad-m-musa-b93587156/";

  return (
    <main>
      {/* Navigation */}
      <nav className="solid-nav fade-in-up" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '0.75rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 5%'
        }}>
          <Logo />
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="#portfolio" style={{ fontWeight: 600 }}>Portfolio</Link>
            <Link href="#ngo" style={{ fontWeight: 600 }}>NGO Gateway</Link>
          </div>
          {/* Always-visible controls */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            {/* Connect dropdown */}
            <div className="dropdown-container">
              <button className="btn btn-primary" style={{ padding: '10px 20px', gap: '8px' }}>
                Connect
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="dropdown-menu">
                <Link href={`mailto:${contactEmail}`} className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  Email
                </Link>
                <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="dropdown-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="float" style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
          zIndex: -1,
          opacity: 0.5
        }}></div>

        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '30px',
              background: theme === 'dark' ? 'var(--primary-glow)' : 'var(--primary)',
              color: theme === 'dark' ? 'var(--secondary)' : '#ffffff',
              fontWeight: 800,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
              border: '1px solid var(--secondary)'
            }}>
              Clinician Product Architect
            </div>
            <h1 style={{ color: 'var(--text-main)' }}>
              Clinician-Led <br />
              <span className="text-gradient">Digital Solutions</span> <br />
              for Healthcare
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '550px' }}>
              We bridge the gap between high-stakes clinical expertise and full-stack technical excellence.
              Engineering for the 'real-world mess' of global health infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="#portfolio" className="btn btn-primary">Our Solutions</Link>
            </div>
          </div>

          <div className="fade-in-up" style={{ position: 'relative', display: 'flex', justifyContent: 'center', animationDelay: '0.4s' }}>
            <div className="glass premium-glow" style={{
              width: '100%',
              aspectRatio: '16/10',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
              background: 'var(--bg-section)',
              border: '1px solid var(--glass-border)'
            }}>
              <div style={{ height: '16px', width: '35%', background: theme === 'dark' ? 'var(--secondary)' : 'var(--primary)', opacity: 0.9, borderRadius: '10px' }}></div>
              <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', height: '44px' }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{ background: theme === 'dark' ? 'var(--secondary)' : 'var(--primary)', borderRadius: 'var(--radius-sm)', opacity: 0.15 }}></div>
                ))}
              </div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: theme === 'dark' ? '#000812' : '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 120" style={{ opacity: 0.8 }}>
                  <path d="M0 60 L140 60 L150 40 L165 80 L180 60 L220 60 L235 15 L255 105 L275 60 L400 60" stroke="var(--accent)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <animate attributeName="stroke-dasharray" from="0,450" to="450,0" dur="2.5s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </div>

            <div className="glass float heartbeat" style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-20px',
              padding: '1.25rem 2rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 800,
              color: 'var(--accent)',
              background: 'var(--bg-section)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: 'var(--glass-shadow)',
              animationDelay: '1s'
            }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }}></div>
              Live mHealth Node
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ background: 'var(--bg-main)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="text-gradient">Production Ecosystem</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.25rem', fontWeight: 600 }}>
              Validated clinical tools deployed in the field, solving critical challenges with resilient digital architecture.
            </p>
          </div>

          <div className="grid grid-3">
            {portfolio.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                className="glass portfolio-card fade-in-up premium-glow" style={{
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  textDecoration: 'none',
                  animationDelay: `${0.1 * index}s`,
                  background: 'var(--bg-section)'
                }}>
                <div style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--accent)',
                  fontWeight: 800
                }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6, fontWeight: 500 }}>{item.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto', paddingTop: '1rem' }}>
                  {item.features.map((feat, i) => (
                    <span key={i} style={{
                      fontSize: '0.85rem',
                      background: theme === 'dark' ? 'rgba(0, 216, 255, 0.1)' : 'var(--bg-main)',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      color: theme === 'dark' ? 'var(--secondary)' : 'var(--primary)',
                      fontWeight: 700,
                      border: '1px solid var(--border)'
                    }}>{feat}</span>
                  ))}
                </div>
                <div style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 800, color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Launch Intelligence ↗
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Callout */}
      <section style={{ textAlign: 'center', position: 'relative', padding: '120px 5%' }}>
        <div className="container">
          <div className="glass fade-in-up" style={{
            padding: '6rem 3rem',
            borderRadius: 'var(--radius-lg)',
            background: theme === 'dark' ? 'var(--bg-section)' : 'var(--primary)',
            color: 'white',
            boxShadow: '0 40px 100px rgba(0, 0, 0, 0.5)',
            border: '1px solid var(--glass-border)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '400px', height: '400px', background: 'white', opacity: 0.03, borderRadius: '50%' }}></div>

            <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Resilient by Design</h2>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', maxWidth: '850px', margin: '0 auto 3.5rem', opacity: 1, lineHeight: 1.6, fontWeight: 500 }}>
              Our commitment is to monolithic, 100% reliable Progressive Web Apps (PWAs) that excel at the patient's bedside, regardless of network state.
            </p>
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { val: "100%", label: "Offline Uptime" },
                { val: "<0.8s", label: "Runtime Response" },
                { val: "Cloud/Local", label: "Hybrid Precision" }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>{stat.val}</div>
                  <div style={{ fontSize: '1.1rem', opacity: 1, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, color: 'white' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Partners Section */}
      <section id="ngo" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <div className="glass fade-in-up premium-glow" style={{
            padding: '6rem 3rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            border: '2px solid var(--accent)',
            background: 'var(--bg-main)',
            boxShadow: '0 30px 90px rgba(255, 45, 85, 0.2)'
          }}>
            <div style={{ fontSize: 'clamp(0.7rem, 2vw, 1rem)', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
              Social Impact Architecture
            </div>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>The "Clinician-Led" Impact Portal</h2>
            <p style={{ maxWidth: '850px', margin: '0 auto 3.5rem', color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', lineHeight: 1.7, fontWeight: 500 }}>
              Partner with BlueReyd to standardize healthcare delivery in underserved regions. Our clinician-engineered infrastructure provides the reliable digital backbone for large-scale interventions, ensuring that technical precision meets real-world clinical reality—regardless of network state.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href={`mailto:${contactEmail}`} className="btn btn-primary" style={{ background: 'var(--accent)', padding: '18px 36px', fontSize: '1.15rem', gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                Email Us
              </Link>
              <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '18px 36px', fontSize: '1.15rem', gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '8rem 5% 5rem', borderTop: '1px solid var(--border)', background: 'var(--bg-section)' }}>
        <div className="container grid grid-3">
          <div className="fade-in-up">
            <Logo />
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '2.5rem', maxWidth: '300px', lineHeight: 1.7, fontWeight: 600 }}>
              Engineering clinical excellence for the real world. Clinician-led, patient-first.
            </p>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 style={{ marginBottom: '2rem', color: 'var(--secondary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.15em' }}>Solutions Ecosystem</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem', fontSize: '1.15rem', color: 'var(--text-muted)', fontWeight: 700 }}>
              {portfolio.map(p => <li key={p.title}><Link href={p.link}>{p.title}</Link></li>)}
            </ul>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 style={{ marginBottom: '2rem', color: 'var(--secondary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.15em' }}>Direct Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href={`mailto:${contactEmail}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: 'var(--secondary)' }}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                Email
              </Link>
              <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, color: '#0a66c2' }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn Profile
              </Link>
            </div>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 700 }}>
              Kano, Nigeria • Global Operations
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: '8rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 700 }}>
          © {new Date().getFullYear()} Bluereyd HealthTech Solutions. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
