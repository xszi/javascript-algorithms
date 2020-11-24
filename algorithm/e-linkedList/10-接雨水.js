// 暴力解法
var trap = function(height) {
    let sum = 0
    for(let index=1; index<height.length-1; index++){
        let leftMax = 0 //找左边最大高度
        for(let i=index-1; i>=0; i--){
            leftMax = height[i] >= leftMax ? height[i] : leftMax
        }
        let rightMax = 0 //找右边最大高度
        for(let i=index+1; i<height.length; i++){
            rightMax = height[i] >= rightMax ? height[i] : rightMax
        }
        let min = Math.min(leftMax, rightMax) //得到左右两边最大高度中较矮的那个高度
        if(min > height[index]){
            sum = sum + min - height[index] //接水量 = 左右两边最大高度中较矮的那个高度 - 当前项的高度
        }
        //console.log(leftMax, rightMax, sum)
    }
    return sum
};

// 虚拟值暂存
const trap = function (height) {

    let temp = 0 //当前最高水柱高度
    let virtual = 0 //虚拟值
    let sum = 0 //总值
    
    //从左向右计算
    for (let i = 0; i < height.length; i++) {
            //如果水柱低于当前最高水柱
            if(temp > height[i]){
                virtual += (temp - height[i]) //虚拟值累加
                //加虚拟值
            }else{ //如果水柱高于或等于当前最高水柱
                //将之前加的虚拟值一并加入总值 并 更新当前最高水柱高度
                temp = height[i]
                sum = sum + virtual
                virtual = 0 //再重新算下一个虚拟值
            }
    }

    //重新初始化值
    virtual = 0
    temp = 0

    //从右向左计算（同上的方法）
    for (let i = height.length; i>=0; i--) {
            if(temp > height[i]){
                virtual += (temp - height[i])
            }else if(temp < height[i]){ //不过这里没有等于条件，防止与上面的重复
                temp = height[i]
                sum = sum + virtual
                virtual = 0
            }
    }

    return sum
};

// 双指针法
// 1.分别设定左右两个指针，按照一定条件往中间移动
// 2.如果左边的指针所在高度小于右边，则左指针向右移动，否则右指针向左移动
// 3.当左右两个指针所在的高度不为零，左右指针之间有某个位置的高度小于左右指针所在位置的最小值，那这个位置必然可以储水
// 4.计算完当前位置储水后，更新左或右指针的位置，
const trap = function (height) {
    if (height.length < 3) { return 0; }
    let left = 0, length = height.length,
        right = length - 1, sum = 0, 
        tempLeft, tempRight, add;
    while (left < right) {
        add = 0;
        if (height[left] <= height[right]) {
            if (tempLeft === undefined) {
                tempLeft = height[left];
            }
            tempLeft = tempLeft < height[left] ? height[left] : tempLeft;
            left++;
            add = tempLeft - height[left];
        } else {
            if (tempRight === undefined) {
                tempRight = height[right];
            }
            tempRight = tempRight < height[right] ? height[right] : tempRight;
            right--;
            add = tempRight - height[right];
        }
        if (add > 0) {
            sum += add;
        }
    }
    return sum;
};