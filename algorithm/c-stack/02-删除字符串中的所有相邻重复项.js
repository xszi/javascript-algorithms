const deleteMethod = (s) => {
    let stack = []
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
}

const s = 'cscscsaa'
console.log(deleteMethod(s))