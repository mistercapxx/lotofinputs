import React from 'react';
import InputText from '../InputText/InputText';
import InputLabel from '../InputLabel/InputLabel';
import './InputGroup.css';

const InputGroup = ({ label, value, onChange, placeholder, disabled, error, focused, inputClass, inputStyle, largeFont, horizontal }) => {
  return (
    <div className={`input-group ${largeFont ? 'large-font' : ''} ${horizontal ? 'input-group-horizontal' : ''}`}>
      <InputLabel label={label} />
      <InputText
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        focused={focused}
        inputClass={inputClass}
        inputStyle={inputStyle}
      />
    </div>
  );
};

export default InputGroup;