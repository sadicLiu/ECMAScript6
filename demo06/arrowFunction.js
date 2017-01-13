"use strict";

/**
 * 箭头函数基本用法
 * */
function basicUseage() {
    let f = v => v;

    let f2 = function (v) {
        return v;
    };

    console.log(f(1));
    console.log(f2(1));
}
// basicUseage();

/**
 * 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
 * */
function params() {
    let f = () => 5;
    let f2 = function () {
        return 5
    };
    console.log(f() === f2());

    let sum = (num1, num2) => num1 + num2;
    let sum2 = function (num1, num2) {
        return num1 + num2;
    };
    console.log(sum(1, 1) === sum2(1, 1));
}
params();