'use strict';

const insertShiftArray = require('../array_shift.js');

describe('Insert Shift Array Functionality', () => {

  it('Will confirm if the array is empty or not', () => {
    let emptyArray = [];
    let expected = [50];

    insertShiftArray(emptyArray, 50);
    expect(emptyArray).toEqual(expected);
  });
  
  it('With an array holding an even number of values, it will inset a new into the center of the array', () => {
    let evenArray = [5, 10, 15, 20,];
    let expected = [5, 10, 50, 15, 20];

    insertShiftArray(evenArray, 50);
    expect(evenArray).toEqual(expected);
  });

  it('With an array holding an odd number of values, it will insert a new value into the center of the array', () => {
    let oddArray = [5, 10, 15, 20, 25];
    let expected = [5, 10, 15, 50, 20, 25];

    insertShiftArray(oddArray, 50);
    expect(oddArray).toEqual(expected);
  });
});