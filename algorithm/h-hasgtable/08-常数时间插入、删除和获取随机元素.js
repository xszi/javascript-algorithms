// const RandomizeSet = function() {
//     this.map = new Map()
//     this.values = []
// }

// RandomizeSet.prototype.insert = function(val) {
//     // 存在
//     if(this.map.has(val)) {
//         return false
//     }
//     // 不存在
//     this.map.set(val, this.values.length)
//     this.values.push(val)
//     return true
// }

// RandomizeSet.prototype.remove = function(val) {
//     if(!this.map.has(val)) {
//         return false
//     }

//     const index = this.map.get(val)
//     // 存在且为最后一个元素
//     if(index === this.values.length - 1) {
//         this.values.pop()
//         this.map.delete(val)
//     } else {
//         // 存在不为最后一个元素，把最后一个位置的值填到删除的地方
//         const lastValue = this.values.pop()
//         this.values[index] = lastValue
//         this.map.set(lastValue, index)
//         this.map.delete(val)
//     }
//     return true
// }

// RandomizeSet.prototype.getRandom = function() {
//     const length = this.values.length
//     const random = Math.floor(Math.random() * length)
//     return this.values[random]
// }

const RandomizeSet = function() {
    this.set = new Set()
}

RandomizeSet.prototype.insert = function(val) {
    if (this.set.has(val)) {
        return false
    }
    this.set.add(val)
    return true
}

RandomizeSet.prototype.remove = function(val) {
    if (!this.set.has(val)) {
        return false
    }
    this.set.delete(val)
    return true
}

RandomizeSet.prototype.getRandom = function() {
    const random = parseInt(Math.random() * (this.set.size))
    return [...this.set][random]
}