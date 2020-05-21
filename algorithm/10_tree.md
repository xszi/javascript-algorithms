### 二叉树

- 递归实现

```js
var preorderTraversal = (root) => {
    let result = []
    ver preOrderTraverseNode = (node) => {
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