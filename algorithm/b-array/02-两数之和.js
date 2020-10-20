const twoSum = (nums, target) => {
    let map = new Map()
    for (let i = 0; i < nums.length; i) {
        const k = target - nums[i]
        if (map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i)
    }
    return []
}

// 时间复杂度：O(n)