
var validMountainArray = function(A) {
    if (!Array.isArray(A)) return false
    if (A.length < 3) return false
    let maxNum = Math.max.apply(null,A)
    console.log(maxNum)
    let index = A.indexOf(maxNum)
    console.log(index)
    for (let i=0; i<index; i++) {
        if(A[i] >= A[i+1]) {
            return false
        }
    }
    for (let j=index; j<A.length; j++) {
        if(A[j] <= A[j+1]) {
            return false
        }
    }
    return true
};

var A = [0,3,2,1]
validMountainArray(A)
