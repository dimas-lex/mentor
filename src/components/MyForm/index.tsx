import * as React from 'react';
import { FormState } from '../../types/FormState';
import { FormProps } from '../../types/FormProps'; 

import InputField from '../InputField';
 
interface MyFormInterface  extends React.HTMLAttributes<HTMLDivElement>, FormProps {}

export class MyForm  extends React.Component<MyFormInterface, FormState> {

    render() {
        
        const attributes = {
            tabindex: this.props.tabIndex,
            ["aria-label"]: this.props["aria-label"]
        };

        return (
            <div {...attributes}>
                test
                <InputField label="Some label" validationFn={(val: string)  => (String(val).length > 3)} />
            </div>
        );
    }
}