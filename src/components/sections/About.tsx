
import React from 'react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { CheckCircle } from 'lucide-react';

export const About = () => {
  const features = [
    'Innovative design thinking',
    'User-centered approach',
    'Performance-driven development',
    'Strong industry partnerships',
    'Dedicated support team',
    'Continuous improvement'
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative">
            <div className="relative z-10 bg-gradient-to-br from-primary/80 to-blue-700/80 p-1 rounded-2xl rotate-3 shadow-xl">
              <div className="bg-card rounded-xl overflow-hidden transform -rotate-3 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Our team working together" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium text-primary">
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Young minds, endless possibilities
            </h2>
            
            <p className="text-muted-foreground">
              Our journey is fueled by creativity, curiosity, and an unrelenting drive to make a difference. 
              We specialize in crafting innovative web solutions, developing applications, and experimenting 
              with emerging technologies. By combining technical expertise with teamwork, we aim to solve 
              real-world problems and shape the future of technology. Join us as we continue to innovate and grow.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <AnimatedButton showArrow>
              Learn More About Us
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
