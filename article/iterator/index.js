let arr = [1, 3, 2, 3, 3, 5]

let arr3 = [{
        id: 1,
        name: 'waltz'
    },{
        id: 2,
        name: 'ct'
    }]
// map 
let list1 = arr3.map(item => {
    // return special structral data
    return {
        value: item.id,
        label: `${item.name}`
    }
})

// use map for de-duplication, it's cool
function unique (arr) {
    const res = new Map()
    return arr.filter((item) => !res.has(item.id) && res.set(item.id, 1))
}
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

console.log(list1)

// console.log(list2)

// console.log(list3)

// console.log(list4)

// flat
// let list5 = [[1,2], 2, [1, 4, 5, [7, 8]], 11, 12].flat(Infinity) // if get error in Vs code, pls use chrome to try it
// console.log(list5, arr)

// forEach only used in array
let list6 = arr.forEach((item, index) => {
    if (item === 3) {
        arr[index] = 100
    }
})
// console.log(list6, arr)

// object
let obj = { 
    a: 1,
    b: 2,
    c: 3
}

// for...in (object keyed by strings not Symbols, including inherited enumerable properties)
// for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`)
// }

// for... of (array or like-array)
// array
let arr1 = [1, 2, 3]
// set
let set = new Set([1, 2, 3, 4])
// map
let map = new Map()
map.set("name", "xszi");
map.set("age", "8888");
map.set("sex", "male");
map.set("hobby", ["girls", "sports", "cars"]);

// for (const value of arr) {
//     console.log(value)
// }

// for (const value of set) {
//     console.log(value)
// }

// for (const [key, value] of map) {
//     console.log(`${key}: ${value}`)
// }

// for (const value of arr1.entries()) {
//     console.log(value)
// }

// for (const [index, value] of arr1.entries()) {
//     console.log(index + ':' + value)
// }

// console.log(list6, arr)


// for...of不能循环遍历普通对象
var student = {
    name: 'xszi',
    age: 9000,
    locate: {
        country: 'china',
        city: 'xiamen',
        school: 'XMU'
    }
}
// for (let index in student) {
//     console.log(student[index])
// } // 正常遍历
// for (var value of student) {
//     console.log(value)
// } // 报错

var str = '深入浅出node.js'
var buf = new Buffer(str, 'utf-8')
console.log(buf, '^0^^0^^0^')