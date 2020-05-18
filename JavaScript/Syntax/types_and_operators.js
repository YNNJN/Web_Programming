// 0. warmup = keyword
// function scope
var a = 10
let b = 10 // 재할당 가능

// block scope
const c = 10 // 재할당 불가능 !== 값이 바뀌지 않는다

// 1. primitive type (원시타입)
// Number
const a = 13
const b = -5
const c = 3.14 // float
const d = 2.99e8 // 2.99 * 10^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number

console.log(typeof(g))

// String
const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"

const firstName = 'Tony'
const lastName = 'Stark'
const fullName = firstName + lastName
console.log(fullName)

const word = "안녕 \n하세요"

// String - Template Literal
/* ES6+ 부터 지원한다.
Backtic(`)을 이용해서 여러 줄에 걸쳐 문자를 정의할 수도 있고
JS의 변수를 문자열 안에 바로 연결할 수 있는 이점이 있다
*/

const ssafy = '5반'
const word2 = `${ssafy} 안녕들
하세요`

// Boolean
true
false

// Empty value(null, undefined)
/* 값이 존재하지 않음을 표현하는 값으로 null과 undefined가 있다
동일한 역할을 하는 두 개의 키워드가 존재하는 이유는 단순한 설계 실수다
undefined의 타입이 undefined인 것도 실수다
*/
let firstName
console.log(firstName) //undefined

let lastName = null
console.log(lastName) //null

typeof null // object
typeof undefined // undefined


// 2. 연산자
// 할당연산자
/* 연산과 동시에 변수에 값을 할당함 */
let number = 0

number += 10
console.log(number)

number -= 10
console.log(number)

number *= 10
console.log(number)

number++
console.log(number) // number에 1을 더한다 (증감식)

number--
console.log(number) // number에 1을 뺀다 (증감식)

// 비교연산자
3 > 2 // true
3 < 2 // false

'A' < 'B' // true
'z' < 'a' // false
'a'.codePointAt(0) //유니코드 상의 숫자 확인
'z'.codePointAt(0)

// 동등연산자(==)
/* 메모리의 같은 객체를 가리키거나 같은 값을 갖도록
형(type)을 변환할 수 있다면 서로 같다고 판단한다
*/
const a = 1
const b = '1'

console.log(8 * null) // 0
console.log('5' - 1) // 4
console.log('5' * 1) // 51
console.log('five' * 2) // NaN

// 일치연산자(===)
/* 값과 타입을 모두 비교 */
const a = 1
const b = '1'

// 논리연산자
// and 연산자
true && false // false
true && true // true

1 && 0 // 0
0 && 1 // 0
4 && 7 // 7

// or 연산자
false || true // true
false || false // false

1 || 0 // 1
0 || 1 // 1
4 || 7 // 4

// not 연산자
!true // false

// 삼항 연산자(Ternary Operator)
true ? 1 : 2 // 1 // 참이면 1, 아니면 2
false ? 1 : 2 // 2

const result = Math.PI > 4 ? 'Yep' : 'Nope' // 내장 모듈을 바로 사용 가능
console.log(result) // Nope

let age = 21
let message = age < 7 ? '어린이입니다' : // if
    age < 20 ? '청소년입니다' : // else if
    age < 100 ? '어른입니다' : // else if
    '사랍입니다' // else

