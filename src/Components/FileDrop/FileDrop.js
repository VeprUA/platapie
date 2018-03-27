import React, { Component } from 'react';

import './FileDrop.css';

class FileDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleClass: ''
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

    render() {
        return (
            <div id="file-drop" className={this.state.styleClass} onDrop={this.handleFileDrop} onDragOver={this.handleFileDragOver}>
                Place file here
            </div>
        )
    }
}

export default FileDrop;
