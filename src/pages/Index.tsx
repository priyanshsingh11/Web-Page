import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FAQSection from '../components/sections/FAQSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import CertificationSection from '../components/sections/CertificationSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

const Index = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent selection:bg-blue-700 selection:text-white">
      {/* Global CRT Scanlines */}
      <div className="scanlines"></div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="/hollow-knight-moewalls-com.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay for Video */}
      <div className="fixed inset-0 bg-black/60 -z-10 pointer-events-none"></div>

      {/* Website Content */}
      <div className="relative z-10">

        {/* Fixed Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <FAQSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default Index;