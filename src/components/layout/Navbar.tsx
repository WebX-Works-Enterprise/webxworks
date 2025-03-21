import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const navItems = [{
  name: "Home",
  href: "#home"
}, {
  name: "Services",
  href: "#services"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Blog",
  href: "#blog"
}, {
  name: "Contact",
  href: "#contact"
}];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 px-6 md:px-12", isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center transition-all duration-300">
          <img src="favicon.png" alt="WebXworks Logo" className="h-10 md:h-12" />
          <span className="ml-2 text-xl md:text-2xl font-display font-bold text-foreground">WebXworks</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex items-center space-x-1">
            {navItems.map(item => <li key={item.name}>
                
              </li>)}
          </ul>
          <Button size="sm" className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300" onClick={() => window.location.href = "/#contact"}>
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-6 md:hidden animate-fade-in">
          <ul className="space-y-3">
            {navItems.map(item => <li key={item.name}>
                <a href={item.href} className="block py-2 text-foreground font-medium hover:text-primary transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              </li>)}
            <li>
              <Button size="sm" className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => {
            window.location.href = "/#contact";
            setMobileMenuOpen(false);
          }}>
                Get Started
              </Button>
            </li>
          </ul>
        </div>}
    </nav>;
};
export default Navbar;