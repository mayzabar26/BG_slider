//Selecting the elements from HTML and adding const
//const pois não pode ser mudado
const body = document.body; //pega o body para mudar o background
const slides = document.querySelectorAll('.slide');

//vai pegar os btn e adicionar o evento de click
const leftBtn = document.getElementById('left'); 
const rightBtn = document.getElementById('right');


//vai começar com o slide no 0 (a primeira foto)
//let pois pode ser modificado
let activeSlide = 0;


//Adding event listener to the right btn
rightBtn.addEventListener('click', () => {
    activeSlide++; //Incrementa activeSlide

    if (activeSlide > slides.length - 1) {
        activeSlide = 0; //se passar do último, volta para o primeiro
    }

    setBgToBody(); //atualiza o background
    setActiveSlide(); //mostra a imagem correta
});


//Adding event listener to the left btn
leftBtn.addEventListener('click', () => {
    activeSlide--; //Diminui activeSlide

    if (activeSlide < 0) { //se for menor que 0, volta para o último slide
        activeSlide = slides.length -1;
    }

    setBgToBody();
    setActiveSlide();
});


//Função que atualiza o background
function setBgToBody() {
    const img = slides[activeSlide].querySelector('img');
    body.style.backgroundImage = `url(${img.src})`;
}


//Função que ativa o slide correto
function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}