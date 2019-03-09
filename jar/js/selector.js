import $ from './jquery.js'

//取消滚动事件和恢复滚动事件
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  //兼容ie
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}



export default function Selector () {}
Selector.prototype.init = function (ele) {
	var l = ele.getBoundingClientRect().left   //获取相对于浏览器坐上角坐标
	var t = ele.getBoundingClientRect().top
	var h = ele.offsetHeight   //元素的高度
	var arr = [].slice.call($('.miki-select__item'))
	var $miki_select = $('.miki-select')
	var $matte = $('<div class="my-matte"></div>')
	//计算选择器出现的位置
	if (ele.value) {
		arr.forEach((e, i) => {
			$(e).removeClass('miki-select__item-active')
			if (e.innerHTML === ele.value) {
				$(e).addClass('miki-select__item-active')
				if (i === 0) return
				t -= i * 40     //40是selector中每一个选项的高度
			}
		})
	}
	$miki_select.data('origin_t', t)    //把选择器原始的top位置绑定到元素上面,方便以后使用

	$('.my-matte').remove()         //移除可能已经存在的遮罩层
	$(document.body).append($matte)
	$matte.show()
	$matte.animate({opacity: 1})
	//如果浏览器的高度不够,重新调整选择器的位置
	if ($(window).height() <= t + $miki_select.height()) {
		t = $(window).height() - $miki_select.height() - 30   //30是自定义的selector距浏览器底部的高度
	}
	$miki_select.css({top: t + 'px', left: l + 'px'})
	$miki_select.addClass('miki-select__active')
	bindEvent()
	disableScroll()
	function bindEvent () {
		$miki_select.off('click')
		$matte.off('click')
		$miki_select.on('click', function (ev) {
			var target = ev.target
			ele.value = target.innerHTML
			$miki_select.removeClass('miki-select__active')
			$matte.hide()
			ele.value = target.innerHTML
			removeEventListener('resize', fix)
			enableScroll()
		})
		$matte.on('click', function () {
			$miki_select.removeClass('miki-select__active')
			$matte.hide()
			removeEventListener('resize', fix)
			enableScroll()
		})
		function fix () {
			var $target = $('.miki-select')
			var window_h = $(window).height()
			var target_h = $target.height()
			var origin_t = $target.data('origin_t')

			if (origin_t + target_h >= window_h) {
				 $target.css({top: window_h - 30 - target_h + 'px'}) 
			} else {
				$target.css({top: origin_t + 'px'})
			}
		}
		function _throttle(fn,wait,time){
		    var previous = null; //记录上一次运行的时间
		    var timer = null;
		    return function(){
		        var now = new Date();
		        if(!previous) previous = now;
		        //当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
		        if(now - previous > time){
		            clearTimeout(timer);
		            fn();
		            previous = now;// 执行函数后，马上记录当前时间
		        }else{
		            clearTimeout(timer);
		            timer = setTimeout(function(){
		                fn();
		            },wait);
		        }
		    }
		}
		window.addEventListener('resize', _throttle(fix,500,1000))
	}
}