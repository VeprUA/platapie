import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import './NodeItem.css';

class NodeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false
        }
    }

    handleChange = (event) => {
        // TODO: Send event to electron to start or close process
        this.setState({isRunning: !this.state.isRunning});
    }

    render() {
        return (
            <Col xs={12}>
                <div className="Node">
                    <Row middle="xs">
                        <Col xs={10} lg={11}>
                            <div className="title"><Link to={{pathname: `/nodes/${this.props.nodeId}`}}>Web-client</Link></div>
                            <div className="subheader">Running for 45 min | src/modules/web-client</div>
                        </Col>
                        <Col xs={2} lg={1}>
                            <ToggleSwitch nodeStatus={this.state.isRunning} toggleEvent={this.handleChange}/>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }

}

export default NodeItem;