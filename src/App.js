import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ElectronSupportBanner from './Components/ElectronSupportBanner/ElectronSupportBanner';
import NodeDetail from './Routes/NodeDetail/NodeDetail';
import Home from './Routes/Home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ElectronSupportBanner />
        <Switch>
          <Route path='/nodes/:nodeId' component={NodeDetail} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
