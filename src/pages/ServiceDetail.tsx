
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

// Service detail data
const serviceDetails = {
  'web-development': {
    title: 'Web Development',
    description: 'Custom websites built with the latest technologies for optimal performance and scalability.',
    content: [
      'We create responsive, user-friendly websites that look great on any device and provide an exceptional user experience.',
      'Our development team specializes in modern frameworks like React, Vue, and Angular, as well as backend technologies including Node.js, Python, and PHP.',
      'From simple landing pages to complex web applications, we deliver solutions that align with your business goals and technical requirements.'
    ],
    features: [
      'Responsive Design',
      'Content Management Systems',
      'E-commerce Integration',
      'API Development',
      'Performance Optimization',
      'SEO-friendly Code'
    ]
  },
  'app-development': {
    title: 'App Development',
    description: 'Native and cross-platform applications that deliver seamless experiences across devices.',
    content: [
      'Our mobile app development services cover iOS, Android, and cross-platform solutions using React Native and Flutter.',
      'We focus on creating intuitive interfaces, optimizing performance, and ensuring your app stands out in crowded app stores.',
      'From concept to deployment, we handle every aspect of the app development process with attention to detail and quality.'
    ],
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'UI/UX Design for Mobile',
      'App Store Optimization',
      'Ongoing Maintenance & Updates'
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Designing',
    description: 'Intuitive interfaces and engaging user experiences that delight and convert visitors.',
    content: [
      'Our design team creates visually stunning and highly functional interfaces that enhance user engagement and satisfaction.',
      'We employ user-centered design principles and conduct thorough research to understand your target audience and their needs.',
      'Through wireframing, prototyping, and testing, we refine designs until they perfectly balance aesthetics and usability.'
    ],
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems'
    ]
  },
  'ai-ml': {
    title: 'AI & ML',
    description: 'Intelligent solutions that leverage machine learning and artificial intelligence to solve complex problems.',
    content: [
      'We develop AI-powered applications and systems that automate processes, analyze data, and deliver valuable insights.',
      'Our machine learning expertise enables us to create predictive models, recommendation systems, and natural language processing solutions.',
      'We help businesses harness the power of AI to optimize operations, improve decision-making, and create new opportunities.'
    ],
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants',
      'Data Mining & Analysis'
    ]
  },
  'cyber-security': {
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.',
    content: [
      'We provide robust security measures to safeguard your systems, networks, and data from cyber threats and vulnerabilities.',
      'Our security experts conduct thorough assessments, implement protective measures, and establish monitoring systems to detect and respond to incidents.',
      'We help organizations develop security policies, educate employees, and comply with industry regulations and standards.'
    ],
    features: [
      'Security Assessments',
      'Penetration Testing',
      'Vulnerability Management',
      'Incident Response',
      'Security Training',
      'Compliance Consulting'
    ]
  },
  'game-development': {
    title: 'Game Development',
    description: 'Engaging gaming experiences across multiple platforms using cutting-edge technologies.',
    content: [
      'We create immersive games for mobile, web, PC, and consoles using industry-standard engines like Unity and Unreal.',
      'Our game development process encompasses concept creation, art design, programming, testing, and deployment.',
      'We focus on creating engaging gameplay mechanics, captivating visuals, and memorable user experiences that keep players coming back.'
    ],
    features: [
      '2D & 3D Game Development',
      'Mobile Games',
      'Web-based Games',
      'Console & PC Games',
      'AR/VR Experiences',
      'Game Testing & Optimization'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Get the service details based on the URL parameter
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  
  if (!service) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Service not found</h2>
        <Link to="/#services">
          <AnimatedButton showArrow>
            Return to Services
          </AnimatedButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/#services" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          
          <p className="text-xl text-muted-foreground mb-12">{service.description}</p>
          
          <div className="mb-12 space-y-6">
            {service.content.map((paragraph, index) => (
              <p key={index} className="text-lg">{paragraph}</p>
            ))}
          </div>
          
          <div className="bg-secondary/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 text-primary p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <a href="https://alvo.chat/5N0v" target="_blank" rel="noopener noreferrer">
              <AnimatedButton showArrow>
                Get Started with {service.title}
                <ExternalLink className="ml-1 h-4 w-4" />
              </AnimatedButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
