import React, { useState } from 'react';
import './DarkInputGroup.css';
import { ReactComponent as HintIcon } from '../customs/hintIcon.svg';
import { ReactComponent as ShortKeyIcon } from '../customs/shortKeyIcon.svg';
import { ReactComponent as MagnifyingGlass } from '../customs/magnifyingGlass.svg';
import { ReactComponent as EmailHint } from '../customs/emailhint.svg';

const DarkInputGroup = ({ label,inputState = 'default'  }) => {
    const [isHintVisible, setHintVisible] = useState(false);
    const toggleHintVisibility = () => {
        setHintVisible(prevState => !prevState);
      };
  return (
    <div className="dark-input-group">
      <label className="dark-input-label">{label}
      <EmailHint className='dark-email-hint'/>
      </label>
      <div className="dark-input-wrapper">
        <span className="icon dark-search-icon"><MagnifyingGlass/></span>
        <input
   className={`dark-input-text ${inputState}`}
          type="text"
          placeholder="Input..."
        />
       <span className="icon dark-hint-icon"   onClick={toggleHintVisibility}  title="This is a hint to help user">
          <HintIcon />
        </span>
        <span className="icon dark-shortkey-icon">
            <ShortKeyIcon/>
        </span>
       
      </div>
      {isHintVisible && (
          <div className="dark-hint-text">This is a hint to help user</div>
        )}
    </div>
  );
};

export default DarkInputGroup;