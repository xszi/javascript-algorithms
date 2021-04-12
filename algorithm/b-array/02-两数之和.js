
// 时间复杂度：O(n)
const nums = [2, 7, 11, 15], target = 9

const twoSum =  (nums, target) => {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let k = target - nums[i]
        // map.has判断是否含有该key
        if (map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i)
    }
    return []
}

console.log(twoSum(nums, target));