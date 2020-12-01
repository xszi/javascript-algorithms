const isBackWord = (str) => {
    if (!typeof str !== 'string') return false
    return str.split('').reverse().join('') === str
}

// const isBackWord = (str) => {
//     if (!typeof str !== 'string') return false
//     let left = 0, right = str.length - 1
//     while (left < right) {
//         if (str.charAt(left) !== str.charAt(right)) return false
//         left++
//         right--
//     }
//     return true
// }

const str = 'goodoog'
console.log(isBackWord(str));