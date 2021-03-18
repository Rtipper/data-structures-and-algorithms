
'use strict';

const LL = require('../linkedList/lib/linked-list.js');

const zip = require('../linkedList/lib/zip.js');

describe('ZIP LISTS TEST', () => {
  it('Will zip two lists together', () => {
    let LL1 = new LL();
    let LL2 = new LL();

    LL1.append('red').append('orange').append('yellow').append('green').append('blue');
    LL2.append('10').append('20').append('30').append('40').append('50');
    expect(zip(LL1, LL2).length()).toBe(10);
  });


  it('Will fail if both of the lists are empty', () => {
    let LL1 = new LL();
    let LL2 = new LL();


    LL1.append('red').append('orange').append('yellow').append('green').append('blue');
    expect(zip(LL1, LL2)).toBeFalsy();
  });

});