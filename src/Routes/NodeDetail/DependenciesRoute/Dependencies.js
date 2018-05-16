import React, {Component} from 'react';
import DependencyLink from '../../../Components/DependencyLink/DependencyLink';

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
                let url = `http://www.npmjs.com/package/${key}`;
                return (<DependencyLink key={index}>
                            <a href={url} target="_blank" >
                                {key}@{this.state.dependencies[key].substring(1)}
                            </a>
                        </DependencyLink>);
            });
        }

        return (
            <div>
                {dependecies}
            </div>
        )
    }
}

export default Dependencies;