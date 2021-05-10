// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

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
 var maxDepth = function(root) {
    if (!root) {
        return 0
    }

    function traverse (treeNode, dep) {
        if (treeNode === null) {
            return dep
        }
        const leftDep = traverse(treeNode.left, dep + 1)
        const rightDep = traverse(treeNode.right, dep + 1)
        return Math.max(leftDep, rightDep)
    }

    return Math.max(traverse(root.left,1), traverse(root.right, 1))
};