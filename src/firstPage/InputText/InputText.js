
import React from 'react';
import './InputText.css';

const InputText = ({ value, onChange, placeholder, disabled, error, focused,inputClass,inputStyle }) => {
  const borderStyle = focused && error ? { borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' } : {};

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input-text ${inputClass} ${error ? 'error' : ''} ${focused ? 'focused' : ''}`}
      style={{ ...inputStyle, ...borderStyle }}
    />
  );
};

export default InputText;
