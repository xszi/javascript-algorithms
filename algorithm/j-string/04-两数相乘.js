// 从右往左遍历乘数，将乘数的每一位与被乘数相乘得到对应的结果，再将每次得到的结果累加

// 另外，当乘数的每一位与被乘数高位（非最低位）相乘的时候，注意低位补 '0'
let multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0"
    
    // 用于保存计算结果
    let res = "0"
        
    // num2 逐位与 num1 相乘
    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0
        // 保存 num2 第i位数字与 num1 相乘的结果
        let temp = ''
        // 补 0 
        for (let j = 0; j < num2.length - 1 - i; j++) {
            temp+='0'
        }
        let n2 = num2.charAt(i) - '0'
            
        // num2 的第 i 位数字 n2 与 num1 相乘
        for (let j = num1.length - 1; j >= 0 || carry != 0; j--) {
            let n1 = j < 0 ? 0 : num1.charAt(j) - '0'
            let product = (n1 * n2 + carry) % 10
            temp += product 
            carry = Math.floor((n1 * n2 + carry) / 10)
        }
        // 将当前结果与新计算的结果求和作为新的结果
        res = addStrings(res, Array.prototype.slice.call(temp).reverse().join(""))
    }
    return res
}

let addStrings = function(num1, num2) {
    let a = num1.length, b = num2.length, result = '', tmp = 0
    while(a || b) {
        a ? tmp += +num1[--a] : ''
        b ? tmp +=  +num2[--b] : ''
        
        result = tmp % 10 + result
        if(tmp > 9) tmp = 1
        else tmp = 0
    }
    
    if (tmp) result = 1 + result
    return result
}

const num1 = "123", num2 = "456"

console.log(multiply(num1, num2))