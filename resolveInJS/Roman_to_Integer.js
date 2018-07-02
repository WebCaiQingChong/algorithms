// Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral,
// just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII.
// Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

// 思路：
// 对字符串进行遍历，定义map来管理罗马数字与数字的映射关系
// 因为罗马数字也是按照从左到右来进行计算的，只不过需要注意其简写形式
// 从简写形式上来看，如果后面小于前面，我们只需累加，如果后面大于前面，
// 则说明是退位， 例 MCM = 1000 + 100 + 1000 - 2 * 100 = 1900
// 所以只需关心后面大于前面的情况，其他情况正常累加
/**
 * @param {string} s
 * @return {number}
 * 方案1：直接使用for循环遍历
 */
var romanToInt = function (s) {
  const numMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let init = 0
  for (let i = 0, len = s.length; i < len; i++) {
    if (numMap[s[i]] > numMap[s[i - 1]]) {
      init = init + numMap[s[i]] - 2 * numMap[s[i - 1]]
    } else {
      init += numMap[s[i]]
    }
  }
  return init
}
// console.log(romanToInt('MCMXCIV'))
// 使用reduce，来简化代码

var romanToIntReduce = function (s) {
  const numMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  return s.split('')
          .reduce((total, current, index, arr) => total + numMap[current] - (numMap[arr[index]] > numMap[arr[index - 1]] ? 2 * numMap[arr[index - 1]] : 0), 0)
}
console.log(romanToIntReduce('MCMXCIV'))
