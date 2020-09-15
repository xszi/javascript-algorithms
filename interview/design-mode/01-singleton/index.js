// 单例模式
// var Singleton = function(name) {
//     this.name = name;
//     this.instance = null;
// }

// Singleton.prototype.getName = function() {
//     console.log(this.name);
// }

// Singleton.getInstance = function(name) {
//     if (!this.instance) {
//         this.instance = new Singleton(name);
//     }

//     return this.instance;
// }

// var a = Singleton.getInstance('a')
// var b = Singleton.getInstance('b')

// console.log(a, b, a === b) // true

var ProxySingleton = (function() {
    var _instance = null;
    return function(Func) {
        if (!_instance) {
            _instance = new Func();
        } 
        return _instance
    }
})()

function A() {
    this.name = Math.random()
}

var a = new ProxySingleton(A)
var b = new ProxySingleton(A)

console.log(a, b, a === b)
// A { name: 0.4509206017654752 } A { name: 0.4824260371444209 } true

// 查一下使用单例模式实现弹窗优化代码
