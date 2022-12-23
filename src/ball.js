const radius = 6
let speed = 2
let x = 0
let y = 0
let dx = 1
let dy = -1

export function createBall(ctx) {
	resetBall(ctx)

	return {
		update(paddle) {
			x += dx
			y += dy
			if (y >= ctx.canvas.height) {
				resetBall(ctx)
			}
			if (y <= radius ||
				((x >= paddle.get('x') && x <= paddle.get('x') + paddle.get('width'))
				&& y >= paddle.get('y') - radius/2)) {
				dy = -dy
			}
			if (x <= radius || x >= ctx.canvas.width) dx = -dx
		},
		draw() {
			ctx.beginPath()
			ctx.arc(x, y, radius, 0, Math.PI * 2)
			ctx.fill()
			ctx.closePath()
		}
	}
}

function resetBall(ctx) {
	x = ctx.canvas.width / 2 - (radius / 2)
	y = ctx.canvas.height / 2 - (radius / 2)
	dx = speed
	dy = -speed
}