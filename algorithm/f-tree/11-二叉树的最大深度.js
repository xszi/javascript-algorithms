const maxTreeDeepth = (root) => {
    if (root === null) return 0
    return 1 + Math.max(maxTreeDeepth(root.left), maxTreeDeepth(root.right))
}