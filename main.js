
const linksSocialMedia = {
  github: "DhonatanJoseildo",
  youtube: "UCDYUts6VhAoSB2MPtCXBOqA",
  facebook: "dhonatanjoseildo",
  instagram: "dhonatan001",
  twitter: "maykbrito"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  // fech faz a captura dos dados que foi obtido pelo link
  // then pega os dados capturados e promete fazer augo.
  fetch(url).then(response => response.json())
  // neste caso o then tranforma os dados em uma JSON.
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userGitHub.href = data.html_url
    userPhoto.src = data.avatar_url
    user.textContent = data.login
  })
}
getGitHubProfileInfos()
