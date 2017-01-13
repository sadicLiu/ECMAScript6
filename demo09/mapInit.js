'use strict';

/**
* 初始化一个Map并进行常用操作
* */
function testMapInit() {
    let map = new Map();
    map.set('username', 'zhangsan');
    map.set('password', '123');

    let size = map.size;
    console.log(`size: ${size}`);

    console.log(map.get('username'));
    console.log(map.get('password'));

    console.log(map.has('username'));
    map.delete('username');
    console.log(map.has('username'));
}
testMapInit();