import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { Route, Switch, Redirect } from 'react-router-dom';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay } from '@fortawesome/fontawesome-pro-light';
import uuid from 'uuid/v4'
import NodeService from '../../Services/NodeService.service';

// Routes
import Settings from './SettingsRoute/Settings';
import Scripts from './ScriptsRoute/Scripts';
import Dependencies from './DependenciesRoute/Dependencies';

import LoadingFrame from '../../Components/LoadingFrame/LoadingFrame';
import NodeDetailNavigation from '../../Components/NodeDetailNavigation/NodeDetailNavigation';

import './NodeDetail.css';

class NodeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            node: NodeService.getNode(this.props.match.params.nodeId)
        }
    }

    handleFileUploadComplete = (file) => {
        let node = {...this.state.node};

        // Update node instance
        node.processName = file.contents.name;
        node.scripts = file.contents.scripts;
        node.dependencies = file.contents.dependencies;
        node.fileLocation = file.file_path;
        
        NodeService.saveNode(node);

        this.setState({
            node: node
        });
    }

    handleScriptSelection = (script) => {
        // Pass the script to electron to start new process
        console.log(script);
    }

    handleTextChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue  = event.target.value;
        const node = {...this.state.node};

        if(fieldName in this.state.node){
            node[fieldName] = fieldValue;

            NodeService.saveNode(node);
            this.setState({
                node: {...node}
            });
        }
    }

    handleNodeRemoval = (node) => {
        NodeService.removeNode(node);
        this.props.history.push('/nodes');
    }

    renderPage = () => {
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
                                render={(props) => <Settings node={this.state.node}
                                                             onNodeRemove={this.handleNodeRemoval}
                                                             onFileUploadComplete={this.handleFileUploadComplete}
                                                             handleTextChange={this.handleTextChange} />}/>
                            <Route 
                                path='/nodes/:nodeId/dependencies'
                                render={(props) => <Dependencies dependencies={this.state.node.dependencies} />}/>
                            <Redirect from="/nodes/:nodeId/" to="/nodes/:nodeId/scripts"/>
                        </Switch>
                    </div>
                </div>
          </Fragment>
        )
    }

    render() {

        return this.renderPage();
        
    }
}

export default NodeDetail;