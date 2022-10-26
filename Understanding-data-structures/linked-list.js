/**
 * [Advantage of Linked list]
 * - Nodes can easily be removed or added from a linked list without
 *   reorganizing the entire data structure. This one advantage it has
 *   over arrays.
 * [Disadvantages of Linked list]
 * - Search operations are slow in linked list. Unlike arrays,
 *   random access of data element is not allowed. Nodes are accessed
 *   sequentially starting from the first node
 * - It uses more memory than arrays because of the storage of
 *   pointers.
 */

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }
  clear() {
    this.head = null;
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  getFirst() {
    return this.head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.size());
console.log(list.getLast());
console.log(list.getFirst());
