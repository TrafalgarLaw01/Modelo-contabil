import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { ValueLead } from './components/ValueLead';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <SocialProof />
        <Services />
        <Testimonials />
        <ValueLead />
      </main>

      <Footer />
    </div>
  );
}
