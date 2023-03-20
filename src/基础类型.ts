/* 布尔类型 */
const isLoading: boolean = false

/* 数字类型 */
const num1:number = 1
const num2:number = 2
function add (a:number, b:number) {
    return a + b
}
console.log(add(num1, num2))

/* 字符串类型 */
const str:string = '123123123'

/* 空值 */
function test ():void {
    console.log(123)
    // return 1
}

const void1:void = undefined
// const void2:void = null //error
// const void3:void = 1 //error

/* Null 和 Undefined 类型 */
const null1:null = null
const undefined1:undefined = undefined
// const null2:null = 1 //error
// const undefined2:undefined = 1 //error

/* Symbol 类型 */
const sym1:symbol = Symbol(1)
const sym2:symbol = Symbol(1)
sym1 === sym2 //    false

/* BigInt */
const max = Number.MAX_SAFE_INTEGER
const max1 = BigInt(max) + BigInt(1)
const max2 = BigInt(max) + BigInt(2)
console.log(max)
console.log(max1)
console.log(max2)

/* 数组 */
let arr1:Array<number> = [1, 2]
let arr2:number[] = [3, 4]
let arr3:string[] = ['a', 'b']
console.log('arr1', arr1)
console.log('arr2', arr2)
console.log('arr3', arr3)

/* 元组 */
let tuple1:[number, string] = [1, '2ab']
console.log('tuple1', tuple1)
console.log(tuple1[0])
console.log(tuple1[1])

/* 枚举类型 */
/* 默认情况下，从0开始为元素编号，后续依次累加 */
enum Color {Red, Green, Blue}
let color:Color = Color.Green
console.log('===========')
/* 可以手动指定成员的数值，后续未手动指定数值的成员依次累加 */
enum Color1 {Red = 1, Green, Blue}
console.log(Color1.Red)
console.log(Color1.Green)
console.log(Color1.Blue)
console.log('===========')
enum Color2 {Red, Green = 3, Blue}
console.log(Color2.Red)
console.log(Color2.Green)
console.log(Color2.Blue)
console.log('===========')
/* 可以手动指定所有成员的数值 */
enum Color3 {Red = 8, Green = 3, Blue = 5}
console.log(Color3.Red)
console.log(Color3.Green)
console.log(Color3.Blue)
console.log('===========')
/* 枚举类型可通过枚举的值获取到他的名字 */
console.log(Color3[8])
console.log(Color3[3])
console.log(Color3[5])

/* Object */
let obj1: object = {a:1, b:2}
console.log(obj1)

/* 类型断言 */
let key1:string = 'test'
let key2:number = (<string>key1).length
let key3:number = (key1 as string).length
console.log(key2)
console.log(key3);

