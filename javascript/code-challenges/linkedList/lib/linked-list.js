'use strict';

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
      this.head = node;
      this.head.next = previousHead;
    }
    return this;
  }

  // APPEND -- CODE CHALLENGE 6
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  // INSERT BEFORE -- CODE CHALLENGE 6
  insertBefore(value, newValue) {
    let current = this.head;
    let node = new Node(newValue);
    if (current.value === value) {
      let previousHead = this.head;
      this.head = node;
      this.head.next = previousHead;
      return this;
    } else {
      while (current.next) {
        if (current.next.value === value) {
          node.next = current.next;
          current.next = node;
          return this;
        }
        current = current.next;
      }
    }
    return `${value} not present within list`;
  }

  // INSERT AFTER -- CODE CHALLENGE 6
  insertAfter (value, newValue) {
    let current = this.head;
    let node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return this;
    } else {
      while (current) {
        if (current.value === value) {
          node.next = current.next;
          current.next = node;
          return this;
        } else {
          current = current.next;
        }
      }
    }
    return `${value} not present within list`;
  }

  includes(value) {
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
    let current = this.head;
    let string = ''
    while (current) {
      string += `{ ${current.value} } -> `;

      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}

// CODE CHALLENGE 7 - KTH NODE FROM END
function kthFromEnd(sll, k){
  var node = sll.head,
  i = 1,
  kthNode,
  if(k<=0) return;
  
  while (node){
    if(i === k) kthNode = sll.head;
    else if(i-k>0){
      kthNode = kthNode.next;
    }
    i++

    node = node.next;
  }
  return kthNode;
}

module.exports = LinkedList;