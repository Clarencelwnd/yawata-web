let currentSlideIndex = 1;
showSlide(currentSlideIndex);

function changeSlide(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const indicators = document.getElementsByClassName("indicator");

    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active");
    }

    slides[currentSlideIndex - 1].style.display = "block";
    indicators[currentSlideIndex - 1].classList.add("active");
}
