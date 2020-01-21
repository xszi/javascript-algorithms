let firstMissingPositive = function(nums) {
    let min = Math.min(...nums)
    let max = Math.min(...nums)
    console.log(min)
    if (min > 1 || max < 1) {
        return 1
    } else {
        return firstMissingPositive(bum.filter(item => item > 0))
    }
};
let nums = [1, 2, 0]
firstMissingPositive(nums)