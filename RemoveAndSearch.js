function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.add = function(data) {
    var node = new Node(data);
    if (!this.root) {
        this.root = node;
    } else {
        var current = this.root;
        while (current) {
            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else if (node.data > current.data) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            } else {
                break;
            }
        }
    }
};
BinarySearchTree.prototype.remove = function(data) {
    var that = this;
    var removeNode = function(node, data) {
        if (!node) {
            return null;
        }
        if (data === node.data) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            // 2 children
            var temp = that.getMin(node.right);
            node.data = temp;
            node.right = removeNode(node.right, temp);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    };
    this.root = removeNode(this.root, data);
};
BinarySearchTree.prototype.contains = function(data) {
    var current = this.root;
    while (current) {
        if (data === current.data) {
            return true;
        }
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return false;
};
BinarySearchTree.prototype._preOrder = function(node, fn) {
    if (node) {
        if (fn) {
            fn(node);
        }
        console.log((node.show() + " "));
        this._preOrder(node.left, fn);
        this._preOrder(node.right, fn);
    }
};
BinarySearchTree.prototype._inOrder = function(node, fn) {
    if (node) {
        this._inOrder(node.left, fn);
        if (fn) {
            fn(node);
        }
        console.log((node.show() + " "));
        this._inOrder(node.right, fn);
    }
};
BinarySearchTree.prototype._postOrder = function(node, fn) {
    if (node) {
        this._postOrder(node.left, fn);
        this._postOrder(node.right, fn);
        if (fn) {
            fn(node);
        }
        console.log((node.show() + " "));
    }
};
BinarySearchTree.prototype.print = function() {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('|');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.data.toString() + ' ';
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    console.log(string.slice(0, -2).trim());
};
BinarySearchTree.prototype.printByLevel = function() {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('\n');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    console.log(string.trim());
};
BinarySearchTree.prototype.getMin = function(node) {
    if (!node) {
        node = this.root;
    }
    while (node.left) {
        node = node.left;
    }
    return node.data;
};
BinarySearchTree.prototype.getMax = function(node) {
    if (!node) {
        node = this.root;
    }
    while (node.right) {
        node = node.right;
    }
    return node.data;
};
var binarySearchTree = new BinarySearchTree();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);
binarySearchTree.add(4);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);
binarySearchTree.print(); // => 5 | 3 7 | 2 4 6 8
binarySearchTree.printByLevel(); // => 5 \n 3 7 \n 2 4 6 8
console.log("The Max is:" + binarySearchTree.getMax());
console.log("The Min is:" + binarySearchTree.getMin());
binarySeatchTree._inOrder();
binarySearchTree._postOrder();
binarySearchTree._preOrder();
