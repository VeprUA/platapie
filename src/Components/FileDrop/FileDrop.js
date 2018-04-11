import React, { Component } from 'react';

import './FileDrop.css';

const ipcRenderer = window.electron ? window.electron.ipcRenderer : null;
const DEFAULT_FILE_DROP_TEXT = 'Drop package.json file here';

class FileDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileDropAreaText: DEFAULT_FILE_DROP_TEXT,
            styleClass: '',
            filePath: ''
        }
    }

    componentWillMount = () => {
        if(ipcRenderer){
            ipcRenderer.on('file.upload', this.handleUploadedContent);
        }
    }

    handleFileDrop = (event) => {
        event.preventDefault();

        if(event.dataTransfer.files.length >= 0){
            // Only allow one file to load
            const file = event.dataTransfer.files[0];
    
            // Pass the information to electron to load the file
            if(ipcRenderer) {
                const payload = {
                    path: file.path
                }
                ipcRenderer.send('file.drop', payload);

                this.setState({filePath: file.path});
            }
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
        if(payload.err) {
            console.log(payload.err);
            this.setState({
                fileDropAreaText: payload.err,
                styleClass: 'file-upload-failed'
            });
            return;
        }

        // Transfer file contents out of the component
        this.props.fileUploadComplete(payload);
        
        // Display currently loaded file
        this.setState({
            fileDropAreaText : payload.file_name,
            styleClass: 'file-upload-success'
        });
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
