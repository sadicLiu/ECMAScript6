'use strict';

/**
 * add(value)：添加某个值，返回Set结构本身。
 * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * clear()：清除所有成员，没有返回值。
 * */
function testSetAPI() {
    let set = new Set();
    set.add(1).add(2).add(2);

    let size = set.size;
    console.log(`size: ${size}`);
    console.log('---------------------------');

    console.log(set.has(1));
    console.log(set.has(2));
    console.log(set.has(3));
    console.log('---------------------------');

    set.delete(2);
    console.log(set.has(2));
    console.log('---------------------------');

    set.clear();
    console.log(set.size);
}
// testSetAPI();

/**
 * Array.from方法可以将Set结构转为数组
 * */
function testConvertSetToArray() {
    let items = new Set([1, 2, 3, 4, 5]);
    let array = Array.from(items);
    console.log(`array: ${array}`);
}
// testConvertSetToArray();

/**
 * 去除数组重复元素的方法
 * */
function testDeDupe() {
    let array = [1, 2, 3, 4, 1, 2];

    // 方法一
    let result = [...new Set(array)];
    console.log(`result: ${result}`);

    // 方法二
    let result2 = Array.from(new Set(array));
    console.log(`result2: ${result2}`);
}
testDeDupe();