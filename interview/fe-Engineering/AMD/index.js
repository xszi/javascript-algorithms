// ES-module出来之前，前端加载都是用AMD的
// commonJS规范是同步的，必须模块加载完成之后再进行加载，不适应于浏览器（会假死/卡死）向服务器加载资源
// 然后便出现了AMD(Asynchronous Module Definition)

// 采用异步方式加载模块，模块的加载不影响它后面语句的运行。
// 所有依赖这个模块的语句，都定义在一个回调函数中，
// 等到加载完成之后，这个回调函数才会运行。
require(['moduleA', 'moduleB'], function(moduleA, moduleB) {
    console.log(moduleB);
});