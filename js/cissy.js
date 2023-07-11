const menuIcon = document.querySelector('.menu-icon');
const menuText = document.querySelector('.menu');
const categorie = document.querySelector('.categories')
const star = document.querySelector('.star')
const border = document.querySelector('.navv')
const bigLogo = document.querySelector('.big-logo')
const photos = document.querySelector('.photos')

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    menuText.textContent = this.classList.contains('active') ? 'close' : 'menu';
    menuText.classList.toggle('active');
    categorie.classList.toggle('active');
    star.classList.toggle('active');
    border.classList.toggle('active');
    bigLogo.classList.toggle('active');
    photos.classList.toggle('active');
});

