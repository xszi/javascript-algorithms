/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var arr = s.split('')
    var arr1 = [], maxLength = 0
    for( var i=0, len=arr.length; i<len; i++) {
        if(arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i])
            if(arr1.length>maxLength){
                maxLength = arr1.length
            }
        }else{
            arr1.push(arr[i])
            arr1 = arr1.slice(arr1.indexOf(arr[i])+1, arr1.length)
        }
    }
    return maxLength
};

var s = 'abceabcbb'
console.log(lengthOfLongestSubstring(s))