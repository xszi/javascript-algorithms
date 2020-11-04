// const removeDuplicates = (s) => {
//     let stack = []
//     for (let i = 0, len = s.length; i < len; i++) {
//         if (s[i] === stack[stack.length - 1]) {
//             stack.pop()
//         } else {
//             stack.push(s[i])
//         }
//     }
//     return stack.join('')
// }

// const s = 'cscscsaa'
// console.log(deleteMethod(s))

// 输入：s = "deeedbbcccbdaa", k = 3
// 输出："aa"
// const removeDuplicates = function(s, k) {
//     let stack = [];
//     for(let c of s){
//         const prev = stack.pop();
//         if(!prev || prev[0] !== c){
//             stack.push(prev)
//             stack.push(c)
//         }else if(prev.length < k-1){
//             // 假设 s = "deeedbbcccbdaa", k = 3
//             // 第一次后面这个操作会压入'ee'
//             stack.push(prev + c)
//         }
//     }
//     return stack.join('')
// };

// const s = "deeedbbcccbdaa", k = 3

// removeDuplicates(s, k)

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