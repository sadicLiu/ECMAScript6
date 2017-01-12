'use strict';

/**
 * Symbol的使用
 * */
function testSymbol() {
    let s1 = Symbol('foo');
    let s2 = Symbol('bar');

    console.log(s1); // Symbol(foo)
    console.log(s2); // Symbol(bar)

    console.log(s1.toString()); // "Symbol(foo)"
    console.log(s2.toString()); // "Symbol(bar)"
}
// testSymbol();

/**
 * Symbol用于对象的属性名
 * */
function testObjectProperty() {
    let mySymbol = Symbol();

    // 第一种写法
    let a = {};
    a[mySymbol] = 'Hello!';
    console.log(a[mySymbol]);

    // 第二种写法
    let a2 = {
        [mySymbol]: 'Hello!'
    };
    console.log(a2[mySymbol]);

    // 第三种写法
    let a3 = {};
    Object.defineProperty(a3, mySymbol, {value: 'Hello!'});
    console.log(a3[mySymbol]);
}
// testObjectProperty();

/**
 * Symbol用于对象的方法名
 * */
function testObjectFunction() {
    let s = Symbol();
    let obj = {
        [s]: function (arg) {
            console.log(arg);
        }
    };

    obj[s](123);
}
// testObjectFunction();

/**
 * Symbol适合用在switch的条件中，消除魔术字符串
 * */
function testSymbolInSwitch() {
    const shapeType = {
        circle: Symbol('Circle'),
        triangle: Symbol('Triangle')
    };

    function getShape(shape) {
        switch (shape) {
            case shapeType.circle:
                console.log(shapeType.circle.toString());
                break;
            case shapeType.triangle:
                console.log(shapeType.triangle.toString());
                break;
        }
    }

    getShape(shapeType.circle);
}
testSymbolInSwitch();