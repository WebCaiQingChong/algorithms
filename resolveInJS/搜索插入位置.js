// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function(nums, target) {
  // 掐头
    var length = nums.length
    if (length < 1) {
      return 0
    }

    // 去尾
    if (nums[length - 1] < target) {
      return length
    }
    var index = 0
    for(var i = 0; i <= length; i ++) {
      if(nums[i] >= target) {
        index = i
        break
      }
    }
    return index
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  
  let left = 0
  let right = nums.length - 1
  let povit
  while (left <= right) {
    povit = left + Math.floor((right - left) / 2)

    let result = nums[povit]
    if (result === target) {
      return povit
    }

    if (result < target) {
      left = povit + 1
    } else {
      right = povit - 1
    }
  }

  return left
  
};



