function HashTable() {
    var table = []

    var loseloseHashCode = function(key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    // 增加一个辅助类
    var ValuePair = function(key, value) {
        this.key = key
        this.value = value

        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        // 使用线性查找
        if (table[position] === undefined) {
           table[position] = new ValuePair(key, value) 
        } else {
            var index = ++position
            while (table[index] !== undefined) {
                index++
            }
            table[index] = new ValuePair(key, value)
        }
    }

    this.get = function (key) {
        var position = loseloseHashCode(key)

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value
            } else {
                var index = ++position
                while (table[index] === undefined || table[index].key !== key) {
                    index++
                }
                if (table[index].key === key) {
                    return table[index].value
                }
            }
        }
        return undefined
    }

    this.remove = function(key) {

        var position = loseloseHashCode(key)

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[position].value = undefined
                return true
            } else {
                var index = ++position
                while (table[index] === undefined || table[index].key !== key) {
                    index++
                }
                if (table[index].key === key) {
                    table[index].value = undefined
                    return true
                }
            }
        }
        return false
    }
}


// 更好的散列函数
var djb2HashCode = function(key) {
    var hash = 5381
    for (var i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i)
    }

    return hash % 1013
}