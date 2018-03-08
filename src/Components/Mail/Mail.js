import React, { Component } from 'react';

let ipcRenderer;

class Mail extends Component{
    state = {
        renderMessage: ''
    };

    componentDidMount = () => {
        if(window.require){
            ipcRenderer = window.require('electron').ipcRenderer;

            ipcRenderer.on('test-reply', (event, arg) => {
                this.setState({renderMessage: arg});
            });

            ipcRenderer.send('test', 'hello from react');
        }
    }

    render() {
        return (
            <div>
                {this.state.renderMessage}
            </div>
        )
    }
}

export default Mail;