'use strict';

const Node = require('./node.js');

// STACKS
class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
    this.top = item;
  }

  pop() {
    let item = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    if (top == -1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log('stack', stack);

////////////////////////

// QUEUES
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);

    if (this.storage.lenth == 1) {
      this.front = item;
      this.rear = item;
    } else {
      this.rear = item;
    }
  }

  dequeue() {
    let item = this.storage.shift();

    if(this.storage.length == 0) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.storage[0];
      this.rear = this.storage[this.storage.length - 1];
    }

    return item;

  }
}

module.exports = Queue;

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

console.log(q);