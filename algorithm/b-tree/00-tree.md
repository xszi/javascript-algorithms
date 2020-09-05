### 二叉树先序遍历

- 递归实现

```js
var preorderTraversal = (root) => {
    let result = []
    var preOrderTraverseNode = (node) => {
        if(node) {
            // 先根节点
            result.push(node.val)
            // 然后遍历左子树
            preOrderTraverseNode(node.left)
            // 再遍历右子树
            preOrderTraverseNode(node.right)
        }
    }
    preOrderTraverseNode(root)
    return result
}
```

- 迭代实现
分析：使用栈来记录遍历的过程

```js
var preorderTraversal = (root) => {
    const list = []
    const stack = []

    if(root) stack.push(root)
    while(stack.length > 0) {
        const curNode = stack.pop()
        list.push(curNode.val)
        // 先push后左
        if(curNode.right !== null) {
            stack.push(curNode.right)
        }
        // 再push右
        if(curNode.left !== null) {
            stack.push(curNode.left)
        }
    }
    return list
}
```

### 二叉树中序遍历

- 递归实现

```js
var inorderTraversal = (root) => {
    let result = []
    var inorderTraversal = (node) => {
        if(node) {
            inorderTraversal(node.left)
            result.push(node.val)
            inorderTraversal(node.right)
        }
    }
    inorderTraversal(root)
    return result
}
```

- 迭代实现

```js
var inorderTraversal = function(root) {
    let list = []
    let stack = []
    let node = root
    while(stack.length || node) {
        if(node) {
            stack.push(node)
            node = node.left
            continue
        }
        node = stack.pop()
        list.push(node.val)
        node = node.right
    }
    return list
}
```