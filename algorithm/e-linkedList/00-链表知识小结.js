// 链表数据结构骨架
function LinkedList () {
    
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null

    this.append = function (element) {} // 向列表尾部添加新项
    this.insert = function (position, element) {} // 向列表特定位置插入新项
    this.removeAt = function (position) {} // 从列表特定位置移除项
    this.remove = function (element) {} // 从列表中移除项
    this.toString = function () {} // 将链表转为字符串
    this.indexOf = function (element) {} // 返回元素在列表中的索引，没有返回-1
    this.isEmpty = function () {} // 判断列表是否为空列表
    this.size = function () {} // 返回列表包含元素的个数
    this.getHead = function () {} // 返回列表的头
}

// 链表方法
//向列表尾部添加新项
this.append = function (element) {
    let node = new Node(element), 
        current

    if (head === null) {
        head = node
    } else {
        current = head
        // 循环找到最后一项
        while(current.next) {
            current = current.next
        }
        // 最后一项添加node
        current.next = node
    }

    length++
}

// 从列表特定位置移除项
this.removeAt = function(position) {
    // 检查越界
    if (position > -1 && position < length) {
        let current = head,
            previous,
            index = 0
        
        if (position === 0) {
            head = current.next
        } else {
            // 找到删除位置current
            while (index++ < position) {
                previous = current
                current = current.next
            }
            // 要删除的current前一项的next与下一项的next连接起来
            previous.next = current.next
        }

        length--

        return current.element
    } else {
        return null
    }
}

// 向列表特定位置插入新项
this.insert = function(position, element) {
    // 检查越界
    if (position >= 0 && position < length) {
        let node = new Node(element),
            current = head
            previous
            index = 0
        
        if (position === 0) {
            node.next = current
            head = node
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }

            node.next = current
            previous.next = node
        }

        length++
        return true
    } else {
        return false
    }
}

// 将链表转为字符串
this.toString = function () {
    let current = head
        string = ''
    
    while (current) {
        string += current.element + (current.next ? 'n' : '')
        current = current.next
    }

    return string
}

// indexOf方法
this.indexOf = function (element) {
    let current = head
    index = -1

    while(current) {
        if (element === current.element) {
            return index
        }
        index++
        current = current.next
    }
    return -1
}

// isEmpty方法
this.isEmpty = function () {
    return length === 0
}

// size方法
this.size = function () {
    return length
}

// getHead方法
this.getHead = function () {
    return head
}