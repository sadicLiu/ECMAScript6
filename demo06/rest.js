'use strict';

function add(...values) {
    let sum = 0;
    for (let val of values) {
        sum += val;
    }

    return sum;
}

var sum = add(2, 5, 3); // 10
console.log(sum);


