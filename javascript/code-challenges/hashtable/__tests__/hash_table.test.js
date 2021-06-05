'use strict';

const HashTable = require('../hashtable.js');

describe('HashMap Functionality', () => {
  let people = new HashTable(16);

  it('Will successfully add a key-value to the hash table', () => {
    people.set('Captain Planet', 'Male');
    expect(people.has('Captain Planet')).toBe(true);
  });

  it('Will retrieve based on a key and returns the value stored', () => {
    let data = people.get('Captain Planet');
    expect(data).toBeTruthy();
  });

  
  it('Successfully handles a collision within the hashtable', () => {
    people.set('Captain Planet', 'Bad Guy');
    let data = people.get('WrongINfo');
    expect(data).toEqual(null);
  });
  
  it('Successfully identifies a value from the hash tables bucket that has a collision', () => {
    let data = people.get('Captain Planet');
    expect(data).toBeTruthy();
  });
  
  it('Successfully identifies a value from the hash tables bucket that has a collision', () => {
    people.set('Captain Planet', 'Super Hero');
    let data = people.get('Captain Planet');
    expect(data).toBeTruthy();
  });

  it('Returns null for a key that does not exist within the hashtable', () => {
    let data = people.get('WrongINfo');
    expect(data).toEqual(null);
  });

});