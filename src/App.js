import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Grid } from 'react-flexbox-grid';

import ElectronSupportBanner from './Components/ElectronSupportBanner/ElectronSupportBanner';
import Navigation from './Components/Navigation/Navigation';
import NodeList from './Components/Node-List/NodeList';
import NodeDetail from './Components/Node-Detail/Node-Detail';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/nodes/:nodeId' component={NodeDetail} />
          <Route path='/' component={HomeRoute} />
        </Switch>
      </div>
    );
  }
}

function HomeRoute(props){
  return (
    <Fragment>
      <ElectronSupportBanner />
      <Navigation />
      <Grid>
        <NodeList/>
      </Grid>
    </Fragment>
  )
}

export default App;
