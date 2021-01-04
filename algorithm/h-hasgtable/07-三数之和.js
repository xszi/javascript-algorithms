// // 排序 + 双指针
// const threeSum = (nums) => {
//     let result = []
//     const len = nums.length
//     // 数组长度小于3，直接返回
//     if (len < 3) {
//         return result
//     }
//     nums.sort((a, b) => a - b)

//     // 数组长度小于3，直接返回
//     for (let i = 0; i < len - 2; i++) {
//         // 排序后，如果第一个大于0，相加后一定大于0
//         if (nums[i] > 0) {
//             break
//         }

//         // 去重
//         if (i > 0 && (nums[i] === nums[i - 1])) {
//             continue
//         }

//         let left = i + 1
//         let right = len - 1

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right]
//             if (sum === 0) {
//                 result.push([nums[i], nums[left++], nums[right++]])
//                 // 去重
//                 while (nums[left] === nums[left - 1]) {
//                     left++
//                 }
//                 while (nums[right] === nums[right + 1]) {
//                     right--
//                 }
//             } else if (sum > 0) {
//                 right--
//             } else if (sum < 0) {
//                 left++
//             }
//         }
//     }
//     return result
// }

// 使用排序+Set

const threeSum = function (nums) {
    let set = new Set(); // 使用 Set() 即可满足需求, 相对节省内存
    let result = []
    nums.sort((a, b) => (a - b))

    console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        // 去重
        while (nums[i] === nums[i - 1]) {
            i++
        } 
        // 第一个数
        let first = nums[i]
        let j = i + 1
        while (j < nums.length) {
            // 第三个数
            let second = 0 - nums[j] - first
            let third = nums[j]

            if (set.has(second)) {
                result.push([first, second, third])

                set.add(third)
                j++
                
                // 去重
                while (nums[j] === nums[j - 1]) {
                    j++
                } 
            } else {
                set.add(third)
                j++
            }
        }
        set = new Set()
    }
    return result
};

var nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))