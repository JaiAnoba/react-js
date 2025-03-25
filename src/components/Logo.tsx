import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  textColor?: string;
}

const Logo = ({ textColor = 'text-white' }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center no-underline">
      <div className="h-8 w-8 relative">
        <div className="absolute inset-0 bg-brand-red" style={{ clipPath: 'polygon(0 0, 50% 0, 100% 50%, 100% 100%, 50% 100%, 0 50%)' }}></div>
        <div className="absolute inset-0 bg-brand-red rotate-90" style={{ clipPath: 'polygon(0 0, 50% 0, 100% 50%, 100% 100%, 50% 100%, 0 50%)' }}></div>
      </div>
      <span className={`ml-2 text-xl font-bold ${textColor}`}>orxist</span>
    </Link>
  );
};

export default Logo;