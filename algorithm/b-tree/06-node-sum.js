// 计算完全二叉树的节点个数

// 二分法
const countNodes = (root) => {
    if (root === null) return 0
    const lHeight = height(root.left)
    const rHeight = height(root.right)
    // 左右子树高度一样
    if (lHeight === rHeight) {
    // 左子树必为满二叉树，故其节点个数为(2^lHeight - 1), 递归获取右子树的节点个数 
        return Math.pow(2, lHeight) + countNodes(root.right)
    } else {
    // 左右子树高度不一样
    // 右子树必为满二叉树，故其节点个数为(2^rHeight - 1), 递归获取左子树的节点个数
        return Math.pow(2, rHeight) + countNodes(root.left)
    }
}

const height = (root) => {
    if (root === null) return 0
    return 1 + height(root.left)
}

// 递归方法
const countNodes = (root) => {
    if (root === null) return 0
    return 1 + countNodes(root.right) + countNodes(root.left) 
}
// 另一种递归写法
const countNodes = (root) => {
    const res = 0
    dfs(root)
    return res

    function dfs(root) {
        if(root === null) return
        res++
        dfs(root.left)
        dfs(root.right)
    }
}

