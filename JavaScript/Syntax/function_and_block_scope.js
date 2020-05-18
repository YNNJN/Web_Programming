// Function Scope - var를 사용할 때

function number(num) {
    var acc = num + 1
    return acc
}

console.log(acc) // error

// Block Scope - var를 사용할 때

if (true) {
    var name = '용용 영영'
}

console.log(name) // 용용 영영



// Block Scope - const, let을 사용할 때

if (true) {
    let age = '100'
}

console.log(age) // error

function numberTwo(num) {
    let accTwo = num + 1
    return accTwo
}

console.log(accTwo) // error