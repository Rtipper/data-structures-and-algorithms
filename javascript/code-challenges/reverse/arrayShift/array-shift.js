'use strict';

const arr = ['2', '4', '8', '10'];

let start = 2;
let deleteCount = 0;
arr.splice(start, deleteCount, '6');

arr; // ['2', '4', '6', '8', '10'];

