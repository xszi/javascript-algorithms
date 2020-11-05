/* 
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const subFlow = createFlow([() => delay(1000).then(() => console.log("c"))]);

    createFlow([
        () => console.log("a"),
        () => console.log("b"),
        subFlow,
        [() => delay(1000).then(() => console.log("d")), () => console.log("e")],
        ]).run(() => {
        console.log("done");
    });
*/

// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印
// 按照上面的测试用例，实现 createFlow：

// - flow 是指一系列 effects 组成的逻辑片段。
// - flow 支持嵌套。
// - effects 的执行只需要支持串行。


// 第一种方法 --- function
// function createFlow(effects = []) {
//     const queue = [...effects.flat()]
//     const run = async function(cb) {
//         for (let task of queue) {
//             if(task.isFlow) {
//                 await task.run()
//             } else {
//                 await task()
//             }
//         }
//         if(cb) cb()
//     }
//     return {
//         run,
//         isFlow: true
//     }
// }

// 第二种方法 --- class
class Flow {
    constructor(effects) {
        this.queue = [...effects.flat()]
    }
    async run(cb) {
        for (let task of this.queue) {
            if(task instanceof Flow) {
                await task.run()
            } else {
                await task()
            }
        }
        if(cb) cb()
    }
}

function createFlow(effects = []) {
    return new Flow(effects)
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 函数可以提升，但是class不能，所以当subFlow写在class后面会报错
// Cannot access 'Flow' before initialization
const subFlow = createFlow([() => delay(1000).then(() => console.log("c"))]);

const effects = [
    () => console.log("a"), // 普通函数
    () => console.log("b"),
    subFlow, // 嵌套函数
    [() => delay(1000).then(() => console.log("d")), () => console.log("e")], // 数组 + 异步函数
]

createFlow(effects).run(() => {
    console.log('done')
})