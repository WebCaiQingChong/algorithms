// 给定两个二进制字符串，返回他们的和（用二进制表示）。

// 输入为非空字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a === '0') {
      return b
    }
    if (b === '0') {
      return a
    }
    var num = a.length - b.length
    var zero = new Array(num > 0 ? num : -num).fill('0').join('')
    if (num >= 0) {
      b = zero + b
    } else {
      a = zero + a
    }
    var result = ''
    var is2 = false
    var i = a.length - 1
    while(i >= 0 || is2){
      var current = parseInt(a[i] || 0) + parseInt(b[i] || 0) + (is2 ? 1 : 0)
      if(current >= 2) {
        is2 = true
        current = (current - 2) + ''
      } else {
        is2 = false
      }
      result = current + result
      i--
    }
    return result
};

console.log(addBinary('100', '110010'))