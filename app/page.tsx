'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <Image src="/logo.png" alt="BlueReyd" width={32} height={32} style={{ objectFit: 'contain' }} priority />
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{ fontWeight: 850, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>BlueReyd</span>
      <span style={{ fontWeight: 600, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>HealthTech Solutions</span>
    </div>
  </div>
);

const ThemeToggle = ({ theme, toggle }: { theme: string; toggle: () => void }) => (
  <button onClick={toggle} className="theme-toggle" aria-label="Toggle Theme">
    {theme === 'light' ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
    )}
  </button>
);

const ProductCard = ({ item }: { item: any }) => (
  <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div className="clinical-tag">Full Offline Support</div>
      {item.logo && <Image src={item.logo} alt={item.name} width={32} height={32} style={{ objectFit: 'contain' }} />}
    </div>
    <div>
      <h3>{item.name}</h3>
      <p style={{ marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.desc}</p>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: 'auto' }} className="card-tags">
      {item.tags.map((tag: string, index: number) => (
        <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="clinical-tag">{tag}</span>
          {index < item.tags.length - 1 && <span style={{ color: 'var(--border)' }}>|</span>}
        </span>
      ))}
    </div>
    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
      Launch Component ↗
    </Link>
  </div>
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

  const workstation = [
    {
      role: "Clinical Intelligence",
      name: "CalcForDocs",
      desc: "45+ medical calculators providing instant clinical decision-making support.",
      link: "https://calcfordocs.vercel.app",
      logo: "/calcfordocs.png",
      tags: ["CLINICIAN-VERIFIED", "INSTANT RESULTS"]
    },
    {
      role: "Workflow Operations",
      name: "4MyTeam",
      desc: "Real-time synchronization for patient management and mortality/discharge tracking.",
      link: "https://4myteam.vercel.app",
      logo: "/4myteam.png",
      tags: ["REAL-TIME SYNC", "TEAM COORDINATION"]
    },
    {
      role: "Diagnostic Infrastructure",
      name: "Kano Lab Connect",
      desc: "Linking diagnostic laboratories to clinicians for accelerated result delivery.",
      link: "https://kanolabconnect.vercel.app",
      logo: null,
      tags: ["DIAGNOSTIC LINK", "LAB INTEGRATED"]
    },
    {
      role: "Language Localization",
      name: "Hausaclerking",
      desc: "Medical clerking tool optimized for Northern Nigerian healthcare settings.",
      link: "https://hausaclerking.vercel.app",
      logo: "/hausaclerking.png",
      tags: ["HAUSA LOCALIZED", "CLERKING TOOLS"]
    },
    {
      role: "Health Awareness",
      name: "Likita Ba Boka Ba",
      desc: "Hausa-language health education platform focused on localized awareness.",
      link: "https://likita-ba-boka-ba.vercel.app",
      logo: "/likita-ba-boka-ba.png",
      tags: ["PUBLIC HEALTH", "HAUSA EDUCATION"]
    }
  ];

  const categories = Array.from(new Set(workstation.map(w => w.role)));

  const metrics = [
    { val: "100%", label: "Offline Uptime" },
    { val: "<0.8s", label: "Runtime Response" },
    { val: "Local", label: "Data Integrity" }
  ];

  const scrollToWorkstation = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('workstation');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const contactEmail = "ahmadmusamuhd@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/ahmad-m-musa-b93587156/";

  return (
    <main>
      {/* Navigation */}
      <nav className="sticky-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="#workstation"
              onClick={scrollToWorkstation}
              style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              Workstation
            </a>
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <Link href="https://calcfordocs.vercel.app" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              Launch the Suite
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 14px', background: 'var(--bg-sub)', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
            CLINICIAN PRODUCT ARCHITECT
          </div>
          <h1 style={{ maxWidth: '900px' }}>
            BR Health Suite: <br />
            <span style={{ color: 'var(--secondary)' }}>The Clinician’s Digital Backbone</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px' }}>
            Engineered for high-stakes clinical environments where technical precision meets real-world reality—regardless of connectivity status.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-ctas">
            <a
              href="#workstation"
              onClick={scrollToWorkstation}
              className="btn btn-primary"
            >
              Launch the Suite
            </a>
            <Link href={`mailto:${contactEmail}`} className="btn btn-secondary">Direct Connect</Link>
          </div>
        </div>
      </section>

      {/* Resilient by Design Strip */}
      <section className="resilient-strip">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--secondary)', marginBottom: '1rem' }}>SOCIAL IMPACT ARCHITECTURE</div>
            <h2 style={{ color: 'white', marginBottom: 0 }}>Resilient by Design</h2>
          </div>
          <div className="metrics-container">
            {metrics.map((m, i) => (
              <div key={i} className="metric-item">
                <div className="metric-value">{m.val}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Workstation Grid */}
      <section id="workstation" style={{ background: 'var(--bg-sub)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '5rem' }}>
            <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>The Unified Workstation</h2>
            <p style={{ fontSize: '1.25rem' }}>
              Standardized clinical tools engineered for immediate utility and 100% reliability at the patient's bedside.
            </p>
          </div>

          <div className="workstation-container">
            <div className="grid grid-2">
              {workstation.map((item, i) => (
                <ProductCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container architecture-grid">
          <div style={{ background: 'var(--bg-accent-block)', color: 'var(--text-on-accent)', padding: '3.5rem', borderRadius: '16px' }}>
            <div style={{ color: 'var(--secondary)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>ENGINEERING PHILOSOPHY</div>
            <h2 style={{ color: 'var(--text-on-accent)' }}>Built for the "Real-World Mess"</h2>
            <p style={{ color: 'var(--text-on-accent)', opacity: 0.9, fontSize: '1.1rem' }}>
              Most modern healthtech assumes perfect conditions. We engineer for the reality of clinical work—where the network drops, time is critical, and precision cannot be sacrificed.
            </p>
          </div>
          <div style={{ padding: '2rem 1.5rem' }}>
            <h3>Social Impact Architecture</h3>
            <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', color: 'var(--text-main)' }}>
              Our architecture ensures that clinical intelligence remains accessible regardless of connectivity status. By prioritizing offline-first execution, we bridge the gap between high-performance technical precision and the unpredictable reality of global health infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ background: 'var(--bg-sub)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.75rem' }}>Clinician-led, patient-first engineering for the real world.</h2>
            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>Ahmad M. Musa</div>
              <div style={{ color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>Clinician Product Architect</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '6rem 0 4rem', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid grid-3">
            <div>
              <Logo />
              <p style={{ marginTop: '1.5rem', fontSize: '0.95rem' }}>
                Technical precision meets clinical reality—regardless of connectivity status.
              </p>
            </div>
            <div className="footer-links" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 800, marginBottom: '2rem', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>CONNECT</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontWeight: 600, listStyle: 'none', padding: 0 }}>
                <li>
                  <a href={`mailto:${contactEmail}`} className="footer-link-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--secondary)' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    Email Us
                  </a>
                </li>
                <li>
                  <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="footer-link-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--secondary)' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 800, marginBottom: '2rem', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>GLOBAL OPERATIONS</div>
              <div style={{ fontWeight: 600 }}>Kano, Nigeria</div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Deploying resilient healthcare solutions worldwide.</p>
            </div>
          </div>
          <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            © 2026 BlueReyd HealthTech Solutions. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
