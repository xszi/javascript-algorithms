
const arrA = [1, 3, 6, 4, 5, 6]
const arrB = [5, 6]
const arrC = [5, 6, 7]
const first = [6, 4, 4, 3]


// 方法1  reduce + filter
const intersection = (...args) => {
    return [...new Set(args.reduce((cur, next) => {
        return cur.filter(item => next.includes(item))
    }))]
}

// 方法2 reduce + 对象键值
const intersection = (...args) => {
    return args.reduce(twoArrayIntersection)
}

const twoArrayIntersection = (num1, num2) => {
    let map = {}, result = []
    num1.forEach(item => map[item] = true)
    num2.forEach(item => {
        if (map[item]) {
            result.push(item)
        }
    })
    return [...new Set(result)]
}

// 方法3 every

const intersection = (first, ...args) => {
    return [...new Set(first.filter(item => args.every(arr => arr.includes(item))))]
}

console.log(intersection(first, arrA, arrB, arrC));


