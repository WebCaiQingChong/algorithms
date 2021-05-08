// 计算给定二叉树的所有左叶子之和。


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
 var sumOfLeftLeaves = function(root) {
    let total = 0
    function traverse(root, isLeft) {
        if(!root) {
            return
        }
        if (isLeft) {
            total+= root.val
        }
        traverse(root.left, true)
        traverse(root.right )
    }
    traverse(root.left, true)
    traverse(root.right)
    return total
};