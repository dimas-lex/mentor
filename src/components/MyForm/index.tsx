import * as React from 'react';
import { FormState } from '../../types/FormState';
import { FormProps } from '../../types/FormProps'; 

import InputField from '../InputField';
import InputTextField from '../InputTextField';
 
interface MyFormInterface  extends React.HTMLAttributes<HTMLDivElement>, FormProps {}



export class MyForm  extends React.Component<MyFormInterface, FormState> {

    constructor(props: MyFormInterface) {
        super(props);
        this.state = { 
            address: '11',
            fullName: '11'
         };
      }

    render() {
        
        const attributes = {
            tabIndex: this.props.tabIndex,
            "aria-label": this.props["aria-label"]
        };

        return (
            <div {...attributes}>
                test
                <InputField 
                    label="Some label" 
                    validationFn={(val: string)  => (String(val).length > 3)}
                    onChange={(ev) => {
                        console.log(ev)
                    }} />
                <InputTextField
                    label="Some label with State" 
                    value={this.state.address || ''} 
                    validationFn={(val: string)  => (String(val).length > 3)}
                    
                    onChange={(ev) => {
                        console.log(ev)
                        console.log(this.state)
                        this.setState({
                            address: ev,
                        })
                    }} />
                
            </div>
        );
    }
}