
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnimatedCard = ({
  title,
  description,
  icon,
  className,
  onClick
}: AnimatedCardProps) => {
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

  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-xl bg-card text-card-foreground border border-border/40",
        "transition-all duration-300 hover:shadow-lg hover:border-primary/20",
        "transform hover:-translate-y-1 cursor-pointer",
        isPressed && "scale-95 shadow-sm bg-opacity-95",
        className
      )}
      onClick={onClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-5">{description}</p>
      
      <div className="flex items-center text-sm font-medium text-primary opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        Learn more
        <ArrowUpRight className="ml-1 h-3 w-3" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700" />
    </div>
  );
};

export { AnimatedCard };
