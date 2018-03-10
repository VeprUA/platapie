import React, { Component, Fragment } from 'react';
import { Row } from 'react-flexbox-grid';

import Node from '../Node/Node';


class NodeList extends Component {

    render() {
        return (
            <Fragment>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
                <Row>
                    <Node />
                </Row>
            </Fragment>
        )
    }
}

export default NodeList;