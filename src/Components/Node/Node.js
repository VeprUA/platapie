import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';

import './Node.css';

class Node extends Component {

    render() {
        return (
            <Col xs={12}>
                <div className="Node">
                    <Row middle="xs">
                        <Col xs={11}>
                            <div className="title">Web-client</div>
                            <div className="subheader">Running for 45 min | src/modules/web-client</div>
                        </Col>
                        <Col xs={1}>
                            <ToggleSwitch />
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }

}

export default Node;