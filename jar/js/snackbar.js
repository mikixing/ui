//若消息提示不要遮罩层
// class Matte {
// 	constructor () {
// 		this.$matte = $('<div class="my-matte"></div>')
// 	}
// 	showMatte (con) {
// 		var $con = $(con)
// 		this.$matte.append($con)
// 		if (!$('.my-matte')[0]) $(document.body).append(this.$matte)
// 	}
// 	hideMatte () {
// 		$('.my-matte').remove()
// 	}
	
// }
import  $ from'./jquery.js'
export default class SnackBar {
	constructor () {}
	showSB () {
		var that = this
		setTimeout(function () {
			that.$dom.addClass('snackbar-enter-' + that.type)
		}, 0)
		
	}
	hideSB () {
		var that = this
		this.$dom.addClass('snackbar-leave-' + that.type).on('transitionend', function () {
			that.$dom.remove()
		})
	}
	init (msg, type, color) {
		this.type = type || 'bottom-left'
		this.$dom = $(`<div class="snackbar-box snackbar-bottom" onselectstart="return false">
				<div class="snackbar-txt">${msg}</div>
				<div class="snackbar-close" close><div class="snackbar-close-btn"></div></div>
				<div class="snackbar-btn"></div>
			</div>`)
		if (/top/.test(this.type)) {
			this.$dom = $(`<div class="snackbar-box snackbar-top" onselectstart="return false">
				<div class="snackbar-txt">${msg}</div>
				<div class="snackbar-close" close><div class="snackbar-close-btn"></div></div>
				<div class="snackbar-btn"></div>
			</div>`)
		}
		switch (this.type) {
			case 'top-left': 
				this.$dom.css({left: '20px'})
				break;
			case 'top-center': 
				this.$dom.css({left: '50%', marginLeft: '-125px'})
				break;
			case 'top-right': 
				this.$dom.css({right: '20px'})
				break;
			case 'bottom-center': 
				this.$dom.css({left: '50%', marginLeft: '-125px'})
				break;
			case 'bottom-right': 
				this.$dom.css({right: '20px'})
				break;
			default: 
				this.$dom.css({left: '20px'})
		}
		if (color) {
			this.$dom.addClass('custom-' + color)
		} else {
			this.$dom.addClass('custom-default')
		}
		this.$dom.insertAfter(this.$el)
		this.showSB()
		var that = this
		this.timer = setTimeout(function () {
			clearTimeout(that.timer)
			that.hideSB() 
		}, 3000)
		this.$dom.on('click', '[close]', function () {
			// $(this).children('.snackbar-close-btn').addClass('snackbar-close-btn_active')
			clearTimeout(that.timer)
			that.hideSB()
		})
	}
	single (el, msg, type, color) {
		this.$el = $(el)
		this.$el.parent().siblings().children('.snackbar-item').each(function () {
			if ($(this).next('.snackbar-box')[0]) {
				this.snackbar.hideSB()
				clearTimeout(this.snackbar.timer)
			}
		})
		if (this.$el.next('.snackbar-box')[0]) return
		this.init(msg, type, color)
	}
	// more (el, msg, type, color) {
	// 	this.more = el.snackbar.more || 0
	// 	var that = this
	// 	this.$el = $(el)
	// 	this.$el.parent().siblings().children('.snackbar-item').each(function () {
	// 		this.snackbar && this.snackbar.hideSB()
	// 	})
	// 	el.snackbar && el.snackbar.$dom && el.snackbar.hideSB()
	// 	this.init(msg, type, color)
	// }
}