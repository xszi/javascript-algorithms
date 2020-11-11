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