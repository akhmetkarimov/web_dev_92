// if - если, else - иначе 

// if (condition) {
//     body
// }

//   true 1 - false 0

if (10 < 2) {
    document.write('<p>First Condition work</p>')
} else {
    document.write('<p>First Condition work Else</p><hr>')
}

// >, <, >=, <=, !=, ==, ===, !==

if (20 == 20) {
    document.write('<p> If == (20 == 20)</p>')
}

if (20 == "20") {
    document.write('<p> If == (20 == "20")</p>')
}

if (10 === "10") {
    document.write('<p> If === (10 === "10")</p>')
} else {
    document.write('<p> Else === (10 === "10")</p>')
}

if (10 === 10) {
    document.write('<p> If === (10 === 10)</p>')
}

if (10 != 20) {
    document.write('<p> If != (10 != 20)</p>')
}

if (10 != "20") {
    document.write('<p> If != (10 != "20")</p>')
}


if (20 !== 20) {
    document.write('<p> If != (20 !== 20)</p>')
} else {
    document.write('<p> Else != (20 !== 20)</p>')
}

if (20 !== "20") {
    document.write('<p> If != (20 !== "20")</p><hr>')
}





let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)

document.write(`<h3>Random Number 1: ${num1}</h3>`)
document.write(`<h3>Random Number 2: ${num2}</h3>`)

if (num1 > num2) {
    document.write(`<h3>Max Number 1: ${num1}</h3>`)
} else {
    document.write(`<h3>Max Number 2: ${num2}</h3> `)
}


// let username = prompt('Enter username: ')
let username = 'Decode'
username = username.toLowerCase()

if (username == 'decode') {
    document.write(`<hr><p>Welcome admin, ${username}!</p>`)
} else {
    document.write('<hr><p>Incorrect username</p>')
}


// AND, OR    &&, ||
// И, ИЛИ

if ('hello' == 'Hello' || 'decode' == 'decode') {
    document.write('<hr><p>hello == Hello || decode == decode</p>')
}

if ('hello' == 'hello' && 'decode' == 'decode') {
    document.write('<p>hello == hello && decode == decode</p> <hr>')
} else {
    document.write('<p> ELSE hello == Hello && decode == decode</p> <hr>')
}


if (10 < 5) {
    document.write('<p> if 10 < 5 </p>')
} else if (20 !== 20) {
    document.write('<p> else if 20 !== 20 1</p>')
} else if (20 !== 20) {
    document.write('<p> else if 20 !== 20 2</p>')
} else if (20 == 20) {
    document.write('<p> else if 20 == 20 3</p>')
} else if (20 == 20) {
    document.write('<p> else if 20 == 20 4</p>')
} else {
    document.write('<p> else </p>')
}

if (10 == 10) {
    document.write('<p> if 10 == 10 1 </p>')
}

if (10 == 10) {
    document.write('<p> if 10 == 10 2 </p>')
}

if (10 == 10) {
    document.write('<p> if 10 == 10 3 </p>')
}

if (10 == 10) {
    document.write('<p> if 10 == 10 4 </p> <hr>')
}










document.write(`<h3>Maximum from 3 values</h3>`)

num1 = Math.floor(Math.random() * 100)
num2 = Math.floor(Math.random() * 100)
let num3 = Math.floor(Math.random() * 100)

document.write(`<h3>Random Number 1: ${num1}</h3>`)
document.write(`<h3>Random Number 2: ${num2}</h3>`)
document.write(`<h3>Random Number 3: ${num3}</h3>`)


if (num1 > num2 && num1 > num3) {
    document.write(`<h3>Max Number 1: ${num1}</h3> <hr>`)
} else if (num2 > num1 && num2 > num3) {
    document.write(`<h3>Max Number 2: ${num2}</h3> <hr>`)
} else if (num3 > num1 && num3 > num2) {
    document.write(`<h3>Max Number 3: ${num3}</h3> <hr>`)
}

let max = 0

// 53
// 94
// 70

//   53  > 0
if (num1 > max) {
    max = num1
}

// max = 53
//    94 > 53
if (num2 > max) {
    max = num2
}

// max = 94
//    70 > 94 
if (num3 > max) {
    max = num3
}
// max = 94

document.write(`<h3>Max Number another method: ${max}</h3> <hr>`)


let evenOdd = Math.floor(Math.random() * 100)
document.write(`<h3>Number: ${evenOdd}</h3>`)

if (evenOdd % 2 == 0) {
    document.write(`<h3>Number is Even: ${evenOdd}</h3> <hr>`)
} else {
    document.write(`<h3>Number is Odd: ${evenOdd}</h3> <hr>`)
}



document.write(`<h3>Random Number 1: ${num1}</h3>`)
document.write(`<h3>Random Number 2: ${num2}</h3>`)

if (num1 % num2 == 0) {
    document.write(`<h3>${num1} divided to ${num2}</h3> <hr>`)
} else {
    document.write(`<h3>${num1} not divided to ${num2}: ${num1 % num2}</h3> <hr>`)
}


// let x = +(prompt('Enter X'))
// let y = +(prompt('Enter Y'))
let x = 4
let y = -2

document.write(`<h3>X: ${x} | Y: ${y}</h3>`)

if (x > 0 && y > 0) {
    document.write(`<h3> I </h3> <hr>`)
} else if (x < 0 && y > 0) {
    document.write(`<h3> II </h3> <hr>`)
} else if (x < 0 && y < 0) {
    document.write(`<h3> III </h3> <hr>`)
} else if (x > 0 && y < 0) {
    document.write(`<h3> IV </h3> <hr>`)
}



evenOdd = Math.floor(Math.random() * 100)
document.write(`<h3>Number: ${evenOdd}</h3>`)

if (evenOdd % 2 == 0) {
    document.write(`<h3>Number is Even: ${evenOdd}</h3> <hr>`)
} else {
    document.write(`<h3>Number is Odd: ${evenOdd}</h3> <hr>`)
}

// consition ? body : else-body
let result = evenOdd % 2 == 0 ? 'Even' : 'Odd'
document.write(`<h3>(Ternary Condition) Number is ${result}: ${evenOdd}</h3> <hr>`)


let quarters = x > 0 && y > 0 ? 'I' : x < 0 && y > 0 ? 'II' : x < 0 && y < 0 ? 'III' : x > 0 && y < 0 ? 'IV' : 'Error'
document.write(`<h3>(Ternary Condition) Quarters of X: ${x} and Y: ${y} is ${quarters}</h3> <hr>`)