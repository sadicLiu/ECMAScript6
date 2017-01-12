"use strict";

/*
 * 下面是一个类似数组的对象，Array.from将它转为真正的数组
 * */
function testArrayFrom() {
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
    console.log(arr1);

    // ES6的写法
    let arr2 = Array.from(arrayLike);
    console.log(arr2);
}
// testArrayFrom();

/*
 * 只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组
 * */
function testArrayFrom2() {
    let arr1 = Array.from('hello');
    console.log(arr1);

    let namesSet = new Set(['a', 'b']);
    console.log(Array.from(namesSet));
}
// testArrayFrom2();

/*
 * Array.from还可以接受第二个参数，作用类似于数组的map方法
 * 用来对每个元素进行处理，将处理后的值放入返回的数组
 * */
function testArrayFrom3() {
    let arrayLike = {
        '0': 0,
        '1': 1,
        '2': 2,
        length: 3
    };

    let a1 = Array.from(arrayLike, x => x * x);
    console.log(a1);

    // 等同于
    let a2 = Array.from(arrayLike).map(x => x * x);
    console.log(a2);

    let a3 = Array.from([1, 2, 3], (x) => x * x);
    console.log(a3);
}
// testArrayFrom3();

/*
 * 将数组中布尔值为false的成员转为0
 * */
function testConvertArray() {
    let arr = Array.from([1, , 2, , 3], (n) => n || 0);
    console.log(arr);
}
// testConvertArray();

/*
 * 返回各种数据的类型
 * */
function testGetTypes() {
    function typesOf() {
        return Array.from(arguments, value => Object.prototype.toString.call(value))
    }

    console.log(typesOf({}, null, [], NaN));
}
// testGetTypes();

/*
 * 利用Array.from方法还可以初始化一个数组
 * */
function testInitArray() {
    let arr = Array.from({length: 2}, () => 'jack');
    console.log(arr);
}
// testInitArray();

/*
 * Array.of方法用于将一组值，转换为数组
 * */
function testArrayOf() {
    let arr0 = Array.of();
    let arr1 = Array.of(undefined);
    let arr2 = Array.of(1);
    let arr3 = Array.of(1, 2);

    console.log(arr0);
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
}
// testArrayOf();

/*
 * 数组实例的find方法，用于找出第一个符合条件的数组成员
 * */
function testArrayFind() {
    let target = [1, 4, -5, 10].find((n) => n < 0);
    // 上面代码找出数组中第一个小于0的成员
    console.log(target);

    let target2 = [1, 5, 10, 15].find(function (value, index, arr) {
        return value > 9;
    });
    // 上面代码中，find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组
    console.log(target2);
}
// testArrayFind();

/*
 * findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
 * */
function testArrayFindIndex() {
    let target = [1, 5, 10, 15].findIndex(function (value, index, arr) {
        return value > 9;
    });

    console.log(target);
}
// testArrayFindIndex();


/*
 * fill方法使用给定值，填充一个数组
 * */
function testArrayFill() {
    let arr = new Array(3).fill(7);
    console.log(arr);
}
// testArrayFill();

/*
 * keys()和values()——用于遍历数组
 * */
function testKeysAndValues() {
    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }

    /*for (let elem of ['a', 'b'].values()) {
     console.log(elem);
     }*/

    for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem);
    }
}
// testKeysAndValues();

/*
 * entries()是对键值对的遍历
 * */
function testEntries() {
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value);
    console.log(entries.next().value);
    console.log(entries.next().value);
}
// testEntries();

/*
 * Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值
 * */
function testIncludes() {
    console.log([1, 2, 3].includes(2));
    console.log([1, 2, 3].includes(4));
    console.log([1, 2, NaN].includes(NaN));
}
// testIncludes();

function testEmptyInArray() {
    console.log(Array(3));

    // ES6明确将空位转为undefined
    console.log(Array.from(['a', , 'b']));
}
testEmptyInArray();







