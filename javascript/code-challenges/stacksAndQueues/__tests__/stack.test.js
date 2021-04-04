'use strict';
const Queue = require('../lib/queue');

describe('QUEUE TESTS', () => {
  let newQueue = new Queue();

  it('Raises an exception when calling dequeue or peeking on empty queue ', () => {

    expect(newQueue.peek()).toBeFalsy();
  });

  it('Will successfully instantiate an empty queue', () => {

    expect(newQueue).toBeTruthy();
  });

  it('Will successfully enqueue into a queue', () => {
    newQueue.enqueue(100);
    expect(newQueue.storage.length).toEqual(1);
  });

  it('Will successfully enqueue multiple values into a queue', () => {
    newQueue.enqueue(200).enqueue(300);
    expect(newQueue.storage.length).toEqual(3);
  });

  it('Will successfully dequeue out of a queue the expected value', () => {
    newQueue.dequeue();
    expect(newQueue.storage.length).toEqual(2);
  });

  it('Will successfully peek into a queue, seeing the expected value', () => {
    expect(newQueue.peek()).toEqual(200);
  });

  it('Will successfully empty a queue after multiple dequeues', () => {
    newQueue.dequeue().dequeue();
    expect(newQueue.storage.length).toEqual(0);
    expect(newQueue.front).toEqual(null);
    expect(newQueue.rear).toEqual(null);
  });
});