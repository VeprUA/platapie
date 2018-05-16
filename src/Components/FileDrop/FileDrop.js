import React, { Component } from 'react';
import Electron from '../../Services/Electron.service';

import './FileDrop.css';

const DEFAULT_FILE_DROP_TEXT = 'Drop package.json file here';

class FileDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileDropAreaText: DEFAULT_FILE_DROP_TEXT,
            styleClass: '',
            filePath: ''
        }

        Electron.ipcRenderer.on('file.upload', this.handleUploadedContent);
    }

    componentWillMount = () => {
        
    }

    handleFileDrop = (event) => {
        event.preventDefault();

        if(event.dataTransfer.files.length >= 0){
            // Only allow one file to load
            const file = event.dataTransfer.files[0];
    
            // Pass the information to electron to load the file
            const payload = {
                path: file.path
            }
            Electron.ipcRenderer.send('file.drop', payload);

            this.setState({filePath: file.path});

            // TODO: support online
            
        }
       
        // Use DataTransfer interface to remove the drag data
        event.dataTransfer.clearData();

        // Clear style
        this.setState({styleClass: ''});
    }

    handleFileDragOver = (event) => {
        this.setState({
            fileDropAreaText: DEFAULT_FILE_DROP_TEXT,
            styleClass : 'file-drag'
        });

        event.preventDefault();
    }

    handleDragExit = (event) => {
        this.setState({
            styleClass: ''
        });

        event.preventDefault();
    }

    handleUploadedContent = (event, payload) => {
        console.log(event);
        if(payload.err) {
            this.setState({
                fileDropAreaText: payload.err,
                styleClass: 'file-upload-failed'
            });
            return;
        }

        // Transfer file contents out of the component
        this.props.fileUploadComplete(payload);
    }

    render() {
        return (
            <div id="file-drop" 
                className={this.state.styleClass} 
                onDragOver={this.handleFileDragOver}
                onDrop={this.handleFileDrop}
                onDragLeave={this.handleDragExit} >
                { this.state.fileDropAreaText }
            </div>
        )
    }
}

export default FileDrop;
