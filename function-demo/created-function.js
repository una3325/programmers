//1. 함수 선언문
function sum1(a, b) {
  return a + b
}

//2. 함수 표현식
const sum2 = function (a, b) {
  return a + b
}

//3. Function 생성자 함수
const sum3 = new Function('a', 'b', 'return a + b')

//4. 화살표 함수 표현식
const sum4 = (a, b) => a + b

console.log(sum1(2, 3))
console.log(sum2(2, 3))
console.log(sum3(2, 3))
console.log(sum4(2, 3))
