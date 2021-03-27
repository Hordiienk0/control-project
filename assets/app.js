

const mobileMenu = document.querySelector('.mobile-menu')
const mainMenu = document.querySelector('.menu')

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('mobile-menu--active')
    if (mobileMenu.classList.contains('mobile-menu--active')) {
        mainMenu.classList.add('mobile-menu--active')
    } else  {
        mainMenu.classList.remove('mobile-menu--active')
    }

})

let offset = 0;

const slider = document.querySelector(".slider-line")