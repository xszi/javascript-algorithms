// 拓扑排序，有向无环图

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