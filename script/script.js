var dropdown = document.querySelector('.dropdown');
var dropdownContent = document.querySelector('.dropdown-content');
var productPicture = document.querySelectorAll('.product-picture');
var slides = document.querySelector('.slider').children;
var nextButton = document.querySelector('.small-box-right');
var prevButton = document.querySelector('.small-box-left');
var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header-menu');
var listButton = document.querySelectorAll('.list_arrow');
var listOfTypes = document.querySelectorAll('.list_panel')[0];
var listOfColors = document.querySelectorAll('.list_panel')[1];
var listOfFabrics = document.querySelectorAll('.list_panel')[2];
var transportInput = document.querySelector('#transport');

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

for (var i = 0; i < listButton.length; i++) {
    listButton[i].addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('visible');
    })
}

for (i = 0; i < listOfTypes.children.length; i++) {
    listOfTypes.children[i].addEventListener('click', function () {
        document.querySelector('.panel_right .title_panel').innerHTML = this.innerHTML;
        this.parentNode.parentNode.children[0].innerHTML = this.innerHTML;
        this.parentNode.classList.remove('visible');
    })
}

for (i = 0; i < listOfColors.children.length; i++) {
    listOfColors.children[i].addEventListener('click', function () {
        document.querySelector('.panel_left .color').innerHTML = this.innerHTML;
        document.querySelector('.panel_right .color').innerHTML = this.dataset.price;
        this.parentNode.parentNode.children[0].innerHTML = this.innerHTML;
        this.parentNode.classList.remove('visible');
        updateTotalSum();
    })
}

for (i = 0; i < listOfFabrics.children.length; i++) {
    listOfFabrics.children[i].addEventListener('click', function () {
        document.querySelector('.panel_left .pattern').innerHTML = this.innerHTML;
        document.querySelector('.panel_right .pattern').innerHTML = this.dataset.price;
        this.parentNode.parentNode.children[0].innerHTML = this.innerHTML;
        this.parentNode.classList.remove('visible');
        updateTotalSum();
    })
}

transportInput.addEventListener('change', function () {
    document.querySelector('.panel_left .transport').innerHTML = document.querySelector('#transport').checked ?
        'Transport' :
        '';
    document.querySelector('.panel_right .transport').innerHTML = document.querySelector('#transport').checked ?
        this.dataset.transportPrice :
        '';
    updateTotalSum();
});

var updateTotalSum = function () {
    var totalSum = 0;
    var prices = document.querySelectorAll('.panel_right .value');
    for (i = 0; i < prices.length; i++) {
        if (prices[i].innerHTML !== '') {
            var price = parseInt(prices[i].innerHTML);
            totalSum += price;
        }
    }
    document.querySelector('.sum strong').innerHTML = totalSum;
};


updateTotalSum();


