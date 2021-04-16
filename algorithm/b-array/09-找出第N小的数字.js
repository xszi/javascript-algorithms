// [10, 3, 2, 5, 8, 2, 2, 7] 传入 n = 4，则应该返回 3
const nums = [10, 3, 2, 5, 8, 2, 2, 7], n = 4

const findNthNumber = (arr, n) => {
    return findNthSmallNumber(arr, n, 0, arr.length - 1)
}

const findNthSmallNumber = (arr, n, left, right) => {
    // 临界条件
    if (n <= 0 || n >= arr.length) return -1
    // 基准点
    let index = findPivotIndex(arr, left, right)
    //包含基准点在内的左边的数字个数
    let leftNumCount = index + 1
    
    if (leftNumCount === n) {
        return arr[index]
    }

    if (leftNumCount < n) {
        return findNthSmallNumber(arr, n, index + 1, right)
    }

    if (leftNumCount > n) {
        return findNthSmallNumber(arr, n, left, index)
    }
}

const findPivotIndex = (arr, left, right) => {
    // 使用快排
    let pivot = arr[left]
    let i = left
    let j = right

    while (i != j) {
        // 找右边第一个小于基准点的位置
        while(arr[j] >= pivot && i < j) j--
        // 找左边第一个大于基准点的位置
        while(arr[i] < pivot && i < j) i++
        swap(arr, i, j)
    }
    //基准归位
    arr[left] = arr[i];
    arr[i] = pivot;
    return i
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(findNthNumber(nums, n))