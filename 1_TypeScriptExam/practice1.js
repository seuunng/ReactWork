// TypeScript 기본 자료형 
//number, string, boolean
//let num:Number  = "string"; //타입에러
var num1 = 10;
num1 = 3.14; //정수 실수 모두 가능
//num1 = true; //타입에러
//const str:string = 10; //타입에러
var str = "10";
var boolean = true;
//array, object, enum
var arr = [1, 2, 3, "4"];
//const arr_num : number[] = [1,2,3,"4"]; //타입에러
var arr_bool = [true, true, false];
//각 객체 정보에 타입 지정하기
var user = {
    name: "홍길동",
    age: 20,
    married: true,
};
/*
const user1 : {name:string, age:number, married: boolean} = {
    name: "홍길동",
    age : "20", //타입에러
    married: yes, //타입에러
}
*/
//enum: 커스텀 자료형 지정하기
var GRADE;
(function (GRADE) {
    GRADE[GRADE["A"] = 0] = "A";
    GRADE[GRADE["B"] = 1] = "B";
    GRADE[GRADE["C"] = 2] = "C";
    GRADE[GRADE["D"] = 3] = "D";
    GRADE[GRADE["E"] = 4] = "E";
})(GRADE || (GRADE = {}));
var myGrade = GRADE.A;
//const myGrade1:GRADE = A; //타입에러
//const myGrade2:GRADE = A학점; //타입에러
//any, unknown
// any=var:  타입을 구분하지 않음
var anyValue = 1;
anyValue = "10";
anyValue = true;
// unknown도 타입을 구분하지 않음
var unknownValue = 1;
unknownValue = "10";
unknownValue = true;
//객체로 쓰는 것도 가능
// anyValue은 없는 함수를 붙여도 에러가 안남
anyValue.func();
// unknownValue은 없는 함수를 붙이면 에러가 남
//unknownValue.func();
//void, never
function hello1() {
    console.log("Hello");
    //return "hello" //리턴있으면 에러
}
function hello2() {
    console.log("Hello");
    return "hello"; //리턴없으면 에러
}
function hello3() {
    console.log("Hello");
    //return "hello"
    //while(true){} //무한반복돌려서 돌아가지 않게 하기
    throw 'Error'; //고의로 에러를 던져서 돌아가지 않게 하기   
}
//null, undefined
var nullValue = null;
var nullValue1 = undefined;
var nullValue2 = null;
// tsconfig.json에서 "strictNullChecks": true로 설정하면 에러
// false 로 설정하면 엄격하게 걸러지지 않는다.
