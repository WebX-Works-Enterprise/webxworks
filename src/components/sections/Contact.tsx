
import React from 'react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { BackgroundLines } from '@/components/ui/BackgroundLines';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Instagram, Github, Dribbble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 md:px-12">
      <BackgroundLines />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a line and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-card rounded-xl p-8 border border-border/40 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                  <a href="mailto:webxworks1.0@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    webxworks1.0@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                  <a href="tel:+918608412138" className="text-muted-foreground hover:text-foreground transition-colors">
                    +91-86084 12138
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Address</h4>
                  <address className="text-foreground not-italic">
                    69, Gandhipuram, 7th Street<br />
                    Coimbatore-641012, India
                  </address>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Working Hours</h4>
                  <p className="text-foreground">
                    Monday - Friday: 10AM - 5PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Let's Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/91086049/admin/dashboard/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/WebX_Works" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/webx_works/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/WebX-Works-Enterprise" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://dribbble.com/WebxWorks" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-card rounded-xl p-8 border border-border/40 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  rows={5} 
                  className="w-full resize-none"
                />
              </div>
              
              <AnimatedButton showArrow className="w-full md:w-auto">
                <span className="flex items-center">
                  <Send size={16} className="mr-2" />
                  Send Message
                </span>
              </AnimatedButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
