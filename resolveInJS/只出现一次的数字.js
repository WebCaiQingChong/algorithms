// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
// 找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var map = {}
  var length = nums.length
  if (length === 1) {
    return nums[0]
  }
  for(var i = 0; i < length; i ++) {
    if(map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1
    }
  }
  for(var index in map) {
    if(map[index] === 1) {
      return index
    }
  }
};


// 使用位运算 异或进行求解
// 因为题目中有说，其他元素均出现两次，而 n ^ n = 0, 0 ^ target = target
// 进行全组异或后，配对全为0， 只剩下0 与我们的目标值
var xorSingleNumber = function (nums) {
  return nums.reduce((r, n) => {
    console.log(r ^ n)
    return r ^ n
  })
}

console.log(xorSingleNumber([4,1,2,1,2]))