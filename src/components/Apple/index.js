import React from 'react';
import AppleSVG from '../../assets/icons/apple.svg';

const Apple = ({ alt, className, style, width }) => {
  return (
    <>
      <img src={AppleSVG} alt={alt} className={className} style={style} width={width} />
    </>
  );
};

export default Apple;
