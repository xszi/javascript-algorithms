// 自平衡树（AVL树），意思是任何一个节点左右两侧子树的高度之差最多为1。添加或移除节点是，AVL树会尝试转换为完全树。
// 非平衡树查找效率较低，查找效率用平均查找长度来衡量
// 平均查找长度: 所有节点查找次数的总和 / 节点个数
// 平衡因子： 每个节点的右子树高度（hr）和左子树高度（hl）的差值，该值（hr-hl）应为0，-1或1，不属于这三个值则需要平衡。

// 插入方法为前面二叉搜索树节的加入自平衡需求的完善
var insertNode = function(node, element) {
    if (node === null) {
        node = new Node(element)
    } else if (element < node.key) {
        node.left = insertNode(node.left, element)

        if (node !== null) {
            // 确认是否需要平衡
            if((heightNode(node.left) - heightNode(node.right)) > 1) {
                if (element < node.left.key) {
                    node = rotationLL(node)
                } else {
                    node = rotationLR(node)
                }
            }
        }
    } else if (element > node.key) {
        node.right = insertNode(node.right, element)

        if (node !== null) {
            // 确认是否需要平衡
            if((heightNode(node.right) - heightNode(node.left)) > 1) {
                if (element > node.right.key) {
                    node = rotationRR(node)
                } else {
                    node = rotationRL(node)
                } 
            }
        }
    }
    return node
}

// 计算节点高度的方法，这个在前面二叉树小结已经见过：
var heightNode = function(node) {
    if (node === null) {
        return -1
    } else {
        return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
}

// AVL旋转
// - 右-右（RR）：向左的单旋转
var rotationRR = function(node) {
    var tmp = node.right
    node.right = tml.left
    tmp.left = node
    return tmp
}
// - 左-左（LL）：向右的单旋转
var rotationLL = function(node) {
    var tmp = node.left
    node.left = tml.right
    tmp.right = node
    return tmp
}
// - 左-右（LR）：向右的双旋转
var rotationLR = function(node) {
    node.left = rotationRR(node.left)
    return rotationLL(node.left)
}
// - 右-左（RL）：向左的双旋转
var rotationRL = function(node) {
    node.right = rotationLL(node.right)
    return rotationRR(node.right)
}
