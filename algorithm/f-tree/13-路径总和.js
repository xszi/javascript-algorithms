const pathSum = (root, sum) => {
    // 空树
    if (root === null) return false
    // 叶子节点
    if (root.left === null && root.right === null) return root.value === sum
    // 总和减去当前节点值，再深度递归
    return pathSum(root.left, sum - root.value) || pathSum(root.right, sum - root.value)
}