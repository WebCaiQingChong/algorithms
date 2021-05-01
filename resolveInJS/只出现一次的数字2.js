// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

//  

// 示例 1：

// 输入：nums = [2,2,3,2]
// 输出：3
// 示例 2：

// 输入：nums = [0,1,0,1,0,1,99]
// 输出：99
//  

// 提示：

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次
//  

// 进阶：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let cacheMap = {}
    const length = nums.length
    if (length === 1) {
        return nums[0]
    }
    for (let i = 0; i <= length - 1; i++) {
        const currentNumber = nums[i]
        const currentKey = cacheMap[currentNumber]
        if (currentKey !== undefined) {
            if (currentKey >= 2) {
                delete cacheMap[currentNumber]
            } else {
                cacheMap[currentNumber] ++
            }
        } else {
            cacheMap[currentNumber] = 1
        }
    }

    return Object.keys(cacheMap)[0]
};

const target = [30000,500,100,30000,100,30000,100]
const result = singleNumber(target)
console.log(result)