let radius = 6
let x = 0
let y = 0
let dx = 1
let dy = -1

export function createBall(ctx) {
	resetBall(ctx)

	return {
		update() {
			x += dx
			y += dy
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
}