// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

//  

// 示例 1：

// 输入：c = 5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5
// 示例 2：

// 输入：c = 3
// 输出：false
// 示例 3：

// 输入：c = 4
// 输出：true
// 示例 4：

// 输入：c = 2
// 输出：true
// 示例 5：

// 输入：c = 1
// 输出：true
//  

// 提示：

// 0 <= c <= 231 - 1

// 来源：力扣（LeetCode）

/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum1 = function(c) {
    // 解法1，使用Math.sqrt进行开方处理，然后进行穷举
    for (let a = 0; a * a < c; a ++) {
        const b = Math.sqrt(c - a*a)
        // 判断b是整数，如果是，则直接返回，否则继续穷举
        if (b === parseInt(b)) {
            return true
        }
    }

    return false
};


/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum2 = function(c) {
    // 双指针实现
    // 假设a <= b, 初始化a = 0, b = 根号c
    // 如果 a^2 + b ^ 2 = c,则有解
    // 如果 a ^ 2 + b ^ 2 < c, 则a + 1
    // 如果 a ^ 2 + b ^ 2 > c, 则b - 1
    let left = 0
    let right = Math.floor(Math.sqrt(c))
    while(left <= right) {
     const sum = left ^ 2 + right ^ 2
     if (sum === c) {
        return true
     } else if (sum < c) {
        left ++
     } else {
         right --
     }
    }

    return false
};