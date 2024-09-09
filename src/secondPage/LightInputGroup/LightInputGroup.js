import React, { useState } from 'react';
import './LightInputGroup.css';
import { ReactComponent as HintIcon } from '../customs/hintIcon.svg';
import { ReactComponent as ShortKeyIcon } from '../customs/shortKeyIcon.svg';
import { ReactComponent as MagnifyingGlass } from '../customs/magnifyingGlass.svg';
import { ReactComponent as EmailHint } from '../customs/emailhint.svg';

const LightInputGroup = ({ label,inputState = 'default'  }) => {
    const [isHintVisible, setHintVisible] = useState(false);
    const toggleHintVisibility = () => {
        setHintVisible(prevState => !prevState);
      };
  return (
    <div className="light-input-group">
      <label className="light-input-label">{label}
      <EmailHint className='light-email-hint'/></label>
      <div className="light-input-wrapper">
        <span className="icon light-search-icon"><MagnifyingGlass/></span>
        <input
         className={`light-input-text ${inputState}`}
          type="text"
          placeholder="Input..."
        />
         <span className="icon light-hint-icon"  onClick={toggleHintVisibility}  title="This is a hint to help user">
          <HintIcon />
        </span>
        <span className="icon light-shortkey-icon">
            <ShortKeyIcon/>
        </span>
      </div>
      {isHintVisible && (
          <div className="light-hint-text">This is a hint to help user</div>
        )}
    </div>
  );
};

export default LightInputGroup;