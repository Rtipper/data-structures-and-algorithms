'use strict';

let Queue = require('./fifoAnimalShelter.js');

let newQueue = new Queue();

newQueue.enqueue('Rosa', 'dog');
newQueue.enqueue('Cedar', 'dog');
newQueue.enqueue('Nala', 'cat');
newQueue.enqueue('Obi', 'dog');
newQueue.enqueue('Flower', 'cat');

console.log(newQueue.enqueue('Bruce', 'shark'));

console.log(newQueue.dequeue('cat'));