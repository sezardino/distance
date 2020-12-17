const menuTrigger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.left-sidebar');

menuTrigger.addEventListener('click', () => {
	menu.classList.toggle('active');
});
