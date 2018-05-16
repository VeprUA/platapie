import { LOCALSTORAGE_NODE_LIST } from '../utils/constants.util';

class NodeService {
    constructor(){
        // Check to see if anything was saved under localstorage
        if(!localStorage.getItem(LOCALSTORAGE_NODE_LIST)){
            localStorage.setItem(LOCALSTORAGE_NODE_LIST, JSON.stringify([]));
        }
    }

    static getNode = (nodeId) => {
        return NodeService.getNodeList().find(node => node.id === nodeId);
    }

    static saveNode = (node) => {
        let nodeList = NodeService.getNodeList();
        let nodeIndex = nodeList.findIndex(nodeElement => nodeElement.id === node.id);

        if(nodeIndex === -1){
            NodeService.addNode(node);
            return;
        }

        // Update list with the new node
        nodeList[nodeIndex] = node;

        // Save the new list
        NodeService.saveNodeList(nodeList);
    }

    static getNodeList = () => {
        return JSON.parse(localStorage.getItem(LOCALSTORAGE_NODE_LIST));
    }

    static saveNodeList = (nodeList) => {
        localStorage.setItem(LOCALSTORAGE_NODE_LIST, JSON.stringify(nodeList));
    }

    static addNode = (node) => {
        let nodeList = NodeService.getNodeList();
        nodeList = [...nodeList, node];
        NodeService.saveNodeList(nodeList);
    }

    static removeNode = (node) => {
        console.log(node);
        let nodeList = NodeService.getNodeList();
        const newNodeList = nodeList.filter(nodeElement => nodeElement.id !== node.id);
        console.log(newNodeList);
        NodeService.saveNodeList(newNodeList);
    }
}

new NodeService();

export default NodeService;