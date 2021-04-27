"use strict";
// const result = confirm('a you here?');
// console.log(result);
// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);
// const answers = [];
// answers[0] = prompt("Как вас зовут?", "");
// answers[1] = prompt("Какая у вас фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");
// console.log(typeof(answers));
//
// document.write(answers);
// const name = 'Max';
// const LastName = 'Radchenko';
// const age = 20;
// const quetions = 'And you?';
// console.log(`I am ${name} ${LastName}, i am ${age} years old, ${quetions}`);
// const ures = 'Max';
// alert(`Hello, ${ures}`);
// console.log('arr' + - 'object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log(incr);
// console.log(decr);
// console.log( )

 const isCheked = true,
       isClose = false;
 console.log(isCheked || !isClose);
 console.log(2 + 2 * 2 === 6);
 const header = document.querySelector('header');
 const navLinks = document.querySelectorAll(".nav__link");
 console.log(header);
 console.log(navLinks);


 const name = 'Maxim';
 function sayHello(){
       let message = 'Hello' + name;
       console.log(message);
 }
 sayHello();
 function simpleMath(a, b, c){
    let result;
    result = a + b * c;
    return result;
 }
 let sum = simpleMath(111, 252, 2);
 console.log(sum);

window.addEventListener("scroll", function () {
   let scrollPos = window.scrollY;

   if (scrollPos > 0) {
      header.classList.add('red');
   } else {
      header.classList.remove('red');
   }
});
const testBtn = document.querySelector('#testBtn');
testBtn.addEventListener("click", function (){
   console.log('clicked');
});
navLinks.addEventListener("click", function (){
   console.log('link clicked');});

for (let navItem of navLinks){
   navItem.addEventListener("click", function (){
      console.log('link clicked');});

};
document.addEventListener("DOMContentLoaded", function (){
   let scrollPos;
   if (scrollPos > 0) {
      header.classList.add('red');
   } else {
      header.classList.remove('red');
   }
});