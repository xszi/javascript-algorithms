// 最长公共前缀
// 输入: ["flower","flow","flight"]
// 输出: "fl

// 公共指针法
const longestCommonPrefix = (arr) => {
    if (!arr || !arr.length) return '';
    
    let currentIndex = 0

    while (true) {
        // 取数组第一个元素的第一个字符作为比较的参照
        let refer = arr[0][currentIndex]
        // 是否全部匹配
        const currentAllMatched = arr.reduce((prev, str) => {
            return prev && str.charAt(currentIndex) === refer
        }, true)

        if (currentAllMatched) {
            currentIndex++
        } else {
            break
        }
    }

    return arr[0].substring(0, currentIndex)
}

const arr = ["flower","flow","flight"]
console.log(longestCommonPrefix(arr));