'use strict';

const LinkedList = require('./lib/linked-list.js');

let ll = new LinkedList();

// CONSOLE LOGS -- CODE CHALLENGE 6
console.log(ll.append('red').append('orange').append('yellow').append('green').append('blue'));
console.log(ll.insterAfter('red', 'blue'));
console.logt(ll.toString());

// CONSOLE LOGS -- CODE CHALLENGE 5
// console.log(ll.insert('red'));
// console.log(ll.insert('orange'));
// console.log(ll.insert('yellow'));
// console.log(ll.insert('green'));
// console.log(ll.insert('blue'));
// console.log(ll.includes('blue'));
// console.log(ll.toString());

