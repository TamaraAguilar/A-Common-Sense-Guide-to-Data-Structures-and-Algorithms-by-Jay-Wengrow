class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  read(index) {
    // We begin at the first node of the list until we get to the
    // index we're looking for
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      // We keep following the links of each node until we get to
      // the index we're looking for
      currentNode = currentNode.next;
      currentIndex++;

      // If we're past the end of the list, that means the
      // value cannot be found in the list, so return null
      if (!currentNode) return null;
    }

    return currentNode.data;
  }

  indexOf(value) {
    // We begin at the first node of the list
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      // If we find the data we're looking for, we return it
      if (currentNode.data == value) {
        return currentIndex;
      }

      // Otherwise, we move on the next node
      currentNode = currentNode.next;
      currentIndex++;
    }

    // If we get through the entire list without finding the
    // data, we return null
    return null;
  }

  insertAtIndex(index, value) {
    // We creeate the new node with the provided value
    const newNode = new Node(value);

    // If we are inserting at the beginning of the list
    if (index === 0) {
      // Have our new node link to what waas the first node
      newNode.next = this.head;
      // Establish that out new node is now the list's first node
      this.head = newNode;
      return;
    }

    // If we are inserting anywhere other than the beginning
    let currentNode = this.head;
    let currentIndex = 0;

    // First, we access the node immediately before where the
    // new node will go
    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    // Have the new node link to the next node
    newNode.next = currentNode.next;

    // Modify the link of the previous node to point to
    // our new node
    currentNode.next = newNode;
  }
}

// --- Tests ---
let node1 = new Node('blue');
let node2 = new Node('green');
let node3 = new Node('red');
let node4 = new Node('pink');

node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

console.log(list.read(3)); // Returns "pink"

console.log(list.indexOf('pink')); // Returns 3

list.insertAtIndex(2, 'purple');

console.log(list.read(2));
console.log(list.read(3));
