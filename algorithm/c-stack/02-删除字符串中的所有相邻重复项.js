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
const removeDuplicates = function(s, k) {
    let stack = [];
    for(let c of s){
        const prev = stack.pop();
        if(!prev || prev[0] !== c){
            stack.push(prev)
            stack.push(c)
        }else if(prev.length < k-1){
            // 假设 s = "deeedbbcccbdaa", k = 3
            // 第一次后面这个操作会压入'ee'
            stack.push(prev + c)
        }
    }
    return stack.join('')
};

const s = "deeedbbcccbdaa", k = 3

removeDuplicates(s, k)