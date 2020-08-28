// 冒泡排序

// const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

// const bubbleSort = (arr) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j+1)
//             }
//         }
//     }
//     return arr
// }

// const swap = (arr, x, y) => {
//     const temp = arr[x]
//     arr[x] = arr[y]
//     arr[y] = temp
// }

// console.log(bubbleSort(sortArr));

// 插入排序

// const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]
// const sortArr = [4, 7, 1, 3, 5, 10, 6, 9, 8, 2]
// const sortArr = [1, 4, 7, 3, 5, 10, 6, 9, 8, 2]

// const insertSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 swap(arr, j, j-1)
//             }
//         }
//     }
//     return arr
// }

// const swap = (arr, x, y) => {
//     const temp = arr[x]
//     arr[x] = arr[y]
//     arr[y] = temp
// }

// console.log(insertSort(sortArr));

// 选择排序

// const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

// const selectSort = (arr) => {
//     let sortedArr = []
//     while(arr.length) {
//         let maxItem = -Infinity
//         let maxIndex = 0
//         for (let i = 0, len = arr.length; i < len; i++) {
//             if (arr[i] > maxItem) {
//                 maxItem = arr[i]
//                 maxIndex = i
//             }
//         }
//         sortedArr.push(maxItem)
//         arr.splice(maxIndex, 1)
//     }
//     return sortedArr
// }

// console.log(selectSort(sortArr));

// 快速排序

// const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

// const quickSort = (arr) => {
//     if (arr.length < 2) return arr
//     let leftArr = []
//     let rightArr = []
//     let pivot = arr[0]
//     arr.forEach(element => {
//         if (element < pivot) {
//             leftArr.push(element)
//         } else if (element > pivot) { 
//             // 必须要加 if (element > pivot), 排除相等情况落入右边，引起Maximum call stack size exceeded
//             rightArr.push(element)
//         }
//     })
//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
// }

// console.log(quickSort(sortArr));

// 归并排序

const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

const merge = (left, right) => {
    let result = []
    let iLeft = 0
    let iRight = 0
    while (iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            result.push(left[iLeft])
            iLeft++
        } else {
            result.push(right[iRight])
            iRight++
        }
    }
    while (iLeft < left.length) {
        result.push(left[iLeft])
        iLeft++
    }
    while (iRight < right.length) {
        result.push(right[iRight])
        iRight++
    }
    return result
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    let left = []
    let right = []
    for (let i = 0, len = arr.length; i < len; i++) {
        if (i < len/2 ) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(sortArr));
// const mergeArr1 = [1,5]
// const mergeArr2 = [2]
// console.log(merge(mergeArr1, mergeArr2))

// 64匹马问题 --> 9匹马问题

// 截取文件读写，脚本书写测试 --> 自动化