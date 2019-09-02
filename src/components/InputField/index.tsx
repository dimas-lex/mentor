import * as React from 'react';
import './index.css'; 

// interface InputFieldInterface extends React.HTMLAttributes<HTMLInputElement> {
//     label: string,
//     validationFn: (val: string) => boolean, 
//     onChange: (e: React.FormEvent<HTMLInputElement>) => void
 
// }; 

type Modify<T, R> = Omit<T, keyof R> & R;
type InputFieldInterface = Modify<React.HtmlHTMLAttributes<HTMLInputElement>, {
  label: string,
  validationFn: (val: string) => boolean, 
  onChange: (e: string) => void
}>

const InputField = React.memo((props: InputFieldInterface) => {
  const [isValid, setValidation] = React.useState(true); 
  const [value, setValue] = React.useState(props.defaultValue); 
  
  
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = e.currentTarget.value;
      const iValue = parseFloat(value)
  
      setValidation((iValue > 10)); 
      setValue(value);
      props.onChange && props.onChange(String(iValue));
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
  