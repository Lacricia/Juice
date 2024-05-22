const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
});



// Slider-arrows
const sliderArrows = document.querySelector ('.slider-arrows'),
      slidesArrow = sliderArrows.querySelectorAll('.slider-arrows__item'),
      prev = sliderArrows.querySelector('.slider_arrow-left'),
      next = sliderArrows.querySelector('.slider_arrow-right');

let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));

function showSlideArrows(n) {

    slideIndex += n;

    if(slideIndex < 0) { 
        slideIndex = slidesArrow.length - 1;
    } else if (slideIndex >= slidesArrow.length) {
    slideIndex = 0;
}

    slidesArrow.forEach(slide => slide.style.display = 'none');
    slidesArrow[slideIndex].style.display = 'block';
}

showSlideArrows(0);


// Slider-dots
const sliderDots = document.querySelector('.slider-dots'),
      slidesDots = sliderDots.querySelectorAll('.slider-dots-item'),
      wrapperDots = sliderDots.querySelector('.slider-dots__nav');


const dots = []; 

for (let i = 0; i < slidesDots.length; i++) {
    const dot = document.createElement('button');

    dot.dataset.slideTo = i;

    dot.classList.add('slider-dots__nav-item');
    if (i == 0) dot.classList.add('slider-dots__nav-item--active');

    if (i !=0) slidesDots[i].style.display = 'none';

    dot.addEventListener ('click', showSlideDots)

    wrapperDots.append(dot);
    dots.push(dot);
}

function showSlideDots(e) {

    const slideTo = e.target.dataset.slideTo;

    slidesDots.forEach(slide => slide.style.display = 'none');
    slidesDots[slideTo].style.display = 'block';

    dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
    e.target.classList.add('slider-dots__nav-item--active');
}
