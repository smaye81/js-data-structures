"use strict";

// Static properties
var findByIndex = function (index, head) {
    let count = 0;
    let node = head;

    while (node !== null) {
        if (count === index) {
            return node;
        }

        count += 1;
        node = node.next;
    }

    return null;
};

class Node {
    constructor (data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}

class LinkedList {

    /**
     * Constructor
     *
     * @param data
     */
    constructor(data) {

        this.head = null;
        this.tail = null;

        if (data) {
            let node = new Node(data);
            this.head = node;
            this.tail = node;
        }
    }

    /**
     * Appends the specified element to the end of this list
     *
     * @param data
     */
    add(data) {
        if (data) {
            let node = new Node(data);

            if (this.tail) {
                this.tail.next = node;
                node.prev = this.tail;
            } else {
                this.head = node;
            }

            this.tail = node;
        }
    }

    /**
     * Clears all elements from this list
     */
    clear() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Returns the element in this list at the given index.  If the element is not found
     * or index < 0 or index > the size of the list - 1, then function returns null
     *
     * @param index
     */
    get(index) {
        return findByIndex(index, this.head);
    }

    /**
     * Returns the size of the list
     *
     * @returns {number}
     */
    size() {
        let count = 0;
        let node = this.head;
        while (node !== null) {
            count += 1;
            node = node.next;
        }

        return count;
    }

    /**
     * Retrieves and removes the head (first element) of this list.
     */
    remove() {

        let currentHead = this.head;

        this.head = currentHead.next;

        return currentHead.data;
    }
}

export {LinkedList};