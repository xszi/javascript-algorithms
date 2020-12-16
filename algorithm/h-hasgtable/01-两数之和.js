// const twoSum =  (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// }

const twoSum =  (nums, target) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const temp = target - nums[i]
        if (!map.has(nums[i])) {
            map.set(temp, i)
        } else {
            return [map.get(nums[i]), i]
        }
    }
    return []
}

const nums = [11, 2, 7, 15]

console.log(twoSum(nums, 9));