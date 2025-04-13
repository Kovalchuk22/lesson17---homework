// ----------------------------Завдання 1------------------------------------
let btn1 = document.querySelector('#button1')

btn1.addEventListener("click", () => {
    const inpt1 = document.querySelector('#input1').value
    if(inpt1 !== ''){
        btn1.textContent = inpt1
    }
    else{
        btn1.textContent = '------->'
    }
})



// ----------------------------Завдання 2------------------------------------
let btn2 = document.querySelector('.button2')
let img1 = document.querySelector('.img1')

btn2.addEventListener("click", () => {
    img1.src = 'https://picsum.photos/200/300?random=' + Math.random();
})




// ----------------------------Завдання 3------------------------------------
const img2 = document.querySelector('.img2');
const a1 = document.querySelector('.a1');

a1.href = 'https://www.nike.com/uk/';
img2.alt = 'Це випадкове зображення з picsum.photos'




// ----------------------------Завдання 4------------------------------------
const li = document.querySelector('.li');
li.textContent = 'Зробити їсти'