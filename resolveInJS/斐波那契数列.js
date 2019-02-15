// 1.递归方法

function recurFib(n) {
  if (n < 2) {
    return n
  } else {
    return recurFib(n -1) + recurFib(n -2)
  }
}

// 方法解析
// 可将上述进行扁平化拆分即
// recurFib(10) = recurFib(9) + recurFib(8)
//              = recurFib(8) + recurFib(7) + recurFib(7) + recurFib(6)
//            ...
//            ...
//            ...
//  用数字直接替代
//   10 = 9 + 8 = 8 + 7 + 7 + 6 = 7 + 6 + 6 + 5 + 6 + 5 + 5 + 4
// 最终将这么全部拆分成<2，的值，然后累加




// 2.动态规划

function dynFib(n) {
  var val = []
  for(var i = 0; i <= n; i++) {
    val[i] = 0
  }
  if (n === 1 || n === 2) {
    return 1
  } else {
    val[1] = 1
    val[2] = 2
    for(var j = 3; j <= n; j++) {
      val[j] = val[j -1] + val[j - 2]
    }
    return val[n - 1]
  }
}

console.log(dynFib(10))
