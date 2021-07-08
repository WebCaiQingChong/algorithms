// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

//  

// 示例 1：

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]
// 示例 2：

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let len = nums.length
    let negative = -1

    for (let i = 0; i < len; i ++) {
        if (nums[i] < 0) {
            negative = i
        } else {
            break
        }
    }

    let ans = []

    let left = negative
    let right = negative + 1

    while (left >= 0 || right < len) {
        if (left < 0) {
            // 全是正数
            ans.push(nums[right] * nums[right])
            right ++
        } else  if (right === len){
            // 全是负数
            ans.push(nums[left] * nums[left])
            left --
        } else if (nums[left] * nums[left] < nums[right] * nums[right]) {
            ans.push(nums[left] * nums[left])
            left --
        } else {
            ans.push(nums[right] * nums[right])
            right ++
        }
    }

    return ans
};