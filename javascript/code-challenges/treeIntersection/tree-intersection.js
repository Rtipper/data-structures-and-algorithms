'use strict';

function tree_Intersection(bst1, bst2) {
  let values = {};
  let arr = [];

  let nodeVals1 = bst1.preOrder();
  let nodeVals2 = bst2.preOrder();
  let index = 0;

  if (nodeVals1) {
    for (let i = 0; i < nodeVals1.length; i++) {
      values[nodeVals1[i].toString()] = true;
    }
    if (nodeVals2) {
      for (let i = 0; i < nodeVals2.length; i++) {
        if (values[nodeVals2[i].toString()]) {
          arr[index] = nodeVals2[i];
          index++;
        }
      }
      return arr;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

module.exports = tree_Intersection;