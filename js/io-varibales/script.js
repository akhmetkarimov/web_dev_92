// alert('External connected')
document.write('From Js Document')
console.log('Message to Console from Js')

// prompt('Enter your name')

// var, let, const

// var/let/const variable-name

// var/let/const variable-name = value

// var name = prompt('Enter your name')
var name = 'Decode'

document.write('<h3> Hello ' + name + '</h3>')
document.write("<h3> Hello " + name + "</h3>")
document.write(' Welcome to our school "Decode" ')
document.write(" Welcome to our school 'Decode' ")

document.write('123123hgyduhvabdsufvabhjsdnfjabsdnfsdhbfajsdf <br>'+
'asdbkfjlan;dsjfnadsf;kadsf')

document.write(`Hello sadasdasd
asdfasd
fas
df
asd
fa
sdf
asdf`)

console.log(`Hello sadasdasd
asdfasd
fas
df
asd
fa
sdf
asdf`)

document.write(`<h3> Hello ${name} </h3>`)

// document.write(`<p>Let variable: ${myLet}</p>`)

let myLet = 123

myLet = 'new changed value let'

document.write(`<p>Let variable: ${myLet}</p>`)

myVar = 'before'

document.write(`<p>Var variable: ${myVar}</p>`)

var myVar = 222

myVar = 'new value for var'

document.write(`<p>Var variable: ${myVar}</p>`)


const myConst = 88

document.write(`<p>Const variable: ${myConst}</p>`)


// +, *, -, /, %

document.write(`<hr><p>Сумма: 2 + 2 = ${2 + 2}</p>`)
document.write(`<p>Вытечание: 10 - 8 = ${10 - 8}</p>`)
document.write(`<p>Умнажение: 5 * 12 = ${5 * 12}</p>`)
document.write(`<p>Деление: 72 / 9 = ${72 / 9}</p>`)
document.write(`<p>Остаток от деления: 7 % 2 = ${7 % 2}</p><hr>`)


// let num = parseInt(prompt('Введите число'))
// let num = parseFloat(prompt('Введите число'))
// let num = Number(prompt('Введите число'))
// let num = +(prompt('Введите число'))
let num = 10

document.write(`<p>Сумма: 2 + ${num} = ${2 + num}</p>`)
document.write(`<p>Вытечание: 10 - ${num} = ${10 - num}</p>`)
document.write(`<p>Умнажение: 5 * ${num} = ${5 * num}</p>`)
document.write(`<p>Деление: 72 / ${num} = ${72 / num}</p>`)
document.write(`<p>Остаток от деления: 7 % ${num} = ${7 % num}</p><hr>`)

// Math
document.write(`<p>Math.floor(1.9): ${Math.floor(1.9)}</p>`)
document.write(`<p>Math.ceil(1.1): ${Math.ceil(1.1)}</p>`)
document.write(`<p>Math.round(1.5): ${Math.round(1.5)}</p>`)
document.write(`<p>Math.round(1.2): ${Math.round(1.2)}</p>`)
document.write(`<p>Math.sqrt(49): ${Math.sqrt(49)}</p>`)
document.write(`<p>Math.pow(3, 2): ${Math.pow(3, 2)}</p>`)
document.write(`<p>Math.pow(2, 7): ${Math.pow(2, 7)}</p>`)
document.write(`<p>Math.abs(-3): ${Math.abs(-3)}</p>`)
document.write(`<p>Math.PI: ${Math.PI}</p>`)
document.write(`<p>Math.max(3, 99, 1, 67): ${Math.max(3, 99, 1, 67)}</p>`)
document.write(`<p>Math.min(3, 99, 1, 67): ${Math.min(3, 99, 1, 67)}</p><hr>`)

console.log(Math)

// String
//         0123456789
let str = 'Decode-School'


document.write(`<p>str.toLowerCase(): ${str.toLowerCase()}</p>`)
document.write(`<p>str.toUpperCase(): ${str.toUpperCase()}</p>`)
document.write(`<p>str.charAt(4): ${str.charAt(4)}</p>`)
document.write(`<p>str.charAt(7): ${str.charAt(7)}</p>`)
document.write(`<p>str.indexOf('D'): ${str.indexOf('D')}</p>`)
document.write(`<p>str.indexOf('S'): ${str.indexOf('S')}</p>`)
document.write(`<p>str.split(): ${str.split()}</p>`)
document.write(`<p>str.split(''): ${str.split('')}</p>`)
document.write(`<p>str.split(' '): ${str.split(' ')}</p>`)
document.write(`<p>str.split('-'): ${str.split('-')}</p>`)
document.write(`<p>str.split('e'): ${str.split('e')}</p>`)
document.write(`<p>str.split('e', 2): ${str.split('e', 2)}</p>`)
document.write(`<p>str.substr(0, 6): ${str.substr(0, 6)}</p>`)
document.write(`<p>str.substr(0, 1): ${str.substr(0, 1)}</p>`)
document.write(`<p>str.substr(0, 2): ${str.substr(0, 2)}</p>`)
document.write(`<p>str.substr(0, 3): ${str.substr(0, 3)}</p>`)
document.write(`<p>str.substr(0, 4): ${str.substr(0, 4)}</p>`)
document.write(`<p>str.substr(0, 5): ${str.substr(0, 5)}</p>`)
document.write(`<p>str.substr(0, 6): ${str.substr(0, 6)}</p><hr>`)

console.log(str.split(''))