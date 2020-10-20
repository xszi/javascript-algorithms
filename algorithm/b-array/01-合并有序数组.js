// 方法一：直接使用JS API
const mergeArr = (num1, num2) => {
    return num1.concat(num2).filter(item => item).sort((a, b) => a -b)
}

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]

console.log(mergeArr(nums1, nums2))