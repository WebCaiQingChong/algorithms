// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    if (root === null) {
        return 0
    }

    if (root.left === null && root.right === null) {
        return 1
    }

    let leftDep = minDepth(root.left)
    let rightDep = minDepth(root.right)
    if (root.left !==null && root.right !==null) {
        return Math.min(leftDep, rightDep) + 1
    }

    return leftDep + rightDep + 1

};