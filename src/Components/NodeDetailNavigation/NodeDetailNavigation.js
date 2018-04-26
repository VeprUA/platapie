import React from 'react';
import { Link } from 'react-router-dom';

import './NodeDetailNavigation.css';

const NodeItemNavigation = (props) =>  (
    <div id="NodeDetailNavigation">
        <ul>
            <li>
                <Link to={{pathname:`/nodes/${props.nodeId}/settings`}}>Settings</Link>
            </li>
            <li>
                <Link to={{pathname:`/nodes/${props.nodeId}/scripts`}}>Scripts</Link>
            </li>
            <li>
                <Link to={{pathname:`/nodes/${props.nodeId}/dependencies`}}>Dependencies</Link>
            </li>
        </ul>
    </div>
)


export default NodeItemNavigation;