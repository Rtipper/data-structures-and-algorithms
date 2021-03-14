'use strict';

const LinkedList = require('./lib/linked-list.js');

let ll = new LinkedList();

// CONSOLE LOGS -- CODE CHALLENGE 6
console.log(ll.append('red').append('orange').append('yellow').append('green').append('blue'));
console.log(ll.insterAfter('blue', 'pink'));
console.logt(ll.toString());

// CODE CHALLENGE 7
ll.push('red');
ll.push('orange');
ll.push('yellow');
ll.push('green');
ll.push('blue');


// CONSOLE LOGS -- CODE CHALLENGE 5
// console.log(ll.insert('red'));
// console.log(ll.insert('orange'));
// console.log(ll.insert('yellow'));
// console.log(ll.insert('green'));
// console.log(ll.insert('blue'));
// console.log(ll.includes('blue'));
// console.log(ll.toString());

