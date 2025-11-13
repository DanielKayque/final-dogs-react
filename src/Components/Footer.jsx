import React from 'react';
import Dogs from '../images/Assets/dogs.svg?react';

const Footer = () => {
  return (
    <div className=" flex items-center justify-center h-44 gap-2 bg-[#FABD01] flex-col">
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </div>
  );
};

export default Footer;
