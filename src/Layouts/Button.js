import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children} <span></span>
    </button>
  );
};

export default Button;
