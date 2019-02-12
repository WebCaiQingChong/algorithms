// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 该思路就是遍历，然后存入数组，以解决本次循环是否应该结束

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length <= 1) {
      return strs[0] || ''
    }
    var index = 0
    var prefix = ''
    while(index >= 0) {
      var current = strs[0][index]
      if(!current) {
        break
      }
      var currentArr = []
      var length = strs.length
      for(var i = 0; i < length; i++) {
        if (strs[i][index] === current) {
          currentArr.push(current)
        } else {
          break
        }
      }
      if (currentArr.length === length) {
        prefix += currentArr[0]
        index++
      } else {
        index = -1
      }
    }
    return prefix
};


console.log(longestCommonPrefix(["dog","racecar","car"]))