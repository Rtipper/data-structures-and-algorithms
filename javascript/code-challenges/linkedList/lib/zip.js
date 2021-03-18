'use strcit';

let LinkedList = require('./linked-list.js');


module.exports = function zip(firstList, secondList) {
  let list = new LinkedList();
  let counter;

  if (!firstList.head || !secondList.head){
    return false;
  }

  if (firstList.length() > secondList.length()) {
    counter = secondList.length();
  } else {
    counter = firstList.length();
  }

  let current1 = firstList.head;
  let current2 = secondList.head;

  while (counter > 0) {
    counter--;
    list.append(current1.value);
    list.append(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }

  if (current1) {
    while (current1) {
      list.append(current1.value);
      current1 = current1.next;
    }
  }

  if (current2) {
    while (current2) {
      list.append(current2.value);
      current2 = current2.next;
    }
  }
  return list;

};

// REF CODE FROM https://xiaoyunyang.github.io/post/data-structure-with-javascript-object-linked-list/

// function zip(l1,l2) {
//   let l3, tail, pred
//   // initialize l3
//   l3 = new ListNode('')
//   tail = l3
//   while(l1 || l2) {
//     if(l1 !== null) tail.val += l1.val
//     if(l2 !== null) tail.val += l2.val

//     tail.next = new ListNode('')
//     pred = tail
//     tail = tail.next

//     l1 = l1 ? l1.next : l1
//     l2 = l2 ? l2.next : l2
//   }

//   pred.next = null // Doing tail = null here doesn't work. Why?

//   return l3
// }