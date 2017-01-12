/**
 * let是局部变量，只在当前代码块有效
 * */
function testLetAndVar() {
    {
        let a = 10;
        var b = 1;
    }
    console.log(a); // ReferenceError: a is not defined
    console.log(b);
}
// testLetAndVar();

/**
 * 在for循环中使用var的一个demo
 * */
function testVarInFor() {
    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }

    console.log('testVarInFor:');
    a[6]();
}
// testVarInFor();

/**
 * 在for循环中使用let的一个demo
 * */
function testLetInFor() {
    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    console.log('testLetInFor:');
    a[6]();
}
// testLetInFor();


/**
 * 下面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，
 * 导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
 * */
function testLetScope() {
    var tmp = 123;

    if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
    }
}
// testLetScope();

/**
 * ES5只有全局作用域和函数作用域，没有块级作用域，内层变量可能会覆盖外层变量。
 * 同时，这个demo说明函数中还可以定义函数
 * */
function testVarOverride() {
    var tmp = new Date();

    function f() {
        console.log(tmp);
        if (false) {
            var tmp = "hello world"; // 变量提升，覆盖外层变量
        }
    }

    f(); // undefined
}
// testVarOverride();

/***
 * ES6的块级作用域解决了上面问题
 * */
function testLetBlock() {
    function f1() {
        var m = 5;
        let n = 5;
        if (true) {
            var m = 10;
            let n = 10; // 这句只在if块中有用
        }
        console.log(m); // 10
        console.log(n); // 5
    }

    f1();
}
// testLetBlock();






















