'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="white" stroke="var(--primary)" strokeWidth="2" />
      <path d="M30 35H60C68.2843 35 75 41.7157 75 50C75 58.2843 68.2843 65 60 65H30V35Z" stroke="var(--primary)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 65V35" stroke="var(--primary)" strokeWidth="8" strokeLinecap="round" />
      <path d="M45 50H70" stroke="var(--primary)" strokeWidth="8" strokeLinecap="round" />
      <path d="M25 50H35L40 40L50 60L55 50H75" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="heartbeat-path" style={{ filter: 'drop-shadow(0 0 2px var(--accent))' }} />
    </svg>
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
      tag: "Clinician-Led AI",
      link: "https://likita-ba-boka-ba.vercel.app",
      description: "Localized health education and diagnostics platform designed for the unique challenges of Northern Nigeria.",
      features: ["Dialect Support", "AI Diagnostics", "Education First"]
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

  return (
    <main>
      {/* Navigation */}
      <nav className="glass fade-in-up" style={{
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
            <Link href="#services" style={{ fontWeight: 600 }}>Services</Link>
            <Link href="#ngo" style={{ fontWeight: 600 }}>NGO Gateway</Link>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <ThemeToggle theme={theme} toggle={toggleTheme} />
              <Link href={`mailto:${contactEmail}`} className="btn btn-primary" style={{ padding: '10px 20px' }}>
                Connect
              </Link>
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
              background: 'var(--primary-glow)',
              color: 'var(--secondary)',
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
              <Link href="#services" className="btn btn-outline">Institutional Licensing</Link>
            </div>
          </div>

          <div className="fade-in-up" style={{ position: 'relative', display: 'flex', justifyContent: 'center', animationDelay: '0.4s' }}>
            <div className="glass float premium-glow" style={{
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
      <section style={{ textAlign: 'center', position: 'relative', padding: '120px 0' }}>
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

            <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}>Resilient by Design</h2>
            <p style={{ fontSize: '1.5rem', maxWidth: '850px', margin: '0 auto 3.5rem', opacity: 1, lineHeight: 1.6, fontWeight: 500 }}>
              Our commitment is to monolithic, 100% reliable Progressive Web Apps (PWAs) that excel at the patient's bedside, regardless of network state.
            </p>
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { val: "100%", label: "Offline Uptime" },
                { val: "<0.8s", label: "Runtime Response" },
                { val: "Cloud/Local", label: "Hybrid Precision" }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.5rem' }}>{stat.val}</div>
                  <div style={{ fontSize: '1.1rem', opacity: 1, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, color: 'white' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div className="fade-in-up">
              <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Enterprise</div>
              <h2 className="text-gradient" style={{ fontSize: '3.5rem' }}>Institutional Licensing</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.35rem', fontWeight: 500 }}>
                Empowering tier-1 hospitals and academic institutions with standardized protocols
                and high-fidelity data governance systems.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
                {[
                  "Proprietary Clinical Logic Modules",
                  "Decision Support Dashboards for CMDs",
                  "Closed-Loop Institutional Networking",
                  "Localized Data Compliance (NDPR)"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'var(--text-main)', fontWeight: 800, fontSize: '1.25rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 12px var(--accent)' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`mailto:${contactEmail}`} className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.15rem' }}>Request Institutional Demo</Link>
            </div>

            <div className="glass fade-in-up premium-glow" style={{
              padding: '3.5rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-section)',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
            }}>
              <div style={{ height: '320px', width: '100%', display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
                <div style={{ height: '40%', flex: 1, background: 'var(--secondary)', borderRadius: '10px', opacity: 0.15 }}></div>
                <div style={{ height: '75%', flex: 1, background: 'var(--secondary)', borderRadius: '10px', opacity: 0.35 }}></div>
                <div style={{ height: '55%', flex: 1, background: 'var(--secondary)', borderRadius: '10px', opacity: 0.55 }}></div>
                <div style={{ height: '95%', flex: 1, background: 'var(--accent)', borderRadius: '10px', boxShadow: '0 12px 35px rgba(255, 45, 85, 0.6)' }}></div>
                <div style={{ height: '65%', flex: 1, background: 'var(--secondary)', borderRadius: '10px' }}></div>
              </div>
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
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
              Social Impact Architecture
            </div>
            <h2 className="text-gradient" style={{ fontSize: '4.5rem' }}>The NGO Gateway</h2>
            <p style={{ maxWidth: '850px', margin: '0 auto 3.5rem', color: 'var(--text-muted)', fontSize: '1.45rem', lineHeight: 1.7, fontWeight: 500 }}>
              Partner with BlueReyd to standardize healthcare delivery in neglected communities.
              Our infrastructure provides the reliable digital backbone for large-scale clinical interventions.
            </p>
            <Link href={`mailto:${contactEmail}`} className="btn btn-primary" style={{ background: 'var(--accent)', padding: '20px 48px', fontSize: '1.25rem' }}>
              Initiate Partnership
            </Link>
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
            <Link href={`mailto:${contactEmail}`} style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-main)', wordBreak: 'break-all', letterSpacing: '-0.02em' }}>
              {contactEmail}
            </Link>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 700 }}>
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
