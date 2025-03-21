
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import { NavBarDemo } from '@/components/NavBarDemo';

const Index = () => {
  useEffect(() => {
    // Apply scroll reveal animations to elements as they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Smooth scrolling progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
      <NavBarDemo />
    </div>
  );
};

export default Index;
