class MinStack {
    constructor () {
        this.items = []
        this.min = null
    }
    push (item) {
        if (!this.items.length) {
            this.min = item
        } else {
            this.min = Math.min(this.min, item)
        }
        this.items.push(item)
     }
    pop () {
        let temp = this.items.pop()
        this.min = Math.min(...this.items)
        return temp      
    }
    top () {
        return this.items[this.items.length - 1]
    }
    getMin () {
        return this.min
    }
}