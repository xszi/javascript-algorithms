// 判断滚动条到底部，需要用到DOM的三个属性值，即scrollTop、clientHeight、scrollHeight。

// scrollTop为滚动条在Y轴上的滚动距离。

// clientHeight为内容可视区域的高度。

// scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。

// 从这个三个属性的介绍就可以看出来，滚动条到底部的条件即为scrollTop + clientHeight == scrollHeight。

//1. 滚动条在Y轴上的滚动距离
function getScrollTop(){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}

//2. 文档的总高度
function getScrollHeight(){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}

//3. 浏览器视口的高度
function getWindowHeight(){
　　var windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}

//  4. 全部监听滚动或者 组件上监听@scroll
window.onscroll = function(){
　　if(getScrollTop() + getWindowHeight() == getScrollHeight()){
　　　　alert("you are in the bottom!");
　　}
    // 也可以滚动里底部某一个阀值距离开始加载操作
    const THRESHOLD = 50
    const toBottonDistance = getScrollHeight() - (getScrollTop() + getWindowHeight())
    if (toBottonDistance < THRESHOLD) {
        console.log("开始加载操作")
    }
};


// 注：记得这里踩过一个坑，关于全局监听和局部监听，但是具体是什么想不起来了，下次遇到再来补充！

