import React, { Component, Fragment } from 'react';
import { Row } from 'react-flexbox-grid';
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

    render() {
        let renderedNodeList = this.state.nodeList.map((node) => {
            return (
                <Row key={node.id}>
                    <Node nodeId={node.id}/>
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