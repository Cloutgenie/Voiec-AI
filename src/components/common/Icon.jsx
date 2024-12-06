import React from 'react';

const Icon = ({ icon: IconComponent, className = '', ...props }) => {
  if (!IconComponent) return null;
  
  return <IconComponent className={`w-5 h-5 ${className}`} {...props} />;
};

export default Icon;