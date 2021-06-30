'use strict';

const  binarySearch = require('../array_binary_search.js');

describe('Array Binary Search Funcationality Test', () => {
  it('Will find the specified value and return its index', () => {
    let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    expect(binarySearch(arr, 20)).toEqual(3);
    expect(binarySearch(arr, 35)).toEqual(6);
  });

  it('Will not find the sepcified value and return an error', () => {
    let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    expect(binarySearch([], 100)).toEqual('Value Invalid');
    expect(binarySearch(arr, 'string')).toEqual('Value Invalid');
  });

  it('Will not find the specified value and reutn \'-1\'', () => {
    let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    expect(binarySearch(arr, 100)).toEqual('-1');
  });
});
