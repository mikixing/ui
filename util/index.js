function offset (e) {
	let ele = e
	let x = 0
	let y = 0
	while (ele.offsetParent) {
		ele = ele.offsetParent
		x += ele.offsetLeft
		y += ele.offsetTop
	}
	return {
		left: x - scrollParent(e).left,
		top: y - scrollParent(e).top
	}
}
function scrollParent (e) {
	let ele = e
	let x = 0
	let y = 0
	while (ele.offsetParent) {
		ele = ele.offsetParent
		x += ele.scrollLeft
		y += ele.scrollTop
	}
	return {
		left: x,
		top: y
	}
}
window.offset = offset
window.scrollParent = scrollParent
