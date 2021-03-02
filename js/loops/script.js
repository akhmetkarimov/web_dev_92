// while (condition) {
//    body ... 
// }


// let username = prompt('Enter User Name: ')
let username = 'Decode'
username = username.toLowerCase()
let fail = 0

while (username != 'decode') {
    username = prompt('Invalid username please Enter again!: ')
    fail = fail + 1
}

document.write('<h3>Welcome Admin!!</h3>')

if (fail != 0) {
    document.write(`<h3>Fail Count: ${fail}</h3>`)
}


document.write('<hr>')

let count = 0

while (count < 10) {
    document.write(`<p>Money Heist</p>`)
    // count = count + 1
    // count++
    count += 1
}
document.write('<hr>')


let imgCount = 0

let imgOutput = `<div class="wrap">`

while (6 > imgCount) {

    imgOutput += `
        <div class="portfolio">
            <img src="myimg.jpg">
        </div>
    `

    imgCount += 1
}

imgOutput += `</div>`

document.write(imgOutput)
document.write('<hr>')



let i = 0
let sum = 0

while (20 >= i) {
    document.write(`<p>${i} + ${sum} = ${sum + i}</p>`)
    sum = sum + i
    i += 1
}

document.write(`<p>Sum: ${sum}</p> <hr>`)

// for (start; condition; action) {
//     body
// }

for (let i = 0; i < 10; i+=1) {
    document.write(`<p>JavaScript ${i + 1}</p>`)
}

document.write(`<hr>`)

for (let i = 10; i > 0; i -= 1) {
    document.write(`<p>JavaScript ${i}</p>`)
}

document.write(`<hr>`)


let evenSum = 0

for (let i = -32; i < 126; i += 1) {
    if (i % 2 == 0 && i > 0) {
        evenSum += i
    }
}

document.write(`<p>Sum Even Positive: ${evenSum}</p>`)
document.write(`<hr>`)


do {
    document.write('<p>Do While Work</p>')
} while (10 > 20)



// 02.03.2021

document.write(`<hr>`)




// 5! = 1 * 2 * 3 * 4 * 5 = 120
// let fNumber = +prompt('Enter number for factorial')
let fNumber = 5
// string -> int, float

let factorial = 1

for (let i = 1; i <= fNumber; i+=1) {
    factorial *= i
}

document.write(`<p> Factorial of ${fNumber} = ${factorial} </p>`)
document.write(`<hr>`)

// let randNumber = Math.floor(Math.random() * (4 - 1) + 1)
let randNumber = Math.floor(Math.random() * (5 - 1) + 1)
// Math.floor(Math.random() * (max - min) + min)
// 2.9 -> 2
let win = false

for (let i = 0; i < 3; i++) {
    // let ans = +prompt('Enter number')
    let ans = randNumber
    if (ans === randNumber) {
        document.write(`<p> Loop You Win!! </p>`)
        win = true
        break
    } else {
        document.write(`<p> Loop You Lose!! </p>`)
    }
}

document.write(`<hr>`)

if (win) {
    document.write(`<p> You Win!! </p>`)
} else {
    document.write(`<p> You Lose!! </p>`)
}





// for(start; condition/end; action){body}

document.write(`<hr>`)

// let start = +prompt('Enter start point of loop')
// let end = +prompt('Enter end point of loop')
// let step = +prompt('Enter step of loop')

let start = 3
let end = 12
let step = 3


if (start > end) {
    start = +prompt(`Please enter number less than ${end}`)
}

for (start; start <= end; start += step) {
    document.write(`<p>Dynamic loop: ${start}</p>`)
}

// for (let i = start; i <= end; i += step) {
//     document.write(`<p>Dynamic loop: ${start}</p>`)
// }


document.write(`<hr>`)




// 78523 = 3 + 2 + 5 + 8 + 7 = 25

let digits = 78523
let sumDigits = 0

// while (digits > 0) {
//     let n = digits % 10 // 3
//     sumDigits += n // 3
//     digits = Math.floor(digits / 10)
// }

// document.write(`<p>Sum of digits = ${sumDigits} </p>`)

// let reverse = ''
let reverse = 0
// 78523
for (let i = digits; i > 0; i = Math.floor(i / 10)) {
    let n = i % 10 // 3
    // reverse += n
    reverse = reverse * 10 + n
    
    // 0 = 0 * 10 + 3 = 3
    // 3 = 3 * 10 + 2 = 32
    // 32 = 32 * 10 + 5 = 325
    // 325 = 325 * 10 + 8 = 3258
    // 3258 = 3258 * 10 + 7 = 32587

    sumDigits += n // 3
}

document.write(`<p>Sum of digits = ${sumDigits} </p>`)
document.write(`<p>Reverse = ${reverse} </p>`)