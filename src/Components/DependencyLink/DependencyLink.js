import React from 'react';

import './DependencyLink.css';

let DependencyLink = (props) => {
    return (
        <div className="dependency-link">
            {props.children}
        </div>
    )
}

export default DependencyLink;