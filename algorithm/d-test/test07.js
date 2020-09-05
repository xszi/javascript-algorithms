// 组合传参，使用闭包
const add = (...args) => {
    const nums = [...args]

    function addFn(...args1) {
        nums.push(...args1)
        return addFn
    }

    addFn.value = () => {
        const sum = nums.reduce((t, s) => t + s)
        return sum
    }

    return addFn
}

console.log(add(1)(2,3)(4).value())
console.log(add(1)(2,3,4)(5).value())