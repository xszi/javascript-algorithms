// 维护数组
const longestSubstring = (str) => {
    if (!str || !str.length) return 0
    let result = [], arr = str.split(''), maxLength = 0
    for (let i = 0; i < arr.length; i++) {
        let index = result.indexOf(arr[i])
        if (index !== -1) {
            if (result.length > maxLength) {
                maxLength = result.length
            }
            result = result.slice(index + 1)
        }
        result.push(arr[i])
    }
    return maxLength
}

// 维护下标
const longestSubstring = (str) => {
    if (!str || !str.length) return 0
    let index = 0, maxLength = 0
    for (let i = 0, j = 0; j < str.length; j++) {
        index = str.substring(i, j).indexOf(str.charAt(i))
        if (index !== -1) {
            const length = j - i
            if (length > maxLength) {
                maxLength = length
            }
            i = i + index + 1
        }
    }
    return maxLength
}

// 使用map 时间复杂度显著降低
const longestSubstring = (str) => {
    if (!str || !str.length) return 0
    let map = new Map(), maxLength = 0
    for(let i = 0, j = 0; j < str.length; j++) {
        if (map.has(str.charAt(j))) {
            i = map.get(str.charAt(j)) + 1
        }
        maxLength = Math.max(maxLength, j - i + 1)
        map.set(str.charAt(j), j)
    }
    return maxLength
}

const str = 'pwwkew'
console.log(longestSubstring(str));