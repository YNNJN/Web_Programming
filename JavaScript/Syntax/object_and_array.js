/*
JS에서 Object와 array가 타입과 연산자 파트에서 언급된
reference에 해당하며, 객체라고 표현한다
객체는 속성을 담고 있는 가바으로 볼 수 있다
각 속성들은 변수처럼 메모리에 할당되어 있으며,
객체는 할당되어있는 메모리의 주소값을 바라보고 있다
*/

// 1. Array
const numbers = [1, 2, 3, 4]
numbers[0] // 1
numbers[-1] // undefined => 정확한 양의 정수만 사용 가능
numbers.length // 4

// reverse - 원본 배열의 요소들의 순서를 반대로 정렬한다
numbers.reverse() // [4, 3, 2, 1]
numbers.reverse() // [1, 2, 3, 4]

const strings = ['d', 'c', 'b', 'a'] 
strings.reverse()

// push & pop - 요소를 배열의 가장 뒤에 추가하거나 제거한다
numbers.push('a') // 5 // 새로운 배열의 길이
numbers.pop() // 'a'

// unshift & shift - 요소를 배열의 가장 앞에 추가하거나 제거한다
numbers.unshift('a') // 5 // 새로운 배열의 길이
numbers.shift() //'a' // 가장 첫번째 요소 제거

// include - 배열의 특정 요소가 있는지 여부를 boolean 값으로 반환한다
numbers.includes(1) // true
numbers.includes(0) // false

// indexOf
// 배열에 특정 요소가 있는지 여부를 확인 후, 가장 첫번째로 찾은 아이템의 index 값을 반환한다
// 요소가 없으면 -1을 반환한다
numbers.push('a', 'a')
numbers.indexOf('a') // 4
numbers.indexOf('b') // -1

typeof numbers // object


// 2. Object
/* object의 key는 문자열 타입이고, value는 모든 타입이 될 수 있다
*/
const me = {
    name: '홍길동', // key가 한 단어일 때
    'phone number': '01012345678', //key가 여러 단어일 때
    samsungProducts: {
        galWatch: '2019GalacyWatch',
        galPhone: 'galaxy s9'
        galBuds: 'Buds v1',
    },
}

typeof me // object

me.name //홍길동 (dot notation)
me['phone number'] // "01012345678"
me.samsungProducts
me.samsungProducts.galBuds // Buds v1

// Objects.keys()
const fruits = {a: 'apple', b: 'banana'}
Object.keys(fruits) // ["a", "b"]

// Objects.values()
Object.values(fruits) // ["apple", "banana"]

// object를 배열로 바꾸고 싶을 때 사용

// Object.entries()
Object.entries(fruits) // [["a", "apple"], ["b", "banana"]]

// Object Literal (ES6+)

const books = ['Learning JS', 'Eloquent JS'] // https://eloquentjavascript.net/
const comics = {
    DC: ['Aquaman', 'SHAZAM'],
    Marvel: ['Captain Marvel', 'Avengers']
}

const magazines = null

const bookStore = {
    books, // == books: books // key와 value가 같으면 생략 가능
    comics, // == comics: comics
    magazines, // == megazines: megazines
}

bookStore
typeof bookStore // object
bookStore.books[0] // "Learning JS"

// JSON (Javascript Object Notation - JS 객체 표기법)
/* key-value 형태로 js Object와 유사한 모습으로 데이터를 표기하는 표기법이다
모습만 비슷할 뿐이며, 실제로는 문자열 타입이다
Object처럼 사용하기 위해서는 parsing(구문 분석 작업이 필요하다
JSON 형식의 파일을 다루기 위해서는 JS에서 JSON 내장 객체를 제공한다
*/

// Object -> JSON
const cafe = {
    coffee: 'Latte',
    iceCream: 'mint choco',
}

const jsonData = JSON.stringify(cafe)
console.log(typeof jsonData) // string
jsonData // "{"coffee": "Latte", "icecream": "mint choco"}"

// JSON -> Object
const parsedData = JSON.parse(jsonData)
console.log(parsedData) // {coffee: "Latte", iceCream: "mint choco"}
console.log(typeof parsedData) // "object"

// primitive type vs reference type
const myNumber = 5
myNumber = 10 // error

const myNumbers = [1, 2, 3, 4, 5]
myNumbers[0] = 100
myNumbers // [100, 2, 3, 4, 5]
// const로 선언 시 원시 타입의 값은 바꿀 수 없지만 레퍼런스 타입은
// 즉 가방에 들어있는 것은 안의 값을 얼마든지 바꿔도 된다

const myObject = {
    a: 'a',
    b: 'b',
    c: 'c',
}

myObject.a = 'hello'
console.log(myObject) // {a: "hello", b: "b", c: "c"}