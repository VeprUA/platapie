import React, { Component } from 'react';

class Scripts extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = { 
            scripts: null
        }
    }

    componentDidMount = () => {
        if(!this.state.scripts){
            this.setState({scripts: this.props.scripts});
        }
    }

    render() {
        let scripts = <li>No scripts found</li>;

        if(this.state.scripts && Object.keys(this.state.scripts).length > 0){
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