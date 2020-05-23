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

// Invoking the function here

mobileMenuSlide();
