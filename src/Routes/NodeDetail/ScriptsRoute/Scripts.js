import React, { Component } from 'react';

class Scripts extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = { 
            scripts: props.scripts
        }
    }

    render() {
        let scripts = <li>No scripts found</li>;

        if(Object.keys(this.state.scripts).length > 0){
            scripts = Object.keys(this.state.scripts).map((key, index) => {
                return (
                    <li key={index}>{key}</li>
                )
            });
        }

        return (
            <ul>
                {scripts}
            </ul>
        )
    }
}

export default Scripts;