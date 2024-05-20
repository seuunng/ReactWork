// FUNCTION
//1. Funtion Statement
function add(a, b) {
    return a + b;
}
var result = add(1, 3);
//2. Function Expression(arrow function)
var add1 = function (a, b) { return a + b; };
var add2 = function (a, b) { return number = (a + b); };
a + b;
var add3 = function (a, b) { return number =
    function (a, b) { return a + b; }; }; //add2랑 같음
// UNION&Intersection
function printValue(value) {
    console.log(value);
}
printValue(1);
//printValue("10"); //타입에러
//printValue(["1", "2"]); //타입에러
// UNION: 타입스트립이 불편한 케이스에서 좀 유연하게 설계할수 있게 해줌
//  OR(|)  연산자
function printValue1(value) {
    console.log(value);
}
printValue1(1);
printValue1("10"); //타입에러
printValue1(["1", "2"]); //타입에러
//Intersection
var inter = {
    age: 20,
    height: 170,
    weight: 70,
    name: "John",
};
var n1 = 1;
var n2 = 2;
function printValue2(value) {
    console.log(value);
}
printValue2(1);
printValue2("10"); //타입에러
printValue2(["1", "2"]); //타입에러
var inter1 = {
    age: 20,
    height: 170,
    weight: 70,
    name: "John",
};
var user3 = {
    age: 20,
    height: 185,
    weight: 70,
    name: "JOHN",
};
