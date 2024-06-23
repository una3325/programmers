//변수의 데이터 타입 명시
let stdId: number = 1111;
let stdName: string = 'lee';
let age: number = 20;
let gender: string = 'male';
let course: string = 'Typescript';
let completed: boolean = false;

//열거형 : 사용자 정의 타입
enum GenderType {
  Male = 'male',
  Female = 'female',
  GenderNeutral = 'neutral',
}

interface Student {
  stdId?: number;
  stdName?: string;
  age?: number;
  gender?: 'male' | 'female';
  course?: string;
  completed?: boolean;
  //setNae(name : string) : void;
  setName: (name: string) => void;
  // getName: () => string;
}

class MyStudent implements Student {
  stdId = 99110;
  stdName = 'park';
  age = 25;
  gender: 'male' | 'female' = 'male';
  course = 'node.js';
  completed = true;

  setName(name: string): void {
    this.stdName = name;
    console.log('이름 설정 : ' + this.stdName);
  }
}

const myInstance = new MyStudent();
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

let std = {
  stdId: 99110,
  stdName: 'lee',
  age: 25,
  gender: 'male',
  course: 'node.js',
  completed: true,
};

function setInfo(student: Student): void {
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

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let combineArray = [...firstArray, ...secondArray];

for (let i = 0; i < combineArray.length; i++) {
  console.log(combineArray[i]);
}
