// 回溯算法的经典例子
// 递归马上要想到递归终止条件
// 每次递归所在的i值，是上层递归i值加1
// 逆推，回溯过程
// 回溯有两种结果一种是return，一种是循环完成
// 回溯到上一层的dfs后面继续执行
const arr = [1, 2, 3]
const permute = (arr) => {
    let result = []
    if (arr.length < 1) return result

    let used = {}, path = []
    const dfs = (path) => {
        if (path.length === arr.length) {
            result.push(path.slice())
            // result.push([...path])
            return
        }
        for (let i = 0, len = arr.length; i < len; i++) {
            if (used[i]) continue
            // 动态维护数组
            path.push(arr[i])
            used[i] = true
            // 继续递归下一个数
            dfs(path)
            // 撤销操作 这里不太好理解？回溯除了return之外还有循环走完
            console.log(path, i)
            used[i] = false
            path.pop()
        }
    }
    dfs(path)
    return result
}
permute(arr)

