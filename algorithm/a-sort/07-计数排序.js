function countingSort(arr) {
    // 先获取数组最大值
    var maxValue = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    var bucket = newArray(maxValue + 1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;
 
    for(var i = 0; i < arrLen; i++) {
        if(!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
 
    for(var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
 
    return arr;
}