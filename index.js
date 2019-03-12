require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$(document).on('click', '.mk-checkbox:not([data-indeterminate])', function (e) {
		var $ct = $(e.currentTarget);
		var $t = $(e.target);
		var arr = [];
		if ($t.is('input[type="checkbox"]')) return;
		if ($ct.hasClass('is-disabled')) return;
		if ($ct.hasClass('is-checked')) {
			$ct.removeClass('is-checked');
		} else {
			$ct.addClass('is-checked');
			var item = $ct.children('.mk-checkbox__input').children('input').val();
			item && arr.push(item);
		}
		$ct.siblings('.is-checked').each(function () {
			var item = $(this).children('.mk-checkbox__input').children('input').val();
			item && arr.push(item);
		});
		console.log(arr);
		$ct.trigger('show.mk.checkbox', arr);
	}).on('click', '.mk-checkbox[data-indeterminate]', function (e) {
		var arr = [];
		var $ct = $(e.currentTarget);
		var $t = $(e.target);
		var id = this.dataset['indeterminate'];
		if ($t.is('input[type="checkbox"]')) return;
		if ($ct.hasClass('is-checked')) {
			$ct.removeClass('is-checked');
			$('#' + id).children('.mk-checkbox:not(".is-disabled")').each(function () {
				$(this).removeClass('is-checked');
			});
		} else {
			$ct.addClass('is-checked');
			$('#' + id).children('.mk-checkbox:not(".is-disabled")').each(function () {
				$(this).addClass('is-checked');
			});
		}
		$('#' + id).children('.is-checked').each(function () {
			var item = $(this).children('.mk-checkbox__input').children('input').val();
			item && arr.push(item);
		});
		console.log(arr);
		$ct.trigger('show.mk.checkbox', arr);
	}).on('click', '.mk-checkbox-group[id]', function (e) {
		var id = this.id;
		var $indeterminate = $('.mk-checkbox[data-indeterminate=' + id + ']');
		if (!$indeterminate.length) return;
		var flag1 = $.makeArray($(this).children('.mk-checkbox')).every(function (e) {
			return $(e).hasClass('is-checked');
		});
		var flag2 = $.makeArray($(this).children('.mk-checkbox')).some(function (e) {
			return $(e).hasClass('is-checked');
		});
		if (flag1) {
			$indeterminate.removeClass('is-indeterminate');
			$indeterminate.addClass('is-checked');
			return;
		} else if (flag2) {
			$indeterminate.addClass('is-indeterminate');
		} else {
			$indeterminate.removeClass('is-checked');
			$indeterminate.removeClass('is-indeterminate');
		}
	}).on('click', '.mk-checkbox-btn-group>.mk-checkbox-btn', function (e) {
		var arr = [];
		var $ct = $(e.currentTarget);
		var $t = $(e.target);
		if ($ct.hasClass('is-disabled')) return;
		if ($t.is('input[type="checkbox"]')) return;
		if ($ct.hasClass('is-checked')) {
			$ct.removeClass('is-checked');
		} else {
			$ct.addClass('is-checked');
			var item = $ct.children('.mk-checkbox-btn__input').val();
			item && arr.push(item);
		}
		$ct.siblings('.mk-checkbox-btn.is-checked').each(function () {
			var item = $(this).children('.mk-checkbox-btn__input').val();
			item && arr.push(item);
		});
		console.log(arr);
		$ct.trigger('show.mk.radio.btn', arr);
	});
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_cp').html(cp());

	$(document).on('click', '.mk-cp>.mk-cp-dp>.mk-cp-dp-main>.mk-cp-dp-pannel', function (e) {
		var $sibling = $(this).children('.mk-cp-dp-pannel__cursor');
		var x = e.clientX;
		var y = e.clientY;
		var p = offset(this);
		$sibling.css('left', x - p.left - this.offsetLeft - 1 - 4);
		$sibling.css('top', y - p.top - this.offsetTop - 1 - 4);
	}).on('mousedown', '.mk-cp>.mk-cp-dp>.mk-cp-dp-main>.mk-cp-dp-vertical>.mk-cp-dp-vertical__thumb', function (e) {
		var $this = $(this);
		var that = this;
		var move = function move(e) {
			var h = $this.parent()[0].offsetHeight;
			var p = offset(that);
			var y = e.clientY;
			var dy = y - p.top - that.offsetHeight / 2;
			if (dy < 0) dy = 0;
			if (dy > h) dy = h;
			$this.css('top', dy);
		};
		var up = function up(e) {
			$(document).off('mousemove', move);
		};
		$(document).on('mousemove', move);
		$(document).on('mouseup', up);
	});
};

var cp = require('./index.ejs');

},{"./index.ejs":3}],3:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>colorPicker</h2>\n	<div class="box">\n		<h4>基础用法</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-cp">\n				<div class="mk-cp-dp">\n					<div class="mk-cp-dp-main">\n						<div class="mk-cp-dp-vertical">\n							<div class="mk-cp-dp-vertical__bar"></div>\n							<div class="mk-cp-dp-vertical__thumb"></div>\n						</div>\n						<div class="mk-cp-dp-pannel">\n							<div class="mk-cp-dp-pannel__white"></div>\n							<div class="mk-cp-dp-pannel__black"></div>\n							<div class="mk-cp-dp-pannel__cursor"></div>\n						</div>\n					</div>\n					<div class="mk-cp-dp-other">\n						<div class="mk-cp-dp-other__input">\n							<input type="text" name="" value="">\n						</div>\n						<div class="mk-cp-dp-other__btn">\n							<div class="mk-cp-dp-other__btn-item">\n								清空\n							</div>\n							<div class="mk-cp-dp-other__btn-item">\n								确定\n							</div>\n							<!-- <button type="button" name="button"><span>清空</span></button>\n							<button type="button" name="button"><span>确定</span></button> -->\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_dp').html(dp());

	$(document).on('click', '.mk-dp:not(.hover)', function (e) {
		var $t = $(e.target);
		if ($t.hasClass('mk-dp-menu')) return;
		if ($t.hasClass('mk-dp-menu__item')) return;
		var $this = $(this);
		var $child = $this.children('.mk-dp-menu');
		var status = $child.css('display');
		$child.off('click');
		$child.on('click', function (e) {
			var t = e.target;
			if ($(t).hasClass('mk-dp-menu__item')) {
				$(t).trigger('show.mk.dp', t.innerText);
			}
			$(this).hide();
			$('.matte').remove();
		});
		if (status === 'none') {
			$child.show();
			$(document.body).append('<div class="matte"></div>');
		} else {
			$child.hide();
		}
	}).on('mouseenter', '.mk-dp.hover', function (e) {
		var $this = $(this);
		var $child = $this.children('.mk-dp-menu');
		$child.off('click');
		$child.on('click', function (e) {
			var t = e.target;
			if ($(t).hasClass('mk-dp-menu__item')) {
				$(t).trigger('show.mk.dp', t.innerText);
			}
			$(this).hide();
		});
		$child.show();
	}).on('mouseleave', '.mk-dp.hover', function (e) {
		var $this = $(this);
		var $child = $this.children('.mk-dp-menu');
		$child.hide();
	}).on('click', '.matte', function () {
		$(this).remove();
		$('.mk-dp-menu').hide();
	}).on('show.mk.dp', function (e, v) {
		console.log(v);
	});
};

var dp = require('./index.ejs');

},{"./index.ejs":5}],5:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>dropdown</h2>\n	<div class="box">\n		<h4>基础用法</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-dp">\n				<span class="mk-dp-btn">下拉菜单 <i class="icon-down"></i></span>\n				<!-- <div class="mk-matte"></div> -->\n				<div class="mk-dp-menu">\n					<div class="mk-dp-menu__item">\n						椰子鸡dhfjahfkadjkafkajsd\n					</div>\n					<div class="mk-dp-menu__item">\n						烤鱼\n					</div>\n					<div class="mk-dp-menu__item">\n						烤肉\n					</div>\n					<div class="mk-dp-menu__item">\n						火锅\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>触发激活</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-dp hover">\n				<span class="mk-dp-btn">下拉菜单 <i class="icon-down"></i></span>\n				<!-- <div class="mk-matte"></div> -->\n				<div class="mk-dp-menu">\n					<div class="mk-dp-menu__item">\n						椰子鸡\n					</div>\n					<div class="mk-dp-menu__item">\n						烤鱼\n					</div>\n					<div class="mk-dp-menu__item">\n						烤肉\n					</div>\n					<div class="mk-dp-menu__item">\n						火锅\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var arr_title = [].slice.call(document.getElementsByClassName('list-title'));
	var arr_item = [].slice.call(document.getElementsByClassName('item'));
	function addCls(e, cls) {
		e.className = e.className.trim() + ' ' + cls;
	}
	function hasCls(e, cls) {
		var arr = e.className.split(/\s+/);
		return !!arr.find(function (e) {
			return e === cls.trim();
		});
	}
	function removeCls(e, cls) {
		var arr = e.className.split(/\s+/);
		var str = '';
		arr.forEach(function (e) {
			if (e !== cls.trim()) str += ' ' + e;
		});
		e.className = str;
	}
	var box = document.getElementById('file-tree');
	box.addEventListener('click', function (e) {
		var target = e.target;
		var c = target.children[0];
		var p = target.parentNode || null;
		if (hasCls(target, 'list-title')) {
			if (p) {
				if (hasCls(p, 'active')) {
					removeCls(p, 'active');
					addCls(c, 'up');
				} else {
					addCls(p, 'active');
					removeCls(c, 'up');
				}
			}
		}
		if (hasCls(target, 'list-title') || hasCls(target, 'item')) {
			arr_title.forEach(function (e) {
				removeCls(e, 'choose');
			});
			arr_item.forEach(function (e) {
				removeCls(e, 'choose');
			});
			addCls(target, 'choose');
		}
	});
};

},{}],7:[function(require,module,exports){
'use strict';

var _radio = require('./radio/radio.js');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('./checkbox/checkbox.js');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = require('./input/input.js');

var _input2 = _interopRequireDefault(_input);

var _inputNumber = require('./inputNumber/inputNumber.js');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _select = require('./select/select.js');

var _select2 = _interopRequireDefault(_select);

var _dp = require('./dp/dp.js');

var _dp2 = _interopRequireDefault(_dp);

var _switch = require('./switch/switch.js');

var _switch2 = _interopRequireDefault(_switch);

var _slider = require('./slider/slider.js');

var _slider2 = _interopRequireDefault(_slider);

var _timePicker = require('./timePicker/timePicker.js');

var _timePicker2 = _interopRequireDefault(_timePicker);

var _upload = require('./upload/upload.js');

var _upload2 = _interopRequireDefault(_upload);

var _colorPicker = require('./colorPicker/colorPicker.js');

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _pagination = require('./pagination/pagination.js');

var _pagination2 = _interopRequireDefault(_pagination);

var _timeLine = require('./timeLine/timeLine.js');

var _timeLine2 = _interopRequireDefault(_timeLine);

var _fileTree = require('./file-tree/fileTree.js');

var _fileTree2 = _interopRequireDefault(_fileTree);

var _materialUi = require('./material-ui/material-ui.js');

var _materialUi2 = _interopRequireDefault(_materialUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
    function slice(obj) {
        return [].slice.call(obj);
    }
    $.fn.mikiDp = function () {
        var $box = $(this);
        var dp = $box.find('.miki-dp')[0];
        var $dp = $(dp);
        var arr = slice($dp.children('.miki-dp-child'));
        for (var i = 0; i < arr.length; i++) {
            $(arr[i]).css('display', 'block');
        }
        dp.onselectstart = function () {
            return false;
        };
        $dp.on('click', function (ev) {
            var target = ev.target;
            var $p = $(target.parentNode);
            var arr = slice($p.children('.miki-dp-child'));
            if ($p.hasClass('miki-dp-more')) {
                arr.map(function (e) {
                    var $e = $(e);
                    if ($e.css('display') === 'none') {
                        $e.slideDown('normal');
                    } else {
                        $e.slideUp('fast');
                    }
                });
            }
        });
    };
})(jQuery);

(0, _radio2.default)();
(0, _checkbox2.default)();
(0, _input2.default)();
(0, _inputNumber2.default)();
(0, _select2.default)();
(0, _dp2.default)();
(0, _switch2.default)();
(0, _slider2.default)();
(0, _timePicker2.default)();
(0, _upload2.default)();
(0, _colorPicker2.default)();
(0, _pagination2.default)();
(0, _timeLine2.default)();
(0, _fileTree2.default)();
(0, _materialUi2.default)();

},{"./checkbox/checkbox.js":1,"./colorPicker/colorPicker.js":2,"./dp/dp.js":4,"./file-tree/fileTree.js":6,"./input/input.js":8,"./inputNumber/inputNumber.js":10,"./material-ui/material-ui.js":11,"./pagination/pagination.js":189,"./radio/radio.js":190,"./select/select.js":192,"./slider/slider.js":194,"./switch/switch.js":196,"./timeLine/timeLine.js":198,"./timePicker/timePicker.js":200,"./upload/upload.js":202}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var flag = false;
	var minRows = 4;
	var maxRows = 20;
	function ResizeTextarea(t) {
		if (t.scrollTop == 0) {
			t.scrollTop = 1;
		}
		while (t.scrollTop == 0) {
			if (t.rows > minRows) {
				t.rows--;
			} else {
				break;
			}
			t.scrollTop = 1;
			if (t.rows < maxRows) t.style.overflowY = "hidden";
			if (t.scrollTop > 0) {
				t.rows++;
				break;
			}
		}
		while (t.scrollTop > 0) {
			if (t.rows < maxRows) {
				t.rows++;
				if (t.scrollTop == 0) t.scrollTop = 1;
			} else {
				t.style.overflowY = "auto";
				break;
			}
		}
	}
	$(document).on('input', '.mk-input.mk-input--suffix>.mk-input__inner', function () {
		var $this = $(this);
		var $p = $this.parent();
		if ($this.val()) {
			$p.children('.mk-input__suffix').children('.mk-input__suffix-clear').show();
		} else {
			$p.children('.mk-input__suffix').children('.mk-input__suffix-clear').hide();
		}
	}).on('focus', '.mk-input.mk-input--suffix>.mk-input__inner', function () {
		var $this = $(this);
		var $p = $this.parent();
		if ($this.val()) {
			$p.children('.mk-input__suffix').children('.mk-input__suffix-clear').show();
		} else {
			$p.children('.mk-input__suffix').children('.mk-input__suffix-clear').hide();
		}
	}).on('click', '.mk-input.mk-input--suffix', function () {
		var $this = $(this);
		var $inp = $this.children('.mk-input__inner:focus');
		var len = $inp.length;
		var $child = $this.children('.mk-input__suffix').children('.mk-input__suffix-clear');
		if (!len) {
			$child.hide();
		}
	}).on('click', '.mk-input.mk-input--suffix>.mk-input__suffix', function () {
		var $this = $(this);
		var $p = $this.parent();
		$p.children('.mk-input__inner').val('');
		$this.children('.mk-input__suffix-clear').hide();
	}).on('blur', '.mk-input.mk-input--suffix', function () {
		var $this = $(this);
		setTimeout(function () {
			$this.children('.mk-input__suffix').children('.mk-input__suffix-clear').hide();
		}, 250);
	}).on('keyup', '#auto_textarea', function (e) {
		ResizeTextarea(this);
	}).on('show.mk.input', function (e, v) {
		console.log(v);
	});
};

},{}],9:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>inputNumber</h2>\n	<div class="box">\n		<h4>基础用法</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-input-number">\n				<span class="mk-input-number--decrease is-disabled">\n					<i class="icon-decrease"></i>\n				</span>\n				<span class="mk-input-number--increase">\n					<i class="icon-increase"></i>\n				</span>\n				<div class="mk-input">\n					<input class="mk-input__inner">\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>禁用状态</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-input-number is-disabled">\n				<span class="mk-input-number--decrease">\n					<i class="icon-decrease"></i>\n				</span>\n				<span class="mk-input-number--increase">\n					<i class="icon-increase"></i>\n				</span>\n				<div class="mk-input is-disabled">\n					<input class="mk-input__inner" value=2>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>允许自定义递增递减参数</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-input-number">\n				<span class="mk-input-number--decrease">\n					<i class="icon-decrease"></i>\n				</span>\n				<span class="mk-input-number--increase">\n					<i class="icon-increase"></i>\n				</span>\n				<div class="mk-input">\n					<input class="mk-input__inner" data-param_decrease=2 data-param_increase=3>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>精度</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-input-number">\n				<span class="mk-input-number--decrease">\n					<i class="icon-decrease"></i>\n				</span>\n				<span class="mk-input-number--increase">\n					<i class="icon-increase"></i>\n				</span>\n				<div class="mk-input">\n					<input class="mk-input__inner" data-precision=1>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>尺寸</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-input-number">\n				<span class="mk-input-number--decrease">\n					<i class="icon-decrease"></i>\n				</span>\n				<span class="mk-input-number--increase">\n					<i class="icon-increase"></i>\n				</span>\n				<div class="mk-input">\n					<input class="mk-input__inner">\n				</div>\n			</div>\n		</div>\n		<div class="gap"></div>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-input-number" small>\n				<span class="mk-input-number--decrease">\n					<i class="icon-decrease"></i>\n				</span>\n				<span class="mk-input-number--increase">\n					<i class="icon-increase"></i>\n				</span>\n				<div class="mk-input" small>\n					<input class="mk-input__inner">\n				</div>\n			</div>\n		</div>\n		<div class="gap"></div>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-input-number" mini>\n				<span class="mk-input-number--decrease">\n					<i class="icon-decrease"></i>\n				</span>\n				<span class="mk-input-number--increase">\n					<i class="icon-increase"></i>\n				</span>\n				<div class="mk-input" mini>\n					<input class="mk-input__inner">\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_input-number').html(input_number());

	$(document).on('click', '.mk-input-number:not(.is-disabled)>.mk-input-number--increase:not(.is-disabled)', function (e) {
		var $this = $(this);
		var $inp = $this.siblings('.mk-input').children('.mk-input__inner');
		var precision = +$inp.data('precision') || 0;
		var val = (+$inp.val() + (+$inp.data('param_increase') || 1)).toFixed(precision);
		$inp.val(val);
	}).on('click', '.mk-input-number:not(.is-disabled)>.mk-input-number--decrease:not(.is-disabled)', function (e) {
		var $this = $(this);
		var $inp = $this.siblings('.mk-input').children('.mk-input__inner');
		var precision = +$inp.data('precision') || 0;
		var val = (+$inp.val() - (+$inp.data('param_decrease') || 1)).toFixed(precision);
		$inp.val(val);
	});
};

var input_number = require('./index.ejs');

},{"./index.ejs":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = function () {
	$(document).on('focus', 'input[usual]', function () {
		$(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual');
		$(this).closest('.input-field').addClass('focus-field__usual');
	}).on('blur', 'input[usual]', function () {
		$(this).closest('.input-field').removeClass('focus-field__usual');
		$(this).parent().parent().children('label').addClass('blur-label');
		if (this.value) return;
		$(this).parent().parent().children('label').removeClass('active-usual');
	}).on('focus', 'input[error]', function () {
		$(this).parent().parent().children('label').addClass('active-error');
	}).on('blur', 'input[error]', function () {
		if (this.value) return;
		$(this).parent().parent().children('label').removeClass('active-error');
	}).on('focus', 'textarea', function () {
		$(this).parent().parent().children('label').addClass('active-usual');
		$(this).closest('.input-field').addClass('focus-field__usual');
	}).on('blur', 'textarea', function () {
		$(this).closest('.input-field').removeClass('focus-field__usual');
		if (this.value) return;
		$(this).parent().parent().children('label').removeClass('active-usual');
	}).on('focus', 'input[withplaceholder]', function () {
		$(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual');
		$(this).closest('.input-field').addClass('focus-field__usual');
		this.placeholder = 'placeholder';
	}).on('blur', 'input[withplaceholder]', function () {
		this.placeholder = '';
		$(this).closest('.input-field').removeClass('focus-field__usual');
		$(this).parent().parent().children('label').addClass('blur-label');
		if (this.value) return;
		$(this).parent().parent().children('label').removeClass('active-usual');
	}).on('focus', 'select', function () {
		$(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual');
		$(this).closest('.input-field').addClass('focus-field__usual');
	}).on('blur', 'select', function () {
		$(this).closest('.input-field').removeClass('focus-field__usual');
		$(this).parent().parent().children('label').addClass('blur-label');
		if (this.value) return;
		$(this).parent().children('label').removeClass('active-usual');
	});

	var select_man = document.getElementById('select_man');
	var s = new Selector();
	select_man.onclick = function () {
		s.init(select_man);
	};

	$(document).on('click', '[snackbar_top_left]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, '上左', 'top-left');
	}).on('click', '[snackbar_top_center]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, '上中', 'top-center');
	}).on('click', '[snackbar_top_right]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, '上右', 'top-right');
	}).on('click', '[snackbar_bottom_left]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, '下左', 'bottom-left');
	}).on('click', '[snackbar_bottom_center]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, '下中', 'bottom-center');
	}).on('click', '[snackbar_bottom_right]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, '下右', 'bottom-right');
	}).on('click', '[snackbar_custom_success]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, 'success', '', 'success');
	}).on('click', '[snackbar_custom_error]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, 'error', '', 'error');
	}).on('click', '[snackbar_custom_warn]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, 'warn', '', 'warn');
	}).on('click', '[snackbar_custom_normal]', function (ev) {
		var target = ev.currentTarget;
		if (!target.snackbar) {
			target.snackbar = new SnackBar();
		}
		target.snackbar.single(target, 'normal', '', 'normal');
	});
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault) e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function disableScroll() {
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault;
	window.onmousewheel = document.onmousewheel = preventDefault;
	window.ontouchmove = preventDefault;
	document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
	if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}

function Selector() {}
Selector.prototype.init = function (ele) {
	var l = ele.getBoundingClientRect().left;
	var t = ele.getBoundingClientRect().top;
	var h = ele.offsetHeight;
	var arr = [].slice.call($('.miki-select__item'));
	var $miki_select = $('.miki-select');
	var $matte = $('<div class="my-matte"></div>');

	if (ele.value) {
		arr.forEach(function (e, i) {
			$(e).removeClass('miki-select__item-active');
			if (e.innerHTML === ele.value) {
				$(e).addClass('miki-select__item-active');
				if (i === 0) return;
				t -= i * 40;
			}
		});
	}
	$miki_select.data('origin_t', t);

	$('.my-matte').remove();
	$(document.body).append($matte);
	$matte.show();
	$matte.animate({ opacity: 1 });

	if ($(window).height() <= t + $miki_select.height()) {
		t = $(window).height() - $miki_select.height() - 30;
	}
	$miki_select.css({ top: t + 'px', left: l + 'px' });
	$miki_select.addClass('miki-select__active');
	bindEvent();
	disableScroll();
	function bindEvent() {
		$miki_select.off('click');
		$matte.off('click');
		$miki_select.on('click', function (ev) {
			var target = ev.target;
			ele.value = target.innerHTML;
			$miki_select.removeClass('miki-select__active');
			$matte.hide();
			ele.value = target.innerHTML;
			removeEventListener('resize', fix);
			enableScroll();
		});
		$matte.on('click', function () {
			$miki_select.removeClass('miki-select__active');
			$matte.hide();
			removeEventListener('resize', fix);
			enableScroll();
		});
		function fix() {
			var $target = $('.miki-select');
			var window_h = $(window).height();
			var target_h = $target.height();
			var origin_t = $target.data('origin_t');

			if (origin_t + target_h >= window_h) {
				$target.css({ top: window_h - 30 - target_h + 'px' });
			} else {
				$target.css({ top: origin_t + 'px' });
			}
		}
		function _throttle(fn, wait, time) {
			var previous = null;
			var timer = null;
			return function () {
				var now = new Date();
				if (!previous) previous = now;

				if (now - previous > time) {
					clearTimeout(timer);
					fn();
					previous = now;
				} else {
					clearTimeout(timer);
					timer = setTimeout(function () {
						fn();
					}, wait);
				}
			};
		}
		window.addEventListener('resize', _throttle(fix, 500, 1000));
	}
};

var SnackBar = function () {
	function SnackBar() {
		(0, _classCallCheck3.default)(this, SnackBar);
	}

	(0, _createClass3.default)(SnackBar, [{
		key: 'showSB',
		value: function showSB() {
			var that = this;
			setTimeout(function () {
				that.$dom.addClass('snackbar-enter-' + that.type);
			}, 0);
		}
	}, {
		key: 'hideSB',
		value: function hideSB() {
			var that = this;
			this.$dom.addClass('snackbar-leave-' + that.type).on('transitionend', function () {
				that.$dom.remove();
			});
		}
	}, {
		key: 'init',
		value: function init(msg, type, color) {
			this.type = type || 'bottom-left';
			this.$dom = $('<div class="snackbar-box snackbar-bottom" onselectstart="return false">\n\t\t\t\t<div class="snackbar-txt">' + msg + '</div>\n\t\t\t\t<div class="snackbar-close" close><div class="snackbar-close-btn"></div></div>\n\t\t\t\t<div class="snackbar-btn"></div>\n\t\t\t</div>');
			if (/top/.test(this.type)) {
				this.$dom = $('<div class="snackbar-box snackbar-top" onselectstart="return false">\n\t\t\t\t<div class="snackbar-txt">' + msg + '</div>\n\t\t\t\t<div class="snackbar-close" close><div class="snackbar-close-btn"></div></div>\n\t\t\t\t<div class="snackbar-btn"></div>\n\t\t\t</div>');
			}
			switch (this.type) {
				case 'top-left':
					this.$dom.css({ left: '20px' });
					break;
				case 'top-center':
					this.$dom.css({ left: '50%', marginLeft: '-125px' });
					break;
				case 'top-right':
					this.$dom.css({ right: '20px' });
					break;
				case 'bottom-center':
					this.$dom.css({ left: '50%', marginLeft: '-125px' });
					break;
				case 'bottom-right':
					this.$dom.css({ right: '20px' });
					break;
				default:
					this.$dom.css({ left: '20px' });
			}
			if (color) {
				this.$dom.addClass('custom-' + color);
			} else {
				this.$dom.addClass('custom-default');
			}
			this.$dom.insertAfter(this.$el);
			this.showSB();
			var that = this;
			this.timer = setTimeout(function () {
				clearTimeout(that.timer);
				that.hideSB();
			}, 3000);
			this.$dom.on('click', '[close]', function () {
				clearTimeout(that.timer);
				that.hideSB();
			});
		}
	}, {
		key: 'single',
		value: function single(el, msg, type, color) {
			this.$el = $(el);
			this.$el.parent().siblings().children('.snackbar-item').each(function () {
				if ($(this).next('.snackbar-box')[0]) {
					this.snackbar.hideSB();
					clearTimeout(this.snackbar.timer);
				}
			});
			if (this.$el.next('.snackbar-box')[0]) return;
			this.init(msg, type, color);
		}
	}]);
	return SnackBar;
}();

},{"babel-runtime/helpers/classCallCheck":13,"babel-runtime/helpers/createClass":14}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":12}],15:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":18,"../../modules/es6.object.define-property":32}],16:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],17:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":28}],18:[function(require,module,exports){
var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],19:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":16}],20:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":23}],21:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":24,"./_is-object":28}],22:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":18,"./_ctx":19,"./_global":24,"./_has":25,"./_hide":26}],23:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],24:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],25:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],26:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":20,"./_object-dp":29,"./_property-desc":30}],27:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":20,"./_dom-create":21,"./_fails":23}],28:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],29:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":17,"./_descriptors":20,"./_ie8-dom-define":27,"./_to-primitive":31}],30:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],31:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":28}],32:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":20,"./_export":22,"./_object-dp":29}],33:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],34:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":62,"./_wks":128}],35:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],36:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"./_is-object":70,"dup":17}],37:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":59}],38:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":117,"./_to-iobject":119,"./_to-length":120}],39:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":41,"./_ctx":50,"./_iobject":67,"./_to-length":120,"./_to-object":121}],40:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":69,"./_is-object":70,"./_wks":128}],41:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":40}],42:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":43,"./_wks":128}],43:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],44:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":35,"./_ctx":50,"./_descriptors":52,"./_for-of":59,"./_iter-define":74,"./_iter-step":76,"./_meta":82,"./_object-create":87,"./_object-dp":88,"./_redefine-all":102,"./_set-species":107,"./_validate-collection":125}],45:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":37,"./_classof":42}],46:[function(require,module,exports){
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":35,"./_an-object":36,"./_array-methods":39,"./_for-of":59,"./_has":61,"./_is-object":70,"./_meta":82,"./_redefine-all":102,"./_validate-collection":125}],47:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":35,"./_export":55,"./_fails":56,"./_for-of":59,"./_global":60,"./_inherit-if-required":65,"./_is-object":70,"./_iter-detect":75,"./_meta":82,"./_redefine":103,"./_redefine-all":102,"./_set-to-string-tag":108}],48:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],49:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":88,"./_property-desc":101}],50:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"./_a-function":33,"dup":19}],51:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],52:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"./_fails":56,"dup":20}],53:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./_global":60,"./_is-object":70,"dup":21}],54:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],55:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":48,"./_ctx":50,"./_global":60,"./_hide":62,"./_redefine":103}],56:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],57:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":36}],58:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_ctx":50,"./_is-array":69,"./_is-object":70,"./_to-length":120,"./_wks":128}],59:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":36,"./_ctx":50,"./_is-array-iter":68,"./_iter-call":72,"./_to-length":120,"./core.get-iterator-method":129}],60:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],61:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],62:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"./_descriptors":52,"./_object-dp":88,"./_property-desc":101,"dup":26}],63:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":60}],64:[function(require,module,exports){
arguments[4][27][0].apply(exports,arguments)
},{"./_descriptors":52,"./_dom-create":53,"./_fails":56,"dup":27}],65:[function(require,module,exports){
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":70,"./_set-proto":106}],66:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],67:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":43}],68:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":77,"./_wks":128}],69:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":43}],70:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],71:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":43,"./_is-object":70,"./_wks":128}],72:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":36}],73:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":62,"./_object-create":87,"./_property-desc":101,"./_set-to-string-tag":108,"./_wks":128}],74:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":55,"./_hide":62,"./_iter-create":73,"./_iterators":77,"./_library":78,"./_object-gpo":94,"./_redefine":103,"./_set-to-string-tag":108,"./_wks":128}],75:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":128}],76:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],77:[function(require,module,exports){
module.exports = {};

},{}],78:[function(require,module,exports){
module.exports = false;

},{}],79:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":81}],80:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

},{}],81:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],82:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":56,"./_has":61,"./_is-object":70,"./_object-dp":88,"./_uid":123}],83:[function(require,module,exports){
var Map = require('./es6.map');
var $export = require('./_export');
var shared = require('./_shared')('metadata');
var store = shared.store || (shared.store = new (require('./es6.weak-map'))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

},{"./_export":55,"./_shared":110,"./es6.map":130,"./es6.weak-map":132}],84:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":43,"./_global":60,"./_task":116}],85:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":33}],86:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":56,"./_iobject":67,"./_object-gops":93,"./_object-keys":96,"./_object-pie":97,"./_to-object":121}],87:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":36,"./_dom-create":53,"./_enum-bug-keys":54,"./_html":63,"./_object-dps":89,"./_shared-key":109}],88:[function(require,module,exports){
arguments[4][29][0].apply(exports,arguments)
},{"./_an-object":36,"./_descriptors":52,"./_ie8-dom-define":64,"./_to-primitive":122,"dup":29}],89:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":36,"./_descriptors":52,"./_object-dp":88,"./_object-keys":96}],90:[function(require,module,exports){
'use strict';
// Forced replacement prototype accessors methods
module.exports = require('./_library') || !require('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require('./_global')[K];
});

},{"./_fails":56,"./_global":60,"./_library":78}],91:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":52,"./_has":61,"./_ie8-dom-define":64,"./_object-pie":97,"./_property-desc":101,"./_to-iobject":119,"./_to-primitive":122}],92:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":54,"./_object-keys-internal":95}],93:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],94:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":61,"./_shared-key":109,"./_to-object":121}],95:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":38,"./_has":61,"./_shared-key":109,"./_to-iobject":119}],96:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":54,"./_object-keys-internal":95}],97:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],98:[function(require,module,exports){
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":96,"./_object-pie":97,"./_to-iobject":119}],99:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":36,"./_global":60,"./_object-gopn":92,"./_object-gops":93}],100:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],101:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],102:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":103}],103:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":48,"./_global":60,"./_has":61,"./_hide":62,"./_uid":123}],104:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":33,"./_ctx":50,"./_export":55,"./_for-of":59}],105:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":55}],106:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":36,"./_ctx":50,"./_is-object":70,"./_object-gopd":91}],107:[function(require,module,exports){
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_descriptors":52,"./_global":60,"./_object-dp":88,"./_wks":128}],108:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":61,"./_object-dp":88,"./_wks":128}],109:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":110,"./_uid":123}],110:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":48,"./_global":60,"./_library":78}],111:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":51,"./_to-integer":118}],112:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":51,"./_string-repeat":113,"./_to-length":120}],113:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_defined":51,"./_to-integer":118}],114:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":51,"./_export":55,"./_fails":56,"./_string-ws":115}],115:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],116:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":43,"./_ctx":50,"./_dom-create":53,"./_global":60,"./_html":63,"./_invoke":66}],117:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":118}],118:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],119:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":51,"./_iobject":67}],120:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":118}],121:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":51}],122:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"./_is-object":70,"dup":31}],123:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],124:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":60}],125:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":70}],126:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":48,"./_global":60,"./_library":78,"./_object-dp":88,"./_wks-ext":127}],127:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":128}],128:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":60,"./_shared":110,"./_uid":123}],129:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":42,"./_core":48,"./_iterators":77,"./_wks":128}],130:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":47,"./_collection-strong":44,"./_validate-collection":125}],131:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":47,"./_collection-strong":44,"./_validate-collection":125}],132:[function(require,module,exports){
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":39,"./_collection":47,"./_collection-weak":46,"./_fails":56,"./_is-object":70,"./_meta":82,"./_object-assign":86,"./_redefine":103,"./_validate-collection":125}],133:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_a-function":33,"./_add-to-unscopables":34,"./_array-species-create":41,"./_export":55,"./_flatten-into-array":58,"./_to-length":120,"./_to-object":121}],134:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

require('./_add-to-unscopables')('flatten');

},{"./_add-to-unscopables":34,"./_array-species-create":41,"./_export":55,"./_flatten-into-array":58,"./_to-integer":118,"./_to-length":120,"./_to-object":121}],135:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":34,"./_array-includes":38,"./_export":55}],136:[function(require,module,exports){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = require('./_export');
var microtask = require('./_microtask')();
var process = require('./_global').process;
var isNode = require('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

},{"./_cof":43,"./_export":55,"./_global":60,"./_microtask":84}],137:[function(require,module,exports){
// https://github.com/ljharb/proposal-is-error
var $export = require('./_export');
var cof = require('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});

},{"./_cof":43,"./_export":55}],138:[function(require,module,exports){
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, { global: require('./_global') });

},{"./_export":55,"./_global":60}],139:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":104}],140:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":105}],141:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":45,"./_export":55}],142:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

},{"./_export":55}],143:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

},{"./_export":55}],144:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

},{"./_export":55}],145:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var scale = require('./_math-scale');
var fround = require('./_math-fround');

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

},{"./_export":55,"./_math-fround":79,"./_math-scale":80}],146:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

},{"./_export":55}],147:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

},{"./_export":55}],148:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

},{"./_export":55}],149:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

},{"./_export":55}],150:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

},{"./_export":55}],151:[function(require,module,exports){
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { scale: require('./_math-scale') });

},{"./_export":55,"./_math-scale":80}],152:[function(require,module,exports){
// http://jfbastien.github.io/papers/Math.signbit.html
var $export = require('./_export');

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });

},{"./_export":55}],153:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

},{"./_export":55}],154:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

},{"./_a-function":33,"./_descriptors":52,"./_export":55,"./_object-dp":88,"./_object-forced-pam":90,"./_to-object":121}],155:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

},{"./_a-function":33,"./_descriptors":52,"./_export":55,"./_object-dp":88,"./_object-forced-pam":90,"./_to-object":121}],156:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":55,"./_object-to-array":98}],157:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_create-property":49,"./_export":55,"./_object-gopd":91,"./_own-keys":99,"./_to-iobject":119}],158:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_descriptors":52,"./_export":55,"./_object-forced-pam":90,"./_object-gopd":91,"./_object-gpo":94,"./_to-object":121,"./_to-primitive":122}],159:[function(require,module,exports){
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_descriptors":52,"./_export":55,"./_object-forced-pam":90,"./_object-gopd":91,"./_object-gpo":94,"./_to-object":121,"./_to-primitive":122}],160:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":55,"./_object-to-array":98}],161:[function(require,module,exports){
'use strict';
// https://github.com/zenparsing/es-observable
var $export = require('./_export');
var global = require('./_global');
var core = require('./_core');
var microtask = require('./_microtask')();
var OBSERVABLE = require('./_wks')('observable');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var anInstance = require('./_an-instance');
var redefineAll = require('./_redefine-all');
var hide = require('./_hide');
var forOf = require('./_for-of');
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

require('./_set-species')('Observable');

},{"./_a-function":33,"./_an-instance":35,"./_an-object":36,"./_core":48,"./_export":55,"./_for-of":59,"./_global":60,"./_hide":62,"./_microtask":84,"./_redefine-all":102,"./_set-species":107,"./_wks":128}],162:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":55,"./_new-promise-capability":85,"./_perform":100}],163:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });

},{"./_an-object":36,"./_metadata":83}],164:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });

},{"./_an-object":36,"./_metadata":83}],165:[function(require,module,exports){
var Set = require('./es6.set');
var from = require('./_array-from-iterable');
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./_an-object":36,"./_array-from-iterable":37,"./_metadata":83,"./_object-gpo":94,"./es6.set":131}],166:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":36,"./_metadata":83,"./_object-gpo":94}],167:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./_an-object":36,"./_metadata":83}],168:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":36,"./_metadata":83}],169:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":36,"./_metadata":83,"./_object-gpo":94}],170:[function(require,module,exports){
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_an-object":36,"./_metadata":83}],171:[function(require,module,exports){
var $metadata = require('./_metadata');
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });

},{"./_a-function":33,"./_an-object":36,"./_metadata":83}],172:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require('./_set-collection-from')('Set');

},{"./_set-collection-from":104}],173:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require('./_set-collection-of')('Set');

},{"./_set-collection-of":105}],174:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

},{"./_collection-to-json":45,"./_export":55}],175:[function(require,module,exports){
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export');
var $at = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

},{"./_export":55,"./_string-at":111}],176:[function(require,module,exports){
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export = require('./_export');
var defined = require('./_defined');
var toLength = require('./_to-length');
var isRegExp = require('./_is-regexp');
var getFlags = require('./_flags');
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

require('./_iter-create')($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

},{"./_defined":51,"./_export":55,"./_flags":57,"./_is-regexp":71,"./_iter-create":73,"./_to-length":120}],177:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":55,"./_string-pad":112,"./_user-agent":124}],178:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":55,"./_string-pad":112,"./_user-agent":124}],179:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":114}],180:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":114}],181:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":126}],182:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":126}],183:[function(require,module,exports){
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.S, 'System', { global: require('./_global') });

},{"./_export":55,"./_global":60}],184:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require('./_set-collection-from')('WeakMap');

},{"./_set-collection-from":104}],185:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require('./_set-collection-of')('WeakMap');

},{"./_set-collection-of":105}],186:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
require('./_set-collection-from')('WeakSet');

},{"./_set-collection-from":104}],187:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
require('./_set-collection-of')('WeakSet');

},{"./_set-collection-of":105}],188:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>pagination分页</h2>\n	<div class="box">\n		<h4>基础用法</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-pagination">\n				<div class="mk-pagination-item mk-pagination-item-pre"><</div>\n				<div class="mk-pagination-item">1</div>\n				<div class="mk-pagination-item  mk-pagination-item-pre-more">...</div>\n				<div class="mk-pagination-item">8</div>\n				<div class="mk-pagination-item">9</div>\n				<div class="mk-pagination-item is-active">10</div>\n				<div class="mk-pagination-item">11</div>\n				<div class="mk-pagination-item">12</div>\n				<div class="mk-pagination-item  mk-pagination-item-next-more">...</div>\n				<div class="mk-pagination-item">100</div>\n				<div class="mk-pagination-item mk-pagination-item-next">></div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],189:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_pagination').html(pagination());

	var arr = [true, 1, 'pre-more', 4, 5, 6, 7, 8, 'next-more', 100, 'true'];
	function reset(ele, arr, num, count, fn) {
		ele.innerHTML = '';
		var len = 11;
		var frag = document.createDocumentFragment();
		var item = void 0;
		if (arr[0]) {
			item = document.createElement('div');
			item.className = 'mk-pagination-item mk-pagination-item-pre';
			item.innerHTML = '<';
			frag.appendChild(item);
		} else {
			item = document.createElement('div');
			item.className = 'mk-pagination-item mk-pagination-item-pre is-disabled';
			item.innerHTML = '<';
			frag.appendChild(item);
		}

		for (var i = 1; i <= len - 2; i++) {
			item = document.createElement('div');
			if (arr[i] === 'pre-more') {
				item.className = 'mk-pagination-item mk-pagination-item-pre-more';
				item.innerHTML = '...';
				frag.appendChild(item);
				continue;
			}
			if (arr[i] === 'next-more') {
				item.className = 'mk-pagination-item mk-pagination-item-next-more';
				item.innerHTML = '...';
				frag.appendChild(item);
				continue;
			}
			if (arr[i] === num) {
				item.className = 'is-active';
			}
			item.className += ' mk-pagination-item';
			item.innerHTML = arr[i];
			frag.appendChild(item);
		}
		if (arr[len - 1]) {
			item = document.createElement('div');
			item.className = 'mk-pagination-item mk-pagination-item-next';
			item.innerHTML = '>';
		} else {
			item = document.createElement('div');
			item.className = 'mk-pagination-item mk-pagination-item-next is-disabled';
			item.innerHTML = '>';
		}
		frag.appendChild(item);
		ele.appendChild(frag);
		fn && fn(num);
	}

	$(document).on('mousemove', '.mk-pagination>.mk-pagination-item-pre-more', function (ev) {
		var target = ev.target;
		target.innerHTML = '<<';
	}).on('mousemove', '.mk-pagination>.mk-pagination-item-next-more', function (ev) {
		var target = ev.target;
		target.innerHTML = '>>';
	}).on('mouseout', '.mk-pagination>.mk-pagination-item-pre-more', function (ev) {
		var target = ev.target;
		target.innerHTML = '...';
	}).on('mouseout', '.mk-pagination>.mk-pagination-item-next-more', function (ev) {
		var target = ev.target;
		target.innerHTML = '...';
	}).on('click', '.mk-pagination>.mk-pagination-item-pre:not(.is-disabled)', function (e) {
		var num = void 0;
		var arr = [];
		var $this = $(this);
		var p = $this.parent()[0];
		var n = +$this.siblings('.mk-pagination-item.is-active').text();

		if (n > 96) {
			num = n - 1;
			arr = [true, 1, 'pre-more', 94, 95, 96, 97, 98, 99, 100, true];
		} else if (n > 6 && n <= 96) {
			num = n - 1;
			arr = [true, 1, 'pre-more', num - 2, num - 1, num, num + 1, num + 2, 'next-more', 100, true];
		} else {
			if (n === 2) {
				num = n - 1;
				arr = [false, 1, 2, 3, 4, 5, 6, 7, 'next-more', 100, true];
			} else {
				num = n - 1;
				arr = [true, 1, 2, 3, 4, 5, 6, 7, 'next-more', 100, true];
			}
		}

		return reset(p, arr, num, 100);
	}).on('click', '.mk-pagination>.mk-pagination-item-next:not(.is-disabled)', function (e) {
		var num = void 0;
		var arr = [];
		var $this = $(this);
		var p = $this.parent()[0];
		var n = +$this.siblings('.mk-pagination-item.is-active').text();
		if (n < 5) {
			num = n + 1;
			arr = [true, 1, 2, 3, 4, 5, 6, 7, 'next-more', 100, true];
		} else if (n < 99 && n >= 5) {
			if (n >= 95) {
				num = n + 1;
				arr = [true, 1, 'pre-more', 94, 95, 96, 97, 98, 99, 100, true];
			} else {
				num = n + 1;
				arr = [true, 1, 'pre-more', num - 2, num - 1, num, num + 1, num + 2, 'next-more', 100, true];
			}
		} else {
			num = 100;
			arr = [true, 1, 'pre-more', 94, 95, 96, 97, 98, 99, 100, false];
		}

		return reset(p, arr, num, 100);
	}).on('click', '.mk-pagination>.mk-pagination-item:not(.mk-pagination-item-next):not(.mk-pagination-item-next-more):not(.mk-pagination-item-pre):not(.mk-pagination-item-pre-more):not(.is-active)', function (e) {
		var $this = $(this);
		var n = +$this.text();
		var p = $this.parent()[0];
		if (n < 6) {
			arr = [true, 1, 2, 3, 4, 5, 6, 7, 'next-more', 100, true];
		} else if (n > 95) {
			arr = [true, 1, 'pre-more', 94, 95, 96, 97, 98, 99, 100, true];
		} else {
			arr = [true, 1, 'pre-more', n - 2, n - 1, n, n + 1, n + 2, 'next-more', 100, true];
		}
		if (n === 1) arr[0] = false;
		if (n === 100) arr[10] = false;
		return reset(p, arr, n, 100);
	}).on('click', '.mk-pagination>.mk-pagination-item-pre-more', function (e) {
		var num = void 0;
		var $this = $(this);
		var n = +$this.siblings('.mk-pagination-item.is-active').text();
		var p = $this.parent()[0];
		if (n < 11) {
			num = n - 5;
			arr = [true, 1, 2, 3, 4, 5, 6, 7, 'next-more', 100, true];
		} else {
			num = n - 5;
			arr = [true, 1, 'pre-more', num - 2, num - 1, num, num + 1, num + 2, 'next-more', 100, true];
		}
		if (num === 1) arr[0] = false;
		return reset(p, arr, num, 100);
	}).on('click', '.mk-pagination>.mk-pagination-item-next-more', function (e) {
		var num = void 0;
		var $this = $(this);
		var n = +$this.siblings('.mk-pagination-item.is-active').text();
		var p = $this.parent()[0];
		if (n <= 90) {
			num = n + 5;
			arr = [true, 1, 'pre-more', num - 2, num - 1, num, num + 1, num + 2, 'next-more', 100, true];
		} else {
			num = n + 5;
			arr = [true, 1, 'pre-more', 94, 95, 96, 97, 98, 99, 100, true];
			if (num === 100) arr[10] = false;
		}
		return reset(p, arr, num, 100);
	});
};

var pagination = require('./index.ejs');

},{"./index.ejs":188}],190:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$(document).on('click', '.mk-radio.is-disabled', function (e) {
		return;
	}).on('click', '.mk-radio', function (e) {
		var $ct = $(e.currentTarget);
		if ($ct.hasClass('is-checked')) return;
		if ($ct.hasClass('is-disabled')) return;
		$ct.siblings('.mk-radio').removeClass('is-checked');
		$ct.addClass('is-checked');
		var param = $ct.children('.mk-radio__input').children('input').val();
		$ct.trigger('show.mk.radio', param);
	}).on('click', '.mk-radio-btn', function (e) {
		var $ct = $(e.currentTarget);
		if ($ct.hasClass('is-checked')) return;
		if ($ct.hasClass('is-disabled')) return;
		$ct.siblings('.mk-radio-btn').removeClass('is-checked');
		$ct.addClass('is-checked');
		var param = $ct.children('.mk-radio-btn__input').val();
		$ct.trigger('show.mk.radio.btn', param);
	}).on('show.mk.radio.btn', function (e, param) {
		console.log(param);
	});
};

},{}],191:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>select</h2>\n	<div class="box">\n		<h4>基础用法</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-select">\n				<div class="mk-input mk-input--suffix">\n					<input class="mk-input__inner" placeholder="请选择" readonly>\n					<span class="mk-input__suffix">\n						<span class="mk-input__suffix-inner">\n							<i class="icon-down" style="color:#d1d1d1"></i>\n						</span>\n					</span>\n				</div>\n				<div class="mk-select-dp">\n					<div class="mk-select-dp-menu">\n						<div class="mk-select-dp-menu__item" data-item=1>\n							椰子鸡\n						</div>\n						<div class="mk-select-dp-menu__item" data-item=2>\n							烤鱼\n						</div>\n						<div class="mk-select-dp-menu__item" data-item=3>\n							烤肉\n						</div>\n						<div class="mk-select-dp-menu__item" data-item=4>\n							火锅\n						</div>\n						<div class="mk-select-dp-menu__item">\n							基围虾\n						</div>\n						<div class="mk-select-dp-menu__item">\n							小龙虾\n						</div>\n						<div class="mk-select-dp-menu__item">\n							皮皮虾\n						</div>\n						<div class="mk-select-dp-menu__item">\n							澳洲大龙虾\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>有禁用选项</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-select">\n				<div class="mk-input mk-input--suffix">\n					<input class="mk-input__inner" placeholder="请选择" readonly>\n					<span class="mk-input__suffix">\n						<span class="mk-input__suffix-inner">\n							<i class="icon-down" style="color:#d1d1d1"></i>\n						</span>\n					</span>\n				</div>\n				<div class="mk-select-dp">\n					<div class="mk-select-dp-menu">\n						<div class="mk-select-dp-menu__item">\n							椰子鸡\n						</div>\n						<div class="mk-select-dp-menu__item is-disabled">\n							烤鱼\n						</div>\n						<div class="mk-select-dp-menu__item">\n							烤肉\n						</div>\n						<div class="mk-select-dp-menu__item">\n							火锅\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>禁用状态</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-select is-disabled">\n				<div class="mk-input is-disabled mk-input--suffix">\n					<input class="mk-input__inner" placeholder="请选择" readonly>\n					<span class="mk-input__suffix">\n						<span class="mk-input__suffix-inner">\n							<i class="icon-down" style="color:#d1d1d1"></i>\n						</span>\n					</span>\n				</div>\n				<div class="mk-select-dp">\n					<div class="mk-select-dp-menu">\n						<div class="mk-select-dp-menu__item">\n							椰子鸡\n						</div>\n						<div class="mk-select-dp-menu__item">\n							烤鱼\n						</div>\n						<div class="mk-select-dp-menu__item">\n							烤肉\n						</div>\n						<div class="mk-select-dp-menu__item">\n							火锅\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>远程搜索</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-select search">\n				<div class="mk-input">\n					<input class="mk-input__inner" placeholder="请输入关键字">\n				</div>\n				<div class="mk-select-dp">\n					<div class="mk-select-dp-menu"></div>\n				</div>\n			</div>\n		</div>\n		<!-- <div class="gap-3times"></div>\n		<h4>基础多选</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-select more">\n				<div class="mk-select__tags"></div>\n				<div class="mk-input mk-input--suffix">\n					<input class="mk-input__inner" placeholder="请选择" readonly>\n					<span class="mk-input__suffix">\n						<span class="mk-input__suffix-inner">\n							<i class="icon-down" style="color:#d1d1d1"></i>\n						</span>\n					</span>\n				</div>\n				<div class="mk-select-dp more">\n					<div class="mk-select-dp-menu">\n						<div class="mk-select-dp-menu__item">\n							椰子鸡dhfjahfkadjkafkajsd\n						</div>\n						<div class="mk-select-dp-menu__item">\n							烤鱼\n						</div>\n						<div class="mk-select-dp-menu__item">\n							烤肉\n						</div>\n						<div class="mk-select-dp-menu__item">\n							火锅\n						</div>\n					</div>\n				</div>\n			</div>\n		</div> -->\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],192:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	function init(dp, inp, choose) {
		var $dp = dp instanceof $ ? dp : $(dp);
		var $inp = inp instanceof $ ? inp : $(inp);
		var $child = $dp.children('.mk-select-dp-menu');
		var $item = $child.children('.mk-select-dp-menu__item');
		var text = $inp.val().trim();
		$item.off('click');
		$child.show();
		$item.each(function (i, e) {
			if (e.innerText === text) {
				$(e).addClass('is-checked');
			} else {
				$(e).removeClass('is-checked');
			}
		});

		$child.on('click', '.mk-select-dp-menu__item', function (e) {
			var $this = $(this);
			if (!$this.hasClass('is-disabled')) {
				$this.trigger('show.mk.select.dp', this.innerText.trim());
			} else if ($this.hasClass('is-disabled')) {
				return;
			}
			$inp.val(this.innerText.trim());
			$child.hide();
			$('.matte').remove();
		});
		$(document.body).append('<div class="matte"></div>');
	}
	$('#js_select').html(select());
	$(document).on('click', '.mk-select:not(.is-disabled):not(.search)', function (e) {
		var $t = $(e.target);
		if ($t.hasClass('mk-select-dp')) return;
		if ($t.hasClass('mk-select-dp-menu')) return;
		if ($t.hasClass('mk-select-dp-menu__item')) return;
		var $this = $(this);
		var $i = $this.children('.mk-input').children('.mk-input__suffix').children('.mk-input__suffix-inner');
		var $dp = $this.children('.mk-select-dp');
		var $inp = $this.children('.mk-input').children('.mk-input__inner');
		var choose = $inp.data('choose');

		if ($i.hasClass('down')) {
			$i.removeClass('down');
		} else {
			$i.addClass('down');
		}
		init($dp, $inp);
	}).on('focus', '.mk-select.search>.mk-input>.mk-input__inner', function (e) {
		var $this = $(this);
		var arr = ['china', 'usa', 'uk', 'korea', 'japan'];
		var val = $this.val();

		var $dp = $this.parent().siblings('.mk-select-dp');

		var tmp = arr.filter(function (e) {
			return new RegExp(val, 'i').test(e);
		});
		var str = '';
		tmp.forEach(function (e) {
			str += '<div class="mk-select-dp-menu__item">' + e + '</div>';
		});
		setTimeout(function () {
			if (!str) {
				$dp.children('.mk-select-dp-menu').html('<div style="text-align: center;color: #888;">\u65E0\u6570\u636E</div>');
			} else {
				$dp.children('.mk-select-dp-menu').html(str);
				$dp.children('.mk-select-dp-menu').on('click', '.mk-select-dp-menu__item', function (e) {
					$this.val(this.innerText);
					$dp.children('.mk-select-dp-menu').hide();
				});
				$dp.children('.mk-select-dp-menu').css('display', 'block');
			}
		}, 100);
		$(document.body).append('<div class="matte"></div>');
	}).on('input', '.mk-select.search>.mk-input>.mk-input__inner', function (e) {
		var $this = $(this);
		var arr = ['china', 'usa', 'uk', 'korea', 'japan'];
		var val = $this.val();

		var $dp = $this.parent().siblings('.mk-select-dp');

		var tmp = arr.filter(function (e) {
			return new RegExp(val, 'i').test(e);
		});
		var str = '';
		tmp.forEach(function (e) {
			str += '<div class="mk-select-dp-menu__item">' + e + '</div>';
		});
		setTimeout(function () {
			if (!str) {
				$dp.children('.mk-select-dp-menu').html('<div style="text-align: center;color: #888;">\u65E0\u6570\u636E</div>');
			} else {
				$dp.children('.mk-select-dp-menu').html(str);
				$dp.children('.mk-select-dp-menu').on('click', '.mk-select-dp-menu__item', function (e) {
					$this.val(this.innerText);
					$dp.children('.mk-select-dp-menu').hide();
				});
				$dp.children('.mk-select-dp-menu').css('display', 'block');
			}
		}, 100);
	}).on('keypress', '.mk-select.search>.mk-input>.mk-input__inner', function (e) {
		var $this = $(this);

		var $dp = $this.parent().siblings('.mk-select-dp');
		if (e.keyCode === 13) {
			$dp.children('.mk-select-dp-menu').css('display', 'none');
		}
	}).on('click', '.matte', function () {
		$('.mk-select-dp-menu').hide();
		this.remove();
	}).on('show.mk.select.dp', function (e, v) {
		console.log(v);
	});
};

var select = require('./index.ejs');

},{"./index.ejs":191}],193:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>slider</h2>\n	<div class="box">\n		<h4>基础用法</h4>\n		<div style="margin-top: 10px;border: 1px solid #e2e4e8;padding: 30px 20px;">\n			<div class="mk-wrap type-normal gap-3times">\n				<div class="mk-slider">\n					<div class="mk-slider__runway">\n						<div class="mk-slider__tip"></div>\n						<div class="mk-slider__bar"></div>\n						<div class="mk-slider__btn"></div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>隐藏tip</h4>\n		<div style="margin-top: 10px;border: 1px solid #e2e4e8;padding: 30px 20px;">\n			<div class="mk-wrap type-normal gap-3times">\n				<div class="mk-slider is-notip">\n					<div class="mk-slider__runway">\n						<div class="mk-slider__tip"></div>\n						<div class="mk-slider__bar"></div>\n						<div class="mk-slider__btn"></div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>自定义初始值</h4>\n		<div style="margin-top: 10px;border: 1px solid #e2e4e8;padding: 30px 20px;">\n			<div class="mk-wrap type-normal gap-3times">\n				<div class="mk-slider" data-w="200">\n					<div class="mk-slider__runway">\n						<div class="mk-slider__tip"></div>\n						<div class="mk-slider__bar"></div>\n						<div class="mk-slider__btn"></div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],194:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_slider').html(slider());

	function setVal(ele, val) {
		ele.style.width = val + 'px';
	}
	function init() {
		$('.mk-slider').each(function (i, e) {
			var $e = $(e);
			var w = $e.data('w');
			var $child = $e.children('.mk-slider__runway');

			$child.children('.mk-slider__bar').width(w);
			$child.children('.mk-slider__btn').css('left', w - 7);
			$child.children('.mk-slider__tip').css('left', w - 15);
		});
	}
	init();
	$(document).on('mouseenter', '.mk-slider:not(.is-notip)>.mk-slider__runway>.mk-slider__btn', function (e) {
		var $this = $(this);
		var w = $this.siblings('.mk-slider__bar')[0].offsetWidth;
		$this.siblings('.mk-slider__tip').html(Math.floor(w / 4));
		$this.siblings('.mk-slider__tip').show();
	}).on('mousedown', '.mk-slider>.mk-slider__runway>.mk-slider__btn', function (e) {
		var $this = $(this);
		var that = this;
		var origin_btn = offset(that).left;
		var origin_mouse = e.clientX;
		var w = $this.parent()[0].offsetWidth;
		$this.addClass('is-hover');
		$(document).on('mousemove', function (e) {
			var dx = e.clientX - origin_mouse;
			var x = e.clientX - origin_btn;
			if (x > w - 7) x = w - 7;
			if (x < -7) x = -7;
			$this.css('left', x);
			$this.siblings('.mk-slider__bar').width(x + 7);
			$this.siblings('.mk-slider__tip').css('left', x + 7 - 15);
			$this.siblings('.mk-slider__tip').html(Math.floor((x + 7) / 4));
		});
		$(document).on('mouseup', function (e) {
			$(document).off('mousemove');
			$(document).off('mouseup');
			$this.removeClass('is-hover');
			$this.siblings('.mk-slider__tip').hide();
			var param = $this.siblings('.mk-slider__tip')[0].innerText;
			$this.trigger('show.mk.slider', param);
		});
	});
};

var slider = require('./index.ejs');

},{"./index.ejs":193}],195:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>switch</h2>\n	<div class="box">\n		<h4>基础用法</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-switch">\n				<span class="mk-switch__core"></span>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>禁用状态</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-switch is-disabled">\n				<span class="mk-switch__core"></span>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],196:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_switch').html(s());

	$(document).on('click', '.mk-switch', function (e) {
		var $this = $(this);
		if ($this.hasClass('is-disabled')) return;
		if ($this.hasClass('is-checked')) {
			$this.removeClass('is-checked');
		} else {
			$(this).addClass('is-checked');
		}
	});
};

var s = require('./index.ejs');

},{"./index.ejs":195}],197:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2 id="time-line">timeLine</h2>\n	<div class="box">\n		<h4>基本用法</h4>\n		<div class="mk-wrap gap">\n			<div class="mk-tl">\n				<div class="mk-tl-item">\n					<div class="mk-tl-item__tail"></div>\n					<div class="mk-tl-item__primary"></div>\n					<div class="mk-tl-item__wrap">\n						<div class="" style="line-height:16px;font-size:14px;padding-bottom:5px;">\n							大学\n						</div>\n						<div class="" style="line-height:16px;font-size:14px;padding-top:5px;padding-bottom:5px;color:#a5a5a5;">\n							2000-2004\n						</div>\n					</div>\n				</div>\n				<div class="mk-tl-item">\n					<div class="mk-tl-item__tail"></div>\n					<div class="mk-tl-item__primary"></div>\n					<div class="mk-tl-item__wrap">\n						<div class="" style="line-height:16px;font-size:14px;padding-bottom:5px;">\n							中学\n						</div>\n						<div class="" style="line-height:16px;font-size:14px;padding-top:5px;padding-bottom:5px;color:#a5a5a5;">\n							1994-2000\n						</div>\n					</div>\n				</div>\n				<div class="mk-tl-item">\n					<div class="mk-tl-item__tail"></div>\n					<div class="mk-tl-item__primary"></div>\n					<div class="mk-tl-item__wrap">\n						<div class="">\n							小学\n						</div>\n					</div>\n				</div>\n				<div class="mk-tl-item">\n					<div class="mk-tl-item__tail"></div>\n					<div class="mk-tl-item__primary"></div>\n					<div class="mk-tl-item__wrap">\n						<div class="">\n							幼儿园\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>有方框</h4>\n		<div class="mk-wrap gap">\n			<div class="mk-tl">\n				<div class="mk-tl-item">\n					<div class="mk-tl-item__tail"></div>\n					<div class="mk-tl-item__primary"></div>\n					<div class="mk-tl-item__wrap">\n						<div class="mk-tl-item__wrap-title">\n							2000-2004\n						</div>\n						<div class="mk-tl-item__wrap-box">\n							<div style="padding:10px 20px;"> i have a dream</div>\n						</div>\n					</div>\n				</div>\n				<div class="mk-tl-item">\n					<div class="mk-tl-item__tail"></div>\n					<div class="mk-tl-item__primary"></div>\n					<div class="mk-tl-item__wrap">\n						<div class="mk-tl-item__wrap-title">\n							1994-2000\n						</div>\n						<div class="mk-tl-item__wrap-box">\n							<div style="padding:10px 20px;"> i have a dream</div>\n						</div>\n					</div>\n				</div>\n				<div class="mk-tl-item">\n					<div class="mk-tl-item__tail"></div>\n					<div class="mk-tl-item__primary"></div>\n					<div class="mk-tl-item__wrap">\n						<div class="mk-tl-item__wrap-title">\n							1988-1994\n						</div>\n						<div class="mk-tl-item__wrap-box">\n							<div style="padding:10px 20px;"> i have a dream</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],198:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_time_line').html(tl());
};

var tl = require('./index.ejs');

},{"./index.ejs":197}],199:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>timePicker</h2>\n	<div class="box">\n		<h4>固定时间点</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-tp">\n				<div class="mk-select">\n					<div class="mk-input mk-input--prefix">\n						<input class="mk-input__inner" placeholder="请选择" readonly>\n						<span class="mk-input__prefix">\n							<span class="mk-input__prefix-inner">\n								<i class="icon-clock" style="color:#d1d1d1"></i>\n							</span>\n						</span>\n					</div>\n					<div class="mk-select-dp">\n						<div class="mk-select-dp-menu" id="js_time__fix"></div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>任意时间点</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-tp">\n				<div class="mk-input mk-input--prefix" style="width: 240px;">\n					<input class="mk-input__inner" placeholder="请选择" readonly>\n					<span class="mk-input__prefix">\n						<span class="mk-input__prefix-inner">\n							<i class="icon-clock" style="color:#d1d1d1"></i>\n						</span>\n					</span>\n				</div>\n				<div class="mk-tp-dp">\n					<div class="mk-tp-dp__box"></div>\n					<div class="mk-tp-dp-menu" data-max=24>\n						<div class="mk-tp-dp-btn__up">\n							<i class="icon-up"></i>\n						</div>\n						<div class="mk-tp-dp-menu__item">01</div>\n						<div class="mk-tp-dp-menu__item is-checked">02</div>\n						<div class="mk-tp-dp-menu__item">03</div>\n						<div class="mk-tp-dp-btn__down">\n							<i class="icon-down"></i>\n						</div>\n					</div>\n					<div class="mk-tp-dp-menu">\n						<div class="mk-tp-dp-btn__up">\n							<i class="icon-up"></i>\n						</div>\n						<div class="mk-tp-dp-menu__item">01</div>\n						<div class="mk-tp-dp-menu__item is-checked">02</div>\n						<div class="mk-tp-dp-menu__item">03</div>\n						<div class="mk-tp-dp-btn__down">\n							<i class="icon-down"></i>\n						</div>\n					</div>\n					<div class="mk-tp-dp-menu">\n						<div class="mk-tp-dp-btn__up">\n							<i class="icon-up"></i>\n						</div>\n						<div class="mk-tp-dp-menu__item">01</div>\n						<div class="mk-tp-dp-menu__item is-checked">02</div>\n						<div class="mk-tp-dp-menu__item">03</div>\n						<div class="mk-tp-dp-btn__down">\n							<i class="icon-down"></i>\n						</div>\n					</div>\n					<div class="mk-tp-dp__set">\n						<div class="mk-tp-dp__set-cancel">\n							取消\n						</div>\n						<div class="mk-tp-dp__set-confirm">\n							确定\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n		<div class="gap-3times"></div>\n		<h4>开始结束时间</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-tp"  style="display:inline-block;margin-right:10px;" id="js_tp_begin">\n				<div class="mk-select">\n					<div class="mk-input mk-input--prefix">\n						<input class="mk-input__inner" placeholder="开始时间" readonly>\n						<span class="mk-input__prefix">\n							<span class="mk-input__prefix-inner">\n								<i class="icon-clock" style="color:#d1d1d1"></i>\n							</span>\n						</span>\n					</div>\n					<div class="mk-select-dp">\n						<div class="mk-select-dp-menu">\n							<div class="mk-select-dp-menu__item">08:00</div>\n							<div class="mk-select-dp-menu__item">08:15</div>\n							<div class="mk-select-dp-menu__item">08:30</div>\n							<div class="mk-select-dp-menu__item">08:45</div>\n							<div class="mk-select-dp-menu__item">09:00</div>\n							<div class="mk-select-dp-menu__item">09:15</div>\n							<div class="mk-select-dp-menu__item">09:30</div>\n							<div class="mk-select-dp-menu__item">09:45</div>\n							<div class="mk-select-dp-menu__item">10:00</div>\n							<div class="mk-select-dp-menu__item">10:15</div>\n							<div class="mk-select-dp-menu__item">10:30</div>\n							<div class="mk-select-dp-menu__item">10:45</div>\n							<div class="mk-select-dp-menu__item">11:00</div>\n						</div>\n					</div>\n				</div>\n			</div>\n			<div class="mk-tp" style="display:inline-block;" id="js_tp_end">\n				<div class="mk-select">\n					<div class="mk-input mk-input--prefix">\n						<input class="mk-input__inner" placeholder="结束时间" readonly>\n						<span class="mk-input__prefix">\n							<span class="mk-input__prefix-inner">\n								<i class="icon-clock" style="color:#d1d1d1"></i>\n							</span>\n						</span>\n					</div>\n					<div class="mk-select-dp">\n						<div class="mk-select-dp-menu">\n							<div class="mk-select-dp-menu__item">08:00</div>\n							<div class="mk-select-dp-menu__item">08:15</div>\n							<div class="mk-select-dp-menu__item">08:30</div>\n							<div class="mk-select-dp-menu__item">08:45</div>\n							<div class="mk-select-dp-menu__item">09:00</div>\n							<div class="mk-select-dp-menu__item">09:15</div>\n							<div class="mk-select-dp-menu__item">09:30</div>\n							<div class="mk-select-dp-menu__item">09:45</div>\n							<div class="mk-select-dp-menu__item">10:00</div>\n							<div class="mk-select-dp-menu__item">10:15</div>\n							<div class="mk-select-dp-menu__item">10:30</div>\n							<div class="mk-select-dp-menu__item">10:45</div>\n							<div class="mk-select-dp-menu__item">11:00</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],200:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_tp').html(tp());
	init();

	$(document).on('click', '.mk-tp>.mk-input>.mk-input__inner', function (e) {
		var $this = $(this);
		var $dp = $this.parent().parent().children('.mk-tp-dp');
		$dp.show();
		$(document.body).append('<div class="matte"></div>');
	}).on('click', '.mk-tp>.mk-tp-dp>.mk-tp-dp-menu>.mk-tp-dp-btn__up', function (e) {
		var $this = $(this);
		var m = +$this.parent().data('max') || 60;
		var $item = $this.siblings('.mk-tp-dp-menu__item');
		var v = +$item[1].innerText;
		if (v === 1) {
			v--;
			$($item[0]).html(m - 1 > 9 ? m - 1 : '0' + (m - 1));
			$($item[1]).html(v > 9 ? v : '0' + v);
			$($item[2]).html(v + 1 > 9 ? v + 1 : '0' + (v + 1));
		} else if (v === 0) {
			v = m - 1;
			$($item[0]).html(v - 1 > 9 ? v - 1 : '0' + (v - 1));
			$($item[1]).html(v > 9 ? v : '0' + v);
			$($item[2]).html('00');
		} else {
			v--;
			$($item[0]).html(v - 1 > 9 ? v - 1 : '0' + (v - 1));
			$($item[1]).html(v > 9 ? v : '0' + v);
			$($item[2]).html(v + 1 > 9 ? v + 1 : '0' + (v + 1));
		}
	}).on('click', '.mk-tp>.mk-tp-dp>.mk-tp-dp-menu>.mk-tp-dp-btn__down', function (e) {
		var $this = $(this);
		var m = +$this.parent().data('max') || 60;
		var $item = $this.siblings('.mk-tp-dp-menu__item');
		var v = +$item[1].innerText;
		if (v < m - 2) {
			v++;
			$($item[0]).html(v - 1 > 9 ? v - 1 : '0' + (v - 1));
			$($item[1]).html(v > 9 ? v : '0' + v);
			$($item[2]).html(v + 1 > 9 ? v + 1 : '0' + (v + 1));
		} else {
			v = 0;
			$($item[0]).html(m - 1 > 9 ? m - 1 : '0' + (m - 1));
			$($item[1]).html(v > 9 ? v : '0' + v);
			$($item[2]).html(v + 1 > 9 ? v + 1 : '0' + (v + 1));
		}
	}).on('click', '.mk-tp-dp__set>.mk-tp-dp__set-cancel', function (e) {
		$(this).parent().parent().hide();
		$('.matte').remove();
	}).on('click', '.mk-tp-dp__set>.mk-tp-dp__set-confirm', function (e) {
		var $this = $(this);
		var str = '';
		$this.parent().siblings('.mk-tp-dp-menu').each(function (i, e) {
			str += $(e).children('.mk-tp-dp-menu__item')[1].innerText + ':';
		});
		str = str.substring(0, str.length - 1);
		$this.parent().parent().siblings('.mk-input').children('.mk-input__inner').val(str);
		$(this).parent().parent().hide();
		$('.matte').remove();
	}).on('click', '#js_tp_end', function (e) {
		var $this = $(this);
		var $begin = $('#js_tp_begin');
		var val = $begin.children('.mk-select').children('.mk-input').children('.mk-input__inner').val();
		var arr = [];
		var str = '';
		if (val) {
			arr = val.split(':');
		}
		var items = $this.children('.mk-select').children('.mk-select-dp').children('.mk-select-dp-menu').children('.mk-select-dp-menu__item');
		for (var k = 0; k < items.length; k++) {
			var tmp = items[k].innerText.split(':');
			if (+tmp[0] < +arr[0]) $(items[k]).addClass('is-disabled');
			if (+tmp[0] === +arr[0] && +tmp[1] <= +arr[1]) $(items[k]).addClass('is-disabled');
		}
	}).on('click', '.matte', function () {
		$(this).remove();
		$('.mk-tp-dp').hide();
	});
	function init() {
		var str = '';
		for (var i = 0; i < 24; i++) {
			for (var j = 0; j < 60; j += 15) {
				var ii = i;
				var jj = j;
				if (i < 10) ii = '0' + i;
				if (j < 10) jj = '0' + j;
				str += '<div class="mk-select-dp-menu__item">' + ii + ':' + jj + '</div>';
			}
		}
		$('#js_time__fix').html(str);
		$('#js_tp_begin').children('.mk-select').children('.mk-select-dp').children('.mk-select-dp-menu').html(str);
		$('#js_tp_end').children('.mk-select').children('.mk-select-dp').children('.mk-select-dp-menu').html(str);
	}
};

var tp = require('./index.ejs');

},{"./index.ejs":199}],201:[function(require,module,exports){
module.exports = (function anonymous(locals, filters, escape, rethrow
/*``*/) {
escape = escape || function (html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="out">\n	<h2>upload</h2>\n	<div class="box">\n		<h4>点击上传</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-upload">\n				<button type="button" name="button" id="upload-btn" class="mk-upload-btn">点击上传</button>\n				<input type="file" name="" value="" id="file" style="display:none;">\n				<div class="mk-upload-menu" id="file-box">\n				</div>\n			</div>\n		</div>\n		<div class="gap-5times"></div>\n		<h4>用户上传头像</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-upload">\n				<div class="mk-upload-box">\n					<i class="icon-plus"></i>\n				</div>\n				<input class="mk-upload-input" type="file" name="" value=""  style="display:none;">\n			</div>\n		</div>\n		<div class="gap-5times"></div>\n		<h4>图片列表缩略图</h4>\n		<div class="mk-wrap type-normal gap">\n			<div class="mk-upload">\n				<button type="button" name="button" class="mk-upload-btn">点击上传</button>\n				<input type="file" name="" value="" style="display:none;">\n				<div class="gap-3times"></div>\n				<div class="mk-upload-list"></div>\n			</div>\n		</div>\n	</div>\n</div>\n'); })();
} 
return buf.join('');
})
},{}],202:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$('#js_upload').html(upload());

	$(document).on('click', '.mk-upload>.mk-upload-btn', function (e) {
		$(this).siblings('input').click();
	}).on('change', '.mk-upload>input:not(.mk-upload-input)', function (e) {
		var $this = $(this);
		var file = this.files[0];
		var str = '';
		var $sibling = $(this).siblings('.mk-upload-menu');
		if ($sibling.length) {
			$sibling.append('<div class="mk-upload-menu-item"><i class="icon-document"></i><span class="mk-upload-menu-item_name">' + file.name + '</span></div>');
		} else {
			var reader = new FileReader();
			if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
				alert('不是有效的图片文件!');
				return;
			}
			reader.onload = function (e) {
				var data = e.target.result;
				$this.siblings('.mk-upload-list').append('<div class="mk-upload-list__item">\n\t\t\t\t\t<div class="img-box" style="background-image: url(' + data + ')"></div>\n\t\t\t\t\t<div class="text">' + file.name + '</div>\n\t\t\t\t\t<div class="tag"></div>\n\t\t\t\t\t</div>');
			};
			reader.readAsDataURL(file);
		}
		$.ajax({
			url: '/upload/token',
			type: 'get',
			dataType: 'json',
			success: function success(res) {
				if (res.code === 0) {
					var token = void 0;
					var fd = new FormData();
					token = res.data.token;
					fd.append('token', token);
					fd.append('file', file);
					$.ajax({
						url: 'http://up-z2.qiniup.com',
						type: 'post',
						data: fd,
						contentType: false,
						processData: false,
						success: function success(res) {
							console.log('上传成功');
						},
						error: function error(e) {
							alert('上传出错!');
						}
					});
				} else {
					alert('获取上传凭证错误');
				}
			}
		});
	}).on('click', '.mk-upload>.mk-upload-box', function (e) {
		var $this = $(this);
		$this.siblings('.mk-upload-input').click();
	}).on('change', '.mk-upload>.mk-upload-input', function (e) {
		var file = this.files[0];
		var $this = $(this);
		var reader = new FileReader();
		if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
			alert('不是有效的图片文件!');
			return;
		}
		reader.onload = function (e) {
			var data = e.target.result;
			$this.siblings('.mk-upload-box').html('');
			$this.siblings('.mk-upload-box').css('backgroundImage', 'url(' + data + ')');
		};
		reader.readAsDataURL(file);
	});
};

var upload = require('./index.ejs');

},{"./index.ejs":201}],"core-js/es7":[function(require,module,exports){
require('../modules/es7.array.includes');
require('../modules/es7.array.flat-map');
require('../modules/es7.array.flatten');
require('../modules/es7.string.at');
require('../modules/es7.string.pad-start');
require('../modules/es7.string.pad-end');
require('../modules/es7.string.trim-left');
require('../modules/es7.string.trim-right');
require('../modules/es7.string.match-all');
require('../modules/es7.symbol.async-iterator');
require('../modules/es7.symbol.observable');
require('../modules/es7.object.get-own-property-descriptors');
require('../modules/es7.object.values');
require('../modules/es7.object.entries');
require('../modules/es7.object.define-getter');
require('../modules/es7.object.define-setter');
require('../modules/es7.object.lookup-getter');
require('../modules/es7.object.lookup-setter');
require('../modules/es7.map.to-json');
require('../modules/es7.set.to-json');
require('../modules/es7.map.of');
require('../modules/es7.set.of');
require('../modules/es7.weak-map.of');
require('../modules/es7.weak-set.of');
require('../modules/es7.map.from');
require('../modules/es7.set.from');
require('../modules/es7.weak-map.from');
require('../modules/es7.weak-set.from');
require('../modules/es7.global');
require('../modules/es7.system.global');
require('../modules/es7.error.is-error');
require('../modules/es7.math.clamp');
require('../modules/es7.math.deg-per-rad');
require('../modules/es7.math.degrees');
require('../modules/es7.math.fscale');
require('../modules/es7.math.iaddh');
require('../modules/es7.math.isubh');
require('../modules/es7.math.imulh');
require('../modules/es7.math.rad-per-deg');
require('../modules/es7.math.radians');
require('../modules/es7.math.scale');
require('../modules/es7.math.umulh');
require('../modules/es7.math.signbit');
require('../modules/es7.promise.try');
require('../modules/es7.reflect.define-metadata');
require('../modules/es7.reflect.delete-metadata');
require('../modules/es7.reflect.get-metadata');
require('../modules/es7.reflect.get-metadata-keys');
require('../modules/es7.reflect.get-own-metadata');
require('../modules/es7.reflect.get-own-metadata-keys');
require('../modules/es7.reflect.has-metadata');
require('../modules/es7.reflect.has-own-metadata');
require('../modules/es7.reflect.metadata');
require('../modules/es7.asap');
require('../modules/es7.observable');
module.exports = require('../modules/_core');

},{"../modules/_core":48,"../modules/es7.array.flat-map":133,"../modules/es7.array.flatten":134,"../modules/es7.array.includes":135,"../modules/es7.asap":136,"../modules/es7.error.is-error":137,"../modules/es7.global":138,"../modules/es7.map.from":139,"../modules/es7.map.of":140,"../modules/es7.map.to-json":141,"../modules/es7.math.clamp":142,"../modules/es7.math.deg-per-rad":143,"../modules/es7.math.degrees":144,"../modules/es7.math.fscale":145,"../modules/es7.math.iaddh":146,"../modules/es7.math.imulh":147,"../modules/es7.math.isubh":148,"../modules/es7.math.rad-per-deg":149,"../modules/es7.math.radians":150,"../modules/es7.math.scale":151,"../modules/es7.math.signbit":152,"../modules/es7.math.umulh":153,"../modules/es7.object.define-getter":154,"../modules/es7.object.define-setter":155,"../modules/es7.object.entries":156,"../modules/es7.object.get-own-property-descriptors":157,"../modules/es7.object.lookup-getter":158,"../modules/es7.object.lookup-setter":159,"../modules/es7.object.values":160,"../modules/es7.observable":161,"../modules/es7.promise.try":162,"../modules/es7.reflect.define-metadata":163,"../modules/es7.reflect.delete-metadata":164,"../modules/es7.reflect.get-metadata":166,"../modules/es7.reflect.get-metadata-keys":165,"../modules/es7.reflect.get-own-metadata":168,"../modules/es7.reflect.get-own-metadata-keys":167,"../modules/es7.reflect.has-metadata":169,"../modules/es7.reflect.has-own-metadata":170,"../modules/es7.reflect.metadata":171,"../modules/es7.set.from":172,"../modules/es7.set.of":173,"../modules/es7.set.to-json":174,"../modules/es7.string.at":175,"../modules/es7.string.match-all":176,"../modules/es7.string.pad-end":177,"../modules/es7.string.pad-start":178,"../modules/es7.string.trim-left":179,"../modules/es7.string.trim-right":180,"../modules/es7.symbol.async-iterator":181,"../modules/es7.symbol.observable":182,"../modules/es7.system.global":183,"../modules/es7.weak-map.from":184,"../modules/es7.weak-map.of":185,"../modules/es7.weak-set.from":186,"../modules/es7.weak-set.of":187}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjaGVja2JveC9jaGVja2JveC5qcyIsImNvbG9yUGlja2VyL2NvbG9yUGlja2VyLmpzIiwiY29sb3JQaWNrZXIvaW5kZXguZWpzIiwiZHAvZHAuanMiLCJkcC9pbmRleC5lanMiLCJmaWxlLXRyZWUvZmlsZVRyZWUuanMiLCJpbmRleC5qcyIsImlucHV0L2lucHV0LmpzIiwiaW5wdXROdW1iZXIvaW5kZXguZWpzIiwiaW5wdXROdW1iZXIvaW5wdXROdW1iZXIuanMiLCJtYXRlcmlhbC11aS9tYXRlcmlhbC11aS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZnJvbS1pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24td2Vhay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhdHRlbi1pbnRvLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21hdGgtZnJvdW5kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWF0aC1zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21hdGgtc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhZGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZm9yY2VkLXBhbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX293bi1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcGFkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXJlcGVhdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXdzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmZsYXQtbWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuZmxhdHRlbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuYXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LmVycm9yLmlzLWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAub2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguY2xhbXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmRlZy1wZXItcmFkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5kZWdyZWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5mc2NhbGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLmlhZGRoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pbXVsaC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguaXN1YmguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXRoLnJhZC1wZXItZGVnLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5yYWRpYW5zLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguc2lnbmJpdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGgudW11bGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtZ2V0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0Lmxvb2t1cC1zZXR0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1vd24tbWV0YWRhdGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQub2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5tYXRjaC1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWVuZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtc3RhcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5c3RlbS5nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy53ZWFrLW1hcC5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcud2Vhay1tYXAub2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy53ZWFrLXNldC5mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcud2Vhay1zZXQub2YuanMiLCJwYWdpbmF0aW9uL2luZGV4LmVqcyIsInBhZ2luYXRpb24vcGFnaW5hdGlvbi5qcyIsInJhZGlvL3JhZGlvLmpzIiwic2VsZWN0L2luZGV4LmVqcyIsInNlbGVjdC9zZWxlY3QuanMiLCJzbGlkZXIvaW5kZXguZWpzIiwic2xpZGVyL3NsaWRlci5qcyIsInN3aXRjaC9pbmRleC5lanMiLCJzd2l0Y2gvc3dpdGNoLmpzIiwidGltZUxpbmUvaW5kZXguZWpzIiwidGltZUxpbmUvdGltZUxpbmUuanMiLCJ0aW1lUGlja2VyL2luZGV4LmVqcyIsInRpbWVQaWNrZXIvdGltZVBpY2tlci5qcyIsInVwbG9hZC9pbmRleC5lanMiLCJ1cGxvYWQvdXBsb2FkLmpzIiwiY29yZS1qcy9lczciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7a0JDQ2UsWUFBWTtBQUMxQixHQUFFLFFBQUYsRUFDRSxFQURGLENBQ0ssT0FETCxFQUNjLHdDQURkLEVBQ3dELFVBQVUsQ0FBVixFQUFhO0FBQ25FLE1BQUksTUFBTSxFQUFFLEVBQUUsYUFBSixDQUFWO0FBQ0EsTUFBSSxLQUFLLEVBQUUsRUFBRSxNQUFKLENBQVQ7QUFDQSxNQUFJLE1BQU0sRUFBVjtBQUNBLE1BQUksR0FBRyxFQUFILENBQU0sd0JBQU4sQ0FBSixFQUFxQztBQUNyQyxNQUFJLElBQUksUUFBSixDQUFhLGFBQWIs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QUFLLElBQUwsQ0FBVSxHQUFWLEVBQWUsSUFBZixFQUFxQixLQUFyQjtBQUNBOzs7Ozs7QUNwTUY7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2NoZWNrYm94XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdCQoZG9jdW1lbnQpXG5cdFx0Lm9uKCdjbGljaycsICcubWstY2hlY2tib3g6bm90KFtkYXRhLWluZGV0ZXJtaW5hdGVdKScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJGN0ID0gJChlLmN1cnJlbnRUYXJnZXQpXG5cdFx0XHRsZXQgJHQgPSAkKGUudGFyZ2V0KVxuXHRcdFx0bGV0IGFyciA9IFtdXG5cdFx0XHRpZiAoJHQuaXMoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpKSByZXR1cm5cblx0XHRcdGlmICgkY3QuaGFzQ2xhc3MoJ2lzLWRpc2FibGVkJykpIHJldHVyblxuXHRcdFx0aWYgKCRjdC5oYXNDbGFzcygnaXMtY2hlY2tlZCcpKSB7XG5cdFx0XHRcdCRjdC5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkY3QuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKVxuXHRcdFx0XHRsZXQgaXRlbSA9ICRjdC5jaGlsZHJlbignLm1rLWNoZWNrYm94X19pbnB1dCcpLmNoaWxkcmVuKCdpbnB1dCcpLnZhbCgpXG5cdFx0XHRcdGl0ZW0gJiYgYXJyLnB1c2goaXRlbSlcblx0XHRcdH1cblx0XHRcdCRjdC5zaWJsaW5ncygnLmlzLWNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0bGV0IGl0ZW0gPSAkKHRoaXMpLmNoaWxkcmVuKCcubWstY2hlY2tib3hfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykudmFsKClcblx0XHRcdFx0aXRlbSAmJiBhcnIucHVzaChpdGVtKVxuXHRcdFx0fSlcblx0XHRcdGNvbnNvbGUubG9nKGFycilcblx0XHRcdCRjdC50cmlnZ2VyKCdzaG93Lm1rLmNoZWNrYm94JywgYXJyKVxuXHRcdH0pXG5cdFx0Lm9uKCdjbGljaycsICcubWstY2hlY2tib3hbZGF0YS1pbmRldGVybWluYXRlXScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgYXJyID0gW11cblx0XHRcdGxldCAkY3QgPSAkKGUuY3VycmVudFRhcmdldClcblx0XHRcdGxldCAkdCA9ICQoZS50YXJnZXQpXG5cdFx0XHRsZXQgaWQgPSB0aGlzLmRhdGFzZXRbJ2luZGV0ZXJtaW5hdGUnXVxuXHRcdFx0aWYgKCR0LmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkgcmV0dXJuXG5cdFx0XHRpZiAoJGN0Lmhhc0NsYXNzKCdpcy1jaGVja2VkJykpIHtcblx0XHRcdFx0JGN0LnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJylcblx0XHRcdFx0JCgnIycgKyBpZCkuY2hpbGRyZW4oJy5tay1jaGVja2JveDpub3QoXCIuaXMtZGlzYWJsZWRcIiknKS5lYWNoKCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkY3QuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKVxuXHRcdFx0XHQkKCcjJyArIGlkKS5jaGlsZHJlbignLm1rLWNoZWNrYm94Om5vdChcIi5pcy1kaXNhYmxlZFwiKScpLmVhY2goIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdpcy1jaGVja2VkJylcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdCQoJyMnICsgaWQpLmNoaWxkcmVuKCcuaXMtY2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRsZXQgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oJy5tay1jaGVja2JveF9faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS52YWwoKVxuXHRcdFx0XHRpdGVtICYmIGFyci5wdXNoKGl0ZW0pXG5cdFx0XHR9KVxuXHRcdFx0Y29uc29sZS5sb2coYXJyKVxuXHRcdFx0JGN0LnRyaWdnZXIoJ3Nob3cubWsuY2hlY2tib3gnLCBhcnIpXG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJy5tay1jaGVja2JveC1ncm91cFtpZF0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0IGlkID0gdGhpcy5pZFxuXHRcdFx0bGV0ICRpbmRldGVybWluYXRlID0gJChgLm1rLWNoZWNrYm94W2RhdGEtaW5kZXRlcm1pbmF0ZT0ke2lkfV1gKVxuXHRcdFx0aWYgKCEkaW5kZXRlcm1pbmF0ZS5sZW5ndGgpIHJldHVyblxuXHRcdFx0bGV0IGZsYWcxID0gJC5tYWtlQXJyYXkoJCh0aGlzKS5jaGlsZHJlbignLm1rLWNoZWNrYm94JykpLmV2ZXJ5KGUgPT4ge1xuXHRcdFx0XHRyZXR1cm4gJChlKS5oYXNDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHR9KVxuXHRcdFx0bGV0IGZsYWcyID0gJC5tYWtlQXJyYXkoJCh0aGlzKS5jaGlsZHJlbignLm1rLWNoZWNrYm94JykpLnNvbWUoZSA9PiB7XG5cdFx0XHRcdHJldHVybiAkKGUpLmhhc0NsYXNzKCdpcy1jaGVja2VkJylcblx0XHRcdH0pXG5cdFx0XHRpZiAoZmxhZzEpIHtcblx0XHRcdFx0JGluZGV0ZXJtaW5hdGUucmVtb3ZlQ2xhc3MoJ2lzLWluZGV0ZXJtaW5hdGUnKVxuXHRcdFx0XHQkaW5kZXRlcm1pbmF0ZS5hZGRDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fSBlbHNlIGlmIChmbGFnMikge1xuXHRcdFx0XHQkaW5kZXRlcm1pbmF0ZS5hZGRDbGFzcygnaXMtaW5kZXRlcm1pbmF0ZScpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkaW5kZXRlcm1pbmF0ZS5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHRcdCRpbmRldGVybWluYXRlLnJlbW92ZUNsYXNzKCdpcy1pbmRldGVybWluYXRlJylcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLWNoZWNrYm94LWJ0bi1ncm91cD4ubWstY2hlY2tib3gtYnRuJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCBhcnIgPSBbXVxuXHRcdFx0bGV0ICRjdCA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuXHRcdFx0bGV0ICR0ID0gJChlLnRhcmdldClcblx0XHRcdGlmICgkY3QuaGFzQ2xhc3MoJ2lzLWRpc2FibGVkJykpIHJldHVyblxuXHRcdFx0aWYgKCR0LmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSkgcmV0dXJuXG5cdFx0XHRpZiAoJGN0Lmhhc0NsYXNzKCdpcy1jaGVja2VkJykpIHtcblx0XHRcdFx0JGN0LnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRjdC5hZGRDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHRcdGxldCBpdGVtID0gJGN0LmNoaWxkcmVuKCcubWstY2hlY2tib3gtYnRuX19pbnB1dCcpLnZhbCgpXG5cdFx0XHRcdGl0ZW0gJiYgYXJyLnB1c2goaXRlbSlcblx0XHRcdH1cblx0XHRcdCRjdC5zaWJsaW5ncygnLm1rLWNoZWNrYm94LWJ0bi5pcy1jaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxldCBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbignLm1rLWNoZWNrYm94LWJ0bl9faW5wdXQnKS52YWwoKVxuXHRcdFx0XHRpdGVtICYmIGFyci5wdXNoKGl0ZW0pXG5cdFx0XHR9KVxuXHRcdFx0Y29uc29sZS5sb2coYXJyKVxuXHRcdFx0JGN0LnRyaWdnZXIoJ3Nob3cubWsucmFkaW8uYnRuJywgYXJyKVxuXHRcdH0pXG59XG4iLCJsZXQgY3AgPSByZXF1aXJlKCcuL2luZGV4LmVqcycpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0JCgnI2pzX2NwJykuaHRtbChjcCgpKVxuXG5cdCQoZG9jdW1lbnQpXG5cdFx0Lm9uKCdjbGljaycsICcubWstY3A+Lm1rLWNwLWRwPi5tay1jcC1kcC1tYWluPi5tay1jcC1kcC1wYW5uZWwnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICRzaWJsaW5nID0gJCh0aGlzKS5jaGlsZHJlbignLm1rLWNwLWRwLXBhbm5lbF9fY3Vyc29yJylcblx0XHRcdGxldCB4ID0gZS5jbGllbnRYXG5cdFx0XHRsZXQgeSA9IGUuY2xpZW50WVxuXHRcdFx0bGV0IHAgPSBvZmZzZXQodGhpcylcblx0XHRcdCRzaWJsaW5nLmNzcygnbGVmdCcsIHggLSBwLmxlZnQgLSB0aGlzLm9mZnNldExlZnQgLSAxIC0gNCkgICAvLzHmmK/niLblhYPntKDnmoRib3JkZXJcblx0XHRcdCRzaWJsaW5nLmNzcygndG9wJywgeSAtIHAudG9wIC0gdGhpcy5vZmZzZXRUb3AgLSAxIC0gNClcblx0XHR9KVxuXHRcdC5vbignbW91c2Vkb3duJywgJy5tay1jcD4ubWstY3AtZHA+Lm1rLWNwLWRwLW1haW4+Lm1rLWNwLWRwLXZlcnRpY2FsPi5tay1jcC1kcC12ZXJ0aWNhbF9fdGh1bWInLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzXG5cdFx0XHRsZXQgbW92ZSA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdGxldCBoID0gJHRoaXMucGFyZW50KClbMF0ub2Zmc2V0SGVpZ2h0XG5cdFx0XHRcdGxldCBwID0gb2Zmc2V0KHRoYXQpXG5cdFx0XHRcdGxldCB5ID0gZS5jbGllbnRZXG5cdFx0XHRcdGxldCBkeSA9ICB5IC0gcC50b3AgLSB0aGF0Lm9mZnNldEhlaWdodCAvIDJcblx0XHRcdFx0aWYgKGR5IDwgMCkgZHkgPSAwXG5cdFx0XHRcdGlmIChkeSA+IGgpIGR5ID0gaFxuXHRcdFx0XHQkdGhpcy5jc3MoJ3RvcCcsIGR5KVxuXHRcdFx0fVxuXHRcdFx0bGV0IHVwID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUnLCBtb3ZlKVxuXHRcdFx0fVxuXHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIG1vdmUpXG5cdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cCcsIHVwKVxuXHRcdH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBhbm9ueW1vdXMobG9jYWxzLCBmaWx0ZXJzLCBlc2NhcGUsIHJldGhyb3dcbi8qYGAqLykge1xuZXNjYXBlID0gZXNjYXBlIHx8IGZ1bmN0aW9uIChodG1sKXtcbiAgcmV0dXJuIFN0cmluZyhodG1sKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xudmFyIGJ1ZiA9IFtdO1xud2l0aCAobG9jYWxzIHx8IHt9KSB7IChmdW5jdGlvbigpeyBcbiBidWYucHVzaCgnPGRpdiBjbGFzcz1cIm91dFwiPlxcblx0PGgyPmNvbG9yUGlja2VyPC9oMj5cXG5cdDxkaXYgY2xhc3M9XCJib3hcIj5cXG5cdFx0PGg0PuWfuuehgOeUqOazlTwvaDQ+XFxuXHRcdDxkaXYgY2xhc3M9XCJtay13cmFwIHR5cGUtbm9ybWFsIGdhcFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XCJtay1jcFwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWNwLWRwXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1jcC1kcC1tYWluXCI+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWNwLWRwLXZlcnRpY2FsXCI+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstY3AtZHAtdmVydGljYWxfX2JhclwiPjwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWNwLWRwLXZlcnRpY2FsX190aHVtYlwiPjwvZGl2Plxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1jcC1kcC1wYW5uZWxcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1jcC1kcC1wYW5uZWxfX3doaXRlXCI+PC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstY3AtZHAtcGFubmVsX19ibGFja1wiPjwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWNwLWRwLXBhbm5lbF9fY3Vyc29yXCI+PC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstY3AtZHAtb3RoZXJcIj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstY3AtZHAtb3RoZXJfX2lucHV0XCI+XFxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgdmFsdWU9XCJcIj5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstY3AtZHAtb3RoZXJfX2J0blwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWNwLWRwLW90aGVyX19idG4taXRlbVwiPlxcblx0XHRcdFx0XHRcdFx0XHTmuIXnqbpcXG5cdFx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWNwLWRwLW90aGVyX19idG4taXRlbVwiPlxcblx0XHRcdFx0XHRcdFx0XHTnoa7lrppcXG5cdFx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PCEtLSA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiYnV0dG9uXCI+PHNwYW4+5riF56m6PC9zcGFuPjwvYnV0dG9uPlxcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImJ1dHRvblwiPjxzcGFuPuehruWumjwvc3Bhbj48L2J1dHRvbj4gLS0+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuPC9kaXY+XFxuJyk7IH0pKCk7XG59IFxucmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn0pIiwibGV0IGRwID0gcmVxdWlyZSgnLi9pbmRleC5lanMnKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdCQoJyNqc19kcCcpLmh0bWwoZHAoKSlcblxuXHQkKGRvY3VtZW50KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLWRwOm5vdCguaG92ZXIpJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCAkdCA9ICQoZS50YXJnZXQpXG5cdFx0XHRpZiAoJHQuaGFzQ2xhc3MoJ21rLWRwLW1lbnUnKSkgcmV0dXJuXG5cdFx0XHRpZiAoJHQuaGFzQ2xhc3MoJ21rLWRwLW1lbnVfX2l0ZW0nKSkgcmV0dXJuXG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJGNoaWxkID0gJHRoaXMuY2hpbGRyZW4oJy5tay1kcC1tZW51Jylcblx0XHRcdGxldCBzdGF0dXMgPSAkY2hpbGQuY3NzKCdkaXNwbGF5Jylcblx0XHRcdCRjaGlsZC5vZmYoJ2NsaWNrJylcblx0XHRcdCRjaGlsZC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRsZXQgdCA9IGUudGFyZ2V0XG5cdFx0XHRcdGlmICgkKHQpLmhhc0NsYXNzKCdtay1kcC1tZW51X19pdGVtJykpIHtcblx0XHRcdFx0XHQkKHQpLnRyaWdnZXIoJ3Nob3cubWsuZHAnLCB0LmlubmVyVGV4dClcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRoaXMpLmhpZGUoKVxuXHRcdFx0XHQkKCcubWF0dGUnKS5yZW1vdmUoKVxuXHRcdFx0fSlcblx0XHRcdGlmIChzdGF0dXMgPT09ICdub25lJykge1xuXHRcdFx0XHQkY2hpbGQuc2hvdygpXG5cdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibWF0dGVcIj48L2Rpdj4nKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGNoaWxkLmhpZGUoKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZWVudGVyJywgJy5tay1kcC5ob3ZlcicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJGNoaWxkID0gJHRoaXMuY2hpbGRyZW4oJy5tay1kcC1tZW51Jylcblx0XHRcdCRjaGlsZC5vZmYoJ2NsaWNrJylcblx0XHRcdCRjaGlsZC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRsZXQgdCA9IGUudGFyZ2V0XG5cdFx0XHRcdGlmICgkKHQpLmhhc0NsYXNzKCdtay1kcC1tZW51X19pdGVtJykpIHtcblx0XHRcdFx0XHQkKHQpLnRyaWdnZXIoJ3Nob3cubWsuZHAnLCB0LmlubmVyVGV4dClcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRoaXMpLmhpZGUoKVxuXHRcdFx0fSlcblx0XHRcdCRjaGlsZC5zaG93KClcblx0XHR9KVxuXHRcdC5vbignbW91c2VsZWF2ZScsICcubWstZHAuaG92ZXInLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0ICRjaGlsZCA9ICR0aGlzLmNoaWxkcmVuKCcubWstZHAtbWVudScpXG5cdFx0XHQkY2hpbGQuaGlkZSgpXG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJy5tYXR0ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcykucmVtb3ZlKClcblx0XHRcdCQoJy5tay1kcC1tZW51JykuaGlkZSgpXG5cdFx0fSlcblx0XHQub24oJ3Nob3cubWsuZHAnLCBmdW5jdGlvbiAoZSwgdikge1xuXHRcdFx0Y29uc29sZS5sb2codilcblx0XHR9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gYW5vbnltb3VzKGxvY2FscywgZmlsdGVycywgZXNjYXBlLCByZXRocm93XG4vKmBgKi8pIHtcbmVzY2FwZSA9IGVzY2FwZSB8fCBmdW5jdGlvbiAoaHRtbCl7XG4gIHJldHVybiBTdHJpbmcoaHRtbClcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcbnZhciBidWYgPSBbXTtcbndpdGggKGxvY2FscyB8fCB7fSkgeyAoZnVuY3Rpb24oKXsgXG4gYnVmLnB1c2goJzxkaXYgY2xhc3M9XCJvdXRcIj5cXG5cdDxoMj5kcm9wZG93bjwvaDI+XFxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XFxuXHRcdDxoND7ln7rnoYDnlKjms5U8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstZHBcIj5cXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstZHAtYnRuXCI+5LiL5ouJ6I+c5Y2VIDxpIGNsYXNzPVwiaWNvbi1kb3duXCI+PC9pPjwvc3Bhbj5cXG5cdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cIm1rLW1hdHRlXCI+PC9kaXY+IC0tPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWRwLW1lbnVcIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHTmpLDlrZDpuKFkaGZqYWhma2FkamthZmthanNkXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstZHAtbWVudV9faXRlbVwiPlxcblx0XHRcdFx0XHRcdOeDpOmxvFxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHTng6TogolcXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx054Gr6ZSFXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTN0aW1lc1wiPjwvZGl2Plxcblx0XHQ8aDQ+6Kem5Y+R5r+A5rS7PC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLWRwIGhvdmVyXCI+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWRwLWJ0blwiPuS4i+aLieiPnOWNlSA8aSBjbGFzcz1cImljb24tZG93blwiPjwvaT48L3NwYW4+XFxuXHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJtay1tYXR0ZVwiPjwvZGl2PiAtLT5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1kcC1tZW51XCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx05qSw5a2Q6bihXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstZHAtbWVudV9faXRlbVwiPlxcblx0XHRcdFx0XHRcdOeDpOmxvFxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHTng6TogolcXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx054Gr6ZSFXFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuPC9kaXY+XFxuJyk7IH0pKCk7XG59IFxucmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn0pIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgYXJyX3RpdGxlID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0LXRpdGxlJykpXG5cdHZhciBhcnJfaXRlbSA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXRlbScpKVxuXHRmdW5jdGlvbiBhZGRDbHMoZSwgY2xzKSB7XG5cdFx0ZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZS50cmltKCkgKyAnICcgKyBjbHNcblx0fVxuXHRmdW5jdGlvbiBoYXNDbHMgKGUsIGNscykge1xuXHRcdHZhciBhcnIgPSBlLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pXG5cdFx0cmV0dXJuICEhYXJyLmZpbmQoZSA9PiBlID09PSBjbHMudHJpbSgpKVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUNscyAoZSwgY2xzKSB7XG5cdFx0dmFyIGFyciA9IGUuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcblx0XHR2YXIgc3RyID0gJydcblx0XHRhcnIuZm9yRWFjaChlID0+IHtcblx0XHRcdGlmIChlICE9PSBjbHMudHJpbSgpKSBzdHIgKz0gJyAnICsgZVxuXHRcdH0pXG5cdFx0ZS5jbGFzc05hbWUgPSBzdHJcblx0fVxuXHR2YXIgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtdHJlZScpXG5cdGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHRhcmdldCA9IGUudGFyZ2V0XG5cdFx0dmFyIGMgPSB0YXJnZXQuY2hpbGRyZW5bMF1cblx0XHR2YXIgcCA9IHRhcmdldC5wYXJlbnROb2RlIHx8IG51bGxcblx0XHRpZiAoaGFzQ2xzKHRhcmdldCwgJ2xpc3QtdGl0bGUnKSkge1xuXHRcdFx0aWYgKHApIHtcblx0XHRcdFx0aWYgKGhhc0NscyhwLCAnYWN0aXZlJykpIHtcblx0XHRcdFx0XHRyZW1vdmVDbHMocCwgJ2FjdGl2ZScpXG5cdFx0XHRcdFx0YWRkQ2xzKGMsICd1cCcpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkQ2xzKHAsICdhY3RpdmUnKVxuXHRcdFx0XHRcdHJlbW92ZUNscyhjLCAndXAnKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChoYXNDbHModGFyZ2V0LCAnbGlzdC10aXRsZScpIHx8IGhhc0Nscyh0YXJnZXQsICdpdGVtJykpIHtcblx0XHRcdGFycl90aXRsZS5mb3JFYWNoKGUgPT4ge1xuXHRcdFx0XHRyZW1vdmVDbHMoZSwgJ2Nob29zZScpXG5cdFx0XHR9KVxuXHRcdFx0YXJyX2l0ZW0uZm9yRWFjaChlID0+IHtcblx0XHRcdFx0cmVtb3ZlQ2xzKGUsICdjaG9vc2UnKVxuXHRcdFx0fSlcblx0XHRcdGFkZENscyh0YXJnZXQsICdjaG9vc2UnKVxuXHRcdH1cblx0fSlcbn1cbiIsIi8vYXV0aG9yOiBtaWtpeGluZ1xuXG5pbXBvcnQgcmFkaW8gZnJvbSAnLi9yYWRpby9yYWRpby5qcydcbmltcG9ydCBjaGVja2JveCBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LmpzJ1xuaW1wb3J0IGlucHV0IGZyb20gJy4vaW5wdXQvaW5wdXQuanMnXG5pbXBvcnQgaW5wdXRfbnVtYmVyIGZyb20gJy4vaW5wdXROdW1iZXIvaW5wdXROdW1iZXIuanMnXG5pbXBvcnQgc2VsZWN0IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5qcydcbmltcG9ydCBkcCBmcm9tICcuL2RwL2RwLmpzJ1xuaW1wb3J0IHMgZnJvbSAnLi9zd2l0Y2gvc3dpdGNoLmpzJ1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlci9zbGlkZXIuanMnXG5pbXBvcnQgdHAgZnJvbSAnLi90aW1lUGlja2VyL3RpbWVQaWNrZXIuanMnXG5pbXBvcnQgdXBsb2FkIGZyb20gJy4vdXBsb2FkL3VwbG9hZC5qcydcbmltcG9ydCBjcCBmcm9tICcuL2NvbG9yUGlja2VyL2NvbG9yUGlja2VyLmpzJ1xuaW1wb3J0IHBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uanMnXG5pbXBvcnQgdGwgZnJvbSAnLi90aW1lTGluZS90aW1lTGluZS5qcydcbmltcG9ydCBmdCBmcm9tICcuL2ZpbGUtdHJlZS9maWxlVHJlZS5qcydcbmltcG9ydCBtYXRlcmlhbF91aSBmcm9tICcuL21hdGVyaWFsLXVpL21hdGVyaWFsLXVpLmpzJ1xuXG4vL+iPnOWNleWKn+iDvVxuKGZ1bmN0aW9uICgkKSB7XG4gICAgLy/ovoXliqnlh73mlbBcbiAgICBmdW5jdGlvbiBzbGljZSAob2JqKSB7XG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKG9iailcbiAgICB9XG4gICAgJC5mbi5taWtpRHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkYm94ID0gJCh0aGlzKVxuICAgICAgICB2YXIgZHAgPSAkYm94LmZpbmQoJy5taWtpLWRwJylbMF1cbiAgICAgICAgdmFyICRkcCA9ICQoZHApXG4gICAgICAgIHZhciBhcnIgPSBzbGljZSgkZHAuY2hpbGRyZW4oJy5taWtpLWRwLWNoaWxkJykpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAkKGFycltpXSkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAgICAgfVxuICAgICAgICBkcC5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24gKCkge3JldHVybiBmYWxzZX1cbiAgICAgICAgJGRwLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2LnRhcmdldFxuICAgICAgICAgICAgdmFyICRwID0gJCh0YXJnZXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgIHZhciBhcnIgPSBzbGljZSgkcC5jaGlsZHJlbignLm1pa2ktZHAtY2hpbGQnKSlcbiAgICAgICAgICAgIGlmICgkcC5oYXNDbGFzcygnbWlraS1kcC1tb3JlJykpIHtcbiAgICAgICAgICAgICAgICBhcnIubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkZSA9ICQoZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlLmNzcygnZGlzcGxheScpID09PSAnbm9uZScgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZS5zbGlkZURvd24oJ25vcm1hbCcpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZS5zbGlkZVVwKCdmYXN0JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSkoalF1ZXJ5KVxuXG5cbnJhZGlvKClcbmNoZWNrYm94KClcbmlucHV0KClcbmlucHV0X251bWJlcigpXG5zZWxlY3QoKVxuZHAoKVxucygpXG5zbGlkZXIoKVxudHAoKVxudXBsb2FkKClcbmNwKClcbnBhZ2luYXRpb24oKVxudGwoKVxuZnQoKVxubWF0ZXJpYWxfdWkoKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHRsZXQgZmxhZyA9IGZhbHNlXG5cdGxldCBtaW5Sb3dzID0gNFxuXHRsZXQgbWF4Um93cyA9IDIwXG5cdGZ1bmN0aW9uIFJlc2l6ZVRleHRhcmVhKHQpe1xuXHRcdGlmICh0LnNjcm9sbFRvcCA9PSAwKSB7XG5cdFx0XHR0LnNjcm9sbFRvcD0xO1xuXHRcdH1cblx0XHR3aGlsZSAodC5zY3JvbGxUb3AgPT0gMCl7XG5cdFx0XHRpZiAodC5yb3dzID4gbWluUm93cykge1xuXHRcdFx0XHR0LnJvd3MtLTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHQuc2Nyb2xsVG9wID0gMTtcblx0XHRcdGlmICh0LnJvd3MgPCBtYXhSb3dzKVxuXHRcdFx0XHR0LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG5cdFx0XHRpZiAodC5zY3JvbGxUb3AgPiAwKXtcblx0XHRcdFx0dC5yb3dzKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGlsZSh0LnNjcm9sbFRvcCA+IDApe1xuXHRcdFx0aWYgKHQucm93cyA8IG1heFJvd3Mpe1xuXHRcdFx0XHR0LnJvd3MrKztcblx0XHRcdFx0aWYgKHQuc2Nyb2xsVG9wID09IDApIHQuc2Nyb2xsVG9wPTE7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHR0LnN0eWxlLm92ZXJmbG93WSA9IFwiYXV0b1wiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0JChkb2N1bWVudClcblx0XHQub24oJ2lucHV0JywgJy5tay1pbnB1dC5tay1pbnB1dC0tc3VmZml4Pi5tay1pbnB1dF9faW5uZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJHAgPSAkdGhpcy5wYXJlbnQoKVxuXHRcdFx0aWYgKCR0aGlzLnZhbCgpKSB7XG5cdFx0XHRcdCRwLmNoaWxkcmVuKCcubWstaW5wdXRfX3N1ZmZpeCcpLmNoaWxkcmVuKCcubWstaW5wdXRfX3N1ZmZpeC1jbGVhcicpLnNob3coKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHAuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4JykuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4LWNsZWFyJykuaGlkZSgpXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQub24oJ2ZvY3VzJywgJy5tay1pbnB1dC5tay1pbnB1dC0tc3VmZml4Pi5tay1pbnB1dF9faW5uZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJHAgPSAkdGhpcy5wYXJlbnQoKVxuXHRcdFx0aWYgKCR0aGlzLnZhbCgpKSB7XG5cdFx0XHRcdCRwLmNoaWxkcmVuKCcubWstaW5wdXRfX3N1ZmZpeCcpLmNoaWxkcmVuKCcubWstaW5wdXRfX3N1ZmZpeC1jbGVhcicpLnNob3coKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHAuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4JykuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4LWNsZWFyJykuaGlkZSgpXG5cdFx0XHR9XG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJy5tay1pbnB1dC5tay1pbnB1dC0tc3VmZml4JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0ICRpbnAgPSAkdGhpcy5jaGlsZHJlbignLm1rLWlucHV0X19pbm5lcjpmb2N1cycpXG5cdFx0XHRsZXQgbGVuID0gJGlucC5sZW5ndGhcblx0XHRcdGxldCAkY2hpbGQgPSAkdGhpcy5jaGlsZHJlbignLm1rLWlucHV0X19zdWZmaXgnKS5jaGlsZHJlbignLm1rLWlucHV0X19zdWZmaXgtY2xlYXInKVxuXHRcdFx0aWYgKCFsZW4pIHtcblx0XHRcdFx0JGNoaWxkLmhpZGUoKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0Lm9uKCdjbGljaycsICcubWstaW5wdXQubWstaW5wdXQtLXN1ZmZpeD4ubWstaW5wdXRfX3N1ZmZpeCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCAkdGhpcyA9ICQodGhpcylcblx0XHRcdGxldCAkcCA9ICR0aGlzLnBhcmVudCgpXG5cdFx0XHQkcC5jaGlsZHJlbignLm1rLWlucHV0X19pbm5lcicpLnZhbCgnJylcblx0XHRcdCR0aGlzLmNoaWxkcmVuKCcubWstaW5wdXRfX3N1ZmZpeC1jbGVhcicpLmhpZGUoKVxuXHRcdH0pXG5cdFx0Lm9uKCdibHVyJywgJy5tay1pbnB1dC5tay1pbnB1dC0tc3VmZml4JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0JHRoaXMuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4JykuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4LWNsZWFyJykuaGlkZSgpXG5cblx0XHRcdH0sIDI1MClcblx0XHR9KVxuXHRcdC5vbigna2V5dXAnLCAnI2F1dG9fdGV4dGFyZWEnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0UmVzaXplVGV4dGFyZWEodGhpcylcblx0XHR9KVxuXHRcdC5vbignc2hvdy5tay5pbnB1dCcsIGZ1bmN0aW9uIChlLCB2KSB7XG5cdFx0XHRjb25zb2xlLmxvZyh2KVxuXHRcdH0pXG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGFub255bW91cyhsb2NhbHMsIGZpbHRlcnMsIGVzY2FwZSwgcmV0aHJvd1xuLypgYCovKSB7XG5lc2NhcGUgPSBlc2NhcGUgfHwgZnVuY3Rpb24gKGh0bWwpe1xuICByZXR1cm4gU3RyaW5nKGh0bWwpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG52YXIgYnVmID0gW107XG53aXRoIChsb2NhbHMgfHwge30pIHsgKGZ1bmN0aW9uKCl7IFxuIGJ1Zi5wdXNoKCc8ZGl2IGNsYXNzPVwib3V0XCI+XFxuXHQ8aDI+aW5wdXROdW1iZXI8L2gyPlxcblx0PGRpdiBjbGFzcz1cImJveFwiPlxcblx0XHQ8aDQ+5Z+656GA55So5rOVPC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0LW51bWJlclwiPlxcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dC1udW1iZXItLWRlY3JlYXNlIGlzLWRpc2FibGVkXCI+XFxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1kZWNyZWFzZVwiPjwvaT5cXG5cdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXQtbnVtYmVyLS1pbmNyZWFzZVwiPlxcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24taW5jcmVhc2VcIj48L2k+XFxuXHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstaW5wdXRcIj5cXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCI+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHRcdDxkaXYgY2xhc3M9XCJnYXAtM3RpbWVzXCI+PC9kaXY+XFxuXHRcdDxoND7npoHnlKjnirbmgIE8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstaW5wdXQtbnVtYmVyIGlzLWRpc2FibGVkXCI+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0LW51bWJlci0tZGVjcmVhc2VcIj5cXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWRlY3JlYXNlXCI+PC9pPlxcblx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dC1udW1iZXItLWluY3JlYXNlXCI+XFxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1pbmNyZWFzZVwiPjwvaT5cXG5cdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dCBpcy1kaXNhYmxlZFwiPlxcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtay1pbnB1dF9faW5uZXJcIiB2YWx1ZT0yPlxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTN0aW1lc1wiPjwvZGl2Plxcblx0XHQ8aDQ+5YWB6K646Ieq5a6a5LmJ6YCS5aKe6YCS5YeP5Y+C5pWwPC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0LW51bWJlclwiPlxcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dC1udW1iZXItLWRlY3JlYXNlXCI+XFxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1kZWNyZWFzZVwiPjwvaT5cXG5cdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXQtbnVtYmVyLS1pbmNyZWFzZVwiPlxcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24taW5jcmVhc2VcIj48L2k+XFxuXHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstaW5wdXRcIj5cXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCIgZGF0YS1wYXJhbV9kZWNyZWFzZT0yIGRhdGEtcGFyYW1faW5jcmVhc2U9Mz5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdFx0PGRpdiBjbGFzcz1cImdhcC0zdGltZXNcIj48L2Rpdj5cXG5cdFx0PGg0PueyvuW6pjwvaDQ+XFxuXHRcdDxkaXYgY2xhc3M9XCJtay13cmFwIHR5cGUtbm9ybWFsIGdhcFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dC1udW1iZXJcIj5cXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXQtbnVtYmVyLS1kZWNyZWFzZVwiPlxcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tZGVjcmVhc2VcIj48L2k+XFxuXHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0LW51bWJlci0taW5jcmVhc2VcIj5cXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWluY3JlYXNlXCI+PC9pPlxcblx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0XCI+XFxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1rLWlucHV0X19pbm5lclwiIGRhdGEtcHJlY2lzaW9uPTE+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHRcdDxkaXYgY2xhc3M9XCJnYXAtM3RpbWVzXCI+PC9kaXY+XFxuXHRcdDxoND7lsLrlr7g8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstaW5wdXQtbnVtYmVyXCI+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0LW51bWJlci0tZGVjcmVhc2VcIj5cXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWRlY3JlYXNlXCI+PC9pPlxcblx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dC1udW1iZXItLWluY3JlYXNlXCI+XFxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1pbmNyZWFzZVwiPjwvaT5cXG5cdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dFwiPlxcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtay1pbnB1dF9faW5uZXJcIj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdFx0PGRpdiBjbGFzcz1cImdhcFwiPjwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstaW5wdXQtbnVtYmVyXCIgc21hbGw+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0LW51bWJlci0tZGVjcmVhc2VcIj5cXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWRlY3JlYXNlXCI+PC9pPlxcblx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dC1udW1iZXItLWluY3JlYXNlXCI+XFxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1pbmNyZWFzZVwiPjwvaT5cXG5cdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dFwiIHNtYWxsPlxcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtay1pbnB1dF9faW5uZXJcIj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdFx0PGRpdiBjbGFzcz1cImdhcFwiPjwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstaW5wdXQtbnVtYmVyXCIgbWluaT5cXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXQtbnVtYmVyLS1kZWNyZWFzZVwiPlxcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tZGVjcmVhc2VcIj48L2k+XFxuXHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0LW51bWJlci0taW5jcmVhc2VcIj5cXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWluY3JlYXNlXCI+PC9pPlxcblx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0XCIgbWluaT5cXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCI+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cXG4nKTsgfSkoKTtcbn0gXG5yZXR1cm4gYnVmLmpvaW4oJycpO1xufSkiLCJsZXQgaW5wdXRfbnVtYmVyID0gcmVxdWlyZSgnLi9pbmRleC5lanMnKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHQkKCcjanNfaW5wdXQtbnVtYmVyJykuaHRtbChpbnB1dF9udW1iZXIoKSlcblxuXHQvL+azqOWGjOS6i+S7tlxuXHQkKGRvY3VtZW50KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLWlucHV0LW51bWJlcjpub3QoLmlzLWRpc2FibGVkKT4ubWstaW5wdXQtbnVtYmVyLS1pbmNyZWFzZTpub3QoLmlzLWRpc2FibGVkKScgLGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJGlucCA9ICR0aGlzLnNpYmxpbmdzKCcubWstaW5wdXQnKS5jaGlsZHJlbignLm1rLWlucHV0X19pbm5lcicpXG5cdFx0XHRsZXQgcHJlY2lzaW9uID0gKyRpbnAuZGF0YSgncHJlY2lzaW9uJykgfHwgMFxuXHRcdFx0bGV0IHZhbCA9ICgrJGlucC52YWwoKSArICgrJGlucC5kYXRhKCdwYXJhbV9pbmNyZWFzZScpIHx8IDEpKS50b0ZpeGVkKHByZWNpc2lvbilcblx0XHRcdCRpbnAudmFsKHZhbClcblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLWlucHV0LW51bWJlcjpub3QoLmlzLWRpc2FibGVkKT4ubWstaW5wdXQtbnVtYmVyLS1kZWNyZWFzZTpub3QoLmlzLWRpc2FibGVkKScgLGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJGlucCA9ICR0aGlzLnNpYmxpbmdzKCcubWstaW5wdXQnKS5jaGlsZHJlbignLm1rLWlucHV0X19pbm5lcicpXG5cdFx0XHRsZXQgcHJlY2lzaW9uID0gKyRpbnAuZGF0YSgncHJlY2lzaW9uJykgfHwgMFxuXHRcdFx0bGV0IHZhbCA9ICgrJGlucC52YWwoKSAtICgrJGlucC5kYXRhKCdwYXJhbV9kZWNyZWFzZScpIHx8IDEpKS50b0ZpeGVkKHByZWNpc2lvbilcblx0XHRcdCRpbnAudmFsKHZhbClcblx0XHR9KVxufVxuIiwiLy/lj5bmtojmu5rliqjkuovku7blkozmgaLlpI3mu5rliqjkuovku7ZcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyAgLy/lhbzlrrlpZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gIHdpbmRvdy5vbndoZWVsID0gcHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gcHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICB3aW5kb3cub250b3VjaG1vdmUgID0gcHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICBkb2N1bWVudC5vbmtleWRvd24gID0gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xufVxuXG5mdW5jdGlvbiBlbmFibGVTY3JvbGwoKSB7XG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsO1xuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDtcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG59XG5cblxuXG5mdW5jdGlvbiBTZWxlY3RvciAoKSB7fVxuU2VsZWN0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoZWxlKSB7XG5cdHZhciBsID0gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgICAvL+iOt+WPluebuOWvueS6jua1j+iniOWZqOWdkOS4iuinkuWdkOagh1xuXHR2YXIgdCA9IGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Bcblx0dmFyIGggPSBlbGUub2Zmc2V0SGVpZ2h0ICAgLy/lhYPntKDnmoTpq5jluqZcblx0dmFyIGFyciA9IFtdLnNsaWNlLmNhbGwoJCgnLm1pa2ktc2VsZWN0X19pdGVtJykpXG5cdHZhciAkbWlraV9zZWxlY3QgPSAkKCcubWlraS1zZWxlY3QnKVxuXHR2YXIgJG1hdHRlID0gJCgnPGRpdiBjbGFzcz1cIm15LW1hdHRlXCI+PC9kaXY+Jylcblx0Ly/orqHnrpfpgInmi6nlmajlh7rnjrDnmoTkvY3nva5cblx0aWYgKGVsZS52YWx1ZSkge1xuXHRcdGFyci5mb3JFYWNoKChlLCBpKSA9PiB7XG5cdFx0XHQkKGUpLnJlbW92ZUNsYXNzKCdtaWtpLXNlbGVjdF9faXRlbS1hY3RpdmUnKVxuXHRcdFx0aWYgKGUuaW5uZXJIVE1MID09PSBlbGUudmFsdWUpIHtcblx0XHRcdFx0JChlKS5hZGRDbGFzcygnbWlraS1zZWxlY3RfX2l0ZW0tYWN0aXZlJylcblx0XHRcdFx0aWYgKGkgPT09IDApIHJldHVyblxuXHRcdFx0XHR0IC09IGkgKiA0MCAgICAgLy80MOaYr3NlbGVjdG9y5Lit5q+P5LiA5Liq6YCJ6aG555qE6auY5bqmXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHQkbWlraV9zZWxlY3QuZGF0YSgnb3JpZ2luX3QnLCB0KSAgICAvL+aKiumAieaLqeWZqOWOn+Wni+eahHRvcOS9jee9rue7keWumuWIsOWFg+e0oOS4iumdoizmlrnkvr/ku6XlkI7kvb/nlKhcblxuXHQkKCcubXktbWF0dGUnKS5yZW1vdmUoKSAgICAgICAgIC8v56e76Zmk5Y+v6IO95bey57uP5a2Y5Zyo55qE6YGu572p5bGCXG5cdCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKCRtYXR0ZSlcblx0JG1hdHRlLnNob3coKVxuXHQkbWF0dGUuYW5pbWF0ZSh7b3BhY2l0eTogMX0pXG5cdC8v5aaC5p6c5rWP6KeI5Zmo55qE6auY5bqm5LiN5aSfLOmHjeaWsOiwg+aVtOmAieaLqeWZqOeahOS9jee9rlxuXHRpZiAoJCh3aW5kb3cpLmhlaWdodCgpIDw9IHQgKyAkbWlraV9zZWxlY3QuaGVpZ2h0KCkpIHtcblx0XHR0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gJG1pa2lfc2VsZWN0LmhlaWdodCgpIC0gMzAgICAvLzMw5piv6Ieq5a6a5LmJ55qEc2VsZWN0b3Lot53mtY/op4jlmajlupXpg6jnmoTpq5jluqZcblx0fVxuXHQkbWlraV9zZWxlY3QuY3NzKHt0b3A6IHQgKyAncHgnLCBsZWZ0OiBsICsgJ3B4J30pXG5cdCRtaWtpX3NlbGVjdC5hZGRDbGFzcygnbWlraS1zZWxlY3RfX2FjdGl2ZScpXG5cdGJpbmRFdmVudCgpXG5cdGRpc2FibGVTY3JvbGwoKVxuXHRmdW5jdGlvbiBiaW5kRXZlbnQgKCkge1xuXHRcdCRtaWtpX3NlbGVjdC5vZmYoJ2NsaWNrJylcblx0XHQkbWF0dGUub2ZmKCdjbGljaycpXG5cdFx0JG1pa2lfc2VsZWN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xuXHRcdFx0dmFyIHRhcmdldCA9IGV2LnRhcmdldFxuXHRcdFx0ZWxlLnZhbHVlID0gdGFyZ2V0LmlubmVySFRNTFxuXHRcdFx0JG1pa2lfc2VsZWN0LnJlbW92ZUNsYXNzKCdtaWtpLXNlbGVjdF9fYWN0aXZlJylcblx0XHRcdCRtYXR0ZS5oaWRlKClcblx0XHRcdGVsZS52YWx1ZSA9IHRhcmdldC5pbm5lckhUTUxcblx0XHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeClcblx0XHRcdGVuYWJsZVNjcm9sbCgpXG5cdFx0fSlcblx0XHQkbWF0dGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JG1pa2lfc2VsZWN0LnJlbW92ZUNsYXNzKCdtaWtpLXNlbGVjdF9fYWN0aXZlJylcblx0XHRcdCRtYXR0ZS5oaWRlKClcblx0XHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeClcblx0XHRcdGVuYWJsZVNjcm9sbCgpXG5cdFx0fSlcblx0XHRmdW5jdGlvbiBmaXggKCkge1xuXHRcdFx0dmFyICR0YXJnZXQgPSAkKCcubWlraS1zZWxlY3QnKVxuXHRcdFx0dmFyIHdpbmRvd19oID0gJCh3aW5kb3cpLmhlaWdodCgpXG5cdFx0XHR2YXIgdGFyZ2V0X2ggPSAkdGFyZ2V0LmhlaWdodCgpXG5cdFx0XHR2YXIgb3JpZ2luX3QgPSAkdGFyZ2V0LmRhdGEoJ29yaWdpbl90JylcblxuXHRcdFx0aWYgKG9yaWdpbl90ICsgdGFyZ2V0X2ggPj0gd2luZG93X2gpIHtcblx0XHRcdFx0ICR0YXJnZXQuY3NzKHt0b3A6IHdpbmRvd19oIC0gMzAgLSB0YXJnZXRfaCArICdweCd9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHRhcmdldC5jc3Moe3RvcDogb3JpZ2luX3QgKyAncHgnfSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZnVuY3Rpb24gX3Rocm90dGxlKGZuLHdhaXQsdGltZSl7XG5cdFx0ICAgIHZhciBwcmV2aW91cyA9IG51bGw7IC8v6K6w5b2V5LiK5LiA5qyh6L+Q6KGM55qE5pe26Ze0XG5cdFx0ICAgIHZhciB0aW1lciA9IG51bGw7XG5cdFx0ICAgIHJldHVybiBmdW5jdGlvbigpe1xuXHRcdCAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0ICAgICAgICBpZighcHJldmlvdXMpIHByZXZpb3VzID0gbm93O1xuXHRcdCAgICAgICAgLy/lvZPkuIrkuIDmrKHmiafooYznmoTml7bpl7TkuI7lvZPliY3nmoTml7bpl7Tlt67lpKfkuo7orr7nva7nmoTmiafooYzpl7TpmpTml7bplb/nmoTor53vvIzlsLHkuLvliqjmiafooYzkuIDmrKFcblx0XHQgICAgICAgIGlmKG5vdyAtIHByZXZpb3VzID4gdGltZSl7XG5cdFx0ICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHQgICAgICAgICAgICBmbigpO1xuXHRcdCAgICAgICAgICAgIHByZXZpb3VzID0gbm93Oy8vIOaJp+ihjOWHveaVsOWQju+8jOmprOS4iuiusOW9leW9k+WJjeaXtumXtFxuXHRcdCAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHQgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHQgICAgICAgICAgICAgICAgZm4oKTtcblx0XHQgICAgICAgICAgICB9LHdhaXQpO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9XG5cdFx0fVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBfdGhyb3R0bGUoZml4LDUwMCwxMDAwKSlcblx0fVxufVxuY2xhc3MgU25hY2tCYXIge1xuXHRjb25zdHJ1Y3RvciAoKSB7fVxuXHRzaG93U0IgKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpc1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhhdC4kZG9tLmFkZENsYXNzKCdzbmFja2Jhci1lbnRlci0nICsgdGhhdC50eXBlKVxuXHRcdH0sIDApXG5cblx0fVxuXHRoaWRlU0IgKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpc1xuXHRcdHRoaXMuJGRvbS5hZGRDbGFzcygnc25hY2tiYXItbGVhdmUtJyArIHRoYXQudHlwZSkub24oJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGF0LiRkb20ucmVtb3ZlKClcblx0XHR9KVxuXHR9XG5cdGluaXQgKG1zZywgdHlwZSwgY29sb3IpIHtcblx0XHR0aGlzLnR5cGUgPSB0eXBlIHx8ICdib3R0b20tbGVmdCdcblx0XHR0aGlzLiRkb20gPSAkKGA8ZGl2IGNsYXNzPVwic25hY2tiYXItYm94IHNuYWNrYmFyLWJvdHRvbVwiIG9uc2VsZWN0c3RhcnQ9XCJyZXR1cm4gZmFsc2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNuYWNrYmFyLXR4dFwiPiR7bXNnfTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic25hY2tiYXItY2xvc2VcIiBjbG9zZT48ZGl2IGNsYXNzPVwic25hY2tiYXItY2xvc2UtYnRuXCI+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzbmFja2Jhci1idG5cIj48L2Rpdj5cblx0XHRcdDwvZGl2PmApXG5cdFx0aWYgKC90b3AvLnRlc3QodGhpcy50eXBlKSkge1xuXHRcdFx0dGhpcy4kZG9tID0gJChgPGRpdiBjbGFzcz1cInNuYWNrYmFyLWJveCBzbmFja2Jhci10b3BcIiBvbnNlbGVjdHN0YXJ0PVwicmV0dXJuIGZhbHNlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzbmFja2Jhci10eHRcIj4ke21zZ308L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNuYWNrYmFyLWNsb3NlXCIgY2xvc2U+PGRpdiBjbGFzcz1cInNuYWNrYmFyLWNsb3NlLWJ0blwiPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic25hY2tiYXItYnRuXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5gKVxuXHRcdH1cblx0XHRzd2l0Y2ggKHRoaXMudHlwZSkge1xuXHRcdFx0Y2FzZSAndG9wLWxlZnQnOlxuXHRcdFx0XHR0aGlzLiRkb20uY3NzKHtsZWZ0OiAnMjBweCd9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RvcC1jZW50ZXInOlxuXHRcdFx0XHR0aGlzLiRkb20uY3NzKHtsZWZ0OiAnNTAlJywgbWFyZ2luTGVmdDogJy0xMjVweCd9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RvcC1yaWdodCc6XG5cdFx0XHRcdHRoaXMuJGRvbS5jc3Moe3JpZ2h0OiAnMjBweCd9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2JvdHRvbS1jZW50ZXInOlxuXHRcdFx0XHR0aGlzLiRkb20uY3NzKHtsZWZ0OiAnNTAlJywgbWFyZ2luTGVmdDogJy0xMjVweCd9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2JvdHRvbS1yaWdodCc6XG5cdFx0XHRcdHRoaXMuJGRvbS5jc3Moe3JpZ2h0OiAnMjBweCd9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMuJGRvbS5jc3Moe2xlZnQ6ICcyMHB4J30pXG5cdFx0fVxuXHRcdGlmIChjb2xvcikge1xuXHRcdFx0dGhpcy4kZG9tLmFkZENsYXNzKCdjdXN0b20tJyArIGNvbG9yKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRkb20uYWRkQ2xhc3MoJ2N1c3RvbS1kZWZhdWx0Jylcblx0XHR9XG5cdFx0dGhpcy4kZG9tLmluc2VydEFmdGVyKHRoaXMuJGVsKVxuXHRcdHRoaXMuc2hvd1NCKClcblx0XHR2YXIgdGhhdCA9IHRoaXNcblx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhhdC50aW1lcilcblx0XHRcdHRoYXQuaGlkZVNCKClcblx0XHR9LCAzMDAwKVxuXHRcdHRoaXMuJGRvbS5vbignY2xpY2snLCAnW2Nsb3NlXScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vICQodGhpcykuY2hpbGRyZW4oJy5zbmFja2Jhci1jbG9zZS1idG4nKS5hZGRDbGFzcygnc25hY2tiYXItY2xvc2UtYnRuX2FjdGl2ZScpXG5cdFx0XHRjbGVhclRpbWVvdXQodGhhdC50aW1lcilcblx0XHRcdHRoYXQuaGlkZVNCKClcblx0XHR9KVxuXHR9XG5cdHNpbmdsZSAoZWwsIG1zZywgdHlwZSwgY29sb3IpIHtcblx0XHR0aGlzLiRlbCA9ICQoZWwpXG5cdFx0dGhpcy4kZWwucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnNuYWNrYmFyLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICgkKHRoaXMpLm5leHQoJy5zbmFja2Jhci1ib3gnKVswXSkge1xuXHRcdFx0XHR0aGlzLnNuYWNrYmFyLmhpZGVTQigpXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNuYWNrYmFyLnRpbWVyKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0aWYgKHRoaXMuJGVsLm5leHQoJy5zbmFja2Jhci1ib3gnKVswXSkgcmV0dXJuXG5cdFx0dGhpcy5pbml0KG1zZywgdHlwZSwgY29sb3IpXG5cdH1cblx0Ly8gbW9yZSAoZWwsIG1zZywgdHlwZSwgY29sb3IpIHtcblx0Ly8gXHR0aGlzLm1vcmUgPSBlbC5zbmFja2Jhci5tb3JlIHx8IDBcblx0Ly8gXHR2YXIgdGhhdCA9IHRoaXNcblx0Ly8gXHR0aGlzLiRlbCA9ICQoZWwpXG5cdC8vIFx0dGhpcy4kZWwucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnNuYWNrYmFyLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0Ly8gXHRcdHRoaXMuc25hY2tiYXIgJiYgdGhpcy5zbmFja2Jhci5oaWRlU0IoKVxuXHQvLyBcdH0pXG5cdC8vIFx0ZWwuc25hY2tiYXIgJiYgZWwuc25hY2tiYXIuJGRvbSAmJiBlbC5zbmFja2Jhci5oaWRlU0IoKVxuXHQvLyBcdHRoaXMuaW5pdChtc2csIHR5cGUsIGNvbG9yKVxuXHQvLyB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdCQoZG9jdW1lbnQpXG5cdFx0Lm9uKCdmb2N1cycsICdpbnB1dFt1c3VhbF0nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdibHVyLWxhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZS11c3VhbCcpXG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpLmFkZENsYXNzKCdmb2N1cy1maWVsZF9fdXN1YWwnKVxuXHRcdH0pXG5cdFx0Lm9uKCdibHVyJywgJ2lucHV0W3VzdWFsXScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmlucHV0LWZpZWxkJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWZpZWxkX191c3VhbCcpXG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdsYWJlbCcpLmFkZENsYXNzKCdibHVyLWxhYmVsJylcblx0XHRcdGlmICh0aGlzLnZhbHVlKSByZXR1cm5cblx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS11c3VhbCcpXG5cdFx0fSlcblx0XHQub24oJ2ZvY3VzJywgJ2lucHV0W2Vycm9yXScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZS1lcnJvcicpXG5cdFx0fSlcblx0XHQub24oJ2JsdXInLCAnaW5wdXRbZXJyb3JdJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHRoaXMudmFsdWUpIHJldHVyblxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWVycm9yJylcblx0XHR9KVxuXHRcdC5vbignZm9jdXMnLCAndGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUtdXN1YWwnKVxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKS5hZGRDbGFzcygnZm9jdXMtZmllbGRfX3VzdWFsJylcblx0XHR9KVxuXHRcdC5vbignYmx1cicsICd0ZXh0YXJlYScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmlucHV0LWZpZWxkJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWZpZWxkX191c3VhbCcpXG5cdFx0XHRpZiAodGhpcy52YWx1ZSkgcmV0dXJuXG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdXN1YWwnKVxuXHRcdH0pXG5cdFx0Lm9uKCdmb2N1cycsICdpbnB1dFt3aXRocGxhY2Vob2xkZXJdJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5yZW1vdmVDbGFzcygnYmx1ci1sYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUtdXN1YWwnKVxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKS5hZGRDbGFzcygnZm9jdXMtZmllbGRfX3VzdWFsJylcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSAncGxhY2Vob2xkZXInXG5cdFx0fSlcblx0XHQub24oJ2JsdXInLCAnaW5wdXRbd2l0aHBsYWNlaG9sZGVyXScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSAnJ1xuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKS5yZW1vdmVDbGFzcygnZm9jdXMtZmllbGRfX3VzdWFsJylcblx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykuYWRkQ2xhc3MoJ2JsdXItbGFiZWwnKVxuXHRcdFx0aWYgKHRoaXMudmFsdWUpIHJldHVyblxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXVzdWFsJylcblx0XHR9KVxuXHRcdC5vbignZm9jdXMnLCAnc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5yZW1vdmVDbGFzcygnYmx1ci1sYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUtdXN1YWwnKVxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKS5hZGRDbGFzcygnZm9jdXMtZmllbGRfX3VzdWFsJylcblx0XHR9KVxuXHRcdC5vbignYmx1cicsICdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpLnJlbW92ZUNsYXNzKCdmb2N1cy1maWVsZF9fdXN1YWwnKVxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5hZGRDbGFzcygnYmx1ci1sYWJlbCcpXG5cdFx0XHRpZiAodGhpcy52YWx1ZSkgcmV0dXJuXG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdXN1YWwnKVxuXHRcdH0pXG5cblx0dmFyIHNlbGVjdF9tYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0X21hbicpXG5cdHZhciBzID0gbmV3IFNlbGVjdG9yKClcblx0c2VsZWN0X21hbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdHMuaW5pdChzZWxlY3RfbWFuKVxuXHR9XG5cbi8vc25hY2tiYXJcbiQoZG9jdW1lbnQpXG5cdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX3RvcF9sZWZ0XScsIGZ1bmN0aW9uIChldikge1xuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0fVxuXHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAn5LiK5bemJyAsJ3RvcC1sZWZ0Jylcblx0fSlcblx0Lm9uKCdjbGljaycsICdbc25hY2tiYXJfdG9wX2NlbnRlcl0nLCBmdW5jdGlvbiAoZXYpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldFxuXHRcdGlmICghdGFyZ2V0LnNuYWNrYmFyKSB7XG5cdFx0XHR0YXJnZXQuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKVxuXHRcdH1cblx0XHR0YXJnZXQuc25hY2tiYXIuc2luZ2xlKHRhcmdldCwgJ+S4iuS4rScgLCd0b3AtY2VudGVyJylcblx0fSlcblx0Lm9uKCdjbGljaycsICdbc25hY2tiYXJfdG9wX3JpZ2h0XScsIGZ1bmN0aW9uIChldikge1xuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0fVxuXHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAn5LiK5Y+zJyAsJ3RvcC1yaWdodCcpXG5cdH0pXG5cdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX2JvdHRvbV9sZWZ0XScsIGZ1bmN0aW9uIChldikge1xuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0fVxuXHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAn5LiL5bemJyAsJ2JvdHRvbS1sZWZ0Jylcblx0fSlcblx0Lm9uKCdjbGljaycsICdbc25hY2tiYXJfYm90dG9tX2NlbnRlcl0nLCBmdW5jdGlvbiAoZXYpIHtcblx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldFxuXHRcdGlmICghdGFyZ2V0LnNuYWNrYmFyKSB7XG5cdFx0XHR0YXJnZXQuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKVxuXHRcdH1cblx0XHR0YXJnZXQuc25hY2tiYXIuc2luZ2xlKHRhcmdldCwgJ+S4i+S4rScgLCdib3R0b20tY2VudGVyJylcblx0fSlcblx0Lm9uKCdjbGljaycsICdbc25hY2tiYXJfYm90dG9tX3JpZ2h0XScsIGZ1bmN0aW9uIChldikge1xuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0fVxuXHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAn5LiL5Y+zJyAsJ2JvdHRvbS1yaWdodCcpXG5cdH0pXG5cdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX2N1c3RvbV9zdWNjZXNzXScsIGZ1bmN0aW9uIChldikge1xuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0fVxuXHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAnc3VjY2VzcycgLCAnJywgJ3N1Y2Nlc3MnKVxuXHR9KVxuXHQub24oJ2NsaWNrJywgJ1tzbmFja2Jhcl9jdXN0b21fZXJyb3JdJywgZnVuY3Rpb24gKGV2KSB7XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXRcblx0XHRpZiAoIXRhcmdldC5zbmFja2Jhcikge1xuXHRcdFx0dGFyZ2V0LnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKClcblx0XHR9XG5cdFx0dGFyZ2V0LnNuYWNrYmFyLnNpbmdsZSh0YXJnZXQsICdlcnJvcicgLCAnJywgJ2Vycm9yJylcblx0fSlcblx0Lm9uKCdjbGljaycsICdbc25hY2tiYXJfY3VzdG9tX3dhcm5dJywgZnVuY3Rpb24gKGV2KSB7XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXRcblx0XHRpZiAoIXRhcmdldC5zbmFja2Jhcikge1xuXHRcdFx0dGFyZ2V0LnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKClcblx0XHR9XG5cdFx0dGFyZ2V0LnNuYWNrYmFyLnNpbmdsZSh0YXJnZXQsICd3YXJuJyAsICcnLCAnd2FybicpXG5cdH0pXG5cdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX2N1c3RvbV9ub3JtYWxdJywgZnVuY3Rpb24gKGV2KSB7XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXRcblx0XHRpZiAoIXRhcmdldC5zbmFja2Jhcikge1xuXHRcdFx0dGFyZ2V0LnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKClcblx0XHR9XG5cdFx0dGFyZ2V0LnNuYWNrYmFyLnNpbmdsZSh0YXJnZXQsICdub3JtYWwnICwgJycsICdub3JtYWwnKVxuXHR9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGhhcyhleHBvcnRzLCBrZXkpKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXIsIElURVJBVE9SKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICBpZiAoY2xhc3NvZih0aGlzKSAhPSBOQU1FKSB0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGdldFdlYWsgPSByZXF1aXJlKCcuL19tZXRhJykuZ2V0V2VhaztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKTtcbnZhciAkaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgYXJyYXlGaW5kID0gY3JlYXRlQXJyYXlNZXRob2QoNSk7XG52YXIgYXJyYXlGaW5kSW5kZXggPSBjcmVhdGVBcnJheU1ldGhvZCg2KTtcbnZhciBpZCA9IDA7XG5cbi8vIGZhbGxiYWNrIGZvciB1bmNhdWdodCBmcm96ZW4ga2V5c1xudmFyIHVuY2F1Z2h0RnJvemVuU3RvcmUgPSBmdW5jdGlvbiAodGhhdCkge1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBVbmNhdWdodEZyb3plblN0b3JlKCkpO1xufTtcbnZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmEgPSBbXTtcbn07XG52YXIgZmluZFVuY2F1Z2h0RnJvemVuID0gZnVuY3Rpb24gKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuVW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gIGdldDogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmIChlbnRyeSkgcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IGZpbmRVbmNhdWdodEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmIChlbnRyeSkgZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbiAoaXQpIHtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmICh+aW5kZXgpIHRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll90ID0gTkFNRTsgICAgICAvLyBjb2xsZWN0aW9uIHR5cGVcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RzXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSlbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSkgJiYgZGVsZXRlIGRhdGFbdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGtleSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSkuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhICYmICRoYXMoZGF0YSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZGF0YSA9IGdldFdlYWsoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG4gICAgaWYgKGRhdGEgPT09IHRydWUpIHVuY2F1Z2h0RnJvemVuU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xuICAgIGVsc2UgZGF0YVt0aGF0Ll9pXSA9IHZhbHVlO1xuICAgIHJldHVybiB0aGF0O1xuICB9LFxuICB1ZnN0b3JlOiB1bmNhdWdodEZyb3plblN0b3JlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJGl0ZXJEZXRlY3QgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpIHsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZiAodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IG5ldyBDKGl0ZXIpOyB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBDKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbiAodGFyZ2V0LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UoKSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpIGRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtZmxhdE1hcC8jc2VjLUZsYXR0ZW5JbnRvQXJyYXlcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSByZXF1aXJlKCcuL193a3MnKSgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5JbnRvQXJyYXkodGFyZ2V0LCBvcmlnaW5hbCwgc291cmNlLCBzb3VyY2VMZW4sIHN0YXJ0LCBkZXB0aCwgbWFwcGVyLCB0aGlzQXJnKSB7XG4gIHZhciB0YXJnZXRJbmRleCA9IHN0YXJ0O1xuICB2YXIgc291cmNlSW5kZXggPSAwO1xuICB2YXIgbWFwRm4gPSBtYXBwZXIgPyBjdHgobWFwcGVyLCB0aGlzQXJnLCAzKSA6IGZhbHNlO1xuICB2YXIgZWxlbWVudCwgc3ByZWFkYWJsZTtcblxuICB3aGlsZSAoc291cmNlSW5kZXggPCBzb3VyY2VMZW4pIHtcbiAgICBpZiAoc291cmNlSW5kZXggaW4gc291cmNlKSB7XG4gICAgICBlbGVtZW50ID0gbWFwRm4gPyBtYXBGbihzb3VyY2Vbc291cmNlSW5kZXhdLCBzb3VyY2VJbmRleCwgb3JpZ2luYWwpIDogc291cmNlW3NvdXJjZUluZGV4XTtcblxuICAgICAgc3ByZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgaWYgKGlzT2JqZWN0KGVsZW1lbnQpKSB7XG4gICAgICAgIHNwcmVhZGFibGUgPSBlbGVtZW50W0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgICAgICAgc3ByZWFkYWJsZSA9IHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcHJlYWRhYmxlICYmIGRlcHRoID4gMCkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IGZsYXR0ZW5JbnRvQXJyYXkodGFyZ2V0LCBvcmlnaW5hbCwgZWxlbWVudCwgdG9MZW5ndGgoZWxlbWVudC5sZW5ndGgpLCB0YXJnZXRJbmRleCwgZGVwdGggLSAxKSAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMHgxZmZmZmZmZmZmZmZmZikgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgICAgIHRhcmdldFt0YXJnZXRJbmRleF0gPSBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0YXJnZXRJbmRleCsrO1xuICAgIH1cbiAgICBzb3VyY2VJbmRleCsrO1xuICB9XG4gIHJldHVybiB0YXJnZXRJbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmbGF0dGVuSW50b0FycmF5O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwiLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpO1xudmFyIHBvdyA9IE1hdGgucG93O1xudmFyIEVQU0lMT04gPSBwb3coMiwgLTUyKTtcbnZhciBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKTtcbnZhciBNQVgzMiA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpO1xudmFyIE1JTjMyID0gcG93KDIsIC0xMjYpO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmZyb3VuZCB8fCBmdW5jdGlvbiBmcm91bmQoeCkge1xuICB2YXIgJGFicyA9IE1hdGguYWJzKHgpO1xuICB2YXIgJHNpZ24gPSBzaWduKHgpO1xuICB2YXIgYSwgcmVzdWx0O1xuICBpZiAoJGFicyA8IE1JTjMyKSByZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIGlmIChyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KSByZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgcmV0dXJuICRzaWduICogcmVzdWx0O1xufTtcbiIsIi8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zY2FsZSB8fCBmdW5jdGlvbiBzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpIHtcbiAgaWYgKFxuICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDBcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIHx8IHggIT0geFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgfHwgaW5Mb3cgIT0gaW5Mb3dcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIHx8IGluSGlnaCAhPSBpbkhpZ2hcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIHx8IG91dExvdyAhPSBvdXRMb3dcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIHx8IG91dEhpZ2ggIT0gb3V0SGlnaFxuICApIHJldHVybiBOYU47XG4gIGlmICh4ID09PSBJbmZpbml0eSB8fCB4ID09PSAtSW5maW5pdHkpIHJldHVybiB4O1xuICByZXR1cm4gKHggLSBpbkxvdykgKiAob3V0SGlnaCAtIG91dExvdykgLyAoaW5IaWdoIC0gaW5Mb3cpICsgb3V0TG93O1xufTtcbiIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbn07XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCJ2YXIgTWFwID0gcmVxdWlyZSgnLi9lczYubWFwJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdtZXRhZGF0YScpO1xudmFyIHN0b3JlID0gc2hhcmVkLnN0b3JlIHx8IChzaGFyZWQuc3RvcmUgPSBuZXcgKHJlcXVpcmUoJy4vZXM2LndlYWstbWFwJykpKCkpO1xuXG52YXIgZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSwgY3JlYXRlKSB7XG4gIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuICBpZiAoIXRhcmdldE1ldGFkYXRhKSB7XG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgc3RvcmUuc2V0KHRhcmdldCwgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgTWFwKCkpO1xuICB9XG4gIHZhciBrZXlNZXRhZGF0YSA9IHRhcmdldE1ldGFkYXRhLmdldCh0YXJnZXRLZXkpO1xuICBpZiAoIWtleU1ldGFkYXRhKSB7XG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdGFyZ2V0TWV0YWRhdGEuc2V0KHRhcmdldEtleSwga2V5TWV0YWRhdGEgPSBuZXcgTWFwKCkpO1xuICB9IHJldHVybiBrZXlNZXRhZGF0YTtcbn07XG52YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTywgUCkge1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcbiAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IG1ldGFkYXRhTWFwLmhhcyhNZXRhZGF0YUtleSk7XG59O1xudmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcbn07XG52YXIgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUCkge1xuICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIHRydWUpLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG59O1xudmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCB0YXJnZXRLZXksIGZhbHNlKTtcbiAgdmFyIGtleXMgPSBbXTtcbiAgaWYgKG1ldGFkYXRhTWFwKSBtZXRhZGF0YU1hcC5mb3JFYWNoKGZ1bmN0aW9uIChfLCBrZXkpIHsga2V5cy5wdXNoKGtleSk7IH0pO1xuICByZXR1cm4ga2V5cztcbn07XG52YXIgdG9NZXRhS2V5ID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG52YXIgZXhwID0gZnVuY3Rpb24gKE8pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgTyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RvcmU6IHN0b3JlLFxuICBtYXA6IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAsXG4gIGhhczogb3JkaW5hcnlIYXNPd25NZXRhZGF0YSxcbiAgZ2V0OiBvcmRpbmFyeUdldE93bk1ldGFkYXRhLFxuICBzZXQ6IG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEsXG4gIGtleXM6IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzLFxuICBrZXk6IHRvTWV0YUtleSxcbiAgZXhwOiBleHBcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRm9yY2VkIHJlcGxhY2VtZW50IHByb3RvdHlwZSBhY2Nlc3NvcnMgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19saWJyYXJ5JykgfHwgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgSyA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZiwgbm8tdXNlbGVzcy1jYWxsXG4gIF9fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLCBLLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xuICBkZWxldGUgcmVxdWlyZSgnLi9fZ2xvYmFsJylbS107XG59KTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiIsIi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIFJlZmxlY3QgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5SZWZsZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ09QTi5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgZnJvbTogZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgbWFwcGluZywgQSwgbiwgY2I7XG4gICAgYUZ1bmN0aW9uKHRoaXMpO1xuICAgIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChtYXBwaW5nKSBhRnVuY3Rpb24obWFwRm4pO1xuICAgIGlmIChzb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IHRoaXMoKTtcbiAgICBBID0gW107XG4gICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgIG4gPSAwO1xuICAgICAgY2IgPSBjdHgobWFwRm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBmdW5jdGlvbiAobmV4dEl0ZW0pIHtcbiAgICAgICAgQS5wdXNoKGNiKG5leHRJdGVtLCBuKyspKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBBLnB1c2gsIEEpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIEEgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIEFbbGVuZ3RoXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1yZXBlYXQnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcsIGxlZnQpIHtcbiAgdmFyIFMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gIHZhciBzdHJpbmdMZW5ndGggPSBTLmxlbmd0aDtcbiAgdmFyIGZpbGxTdHIgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZyk7XG4gIHZhciBpbnRNYXhMZW5ndGggPSB0b0xlbmd0aChtYXhMZW5ndGgpO1xuICBpZiAoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aCB8fCBmaWxsU3RyID09ICcnKSByZXR1cm4gUztcbiAgdmFyIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGg7XG4gIHZhciBzdHJpbmdGaWxsZXIgPSByZXBlYXQuY2FsbChmaWxsU3RyLCBNYXRoLmNlaWwoZmlsbExlbiAvIGZpbGxTdHIubGVuZ3RoKSk7XG4gIGlmIChzdHJpbmdGaWxsZXIubGVuZ3RoID4gZmlsbExlbikgc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKTtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc3BhY2VzID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJyk7XG52YXIgc3BhY2UgPSAnWycgKyBzcGFjZXMgKyAnXSc7XG52YXIgbm9uID0gJ1xcdTIwMGJcXHUwMDg1JztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEFMSUFTKSB7XG4gIHZhciBleHAgPSB7fTtcbiAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pO1xuICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuICBpZiAoQUxJQVMpIGV4cFtBTElBU10gPSBmbjtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbiAoc3RyaW5nLCBUWVBFKSB7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFNFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgU0VUKSwgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMCk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXdlYWsnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBXRUFLX01BUCA9ICdXZWFrTWFwJztcbnZhciBnZXRXZWFrID0gbWV0YS5nZXRXZWFrO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG52YXIgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IHdlYWsudWZzdG9yZTtcbnZhciB0bXAgPSB7fTtcbnZhciBJbnRlcm5hbE1hcDtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCkge1xuICAgIHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICB9O1xufTtcblxudmFyIG1ldGhvZHMgPSB7XG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChpc09iamVjdChrZXkpKSB7XG4gICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgIGlmIChkYXRhID09PSB0cnVlKSByZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh2YWxpZGF0ZSh0aGlzLCBXRUFLX01BUCkpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhW3RoaXMuX2ldIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gd2Vhay5kZWYodmFsaWRhdGUodGhpcywgV0VBS19NQVApLCBrZXksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcbnZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFdFQUtfTUFQLCB3cmFwcGVyLCBtZXRob2RzLCB3ZWFrLCB0cnVlLCB0cnVlKTtcblxuLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDc7IH0pKSB7XG4gIEludGVybmFsTWFwID0gd2Vhay5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBXRUFLX01BUCk7XG4gIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICBtZXRhLk5FRUQgPSB0cnVlO1xuICBlYWNoKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJvdG8gPSAkV2Vha01hcC5wcm90b3R5cGU7XG4gICAgdmFyIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGludGVybmFsIHdlYWttYXAgc2hpbVxuICAgICAgaWYgKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9mKSB0aGlzLl9mID0gbmV3IEludGVybmFsTWFwKCk7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9mW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1BcnJheS5wcm90b3R5cGUuZmxhdE1hcFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi9fZmxhdHRlbi1pbnRvLWFycmF5Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBmbGF0TWFwOiBmdW5jdGlvbiBmbGF0TWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgc291cmNlTGVuLCBBO1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICBzb3VyY2VMZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICBmbGF0dGVuSW50b0FycmF5KEEsIE8sIE8sIHNvdXJjZUxlbiwgMCwgMSwgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdmbGF0TWFwJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1BcnJheS5wcm90b3R5cGUuZmxhdHRlblxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBmbGF0dGVuSW50b0FycmF5ID0gcmVxdWlyZSgnLi9fZmxhdHRlbi1pbnRvLWFycmF5Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBmbGF0dGVuOiBmdW5jdGlvbiBmbGF0dGVuKC8qIGRlcHRoQXJnID0gMSAqLykge1xuICAgIHZhciBkZXB0aEFyZyA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzb3VyY2VMZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgZmxhdHRlbkludG9BcnJheShBLCBPLCBPLCBzb3VyY2VMZW4sIDAsIGRlcHRoQXJnID09PSB1bmRlZmluZWQgPyAxIDogdG9JbnRlZ2VyKGRlcHRoQXJnKSk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmxhdHRlbicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKSgnaW5jbHVkZXMnKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yd2FsZHJvbi90YzM5LW5vdGVzL2Jsb2IvbWFzdGVyL2VzNi8yMDE0LTA5L3NlcHQtMjUubWQjNTEwLWdsb2JhbGFzYXAtZm9yLWVucXVldWluZy1hLW1pY3JvdGFza1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIHByb2Nlc3MgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5wcm9jZXNzO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuJGV4cG9ydCgkZXhwb3J0LkcsIHtcbiAgYXNhcDogZnVuY3Rpb24gYXNhcChmbikge1xuICAgIHZhciBkb21haW4gPSBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW47XG4gICAgbWljcm90YXNrKGRvbWFpbiA/IGRvbWFpbi5iaW5kKGZuKSA6IGZuKTtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLWlzLWVycm9yXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0Vycm9yJywge1xuICBpc0Vycm9yOiBmdW5jdGlvbiBpc0Vycm9yKGl0KSB7XG4gICAgcmV0dXJuIGNvZihpdCkgPT09ICdFcnJvcic7XG4gIH1cbn0pO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuRywgeyBnbG9iYWw6IHJlcXVpcmUoJy4vX2dsb2JhbCcpIH0pO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnTWFwJyk7XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ01hcCcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpIH0pO1xuIiwiLy8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjbGFtcDogZnVuY3Rpb24gY2xhbXAoeCwgbG93ZXIsIHVwcGVyKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHVwcGVyLCBNYXRoLm1heChsb3dlciwgeCkpO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgREVHX1BFUl9SQUQ6IE1hdGguUEkgLyAxODAgfSk7XG4iLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIFJBRF9QRVJfREVHID0gMTgwIC8gTWF0aC5QSTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBkZWdyZWVzOiBmdW5jdGlvbiBkZWdyZWVzKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIFJBRF9QRVJfREVHO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vcndhbGRyb24uZ2l0aHViLmlvL3Byb3Bvc2FsLW1hdGgtZXh0ZW5zaW9ucy9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgc2NhbGUgPSByZXF1aXJlKCcuL19tYXRoLXNjYWxlJyk7XG52YXIgZnJvdW5kID0gcmVxdWlyZSgnLi9fbWF0aC1mcm91bmQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBmc2NhbGU6IGZ1bmN0aW9uIGZzY2FsZSh4LCBpbkxvdywgaW5IaWdoLCBvdXRMb3csIG91dEhpZ2gpIHtcbiAgICByZXR1cm4gZnJvdW5kKHNjYWxlKHgsIGluTG93LCBpbkhpZ2gsIG91dExvdywgb3V0SGlnaCkpO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSkge1xuICAgIHZhciAkeDAgPSB4MCA+Pj4gMDtcbiAgICB2YXIgJHgxID0geDEgPj4+IDA7XG4gICAgdmFyICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgKyAoeTEgPj4+IDApICsgKCgkeDAgJiAkeTAgfCAoJHgwIHwgJHkwKSAmIH4oJHgwICsgJHkwID4+PiAwKSkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xuIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQnJlbmRhbkVpY2gvNDI5NGQ1YzIxMmE2ZDIyNTQ3MDNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaW11bGg6IGZ1bmN0aW9uIGltdWxoKHUsIHYpIHtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmO1xuICAgIHZhciAkdSA9ICt1O1xuICAgIHZhciAkdiA9ICt2O1xuICAgIHZhciB1MCA9ICR1ICYgVUlOVDE2O1xuICAgIHZhciB2MCA9ICR2ICYgVUlOVDE2O1xuICAgIHZhciB1MSA9ICR1ID4+IDE2O1xuICAgIHZhciB2MSA9ICR2ID4+IDE2O1xuICAgIHZhciB0ID0gKHUxICogdjAgPj4+IDApICsgKHUwICogdjAgPj4+IDE2KTtcbiAgICByZXR1cm4gdTEgKiB2MSArICh0ID4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4gMTYpO1xuICB9XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlzdWJoOiBmdW5jdGlvbiBpc3ViaCh4MCwgeDEsIHkwLCB5MSkge1xuICAgIHZhciAkeDAgPSB4MCA+Pj4gMDtcbiAgICB2YXIgJHgxID0geDEgPj4+IDA7XG4gICAgdmFyICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgLSAoeTEgPj4+IDApIC0gKCh+JHgwICYgJHkwIHwgfigkeDAgXiAkeTApICYgJHgwIC0gJHkwID4+PiAwKSA+Pj4gMzEpIHwgMDtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IFJBRF9QRVJfREVHOiAxODAgLyBNYXRoLlBJIH0pO1xuIiwiLy8gaHR0cHM6Ly9yd2FsZHJvbi5naXRodWIuaW8vcHJvcG9zYWwtbWF0aC1leHRlbnNpb25zL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBERUdfUEVSX1JBRCA9IE1hdGguUEkgLyAxODA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgcmFkaWFuczogZnVuY3Rpb24gcmFkaWFucyhkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBERUdfUEVSX1JBRDtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL3J3YWxkcm9uLmdpdGh1Yi5pby9wcm9wb3NhbC1tYXRoLWV4dGVuc2lvbnMvXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IHNjYWxlOiByZXF1aXJlKCcuL19tYXRoLXNjYWxlJykgfSk7XG4iLCIvLyBodHRwOi8vamZiYXN0aWVuLmdpdGh1Yi5pby9wYXBlcnMvTWF0aC5zaWduYml0Lmh0bWxcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgc2lnbmJpdDogZnVuY3Rpb24gc2lnbmJpdCh4KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuICh4ID0gK3gpICE9IHggPyB4IDogeCA9PSAwID8gMSAvIHggPT0gSW5maW5pdHkgOiB4ID4gMDtcbn0gfSk7XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB1bXVsaDogZnVuY3Rpb24gdW11bGgodSwgdikge1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmY7XG4gICAgdmFyICR1ID0gK3U7XG4gICAgdmFyICR2ID0gK3Y7XG4gICAgdmFyIHUwID0gJHUgJiBVSU5UMTY7XG4gICAgdmFyIHYwID0gJHYgJiBVSU5UMTY7XG4gICAgdmFyIHUxID0gJHUgPj4+IDE2O1xuICAgIHZhciB2MSA9ICR2ID4+PiAxNjtcbiAgICB2YXIgdCA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG4gICAgcmV0dXJuIHUxICogdjEgKyAodCA+Pj4gMTYpICsgKCh1MCAqIHYxID4+PiAwKSArICh0ICYgVUlOVDE2KSA+Pj4gMTYpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG5cbi8vIEIuMi4yLjIgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcilcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2RlZmluZUdldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcikge1xuICAgICRkZWZpbmVQcm9wZXJ0eS5mKHRvT2JqZWN0KHRoaXMpLCBQLCB7IGdldDogYUZ1bmN0aW9uKGdldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xuXG4vLyBCLjIuMi4zIE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVTZXR0ZXJfXyhQLCBzZXR0ZXIpXG5yZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICRleHBvcnQoJGV4cG9ydC5QICsgcmVxdWlyZSgnLi9fb2JqZWN0LWZvcmNlZC1wYW0nKSwgJ09iamVjdCcsIHtcbiAgX19kZWZpbmVTZXR0ZXJfXzogZnVuY3Rpb24gX19kZWZpbmVTZXR0ZXJfXyhQLCBzZXR0ZXIpIHtcbiAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwgeyBzZXQ6IGFGdW5jdGlvbihzZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gIH1cbn0pO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi9fb3duLWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgICB2YXIgZ2V0RGVzYyA9IGdPUEQuZjtcbiAgICB2YXIga2V5cyA9IG93bktleXMoTyk7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5LCBkZXNjO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGkpIHtcbiAgICAgIGRlc2MgPSBnZXREZXNjKE8sIGtleSA9IGtleXNbaSsrXSk7XG4gICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSwgZGVzYyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG4vLyBCLjIuMi40IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBHZXR0ZXJfXyhQKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fbG9va3VwR2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwR2V0dGVyX18oUCkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgICB2YXIgRDtcbiAgICBkbyB7XG4gICAgICBpZiAoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSkgcmV0dXJuIEQuZ2V0O1xuICAgIH0gd2hpbGUgKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG4vLyBCLjIuMi41IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBTZXR0ZXJfXyhQKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fbG9va3VwU2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwU2V0dGVyX18oUCkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgICB2YXIgRDtcbiAgICBkbyB7XG4gICAgICBpZiAoRCA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBLKSkgcmV0dXJuIEQuc2V0O1xuICAgIH0gd2hpbGUgKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gIH1cbn0pO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBPQlNFUlZBQkxFID0gcmVxdWlyZSgnLi9fd2tzJykoJ29ic2VydmFibGUnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBSRVRVUk4gPSBmb3JPZi5SRVRVUk47XG5cbnZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZuID09IG51bGwgPyB1bmRlZmluZWQgOiBhRnVuY3Rpb24oZm4pO1xufTtcblxudmFyIGNsZWFudXBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gIHZhciBjbGVhbnVwID0gc3Vic2NyaXB0aW9uLl9jO1xuICBpZiAoY2xlYW51cCkge1xuICAgIHN1YnNjcmlwdGlvbi5fYyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwKCk7XG4gIH1cbn07XG5cbnZhciBzdWJzY3JpcHRpb25DbG9zZWQgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gIHJldHVybiBzdWJzY3JpcHRpb24uX28gPT09IHVuZGVmaW5lZDtcbn07XG5cbnZhciBjbG9zZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgaWYgKCFzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSkge1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gIH1cbn07XG5cbnZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIHN1YnNjcmliZXIpIHtcbiAgYW5PYmplY3Qob2JzZXJ2ZXIpO1xuICB0aGlzLl9jID0gdW5kZWZpbmVkO1xuICB0aGlzLl9vID0gb2JzZXJ2ZXI7XG4gIG9ic2VydmVyID0gbmV3IFN1YnNjcmlwdGlvbk9ic2VydmVyKHRoaXMpO1xuICB0cnkge1xuICAgIHZhciBjbGVhbnVwID0gc3Vic2NyaWJlcihvYnNlcnZlcik7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IGNsZWFudXA7XG4gICAgaWYgKGNsZWFudXAgIT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjbGVhbnVwLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSBjbGVhbnVwID0gZnVuY3Rpb24gKCkgeyBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgIGVsc2UgYUZ1bmN0aW9uKGNsZWFudXApO1xuICAgICAgdGhpcy5fYyA9IGNsZWFudXA7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgcmV0dXJuO1xuICB9IGlmIChzdWJzY3JpcHRpb25DbG9zZWQodGhpcykpIGNsZWFudXBTdWJzY3JpcHRpb24odGhpcyk7XG59O1xuXG5TdWJzY3JpcHRpb24ucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoe30sIHtcbiAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkgeyBjbG9zZVN1YnNjcmlwdGlvbih0aGlzKTsgfVxufSk7XG5cbnZhciBTdWJzY3JpcHRpb25PYnNlcnZlciA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgdGhpcy5fcyA9IHN1YnNjcmlwdGlvbjtcbn07XG5cblN1YnNjcmlwdGlvbk9ic2VydmVyLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKHt9LCB7XG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQodmFsdWUpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZiAoIXN1YnNjcmlwdGlvbkNsb3NlZChzdWJzY3JpcHRpb24pKSB7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBzdWJzY3JpcHRpb24uX287XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbSA9IGdldE1ldGhvZChvYnNlcnZlci5uZXh0KTtcbiAgICAgICAgaWYgKG0pIHJldHVybiBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbG9zZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcih2YWx1ZSkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgIGlmIChzdWJzY3JpcHRpb25DbG9zZWQoc3Vic2NyaXB0aW9uKSkgdGhyb3cgdmFsdWU7XG4gICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgaWYgKCFtKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHZhbHVlID0gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGNsZWFudXBTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh2YWx1ZSkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLl9zO1xuICAgIGlmICghc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpIHtcbiAgICAgIHZhciBvYnNlcnZlciA9IHN1YnNjcmlwdGlvbi5fbztcbiAgICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtID0gZ2V0TWV0aG9kKG9ic2VydmVyLmNvbXBsZXRlKTtcbiAgICAgICAgdmFsdWUgPSBtID8gbS5jYWxsKG9ic2VydmVyLCB2YWx1ZSkgOiB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cbnZhciAkT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlcikge1xuICBhbkluc3RhbmNlKHRoaXMsICRPYnNlcnZhYmxlLCAnT2JzZXJ2YWJsZScsICdfZicpLl9mID0gYUZ1bmN0aW9uKHN1YnNjcmliZXIpO1xufTtcblxucmVkZWZpbmVBbGwoJE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24ob2JzZXJ2ZXIsIHRoaXMuX2YpO1xuICB9LFxuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgKGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgYUZ1bmN0aW9uKGZuKTtcbiAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGF0LnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZm4odmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgY29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxucmVkZWZpbmVBbGwoJE9ic2VydmFibGUsIHtcbiAgZnJvbTogZnVuY3Rpb24gZnJvbSh4KSB7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZTtcbiAgICB2YXIgbWV0aG9kID0gZ2V0TWV0aG9kKGFuT2JqZWN0KHgpW09CU0VSVkFCTEVdKTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFuT2JqZWN0KG1ldGhvZC5jYWxsKHgpKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlLmNvbnN0cnVjdG9yID09PSBDID8gb2JzZXJ2YWJsZSA6IG5ldyBDKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGZvck9mKHgsIGZhbHNlLCBmdW5jdGlvbiAoaXQpIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChpdCk7XG4gICAgICAgICAgICAgIGlmIChkb25lKSByZXR1cm4gUkVUVVJOO1xuICAgICAgICAgICAgfSkgPT09IFJFVFVSTikgcmV0dXJuO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChkb25lKSB0aHJvdyBlO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IGRvbmUgPSB0cnVlOyB9O1xuICAgIH0pO1xuICB9LFxuICBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShsKTsgaSA8IGw7KSBpdGVtc1tpXSA9IGFyZ3VtZW50c1tpKytdO1xuICAgIHJldHVybiBuZXcgKHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nID8gdGhpcyA6ICRPYnNlcnZhYmxlKShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW1zW2pdKTtcbiAgICAgICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IGRvbmUgPSB0cnVlOyB9O1xuICAgIH0pO1xuICB9XG59KTtcblxuaGlkZSgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIE9CU0VSVkFCTEUsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuRywgeyBPYnNlcnZhYmxlOiAkT2JzZXJ2YWJsZSB9KTtcblxucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnT2JzZXJ2YWJsZScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcbnZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuXG5tZXRhZGF0YS5leHAoeyBkZWZpbmVNZXRhZGF0YTogZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gIG9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIGFuT2JqZWN0KHRhcmdldCksIHRvTWV0YUtleSh0YXJnZXRLZXkpKTtcbn0gfSk7XG4iLCJ2YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xudmFyIGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAgPSBtZXRhZGF0YS5tYXA7XG52YXIgc3RvcmUgPSBtZXRhZGF0YS5zdG9yZTtcblxubWV0YWRhdGEuZXhwKHsgZGVsZXRlTWV0YWRhdGE6IGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgLyogLCB0YXJnZXRLZXkgKi8pIHtcbiAgdmFyIHRhcmdldEtleSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSk7XG4gIHZhciBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gIGlmIChtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkIHx8ICFtZXRhZGF0YU1hcFsnZGVsZXRlJ10obWV0YWRhdGFLZXkpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChtZXRhZGF0YU1hcC5zaXplKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIHRhcmdldE1ldGFkYXRhID0gc3RvcmUuZ2V0KHRhcmdldCk7XG4gIHRhcmdldE1ldGFkYXRhWydkZWxldGUnXSh0YXJnZXRLZXkpO1xuICByZXR1cm4gISF0YXJnZXRNZXRhZGF0YS5zaXplIHx8IHN0b3JlWydkZWxldGUnXSh0YXJnZXQpO1xufSB9KTtcbiIsInZhciBTZXQgPSByZXF1aXJlKCcuL2VzNi5zZXQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xudmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5cztcbnZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG5cbnZhciBvcmRpbmFyeU1ldGFkYXRhS2V5cyA9IGZ1bmN0aW9uIChPLCBQKSB7XG4gIHZhciBvS2V5cyA9IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApO1xuICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIGlmIChwYXJlbnQgPT09IG51bGwpIHJldHVybiBvS2V5cztcbiAgdmFyIHBLZXlzID0gb3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcbiAgcmV0dXJuIHBLZXlzLmxlbmd0aCA/IG9LZXlzLmxlbmd0aCA/IGZyb20obmV3IFNldChvS2V5cy5jb25jYXQocEtleXMpKSkgOiBwS2V5cyA6IG9LZXlzO1xufTtcblxubWV0YWRhdGEuZXhwKHsgZ2V0TWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0IC8qICwgdGFyZ2V0S2V5ICovKSB7XG4gIHJldHVybiBvcmRpbmFyeU1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMV0pKTtcbn0gfSk7XG4iLCJ2YXIgbWV0YWRhdGEgPSByZXF1aXJlKCcuL19tZXRhZGF0YScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhcztcbnZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gbWV0YWRhdGEuZ2V0O1xudmFyIHRvTWV0YUtleSA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5R2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAoTWV0YWRhdGFLZXksIE8sIFApIHtcbiAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICBpZiAoaGFzT3duKSByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIHZhciBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgcmV0dXJuIHBhcmVudCAhPT0gbnVsbCA/IG9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCkgOiB1bmRlZmluZWQ7XG59O1xuXG5tZXRhZGF0YS5leHAoeyBnZXRNZXRhZGF0YTogZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59IH0pO1xuIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5cztcbnZhciB0b01ldGFLZXkgPSBtZXRhZGF0YS5rZXk7XG5cbm1ldGFkYXRhLmV4cCh7IGdldE93bk1ldGFkYXRhS2V5czogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlPd25NZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG59IH0pO1xuIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXQ7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoeyBnZXRPd25NZXRhZGF0YTogZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59IH0pO1xuIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXM7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuXG52YXIgb3JkaW5hcnlIYXNNZXRhZGF0YSA9IGZ1bmN0aW9uIChNZXRhZGF0YUtleSwgTywgUCkge1xuICB2YXIgaGFzT3duID0gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gIGlmIChoYXNPd24pIHJldHVybiB0cnVlO1xuICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogZmFsc2U7XG59O1xuXG5tZXRhZGF0YS5leHAoeyBoYXNNZXRhZGF0YTogZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59IH0pO1xuIiwidmFyIG1ldGFkYXRhID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEgPSBtZXRhZGF0YS5oYXM7XG52YXIgdG9NZXRhS2V5ID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoeyBoYXNPd25NZXRhZGF0YTogZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiAsIHRhcmdldEtleSAqLykge1xuICByZXR1cm4gb3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59IH0pO1xuIiwidmFyICRtZXRhZGF0YSA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgdG9NZXRhS2V5ID0gJG1ldGFkYXRhLmtleTtcbnZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gJG1ldGFkYXRhLnNldDtcblxuJG1ldGFkYXRhLmV4cCh7IG1ldGFkYXRhOiBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gICAgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShcbiAgICAgIG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLFxuICAgICAgKHRhcmdldEtleSAhPT0gdW5kZWZpbmVkID8gYW5PYmplY3QgOiBhRnVuY3Rpb24pKHRhcmdldCksXG4gICAgICB0b01ldGFLZXkodGFyZ2V0S2V5KVxuICAgICk7XG4gIH07XG59IH0pO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0LmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnU2V0Jyk7XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1NldCcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7IHRvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIGF0OiBmdW5jdGlvbiBhdChwb3MpIHtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9TdHJpbmcucHJvdG90eXBlLm1hdGNoQWxsL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBnZXRGbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgUmVnRXhwUHJvdG8gPSBSZWdFeHAucHJvdG90eXBlO1xuXG52YXIgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yID0gZnVuY3Rpb24gKHJlZ2V4cCwgc3RyaW5nKSB7XG4gIHRoaXMuX3IgPSByZWdleHA7XG4gIHRoaXMuX3MgPSBzdHJpbmc7XG59O1xuXG5yZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpKCRSZWdFeHBTdHJpbmdJdGVyYXRvciwgJ1JlZ0V4cCBTdHJpbmcnLCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgbWF0Y2ggPSB0aGlzLl9yLmV4ZWModGhpcy5fcyk7XG4gIHJldHVybiB7IHZhbHVlOiBtYXRjaCwgZG9uZTogbWF0Y2ggPT09IG51bGwgfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgbWF0Y2hBbGw6IGZ1bmN0aW9uIG1hdGNoQWxsKHJlZ2V4cCkge1xuICAgIGRlZmluZWQodGhpcyk7XG4gICAgaWYgKCFpc1JlZ0V4cChyZWdleHApKSB0aHJvdyBUeXBlRXJyb3IocmVnZXhwICsgJyBpcyBub3QgYSByZWdleHAhJyk7XG4gICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgdmFyIGZsYWdzID0gJ2ZsYWdzJyBpbiBSZWdFeHBQcm90byA/IFN0cmluZyhyZWdleHAuZmxhZ3MpIDogZ2V0RmxhZ3MuY2FsbChyZWdleHApO1xuICAgIHZhciByeCA9IG5ldyBSZWdFeHAocmVnZXhwLnNvdXJjZSwgfmZsYWdzLmluZGV4T2YoJ2cnKSA/IGZsYWdzIDogJ2cnICsgZmxhZ3MpO1xuICAgIHJ4Lmxhc3RJbmRleCA9IHRvTGVuZ3RoKHJlZ2V4cC5sYXN0SW5kZXgpO1xuICAgIHJldHVybiBuZXcgJFJlZ0V4cFN0cmluZ0l0ZXJhdG9yKHJ4LCBTKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkcGFkID0gcmVxdWlyZSgnLi9fc3RyaW5nLXBhZCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4vX3VzZXItYWdlbnQnKTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzI4MFxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAvVmVyc2lvblxcLzEwXFwuXFxkKyhcXC5cXGQrKT8gU2FmYXJpXFwvLy50ZXN0KHVzZXJBZ2VudCksICdTdHJpbmcnLCB7XG4gIHBhZEVuZDogZnVuY3Rpb24gcGFkRW5kKG1heExlbmd0aCAvKiAsIGZpbGxTdHJpbmcgPSAnICcgKi8pIHtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmYWxzZSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc3RyaW5nLXBhZC1zdGFydC1lbmRcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHBhZCA9IHJlcXVpcmUoJy4vX3N0cmluZy1wYWQnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuL191c2VyLWFnZW50Jyk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8yODBcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogL1ZlcnNpb25cXC8xMFxcLlxcZCsoXFwuXFxkKyk/IFNhZmFyaVxcLy8udGVzdCh1c2VyQWdlbnQpLCAnU3RyaW5nJywge1xuICBwYWRTdGFydDogZnVuY3Rpb24gcGFkU3RhcnQobWF4TGVuZ3RoIC8qICwgZmlsbFN0cmluZyA9ICcgJyAqLykge1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRydWUpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vX3N0cmluZy10cmltJykoJ3RyaW1MZWZ0JywgZnVuY3Rpb24gKCR0cmltKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltTGVmdCgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMSk7XG4gIH07XG59LCAndHJpbVN0YXJ0Jyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5yZXF1aXJlKCcuL19zdHJpbmctdHJpbScpKCd0cmltUmlnaHQnLCBmdW5jdGlvbiAoJHRyaW0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1SaWdodCgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMik7XG4gIH07XG59LCAndHJpbUVuZCcpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTeXN0ZW0nLCB7IGdsb2JhbDogcmVxdWlyZSgnLi9fZ2xvYmFsJykgfSk7XG4iLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy13ZWFrbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnV2Vha01hcCcpO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha21hcC5vZlxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tb2YnKSgnV2Vha01hcCcpO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtd2Vha3NldC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1dlYWtTZXQnKTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXdlYWtzZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1dlYWtTZXQnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGFub255bW91cyhsb2NhbHMsIGZpbHRlcnMsIGVzY2FwZSwgcmV0aHJvd1xuLypgYCovKSB7XG5lc2NhcGUgPSBlc2NhcGUgfHwgZnVuY3Rpb24gKGh0bWwpe1xuICByZXR1cm4gU3RyaW5nKGh0bWwpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG52YXIgYnVmID0gW107XG53aXRoIChsb2NhbHMgfHwge30pIHsgKGZ1bmN0aW9uKCl7IFxuIGJ1Zi5wdXNoKCc8ZGl2IGNsYXNzPVwib3V0XCI+XFxuXHQ8aDI+cGFnaW5hdGlvbuWIhumhtTwvaDI+XFxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XFxuXHRcdDxoND7ln7rnoYDnlKjms5U8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstcGFnaW5hdGlvblwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXBhZ2luYXRpb24taXRlbSBtay1wYWdpbmF0aW9uLWl0ZW0tcHJlXCI+PDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXBhZ2luYXRpb24taXRlbVwiPjE8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1wYWdpbmF0aW9uLWl0ZW0gIG1rLXBhZ2luYXRpb24taXRlbS1wcmUtbW9yZVwiPi4uLjwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXBhZ2luYXRpb24taXRlbVwiPjg8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1wYWdpbmF0aW9uLWl0ZW1cIj45PC9kaXY+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstcGFnaW5hdGlvbi1pdGVtIGlzLWFjdGl2ZVwiPjEwPC9kaXY+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstcGFnaW5hdGlvbi1pdGVtXCI+MTE8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1wYWdpbmF0aW9uLWl0ZW1cIj4xMjwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXBhZ2luYXRpb24taXRlbSAgbWstcGFnaW5hdGlvbi1pdGVtLW5leHQtbW9yZVwiPi4uLjwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXBhZ2luYXRpb24taXRlbVwiPjEwMDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXBhZ2luYXRpb24taXRlbSBtay1wYWdpbmF0aW9uLWl0ZW0tbmV4dFwiPj48L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cXG4nKTsgfSkoKTtcbn0gXG5yZXR1cm4gYnVmLmpvaW4oJycpO1xufSkiLCJsZXQgcGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4vaW5kZXguZWpzJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHQkKCcjanNfcGFnaW5hdGlvbicpLmh0bWwocGFnaW5hdGlvbigpKVxuXG5cdGxldCBhcnIgPSBbdHJ1ZSwxLCdwcmUtbW9yZScsNCw1LDYsNyw4LCduZXh0LW1vcmUnLDEwMCwndHJ1ZSddXG5cdGZ1bmN0aW9uIHJlc2V0IChlbGUsIGFyciwgbnVtLCBjb3VudCwgZm4sKSB7XG5cdFx0Ly9bZmFsc2UsIDEsICdwcmUtbW9yZScsIDQsIDUsIDYsIDcsIDgsICduZXh0LW1vcmUnLCAxMDAsIHRydWVdXG5cdFx0ZWxlLmlubmVySFRNTCA9ICcnXG5cdFx0bGV0IGxlbiA9IDExXG5cdFx0bGV0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRsZXQgaXRlbVxuXHRcdGlmIChhcnJbMF0pIHtcblx0XHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0aXRlbS5jbGFzc05hbWUgPSAnbWstcGFnaW5hdGlvbi1pdGVtIG1rLXBhZ2luYXRpb24taXRlbS1wcmUnXG5cdFx0XHRpdGVtLmlubmVySFRNTCA9ICc8J1xuXHRcdFx0ZnJhZy5hcHBlbmRDaGlsZChpdGVtKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdGl0ZW0uY2xhc3NOYW1lID0gJ21rLXBhZ2luYXRpb24taXRlbSBtay1wYWdpbmF0aW9uLWl0ZW0tcHJlIGlzLWRpc2FibGVkJ1xuXHRcdFx0aXRlbS5pbm5lckhUTUwgPSAnPCdcblx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQoaXRlbSlcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8PSBsZW4gLSAyOyBpKyspIHtcblx0XHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0aWYgKGFycltpXSA9PT0gJ3ByZS1tb3JlJykge1xuXHRcdFx0XHRpdGVtLmNsYXNzTmFtZSA9ICdtay1wYWdpbmF0aW9uLWl0ZW0gbWstcGFnaW5hdGlvbi1pdGVtLXByZS1tb3JlJ1xuXHRcdFx0XHRpdGVtLmlubmVySFRNTCA9ICcuLi4nXG5cdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQoaXRlbSlcblx0XHRcdFx0Y29udGludWVcblx0XHRcdH1cblx0XHRcdGlmIChhcnJbaV0gPT09ICduZXh0LW1vcmUnKSB7XG5cdFx0XHRcdGl0ZW0uY2xhc3NOYW1lID0gJ21rLXBhZ2luYXRpb24taXRlbSBtay1wYWdpbmF0aW9uLWl0ZW0tbmV4dC1tb3JlJ1xuXHRcdFx0XHRpdGVtLmlubmVySFRNTCA9ICcuLi4nXG5cdFx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQoaXRlbSlcblx0XHRcdFx0Y29udGludWVcblx0XHRcdH1cblx0XHRcdGlmIChhcnJbaV0gPT09IG51bSkge1xuXHRcdFx0XHRpdGVtLmNsYXNzTmFtZSA9ICdpcy1hY3RpdmUnXG5cdFx0XHR9XG5cdFx0XHRpdGVtLmNsYXNzTmFtZSArPSAnIG1rLXBhZ2luYXRpb24taXRlbSdcblx0XHRcdGl0ZW0uaW5uZXJIVE1MID0gYXJyW2ldXG5cdFx0XHRmcmFnLmFwcGVuZENoaWxkKGl0ZW0pXG5cdFx0fVxuXHRcdGlmIChhcnJbbGVuIC0gMV0pIHtcblx0XHRcdGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0aXRlbS5jbGFzc05hbWUgPSAnbWstcGFnaW5hdGlvbi1pdGVtIG1rLXBhZ2luYXRpb24taXRlbS1uZXh0J1xuXHRcdFx0aXRlbS5pbm5lckhUTUwgPSAnPidcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRpdGVtLmNsYXNzTmFtZSA9ICdtay1wYWdpbmF0aW9uLWl0ZW0gbWstcGFnaW5hdGlvbi1pdGVtLW5leHQgaXMtZGlzYWJsZWQnXG5cdFx0XHRpdGVtLmlubmVySFRNTCA9ICc+J1xuXHRcdH1cblx0XHRmcmFnLmFwcGVuZENoaWxkKGl0ZW0pXG5cdFx0ZWxlLmFwcGVuZENoaWxkKGZyYWcpXG5cdFx0Zm4gJiYgZm4obnVtKVxuXHR9XG5cblx0JChkb2N1bWVudClcblx0XHQub24oJ21vdXNlbW92ZScsICcubWstcGFnaW5hdGlvbj4ubWstcGFnaW5hdGlvbi1pdGVtLXByZS1tb3JlJywgZnVuY3Rpb24gKGV2KSB7XG5cdFx0XHRsZXQgdGFyZ2V0ID0gZXYudGFyZ2V0XG5cdFx0XHR0YXJnZXQuaW5uZXJIVE1MID0gJzw8J1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW1vdmUnLCAnLm1rLXBhZ2luYXRpb24+Lm1rLXBhZ2luYXRpb24taXRlbS1uZXh0LW1vcmUnLCBmdW5jdGlvbiAoZXYpIHtcblx0XHRcdGxldCB0YXJnZXQgPSBldi50YXJnZXRcblx0XHRcdHRhcmdldC5pbm5lckhUTUwgPSAnPj4nXG5cdFx0fSlcblx0XHQub24oJ21vdXNlb3V0JywgJy5tay1wYWdpbmF0aW9uPi5tay1wYWdpbmF0aW9uLWl0ZW0tcHJlLW1vcmUnLCBmdW5jdGlvbiAoZXYpIHtcblx0XHRcdGxldCB0YXJnZXQgPSBldi50YXJnZXRcblx0XHRcdHRhcmdldC5pbm5lckhUTUwgPSAnLi4uJ1xuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZW91dCcsICcubWstcGFnaW5hdGlvbj4ubWstcGFnaW5hdGlvbi1pdGVtLW5leHQtbW9yZScsIGZ1bmN0aW9uIChldikge1xuXHRcdFx0bGV0IHRhcmdldCA9IGV2LnRhcmdldFxuXHRcdFx0dGFyZ2V0LmlubmVySFRNTCA9ICcuLi4nXG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJy5tay1wYWdpbmF0aW9uPi5tay1wYWdpbmF0aW9uLWl0ZW0tcHJlOm5vdCguaXMtZGlzYWJsZWQpJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCBudW1cblx0XHRcdGxldCBhcnIgPSBbXVxuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0IHAgPSAkdGhpcy5wYXJlbnQoKVswXVxuXHRcdFx0bGV0IG4gPSArJHRoaXMuc2libGluZ3MoJy5tay1wYWdpbmF0aW9uLWl0ZW0uaXMtYWN0aXZlJykudGV4dCgpXG5cblx0XHRcdGlmIChuID4gOTYpIHtcblx0XHRcdFx0bnVtID0gbiAtIDFcblx0XHRcdFx0YXJyID0gW3RydWUsIDEsICdwcmUtbW9yZScsIDk0LCA5NSwgOTYsIDk3LCA5OCwgOTksIDEwMCwgdHJ1ZV1cblx0XHRcdH0gZWxzZSBpZiAobiA+IDYgJiYgbiA8PSA5Nikge1xuXHRcdFx0XHRudW0gPSBuIC0gMVxuXHRcdFx0XHRhcnIgPSBbdHJ1ZSwgMSwgJ3ByZS1tb3JlJywgbnVtIC0gMiwgbnVtIC0gMSwgbnVtLCBudW0gKyAxLCBudW0gKyAyLCAnbmV4dC1tb3JlJywgMTAwLCB0cnVlXVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG4gPT09IDIpIHtcblx0XHRcdFx0XHRudW0gPSBuIC0xXG5cdFx0XHRcdFx0YXJyID0gW2ZhbHNlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCAnbmV4dC1tb3JlJywgMTAwLCB0cnVlXVxuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bnVtID0gbiAtMVxuXHRcdFx0XHRcdGFyciA9IFt0cnVlLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCAnbmV4dC1tb3JlJywgMTAwLCB0cnVlXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXNldChwLCBhcnIsIG51bSwgMTAwKVxuXHRcdH0pXG5cdFx0Lm9uKCdjbGljaycsICcubWstcGFnaW5hdGlvbj4ubWstcGFnaW5hdGlvbi1pdGVtLW5leHQ6bm90KC5pcy1kaXNhYmxlZCknLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0IG51bVxuXHRcdFx0bGV0IGFyciA9IFtdXG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgcCA9ICR0aGlzLnBhcmVudCgpWzBdXG5cdFx0XHRsZXQgbiA9ICskdGhpcy5zaWJsaW5ncygnLm1rLXBhZ2luYXRpb24taXRlbS5pcy1hY3RpdmUnKS50ZXh0KClcblx0XHRcdGlmIChuIDwgNSkge1xuXHRcdFx0XHRudW0gPSBuICsgMVxuXHRcdFx0XHRhcnIgPSBbdHJ1ZSwgMSwgMiwgMywgNCwgNSwgNiwgNywgJ25leHQtbW9yZScsIDEwMCwgdHJ1ZV1cblx0XHRcdH0gZWxzZSBpZiAobiA8IDk5ICYmIG4gPj0gNSkge1xuXHRcdFx0XHRpZiAobiA+PSA5NSkge1xuXHRcdFx0XHRcdG51bSA9IG4gKyAxXG5cdFx0XHRcdFx0YXJyID0gW3RydWUsIDEsICdwcmUtbW9yZScsIDk0LCA5NSwgOTYsIDk3LCA5OCwgOTksIDEwMCwgdHJ1ZV1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRudW0gPSBuICsgMVxuXHRcdFx0XHRcdGFyciA9IFt0cnVlLCAxLCAncHJlLW1vcmUnLCBudW0gLSAyLCBudW0gLSAxLCBudW0sIG51bSArIDEsIG51bSArIDIsICduZXh0LW1vcmUnLCAxMDAsIHRydWVdXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG51bSA9IDEwMFxuXHRcdFx0XHRhcnIgPSBbdHJ1ZSwgMSwgJ3ByZS1tb3JlJywgOTQsIDk1LCA5NiwgOTcsIDk4LCA5OSwgMTAwLCBmYWxzZV1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc2V0KHAsIGFyciwgbnVtLCAxMDApXG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJy5tay1wYWdpbmF0aW9uPi5tay1wYWdpbmF0aW9uLWl0ZW06bm90KC5tay1wYWdpbmF0aW9uLWl0ZW0tbmV4dCk6bm90KC5tay1wYWdpbmF0aW9uLWl0ZW0tbmV4dC1tb3JlKTpub3QoLm1rLXBhZ2luYXRpb24taXRlbS1wcmUpOm5vdCgubWstcGFnaW5hdGlvbi1pdGVtLXByZS1tb3JlKTpub3QoLmlzLWFjdGl2ZSknLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0IG4gPSArJHRoaXMudGV4dCgpXG5cdFx0XHRsZXQgcCA9ICR0aGlzLnBhcmVudCgpWzBdXG5cdFx0XHRpZiAobiA8IDYpIHtcblx0XHRcdFx0YXJyID0gW3RydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsICduZXh0LW1vcmUnLCAxMDAsIHRydWVdXG5cdFx0XHR9IGVsc2UgaWYgKG4gPiA5NSkge1xuXHRcdFx0XHRhcnIgPSBbdHJ1ZSwgMSwgJ3ByZS1tb3JlJywgOTQsIDk1LCA5NiwgOTcsIDk4LCA5OSwgMTAwLCB0cnVlXVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXJyID0gW3RydWUsIDEsICdwcmUtbW9yZScsIG4gLSAyLCBuIC0gMSwgbiwgbiArIDEsIG4gKyAyLCAnbmV4dC1tb3JlJywgMTAwLCB0cnVlXVxuXHRcdFx0fVxuXHRcdFx0aWYgKG4gPT09IDEpIGFyclswXSA9IGZhbHNlXG5cdFx0XHRpZiAobiA9PT0gMTAwKSBhcnJbMTBdID0gZmFsc2Vcblx0XHRcdHJldHVybiByZXNldChwLCBhcnIsIG4sIDEwMClcblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLXBhZ2luYXRpb24+Lm1rLXBhZ2luYXRpb24taXRlbS1wcmUtbW9yZScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgbnVtXG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgbiA9ICskdGhpcy5zaWJsaW5ncygnLm1rLXBhZ2luYXRpb24taXRlbS5pcy1hY3RpdmUnKS50ZXh0KClcblx0XHRcdGxldCBwID0gJHRoaXMucGFyZW50KClbMF1cblx0XHRcdGlmIChuIDwgMTEpIHtcblx0XHRcdFx0bnVtID0gbiAtIDVcblx0XHRcdFx0YXJyID0gW3RydWUsIDEsIDIsIDMsIDQsIDUsIDYsIDcsICduZXh0LW1vcmUnLCAxMDAsIHRydWVdXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudW0gPSBuIC0gNVxuXHRcdFx0XHRhcnIgPSBbdHJ1ZSwgMSwgJ3ByZS1tb3JlJywgbnVtIC0gMiwgbnVtIC0gMSwgbnVtLCBudW0gKyAxLCBudW0gKyAyLCAnbmV4dC1tb3JlJywgMTAwLCB0cnVlXVxuXHRcdFx0fVxuXHRcdFx0aWYgKG51bSA9PT0gMSkgYXJyWzBdID0gZmFsc2Vcblx0XHRcdHJldHVybiByZXNldChwLCBhcnIsIG51bSwgMTAwKVxuXHRcdH0pXG5cdFx0Lm9uKCdjbGljaycsICcubWstcGFnaW5hdGlvbj4ubWstcGFnaW5hdGlvbi1pdGVtLW5leHQtbW9yZScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgbnVtXG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgbiA9ICskdGhpcy5zaWJsaW5ncygnLm1rLXBhZ2luYXRpb24taXRlbS5pcy1hY3RpdmUnKS50ZXh0KClcblx0XHRcdGxldCBwID0gJHRoaXMucGFyZW50KClbMF1cblx0XHRcdGlmIChuIDw9IDkwKSB7XG5cdFx0XHRcdG51bSA9IG4gKyA1XG5cdFx0XHRcdGFyciA9IFt0cnVlLCAxLCAncHJlLW1vcmUnLCBudW0gLSAyLCBudW0gLSAxLCBudW0sIG51bSArIDEsIG51bSArIDIsICduZXh0LW1vcmUnLCAxMDAsIHRydWVdXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudW0gPSBuICsgNVxuXHRcdFx0XHRhcnIgPSBbdHJ1ZSwgMSwgJ3ByZS1tb3JlJywgOTQsIDk1LCA5NiwgOTcsIDk4LCA5OSwgMTAwLCB0cnVlXVxuXHRcdFx0XHRpZiAobnVtID09PSAxMDApIGFyclsxMF0gPSBmYWxzZVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc2V0KHAsIGFyciwgbnVtLCAxMDApXG5cdFx0fSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0JChkb2N1bWVudClcblx0XHQub24oJ2NsaWNrJywgJy5tay1yYWRpby5pcy1kaXNhYmxlZCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLXJhZGlvJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHZhciAkY3QgPSAkKGUuY3VycmVudFRhcmdldClcblx0XHRcdGlmICgkY3QuaGFzQ2xhc3MoJ2lzLWNoZWNrZWQnKSkgcmV0dXJuXG5cdFx0XHRpZiAoJGN0Lmhhc0NsYXNzKCdpcy1kaXNhYmxlZCcpKSByZXR1cm5cblx0XHRcdCRjdC5zaWJsaW5ncygnLm1rLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKVxuXHRcdFx0JGN0LmFkZENsYXNzKCdpcy1jaGVja2VkJylcblx0XHRcdHZhciBwYXJhbSA9XHQkY3QuY2hpbGRyZW4oJy5tay1yYWRpb19faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS52YWwoKVxuXHRcdFx0JGN0LnRyaWdnZXIoJ3Nob3cubWsucmFkaW8nLCBwYXJhbSlcblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLXJhZGlvLWJ0bicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHR2YXIgJGN0ID0gJChlLmN1cnJlbnRUYXJnZXQpXG5cdFx0XHRpZiAoJGN0Lmhhc0NsYXNzKCdpcy1jaGVja2VkJykpIHJldHVyblxuXHRcdFx0aWYgKCRjdC5oYXNDbGFzcygnaXMtZGlzYWJsZWQnKSkgcmV0dXJuXG5cdFx0XHQkY3Quc2libGluZ3MoJy5tay1yYWRpby1idG4nKS5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHQkY3QuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKVxuXHRcdFx0dmFyIHBhcmFtID1cdCRjdC5jaGlsZHJlbignLm1rLXJhZGlvLWJ0bl9faW5wdXQnKS52YWwoKVxuXHRcdFx0JGN0LnRyaWdnZXIoJ3Nob3cubWsucmFkaW8uYnRuJywgcGFyYW0pXG5cdFx0fSlcblx0XHQub24oJ3Nob3cubWsucmFkaW8uYnRuJywgZnVuY3Rpb24gKGUsIHBhcmFtKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhwYXJhbSlcblx0XHR9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gYW5vbnltb3VzKGxvY2FscywgZmlsdGVycywgZXNjYXBlLCByZXRocm93XG4vKmBgKi8pIHtcbmVzY2FwZSA9IGVzY2FwZSB8fCBmdW5jdGlvbiAoaHRtbCl7XG4gIHJldHVybiBTdHJpbmcoaHRtbClcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcbnZhciBidWYgPSBbXTtcbndpdGggKGxvY2FscyB8fCB7fSkgeyAoZnVuY3Rpb24oKXsgXG4gYnVmLnB1c2goJzxkaXYgY2xhc3M9XCJvdXRcIj5cXG5cdDxoMj5zZWxlY3Q8L2gyPlxcblx0PGRpdiBjbGFzcz1cImJveFwiPlxcblx0XHQ8aDQ+5Z+656GA55So5rOVPC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdFwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0IG1rLWlucHV0LS1zdWZmaXhcIj5cXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCIgcGxhY2Vob2xkZXI9XCLor7fpgInmi6lcIiByZWFkb25seT5cXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dF9fc3VmZml4XCI+XFxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dF9fc3VmZml4LWlubmVyXCI+XFxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tZG93blwiIHN0eWxlPVwiY29sb3I6I2QxZDFkMVwiPjwvaT5cXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcFwiPlxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVcIj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIiBkYXRhLWl0ZW09MT5cXG5cdFx0XHRcdFx0XHRcdOaksOWtkOm4oVxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiIGRhdGEtaXRlbT0yPlxcblx0XHRcdFx0XHRcdFx054Ok6bG8XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCIgZGF0YS1pdGVtPTM+XFxuXHRcdFx0XHRcdFx0XHTng6TogolcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIiBkYXRhLWl0ZW09ND5cXG5cdFx0XHRcdFx0XHRcdOeBq+mUhVxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPlxcblx0XHRcdFx0XHRcdFx05Z+65Zu06Jm+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx0XHTlsI/pvpnomb5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHRcdOearuearuiZvlxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPlxcblx0XHRcdFx0XHRcdFx05r6z5rSy5aSn6b6Z6Jm+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTN0aW1lc1wiPjwvZGl2Plxcblx0XHQ8aDQ+5pyJ56aB55So6YCJ6aG5PC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdFwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0IG1rLWlucHV0LS1zdWZmaXhcIj5cXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCIgcGxhY2Vob2xkZXI9XCLor7fpgInmi6lcIiByZWFkb25seT5cXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dF9fc3VmZml4XCI+XFxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dF9fc3VmZml4LWlubmVyXCI+XFxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tZG93blwiIHN0eWxlPVwiY29sb3I6I2QxZDFkMVwiPjwvaT5cXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcFwiPlxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVcIj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHRcdOaksOWtkOm4oVxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbSBpcy1kaXNhYmxlZFwiPlxcblx0XHRcdFx0XHRcdFx054Ok6bG8XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx0XHTng6TogolcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHRcdOeBq+mUhVxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdFx0PGRpdiBjbGFzcz1cImdhcC0zdGltZXNcIj48L2Rpdj5cXG5cdFx0PGg0PuemgeeUqOeKtuaAgTwvaDQ+XFxuXHRcdDxkaXYgY2xhc3M9XCJtay13cmFwIHR5cGUtbm9ybWFsIGdhcFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QgaXMtZGlzYWJsZWRcIj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dCBpcy1kaXNhYmxlZCBtay1pbnB1dC0tc3VmZml4XCI+XFxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1rLWlucHV0X19pbm5lclwiIHBsYWNlaG9sZGVyPVwi6K+36YCJ5oupXCIgcmVhZG9ubHk+XFxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXRfX3N1ZmZpeFwiPlxcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXRfX3N1ZmZpeC1pbm5lclwiPlxcblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWRvd25cIiBzdHlsZT1cImNvbG9yOiNkMWQxZDFcIj48L2k+XFxuXHRcdFx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHBcIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51XCI+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx0XHTmpLDlrZDpuKFcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHRcdOeDpOmxvFxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPlxcblx0XHRcdFx0XHRcdFx054Ok6IKJXFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx0XHTngavplIVcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHRcdDxkaXYgY2xhc3M9XCJnYXAtM3RpbWVzXCI+PC9kaXY+XFxuXHRcdDxoND7ov5znqIvmkJzntKI8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0IHNlYXJjaFwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0XCI+XFxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1rLWlucHV0X19pbm5lclwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5YWz6ZSu5a2XXCI+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHBcIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51XCI+PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHRcdDwhLS0gPGRpdiBjbGFzcz1cImdhcC0zdGltZXNcIj48L2Rpdj5cXG5cdFx0PGg0PuWfuuehgOWkmumAiTwvaDQ+XFxuXHRcdDxkaXYgY2xhc3M9XCJtay13cmFwIHR5cGUtbm9ybWFsIGdhcFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QgbW9yZVwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdF9fdGFnc1wiPjwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLWlucHV0IG1rLWlucHV0LS1zdWZmaXhcIj5cXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCIgcGxhY2Vob2xkZXI9XCLor7fpgInmi6lcIiByZWFkb25seT5cXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dF9fc3VmZml4XCI+XFxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtay1pbnB1dF9fc3VmZml4LWlubmVyXCI+XFxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tZG93blwiIHN0eWxlPVwiY29sb3I6I2QxZDFkMVwiPjwvaT5cXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcCBtb3JlXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudVwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPlxcblx0XHRcdFx0XHRcdFx05qSw5a2Q6bihZGhmamFoZmthZGprYWZrYWpzZFxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPlxcblx0XHRcdFx0XHRcdFx054Ok6bG8XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+XFxuXHRcdFx0XHRcdFx0XHTng6TogolcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj5cXG5cdFx0XHRcdFx0XHRcdOeBq+mUhVxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj4gLS0+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cXG4nKTsgfSkoKTtcbn0gXG5yZXR1cm4gYnVmLmpvaW4oJycpO1xufSkiLCJsZXQgc2VsZWN0ID0gcmVxdWlyZSgnLi9pbmRleC5lanMnKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBpbml0IChkcCwgaW5wLCBjaG9vc2UpIHtcblx0XHRsZXQgJGRwID0gZHAgaW5zdGFuY2VvZiAkID8gZHAgOiAkKGRwKVxuXHRcdGxldCAkaW5wID0gaW5wIGluc3RhbmNlb2YgJCA/IGlucCA6ICQoaW5wKVxuXHRcdGxldCAkY2hpbGQgPSAkZHAuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAtbWVudScpXG5cdFx0bGV0ICRpdGVtID0gJGNoaWxkLmNoaWxkcmVuKCcubWstc2VsZWN0LWRwLW1lbnVfX2l0ZW0nKVxuXHRcdGxldCB0ZXh0ID0gJGlucC52YWwoKS50cmltKClcblx0XHQkaXRlbS5vZmYoJ2NsaWNrJylcblx0XHQkY2hpbGQuc2hvdygpXG5cdFx0JGl0ZW0uZWFjaCgoaSwgZSkgPT4ge1xuXHRcdFx0aWYgKGUuaW5uZXJUZXh0ID09PSB0ZXh0KSB7XG5cdFx0XHRcdCQoZSkuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChlKS5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdCRjaGlsZC5vbignY2xpY2snLCAnLm1rLXNlbGVjdC1kcC1tZW51X19pdGVtJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCAkdGhpcyA9ICQodGhpcylcblx0XHRcdGlmICghJHRoaXMuaGFzQ2xhc3MoJ2lzLWRpc2FibGVkJykpIHtcblx0XHRcdFx0JHRoaXMudHJpZ2dlcignc2hvdy5tay5zZWxlY3QuZHAnLCB0aGlzLmlubmVyVGV4dC50cmltKCkpXG5cdFx0XHR9IGVsc2UgaWYgKCR0aGlzLmhhc0NsYXNzKCdpcy1kaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0JGlucC52YWwodGhpcy5pbm5lclRleHQudHJpbSgpKVxuXHRcdFx0JGNoaWxkLmhpZGUoKVxuXHRcdFx0JCgnLm1hdHRlJykucmVtb3ZlKClcblx0XHR9KVxuXHRcdCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKGA8ZGl2IGNsYXNzPVwibWF0dGVcIj48L2Rpdj5gKVxuXHR9XG5cdCQoJyNqc19zZWxlY3QnKS5odG1sKHNlbGVjdCgpKVxuXHQkKGRvY3VtZW50KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLXNlbGVjdDpub3QoLmlzLWRpc2FibGVkKTpub3QoLnNlYXJjaCknLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0ID0gJChlLnRhcmdldClcblx0XHRcdGlmICgkdC5oYXNDbGFzcygnbWstc2VsZWN0LWRwJykpIHJldHVyblxuXHRcdFx0aWYgKCR0Lmhhc0NsYXNzKCdtay1zZWxlY3QtZHAtbWVudScpKSByZXR1cm5cblx0XHRcdGlmICgkdC5oYXNDbGFzcygnbWstc2VsZWN0LWRwLW1lbnVfX2l0ZW0nKSkgcmV0dXJuXG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJGkgPSAkdGhpcy5jaGlsZHJlbignLm1rLWlucHV0JykuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4JykuY2hpbGRyZW4oJy5tay1pbnB1dF9fc3VmZml4LWlubmVyJylcblx0XHRcdGxldCAkZHAgPSAkdGhpcy5jaGlsZHJlbignLm1rLXNlbGVjdC1kcCcpXG5cdFx0XHRsZXQgJGlucCA9ICR0aGlzLmNoaWxkcmVuKCcubWstaW5wdXQnKS5jaGlsZHJlbignLm1rLWlucHV0X19pbm5lcicpXG5cdFx0XHRsZXQgY2hvb3NlID0gJGlucC5kYXRhKCdjaG9vc2UnKVxuXG5cdFx0XHRpZigkaS5oYXNDbGFzcygnZG93bicpKSB7XG5cdFx0XHRcdCRpLnJlbW92ZUNsYXNzKCdkb3duJylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRpLmFkZENsYXNzKCdkb3duJylcblx0XHRcdH1cblx0XHRcdGluaXQoJGRwLCAkaW5wKVxuXG5cdFx0fSlcblx0XHQub24oJ2ZvY3VzJywgJy5tay1zZWxlY3Quc2VhcmNoPi5tay1pbnB1dD4ubWstaW5wdXRfX2lubmVyJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCAkdGhpcyA9ICQodGhpcylcblx0XHRcdGxldCBhcnIgPSBbJ2NoaW5hJywgJ3VzYScsICd1aycsICdrb3JlYScsICdqYXBhbiddXG5cdFx0XHRsZXQgdmFsID0gJHRoaXMudmFsKClcblxuXHRcdFx0bGV0ICRkcCA9ICR0aGlzLnBhcmVudCgpLnNpYmxpbmdzKCcubWstc2VsZWN0LWRwJylcblxuXHRcdFx0bGV0IHRtcCA9IGFyci5maWx0ZXIoZSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHZhbCwgJ2knKS50ZXN0KGUpXG5cdFx0XHR9KVxuXHRcdFx0bGV0IHN0ciA9ICcnXG5cdFx0XHR0bXAuZm9yRWFjaChlID0+IHtcblx0XHRcdFx0c3RyICs9IGA8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4ke2V9PC9kaXY+YFxuXHRcdFx0fSlcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoIXN0cikge1xuXHRcdFx0XHRcdCRkcC5jaGlsZHJlbignLm1rLXNlbGVjdC1kcC1tZW51JykuaHRtbChgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogIzg4ODtcIj7ml6DmlbDmja48L2Rpdj5gKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRkcC5jaGlsZHJlbignLm1rLXNlbGVjdC1kcC1tZW51JykuaHRtbChzdHIpXG5cdFx0XHRcdFx0JGRwLmNoaWxkcmVuKCcubWstc2VsZWN0LWRwLW1lbnUnKS5vbignY2xpY2snLCAnLm1rLXNlbGVjdC1kcC1tZW51X19pdGVtJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdCR0aGlzLnZhbCh0aGlzLmlubmVyVGV4dClcblx0XHRcdFx0XHRcdCRkcC5jaGlsZHJlbignLm1rLXNlbGVjdC1kcC1tZW51JykuaGlkZSgpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQkZHAuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAtbWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdH1cblxuXHRcdFx0fSwgMTAwKVxuXHRcdFx0JChkb2N1bWVudC5ib2R5KS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJtYXR0ZVwiPjwvZGl2PmApXG5cdFx0fSlcblx0XHQub24oJ2lucHV0JywgJy5tay1zZWxlY3Quc2VhcmNoPi5tay1pbnB1dD4ubWstaW5wdXRfX2lubmVyJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCAkdGhpcyA9ICQodGhpcylcblx0XHRcdGxldCBhcnIgPSBbJ2NoaW5hJywgJ3VzYScsICd1aycsICdrb3JlYScsICdqYXBhbiddXG5cdFx0XHRsZXQgdmFsID0gJHRoaXMudmFsKClcblxuXHRcdFx0bGV0ICRkcCA9ICR0aGlzLnBhcmVudCgpLnNpYmxpbmdzKCcubWstc2VsZWN0LWRwJylcblxuXHRcdFx0bGV0IHRtcCA9IGFyci5maWx0ZXIoZSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHZhbCwgJ2knKS50ZXN0KGUpXG5cdFx0XHR9KVxuXHRcdFx0bGV0IHN0ciA9ICcnXG5cdFx0XHR0bXAuZm9yRWFjaChlID0+IHtcblx0XHRcdFx0c3RyICs9IGA8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4ke2V9PC9kaXY+YFxuXHRcdFx0fSlcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoIXN0cikge1xuXHRcdFx0XHRcdCRkcC5jaGlsZHJlbignLm1rLXNlbGVjdC1kcC1tZW51JykuaHRtbChgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogIzg4ODtcIj7ml6DmlbDmja48L2Rpdj5gKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRkcC5jaGlsZHJlbignLm1rLXNlbGVjdC1kcC1tZW51JykuaHRtbChzdHIpXG5cdFx0XHRcdFx0JGRwLmNoaWxkcmVuKCcubWstc2VsZWN0LWRwLW1lbnUnKS5vbignY2xpY2snLCAnLm1rLXNlbGVjdC1kcC1tZW51X19pdGVtJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdCR0aGlzLnZhbCh0aGlzLmlubmVyVGV4dClcblx0XHRcdFx0XHRcdCRkcC5jaGlsZHJlbignLm1rLXNlbGVjdC1kcC1tZW51JykuaGlkZSgpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQkZHAuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAtbWVudScpLmNzcygnZGlzcGxheScsICdibG9jaycpXG5cdFx0XHRcdH1cblxuXHRcdFx0fSwgMTAwKVxuXHRcdH0pXG5cdFx0Lm9uKCdrZXlwcmVzcycsICcubWstc2VsZWN0LnNlYXJjaD4ubWstaW5wdXQ+Lm1rLWlucHV0X19pbm5lcicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cblx0XHRcdGxldCAkZHAgPSAkdGhpcy5wYXJlbnQoKS5zaWJsaW5ncygnLm1rLXNlbGVjdC1kcCcpXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMykge1xuXHRcdFx0XHQkZHAuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAtbWVudScpLmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1hdHRlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCgnLm1rLXNlbGVjdC1kcC1tZW51JykuaGlkZSgpXG5cdFx0XHR0aGlzLnJlbW92ZSgpXG5cdFx0fSlcblx0XHQub24oJ3Nob3cubWsuc2VsZWN0LmRwJywgZnVuY3Rpb24gKGUsIHYpIHtcblx0XHRcdGNvbnNvbGUubG9nKHYpXG5cdFx0fSlcblx0XHQvLyAub24oJ2NsaWNrJywgJy5tay1zZWxlY3RfX3RhZ3MtaXRlbScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0Ly8gXHR0aGlzLnJlbW92ZSgpXG5cdFx0Ly8gfSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGFub255bW91cyhsb2NhbHMsIGZpbHRlcnMsIGVzY2FwZSwgcmV0aHJvd1xuLypgYCovKSB7XG5lc2NhcGUgPSBlc2NhcGUgfHwgZnVuY3Rpb24gKGh0bWwpe1xuICByZXR1cm4gU3RyaW5nKGh0bWwpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG52YXIgYnVmID0gW107XG53aXRoIChsb2NhbHMgfHwge30pIHsgKGZ1bmN0aW9uKCl7IFxuIGJ1Zi5wdXNoKCc8ZGl2IGNsYXNzPVwib3V0XCI+XFxuXHQ8aDI+c2xpZGVyPC9oMj5cXG5cdDxkaXYgY2xhc3M9XCJib3hcIj5cXG5cdFx0PGg0PuWfuuehgOeUqOazlTwvaDQ+XFxuXHRcdDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O2JvcmRlcjogMXB4IHNvbGlkICNlMmU0ZTg7cGFkZGluZzogMzBweCAyMHB4O1wiPlxcblx0XHRcdDxkaXYgY2xhc3M9XCJtay13cmFwIHR5cGUtbm9ybWFsIGdhcC0zdGltZXNcIj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zbGlkZXJcIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNsaWRlcl9fcnVud2F5XCI+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNsaWRlcl9fdGlwXCI+PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNsaWRlcl9fYmFyXCI+PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNsaWRlcl9fYnRuXCI+PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTN0aW1lc1wiPjwvZGl2Plxcblx0XHQ8aDQ+6ZqQ6JePdGlwPC9oND5cXG5cdFx0PGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7Ym9yZGVyOiAxcHggc29saWQgI2UyZTRlODtwYWRkaW5nOiAzMHB4IDIwcHg7XCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwLTN0aW1lc1wiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNsaWRlciBpcy1ub3RpcFwiPlxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2xpZGVyX19ydW53YXlcIj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2xpZGVyX190aXBcIj48L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2xpZGVyX19iYXJcIj48L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2xpZGVyX19idG5cIj48L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHRcdDxkaXYgY2xhc3M9XCJnYXAtM3RpbWVzXCI+PC9kaXY+XFxuXHRcdDxoND7oh6rlrprkuYnliJ3lp4vlgLw8L2g0Plxcblx0XHQ8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtib3JkZXI6IDFweCBzb2xpZCAjZTJlNGU4O3BhZGRpbmc6IDMwcHggMjBweDtcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXAtM3RpbWVzXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2xpZGVyXCIgZGF0YS13PVwiMjAwXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zbGlkZXJfX3J1bndheVwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zbGlkZXJfX3RpcFwiPjwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zbGlkZXJfX2JhclwiPjwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zbGlkZXJfX2J0blwiPjwvZGl2Plxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdDwvZGl2PlxcbjwvZGl2PlxcbicpOyB9KSgpO1xufSBcbnJldHVybiBidWYuam9pbignJyk7XG59KSIsImxldCBzbGlkZXIgPSByZXF1aXJlKCcuL2luZGV4LmVqcycpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdCQoJyNqc19zbGlkZXInKS5odG1sKHNsaWRlcigpKVxuXG5cdGZ1bmN0aW9uIHNldFZhbCAoZWxlLCB2YWwpIHtcblx0XHRlbGUuc3R5bGUud2lkdGggPSB2YWwgKyAncHgnXG5cdH1cblx0ZnVuY3Rpb24gaW5pdCAoKSB7XG5cdFx0JCgnLm1rLXNsaWRlcicpLmVhY2goZnVuY3Rpb24gKGksIGUpIHtcblx0XHRcdGxldCAkZSA9ICQoZSlcblx0XHRcdGxldCB3ID0gJGUuZGF0YSgndycpXG5cdFx0XHRsZXQgJGNoaWxkID0gJGUuY2hpbGRyZW4oJy5tay1zbGlkZXJfX3J1bndheScpXG5cblx0XHRcdCRjaGlsZC5jaGlsZHJlbignLm1rLXNsaWRlcl9fYmFyJykud2lkdGgodylcblx0XHRcdCRjaGlsZC5jaGlsZHJlbignLm1rLXNsaWRlcl9fYnRuJykuY3NzKCdsZWZ0JywgdyAtIDcpXG5cdFx0XHQkY2hpbGQuY2hpbGRyZW4oJy5tay1zbGlkZXJfX3RpcCcpLmNzcygnbGVmdCcsIHcgLSAxNSlcblx0XHR9KVxuXHR9XG5cdGluaXQoKVxuXHQkKGRvY3VtZW50KVxuXHRcdC5vbignbW91c2VlbnRlcicsICcubWstc2xpZGVyOm5vdCguaXMtbm90aXApPi5tay1zbGlkZXJfX3J1bndheT4ubWstc2xpZGVyX19idG4nLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0IHcgPSAkdGhpcy5zaWJsaW5ncygnLm1rLXNsaWRlcl9fYmFyJylbMF0ub2Zmc2V0V2lkdGhcblx0XHRcdCR0aGlzLnNpYmxpbmdzKCcubWstc2xpZGVyX190aXAnKS5odG1sKE1hdGguZmxvb3IodyAvIDQpKVxuXHRcdFx0JHRoaXMuc2libGluZ3MoJy5tay1zbGlkZXJfX3RpcCcpLnNob3coKVxuXHRcdH0pXG5cdFx0Lm9uKCdtb3VzZWRvd24nLCAnLm1rLXNsaWRlcj4ubWstc2xpZGVyX19ydW53YXk+Lm1rLXNsaWRlcl9fYnRuJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCAkdGhpcyA9ICQodGhpcylcblx0XHRcdGxldCB0aGF0ID0gdGhpc1xuXHRcdFx0bGV0IG9yaWdpbl9idG4gPSBvZmZzZXQodGhhdCkubGVmdFxuXHRcdFx0bGV0IG9yaWdpbl9tb3VzZSA9IGUuY2xpZW50WFxuXHRcdFx0bGV0IHcgPSAkdGhpcy5wYXJlbnQoKVswXS5vZmZzZXRXaWR0aFxuXHRcdFx0JHRoaXMuYWRkQ2xhc3MoJ2lzLWhvdmVyJylcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRsZXQgZHggPSBlLmNsaWVudFggLSBvcmlnaW5fbW91c2Vcblx0XHRcdFx0bGV0IHggPSBlLmNsaWVudFggLSBvcmlnaW5fYnRuXG5cdFx0XHRcdGlmICh4ID4gKHcgLSA3KSkgeCA9IHcgLSA3XG5cdFx0XHRcdGlmICh4IDwgLTcpIHggPSAtN1xuXHRcdFx0XHQkdGhpcy5jc3MoJ2xlZnQnLCB4KVxuXHRcdFx0XHQkdGhpcy5zaWJsaW5ncygnLm1rLXNsaWRlcl9fYmFyJykud2lkdGgoeCArIDcpXG5cdFx0XHRcdCR0aGlzLnNpYmxpbmdzKCcubWstc2xpZGVyX190aXAnKS5jc3MoJ2xlZnQnLCB4ICsgNyAtIDE1KVxuXHRcdFx0XHQkdGhpcy5zaWJsaW5ncygnLm1rLXNsaWRlcl9fdGlwJykuaHRtbChNYXRoLmZsb29yKCh4ICsgNykgLyA0KSlcblx0XHRcdH0pXG5cdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJylcblx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZXVwJylcblx0XHRcdFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2lzLWhvdmVyJylcblx0XHRcdFx0JHRoaXMuc2libGluZ3MoJy5tay1zbGlkZXJfX3RpcCcpLmhpZGUoKVxuXHRcdFx0XHRsZXQgcGFyYW0gPSAkdGhpcy5zaWJsaW5ncygnLm1rLXNsaWRlcl9fdGlwJylbMF0uaW5uZXJUZXh0XG5cdFx0XHRcdCR0aGlzLnRyaWdnZXIoJ3Nob3cubWsuc2xpZGVyJywgcGFyYW0pXG5cdFx0XHR9KVxuXHRcdH0pXG5cdFx0Ly8gLm9uKCdzaG93Lm1rLnNsaWRlcicsIGZ1bmN0aW9uIChlLCBwKSB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhwKVxuXHRcdC8vIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBhbm9ueW1vdXMobG9jYWxzLCBmaWx0ZXJzLCBlc2NhcGUsIHJldGhyb3dcbi8qYGAqLykge1xuZXNjYXBlID0gZXNjYXBlIHx8IGZ1bmN0aW9uIChodG1sKXtcbiAgcmV0dXJuIFN0cmluZyhodG1sKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xudmFyIGJ1ZiA9IFtdO1xud2l0aCAobG9jYWxzIHx8IHt9KSB7IChmdW5jdGlvbigpeyBcbiBidWYucHVzaCgnPGRpdiBjbGFzcz1cIm91dFwiPlxcblx0PGgyPnN3aXRjaDwvaDI+XFxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XFxuXHRcdDxoND7ln7rnoYDnlKjms5U8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstc3dpdGNoXCI+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLXN3aXRjaF9fY29yZVwiPjwvc3Bhbj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHRcdDxkaXYgY2xhc3M9XCJnYXAtM3RpbWVzXCI+PC9kaXY+XFxuXHRcdDxoND7npoHnlKjnirbmgIE8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstc3dpdGNoIGlzLWRpc2FibGVkXCI+XFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLXN3aXRjaF9fY29yZVwiPjwvc3Bhbj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cXG4nKTsgfSkoKTtcbn0gXG5yZXR1cm4gYnVmLmpvaW4oJycpO1xufSkiLCJsZXQgcyA9IHJlcXVpcmUoJy4vaW5kZXguZWpzJylcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0JCgnI2pzX3N3aXRjaCcpLmh0bWwocygpKVxuXG5cdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWstc3dpdGNoJywgZnVuY3Rpb24gKGUpIHtcblx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0aWYgKCR0aGlzLmhhc0NsYXNzKCdpcy1kaXNhYmxlZCcpKSByZXR1cm5cblx0XHRpZiAoJHRoaXMuaGFzQ2xhc3MoJ2lzLWNoZWNrZWQnKSkge1xuXHRcdFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdpcy1jaGVja2VkJylcblx0XHR9XG5cdH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBhbm9ueW1vdXMobG9jYWxzLCBmaWx0ZXJzLCBlc2NhcGUsIHJldGhyb3dcbi8qYGAqLykge1xuZXNjYXBlID0gZXNjYXBlIHx8IGZ1bmN0aW9uIChodG1sKXtcbiAgcmV0dXJuIFN0cmluZyhodG1sKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xudmFyIGJ1ZiA9IFtdO1xud2l0aCAobG9jYWxzIHx8IHt9KSB7IChmdW5jdGlvbigpeyBcbiBidWYucHVzaCgnPGRpdiBjbGFzcz1cIm91dFwiPlxcblx0PGgyIGlkPVwidGltZS1saW5lXCI+dGltZUxpbmU8L2gyPlxcblx0PGRpdiBjbGFzcz1cImJveFwiPlxcblx0XHQ8aDQ+5Z+65pys55So5rOVPC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbVwiPlxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fdGFpbFwiPjwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fcHJpbWFyeVwiPjwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fd3JhcFwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImxpbmUtaGVpZ2h0OjE2cHg7Zm9udC1zaXplOjE0cHg7cGFkZGluZy1ib3R0b206NXB4O1wiPlxcblx0XHRcdFx0XHRcdFx05aSn5a2mXFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIlwiIHN0eWxlPVwibGluZS1oZWlnaHQ6MTZweDtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O2NvbG9yOiNhNWE1YTU7XCI+XFxuXHRcdFx0XHRcdFx0XHQyMDAwLTIwMDRcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX190YWlsXCI+PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX19wcmltYXJ5XCI+PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX193cmFwXCI+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIlwiIHN0eWxlPVwibGluZS1oZWlnaHQ6MTZweDtmb250LXNpemU6MTRweDtwYWRkaW5nLWJvdHRvbTo1cHg7XCI+XFxuXHRcdFx0XHRcdFx0XHTkuK3lraZcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJsaW5lLWhlaWdodDoxNnB4O2ZvbnQtc2l6ZToxNHB4O3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWJvdHRvbTo1cHg7Y29sb3I6I2E1YTVhNTtcIj5cXG5cdFx0XHRcdFx0XHRcdDE5OTQtMjAwMFxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1cIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3RhaWxcIj48L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3ByaW1hcnlcIj48L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3dyYXBcIj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiXCI+XFxuXHRcdFx0XHRcdFx0XHTlsI/lraZcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX190YWlsXCI+PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX19wcmltYXJ5XCI+PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX193cmFwXCI+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIlwiPlxcblx0XHRcdFx0XHRcdFx05bm85YS/5ZutXFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTN0aW1lc1wiPjwvZGl2Plxcblx0XHQ8aDQ+5pyJ5pa55qGGPC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbVwiPlxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fdGFpbFwiPjwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fcHJpbWFyeVwiPjwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fd3JhcFwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX193cmFwLXRpdGxlXCI+XFxuXHRcdFx0XHRcdFx0XHQyMDAwLTIwMDRcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fd3JhcC1ib3hcIj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJwYWRkaW5nOjEwcHggMjBweDtcIj4gaSBoYXZlIGEgZHJlYW08L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX190YWlsXCI+PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX19wcmltYXJ5XCI+PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX193cmFwXCI+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3dyYXAtdGl0bGVcIj5cXG5cdFx0XHRcdFx0XHRcdDE5OTQtMjAwMFxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10bC1pdGVtX193cmFwLWJveFwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT1cInBhZGRpbmc6MTBweCAyMHB4O1wiPiBpIGhhdmUgYSBkcmVhbTwvZGl2Plxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1cIj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3RhaWxcIj48L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3ByaW1hcnlcIj48L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3dyYXBcIj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdGwtaXRlbV9fd3JhcC10aXRsZVwiPlxcblx0XHRcdFx0XHRcdFx0MTk4OC0xOTk0XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRsLWl0ZW1fX3dyYXAtYm94XCI+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwicGFkZGluZzoxMHB4IDIwcHg7XCI+IGkgaGF2ZSBhIGRyZWFtPC9kaXY+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuPC9kaXY+XFxuJyk7IH0pKCk7XG59IFxucmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn0pIiwibGV0IHRsID0gcmVxdWlyZSgnLi9pbmRleC5lanMnKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdCQoJyNqc190aW1lX2xpbmUnKS5odG1sKHRsKCkpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBhbm9ueW1vdXMobG9jYWxzLCBmaWx0ZXJzLCBlc2NhcGUsIHJldGhyb3dcbi8qYGAqLykge1xuZXNjYXBlID0gZXNjYXBlIHx8IGZ1bmN0aW9uIChodG1sKXtcbiAgcmV0dXJuIFN0cmluZyhodG1sKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xudmFyIGJ1ZiA9IFtdO1xud2l0aCAobG9jYWxzIHx8IHt9KSB7IChmdW5jdGlvbigpeyBcbiBidWYucHVzaCgnPGRpdiBjbGFzcz1cIm91dFwiPlxcblx0PGgyPnRpbWVQaWNrZXI8L2gyPlxcblx0PGRpdiBjbGFzcz1cImJveFwiPlxcblx0XHQ8aDQ+5Zu65a6a5pe26Ze054K5PC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0XCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dCBtay1pbnB1dC0tcHJlZml4XCI+XFxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCIgcGxhY2Vob2xkZXI9XCLor7fpgInmi6lcIiByZWFkb25seT5cXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0X19wcmVmaXhcIj5cXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXRfX3ByZWZpeC1pbm5lclwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tY2xvY2tcIiBzdHlsZT1cImNvbG9yOiNkMWQxZDFcIj48L2k+XFxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcFwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudVwiIGlkPVwianNfdGltZV9fZml4XCI+PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTN0aW1lc1wiPjwvZGl2Plxcblx0XHQ8aDQ+5Lu75oSP5pe26Ze054K5PC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstaW5wdXQgbWstaW5wdXQtLXByZWZpeFwiIHN0eWxlPVwid2lkdGg6IDI0MHB4O1wiPlxcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJtay1pbnB1dF9faW5uZXJcIiBwbGFjZWhvbGRlcj1cIuivt+mAieaLqVwiIHJlYWRvbmx5Plxcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0X19wcmVmaXhcIj5cXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0X19wcmVmaXgtaW5uZXJcIj5cXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1jbG9ja1wiIHN0eWxlPVwiY29sb3I6I2QxZDFkMVwiPjwvaT5cXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHRcdDwvc3Bhbj5cXG5cdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwXCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcF9fYm94XCI+PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcC1tZW51XCIgZGF0YS1tYXg9MjQ+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwLWJ0bl9fdXBcIj5cXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi11cFwiPjwvaT5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHAtZHAtbWVudV9faXRlbVwiPjAxPC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwLW1lbnVfX2l0ZW0gaXMtY2hlY2tlZFwiPjAyPC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwLW1lbnVfX2l0ZW1cIj4wMzwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcC1idG5fX2Rvd25cIj5cXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiaWNvbi1kb3duXCI+PC9pPlxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwLW1lbnVcIj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHAtZHAtYnRuX191cFwiPlxcblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLXVwXCI+PC9pPlxcblx0XHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcC1tZW51X19pdGVtXCI+MDE8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHAtZHAtbWVudV9faXRlbSBpcy1jaGVja2VkXCI+MDI8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHAtZHAtbWVudV9faXRlbVwiPjAzPC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwLWJ0bl9fZG93blwiPlxcblx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLWRvd25cIj48L2k+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDwvZGl2Plxcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHAtZHAtbWVudVwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcC1idG5fX3VwXCI+XFxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tdXBcIj48L2k+XFxuXHRcdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwLW1lbnVfX2l0ZW1cIj4wMTwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcC1tZW51X19pdGVtIGlzLWNoZWNrZWRcIj4wMjwvZGl2Plxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcC1tZW51X19pdGVtXCI+MDM8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHAtZHAtYnRuX19kb3duXCI+XFxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tZG93blwiPjwvaT5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay10cC1kcF9fc2V0XCI+XFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXRwLWRwX19zZXQtY2FuY2VsXCI+XFxuXHRcdFx0XHRcdFx0XHTlj5bmtohcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHAtZHBfX3NldC1jb25maXJtXCI+XFxuXHRcdFx0XHRcdFx0XHTnoa7lrppcXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHRcdDxkaXYgY2xhc3M9XCJnYXAtM3RpbWVzXCI+PC9kaXY+XFxuXHRcdDxoND7lvIDlp4vnu5PmnZ/ml7bpl7Q8L2g0Plxcblx0XHQ8ZGl2IGNsYXNzPVwibWstd3JhcCB0eXBlLW5vcm1hbCBnYXBcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHBcIiAgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6MTBweDtcIiBpZD1cImpzX3RwX2JlZ2luXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0XCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dCBtay1pbnB1dC0tcHJlZml4XCI+XFxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCIgcGxhY2Vob2xkZXI9XCLlvIDlp4vml7bpl7RcIiByZWFkb25seT5cXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0X19wcmVmaXhcIj5cXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXRfX3ByZWZpeC1pbm5lclwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tY2xvY2tcIiBzdHlsZT1cImNvbG9yOiNkMWQxZDFcIj48L2k+XFxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcFwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudVwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MDg6MDA8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjA4OjE1PC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4wODozMDwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MDg6NDU8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjA5OjAwPC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4wOToxNTwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MDk6MzA8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjA5OjQ1PC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4xMDowMDwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MTA6MTU8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjEwOjMwPC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4xMDo0NTwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MTE6MDA8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibWstdHBcIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrO1wiIGlkPVwianNfdHBfZW5kXCI+XFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0XCI+XFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1pbnB1dCBtay1pbnB1dC0tcHJlZml4XCI+XFxuXHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwibWstaW5wdXRfX2lubmVyXCIgcGxhY2Vob2xkZXI9XCLnu5PmnZ/ml7bpl7RcIiByZWFkb25seT5cXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1rLWlucHV0X19wcmVmaXhcIj5cXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibWstaW5wdXRfX3ByZWZpeC1pbm5lclwiPlxcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImljb24tY2xvY2tcIiBzdHlsZT1cImNvbG9yOiNkMWQxZDFcIj48L2k+XFxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XFxuXHRcdFx0XHRcdFx0PC9zcGFuPlxcblx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcFwiPlxcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudVwiPlxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MDg6MDA8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjA4OjE1PC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4wODozMDwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MDg6NDU8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjA5OjAwPC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4wOToxNTwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MDk6MzA8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjA5OjQ1PC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4xMDowMDwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MTA6MTU8L2Rpdj5cXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtay1zZWxlY3QtZHAtbWVudV9faXRlbVwiPjEwOjMwPC9kaXY+XFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWstc2VsZWN0LWRwLW1lbnVfX2l0ZW1cIj4xMDo0NTwvZGl2Plxcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+MTE6MDA8L2Rpdj5cXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG48L2Rpdj5cXG4nKTsgfSkoKTtcbn0gXG5yZXR1cm4gYnVmLmpvaW4oJycpO1xufSkiLCJsZXQgdHAgPSByZXF1aXJlKCcuL2luZGV4LmVqcycpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdCQoJyNqc190cCcpLmh0bWwodHAoKSlcblx0aW5pdCgpXG5cblx0JChkb2N1bWVudClcblx0XHQub24oJ2NsaWNrJywgJy5tay10cD4ubWstaW5wdXQ+Lm1rLWlucHV0X19pbm5lcicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgJGRwID0gJHRoaXMucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJy5tay10cC1kcCcpXG5cdFx0XHQkZHAuc2hvdygpXG5cdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCgnPGRpdiBjbGFzcz1cIm1hdHRlXCI+PC9kaXY+Jylcblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLXRwPi5tay10cC1kcD4ubWstdHAtZHAtbWVudT4ubWstdHAtZHAtYnRuX191cCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgbSA9ICskdGhpcy5wYXJlbnQoKS5kYXRhKCdtYXgnKSB8fCA2MFxuXHRcdFx0bGV0ICRpdGVtID0gJHRoaXMuc2libGluZ3MoJy5tay10cC1kcC1tZW51X19pdGVtJylcblx0XHRcdGxldCB2ID0gKyRpdGVtWzFdLmlubmVyVGV4dFxuXHRcdFx0aWYgKHYgPT09IDEpIHtcblx0XHRcdFx0di0tXG5cdFx0XHRcdCQoJGl0ZW1bMF0pLmh0bWwobSAtIDEgPiA5ID8gbSAtIDEgOiAnMCcgKyAobSAtIDEpKVxuXHRcdFx0XHQkKCRpdGVtWzFdKS5odG1sKHYgPiA5ID8gdiA6ICcwJyArIHYpXG5cdFx0XHRcdCQoJGl0ZW1bMl0pLmh0bWwodiArIDEgPiA5ID8gdiArIDEgOiAnMCcgKyAodiArIDEpKVxuXHRcdFx0fSBlbHNlIGlmICh2ID09PSAwKXtcblx0XHRcdFx0diA9IG0gLSAxXG5cdFx0XHRcdCQoJGl0ZW1bMF0pLmh0bWwodiAtIDEgPiA5ID8gdiAtIDEgOiAnMCcgKyAodiAtIDEpKVxuXHRcdFx0XHQkKCRpdGVtWzFdKS5odG1sKHYgPiA5ID8gdiA6ICcwJyArIHYpXG5cdFx0XHRcdCQoJGl0ZW1bMl0pLmh0bWwoJzAwJylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHYtLVxuXHRcdFx0XHQkKCRpdGVtWzBdKS5odG1sKHYgLSAxID4gOSA/IHYgLSAxIDogJzAnICsgKHYgLSAxKSlcblx0XHRcdFx0JCgkaXRlbVsxXSkuaHRtbCh2ID4gOSA/IHYgOiAnMCcgKyB2KVxuXHRcdFx0XHQkKCRpdGVtWzJdKS5odG1sKHYgKyAxID4gOSA/IHYgKyAxIDogJzAnICsgKHYgKyAxKSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1rLXRwPi5tay10cC1kcD4ubWstdHAtZHAtbWVudT4ubWstdHAtZHAtYnRuX19kb3duJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxldCAkdGhpcyA9ICQodGhpcylcblx0XHRcdGxldCBtID0gKyR0aGlzLnBhcmVudCgpLmRhdGEoJ21heCcpIHx8IDYwXG5cdFx0XHRsZXQgJGl0ZW0gPSAkdGhpcy5zaWJsaW5ncygnLm1rLXRwLWRwLW1lbnVfX2l0ZW0nKVxuXHRcdFx0bGV0IHYgPSArJGl0ZW1bMV0uaW5uZXJUZXh0XG5cdFx0XHRpZiAodiA8IG0gLSAyKSB7XG5cdFx0XHRcdHYrK1xuXHRcdFx0XHQkKCRpdGVtWzBdKS5odG1sKHYgLSAxID4gOSA/IHYgLSAxIDogJzAnICsgKHYgLSAxKSlcblx0XHRcdFx0JCgkaXRlbVsxXSkuaHRtbCh2ID4gOSA/IHYgOiAnMCcgKyB2KVxuXHRcdFx0XHQkKCRpdGVtWzJdKS5odG1sKHYgKyAxID4gOSA/IHYgKyAxIDogJzAnICsgKHYgKyAxKSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHYgPSAwXG5cdFx0XHRcdCQoJGl0ZW1bMF0pLmh0bWwobSAtIDEgPiA5ID8gbSAtIDEgOiAnMCcgKyAobSAtIDEpKVxuXHRcdFx0XHQkKCRpdGVtWzFdKS5odG1sKHYgPiA5ID8gdiA6ICcwJyArIHYpXG5cdFx0XHRcdCQoJGl0ZW1bMl0pLmh0bWwodiArIDEgPiA5ID8gdiArIDEgOiAnMCcgKyAodiArIDEpKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0Lm9uKCdjbGljaycsICcubWstdHAtZHBfX3NldD4ubWstdHAtZHBfX3NldC1jYW5jZWwnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKClcblx0XHRcdCQoJy5tYXR0ZScpLnJlbW92ZSgpXG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJy5tay10cC1kcF9fc2V0Pi5tay10cC1kcF9fc2V0LWNvbmZpcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0IHN0ciA9ICcnXG5cdFx0XHQkdGhpcy5wYXJlbnQoKS5zaWJsaW5ncygnLm1rLXRwLWRwLW1lbnUnKS5lYWNoKGZ1bmN0aW9uIChpLCBlKSB7XG5cdFx0XHRcdHN0ciArPSAkKGUpLmNoaWxkcmVuKCcubWstdHAtZHAtbWVudV9faXRlbScpWzFdLmlubmVyVGV4dCArICc6J1xuXHRcdFx0fSlcblx0XHRcdHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpXG5cdFx0XHQkdGhpcy5wYXJlbnQoKS5wYXJlbnQoKS5zaWJsaW5ncygnLm1rLWlucHV0JykuY2hpbGRyZW4oJy5tay1pbnB1dF9faW5uZXInKS52YWwoc3RyKVxuXHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5oaWRlKClcblx0XHRcdCQoJy5tYXR0ZScpLnJlbW92ZSgpXG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJyNqc190cF9lbmQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0bGV0ICRiZWdpbiA9ICQoJyNqc190cF9iZWdpbicpXG5cdFx0XHRsZXQgdmFsID0gJGJlZ2luLmNoaWxkcmVuKCcubWstc2VsZWN0JykuY2hpbGRyZW4oJy5tay1pbnB1dCcpLmNoaWxkcmVuKCcubWstaW5wdXRfX2lubmVyJykudmFsKClcblx0XHRcdGxldCBhcnIgPSBbXVxuXHRcdFx0bGV0IHN0ciA9ICcnXG5cdFx0XHRpZih2YWwpIHtcblx0XHRcdFx0YXJyID0gdmFsLnNwbGl0KCc6Jylcblx0XHRcdH1cblx0XHRcdGxldCBpdGVtcyA9ICR0aGlzLmNoaWxkcmVuKCcubWstc2VsZWN0JykuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAnKS5jaGlsZHJlbignLm1rLXNlbGVjdC1kcC1tZW51JykuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAtbWVudV9faXRlbScpXG5cdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGl0ZW1zLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGxldCB0bXAgPSBpdGVtc1trXS5pbm5lclRleHQuc3BsaXQoJzonKVxuXHRcdFx0XHRpZiAoK3RtcFswXSA8ICthcnJbMF0pICQoaXRlbXNba10pLmFkZENsYXNzKCdpcy1kaXNhYmxlZCcpXG5cdFx0XHRcdGlmICgrdG1wWzBdID09PSArYXJyWzBdICYmICt0bXBbMV0gPD0gK2FyclsxXSkgJChpdGVtc1trXSkuYWRkQ2xhc3MoJ2lzLWRpc2FibGVkJylcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5vbignY2xpY2snLCAnLm1hdHRlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKS5yZW1vdmUoKVxuXHRcdFx0JCgnLm1rLXRwLWRwJykuaGlkZSgpXG5cdFx0fSlcblx0ZnVuY3Rpb24gaW5pdCAoKSB7XG5cdFx0bGV0IHN0ciA9ICcnXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IDYwOyBqICs9IDE1KSB7XG5cdFx0XHRcdGxldCBpaSA9IGlcblx0XHRcdFx0bGV0IGpqID0galxuXHRcdFx0XHRpZiAoaSA8IDEwKSBpaSA9ICcwJyArIGlcblx0XHRcdFx0aWYgKGogPCAxMCkgamogPSAnMCcgKyBqXG5cdFx0XHRcdHN0ciArPSBgPGRpdiBjbGFzcz1cIm1rLXNlbGVjdC1kcC1tZW51X19pdGVtXCI+JHtpaX06JHtqan08L2Rpdj5gXG5cdFx0XHR9XG5cdFx0fVxuXHRcdCQoJyNqc190aW1lX19maXgnKS5odG1sKHN0cilcblx0XHQkKCcjanNfdHBfYmVnaW4nKS5jaGlsZHJlbignLm1rLXNlbGVjdCcpLmNoaWxkcmVuKCcubWstc2VsZWN0LWRwJykuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAtbWVudScpLmh0bWwoc3RyKVxuXHRcdCQoJyNqc190cF9lbmQnKS5jaGlsZHJlbignLm1rLXNlbGVjdCcpLmNoaWxkcmVuKCcubWstc2VsZWN0LWRwJykuY2hpbGRyZW4oJy5tay1zZWxlY3QtZHAtbWVudScpLmh0bWwoc3RyKVxuXHR9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGFub255bW91cyhsb2NhbHMsIGZpbHRlcnMsIGVzY2FwZSwgcmV0aHJvd1xuLypgYCovKSB7XG5lc2NhcGUgPSBlc2NhcGUgfHwgZnVuY3Rpb24gKGh0bWwpe1xuICByZXR1cm4gU3RyaW5nKGh0bWwpXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG52YXIgYnVmID0gW107XG53aXRoIChsb2NhbHMgfHwge30pIHsgKGZ1bmN0aW9uKCl7IFxuIGJ1Zi5wdXNoKCc8ZGl2IGNsYXNzPVwib3V0XCI+XFxuXHQ8aDI+dXBsb2FkPC9oMj5cXG5cdDxkaXYgY2xhc3M9XCJib3hcIj5cXG5cdFx0PGg0PueCueWHu+S4iuS8oDwvaDQ+XFxuXHRcdDxkaXYgY2xhc3M9XCJtay13cmFwIHR5cGUtbm9ybWFsIGdhcFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XCJtay11cGxvYWRcIj5cXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJidXR0b25cIiBpZD1cInVwbG9hZC1idG5cIiBjbGFzcz1cIm1rLXVwbG9hZC1idG5cIj7ngrnlh7vkuIrkvKA8L2J1dHRvbj5cXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiIGlkPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXVwbG9hZC1tZW51XCIgaWQ9XCJmaWxlLWJveFwiPlxcblx0XHRcdFx0PC9kaXY+XFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0XHQ8ZGl2IGNsYXNzPVwiZ2FwLTV0aW1lc1wiPjwvZGl2Plxcblx0XHQ8aDQ+55So5oi35LiK5Lyg5aS05YOPPC9oND5cXG5cdFx0PGRpdiBjbGFzcz1cIm1rLXdyYXAgdHlwZS1ub3JtYWwgZ2FwXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1rLXVwbG9hZFwiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1rLXVwbG9hZC1ib3hcIj5cXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJpY29uLXBsdXNcIj48L2k+XFxuXHRcdFx0XHQ8L2Rpdj5cXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cIm1rLXVwbG9hZC1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgbmFtZT1cIlwiIHZhbHVlPVwiXCIgIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdFx0PGRpdiBjbGFzcz1cImdhcC01dGltZXNcIj48L2Rpdj5cXG5cdFx0PGg0PuWbvueJh+WIl+ihqOe8qeeVpeWbvjwvaDQ+XFxuXHRcdDxkaXYgY2xhc3M9XCJtay13cmFwIHR5cGUtbm9ybWFsIGdhcFwiPlxcblx0XHRcdDxkaXYgY2xhc3M9XCJtay11cGxvYWRcIj5cXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJidXR0b25cIiBjbGFzcz1cIm1rLXVwbG9hZC1idG5cIj7ngrnlh7vkuIrkvKA8L2J1dHRvbj5cXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJcIiB2YWx1ZT1cIlwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxcblx0XHRcdFx0PGRpdiBjbGFzcz1cImdhcC0zdGltZXNcIj48L2Rpdj5cXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtay11cGxvYWQtbGlzdFwiPjwvZGl2Plxcblx0XHRcdDwvZGl2Plxcblx0XHQ8L2Rpdj5cXG5cdDwvZGl2PlxcbjwvZGl2PlxcbicpOyB9KSgpO1xufSBcbnJldHVybiBidWYuam9pbignJyk7XG59KSIsImxldCB1cGxvYWQgPSByZXF1aXJlKCcuL2luZGV4LmVqcycpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0JCgnI2pzX3VwbG9hZCcpLmh0bWwodXBsb2FkKCkpXG5cblx0JChkb2N1bWVudClcblx0XHQub24oJ2NsaWNrJywgJy5tay11cGxvYWQ+Lm1rLXVwbG9hZC1idG4nLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0JCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKS5jbGljaygpXG5cdFx0fSlcblx0XHQub24oJ2NoYW5nZScsICcubWstdXBsb2FkPmlucHV0Om5vdCgubWstdXBsb2FkLWlucHV0KScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF1cblx0XHRcdGxldCBzdHIgPSAnJ1xuXHRcdFx0bGV0ICRzaWJsaW5nID0gJCh0aGlzKS5zaWJsaW5ncygnLm1rLXVwbG9hZC1tZW51Jylcblx0XHRcdGlmICgkc2libGluZy5sZW5ndGgpIHtcblx0XHRcdFx0JHNpYmxpbmcuYXBwZW5kKGA8ZGl2IGNsYXNzPVwibWstdXBsb2FkLW1lbnUtaXRlbVwiPjxpIGNsYXNzPVwiaWNvbi1kb2N1bWVudFwiPjwvaT48c3BhbiBjbGFzcz1cIm1rLXVwbG9hZC1tZW51LWl0ZW1fbmFtZVwiPiR7ZmlsZS5uYW1lfTwvc3Bhbj48L2Rpdj5gKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblx0XHRcdFx0aWYgKGZpbGUudHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmIGZpbGUudHlwZSAhPT0gJ2ltYWdlL3BuZycgJiYgZmlsZS50eXBlICE9PSAnaW1hZ2UvZ2lmJykge1xuXHRcdFx0ICAgICAgICBhbGVydCgn5LiN5piv5pyJ5pWI55qE5Zu+54mH5paH5Lu2IScpO1xuXHRcdFx0ICAgICAgICByZXR1cm47XG5cdFx0XHQgICAgfVxuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ICAgICAgICBsZXQgZGF0YSA9IGUudGFyZ2V0LnJlc3VsdDsgLy8gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTay4uLihiYXNlNjTnvJbnoIEpLi4uJ1xuXHRcdFx0XHRcdCR0aGlzLnNpYmxpbmdzKCcubWstdXBsb2FkLWxpc3QnKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJtay11cGxvYWQtbGlzdF9faXRlbVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbWctYm94XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtkYXRhfSlcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dFwiPiR7ZmlsZS5uYW1lfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWdcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5gKVxuXHRcdFx0ICAgIH07XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG5cdFx0XHR9XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR1cmw6ICcvdXBsb2FkL3Rva2VuJyxcblx0XHRcdFx0dHlwZTogJ2dldCcsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT09IDApIHtcblx0XHRcdFx0XHRcdGxldCB0b2tlblxuXHRcdFx0XHRcdFx0bGV0IGZkID0gbmV3IEZvcm1EYXRhKClcblx0XHRcdFx0XHRcdHRva2VuID0gcmVzLmRhdGEudG9rZW5cblx0XHRcdFx0XHRcdGZkLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcblx0XHRcdFx0XHRcdGZkLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cdFx0XHRcdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHRcdFx0XHR1cmw6ICdodHRwOi8vdXAtejIucWluaXVwLmNvbScsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdwb3N0Jyxcblx0XHRcdFx0XHRcdFx0ZGF0YTogZmQsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnRUeXBlOmZhbHNlLCAgLy/kuIDlrpropoHliqBjb250ZW50VHlwZTpmYWxzZSxwcm9jZXNzRGF0YTpmYWxzZSzlkKbliJnmiqXplJlcbiAgICAgICAgICAgIFx0XHRcdFx0cHJvY2Vzc0RhdGE6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5LiK5Lyg5oiQ5YqfJylcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRcdFx0YWxlcnQoJ+S4iuS8oOWHuumUmSEnKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhbGVydCgn6I635Y+W5LiK5Lyg5Yet6K+B6ZSZ6K+vJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSlcblx0XHQub24oJ2NsaWNrJywgJy5tay11cGxvYWQ+Lm1rLXVwbG9hZC1ib3gnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcdFx0JHRoaXMuc2libGluZ3MoJy5tay11cGxvYWQtaW5wdXQnKS5jbGljaygpXG5cdFx0fSlcblx0XHQub24oJ2NoYW5nZScsICcubWstdXBsb2FkPi5tay11cGxvYWQtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0IGZpbGUgPSB0aGlzLmZpbGVzWzBdXG5cdFx0XHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFx0XHRsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuXHRcdFx0aWYgKGZpbGUudHlwZSAhPT0gJ2ltYWdlL2pwZWcnICYmIGZpbGUudHlwZSAhPT0gJ2ltYWdlL3BuZycgJiYgZmlsZS50eXBlICE9PSAnaW1hZ2UvZ2lmJykge1xuXHRcdCAgICAgICAgYWxlcnQoJ+S4jeaYr+acieaViOeahOWbvueJh+aWh+S7tiEnKTtcblx0XHQgICAgICAgIHJldHVybjtcblx0XHQgICAgfVxuXHRcdFx0cmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcblx0XHQgICAgICAgIGxldCBkYXRhID0gZS50YXJnZXQucmVzdWx0OyAvLyAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrLi4uKGJhc2U2NOe8lueggSkuLi4nXG5cdFx0XHRcdCR0aGlzLnNpYmxpbmdzKCcubWstdXBsb2FkLWJveCcpLmh0bWwoJycpXG5cdFx0XHRcdCR0aGlzLnNpYmxpbmdzKCcubWstdXBsb2FkLWJveCcpLmNzcygnYmFja2dyb3VuZEltYWdlJywgYHVybCgke2RhdGF9KWApXG5cdFx0ICAgIH07XG5cdFx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuXHRcdH0pXG59XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuYXJyYXkuZmxhdC1tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LmFycmF5LmZsYXR0ZW4nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnN0cmluZy5hdCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1zdGFydCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1lbmQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zdHJpbmcubWF0Y2gtYWxsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtZ2V0dGVyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLXNldHRlcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcub2JqZWN0Lmxvb2t1cC1nZXR0ZXInKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtc2V0dGVyJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0Lm9mJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy53ZWFrLW1hcC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcud2Vhay1zZXQub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5mcm9tJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQuZnJvbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcud2Vhay1tYXAuZnJvbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcud2Vhay1zZXQuZnJvbScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuZ2xvYmFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zeXN0ZW0uZ2xvYmFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5jbGFtcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5kZWctcGVyLXJhZCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5kZWdyZWVzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXRoLmZzY2FsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5pYWRkaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5pc3ViaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5pbXVsaCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5yYWQtcGVyLWRlZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWF0aC5yYWRpYW5zJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXRoLnNjYWxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXRoLnVtdWxoJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXRoLnNpZ25iaXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtb3duLW1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5hc2FwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKTtcbiJdfQ==
