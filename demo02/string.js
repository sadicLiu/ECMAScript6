"use strict";

function testAsignValue() {
    const [a, b, c, d, e] = 'hello';
    console.log(`a: ${a} b: ${b} c: ${c} d: ${d} e: ${e}`);

    let {length : len} = 'hello';
    console.log(`len: ${len}`);
    
}
testAsignValue();