// CustomButton.jsx
import React from 'react';

const CustomButton = ({ label, onClick, style }) => {
  return (
            <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default CustomButton;
