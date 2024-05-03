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
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }

    sort() {
      const tempStack = new Stack();
  
      while (!this.isEmpty()) {
        let current = this.pop();
  
        while (!tempStack.isEmpty() && tempStack.peek() < current) {
          this.push(tempStack.pop());
        }

        tempStack.push(current);
      }

      while (!tempStack.isEmpty()) {
        this.push(tempStack.pop());
      }
    }
  
    printStack() {
      console.log(this.items);
    }
  }
  
  const stack = new Stack();
  
  stack.push(5);
  stack.push(3);
  stack.push(8);
  stack.push(1);
  stack.push(2);
  
  console.log("Original Stack:");
  stack.printStack(); 
  
  stack.sort();
  
  console.log("Sorted Stack:");
  stack.printStack(); 
  