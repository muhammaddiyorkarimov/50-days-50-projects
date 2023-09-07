const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// getUser
async function getUser(userName) {
	try {
		const requset = await fetch(APIURL + userName)
		const data = await requset.json()
		createUserCard(data)
		getRepos(userName)
	} catch(err) {
		if (err.response.status === 404) {
			createErrorCard('No profile with this username')
		}
	}
}

// getRepos
async function getRepos(userName) {
	try {
		const request = await fetch(APIURL + userName + '/repos?sort=created')
		const data = await request.json()
		addReposToCard(data)
	} catch (err) {
		createErrorCard('Problem fetching repos')
	}
}

// creaateUserCard
function createUserCard(user) {
	const userID = user.id
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
}

// createErrorCard
function createErrorCard(message) {
	const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

// addReposToCard
function addReposToCard(repos) {
	const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

// userName
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user)

		search.value = ''
	}
})