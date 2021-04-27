// const s = 'bbbbb'

// 队列思想维护数组
// const maxLength = (s) => {
//     let queue = []
//     let length = 0
//     for (let i = 0; i < s.length; i++) {
//         if (queue.indexOf(s[i]) === -1) {
//             queue.push(s[i])
//         } else {
//             length = Math.max(queue.length, length)
//             while(queue.shift() !== s[i]) {
//                 queue.push(s[i])
//             }
//         }
//     }
//     return length
// }

// 数组API维护数组
// const maxLength = (s) => {
//     let length = 0
//     let arr = []
//     for (let i = 0; i < s.length; i++) {
//         let index = arr.indexOf(s[i])
//         if (index !== -1) {
//             arr.splice(0, index+1)
//         }
//         arr.push(s[i])
//         length = Math.max(arr.length, length)
//     }
//     return length
// }

// 维护下标
// const maxLength = (s) => {
//     let index = 0, length = 0
//     for (let i = 0, j = 0; j < s.length; j++) {
//         index = s.substring(i, j).indexOf(s.charAt(j))
//         if (index !== -1) {
//             i = i + index + 1
//         }
//         length = Math.max(length, j - i + 1)
//     }
//     return length
// }

// 使用Map 维护下标
const maxLength = (s) => {
    let map = new Map(), length = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            // i = Math.max(map.get(s[j]) + 1, i)
            i = map.get(s[j]) + 1
        }
        length = Math.max(length, j - i + 1)
        map.set(s[j], j)
    }
    return length
}

// console.log(maxLength(s));

// 输入: "abcabcbb"
// 输出: 3 
// API维护数组
const maxLength1 = (s) => {
    let len = s.length
    let arr = []
    let left = 0
    let count = 0
    while (left < len) {
        let index = arr.indexOf(s[left])
        if (index !== -1) {
            count = Math.max(count, arr.length)
            arr = arr.slice(index + 1)
        }
        arr.push((s[left]))
        left++
    }
    return count
}
// 队列维护数组
const maxLength2 = (s) => {
    let len = s.length
    let queue = []
    let left = 0
    let count = 0
    while (left < len) {
        let index = queue.indexOf(s[left])
        if (index !== -1) {
            count = Math.max(count, queue.length)
            while (index >= 0) {
                queue.shift()
                index--
            }
        }
        queue.push((s[left]))
        left++
    }
    return count
}
// 使用map维护下标
const s = 'abcabcbb'
console.log(maxLength(s));