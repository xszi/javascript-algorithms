// const twoSumPlus = (s1, s2) => {
//     const num1 = s1.split(''), num2 = s2.split('')
//     let startNum1 = num1.length - 1, startNum2 = num2.length - 1, idx = 0
//     let max = Math.max(startNum1, startNum2)
//     let result = []
//     while(max > -1) {
//         if (startNum1 < 0 ) num1[startNum1] = 0
//         if (startNum2 < 0 ) num2[startNum2] = 0
//         const x = Number(num1[startNum1--]) + Number(num2[startNum2--]) + idx
//         if (x < 10) {
//             idx = 0
//             result.unshift(x)
//         } else {
//             idx = 1
//             result.unshift(x % 10)
//         }
//         max--
//     }
//     if (idx > 0) result.unshift(idx)
//     return result.join('')
// }

// 给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和。

// 例如：

// "111" + ”2222“ = ”2333“
//  111
// 2222
// 2333
const twoStringPlus = (str1, str2) => {
    let len1 = str1.length, len2 = str2.length;
    let temp = 0, result = ''
    while(len1 || len2) {
        len1 ? temp += +str1.charAt(--len1) : ''
        len2 ? temp += +str2.charAt(--len2) : ''

        result = temp % 10 + result
        if (temp > 9) temp = 1
        else temp = 0
    }
    return result
}

const str1 = '111', str2 = '2222'

console.log(twoStringPlus(str1, str2))