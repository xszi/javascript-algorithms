// 方法1：迭代法
const reverseList = (head) => {
    // 边界条件
    if (!head || !head.next) return head

    let prev = null, curr = head

    while (cur) {
        // 暂存curr的后继节点
        const next = curr.next
        // 当前curr指向反转到前面一项
        curr.next = prev
        // 往后迭代，当前项成为了后面项的前面一项
        prev = curr
        curr = next
    }
    // 此时curr为null
    head = prev
    return head
}

// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 方法2：递归法，思路与方法1类似

const reverseList = (head) => {
    // 边界条件
    if (!head || !head.next) return head

    head = reverse(null, head)

    return head
}

const reverse = (prev, curr) => {
    if (!curr) return prev
    const next = curr.next
    // 指向反转
    curr.next = prev
    return reverse(curr, next)
}

// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 方法3： 还是递归法，不过先从后面开始反转, 再向前回溯


const reverseList = (head) => {
    // 边界条件
    if (!head || !head.next) return head

    const next = head.next
    
    // 递归反转
    const reverseHead = reverseList(next)

    // 从最后两个开始反转指针
    next.next = head
    head.next = null

    return reverseHead
}

// 时间复杂度：O(n)
// 空间复杂度：O(n)