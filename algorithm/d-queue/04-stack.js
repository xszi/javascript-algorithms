class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    peek() {
        return this.items[this.items.length - 1]
    }
}

// 使用stack实现整数进制转换
const baseConverter = (decNumber, base) => {

    let remStack = new Stack, 
        rem
        result = ''
    const digits  = '0123456789ABCDEF'

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while(!remStack.isEmpty()) {
        let item = remStack.pop()
        result += digits[item]
    }

    return result
}

console.log(baseConverter(100345, 2))
// console.log(baseConverter(100345, 8))
// console.log(baseConverter(100345, 16))