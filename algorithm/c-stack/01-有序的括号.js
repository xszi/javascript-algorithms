
const validBrackets = (str) => {
    let map = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (map[str.charAt(i)]) {
            stack.push(str.charAt(i))
        } else if (map[stack.pop()] !== str.charAt(i)) {
            return false
        }
    }
    return true
}

const str1 = "()"
console.log(validBrackets(str1));

const str2 = "()[]{}"
console.log(validBrackets(str2));

const str3 = "([)]"
console.log(validBrackets(str3));

const str4 = "{[]}"
console.log(validBrackets(str4));