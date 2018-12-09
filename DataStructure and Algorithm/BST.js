class Node {
  constructor(data, right = null, left = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }
  add(data) {
    // fetching the root node
    const node = this.root

    if (node == null) {
      // As the root node is empty the element will be assigned as the root node
      this.root = new Node(data)
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          // if the data is less then the data of a node it will go to the left side of binary tree
          if (node.left == null) {
            node.left = new Node(data)
            return
          } else return searchTree(node.left)
        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data)
            return
          } else return searchTree(node.right)
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }
  findMin() {
    var current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }
  findMax() {
    var current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
  find(data) {
    var current = this.root
    while (current && current.data !== data) {
      if (data < current.data) current = current.left
      else if (data > current.data) current = current.right
      if (current === null) break
    }
    return current
  }
  isPresent(data) {
    var current = this.root
    while (current) {
      if (current && current.data === data) return true
      else if (data < current.data) current = current.left
      else current = current.right
    }
    return false
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) return null
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null
        }
        if (node.left === null) return node.right
        if (node.right === null) return node.left
        let tempNode = node.right
        while (tempNode.left !== null) tempNode = tempNode.left
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
}

let tree = new BST()

tree.add(1)
tree.add(5)
tree.add(4)
tree.add(2)
tree.add(6)
tree.add(5)
tree.add(8)

console.log(tree.find(2))
console.log(tree.findMax())
console.log(tree.findMin())
console.log(tree.isPresent(1))
console.log(tree.find(1))
tree.remove(1)
console.log(tree.find(5))
