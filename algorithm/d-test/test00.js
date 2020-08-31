// 使用js求解多项式的和, 例如：f(x) = 10 + 2*x + 3*pow(x, 2)
let arr = [10, 2, 3], x = 4, n = 10000

function sum(arr, x, n) {
    let result = 0
    for (let i=0; i<=n; i++) {
        result += arr[i]*Math.pow(x, i)
    }
    return result
}

console.time()
sum(arr, x, n)
console.timeEnd()

// 第二种解法，不断提取公因式

// function sum2(arr, x, n) {
//     let result = arr[n]
//     for (let i=n; i>0; i--) {
//         result = arr[i-1] + x*result
//     }
//     return result
// }
// console.time()
// sum2(arr, x, n)
// console.timeEnd()