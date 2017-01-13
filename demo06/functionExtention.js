"use strict";

/**
 * ES6之前，为参数指定默认值的方式
 * */
function testDefaultParam() {
    /**
     * 这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。
     * 就像上面代码的最后一行，参数y等于空字符，结果被改为默认值
     * */
    function log(x, y) {
        y = y || 'World';
        console.log(x, y);
    }

    log('Hello'); // Hello World
    log('Hello', 'China'); // Hello China
    log('Hello', ''); // Hello World
}
// testDefaultParam();

/**
 * ES6的写法
 * */
function testDefaultParamInES6() {
    function log(x, y = 'World') {
        console.log(x, y);
    }

    log('Hello'); // Hello World
    log('Hello', 'China'); // Hello China
    log('Hello', ''); // Hello
}
// testDefaultParamInES6();

/**
 * 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
 * */
function testFunctionLength() {
    let length = ((a) => {
    }).length; // 1
    let length1 = (function (a = 5) {
    }).length; // 0
    let length2 = (function (a, b, c = 5) {
    }).length; // 2

    console.log(length);
    console.log(length1);
    console.log(length2);
}
testFunctionLength();





