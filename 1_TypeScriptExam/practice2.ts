// FUNCTION

//1. Funtion Statement
function add(a:number, b:number) : number{
    return a+b;
}

 const result: number = add(1,3);

 //2. Function Expression(arrow function)
 const add1 = (a:number, b:number) : number=>a+b
 const add2 = (a:number, b:number) => number = (a+b) => a+b;
 const add3 = (a:number, b:number) => number =
    function (a:number, b:number):number {return a+b} //add2랑 같음

// UNION&Intersection
function printValue(value:number):void{
    console.log(value);
}
printValue(1);
//printValue("10"); //타입에러
//printValue(["1", "2"]); //타입에러

// UNION: 타입스트립이 불편한 케이스에서 좀 유연하게 설계할수 있게 해줌
//  OR(|)  연산자
function printValue1(value:number|string|string[]):void{
    console.log(value);
}
printValue1(1);
printValue1("10"); //타입에러
printValue1(["1", "2"]); //타입에러

//Intersection
const inter : {name:string, age:number}
    &{height:number, weight:number}={
    age:20,
    height:170,
    weight:70,
    name:"John",
} 

//Type Alias & Interface

//1. Type Alias: 자료형에 별명을 준다.
type NUM = number;
let n1:number=1;
let n2:NUM=2;

type unionType = number|string|string[];
function printValue2(value:unionType):void{
    console.log(value);
}
printValue2(1);
printValue2("10"); //타입에러
printValue2(["1", "2"]); //타입에러

type info1 = {name:string, age:number};
type info2 = {height:number, weight:number};
const inter1 : info1&info2={
    age:20,
    height:170,
    weight:70,
    name:"John",
}

//2. Interface
interface IUser{
    age:number,
    height:number,
    weight:number,
    name: string,
}
const user3 : IUser ={
    age: 20,
    height: 185,
    weight: 70,
    name: "JOHN",
}