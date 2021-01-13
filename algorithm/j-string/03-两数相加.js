const twoSumPlus = (s1, s2) => {
    const num1 = s1.split(''), num2 = s2.split('')
    let startNum1 = num1.length - 1, startNum2 = num2.length - 1, idx = 0
    let max = Math.max(startNum1, startNum2)
    let result = []
    while(max > -1) {
        if (startNum1 < 0 ) num1[startNum1] = 0
        if (startNum2 < 0 ) num2[startNum2] = 0
        const x = Number(num1[startNum1--]) + Number(num2[startNum2--]) + idx
        if (x < 10) {
            idx = 0
            result.unshift(x)
        } else {
            idx = 1
            result.unshift(x % 10)
        }
        max--
    }
    if (idx > 0) result.unshift(idx)
    return result.join('')
}

const s1 = '11', s2 = '2222'

console.log(twoSumPlus(s1, s2));