import uuid from 'uuid/v4';

const DEFAULT_PROCESS_NAME = 'Untitled';

class Node {
    constructor(_processName = DEFAULT_PROCESS_NAME, _scripts = {}) {
        this.id = uuid();
        this.processName = _processName;
        this.scipts = _scripts;
        this.version = '0.0.0';
        this.dependencies = {};
        this.fileLocation = '';
        this.isRunning = false;
    }

    /**
     * Describes whether the node contains any scripts
     * 
     * @memberof Node
     * @return {Boolean}
     */
    containsScripts = () => {
        return this.numberOfScripts() > 0
    }

    /**
     * Returns the number of scripts in a node
     * 
     * @memberof Node
     * @return {Number}
     */
    numberOfScripts = () => {
        return Object.keys(this.scipts).length;
    }
}

export default Node;