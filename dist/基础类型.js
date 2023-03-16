"use strict";
var isLoading = false;
var num1 = 1;
var num2 = 2;
function add(a, b) {
    return a + b;
}
console.log(add(num1, num2));
var str = '123123123';
function test() {
    console.log(123);
}
var void1 = undefined;
var null1 = null;
var undefined1 = undefined;
var sym1 = Symbol(1);
var sym2 = Symbol(1);
sym1 === sym2;
var max = Number.MAX_SAFE_INTEGER;
var max1 = BigInt(max) + BigInt(1);
var max2 = BigInt(max) + BigInt(2);
console.log(max);
console.log(max1);
console.log(max2);
//# sourceMappingURL=%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B.js.map