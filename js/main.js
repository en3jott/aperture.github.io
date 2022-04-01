

const buttonBurger = document.getElementById('header__nav-burger');
const changeIcon = document.getElementById('header__nav-span');
const overlayMenu = document.getElementById('header__list');
const blockScroll = document.getElementById('hidden')

buttonBurger.addEventListener('click', function() {
	overlayMenu.classList.toggle('active');
	changeIcon.classList.toggle('active');
	blockScroll.classList.toggle('active');
});


window.addEventListener('scroll', reveal);

function reveal () {
	let reveals = document.querySelectorAll('.reveal');

	for (let i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		let revealTop = reveals[i].getBoundingClientRect().top;
		let revealPoint = 100;

		if(revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add('active')
		} else {
			reveals[i].classList.remove('active')
		}
	}
}