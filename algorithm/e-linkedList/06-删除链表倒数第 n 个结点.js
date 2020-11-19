// 使用快慢指针，快指针先走n步
// 如果第n项的next不存在，则第一项为要删除的节点
// 如果第n项的next存在，快指针再走一步，这样做是为了获得快慢指针n+1数差
// 然后快慢指针一起走，一直到快指针指向null停止，此时停在倒数第一项上，慢指针到了第n-1项上，做第n项删除操作
const deleteNode = (head, n) => {
    let fast = head, slow = head
    // 先走n步
    while(n--) {
        fast = fast.next
    }
    if (!fast.next) return head.next
    // 再走一步
    fast = fast.next
    // 快慢指针一起走,到倒数第二项
    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return head
}