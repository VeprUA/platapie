import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './NodeListBanner.css';

import CreateButton from './../CreateButton/CreateButton';

class NodeListBanner extends Component {
    
    render() {
        return (
            <div className="NodeListBanner">
                <Grid>
                    <Row end="xs" middle="xs" >
                        <Col xs={12}>
                            <CreateButton onClickEvent={this.props.addNewNode}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default NodeListBanner
