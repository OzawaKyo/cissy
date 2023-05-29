const menuIcon = document.querySelector('.menu-icon');
const menuText = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
    this.classList.toggle('active');
    menuText.textContent = this.classList.contains('active') ? 'close' : 'menu';
    menuText.classList.toggle('active');
});