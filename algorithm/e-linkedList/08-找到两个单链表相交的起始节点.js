// 方法1
// const getIntersectionNode = (headA, headB) => {
//     while(headA) {
//         headA.flag = 1
//         headA = headA.next
//     }
//     while(headB) {
//         if (headB.flag === 1) {
//             return headB
//         }
//         headB = headB.next
//     }
//     return null
// }

// 方法2
const getIntersectionNode = function(headA, headB) {
    var pA = headA;
    var pB = headB;
    while(pA !== pB){
        pB = pB? pB.next: headA;
        pA = pA? pA.next: headB;
    }
    return pA;
};