'use strict';

// bringing in the EDGE CONSTRUCTOR || previously here in graph.js
const Edge = require("./edge.js");

class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    let adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNodes(){
    return this.adjacencyList.keys();
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(vertex) {
    let c = [];
    let verticies = [];
    let visited = [];

    c.push(vertex);
    while(c.length) {
      let currentVertex = c.pop();
      if(visited.includes(currentVertex.value)) {
        continue;
      } else {
        verticies.push(currentVertex.value);
        visited.push(currentVertex.value);
        if (this.getNeighbors(vertex).length) {
          let list = this.getNeighbors(currentVertex);
          list.forEach(child => {
            c.push(child.vertex);
          });
        }
      }
    }
    return verticies;
  }
}

module.exports = Graph;