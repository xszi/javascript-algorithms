
// 归并排序

const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

const merge = (left, right) => {
    let result = []
    let iLeft = 0
    let iRight = 0

     //left, right本身肯定都是从小到大排好序的
    while (iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            result.push(left[iLeft])
            iLeft++
        } else {
            result.push(right[iRight])
            iRight++
        }
    }

    //不可能同时存在left和right都有剩余项的情况,
    // 要么left要么right有剩余项, 把剩余项加进来即可
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

// 64匹马8条赛道，求前8名要经历几次赛跑 --> 9匹马3条赛道问题

// 16次，这里用到了归并排序

// 前4名？