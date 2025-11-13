import React from 'react';

const Button = ({ label }) => {
  return (
    <button className="bg-[#FABD01] py-3 px-9 rounded-lg border-transparent border-[3px] hover:border-[#FCECC3] hover:border-[3px] hover:ring-1 ring-[#FABD01] transition-all duration-200">
      {label}
    </button>
  );
};

export default Button;
