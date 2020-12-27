const nums1 = [4,9,5], nums2 = [9,4,9,8,4]

const fn = (nums1, nums2) => {
    const result = nums1.filter(item => nums2.includes(item))
    // return [...new Set(result)]
    // 还可以使用Array.from, 但此时不要三个点来展开
    return Array.from(new Set(result))
}

console.log(fn(nums1, nums2));