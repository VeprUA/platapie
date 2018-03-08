import React, { Component } from 'react';
import './App.css';

import ElectronSupportBanner from './Components/ElectronSupportBanner/ElectronSupportBanner';

class App extends Component {
  componentDidMount = () => {
  };

  render() {
    return (
      <div className="App">
        <ElectronSupportBanner />
        Some Awesome app
      </div>
    );
  }
}

export default App;
