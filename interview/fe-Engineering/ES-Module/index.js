// 问题1 在 Node 中使用 ES-module 要在node V > 13 版本
// 解决在 Node 中不能使用 ES-module 的方法有两个：

// 方法1 
// 安装 esm, npm install esm ，使用node -r esm XXX.js

// 方法2
// 将node版本升高， V > 13


// 问题2 ES-module的同步异步问题
// 关于es-module规范仅描述语法部分，这个语法部分对同步和异步都是友好的，
// 至于最后在运行时是同步还是异步实现，那取决于loader api
// 如果你用过webpack + babel的话，webpack有的是bundle路线，都打包在一起了，自然是同步的
// 那如果你写过angular2，按照官网文档使用System.js，那会发现所有模块又是运行时异步加载的。
import './moduleA';
import m from './moduleB';
console.log(m);