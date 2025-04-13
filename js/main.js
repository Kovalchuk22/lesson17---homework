// const title = document.querySelector("#title");

// // забирає або додає клас highlight
// document.getElementById('toggle-class-btn').addEventListener("click", () => {
//   title.classList.toggle("highlight");
// });

// // додає клас custom-class
// document.getElementById('add-class-btn').addEventListener("click", () => {
//   title.classList.add("custom-class");
// });

// // видаляє клас custom-class
// document.getElementById('remove-class-btn').addEventListener("click", () => {
//   title.classList.remove("custom-class")
// });

// // замінює клас custom-class на highlight
// document.getElementById('replace-class-btn').addEventListener("click", () => {
//   title.classList.replace("custom-class", "highlight");
// });

// // перевіряє чи є клас highlight
// console.log(title.classList.contains("highlight"));



// ////// Робота з атрибутами
// const text = document.querySelector("#text");
// document.getElementById('hide-show-btn').addEventListener("click", () => {
//   text.hidden = !text.hidden;
// });

// //змінює картинку
// const img = document.querySelector("#img");
// document.getElementById('change-img-btn').addEventListener("click", () => {
//   img.src = "https://picsum.photos/200/300?random=" + Math.floor(Math.random() * 1000);
// });





// const lin1 = document.querySelectorAll('a[href^="http://"], a[href^="ftp://"]')
// lin1.forEach(link => {
//   link.style.color = 'orange'
// })

// const firstLink = document.querySelector("ul.ff li:first-child a").classList.add("styleCode")
// const lastLink = document.querySelector("ul.ff li:last-child a").classList.add("styleCode")


// const title2 = document.getElementById("idc")
// if (title2) {
//   title2.textContent = "Список посилань"
//   title2.style.background = 'black'
//   title2.style.color = 'white'
//   title2.style.fontSize = "45px"
//   title2.classList.add("list-title")
//   title2.classList.replace("list-title","title-code")
// }

// const links = document.querySelectorAll("ul li a")
// links.forEach(limk => {
//   console.log(limk.classList.contains("list"));
// })

// button1
// input1


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