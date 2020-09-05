const s = '[{()}]'
const isValid = (s) => {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = []
    for (let i = 0, len = s.length; i < len; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else if (s[i] !== map[stack.pop()]) {
            return false
        }
    }
    return stack.length === 0
}

console.log(isValid(s));
