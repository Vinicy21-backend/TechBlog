let indiceSlide = 0;
mostrarSlides(indiceSlide);

function moverSlide(n) {
    mostrarSlides(indiceSlide += n);
}

function mostrarSlides(n) {
    let slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        indiceSlide = 0;
    }
    if (n < 0) {
        indiceSlide = slides.length - 1;
    }
    slides.forEach(slide => slide.style.transform = `translateX(${-indiceSlide * (100 / slides.length)}%)`);
}
