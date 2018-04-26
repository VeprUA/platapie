import React from 'react';
import './CreateButton.css';

function CreateButton(props) {
    return (
        <button className="CreateButton" onClick={() => {props.onClickEvent()}}>New</button>
    )
}

export default CreateButton;