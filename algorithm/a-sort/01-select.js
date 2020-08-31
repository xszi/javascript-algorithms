// 选择排序

const sortArr = [7, 4, 1, 3, 5, 10, 6, 9, 8, 2]

const selectSort = (arr) => {
    let sortedArr = []
    while(arr.length) {
        let maxItem = -Infinity
        let maxIndex = 0
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] > maxItem) {
                maxItem = arr[i]
                maxIndex = i
            }
        }
        sortedArr.push(maxItem)
        arr.splice(maxIndex, 1)
    }
    return sortedArr
}

console.log(selectSort(sortArr));