import React from 'react';

import './TextInput.css';

let TextInput = (props) => {
    return (
        <div className="text-input">
            <input  id={props.inputId} 
                    type="text" 
                    placeholder={props.placeHolderText} 
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}/>
            <label htmlFor={props.inputId}>{props.labelText}</label>
        </div>
    );
}

export default TextInput;