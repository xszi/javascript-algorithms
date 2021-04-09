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


//这道题经典的是细节，需要考虑蛮多细节的
//解法：
//1.暴力破解，三层枚举，O（n^3）效率太低不考虑
//2.a+b+c = 0，转换思路，a+b = -c，这不就是两数之和嘛？
//3.利用双指针夹逼，但是怎么避免重复呢？
//3.1 排序即可，利用排序好的数组，固定一个指针i，夹逼选举left和right
//3.2 这道题难度在于要考虑的细节太多，多想想即可。
//3.3 扩展一下，如果是4数之和，五数之和，N数之和呢？怎么解决？
const threeSum = (nums) => {
    const len = nums.length
    const result = []
    // 因为是三数之和，小于三个不用考虑了
    if(len < 3){
      return result
    }
    nums.sort((a, b) => a - b)
    // len - 2 同样道理，小于三个不用考虑
    for(let i = 0; i < len - 2; i++){
      // 如果第一个就大于0了，三个加起来肯定大于0
      if(nums[i] > 0){
        break
      }
      // 避免掉重复的情况
      if(i && nums[i] === nums[i - 1]){
         continue
      }
      let left = i + 1
      let right = len - 1
      // 双指针夹逼
      while(left < right){
        const sum = nums[i] + nums[left] + nums[right]
        if(sum === 0){
           result.push([nums[i], nums[left++], nums[right--]])
           // push 加了之后防止还存在重复
           while(nums[left] === nums[left - 1]){
             left++
           }
           while(nums[right] === nums[right + 1]){
             right--
           } 
        }else if(sum > 0){
            right--
        }else{
            left++
        }
      }
    }
    return result
  }