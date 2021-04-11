const threeSum = (nums) => {
    if (nums.length < 3) return []
    // 先排序
    nums = nums.sort((a, b) => a - b)
    let result = []
    for(let i = 0; i < nums.length - 2; i++) {
        // 排序后第一项大于零，后面项都大于零
        if (nums[i] > 0) break
        // 去重
        if (nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[i], nums[left++], nums[right--]])
                // push 加了之后防止还存在重复
                while(nums[left] === nums[left - 1]){
                    left++
                }
                while(nums[right] === nums[right + 1]){
                    right--
                }
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return result
}

const nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums));