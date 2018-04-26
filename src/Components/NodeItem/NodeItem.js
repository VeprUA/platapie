import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import './NodeItem.css';

class NodeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            node: props.node
        }
    }

    handleChange = (event) => {
        // TODO: Send event to electron to start or close process
        const newNode = {...this.state.node};
        newNode.isRunning = !this.state.node.isRunning;
        this.setState({node: newNode});
    }

    render() {
        return (
            <Col xs={12}>
                <div className="Node">
                    <Row middle="xs">
                        <Col xs={10} lg={11}>
                            <div className="title"><Link to={{pathname: `/nodes/${this.state.node.id}`}}>{ this.state.node.processName }</Link></div>
                            <div className="subheader">...{ this.state.node.fileLocation.substring(this.state.node.fileLocation.length - 50) }</div>
                        </Col>
                        <Col xs={2} lg={1}>
                            <ToggleSwitch nodeStatus={this.state.node.isRunning} toggleEvent={this.handleChange}/>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }

}

export default NodeItem;