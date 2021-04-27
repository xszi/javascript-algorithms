// 暴力解法
// const getMax= (arr, k) => {
//     let result = []
//     for (let i = 0; i < arr.length-k+1; i++) {
//         const temp = arr.slice(i, i + k)
//         result.push(Math.max(...temp))
//     }
//     return result
// }
// 时间复杂度：O(n*k)
// 空间复杂度：O(n)

// 普通队列
// const getMax = (arr, k) => {
//     let result = []
//     while (arr.length >= k) {
//         const temp = arr.slice(0, k)
//         result.push(Math.max(...temp))
//         arr.shift()
//     }
//     return result
// }

// 时间复杂度：O(n*k)
// 空间复杂度：O(n)

// 单调队列
// 队列元素单调递减或单调递增
// 从队尾入列，队首或队尾出列

// const getMax = (arr, k) => {
//     const deque = []  //存放单调队列的下标
//     const result = []
//     for (let i = 0; i < nums.length; i++) {
//         // 把滑动窗口之外的踢出
//         if (i - deque[0] >= k) {
//             deque.shift() //对首出列，在滑动窗口之外的直接从队首删掉
//         }
//         while (nums[deque[deque.length - 1]] <= nums[i]) {
//             deque.pop() // 队尾出列，如果新加进来的数比单调队列中原来的数都要大，则直接弹出队列中的其他数
//         }
//         deque.push(i) // 队尾入列，前面弹出比它小的数的下标之后，再入列当前大数下标
//         // 数组下标从0开始，k=3时 ，下标为0，1，2的数组元素构成一个滑动窗口，所以条件为i>=k-1就可以将答案存入result中
//         if (i >= k - 1) {
//             result.push(nums[deque[0]])
//         }
//     }
//     return result
// }

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 

// [1 3 -1] -3 5 3 6 7 3
// 1 [3 -1 -3] 5 3 6 7 3
// 1 3 [-1 -3 5] 3 6 7 5
// 1 3 -1 [-3 5 3] 6 7 5
// 1 3 -1 -3 [5 3 6] 7 6
// 1 3 -1 -3 5 [3 6 7] 7
