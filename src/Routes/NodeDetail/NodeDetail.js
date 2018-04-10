import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Row, Col } from 'react-flexbox-grid';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay } from '@fortawesome/fontawesome-pro-light'

import FileDrop from '../../Components/FileDrop/FileDrop';

import './NodeDetail.css';

const DEFAULT_PROCESS_NAME = 'Untitled Process';

class NodeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeId: props.match.params.nodeId,
            processName: DEFAULT_PROCESS_NAME,
            fileLocationPath: ''
        }
    }

    componentDidMount() {
        // TODO: Pull the details from electron
        if(this.state.processName === DEFAULT_PROCESS_NAME){
            this.setState({processName : 'Web-Client'});
        }
    }

    handleTextChange = (event) => {
        const eventName = event.target.name;
        const eventValue = event.target.value;

        this.setState({ [eventName]: eventValue });
    }
    
    handleFileResponse = (fileResponse) => {
        console.log(fileResponse);
        this.setState({
            fileLocationPath : fileResponse.filePath
        });
    }

    render() {
        return (
            <Fragment>
                <div id="node-actions">
                    <Grid>
                        <Row middle="xs">
                            <Col id="node-actions-left" xs={6}>
                                <Link id="node-detail-go-back-link" to='/'>
                                    <FontAwesome icon={faAngleLeft} fixedWidth /> Back
                                </Link>
                            </Col>
                            <Col id="node-actions-right" xs={6} >
                            <FontAwesome icon={faPlay} fixedWidth /> Run
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <svg id="svg1Container" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <rect x="0" y="0" width="100" height="20" fill="#E0F5E0"/>
                    <text id="svg1ProccessSubHeader" x="10" y="8.7" fill="#777777">Process</text>
                    <text id="svg1ProccessTitle" x="10" y="12" fill="#5B5B5B">{ this.state.processName }</text>
                    <text id="svg1NodeId" x="90" y="8.7" textAnchor="end" fill="#5B5B5B">{ this.state.nodeId }</text>
                </svg>
                <Grid>
                    <form id="node-detail">
                        <Row middle="xs">
                            <Col xs={12}>
                                <FileDrop fileStateResponse={this.handleFileResponse} />
                            </Col>
                        </Row>
                        <Row middle="xs">
                            <Col xs={6}>
                                <label htmlFor="processName">Process name</label>
                                <input type="text" name="processName" value={ this.state.processName } onChange={ this.handleTextChange }/>
                            </Col>
                            <Col xs={6}>
                            </Col>
                        </Row>
                        <Row middle="xs">
                            <Col xs={6}>
                                <label htmlFor="fileLocationPath">Script location path</label>
                                <input type="text" name="fileLocationPath" value={ this.state.fileLocationPath } onChange={ this.handleTextChange }/>
                            </Col>
                            <Col xs={6}>
                            </Col>
                        </Row>
                    </form>
                </Grid>
          </Fragment>
        )
    }
}

export default NodeDetail;