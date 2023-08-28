const faqToggle = document.querySelectorAll('.faq');

faqToggle.forEach((element) => {
	element.addEventListener('click', () => {
		element.classList.toggle('active');
	})
})