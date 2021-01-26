const nums = [1, 1, 1, 2, 2, 3, 3, 4]
const k = 2

// const getTopKFrequent = (nums, k) => {
//     let map = new Map()
//     const arr = [...new Set(nums)]
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             const num = map.get(nums[i]);
//             map.set(nums[i], num + 1)
//         } else {
//             map.set(nums[i], 1)
//         }
//     }
    
//     return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
// }


// let getTopKFrequent = function(nums, k) {
//     let map = new Map(), heap = [,]
//     nums.map((num) => {
//         if(map.has(num)) map.set(num, map.get(num)+1)
//         else map.set(num, 1)
//     })
    
//     // 如果元素数量小于等于 k
//     if(map.size <= k) {
//         return [...map.keys()]
//     }
    
//     // 如果元素数量大于 k，遍历map，构建小顶堆
//     let i = 0
//     map.forEach((value, key) => {
//         if(i < k) {
//             // 取前k个建堆, 插入堆
//             heap.push(key)
//             // 原地建立前 k 堆
//             if(i === k-1) buildHeap(heap, map, k)
//         } else if(map.get(heap[1]) < value) {
//             // 替换并堆化
//             heap[1] = key
//             // 自上而下式堆化第一个元素
//             heapify(heap, map, k, 1)
//         }
//         i++
//     })
//     // 删除heap中第一个元素
//     heap.shift()
//     return heap
// };

// // 原地建堆，从后往前，自上而下式建小顶堆
// let buildHeap = (heap, map, k) => {
//     if(k === 1) return
//     // 从最后一个非叶子节点开始，自上而下式堆化
//     for(let i = Math.floor(k/2); i>=1 ; i--) {
//         heapify(heap, map, k, i)
//     }
// }

// // 堆化
// let heapify = (heap, map, k, i) => {
//     // 自上而下式堆化
//     while(true) {
//         let minIndex = i
//         if(2*i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
//             minIndex = 2*i
//         }
//         if(2*i+1 <= k && map.get(heap[2*i+1]) < map.get(heap[minIndex])) {
//             minIndex = 2*i+1
//         }
//         if(minIndex !== i) {
//             swap(heap, i, minIndex)
//             i = minIndex
//         } else {
//             break
//         }
//     }
// }

// // 交换
// let swap = (arr, i , j) => {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }


let getTopKFrequent = function(nums, k) {
    let map = new Map(), arr = [...new Set(nums)]
    nums.map((num) => {
        if(map.has(num)) map.set(num, map.get(num)+1)
        else map.set(num, 1)
    })
    
    // 如果元素数量小于等于 k
    if(map.size <= k) {
        return [...map.keys()]
    }
    return bucketSort(map, k)
};

// 桶排序
let bucketSort = (map, k) => {
    let arr = [], res = []
    map.forEach((value, key) => {
        // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
        // 频率大的在后面，频率小的在前面
        if(!arr[value]) {
            arr[value] = [key]
        } else {
            arr[value].push(key)
        }
    })
    // 倒序遍历获取出现频率最大的前k个数
    for(let i = arr.length - 1;i >= 0 && res.length < k;i--){
        if(arr[i]) {
            res.push(...arr[i])
        }
	}
	return res
}


console.log(getTopKFrequent(nums, k));