const reverseStr = (str) => {
    return str.trim().split(' ').filter(item => item).reverse().join(' ');
}

const str1 = 'the sky is blue'
const str2 = '  hello world!  '
const str3 = 'a good   example'

console.log(reverseStr(str1));
console.log(reverseStr(str2));
console.log(reverseStr(str3));