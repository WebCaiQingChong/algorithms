// Given a string containing just the characters
//  '(', ')', '{', '}', '[' and ']', 
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


// 思路：将字符串转化成对应的数字，进行加减法以简化代码
// 如果是左括号，一直累加，如果出现右括号，则要进行出栈动作
// 同时对比出栈元素是否与当前元素相匹配，匹配即相加等于0(抵消)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': 1,
    ')': -1,
    '{': 2,
    '}': -2,
    '[': 3,
    ']': -3
  }
  if (s.length % 2 === 1) {
    return false
  }
  if (map[s[0]] < 0) {
    return false
  }
  let arr = []
  for (let i = 0, len = s.length; i < len; i++) {
    if (map[s[i]] > 0) {
      arr.push(map[s[i]])
    } else {
      if (arr[arr.length - 1] + map[s[i]] === 0) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return arr.length === 0
}
console.log(isValid('{[]}'))
