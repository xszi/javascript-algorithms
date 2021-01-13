// 拓扑排序（有向无环图）
// 广度优先遍历
// 例如：
// 输入: 5, [[4,2],[4,3],[2,0],[2,1]]
// 使用 邻接表 来表示有向图中各个节点的依赖关系，同时维护一个入度表，则入度表中入度为 0 的节点所表示的课程是可以立即开始学习的（没有先决条件条件或先觉条件已完成）

// 那么这题就很简单了:

// 创建一个队列，并将临接表中所有入度为 0 的节点放入队列中
// 若队列非空，则从队列中出队第一个节点，numCourse — （学习该课程），然后将将依赖该课程所有临接节点的入度减 1
// 若减 1 后节点入度为 0，则该课程又是可立即学习课程，将该节点添加到队尾
// 若减 1 后节点入度不为 0 ，则继续遍历下一节点
// 当队列为空，检查 numCourses === 0 （所有课程是否全部学习结束）即可

let canFinish = function(numCourses, prerequisites) {
    // 如果没有先决条件，即所有的课程均没有依赖关系
    // 直接返回 true
    if (prerequisites.length === 0) {
        return true
    }

    // 维护入度表
    let inDegree = new Array(numCourses).fill(0)
    // 维护临接表
    let adj = new Map()
    
    for (let e of prerequisites) {
        inDegree[e[0]]++
        if(!adj.has(e[1])) adj.set(e[1], [])
        let vEdge = adj.get(e[1])
        vEdge.push(e[0])
    }

    let queue = []
    // 首先加入入度为 0 的结点
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length > 0) {
        // 从队首移除
        var v = queue.shift() 
        // 出队一门课程
        numCourses--
        if(!adj.has(v)) continue
        // 遍历当前出队结点的所有临接结点
        for(let w of adj.get(v)) {
            inDegree[w]--
            if (inDegree[w] === 0) {
                queue.push(w)
            }
        }
    }
    return numCourses === 0
}