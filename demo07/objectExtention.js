'use strict';

/**对象的定义，现在可以直接用变量名定义*/
function testObjectDefine() {
    let foo = 'bar';
    let baz = {foo};
    console.log(baz);

    // 等同于
    let baz2 = {foo: foo};
    console.log(baz2);

    // 除了属性简写，方法也可以简写
    let o = {
        method() {
            return "Hello!";
        }
    };
    console.log(o);

    // 等同于
    let o2 = {
        method: function () {
            return "Hello!";
        }
    };
    console.log(o2);
}
// testObjectDefine();

/**
 * 相等运算符（==）和严格相等运算符（===）
 * 前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0
 * Object.is比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
 * 不同之处只有两个：一是+0不等于-0，二是NaN等于自身
 * */
function testEqual() {
    let r1 = Object.is('foo', 'foo'); // true
    let r2 = Object.is({}, {}); // false，地址不相同
    console.log(r1);
    console.log(r2);

    let r3 = (+0 === -0); //true
    let r4 = (NaN === NaN); // false
    console.log(r3);
    console.log(r4);

    let r5 = Object.is(+0, -0); // false
    let r6 = Object.is(NaN, NaN); // true
    console.log(r5);
    console.log(r6);
}
// testEqual();

/**
 * Object.assign方法用于对象的合并
 * 将源对象（source）的所有可枚举属性，复制到目标对象（target）
 * */
function testMergeObject() {
    let target = {a: 1};
    let source1 = {b: 2};
    let source2 = {c: 3};
    Object.assign(target, source1, source2);

    console.log(target);
}
// testMergeObject();

/**
 * 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为
 * Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
 * */
function testObjectDescriptor() {
    let obj = {foo: 123};
    let descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
    console.log(descriptor);
    /**
     {
     value: 123,
     writable: true,
     enumerable: true,
     configurable: true
     }
     * */
}
// testObjectDescriptor();

/**
 * Object.keys()，Object.values()，Object.entries()遍历对象
 * */
function testVisitObject() {
    let {keys, values, entries} = Object;
    let obj = {a: 1, b: 2, c: 3};

    for (let key of keys(obj)) {
        console.log(key); // 'a', 'b', 'c'
    }

    /**for (let value of values(obj)) {
        console.log(value); // 1, 2, 3
    }*/

    /**for (let [key, value] of entries(obj)) {
        console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
    }*/

}
testVisitObject();
