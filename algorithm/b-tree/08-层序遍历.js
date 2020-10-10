// 层次遍历

// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7] ,

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层次遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// 思路： 先从上而下 ，最后进行数组 reverse 操作
// 方法一使用BFS（广度优先搜索）借助队列
const layerIterationBFS = (root) => {
    let res = []
        queue = [root]
    while(queue.length) {
        let curLayer = []
            temp = []
        while (queue.length) {
            let curNode = queue.shift()
            curLayer.push(curNode.value)
            curNode.left && temp.push(curNode.left)
            curNode.right && temp.push(curNode.right)
        }
        res.push(curLayer)
        queue = temp
    }
    return res.reverse()
}

// 方法二使用DFS（深度优先搜索）每次深度遍历的时候记录当前元素的深度, 检查当前深度的列表是否存在。
// 若存在，将当前节点放入该列表的末尾；
// 若不存在，以当前深度为键，创建新的深度列表保存该深度的节点
const layerIterationDFS = (root) => {
    const res = []
    const dfs = (node, depth) => {
        if (node === null) return
        res[depth] = res[depth] || []
        res[depth].push(node.value)
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1) 
    }
    dfs(root, 0)
    return res.reverse()
}