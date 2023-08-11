const jokeBtn = document.getElementById('jokeBtn')
const jokeEl = document.getElementById('joke')
const pending = document.getElementById('pending')


const generateJoke = async () => {

	const config = {
		headers: {
			Accept: 'application/json',
		},
	}

	const res = await fetch('https://icanhazdadjoke.com', config)
	const data = await res.json()
	jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener('click', generateJoke)