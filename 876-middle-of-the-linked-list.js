/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const List = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

var middleNode = function (head) {
  let node = head;
  let counter = 1;
  while (node.next) {
    counter++;
    node = node.next;
  }
  if (counter === 1) return node;
  let middle = Math.floor(counter / 2) + 1;
  node = head;
  for (let i = 1; i <= middle; i++) {
    if (i === middle) return node;
    node = node.next;
  }
};

console.log(middleNode(List));
