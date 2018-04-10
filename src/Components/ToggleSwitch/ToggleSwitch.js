import React from 'react';

import './ToggleButton.css';

function ToggleSwitch(props) {
    return (
        <label className="ToggleSwitch">
            <input type="checkbox" checked={props.nodeStatus} onChange={props.toggleEvent}/>
            <span className="slider round"></span>
        </label>
    )
}

export default ToggleSwitch;