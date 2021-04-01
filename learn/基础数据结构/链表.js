class Node {
 constructor(element) {
     this.element = element
     this.next = null
 }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    // append
    append (element) {
        const node = new Node(element)
        let currentNode = this.head
        if (!this.head) {
            this.head = node
        } else {
            while(currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node
        }
        this.length ++
    }
    // insert
    insert(position,element) {
        const node = new Node(element)
        
        if (position < 0 || position > this.length) {
            return false
        } else {
            let index = 0
            let currentNode = this.head
            let previousNode = null

            if (position === 0) {
                this.head = node
                this.head.next = currentNode
            } else {
                while(index < position) {
                    index ++
                    previousNode = currentNode
                    currentNode = currentNode.next
                }
    
                previousNode.next = node
                node.next = currentNode
            }
            
            
        }

        this.length ++
        return true
    }

    // removeAt
    removeAt (position) {
        if (position < 0 || position > this.length || this.length === 0) {
            return false
        }
        let index = 0
        let currentNode = this.head
        if (position === 0) {
            this.head = currentNode.next
        } else {
            let previousNode = null
            while(index < position) {
                index ++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next

        }
        this.length --
        return true

    }
    // remove
    remove(element) {
        let index = this.indexOf(element)
        return this.removeAt(index)
    }

    // indexOf
    indexOf(element) {
        let currentNode = this.head
        let index = 0
        if (this.length <= 0 ) {
            return -1
        }
        while(currentNode.next) {
            if (currentNode.element === element) {
                return index
            }
            currentNode = currentNode.next
            index ++
        }

        return -1
    }

    // isEmpty
    isEmpty() {
        return this.length === 0
    }

    // size

    size () {
        return this.length
    }
    // getHead

    getHead() {
        return this.head
    }
    // toString
    toString() {
        let currentNode = this.head
        let str = ''
        while(currentNode) {
            str += `,${currentNode.element}`
            currentNode = currentNode.next
        }
        return str.slice(1)
    }

    // print 
    print() {
        console.log(this.toString())
        
    }

    // list
    list() {
        return this.head
    }
}


const singlyLinked = new SinglyLinkedList()
console.log(singlyLinked.removeAt(0)); // false
console.log(singlyLinked.isEmpty()); // true
singlyLinked.append('Tom');
singlyLinked.append('Peter');
singlyLinked.append('Paul');
singlyLinked.print(); // "Tom,Peter,Paul"
singlyLinked.insert(0, 'Susan');
singlyLinked.print(); // "Susan,Tom,Peter,Paul"
singlyLinked.insert(1, 'Jack');
singlyLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(singlyLinked.getHead()); // "Susan"
console.log(singlyLinked.isEmpty()); // false
console.log(singlyLinked.indexOf('Peter')); // 3
console.log(singlyLinked.indexOf('Cris')); // -1
singlyLinked.remove('Tom');
singlyLinked.removeAt(2);
singlyLinked.print(); // "Susan,Jack,Paul"
singlyLinked.list(); // 具体控制台
