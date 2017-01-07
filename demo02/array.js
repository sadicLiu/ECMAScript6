"use strict";

/*
 * 解构（Destructuring）的方式为变量赋值
 * */
function testAsignValue() {
    let [a, b, c] = [1, 2, 3];
    console.log(` a: ${a}\n b: ${b}\n c: ${c}`);

    let [head, ...tail] = [1, 2, 3, 4];
    console.log(`head: ${head}`);
    console.log(`tail: ${tail}`);

    // 如果解构不成功，变量的值就等于undefined。
    let [bar, foo] = [1];
    console.log(`foo: ${foo}`);
}
// testAsignValue();

/*
 * 赋值时可以设置默认值
 * */
function testDefaultValue() {
    let [foo = true] = [];
    console.log(`foo: ${foo}`);

    let [x, y = 'b'] = ['a'];
    console.log(`x: ${x}    y: ${y}`);
}
testDefaultValue();