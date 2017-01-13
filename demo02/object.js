"use strict";
/**
 * 对象的解构赋值
 * */
function testAsignValue() {
    {
        let {foo, bar} = {foo: "aaa", bar: "bbb"};
        console.log(`foo: ${foo}    bar: ${bar}`);
    }

    // 对象的解构赋值是下面形式的简写
    var {foo: foo, bar: bar} = {foo: "aaa", bar: "bbb"};
    console.log(`foo: ${foo}    bar: ${bar}`);
}
testAsignValue();