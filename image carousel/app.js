const images = document.querySelectorAll('#imgs img')
const image = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')

let index = 0

const interval = setInterval(runCarausel, 2000)

function runCarausel() {
	index++;
	changeImg()
}

function resetInterval() {
	clearInterval(interval)
	interval = setInterval(runCarausel, 2000)
}

function changeImg() {
	if (index > images.length - 1) {
		index = 0
	} else if (index < 0) {
		index = images.length - 1
	}
	image.style.transform = `translateX(-${index * 500}px)`
}

right.addEventListener('click', (e) => {
	index++;
	changeImg()
})

left.addEventListener('click', (e) => {
	index--;
	changeImg()
})