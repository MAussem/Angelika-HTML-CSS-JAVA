window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add
        ("display");
    }, 2000);
};


document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});


document.querySelector(".scroll-btn").addEventListener
("click", () => {
document.querySelector("html").style.scrollBehavior = "smooth";
setTimeout(()=>{
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter

let counter = 1;
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners 

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});



