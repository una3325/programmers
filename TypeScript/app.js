var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Typescript';
var completed = false;
//열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 99110;
        this.stdName = 'park';
        this.age = 25;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('엘리스');
// function getInfo(id: number): Student
// {
//   return {
//     stdId: id,
//     stdName: 'lee',
//     age: 20,
//     gender: 'female',
//     course: 'javascript',
//     completed: true,
//   };
// }
var std = {
    stdId: 99110,
    stdName: 'lee',
    age: 25,
    gender: 'male',
    course: 'node.js',
    completed: true,
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std)
// console.log(getInfo(5678));
//함수의 데이터 타입 명시 (매개변수, 리턴타입)
// function Plus (a : number, b? : number): void{
//   return a + b;
// }
// type strOrNum = number | string ;
// let item : number;
// let numStr : strOrNum = 100;
// function convertToString(val :strOrNum):string{
//   if(typeof val === 'string'){
//     item = 0;
//   } else {
//     item = val;
//   }
//   return String(val);
// }
// function convertToNumber(val : strOrNum):number{
//   return Number(val);
// }
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
//기본 배열 타입 선언
//new연산자 -> 힙메모리 할당
// let numbers = new Array([1,2,3,4,5]);
// let numbers: number[] = [1, 2, 3, 4, 5];
// let fruits: string[] = ['apple', 'banana', 'orange'];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
//배열의 유니온 타입
// let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];
// for(let i=0; i<mixedArray.length; i++){
//   console.log(mixedArray[i]);
// }
// let infer = [1,2,3]; //타입 추론
// for(let i=0; i < infer.length; i++){
//   console.log(infer[i]);
// }
//읽기 전용 배열
// let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
//튜플 : 타입의 순서가 정해져 있다.
// let greeting : [number, string, boolean] = [1, 'hello', true];
// for(let i=0; i<greeting.length; i++){
//   console.log(greeting[i]);
// }
//Spread 연산자 - 장벽을 허물허준다. [] 벗겨줌
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
