import {createBall} from './ball.js'
import {createPaddle} from './paddle.js'
import {createInputHandler} from './input.js'

export function createGame(ctx) {
	const paddle = createPaddle(ctx)
	const ball = createBall(ctx)
	const input = createInputHandler()
	
	return {
		draw() {
			ball.draw()
			paddle.draw()
		},
		update() {
			ball.update(paddle)
			paddle.update(input.keys)
		}
	}
}