// 树单元
function Node (data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
}

class BST {
    constructor(root = null) {
        this.root = root
    }

    insert (node) {
        if (this.root) {
            this._insertNode(this.root, node)
        } else {
            this.root = node
        }
    }

    _insertNode (targetNode, newNode) {
        // 小于当前节点的值，则放入左子节点
        if (targetNode.data > newNode.data) {
            if (targetNode.left) {
                this._insertNode(targetNode.left, newNode)
            } else {
                targetNode.left = newNode
            }
        } else {
        // 放入右子节点    
            if (targetNode.right) {
                this._insertNode(targetNode.right, newNode)
            } else {
                targetNode.right = newNode
            }
        }
    }

    min () {
        let current = this.root
        if (!current) {
            return null
        }
        while(current) {
            if (current.left) {
                current = current.left
            }
            return current.data
        }
        return current.data
    }

    
}

const a = new BST()
a.insert(new Node(10))
a.insert(new Node(2))
a.insert(new Node(3))
console.log(a.min())