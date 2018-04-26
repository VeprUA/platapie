import React, { Component } from 'react';

import FileDrop from '../../../Components/FileDrop/FileDrop';

import './Settings.css';

class Settings extends Component {

    constructor(props){
        super(props);
        this.state = {
            fileLocationPath: '',
            fileContents: {}
        };
    }

    handleTextChange = (event) => {
        const eventName = event.target.name;
        const eventValue = event.target.value;

        this.setState({ [eventName]: eventValue });
    }

    handleFileUploadComplete = (fileResponse) => {

        this.setState({
            fileLocationPath : fileResponse.file_path,
            fileContents: {...fileResponse.contents}
        });

        this.props.onFileUploadComplete(fileResponse);
    }

    render = () => {
        let renderFileContents = null;

        if(this.state.fileContents.name) {
            renderFileContents = (
                <pre>
                    {JSON.stringify(this.state.fileContents, null, 2)}
                </pre>
            )
        }
        return (
            <div id="Settings">
                <FileDrop fileUploadComplete={this.handleFileUploadComplete} />
                { renderFileContents }
            </div>
        )
    }
}

export default Settings;