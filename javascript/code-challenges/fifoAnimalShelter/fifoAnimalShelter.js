'use strict';

const Animal = require('./animals');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  // QUEUE IN ANIMAL, BASED ON SPECIES AND NAME
  enqueue(name, species) {
    let animal;
    if (species.toLowerCase() === 'dog') {
      animal = new Animal.Dog(name);
    } else if (species.toLowerCase() === 'cat') {
      animal = new Animal.Cat(name);
    } else {
      return null;
    }

    this.storage.push(animal);
    if (this.storage.length === 1) {
      this.front = animal;
      this.rear = animal;
    } else {
      this.rear = animal;
    }
    return this;
  }

  // PREEK AT TOP
  peek() {
    if (this.storage.length === 0) {
      return false;
    }
    return this.front;
  }

  // DEQUEUE OUT BASED ON PREF
  dequeue(pref) {
    if (!this.storage.length) {
      return 'queue is empty';
    }
    let type = pref.charAt(0).toUpperCase() + pref.slice(1);
    let length = 0;
    
    if (type === 'Dog' || type === 'Cat') {
      while (length < this.storage.length) {
        if (this.storage[length].constructor.name === type) {
          this.storage.splice(length, 1);
          this.queueEnds();
          return this;
        }
        length++;
      }

      return false;
    } else {
      return null;
    }
  }

  // FOR EMPTY QUEUE
  isEmpty() {
    if (this.storage.length < 1) {
      return true;
    }
  }

  // INIT END OF QUEUE
  queueEnds() {
    if (this.storage.length === 0) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.storage[0];
      this.rear = this.storage[this.storage.length - 1];
    }
  }
}

module.exports = Queue;