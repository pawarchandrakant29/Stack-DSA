class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(item) {
      this.queue1.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      const poppedItem = this.queue1.shift();
      
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return poppedItem;
    }
  
    isEmpty() {
      return this.queue1.length === 0;
    }
  
    reverse() {
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
  
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }
  }
  
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Original Stack:");
  console.log(stack.queue1);
  
  stack.reverse();
  
  console.log("Reversed Stack:");
  console.log(stack.queue1);
  
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop()); 
  