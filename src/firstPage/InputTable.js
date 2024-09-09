
    import React, { useState } from 'react';
    import InputGroup from './InputGroup/InputGroup';
    import InputAnnotation from './InputAnnotation/InputAnnotation';
    import './InputTable.css';


    const InputTable = () => {
        const [values, setValues] = useState({
        default: '',
        hover: '',
        focus: '',
        error: '',
        errorFocus: '',
        disabled: '',
        defaultBold: '',
        hoverBold: '',
        focusBold: '',
        errorBold: '',
        errorFocusBold: '',
        disabledBold: '',
        errorFocusBold: '', 
        largeFontDefault: '',
        largeFontHover: '',
        largeFontFocus: '',
        largeFontError: '',
        largeFontErrorFocus: '',
        largeFontDisabled: '',
        largeFontDefaultBold: '',
        largeFontHoverBold: '',
        largeFontFocusBold: '',
        largeFontErrorBold: '',
        largeFontErrorFocusBold: '',
        largeFontDisabledBold: '',
        horizontalDefault: '',
        horizontalHover: '',
        horizontalFocus: '',
        horizontalError: '',
        horizontalErrorFocus: '',
        horizontalDisabled: '',
        horizontalDefaultBold: '',
        horizontalHoverBold: '',
        horizontalFocusBold: '',
        horizontalErrorBold: '',
        horizontalErrorFocusBold: '',
        horizontalDisabledBold: '',
        });

        const handleChange = (key, value) => {
            setValues({ ...values, [key]: value });
        };
        return (
            <div className="input-table">
            <div className="column">
                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.default}
                    onChange={(e) => handleChange('default', e.target.value)}
                    placeholder="Input..."
                />
                <InputAnnotation annotation="Default Input" />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.hover}
                    onChange={(e) => handleChange('hover', e.target.value)}
                    placeholder="Input..."
                    focused={false}
                />
                <InputAnnotation annotation="Hover Input" />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.focus}
                    onChange={(e) => handleChange('focus', e.target.value)}
                    placeholder="Input..."
                    focused={true}
                />
                <InputAnnotation annotation="Focus Input" />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.error}
                    onChange={(e) => handleChange('error', e.target.value)}
                    placeholder="Input..."
                    error={values.error === ''}
                />
                <InputAnnotation
                    annotation="Error Input"
                    error={values.error === ''}
                />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.errorFocus}
                    onChange={(e) => handleChange('errorFocus', e.target.value)}
                    placeholder="Input..."
                    error={values.errorFocus === ''}
                    focused={true}
                    inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
                />
                <InputAnnotation annotation="Error Focus Input" />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.disabled}
                    onChange={(e) => handleChange('disabled', e.target.value)}
                    placeholder="Input..."
                    disabled={true}
                />
                <InputAnnotation annotation="Disabled Input" />
                </div>

                <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontDefault}
                onChange={(e) => handleChange('largeFontDefault', e.target.value)}
                placeholder="Input..."
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Default Input" />
            </div>

            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontHover}
                onChange={(e) => handleChange('largeFontHover', e.target.value)}
                placeholder="Input..."
                focused={false}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Hover Input" />
            </div>

            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontFocus}
                onChange={(e) => handleChange('largeFontFocus', e.target.value)}
                placeholder="Input..."
                focused={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Focus Input" />
            </div>

            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontError}
                onChange={(e) => handleChange('largeFontError', e.target.value)}
                placeholder="Input..."
                error={values.largeFontError === ''}
                largeFont={true}
            />
            <InputAnnotation
                annotation="Large Font Error Input"
                error={values.largeFontError === ''}
            />
            </div>

            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontErrorFocus}
                onChange={(e) => handleChange('largeFontErrorFocus', e.target.value)}
                placeholder="Input..."
                error={values.largeFontErrorFocus === ''}
                focused={true}
                largeFont={true}
                inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
            />
            <InputAnnotation annotation="Large Font Error Focus Input" />
            </div>

            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontDisabled}
                onChange={(e) => handleChange('largeFontDisabled', e.target.value)}
                placeholder="Input..."
                disabled={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Disabled Input" />
            </div>
            </div>

            

            <div className="column">
                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.defaultBold}
                    onChange={(e) => handleChange('defaultBold', e.target.value)}
                    placeholder="Input..."
                    inputClass="bold-placeholder"
                />
                <InputAnnotation annotation="Default Bold Input" />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.hoverBold}
                    onChange={(e) => handleChange('hoverBold', e.target.value)}
                    placeholder="Input..."
                    inputClass="bold-placeholder"
                    focused={false}
                />
                <InputAnnotation annotation="Hover Bold Input" />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.focusBold}
                    onChange={(e) => handleChange('focusBold', e.target.value)}
                    placeholder="Input..."
                    inputClass="bold-placeholder"
                    focused={true}
                />
                <InputAnnotation annotation="Focus Bold Input" />
                </div>

                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.errorBold}
                    onChange={(e) => handleChange('errorBold', e.target.value)}
                    placeholder="Input..."
                    inputClass="bold-placeholder"
                    error={values.errorBold === ''}
                />
                <InputAnnotation annotation="Error Bold Input" />
                </div>
                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.errorFocus}
                    onChange={(e) => handleChange('errorFocus', e.target.value)}
                    placeholder="Input..."
                    error={values.errorFocus === ''}
                    inputClass="bold-placeholder"
                    focused={true}
                    inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
                />
                <InputAnnotation annotation="Error Focus Input" />
                </div>


                <div className="row">
                <InputGroup
                    label="Email"
                    value={values.disabledBold}
                    onChange={(e) => handleChange('disabledBold', e.target.value)}
                    placeholder="Input..."
                    inputClass="bold-placeholder"
                    disabled={true}
                />
                <InputAnnotation annotation="Disabled Bold Input" />
                </div>
                
                <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontDefaultBold}
                onChange={(e) => handleChange('largeFontDefaultBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Default Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontHoverBold}
                onChange={(e) => handleChange('largeFontHoverBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                focused={false}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Hover Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontFocusBold}
                onChange={(e) => handleChange('largeFontFocusBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                focused={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Focus Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontErrorBold}
                onChange={(e) => handleChange('largeFontErrorBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                error={values.largeFontErrorBold === ''}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Error Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontErrorFocusBold}
                onChange={(e) => handleChange('largeFontErrorFocusBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                error={values.largeFontErrorFocusBold === ''}
                focused={true}
                largeFont={true}
                inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
            />
            <InputAnnotation annotation="Large Font Error Focus Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.largeFontDisabledBold}
                onChange={(e) => handleChange('largeFontDisabledBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                disabled={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Font Disabled Bold Input" />
            </div>
            </div>


            <div className="column">
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDefault}
                onChange={(e) => handleChange('horizontalDefault', e.target.value)}
                placeholder="Input..."
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Default Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalHover}
                onChange={(e) => handleChange('horizontalHover', e.target.value)}
                placeholder="Input..."
                focused={false}
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Hover Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalFocus}
                onChange={(e) => handleChange('horizontalFocus', e.target.value)}
                placeholder="Input..."
                focused={true}
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Focus Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalError}
                onChange={(e) => handleChange('horizontalError', e.target.value)}
                placeholder="Input..."
                error={values.horizontalError === ''}
                horizontal={true}
            />
            <InputAnnotation
                annotation="Horizontal Error Input"
                error={values.horizontalError === ''}
            />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalErrorFocus}
                onChange={(e) => handleChange('horizontalErrorFocus', e.target.value)}
                placeholder="Input..."
                error={values.horizontalErrorFocus === ''}
                focused={true}
                horizontal={true}
                inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
            />
            <InputAnnotation annotation="Horizontal Error Focus Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDisabled}
                onChange={(e) => handleChange('horizontalDisabled', e.target.value)}
                placeholder="Input..."
                disabled={true}
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Disabled Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDefault}
                onChange={(e) => handleChange('horizontalDefault', e.target.value)}
        
                placeholder="Input..."
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Default Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalHover}
                onChange={(e) => handleChange('horizontalHover', e.target.value)}
                placeholder="Input..."
                focused={false}
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Hover Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalFocus}
                onChange={(e) => handleChange('horizontalFocus', e.target.value)}
                placeholder="Input..."
                focused={true}
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Focus Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalError}
                onChange={(e) => handleChange('horizontalError', e.target.value)}
                placeholder="Input..."
                error={values.horizontalError === ''}
                horizontal={true}
                largeFont={true}
                
            />
            <InputAnnotation
                annotation="Large Horizontal Error Input"
                error={values.horizontalError === ''}
            />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalErrorFocus}
                onChange={(e) => handleChange('horizontalErrorFocus', e.target.value)}
                placeholder="Input..."
                error={values.horizontalErrorFocus === ''}
                focused={true}
                horizontal={true}
                inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Error Focus Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDisabled}
                onChange={(e) => handleChange('horizontalDisabled', e.target.value)}
                placeholder="Input..."
                disabled={true}
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Disabled Input" />
            </div>
            </div>

            <div className="column">
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDefaultBold}
                onChange={(e) => handleChange('horizontalDefaultBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Default Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalHoverBold}
                onChange={(e) => handleChange('horizontalHoverBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                focused={false}
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Hover Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalFocusBold}
                onChange={(e) => handleChange('horizontalFocusBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                focused={true}
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Focus Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalErrorBold}
                onChange={(e) => handleChange('horizontalErrorBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                error={values.horizontalErrorBold === ''}
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Error Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalErrorFocusBold}
                onChange={(e) => handleChange('horizontalErrorFocusBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                error={values.horizontalErrorFocusBold === ''}
                focused={true}
                horizontal={true}
                inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
            />
            <InputAnnotation annotation="Horizontal Error Focus Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDisabledBold}
                onChange={(e) => handleChange('horizontalDisabledBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                disabled={true}
                horizontal={true}
            />
            <InputAnnotation annotation="Horizontal Disabled Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDefaultBold}
                onChange={(e) => handleChange('horizontalDefaultBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Default Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalHoverBold}
                onChange={(e) => handleChange('horizontalHoverBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                focused={false}
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Hover Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalFocusBold}
                onChange={(e) => handleChange('horizontalFocusBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                focused={true}
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Focus Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalErrorBold}
                onChange={(e) => handleChange('horizontalErrorBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                error={values.horizontalErrorBold === ''}
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Error Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalErrorFocusBold}
                onChange={(e) => handleChange('horizontalErrorFocusBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                error={values.horizontalErrorFocusBold === ''}
                focused={true}
                horizontal={true}
                inputStyle={{ borderColor: 'var(--Colors-Border-border-error, rgba(253, 162, 155, 1))' }} 
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Error Focus Bold Input" />
            </div>
            <div className="row">
            <InputGroup
                label="Email"
                value={values.horizontalDisabledBold}
                onChange={(e) => handleChange('horizontalDisabledBold', e.target.value)}
                placeholder="Input..."
                inputClass="bold-placeholder"
                disabled={true}
                horizontal={true}
                largeFont={true}
            />
            <InputAnnotation annotation="Large Horizontal Disabled Bold Input" />
            </div>
                </div>
            </div>
        );
    };

                export default InputTable;
