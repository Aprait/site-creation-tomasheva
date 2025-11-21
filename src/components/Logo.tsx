import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold font-heading tracking-tight">
        <span className="text-accent">НТ</span>
        <span className="text-ink">омашёва</span>
      </span>
    </div>
  );
};

export default Logo;