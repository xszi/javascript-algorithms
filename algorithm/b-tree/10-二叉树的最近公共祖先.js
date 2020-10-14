// 递归回溯方法
// 符合条件的最近公共祖先 x 一定满足如下条件：
// ( lson && rson ) || ( (x === p || x === q) && (lson || rson) )
// 其中：
// lson 表示左子树是否存在p或q节点
// rson右子树是否存在p或q节点
// x === p 表示 此时遍历正在的节点 x 恰好是p节点
// x === q 表示 此时遍历正在的节点 x 恰好是q节点
// 所以， 组合起来看：
// 第一种情况：假如左子树存在p或q节点， 而且右子树存在p（左子树存在q）或q（左子树存在p）节点，那当前节点x即为最近公共祖先。
// 第一种情况：此时遍历正在的节点 x 恰好是p节点或者恰好是q节点， 而且左子树或右子树存在p或q节点，那当前节点x即为最近公共祖先。
var lowestCommonAncestor = function(root, p, q) {
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