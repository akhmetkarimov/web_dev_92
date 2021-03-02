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