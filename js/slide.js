var slideIndex = 0;
var timer; // Добавляем переменную для хранения таймера
showSlides();

function plusSlides(n) {
    showSlides((slideIndex += n));
    resetTimer(); // Добавляем вызов функции сброса таймера
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer(); // Добавляем вызов функции сброса таймера
}

function resetTimer() {
    clearTimeout(timer); // Очищаем предыдущий таймер
    timer = setTimeout(function () {
        plusSlides(1); // Вызываем функцию для автоматического переключения слайдов
    }, 3000); // Устанавливаем новый таймер с начальным значением 3 секунды (3000 миллисекунд)
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Запускаем таймер для автоматического переключения слайдов
resetTimer();


  