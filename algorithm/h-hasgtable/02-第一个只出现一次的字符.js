const findStrshowOnce = (s) => {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        // 字符对应的值为true代表有重复
        if (!map.has(s[i])) {
            map.set(s[i], false)
        } else {
            map.set(s[i], true)
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!map.get(s[i])) {
            return s[i]
        }
    }
    return ''
}

const s = 'asbaccdeff'

console.log(findStrshowOnce(s));

