"use strict";

/**
 * 交换两个变量的值
 * */
function swap() {
    let x = 1, y = 2;
    [x, y] = [y, x];

    console.log(`x: ${x}   y: ${y}`);
}
swap();

/**
 * 从函数中返回多个值
 * */
function getValuesFromFunction() {
    // 返回一个数组
    function example() {
        return [1, 2, 3];
    }

    let [a, b, c] = example();
    console.log(`a: ${a}    b: ${b}    c:${c}`);

    // 返回一个对象
    function example2() {
        return {
            foo: 1,
            bar: 2
        };
    }

    let {foo, bar} = example2();
    console.log(`foo: ${foo}    bar: ${bar}`);
}
getValuesFromFunction();

/**
 * 提取JSON数据
 * */
function extractJSONData() {
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };
    let {id, status, data: number} = jsonData;
    console.log(id, status, number);
}
extractJSONData();

/**
 * for of 获取map中的键值
 * */
function mapVisit() {
    let map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }

    // 获取键名
    for (let [key] of map) {
        console.log(key);
    }

    // 获取键值
    for (let [, value] of map) {
        console.log(value);
    }
}
mapVisit();
