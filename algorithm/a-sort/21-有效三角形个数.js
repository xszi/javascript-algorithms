const getNumber = function(arr) {
    const len = arr.length, count = 0
    arr.sort((a, b) => a - b)
    for (var k = len - 1; k > 1; k--) {
        let left = 0, right = k - 1
        while (left < right) {
            if (arr[left] + arr[right] > arr[k]) {
                count += right - left
                right--
            } else {
                left++
            }
        }
    }
    return count
}