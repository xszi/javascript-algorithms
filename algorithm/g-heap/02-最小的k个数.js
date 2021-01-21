// const getMinK = (arr, k) => {
//     return arr.sort((a, b) => a - b).slice(0, k);
// }

// const arr = [4, 5, 1, 6, 2, 7, 3, 8]
// const k = 4

// console.log(getMinK(arr, k));

let getLeastNumbers = function(arr, k) {
    // 从 arr 中取出前 k 个数，构建一个大顶堆
    let heap = [,], i = 0
    while(i < k) {
       heap.push(arr[i++]) 
    }
    buildHeap(heap, k)
    
    // 从 k 位开始遍历数组
    for(let i = k; i < arr.length; i++) {
        if(heap[1] > arr[i]) {
            // 替换并堆化
            heap[1] = arr[i]
            heapify(heap, k, 1)
        }
    }
    
    // 删除heap中第一个元素
    heap.shift()
    return heap
};

// 原地建堆，从后往前，自上而下式建大顶堆
let buildHeap = (arr, k) => {
    if(k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for(let i = Math.floor(k/2); i>=1 ; i--) {
        heapify(arr, k, i)
    }
}

// 堆化
let heapify = (arr, k, i) => {
    // 自上而下式堆化
    while(true) {
        let maxIndex = i
        if(2*i <= k && arr[2*i] > arr[i]) {
            maxIndex = 2*i
        }
        if(2*i+1 <= k && arr[2*i+1] > arr[maxIndex]) {
            maxIndex = 2*i+1
        }
        if(maxIndex !== i) {
            swap(arr, i, maxIndex)
            i = maxIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}