"use strict";

class Node {
    constructor (data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}

class LinkedList {

    constructor(data) {

        this.head = null;
        this.tail = null;

        if (data) {
            this.head = new Node(data);
        }
    }
}

export {LinkedList};