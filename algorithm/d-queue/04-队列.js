// 使用闭包和weakMap创建具有items私有属性的队列
let Queue = (function () {
    const items = new weakMap()
    class Queue {
        constructor () {
            items.set(this, [])
        }

        enqueue (item) {
            let q = items.get(this)
            q.push(item)
        }

        dequeue () {
            let q = items.get(this)
            let r = q.shift()
            return r
        }
    }
    return Queue
})()

// 优先队列

function PriorityQueue() {
    let items = []
    function QueueElement (element, priority) {
        this.element = element
        this.priority = priority
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority)
        let added = false
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }
        if (!added) {
            items.push(queueElement)
        }
    }
}

class Queue {
    constructor () {
        this.items = []
    }

    enqueue(queueElement) {
        this.items.push(queueElement)
    }

    dequeue() {
        let q = this.items.shift()
        return q
    }
}

// 击鼓传花游戏
function hotPotato (nameList, num) {
    let queue = new Queue
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    let eliminated = ''
    while(queue.size() > 0) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue)
        }
        eliminated = queue.dequeue()
        console.log(eliminated + 'out')
    }

    return queue.dequeue()
}

// 单调队列
// 队列元素单调递减和单调递增
// 从队尾入列，对首或队尾出列