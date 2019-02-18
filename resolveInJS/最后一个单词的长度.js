// 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

// 如果不存在最后一个单词，请返回 0 。

// 说明：一个单词是指由字母组成，但不包含任何空格的字符串。

// 示例:

// 输入: "Hello World"
// 输出: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var s1 = s.trim()
    var length = s1.length
    var result = 0
    for(var i = length - 1; i >= 0; i --) {
      if(s1[i] === ' ') {
        break
      } else {
        result += 1
      }
    }

    return result
};


console.log(lengthOfLastWord("a \n"))
