import React from 'react';

const Badge = ({ children, bgColor = 'bg-white', textColor = 'text-blue-600', className = '' }) => {
  return (
    <span
      className={`${bgColor} ${textColor} font-bold py-1 px-3 rounded-md text-sm uppercase ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;