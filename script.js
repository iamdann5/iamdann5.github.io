// Declaring the first constant as an empty function

const mobileMenuSlide = () => {
	//declaring const 'burger' and telling what to be selected in CSS using the document.querySelector

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	// toggle navigation strip on click of burger

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
			}
		});

		burger.classList.toggle('toggle');
	});
};

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');
let navBar = document.querySelector('nav');

window.addEventListener('mousemove', cursor);

function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}

navBar.addEventListener('mouseover', () => {
	navBar.style.backgroundColor = 'orangered';
});

navBar.addEventListener('mouseleave', () => {
	navBar.style.backgroundColor = 'orange';
});

navLinks.forEach((link) => {
	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add('cursor-link-hover');
		link.classList.add('hovered-link');
	});

	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove('cursor-link-hover');
		link.classList.remove('hovered-link');
	});
});

// Invoking the functions here

mobileMenuSlide();
