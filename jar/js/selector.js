function hasCls (ele, cls) {
    var arr = ele.className.split(/\s+/g)
    var res = arr.filter(function (e) {
        return e === cls
    })
    if (res.length > 0) return true
}
function removeCls (ele, cls) {
    cls = cls.trim()
    var arr = ele.className.split(/\s+/g)
    var brr = arr.filter(e => e !== cls)
    ele.className = brr.join(' ')
}
function addCls (ele, cls) {
    ele.className += ' ' + cls
}
function Selector () {}
Selector.prototype.init = function (ele) {
	var l = ele.offsetLeft
	var t = ele.offsetTop
	var h = ele.offsetHeight
	var arr = [].slice.call(document.getElementsByClassName('miki-select__item'))
	var $miki_select = $('.miki-select') 
	var matte = document.createElement('div')
	var $matte
	matte.className = 'my-matte'
	if (!$('.my-matte').length) {
		$(document.body).append($(matte))
	}
	$matte = $('.my-matte')
	$matte.show()
	$matte.animate({opacity: 1}, 'fast', function () {
		if (ele.value) {
			arr.forEach((e, i) => {
				removeCls(e, 'miki-select__item-active')
				if (e.innerHTML === ele.value) {
					addCls(e, 'miki-select__item-active')
					if (i === 0) return
					t -= i * 40
				}
			})
		}
		$miki_select.css({top: t + 'px', left: l + 'px'})
		$miki_select.show()

	})
	bindEvent()

	function bindEvent () {
		$miki_select.off('click')
		$matte.off('click')
		$miki_select.on('click', function (ev) {
			var target = ev.target
			$matte.animate({opacity: 0}, 'fast', function () {
				$miki_select.hide()
				$matte.hide()
				ele.value = target.innerHTML
			})
		})
		$matte.on('click', function () {
			console.log('matte')
			$matte.animate({opacity: 0}, 'fast', function () {
				$miki_select.hide()
				$matte.hide()
			})
		})
	}
}