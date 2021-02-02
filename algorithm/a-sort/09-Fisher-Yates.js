let Solution = function(nums) {
    this.nums = nums
}

Solution.prototype.reset = function() {
    return this.nums
}

Solution.prototype.shuffle = function() {
    let res = [...this.nums]
    let n = res.length
    for(let i = n-1; i >= 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1))
        swap(res, randIndex, i)
    }
}

let swap = (arr, i , j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}