const readline = require('readline');

// Stack implementation
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return !this.isEmpty() ? this.items[this.items.length - 1] : null;
  }

  display() {
    console.log("Stack: ", this.items);
  }
}

// Queue implementation
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    return !this.isEmpty() ? this.items[0] : null;
  }

  display() {
    console.log("Queue: ", this.items);
  }
}

// Creating instances of Stack and Queue
const stack = new Stack();
const queue = new Queue();

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display stack and queue status
function displayStatus() {
  stack.display();
  queue.display();
}

// Main CLI loop
function startCLI() {
  console.log("Welcome to Stack and Queue CLI.");
  displayStatus();

  rl.question('Enter command (push/pop/enqueue/dequeue/exit): ', (command) => {
    switch (command) {
      case 'push':
        rl.question('Enter value to push onto the stack: ', (value) => {
          stack.push(value);
          displayStatus();
          startCLI();
        });
        break;
      case 'pop':
        console.log('Popped element:', stack.pop());
        displayStatus();
        startCLI();
        break;
      case 'enqueue':
        rl.question('Enter value to enqueue into the queue: ', (value) => {
          queue.enqueue(value);
          displayStatus();
          startCLI();
        });
        break;
      case 'dequeue':
        console.log('Dequeued element:', queue.dequeue());
        displayStatus();
        startCLI();
        break;
      case 'exit':
        rl.close();
        break;
      default:
        console.log('Invalid command. Please try again.');
        startCLI();
    }
  });
}

// Start CLI
startCLI();
