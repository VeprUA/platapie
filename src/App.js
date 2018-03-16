import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import { Grid } from 'react-flexbox-grid';

import ElectronSupportBanner from './Components/ElectronSupportBanner/ElectronSupportBanner';
import Navigation from './Components/Navigation/Navigation';
import NodeList from './Components/Node-List/NodeList';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/node/:nodeId' component={NodeDetail} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

function Home(props){
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

function NodeDetail(props){
  return(
    <Fragment>
      <div>OM AH AITS A FRAGMENT {props.match.params.nodeId} </div>
      <Link to='/'>HOME</Link>
    </Fragment>
  )
}

export default App;
