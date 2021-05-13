// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) {
        return true
    }

    function trverse (node) {
        if (node === null) {
            return 0
        }
        return Math.max(trverse(node.left), trverse(node.right)) + 1
    }
    return Math.abs(trverse(root.left) - trverse(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};