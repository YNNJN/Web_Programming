// 월요일 ~ 일요일을 순서대로 1~7까지의 숫자에 대응시켜 각 숫자에 해당하는 요일을 출력
// if, else if, else

let day = 7
if (day === 1) {
    console.log('월')
} else if (day === 2) {
    console.log('화')
} else if (day === 3) {
    console.log('수')
} else if (day === 4) {
    console.log('목')
} else if (day === 5) {
    console.log('금')
} else if (day === 6) {
    console.log('토')
} else if (day === 7) {
    console.log('일')
}


// switch

let day = 7
switch(day) {
    case 1 : {
        console.log('월')
        break
    }
    case 2 : {
        console.log('화')
        break
    }
    case 3 : {
        console.log('수')
        break
    }
    case 4 : {
        console.log('목')
        break
    }
    case 5 : {
        console.log('금')
        break
    }
    case 6 : {
        console.log('토')
        break
    }
    case 7 : {
        console.log('일')
        break
    }
}


// +
const days = ['월', '화', '수', '목', '금', '토', '일']

for (const idx in days) {
    console.log(Number(idx) + 1) // 0,1
    console.log(days[idx])
}


// 0에서 5까지의 숫자가 출력되도록 반복문을 활용해 작성
// while

let i = 0
while (i < 6) {
    console.log(i)
    i++
}

// for

for (let i = 0; i < 6; i++) {
    console.log(i)
}

// numbers 배열 안에 있는 요소들을 차례대로 모두 출력
// for ... of

const numbers = [0, 1, 2, 3, 4]

for (const number of numbers) {
    console.log(number)
}

// fruits라는 변수에 담긴 object에서 key와 value를 한 줄에 하나씩 출력
// for ... in

const fruits = {
    'apple': 2,
    'banana': 10,
    'tomato': 10,
    'watermelon': 2,
}

for (const key in fruits) {
    console.log(key)
    console.log(fruits[key])
}

// for문과 continue를 활용하여 0부터 9까지의 숫자 중 3을 제외한 모든 숫자를 출력
// continue

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}


('b' + 'a' + + 'a' + 'a').toLowerCase() // "banana"

