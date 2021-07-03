'use strict';

let Tree = require('../tree.js');

describe('Tree Tests', () => {
  let newTree = new Tree();

  it('Will successfully create an empty tree' , () => {
    expect(newTree).toBeTruthy();
  });

  it('Will successfully create a tree with a single node at its root ' , () => {
    newTree.add(9);
    expect(newTree.root.value).toEqual(9);
  });

  it('Will successfully add a left child and right child to a single root node' , () => {
    newTree.add(4);
    expect(newTree.root.left.value).toEqual(4);
    expect();
  });

  it('Will successfully return a collection from a preorder traversal of the tree' , () => {
    newTree.add(12);
    newTree.add(3);
    newTree.add(6);
    newTree.add(11);
    newTree.add(22);
    expect(newTree.preOrder(newTree.root)).toEqual([9, 4, 3, 6, 12, 11, 22]);
  });

  it('Will successfully return a collection from an inorder traversal of the tree' , () => {
    expect(newTree.inOrder(newTree.root)).toEqual([3, 4, 6, 9, 11, 12, 22]);
  });

  it('Will successfully return a collection from a postOrder traversal of the tree' , () => {
    expect(newTree.postOrder(newTree.root)).toEqual([3, 6, 4, 11, 22, 12, 9]);
  });

  it('Will successfully return a collection in breadth-first order', () => {
    expect(newTree.breadthFirst()).toEqual([9, 4, 12, 3, 6, 11, 22]);
  })
  
   it('Will successfully return the maximum value from within the tree', () => {
    expect(newTree.findMax(newTree.root)).toEqual(22);
  });
});

