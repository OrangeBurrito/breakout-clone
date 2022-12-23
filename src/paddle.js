let width = 60
let height = 6
let x = 0
let y = 0
let speed = 2

export function createPaddle(ctx) {
	x = ctx.canvas.width / 2
	y = ctx.canvas.height - (width/2 - height)

	return {
		update(keys) {
			if (keys.includes('a') && (keys.indexOf('a') > keys.indexOf('d'))) x -= speed
			if (keys.includes('d') && (keys.indexOf('d') > keys.indexOf('a'))) x += speed
		},
		draw() {
			ctx.beginPath()
			ctx.rect(x, y, width, height)
			ctx.fill()
			ctx.closePath()
		},
		get(variable) {
			return eval(variable)
		}
	}
}