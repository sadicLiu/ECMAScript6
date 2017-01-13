'use strict';
/**
 * 初始化一个Set
 * 它类似于数组，但是成员的值都是唯一的，没有重复的值
 * */
function testInitSet() {
    let s = new Set();

    [2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));

    for (let i of s) {
        console.log(i);
    }
    // 2 3 5 4

    // 例一
    let set = new Set([1, 2, 3, 4, 4]);
    console.log('[...set]: ' + [...set]);

    // 例二
    let items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
    console.log('items.size: ' + items.size); // 5
}
// testInitSet();

/**
 * 去除数组中重复成员的方法
 * */
function testRemoveDuplicateElementFromArray() {
    let arr = [1, 1, 2, 2, 3, 3];
    let arr2 = [...new Set(arr)];
    console.log(arr2);
}
testRemoveDuplicateElementFromArray();