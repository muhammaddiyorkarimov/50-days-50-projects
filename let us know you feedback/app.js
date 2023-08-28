const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = ''

ratings.forEach((rating) => {
	rating.addEventListener('click', (e) => {
		if (e.target.parentElement.classList.contains('rating') && e.target.nextElementSibling) {
			removeActive()
			rating.classList.add('active')
			selectedRating = e.target.nextElementSibling.innerHTML
		} else if (e.target.classList.contains('rating')) {
			removeActive()
			rating.classList.add('active')
			selectedRating = e.target.lastElementChild.innerHTML
		} else if (e.target = 'small') {
			removeActive()
			rating.classList.add('active')
			selectedRating = e.target.innerHTML
		}
	})
})

sendBtn.addEventListener('click', (e) => {
	panel.innerHTML = `
			<i class="fas fa-heart"></i>
			<strong>Thank You!</strong>
			<br>
			<strong>Feedback: ${selectedRating}</strong>
			<p>We'll use your feedback to improve our customer support</p>
			<button id="back" class="btn">Back</button>
	`
})



function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove('active')
	}
}

