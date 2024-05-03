class ListNode {
    constructor(value) {
      this.val = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }

    append(value) {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    printList() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.val);
        current = current.next;
      }
      console.log(values.join(' -> '));
    }

    deleteMiddle() {
      if (!this.head || !this.head.next) {
        return;
      }
  
      let slow = this.head;
      let fast = this.head;
      let prev = null;
  
      while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
      }
  
      if (prev) {
        prev.next = slow.next; 
      } else {
        this.head = slow.next; 
      }
    }
  }
  
  const linkedList = new LinkedList();
  
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);
  
  console.log("Original Linked List:");
  linkedList.printList(); 
  
  linkedList.deleteMiddle();
  
  console.log("Linked List after deleting middle node:");
  linkedList.printList(); 
  