# 元素选择

- getElementById('d1') 返回特定元素
- getElementByClassName('c1') 返回数组
- getClientBoundingRect('') 获取某个元素的位置信息包括top，bottom， left，right
- querySelector('.c1') 返回的是单个对象
- querySelectorAll('.c1') 返回一个数组对象
- previousElementSibling   返回某个元素的上一个兄弟元素
- nextElementSibling    返回某个元素的下一个兄弟元素

# 基于元素操作

- firstChild (第一个子元素)
- lastChild (最后一个子元素)
- Document：是根节点
- ParentNode：获取父节点
- childNodes：获取所有子节点
- nodeType (1，元素节点；2，属性节点；3， 文本节点)
- nodeName 标签名
- nodeValue 文本内容
- innerText 
- innerHTML
```innerHTML会按照HTML规则解析文本，而innerText只是当做普通文本内容```

# 添加删除元素

- CreateElement 创建一个元素节点
- createTextNode 创建一个文本节点
- removeChild (删除子元素)
- appendChild (在最后一个子元素后面添加子元素)
- insertBefore (插入子元素) 传入两个参数(newChild, 要插入哪个元素之前) 

# js事件

* DOM2级事件（可以给当前元素的某一事件行为绑定多个不同方法（因为绑定的所有方法都放在事件池中））

- addEventListener('click', callback, true) 让事件在捕获阶段执行
- addEventListener('click', callback, false) 让事件在冒泡阶段执行


* DOM0级事件（只能给当前元素的某一个事件行为绑定一个方法）

- ele.onclick = callback

```
可以一次性添加几个事件，DOM2级事件不会覆盖，但是DOM级事件后面事件会覆盖前面事件
```