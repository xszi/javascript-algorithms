// 关于 javascript 涉及的算法

// 1. 使用简单的数组操作方法把数组里面的数字求和， 举例：
const arr = [1, 6, -1, 4, -3, 7, 8]
const result = arr.filter(item => item > 0).reduce((prev, cur) => prev + cur, 0)
// const result = arr.filter(item => item > 0).reduce((prev, cur) => prev + cur)
console.log(result)
