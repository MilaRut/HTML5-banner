const slides = document.querySelectorAll('.slides__item');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
    activeSlide(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
    index++;
    prepareCurrentSlide(index);
    }
};

let autoPlay = setInterval(() => nextSlide(), 3000);