// "a good   example"
// 输出: "example good a"

// // 方法一：数组API + 正则不等式
//  const reverseWord = (s) => {
//      return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
//  }

//  方法二： 双向队列（两边都可以删除和添加）
// const reverseWord = (s) => {
//     let left = 0, right = s.length - 1
//     let arr = [], temp = ''
//     // 先把两端的空格去掉
//     // 注意这里使用！s.charAt(left)是无效的, 注意' '和''的区别
//     while(s.charAt(left) === ' ') left++
//     while(s.charAt(right) === ' ') right--
//     while(left <= right) {
//         let char = s.charAt(left)
//         if (char === ' ' && temp) {
//             arr.unshift(temp)
//             temp = ''
//         } else if (char !== ' ') {
//             temp += char
//         }
//         left++
//     }
//     arr.unshift(temp)
//     return arr.join(' ')
// }

//  正则表达式+API
const reverseWord = (s) => {
    let left = 0, right = s.length
    let result = [], char = ''
    // 去掉首尾的空格
    while(s.charAt(left) === ' ') left++
    while(s.charAt(right) === ' ') right--

    while(left < right) {
        let temp = s.charAt(left)
        if (temp !== ' ') {
            char += temp
        } else if (char && temp === ' ') {
            result.unshift(char)
            char = ''
        }
        left++
    }
    if (char) result.unshift(char)
    return result.join(' ')
}
const s = " a good   example  "
console.log(reverseWord(s)); 