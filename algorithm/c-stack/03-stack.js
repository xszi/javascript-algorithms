class Stack {
    constructor () {
        this.items = []
    }
    
    push (element) {
        this.items.push(element)
    }
    
    pop () {
        this.items.pop()
    }
    
    peek () {
        return this.items[this.item.length - 1]
    }
    
    isEmpty () {
        return this.items.length === 0
    }
    
    clear () {
        this.items = []
    }
}

function baseConverter (decNumber, base) {
    var remStack = new Stack(),
    	rem,
        baseString = '',
        digits = '0123456789ABCDEF'
    
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }
    
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.items.pop()]
    }
    
    return baseString
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))