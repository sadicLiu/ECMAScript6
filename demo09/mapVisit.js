"use strict";

/**
 * 遍历Map的操作
 * */
function testMapVisit() {
    let map = new Map();
    map.set('username', 'zhangsan');
    map.set('password', 123);

    // 取出所有的key
    for (let key of map.keys()) {
        console.log(key);
    }

    // 取出所有的value
    for (let value of map.values()) {
        console.log(value);
    }

    // 取出每一个键值对
    for (let item of map) {
        console.log(item);
    }

    // 分别取出键值
    for (let [key, value] of map.entries()) {
        console.log(key + ':' + value);
    }
}
// testMapVisit();