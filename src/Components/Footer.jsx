import React from 'react';
import Dogs from '../images/Assets/dogs.svg?react';

const Footer = () => {
  return (
    <div className=" flex items-center justify-center h-44 gap-2 bg-[#FABD01] flex-col">
      <Dogs />
      <p className="text-gray-500">
        Vale ressaltar que esse projeto ainda está em desenvolvimento, irá
        apresentar falhas e pequenos bugs que logo serão corrigidos.
      </p>
      <a className="text-gray-800" href="mailto:daanielkayque@gmail.com">
        daanielkayque@gmail.com
      </a>
      <p>Dogs. Alguns direitos reservados.</p>
    </div>
  );
};

export default Footer;
