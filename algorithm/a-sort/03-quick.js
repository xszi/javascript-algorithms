// 快速排序

const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

const quickSort = (arr) => {
    if (arr.length < 2) return arr
    let leftArr = []
    let rightArr = []
    let pivot = arr[0]
    arr.forEach(element => {
        if (element < pivot) {
            leftArr.push(element)
        } else if (element > pivot) { 
            // 必须要加 if (element > pivot), 排除相等情况落入右边，引起Maximum call stack size exceeded
            rightArr.push(element)
        }
    })
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort(sortArr));