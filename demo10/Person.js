'use strict';
import {a} from './Bar';

class Person {
    // static country = 'China';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // getter
    get Name() {
        return this.name;
    }

    // setter
    set Name(name) {
        this.name = name;
    }

    get Age() {
        return this.age;
    }

    set Age(age) {
        this.age = age;
    }

    // 静态方法
    static getCountry() {
        return Person.country;
    }

    // 普通方法
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// 静态属性，只能这么定义
Person.country = 'China';

function main() {
    let p = new Person('zhangsan', 11);

    // 调用静态方法
    console.log(Person.getCountry());

    // getter的用法
    console.log(p.Name);
    console.log(p.Age);
    p.sayHello();

    console.log('------------------');

    // setter的用法
    p.Name = 'smith';
    p.sayHello();
}
main();

