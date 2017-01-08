"use strict";

/*
 * Math.trunc方法用于去除一个数的小数部分，返回整数部分。
 * */
function testTrunc() {
    console.log(Math.trunc(4.1));
    console.log(Math.trunc(4.9));
    console.log(Math.trunc(-4.1));
    console.log(Math.trunc(-4.9));
    console.log(Math.trunc(-0.1234));
}
// testTrunc();

/*
 * Math.sign方法用来判断一个数到底是正数、负数、还是零
 * */
function testSign() {
    console.log(Math.sign(-5));
    console.log(Math.sign(5));
    console.log(Math.sign(0));
    console.log(Math.sign(-0));
    console.log(Math.sign(NaN));
    console.log(Math.sign('foo'));
    console.log(Math.sign());
}
testSign();