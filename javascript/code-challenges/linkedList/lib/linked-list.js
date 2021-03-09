'use strict';

const { Interface } = require('node:readline');
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let previousHead = this.head;

      this.head.next - previousHead;
    }
    return this;
  }

  include(value) {
    if (!this.head) {
      return false;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let string = '';
    let current = this.head;
    while (current) {
      string += `{ ${current.value} } -> `;

      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}
module.exports = LinkedList;