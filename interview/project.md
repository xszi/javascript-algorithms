# 前端工程化问题

## npm 与 npx 的区别

npm 为我们熟知的 包管理工具

npx 为包执行工具，它从 npm5.2版本开始，就与npm捆绑在一起。

 npx的作用如下：

1. 默认情况下，首先检查路径中是否存在要执行的包（即在项目中）；
2. 如果存在，它将执行；
3. 若不存在，意味着尚未安装该软件包，npx将安装其最新版本，然后执行它；

使用场景：

- 本地 bin 寻址

假设有一个名为my-package的软件包，想要执行它。

好吧，若没有npx，要执行一个软件包，必须通过其本地路径运行来完成，如下所示：

```./node_modules/bin/my-package```

或在 package.json文件的 scripts section中将其定义为单独的脚本，如下所示：

```json
{
  "name":"something",
  "version": "1.0.0",
  "scripts": {
    "my-package":"./node_modules/bin/my-package"
  }
}
```

然后使用npm run my-package运行。

现在，运用npx，只需运行npx my-package.，即可轻松实现此目的。

- 骨架

```js
// 内部其实调用了npx
$ npm init egg --type=simple

// 等价于
$ npm install create-egg -g
$ create-egg --type=simple
```

## 全局安装与局部安装

全局安装的文件放在:
``` "C:\Users\jiuhua-pc\AppData\Roaming\npm" ```，.cmd拓展符文件可以直接命令行执行

局部安装的文件放在：
``` 当前项目下的 ./node_modules 文件下 ```

注：本地安装一般是 npm install webpack或者npm install webpack --save 或者 npm install webpack --save-dev等等，他们都是全局安装，区别仅在于是否将依赖存入dependencies以及devdependencies文件中去。

为什么已经全局安装了，还需要本地安装呢？
