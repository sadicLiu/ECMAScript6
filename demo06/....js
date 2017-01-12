'use strict';
/*扩展运算符的一些应用*/

console.log(...[1, 2, 3]);
console.log(Math.max(...[1, 2, 3]));

/*合并数组*/
function testConcatArray() {
    let arr1 = ['a', 'b'];
    let arr2 = ['c'];
    let arr3 = ['d', 'e'];

    // ES5的合并数组
    let arr = arr1.concat(arr2, arr3);
    console.log(arr);

    // ES6的合并数组
    console.log([...arr1, ...arr2, ...arr3]);
}
// testConcatArray();

/*获取字符串的长度*/
function getStringLength() {
    let string = 'hello';
    console.log([...string].length);
}
getStringLength();