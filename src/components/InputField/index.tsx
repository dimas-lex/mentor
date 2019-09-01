import * as React from 'react';
import './index.css';
import { string } from 'prop-types';


interface InputFieldInterface extends React.HTMLAttributes<HTMLDivElement> {
    label: string,
    validationFn: (val: string) => boolean,
}; 

const InputField = React.memo((props: InputFieldInterface) => {
    const [isValid, setValidation] = React.useState(true);
    const [value, setValue] = React.useState('');
  
  
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = e.currentTarget.value;
      const iValue = parseFloat(value)
  
      setValidation((iValue > 10));
      setValue(value);
    }
  
    return (
      <div className={['tinput', props.className].join(' ')}>
        <label className="input-field">
          {props.label}
          <input
            className="tinput_input"
            {...props}
            value={value}
            onChange={onChange}
          />
        </label>
        <div className={['tinput_error', !isValid && 'tinput_error--visible' ].join(' ')}>
          Some error message;
        </div>
      </div>
    );
  });
  
  export default InputField;
  