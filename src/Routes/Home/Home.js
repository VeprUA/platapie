import React, { Component, Fragment } from 'react';
import { Grid } from 'react-flexbox-grid';

import NodeListBanner from '../../Components/NodeListBanner/NodeListBanner';
import NodeList from '../../Containers/NodeList/NodeList';
import Node from '../../Models/Node.model';
import NodeService from '../../Services/NodeService.service';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeList: NodeService.getNodeList()
        }
    }

    loadNodeList = () => {
       this.setState({
           nodeList: [...NodeService.getNodeList()]
       });
    }

    createNewNode = () => {
        NodeService.addNode(new Node());
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