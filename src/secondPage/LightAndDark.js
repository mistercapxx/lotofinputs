import React from 'react';
import LightInputGroup from './LightInputGroup/LightInputGroup';
import DarkInputGroup from './DarkInputGroup/DarkInputGroup';



const LightAndDark = () => {
  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      height: '800px', 
      gap: '16px' 
    }}>
      <div style={{ flex: 1,   padding: '20px', }}>
        <h2 style={{ textAlign: 'center' }}>Light Theme</h2>
        {['default', 'hover', 'focus', 'error', 'error-focus', 'disabled'].map((state, index) => (
          <LightInputGroup key={index} label={`Email ${index + 1}`} inputState={state} />
        ))}
      </div>

      <div style={{ flex: 1, backgroundColor: 'rgba(26, 26, 30, 1)',   padding: '20px', }}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>Dark Theme</h2>
        {['default', 'hover', 'focus', 'error', 'error-focus', 'disabled'].map((state, index) => (
          <DarkInputGroup key={index} label={`Email ${index + 1}`} inputState={state} />
        ))}
      </div>
</div>
  );
};

export default LightAndDark;