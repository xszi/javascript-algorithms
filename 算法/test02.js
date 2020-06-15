var lengthOfLongestSubstring = function(s) {
    var temp = [];
    var maxLength = 0;
    
    for(var i = 0; i < s.length; i++){
        if(temp.indexOf(s[i]) === -1){
            temp.push(s[i]);
            console.log(temp, 'temp')
            if(temp.length > maxLength)
                maxLength = temp.length;
        }else{
            console.log(temp, 'temp')
            temp = temp.slice(temp.indexOf(s[i]) + 1,temp.length);
            temp.push(s[i]);
            console.log(temp, 'temp')
        }
    }
    
    return maxLength;
};

var s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))
