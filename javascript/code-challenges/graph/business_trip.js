'use strict';

function businessTrip(graph, arr) {
  
  let colorNeighbor = false;
  let total = 0;
  let i = 0
  let neighbors;

  while(i < arr.length - 1) {
    neighbors = graph.getNeighbors(arr[i]);

    neighbors.forEach(obj => {
      if(obj.vertex === arr[i+1]) {
        total += obj.weight;
        colorNeighbor = true;
      }
    });

    if(colorNeighbor === false) {
      return `NOT CORRECT, $${0}`;
    }
    i++;
    colorNeighbor = false;
  }
  return `CORRECT, $${total}`;
}

module.exports = businessTrip;