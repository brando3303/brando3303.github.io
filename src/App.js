import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import TcpWriteup from './sections/TcpWriteup';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar activeTab={activeTab} scrolled={scrolled} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} scrollTo={scrollTo} />
      {/* <TcpWriteup /> */}

      <footer className="border-t border-zinc-800/60 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-sm">
            &copy; 2026 Brandon Bailey &middot; Designed &amp; built with React &amp; Tailwind CSS
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:bbailey9@uw.edu"
              className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://github.com/brando3303"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/[username]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white text-sm transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
