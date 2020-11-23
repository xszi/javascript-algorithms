// 示例：
// 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
// 输出：2 -> 1 -> 9，即912
const addTwoNumbers = function (l1, l2) {
    let carry = 0, root = new ListNode(null);
    let p = root;
    while (l1 || l2 || carry) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        //进位
        carry = Math.floor(val / 10);
        //值
        val = val % 10;
        /* 新结点赋值 */
        p.next = new ListNode(val);
        p = p.next;
        /* 判断l1,l2 */
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return root.next;
};

// 示例：
// 输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
// 输出：9 -> 1 -> 2，即912

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const addTwoNumbers = function (l1, l2) {
    let carry = 0, root = new ListNode(null);
    let stack1 = [], stack2 = [];
    while (l1) {
        stack1.push(l1);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2);
        l2 = l2.next;
    }
    let p = root;
    while (stack1.length || stack2.length || carry) {
        /* 取出栈最后的数 */
        let val1 = stack1.length ? stack1.pop().val : 0;
        let val2 = stack2.length ? stack2.pop().val : 0;
        /* 取余数和进位 */
        val = val1 + val2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        /* 创建新结点，将旧节点放到尾部 */
        let node = new ListNode(val);
        node.next = p;
        p = node;
    }
    return p;
};