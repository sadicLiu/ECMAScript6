'use strict';

function testConst() {
    const PI = 3.1415;
    PI // 3.1415
    // PI = 3; // TypeError: Assignment to constant variable.
}
// testConst();

/**
 * const的作用域与let命令相同：只在声明所在的块级作用域内有效。
 * */
function testConstScope() {
    if (true) {
        const MAX = 5;
    }
    console.log(MAX); // ReferenceError: MAX is not defined
}
// testConstScope();

/**
 * const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
 * */
function testConstDefine() {
    if (true) {
        console.log(MAX); // ReferenceError
        const MAX = 5;
    }
}
// testConstDefine();

/**
 * 冻结对象
 * */
function testObjFreeze() {
    const foo = Object.freeze({});

    // 常规模式时，下面一行不起作用；
    // 严格模式时，该行会报错
    foo.prop = 123; // TypeError: Can't add property prop, object is not extensible
}
// testObjFreeze();