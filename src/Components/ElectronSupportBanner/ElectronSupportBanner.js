import React, { Component } from 'react';

class ElectronSupportBanner extends Component {

    render() {
        let isRunningOnElectron = null;

        if( !window.require ) {
            isRunningOnElectron = 'Electron is not supported';
        }       
        return (
            <p>{isRunningOnElectron}</p>
        )
    }
}

export default ElectronSupportBanner;