
import React from 'react';

interface BackgroundLinesProps {
  className?: string;
}

const BackgroundLines = ({ className }: BackgroundLinesProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20 dark:opacity-10"
        >
          {/* Horizontal lines */}
          <line x1="0" y1="100" x2="1440" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
          <line x1="0" y1="300" x2="1440" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
          <line x1="0" y1="500" x2="1440" y2="500" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
          <line x1="0" y1="700" x2="1440" y2="700" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
          
          {/* Vertical lines */}
          <line x1="200" y1="0" x2="200" y2="800" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
          <line x1="600" y1="0" x2="600" y2="800" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
          <line x1="1000" y1="0" x2="1000" y2="800" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
          <line x1="1400" y1="0" x2="1400" y2="800" stroke="currentColor" strokeWidth="1" strokeDasharray="1, 30" />
        </svg>
      </div>
    </div>
  );
};

export { BackgroundLines };
