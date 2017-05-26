var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');
var productPicture = document.querySelectorAll('.product-picture');
var slides = document.querySelector('.slider').children;
var nextButton = document.querySelector('.small-box-right');
var prevButton = document.querySelector('.small-box-left');
var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header-menu');
console.log(menu);


var index = 0;
slides[index].classList.add('visible');

nextButton.addEventListener('click', function () {
    slides[index].classList.remove('visible');
    index++;
    if (index === slides.length) {
        index = 0;
    }
    slides[index].classList.add('visible');
});

prevButton.addEventListener('click', function () {
    console.log('ok');

    slides[index].classList.remove('visible');
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    slides[index].classList.add('visible');
});

dropdown.addEventListener('mouseover', function () {
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseout', function () {
    dropdownContent.style.display = 'none';
});

menuButton.addEventListener('click', function () {
    menu.classList.toggle('visible');
});


for (var i = 0; i < productPicture.length; i++) {
    productPicture[i].addEventListener('mouseover', function () {
        this.querySelector('.product-title').style.display = 'none';
    });
    productPicture[i].addEventListener('mouseout', function () {
        this.querySelector('.product-title').style.display = 'block';
    });
}


//
// var nextButton = document.getElementById('nextPicture');
// var prevButton = document.getElementById('prevPicture');
// var listElements = document.querySelector('ul').children;
//
// var index = 0;
// listElements[index].classList.add('visible');
//
