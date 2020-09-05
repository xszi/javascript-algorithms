// 前序遍历(递归实现)
const preorderTraversal = (root) =>{
    let result = []
    const preOrderTraverseNode = (node) => {
        if (node) {
            // 根节点
            result.push(node)
            // 左节点
            preOrderTraverseNode(node.left)
            // 右节点
            preOrderTraverseNode(node.right)
        }
    }
    preOrderTraverseNode(root)
    return result
}

// 前序遍历（迭代实现）
const preorderTraversal = (root) => {
    let result = []
    let stack = []
    if (root) stack.push(root)
    while (stack.length) {
        const curNode = stack.pop()

        // 第一步 访问根节点
        result.push(curNode.value)
        
        // 右子树 （先进后出）
        if (curNode.right !== null) {
            stack.push(curNode.right)
        }

        // 左子树
        if (curNode.right !== null) {
            stack.push(curNode.right)
        }
    }

    return result
}