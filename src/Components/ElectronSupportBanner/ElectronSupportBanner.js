import React, { Component } from 'react';

import './ElectronSupportBanner.css';

class ElectronSupportBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunningOnElectron: !!window.electron
        }
    }

    render() {
        return !this.state.isRunningOnElectron ? (
            <div className="ElectronSupportBanner">
                <p>Application is not mounted in electron</p>
            </div>
        ) : null;
    }
}

export default ElectronSupportBanner;