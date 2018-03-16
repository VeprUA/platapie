import React, { Component, Fragment } from 'react';
import { Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import history from 'history/createBrowserHistory';

import Node from '../Node/Node';


class NodeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            nodeList: [
                {id: '001'},
                {id: '002'},
                {id: '003'},
                {id: '004'}
            ]
        }
    }

    clickHandler = (nodeId) => {
        let location = {
            pathname: `/node/${nodeId}`
        }
        history.push(location);
    }

    render() {
        let renderedNodeList = this.state.nodeList.map((node) => {
            return (
                <Row key={node.id}>
                    <Node onClick={this.clickHandler(node.id)}/>
                </Row>
            )
        })
        return (
            <Fragment>
                {renderedNodeList}
            </Fragment>
        )
    }
}

export default NodeList;