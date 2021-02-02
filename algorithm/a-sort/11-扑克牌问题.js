// * 从手上牌的底部拿一张放到牌顶
// * 再从桌上拿张牌放到牌顶
const calc = (arr) => {
    const origin = [];
    for (let i = 0; i < arr.length; i++) {
        if (origin.length) {
            const item = origin.pop();
            origin.unshift(item);
        }
        origin.unshift(arr[i])
    }
    return origin;
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

console.log(calc(arr));