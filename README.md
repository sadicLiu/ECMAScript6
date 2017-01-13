# ES6
## 说明
1. [ECMAScript入门——阮一峰](http://es6.ruanyifeng.com/#docs)
本项目中所有的demo都来自这本书中的实例，更准确的说，这些demo是挑选了一些比较常用的API进行了测试
2. ES6中常用的API都写在了demo文件夹中的对应文件中，每个函数都是模仿jUnit单元测试框架写的测试函数（testXXX）
3. 可以在WebStorm的es6环境下直接运行这些js文件
4. 在看这个文档之前你应该弄清楚JavaScript和ECMAScript的区别
5. 下面的内容是对每一个demo文件夹里的js文件有哪些内容进行的说明，说明内容基本上就是我在js文件中给每个函数写的注释，然后用jsdoc生成了js文档，把这些文档内容拿了过来

## 编码规范
1. js文件命名采用驼峰命名法
2. js文件中的注释格式是以`/**`开头的注释，因为要用到[jsdoc](https://github.com/jsdoc3/jsdoc)这个插件生成文档，而这个插件默认会忽略以`/*`开头的注释
3. js中的每个函数都以test开头

## Index
1. [Demo01:let and const](#demo01let-and-const)
1. [Demo02:Destructuring](#demo02destructuring)
1. [Demo03:Extention of String](#demo03extention-of-string)
1. [Demo04:Extention of Number](#demo04extention-of-number)
1. [Demo05:Extention of Array](#demo05extention-of-array)
1. [Demo06:Extention of Function](#demo06extention-of-function)
1. [Demo07:Extention of Object](#demo07extention-of-object)
1. [Demo08:Symbol](#demo08symbol)
1. [Demo09:Set and Map](#demo09set-and-map)

## Demo01:let and const

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

## Demo02:Destructuring

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

## Demo03:Extention of String

### stringExtention.js
字符串api的扩展，其中包含了扩展api的demo演示

## Demo04:Extention of Number

### numberExtention.js
Number类的扩展

### mathExtention.js
Math类的扩展

## Demo05:Extention of Array

### arrayExtention.js

## Demo06:Extention of Function

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

## Demo07:Extention of Object

### objectExtention.js

## Demo08:Symbol

### symbol.js
- ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
- 判断数据类型的三种方式：typeof、instanceof、Object.prototype.toString.call(variable)
- Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
- 由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
- testSymbol()  
Symbol的使用
- testObjectProperty()  
Symbol用于对象的属性名
- testObjectFunction()  
Symbol用于对象的方法名
- testSymbolInSwitch()  
Symbol适合用在switch的条件中，消除魔术字符串

## Demo09:Set and Map

### 1-setInit.js
- testInitSet()  
初始化一个Set 它类似于数组，但是成员的值都是唯一的，没有重复的值
- testRemoveDuplicateElementFromArray()  
去除数组中重复成员的方法

### 2-setOperation.js
- testSetAPI()  
add(value)：添加某个值，返回Set结构本身。 delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。 has(value)：返回一个布尔值，表示该值是否为Set的成员。 clear()：清除所有成员，没有返回值。
- testConvertSetToArray()  
Array.from方法可以将Set结构转为数组
- testDeDupe()  
去除数组重复元素的方法

### 3-setVisit.js
- Set结构的实例有四个遍历方法，可以用于遍历成员
  keys()：返回键名的遍历器
  values()：返回键值的遍历器
  entries()：返回键值对的遍历器
  forEach()：使用回调函数遍历每个成员
  > Set不像Map，不是由键值对构成的，所以上面这些api根本没啥用，直接for循环遍历就好
- 需要特别指出的是，Set的遍历顺序就是插入顺序
- testVisitSet()  
Set结构的实例有四个遍历方法 keys()：返回键名的遍历器 values()：返回键值的遍历器 entries()：返回键值对的遍历器 forEach()：使用回调函数遍历每个成员 不过还是for...of...最实用
- testForEach()  
forEach方法遍历Set
- testOperate()  
使用Set可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）

### 1-mapInit.js
- testMapInit()  
初始化一个Map并进行常用操作

### 2-mapVisit.js
- testMapVisit()  
遍历Map的操作
