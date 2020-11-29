function Set () {
    let items = {}

    // this.has = function (value) {
    //     return value in items
    // }
    // 第二种更好的方法
    this.has = function (value) {
        return items.hasOwnProperty(value)
    }
    
    this.add = function (value) {
        if (!items.has(value)) {
            items[value] = value
            return true
        }
        return false
    }

    this.remove = function (value) {
        if (items.has(value)) {
            delete items[value]
            return true
        }
        return false
    }

    this.clear = function () {
        items = {}
    }

    this.size = function () {
        return Object.keys(items).length
    }

    // hasOwnProperty可以保证获取的属性为当前对象自有属性，而不是从原型继承过来的的额外属性
    this.sizeLegacy = function () {
        let count = 0
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                ++count
            }
        }
        return count
    }

    this.values = function () {
        let values = []
        for (let i = 0; i< Object.keys(values).length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.valuesLegacy = function () {
        let values = []
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key])
            }
        }
        return values
    }

    // 并集
    this.union = function (otherSet) {
        let unionSet = new Set()

        let values = this.values
        for(let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()
        for(let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }

    // 交集
    this.intersection = function (otherSet) {
        let intersectionSet = new Set()

        let values = this.values()
        for(let i = 0; i< values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet
    }

    // 差集
    this.difference = function (otherSet) {
        let differenceSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }

        return differenceSet
    }

    // 判断子集
    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        } else {
            let values = this.values()
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}