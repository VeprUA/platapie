import React, { Component } from 'react';
import uuid from 'uuid/v4'

import './ScriptList.css';

class ScriptList extends Component{

    render() {
        let scriptListElement = (<li>No scripts availble</li>);

        if(Object.keys(this.props.scripts).length > 0) {
            scriptListElement = Object.keys(this.props.scripts).map((key) => {
                return (
                    <li key={uuid()} className="populated" onClick={() => {this.props.onScriptSelect(key)}}>{`${key}`}</li>
                )
            });
        }

        return (
            <div id="ScriptList">
                <ul>
                    {scriptListElement}
                </ul>
            </div>
        );
    }
}

export default ScriptList;