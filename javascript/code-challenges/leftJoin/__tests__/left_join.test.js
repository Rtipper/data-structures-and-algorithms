'use strict';

const left_Join = require("../left_join.js");


describe('Left Join Tests', () => {
  const mapLeftColors = new Map([
    ['red', 'orange'],
    ['yellow', 'green'],
    ['teal', 'blue'],
    ['purple', 'pink'],
    ['white', 'black'],
  ]);

  const mapRightColors = new Map([
    ['red', 'tan'],
    ['yellow', 'brown'],
    ['teal', 'magenta'],
    ['white', 'umber'],
    ['gray', 'aqua'],
  ]);

  it('Will successfully add color values to each hash table', () => {

    expect(mapLeftColors.has('red')).toBeTruthy();
    expect(mapRightColors.has('gray')).toBeTruthy();
  });

  it('Will return an array that has the "left-join" matching color alues.', () => {


    expect(left_Join(mapLeftColors, mapRightColors))
      .toEqual(
        [
          [ 'red', 'orange', 'tan' ],
          [ 'yellow', 'green', 'brown' ],
          [ 'teal', 'blue', 'magenta' ],
          [ 'purple', 'pink', null ],
          [ 'white', 'black', 'umber' ]
        ]
      );
  });

  it('Will return an array of color values when the right map is empty', () => {
    const mapLeftColors2 = new Map([
      ['red', 'orange'],
      ['yellow', 'green'],
      ['teal', 'blue'],
      ['purple', 'pink'],
      ['white', 'black'],
    ]);

    const mapRightColors2 = new Map();

    expect(left_Join(mapLeftColors2, mapRightColors2))
      .toEqual(
        [
          [ 'red', 'orange', null ],
          [ 'yellow', 'green', null ],
          [ 'teal', 'blue', null ],
          [ 'purple', 'pink', null ],
          [ 'white', 'black', null ]
        ]
      );
  });

  it('Should still return null if left map is empty', () => {
    const mapLeftColors3 = new Map();

    const mapRightColors3 = new Map([
      ['red', 'tan'],
      ['yellow', 'brown'],
      ['diligent', 'magenta'],
      ['white', 'umber'],
      ['gray', 'aqua'],
    ]);

    expect(left_Join(mapLeftColors3, mapRightColors3).length).toBe(0);
  });
});