// []
        //         0           1            2         3            5
let images = ['img1.jpg', 'img2.jpeg', 'img3.jpg', 'img4.jpg', 'img5.jpg']
let outImg = ''

// array[index]

document.write(`<img src=images/${images[1]}>`)
document.write(`<div class="wrap">`)
                        
for (let i = 0; i < images.length; i++) {
    outImg += `
        <div class="gallery-item">
            <img src='images/${images[i]}'>
        </div>
    `
}

document.write(outImg)
document.write('</div>')



let arr = [1, 33, 2, 77, 67, 33, 12, 1, 33]
let maxCount = 0
let maxNum = 0
let count = 0
let max = 0

for (let i = 0; i < arr.length; i++) {
    count = 0
    max = 0
    
    max = arr[i]

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count += 1
        }
    }
    
    if (count > maxCount) {
        maxCount = count
        maxNum = max
    }

}

document.write(`<p>Max frequently number in array is ${maxNum} with count ${maxCount}</p>`)


let person = {
    name: 'Test Name',
    surname: 'Test SurName',
    age: 30,
    gender: 'male',
    status: 'married',
    skills: ['HTML', 'CSS', 'JS'],
    avatar: 'img1.jpg'
}

person.salary = 2000

console.log(person)
console.log(arr)

let skillOut = ''

for (let skill of person.skills) {
    skillOut += `<li>${skill}</li>`
    // document.write(`<p>SKILL: ${skill}</p>`)
}


document.write(`
    <div class="profile-card"> 
        <img src="images/${person.avatar}">
        <h4>Full Name: ${person.name} ${person.surname}</h4>
        <p>Age: ${person.age}</p>
        <p>Gender: ${person.gender}</p>
        <p>Status: ${person.status}</p>
        <p>Skills: 
            <ul>
                ${skillOut}
            </ul>
        </p>
        <p>Salary: ${person.salary} $</p>
    </div>
`)


let users = [
    
    {
        name: 'Test Name 1',
        surname: 'Test SurName 1',
        age: 23,
        gender: 'male',
        status: 'married',
        skills: ['SMM', 'Digital', 'Instagram'],
        avatar: 'img1.jpg'
    },

    {
        name: 'Test Name 2',
        surname: 'Test SurName 2',
        age: 27,
        gender: 'female',
        status: 'married',
        skills: ['Fashion', 'Nail', 'Beauty'],
        avatar: 'img2.jpeg'
    },
    
    {
        name: 'Test Name 3',
        surname: 'Test SurName 3',
        age: 21,
        gender: 'male',
        status: 'married',
        skills: ['HTML', 'CSS', 'JS'],
        avatar: 'img3.jpg'
    },
    
    {
        name: 'Test Name 4',
        surname: 'Test SurName 4',
        age: 23,
        gender: 'female',
        status: 'married',
        skills: ['business', 'marketing', 'model'],
        avatar: 'img4.jpg'
    },
    
    {
        name: 'Test Name',
        surname: 'Test SurName',
        age: 30,
        gender: 'male',
        status: 'married',
        skills: ['HTML', 'CSS', 'JS'],
        avatar: 'img5.jpg'
    },
    

]

document.write('<div class="wrap">')

for (let user of users) {
    let userSkill = ''
    
    for (let skill of user.skills){
        userSkill += `<li>${skill}</li>`
    }

    document.write(`
        <div class="profile-card"> 
            <img src="images/${user.avatar}">
            <h4>Full Name: ${user.name} ${user.surname}</h4>
            <p>Age: ${user.age}</p>
            <p>Gender: ${user.gender}</p>
            <p>Status: ${user.status}</p>
            <p>Skills: 
                <ul>
                    ${userSkill}
                </ul>
            </p>
        </div>`)
    
}

document.write('</div><hr>')



let departments = [
    'Digital',
    'Analytic',
    'Finance',
]

for (let index in departments) {
    document.write(`<p>${departments[index]} ${index}</p>`)
}

console.log(departments)

departments[departments.length] = '12'

departments.push('IT') // добавление элемента в конец массива
departments.unshift('IT start') // добавление элемента в начало массива

departments.shift() // удаление элемента из начало массива
departments.pop() // удаление элемента из конца массива
departments.pop() // удаление элемента из конца массива
departments.pop() // удаление элемента из конца массива

departments.push('IT')
departments.push('Marketing')
departments.push('Accounting')

let fIndex = departments.indexOf('IT')

if (fIndex !== -1) {
    // Удаление элемента по index
    departments.splice(fIndex, 1)
}

document.write('<hr>')

for (let index in departments) {
    document.write(`<p>${departments[index]} ${index}</p>`)
}






// for (let key in person) {
//     document.write(`<p>${key}: ${person[key]}</p>`)
// }

// for (let i = 0; i <person.length)


document.write('<hr>')