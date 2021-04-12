const nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]

// 直接数组操作方法
// const fn = (nums1, nums2) => [...new Set(nums1.filter(item => nums2.includes(item)))];

// 使用map，时间复杂度O(n)

// const fn = (nums1, nums2) => {
//     let map = {},
//         res = []
//     nums1.forEach(item => {
//         map[item] = true
//     })
//     nums2.forEach(item => {
//         if (map[item]) {
//             res.push(item)
//         }
//     })
//     return [...new Set(res)]
// }

// console.log(fn(nums1, nums2));


// const getIntersection = (nums1, nums2) => {
//     return nums1.filter(item => nums2.includes(item))
// }

const getIntersection = (nums1, nums2) => {
    let map = new Map()
    let result = []

    nums1.forEach(item => {
        map.set(item, true)
    })

    nums2.forEach(item => {
        if(map.get(item)) result.push(item)
    })

    return [...new Set(result)]
}

console.log(getIntersection(nums1, nums2));