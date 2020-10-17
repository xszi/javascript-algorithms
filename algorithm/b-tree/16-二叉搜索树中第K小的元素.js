// 根据前面二叉搜索树（BST）的了解，对二叉搜索树中序遍历，就是对其进行从小到大排序。

// 所以对BST排序之后，第K小的元素就是数组arr[k+1]

// 递归
const kthSmallest = function(root, k) {
    let res = null
    const inOrderTraverseNode = function(node) {
        if(node !== null && k > 0) {
            // 先遍历左子树
            inOrderTraverseNode(node.left)
            // 然后根节点
            if(--k === 0) {
                res = node.val
                return 
            }
            // 再遍历右子树
            inOrderTraverseNode(node.right)
        }
    }
    inOrderTraverseNode(root)
    return res
}

// 迭代
const kthSmallest = (root, k) => {
    let stack = []
    let node = root
    while (node || stack.length) {
        // 遍历左子树
        while(node) {
            stack.push(node)
            node = node.left
        }
        // 根节点
        node = stack.pop()
        if(--k === 0) {
            res = node.val
            return res
        }
        // 遍历右子树
        node = node.right
    }
    return nll
}
