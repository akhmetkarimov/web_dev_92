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