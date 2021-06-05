  'use strict';

const LinkedList = require('../linked-list.js');

describe('LinkedList Functionality', () => {

  it('will successfully instantiate an empty linked list', () => {
    let newLL = new LinkedList();
    expect(newLL.head).toBeNull();
  });

  it('will properly insert a value into the linked list', () => {
    let newLL = new LinkedList();
    let val = 100;
    newLL.append(val);
    expect(newLL.head.value).toEqual(val);
  });
});