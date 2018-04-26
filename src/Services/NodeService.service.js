import { LOCALSTORAGE_NODE_LIST } from '../utils/constants.util';

class NodeService {
    constructor(){
        // Check to see if anything was saved under localstorage
        if(!localStorage.getItem(LOCALSTORAGE_NODE_LIST)){
            localStorage.setItem(LOCALSTORAGE_NODE_LIST, JSON.stringify([]));
        }
    }

    getNode = (nodeId) => {
        return this.getNodeList().find(node => node.id === nodeId);
    }

    saveNode = (node) => {
        let nodeList = this.getNodeList();
        let nodeIndex = nodeList.findIndex(nodeElement => nodeElement.id === node.id);

        if(nodeIndex === -1){
            this.addNode(node);
            return;
        }

        // Update list with the new node
        nodeList[nodeIndex] = node;

        // Save the new list
        this.saveNodeList(nodeList);
    }

    getNodeList = () => {
        return JSON.parse(localStorage.getItem(LOCALSTORAGE_NODE_LIST));
    }

    saveNodeList = (nodeList) => {
        localStorage.setItem(LOCALSTORAGE_NODE_LIST, JSON.stringify(nodeList));
    }

    addNode = (node) => {
        let nodeList = this.getNodeList();
        nodeList = [...nodeList, node];
        this.saveNodeList(nodeList);
    }

    removeNode = (node) => {
        let nodeList = this.getNodeList();
        const newNodeList = nodeList.filter(nodeElement => nodeElement.id === node.id);
        this.saveNodeList(newNodeList);
    }
}

export default NodeService;