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
    if (start <= chars[s[i]]) {
      start = chars[s[i]] + 1
    } else {
      mx = Math.max(mx, i - start + 1)
    }
    chars[s[i]] = i
  }
  return mx
}
console.log(lengthOfLongestSubstring('dvdc'))

// 没写出来，有问题，但是两点了，得睡觉了
