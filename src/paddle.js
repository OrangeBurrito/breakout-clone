export default (ctx) => {
	let speed = 2
	let width = 60
	let height = 6
	let x = ctx.canvas.width / 2
	let y = ctx.canvas.height - (width/2 - height)

	function draw() {
		ctx.beginPath()
		ctx.rect(x, y, width, height)
		ctx.fill()
		ctx.closePath()
	}

	function update(keys) {
		if (keys.includes('a') && (keys.indexOf('a') > keys.indexOf('d'))) x -= speed
		if (keys.includes('d') && (keys.indexOf('d') > keys.indexOf('a'))) x += speed
	}

	function get(variable) {
		return eval(variable)
	}

	return {
		draw,
		update,
		get
	}
}