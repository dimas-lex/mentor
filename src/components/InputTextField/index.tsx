import * as React from 'react';
import './index.css';

type ExtendInputType = {
    label: string,
    min?: number,
    max?: number,
    validationFn?: (val: any) => boolean,
    onChange?: (e: string) => void,
    value?: string,
    isValid?: boolean,
    touched?: boolean,
};

type Modify<T, R> = Omit<T, keyof R> & R;
type InputFieldInterface = Modify<React.HtmlHTMLAttributes<HTMLInputElement>, ExtendInputType>

type InputState = {
    isValid: boolean,
    touched: boolean,
}

export default class InputTextField extends React.PureComponent<InputFieldInterface, InputState> {
    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: InputFieldInterface) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            touched: false,
            isValid: true,
        };
    }

    setValue(e: React.FormEvent<HTMLInputElement>) {
        const value = String(e.currentTarget.value);
        this.validate(value);
        this.props.onChange && this.props.onChange(value);
    }
    
    handleFocus() {
        this.validate(String(this.inputRef.current && this.inputRef.current.value));
    }

    handleBlur() {
        this.validate(String(this.inputRef.current && this.inputRef.current.value));
    }

    validate(value: string) {
        let isCorrect = true;
        if (this.props.min) {
            isCorrect = Number(value) > this.props.min;
        }
        if (isCorrect && this.props.max) {
            isCorrect = Number(value) < this.props.max;
        }

        if (isCorrect && this.props.validationFn) {
            isCorrect = this.props.validationFn(value);
        }

        this.setState({ isValid: isCorrect, touched: true })
        return isCorrect;
    }

    render() {
        const isValid = this.state && (!this.state.touched || this.state.isValid);

        return (
            <div className={['tinput', this.props.className].join(' ')}>
                <label className="input-field">
                    {this.props.label}
                </label>

                <input
                    type='text'
                    ref={this.inputRef}
                    value={this.props.value}
                    onFocus={() => this.handleFocus()}
                    onBlur={() => this.handleBlur()}
                    onChange={(e) => this.setValue(e)}
                />
                <div className={['tinput_error', !isValid && 'tinput_error--visible'].join(' ')}>
                    Some error message;
                </div>
            </div>
        )
    }
}