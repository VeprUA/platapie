import React, { Component } from 'react';

import FileDrop from '../../../Components/FileDrop/FileDrop';
import TextInput from '../../../Components/TextInput/TextInput';

import './Settings.css';

class Settings extends Component {
    
    handleRemove = () => {
        this.props.onNodeRemove(this.props.node);
    }

    render = () => {
        return (
            <div id="Settings">
                <FileDrop fileUploadComplete={this.props.onFileUploadComplete} />

                {/* Process Name */}
                <TextInput  
                    inputId="node-name"
                    name="processName"
                    value={this.props.node.processName}
                    onChange={(e) => this.props.handleTextChange(e)}
                    labelText="Process Name"/>

                {/* Version */}
                <TextInput  
                    inputId="node-version"
                    name="version"
                    value={this.props.node.version}
                    onChange={(e) => this.props.handleTextChange(e)}
                    labelText="Version"/>

                {/* File Location */}
                <TextInput  
                    inputId="node-location"
                    name="fileLocation"
                    value={this.props.node.fileLocation}
                    onChange={(e) => this.props.handleTextChange(e)}
                    labelText="File Location"/>

                {/* Remove */}
                <div onClick={() => this.handleRemove()}>Remove</div>
            </div>
        )
    }
}

export default Settings;