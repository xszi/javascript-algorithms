// 冒泡排序

const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}

const swap = (arr, x, y) => {
    const temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

console.log(bubbleSort(sortArr));