import Ball from './ball.js'
import Paddle from './paddle.js'
import InputHandler from './input.js'

export default (ctx) => {
	const paddle = Paddle(ctx)
	const ball = Ball(ctx)
	const input = InputHandler()
	
	function draw() {
		ball.draw()
		paddle.draw()
	}

	function update() {
		ball.update(paddle)
		paddle.update(input.keys)
	}

	return {
		draw,
		update
	}
}