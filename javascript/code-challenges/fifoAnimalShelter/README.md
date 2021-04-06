# Fifo Animal Shelter - CC12

## Challenge
CC 12 -- Fifo Animal Shelter
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
Implement the following methods:
enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null

## Approach & Efficiency
- Ensure the node.js is created.
- Utilize the .push(), .pop(), .peek() & .isEmpty() methods as demoed in class, pushing nodes on the stack, popping them off, peeking at the top node and creating a catch if the stack is empty.
- Utilize the .enqueue() and .dequeue() methods within the pseudoqueue class to ensure nodes can be added to the queue as  well as removed from the queue, along with .peek() to see the node at the front of the queue and .isEmpty() in case the queue is empty
- Create a Pseudo Queue class the uses the new structures as outline for CC11

- Create animal.js with dog and cat classes and constructors
- Create fifoAnimalShelter.js -- .enqueue() / .dequeue() / .peek() / .isEmpty() / queueEnds()

## Solution
![WhiteBoard](CC12.png)