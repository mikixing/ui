import  $ from'./jquery.js'
import Selector from './selector.js'
import SnackBar from './snackbar.js'

$(document).on('focus', 'input[usual]', function () {
				$(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual')
				$(this).closest('.input-field').addClass('focus-field__usual')
			})
			$(document).on('blur', 'input[usual]', function () {
				$(this).closest('.input-field').removeClass('focus-field__usual')
				$(this).parent().parent().children('label').addClass('blur-label')
				if (this.value) return
				$(this).parent().parent().children('label').removeClass('active-usual')
			})
			$(document).on('focus', 'input[error]', function () {
				$(this).parent().parent().children('label').addClass('active-error')
			})
			$(document).on('blur', 'input[error]', function () {
				if (this.value) return
				$(this).parent().parent().children('label').removeClass('active-error')
			})
			$(document).on('focus', 'textarea', function () {
				$(this).parent().parent().children('label').addClass('active-usual')
				$(this).closest('.input-field').addClass('focus-field__usual')
			})
			$(document).on('blur', 'textarea', function () {
				$(this).closest('.input-field').removeClass('focus-field__usual')
				if (this.value) return
				$(this).parent().parent().children('label').removeClass('active-usual')
			})
			$(document).on('focus', 'input[withplaceholder]', function () {
				$(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual')
				$(this).closest('.input-field').addClass('focus-field__usual')
				this.placeholder = 'placeholder'
			})
			$(document).on('blur', 'input[withplaceholder]', function () {
				this.placeholder = ''
				$(this).closest('.input-field').removeClass('focus-field__usual')
				$(this).parent().parent().children('label').addClass('blur-label')
				if (this.value) return
				$(this).parent().parent().children('label').removeClass('active-usual')
			})
			$(document).on('focus', 'select', function () {
				$(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual')
				$(this).closest('.input-field').addClass('focus-field__usual')
			})
			$(document).on('blur', 'select', function () {
				$(this).closest('.input-field').removeClass('focus-field__usual')
				$(this).parent().parent().children('label').addClass('blur-label')
				if (this.value) return
				$(this).parent().children('label').removeClass('active-usual')
			})

			var select_man = document.getElementById('select_man') 
			var s = new Selector()
			select_man.onclick = function () {
				s.init(select_man)
			}

			//snackbar
			$(document)
				.on('click', '[snackbar_top_left]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, '上左' ,'top-left')
				})
				.on('click', '[snackbar_top_center]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, '上中' ,'top-center')
				})
				.on('click', '[snackbar_top_right]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, '上右' ,'top-right')
				})
				.on('click', '[snackbar_bottom_left]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, '下左' ,'bottom-left')
				})
				.on('click', '[snackbar_bottom_center]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, '下中' ,'bottom-center')
				})
				.on('click', '[snackbar_bottom_right]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, '下右' ,'bottom-right')
				})
				.on('click', '[snackbar_custom_success]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, 'success' , '', 'success')
				})
				.on('click', '[snackbar_custom_error]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, 'error' , '', 'error')
				})
				.on('click', '[snackbar_custom_warn]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, 'warn' , '', 'warn')
				})
				.on('click', '[snackbar_custom_normal]', function (ev) {
					var target = ev.currentTarget
					if (!target.snackbar) {
						target.snackbar = new SnackBar()
					}
					target.snackbar.single(target, 'normal' , '', 'normal')
				})
				// .on('click', '[snackbar_custom_more]', function (ev) {
				// 	var target = ev.currentTarget
				// 	if (!target.snackbar) {
				// 		target.snackbar = new SnackBar()
				// 	}
				// 	target.snackbar.more(target, 'more' ,'', 'more')
				// })