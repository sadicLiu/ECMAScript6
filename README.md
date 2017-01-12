# ES6
## 说明
1. [ECMAScript入门——阮一峰](http://es6.ruanyifeng.com/#docs)
本项目中所有的demo都来自这本书中的实例，更准确的说，这些demo是挑选了一些比较常用的API进行了测试
2. ES6中常用的API都写在了demo文件夹中的对应文件中，每个函数都是模仿jUnit单元测试框架写的测试函数（testXXX）
3. 可以在WebStorm的es6环境下直接运行这些js文件
4. 在看这个文档之前你应该弄清楚JavaScript和ECMAScript的区别
5. 下面的内容是对每一个demo文件夹里的js文件有哪些内容进行的说明，说明内容基本上就是我在js文件中给每个函数写的注释，然后用jsdoc生成了js文档，把这些文档内容拿了过来

## demo01:let and const
### let.js
- let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
- testLetAndVar()  
let是局部变量，只在当前代码块有效
- testVarInFor()  
在for循环中使用var的一个demo
- testLetInFor()  
在for循环中使用let的一个demo
- testLetScope()  
下面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp， 导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错
- testVarOverride()  
ES5只有全局作用域和函数作用域，没有块级作用域，内层变量可能会覆盖外层变量。 同时，这个demo说明函数中还可以定义函数

### const.js
- ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。
```
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined
```
上面代码中，全局变量a由var命令声明，所以它是顶层对象的属性；全局变量b由let命令声明，所以它不是顶层对象的属性，返回undefined
- testConstScope()  
const的作用域与let命令相同：只在声明所在的块级作用域内有效。
- testConstDefine()  
const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用
- testObjFreeze()  
冻结对象

## demo02:Destructuring
### array.js
数组的解构赋值
本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
### object.js
对象的解构赋值
### string.js
字符串的解构赋值
### function.js
函数参数中的解构赋值
### apply.js
解构赋值的一些典型应用
- 交换两个变量的值
- 从函数中返回多个值
- 提取JSON数据
- for of 遍历map，获取键值

## demo03:Extention of String
### stringExtention.js
字符串api的扩展，其中包含了扩展api的demo演示

## demo04:Extention of Number
### numberExtention.js
Number类的扩展
### mathExtention.js
Math类的扩展

## demo05:Extention of Array
### arrayExtention.js

## demo06:Extention of Function
### functionExtention.js
### forceParam.js
利用函数参数的默认值，实现强制函数必须有参数，否则报错
### rest.js
ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。
rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
### ....js
扩展运算符的应用
### arrowFunction.js
箭头函数

## demo07:Extention of Object







