
import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundLines } from '@/components/ui/BackgroundLines';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 px-6 md:px-12 overflow-hidden">
      <BackgroundLines />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div
              className="inline-block bg-secondary px-4 py-1.5 rounded-full text-sm font-medium text-foreground mb-2 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Elevating Digital Experiences
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              Building tomorrow's<br /><span className="text-gradient">solution</span><br />today itself!
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              At WebxWorks, we transform your ideas into innovative web experiences. From stunning websites to robust applications, we build solutions that redefine possibilities. Our team combines creativity, technology, and strategy to deliver exceptional results tailored to your unique needs.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              <AnimatedButton showArrow size="lg">
                Start Your Project
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline" 
                size="lg" 
                onClick={scrollToServices}
              >
                Our Services
              </AnimatedButton>
            </div>
          </div>
          
          <div className="flex-1 relative h-[400px] md:h-[500px] w-full flex items-center justify-center animate-scale-in">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10 w-full h-full max-w-md bg-gradient-to-br from-white/5 to-white/20 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-10 bg-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              
              <div className="mt-10 p-4 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="animate-float" style={{ animationDelay: `${item * 0.2}s` }}>
                    <div className="bg-white/10 rounded-lg p-4 h-[100px] shadow-lg" />
                  </div>
                ))}
              </div>
              
              <div className="p-4">
                <div className="bg-white/10 rounded-lg h-[180px] shadow-lg" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-50 hover:opacity-100 transition-opacity">
          <a href="#services" className="flex flex-col items-center text-sm text-muted-foreground">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
