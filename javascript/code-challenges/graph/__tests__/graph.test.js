'use strict';

const Graph = require ('../graph.js');
const Vertex = require ('../vertex.js');
const Edge = require('../edge.js');

// GRAPH TEST + METHODS
describe('Graph Functionality Test', () =>{
  let newGraph = new Graph();
  let vertexRed = new Vertex('Red');
  let vertexOrange = new Vertex('Orange');
  let vertexYellow = new Vertex('Yellow');
  let vertexGreen = new Vertex('Green');
  let vertexBlue = new Vertex('Blue');
  let vertexPurple = new Vertex('Purple');
  it('Will create a new graph of colors', () => {
    expect(newGraph.constructor.name).toBe('Graph');
  });

  it('Will add a color vertex to the color graph', () => {
    newGraph.addVertex(vertexRed);
    newGraph.addVertex(vertexOrange);
    newGraph.addVertex(vertexYellow);
    newGraph.addVertex(vertexGreen);
    newGraph.addVertex(vertexBlue);
    newGraph.addVertex(vertexPurple);
    expect(newGraph.adjacencyList.size).toBe(6);
  });

  it('Will return with the size of the color graph', () => {
    newGraph.addDirectedEdge(vertexRed, vertexOrange, vertexYellow, vertexGreen, vertexBlue, vertexPurple, 10);
    expect(newGraph.size()).toBe(6);
  });

  it('Will return all neighbors from the selected color vertex', () => {
    newGraph.addDirectedEdge(vertexRed, vertexOrange, vertexYellow, vertexGreen, vertexBlue, vertexPurple, 10);
    expect(newGraph.getNeighbors(vertexRed).length).toBe(2);
  });
});

// VERTEX TEST
describe('Vertex Functionality Test', () => {
  let vertexRed = new Vertex('Red');
  it('Will return a newly created color vertex', () => {
    expect(vertexRed.constructor.name).toBe('Vertex');
    expect(vertexRed).toBe('Red');
  });
});

// EDGE TEST
describe('Edge Functionality Test', () => {
  let vertexRed = new Vertex('Red');
  let newEdge = new Edge('vertexRed', 2);
  it('Will create a new edge between the color vertex', () => {
    expect(newEdge.constructor.name).toBe('Edge');
    expect(newEdge.vertex).toBe(vertexRed);
    expect(newEdge.weight).toBe(2);
  });
});

