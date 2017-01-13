'use strict';

class Bar {
    // 一个类必须有constructor方法
    // 如果没有显式定义，一个空的constructor方法会被默认添加
    doStuff() {
        console.log('stuff');
    }

    // 私有方法
    _close() {
        console.log('the bar is closed');
    }
}

function main() {
    let bar = new Bar();
    bar.doStuff();
}
main();
