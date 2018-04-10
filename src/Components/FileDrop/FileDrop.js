import React, { Component } from 'react';

import './FileDrop.css';

const ipcRenderer = window.electron ? window.electron.ipcRenderer : null;

class FileDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFileUploadComplete: false,
            styleClass: ''
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
        
            this.props.fileStateResponse({
                filePath: file.path
            });
    
            // Pass the information to electron to load the file
            if(ipcRenderer) {
                const payload = {
                    path: file.path
                }
                ipcRenderer.send('file.drop', payload);
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
            styleClass : 'active'
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
            return;
        }

        console.log(payload.contents);
    }

    render() {
        return (
            <div id="file-drop" 
                className={this.state.styleClass} 
                onDragOver={this.handleFileDragOver}
                onDrop={this.handleFileDrop}
                onDragLeave={this.handleDragExit} >
                Place file here
            </div>
        )
    }
}

export default FileDrop;
