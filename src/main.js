import Game from './game.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.fillStyle = "#eee"

const game = Game(ctx)

function animate() {
	ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
	game.draw()
	game.update()
	requestAnimationFrame(animate)
}

// animate()