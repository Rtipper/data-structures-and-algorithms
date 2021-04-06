'use strict';

const Animals = require('../animals.js');

describe('OBJECT TESTS', () => {
  it('a new Dog object should be created', () => {
    let name = 'Dog';
    let testNode = new Animals.Dog(name);

    expect(testNode.name).toEqual(name);
  });

  it('a new Cat object should be created', () => {
    let name = 'Cat';
    let testNode = new Animals.Cat(name);

    expect(testNode.name).toEqual(name);

  });

});