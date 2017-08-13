class Node {
  constructor (data, right = null, left = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor () {
    this.root = null;
  }
  add (data) {
    // fetching the root node
    const node = this.root;
    
    if (node == null){
      // As the root node is empty the element will be assigned as the root node
      this.root = new Node(data); 
    }else{

      const searchTree = function (node) {
        if (data < node.data) {
          // if the data is less then the data of a node it will go to the left side of binary tree 
          if (node.left == null) {
            node.left = new Node(data);
            return;
          }
          else return searchTree(node.left)
        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data);
            return;
          }
          else return searchTree(node.right)
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }
  findMin () {
    var cuttent = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax () {
    var cuttent = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find (data) {
    var current = this.root;
    while (current.data !== data) {
      if (data < current.data) current = current.left;
      else if (data > current.data) current = current.right;
      if(current === null) break; 
    }
    return current;
  }
  isPresent (data) {
    var current = this.root;
    while (current) {
      if(current.data === data) return true;
      else if( data < current.data ) current = current.left;
      else current = current.right; 
    }
    return false;
  }
}