// 方法一： 自上而下暴力求解
const isBalanced = (root) => {
    if (root === null) return true
    return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

const depth = (node) => {
    if (node === null) return -1
    return 1 + Math.max(depth(root.left), depth(root.right))
}

// 时间复杂度：O(nlogn)，我知道确实有大量冗余深度计算操作，但是这个nlogn是肿么求解的？
// 空间复杂度：O(n)

// 方法二：自下而上后序遍历

const isBalanced = (root) => {
    return balanced(root) !== 0
}

const balanced = (node) => {
    if (node === null) return 0
    const left = balanced(node.left)
    const right = balanced(node.right)
    // 只要左右子树其中一个不符合就可以判断
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1
    } else {
        return 1 + Math.max(left, right)
    }
}