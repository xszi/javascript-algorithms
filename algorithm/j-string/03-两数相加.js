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

var addStrings = function(num1, num2) {
    let a = num1.length, b = num2.length, result = '', tmp = 0
    while(a || b) {
        a ? tmp += +num1[--a] : ''
        b ? tmp += +num2[--b] : ''
        
        result = tmp % 10 + result
        if(tmp > 9) tmp = 1
        else tmp = 0
    }
    if (tmp) result = 1 + result
    return result
};
const s1 = '99', s2 = '2255'

console.log(addStrings(s1, s2));