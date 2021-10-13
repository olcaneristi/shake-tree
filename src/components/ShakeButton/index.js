import React from 'react';

const ShakeButton = ({ onClick, title, className, disabled, image }) => {
  return (
    <button onClick={onClick} className={className ? `button ${className}` : 'button'} disabled={disabled}>
      {image && <img src={image} alt="icon" />} <p>{title}</p>
    </button>
  );
};

export default ShakeButton;
