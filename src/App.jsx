import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';

function Loader({ onDone }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 900);
    const t2 = setTimeout(() => onDone(), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: fading ? 'none' : 'all',
    }}>
      <span style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        color: 'var(--text-primary)',
        letterSpacing: '-0.03em',
      }}>
        moa<span style={{ color: 'var(--accent)' }}>(dev)</span>
      </span>
    </div>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    return !sessionStorage.getItem('moadev_visited');
  });

  const handleLoaderDone = () => {
    sessionStorage.setItem('moadev_visited', '1');
    setShowLoader(false);
  };

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      {showLoader && <Loader onDone={handleLoaderDone} />}
      <div style={{
        opacity: showLoader ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
