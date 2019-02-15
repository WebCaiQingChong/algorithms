// 给定两个字符串 a = 'aabbcc', b = 'aabbss'
// 返回最长公共子串  'aabb'

// 动态规划解决方案

function lcs(word1, word2) {
  // 先创建用于存储匹配结果的二维数组
  var max = 0   // 公共子串的最大长度
  var index = 0 // 当前的位置

  var lcsarr = new Array(word1.length + 1).fill(new Array(word2.length + 1).fill(0))

  for(var i = 0; i <= word1.length; i++) {
    for(var j = 0; j <= word2.length; j++) {
      if (i === 0 || j === 0) {
        lcsarr[i][j] = 0
      } else {
        if(word1[i - 1] === word2[j - 1]) {
          lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1
        }
        if (max < lcsarr[i][j]) {
          max = lcsarr[i][j]
          index = i
        }
      }
    }
  }
  var str = ''
  console.log(index)
  console.log(max)
  if (max > 0) {
    for(var i = index - max; i < max; ++i) {
      str += word1[i]
    }
  }
  return str
}


console.log(lcs('12341234', '1234'))