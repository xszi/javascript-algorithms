let arr1 = [1, 3, 5, 8, 9]
let arr2 = [3, 5, 9, 10]

// intersection
let list1 = arr1.filter(item => {
    return arr2.includes(item)
})
// console.log(list1)

// union
let list2 = Array.from(new Set(arr1.concat(arr2)))
// let list2 = Array.from(new Set([...arr1, ...arr2])
// console.log(list2)

// subtraction
let list3 = arr1.filter(item => {
    return !arr2.includes(item)
})
// console.log(list3)

// complementation
let arr3 = [3, 5, 8]
let list4 = arr1.filter(item => {
    return !arr3.includes(item)
})
// console.log(list4)

// but how to compute all the result above with object type element?

let arr4 = [{
    id: 1000,
    a: 1
},{
    id: 1001,
    b: 2
},{
    id: 1002,
    c:3
}]

let arr5 = [{
    id: 1000,
    a: 1
},{
    id: 1001,
    b: 2
}]

let list5 = arr4.filter(item => {
    return arr5.includes(item)
})
// console.log(list5) // [] the same method is uneffected!

let ids = arr5.map(item => item.id)

let list6 = arr4.filter(item1 => !ids.includes(item1.id))

console.log(list6)
