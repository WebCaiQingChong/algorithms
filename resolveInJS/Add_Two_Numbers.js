// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// 题目解析
// 题目上方已给出一个简单链表函数，可直接使用
// 直接对链表进行遍历，链表的遍历一般使用while循环，在遍历的同时对结果进行相加，这样只需要一次遍历即可
// 这里面要注意的是，两个数字相加大于10的时候，前一位需要进1.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var ret = new ListNode(0)
  var preNode = ret
  var current = 0
  while(l1 || l2 || current) {
      var currentValue = 0
      if (l1 && l2) {
          currentValue = l1.val + l2.val + current
          
      } else if (l1) {
          currentValue = l1.val + current
                 
      } else if (l2) {
                 currentValue = l2.val + current
      } else {
          currentValue = current
      }
      current = currentValue >= 10 ? 1 : 0
      preNode.next = new ListNode(currentValue % 10)
      preNode = preNode.next
      l1 = l1 ? l1.next : null
      l2 = l2 ? l2.next : null
  }
  return ret.next
};
