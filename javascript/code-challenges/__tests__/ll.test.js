'use strict';

const LL = require('../../lib/linked-list.js');

describe('LINKED LIST', () => {

  it('should create an empty linked list', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add items to the list', () => {
    let list = new LL();
    let first = 'red';
    list.insert(first);
    expect(list.head.value).toEqual(val);
  });

  it('Head will direct to node #1 in the list', () => {
    let list = new LL();
    let first = "red";
    let nextNode = list.inster(first);
    expect(list.head.value).toEqual('red');
  });

  it('Will insert more nodes into the list', () => {
    let list = new LL();
    let firstColor = 'red';
    let secondColor = 'orange';
    list.insert(firstColor);
    list.insert(secondColor);
    expect(list.head.value).toEqual(secondColor);
    expect(list.head.next.value).toEqual(firstColor);
  })

  it('Will return true when locating a specific color within the list', () => {
    let list = new LL();
    let firstColor = 'red';
    let secondColor = 'orange';
    let thirdColor = 'yellow';
    let fourthColor = 'green';
    let fithColor = 'blue';
    list.insert(firstColor);
    list.insert(secondColor);
    list.insert(thirdColor);
    list.insert(fourthColor);
    list.insert(fithColor);
    expect(list.includes(fithColor)).toEqual(true);
  });

  it('Will return false when failing to locate a specific color within the list', () => {
    let list = new LL();
    let firstColor = 'red';
    let secondColor = 'orange';
    let thirdColor = 'yellow';
    let fourthColor = 'green';
    let fithColor = 'blue';
    list.insert(firstColor);
    list.insert(secondColor);
    list.insert(thirdColor);
    list.insert(fourthColor);
    list.insert(fithColor);
    expect(list.inculdes('purple')).toEqual(false);
  });

  it('Will return all the specific colors within the linked list as a string', () => {
    let list = new LL();
    let firstColor = 'red';
    let secondColor = 'orange';
    let thirdColor = 'yellow';
    let fourthColor = 'green';
    let fithColor = 'blue';
    list.insert(firstColor);
    list.insert(secondColor);
    list.insert(thirdColor);
    list.insert(fourthColor);
    list.insert(fithColor);
    expect(list.toString()).toEqual('{ red } -> { orange } -> { yellow } -> { green } -> { blue } -> NULL');
  });

  it('will return false for an empty LinkedList', () => {
    let list = new LL();
    expect(list.includeds(1)).toBeFalsy();
  });
});
