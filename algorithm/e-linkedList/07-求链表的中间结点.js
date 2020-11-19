// 快指针一次走两步，慢指针一次走一步，当快指针走到终点时，慢指针刚好走到中间
const getMiddle = (head) => {
    let fast = head, slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}