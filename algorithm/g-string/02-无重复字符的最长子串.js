// 维护数组
// const longestSubstring = (str) => {
//     if (!str || !str.length === 0) return 0
//     let arr = str.split('')
//     let temp = [], maxLength = 0
//     for (let i = 0; i < arr.length; i++) {
//         const index = temp.indexOf(arr[i]);
//         if (index !== -1) {
//             if (temp.length > maxLength) {
//                 maxLength = temp.length
//             }
//             temp = temp.slice(index + 1, temp.length)
//         }
//         temp.push(arr[i])
//     }
//     return maxLength
// }

// 维护下标
// const longestSubstring = (str) => {
//     if (!str || !str.length === 0) return 0
//     let index = 0, maxLength = 0
//     for (let i = 0, j = 0; j < str.length; j++) {
//         index = str.substring(i, j).indexOf(str[j]);
//         if (index !== -1) {
//             const length = j - i
//             if (length > maxLength) {
//                 maxLength = length
//             }
//             i = i + index + 1
//         }
//     }
//     return maxLength
// }

// Map
const longestSubstring = (str) => {
    if (!str || !str.length === 0) return 0
    let map = new Map(), maxLength = 0
    for(let i = 0, j = 0; j < str.length; j++) {
        if (map.has(str[j])) {
            // i = map.get(str[j]) + 1
            i = Math.max(map.get(str[j]) + 1, i) // 为什么要取最大值？
        }
        maxLength = Math.max(maxLength, j - i + 1)
        map.set(str[j], j)
    }
    return maxLength
}

const str = 'pwwkew'

console.log(longestSubstring(str));