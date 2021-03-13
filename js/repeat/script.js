let count = 10

while (22 > count) {
    document.write('<p>Hello While</p>')
    count += 1
}

// let name = prompt('Enter username')

// while (name != 'decode') {
//     name = prompt('Enter valid username!')
// }




// ---------------------------------


// for (начло; условие; действие) {
//     тело
// }

// for (let i = 10; i < 15; i++) {
//     document.write('<h3>Decode School</h3>')
// }

// for (i = 10; 10 <= 15; i++)

// 1) i = 10;
// 2) 10 <= 15; true
// 3) body: document.write('<h3>Decode School</h3>')
// 4) i++

// 1) i = 11;
// 2) 11 <= 15; true
// 3) body: document.write('<h3>Decode School</h3>')
// 4) i++ 

// 1) i = 12;
// 2) 12 <= 15; true
// 3) body: document.write('<h3>Decode School</h3>')
// 4) i++ 

// 1) i = 13;
// 2) 13 <= 15; true
// 3) body: document.write('<h3>Decode School</h3>')
// 4) i++ 

// 1) i = 14;
// 2) 14 <= 15; true
// 3) body: document.write('<h3>Decode School</h3>')
// 4) i++ 


// 1) i = 15; 
// 2) 15 <= 15; true 
// 3) body: document.write('<h3>Decode School</h3>')
// 4) i++

// 1) i = 16; 
// 2) 16 <= 15; false 

let cars = [
    'Toyota', 
    'Hoda', 
    'Kia', 
    'BMW', 
    'Mercedes'
]

// cars[i]

// cars[0]
// cars[1]
// cars[2]
// cars[3]
// cars[4]

// while()
// for()
// do {} while()
// for(in)

// ES6
// for (of)

for (let item of cars) {
    document.write(`<p>CAR: ${item}</p>`)
}

let colors = [
    'розовый',
    'фиолетовый',
    'красный',
    'бежевый',
    'синий'
]

for (let color of colors) {
    document.write(`<p>Эта помада цвета: ${color}</p>`)
}

// colors.length
// colors[i]


let student = {
    name: 'Student Name',
    id: '123',
    subjects: ['History', 'Math', 'English', 'Biology']
}

document.write(`<p>
    ID: ${student.id},
    Имя: ${student.name}, 
    Уроки: ${student.subjects}
</p>`)

for (let subject of student.subjects) {
    if (subject === 'Biology') {
        document.write(`<p>FOR() Урок: ${subject}</p>`)
    }
}

let bIndex = student.subjects.indexOf('Biology')
document.write(`<p>Урок: ${student.subjects[bIndex]}</p>`)