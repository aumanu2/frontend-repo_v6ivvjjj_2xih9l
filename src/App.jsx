import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { AboutSection, AcademicSection, ResearchSection, ActivitiesSkillsSection, ContactSection } from './components/Sections';

function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}

export default function App() {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <AcademicSection />
        <ResearchSection />
        <ActivitiesSkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
