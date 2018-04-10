import React, { Component, Fragment } from 'react';
import { Row } from 'react-flexbox-grid';
import Node from '../../Components/NodeItem/NodeItem';
import uuid from 'uuid/v4'


class NodeList extends Component {
    constructor(props){
        super(props);
        // TODO Fetch list of nodes from electron
        this.state = {
            nodeList: [
                {id: uuid()},
                {id: uuid()},
                {id: uuid()},
                {id: uuid()}
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