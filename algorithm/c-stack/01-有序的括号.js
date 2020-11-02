// const validBrackets =  (str) => {
//     const map = {
//         '[': ']',
//         '{': '}',
//         '(': ')'
//     }
//     const stack = []
//     for (let i = 0; i< str.length; i++) {
//         if(map[str[i]]) {
//             stack.push(str[i])
//         } else if(map[stack.pop()] !== str[i]) {
//             return false
//         }
//     }
//     return true
// }

// const str = "()"
// console.log(validBrackets(str));

// const str = "()[]{}"
// console.log(validBrackets(str));

// const str = "([)]"
// console.log(validBrackets(str));

// const str = "{[]}"
// console.log(validBrackets(str));