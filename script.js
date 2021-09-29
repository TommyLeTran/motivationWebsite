









let burger = document.querySelector(".burger");
let list = document.querySelector(".navList");
let body = document.querySelector("body");
let ul = document.querySelector("ul")

burger.addEventListener('click', function(event) {
    list.classList.add('navList')
    burger.classList.toggle('toggle');
})