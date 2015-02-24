"use strict";

class TreeNode {

    constructor (left, right, data) {

        if (left) {
            this.left = left;
        }

        if (right) {
            this.right = right;
        }

        if (data) {
            this.data = data;
        }
    }

    getLeft () {
        return this.left;
    }

    getRight () {
        return this.right;
    }

    getData () {
        return this.data;
    }
}

class Tree {

    constructor(data) {
        //if (data) {
        //    this.root = new TreeNode(null, null, data);
        //}

        if (data) {
            this.root = data;
        }
    }

    // Note this should be private
    findByNode (data, node) {
        if (node === null) {
            return null;
        }

        let nodeData = node.getData();

        if (nodeData === data) {
            return node;
        }

        if (nodeData < data) {
            return this.findByNode(data, node.getRight());
        }

        if (nodeData > data) {
            return this.findByNode(data, node.getLeft());
        }
    }


    find(data) {
        return this.findByNode(data, this.root);
    }

    // Note this should be private
    preOrderTraversalByNode (node) {

        if (!node) {
            return;
        }

        // 'Visit' the node -- here we just print it out
        console.log(node);

        this.preOrderTraversalByNode(node.getLeft());
        this.preOrderTraversalByNode(node.getRight());
    }

    preOrderTraversal() {
        this.preOrderTraversalByNode(this.root);
    }

    // Note this should be private
    inOrderTraversalByNode (node) {

        if (!node) {
            return;
        }

        this.inOrderTraversalByNode(node.getLeft());

        // 'Visit' the node -- here we just print it out
        console.log(node);

        this.inOrderTraversalByNode(node.getRight());
    }

    inOrderTraversal() {
        this.inOrderTraversalByNode(this.root);
    }


    // Note this should be private
    postOrderTraversalByNode (node) {

        if (!node) {
            return;
        }

        this.postOrderTraversalByNode(node.getLeft());

        this.postOrderTraversalByNode(node.getRight());

        // 'Visit' the node -- here we just print it out
        console.log(node);
    }

    postOrderTraversal() {
        this.postOrderTraversalByNode(this.root);
    }

    convertArrayToTree(arr) {
        console.log(arr);
        
    }
}

export {TreeNode};
export {Tree};