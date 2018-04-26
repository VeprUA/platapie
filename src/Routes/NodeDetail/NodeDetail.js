import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { Route, Switch } from 'react-router-dom';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay } from '@fortawesome/fontawesome-pro-light';
import uuid from 'uuid/v4'
import NodeService from '../../Services/NodeService.service';

// Routes
import Settings from './SettingsRoute/Settings';
import Scripts from './ScriptsRoute/Scripts';
import Dependencies from './DependenciesRoute/Dependencies';

import NodeDetailNavigation from '../../Components/NodeDetailNavigation/NodeDetailNavigation';

import './NodeDetail.css';

// Services
const nodeService = new NodeService();

class NodeDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            node: nodeService.getNode(props.match.params.nodeId)
        }
    }

    handleFileUploadComplete = (file) => {
        console.log(file);
        let node = {...this.state.node};

        // Update node instance
        node.processName = file.contents.name;
        node.scripts = file.contents.scripts;
        node.dependencies = file.contents.dependencies;
        node.fileLocation = file.file_path;
        
        nodeService.saveNode(node);

        this.setState({
            node: node
        });
    }

    handleScriptSelection = (script) => {
        // Pass the script to electron to start new process
        console.log(script);
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
                    <text id="svg1ProccessTitle" x="10" y="12" fill="#5B5B5B">{ this.state.node.processName }</text>
                    <text id="svg1NodeId" x="90" y="8.7" textAnchor="end" fill="#5B5B5B">{ this.state.node.id }</text>
                </svg>
                <div id="NodeDetailContent">
                    <div id="Navigation" >
                        <NodeDetailNavigation nodeId={this.state.node.id}/>
                    </div>
                    <div id="NestedRouterComponent">
                        <Switch>
                            <Route 
                                path='/nodes/:nodeId/scripts' 
                                render={(props) => <Scripts scripts={this.state.node.scripts} />} />
                            <Route 
                                path='/nodes/:nodeId/settings' 
                                render={(props) => <Settings onFileUploadComplete={this.handleFileUploadComplete} />}/>
                            <Route 
                                path='/nodes/:nodeId/dependencies'
                                render={(props) => <Dependencies dependencies={this.state.node.dependencies} />}/>
                        </Switch>
                    </div>
                </div>
          </Fragment>
        )
    }
}

export default NodeDetail;