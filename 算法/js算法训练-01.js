// var twoSum = function(nums, target) {
//     var arr = []
//     for(var i=0, len=nums.length; i<len; i++) {
//         for(var j=i+1; j<len; j++) {
//             if(nums[i] + nums[j] == target) {
//                 arr.push(i)
//                 arr.push(j)
//             }
//         }
//     }
//     return arr
// };

var nums = [2, 11, 15, 7], target = 9;

var twoSum = function(nums, target) {
    var dict= {};
    for(var i = 0; i<nums.length; i++) {
        var inp = nums[i];
        var diff = target-inp;
        if(diff in dict) return [dict[diff], i];
        dict[inp] = i;
        // console.log(dict, 'dict')
    }
    
    return null;
};

console.log(twoSum(nums, target))

