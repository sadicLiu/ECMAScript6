# ES6
[ECMAScript入门——阮一峰](http://es6.ruanyifeng.com/#docs)

## demo01:let and const
1. let.js
let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
2. const.js
ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
```
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined
```
上面代码中，全局变量a由var命令声明，所以它是顶层对象的属性；全局变量b由let命令声明，所以它不是顶层对象的属性，返回undefined。

## demo02:destructuring
1. array.js
数组的解构赋值
本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
2. object.js
对象的解构赋值
3. string.js
字符串的解构赋值
4. function.js
函数参数中的解构赋值
5. apply.js
解构赋值的一些典型应用
- 交换两个变量的值
- 从函数中返回多个值
- 提取JSON数据
- for of 遍历map，获取键值