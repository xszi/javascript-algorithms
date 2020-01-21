let arr = [1, 3, 2, 3, 3, 5]

// map 
let list1 = arr.map(item => {
    return item * 2
})

// filter
let list2 = arr.filter(item => {
    return item > 2
})

// reduce get sum
let list3 = arr.reduce((pre, next) => {
    return pre + next
})

// reduce remove duplicate
let list4 = arr.reduce((pre, next) => {
    if (pre.indexOf(next) === -1) {
        pre.push(next)
    }
    return pre
}, [])

// forEach
let list5 = arr.forEach((item, index) => {
    if (item === 3) {
        arr[index] = 100
    }
})

// flat
let list6 = [[1,2], 2, [1, 4, 5, [7, 8]], 11, 12].flat(Infinity)

// console.log(list1)

// console.log(list2)

// console.log(list3)

// console.log(list4)

// console.log(list5, arr)

console.log(list6, arr)

