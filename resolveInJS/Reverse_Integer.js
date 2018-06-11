// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment
// which could only store integers
// within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem,
// assume that your function returns 0
// when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var max = Math.pow(2, 31) - 1
  var min = -Math.pow(2, 31)
  var flag = x > 0
  var a = x + ''
  var b = a.split('')
  var c = b.reverse()
  var d = c.join('')
  var result = parseInt(d)
  if (result >= max || result <= min) {
    return 0
  } else {
    return flag ? result : -result
  }
}

var f = 1534236469
console.log(reverse(f))

// 算法中不应使用reverse方法，此处可考虑使用栈将其反转
