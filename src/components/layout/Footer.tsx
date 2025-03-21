
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Dribbble, Mail, Phone, MapPin, ExternalLink, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { additionalBlogPosts } from '../sections/Blog';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Touch animation handler
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const target = e.currentTarget;
    target.classList.add('scale-95', 'opacity-80');
  };
  
  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const target = e.currentTarget;
    target.classList.remove('scale-95', 'opacity-80');
  };
  
  // Click animation handler for desktop
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    target.classList.add('scale-95', 'opacity-80');
  };
  
  const handleMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    target.classList.remove('scale-95', 'opacity-80');
  };

  return <footer className="bg-secondary pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="favicon.png" alt="WebXworks Logo" className="h-10" />
              <h3 className="ml-2 text-xl font-display font-semibold">WebXworks</h3>
            </div>
            <p className="text-muted-foreground">
              Elevating digital experiences through innovative design and technology solutions.
            </p>
            
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'E-commerce', 'Digital Marketing'].map(item => <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-all duration-150" 
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2">
              {[{
              name: 'Home',
              path: '/'
            }, {
              name: 'About',
              path: '/#about'
            }, {
              name: 'Services',
              path: '/#services'
            }, {
              name: 'Contact',
              path: '/#contact'
            }].map(item => <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-foreground transition-all duration-150 flex items-center gap-1"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                  >
                    {item.name}
                    <ExternalLink size={14} className="inline-block" />
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground">69, Gandhipuram, 7th Street, Coimbatore-641012, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a 
                  href="tel:+918608412138" 
                  className="text-muted-foreground hover:text-foreground transition-all duration-150"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  +91-86084 12138
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a 
                  href="mailto:webxworks1.0@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-all duration-150"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  webxworks1.0@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-primary" />
                <span className="text-muted-foreground">Monday - Friday: 10AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Google Maps integration */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg w-full h-64 md:h-80">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.095779727642!2d76.97535529999999!3d11.0314404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855c4161a9b%3A0x972c4cbd634add05!2s7th%20St%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738230356827!5m2!1sen!2sin" style={{
          border: 0
        }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" title="WebXworks location" />
        </div>
        
        <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {currentYear} WebXworks. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
