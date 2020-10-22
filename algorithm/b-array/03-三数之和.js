[-2, -1, 0, 1, 2]
// 解题步骤：
// 第一步：找临界条件
// 第二步：找特殊情况
// 第三步：一般性的算法
// 第四步：回归分析检查
const threeSum = (nums) => {
    // 特殊情况一：数组不存在或长度小于3
    if (!nums || nums.length < 3) {
        return []
    }
    let result = []
    // 先排序
    nums.sort((a, b) => a - b)
    for(let i=0; i<nums.length; i++) {
        // // 特殊情况2：num[i]为相加项的第一项，因为数组已排序，所以如果第一项大于0，相加结果必大于0,退出遍历
        if (nums[i] > 0) break
        // 去重
        if (i > 0 && nums[i] ===  nums[i-1]) continue
        // 使用快慢指针夹逼紧凑
        let second = i + 1 // 第二项
        let last = nums.length - 1 // 最后一项
        // 临界条件 最后项索引小于第二项索引
        while (second < last) {
            const sum = nums[i] + nums[second] + nums[last]
            if (!sum) {
                // 如果找到push进结果数组
                result.push([nums[i], nums[second], nums[last]])
                // 去重
                while(nums[second] === nums[second + 1]) second++;
                while(nums[last] === nums[last - 1]) last--
                // 前后指针移动
                second++;
                last--
            }
            // sum < 0 向右移动第二项指针
            else if(sum < 0) second++;
            // sum > 0 向左移动最后项指针
            else if(sum > 0) last++;
        }
    }
    return result
}