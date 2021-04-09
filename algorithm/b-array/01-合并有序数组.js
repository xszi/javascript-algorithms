// 方法一：直接使用JS API
// const mergeArr = (num1, num2) => {
//     return num1.concat(num2).filter(item => item).sort((a, b) => a -b)
// }

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]

const mergeArr = function(nums1, m, nums2, n) {
    let len1 = m - 1,
        len2 = n - 1,
        len = m + n - 1
    while(len2 >= 0) {
        if(len1 < 0) {
            nums1[len--] = nums2[len2--]
            continue
        }
        nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
    }
    return nums1
};

console.log(mergeArr(nums1, nums2))

// 方法二：使用快慢指针方法


// 时间复杂度为 O(m+n)
