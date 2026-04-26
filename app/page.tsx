'use client';

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img src="/logo.png" alt="BlueReyd" width={32} height={32} style={{ objectFit: 'contain' }} />

    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{ fontWeight: 850, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>BlueReyd</span>
      <span style={{ fontWeight: 600, fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>HealthTech Solutions</span>
    </div>
  </div>
);

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const supportDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = supportDarkMode ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle Theme">
      {theme === 'light' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
      )}
    </button>
  );
};

export default function Home() {
  const [lightboxData, setLightboxData] = useState<{ images: string[], index: number } | null>(null);

  const Lightbox = () => {
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // Small timeout to ensure the container is rendered before scrolling
      const timer = setTimeout(() => {
        if (lightboxData && galleryRef.current) {
          const itemWidth = galleryRef.current.offsetWidth;
          galleryRef.current.scrollTo({
            left: lightboxData.index * itemWidth,
            behavior: 'auto' // Use auto for instant jump on open
          });
        }
      }, 50);
      return () => clearTimeout(timer);
    }, [lightboxData]);

    if (!lightboxData) return null;

    const next = () => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({ left: galleryRef.current.offsetWidth, behavior: 'smooth' });
      }
    };

    const prev = () => {
      if (galleryRef.current) {
        galleryRef.current.scrollBy({ left: -galleryRef.current.offsetWidth, behavior: 'smooth' });
      }
    };

    return (
      <div className="lightbox-overlay" onClick={() => setLightboxData(null)}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button className="lightbox-close" onClick={() => setLightboxData(null)} aria-label="Close">&times;</button>

          {lightboxData.images.length > 1 && (
            <>
              <button className="lightbox-nav prev" onClick={prev} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="lightbox-nav next" onClick={next} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </>
          )}

          <div className="lightbox-gallery" ref={galleryRef}>
            {lightboxData.images.map((img, i) => (
              <div key={i} className="lightbox-gallery-item">
                <img src={img} alt={`Full size screenshot ${i + 1}`} className="lightbox-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const calcImages = [
    "/calcfordocs_light.png",
    "/calcfordocs_dark.png",
    "/calcfordocs_glu.png",
    "/calcfordocs_hypok.png",
    "/calcfordocs_map.png",
    "/calcfordocs_t_disc.png",
    "/calcfordocs_t_hypok.png",
    "/calcfordocs_tab.png"
  ];






  const workstation = [
    {
      name: "4MyTeam",
      desc: "Manage patients and track discharges with smart search and sync.",
      link: "https://4myteam.vercel.app/",
      logo: "/4myteam.png",
      tags: ["REAL-TIME SYNC", "TEAM REVIEWS"],
      images: [
        "/4myteam_light.png",
        "/4myteam_dark.png",
        "/4myteam_add.png",
        "/4myteam_export.png",
        "/4myteam_importcode.png",
        "/4myteam_importqr.png",
        "/4myteam_t_light.png",
        "/4myteam_t_dark.png",
        "/4myteam_t_mort.png"
      ]
    },

    {
      name: "Kano Lab Connect",
      desc: "Get lab results delivered directly to your clinical team faster.",
      link: "https://kano-lab-connect.vercel.app/",
      tags: ["LAB LINK", "FAST RESULTS"],
      images: [
        "/kanolab_list.png",
        "/kanolab_details.png",
        "/kanolab_bloodtest.png",
        "/kanolab_t_home.png",
        "/kanolab_t_available.png",
        "/kanolab_t_near.png",
        "/kanolab_t_details.png",
        "/kanolab_t_xray.png"
      ]
    },

    {
      name: "Hausaclerking",
      desc: "Medical clerking tool optimized for Hausa-speaking patients.",
      link: "https://hausaclerking.vercel.app/",
      logo: "/hausaclerking.png",
      tags: ["HAUSA LOCALIZED", "CLERKING"],
      images: [
        "/hausaclerking_light.png",
        "/hausaclerking_cough.png",
        "/hausaclerking_cvs.png",
        "/hausaclerking_t_light.png",
        "/hausaclerking_t_dark.png",
        "/hausaclerking_t_recent.png",
        "/hausaclerking_t_fav.png",
        "/hausaclerking_t_fever.png"
      ]
    },

    {
      name: "Likita Ba Boka Ba",
      desc: "Health education platform providing verified information in Hausa.",
      link: "https://likita-ba-boka-ba.vercel.app/",
      logo: "/likita-ba-boka-ba.png",
      tags: ["PUBLIC HEALTH", "HAUSA EDUCATION"],
      images: [
        "/likita_light.png",
        "/likita_dark.png",
        "/likita_post.png",
        "/likita_about.png",
        "/likita_t_light.png",
        "/likita_t_dark.png",
        "/likita_t_posts.png"
      ]
    }

  ];



  const metrics = [
    { val: "100%", label: "Offline Uptime" },
    { val: "<0.8s", label: "Response Time" },
    { val: "Local", label: "Data Storage" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="sticky-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link href="#tools" className="desktop-only" onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }} style={{ fontWeight: 600, fontSize: '0.9rem' }}>All Tools</Link>
            <Link href="https://calcfordocs.vercel.app" target="_blank" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
              Open Calculator
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main>
        {/* Simplified Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="offline-highlight">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"></path></svg>
              Works offline after first load
            </div>
            <h1 style={{ marginBottom: '1rem' }}>
              Offline clinical tools for <span style={{ color: 'var(--secondary)' }}>real hospital work</span>
            </h1>
            <p style={{ fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', fontWeight: 500, margin: '0 auto 3rem auto' }}>
              Built by a doctor. Designed for unreliable networks. Works even without internet.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-ctas">
              <Link href="https://calcfordocs.vercel.app" target="_blank" className="btn btn-primary">
                Open Calculator
              </Link>
              <button onClick={() => scrollToSection('tools')} className="btn btn-secondary">
                Explore All Tools
              </button>
            </div>
          </div>
        </section>

        {/* Main Product: CalcForDocs */}
        <section id="calcfordocs" style={{ background: 'var(--bg-sub)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
              <div style={{ paddingRight: '2rem' }}>
                <div className="clinical-tag" style={{ marginBottom: '1.5rem' }}>Primary Tool</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                  <Image src="/calcfordocs.png" alt="CalcForDocs" width={40} height={40} style={{ objectFit: 'contain', borderRadius: '8px' }} />
                  <h2 style={{ margin: 0 }}>CalcForDocs</h2>
                </div>
                <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--text-main)' }}>
                  45+ clinical calculators for fast decisions. <br />
                  <strong>Works offline after first load.</strong>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Link href="https://calcfordocs.vercel.app" target="_blank" className="btn btn-primary" style={{ width: '100%' }}>
                    Open Calculator
                  </Link>
                  <p style={{ fontSize: '0.9rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    CLINICIAN-VERIFIED | INSTANT RESULTS
                  </p>
                </div>
              </div>
              <div className="calc-featured-display" style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)', width: '100%', margin: '0 auto', maxWidth: '600px' }}>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '1.5rem', padding: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '8px', position: 'absolute', left: '0.5rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff3b3b' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffcc00' }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }}></div>
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--secondary)', letterSpacing: '0.05em' }}>OFFLINE MODE ACTIVE</div>
                </div>

                <div className="image-carousel" style={{ margin: 0 }}>
                  {calcImages.map((img, idx) => (
                    <div key={idx} className="carousel-image" onClick={() => setLightboxData({ images: calcImages, index: idx })}>
                      <Image src={img} alt={`CalcForDocs screenshot ${idx + 1}`} width={500} height={300} quality={60} />
                    </div>
                  ))}
                </div>


              </div>


            </div>
          </div>
        </section>

        {/* Other Tools Section */}
        <section id="tools">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>More Practical Tools</h2>
            <div className="grid grid-2">
              {workstation.map((item, i) => (
                <div key={i} className="card">
                  <div className="image-carousel">
                    {item.images.map((img, idx) => (
                      <div key={idx} className="carousel-image" onClick={() => setLightboxData({ images: item.images, index: idx })}>
                        <Image src={img} alt={`${item.name} screenshot ${idx + 1}`} width={400} height={250} quality={60} />
                      </div>
                    ))}
                  </div>



                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ margin: 0 }}>{item.name}</h3>
                    {item.logo && <Image src={item.logo} alt={item.name} width={32} height={32} style={{ objectFit: 'contain', borderRadius: '4px' }} />}
                  </div>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '1rem' }}>{item.desc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', gap: '8px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                    {item.tags.join(' | ')}
                  </div>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', padding: '16px' }}>
                    Use Tool
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Simplified Technical Strip */}
        <div className="resilient-strip" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="container">
            <div className="metrics-container">
              {metrics.map((m, i) => (
                <div key={i} className="metric-item">
                  <div className="metric-value">{m.val}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why This Exists (Founder Credibility) */}
        <section style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>Built for the real ward</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '3rem', margin: '0 auto 3rem auto' }}>
              Most medical apps fail when the network drops. <br />
              BlueReyd was built by a doctor who worked in hospitals where internet was luxury, not a guarantee. <br />

              <strong>Clinician-led. Patient-focused. Works offline.</strong>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.5rem' }}>DR</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>Ahmad M. Musa</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Founder, BlueReyd HealthTech Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '100px 0' }}>
          <div className="container">
            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to use it?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', fontSize: '1.25rem', margin: '0 auto 3rem auto' }}>
              Try the clinical calculators right now. No account needed.
            </p>

            <Link href="https://calcfordocs.vercel.app" target="_blank" className="btn" style={{ background: 'white', color: 'var(--primary)', fontWeight: 850 }}>
              Try CalcForDocs Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="advanced-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Logo />
              <p className="footer-description">
                Bridging the gap between medical expertise and full-stack development. Building reliable, offline-first clinical tools for the real hospital ward.
              </p>
              <div className="footer-socials">
                <a href="https://linkedin.com/company/bluereyd" target="_blank" className="social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:connect@bluereyd.com" className="social-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-heading">Clinical Tools</h4>
              <ul className="footer-links">
                <li><Link href="https://calcfordocs.vercel.app">CalcForDocs</Link></li>
                <li><Link href="https://4myteam.vercel.app">4MyTeam</Link></li>
                <li><Link href="https://hausaclerking.vercel.app">Hausa Clerking</Link></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-heading">Ecosystem</h4>
              <ul className="footer-links">
                <li><Link href="https://kano-lab-connect.vercel.app">Kano Lab Connect</Link></li>
                <li><Link href="https://likita-ba-boka-ba.vercel.app">Likita Ba Boka Ba</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BlueReyd HealthTech Solutions. Built by a doctor.</p>
            <div className="footer-bottom-links">
              <span className="clinical-tag" style={{ border: 'none', background: 'rgba(0, 163, 191, 0.1)', padding: '6px 12px' }}>OFFLINE FIRST</span>
            </div>
          </div>
        </div>
      </footer>

      <Lightbox />
    </>
  );
}

