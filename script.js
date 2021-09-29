let burger = document.querySelector(".burger");
let list = document.querySelector(".navList");
let body = document.querySelector("body");
let ul = document.querySelector("ul")

burger.addEventListener('click', function(event) {
    burger.classList.toggle('toggle');
    list.classList.toggle('nav-active');
})