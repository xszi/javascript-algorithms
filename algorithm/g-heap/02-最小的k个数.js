const getMinK = (arr, k) => {
    return arr.sort((a, b) => a - b).slice(0, k);
}

const arr = [4, 5, 1, 6, 2, 7, 3, 8]
const k = 4

console.log(getMinK(arr, k));