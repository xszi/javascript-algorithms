// 从右往左遍历乘数，将乘数的每一位与被乘数相乘得到对应的结果，再将每次得到的结果累加

// 另外，当乘数的每一位与被乘数高位（非最低位）相乘的时候，注意低位补 '0'

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
// 123 * 6 = 738
// 123 * 50 = 6150

const num1 = "12", num2 = "45678"
const twoStringMuiltiple = function (num1, num2) {

    if (num1 === "0" || num2 === "0") return "0"

    let result = '0', len1 = num1.length, len2 = num2.length

    for(let i = len2 - 1; i >= 0; i--) {
        // 每次循环的计算结果
        let temp = ''
        // 补零
        for(let j = 0; j < num2.length - i - 1; j++) {
            temp += '0'
        }
        let n2 = num2[i] - '0', carry = 0
        // 当前项与num1的每一项相乘得到结果temp
        for(let k = len1 - 1; k >= 0 || carry != 0; k--) {
            // 注意这种最后一次恰好carry还有值的情况
            let n1 = k < 0 ? 0 : num1[k] - '0';
            // 暂存结果
            temp = temp + (n1 * n2 + carry) % 10
            // 进位
            carry = Math.floor((n1 * n2 + carry) / 10)
        }
        result = twoStringPlus(result, Array.prototype.slice.call(temp).reverse().join(""))
    }
    return result
}

const twoStringPlus = (num1, num2) => {
    let len1 = num1.length,
        len2 = num2.length
    let temp = 0,
        result = ''

    while (len1 || len2) {
        len1 ? temp += +num1.charAt(--len1) : ''
        len2 ? temp += +num2.charAt(--len2) : ''

        result = temp % 10 + result
        if (temp > 9) temp = 1
        else temp = 0
    }
    // 注意这种最后一次还有temp的情况
    if (temp) result = 1 + result
    return result
}

console.log(twoStringMuiltiple(num1, num2));