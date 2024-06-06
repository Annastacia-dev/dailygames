import './style.css'
import { games } from './data/games'

const gamesContainer = document.getElementById("games")

games.forEach((game) => {
  const gameContainer = document.createElement('a')
  gameContainer.href = game.link
  gameContainer.target = "_blank"
  const gameTitle = document.createElement('h5')
  gameTitle.innerHTML = game.title
  const gameImage = document.createElement('img')
  gameImage.src = game.logo
  const gameLink = document.createElement('a')
  gameLink.href = game.link
  gameLink.target="_blank"
  gameLink.innerHTML = 'Play'

  gameImage.title = `By ${game.author}`
  gameTitle.title = `By ${game.author}`
  gameLink.title = `By ${game.author}`

  gameContainer.classList.add('game-container')
  gameTitle.classList.add('game-title')
  gameImage.classList.add('game-image')
  gameLink.classList.add('game-link')


  gameContainer.append(gameImage)
  gameContainer.append(gameTitle)
  gameContainer.append(gameLink)

  gamesContainer.append(gameContainer)
})

