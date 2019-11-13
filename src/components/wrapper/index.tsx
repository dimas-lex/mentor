import * as React from 'react';
import './index.css';

import { useState } from 'react';

type Props = {
    label: string;
    value?: string;
    children?: React.ReactNode;
};
 
export const Wrapper = ({ label, value, children }: Props) => { 
    const [toggle, setToggle] = useState(false);

    const onEditClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();

        setToggle(!toggle);
    }

    const childrenEl = children && React.Children.map(children, (el => el));

    return (
        <div className="wrapper" onClick={onEditClick}>
            <label>Bla Bla {label}</label>
            
            { (!toggle) ? (<div>{value}</div>) : null }

            { (toggle) ? (<div>Your Editer</div>) : null }
            { (toggle) ? childrenEl : null }

        </div>
    )
}
 