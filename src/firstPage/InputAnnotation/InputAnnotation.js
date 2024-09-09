import React from 'react';
import './InputAnnotation.css';

const InputAnnotation = ({ annotation, error }) => {
  return <span className={`input-annotation ${error ? 'error' : ''}`}>{annotation}</span>;
};

export default InputAnnotation;
