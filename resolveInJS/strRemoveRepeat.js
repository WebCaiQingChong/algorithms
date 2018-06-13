 // Longest Substring Without Repeating Characters
//  Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if (s.length === 1) {
//     return 1
//   }
//   var str = ''
//   var subStr = ''
//   var target = 0
//   for (var i = 0; i < s.length; i++) {
//     if (str.indexOf(s[i]) <= -1) {
//       str += s[i]
//       subStr += s[i]
//       target = subStr.length
//     } else {
//       if (subStr.indexOf(s[i]) > -1) {
//         target = subStr.length > target ? subStr.length : target
//         subStr = s[i]
//       } else {
//         subStr += s[i]
//         target = subStr.length
//       }
//     }
//   }
//   return target
// }
var lengthOfLongestSubstring = function (s) {
  let [mx, start, chars] = [0, 0, {}]
  for (let i = 0; i < s.length; i++) {
    // 如果该条件不成立，即chars[s[i]] === undefined ,也就是字符串还未重复
    if (start <= chars[s[i]]) {
      start = chars[s[i]] + 1
    } else {
      // 字符串不重复，max值累加
      mx = Math.max(mx, i - start + 1)
    }
    chars[s[i]] = i
  }
  return mx
}
console.log(lengthOfLongestSubstring('abcdfffffff'))

// 没写出来，有问题，但是两点了，得睡觉了

// 答案解析：
// max来保存最大值，start来记录当前的断续之后的长度，chars来记录不重复的字符串，
// chars对象的key值为出现过的字符串，value表示出现的最后位置
// max的值来取重复中最大的长度，或者不重复的长度会一直来叠加max
