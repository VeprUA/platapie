import React, { Component, Fragment } from 'react';
import { Grid } from 'react-flexbox-grid';

import NodeListBanner from '../../Components/NodeListBanner/NodeListBanner';
import NodeList from '../../Containers/NodeList/NodeList';
import Node from '../../Models/Node.model';
import NodeService from '../../Services/NodeService.service';

const nodeService = new NodeService();

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeList: nodeService.getNodeList()
        }
    }

    loadNodeList = () => {
       this.setState({
           nodeList: [...nodeService.getNodeList()]
       });
    }

    createNewNode = () => {
        nodeService.addNode(new Node());
        this.loadNodeList();
    }

    render(){
        return (
            <Fragment>
                <NodeListBanner addNewNode={this.createNewNode}/>
                <Grid>
                    <NodeList nodeList={this.state.nodeList}/>
                </Grid>
            </Fragment>
          )
    }
}

export default Home;