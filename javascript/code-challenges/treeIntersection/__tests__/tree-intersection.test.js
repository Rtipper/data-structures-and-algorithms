'use strict';

const BST = require("../bst.js");
const tree_Intersection = require("../tree-intersection.js");

describe('Tree Intersection Tests', () => {
  it('Will return an array with correctly matching values.', () => {
    const bst1 = new BST();
    const bst2 = new BST();
    bst1.add(12).add(4).add(7).add(11).add(100).add(1);
    bst2.add(4).add(8).add(11).add(7).add(6).add(1);
    expect(tree_Intersection(bst1, bst2)).toEqual([ 4, 1, 7, 11 ]);
  });

  it('Will return an array with correctly matching values.', () => {
    const bst3 = new BST();
    const bst4 = new BST();
    bst3.add(5).add(10).add(15);
    bst4.add(15).add(10).add(15);
    expect(tree_Intersection(bst3, bst4)).toEqual([ 3, 2, 1 ]);
  });
});