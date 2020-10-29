// 使用reduce + Map
// const intersection = (...args) => {
//     return args.reduce(twoArrayIntersection)
// }

// const twoArrayIntersection = (arrA, arrB) => {
//     let map = new Map()
//     let res = []
//     arrA.forEach(item => {
//         map[item] = true
//     })
//     arrB.forEach(item => {
//         if (map[item]) {
//             res.push(item)
//         }
//     })
//     return res
// }

// 使用 reduce + every
// const intersection = (first, ...rest) => {
//     return [...new Set(first.filter(item => rest.every(arr => arr.includes(item))))]
// }

// 单使用reduce
const intersection = (...args) => {
    // pre 前一个 cur 当前
    return [...new Set(args.reduce((pre, cur) => {
        return pre.filter(item => cur.includes(item))
    }))]
}

const arrA = [1, 3, 6, 4, 5, 6]
const arrB = [5, 6]
const arrC = [5, 6, 7]
const first = [6, 4, 4, 3]
// console.log(twoArrayIntersection(arrA, arrB));
console.log(intersection(first, arrA, arrB, arrC));