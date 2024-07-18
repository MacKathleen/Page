// document.addEventListener('DOMContentLoaded', function () {
//     const slides = document.querySelectorAll('.slide');
//     let slideIndex = 0;
//     const totalSlides = slides.length;

//     function showSlide(index) {
//         slides.forEach(slide => {
//             slide.style.display = 'none';
//         });

//         slides[index].style.display = 'block';
//     }

//     function nextSlide() {
//         slideIndex = (slideIndex + 1) % totalSlides;
//         showSlide(slideIndex);
//     }

//     function prevSlide() {
//         slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
//         showSlide(slideIndex);
//     }

//     setInterval(nextSlide, 5000);

//     showSlide(slideIndex); // Mostrar o primeiro slide ao carregar a página

//     const prevButton = document.querySelector('.prev-button');
//     const nextButton = document.querySelector('.next-button');

//     prevButton.addEventListener('click', prevSlide);
//     nextButton.addEventListener('click', nextSlide);
// });
// const countdownElement = document.getElementById("countdown");

// const countdownFunction = setInterval(function() {
//     const now = new Date().getTime();
//     const distance = countDownDate - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//     if (distance < 0) {
//         clearInterval(countdownFunction);
//         countdownElement.innerHTML = "EXPIRADO";
//     }
// }, 1000);

function menuShow() {
    let menuMobile = document.querySelector('.nav-links');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
       

    } else {
        menuMobile.classList.add('open')
      

    }

    console.log("test")
}

