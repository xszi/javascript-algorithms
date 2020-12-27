function Dictionary () {
    var items = {}

    this.has = function(key) {
        return key in items
    }

    this.set = function(key, value) {
        items[key] = value
    }

    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }

    this.values = function() {
        var values = []
        for (var k in items) {
            if (this.has(key)) {
                values.push(items[k])
            }
        }
        return values
    }

    this.keys = function() {
        return Object.keys(items)
    }

    this.getItems = function() {
        return items
    }
}


function HashTable() {
    var table = []

    var loseloseHashCode = function(key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        console.log(position + ' _ ' + key);
        table[position] = value
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)]
    }

    // 不能将位置本身从数组中删除（这会改变其他元素的位置），
    // 否则，当下次需要获得或移除一个元素的时候，这个元素会不在我们用散列函数求出的位置上。
    this.remove = function(key){
        table[loseloseHashCode(key)] = undefined
    }
}