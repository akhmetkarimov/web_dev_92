// function name() {
//      body
// }
// function name(params) {
//      body
// }
// function name(params) {
//      return
// }

// function printArray(arr) {
//     for (let item of arr) {
//         document.write(`<p>Arr: ${item}</p>`)
//     }
//     document.write(`<hr>`)
// }

// let arr = [1, 12, 123, 123, 12, 3, 123, 12, 3, 123, 4321]
// let arr2 = [1, 12, 123, 123, 12, 3, 123, 12, 3, 123, 4321]
// let arr3 = [1, 12, 123, 123, 12, 3, 123, 12, 3, 123, 4321]
// let arr4 = [1, 12, 123, 123, 12, 3, 123, 12, 3, 123, 4321]
// let arr5 = [1, 12, 123, 123, 12, 3, 123, 12, 3, 123, 4321]

// printArray(arr)
// printArray(arr2)
// printArray(arr3)
// printArray(arr4)
// printArray(arr5)

sum(10, 55) // 65

function sum(num1, num2) {
    document.write(`<p>Sum of two num: ${num1+num2}</p>`)
}

let result = sumRet(54, 26) // 80

document.write(`<p>Sum of two num (return): ${result}</p>`)
document.write(`<p>Sum of two num (return): ${sumRet(122, 26)}</p>`)

function sumRet(n1, n2) {
    return n1 + n2
}

function clickText() {
    document.write('<h3>Hello text from click</h3>')
}


let globalVar = 'Global 20'

function testLocal() {
    let localVar = 'Local 55'
    document.write(`<h4>In function ${localVar}, ${globalVar}</h4>`)
    globalVar = 'Global 21 edit'
    document.write(`<h4>In function after ${localVar}, ${globalVar}</h4>`)
}


document.write(`<h4>Before function ${globalVar}</h4>`)

testLocal()

document.write(`<h4>After function ${globalVar}</h4>`)



// function - var
// Arrow Function - let
let myArrow = () => {
    document.write(`<h4>Arrow function</h4>`)
}
myArrow()


// factorial()
function factorial() {
    let num = +prompt('Enter number: ')
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    document.write(`<p>Factorial: ${fact}</p>`)
}



// for (let item of arr) {
//     document.write(`<p>Arr: ${item}</p>`)
// }

// document.write(`<hr>`)

// for (let item of arr2) {
//     document.write(`<p>Arr: ${item}</p>`)
// }

// document.write(`<hr>`)

// for (let item of arr3) {
//     document.write(`<p>Arr: ${item}</p>`)
// }

// document.write(`<hr>`)

// for (let item of arr4) {
//     document.write(`<p>Arr: ${item}</p>`)
// }

// document.write(`<hr>`)

// for (let item of arr5) {
//     document.write(`<p>Arr: ${item}</p>`)
// }

// document.write(`<hr>`)