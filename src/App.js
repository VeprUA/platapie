import React, { Component } from 'react';
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
        <ElectronSupportBanner />
        <Navigation />
        <Grid>
          <NodeList/>
        </Grid>
      </div>
    );
  }
}

export default App;
