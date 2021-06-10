'use strict';

function left_Join(mapLeftColors, mapRightColors) {
  let leftMap = [];

  mapLeftColors.forEach((value, key) => {
    let newVal = [];

    newVal.push(key);
    newVal.push(value);
    newVal.push(mapRightColors.get(key) ? mapRightColors.get(key) : null);

    leftMap.push(newVal);
  });
  return leftMap;
}

module.exports = left_Join;