// 先进先出
class Queue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    appendTail(item) {
        this.stack1.push(item) // 1, 2, 3
    }
    deleteHead() {
        if (this.stack2.length) {
            this.stack2.pop()
        }
        if (!this.stack1.length) return -1
        // 序列倒置
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop()) // 3, 2, 1
        }
        // 记住pop是有返回值的
        return this.stack2.pop()
    }
}