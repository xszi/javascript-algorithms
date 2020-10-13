// 从前序与中序遍历序列构造二叉树
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
    if (preorder.length) {
        let head = new TreeNode(preorder.shift());
        let index = inorder.indexOf(head.val);
        head.left = buildTree(
            preorder.slice(0, index),
            inorder.slice(0, index)
        );
        head.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
        // 这里要注意，preorder前面shift一次长度比inorder小1
        return head;
    } else {
        return null;
    }
};