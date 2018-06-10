// Given an array of integers,
// return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 题目分析： 找出数组内相加等于目标值的两个数字，对数组进行两次循环遍历，
// 比对当前值与目标值的差值是否相等
// var a = num[n]
// var b = target - a
// a === b ? 则返回

// 2018-06-10

var twoSum = function (nums, target) {
  const length = nums.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (nums[i] === target - nums[j]) {
        if (nums[i] === nums[j] && i === j) {
          continue
        }
        return [i, j]
      }
    }
  }
}

var nums = [3, 2, 4]
var target = 6
console.log(twoSum(nums, target))

// 错了两次，第一次没考虑数组重复，第二次考虑了自身重复，但是没考虑数组本身包含相同的值。
// 当前的算法复杂度O(n^2)
