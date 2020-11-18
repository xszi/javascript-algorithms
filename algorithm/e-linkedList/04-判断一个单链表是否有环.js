// 标记法
const hasCycle = (head) => {
    while (head) {
        if (head.flag) {
            return true
        }
        head.flag = true
        head = head.next
    }
    return false
}

// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 利用 JSON.stringify() 不能序列化含有循环引用的结构
const hasCycle = (head) => {
    try {
        JSON.stringify(head)
        return false
    } catch (err) {
        return true
    }
}

// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 快慢指针
// 设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，
// 如果单链表中存在环，则快慢指针终会指向同一个节点，
// 否则直到快指针指向 null 时，快慢指针都不可能相遇
const hasCycle = (head) => {
    // 临界
    if (!head || !head.next) return false

    const fast = head.next.next
    const slow = head.next

    while(fast !== slow) {
        if (!fast || !fast.next) {
            return false
        }

        fast = fast.next.next
        slow = slow.next
    }

    return true
}

// 时间复杂度：O(n)
// 空间复杂度：O(1)