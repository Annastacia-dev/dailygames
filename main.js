import './style.css'
import { games } from './public/data/games'

console.log(games)

const gamesContainer = document.getElementById("games")

games.forEach((game) => {
  const gameContainer = document.createElement('div')
  const gameTitle = document.createElement('h5')
  gameTitle.innerHTML = game.title
  const gameImage = document.createElement('img')
  gameImage.src = game.logo
  const gameLink = document.createElement('a')
  gameLink.href = game.link
  gameLink.target="_blank"
  gameLink.innerHTML = 'Play'

  gameContainer.classList.add('game-container')
  gameTitle.classList.add('game-title')
  gameImage.classList.add('game-image')
  gameLink.classList.add('game-link')

  gameContainer.append(gameImage)
  gameContainer.append(gameTitle)
  gameContainer.append(gameLink)

  gamesContainer.append(gameContainer)
})

