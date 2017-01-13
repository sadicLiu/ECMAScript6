"use strict";

/**
 * 模板字符串
 * */
function testTemplateString() {
    // 多行字符
    console.log(`string text line 1
string text line 2`);

    // 字符串中嵌入变量
    let name = "Bob", time = "today";
    console.log(`Hello ${name}, how are you ${time}?`);

    // 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义
    let greeting = `\`Yo\` World!`;
    console.log(greeting);
}
// testTemplateString();

/**
 * 在模板字符串中调用函数
 * */
function testFunctionInTemplateString() {
    function fn() {
        return "Hello World";
    }

    console.log(`foo ${fn()} bar`);
}
// testFunctionInTemplateString();

/**
 * ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。
 * */
function testStringIterator() {
    for (let codePoint of 'hi') {
        console.log(codePoint)
    }
}
// testStringIterator();

/**
 * 新的api提供的函数includes(), startsWith(), endsWith()
 * */
function testNewStringAPI() {
    let s = 'Hello world!';

    let [r1, r2, r3] = [
        s.startsWith('Hello'),
        s.endsWith('!'),
        s.includes('o')];

    console.log(`r1: ${r1}   r2: ${r2}   r3: ${r3}`);
}
// testNewStringAPI();

/**
 * repeat()函数
 * */
function testRepeat() {
    console.log('x'.repeat(3));
    console.log('hello'.repeat(2));
    console.log('na'.repeat(0));
}
// testRepeat();









