import React from 'react';

interface SocialButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
  children: React.ReactNode;
}

const SocialButton = ({ provider, onClick, children }: SocialButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="social-button flex items-center justify-center gap-2 w-full border border-gray-200 rounded py-3 px-4 font-medium transition-all hover:border-gray-300 hover:shadow-sm duration-300"
    >
      {children}
    </button>
  );
};

export default SocialButton;