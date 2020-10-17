// 求树节点间的最短距离归根结底为求节点的最近公共祖先

// 之前有讨论过节点最近公共祖先的求解方法:

const lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (node, p, q) => {
        if (node === null) return false;
        // 左子树是否存在p或q节点
        const lson = dfs(node.left, p, q);
        // 右子树是否存在p或q节点
        const rson = dfs(node.right, p, q);
        if ((lson && rson) || ((node.val === p.val || node.val === q.val) && (lson || rson))) {
            ans = node;
        } 
        // 返回是否存在 p 或 q节点
        return lson || rson || (node.val === p.val || node.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};

// 得到最近公共祖先之后，把两个节点到最近公共祖先经历的节点保存在数组，最后数组的长度和即为树节点间的最短距离
const minDistance = (root, p, q) => {
    const ancestor = lowestCommonAncestor(root, p, q)
    let pDis = [], qDis = []
    getDistance(ancestor, p, pDis)
    getDistance(ancestor, q, qDis)
    return pDis.length + qDis.length
}

const getDistance = (node, target, paths) => {
    // 找到节点，返回true
    if (node === target) return true
    // 把当前节点push到数组中
    paths.push(node)
    let hasFound = false
    // 先找左子树
    if (root.left !== null) {
        hasFound = getDistance(root.left, target, paths)
    }
    // 左子树没找到，再找右子树
    if (!hasFound && root.right !== null) {
        hasFound = getDistance(root.right, target, paths)
    }
    // 如果左右子树都没找到，则需要将当前节点从数组pop
    if (!hasFound) {
        paths.pop()
    }
    return hasFound
}