//0.
console.log(this) // window

// 1. "this" with function
const data = {
    url: 'http://www.naber.com',
    showUrl: function() {return this},
}

console.log(data.showUrl()) // data 객체 자기 자신이 반환됨


// 2. "this" with arrow function
const dataTwo = {
    url: 'http://www.naber.com',
    showUrl: () => {return this},
}

console.log(dataTwo.showUrl()) // window에서 this와 같은 결과를 출력함

// 객체 메서드를 만들 때는 arrow function 사용 x
