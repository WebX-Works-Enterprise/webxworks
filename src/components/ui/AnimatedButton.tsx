
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'default', size = 'default', showArrow = false, children, onClick, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    
    const handleTouchStart = () => {
      setIsPressed(true);
    };
    
    const handleTouchEnd = () => {
      setIsPressed(false);
    };
    
    const handleMouseDown = () => {
      setIsPressed(true);
    };
    
    const handleMouseUp = () => {
      setIsPressed(false);
    };
    
    const baseStyles = "font-medium transition-all duration-300 relative overflow-hidden group";
    
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
      outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
      ghost: "bg-transparent text-foreground hover:bg-secondary"
    };
    
    const sizeStyles = {
      default: "px-6 py-3 rounded-lg",
      sm: "px-4 py-2 text-sm rounded-md",
      lg: "px-8 py-4 text-lg rounded-lg"
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles, 
          variantStyles[variant], 
          sizeStyles[size], 
          isPressed && "scale-95 shadow-sm opacity-90",
          className
        )}
        onClick={onClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">
          {children}
          {showArrow && (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </span>
        <div
          className="absolute inset-0 h-full w-0 bg-white/10 transition-all duration-300 group-hover:w-full"
          style={{ zIndex: 0 }}
        />
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
