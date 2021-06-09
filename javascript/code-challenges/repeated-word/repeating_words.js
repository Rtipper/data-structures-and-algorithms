'use strict';

const str = "I wish for a fish with this very last wish";

const findDuplicateWords = str => {
  const strArr = str.split(" ");
  const res = [];
  for(let i = 0; i < strArr.length; i++) {
     if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
        if(!res.includes(strArr[i])) {
           res.push(strArr[i]);
        };
     };
  };
  return res.join(" ");
};

module.exports = findDuplicateWords;
