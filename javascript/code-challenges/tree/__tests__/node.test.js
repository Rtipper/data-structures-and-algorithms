'use strict';

const Node = require('../node.js');

describe('Test of Node', () => {
  it('should create a new node', () => {
    let val = 100;
    let testNode = new Node(100);

    expect(testNode.value).toEqual(val);
    expect(testNode.right).toBeNull();
    expect(testNode.left).toBeNull();
  });
});