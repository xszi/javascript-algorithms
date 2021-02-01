function radixSort(arr) {
    // 先获取数组最大值
    var maxDigit = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxDigit) {
            maxDigit = arr[i]
        }
    }
    var mod = 10; // 进制
    var dev = 1; // 
    var counter = []
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            // 第一次获取个位上数
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket] == null) {
                counter[bucket] = [];
            }
            // 根据个位数放入counter数组
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        // 第一次根据个位数顺序输出arr
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j] != null) {
                while((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
            }
        }
        // 紧接着在十位数上重复该动作
    }
    return arr;
}