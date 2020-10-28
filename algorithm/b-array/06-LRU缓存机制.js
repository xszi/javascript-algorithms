// LRU最近最少使用机制

// 使用数组+对象实现
function LRUCache (capacity) {
    this.capacity = capacity
    this.cache = Object.create(null)
    this.keys = [] //存键
}

LRUCache.prototype.get = function (key) {
    if (this.cache[key]) {
        // 调整key的位置，先把当前访问的键删掉
        remove(this.keys, key)
        // 再把该键放到最前面，类似于栈的访问
        this.keys.push(key)
        return this.cache[key]
    }
    return -1
}

LRUCache.prototype.put = function (key, value) {
    if (this.cache[key]) {
        // 存在需要更新位置到最前面和更新值
        remove(this.keys, key)
        this.keys.push(key)
        this.cache[key] = value
    } else {
        // 不存在需要加入
        this.keys.push(key)
        this.cache[key] = value
        // 超过缓存容量移除离现在访问间隔最长的键
        if (this.keys.length > this.capacity) {
            removeCache(this.cache, this.keys, this.keys[0])
        }
    }
}

function remove(keys, key) {
    if (keys.length) {
        const index = keys.indexOf(key)
        if (index > -1) {
            keys.splice(index, 1)
        }
    }
}

function removeCache (cache, keys, key) {
    cache[key] = null
    remove(keys, key)
}

// 是用Map实现，利用Map既然实现键值对的存储，又能保持键值添加顺序

function LRUCache (capacity) {
    this.capacity = capacity
    this.cache = new Map()
}

LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        delete this.cache[key]
        this.cache.set(key, this.cache.get(key))
        return this.cache.get(key)
    } else {
        return -1
    }
}

LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        let temp = this.cache.get(key)
        this.cache.delete(key)
        return temp
    } else {
        if (this.cache.size >= this.capacity) {
            // this.cache.keys().next().value能拿到最底部的key
            this.cache.delete(this.cache.keys().next().value)
        }
    }
    this.cache.set(key, value)
}

// this.cache.keys().next().value demo

const map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

console.log(map.keys().next().value);