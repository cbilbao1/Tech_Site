//Add the click effect
const menu = document.querySelector('#mobile-menu')   // remember in the html? the id "mobile-menu" is now referenced here!
const menuLinks = document.querySelector('.navbar__menu')

//means that listens for an event 'click' and then runs our function
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')   // will toggle then add a menu.classList
    menuLinks.classList.toggle('active');
})