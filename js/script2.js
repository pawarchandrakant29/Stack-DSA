class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    deleteMiddle() {
      const size = this.items.length;
      const midIndex = Math.floor(size / 2);
  
      const tempStack = new Stack();
  
      for (let i = 0; i < midIndex; i++) {
        tempStack.push(this.pop());
      }
  
      this.pop();
  
      while (!tempStack.isEmpty()) {
        this.push(tempStack.pop());
      }
    }
  
    printStack() {
      console.log(this.items);
    }
  }

  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  
  console.log("Original Stack:");
  stack.printStack();
  
  stack.deleteMiddle();
  
  console.log("Stack after deleting middle element:");
  stack.printStack();
  