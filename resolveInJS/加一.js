// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1:

// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
// 示例 2:

// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var double = 0
    var length = digits.length
    digits[length - 1] += 1
    var result = []
    for(var i = length - 1; i >= 0; i --) {
      var value = digits[i] + double
      if(value >= 10) {
        double = 1
      } else {
        double = 0
      }
      result.unshift(value % 10)
    }
    if (double) {
      result.unshift(1)
    }
    return result
};