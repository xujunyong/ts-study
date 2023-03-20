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
var arr1 = [1, 2];
var arr2 = [3, 4];
var arr3 = ['a', 'b'];
console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);
var tuple1 = [1, '2ab'];
console.log('tuple1', tuple1);
console.log(tuple1[0]);
console.log(tuple1[1]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log('===========');
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
console.log(Color1.Red);
console.log(Color1.Green);
console.log(Color1.Blue);
console.log('===========');
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red);
console.log(Color2.Green);
console.log(Color2.Blue);
console.log('===========');
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 8] = "Red";
    Color3[Color3["Green"] = 3] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue";
})(Color3 || (Color3 = {}));
console.log(Color3.Red);
console.log(Color3.Green);
console.log(Color3.Blue);
console.log('===========');
console.log(Color3[8]);
console.log(Color3[3]);
console.log(Color3[5]);
var obj1 = { a: 1, b: 2 };
console.log(obj1);
var key1 = 'test';
var key2 = key1.length;
var key3 = key1.length;
console.log(key2);
console.log(key3);
//# sourceMappingURL=%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B.js.map