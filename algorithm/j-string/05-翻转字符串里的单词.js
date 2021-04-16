const arr = ['the', 'sky', '', 'is', 'blue']

const str1 = '  hello world'
const str2 = 'a good   example'

// console.log(arr.filter(item => item));
// console.log(str1.trim());
// 方法1 API
const reverseWord = (s) => {
    return s.trim().split(' ').filter(item => item).reverse().join(' ')
}
// console.log(s.trim().split(' ').filter(item => item).reverse().join(' '));

// 方法2 API + 正则不等式
const reverseWord = (s) => {
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}

console.log(reverseWord(str2));

// 方法3 使用双向队列
const reverseWord = (s) => {
    let left = 0, right = s.length - 1, temp = '', arr = []
    // 先去除两端的空格
    while(s.charAt(left) === '') left++
    while(s.charAt(right) === '') right--

    while(left <= right) {
        let char = s.charAt(left)
        if (char === '' && temp) {
            arr.unshift(temp)
            temp = ''
        } else if (char !== '') {
            temp += char
        }
        left++
    }
    arr.unshift(temp)
    return arr.join(' ')
}