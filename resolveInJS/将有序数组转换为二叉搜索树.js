// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null
    }

    if (nums.length === 1) {
        return new TreeNode(nums[0])
    }

    function dfs(nums, start, end) {
        if (start > end) {
            return null
        }
        const mid = (start + end) >>> 1 // 去中间数，位运算
        const root = new TreeNode(nums[mid])
        root.left = dfs(nums, start, mid - 1)
        root.right = dfs(nums, mid + 1, end)
        return root
    }

    return dfs(nums, 0, nums.length - 1)
};