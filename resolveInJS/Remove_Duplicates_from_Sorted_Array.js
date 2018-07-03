// Given a sorted array nums,
// remove the duplicates in-place such that each element appear only once
// and return the new length.

// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// 思路： 因为数组已经排好序了，再加上规则里面不能创建新的数组，只能在原始数组上进行操作
// 我们遇见与前一个相等的，则证明当前项是重复的，则从数组中删除，
// 关键点：数组删除当前项后，数组的长度变了，但是循环中的i值还是原来的，此时，我们就需要
//        让i值归为，即回到前一个位置，i -1
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 1) {
    return 0
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      i -= 1
    }
  }
  return nums.length
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

