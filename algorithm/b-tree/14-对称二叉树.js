//    1
//   / \
//  2   2
// / \ / \
//3  4 4  3
// 方法一： 递归回溯方法
const isSymtrical = (root) => {
    if (root === null) return true
    return isSame(root.left, root.right)
}

const isSame = (left, right) => {
    if (!left && !right) return true
    if (!left || !right) return false
    return (left.value === right.value) && isSame(left.left, right.right) && isSame(left.right, right.left)
}

// 复杂度分析：

// 时间复杂度：O(n)
// 空间复杂度：O(n)


// 方法二： 迭代方法
// 使用栈来记录比较过程
const isSymtrical = (root) => {
    if (root === null) return true
    let stack = [root.left, root.right]
    while (start.length) {
        let right = stack.pop()
        let left = stack.pop()
        if (left && right) {
            if (left.value !== right.value) return false
            stack.push(left.left)
            stack.push(right.right)
            stack.push(left.right)
            stack.push(right.left)
        } else if (left || right) {
            return false
        }
    }
    return true
}

// 复杂度分析：

// 时间复杂度：O(n)
// 空间复杂度：O(n)