import React, {Component} from 'react';

class Dependencies extends Component {
    constructor(props){
        super(props);
        this.state = {
            dependencies: props.dependencies
        }
    }

    render () {
        let dependecies = <li>Nothing is found</li>;
        
        if(Object.keys(this.state.dependencies).length > 0){
            dependecies = Object.keys(this.state.dependencies).map((key, index) => {
                return (<li key={index}>{key}@{this.state.dependencies[key].substring(1)}</li>);
            });
        }

        return (
            <ul>
                {dependecies}
            </ul>
        )
    }
}

export default Dependencies;