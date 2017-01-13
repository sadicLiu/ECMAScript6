"use strict";

/**
 * isFinite()函数, 用来检查一个数值是否为有限的
 * */
function testIsFinite() {
    console.log(Number.isFinite(15)); // true
    console.log(Number.isFinite(0.8)); // true
    console.log(Number.isFinite(NaN)); // false
    console.log(Number.isFinite(Infinity)); // false
    console.log(Number.isFinite(-Infinity)); // false
    console.log(Number.isFinite('foo')); // false
    console.log(Number.isFinite('15')); // false
    console.log(Number.isFinite(true)); // false
}
// testIsFinite();
/**
 * isNaN()函数，用来检查一个值是否为NaN
 * */
function testIsNaN() {
    console.log(Number.isNaN(NaN));
    console.log(Number.isNaN(15));
    console.log(Number.isNaN('15'));
    console.log(Number.isNaN(true));
    console.log(Number.isNaN(9 / NaN));
    console.log(Number.isNaN('true' / 0));
    console.log(Number.isNaN('true' / 'true'));
}
// testIsNaN();

/**
 * ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
 * 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
 * */
function testParse() {
    // ES5的写法
    parseInt('12.34'); // 12
    parseFloat('123.45#'); // 123.45

    // ES6的写法
    Number.parseInt('12.34'); // 12
    Number.parseFloat('123.45#'); // 123.45
}

/**
 * Number.isInteger()用来判断一个值是否为整数
 * 需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法
 * 所以3和3.0被视为同一个值。
 * */
function testIsInteger() {
    console.log(Number.isInteger(25));
    console.log(Number.isInteger(25.0));
    console.log(Number.isInteger(25.1));
    console.log(Number.isInteger("15"));
    console.log(Number.isInteger(true));
}
testIsInteger();
