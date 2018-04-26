import React, { Component, Fragment } from 'react';
import { Row } from 'react-flexbox-grid';
import NodeItem from '../../Components/NodeItem/NodeItem';
import uuid from 'uuid/v4'


class NodeList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let renderedNodeList = this.props.nodeList.map((node) => {
            return (
                <Row key={node.id}>
                    <NodeItem node={node}/>
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