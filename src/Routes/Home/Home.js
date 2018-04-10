import React, { Component, Fragment } from 'react';
import { Grid } from 'react-flexbox-grid';

import Navigation from '../..//Components/Navigation/Navigation';
import NodeList from '../../Containers/NodeList/NodeList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileLocationPath: ''
        }
    }

    render(){
        return (
            <Fragment>
                <Navigation />
                <Grid>
                    <NodeList/>
                </Grid>
            </Fragment>
          )
    }
}

export default Home;