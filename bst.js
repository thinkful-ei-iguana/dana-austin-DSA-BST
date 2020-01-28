class Bst {
  constructor(
    key = null,
    value = null,
    parent = null
  ) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    //if the root is null create a new node
    else if (this.key < key) {
      if (!this.right) {
        this.right = new Bst(
          key,
          value,
          this
        );
      } else {
        this.right.insert(key, value);
      }
    } else {
      if (!this.left) {
        this.left = new Bst(
          key,
          value,
          this
        );
      } else {
        this.left.insert(key, value);
      }
    }
  }

  remove(key) {
    //if the root is the key then remove it
    if (this.key === key) {
      if (this.left && this.right) {
        let successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        //just the left child
        this._replaceWith(this.left);
      } else if (this.right) {
        //just the right child
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
      //if it has both children then you need to set
    } else if (
      this.key < key &&
      this.right
    ) {
      //look right
      this.right.remove(key);
    } else if (
      this.key > key &&
      this.left
    ) {
      //look left
      this.left.remove(key);
    } else {
      throw new Error('key problems');
    }
  }

  find(key) {
    //if the root is the key then return the value
    if (this.key === key) {
      return this.value;
    } else if (this.key > key) {
      //if the key is less than the current key
      return this.left.find(key);
    } else {
      //if the key is greater than the current key
      return this.right.find(key);
    }
  }

  _replaceWith(node) {
    //is this not root?
    if (this.parent) {
      //if this (to be replaced) is a right node of its parent-> make the this.parent.right = node
      if (this === this.parent.right) {
        this.parent.right = node;
      }
      //if this (to be replaced) is a left node of its parent-> make the this.parent.left = node
      if (this === this.parent.left) {
        this.parent.left = node;
      }
      //if the node is not null then make the node parent this.parent
      if (node) {
        node.parent = this.parent;
      }
    } else {
      //otherwise is root!
      //set the value of the root node(this) to equal values of the node
      if (node) {
        this.value = node.value;
        this.key = node.key;
        this.right = node.right;
        this.left = node.left;
      } else {
        this.value = null;
        this.key = null;
        this.right = null;
        this.left = null;
      }
      //otherwise it is a null so do that.
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

module.exports = Bst;
