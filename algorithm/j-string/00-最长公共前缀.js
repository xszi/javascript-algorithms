// 最长公共前缀
// 输入: ["flower","flow","flight"]
// 输出: "fl

// 公共指针法
// const longestCommonPrefix = (arr) => {
//     if (!arr || !arr.length) return '';

//     let currentIndex = 0

//     while (true) {
//         // 取数组第一个元素的第一个字符作为比较的参照
//         let refer = arr[0][currentIndex]
//         // 是否全部匹配
//         const currentAllMatched = arr.reduce((prev, str) => {
//             return prev && str.charAt(currentIndex) === refer
//         }, true)

//         if (currentAllMatched) {
//             currentIndex++
//         } else {
//             break
//         }
//     }

//     return arr[0].substring(0, currentIndex)
// }

// 逐个比较
// const longestCommonPrefix = (arr) => {
//     if (!arr || !arr.length) return ''

//     let prev = arr[0]
//     for(let i = 1; i < arr.length; i++) {
//         let j = 0
//         for(; j < prev.length && j < arr[i].length; j++) {
//             if (prev.charAt(j) !== arr[i].charAt(j)) break
//         }
//         prev = prev.substring(0, j)
//         if (prev === '') return ''
//     }
//     return prev
// }

// 仅需最大、最小字符串的最长公共前缀
// 解题思路： 获取数组中的最大值及最小值字符串，最小字符串与最大字符串的最长公共前缀也为其他字符串的公共前缀，即为字符串数组的最长公共前缀
// 例如 abc 、 abcd 、ab 、ac ，最小 ab 与最大 ac 的最长公共前缀一定也是 abc 、 abcd 的公共前缀


// const longestCommonPrefix = (arr) => {
//     if (!arr || !arr.length) return ''
//     if (arr.length === 1) return arr[0]

//     let min = 0, max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[min] > arr[i]) min = i
//         if (arr[max] < arr[i]) max = i
//     }

//     for (let j = 0; j < arr[min].length; j++) {
//         if (arr[min].charAt(j) !== arr[max].charAt(j)) {
//             return arr[min].substring(0, j)
//         }
//     }

//     return arr[min]
//  }


// 分而治之，递归思想
const longestCommonPrefix = (arr) => {
    if (!arr || !arr.length) return ''
    let length = arr.length
    if (length === 1) return arr[0]

    const mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, length)

    return getCommonPrefixOfTwo(longestCommonPrefix(left), longestCommonPrefix(right))

}

const getCommonPrefixOfTwo = (left, right) => {
    let i = 0
    for (; i < left.length && i < right.length; i++) {
        if (left.charAt(i) !== right.charAt(i)) break
    }
    return left.substring(0, i)
}

const arr = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(arr));

// 公共指针法
const longestCommonPrefix = (arr) => {
    if (!arr || !arr.length) return ''
    let currentIndex = 0
    while (true) {
        // 取数组第一个元素的第一个字符作为比较参照
        let refer = arr[0][currentIndex]
        // 是否全部匹配
        const currentAllMatched = arr.reduce((prev, str) => {
            return prev && str.charAt(currentIndex) === refer
        })

        if (currentAllMatched) {
            currentIndex++
        } else {
            break
        }
    }
    return arr[0].substring(0, currentIndex)
}

// 逐个比较
const longestCommonPrefix = (arr) => {
    if (!arr || !arr.length) return ''

    let prev = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let j = 0
        for (; j < prev.length && j < arr[i].length; j++) {
            if (prev.charAt(j) !== arr[i].charAt(j)) break
        }
        prev = prev.substring(0, j)
        if (prev === '') return ''
    }

    return prev
}

// 仅需最大、最小字符串的最长公共前缀
const longestCommonPrefix = (arr) => {
    if (!arr || !arr.length) return ''
    let max = 0,
        min = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[max]) max = i
        if (arr[i] < arr[min]) min = i
    }

    for (let j = 0; j < arr[max].length; j++) {
        if (arr[min].charAt(j) !== arr[max].charAt(j)) {
            return arr[max].substring(0, j)
        }
    }

    return result
}

// 分而治之，递归思想
const longestCommonPrefix = (arr) => {
    if (!arr || !arr.length) return ''
    let length = arr.length
    if (length === 1) return arr[0]

    const mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, length)
    return getCommonPrefixOfTwo(longestCommonPrefix(left), longestCommonPrefix(right));
}

const getCommonPrefixOfTwo = (left, right) => {
    let j = 0
    for (; j < right.length && i < left.length; j++) {
        if (left.charAt(j) !== right.charAt(j)) {
            return left.substring(0, j)
        }
    }
}