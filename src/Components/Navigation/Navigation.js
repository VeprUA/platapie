import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './Navigation.css';

import CreateButton from './CreateButton/CreateButton';

class Navigation extends Component {

    render() {
        return (
            <div className="Navigation">
                <Grid>
                    <Row end="xs" middle="xs" >
                        <Col xs={12}>
                            <CreateButton />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Navigation
