import * as React from 'react';
import './index.css'; 

type ExtendInputType = {
  label: string,
  min?: number,
  max?: number,
  validationFn?: (val: any) => boolean, 
  onChange?: (e: string) => void
};

type Modify<T, R> = Omit<T, keyof R> & R;
type InputFieldInterface = Modify<React.HtmlHTMLAttributes<HTMLInputElement>, ExtendInputType>

const InputField = React.memo((props: InputFieldInterface) => {
  const [isValid, setValidation] = React.useState(true); 
  const [value, setValue] = React.useState(props.defaultValue || ''); 
  
  
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = e.currentTarget.value;
      const iValue = parseFloat(value)
  
      setValidation(isValueValid(value, props)); 
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
  
  const isValueValid = (
    value: any,
    props: ExtendInputType
  ): boolean => {
    let isCorrect = true;
    if (props.min) {
      isCorrect = Number(value) > props.min;
    }
    if (isCorrect && props.max)  {
      isCorrect = Number(value) < props.max;
    }

    if(isCorrect && props.validationFn) {
      isCorrect = props.validationFn(value);
    }
    return isCorrect;
  }

  export default InputField;
  