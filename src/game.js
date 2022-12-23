import {createBall} from './ball.js'

export function createGame(ctx) {
	const ball = createBall(ctx)
	
	return {
		update() {
			ball.update()
		},
		draw() {
			ball.draw()
		}
	}
}