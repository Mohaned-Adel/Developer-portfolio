// Nav hamburgerburger selections

const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    ul.classList.toggle('show')
})

// close navbar when a link is clicked
//select nav links

const navLink = document.querySelectorAll('.nav-link');
// console.log(navLink); 
navLink.forEach((link) => {
    link.addEventListener('click', () => {
        ul.classList.remove('show');
    })
})

// scroll to top 
const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});