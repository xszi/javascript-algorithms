// 后续遍历（递归）
const preorderTraversal = (root) => {
    let result = []
    const preOrderTraverseNode = (node) => {
        if (node) {
            // 左子树
            preOrderTraverseNode(node.left)
            // 右子树
            preOrderTraverseNode(node.right)
            // 根节点
            result.push(node.value)
        }
    }
    preOrderTraverseNode(root)
    return result
}

// 后续遍历（迭代实现）
const postorderTraversal = (root) => {
    let result = []
    let stack = []

    // 当根节点不为空的时候，将根节点入栈
    if (root) stack.push(root)
    while (stack.length) {
        const curNode = stack.pop()
        // 根左右=> 右左根
        list.unshift(curNode.value)

        // 先进栈左子树后右子树
        // 所以右子树先出栈
        // 右先头插法unshift插入result
        // 左再头插法unshift插入result
        // 实现右左根=>左右根
        if(curNode.left !== null) {
            stack.push(curNode.left)
        }
        if(curNode.right !== null) {
            stack.push(curNode.right)
        }
    }
    return result
}