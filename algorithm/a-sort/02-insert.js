// 插入排序

const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]
// const sortArr = [4, 7, 1, 3, 5, 10, 6, 9, 8, 2]
// const sortArr = [1, 4, 7, 3, 5, 10, 6, 9, 8, 2]

const insertSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j-1)
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

console.log(insertSort(sortArr));