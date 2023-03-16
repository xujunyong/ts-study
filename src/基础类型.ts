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