'use strict';

const LinkedList = require('./lib/linked-list.js');

let ll = new LinkedList();

console.log(ll.insert('red'));
console.log(ll.insert('orange'));
console.log(ll.insert('yellow'));
console.log(ll.insert('green'));
console.log(ll.insert('blue'));
console.log(ll.includes('blue'));
console.log(ll.toString());
