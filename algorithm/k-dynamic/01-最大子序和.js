const largestChildSum = (nums) => {
    let dp = new Array();
    dp[0] = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i- 1] + nums[i], nums[i]);	
        if (max < dp[i]) {
            max = dp[i];
        }
    }
    return max;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(largestChildSum(nums));