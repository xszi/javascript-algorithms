// 定义：一种特殊的二叉树，左侧节点存储比父节点小的值，右侧节点存储比父节点大或相等的值

// 用一个类代表一棵二叉搜索树
function BinarySearchTree() {
    // 声明一个构造函数代表一个节点
    var Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null
    // 插入一个节点
    this.insert = function(key){
        var newNode = new Node(key);

        if(root === null){
            root = newNode;
        } else {
            insertNode(root, newNode)
        }
    }

    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    // 前序，中序，后序遍历

    // 搜索最小值和最大值
    this.max = function() {
        return maxNode(root)
    }

    this.min = function() {
        return minNode(root)
    }

    var maxNode = function(node) {
        if (node) {
            while(node && node.right !== null) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    var minNode = function(node) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    // 搜索一个特定的值
    this.search = function(key) {
        return searchNode(root, key)
    }

    var searchNode = function(node, key) {
        if (key === null) {
            return false
        }

        if (key < node.key) {
            return searchNode(node.left)
        } else if (key > node.key) {
            return searchNode(node.right)
        } else {
            return true
        }
    }

    // 移除一个节点
    this.remove = function(key) {
        root = removeNode(root, key) // root 被赋值为removeNode方法的返回值？？？
    }

    var removeNode = function(node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = removeNode(node.right, key)
        } else { // 键等于node.key
            // 第一种情况 —— 一个叶节点
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            // 第二种情况 —— 一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            // 第三种情况 —— 一个有两个子节点的节点
            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }

    var findMinNode = function(node) {
        while(node && node.left !== null) {
            node = node.left
        }
        return node
    }
}