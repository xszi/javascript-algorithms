const count = (nums) => {
    let count = 0
    nums = nums.sort((a, b) => a - b)
    for (let j = nums.length - 1; j >= 2; j--) {
        // 确定最长边
        let left = 0,
            right = j - 1
        while (left < right) {
            if (nums[left] + nums[right] > nums[j]) {
                count += right - left
                right--
            } else {
                left++
            }
        }
    }
    return count
}

const nums = [2, 2, 3, 4]
console.log(count(nums));