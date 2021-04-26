// 输入："abbbaca"
// 输出："ca"
// 解释："abbbaca" => "aaca"=>"ca"
const s = 'abbaca'
const removeDuplicatesTwoMore = (s) => {
    let stack = []
    for (let c of s) {
        let top = stack.pop()
        if (!top) {
            stack.push(c)
        } else if (top[0] !== c) {
            if (top.length >= 2) {
                // 如果连续字符的长度大于等于2，抛出上一次入栈连续字符之前的字符
                let topTop = stack.pop()
                // 上一次入栈连续字符之前的字符 与当前字符比较
                // 如果两者相等，按'abbaca'来解释，现在遍历到第二个a， topTop为第一个a
                if (topTop === c) {
                    stack.push(topTop + c)
                } else {
                    stack.push(topTop)
                    stack.push(c)
                }
            } else {
                // 如果连续字符的长度小于2，继续入栈
                stack.push(top)
                stack.push(c)
            }
        } else if (top === c) {
            // 保证连续相同的字符一次性整体入栈
            stack.push(top + c)
        }
    }
    return stack.join('')
}
// 输入："abbbaca"
function removeDuplicatesTwoMore (s) {
    let stack = [] // Space: O(n)
    let i = 0
    let top
    let next
    while (i < s.length) { // Time: O(n)
        top = stack[stack.length - 1]
        next = s[i]
        if (next === top) {
            // 如果相等，则有连续相同的字符
            // 需要把上一个出栈
            // 指针往后移，直到字符与该字符不相等
            stack.pop()
            while (s[i] === top ) i += 1
        } else {
            stack.push(s[i])
            i += 1
        }
    }
    return stack.join('')
}
console.log(removeDuplicatesTwoMore(s))

// 输入："abbbaca"
// 输出："ca"
// 解释："abbbaca" => "aaca"=>"ca"

const removeDuplicatesTwoMore = (s) => {
    let stack = []
    let i = 0
    let top, next
    while (i < s.length) {
        top = stack[stack.length - 1]
        if (top === s[i]) {
            stack.pop()
            while (top !==s[i]) i += 1
        } else {
            stack.push(s[i])
            i += 1
        }
    }
    return stack.join('')
}