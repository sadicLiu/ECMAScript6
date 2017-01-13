'use strict';

/**
 * Set结构的实例有四个遍历方法
 * keys()：返回键名的遍历器
 * values()：返回键值的遍历器
 * entries()：返回键值对的遍历器
 * forEach()：使用回调函数遍历每个成员
 *
 * 不过还是for...of...最实用
 * */
function testVisitSet() {
    let set = new Set(['red', 'green', 'blue']);

    for (let x of set) {
        console.log(x);
    }
}
// testVisitSet();

/**
 * forEach方法遍历Set
 * */
function testForEach() {
    let set = new Set([1, 2, 3]);
    set.forEach((value, key) => console.log(value * 2));
}
// testForEach();

/**
 * 使用Set可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）
 * */
function testOperate() {
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

    // 并集
    let union = new Set([...a, ...b]);
    console.log(`union: ${Array.from(union)}`);

    // 交集
    let intersect = new Set([...a].filter(x => b.has(x)));
    console.log(`intersect: ${Array.from(intersect)}`);

    // 差集
    let difference = new Set([...a].filter(x => !b.has(x)));
    console.log(`difference: ${Array.from(difference)}`);
}
// testOperate();