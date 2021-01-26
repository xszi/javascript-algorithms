// const nums = [3,2,3,1,2,4,5,5,6], k = 4
const nums = [3,2,1,5,6,4], k = 2

// const getKMin = (nums, k) => {
//     return nums.sort((a, b) => b - a)[k-1]
// }

// const getKMin = (nums, k) => {
//     if (nums.length < k) return
//     let heap = [,], i = 0;
//     while (i < k) {
//         heap.push(nums[i++])
//     }

//     buildHeap(heap, k)
//     // 从 k 位开始遍历数组
//     for (let i = k; i < nums.length; i++) {
//         if (nums[i] > heap[1]) {
//             // 替换并堆化
//             heap[1] = nums[i];
//             heapify(heap, k, 1)
//         }
//     }

//     // 删除heap中第一个元素
//     heap.shift()
//     return heap[0]
// }

// const buildHeap = (heap, k) => {
//     if (k === 1) return
//     // 从最后一个非叶子节点开始
//     for (let i = Math.floor(k / 2); i > 0; i--) {
//         // 自上而下式堆化
//         heapify(heap, k, i)
//     }
// }

// // 最小堆化
// const heapify = function (arr, k, i) {
//     // 自上而下堆化
//     while(true) {
//         let minIndex = i
//         if (2*i <= k && arr[2*i] < arr[minIndex]) {
//             minIndex = 2*i
//         }
//         if (2*i+1 <= k && arr[2*i+1] < arr[minIndex]) {
//             minIndex = 2*i + 1
//         }
//         if (minIndex !== i) {
//             swap(arr, minIndex, i)
//             i = minIndex
//         } else {
//             break
//         }
//     }
// }

// const swap = (arr, i, j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// const getKMin = (nums, k) => {
//     const len = nums.length;
//     if (len < k) return
//     quickSelect(nums, 0, len - 1)
//     return nums[k-1]
// }

// const quickSelect = (nums, left, right) => {
//     let index
//     // left,right可以看成左右两个哨兵
//     if (left < right) {
//         // 划分数组
//         index = partition(nums, left, right)
//         if (left < index - 1) {
//             quickSelect(nums, left, index - 1)
//         }
//         if (index < right) {
//             quickSelect(nums, index, right)
//         }
//     }
// }

// const partition = (nums, left, right) => {
//     // 取中间项为基准
//     const midNum = nums[Math.floor(Math.random() * (right - left + 1)) + left]
//     let i = left, j = right
//     // 左右哨兵相遇，第一轮交换结束
//     while (i <= j) {
//         // 左哨兵右移，直到遇到第一个大于基准的数停下来
//         while(nums[i] > midNum) {
//             i++
//         }
//         // 右哨兵左移，直到遇到第一个小于基准的数停下来
//         while(nums[j] < midNum) {
//             j--
//         }
//         // 交换左右哨兵所在位置的值
//         if (i <= j) {
//             swap(nums, i, j)
//             i++
//             j--
//         }
//     }
//     return i
// }

// const swap = (arr, i, j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

let getKMin = function(nums, k) {
    const len = nums.length
    if (len < k) return
    return quickSelect(nums, 0, len - 1, len - k)
};

let quickSelect = (arr, left, right, k) => {
  let index
  if(left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if(k === index) {
        return arr[index]
    } else if(k < index) {
        // Top k 在左边
        return quickSelect(arr, left, index-1, k)
    } else {
        // Top k 在右边
        return quickSelect(arr, index+1, right, k)
    }
  }
  return arr[left]
}

let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
      i = left,
      j = right
  // 开始调整
  while(i < j) {
    
    // 左指针右移
    while(arr[i] < datum) {
      i++
    }
    
    // 右指针左移
    while(arr[j] > datum) {
      j--
    }
    
    // 交换
    if(i < j) swap(arr, i, j)

    // 当数组中存在重复数据时，即都为datum，但位置不同
    // 继续递增i，防止死循环
    if(arr[i] === arr[j] && i !== j) {
        i++
    }
  }
  return i
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(getKMin(nums, k));