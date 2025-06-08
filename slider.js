//Selecting the elements from HTML and a;dding const
const body = document.body;
const slides = document.querySelectorAll('.slide');

//Esses vão ser criados
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

//Adding event listener to the right btn
rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
});


leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length -1;
    }

    setBgToBody();
    setActiveSlide();
});


function setBgToBody() {
    const img = slides[activeSlide].querySelector('img');
    body.style.backgroundImage = `url(${img.src})`;
}


function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}