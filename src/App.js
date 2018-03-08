import React, { Component } from 'react';
import './App.css';

import ElectronSupportBanner from './Components/ElectronSupportBanner/ElectronSupportBanner';
import Mail from './Components/Mail/Mail';

class App extends Component {
  componentDidMount = () => {
  };

  render() {
    return (
      <div className="App">
        <ElectronSupportBanner />
        Some Awesome app
        <Mail />
      </div>
    );
  }
}

export default App;
