// 给定一个二叉树，检查它是否是镜像对称的。


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
 var isSymmetric = function(root) {
    if (!root) {
        return false
    }

    function compareVal (left, right) {
        if (left === null && right === null) {
            return true
        }
        if (left === null || right === null) {
            return false
        }

        if (left.val !== right.val) {
            return false
        }

        return compareVal(left.left, right.right) && compareVal(left.right, right.left)
        
    }

    return compareVal(root.left, root.right)
};