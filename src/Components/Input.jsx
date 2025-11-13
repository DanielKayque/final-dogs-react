import React from 'react';

const Input = ({ label, value, setValue, id, type }) => {
  
  return (
    <label htmlFor={id}>
      {label}
      <input
        className="bg-gray-200 py-2 px-5 rounded-lg focus:outline-[#FABD01] block"
        type={type}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </label>
  );
};

export default Input;
