'use strict';

let Words = require('../repeating_words.js');

describe('Repeating Words Test', () => {
  it('Will return the first word that is repeated', () => {
    let sentence1 = 'I wish for a fish with this very last wish';
    expect(Words(sentence1)).toEqual('wish');
  });

  it('Will check for Case Sensitivity from within the string', () => {
    let sentence2 =  'I wish for a fish with this very last wish';
    expect(Words(sentence2)).toEqual('wish');
  });

});