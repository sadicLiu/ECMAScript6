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
1. [Demo10:Class](#demo10class)

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
- 数组的解构赋值  
- 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
- testAsignValue()  
解构（Destructuring）的方式为变量赋值
- testDefaultValue()  
赋值时可以设置默认值

### object.js
- 对象的解构赋值

### string.js
- 字符串的解构赋值

### function.js
- 函数参数中的解构赋值

### apply.js
解构赋值的一些典型应用:
- swap()  
交换两个变量的值
- getValuesFromFunction()  
从函数中返回多个值
- extractJSONData()  
提取JSON数据
- mapVisit()
for of 获取map中的键值

## Demo03:Extention of String

### stringExtention.js
- testTemplateString()  
模板字符串
- testFunctionInTemplateString()  
在模板字符串中调用函数
- testStringIterator()  
ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。
- testNewStringAPI()  
新的api提供的函数includes(), startsWith(), endsWith()
- testRepeat()  
repeat()函数

## Demo04:Extention of Number

### numberExtention.js
- testIsFinite()  
isFinite()函数, 用来检查一个数值是否为有限的
- testIsNaN()  
isNaN()函数，用来检查一个值是否为NaN
- testParse()  
ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
- testIsInteger()  
Number.isInteger()用来判断一个值是否为整数 需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法 所以3和3.0被视为同一个值。

### mathExtention.js
- testTrunc()  
Math.trunc方法用于去除一个数的小数部分，返回整数部分。
- testSign()  
Math.sign方法用来判断一个数到底是正数、负数、还是零

## Demo05:Extention of Array

### arrayExtention.js
- testArrayFrom()  
下面是一个类似数组的对象，Array.from将它转为真正的数组
- testArrayFrom2()  
只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组
- testArrayFrom3()  
Array.from还可以接受第二个参数，作用类似于数组的map方法 用来对每个元素进行处理，将处理后的值放入返回的数组
- testConvertArray()  
将数组中布尔值为false的成员转为0
- testGetTypes()  
返回各种数据的类型
- testInitArray()  
利用Array.from方法还可以初始化一个数组
- testArrayOf()  
Array.of方法用于将一组值，转换为数组
- testArrayFind()  
数组实例的find方法，用于找出第一个符合条件的数组成员
- testArrayFindIndex()  
findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
- testArrayFill()  
fill方法使用给定值，填充一个数组
- testKeysAndValues()  
keys()和values()——用于遍历数组
- testEntries()  
entries()是对键值对的遍历
- testIncludes()  
Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值

## Demo06:Extention of Function

### functionExtention.js
- testDefaultParam()  
ES6之前，为参数指定默认值的方式
- testDefaultParamInES6()  
ES6的写法
- testFunctionLength()  
指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数

### forceParam.js
- 利用函数参数的默认值，实现强制函数必须有参数，否则报错

### rest.js
ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。
rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

### ....js
扩展运算符的应用:
- testConcatArray()  
合并数组
- getStringLength()  
获取字符串的长度

### arrowFunction.js
- basicUseage()  
箭头函数基本用法
- params()  
如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分

## Demo07:Extention of Object

### objectExtention.js
- testObjectDefine()  
对象的定义，现在可以直接用变量名定义
- testEqual()  
相等运算符（==）和严格相等运算符（===） 前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0 Object.is比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致 不同之处只有两个：一是+0不等于-0，二是NaN等于自身
- testMergeObject()  
Object.assign方法用于对象的合并 将源对象（source）的所有可枚举属性，复制到目标对象（target）
- testObjectDescriptor()  
对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为 Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
- testVisitObject()  
Object.keys()，Object.values()，Object.entries()遍历对象

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

### setInit.js
- testInitSet()  
初始化一个Set 它类似于数组，但是成员的值都是唯一的，没有重复的值
- testRemoveDuplicateElementFromArray()  
去除数组中重复成员的方法

### setOperation.js
- testSetAPI()  
add(value)：添加某个值，返回Set结构本身。 delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。 has(value)：返回一个布尔值，表示该值是否为Set的成员。 clear()：清除所有成员，没有返回值。
- testConvertSetToArray()  
Array.from方法可以将Set结构转为数组
- testDeDupe()  
去除数组重复元素的方法

### setVisit.js
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

### mapInit.js
- testMapInit()  
初始化一个Map并进行常用操作

### mapVisit.js
- testMapVisit()  
遍历Map的操作

## Demo10:Class
- constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
- 私有方法是常见需求，但ES6不提供，只能通过变通方法模拟实现。
- Bar.js
- ColorPoint.js
- Person.js
