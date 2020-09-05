// 中序遍历（递归）
const midorderTraversal = (root) => {
    let result = []
    const midorderTraverseNode = (node) => {
        if (node) {
            // 左子树
            midorderTraverseNode(node.left)
            // 跟节点
            result.push(node.value)
            // 右子树
            midorderTraverseNode(node.right)
        }
    }
    midorderTraverseNode(root)
    return result
}

// 中序遍历（迭代）
const midorderTraversal = (root) => {
    let result = []
    let stack = []
    let node = root
    while (stack.length || node) {
        // 先根节点入栈
        // 再左节点入栈
        // 所以左节点先出栈，根节点后出栈
        if (node) {
            stack.push(node)
            node = node.left
            continue
        }
        node = stack.pop()
        result.push(node.value)
        node = node.right
    }
    return result
}