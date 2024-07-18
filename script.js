document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 5000);

    showSlide(slideIndex);

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
const stopwatch = document.getElementById('stopwatch');
const arrow = document.getElementById('arrow');
const diaInaug = 18;
const horaInaug = 21;

function atualizarRelogioDigital() {
    const dataHoraAtual = new Date();
    const dataHoraInaug = new Date(dataHoraAtual.getFullYear(), dataHoraAtual.getMonth(), diaInaug, horaInaug, 0, 0, 0);

    const diferenca = dataHoraInaug - dataHoraAtual;

    if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        const horaFormatada = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;

        document.getElementById("relogio-digital").innerHTML = horaFormatada;
    } else {
        document.getElementById("relogio-digital").innerHTML = "A inauguração já ocorreu!";
    }
}

function showAndHide() {
    if (stopwatch.style.right === '-28%') {
        stopwatch.style.right = '0px';
        arrow.textContent = '>';
    } else {
        arrow.textContent = '<';
        stopwatch.style.right = '-28%';
    }
}

setInterval(atualizarRelogioDigital, 1000);

