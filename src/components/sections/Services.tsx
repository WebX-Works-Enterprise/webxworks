
import React from 'react';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Link } from 'react-router-dom';
import { Code, Smartphone, PenTool, Brain, Shield, Gamepad } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with the latest technologies for optimal performance and scalability.',
      icon: <Code size={24} />,
      path: '/services/web-development'
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform applications that deliver seamless experiences across devices.',
      icon: <Smartphone size={24} />,
      path: '/services/app-development'
    },
    {
      title: 'UI/UX Designing',
      description: 'Intuitive interfaces and engaging user experiences that delight and convert visitors.',
      icon: <PenTool size={24} />,
      path: '/services/ui-ux-design'
    },
    {
      title: 'AI & ML',
      description: 'Intelligent solutions that leverage machine learning and artificial intelligence to solve complex problems.',
      icon: <Brain size={24} />,
      path: '/services/ai-ml'
    },
    {
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.',
      icon: <Shield size={24} />,
      path: '/services/cyber-security'
    },
    {
      title: 'Game Development',
      description: 'Engaging gaming experiences across multiple platforms using cutting-edge technologies.',
      icon: <Gamepad size={24} />,
      path: '/services/game-development'
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Elevate Your Digital Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your unique needs and objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'forwards' }}
            >
              <Link to={service.path}>
                <AnimatedCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
