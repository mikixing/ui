(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var _jquery = require('./jquery.js');

var _jquery2 = _interopRequireDefault(_jquery);

var _selector = require('./selector.js');

var _selector2 = _interopRequireDefault(_selector);

var _snackbar = require('./snackbar.js');

var _snackbar2 = _interopRequireDefault(_snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).on('focus', 'input[usual]', function () {
	(0, _jquery2.default)(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual');
	(0, _jquery2.default)(this).closest('.input-field').addClass('focus-field__usual');
});
(0, _jquery2.default)(document).on('blur', 'input[usual]', function () {
	(0, _jquery2.default)(this).closest('.input-field').removeClass('focus-field__usual');
	(0, _jquery2.default)(this).parent().parent().children('label').addClass('blur-label');
	if (this.value) return;
	(0, _jquery2.default)(this).parent().parent().children('label').removeClass('active-usual');
});
(0, _jquery2.default)(document).on('focus', 'input[error]', function () {
	(0, _jquery2.default)(this).parent().parent().children('label').addClass('active-error');
});
(0, _jquery2.default)(document).on('blur', 'input[error]', function () {
	if (this.value) return;
	(0, _jquery2.default)(this).parent().parent().children('label').removeClass('active-error');
});
(0, _jquery2.default)(document).on('focus', 'textarea', function () {
	(0, _jquery2.default)(this).parent().parent().children('label').addClass('active-usual');
	(0, _jquery2.default)(this).closest('.input-field').addClass('focus-field__usual');
});
(0, _jquery2.default)(document).on('blur', 'textarea', function () {
	(0, _jquery2.default)(this).closest('.input-field').removeClass('focus-field__usual');
	if (this.value) return;
	(0, _jquery2.default)(this).parent().parent().children('label').removeClass('active-usual');
});
(0, _jquery2.default)(document).on('focus', 'input[withplaceholder]', function () {
	(0, _jquery2.default)(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual');
	(0, _jquery2.default)(this).closest('.input-field').addClass('focus-field__usual');
	this.placeholder = 'placeholder';
});
(0, _jquery2.default)(document).on('blur', 'input[withplaceholder]', function () {
	this.placeholder = '';
	(0, _jquery2.default)(this).closest('.input-field').removeClass('focus-field__usual');
	(0, _jquery2.default)(this).parent().parent().children('label').addClass('blur-label');
	if (this.value) return;
	(0, _jquery2.default)(this).parent().parent().children('label').removeClass('active-usual');
});
(0, _jquery2.default)(document).on('focus', 'select', function () {
	(0, _jquery2.default)(this).parent().parent().children('label').removeClass('blur-label').addClass('active-usual');
	(0, _jquery2.default)(this).closest('.input-field').addClass('focus-field__usual');
});
(0, _jquery2.default)(document).on('blur', 'select', function () {
	(0, _jquery2.default)(this).closest('.input-field').removeClass('focus-field__usual');
	(0, _jquery2.default)(this).parent().parent().children('label').addClass('blur-label');
	if (this.value) return;
	(0, _jquery2.default)(this).parent().children('label').removeClass('active-usual');
});

var select_man = document.getElementById('select_man');
var s = new _selector2.default();
select_man.onclick = function () {
	s.init(select_man);
};

//snackbar
(0, _jquery2.default)(document).on('click', '[snackbar_top_left]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, '上左', 'top-left');
}).on('click', '[snackbar_top_center]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, '上中', 'top-center');
}).on('click', '[snackbar_top_right]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, '上右', 'top-right');
}).on('click', '[snackbar_bottom_left]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, '下左', 'bottom-left');
}).on('click', '[snackbar_bottom_center]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, '下中', 'bottom-center');
}).on('click', '[snackbar_bottom_right]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, '下右', 'bottom-right');
}).on('click', '[snackbar_custom_success]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, 'success', '', 'success');
}).on('click', '[snackbar_custom_error]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, 'error', '', 'error');
}).on('click', '[snackbar_custom_warn]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, 'warn', '', 'warn');
}).on('click', '[snackbar_custom_normal]', function (ev) {
	var target = ev.currentTarget;
	if (!target.snackbar) {
		target.snackbar = new _snackbar2.default();
	}
	target.snackbar.single(target, 'normal', '', 'normal');
});
// .on('click', '[snackbar_custom_more]', function (ev) {
// 	var target = ev.currentTarget
// 	if (!target.snackbar) {
// 		target.snackbar = new SnackBar()
// 	}
// 	target.snackbar.more(target, 'more' ,'', 'more')
// })

},{"./jquery.js":2,"./selector.js":3,"./snackbar.js":4}],2:[function(require,module,exports){
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : undefined, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
          a.unshift(n);
        }n = t;while (n = n.parentNode) {
          s.unshift(n);
        }while (a[r] === s[r]) {
          r++;
        }return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return G.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = pe(t);
    }function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }i(null, v = [], l, u);
            }c = v.length;while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }p.push(n);
        }
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);break;
              }
            }c && (T = E);
          }n && ((f = !y && f) && v--, _o && x.push(f));
        }if (v += m, n && m !== v) {
          h = 0;while (y = t[h++]) {
            y(x, b, a, s);
          }if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }b = we(b);
          }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;r.push(e);
      }
    }return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
        $(i[n], s(n), a.reject);
      }return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) {
            delete r[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }i = n.apply(e, r || []);for (o in t) {
      e.style[o] = a[o];
    }return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) {
          a = a.lastChild;
        }w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }f.textContent = "", d = 0;while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) {
        De(e, s, n, r, t[s], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && s.push({ elem: l, handlers: o });
        }
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (i in e) {
          this.off(i, t, e[i]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }n[J.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Ie(this, e, !0);
    }, remove: function remove(e) {
      return Ie(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
        }d[r] = y && y[r] || w.style(e, r);
      }
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    }, prefilters: [ct], prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    } }), dt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;s.push(t);
            }
          }return s;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);break;
      }
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
          }
        }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
        var a,
            s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) {
          s.setRequestHeader(a, i[a]);
        }_n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;return { send: function send(i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function abort() {
          _n2 && _n2();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});

},{}],3:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Selector;

var _jquery = require('./jquery.js');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//取消滚动事件和恢复滚动事件
function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault) e.preventDefault();
	e.returnValue = false; //兼容ie
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
	window.ontouchmove = preventDefault; // mobile
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
	var l = ele.getBoundingClientRect().left; //获取相对于浏览器坐上角坐标
	var t = ele.getBoundingClientRect().top;
	var h = ele.offsetHeight; //元素的高度
	var arr = [].slice.call((0, _jquery2.default)('.miki-select__item'));
	var $miki_select = (0, _jquery2.default)('.miki-select');
	var $matte = (0, _jquery2.default)('<div class="my-matte"></div>');
	//计算选择器出现的位置
	if (ele.value) {
		arr.forEach(function (e, i) {
			(0, _jquery2.default)(e).removeClass('miki-select__item-active');
			if (e.innerHTML === ele.value) {
				(0, _jquery2.default)(e).addClass('miki-select__item-active');
				if (i === 0) return;
				t -= i * 40; //40是selector中每一个选项的高度
			}
		});
	}
	$miki_select.data('origin_t', t); //把选择器原始的top位置绑定到元素上面,方便以后使用

	(0, _jquery2.default)('.my-matte').remove(); //移除可能已经存在的遮罩层
	(0, _jquery2.default)(document.body).append($matte);
	$matte.show();
	$matte.animate({ opacity: 1 });
	//如果浏览器的高度不够,重新调整选择器的位置
	if ((0, _jquery2.default)(window).height() <= t + $miki_select.height()) {
		t = (0, _jquery2.default)(window).height() - $miki_select.height() - 30; //30是自定义的selector距浏览器底部的高度
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
			var $target = (0, _jquery2.default)('.miki-select');
			var window_h = (0, _jquery2.default)(window).height();
			var target_h = $target.height();
			var origin_t = $target.data('origin_t');

			if (origin_t + target_h >= window_h) {
				$target.css({ top: window_h - 30 - target_h + 'px' });
			} else {
				$target.css({ top: origin_t + 'px' });
			}
		}
		function _throttle(fn, wait, time) {
			var previous = null; //记录上一次运行的时间
			var timer = null;
			return function () {
				var now = new Date();
				if (!previous) previous = now;
				//当上一次执行的时间与当前的时间差大于设置的执行间隔时长的话，就主动执行一次
				if (now - previous > time) {
					clearTimeout(timer);
					fn();
					previous = now; // 执行函数后，马上记录当前时间
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

},{"./jquery.js":2}],4:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //若消息提示不要遮罩层
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


var _jquery = require('./jquery.js');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SnackBar = function () {
	function SnackBar() {
		_classCallCheck(this, SnackBar);
	}

	_createClass(SnackBar, [{
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
			this.$dom = (0, _jquery2.default)('<div class="snackbar-box snackbar-bottom" onselectstart="return false">\n\t\t\t\t<div class="snackbar-txt">' + msg + '</div>\n\t\t\t\t<div class="snackbar-close" close><div class="snackbar-close-btn"></div></div>\n\t\t\t\t<div class="snackbar-btn"></div>\n\t\t\t</div>');
			if (/top/.test(this.type)) {
				this.$dom = (0, _jquery2.default)('<div class="snackbar-box snackbar-top" onselectstart="return false">\n\t\t\t\t<div class="snackbar-txt">' + msg + '</div>\n\t\t\t\t<div class="snackbar-close" close><div class="snackbar-close-btn"></div></div>\n\t\t\t\t<div class="snackbar-btn"></div>\n\t\t\t</div>');
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
				// $(this).children('.snackbar-close-btn').addClass('snackbar-close-btn_active')
				clearTimeout(that.timer);
				that.hideSB();
			});
		}
	}, {
		key: 'single',
		value: function single(el, msg, type, color) {
			this.$el = (0, _jquery2.default)(el);
			this.$el.parent().siblings().children('.snackbar-item').each(function () {
				if ((0, _jquery2.default)(this).next('.snackbar-box')[0]) {
					this.snackbar.hideSB();
					clearTimeout(this.snackbar.timer);
				}
			});
			if (this.$el.next('.snackbar-box')[0]) return;
			this.init(msg, type, color);
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

	}]);

	return SnackBar;
}();

exports.default = SnackBar;

},{"./jquery.js":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbmRleC5qcyIsImpzL2pxdWVyeS5qcyIsImpzL3NlbGVjdG9yLmpzIiwianMvc25hY2tiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLHNCQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixjQUF4QixFQUF3QyxZQUFZO0FBQ2hELHVCQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLFFBQTFCLENBQW1DLE9BQW5DLEVBQTRDLFdBQTVDLENBQXdELFlBQXhELEVBQXNFLFFBQXRFLENBQStFLGNBQS9FO0FBQ0EsdUJBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MsUUFBaEMsQ0FBeUMsb0JBQXpDO0FBQ0EsQ0FISjtBQUlHLHNCQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsTUFBZixFQUF1QixjQUF2QixFQUF1QyxZQUFZO0FBQ2xELHVCQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLGNBQWhCLEVBQWdDLFdBQWhDLENBQTRDLG9CQUE1QztBQUNBLHVCQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLFFBQTFCLENBQW1DLE9BQW5DLEVBQTRDLFFBQTVDLENBQXFELFlBQXJEO0FBQ0EsS0FBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDaEIsdUJBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsUUFBMUIsQ0FBbUMsT0FBbkMsRUFBNEMsV0FBNUMsQ0FBd0QsY0FBeEQ7QUFDQSxDQUxEO0FBTUEsc0JBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGNBQXhCLEVBQXdDLFlBQVk7QUFDbkQsdUJBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsUUFBMUIsQ0FBbUMsT0FBbkMsRUFBNEMsUUFBNUMsQ0FBcUQsY0FBckQ7QUFDQSxDQUZEO0FBR0Esc0JBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxNQUFmLEVBQXVCLGNBQXZCLEVBQXVDLFlBQVk7QUFDbEQsS0FBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDaEIsdUJBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsUUFBMUIsQ0FBbUMsT0FBbkMsRUFBNEMsV0FBNUMsQ0FBd0QsY0FBeEQ7QUFDQSxDQUhEO0FBSUEsc0JBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLFlBQVk7QUFDL0MsdUJBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsUUFBMUIsQ0FBbUMsT0FBbkMsRUFBNEMsUUFBNUMsQ0FBcUQsY0FBckQ7QUFDQSx1QkFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixjQUFoQixFQUFnQyxRQUFoQyxDQUF5QyxvQkFBekM7QUFDQSxDQUhEO0FBSUEsc0JBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxNQUFmLEVBQXVCLFVBQXZCLEVBQW1DLFlBQVk7QUFDOUMsdUJBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MsV0FBaEMsQ0FBNEMsb0JBQTVDO0FBQ0EsS0FBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDaEIsdUJBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsUUFBMUIsQ0FBbUMsT0FBbkMsRUFBNEMsV0FBNUMsQ0FBd0QsY0FBeEQ7QUFDQSxDQUpEO0FBS0Esc0JBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLHdCQUF4QixFQUFrRCxZQUFZO0FBQzdELHVCQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLFFBQTFCLENBQW1DLE9BQW5DLEVBQTRDLFdBQTVDLENBQXdELFlBQXhELEVBQXNFLFFBQXRFLENBQStFLGNBQS9FO0FBQ0EsdUJBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MsUUFBaEMsQ0FBeUMsb0JBQXpDO0FBQ0EsTUFBSyxXQUFMLEdBQW1CLGFBQW5CO0FBQ0EsQ0FKRDtBQUtBLHNCQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsTUFBZixFQUF1Qix3QkFBdkIsRUFBaUQsWUFBWTtBQUM1RCxNQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSx1QkFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixjQUFoQixFQUFnQyxXQUFoQyxDQUE0QyxvQkFBNUM7QUFDQSx1QkFBRSxJQUFGLEVBQVEsTUFBUixHQUFpQixNQUFqQixHQUEwQixRQUExQixDQUFtQyxPQUFuQyxFQUE0QyxRQUE1QyxDQUFxRCxZQUFyRDtBQUNBLEtBQUksS0FBSyxLQUFULEVBQWdCO0FBQ2hCLHVCQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLFFBQTFCLENBQW1DLE9BQW5DLEVBQTRDLFdBQTVDLENBQXdELGNBQXhEO0FBQ0EsQ0FORDtBQU9BLHNCQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzdDLHVCQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLFFBQTFCLENBQW1DLE9BQW5DLEVBQTRDLFdBQTVDLENBQXdELFlBQXhELEVBQXNFLFFBQXRFLENBQStFLGNBQS9FO0FBQ0EsdUJBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsY0FBaEIsRUFBZ0MsUUFBaEMsQ0FBeUMsb0JBQXpDO0FBQ0EsQ0FIRDtBQUlBLHNCQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsTUFBZixFQUF1QixRQUF2QixFQUFpQyxZQUFZO0FBQzVDLHVCQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLGNBQWhCLEVBQWdDLFdBQWhDLENBQTRDLG9CQUE1QztBQUNBLHVCQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLFFBQTFCLENBQW1DLE9BQW5DLEVBQTRDLFFBQTVDLENBQXFELFlBQXJEO0FBQ0EsS0FBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDaEIsdUJBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsUUFBakIsQ0FBMEIsT0FBMUIsRUFBbUMsV0FBbkMsQ0FBK0MsY0FBL0M7QUFDQSxDQUxEOztBQU9BLElBQUksYUFBYSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxJQUFJLElBQUksSUFBSSxrQkFBSixFQUFSO0FBQ0EsV0FBVyxPQUFYLEdBQXFCLFlBQVk7QUFDaEMsR0FBRSxJQUFGLENBQU8sVUFBUDtBQUNBLENBRkQ7O0FBSUE7QUFDQSxzQkFBRSxRQUFGLEVBQ0UsRUFERixDQUNLLE9BREwsRUFDYyxxQkFEZCxFQUNxQyxVQUFVLEVBQVYsRUFBYztBQUNqRCxLQUFJLFNBQVMsR0FBRyxhQUFoQjtBQUNBLEtBQUksQ0FBQyxPQUFPLFFBQVosRUFBc0I7QUFDckIsU0FBTyxRQUFQLEdBQWtCLElBQUksa0JBQUosRUFBbEI7QUFDQTtBQUNELFFBQU8sUUFBUCxDQUFnQixNQUFoQixDQUF1QixNQUF2QixFQUErQixJQUEvQixFQUFxQyxVQUFyQztBQUNBLENBUEYsRUFRRSxFQVJGLENBUUssT0FSTCxFQVFjLHVCQVJkLEVBUXVDLFVBQVUsRUFBVixFQUFjO0FBQ25ELEtBQUksU0FBUyxHQUFHLGFBQWhCO0FBQ0EsS0FBSSxDQUFDLE9BQU8sUUFBWixFQUFzQjtBQUNyQixTQUFPLFFBQVAsR0FBa0IsSUFBSSxrQkFBSixFQUFsQjtBQUNBO0FBQ0QsUUFBTyxRQUFQLENBQWdCLE1BQWhCLENBQXVCLE1BQXZCLEVBQStCLElBQS9CLEVBQXFDLFlBQXJDO0FBQ0EsQ0FkRixFQWVFLEVBZkYsQ0FlSyxPQWZMLEVBZWMsc0JBZmQsRUFlc0MsVUFBVSxFQUFWLEVBQWM7QUFDbEQsS0FBSSxTQUFTLEdBQUcsYUFBaEI7QUFDQSxLQUFJLENBQUMsT0FBTyxRQUFaLEVBQXNCO0FBQ3JCLFNBQU8sUUFBUCxHQUFrQixJQUFJLGtCQUFKLEVBQWxCO0FBQ0E7QUFDRCxRQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBdUIsTUFBdkIsRUFBK0IsSUFBL0IsRUFBcUMsV0FBckM7QUFDQSxDQXJCRixFQXNCRSxFQXRCRixDQXNCSyxPQXRCTCxFQXNCYyx3QkF0QmQsRUFzQndDLFVBQVUsRUFBVixFQUFjO0FBQ3BELEtBQUksU0FBUyxHQUFHLGFBQWhCO0FBQ0EsS0FBSSxDQUFDLE9BQU8sUUFBWixFQUFzQjtBQUNyQixTQUFPLFFBQVAsR0FBa0IsSUFBSSxrQkFBSixFQUFsQjtBQUNBO0FBQ0QsUUFBTyxRQUFQLENBQWdCLE1BQWhCLENBQXVCLE1BQXZCLEVBQStCLElBQS9CLEVBQXFDLGFBQXJDO0FBQ0EsQ0E1QkYsRUE2QkUsRUE3QkYsQ0E2QkssT0E3QkwsRUE2QmMsMEJBN0JkLEVBNkIwQyxVQUFVLEVBQVYsRUFBYztBQUN0RCxLQUFJLFNBQVMsR0FBRyxhQUFoQjtBQUNBLEtBQUksQ0FBQyxPQUFPLFFBQVosRUFBc0I7QUFDckIsU0FBTyxRQUFQLEdBQWtCLElBQUksa0JBQUosRUFBbEI7QUFDQTtBQUNELFFBQU8sUUFBUCxDQUFnQixNQUFoQixDQUF1QixNQUF2QixFQUErQixJQUEvQixFQUFxQyxlQUFyQztBQUNBLENBbkNGLEVBb0NFLEVBcENGLENBb0NLLE9BcENMLEVBb0NjLHlCQXBDZCxFQW9DeUMsVUFBVSxFQUFWLEVBQWM7QUFDckQsS0FBSSxTQUFTLEdBQUcsYUFBaEI7QUFDQSxLQUFJLENBQUMsT0FBTyxRQUFaLEVBQXNCO0FBQ3JCLFNBQU8sUUFBUCxHQUFrQixJQUFJLGtCQUFKLEVBQWxCO0FBQ0E7QUFDRCxRQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBdUIsTUFBdkIsRUFBK0IsSUFBL0IsRUFBcUMsY0FBckM7QUFDQSxDQTFDRixFQTJDRSxFQTNDRixDQTJDSyxPQTNDTCxFQTJDYywyQkEzQ2QsRUEyQzJDLFVBQVUsRUFBVixFQUFjO0FBQ3ZELEtBQUksU0FBUyxHQUFHLGFBQWhCO0FBQ0EsS0FBSSxDQUFDLE9BQU8sUUFBWixFQUFzQjtBQUNyQixTQUFPLFFBQVAsR0FBa0IsSUFBSSxrQkFBSixFQUFsQjtBQUNBO0FBQ0QsUUFBTyxRQUFQLENBQWdCLE1BQWhCLENBQXVCLE1BQXZCLEVBQStCLFNBQS9CLEVBQTJDLEVBQTNDLEVBQStDLFNBQS9DO0FBQ0EsQ0FqREYsRUFrREUsRUFsREYsQ0FrREssT0FsREwsRUFrRGMseUJBbERkLEVBa0R5QyxVQUFVLEVBQVYsRUFBYztBQUNyRCxLQUFJLFNBQVMsR0FBRyxhQUFoQjtBQUNBLEtBQUksQ0FBQyxPQUFPLFFBQVosRUFBc0I7QUFDckIsU0FBTyxRQUFQLEdBQWtCLElBQUksa0JBQUosRUFBbEI7QUFDQTtBQUNELFFBQU8sUUFBUCxDQUFnQixNQUFoQixDQUF1QixNQUF2QixFQUErQixPQUEvQixFQUF5QyxFQUF6QyxFQUE2QyxPQUE3QztBQUNBLENBeERGLEVBeURFLEVBekRGLENBeURLLE9BekRMLEVBeURjLHdCQXpEZCxFQXlEd0MsVUFBVSxFQUFWLEVBQWM7QUFDcEQsS0FBSSxTQUFTLEdBQUcsYUFBaEI7QUFDQSxLQUFJLENBQUMsT0FBTyxRQUFaLEVBQXNCO0FBQ3JCLFNBQU8sUUFBUCxHQUFrQixJQUFJLGtCQUFKLEVBQWxCO0FBQ0E7QUFDRCxRQUFPLFFBQVAsQ0FBZ0IsTUFBaEIsQ0FBdUIsTUFBdkIsRUFBK0IsTUFBL0IsRUFBd0MsRUFBeEMsRUFBNEMsTUFBNUM7QUFDQSxDQS9ERixFQWdFRSxFQWhFRixDQWdFSyxPQWhFTCxFQWdFYywwQkFoRWQsRUFnRTBDLFVBQVUsRUFBVixFQUFjO0FBQ3RELEtBQUksU0FBUyxHQUFHLGFBQWhCO0FBQ0EsS0FBSSxDQUFDLE9BQU8sUUFBWixFQUFzQjtBQUNyQixTQUFPLFFBQVAsR0FBa0IsSUFBSSxrQkFBSixFQUFsQjtBQUNBO0FBQ0QsUUFBTyxRQUFQLENBQWdCLE1BQWhCLENBQXVCLE1BQXZCLEVBQStCLFFBQS9CLEVBQTBDLEVBQTFDLEVBQThDLFFBQTlDO0FBQ0EsQ0F0RUY7QUF1RUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeklKO0FBQ0EsQ0FBQyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQztBQUFhLHNCQUFpQixNQUFqQix5Q0FBaUIsTUFBakIsTUFBeUIsb0JBQWlCLE9BQU8sT0FBeEIsQ0FBekIsR0FBeUQsT0FBTyxPQUFQLEdBQWUsRUFBRSxRQUFGLEdBQVcsRUFBRSxDQUFGLEVBQUksQ0FBQyxDQUFMLENBQVgsR0FBbUIsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFHLENBQUMsRUFBRSxRQUFOLEVBQWUsTUFBTSxJQUFJLEtBQUosQ0FBVSwwQ0FBVixDQUFOLENBQTRELE9BQU8sRUFBRSxDQUFGLENBQVA7QUFBWSxHQUE5TCxHQUErTCxFQUFFLENBQUYsQ0FBL0w7QUFBb00sQ0FBL04sQ0FBZ08sZUFBYSxPQUFPLE1BQXBCLEdBQTJCLE1BQTNCLFlBQWhPLEVBQXVRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDO0FBQWEsTUFBSSxJQUFFLEVBQU47QUFBQSxNQUFTLElBQUUsRUFBRSxRQUFiO0FBQUEsTUFBc0IsSUFBRSxPQUFPLGNBQS9CO0FBQUEsTUFBOEMsSUFBRSxFQUFFLEtBQWxEO0FBQUEsTUFBd0QsSUFBRSxFQUFFLE1BQTVEO0FBQUEsTUFBbUUsSUFBRSxFQUFFLElBQXZFO0FBQUEsTUFBNEUsSUFBRSxFQUFFLE9BQWhGO0FBQUEsTUFBd0YsSUFBRSxFQUExRjtBQUFBLE1BQTZGLElBQUUsRUFBRSxRQUFqRztBQUFBLE1BQTBHLElBQUUsRUFBRSxjQUE5RztBQUFBLE1BQTZILElBQUUsRUFBRSxRQUFqSTtBQUFBLE1BQTBJLElBQUUsRUFBRSxJQUFGLENBQU8sTUFBUCxDQUE1STtBQUFBLE1BQTJKLElBQUUsRUFBN0o7QUFBQSxNQUFnSyxJQUFFLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFdBQU0sY0FBWSxPQUFPLENBQW5CLElBQXNCLFlBQVUsT0FBTyxFQUFFLFFBQS9DO0FBQXdELEdBQXhPO0FBQUEsTUFBeU8sSUFBRSxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxXQUFPLFFBQU0sQ0FBTixJQUFTLE1BQUksRUFBRSxNQUF0QjtBQUE2QixHQUF0UjtBQUFBLE1BQXVSLElBQUUsRUFBQyxNQUFLLENBQUMsQ0FBUCxFQUFTLEtBQUksQ0FBQyxDQUFkLEVBQWdCLFVBQVMsQ0FBQyxDQUExQixFQUF6UixDQUFzVCxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLElBQUUsQ0FBQyxJQUFFLEtBQUcsQ0FBTixFQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBUixDQUF5QyxJQUFHLEVBQUUsSUFBRixHQUFPLENBQVAsRUFBUyxDQUFaLEVBQWMsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFFBQUUsQ0FBRixNQUFPLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixDQUFaO0FBQVgsS0FBNkIsRUFBRSxJQUFGLENBQU8sV0FBUCxDQUFtQixDQUFuQixFQUFzQixVQUF0QixDQUFpQyxXQUFqQyxDQUE2QyxDQUE3QztBQUFnRCxZQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxXQUFPLFFBQU0sQ0FBTixHQUFRLElBQUUsRUFBVixHQUFhLG9CQUFpQixDQUFqQix5Q0FBaUIsQ0FBakIsTUFBb0IsY0FBWSxPQUFPLENBQXZDLEdBQXlDLEVBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFGLEtBQWMsUUFBdkQsVUFBdUUsQ0FBdkUseUNBQXVFLENBQXZFLENBQXBCO0FBQTZGLE9BQUksSUFBRSxPQUFOO0FBQUEsTUFBYyxJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxXQUFPLElBQUksRUFBRSxFQUFGLENBQUssSUFBVCxDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUEwQixHQUF4RDtBQUFBLE1BQXlELElBQUUsb0NBQTNELENBQWdHLEVBQUUsRUFBRixHQUFLLEVBQUUsU0FBRixHQUFZLEVBQUMsUUFBTyxPQUFSLEVBQWdCLGFBQVksQ0FBNUIsRUFBOEIsUUFBTyxDQUFyQyxFQUF1QyxTQUFRLG1CQUFVO0FBQUMsYUFBTyxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQVA7QUFBb0IsS0FBOUUsRUFBK0UsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sUUFBTSxDQUFOLEdBQVEsRUFBRSxJQUFGLENBQU8sSUFBUCxDQUFSLEdBQXFCLElBQUUsQ0FBRixHQUFJLEtBQUssSUFBRSxLQUFLLE1BQVosQ0FBSixHQUF3QixLQUFLLENBQUwsQ0FBcEQ7QUFBNEQsS0FBM0osRUFBNEosV0FBVSxtQkFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsRUFBRSxLQUFGLENBQVEsS0FBSyxXQUFMLEVBQVIsRUFBMkIsQ0FBM0IsQ0FBTixDQUFvQyxPQUFPLEVBQUUsVUFBRixHQUFhLElBQWIsRUFBa0IsQ0FBekI7QUFBMkIsS0FBalAsRUFBa1AsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosQ0FBUDtBQUFzQixLQUF6UixFQUEwUixLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLFNBQUwsQ0FBZSxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsZUFBTyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBUDtBQUFxQixPQUE5QyxDQUFmLENBQVA7QUFBdUUsS0FBalgsRUFBa1gsT0FBTSxpQkFBVTtBQUFDLGFBQU8sS0FBSyxTQUFMLENBQWUsRUFBRSxLQUFGLENBQVEsSUFBUixFQUFhLFNBQWIsQ0FBZixDQUFQO0FBQStDLEtBQWxiLEVBQW1iLE9BQU0saUJBQVU7QUFBQyxhQUFPLEtBQUssRUFBTCxDQUFRLENBQVIsQ0FBUDtBQUFrQixLQUF0ZCxFQUF1ZCxNQUFLLGdCQUFVO0FBQUMsYUFBTyxLQUFLLEVBQUwsQ0FBUSxDQUFDLENBQVQsQ0FBUDtBQUFtQixLQUExZixFQUEyZixJQUFHLFlBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBWDtBQUFBLFVBQWtCLElBQUUsQ0FBQyxDQUFELElBQUksSUFBRSxDQUFGLEdBQUksQ0FBSixHQUFNLENBQVYsQ0FBcEIsQ0FBaUMsT0FBTyxLQUFLLFNBQUwsQ0FBZSxLQUFHLENBQUgsSUFBTSxJQUFFLENBQVIsR0FBVSxDQUFDLEtBQUssQ0FBTCxDQUFELENBQVYsR0FBb0IsRUFBbkMsQ0FBUDtBQUE4QyxLQUF6bEIsRUFBMGxCLEtBQUksZUFBVTtBQUFDLGFBQU8sS0FBSyxVQUFMLElBQWlCLEtBQUssV0FBTCxFQUF4QjtBQUEyQyxLQUFwcEIsRUFBcXBCLE1BQUssQ0FBMXBCLEVBQTRwQixNQUFLLEVBQUUsSUFBbnFCLEVBQXdxQixRQUFPLEVBQUUsTUFBanJCLEVBQWpCLEVBQTBzQixFQUFFLE1BQUYsR0FBUyxFQUFFLEVBQUYsQ0FBSyxNQUFMLEdBQVksWUFBVTtBQUFDLFFBQUksQ0FBSjtBQUFBLFFBQU0sQ0FBTjtBQUFBLFFBQVEsQ0FBUjtBQUFBLFFBQVUsQ0FBVjtBQUFBLFFBQVksQ0FBWjtBQUFBLFFBQWMsQ0FBZDtBQUFBLFFBQWdCLElBQUUsVUFBVSxDQUFWLEtBQWMsRUFBaEM7QUFBQSxRQUFtQyxJQUFFLENBQXJDO0FBQUEsUUFBdUMsSUFBRSxVQUFVLE1BQW5EO0FBQUEsUUFBMEQsSUFBRSxDQUFDLENBQTdELENBQStELEtBQUksYUFBVyxPQUFPLENBQWxCLEtBQXNCLElBQUUsQ0FBRixFQUFJLElBQUUsVUFBVSxDQUFWLEtBQWMsRUFBcEIsRUFBdUIsR0FBN0MsR0FBa0Qsb0JBQWlCLENBQWpCLHlDQUFpQixDQUFqQixNQUFvQixFQUFFLENBQUYsQ0FBcEIsS0FBMkIsSUFBRSxFQUE3QixDQUFsRCxFQUFtRixNQUFJLENBQUosS0FBUSxJQUFFLElBQUYsRUFBTyxHQUFmLENBQXZGLEVBQTJHLElBQUUsQ0FBN0csRUFBK0csR0FBL0c7QUFBbUgsVUFBRyxTQUFPLElBQUUsVUFBVSxDQUFWLENBQVQsQ0FBSCxFQUEwQixLQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsWUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLE9BQUssSUFBRSxFQUFFLENBQUYsQ0FBUCxNQUFlLEtBQUcsQ0FBSCxLQUFPLEVBQUUsYUFBRixDQUFnQixDQUFoQixNQUFxQixJQUFFLE1BQU0sT0FBTixDQUFjLENBQWQsQ0FBdkIsQ0FBUCxLQUFrRCxLQUFHLElBQUUsQ0FBQyxDQUFILEVBQUssSUFBRSxLQUFHLE1BQU0sT0FBTixDQUFjLENBQWQsQ0FBSCxHQUFvQixDQUFwQixHQUFzQixFQUFoQyxJQUFvQyxJQUFFLEtBQUcsRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQUgsR0FBc0IsQ0FBdEIsR0FBd0IsRUFBOUQsRUFBaUUsRUFBRSxDQUFGLElBQUssRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQXhILElBQXlJLEtBQUssQ0FBTCxLQUFTLENBQVQsS0FBYSxFQUFFLENBQUYsSUFBSyxDQUFsQixDQUF4SixDQUFQO0FBQVg7QUFBN0ksS0FBNlUsT0FBTyxDQUFQO0FBQVMsR0FBL25DLEVBQWdvQyxFQUFFLE1BQUYsQ0FBUyxFQUFDLFNBQVEsV0FBUyxDQUFDLFVBQVEsS0FBSyxNQUFMLEVBQVQsRUFBd0IsT0FBeEIsQ0FBZ0MsS0FBaEMsRUFBc0MsRUFBdEMsQ0FBbEIsRUFBNEQsU0FBUSxDQUFDLENBQXJFLEVBQXVFLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxZQUFNLElBQUksS0FBSixDQUFVLENBQVYsQ0FBTjtBQUFtQixLQUE1RyxFQUE2RyxNQUFLLGdCQUFVLENBQUUsQ0FBOUgsRUFBK0gsZUFBYyx1QkFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUosRUFBTSxDQUFOLENBQVEsT0FBTSxFQUFFLENBQUMsQ0FBRCxJQUFJLHNCQUFvQixFQUFFLElBQUYsQ0FBTyxDQUFQLENBQTFCLE1BQXVDLEVBQUUsSUFBRSxFQUFFLENBQUYsQ0FBSixLQUFXLGNBQVksUUFBTyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxhQUFULEtBQXlCLEVBQUUsV0FBcEMsQ0FBWixJQUE4RCxFQUFFLElBQUYsQ0FBTyxDQUFQLE1BQVksQ0FBNUgsQ0FBTjtBQUFxSSxLQUF0UyxFQUF1UyxlQUFjLHVCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSixDQUFNLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxlQUFNLENBQUMsQ0FBUDtBQUFYLE9BQW9CLE9BQU0sQ0FBQyxDQUFQO0FBQVMsS0FBcFcsRUFBcVcsWUFBVyxvQkFBUyxDQUFULEVBQVc7QUFBQyxRQUFFLENBQUY7QUFBSyxLQUFqWSxFQUFrWSxNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sSUFBRSxDQUFSLENBQVUsSUFBRyxFQUFFLENBQUYsQ0FBSCxFQUFRO0FBQUMsYUFBSSxJQUFFLEVBQUUsTUFBUixFQUFlLElBQUUsQ0FBakIsRUFBbUIsR0FBbkI7QUFBdUIsY0FBRyxDQUFDLENBQUQsS0FBSyxFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxFQUFZLENBQVosRUFBYyxFQUFFLENBQUYsQ0FBZCxDQUFSLEVBQTRCO0FBQW5EO0FBQXlELE9BQWxFLE1BQXVFLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxZQUFHLENBQUMsQ0FBRCxLQUFLLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksQ0FBWixFQUFjLEVBQUUsQ0FBRixDQUFkLENBQVIsRUFBNEI7QUFBdkMsT0FBNkMsT0FBTyxDQUFQO0FBQVMsS0FBNWhCLEVBQTZoQixNQUFLLGNBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxRQUFNLENBQU4sR0FBUSxFQUFSLEdBQVcsQ0FBQyxJQUFFLEVBQUgsRUFBTyxPQUFQLENBQWUsQ0FBZixFQUFpQixFQUFqQixDQUFsQjtBQUF1QyxLQUFybEIsRUFBc2xCLFdBQVUsbUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksSUFBRSxLQUFHLEVBQVQsQ0FBWSxPQUFPLFFBQU0sQ0FBTixLQUFVLEVBQUUsT0FBTyxDQUFQLENBQUYsSUFBYSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsWUFBVSxPQUFPLENBQWpCLEdBQW1CLENBQUMsQ0FBRCxDQUFuQixHQUF1QixDQUFqQyxDQUFiLEdBQWlELEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULENBQTNELEdBQXdFLENBQS9FO0FBQWlGLEtBQTNzQixFQUE0c0IsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sUUFBTSxDQUFOLEdBQVEsQ0FBQyxDQUFULEdBQVcsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBQWxCO0FBQWdDLEtBQXB3QixFQUFxd0IsT0FBTSxlQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxXQUFJLElBQUksSUFBRSxDQUFDLEVBQUUsTUFBVCxFQUFnQixJQUFFLENBQWxCLEVBQW9CLElBQUUsRUFBRSxNQUE1QixFQUFtQyxJQUFFLENBQXJDLEVBQXVDLEdBQXZDO0FBQTJDLFVBQUUsR0FBRixJQUFPLEVBQUUsQ0FBRixDQUFQO0FBQTNDLE9BQXVELE9BQU8sRUFBRSxNQUFGLEdBQVMsQ0FBVCxFQUFXLENBQWxCO0FBQW9CLEtBQXAyQixFQUFxMkIsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsV0FBSSxJQUFJLENBQUosRUFBTSxJQUFFLEVBQVIsRUFBVyxJQUFFLENBQWIsRUFBZSxJQUFFLEVBQUUsTUFBbkIsRUFBMEIsSUFBRSxDQUFDLENBQWpDLEVBQW1DLElBQUUsQ0FBckMsRUFBdUMsR0FBdkM7QUFBMkMsU0FBQyxJQUFFLENBQUMsRUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLENBQVAsQ0FBSixNQUFpQixDQUFqQixJQUFvQixFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxDQUFwQjtBQUEzQyxPQUE0RSxPQUFPLENBQVA7QUFBUyxLQUEvOEIsRUFBZzlCLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsSUFBRSxDQUFWO0FBQUEsVUFBWSxJQUFFLEVBQWQsQ0FBaUIsSUFBRyxFQUFFLENBQUYsQ0FBSCxFQUFRLEtBQUksSUFBRSxFQUFFLE1BQVIsRUFBZSxJQUFFLENBQWpCLEVBQW1CLEdBQW5CO0FBQXVCLGlCQUFPLElBQUUsRUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLENBQVAsRUFBUyxDQUFULENBQVQsS0FBdUIsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUF2QjtBQUF2QixPQUFSLE1BQXFFLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxpQkFBTyxJQUFFLEVBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxDQUFQLEVBQVMsQ0FBVCxDQUFULEtBQXVCLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBdkI7QUFBWCxPQUE0QyxPQUFPLEVBQUUsS0FBRixDQUFRLEVBQVIsRUFBVyxDQUFYLENBQVA7QUFBcUIsS0FBM25DLEVBQTRuQyxNQUFLLENBQWpvQyxFQUFtb0MsU0FBUSxDQUEzb0MsRUFBVCxDQUFob0MsRUFBd3hFLGNBQVksT0FBTyxNQUFuQixLQUE0QixFQUFFLEVBQUYsQ0FBSyxPQUFPLFFBQVosSUFBc0IsRUFBRSxPQUFPLFFBQVQsQ0FBbEQsQ0FBeHhFLEVBQTgxRSxFQUFFLElBQUYsQ0FBTyx1RUFBdUUsS0FBdkUsQ0FBNkUsR0FBN0UsQ0FBUCxFQUF5RixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLGFBQVcsQ0FBWCxHQUFhLEdBQWYsSUFBb0IsRUFBRSxXQUFGLEVBQXBCO0FBQW9DLEdBQTNJLENBQTkxRSxDQUEyK0UsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFGLElBQUssWUFBVyxDQUFoQixJQUFtQixFQUFFLE1BQTNCO0FBQUEsUUFBa0MsSUFBRSxFQUFFLENBQUYsQ0FBcEMsQ0FBeUMsT0FBTSxDQUFDLEVBQUUsQ0FBRixDQUFELElBQU8sQ0FBQyxFQUFFLENBQUYsQ0FBUixLQUFlLFlBQVUsQ0FBVixJQUFhLE1BQUksQ0FBakIsSUFBb0IsWUFBVSxPQUFPLENBQWpCLElBQW9CLElBQUUsQ0FBdEIsSUFBeUIsSUFBRSxDQUFGLElBQU8sQ0FBbkUsQ0FBTjtBQUE0RSxPQUFJLElBQUUsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLENBQU47QUFBQSxRQUFRLENBQVI7QUFBQSxRQUFVLENBQVY7QUFBQSxRQUFZLENBQVo7QUFBQSxRQUFjLENBQWQ7QUFBQSxRQUFnQixDQUFoQjtBQUFBLFFBQWtCLENBQWxCO0FBQUEsUUFBb0IsQ0FBcEI7QUFBQSxRQUFzQixDQUF0QjtBQUFBLFFBQXdCLENBQXhCO0FBQUEsUUFBMEIsQ0FBMUI7QUFBQSxRQUE0QixDQUE1QjtBQUFBLFFBQThCLENBQTlCO0FBQUEsUUFBZ0MsQ0FBaEM7QUFBQSxRQUFrQyxDQUFsQztBQUFBLFFBQW9DLENBQXBDO0FBQUEsUUFBc0MsQ0FBdEM7QUFBQSxRQUF3QyxDQUF4QztBQUFBLFFBQTBDLElBQUUsV0FBUyxJQUFFLElBQUksSUFBSixFQUF2RDtBQUFBLFFBQWdFLElBQUUsRUFBRSxRQUFwRTtBQUFBLFFBQTZFLElBQUUsQ0FBL0U7QUFBQSxRQUFpRixJQUFFLENBQW5GO0FBQUEsUUFBcUYsSUFBRSxJQUF2RjtBQUFBLFFBQTRGLElBQUUsSUFBOUY7QUFBQSxRQUFtRyxJQUFFLElBQXJHO0FBQUEsUUFBMEcsSUFBRSxXQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLE1BQUksQ0FBSixLQUFRLElBQUUsQ0FBQyxDQUFYLEdBQWMsQ0FBckI7QUFBdUIsS0FBako7QUFBQSxRQUFrSixJQUFFLEdBQUcsY0FBdko7QUFBQSxRQUFzSyxJQUFFLEVBQXhLO0FBQUEsUUFBMkssSUFBRSxFQUFFLEdBQS9LO0FBQUEsUUFBbUwsSUFBRSxFQUFFLElBQXZMO0FBQUEsUUFBNEwsSUFBRSxFQUFFLElBQWhNO0FBQUEsUUFBcU0sSUFBRSxFQUFFLEtBQXpNO0FBQUEsUUFBK00sSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBSSxJQUFJLElBQUUsQ0FBTixFQUFRLElBQUUsRUFBRSxNQUFoQixFQUF1QixJQUFFLENBQXpCLEVBQTJCLEdBQTNCO0FBQStCLFlBQUcsRUFBRSxDQUFGLE1BQU8sQ0FBVixFQUFZLE9BQU8sQ0FBUDtBQUEzQyxPQUFvRCxPQUFNLENBQUMsQ0FBUDtBQUFTLEtBQTVSO0FBQUEsUUFBNlIsSUFBRSw0SEFBL1I7QUFBQSxRQUE0WixJQUFFLHFCQUE5WjtBQUFBLFFBQW9iLElBQUUsK0JBQXRiO0FBQUEsUUFBc2QsSUFBRSxRQUFNLENBQU4sR0FBUSxJQUFSLEdBQWEsQ0FBYixHQUFlLE1BQWYsR0FBc0IsQ0FBdEIsR0FBd0IsZUFBeEIsR0FBd0MsQ0FBeEMsR0FBMEMsMERBQTFDLEdBQXFHLENBQXJHLEdBQXVHLE1BQXZHLEdBQThHLENBQTlHLEdBQWdILE1BQXhrQjtBQUFBLFFBQStrQixJQUFFLE9BQUssQ0FBTCxHQUFPLHVGQUFQLEdBQStGLENBQS9GLEdBQWlHLGNBQWxyQjtBQUFBLFFBQWlzQixJQUFFLElBQUksTUFBSixDQUFXLElBQUUsR0FBYixFQUFpQixHQUFqQixDQUFuc0I7QUFBQSxRQUF5dEIsSUFBRSxJQUFJLE1BQUosQ0FBVyxNQUFJLENBQUosR0FBTSw2QkFBTixHQUFvQyxDQUFwQyxHQUFzQyxJQUFqRCxFQUFzRCxHQUF0RCxDQUEzdEI7QUFBQSxRQUFzeEIsSUFBRSxJQUFJLE1BQUosQ0FBVyxNQUFJLENBQUosR0FBTSxJQUFOLEdBQVcsQ0FBWCxHQUFhLEdBQXhCLENBQXh4QjtBQUFBLFFBQXF6QixJQUFFLElBQUksTUFBSixDQUFXLE1BQUksQ0FBSixHQUFNLFVBQU4sR0FBaUIsQ0FBakIsR0FBbUIsR0FBbkIsR0FBdUIsQ0FBdkIsR0FBeUIsR0FBcEMsQ0FBdnpCO0FBQUEsUUFBZzJCLElBQUUsSUFBSSxNQUFKLENBQVcsTUFBSSxDQUFKLEdBQU0sZ0JBQU4sR0FBdUIsQ0FBdkIsR0FBeUIsTUFBcEMsRUFBMkMsR0FBM0MsQ0FBbDJCO0FBQUEsUUFBazVCLElBQUUsSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUFwNUI7QUFBQSxRQUFrNkIsSUFBRSxJQUFJLE1BQUosQ0FBVyxNQUFJLENBQUosR0FBTSxHQUFqQixDQUFwNkI7QUFBQSxRQUEwN0IsSUFBRSxFQUFDLElBQUcsSUFBSSxNQUFKLENBQVcsUUFBTSxDQUFOLEdBQVEsR0FBbkIsQ0FBSixFQUE0QixPQUFNLElBQUksTUFBSixDQUFXLFVBQVEsQ0FBUixHQUFVLEdBQXJCLENBQWxDLEVBQTRELEtBQUksSUFBSSxNQUFKLENBQVcsT0FBSyxDQUFMLEdBQU8sT0FBbEIsQ0FBaEUsRUFBMkYsTUFBSyxJQUFJLE1BQUosQ0FBVyxNQUFJLENBQWYsQ0FBaEcsRUFBa0gsUUFBTyxJQUFJLE1BQUosQ0FBVyxNQUFJLENBQWYsQ0FBekgsRUFBMkksT0FBTSxJQUFJLE1BQUosQ0FBVywyREFBeUQsQ0FBekQsR0FBMkQsOEJBQTNELEdBQTBGLENBQTFGLEdBQTRGLGFBQTVGLEdBQTBHLENBQTFHLEdBQTRHLFlBQTVHLEdBQXlILENBQXpILEdBQTJILFFBQXRJLEVBQStJLEdBQS9JLENBQWpKLEVBQXFTLE1BQUssSUFBSSxNQUFKLENBQVcsU0FBTyxDQUFQLEdBQVMsSUFBcEIsRUFBeUIsR0FBekIsQ0FBMVMsRUFBd1UsY0FBYSxJQUFJLE1BQUosQ0FBVyxNQUFJLENBQUosR0FBTSxrREFBTixHQUF5RCxDQUF6RCxHQUEyRCxrQkFBM0QsR0FBOEUsQ0FBOUUsR0FBZ0Ysa0JBQTNGLEVBQThHLEdBQTlHLENBQXJWLEVBQTU3QjtBQUFBLFFBQXE0QyxJQUFFLHFDQUF2NEM7QUFBQSxRQUE2NkMsSUFBRSxRQUEvNkM7QUFBQSxRQUF3N0MsSUFBRSx3QkFBMTdDO0FBQUEsUUFBbTlDLElBQUUsa0NBQXI5QztBQUFBLFFBQXcvQyxJQUFFLE1BQTEvQztBQUFBLFFBQWlnRCxJQUFFLElBQUksTUFBSixDQUFXLHVCQUFxQixDQUFyQixHQUF1QixLQUF2QixHQUE2QixDQUE3QixHQUErQixNQUExQyxFQUFpRCxJQUFqRCxDQUFuZ0Q7QUFBQSxRQUEwakQsS0FBRyxTQUFILEVBQUcsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksSUFBRSxPQUFLLENBQUwsR0FBTyxLQUFiLENBQW1CLE9BQU8sTUFBSSxDQUFKLElBQU8sQ0FBUCxHQUFTLENBQVQsR0FBVyxJQUFFLENBQUYsR0FBSSxPQUFPLFlBQVAsQ0FBb0IsSUFBRSxLQUF0QixDQUFKLEdBQWlDLE9BQU8sWUFBUCxDQUFvQixLQUFHLEVBQUgsR0FBTSxLQUExQixFQUFnQyxPQUFLLENBQUwsR0FBTyxLQUF2QyxDQUFuRDtBQUFpRyxLQUFqc0Q7QUFBQSxRQUFrc0QsS0FBRyxxREFBcnNEO0FBQUEsUUFBMnZELEtBQUcsU0FBSCxFQUFHLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sSUFBRSxTQUFPLENBQVAsR0FBUyxRQUFULEdBQWtCLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFDLENBQVgsSUFBYyxJQUFkLEdBQW1CLEVBQUUsVUFBRixDQUFhLEVBQUUsTUFBRixHQUFTLENBQXRCLEVBQXlCLFFBQXpCLENBQWtDLEVBQWxDLENBQW5CLEdBQXlELEdBQTdFLEdBQWlGLE9BQUssQ0FBN0Y7QUFBK0YsS0FBMzJEO0FBQUEsUUFBNDJELEtBQUcsU0FBSCxFQUFHLEdBQVU7QUFBQztBQUFJLEtBQTkzRDtBQUFBLFFBQSszRCxLQUFHLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFNLENBQUMsQ0FBRCxLQUFLLEVBQUUsUUFBUCxLQUFrQixVQUFTLENBQVQsSUFBWSxXQUFVLENBQXhDLENBQU47QUFBaUQsS0FBaEUsRUFBaUUsRUFBQyxLQUFJLFlBQUwsRUFBa0IsTUFBSyxRQUF2QixFQUFqRSxDQUFsNEQsQ0FBcStELElBQUc7QUFBQyxRQUFFLEtBQUYsQ0FBUSxJQUFFLEVBQUUsSUFBRixDQUFPLEVBQUUsVUFBVCxDQUFWLEVBQStCLEVBQUUsVUFBakMsR0FBNkMsRUFBRSxFQUFFLFVBQUYsQ0FBYSxNQUFmLEVBQXVCLFFBQXBFO0FBQTZFLEtBQWpGLENBQWlGLE9BQU0sQ0FBTixFQUFRO0FBQUMsVUFBRSxFQUFDLE9BQU0sRUFBRSxNQUFGLEdBQVMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBVjtBQUFxQixTQUE1QyxHQUE2QyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFJLElBQUUsRUFBRSxNQUFSO0FBQUEsY0FBZSxJQUFFLENBQWpCLENBQW1CLE9BQU0sRUFBRSxHQUFGLElBQU8sRUFBRSxHQUFGLENBQWIsSUFBcUIsRUFBRSxNQUFGLEdBQVMsSUFBRSxDQUFYO0FBQWEsU0FBdkgsRUFBRjtBQUEySCxjQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQjtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsQ0FBVjtBQUFBLFVBQVksQ0FBWjtBQUFBLFVBQWMsQ0FBZDtBQUFBLFVBQWdCLENBQWhCO0FBQUEsVUFBa0IsSUFBRSxLQUFHLEVBQUUsYUFBekI7QUFBQSxVQUF1QyxJQUFFLElBQUUsRUFBRSxRQUFKLEdBQWEsQ0FBdEQsQ0FBd0QsSUFBRyxJQUFFLEtBQUcsRUFBTCxFQUFRLFlBQVUsT0FBTyxDQUFqQixJQUFvQixDQUFDLENBQXJCLElBQXdCLE1BQUksQ0FBSixJQUFPLE1BQUksQ0FBWCxJQUFjLE9BQUssQ0FBdEQsRUFBd0QsT0FBTyxDQUFQLENBQVMsSUFBRyxDQUFDLENBQUQsS0FBSyxDQUFDLElBQUUsRUFBRSxhQUFGLElBQWlCLENBQW5CLEdBQXFCLENBQXRCLE1BQTJCLENBQTNCLElBQThCLEVBQUUsQ0FBRixDQUE5QixFQUFtQyxJQUFFLEtBQUcsQ0FBeEMsRUFBMEMsQ0FBL0MsQ0FBSCxFQUFxRDtBQUFDLFlBQUcsT0FBSyxDQUFMLEtBQVMsSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQVgsQ0FBSCxFQUF5QixJQUFHLElBQUUsRUFBRSxDQUFGLENBQUwsRUFBVTtBQUFDLGNBQUcsTUFBSSxDQUFQLEVBQVM7QUFBQyxnQkFBRyxFQUFFLElBQUUsRUFBRSxjQUFGLENBQWlCLENBQWpCLENBQUosQ0FBSCxFQUE0QixPQUFPLENBQVAsQ0FBUyxJQUFHLEVBQUUsRUFBRixLQUFPLENBQVYsRUFBWSxPQUFPLEVBQUUsSUFBRixDQUFPLENBQVAsR0FBVSxDQUFqQjtBQUFtQixXQUE5RSxNQUFtRixJQUFHLE1BQUksSUFBRSxFQUFFLGNBQUYsQ0FBaUIsQ0FBakIsQ0FBTixLQUE0QixFQUFFLENBQUYsRUFBSSxDQUFKLENBQTVCLElBQW9DLEVBQUUsRUFBRixLQUFPLENBQTlDLEVBQWdELE9BQU8sRUFBRSxJQUFGLENBQU8sQ0FBUCxHQUFVLENBQWpCO0FBQW1CLFNBQWpLLE1BQXFLO0FBQUMsY0FBRyxFQUFFLENBQUYsQ0FBSCxFQUFRLE9BQU8sRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsb0JBQUYsQ0FBdUIsQ0FBdkIsQ0FBVixHQUFxQyxDQUE1QyxDQUE4QyxJQUFHLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBSCxLQUFVLEVBQUUsc0JBQVosSUFBb0MsRUFBRSxzQkFBekMsRUFBZ0UsT0FBTyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxzQkFBRixDQUF5QixDQUF6QixDQUFWLEdBQXVDLENBQTlDO0FBQWdELGFBQUcsRUFBRSxHQUFGLElBQU8sQ0FBQyxFQUFFLElBQUUsR0FBSixDQUFSLEtBQW1CLENBQUMsQ0FBRCxJQUFJLENBQUMsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUF4QixDQUFILEVBQXNDO0FBQUMsY0FBRyxNQUFJLENBQVAsRUFBUyxJQUFFLENBQUYsRUFBSSxJQUFFLENBQU4sQ0FBVCxLQUFzQixJQUFHLGFBQVcsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFkLEVBQXVDO0FBQUMsYUFBQyxJQUFFLEVBQUUsWUFBRixDQUFlLElBQWYsQ0FBSCxJQUF5QixJQUFFLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYSxFQUFiLENBQTNCLEdBQTRDLEVBQUUsWUFBRixDQUFlLElBQWYsRUFBb0IsSUFBRSxDQUF0QixDQUE1QyxFQUFxRSxJQUFFLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBSCxFQUFTLE1BQWhGLENBQXVGLE9BQU0sR0FBTjtBQUFVLGdCQUFFLENBQUYsSUFBSyxNQUFJLENBQUosR0FBTSxHQUFOLEdBQVUsR0FBRyxFQUFFLENBQUYsQ0FBSCxDQUFmO0FBQVYsYUFBa0MsSUFBRSxFQUFFLElBQUYsQ0FBTyxHQUFQLENBQUYsRUFBYyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsS0FBVyxHQUFHLEVBQUUsVUFBTCxDQUFYLElBQTZCLENBQTdDO0FBQStDLGVBQUcsQ0FBSCxFQUFLLElBQUc7QUFBQyxtQkFBTyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxnQkFBRixDQUFtQixDQUFuQixDQUFWLEdBQWlDLENBQXhDO0FBQTBDLFdBQTlDLENBQThDLE9BQU0sQ0FBTixFQUFRLENBQUUsQ0FBeEQsU0FBK0Q7QUFBQyxrQkFBSSxDQUFKLElBQU8sRUFBRSxlQUFGLENBQWtCLElBQWxCLENBQVA7QUFBK0I7QUFBQztBQUFDLGNBQU8sRUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksSUFBWixDQUFGLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLENBQXhCLENBQVA7QUFBa0MsY0FBUyxFQUFULEdBQWE7QUFBQyxVQUFJLElBQUUsRUFBTixDQUFTLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxlQUFPLEVBQUUsSUFBRixDQUFPLElBQUUsR0FBVCxJQUFjLEVBQUUsV0FBaEIsSUFBNkIsT0FBTyxFQUFFLEVBQUUsS0FBRixFQUFGLENBQXBDLEVBQWlELEVBQUUsSUFBRSxHQUFKLElBQVMsQ0FBakU7QUFBbUUsY0FBTyxDQUFQO0FBQVMsY0FBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsYUFBTyxFQUFFLENBQUYsSUFBSyxDQUFDLENBQU4sRUFBUSxDQUFmO0FBQWlCLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLFVBQUksSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsVUFBaEIsQ0FBTixDQUFrQyxJQUFHO0FBQUMsZUFBTSxDQUFDLENBQUMsRUFBRSxDQUFGLENBQVI7QUFBYSxPQUFqQixDQUFpQixPQUFNLENBQU4sRUFBUTtBQUFDLGVBQU0sQ0FBQyxDQUFQO0FBQVMsT0FBbkMsU0FBMEM7QUFBQyxVQUFFLFVBQUYsSUFBYyxFQUFFLFVBQUYsQ0FBYSxXQUFiLENBQXlCLENBQXpCLENBQWQsRUFBMEMsSUFBRSxJQUE1QztBQUFpRDtBQUFDLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsVUFBSSxJQUFFLEVBQUUsS0FBRixDQUFRLEdBQVIsQ0FBTjtBQUFBLFVBQW1CLElBQUUsRUFBRSxNQUF2QixDQUE4QixPQUFNLEdBQU47QUFBVSxVQUFFLFVBQUYsQ0FBYSxFQUFFLENBQUYsQ0FBYixJQUFtQixDQUFuQjtBQUFWO0FBQStCLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsVUFBSSxJQUFFLEtBQUcsQ0FBVDtBQUFBLFVBQVcsSUFBRSxLQUFHLE1BQUksRUFBRSxRQUFULElBQW1CLE1BQUksRUFBRSxRQUF6QixJQUFtQyxFQUFFLFdBQUYsR0FBYyxFQUFFLFdBQWhFLENBQTRFLElBQUcsQ0FBSCxFQUFLLE9BQU8sQ0FBUCxDQUFTLElBQUcsQ0FBSCxFQUFLLE9BQU0sSUFBRSxFQUFFLFdBQVY7QUFBc0IsWUFBRyxNQUFJLENBQVAsRUFBUyxPQUFNLENBQUMsQ0FBUDtBQUEvQixPQUF3QyxPQUFPLElBQUUsQ0FBRixHQUFJLENBQUMsQ0FBWjtBQUFjLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLGFBQU8sVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFNLFlBQVUsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFWLElBQW9DLEVBQUUsSUFBRixLQUFTLENBQW5EO0FBQXFELE9BQXhFO0FBQXlFLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLGFBQU8sVUFBUyxDQUFULEVBQVc7QUFBQyxZQUFJLElBQUUsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFOLENBQStCLE9BQU0sQ0FBQyxZQUFVLENBQVYsSUFBYSxhQUFXLENBQXpCLEtBQTZCLEVBQUUsSUFBRixLQUFTLENBQTVDO0FBQThDLE9BQWhHO0FBQWlHLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLGFBQU8sVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFNLFVBQVMsQ0FBVCxHQUFXLEVBQUUsVUFBRixJQUFjLENBQUMsQ0FBRCxLQUFLLEVBQUUsUUFBckIsR0FBOEIsV0FBVSxDQUFWLEdBQVksV0FBVSxFQUFFLFVBQVosR0FBdUIsRUFBRSxVQUFGLENBQWEsUUFBYixLQUF3QixDQUEvQyxHQUFpRCxFQUFFLFFBQUYsS0FBYSxDQUExRSxHQUE0RSxFQUFFLFVBQUYsS0FBZSxDQUFmLElBQWtCLEVBQUUsVUFBRixLQUFlLENBQUMsQ0FBaEIsSUFBbUIsR0FBRyxDQUFILE1BQVEsQ0FBdkosR0FBeUosRUFBRSxRQUFGLEtBQWEsQ0FBakwsR0FBbUwsV0FBVSxDQUFWLElBQWEsRUFBRSxRQUFGLEtBQWEsQ0FBbk47QUFBcU4sT0FBeE87QUFBeU8sY0FBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsYUFBTyxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsZUFBTyxJQUFFLENBQUMsQ0FBSCxFQUFLLEdBQUcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsY0FBSSxDQUFKO0FBQUEsY0FBTSxJQUFFLEVBQUUsRUFBRixFQUFLLEVBQUUsTUFBUCxFQUFjLENBQWQsQ0FBUjtBQUFBLGNBQXlCLElBQUUsRUFBRSxNQUE3QixDQUFvQyxPQUFNLEdBQU47QUFBVSxjQUFFLElBQUUsRUFBRSxDQUFGLENBQUosTUFBWSxFQUFFLENBQUYsSUFBSyxFQUFFLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixDQUFQLENBQWpCO0FBQVY7QUFBeUMsU0FBOUYsQ0FBWjtBQUE0RyxPQUEzSCxDQUFQO0FBQW9JLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLGFBQU8sS0FBRyxlQUFhLE9BQU8sRUFBRSxvQkFBekIsSUFBK0MsQ0FBdEQ7QUFBd0QsU0FBRSxHQUFHLE9BQUgsR0FBVyxFQUFiLEVBQWdCLElBQUUsR0FBRyxLQUFILEdBQVMsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsS0FBRyxDQUFDLEVBQUUsYUFBRixJQUFpQixDQUFsQixFQUFxQixlQUE5QixDQUE4QyxPQUFNLENBQUMsQ0FBQyxDQUFGLElBQUssV0FBUyxFQUFFLFFBQXRCO0FBQStCLEtBQXBILEVBQXFILElBQUUsR0FBRyxXQUFILEdBQWUsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLENBQU47QUFBQSxVQUFRLElBQUUsSUFBRSxFQUFFLGFBQUYsSUFBaUIsQ0FBbkIsR0FBcUIsQ0FBL0IsQ0FBaUMsT0FBTyxNQUFJLENBQUosSUFBTyxNQUFJLEVBQUUsUUFBYixJQUF1QixFQUFFLGVBQXpCLElBQTBDLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBRSxlQUFSLEVBQXdCLElBQUUsQ0FBQyxFQUFFLENBQUYsQ0FBM0IsRUFBZ0MsTUFBSSxDQUFKLEtBQVEsSUFBRSxFQUFFLFdBQVosS0FBMEIsRUFBRSxHQUFGLEtBQVEsQ0FBbEMsS0FBc0MsRUFBRSxnQkFBRixHQUFtQixFQUFFLGdCQUFGLENBQW1CLFFBQW5CLEVBQTRCLEVBQTVCLEVBQStCLENBQUMsQ0FBaEMsQ0FBbkIsR0FBc0QsRUFBRSxXQUFGLElBQWUsRUFBRSxXQUFGLENBQWMsVUFBZCxFQUF5QixFQUF6QixDQUEzRyxDQUFoQyxFQUF5SyxFQUFFLFVBQUYsR0FBYSxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsZUFBTyxFQUFFLFNBQUYsR0FBWSxHQUFaLEVBQWdCLENBQUMsRUFBRSxZQUFGLENBQWUsV0FBZixDQUF4QjtBQUFvRCxPQUFuRSxDQUF0TCxFQUEyUCxFQUFFLG9CQUFGLEdBQXVCLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFPLEVBQUUsV0FBRixDQUFjLEVBQUUsYUFBRixDQUFnQixFQUFoQixDQUFkLEdBQW1DLENBQUMsRUFBRSxvQkFBRixDQUF1QixHQUF2QixFQUE0QixNQUF2RTtBQUE4RSxPQUE3RixDQUFsUixFQUFpWCxFQUFFLHNCQUFGLEdBQXlCLEVBQUUsSUFBRixDQUFPLEVBQUUsc0JBQVQsQ0FBMVksRUFBMmEsRUFBRSxPQUFGLEdBQVUsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGVBQU8sRUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFpQixFQUFqQixHQUFvQixDQUFwQixFQUFzQixDQUFDLEVBQUUsaUJBQUgsSUFBc0IsQ0FBQyxFQUFFLGlCQUFGLENBQW9CLENBQXBCLEVBQXVCLE1BQTNFO0FBQWtGLE9BQWpHLENBQXJiLEVBQXdoQixFQUFFLE9BQUYsSUFBVyxFQUFFLE1BQUYsQ0FBUyxFQUFULEdBQVksVUFBUyxDQUFULEVBQVc7QUFBQyxZQUFJLElBQUUsRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLEVBQVosQ0FBTixDQUFzQixPQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sRUFBRSxZQUFGLENBQWUsSUFBZixNQUF1QixDQUE5QjtBQUFnQyxTQUFuRDtBQUFvRCxPQUFsRyxFQUFtRyxFQUFFLElBQUYsQ0FBTyxFQUFQLEdBQVUsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBRyxlQUFhLE9BQU8sRUFBRSxjQUF0QixJQUFzQyxDQUF6QyxFQUEyQztBQUFDLGNBQUksSUFBRSxFQUFFLGNBQUYsQ0FBaUIsQ0FBakIsQ0FBTixDQUEwQixPQUFPLElBQUUsQ0FBQyxDQUFELENBQUYsR0FBTSxFQUFiO0FBQWdCO0FBQUMsT0FBN04sS0FBZ08sRUFBRSxNQUFGLENBQVMsRUFBVCxHQUFZLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsRUFBWSxFQUFaLENBQU4sQ0FBc0IsT0FBTyxVQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxlQUFhLE9BQU8sRUFBRSxnQkFBdEIsSUFBd0MsRUFBRSxnQkFBRixDQUFtQixJQUFuQixDQUE5QyxDQUF1RSxPQUFPLEtBQUcsRUFBRSxLQUFGLEtBQVUsQ0FBcEI7QUFBc0IsU0FBaEg7QUFBaUgsT0FBL0osRUFBZ0ssRUFBRSxJQUFGLENBQU8sRUFBUCxHQUFVLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUcsZUFBYSxPQUFPLEVBQUUsY0FBdEIsSUFBc0MsQ0FBekMsRUFBMkM7QUFBQyxjQUFJLENBQUo7QUFBQSxjQUFNLENBQU47QUFBQSxjQUFRLENBQVI7QUFBQSxjQUFVLElBQUUsRUFBRSxjQUFGLENBQWlCLENBQWpCLENBQVosQ0FBZ0MsSUFBRyxDQUFILEVBQUs7QUFBQyxnQkFBRyxDQUFDLElBQUUsRUFBRSxnQkFBRixDQUFtQixJQUFuQixDQUFILEtBQThCLEVBQUUsS0FBRixLQUFVLENBQTNDLEVBQTZDLE9BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxJQUFFLEVBQUUsaUJBQUYsQ0FBb0IsQ0FBcEIsQ0FBRixFQUF5QixJQUFFLENBQTNCLENBQTZCLE9BQU0sSUFBRSxFQUFFLEdBQUYsQ0FBUjtBQUFlLGtCQUFHLENBQUMsSUFBRSxFQUFFLGdCQUFGLENBQW1CLElBQW5CLENBQUgsS0FBOEIsRUFBRSxLQUFGLEtBQVUsQ0FBM0MsRUFBNkMsT0FBTSxDQUFDLENBQUQsQ0FBTjtBQUE1RDtBQUFzRSxrQkFBTSxFQUFOO0FBQVM7QUFBQyxPQUE5b0IsQ0FBeGhCLEVBQXdxQyxFQUFFLElBQUYsQ0FBTyxHQUFQLEdBQVcsRUFBRSxvQkFBRixHQUF1QixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxlQUFNLGVBQWEsT0FBTyxFQUFFLG9CQUF0QixHQUEyQyxFQUFFLG9CQUFGLENBQXVCLENBQXZCLENBQTNDLEdBQXFFLEVBQUUsR0FBRixHQUFNLEVBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsQ0FBTixHQUE0QixLQUFLLENBQTVHO0FBQThHLE9BQW5KLEdBQW9KLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUksQ0FBSjtBQUFBLFlBQU0sSUFBRSxFQUFSO0FBQUEsWUFBVyxJQUFFLENBQWI7QUFBQSxZQUFlLElBQUUsRUFBRSxvQkFBRixDQUF1QixDQUF2QixDQUFqQixDQUEyQyxJQUFHLFFBQU0sQ0FBVCxFQUFXO0FBQUMsaUJBQU0sSUFBRSxFQUFFLEdBQUYsQ0FBUjtBQUFlLGtCQUFJLEVBQUUsUUFBTixJQUFnQixFQUFFLElBQUYsQ0FBTyxDQUFQLENBQWhCO0FBQWYsV0FBeUMsT0FBTyxDQUFQO0FBQVMsZ0JBQU8sQ0FBUDtBQUFTLE9BQXY4QyxFQUF3OEMsRUFBRSxJQUFGLENBQU8sS0FBUCxHQUFhLEVBQUUsc0JBQUYsSUFBMEIsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBRyxlQUFhLE9BQU8sRUFBRSxzQkFBdEIsSUFBOEMsQ0FBakQsRUFBbUQsT0FBTyxFQUFFLHNCQUFGLENBQXlCLENBQXpCLENBQVA7QUFBbUMsT0FBbmxELEVBQW9sRCxJQUFFLEVBQXRsRCxFQUF5bEQsSUFBRSxFQUEzbEQsRUFBOGxELENBQUMsRUFBRSxHQUFGLEdBQU0sRUFBRSxJQUFGLENBQU8sRUFBRSxnQkFBVCxDQUFQLE1BQXFDLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWlCLFNBQWpCLEdBQTJCLFlBQVUsQ0FBVixHQUFZLG9CQUFaLEdBQWlDLENBQWpDLEdBQW1DLGlFQUE5RCxFQUFnSSxFQUFFLGdCQUFGLENBQW1CLHNCQUFuQixFQUEyQyxNQUEzQyxJQUFtRCxFQUFFLElBQUYsQ0FBTyxXQUFTLENBQVQsR0FBVyxjQUFsQixDQUFuTCxFQUFxTixFQUFFLGdCQUFGLENBQW1CLFlBQW5CLEVBQWlDLE1BQWpDLElBQXlDLEVBQUUsSUFBRixDQUFPLFFBQU0sQ0FBTixHQUFRLFlBQVIsR0FBcUIsQ0FBckIsR0FBdUIsR0FBOUIsQ0FBOVAsRUFBaVMsRUFBRSxnQkFBRixDQUFtQixVQUFRLENBQVIsR0FBVSxJQUE3QixFQUFtQyxNQUFuQyxJQUEyQyxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQTVVLEVBQXlWLEVBQUUsZ0JBQUYsQ0FBbUIsVUFBbkIsRUFBK0IsTUFBL0IsSUFBdUMsRUFBRSxJQUFGLENBQU8sVUFBUCxDQUFoWSxFQUFtWixFQUFFLGdCQUFGLENBQW1CLE9BQUssQ0FBTCxHQUFPLElBQTFCLEVBQWdDLE1BQWhDLElBQXdDLEVBQUUsSUFBRixDQUFPLFVBQVAsQ0FBM2I7QUFBOGMsT0FBN2QsR0FBK2QsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsU0FBRixHQUFZLG1GQUFaLENBQWdHLElBQUksSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsT0FBaEIsQ0FBTixDQUErQixFQUFFLFlBQUYsQ0FBZSxNQUFmLEVBQXNCLFFBQXRCLEdBQWdDLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBaUIsWUFBakIsQ0FBOEIsTUFBOUIsRUFBcUMsR0FBckMsQ0FBaEMsRUFBMEUsRUFBRSxnQkFBRixDQUFtQixVQUFuQixFQUErQixNQUEvQixJQUF1QyxFQUFFLElBQUYsQ0FBTyxTQUFPLENBQVAsR0FBUyxhQUFoQixDQUFqSCxFQUFnSixNQUFJLEVBQUUsZ0JBQUYsQ0FBbUIsVUFBbkIsRUFBK0IsTUFBbkMsSUFBMkMsRUFBRSxJQUFGLENBQU8sVUFBUCxFQUFrQixXQUFsQixDQUEzTCxFQUEwTixFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWlCLFFBQWpCLEdBQTBCLENBQUMsQ0FBclAsRUFBdVAsTUFBSSxFQUFFLGdCQUFGLENBQW1CLFdBQW5CLEVBQWdDLE1BQXBDLElBQTRDLEVBQUUsSUFBRixDQUFPLFVBQVAsRUFBa0IsV0FBbEIsQ0FBblMsRUFBa1UsRUFBRSxnQkFBRixDQUFtQixNQUFuQixDQUFsVSxFQUE2VixFQUFFLElBQUYsQ0FBTyxNQUFQLENBQTdWO0FBQTRXLE9BQTFmLENBQXBnQixDQUE5bEQsRUFBK2xGLENBQUMsRUFBRSxlQUFGLEdBQWtCLEVBQUUsSUFBRixDQUFPLElBQUUsRUFBRSxPQUFGLElBQVcsRUFBRSxxQkFBYixJQUFvQyxFQUFFLGtCQUF0QyxJQUEwRCxFQUFFLGdCQUE1RCxJQUE4RSxFQUFFLGlCQUF6RixDQUFuQixLQUFpSSxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxpQkFBRixHQUFvQixFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsR0FBVCxDQUFwQixFQUFrQyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsV0FBVCxDQUFsQyxFQUF3RCxFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQVksQ0FBWixDQUF4RDtBQUF1RSxPQUF0RixDQUFodUYsRUFBd3pGLElBQUUsRUFBRSxNQUFGLElBQVUsSUFBSSxNQUFKLENBQVcsRUFBRSxJQUFGLENBQU8sR0FBUCxDQUFYLENBQXAwRixFQUE0MUYsSUFBRSxFQUFFLE1BQUYsSUFBVSxJQUFJLE1BQUosQ0FBVyxFQUFFLElBQUYsQ0FBTyxHQUFQLENBQVgsQ0FBeDJGLEVBQWc0RixJQUFFLEVBQUUsSUFBRixDQUFPLEVBQUUsdUJBQVQsQ0FBbDRGLEVBQW82RixJQUFFLEtBQUcsRUFBRSxJQUFGLENBQU8sRUFBRSxRQUFULENBQUgsR0FBc0IsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBSSxJQUFFLE1BQUksRUFBRSxRQUFOLEdBQWUsRUFBRSxlQUFqQixHQUFpQyxDQUF2QztBQUFBLFlBQXlDLElBQUUsS0FBRyxFQUFFLFVBQWhELENBQTJELE9BQU8sTUFBSSxDQUFKLElBQU8sRUFBRSxDQUFDLENBQUQsSUFBSSxNQUFJLEVBQUUsUUFBVixJQUFvQixFQUFFLEVBQUUsUUFBRixHQUFXLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBWCxHQUF5QixFQUFFLHVCQUFGLElBQTJCLEtBQUcsRUFBRSx1QkFBRixDQUEwQixDQUExQixDQUF6RCxDQUF0QixDQUFkO0FBQTRILE9BQTNOLEdBQTROLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUcsQ0FBSCxFQUFLLE9BQU0sSUFBRSxFQUFFLFVBQVY7QUFBcUIsY0FBRyxNQUFJLENBQVAsRUFBUyxPQUFNLENBQUMsQ0FBUDtBQUE5QixTQUF1QyxPQUFNLENBQUMsQ0FBUDtBQUFTLE9BQXJzRyxFQUFzc0csSUFBRSxJQUFFLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUcsTUFBSSxDQUFQLEVBQVMsT0FBTyxJQUFFLENBQUMsQ0FBSCxFQUFLLENBQVosQ0FBYyxJQUFJLElBQUUsQ0FBQyxFQUFFLHVCQUFILEdBQTJCLENBQUMsRUFBRSx1QkFBcEMsQ0FBNEQsT0FBTyxNQUFJLEtBQUcsSUFBRSxDQUFDLEVBQUUsYUFBRixJQUFpQixDQUFsQixPQUF3QixFQUFFLGFBQUYsSUFBaUIsQ0FBekMsSUFBNEMsRUFBRSx1QkFBRixDQUEwQixDQUExQixDQUE1QyxHQUF5RSxDQUE5RSxLQUFrRixDQUFDLEVBQUUsWUFBSCxJQUFpQixFQUFFLHVCQUFGLENBQTBCLENBQTFCLE1BQStCLENBQWxJLEdBQW9JLE1BQUksQ0FBSixJQUFPLEVBQUUsYUFBRixLQUFrQixDQUFsQixJQUFxQixFQUFFLENBQUYsRUFBSSxDQUFKLENBQTVCLEdBQW1DLENBQUMsQ0FBcEMsR0FBc0MsTUFBSSxDQUFKLElBQU8sRUFBRSxhQUFGLEtBQWtCLENBQWxCLElBQXFCLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBNUIsR0FBbUMsQ0FBbkMsR0FBcUMsSUFBRSxFQUFFLENBQUYsRUFBSSxDQUFKLElBQU8sRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFULEdBQWdCLENBQS9OLEdBQWlPLElBQUUsQ0FBRixHQUFJLENBQUMsQ0FBTCxHQUFPLENBQTVPLENBQVA7QUFBc1AsT0FBelYsR0FBMFYsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBRyxNQUFJLENBQVAsRUFBUyxPQUFPLElBQUUsQ0FBQyxDQUFILEVBQUssQ0FBWixDQUFjLElBQUksQ0FBSjtBQUFBLFlBQU0sSUFBRSxDQUFSO0FBQUEsWUFBVSxJQUFFLEVBQUUsVUFBZDtBQUFBLFlBQXlCLElBQUUsRUFBRSxVQUE3QjtBQUFBLFlBQXdDLElBQUUsQ0FBQyxDQUFELENBQTFDO0FBQUEsWUFBOEMsSUFBRSxDQUFDLENBQUQsQ0FBaEQsQ0FBb0QsSUFBRyxDQUFDLENBQUQsSUFBSSxDQUFDLENBQVIsRUFBVSxPQUFPLE1BQUksQ0FBSixHQUFNLENBQUMsQ0FBUCxHQUFTLE1BQUksQ0FBSixHQUFNLENBQU4sR0FBUSxJQUFFLENBQUMsQ0FBSCxHQUFLLElBQUUsQ0FBRixHQUFJLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixJQUFPLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBVCxHQUFnQixDQUFqRCxDQUFtRCxJQUFHLE1BQUksQ0FBUCxFQUFTLE9BQU8sR0FBRyxDQUFILEVBQUssQ0FBTCxDQUFQLENBQWUsSUFBRSxDQUFGLENBQUksT0FBTSxJQUFFLEVBQUUsVUFBVjtBQUFxQixZQUFFLE9BQUYsQ0FBVSxDQUFWO0FBQXJCLFNBQWtDLElBQUUsQ0FBRixDQUFJLE9BQU0sSUFBRSxFQUFFLFVBQVY7QUFBcUIsWUFBRSxPQUFGLENBQVUsQ0FBVjtBQUFyQixTQUFrQyxPQUFNLEVBQUUsQ0FBRixNQUFPLEVBQUUsQ0FBRixDQUFiO0FBQWtCO0FBQWxCLFNBQXNCLE9BQU8sSUFBRSxHQUFHLEVBQUUsQ0FBRixDQUFILEVBQVEsRUFBRSxDQUFGLENBQVIsQ0FBRixHQUFnQixFQUFFLENBQUYsTUFBTyxDQUFQLEdBQVMsQ0FBQyxDQUFWLEdBQVksRUFBRSxDQUFGLE1BQU8sQ0FBUCxHQUFTLENBQVQsR0FBVyxDQUE5QztBQUFnRCxPQUFsMkgsRUFBbTJILENBQTc0SCxJQUFnNUgsQ0FBdjVIO0FBQXk1SCxLQUE1a0ksRUFBNmtJLEdBQUcsT0FBSCxHQUFXLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sR0FBRyxDQUFILEVBQUssSUFBTCxFQUFVLElBQVYsRUFBZSxDQUFmLENBQVA7QUFBeUIsS0FBL25JLEVBQWdvSSxHQUFHLGVBQUgsR0FBbUIsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBRyxDQUFDLEVBQUUsYUFBRixJQUFpQixDQUFsQixNQUF1QixDQUF2QixJQUEwQixFQUFFLENBQUYsQ0FBMUIsRUFBK0IsSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksUUFBWixDQUFqQyxFQUF1RCxFQUFFLGVBQUYsSUFBbUIsQ0FBbkIsSUFBc0IsQ0FBQyxFQUFFLElBQUUsR0FBSixDQUF2QixLQUFrQyxDQUFDLENBQUQsSUFBSSxDQUFDLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBdkMsTUFBb0QsQ0FBQyxDQUFELElBQUksQ0FBQyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQXpELENBQTFELEVBQThILElBQUc7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBTixDQUFrQixJQUFHLEtBQUcsRUFBRSxpQkFBTCxJQUF3QixFQUFFLFFBQUYsSUFBWSxPQUFLLEVBQUUsUUFBRixDQUFXLFFBQXZELEVBQWdFLE9BQU8sQ0FBUDtBQUFTLE9BQS9GLENBQStGLE9BQU0sQ0FBTixFQUFRLENBQUUsUUFBTyxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sSUFBUCxFQUFZLENBQUMsQ0FBRCxDQUFaLEVBQWlCLE1BQWpCLEdBQXdCLENBQS9CO0FBQWlDLEtBQXo2SSxFQUEwNkksR0FBRyxRQUFILEdBQVksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTSxDQUFDLEVBQUUsYUFBRixJQUFpQixDQUFsQixNQUF1QixDQUF2QixJQUEwQixFQUFFLENBQUYsQ0FBMUIsRUFBK0IsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFyQztBQUE0QyxLQUFoL0ksRUFBaS9JLEdBQUcsSUFBSCxHQUFRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE9BQUMsRUFBRSxhQUFGLElBQWlCLENBQWxCLE1BQXVCLENBQXZCLElBQTBCLEVBQUUsQ0FBRixDQUExQixDQUErQixJQUFJLElBQUUsRUFBRSxVQUFGLENBQWEsRUFBRSxXQUFGLEVBQWIsQ0FBTjtBQUFBLFVBQW9DLElBQUUsS0FBRyxFQUFFLElBQUYsQ0FBTyxFQUFFLFVBQVQsRUFBb0IsRUFBRSxXQUFGLEVBQXBCLENBQUgsR0FBd0MsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQUMsQ0FBUCxDQUF4QyxHQUFrRCxLQUFLLENBQTdGLENBQStGLE9BQU8sS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLENBQVgsR0FBYSxFQUFFLFVBQUYsSUFBYyxDQUFDLENBQWYsR0FBaUIsRUFBRSxZQUFGLENBQWUsQ0FBZixDQUFqQixHQUFtQyxDQUFDLElBQUUsRUFBRSxnQkFBRixDQUFtQixDQUFuQixDQUFILEtBQTJCLEVBQUUsU0FBN0IsR0FBdUMsRUFBRSxLQUF6QyxHQUErQyxJQUF0RztBQUEyRyxLQUFodkosRUFBaXZKLEdBQUcsTUFBSCxHQUFVLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTSxDQUFDLElBQUUsRUFBSCxFQUFPLE9BQVAsQ0FBZSxFQUFmLEVBQWtCLEVBQWxCLENBQU47QUFBNEIsS0FBbnlKLEVBQW95SixHQUFHLEtBQUgsR0FBUyxVQUFTLENBQVQsRUFBVztBQUFDLFlBQU0sSUFBSSxLQUFKLENBQVUsNENBQTBDLENBQXBELENBQU47QUFBNkQsS0FBdDNKLEVBQXUzSixHQUFHLFVBQUgsR0FBYyxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sSUFBRSxFQUFSO0FBQUEsVUFBVyxJQUFFLENBQWI7QUFBQSxVQUFlLElBQUUsQ0FBakIsQ0FBbUIsSUFBRyxJQUFFLENBQUMsRUFBRSxnQkFBTCxFQUFzQixJQUFFLENBQUMsRUFBRSxVQUFILElBQWUsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUF2QyxFQUFrRCxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQWxELEVBQTRELENBQS9ELEVBQWlFO0FBQUMsZUFBTSxJQUFFLEVBQUUsR0FBRixDQUFSO0FBQWUsZ0JBQUksRUFBRSxDQUFGLENBQUosS0FBVyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBYjtBQUFmLFNBQXVDLE9BQU0sR0FBTjtBQUFVLFlBQUUsTUFBRixDQUFTLEVBQUUsQ0FBRixDQUFULEVBQWMsQ0FBZDtBQUFWO0FBQTJCLGNBQU8sSUFBRSxJQUFGLEVBQU8sQ0FBZDtBQUFnQixLQUF4akssRUFBeWpLLElBQUUsR0FBRyxPQUFILEdBQVcsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLElBQUUsRUFBUjtBQUFBLFVBQVcsSUFBRSxDQUFiO0FBQUEsVUFBZSxJQUFFLEVBQUUsUUFBbkIsQ0FBNEIsSUFBRyxDQUFILEVBQUs7QUFBQyxZQUFHLE1BQUksQ0FBSixJQUFPLE1BQUksQ0FBWCxJQUFjLE9BQUssQ0FBdEIsRUFBd0I7QUFBQyxjQUFHLFlBQVUsT0FBTyxFQUFFLFdBQXRCLEVBQWtDLE9BQU8sRUFBRSxXQUFULENBQXFCLEtBQUksSUFBRSxFQUFFLFVBQVIsRUFBbUIsQ0FBbkIsRUFBcUIsSUFBRSxFQUFFLFdBQXpCO0FBQXFDLGlCQUFHLEVBQUUsQ0FBRixDQUFIO0FBQXJDO0FBQTZDLFNBQTdILE1BQWtJLElBQUcsTUFBSSxDQUFKLElBQU8sTUFBSSxDQUFkLEVBQWdCLE9BQU8sRUFBRSxTQUFUO0FBQW1CLE9BQTNLLE1BQWdMLE9BQU0sSUFBRSxFQUFFLEdBQUYsQ0FBUjtBQUFlLGFBQUcsRUFBRSxDQUFGLENBQUg7QUFBZixPQUF1QixPQUFPLENBQVA7QUFBUyxLQUE5ekssRUFBK3pLLENBQUMsSUFBRSxHQUFHLFNBQUgsR0FBYSxFQUFDLGFBQVksRUFBYixFQUFnQixjQUFhLEVBQTdCLEVBQWdDLE9BQU0sQ0FBdEMsRUFBd0MsWUFBVyxFQUFuRCxFQUFzRCxNQUFLLEVBQTNELEVBQThELFVBQVMsRUFBQyxLQUFJLEVBQUMsS0FBSSxZQUFMLEVBQWtCLE9BQU0sQ0FBQyxDQUF6QixFQUFMLEVBQWlDLEtBQUksRUFBQyxLQUFJLFlBQUwsRUFBckMsRUFBd0QsS0FBSSxFQUFDLEtBQUksaUJBQUwsRUFBdUIsT0FBTSxDQUFDLENBQTlCLEVBQTVELEVBQTZGLEtBQUksRUFBQyxLQUFJLGlCQUFMLEVBQWpHLEVBQXZFLEVBQWlNLFdBQVUsRUFBQyxNQUFLLGNBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEVBQUssT0FBTCxDQUFhLENBQWIsRUFBZSxFQUFmLENBQUwsRUFBd0IsRUFBRSxDQUFGLElBQUssQ0FBQyxFQUFFLENBQUYsS0FBTSxFQUFFLENBQUYsQ0FBTixJQUFZLEVBQUUsQ0FBRixDQUFaLElBQWtCLEVBQW5CLEVBQXVCLE9BQXZCLENBQStCLENBQS9CLEVBQWlDLEVBQWpDLENBQTdCLEVBQWtFLFNBQU8sRUFBRSxDQUFGLENBQVAsS0FBYyxFQUFFLENBQUYsSUFBSyxNQUFJLEVBQUUsQ0FBRixDQUFKLEdBQVMsR0FBNUIsQ0FBbEUsRUFBbUcsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBMUc7QUFBdUgsU0FBekksRUFBMEksT0FBTSxlQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixFQUFLLFdBQUwsRUFBTCxFQUF3QixVQUFRLEVBQUUsQ0FBRixFQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWEsQ0FBYixDQUFSLElBQXlCLEVBQUUsQ0FBRixLQUFNLEdBQUcsS0FBSCxDQUFTLEVBQUUsQ0FBRixDQUFULENBQU4sRUFBcUIsRUFBRSxDQUFGLElBQUssRUFBRSxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsS0FBTSxFQUFFLENBQUYsS0FBTSxDQUFaLENBQUwsR0FBb0IsS0FBRyxXQUFTLEVBQUUsQ0FBRixDQUFULElBQWUsVUFBUSxFQUFFLENBQUYsQ0FBMUIsQ0FBdEIsQ0FBMUIsRUFBaUYsRUFBRSxDQUFGLElBQUssRUFBRSxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsQ0FBTCxJQUFXLFVBQVEsRUFBRSxDQUFGLENBQXJCLENBQS9HLElBQTJJLEVBQUUsQ0FBRixLQUFNLEdBQUcsS0FBSCxDQUFTLEVBQUUsQ0FBRixDQUFULENBQXpLLEVBQXdMLENBQS9MO0FBQWlNLFNBQTdWLEVBQThWLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKO0FBQUEsY0FBTSxJQUFFLENBQUMsRUFBRSxDQUFGLENBQUQsSUFBTyxFQUFFLENBQUYsQ0FBZixDQUFvQixPQUFPLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxFQUFFLENBQUYsQ0FBYixJQUFtQixJQUFuQixJQUF5QixFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsS0FBTSxFQUFFLENBQUYsQ0FBTixJQUFZLEVBQXRCLEdBQXlCLEtBQUcsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFILEtBQWUsSUFBRSxFQUFFLENBQUYsRUFBSSxDQUFDLENBQUwsQ0FBakIsTUFBNEIsSUFBRSxFQUFFLE9BQUYsQ0FBVSxHQUFWLEVBQWMsRUFBRSxNQUFGLEdBQVMsQ0FBdkIsSUFBMEIsRUFBRSxNQUExRCxNQUFvRSxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsRUFBSyxLQUFMLENBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBTCxFQUFxQixFQUFFLENBQUYsSUFBSyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUE5RixDQUF6QixFQUFxSSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUE5SixDQUFQO0FBQW1MLFNBQXhqQixFQUEzTSxFQUFxd0IsUUFBTyxFQUFDLEtBQUksYUFBUyxDQUFULEVBQVc7QUFBQyxjQUFJLElBQUUsRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLEVBQVosRUFBZ0IsV0FBaEIsRUFBTixDQUFvQyxPQUFNLFFBQU0sQ0FBTixHQUFRLFlBQVU7QUFBQyxtQkFBTSxDQUFDLENBQVA7QUFBUyxXQUE1QixHQUE2QixVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFPLEVBQUUsUUFBRixJQUFZLEVBQUUsUUFBRixDQUFXLFdBQVgsT0FBMkIsQ0FBOUM7QUFBZ0QsV0FBL0Y7QUFBZ0csU0FBckosRUFBc0osT0FBTSxlQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxFQUFFLElBQUUsR0FBSixDQUFOLENBQWUsT0FBTyxLQUFHLENBQUMsSUFBRSxJQUFJLE1BQUosQ0FBVyxRQUFNLENBQU4sR0FBUSxHQUFSLEdBQVksQ0FBWixHQUFjLEdBQWQsR0FBa0IsQ0FBbEIsR0FBb0IsS0FBL0IsQ0FBSCxLQUEyQyxFQUFFLENBQUYsRUFBSSxVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFPLEVBQUUsSUFBRixDQUFPLFlBQVUsT0FBTyxFQUFFLFNBQW5CLElBQThCLEVBQUUsU0FBaEMsSUFBMkMsZUFBYSxPQUFPLEVBQUUsWUFBdEIsSUFBb0MsRUFBRSxZQUFGLENBQWUsT0FBZixDQUEvRSxJQUF3RyxFQUEvRyxDQUFQO0FBQTBILFdBQTFJLENBQXJEO0FBQWlNLFNBQXhYLEVBQXlYLE1BQUssY0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGlCQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsZ0JBQUksSUFBRSxHQUFHLElBQUgsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFOLENBQW1CLE9BQU8sUUFBTSxDQUFOLEdBQVEsU0FBTyxDQUFmLEdBQWlCLENBQUMsQ0FBRCxLQUFLLEtBQUcsRUFBSCxFQUFNLFFBQU0sQ0FBTixHQUFRLE1BQUksQ0FBWixHQUFjLFNBQU8sQ0FBUCxHQUFTLE1BQUksQ0FBYixHQUFlLFNBQU8sQ0FBUCxHQUFTLEtBQUcsTUFBSSxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQWhCLEdBQTZCLFNBQU8sQ0FBUCxHQUFTLEtBQUcsRUFBRSxPQUFGLENBQVUsQ0FBVixJQUFhLENBQUMsQ0FBMUIsR0FBNEIsU0FBTyxDQUFQLEdBQVMsS0FBRyxFQUFFLEtBQUYsQ0FBUSxDQUFDLEVBQUUsTUFBWCxNQUFxQixDQUFqQyxHQUFtQyxTQUFPLENBQVAsR0FBUyxDQUFDLE1BQUksRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLEdBQVosQ0FBSixHQUFxQixHQUF0QixFQUEyQixPQUEzQixDQUFtQyxDQUFuQyxJQUFzQyxDQUFDLENBQWhELEdBQWtELFNBQU8sQ0FBUCxLQUFXLE1BQUksQ0FBSixJQUFPLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxFQUFFLE1BQUYsR0FBUyxDQUFuQixNQUF3QixJQUFFLEdBQTVDLENBQXRMLENBQXhCO0FBQWdRLFdBQXRTO0FBQXVTLFNBQXJyQixFQUFzckIsT0FBTSxlQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUI7QUFBQyxjQUFJLElBQUUsVUFBUSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFkO0FBQUEsY0FBMkIsSUFBRSxXQUFTLEVBQUUsS0FBRixDQUFRLENBQUMsQ0FBVCxDQUF0QztBQUFBLGNBQWtELElBQUUsY0FBWSxDQUFoRSxDQUFrRSxPQUFPLE1BQUksQ0FBSixJQUFPLE1BQUksQ0FBWCxHQUFhLFVBQVMsQ0FBVCxFQUFXO0FBQUMsbUJBQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVjtBQUFxQixXQUE5QyxHQUErQyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsZ0JBQUksQ0FBSjtBQUFBLGdCQUFNLENBQU47QUFBQSxnQkFBUSxDQUFSO0FBQUEsZ0JBQVUsQ0FBVjtBQUFBLGdCQUFZLENBQVo7QUFBQSxnQkFBYyxDQUFkO0FBQUEsZ0JBQWdCLElBQUUsTUFBSSxDQUFKLEdBQU0sYUFBTixHQUFvQixpQkFBdEM7QUFBQSxnQkFBd0QsSUFBRSxFQUFFLFVBQTVEO0FBQUEsZ0JBQXVFLElBQUUsS0FBRyxFQUFFLFFBQUYsQ0FBVyxXQUFYLEVBQTVFO0FBQUEsZ0JBQXFHLElBQUUsQ0FBQyxDQUFELElBQUksQ0FBQyxDQUE1RztBQUFBLGdCQUE4RyxJQUFFLENBQUMsQ0FBakgsQ0FBbUgsSUFBRyxDQUFILEVBQUs7QUFBQyxrQkFBRyxDQUFILEVBQUs7QUFBQyx1QkFBTSxDQUFOLEVBQVE7QUFBQyxzQkFBRSxDQUFGLENBQUksT0FBTSxJQUFFLEVBQUUsQ0FBRixDQUFSO0FBQWEsd0JBQUcsSUFBRSxFQUFFLFFBQUYsQ0FBVyxXQUFYLE9BQTJCLENBQTdCLEdBQStCLE1BQUksRUFBRSxRQUF4QyxFQUFpRCxPQUFNLENBQUMsQ0FBUDtBQUE5RCxtQkFBdUUsSUFBRSxJQUFFLFdBQVMsQ0FBVCxJQUFZLENBQUMsQ0FBYixJQUFnQixhQUFwQjtBQUFrQyx3QkFBTSxDQUFDLENBQVA7QUFBUyxtQkFBRyxJQUFFLENBQUMsSUFBRSxFQUFFLFVBQUosR0FBZSxFQUFFLFNBQWxCLENBQUYsRUFBK0IsS0FBRyxDQUFyQyxFQUF1QztBQUFDLG9CQUFFLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFFLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBSCxFQUFNLENBQU4sTUFBVyxFQUFFLENBQUYsSUFBSyxFQUFoQixDQUFILEVBQXdCLEVBQUUsUUFBMUIsTUFBc0MsRUFBRSxFQUFFLFFBQUosSUFBYyxFQUFwRCxDQUFILEVBQTRELENBQTVELEtBQWdFLEVBQW5FLEVBQXVFLENBQXZFLE1BQTRFLENBQTVFLElBQStFLEVBQUUsQ0FBRixDQUFsRixLQUF5RixFQUFFLENBQUYsQ0FBM0YsRUFBZ0csSUFBRSxLQUFHLEVBQUUsVUFBRixDQUFhLENBQWIsQ0FBckcsQ0FBcUgsT0FBTSxJQUFFLEVBQUUsQ0FBRixJQUFLLENBQUwsSUFBUSxFQUFFLENBQUYsQ0FBUixLQUFlLElBQUUsSUFBRSxDQUFuQixLQUF1QixFQUFFLEdBQUYsRUFBL0I7QUFBdUMsc0JBQUcsTUFBSSxFQUFFLFFBQU4sSUFBZ0IsRUFBRSxDQUFsQixJQUFxQixNQUFJLENBQTVCLEVBQThCO0FBQUMsc0JBQUUsQ0FBRixJQUFLLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQUwsQ0FBYTtBQUFNO0FBQXpGO0FBQTBGLGVBQXZQLE1BQTRQLElBQUcsTUFBSSxJQUFFLElBQUUsQ0FBQyxJQUFFLENBQUMsSUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxDQUFOLE1BQVcsRUFBRSxDQUFGLElBQUssRUFBaEIsQ0FBSCxFQUF3QixFQUFFLFFBQTFCLE1BQXNDLEVBQUUsRUFBRSxRQUFKLElBQWMsRUFBcEQsQ0FBSCxFQUE0RCxDQUE1RCxLQUFnRSxFQUFuRSxFQUF1RSxDQUF2RSxNQUE0RSxDQUE1RSxJQUErRSxFQUFFLENBQUYsQ0FBdkYsR0FBNkYsQ0FBQyxDQUFELEtBQUssQ0FBckcsRUFBdUcsT0FBTSxJQUFFLEVBQUUsQ0FBRixJQUFLLENBQUwsSUFBUSxFQUFFLENBQUYsQ0FBUixLQUFlLElBQUUsSUFBRSxDQUFuQixLQUF1QixFQUFFLEdBQUYsRUFBL0I7QUFBdUMsb0JBQUcsQ0FBQyxJQUFFLEVBQUUsUUFBRixDQUFXLFdBQVgsT0FBMkIsQ0FBN0IsR0FBK0IsTUFBSSxFQUFFLFFBQXRDLEtBQWlELEVBQUUsQ0FBbkQsS0FBdUQsTUFBSSxDQUFDLElBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBRixNQUFPLEVBQUUsQ0FBRixJQUFLLEVBQVosQ0FBSCxFQUFvQixFQUFFLFFBQXRCLE1BQWtDLEVBQUUsRUFBRSxRQUFKLElBQWMsRUFBaEQsQ0FBSCxFQUF3RCxDQUF4RCxJQUEyRCxDQUFDLENBQUQsRUFBRyxDQUFILENBQS9ELEdBQXNFLE1BQUksQ0FBakksQ0FBSCxFQUF1STtBQUE5SyxlQUFvTCxPQUFNLENBQUMsS0FBRyxDQUFKLE1BQVMsQ0FBVCxJQUFZLElBQUUsQ0FBRixJQUFLLENBQUwsSUFBUSxJQUFFLENBQUYsSUFBSyxDQUEvQjtBQUFpQztBQUFDLFdBQTczQjtBQUE4M0IsU0FBaHBELEVBQWlwRCxRQUFPLGdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFJLENBQUo7QUFBQSxjQUFNLElBQUUsRUFBRSxPQUFGLENBQVUsQ0FBVixLQUFjLEVBQUUsVUFBRixDQUFhLEVBQUUsV0FBRixFQUFiLENBQWQsSUFBNkMsR0FBRyxLQUFILENBQVMseUJBQXVCLENBQWhDLENBQXJELENBQXdGLE9BQU8sRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLENBQUwsR0FBVSxFQUFFLE1BQUYsR0FBUyxDQUFULElBQVksSUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssRUFBTCxFQUFRLENBQVIsQ0FBRixFQUFhLEVBQUUsVUFBRixDQUFhLGNBQWIsQ0FBNEIsRUFBRSxXQUFGLEVBQTVCLElBQTZDLEdBQUcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsZ0JBQUksQ0FBSjtBQUFBLGdCQUFNLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFSO0FBQUEsZ0JBQWUsSUFBRSxFQUFFLE1BQW5CLENBQTBCLE9BQU0sR0FBTjtBQUFVLGdCQUFFLElBQUUsRUFBRSxDQUFGLEVBQUksRUFBRSxDQUFGLENBQUosQ0FBSixJQUFlLEVBQUUsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLENBQVAsQ0FBZjtBQUFWO0FBQXNDLFdBQWpGLENBQTdDLEdBQWdJLFVBQVMsQ0FBVCxFQUFXO0FBQUMsbUJBQU8sRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBUDtBQUFnQixXQUFyTCxJQUF1TCxDQUF4TTtBQUEwTSxTQUF4OEQsRUFBNXdCLEVBQXN0RixTQUFRLEVBQUMsS0FBSSxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxJQUFFLEVBQU47QUFBQSxjQUFTLElBQUUsRUFBWDtBQUFBLGNBQWMsSUFBRSxFQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsRUFBWSxJQUFaLENBQUYsQ0FBaEIsQ0FBcUMsT0FBTyxFQUFFLENBQUYsSUFBSyxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLGdCQUFJLENBQUo7QUFBQSxnQkFBTSxJQUFFLEVBQUUsQ0FBRixFQUFJLElBQUosRUFBUyxDQUFULEVBQVcsRUFBWCxDQUFSO0FBQUEsZ0JBQXVCLElBQUUsRUFBRSxNQUEzQixDQUFrQyxPQUFNLEdBQU47QUFBVSxlQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsTUFBVyxFQUFFLENBQUYsSUFBSyxFQUFFLEVBQUUsQ0FBRixJQUFLLENBQVAsQ0FBaEI7QUFBVjtBQUFxQyxXQUE1RixDQUFMLEdBQW1HLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxtQkFBTyxFQUFFLENBQUYsSUFBSyxDQUFMLEVBQU8sRUFBRSxDQUFGLEVBQUksSUFBSixFQUFTLENBQVQsRUFBVyxDQUFYLENBQVAsRUFBcUIsRUFBRSxDQUFGLElBQUssSUFBMUIsRUFBK0IsQ0FBQyxFQUFFLEdBQUYsRUFBdkM7QUFBK0MsV0FBeks7QUFBMEssU0FBOU4sQ0FBTCxFQUFxTyxLQUFJLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFPLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBUSxNQUFSLEdBQWUsQ0FBdEI7QUFBd0IsV0FBM0M7QUFBNEMsU0FBM0QsQ0FBek8sRUFBc1MsVUFBUyxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksRUFBWixDQUFGLEVBQWtCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsbUJBQU0sQ0FBQyxFQUFFLFdBQUYsSUFBZSxFQUFFLFNBQWpCLElBQTRCLEVBQUUsQ0FBRixDQUE3QixFQUFtQyxPQUFuQyxDQUEyQyxDQUEzQyxJQUE4QyxDQUFDLENBQXJEO0FBQXVELFdBQTVGO0FBQTZGLFNBQTVHLENBQS9TLEVBQTZaLE1BQUssR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLEVBQUUsSUFBRixDQUFPLEtBQUcsRUFBVixLQUFlLEdBQUcsS0FBSCxDQUFTLHVCQUFxQixDQUE5QixDQUFmLEVBQWdELElBQUUsRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLEVBQVosRUFBZ0IsV0FBaEIsRUFBbEQsRUFBZ0YsVUFBUyxDQUFULEVBQVc7QUFBQyxnQkFBSSxDQUFKLENBQU0sR0FBRTtBQUFDLGtCQUFHLElBQUUsSUFBRSxFQUFFLElBQUosR0FBUyxFQUFFLFlBQUYsQ0FBZSxVQUFmLEtBQTRCLEVBQUUsWUFBRixDQUFlLE1BQWYsQ0FBMUMsRUFBaUUsT0FBTSxDQUFDLElBQUUsRUFBRSxXQUFGLEVBQUgsTUFBc0IsQ0FBdEIsSUFBeUIsTUFBSSxFQUFFLE9BQUYsQ0FBVSxJQUFFLEdBQVosQ0FBbkM7QUFBb0QsYUFBeEgsUUFBOEgsQ0FBQyxJQUFFLEVBQUUsVUFBTCxLQUFrQixNQUFJLEVBQUUsUUFBdEosRUFBZ0ssT0FBTSxDQUFDLENBQVA7QUFBUyxXQUFsUjtBQUFtUixTQUFsUyxDQUFsYSxFQUFzc0IsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxjQUFJLElBQUUsRUFBRSxRQUFGLElBQVksRUFBRSxRQUFGLENBQVcsSUFBN0IsQ0FBa0MsT0FBTyxLQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsTUFBYSxFQUFFLEVBQXpCO0FBQTRCLFNBQXZ4QixFQUF3eEIsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLE1BQUksQ0FBWDtBQUFhLFNBQXR6QixFQUF1ekIsT0FBTSxlQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLE1BQUksRUFBRSxhQUFOLEtBQXNCLENBQUMsRUFBRSxRQUFILElBQWEsRUFBRSxRQUFGLEVBQW5DLEtBQWtELENBQUMsRUFBRSxFQUFFLElBQUYsSUFBUSxFQUFFLElBQVYsSUFBZ0IsQ0FBQyxFQUFFLFFBQXJCLENBQTFEO0FBQXlGLFNBQWw2QixFQUFtNkIsU0FBUSxHQUFHLENBQUMsQ0FBSixDQUEzNkIsRUFBazdCLFVBQVMsR0FBRyxDQUFDLENBQUosQ0FBMzdCLEVBQWs4QixTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxFQUFFLFFBQUYsQ0FBVyxXQUFYLEVBQU4sQ0FBK0IsT0FBTSxZQUFVLENBQVYsSUFBYSxDQUFDLENBQUMsRUFBRSxPQUFqQixJQUEwQixhQUFXLENBQVgsSUFBYyxDQUFDLENBQUMsRUFBRSxRQUFsRDtBQUEyRCxTQUFoakMsRUFBaWpDLFVBQVMsa0JBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sRUFBRSxVQUFGLElBQWMsRUFBRSxVQUFGLENBQWEsYUFBM0IsRUFBeUMsQ0FBQyxDQUFELEtBQUssRUFBRSxRQUF2RDtBQUFnRSxTQUF0b0MsRUFBdW9DLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxlQUFJLElBQUUsRUFBRSxVQUFSLEVBQW1CLENBQW5CLEVBQXFCLElBQUUsRUFBRSxXQUF6QjtBQUFxQyxnQkFBRyxFQUFFLFFBQUYsR0FBVyxDQUFkLEVBQWdCLE9BQU0sQ0FBQyxDQUFQO0FBQXJELFdBQThELE9BQU0sQ0FBQyxDQUFQO0FBQVMsU0FBaHVDLEVBQWl1QyxRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGlCQUFNLENBQUMsRUFBRSxPQUFGLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFQO0FBQTBCLFNBQTl3QyxFQUErd0MsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLElBQUYsQ0FBTyxFQUFFLFFBQVQsQ0FBUDtBQUEwQixTQUE1ekMsRUFBNnpDLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxFQUFFLElBQUYsQ0FBTyxFQUFFLFFBQVQsQ0FBUDtBQUEwQixTQUF6MkMsRUFBMDJDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxJQUFFLEVBQUUsUUFBRixDQUFXLFdBQVgsRUFBTixDQUErQixPQUFNLFlBQVUsQ0FBVixJQUFhLGFBQVcsRUFBRSxJQUExQixJQUFnQyxhQUFXLENBQWpEO0FBQW1ELFNBQS84QyxFQUFnOUMsTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLGNBQUksQ0FBSixDQUFNLE9BQU0sWUFBVSxFQUFFLFFBQUYsQ0FBVyxXQUFYLEVBQVYsSUFBb0MsV0FBUyxFQUFFLElBQS9DLEtBQXNELFNBQU8sSUFBRSxFQUFFLFlBQUYsQ0FBZSxNQUFmLENBQVQsS0FBa0MsV0FBUyxFQUFFLFdBQUYsRUFBakcsQ0FBTjtBQUF3SCxTQUEvbEQsRUFBZ21ELE9BQU0sR0FBRyxZQUFVO0FBQUMsaUJBQU0sQ0FBQyxDQUFELENBQU47QUFBVSxTQUF4QixDQUF0bUQsRUFBZ29ELE1BQUssR0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxpQkFBTSxDQUFDLElBQUUsQ0FBSCxDQUFOO0FBQVksU0FBN0IsQ0FBcm9ELEVBQW9xRCxJQUFHLEdBQUcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGlCQUFNLENBQUMsSUFBRSxDQUFGLEdBQUksSUFBRSxDQUFOLEdBQVEsQ0FBVCxDQUFOO0FBQWtCLFNBQXJDLENBQXZxRCxFQUE4c0QsTUFBSyxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGVBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLENBQWQsRUFBZ0IsS0FBRyxDQUFuQjtBQUFxQixjQUFFLElBQUYsQ0FBTyxDQUFQO0FBQXJCLFdBQStCLE9BQU8sQ0FBUDtBQUFTLFNBQXpELENBQW50RCxFQUE4d0QsS0FBSSxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGVBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLENBQWQsRUFBZ0IsS0FBRyxDQUFuQjtBQUFxQixjQUFFLElBQUYsQ0FBTyxDQUFQO0FBQXJCLFdBQStCLE9BQU8sQ0FBUDtBQUFTLFNBQXpELENBQWx4RCxFQUE2MEQsSUFBRyxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxlQUFJLElBQUksSUFBRSxJQUFFLENBQUYsR0FBSSxJQUFFLENBQU4sR0FBUSxDQUFsQixFQUFvQixFQUFFLENBQUYsSUFBSyxDQUF6QjtBQUE0QixjQUFFLElBQUYsQ0FBTyxDQUFQO0FBQTVCLFdBQXNDLE9BQU8sQ0FBUDtBQUFTLFNBQWxFLENBQWgxRCxFQUFvNUQsSUFBRyxHQUFHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxlQUFJLElBQUksSUFBRSxJQUFFLENBQUYsR0FBSSxJQUFFLENBQU4sR0FBUSxDQUFsQixFQUFvQixFQUFFLENBQUYsR0FBSSxDQUF4QjtBQUEyQixjQUFFLElBQUYsQ0FBTyxDQUFQO0FBQTNCLFdBQXFDLE9BQU8sQ0FBUDtBQUFTLFNBQWpFLENBQXY1RCxFQUE5dEYsRUFBaEIsRUFBMnNKLE9BQTNzSixDQUFtdEosR0FBbnRKLEdBQXV0SixFQUFFLE9BQUYsQ0FBVSxFQUFoaVUsQ0FBbWlVLEtBQUksQ0FBSixJQUFRLEVBQUMsT0FBTSxDQUFDLENBQVIsRUFBVSxVQUFTLENBQUMsQ0FBcEIsRUFBc0IsTUFBSyxDQUFDLENBQTVCLEVBQThCLFVBQVMsQ0FBQyxDQUF4QyxFQUEwQyxPQUFNLENBQUMsQ0FBakQsRUFBUjtBQUE0RCxRQUFFLE9BQUYsQ0FBVSxDQUFWLElBQWEsR0FBRyxDQUFILENBQWI7QUFBNUQsS0FBK0UsS0FBSSxDQUFKLElBQVEsRUFBQyxRQUFPLENBQUMsQ0FBVCxFQUFXLE9BQU0sQ0FBQyxDQUFsQixFQUFSO0FBQTZCLFFBQUUsT0FBRixDQUFVLENBQVYsSUFBYSxHQUFHLENBQUgsQ0FBYjtBQUE3QixLQUFnRCxTQUFTLEVBQVQsR0FBYSxDQUFFLElBQUcsU0FBSCxHQUFhLEVBQUUsT0FBRixHQUFVLEVBQUUsT0FBekIsRUFBaUMsRUFBRSxVQUFGLEdBQWEsSUFBSSxFQUFKLEVBQTlDLEVBQXFELElBQUUsR0FBRyxRQUFILEdBQVksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxDQUFKO0FBQUEsVUFBTSxDQUFOO0FBQUEsVUFBUSxDQUFSO0FBQUEsVUFBVSxDQUFWO0FBQUEsVUFBWSxDQUFaO0FBQUEsVUFBYyxDQUFkO0FBQUEsVUFBZ0IsQ0FBaEI7QUFBQSxVQUFrQixJQUFFLEVBQUUsSUFBRSxHQUFKLENBQXBCLENBQTZCLElBQUcsQ0FBSCxFQUFLLE9BQU8sSUFBRSxDQUFGLEdBQUksRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFYLENBQXNCLElBQUUsQ0FBRixFQUFJLElBQUUsRUFBTixFQUFTLElBQUUsRUFBRSxTQUFiLENBQXVCLE9BQU0sQ0FBTixFQUFRO0FBQUMsYUFBRyxFQUFFLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFKLENBQUgsS0FBb0IsTUFBSSxJQUFFLEVBQUUsS0FBRixDQUFRLEVBQUUsQ0FBRixFQUFLLE1BQWIsS0FBc0IsQ0FBNUIsR0FBK0IsRUFBRSxJQUFGLENBQU8sSUFBRSxFQUFULENBQW5ELEdBQWlFLElBQUUsQ0FBQyxDQUFwRSxFQUFzRSxDQUFDLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFILE1BQWdCLElBQUUsRUFBRSxLQUFGLEVBQUYsRUFBWSxFQUFFLElBQUYsQ0FBTyxFQUFDLE9BQU0sQ0FBUCxFQUFTLE1BQUssRUFBRSxDQUFGLEVBQUssT0FBTCxDQUFhLENBQWIsRUFBZSxHQUFmLENBQWQsRUFBUCxDQUFaLEVBQXVELElBQUUsRUFBRSxLQUFGLENBQVEsRUFBRSxNQUFWLENBQXpFLENBQXRFLENBQWtLLEtBQUksQ0FBSixJQUFTLEVBQUUsTUFBWDtBQUFrQixZQUFFLElBQUUsRUFBRSxDQUFGLEVBQUssSUFBTCxDQUFVLENBQVYsQ0FBSixLQUFtQixFQUFFLENBQUYsS0FBTSxFQUFFLElBQUUsRUFBRSxDQUFGLEVBQUssQ0FBTCxDQUFKLENBQXpCLEtBQXdDLElBQUUsRUFBRSxLQUFGLEVBQUYsRUFBWSxFQUFFLElBQUYsQ0FBTyxFQUFDLE9BQU0sQ0FBUCxFQUFTLE1BQUssQ0FBZCxFQUFnQixTQUFRLENBQXhCLEVBQVAsQ0FBWixFQUErQyxJQUFFLEVBQUUsS0FBRixDQUFRLEVBQUUsTUFBVixDQUF6RjtBQUFsQixTQUE4SCxJQUFHLENBQUMsQ0FBSixFQUFNO0FBQU0sY0FBTyxJQUFFLEVBQUUsTUFBSixHQUFXLElBQUUsR0FBRyxLQUFILENBQVMsQ0FBVCxDQUFGLEdBQWMsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWhDO0FBQWdELEtBQXJnQixDQUFzZ0IsU0FBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBSSxJQUFJLElBQUUsQ0FBTixFQUFRLElBQUUsRUFBRSxNQUFaLEVBQW1CLElBQUUsRUFBekIsRUFBNEIsSUFBRSxDQUE5QixFQUFnQyxHQUFoQztBQUFvQyxhQUFHLEVBQUUsQ0FBRixFQUFLLEtBQVI7QUFBcEMsT0FBa0QsT0FBTyxDQUFQO0FBQVMsY0FBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxVQUFJLElBQUUsRUFBRSxHQUFSO0FBQUEsVUFBWSxJQUFFLEVBQUUsSUFBaEI7QUFBQSxVQUFxQixJQUFFLEtBQUcsQ0FBMUI7QUFBQSxVQUE0QixJQUFFLEtBQUcsaUJBQWUsQ0FBaEQ7QUFBQSxVQUFrRCxJQUFFLEdBQXBELENBQXdELE9BQU8sRUFBRSxLQUFGLEdBQVEsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGVBQU0sSUFBRSxFQUFFLENBQUYsQ0FBUjtBQUFhLGNBQUcsTUFBSSxFQUFFLFFBQU4sSUFBZ0IsQ0FBbkIsRUFBcUIsT0FBTyxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFQO0FBQWxDLFNBQWtELE9BQU0sQ0FBQyxDQUFQO0FBQVMsT0FBbkYsR0FBb0YsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUksQ0FBSjtBQUFBLFlBQU0sQ0FBTjtBQUFBLFlBQVEsQ0FBUjtBQUFBLFlBQVUsSUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILENBQVosQ0FBa0IsSUFBRyxDQUFILEVBQUs7QUFBQyxpQkFBTSxJQUFFLEVBQUUsQ0FBRixDQUFSO0FBQWEsZ0JBQUcsQ0FBQyxNQUFJLEVBQUUsUUFBTixJQUFnQixDQUFqQixLQUFxQixFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixDQUF4QixFQUFpQyxPQUFNLENBQUMsQ0FBUDtBQUE5QztBQUF1RCxTQUE3RCxNQUFrRSxPQUFNLElBQUUsRUFBRSxDQUFGLENBQVI7QUFBYSxjQUFHLE1BQUksRUFBRSxRQUFOLElBQWdCLENBQW5CLEVBQXFCLElBQUcsSUFBRSxFQUFFLENBQUYsTUFBTyxFQUFFLENBQUYsSUFBSyxFQUFaLENBQUYsRUFBa0IsSUFBRSxFQUFFLEVBQUUsUUFBSixNQUFnQixFQUFFLEVBQUUsUUFBSixJQUFjLEVBQTlCLENBQXBCLEVBQXNELEtBQUcsTUFBSSxFQUFFLFFBQUYsQ0FBVyxXQUFYLEVBQWhFLEVBQXlGLElBQUUsRUFBRSxDQUFGLEtBQU0sQ0FBUixDQUF6RixLQUF1RztBQUFDLGdCQUFHLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBSCxLQUFVLEVBQUUsQ0FBRixNQUFPLENBQWpCLElBQW9CLEVBQUUsQ0FBRixNQUFPLENBQTlCLEVBQWdDLE9BQU8sRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLENBQVosQ0FBaUIsSUFBRyxFQUFFLENBQUYsSUFBSyxDQUFMLEVBQU8sRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBZixFQUF3QixPQUFNLENBQUMsQ0FBUDtBQUFTO0FBQTVOLFNBQTROLE9BQU0sQ0FBQyxDQUFQO0FBQVMsT0FBcGE7QUFBcWEsY0FBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsYUFBTyxFQUFFLE1BQUYsR0FBUyxDQUFULEdBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUksSUFBRSxFQUFFLE1BQVIsQ0FBZSxPQUFNLEdBQU47QUFBVSxjQUFHLENBQUMsRUFBRSxDQUFGLEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQUosRUFBZ0IsT0FBTSxDQUFDLENBQVA7QUFBMUIsU0FBbUMsT0FBTSxDQUFDLENBQVA7QUFBUyxPQUF0RixHQUF1RixFQUFFLENBQUYsQ0FBOUY7QUFBbUcsY0FBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxXQUFJLElBQUksSUFBRSxDQUFOLEVBQVEsSUFBRSxFQUFFLE1BQWhCLEVBQXVCLElBQUUsQ0FBekIsRUFBMkIsR0FBM0I7QUFBK0IsV0FBRyxDQUFILEVBQUssRUFBRSxDQUFGLENBQUwsRUFBVSxDQUFWO0FBQS9CLE9BQTRDLE9BQU8sQ0FBUDtBQUFTLGNBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCO0FBQUMsV0FBSSxJQUFJLENBQUosRUFBTSxJQUFFLEVBQVIsRUFBVyxJQUFFLENBQWIsRUFBZSxJQUFFLEVBQUUsTUFBbkIsRUFBMEIsSUFBRSxRQUFNLENBQXRDLEVBQXdDLElBQUUsQ0FBMUMsRUFBNEMsR0FBNUM7QUFBZ0QsU0FBQyxJQUFFLEVBQUUsQ0FBRixDQUFILE1BQVcsS0FBRyxDQUFDLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLENBQUosS0FBZSxFQUFFLElBQUYsQ0FBTyxDQUFQLEdBQVUsS0FBRyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQTVCLENBQVg7QUFBaEQsT0FBbUcsT0FBTyxDQUFQO0FBQVMsY0FBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0I7QUFBQyxhQUFPLEtBQUcsQ0FBQyxFQUFFLENBQUYsQ0FBSixLQUFXLElBQUUsR0FBRyxDQUFILENBQWIsR0FBb0IsS0FBRyxDQUFDLEVBQUUsQ0FBRixDQUFKLEtBQVcsSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLENBQWIsQ0FBcEIsRUFBMEMsR0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxZQUFJLENBQUo7QUFBQSxZQUFNLENBQU47QUFBQSxZQUFRLENBQVI7QUFBQSxZQUFVLElBQUUsRUFBWjtBQUFBLFlBQWUsSUFBRSxFQUFqQjtBQUFBLFlBQW9CLElBQUUsRUFBRSxNQUF4QjtBQUFBLFlBQStCLElBQUUsS0FBRyxHQUFHLEtBQUcsR0FBTixFQUFVLEVBQUUsUUFBRixHQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWUsQ0FBekIsRUFBMkIsRUFBM0IsQ0FBcEM7QUFBQSxZQUFtRSxJQUFFLENBQUMsQ0FBRCxJQUFJLENBQUMsQ0FBRCxJQUFJLENBQVIsR0FBVSxDQUFWLEdBQVksR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFqRjtBQUFBLFlBQStGLElBQUUsSUFBRSxNQUFJLElBQUUsQ0FBRixHQUFJLEtBQUcsQ0FBWCxJQUFjLEVBQWQsR0FBaUIsQ0FBbkIsR0FBcUIsQ0FBdEgsQ0FBd0gsSUFBRyxLQUFHLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUixDQUFILEVBQWMsQ0FBakIsRUFBbUI7QUFBQyxjQUFFLEdBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBRixFQUFVLEVBQUUsQ0FBRixFQUFJLEVBQUosRUFBTyxDQUFQLEVBQVMsQ0FBVCxDQUFWLEVBQXNCLElBQUUsRUFBRSxNQUExQixDQUFpQyxPQUFNLEdBQU47QUFBVSxhQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsTUFBVyxFQUFFLEVBQUUsQ0FBRixDQUFGLElBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBRixDQUFGLElBQVEsQ0FBVixDQUFuQjtBQUFWO0FBQTJDLGFBQUcsQ0FBSCxFQUFLO0FBQUMsY0FBRyxLQUFHLENBQU4sRUFBUTtBQUFDLGdCQUFHLENBQUgsRUFBSztBQUFDLGtCQUFFLEVBQUYsRUFBSyxJQUFFLEVBQUUsTUFBVCxDQUFnQixPQUFNLEdBQU47QUFBVSxpQkFBQyxJQUFFLEVBQUUsQ0FBRixDQUFILEtBQVUsRUFBRSxJQUFGLENBQU8sRUFBRSxDQUFGLElBQUssQ0FBWixDQUFWO0FBQVYsZUFBbUMsRUFBRSxJQUFGLEVBQU8sSUFBRSxFQUFULEVBQVksQ0FBWixFQUFjLENBQWQ7QUFBaUIsaUJBQUUsRUFBRSxNQUFKLENBQVcsT0FBTSxHQUFOO0FBQVUsZUFBQyxJQUFFLEVBQUUsQ0FBRixDQUFILEtBQVUsQ0FBQyxJQUFFLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFGLEdBQVMsRUFBRSxDQUFGLENBQVosSUFBa0IsQ0FBQyxDQUE3QixLQUFpQyxFQUFFLENBQUYsSUFBSyxFQUFFLEVBQUUsQ0FBRixJQUFLLENBQVAsQ0FBdEM7QUFBVjtBQUEyRDtBQUFDLFNBQWhLLE1BQXFLLElBQUUsR0FBRyxNQUFJLENBQUosR0FBTSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsRUFBRSxNQUFiLENBQU4sR0FBMkIsQ0FBOUIsQ0FBRixFQUFtQyxJQUFFLEVBQUUsSUFBRixFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFGLEdBQWdCLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLENBQW5EO0FBQWdFLE9BQWxkLENBQWpEO0FBQXFnQixjQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxXQUFJLElBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsSUFBRSxFQUFFLE1BQWQsRUFBcUIsSUFBRSxFQUFFLFFBQUYsQ0FBVyxFQUFFLENBQUYsRUFBSyxJQUFoQixDQUF2QixFQUE2QyxJQUFFLEtBQUcsRUFBRSxRQUFGLENBQVcsR0FBWCxDQUFsRCxFQUFrRSxJQUFFLElBQUUsQ0FBRixHQUFJLENBQXhFLEVBQTBFLElBQUUsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGVBQU8sTUFBSSxDQUFYO0FBQWEsT0FBNUIsRUFBNkIsQ0FBN0IsRUFBK0IsQ0FBQyxDQUFoQyxDQUE1RSxFQUErRyxJQUFFLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxlQUFPLEVBQUUsQ0FBRixFQUFJLENBQUosSUFBTyxDQUFDLENBQWY7QUFBaUIsT0FBaEMsRUFBaUMsQ0FBakMsRUFBbUMsQ0FBQyxDQUFwQyxDQUFqSCxFQUF3SixJQUFFLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUksSUFBRSxDQUFDLENBQUQsS0FBSyxLQUFHLE1BQUksQ0FBWixNQUFpQixDQUFDLElBQUUsQ0FBSCxFQUFNLFFBQU4sR0FBZSxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFmLEdBQXdCLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLENBQXpDLENBQU4sQ0FBeUQsT0FBTyxJQUFFLElBQUYsRUFBTyxDQUFkO0FBQWdCLE9BQTFGLENBQTlKLEVBQTBQLElBQUUsQ0FBNVAsRUFBOFAsR0FBOVA7QUFBa1EsWUFBRyxJQUFFLEVBQUUsUUFBRixDQUFXLEVBQUUsQ0FBRixFQUFLLElBQWhCLENBQUwsRUFBMkIsSUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFILENBQUgsRUFBUyxDQUFULENBQUQsQ0FBRixDQUEzQixLQUErQztBQUFDLGNBQUcsQ0FBQyxJQUFFLEVBQUUsTUFBRixDQUFTLEVBQUUsQ0FBRixFQUFLLElBQWQsRUFBb0IsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBK0IsRUFBRSxDQUFGLEVBQUssT0FBcEMsQ0FBSCxFQUFpRCxDQUFqRCxDQUFILEVBQXVEO0FBQUMsaUJBQUksSUFBRSxFQUFFLENBQVIsRUFBVSxJQUFFLENBQVosRUFBYyxHQUFkO0FBQWtCLGtCQUFHLEVBQUUsUUFBRixDQUFXLEVBQUUsQ0FBRixFQUFLLElBQWhCLENBQUgsRUFBeUI7QUFBM0MsYUFBaUQsT0FBTyxHQUFHLElBQUUsQ0FBRixJQUFLLEdBQUcsQ0FBSCxDQUFSLEVBQWMsSUFBRSxDQUFGLElBQUssR0FBRyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsSUFBRSxDQUFaLEVBQWUsTUFBZixDQUFzQixFQUFDLE9BQU0sUUFBTSxFQUFFLElBQUUsQ0FBSixFQUFPLElBQWIsR0FBa0IsR0FBbEIsR0FBc0IsRUFBN0IsRUFBdEIsQ0FBSCxFQUE0RCxPQUE1RCxDQUFvRSxDQUFwRSxFQUFzRSxJQUF0RSxDQUFuQixFQUErRixDQUEvRixFQUFpRyxJQUFFLENBQUYsSUFBSyxHQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLENBQUgsQ0FBdEcsRUFBdUgsSUFBRSxDQUFGLElBQUssR0FBRyxJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBTCxDQUE1SCxFQUE2SSxJQUFFLENBQUYsSUFBSyxHQUFHLENBQUgsQ0FBbEosQ0FBUDtBQUFnSyxhQUFFLElBQUYsQ0FBTyxDQUFQO0FBQVU7QUFBcmtCLE9BQXFrQixPQUFPLEdBQUcsQ0FBSCxDQUFQO0FBQWEsY0FBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQyxVQUFJLElBQUUsRUFBRSxNQUFGLEdBQVMsQ0FBZjtBQUFBLFVBQWlCLElBQUUsRUFBRSxNQUFGLEdBQVMsQ0FBNUI7QUFBQSxVQUE4QixJQUFFLFdBQVMsRUFBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQjtBQUFDLFlBQUksQ0FBSjtBQUFBLFlBQU0sQ0FBTjtBQUFBLFlBQVEsQ0FBUjtBQUFBLFlBQVUsSUFBRSxDQUFaO0FBQUEsWUFBYyxJQUFFLEdBQWhCO0FBQUEsWUFBb0IsSUFBRSxNQUFHLEVBQXpCO0FBQUEsWUFBNEIsSUFBRSxFQUE5QjtBQUFBLFlBQWlDLElBQUUsQ0FBbkM7QUFBQSxZQUFxQyxJQUFFLE1BQUcsS0FBRyxFQUFFLElBQUYsQ0FBTyxHQUFQLENBQVcsR0FBWCxFQUFlLENBQWYsQ0FBN0M7QUFBQSxZQUErRCxJQUFFLEtBQUcsUUFBTSxDQUFOLEdBQVEsQ0FBUixHQUFVLEtBQUssTUFBTCxNQUFlLEVBQTdGO0FBQUEsWUFBZ0csSUFBRSxFQUFFLE1BQXBHLENBQTJHLEtBQUksTUFBSSxJQUFFLE1BQUksQ0FBSixJQUFPLENBQVAsSUFBVSxDQUFoQixDQUFKLEVBQXVCLE1BQUksQ0FBSixJQUFPLFNBQU8sSUFBRSxFQUFFLENBQUYsQ0FBVCxDQUE5QixFQUE2QyxHQUE3QyxFQUFpRDtBQUFDLGNBQUcsS0FBRyxDQUFOLEVBQVE7QUFBQyxnQkFBRSxDQUFGLEVBQUksS0FBRyxFQUFFLGFBQUYsS0FBa0IsQ0FBckIsS0FBeUIsRUFBRSxDQUFGLEdBQUssSUFBRSxDQUFDLENBQWpDLENBQUosQ0FBd0MsT0FBTSxJQUFFLEVBQUUsR0FBRixDQUFSO0FBQWUsa0JBQUcsRUFBRSxDQUFGLEVBQUksS0FBRyxDQUFQLEVBQVMsQ0FBVCxDQUFILEVBQWU7QUFBQyxrQkFBRSxJQUFGLENBQU8sQ0FBUCxFQUFVO0FBQU07QUFBL0MsYUFBK0MsTUFBSSxJQUFFLENBQU47QUFBUyxpQkFBSSxDQUFDLElBQUUsQ0FBQyxDQUFELElBQUksQ0FBUCxLQUFXLEdBQVgsRUFBZSxNQUFHLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBdEI7QUFBaUMsYUFBRyxLQUFHLENBQUgsRUFBSyxLQUFHLE1BQUksQ0FBZixFQUFpQjtBQUFDLGNBQUUsQ0FBRixDQUFJLE9BQU0sSUFBRSxFQUFFLEdBQUYsQ0FBUjtBQUFlLGNBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUjtBQUFmLFdBQTBCLElBQUcsRUFBSCxFQUFLO0FBQUMsZ0JBQUcsSUFBRSxDQUFMLEVBQU8sT0FBTSxHQUFOO0FBQVUsZ0JBQUUsQ0FBRixLQUFNLEVBQUUsQ0FBRixDQUFOLEtBQWEsRUFBRSxDQUFGLElBQUssRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFsQjtBQUFWLGFBQXVDLElBQUUsR0FBRyxDQUFILENBQUY7QUFBUSxhQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixHQUFhLEtBQUcsQ0FBQyxFQUFKLElBQU8sRUFBRSxNQUFGLEdBQVMsQ0FBaEIsSUFBbUIsSUFBRSxFQUFFLE1BQUosR0FBVyxDQUE5QixJQUFpQyxHQUFHLFVBQUgsQ0FBYyxDQUFkLENBQTlDO0FBQStELGdCQUFPLE1BQUksSUFBRSxDQUFGLEVBQUksSUFBRSxDQUFWLEdBQWEsQ0FBcEI7QUFBc0IsT0FBNWhCLENBQTZoQixPQUFPLElBQUUsR0FBRyxDQUFILENBQUYsR0FBUSxDQUFmO0FBQWlCLFlBQU8sSUFBRSxHQUFHLE9BQUgsR0FBVyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLElBQUUsRUFBUjtBQUFBLFVBQVcsSUFBRSxFQUFiO0FBQUEsVUFBZ0IsSUFBRSxFQUFFLElBQUUsR0FBSixDQUFsQixDQUEyQixJQUFHLENBQUMsQ0FBSixFQUFNO0FBQUMsY0FBSSxJQUFFLEVBQUUsQ0FBRixDQUFOLEdBQVksSUFBRSxFQUFFLE1BQWhCLENBQXVCLE9BQU0sR0FBTjtBQUFVLFdBQUMsSUFBRSxHQUFHLEVBQUUsQ0FBRixDQUFILENBQUgsRUFBYSxDQUFiLElBQWdCLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBaEIsR0FBMEIsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUExQjtBQUFWLFNBQThDLENBQUMsSUFBRSxFQUFFLENBQUYsRUFBSSxHQUFHLENBQUgsRUFBSyxDQUFMLENBQUosQ0FBSCxFQUFpQixRQUFqQixHQUEwQixDQUExQjtBQUE0QixjQUFPLENBQVA7QUFBUyxLQUF2SyxFQUF3SyxJQUFFLEdBQUcsTUFBSCxHQUFVLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsQ0FBVjtBQUFBLFVBQVksQ0FBWjtBQUFBLFVBQWMsSUFBRSxjQUFZLE9BQU8sQ0FBbkIsSUFBc0IsQ0FBdEM7QUFBQSxVQUF3QyxJQUFFLENBQUMsQ0FBRCxJQUFJLEVBQUUsSUFBRSxFQUFFLFFBQUYsSUFBWSxDQUFoQixDQUE5QyxDQUFpRSxJQUFHLElBQUUsS0FBRyxFQUFMLEVBQVEsTUFBSSxFQUFFLE1BQWpCLEVBQXdCO0FBQUMsWUFBRyxDQUFDLElBQUUsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEVBQUssS0FBTCxDQUFXLENBQVgsQ0FBUixFQUF1QixNQUF2QixHQUE4QixDQUE5QixJQUFpQyxTQUFPLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBSCxFQUFTLElBQWpELElBQXVELE1BQUksRUFBRSxRQUE3RCxJQUF1RSxDQUF2RSxJQUEwRSxFQUFFLFFBQUYsQ0FBVyxFQUFFLENBQUYsRUFBSyxJQUFoQixDQUE3RSxFQUFtRztBQUFDLGNBQUcsRUFBRSxJQUFFLENBQUMsRUFBRSxJQUFGLENBQU8sRUFBUCxDQUFVLEVBQUUsT0FBRixDQUFVLENBQVYsRUFBYSxPQUFiLENBQXFCLENBQXJCLEVBQXVCLEVBQXZCLENBQVYsRUFBcUMsQ0FBckMsS0FBeUMsRUFBMUMsRUFBOEMsQ0FBOUMsQ0FBSixDQUFILEVBQXlELE9BQU8sQ0FBUCxDQUFTLE1BQUksSUFBRSxFQUFFLFVBQVIsR0FBb0IsSUFBRSxFQUFFLEtBQUYsQ0FBUSxFQUFFLEtBQUYsR0FBVSxLQUFWLENBQWdCLE1BQXhCLENBQXRCO0FBQXNELGFBQUUsRUFBRSxZQUFGLENBQWUsSUFBZixDQUFvQixDQUFwQixJQUF1QixDQUF2QixHQUF5QixFQUFFLE1BQTdCLENBQW9DLE9BQU0sR0FBTixFQUFVO0FBQUMsY0FBRyxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sRUFBRSxRQUFGLENBQVcsSUFBRSxFQUFFLElBQWYsQ0FBVixFQUErQixNQUFNLElBQUcsQ0FBQyxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBSCxNQUFnQixJQUFFLEVBQUUsRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFhLE9BQWIsQ0FBcUIsQ0FBckIsRUFBdUIsRUFBdkIsQ0FBRixFQUE2QixFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsRUFBSyxJQUFaLEtBQW1CLEdBQUcsRUFBRSxVQUFMLENBQW5CLElBQXFDLENBQWxFLENBQWxCLENBQUgsRUFBMkY7QUFBQyxnQkFBRyxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxHQUFjLEVBQUUsSUFBRSxFQUFFLE1BQUYsSUFBVSxHQUFHLENBQUgsQ0FBZCxDQUFqQixFQUFzQyxPQUFPLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLEdBQWEsQ0FBcEIsQ0FBc0I7QUFBTTtBQUFDO0FBQUMsY0FBTSxDQUFDLEtBQUcsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFKLEVBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFDLENBQUQsSUFBSSxFQUFFLElBQUYsQ0FBTyxDQUFQLEtBQVcsR0FBRyxFQUFFLFVBQUwsQ0FBZixJQUFpQyxDQUF0RCxHQUF5RCxDQUEvRDtBQUFpRSxLQUFqekIsRUFBa3pCLEVBQUUsVUFBRixHQUFhLEVBQUUsS0FBRixDQUFRLEVBQVIsRUFBWSxJQUFaLENBQWlCLENBQWpCLEVBQW9CLElBQXBCLENBQXlCLEVBQXpCLE1BQStCLENBQTkxQixFQUFnMkIsRUFBRSxnQkFBRixHQUFtQixDQUFDLENBQUMsQ0FBcjNCLEVBQXUzQixHQUF2M0IsRUFBMjNCLEVBQUUsWUFBRixHQUFlLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLElBQUUsRUFBRSx1QkFBRixDQUEwQixFQUFFLGFBQUYsQ0FBZ0IsVUFBaEIsQ0FBMUIsQ0FBVDtBQUFnRSxLQUEvRSxDQUExNEIsRUFBMjlCLEdBQUcsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsU0FBRixHQUFZLGtCQUFaLEVBQStCLFFBQU0sRUFBRSxVQUFGLENBQWEsWUFBYixDQUEwQixNQUExQixDQUE1QztBQUE4RSxLQUE3RixLQUFnRyxHQUFHLHdCQUFILEVBQTRCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxVQUFHLENBQUMsQ0FBSixFQUFNLE9BQU8sRUFBRSxZQUFGLENBQWUsQ0FBZixFQUFpQixXQUFTLEVBQUUsV0FBRixFQUFULEdBQXlCLENBQXpCLEdBQTJCLENBQTVDLENBQVA7QUFBc0QsS0FBeEcsQ0FBM2pDLEVBQXFxQyxFQUFFLFVBQUYsSUFBYyxHQUFHLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLFNBQUYsR0FBWSxVQUFaLEVBQXVCLEVBQUUsVUFBRixDQUFhLFlBQWIsQ0FBMEIsT0FBMUIsRUFBa0MsRUFBbEMsQ0FBdkIsRUFBNkQsT0FBSyxFQUFFLFVBQUYsQ0FBYSxZQUFiLENBQTBCLE9BQTFCLENBQXpFO0FBQTRHLEtBQTNILENBQWQsSUFBNEksR0FBRyxPQUFILEVBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUcsQ0FBQyxDQUFELElBQUksWUFBVSxFQUFFLFFBQUYsQ0FBVyxXQUFYLEVBQWpCLEVBQTBDLE9BQU8sRUFBRSxZQUFUO0FBQXNCLEtBQTNGLENBQWp6QyxFQUE4NEMsR0FBRyxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sUUFBTSxFQUFFLFlBQUYsQ0FBZSxVQUFmLENBQWI7QUFBd0MsS0FBdkQsS0FBMEQsR0FBRyxDQUFILEVBQUssVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSixDQUFNLElBQUcsQ0FBQyxDQUFKLEVBQU0sT0FBTSxDQUFDLENBQUQsS0FBSyxFQUFFLENBQUYsQ0FBTCxHQUFVLEVBQUUsV0FBRixFQUFWLEdBQTBCLENBQUMsSUFBRSxFQUFFLGdCQUFGLENBQW1CLENBQW5CLENBQUgsS0FBMkIsRUFBRSxTQUE3QixHQUF1QyxFQUFFLEtBQXpDLEdBQStDLElBQS9FO0FBQW9GLEtBQXJILENBQXg4QyxFQUErakQsRUFBdGtEO0FBQXlrRCxHQUF4bW1CLENBQXltbUIsQ0FBem1tQixDQUFOLENBQWtubUIsRUFBRSxJQUFGLEdBQU8sQ0FBUCxFQUFTLEVBQUUsSUFBRixHQUFPLEVBQUUsU0FBbEIsRUFBNEIsRUFBRSxJQUFGLENBQU8sR0FBUCxJQUFZLEVBQUUsSUFBRixDQUFPLE9BQS9DLEVBQXVELEVBQUUsVUFBRixHQUFhLEVBQUUsTUFBRixHQUFTLEVBQUUsVUFBL0UsRUFBMEYsRUFBRSxJQUFGLEdBQU8sRUFBRSxPQUFuRyxFQUEyRyxFQUFFLFFBQUYsR0FBVyxFQUFFLEtBQXhILEVBQThILEVBQUUsUUFBRixHQUFXLEVBQUUsUUFBM0ksRUFBb0osRUFBRSxjQUFGLEdBQWlCLEVBQUUsTUFBdkssQ0FBOEssSUFBSSxJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBSSxJQUFFLEVBQU47QUFBQSxRQUFTLElBQUUsS0FBSyxDQUFMLEtBQVMsQ0FBcEIsQ0FBc0IsT0FBTSxDQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsS0FBVSxNQUFJLEVBQUUsUUFBdEI7QUFBK0IsVUFBRyxNQUFJLEVBQUUsUUFBVCxFQUFrQjtBQUFDLFlBQUcsS0FBRyxFQUFFLENBQUYsRUFBSyxFQUFMLENBQVEsQ0FBUixDQUFOLEVBQWlCLE1BQU0sRUFBRSxJQUFGLENBQU8sQ0FBUDtBQUFVO0FBQW5GLEtBQW1GLE9BQU8sQ0FBUDtBQUFTLEdBQXhJO0FBQUEsTUFBeUksSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsU0FBSSxJQUFJLElBQUUsRUFBVixFQUFhLENBQWIsRUFBZSxJQUFFLEVBQUUsV0FBbkI7QUFBK0IsWUFBSSxFQUFFLFFBQU4sSUFBZ0IsTUFBSSxDQUFwQixJQUF1QixFQUFFLElBQUYsQ0FBTyxDQUFQLENBQXZCO0FBQS9CLEtBQWdFLE9BQU8sQ0FBUDtBQUFTLEdBQWxPO0FBQUEsTUFBbU8sSUFBRSxFQUFFLElBQUYsQ0FBTyxLQUFQLENBQWEsWUFBbFAsQ0FBK1AsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFdBQU8sRUFBRSxRQUFGLElBQVksRUFBRSxRQUFGLENBQVcsV0FBWCxPQUEyQixFQUFFLFdBQUYsRUFBOUM7QUFBOEQsT0FBSSxJQUFFLGlFQUFOLENBQXdFLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFdBQU8sRUFBRSxDQUFGLElBQUssRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU0sQ0FBQyxDQUFDLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFGLEtBQWtCLENBQXhCO0FBQTBCLEtBQWpELENBQUwsR0FBd0QsRUFBRSxRQUFGLEdBQVcsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxNQUFJLENBQUosS0FBUSxDQUFmO0FBQWlCLEtBQXRDLENBQVgsR0FBbUQsWUFBVSxPQUFPLENBQWpCLEdBQW1CLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsSUFBWSxDQUFDLENBQWIsS0FBaUIsQ0FBeEI7QUFBMEIsS0FBL0MsQ0FBbkIsR0FBb0UsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQXRMO0FBQXNNLEtBQUUsTUFBRixHQUFTLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFGLENBQU4sQ0FBVyxPQUFPLE1BQUksSUFBRSxVQUFRLENBQVIsR0FBVSxHQUFoQixHQUFxQixNQUFJLEVBQUUsTUFBTixJQUFjLE1BQUksRUFBRSxRQUFwQixHQUE2QixFQUFFLElBQUYsQ0FBTyxlQUFQLENBQXVCLENBQXZCLEVBQXlCLENBQXpCLElBQTRCLENBQUMsQ0FBRCxDQUE1QixHQUFnQyxFQUE3RCxHQUFnRSxFQUFFLElBQUYsQ0FBTyxPQUFQLENBQWUsQ0FBZixFQUFpQixFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLE1BQUksRUFBRSxRQUFiO0FBQXNCLEtBQTNDLENBQWpCLENBQTVGO0FBQTJKLEdBQS9MLEVBQWdNLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLENBQU47QUFBQSxVQUFRLElBQUUsS0FBSyxNQUFmO0FBQUEsVUFBc0IsSUFBRSxJQUF4QixDQUE2QixJQUFHLFlBQVUsT0FBTyxDQUFwQixFQUFzQixPQUFPLEtBQUssU0FBTCxDQUFlLEVBQUUsQ0FBRixFQUFLLE1BQUwsQ0FBWSxZQUFVO0FBQUMsYUFBSSxJQUFFLENBQU4sRUFBUSxJQUFFLENBQVYsRUFBWSxHQUFaO0FBQWdCLGNBQUcsRUFBRSxRQUFGLENBQVcsRUFBRSxDQUFGLENBQVgsRUFBZ0IsSUFBaEIsQ0FBSCxFQUF5QixPQUFNLENBQUMsQ0FBUDtBQUF6QztBQUFrRCxPQUF6RSxDQUFmLENBQVAsQ0FBa0csS0FBSSxJQUFFLEtBQUssU0FBTCxDQUFlLEVBQWYsQ0FBRixFQUFxQixJQUFFLENBQTNCLEVBQTZCLElBQUUsQ0FBL0IsRUFBaUMsR0FBakM7QUFBcUMsVUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLEVBQUUsQ0FBRixDQUFULEVBQWMsQ0FBZDtBQUFyQyxPQUFzRCxPQUFPLElBQUUsQ0FBRixHQUFJLEVBQUUsVUFBRixDQUFhLENBQWIsQ0FBSixHQUFvQixDQUEzQjtBQUE2QixLQUExUCxFQUEyUCxRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBSyxTQUFMLENBQWUsRUFBRSxJQUFGLEVBQU8sS0FBRyxFQUFWLEVBQWEsQ0FBQyxDQUFkLENBQWYsQ0FBUDtBQUF3QyxLQUF0VCxFQUF1VCxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLFNBQUwsQ0FBZSxFQUFFLElBQUYsRUFBTyxLQUFHLEVBQVYsRUFBYSxDQUFDLENBQWQsQ0FBZixDQUFQO0FBQXdDLEtBQS9XLEVBQWdYLElBQUcsWUFBUyxDQUFULEVBQVc7QUFBQyxhQUFNLENBQUMsQ0FBQyxFQUFFLElBQUYsRUFBTyxZQUFVLE9BQU8sQ0FBakIsSUFBb0IsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFwQixHQUE4QixFQUFFLENBQUYsQ0FBOUIsR0FBbUMsS0FBRyxFQUE3QyxFQUFnRCxDQUFDLENBQWpELEVBQW9ELE1BQTVEO0FBQW1FLEtBQWxjLEVBQVosQ0FBaE0sQ0FBaXBCLElBQUksQ0FBSjtBQUFBLE1BQU0sSUFBRSxxQ0FBUixDQUE4QyxDQUFDLEVBQUUsRUFBRixDQUFLLElBQUwsR0FBVSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFRLElBQUcsQ0FBQyxDQUFKLEVBQU0sT0FBTyxJQUFQLENBQVksSUFBRyxJQUFFLEtBQUcsQ0FBTCxFQUFPLFlBQVUsT0FBTyxDQUEzQixFQUE2QjtBQUFDLFVBQUcsRUFBRSxJQUFFLFFBQU0sRUFBRSxDQUFGLENBQU4sSUFBWSxRQUFNLEVBQUUsRUFBRSxNQUFGLEdBQVMsQ0FBWCxDQUFsQixJQUFpQyxFQUFFLE1BQUYsSUFBVSxDQUEzQyxHQUE2QyxDQUFDLElBQUQsRUFBTSxDQUFOLEVBQVEsSUFBUixDQUE3QyxHQUEyRCxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQS9ELEtBQTJFLENBQUMsRUFBRSxDQUFGLENBQUQsSUFBTyxDQUFyRixFQUF1RixPQUFNLENBQUMsQ0FBRCxJQUFJLEVBQUUsTUFBTixHQUFhLENBQUMsS0FBRyxDQUFKLEVBQU8sSUFBUCxDQUFZLENBQVosQ0FBYixHQUE0QixLQUFLLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsSUFBcEIsQ0FBeUIsQ0FBekIsQ0FBbEMsQ0FBOEQsSUFBRyxFQUFFLENBQUYsQ0FBSCxFQUFRO0FBQUMsWUFBRyxJQUFFLGFBQWEsQ0FBYixHQUFlLEVBQUUsQ0FBRixDQUFmLEdBQW9CLENBQXRCLEVBQXdCLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYSxFQUFFLFNBQUYsQ0FBWSxFQUFFLENBQUYsQ0FBWixFQUFpQixLQUFHLEVBQUUsUUFBTCxHQUFjLEVBQUUsYUFBRixJQUFpQixDQUEvQixHQUFpQyxDQUFsRCxFQUFvRCxDQUFDLENBQXJELENBQWIsQ0FBeEIsRUFBOEYsRUFBRSxJQUFGLENBQU8sRUFBRSxDQUFGLENBQVAsS0FBYyxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBL0csRUFBa0ksS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFlBQUUsS0FBSyxDQUFMLENBQUYsSUFBVyxLQUFLLENBQUwsRUFBUSxFQUFFLENBQUYsQ0FBUixDQUFYLEdBQXlCLEtBQUssSUFBTCxDQUFVLENBQVYsRUFBWSxFQUFFLENBQUYsQ0FBWixDQUF6QjtBQUFYLFNBQXNELE9BQU8sSUFBUDtBQUFZLGNBQU0sQ0FBQyxJQUFFLEVBQUUsY0FBRixDQUFpQixFQUFFLENBQUYsQ0FBakIsQ0FBSCxNQUE2QixLQUFLLENBQUwsSUFBUSxDQUFSLEVBQVUsS0FBSyxNQUFMLEdBQVksQ0FBbkQsR0FBc0QsSUFBNUQ7QUFBaUUsWUFBTyxFQUFFLFFBQUYsSUFBWSxLQUFLLENBQUwsSUFBUSxDQUFSLEVBQVUsS0FBSyxNQUFMLEdBQVksQ0FBdEIsRUFBd0IsSUFBcEMsSUFBMEMsRUFBRSxDQUFGLElBQUssS0FBSyxDQUFMLEtBQVMsRUFBRSxLQUFYLEdBQWlCLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBakIsR0FBNEIsRUFBRSxDQUFGLENBQWpDLEdBQXNDLEVBQUUsU0FBRixDQUFZLENBQVosRUFBYyxJQUFkLENBQXZGO0FBQTJHLEdBQWptQixFQUFtbUIsU0FBbm1CLEdBQTZtQixFQUFFLEVBQS9tQixFQUFrbkIsSUFBRSxFQUFFLENBQUYsQ0FBcG5CLENBQXluQixJQUFJLElBQUUsZ0NBQU47QUFBQSxNQUF1QyxJQUFFLEVBQUMsVUFBUyxDQUFDLENBQVgsRUFBYSxVQUFTLENBQUMsQ0FBdkIsRUFBeUIsTUFBSyxDQUFDLENBQS9CLEVBQWlDLE1BQUssQ0FBQyxDQUF2QyxFQUF6QyxDQUFtRixFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBRixFQUFJLElBQUosQ0FBTjtBQUFBLFVBQWdCLElBQUUsRUFBRSxNQUFwQixDQUEyQixPQUFPLEtBQUssTUFBTCxDQUFZLFlBQVU7QUFBQyxhQUFJLElBQUksSUFBRSxDQUFWLEVBQVksSUFBRSxDQUFkLEVBQWdCLEdBQWhCO0FBQW9CLGNBQUcsRUFBRSxRQUFGLENBQVcsSUFBWCxFQUFnQixFQUFFLENBQUYsQ0FBaEIsQ0FBSCxFQUF5QixPQUFNLENBQUMsQ0FBUDtBQUE3QztBQUFzRCxPQUE3RSxDQUFQO0FBQXNGLEtBQWxJLEVBQW1JLFNBQVEsaUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sSUFBRSxDQUFSO0FBQUEsVUFBVSxJQUFFLEtBQUssTUFBakI7QUFBQSxVQUF3QixJQUFFLEVBQTFCO0FBQUEsVUFBNkIsSUFBRSxZQUFVLE9BQU8sQ0FBakIsSUFBb0IsRUFBRSxDQUFGLENBQW5ELENBQXdELElBQUcsQ0FBQyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUosRUFBYyxPQUFLLElBQUUsQ0FBUCxFQUFTLEdBQVQ7QUFBYSxhQUFJLElBQUUsS0FBSyxDQUFMLENBQU4sRUFBYyxLQUFHLE1BQUksQ0FBckIsRUFBdUIsSUFBRSxFQUFFLFVBQTNCO0FBQXNDLGNBQUcsRUFBRSxRQUFGLEdBQVcsRUFBWCxLQUFnQixJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsSUFBVyxDQUFDLENBQWQsR0FBZ0IsTUFBSSxFQUFFLFFBQU4sSUFBZ0IsRUFBRSxJQUFGLENBQU8sZUFBUCxDQUF1QixDQUF2QixFQUF5QixDQUF6QixDQUFoRCxDQUFILEVBQWdGO0FBQUMsY0FBRSxJQUFGLENBQU8sQ0FBUCxFQUFVO0FBQU07QUFBdkk7QUFBYixPQUFvSixPQUFPLEtBQUssU0FBTCxDQUFlLEVBQUUsTUFBRixHQUFTLENBQVQsR0FBVyxFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQVgsR0FBMkIsQ0FBMUMsQ0FBUDtBQUFvRCxLQUF2YSxFQUF3YSxPQUFNLGVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxJQUFFLFlBQVUsT0FBTyxDQUFqQixHQUFtQixFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxFQUFZLEtBQUssQ0FBTCxDQUFaLENBQW5CLEdBQXdDLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxFQUFFLE1BQUYsR0FBUyxFQUFFLENBQUYsQ0FBVCxHQUFjLENBQTFCLENBQTFDLEdBQXVFLEtBQUssQ0FBTCxLQUFTLEtBQUssQ0FBTCxFQUFRLFVBQWpCLEdBQTRCLEtBQUssS0FBTCxHQUFhLE9BQWIsR0FBdUIsTUFBbkQsR0FBMEQsQ0FBQyxDQUF6STtBQUEySSxLQUFya0IsRUFBc2tCLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLFNBQUwsQ0FBZSxFQUFFLFVBQUYsQ0FBYSxFQUFFLEtBQUYsQ0FBUSxLQUFLLEdBQUwsRUFBUixFQUFtQixFQUFFLENBQUYsRUFBSSxDQUFKLENBQW5CLENBQWIsQ0FBZixDQUFQO0FBQWdFLEtBQXhwQixFQUF5cEIsU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssR0FBTCxDQUFTLFFBQU0sQ0FBTixHQUFRLEtBQUssVUFBYixHQUF3QixLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsQ0FBdkIsQ0FBakMsQ0FBUDtBQUFtRSxLQUFodkIsRUFBWixFQUErdkIsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFdBQU0sQ0FBQyxJQUFFLEVBQUUsQ0FBRixDQUFILEtBQVUsTUFBSSxFQUFFLFFBQXRCLElBQWdDLE9BQU8sQ0FBUDtBQUFTLEtBQUUsSUFBRixDQUFPLEVBQUMsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsRUFBRSxVQUFSLENBQW1CLE9BQU8sS0FBRyxPQUFLLEVBQUUsUUFBVixHQUFtQixDQUFuQixHQUFxQixJQUE1QjtBQUFpQyxLQUF4RSxFQUF5RSxTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxDQUFGLEVBQUksWUFBSixDQUFQO0FBQXlCLEtBQXRILEVBQXVILGNBQWEsc0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEVBQUUsQ0FBRixFQUFJLFlBQUosRUFBaUIsQ0FBakIsQ0FBUDtBQUEyQixLQUEvSyxFQUFnTCxNQUFLLGNBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLENBQUYsRUFBSSxhQUFKLENBQVA7QUFBMEIsS0FBM04sRUFBNE4sTUFBSyxjQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxDQUFGLEVBQUksaUJBQUosQ0FBUDtBQUE4QixLQUEzUSxFQUE0USxTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxDQUFGLEVBQUksYUFBSixDQUFQO0FBQTBCLEtBQTFULEVBQTJULFNBQVEsaUJBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLENBQUYsRUFBSSxpQkFBSixDQUFQO0FBQThCLEtBQTdXLEVBQThXLFdBQVUsbUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEVBQUUsQ0FBRixFQUFJLGFBQUosRUFBa0IsQ0FBbEIsQ0FBUDtBQUE0QixLQUFwYSxFQUFxYSxXQUFVLG1CQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxFQUFFLENBQUYsRUFBSSxpQkFBSixFQUFzQixDQUF0QixDQUFQO0FBQWdDLEtBQS9kLEVBQWdlLFVBQVMsa0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLENBQUMsRUFBRSxVQUFGLElBQWMsRUFBZixFQUFtQixVQUFyQixFQUFnQyxDQUFoQyxDQUFQO0FBQTBDLEtBQS9oQixFQUFnaUIsVUFBUyxrQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsRUFBRSxVQUFKLENBQVA7QUFBdUIsS0FBNWtCLEVBQTZrQixVQUFTLGtCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxDQUFGLEVBQUksUUFBSixJQUFjLEVBQUUsZUFBaEIsSUFBaUMsRUFBRSxDQUFGLEVBQUksVUFBSixNQUFrQixJQUFFLEVBQUUsT0FBRixJQUFXLENBQS9CLEdBQWtDLEVBQUUsS0FBRixDQUFRLEVBQVIsRUFBVyxFQUFFLFVBQWIsQ0FBbkUsQ0FBUDtBQUFvRyxLQUF0c0IsRUFBUCxFQUErc0IsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxFQUFGLENBQUssQ0FBTCxJQUFRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksSUFBRSxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBTixDQUFzQixPQUFNLFlBQVUsRUFBRSxLQUFGLENBQVEsQ0FBQyxDQUFULENBQVYsS0FBd0IsSUFBRSxDQUExQixHQUE2QixLQUFHLFlBQVUsT0FBTyxDQUFwQixLQUF3QixJQUFFLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQTFCLENBQTdCLEVBQXNFLEtBQUssTUFBTCxHQUFZLENBQVosS0FBZ0IsRUFBRSxDQUFGLEtBQU0sRUFBRSxVQUFGLENBQWEsQ0FBYixDQUFOLEVBQXNCLEVBQUUsSUFBRixDQUFPLENBQVAsS0FBVyxFQUFFLE9BQUYsRUFBakQsQ0FBdEUsRUFBb0ksS0FBSyxTQUFMLENBQWUsQ0FBZixDQUExSTtBQUE0SixLQUF4TTtBQUF5TSxHQUF0NkIsRUFBdzZCLElBQUksSUFBRSxtQkFBTixDQUEwQixTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxRQUFJLElBQUUsRUFBTixDQUFTLE9BQU8sRUFBRSxJQUFGLENBQU8sRUFBRSxLQUFGLENBQVEsQ0FBUixLQUFZLEVBQW5CLEVBQXNCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUUsQ0FBRixJQUFLLENBQUMsQ0FBTjtBQUFRLEtBQTVDLEdBQThDLENBQXJEO0FBQXVELEtBQUUsU0FBRixHQUFZLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxZQUFVLE9BQU8sQ0FBakIsR0FBbUIsRUFBRSxDQUFGLENBQW5CLEdBQXdCLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBWSxDQUFaLENBQTFCLENBQXlDLElBQUksQ0FBSjtBQUFBLFFBQU0sQ0FBTjtBQUFBLFFBQVEsQ0FBUjtBQUFBLFFBQVUsQ0FBVjtBQUFBLFFBQVksSUFBRSxFQUFkO0FBQUEsUUFBaUIsSUFBRSxFQUFuQjtBQUFBLFFBQXNCLElBQUUsQ0FBQyxDQUF6QjtBQUFBLFFBQTJCLElBQUUsU0FBRixDQUFFLEdBQVU7QUFBQyxXQUFJLElBQUUsS0FBRyxFQUFFLElBQVAsRUFBWSxJQUFFLElBQUUsQ0FBQyxDQUFyQixFQUF1QixFQUFFLE1BQXpCLEVBQWdDLElBQUUsQ0FBQyxDQUFuQyxFQUFxQztBQUFDLFlBQUUsRUFBRSxLQUFGLEVBQUYsQ0FBWSxPQUFNLEVBQUUsQ0FBRixHQUFJLEVBQUUsTUFBWjtBQUFtQixXQUFDLENBQUQsS0FBSyxFQUFFLENBQUYsRUFBSyxLQUFMLENBQVcsRUFBRSxDQUFGLENBQVgsRUFBZ0IsRUFBRSxDQUFGLENBQWhCLENBQUwsSUFBNEIsRUFBRSxXQUE5QixLQUE0QyxJQUFFLEVBQUUsTUFBSixFQUFXLElBQUUsQ0FBQyxDQUExRDtBQUFuQjtBQUFnRixTQUFFLE1BQUYsS0FBVyxJQUFFLENBQUMsQ0FBZCxHQUFpQixJQUFFLENBQUMsQ0FBcEIsRUFBc0IsTUFBSSxJQUFFLElBQUUsRUFBRixHQUFLLEVBQVgsQ0FBdEI7QUFBcUMsS0FBL007QUFBQSxRQUFnTixJQUFFLEVBQUMsS0FBSSxlQUFVO0FBQUMsZUFBTyxNQUFJLEtBQUcsQ0FBQyxDQUFKLEtBQVEsSUFBRSxFQUFFLE1BQUYsR0FBUyxDQUFYLEVBQWEsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFyQixHQUFnQyxTQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxZQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsY0FBRSxDQUFGLElBQUssRUFBRSxNQUFGLElBQVUsRUFBRSxHQUFGLENBQU0sQ0FBTixDQUFWLElBQW9CLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBekIsR0FBbUMsS0FBRyxFQUFFLE1BQUwsSUFBYSxhQUFXLEVBQUUsQ0FBRixDQUF4QixJQUE4QixFQUFFLENBQUYsQ0FBakU7QUFBc0UsV0FBN0Y7QUFBK0YsU0FBN0csQ0FBOEcsU0FBOUcsQ0FBaEMsRUFBeUosS0FBRyxDQUFDLENBQUosSUFBTyxHQUFwSyxHQUF5SyxJQUFoTDtBQUFxTCxPQUFyTSxFQUFzTSxRQUFPLGtCQUFVO0FBQUMsZUFBTyxFQUFFLElBQUYsQ0FBTyxTQUFQLEVBQWlCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGNBQUksQ0FBSixDQUFNLE9BQU0sQ0FBQyxJQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxDQUFILElBQXFCLENBQUMsQ0FBNUI7QUFBOEIsY0FBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsR0FBYyxLQUFHLENBQUgsSUFBTSxHQUFwQjtBQUE5QjtBQUFzRCxTQUEzRixHQUE2RixJQUFwRztBQUF5RyxPQUFqVSxFQUFrVSxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsZUFBTyxJQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsRUFBWSxDQUFaLElBQWUsQ0FBQyxDQUFsQixHQUFvQixFQUFFLE1BQUYsR0FBUyxDQUFwQztBQUFzQyxPQUF4WCxFQUF5WCxPQUFNLGlCQUFVO0FBQUMsZUFBTyxNQUFJLElBQUUsRUFBTixHQUFVLElBQWpCO0FBQXNCLE9BQWhhLEVBQWlhLFNBQVEsbUJBQVU7QUFBQyxlQUFPLElBQUUsSUFBRSxFQUFKLEVBQU8sSUFBRSxJQUFFLEVBQVgsRUFBYyxJQUFyQjtBQUEwQixPQUE5YyxFQUErYyxVQUFTLG9CQUFVO0FBQUMsZUFBTSxDQUFDLENBQVA7QUFBUyxPQUE1ZSxFQUE2ZSxNQUFLLGdCQUFVO0FBQUMsZUFBTyxJQUFFLElBQUUsRUFBSixFQUFPLEtBQUcsQ0FBSCxLQUFPLElBQUUsSUFBRSxFQUFYLENBQVAsRUFBc0IsSUFBN0I7QUFBa0MsT0FBL2hCLEVBQWdpQixRQUFPLGtCQUFVO0FBQUMsZUFBTSxDQUFDLENBQUMsQ0FBUjtBQUFVLE9BQTVqQixFQUE2akIsVUFBUyxrQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsZUFBTyxNQUFJLElBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBQyxJQUFFLEtBQUcsRUFBTixFQUFVLEtBQVYsR0FBZ0IsRUFBRSxLQUFGLEVBQWhCLEdBQTBCLENBQTdCLENBQUYsRUFBa0MsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFsQyxFQUE0QyxLQUFHLEdBQW5ELEdBQXdELElBQS9EO0FBQW9FLE9BQXhwQixFQUF5cEIsTUFBSyxnQkFBVTtBQUFDLGVBQU8sRUFBRSxRQUFGLENBQVcsSUFBWCxFQUFnQixTQUFoQixHQUEyQixJQUFsQztBQUF1QyxPQUFodEIsRUFBaXRCLE9BQU0saUJBQVU7QUFBQyxlQUFNLENBQUMsQ0FBQyxDQUFSO0FBQVUsT0FBNXVCLEVBQWxOLENBQWc4QixPQUFPLENBQVA7QUFBUyxHQUExZ0MsQ0FBMmdDLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFdBQU8sQ0FBUDtBQUFTLFlBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFVBQU0sQ0FBTjtBQUFRLFlBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQjtBQUFDLFFBQUksQ0FBSixDQUFNLElBQUc7QUFBQyxXQUFHLEVBQUUsSUFBRSxFQUFFLE9BQU4sQ0FBSCxHQUFrQixFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVUsSUFBVixDQUFlLENBQWYsRUFBa0IsSUFBbEIsQ0FBdUIsQ0FBdkIsQ0FBbEIsR0FBNEMsS0FBRyxFQUFFLElBQUUsRUFBRSxJQUFOLENBQUgsR0FBZSxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBZixHQUE2QixFQUFFLEtBQUYsQ0FBUSxLQUFLLENBQWIsRUFBZSxDQUFDLENBQUQsRUFBSSxLQUFKLENBQVUsQ0FBVixDQUFmLENBQXpFO0FBQXNHLEtBQTFHLENBQTBHLE9BQU0sQ0FBTixFQUFRO0FBQUMsUUFBRSxLQUFGLENBQVEsS0FBSyxDQUFiLEVBQWUsQ0FBQyxDQUFELENBQWY7QUFBb0I7QUFBQyxLQUFFLE1BQUYsQ0FBUyxFQUFDLFVBQVMsa0JBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLENBQUMsQ0FBQyxRQUFELEVBQVUsVUFBVixFQUFxQixFQUFFLFNBQUYsQ0FBWSxRQUFaLENBQXJCLEVBQTJDLEVBQUUsU0FBRixDQUFZLFFBQVosQ0FBM0MsRUFBaUUsQ0FBakUsQ0FBRCxFQUFxRSxDQUFDLFNBQUQsRUFBVyxNQUFYLEVBQWtCLEVBQUUsU0FBRixDQUFZLGFBQVosQ0FBbEIsRUFBNkMsRUFBRSxTQUFGLENBQVksYUFBWixDQUE3QyxFQUF3RSxDQUF4RSxFQUEwRSxVQUExRSxDQUFyRSxFQUEySixDQUFDLFFBQUQsRUFBVSxNQUFWLEVBQWlCLEVBQUUsU0FBRixDQUFZLGFBQVosQ0FBakIsRUFBNEMsRUFBRSxTQUFGLENBQVksYUFBWixDQUE1QyxFQUF1RSxDQUF2RSxFQUF5RSxVQUF6RSxDQUEzSixDQUFOO0FBQUEsVUFBdVAsSUFBRSxTQUF6UDtBQUFBLFVBQW1RLElBQUUsRUFBQyxPQUFNLGlCQUFVO0FBQUMsaUJBQU8sQ0FBUDtBQUFTLFNBQTNCLEVBQTRCLFFBQU8sa0JBQVU7QUFBQyxpQkFBTyxFQUFFLElBQUYsQ0FBTyxTQUFQLEVBQWtCLElBQWxCLENBQXVCLFNBQXZCLEdBQWtDLElBQXpDO0FBQThDLFNBQTVGLEVBQTZGLFNBQVEsZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosQ0FBUDtBQUFzQixTQUF2SSxFQUF3SSxNQUFLLGdCQUFVO0FBQUMsY0FBSSxJQUFFLFNBQU4sQ0FBZ0IsT0FBTyxFQUFFLFFBQUYsQ0FBVyxVQUFTLENBQVQsRUFBVztBQUFDLGNBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxrQkFBSSxJQUFFLEVBQUUsRUFBRSxFQUFFLENBQUYsQ0FBRixDQUFGLEtBQVksRUFBRSxFQUFFLENBQUYsQ0FBRixDQUFsQixDQUEwQixFQUFFLEVBQUUsQ0FBRixDQUFGLEVBQVEsWUFBVTtBQUFDLG9CQUFJLElBQUUsS0FBRyxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWEsU0FBYixDQUFULENBQWlDLEtBQUcsRUFBRSxFQUFFLE9BQUosQ0FBSCxHQUFnQixFQUFFLE9BQUYsR0FBWSxRQUFaLENBQXFCLEVBQUUsTUFBdkIsRUFBK0IsSUFBL0IsQ0FBb0MsRUFBRSxPQUF0QyxFQUErQyxJQUEvQyxDQUFvRCxFQUFFLE1BQXRELENBQWhCLEdBQThFLEVBQUUsRUFBRSxDQUFGLElBQUssTUFBUCxFQUFlLElBQWYsRUFBb0IsSUFBRSxDQUFDLENBQUQsQ0FBRixHQUFNLFNBQTFCLENBQTlFO0FBQW1ILGVBQXZLO0FBQXlLLGFBQTFOLEdBQTROLElBQUUsSUFBOU47QUFBbU8sV0FBMVAsRUFBNFAsT0FBNVAsRUFBUDtBQUE2USxTQUFyYixFQUFzYixNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxjQUFJLElBQUUsQ0FBTixDQUFRLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQjtBQUFDLG1CQUFPLFlBQVU7QUFBQyxrQkFBSSxJQUFFLElBQU47QUFBQSxrQkFBVyxJQUFFLFNBQWI7QUFBQSxrQkFBdUIsSUFBRSxhQUFVO0FBQUMsb0JBQUksQ0FBSixFQUFNLENBQU4sQ0FBUSxJQUFHLEVBQUUsSUFBRSxDQUFKLENBQUgsRUFBVTtBQUFDLHNCQUFHLENBQUMsSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFILE1BQW1CLEVBQUUsT0FBRixFQUF0QixFQUFrQyxNQUFNLElBQUksU0FBSixDQUFjLDBCQUFkLENBQU4sQ0FBZ0QsSUFBRSxNQUFJLG9CQUFpQixDQUFqQix5Q0FBaUIsQ0FBakIsTUFBb0IsY0FBWSxPQUFPLENBQTNDLEtBQStDLEVBQUUsSUFBbkQsRUFBd0QsRUFBRSxDQUFGLElBQUssSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLENBQVQsRUFBb0IsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLENBQXBCLENBQUYsSUFBbUMsS0FBSSxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLENBQVQsRUFBb0IsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxDQUFSLENBQXBCLEVBQStCLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsRUFBRSxVQUFWLENBQS9CLENBQXZDLENBQUwsSUFBb0csTUFBSSxDQUFKLEtBQVEsSUFBRSxLQUFLLENBQVAsRUFBUyxJQUFFLENBQUMsQ0FBRCxDQUFuQixHQUF3QixDQUFDLEtBQUcsRUFBRSxXQUFOLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLENBQTVILENBQXhEO0FBQTZNO0FBQUMsZUFBdlY7QUFBQSxrQkFBd1YsSUFBRSxJQUFFLENBQUYsR0FBSSxZQUFVO0FBQUMsb0JBQUc7QUFBQztBQUFJLGlCQUFSLENBQVEsT0FBTSxDQUFOLEVBQVE7QUFBQyxvQkFBRSxRQUFGLENBQVcsYUFBWCxJQUEwQixFQUFFLFFBQUYsQ0FBVyxhQUFYLENBQXlCLENBQXpCLEVBQTJCLEVBQUUsVUFBN0IsQ0FBMUIsRUFBbUUsSUFBRSxDQUFGLElBQUssQ0FBTCxLQUFTLE1BQUksQ0FBSixLQUFRLElBQUUsS0FBSyxDQUFQLEVBQVMsSUFBRSxDQUFDLENBQUQsQ0FBbkIsR0FBd0IsRUFBRSxVQUFGLENBQWEsQ0FBYixFQUFlLENBQWYsQ0FBakMsQ0FBbkU7QUFBdUg7QUFBQyxlQUFsZixDQUFtZixJQUFFLEdBQUYsSUFBTyxFQUFFLFFBQUYsQ0FBVyxZQUFYLEtBQTBCLEVBQUUsVUFBRixHQUFhLEVBQUUsUUFBRixDQUFXLFlBQVgsRUFBdkMsR0FBa0UsRUFBRSxVQUFGLENBQWEsQ0FBYixDQUF6RTtBQUEwRixhQUEvbEI7QUFBZ21CLGtCQUFPLEVBQUUsUUFBRixDQUFXLFVBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLEdBQVIsQ0FBWSxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sRUFBRSxDQUFGLElBQUssQ0FBTCxHQUFPLENBQWIsRUFBZSxFQUFFLFVBQWpCLENBQVosR0FBMEMsRUFBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLEdBQVIsQ0FBWSxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sRUFBRSxDQUFGLElBQUssQ0FBTCxHQUFPLENBQWIsQ0FBWixDQUExQyxFQUF1RSxFQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsR0FBUixDQUFZLEVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxFQUFFLENBQUYsSUFBSyxDQUFMLEdBQU8sQ0FBYixDQUFaLENBQXZFO0FBQW9HLFdBQTNILEVBQTZILE9BQTdILEVBQVA7QUFBOEksU0FBcnRDLEVBQXN0QyxTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLFFBQU0sQ0FBTixHQUFRLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQVIsR0FBc0IsQ0FBN0I7QUFBK0IsU0FBendDLEVBQXJRO0FBQUEsVUFBZ2hELElBQUUsRUFBbGhELENBQXFoRCxPQUFPLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFGLENBQU47QUFBQSxZQUFXLElBQUUsRUFBRSxDQUFGLENBQWIsQ0FBa0IsRUFBRSxFQUFFLENBQUYsQ0FBRixJQUFRLEVBQUUsR0FBVixFQUFjLEtBQUcsRUFBRSxHQUFGLENBQU0sWUFBVTtBQUFDLGNBQUUsQ0FBRjtBQUFJLFNBQXJCLEVBQXNCLEVBQUUsSUFBRSxDQUFKLEVBQU8sQ0FBUCxFQUFVLE9BQWhDLEVBQXdDLEVBQUUsSUFBRSxDQUFKLEVBQU8sQ0FBUCxFQUFVLE9BQWxELEVBQTBELEVBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxJQUFsRSxFQUF1RSxFQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsSUFBL0UsQ0FBakIsRUFBc0csRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLEVBQUssSUFBWCxDQUF0RyxFQUF1SCxFQUFFLEVBQUUsQ0FBRixDQUFGLElBQVEsWUFBVTtBQUFDLGlCQUFPLEVBQUUsRUFBRSxDQUFGLElBQUssTUFBUCxFQUFlLFNBQU8sQ0FBUCxHQUFTLEtBQUssQ0FBZCxHQUFnQixJQUEvQixFQUFvQyxTQUFwQyxHQUErQyxJQUF0RDtBQUEyRCxTQUFyTSxFQUFzTSxFQUFFLEVBQUUsQ0FBRixJQUFLLE1BQVAsSUFBZSxFQUFFLFFBQXZOO0FBQWdPLE9BQXpRLEdBQTJRLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBM1EsRUFBd1IsS0FBRyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxDQUEzUixFQUF1UyxDQUE5UztBQUFnVCxLQUEzMUQsRUFBNDFELE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsVUFBVSxNQUFoQjtBQUFBLFVBQXVCLElBQUUsQ0FBekI7QUFBQSxVQUEyQixJQUFFLE1BQU0sQ0FBTixDQUE3QjtBQUFBLFVBQXNDLElBQUUsRUFBRSxJQUFGLENBQU8sU0FBUCxDQUF4QztBQUFBLFVBQTBELElBQUUsRUFBRSxRQUFGLEVBQTVEO0FBQUEsVUFBeUUsSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVc7QUFBQyxlQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBRSxDQUFGLElBQUssSUFBTCxFQUFVLEVBQUUsQ0FBRixJQUFLLFVBQVUsTUFBVixHQUFpQixDQUFqQixHQUFtQixFQUFFLElBQUYsQ0FBTyxTQUFQLENBQW5CLEdBQXFDLENBQXBELEVBQXNELEVBQUUsQ0FBRixJQUFLLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBM0Q7QUFBOEUsU0FBakc7QUFBa0csT0FBekwsQ0FBMEwsSUFBRyxLQUFHLENBQUgsS0FBTyxFQUFFLENBQUYsRUFBSSxFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxFQUFhLE9BQWpCLEVBQXlCLEVBQUUsTUFBM0IsRUFBa0MsQ0FBQyxDQUFuQyxHQUFzQyxjQUFZLEVBQUUsS0FBRixFQUFaLElBQXVCLEVBQUUsRUFBRSxDQUFGLEtBQU0sRUFBRSxDQUFGLEVBQUssSUFBYixDQUFwRSxDQUFILEVBQTJGLE9BQU8sRUFBRSxJQUFGLEVBQVAsQ0FBZ0IsT0FBTSxHQUFOO0FBQVUsVUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksRUFBRSxNQUFkO0FBQVYsT0FBZ0MsT0FBTyxFQUFFLE9BQUYsRUFBUDtBQUFtQixLQUFyc0UsRUFBVCxFQUFpdEUsSUFBSSxJQUFFLHdEQUFOLENBQStELEVBQUUsUUFBRixDQUFXLGFBQVgsR0FBeUIsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxPQUFGLElBQVcsRUFBRSxPQUFGLENBQVUsSUFBckIsSUFBMkIsQ0FBM0IsSUFBOEIsRUFBRSxJQUFGLENBQU8sRUFBRSxJQUFULENBQTlCLElBQThDLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBZSxnQ0FBOEIsRUFBRSxPQUEvQyxFQUF1RCxFQUFFLEtBQXpELEVBQStELENBQS9ELENBQTlDO0FBQWdILEdBQXZKLEVBQXdKLEVBQUUsY0FBRixHQUFpQixVQUFTLENBQVQsRUFBVztBQUFDLE1BQUUsVUFBRixDQUFhLFlBQVU7QUFBQyxZQUFNLENBQU47QUFBUSxLQUFoQztBQUFrQyxHQUF2TixDQUF3TixJQUFJLElBQUUsRUFBRSxRQUFGLEVBQU4sQ0FBbUIsRUFBRSxFQUFGLENBQUssS0FBTCxHQUFXLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVUsT0FBVixFQUFtQixVQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsY0FBRixDQUFpQixDQUFqQjtBQUFvQixLQUFuRCxHQUFxRCxJQUE1RDtBQUFpRSxHQUF4RixFQUF5RixFQUFFLE1BQUYsQ0FBUyxFQUFDLFNBQVEsQ0FBQyxDQUFWLEVBQVksV0FBVSxDQUF0QixFQUF3QixPQUFNLGVBQVMsQ0FBVCxFQUFXO0FBQUMsT0FBQyxDQUFDLENBQUQsS0FBSyxDQUFMLEdBQU8sRUFBRSxFQUFFLFNBQVgsR0FBcUIsRUFBRSxPQUF4QixNQUFtQyxFQUFFLE9BQUYsR0FBVSxDQUFDLENBQVgsRUFBYSxDQUFDLENBQUQsS0FBSyxDQUFMLElBQVEsRUFBRSxFQUFFLFNBQUosR0FBYyxDQUF0QixJQUF5QixFQUFFLFdBQUYsQ0FBYyxDQUFkLEVBQWdCLENBQUMsQ0FBRCxDQUFoQixDQUF6RTtBQUErRixLQUF6SSxFQUFULENBQXpGLEVBQThPLEVBQUUsS0FBRixDQUFRLElBQVIsR0FBYSxFQUFFLElBQTdQLENBQWtRLFNBQVMsQ0FBVCxHQUFZO0FBQUMsTUFBRSxtQkFBRixDQUFzQixrQkFBdEIsRUFBeUMsQ0FBekMsR0FBNEMsRUFBRSxtQkFBRixDQUFzQixNQUF0QixFQUE2QixDQUE3QixDQUE1QyxFQUE0RSxFQUFFLEtBQUYsRUFBNUU7QUFBc0Ysa0JBQWEsRUFBRSxVQUFmLElBQTJCLGNBQVksRUFBRSxVQUFkLElBQTBCLENBQUMsRUFBRSxlQUFGLENBQWtCLFFBQXhFLEdBQWlGLEVBQUUsVUFBRixDQUFhLEVBQUUsS0FBZixDQUFqRixJQUF3RyxFQUFFLGdCQUFGLENBQW1CLGtCQUFuQixFQUFzQyxDQUF0QyxHQUF5QyxFQUFFLGdCQUFGLENBQW1CLE1BQW5CLEVBQTBCLENBQTFCLENBQWpKLEVBQStLLElBQUksSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCO0FBQUMsUUFBSSxJQUFFLENBQU47QUFBQSxRQUFRLElBQUUsRUFBRSxNQUFaO0FBQUEsUUFBbUIsSUFBRSxRQUFNLENBQTNCLENBQTZCLElBQUcsYUFBVyxFQUFFLENBQUYsQ0FBZCxFQUFtQjtBQUFDLFVBQUUsQ0FBQyxDQUFILENBQUssS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFVBQUUsQ0FBRixFQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsRUFBRSxDQUFGLENBQVIsRUFBYSxDQUFDLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFBWDtBQUFnQyxLQUF6RCxNQUE4RCxJQUFHLEtBQUssQ0FBTCxLQUFTLENBQVQsS0FBYSxJQUFFLENBQUMsQ0FBSCxFQUFLLEVBQUUsQ0FBRixNQUFPLElBQUUsQ0FBQyxDQUFWLENBQUwsRUFBa0IsTUFBSSxLQUFHLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxDQUFULEdBQVksSUFBRSxJQUFqQixLQUF3QixJQUFFLENBQUYsRUFBSSxJQUFFLFdBQVMsQ0FBVCxFQUFXLEdBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksQ0FBWixDQUFQO0FBQXNCLEtBQXBFLENBQUosQ0FBbEIsRUFBNkYsQ0FBMUcsQ0FBSCxFQUFnSCxPQUFLLElBQUUsQ0FBUCxFQUFTLEdBQVQ7QUFBYSxRQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sQ0FBUCxFQUFTLElBQUUsQ0FBRixHQUFJLEVBQUUsSUFBRixDQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksQ0FBWixFQUFjLEVBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxDQUFQLENBQWQsQ0FBYjtBQUFiLEtBQW9ELE9BQU8sSUFBRSxDQUFGLEdBQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUYsR0FBWSxJQUFFLEVBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxDQUFQLENBQUYsR0FBWSxDQUFuQztBQUFxQyxHQUFsVTtBQUFBLE1BQW1VLElBQUUsT0FBclU7QUFBQSxNQUE2VSxJQUFFLFdBQS9VLENBQTJWLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxXQUFPLEVBQUUsV0FBRixFQUFQO0FBQXVCLFlBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFdBQU8sRUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLEtBQVosRUFBbUIsT0FBbkIsQ0FBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsQ0FBUDtBQUF1QyxPQUFJLElBQUUsU0FBRixDQUFFLENBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxNQUFJLEVBQUUsUUFBTixJQUFnQixNQUFJLEVBQUUsUUFBdEIsSUFBZ0MsQ0FBQyxDQUFDLEVBQUUsUUFBM0M7QUFBb0QsR0FBdEUsQ0FBdUUsU0FBUyxDQUFULEdBQVk7QUFBQyxTQUFLLE9BQUwsR0FBYSxFQUFFLE9BQUYsR0FBVSxFQUFFLEdBQUYsRUFBdkI7QUFBK0IsS0FBRSxHQUFGLEdBQU0sQ0FBTixFQUFRLEVBQUUsU0FBRixHQUFZLEVBQUMsT0FBTSxlQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLEtBQUssT0FBUCxDQUFOLENBQXNCLE9BQU8sTUFBSSxJQUFFLEVBQUYsRUFBSyxFQUFFLENBQUYsTUFBTyxFQUFFLFFBQUYsR0FBVyxFQUFFLEtBQUssT0FBUCxJQUFnQixDQUEzQixHQUE2QixPQUFPLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsS0FBSyxPQUE3QixFQUFxQyxFQUFDLE9BQU0sQ0FBUCxFQUFTLGNBQWEsQ0FBQyxDQUF2QixFQUFyQyxDQUFwQyxDQUFULEdBQStHLENBQXRIO0FBQXdILEtBQWpLLEVBQWtLLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sSUFBRSxLQUFLLEtBQUwsQ0FBVyxDQUFYLENBQVIsQ0FBc0IsSUFBRyxZQUFVLE9BQU8sQ0FBcEIsRUFBc0IsRUFBRSxFQUFFLENBQUYsQ0FBRixJQUFRLENBQVIsQ0FBdEIsS0FBcUMsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFVBQUUsRUFBRSxDQUFGLENBQUYsSUFBUSxFQUFFLENBQUYsQ0FBUjtBQUFYLE9BQXdCLE9BQU8sQ0FBUDtBQUFTLEtBQWxSLEVBQW1SLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFYLEdBQXlCLEVBQUUsS0FBSyxPQUFQLEtBQWlCLEVBQUUsS0FBSyxPQUFQLEVBQWdCLEVBQUUsQ0FBRixDQUFoQixDQUFqRDtBQUF1RSxLQUE1VyxFQUE2VyxRQUFPLGdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxLQUFLLENBQUwsS0FBUyxDQUFULElBQVksS0FBRyxZQUFVLE9BQU8sQ0FBcEIsSUFBdUIsS0FBSyxDQUFMLEtBQVMsQ0FBNUMsR0FBOEMsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBOUMsSUFBNkQsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEdBQWdCLEtBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxDQUFYLEdBQWEsQ0FBMUYsQ0FBUDtBQUFvRyxLQUF4ZSxFQUF5ZSxRQUFPLGdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLElBQUUsRUFBRSxLQUFLLE9BQVAsQ0FBUixDQUF3QixJQUFHLEtBQUssQ0FBTCxLQUFTLENBQVosRUFBYztBQUFDLFlBQUcsS0FBSyxDQUFMLEtBQVMsQ0FBWixFQUFjO0FBQUMsY0FBRSxDQUFDLElBQUUsTUFBTSxPQUFOLENBQWMsQ0FBZCxJQUFpQixFQUFFLEdBQUYsQ0FBTSxDQUFOLENBQWpCLEdBQTBCLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBSCxLQUFXLENBQVgsR0FBYSxDQUFDLENBQUQsQ0FBYixHQUFpQixFQUFFLEtBQUYsQ0FBUSxDQUFSLEtBQVksRUFBMUQsRUFBOEQsTUFBaEUsQ0FBdUUsT0FBTSxHQUFOO0FBQVUsbUJBQU8sRUFBRSxFQUFFLENBQUYsQ0FBRixDQUFQO0FBQVY7QUFBeUIsVUFBQyxLQUFLLENBQUwsS0FBUyxDQUFULElBQVksRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQWIsTUFBbUMsRUFBRSxRQUFGLEdBQVcsRUFBRSxLQUFLLE9BQVAsSUFBZ0IsS0FBSyxDQUFoQyxHQUFrQyxPQUFPLEVBQUUsS0FBSyxPQUFQLENBQTVFO0FBQTZGO0FBQUMsS0FBbHZCLEVBQW12QixTQUFRLGlCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLEtBQUssT0FBUCxDQUFOLENBQXNCLE9BQU8sS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLENBQUMsRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQXBCO0FBQXVDLEtBQXAwQixFQUFwQixDQUEwMUIsSUFBSSxJQUFFLElBQUksQ0FBSixFQUFOO0FBQUEsTUFBWSxJQUFFLElBQUksQ0FBSixFQUFkO0FBQUEsTUFBb0IsSUFBRSwrQkFBdEI7QUFBQSxNQUFzRCxLQUFHLFFBQXpELENBQWtFLFNBQVMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLFdBQU0sV0FBUyxDQUFULElBQVksWUFBVSxDQUFWLEtBQWMsV0FBUyxDQUFULEdBQVcsSUFBWCxHQUFnQixNQUFJLENBQUMsQ0FBRCxHQUFHLEVBQVAsR0FBVSxDQUFDLENBQVgsR0FBYSxFQUFFLElBQUYsQ0FBTyxDQUFQLElBQVUsS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFWLEdBQXdCLENBQW5FLENBQWxCO0FBQXdGLFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCO0FBQUMsUUFBSSxDQUFKLENBQU0sSUFBRyxLQUFLLENBQUwsS0FBUyxDQUFULElBQVksTUFBSSxFQUFFLFFBQXJCLEVBQThCLElBQUcsSUFBRSxVQUFRLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYSxLQUFiLEVBQW9CLFdBQXBCLEVBQVYsRUFBNEMsWUFBVSxRQUFPLElBQUUsRUFBRSxZQUFGLENBQWUsQ0FBZixDQUFULENBQXpELEVBQXFGO0FBQUMsVUFBRztBQUFDLFlBQUUsR0FBRyxDQUFILENBQUY7QUFBUSxPQUFaLENBQVksT0FBTSxDQUFOLEVBQVEsQ0FBRSxHQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVY7QUFBYSxLQUF6SCxNQUE4SCxJQUFFLEtBQUssQ0FBUCxDQUFTLE9BQU8sQ0FBUDtBQUFTLEtBQUUsTUFBRixDQUFTLEVBQUMsU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsT0FBRixDQUFVLENBQVYsS0FBYyxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQXJCO0FBQWtDLEtBQXZELEVBQXdELE1BQUssY0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQVA7QUFBdUIsS0FBcEcsRUFBcUcsWUFBVyxvQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVg7QUFBYyxLQUE1SSxFQUE2SSxPQUFNLGVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixDQUFQO0FBQXVCLEtBQTFMLEVBQTJMLGFBQVkscUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYO0FBQWMsS0FBbk8sRUFBVCxHQUErTyxFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsSUFBRSxLQUFLLENBQUwsQ0FBWjtBQUFBLFVBQW9CLElBQUUsS0FBRyxFQUFFLFVBQTNCLENBQXNDLElBQUcsS0FBSyxDQUFMLEtBQVMsQ0FBWixFQUFjO0FBQUMsWUFBRyxLQUFLLE1BQUwsS0FBYyxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sQ0FBRixFQUFXLE1BQUksRUFBRSxRQUFOLElBQWdCLENBQUMsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLGNBQVIsQ0FBMUMsQ0FBSCxFQUFzRTtBQUFDLGNBQUUsRUFBRSxNQUFKLENBQVcsT0FBTSxHQUFOO0FBQVUsY0FBRSxDQUFGLEtBQU0sTUFBSSxDQUFDLElBQUUsRUFBRSxDQUFGLEVBQUssSUFBUixFQUFjLE9BQWQsQ0FBc0IsT0FBdEIsQ0FBVixLQUEyQyxJQUFFLEVBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFGLENBQUYsRUFBZ0IsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLEVBQUUsQ0FBRixDQUFQLENBQTNEO0FBQVYsV0FBbUYsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLGNBQVIsRUFBdUIsQ0FBQyxDQUF4QjtBQUEyQixnQkFBTyxDQUFQO0FBQVMsY0FBTSxvQkFBaUIsQ0FBakIseUNBQWlCLENBQWpCLEtBQW1CLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxVQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsQ0FBWDtBQUFjLE9BQW5DLENBQW5CLEdBQXdELEVBQUUsSUFBRixFQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxDQUFKLENBQU0sSUFBRyxLQUFHLEtBQUssQ0FBTCxLQUFTLENBQWYsRUFBaUI7QUFBQyxjQUFHLEtBQUssQ0FBTCxNQUFVLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBWixDQUFILEVBQTJCLE9BQU8sQ0FBUCxDQUFTLElBQUcsS0FBSyxDQUFMLE1BQVUsSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLENBQVosQ0FBSCxFQUF3QixPQUFPLENBQVA7QUFBUyxTQUF2RixNQUE0RixLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsWUFBRSxHQUFGLENBQU0sSUFBTixFQUFXLENBQVgsRUFBYSxDQUFiO0FBQWdCLFNBQXJDO0FBQXVDLE9BQTVKLEVBQTZKLElBQTdKLEVBQWtLLENBQWxLLEVBQW9LLFVBQVUsTUFBVixHQUFpQixDQUFyTCxFQUF1TCxJQUF2TCxFQUE0TCxDQUFDLENBQTdMLENBQTlEO0FBQThQLEtBQWhoQixFQUFpaEIsWUFBVyxvQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxVQUFFLE1BQUYsQ0FBUyxJQUFULEVBQWMsQ0FBZDtBQUFpQixPQUF0QyxDQUFQO0FBQStDLEtBQXZsQixFQUFaLENBQS9PLEVBQXExQixFQUFFLE1BQUYsQ0FBUyxFQUFDLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSixDQUFNLElBQUcsQ0FBSCxFQUFLLE9BQU8sSUFBRSxDQUFDLEtBQUcsSUFBSixJQUFVLE9BQVosRUFBb0IsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUF0QixFQUFpQyxNQUFJLENBQUMsQ0FBRCxJQUFJLE1BQU0sT0FBTixDQUFjLENBQWQsQ0FBSixHQUFxQixJQUFFLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFiLENBQXZCLEdBQW9ELEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBeEQsQ0FBakMsRUFBb0csS0FBRyxFQUE5RztBQUFpSCxLQUFuSixFQUFvSixTQUFRLGlCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFFLEtBQUcsSUFBTCxDQUFVLElBQUksSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFOO0FBQUEsVUFBbUIsSUFBRSxFQUFFLE1BQXZCO0FBQUEsVUFBOEIsSUFBRSxFQUFFLEtBQUYsRUFBaEM7QUFBQSxVQUEwQyxJQUFFLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBNUM7QUFBQSxVQUErRCxJQUFFLFNBQUYsQ0FBRSxHQUFVO0FBQUMsVUFBRSxPQUFGLENBQVUsQ0FBVixFQUFZLENBQVo7QUFBZSxPQUEzRixDQUE0RixpQkFBZSxDQUFmLEtBQW1CLElBQUUsRUFBRSxLQUFGLEVBQUYsRUFBWSxHQUEvQixHQUFvQyxNQUFJLFNBQU8sQ0FBUCxJQUFVLEVBQUUsT0FBRixDQUFVLFlBQVYsQ0FBVixFQUFrQyxPQUFPLEVBQUUsSUFBM0MsRUFBZ0QsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLENBQXBELENBQXBDLEVBQXVHLENBQUMsQ0FBRCxJQUFJLENBQUosSUFBTyxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQTlHO0FBQTZILEtBQTdZLEVBQThZLGFBQVkscUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksSUFBRSxJQUFFLFlBQVIsQ0FBcUIsT0FBTyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixLQUFZLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsRUFBQyxPQUFNLEVBQUUsU0FBRixDQUFZLGFBQVosRUFBMkIsR0FBM0IsQ0FBK0IsWUFBVTtBQUFDLFlBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFDLElBQUUsT0FBSCxFQUFXLENBQVgsQ0FBWDtBQUEwQixTQUFwRSxDQUFQLEVBQWIsQ0FBbkI7QUFBK0csS0FBNWlCLEVBQVQsQ0FBcjFCLEVBQTY0QyxFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxPQUFNLGVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksSUFBRSxDQUFOLENBQVEsT0FBTSxZQUFVLE9BQU8sQ0FBakIsS0FBcUIsSUFBRSxDQUFGLEVBQUksSUFBRSxJQUFOLEVBQVcsR0FBaEMsR0FBcUMsVUFBVSxNQUFWLEdBQWlCLENBQWpCLEdBQW1CLEVBQUUsS0FBRixDQUFRLEtBQUssQ0FBTCxDQUFSLEVBQWdCLENBQWhCLENBQW5CLEdBQXNDLEtBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxJQUFYLEdBQWdCLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxZQUFJLElBQUUsRUFBRSxLQUFGLENBQVEsSUFBUixFQUFhLENBQWIsRUFBZSxDQUFmLENBQU4sQ0FBd0IsRUFBRSxXQUFGLENBQWMsSUFBZCxFQUFtQixDQUFuQixHQUFzQixTQUFPLENBQVAsSUFBVSxpQkFBZSxFQUFFLENBQUYsQ0FBekIsSUFBK0IsRUFBRSxPQUFGLENBQVUsSUFBVixFQUFlLENBQWYsQ0FBckQ7QUFBdUUsT0FBcEgsQ0FBakc7QUFBdU4sS0FBcFAsRUFBcVAsU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxVQUFFLE9BQUYsQ0FBVSxJQUFWLEVBQWUsQ0FBZjtBQUFrQixPQUF2QyxDQUFQO0FBQWdELEtBQXpULEVBQTBULFlBQVcsb0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFHLElBQWQsRUFBbUIsRUFBbkIsQ0FBUDtBQUE4QixLQUEvVyxFQUFnWCxTQUFRLGlCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLElBQUUsQ0FBUjtBQUFBLFVBQVUsSUFBRSxFQUFFLFFBQUYsRUFBWjtBQUFBLFVBQXlCLElBQUUsSUFBM0I7QUFBQSxVQUFnQyxJQUFFLEtBQUssTUFBdkM7QUFBQSxVQUE4QyxJQUFFLFNBQUYsQ0FBRSxHQUFVO0FBQUMsVUFBRSxDQUFGLElBQUssRUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFnQixDQUFDLENBQUQsQ0FBaEIsQ0FBTDtBQUEwQixPQUFyRixDQUFzRixZQUFVLE9BQU8sQ0FBakIsS0FBcUIsSUFBRSxDQUFGLEVBQUksSUFBRSxLQUFLLENBQWhDLEdBQW1DLElBQUUsS0FBRyxJQUF4QyxDQUE2QyxPQUFNLEdBQU47QUFBVSxTQUFDLElBQUUsRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxJQUFFLFlBQWIsQ0FBSCxLQUFnQyxFQUFFLEtBQWxDLEtBQTBDLEtBQUksRUFBRSxLQUFGLENBQVEsR0FBUixDQUFZLENBQVosQ0FBOUM7QUFBVixPQUF3RSxPQUFPLEtBQUksRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFYO0FBQXdCLEtBQXptQixFQUFaLENBQTc0QyxDQUFxZ0UsSUFBSSxLQUFHLHNDQUFzQyxNQUE3QztBQUFBLE1BQW9ELEtBQUcsSUFBSSxNQUFKLENBQVcsbUJBQWlCLEVBQWpCLEdBQW9CLGFBQS9CLEVBQTZDLEdBQTdDLENBQXZEO0FBQUEsTUFBeUcsS0FBRyxDQUFDLEtBQUQsRUFBTyxPQUFQLEVBQWUsUUFBZixFQUF3QixNQUF4QixDQUE1RztBQUFBLE1BQTRJLEtBQUcsU0FBSCxFQUFHLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFdBQU0sV0FBUyxDQUFDLElBQUUsS0FBRyxDQUFOLEVBQVMsS0FBVCxDQUFlLE9BQXhCLElBQWlDLE9BQUssRUFBRSxLQUFGLENBQVEsT0FBYixJQUFzQixFQUFFLFFBQUYsQ0FBVyxFQUFFLGFBQWIsRUFBMkIsQ0FBM0IsQ0FBdEIsSUFBcUQsV0FBUyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsU0FBUixDQUFyRztBQUF3SCxHQUFyUjtBQUFBLE1BQXNSLEtBQUcsU0FBSCxFQUFHLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFFBQUksQ0FBSjtBQUFBLFFBQU0sQ0FBTjtBQUFBLFFBQVEsSUFBRSxFQUFWLENBQWEsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFFBQUUsQ0FBRixJQUFLLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBTCxFQUFnQixFQUFFLEtBQUYsQ0FBUSxDQUFSLElBQVcsRUFBRSxDQUFGLENBQTNCO0FBQVgsS0FBMkMsSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsS0FBRyxFQUFiLENBQUYsQ0FBbUIsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFFBQUUsS0FBRixDQUFRLENBQVIsSUFBVyxFQUFFLENBQUYsQ0FBWDtBQUFYLEtBQTJCLE9BQU8sQ0FBUDtBQUFTLEdBQTFaLENBQTJaLFNBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CO0FBQUMsUUFBSSxDQUFKO0FBQUEsUUFBTSxDQUFOO0FBQUEsUUFBUSxJQUFFLEVBQVY7QUFBQSxRQUFhLElBQUUsSUFBRSxZQUFVO0FBQUMsYUFBTyxFQUFFLEdBQUYsRUFBUDtBQUFlLEtBQTVCLEdBQTZCLFlBQVU7QUFBQyxhQUFPLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsRUFBVixDQUFQO0FBQXFCLEtBQTVFO0FBQUEsUUFBNkUsSUFBRSxHQUEvRTtBQUFBLFFBQW1GLElBQUUsS0FBRyxFQUFFLENBQUYsQ0FBSCxLQUFVLEVBQUUsU0FBRixDQUFZLENBQVosSUFBZSxFQUFmLEdBQWtCLElBQTVCLENBQXJGO0FBQUEsUUFBdUgsSUFBRSxDQUFDLEVBQUUsU0FBRixDQUFZLENBQVosS0FBZ0IsU0FBTyxDQUFQLElBQVUsQ0FBQyxDQUE1QixLQUFnQyxHQUFHLElBQUgsQ0FBUSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFSLENBQXpKLENBQTZLLElBQUcsS0FBRyxFQUFFLENBQUYsTUFBTyxDQUFiLEVBQWU7QUFBQyxXQUFHLENBQUgsRUFBSyxJQUFFLEtBQUcsRUFBRSxDQUFGLENBQVYsRUFBZSxJQUFFLENBQUMsQ0FBRCxJQUFJLENBQXJCLENBQXVCLE9BQU0sR0FBTjtBQUFVLFVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksSUFBRSxDQUFkLEdBQWlCLENBQUMsSUFBRSxDQUFILEtBQU8sS0FBRyxJQUFFLE1BQUksQ0FBSixJQUFPLEVBQVosQ0FBUCxLQUF5QixDQUF6QixLQUE2QixJQUFFLENBQS9CLENBQWpCLEVBQW1ELEtBQUcsQ0FBdEQ7QUFBVixPQUFrRSxLQUFHLENBQUgsRUFBSyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLElBQUUsQ0FBZCxDQUFMLEVBQXNCLElBQUUsS0FBRyxFQUEzQjtBQUE4QixZQUFPLE1BQUksSUFBRSxDQUFDLENBQUQsSUFBSSxDQUFDLENBQUwsSUFBUSxDQUFWLEVBQVksSUFBRSxFQUFFLENBQUYsSUFBSyxJQUFFLENBQUMsRUFBRSxDQUFGLElBQUssQ0FBTixJQUFTLEVBQUUsQ0FBRixDQUFoQixHQUFxQixDQUFDLEVBQUUsQ0FBRixDQUFwQyxFQUF5QyxNQUFJLEVBQUUsSUFBRixHQUFPLENBQVAsRUFBUyxFQUFFLEtBQUYsR0FBUSxDQUFqQixFQUFtQixFQUFFLEdBQUYsR0FBTSxDQUE3QixDQUE3QyxHQUE4RSxDQUFyRjtBQUF1RixPQUFJLEtBQUcsRUFBUCxDQUFVLFNBQVMsRUFBVCxDQUFZLENBQVosRUFBYztBQUFDLFFBQUksQ0FBSjtBQUFBLFFBQU0sSUFBRSxFQUFFLGFBQVY7QUFBQSxRQUF3QixJQUFFLEVBQUUsUUFBNUI7QUFBQSxRQUFxQyxJQUFFLEdBQUcsQ0FBSCxDQUF2QyxDQUE2QyxPQUFPLE1BQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxXQUFQLENBQW1CLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFuQixDQUFGLEVBQXlDLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFNBQVIsQ0FBM0MsRUFBOEQsRUFBRSxVQUFGLENBQWEsV0FBYixDQUF5QixDQUF6QixDQUE5RCxFQUEwRixXQUFTLENBQVQsS0FBYSxJQUFFLE9BQWYsQ0FBMUYsRUFBa0gsR0FBRyxDQUFILElBQU0sQ0FBeEgsRUFBMEgsQ0FBOUgsQ0FBUDtBQUF3SSxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFNBQUksSUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLElBQUUsRUFBVixFQUFhLElBQUUsQ0FBZixFQUFpQixJQUFFLEVBQUUsTUFBekIsRUFBZ0MsSUFBRSxDQUFsQyxFQUFvQyxHQUFwQztBQUF3QyxPQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsRUFBUyxLQUFULEtBQWlCLElBQUUsRUFBRSxLQUFGLENBQVEsT0FBVixFQUFrQixLQUFHLFdBQVMsQ0FBVCxLQUFhLEVBQUUsQ0FBRixJQUFLLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxTQUFSLEtBQW9CLElBQXpCLEVBQThCLEVBQUUsQ0FBRixNQUFPLEVBQUUsS0FBRixDQUFRLE9BQVIsR0FBZ0IsRUFBdkIsQ0FBM0MsR0FBdUUsT0FBSyxFQUFFLEtBQUYsQ0FBUSxPQUFiLElBQXNCLEdBQUcsQ0FBSCxDQUF0QixLQUE4QixFQUFFLENBQUYsSUFBSyxHQUFHLENBQUgsQ0FBbkMsQ0FBMUUsSUFBcUgsV0FBUyxDQUFULEtBQWEsRUFBRSxDQUFGLElBQUssTUFBTCxFQUFZLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxTQUFSLEVBQWtCLENBQWxCLENBQXpCLENBQXhKO0FBQXhDLEtBQWdQLEtBQUksSUFBRSxDQUFOLEVBQVEsSUFBRSxDQUFWLEVBQVksR0FBWjtBQUFnQixjQUFNLEVBQUUsQ0FBRixDQUFOLEtBQWEsRUFBRSxDQUFGLEVBQUssS0FBTCxDQUFXLE9BQVgsR0FBbUIsRUFBRSxDQUFGLENBQWhDO0FBQWhCLEtBQXNELE9BQU8sQ0FBUDtBQUFTLEtBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLE1BQUssZ0JBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLENBQUMsQ0FBVCxDQUFQO0FBQW1CLEtBQXBDLEVBQXFDLE1BQUssZ0JBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSCxDQUFQO0FBQWdCLEtBQXJFLEVBQXNFLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTSxhQUFXLE9BQU8sQ0FBbEIsR0FBb0IsSUFBRSxLQUFLLElBQUwsRUFBRixHQUFjLEtBQUssSUFBTCxFQUFsQyxHQUE4QyxLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsV0FBRyxJQUFILElBQVMsRUFBRSxJQUFGLEVBQVEsSUFBUixFQUFULEdBQXdCLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBeEI7QUFBdUMsT0FBNUQsQ0FBcEQ7QUFBa0gsS0FBM00sRUFBWixFQUEwTixJQUFJLEtBQUcsdUJBQVA7QUFBQSxNQUErQixLQUFHLGdDQUFsQztBQUFBLE1BQW1FLEtBQUcsb0NBQXRFO0FBQUEsTUFBMkcsS0FBRyxFQUFDLFFBQU8sQ0FBQyxDQUFELEVBQUcsOEJBQUgsRUFBa0MsV0FBbEMsQ0FBUixFQUF1RCxPQUFNLENBQUMsQ0FBRCxFQUFHLFNBQUgsRUFBYSxVQUFiLENBQTdELEVBQXNGLEtBQUksQ0FBQyxDQUFELEVBQUcsbUJBQUgsRUFBdUIscUJBQXZCLENBQTFGLEVBQXdJLElBQUcsQ0FBQyxDQUFELEVBQUcsZ0JBQUgsRUFBb0Isa0JBQXBCLENBQTNJLEVBQW1MLElBQUcsQ0FBQyxDQUFELEVBQUcsb0JBQUgsRUFBd0IsdUJBQXhCLENBQXRMLEVBQXVPLFVBQVMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sQ0FBaFAsRUFBOUcsQ0FBeVcsR0FBRyxRQUFILEdBQVksR0FBRyxNQUFmLEVBQXNCLEdBQUcsS0FBSCxHQUFTLEdBQUcsS0FBSCxHQUFTLEdBQUcsUUFBSCxHQUFZLEdBQUcsT0FBSCxHQUFXLEdBQUcsS0FBbEUsRUFBd0UsR0FBRyxFQUFILEdBQU0sR0FBRyxFQUFqRixDQUFvRixTQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFFBQUksQ0FBSixDQUFNLE9BQU8sSUFBRSxlQUFhLE9BQU8sRUFBRSxvQkFBdEIsR0FBMkMsRUFBRSxvQkFBRixDQUF1QixLQUFHLEdBQTFCLENBQTNDLEdBQTBFLGVBQWEsT0FBTyxFQUFFLGdCQUF0QixHQUF1QyxFQUFFLGdCQUFGLENBQW1CLEtBQUcsR0FBdEIsQ0FBdkMsR0FBa0UsRUFBOUksRUFBaUosS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLEtBQUcsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFmLEdBQXNCLEVBQUUsS0FBRixDQUFRLENBQUMsQ0FBRCxDQUFSLEVBQVksQ0FBWixDQUF0QixHQUFxQyxDQUE3TDtBQUErTCxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFNBQUksSUFBSSxJQUFFLENBQU4sRUFBUSxJQUFFLEVBQUUsTUFBaEIsRUFBdUIsSUFBRSxDQUF6QixFQUEyQixHQUEzQjtBQUErQixRQUFFLEdBQUYsQ0FBTSxFQUFFLENBQUYsQ0FBTixFQUFXLFlBQVgsRUFBd0IsQ0FBQyxDQUFELElBQUksRUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBVyxZQUFYLENBQTVCO0FBQS9CO0FBQXFGLE9BQUksS0FBRyxXQUFQLENBQW1CLFNBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCO0FBQUMsU0FBSSxJQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixJQUFFLEVBQUUsc0JBQUYsRUFBbEIsRUFBNkMsSUFBRSxFQUEvQyxFQUFrRCxJQUFFLENBQXBELEVBQXNELElBQUUsRUFBRSxNQUE5RCxFQUFxRSxJQUFFLENBQXZFLEVBQXlFLEdBQXpFO0FBQTZFLFVBQUcsQ0FBQyxJQUFFLEVBQUUsQ0FBRixDQUFILEtBQVUsTUFBSSxDQUFqQixFQUFtQixJQUFHLGFBQVcsRUFBRSxDQUFGLENBQWQsRUFBbUIsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLEVBQUUsUUFBRixHQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWUsQ0FBekIsRUFBbkIsS0FBb0QsSUFBRyxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQUgsRUFBYztBQUFDLFlBQUUsS0FBRyxFQUFFLFdBQUYsQ0FBYyxFQUFFLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBZCxDQUFMLEVBQTJDLElBQUUsQ0FBQyxHQUFHLElBQUgsQ0FBUSxDQUFSLEtBQVksQ0FBQyxFQUFELEVBQUksRUFBSixDQUFiLEVBQXNCLENBQXRCLEVBQXlCLFdBQXpCLEVBQTdDLEVBQW9GLElBQUUsR0FBRyxDQUFILEtBQU8sR0FBRyxRQUFoRyxFQUF5RyxFQUFFLFNBQUYsR0FBWSxFQUFFLENBQUYsSUFBSyxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBTCxHQUF3QixFQUFFLENBQUYsQ0FBN0ksRUFBa0osSUFBRSxFQUFFLENBQUYsQ0FBcEosQ0FBeUosT0FBTSxHQUFOO0FBQVUsY0FBRSxFQUFFLFNBQUo7QUFBVixTQUF3QixFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxVQUFaLEdBQXdCLENBQUMsSUFBRSxFQUFFLFVBQUwsRUFBaUIsV0FBakIsR0FBNkIsRUFBckQ7QUFBd0QsT0FBeFAsTUFBNlAsRUFBRSxJQUFGLENBQU8sRUFBRSxjQUFGLENBQWlCLENBQWpCLENBQVA7QUFBalosS0FBNmEsRUFBRSxXQUFGLEdBQWMsRUFBZCxFQUFpQixJQUFFLENBQW5CLENBQXFCLE9BQU0sSUFBRSxFQUFFLEdBQUYsQ0FBUjtBQUFlLFVBQUcsS0FBRyxFQUFFLE9BQUYsQ0FBVSxDQUFWLEVBQVksQ0FBWixJQUFlLENBQUMsQ0FBdEIsRUFBd0IsS0FBRyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQUgsQ0FBeEIsS0FBMEMsSUFBRyxJQUFFLEVBQUUsUUFBRixDQUFXLEVBQUUsYUFBYixFQUEyQixDQUEzQixDQUFGLEVBQWdDLElBQUUsR0FBRyxFQUFFLFdBQUYsQ0FBYyxDQUFkLENBQUgsRUFBb0IsUUFBcEIsQ0FBbEMsRUFBZ0UsS0FBRyxHQUFHLENBQUgsQ0FBbkUsRUFBeUUsQ0FBNUUsRUFBOEU7QUFBQyxZQUFFLENBQUYsQ0FBSSxPQUFNLElBQUUsRUFBRSxHQUFGLENBQVI7QUFBZSxhQUFHLElBQUgsQ0FBUSxFQUFFLElBQUYsSUFBUSxFQUFoQixLQUFxQixFQUFFLElBQUYsQ0FBTyxDQUFQLENBQXJCO0FBQWY7QUFBOEM7QUFBMUwsS0FBMEwsT0FBTyxDQUFQO0FBQVMsSUFBQyxZQUFVO0FBQUMsUUFBSSxJQUFFLEVBQUUsc0JBQUYsR0FBMkIsV0FBM0IsQ0FBdUMsRUFBRSxhQUFGLENBQWdCLEtBQWhCLENBQXZDLENBQU47QUFBQSxRQUFxRSxJQUFFLEVBQUUsYUFBRixDQUFnQixPQUFoQixDQUF2RSxDQUFnRyxFQUFFLFlBQUYsQ0FBZSxNQUFmLEVBQXNCLE9BQXRCLEdBQStCLEVBQUUsWUFBRixDQUFlLFNBQWYsRUFBeUIsU0FBekIsQ0FBL0IsRUFBbUUsRUFBRSxZQUFGLENBQWUsTUFBZixFQUFzQixHQUF0QixDQUFuRSxFQUE4RixFQUFFLFdBQUYsQ0FBYyxDQUFkLENBQTlGLEVBQStHLEVBQUUsVUFBRixHQUFhLEVBQUUsU0FBRixDQUFZLENBQUMsQ0FBYixFQUFnQixTQUFoQixDQUEwQixDQUFDLENBQTNCLEVBQThCLFNBQTlCLENBQXdDLE9BQXBLLEVBQTRLLEVBQUUsU0FBRixHQUFZLHdCQUF4TCxFQUFpTixFQUFFLGNBQUYsR0FBaUIsQ0FBQyxDQUFDLEVBQUUsU0FBRixDQUFZLENBQUMsQ0FBYixFQUFnQixTQUFoQixDQUEwQixZQUE5UDtBQUEyUSxHQUF0WCxFQUFELENBQTBYLElBQUksS0FBRyxFQUFFLGVBQVQ7QUFBQSxNQUF5QixLQUFHLE1BQTVCO0FBQUEsTUFBbUMsS0FBRyxnREFBdEM7QUFBQSxNQUF1RixLQUFHLHFCQUExRixDQUFnSCxTQUFTLEVBQVQsR0FBYTtBQUFDLFdBQU0sQ0FBQyxDQUFQO0FBQVMsWUFBUyxFQUFULEdBQWE7QUFBQyxXQUFNLENBQUMsQ0FBUDtBQUFTLFlBQVMsRUFBVCxHQUFhO0FBQUMsUUFBRztBQUFDLGFBQU8sRUFBRSxhQUFUO0FBQXVCLEtBQTNCLENBQTJCLE9BQU0sQ0FBTixFQUFRLENBQUU7QUFBQyxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUF0QixFQUF3QjtBQUFDLFFBQUksQ0FBSixFQUFNLENBQU4sQ0FBUSxJQUFHLG9CQUFpQixDQUFqQix5Q0FBaUIsQ0FBakIsRUFBSCxFQUFzQjtBQUFDLGtCQUFVLE9BQU8sQ0FBakIsS0FBcUIsSUFBRSxLQUFHLENBQUwsRUFBTyxJQUFFLEtBQUssQ0FBbkMsRUFBc0MsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLEVBQUUsQ0FBRixDQUFYLEVBQWdCLENBQWhCO0FBQVgsT0FBOEIsT0FBTyxDQUFQO0FBQVMsU0FBRyxRQUFNLENBQU4sSUFBUyxRQUFNLENBQWYsSUFBa0IsSUFBRSxDQUFGLEVBQUksSUFBRSxJQUFFLEtBQUssQ0FBL0IsSUFBa0MsUUFBTSxDQUFOLEtBQVUsWUFBVSxPQUFPLENBQWpCLElBQW9CLElBQUUsQ0FBRixFQUFJLElBQUUsS0FBSyxDQUEvQixLQUFtQyxJQUFFLENBQUYsRUFBSSxJQUFFLENBQU4sRUFBUSxJQUFFLEtBQUssQ0FBbEQsQ0FBVixDQUFsQyxFQUFrRyxDQUFDLENBQUQsS0FBSyxDQUExRyxFQUE0RyxJQUFFLEVBQUYsQ0FBNUcsS0FBc0gsSUFBRyxDQUFDLENBQUosRUFBTSxPQUFPLENBQVAsQ0FBUyxPQUFPLE1BQUksQ0FBSixLQUFRLElBQUUsQ0FBRixFQUFJLENBQUMsSUFBRSxXQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sSUFBSSxHQUFKLENBQVEsQ0FBUixHQUFXLEVBQUUsS0FBRixDQUFRLElBQVIsRUFBYSxTQUFiLENBQWxCO0FBQTBDLEtBQXpELEVBQTJELElBQTNELEdBQWdFLEVBQUUsSUFBRixLQUFTLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixFQUFoQixDQUE1RSxHQUF1RyxFQUFFLElBQUYsQ0FBTyxZQUFVO0FBQUMsUUFBRSxLQUFGLENBQVEsR0FBUixDQUFZLElBQVosRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsQ0FBdkI7QUFBMEIsS0FBNUMsQ0FBOUc7QUFBNEosS0FBRSxLQUFGLEdBQVEsRUFBQyxRQUFPLEVBQVIsRUFBVyxLQUFJLGFBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQjtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsQ0FBVjtBQUFBLFVBQVksQ0FBWjtBQUFBLFVBQWMsQ0FBZDtBQUFBLFVBQWdCLENBQWhCO0FBQUEsVUFBa0IsQ0FBbEI7QUFBQSxVQUFvQixDQUFwQjtBQUFBLFVBQXNCLENBQXRCO0FBQUEsVUFBd0IsQ0FBeEI7QUFBQSxVQUEwQixJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sQ0FBNUIsQ0FBcUMsSUFBRyxDQUFILEVBQUs7QUFBQyxVQUFFLE9BQUYsS0FBWSxJQUFFLENBQUMsSUFBRSxDQUFILEVBQU0sT0FBUixFQUFnQixJQUFFLEVBQUUsUUFBaEMsR0FBMEMsS0FBRyxFQUFFLElBQUYsQ0FBTyxlQUFQLENBQXVCLEVBQXZCLEVBQTBCLENBQTFCLENBQTdDLEVBQTBFLEVBQUUsSUFBRixLQUFTLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixFQUFoQixDQUExRSxFQUFvRyxDQUFDLElBQUUsRUFBRSxNQUFMLE1BQWUsSUFBRSxFQUFFLE1BQUYsR0FBUyxFQUExQixDQUFwRyxFQUFrSSxDQUFDLElBQUUsRUFBRSxNQUFMLE1BQWUsSUFBRSxFQUFFLE1BQUYsR0FBUyxVQUFTLENBQVQsRUFBVztBQUFDLGlCQUFNLGVBQWEsT0FBTyxDQUFwQixJQUF1QixFQUFFLEtBQUYsQ0FBUSxTQUFSLEtBQW9CLEVBQUUsSUFBN0MsR0FBa0QsRUFBRSxLQUFGLENBQVEsUUFBUixDQUFpQixLQUFqQixDQUF1QixDQUF2QixFQUF5QixTQUF6QixDQUFsRCxHQUFzRixLQUFLLENBQWpHO0FBQW1HLFNBQXpJLENBQWxJLEVBQTZRLElBQUUsQ0FBQyxJQUFFLENBQUMsS0FBRyxFQUFKLEVBQVEsS0FBUixDQUFjLENBQWQsS0FBa0IsQ0FBQyxFQUFELENBQXJCLEVBQTJCLE1BQTFTLENBQWlULE9BQU0sR0FBTjtBQUFVLGNBQUUsSUFBRSxDQUFDLElBQUUsR0FBRyxJQUFILENBQVEsRUFBRSxDQUFGLENBQVIsS0FBZSxFQUFsQixFQUFzQixDQUF0QixDQUFKLEVBQTZCLElBQUUsQ0FBQyxFQUFFLENBQUYsS0FBTSxFQUFQLEVBQVcsS0FBWCxDQUFpQixHQUFqQixFQUFzQixJQUF0QixFQUEvQixFQUE0RCxNQUFJLElBQUUsRUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixDQUFoQixLQUFvQixFQUF0QixFQUF5QixJQUFFLENBQUMsSUFBRSxFQUFFLFlBQUosR0FBaUIsRUFBRSxRQUFwQixLQUErQixDQUExRCxFQUE0RCxJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBb0IsRUFBbEYsRUFBcUYsSUFBRSxFQUFFLE1BQUYsQ0FBUyxFQUFDLE1BQUssQ0FBTixFQUFRLFVBQVMsQ0FBakIsRUFBbUIsTUFBSyxDQUF4QixFQUEwQixTQUFRLENBQWxDLEVBQW9DLE1BQUssRUFBRSxJQUEzQyxFQUFnRCxVQUFTLENBQXpELEVBQTJELGNBQWEsS0FBRyxFQUFFLElBQUYsQ0FBTyxLQUFQLENBQWEsWUFBYixDQUEwQixJQUExQixDQUErQixDQUEvQixDQUEzRSxFQUE2RyxXQUFVLEVBQUUsSUFBRixDQUFPLEdBQVAsQ0FBdkgsRUFBVCxFQUE2SSxDQUE3SSxDQUF2RixFQUF1TyxDQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsTUFBVyxDQUFDLElBQUUsRUFBRSxDQUFGLElBQUssRUFBUixFQUFZLGFBQVosR0FBMEIsQ0FBMUIsRUFBNEIsRUFBRSxLQUFGLElBQVMsQ0FBQyxDQUFELEtBQUssRUFBRSxLQUFGLENBQVEsSUFBUixDQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLENBQWQsSUFBcUMsRUFBRSxnQkFBRixJQUFvQixFQUFFLGdCQUFGLENBQW1CLENBQW5CLEVBQXFCLENBQXJCLENBQWhHLENBQXZPLEVBQWdXLEVBQUUsR0FBRixLQUFRLEVBQUUsR0FBRixDQUFNLElBQU4sQ0FBVyxDQUFYLEVBQWEsQ0FBYixHQUFnQixFQUFFLE9BQUYsQ0FBVSxJQUFWLEtBQWlCLEVBQUUsT0FBRixDQUFVLElBQVYsR0FBZSxFQUFFLElBQWxDLENBQXhCLENBQWhXLEVBQWlhLElBQUUsRUFBRSxNQUFGLENBQVMsRUFBRSxhQUFGLEVBQVQsRUFBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsQ0FBRixHQUFrQyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQW5jLEVBQTZjLEVBQUUsS0FBRixDQUFRLE1BQVIsQ0FBZSxDQUFmLElBQWtCLENBQUMsQ0FBcGUsQ0FBNUQ7QUFBVjtBQUE2aUI7QUFBQyxLQUE3NkIsRUFBODZCLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQjtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsQ0FBVjtBQUFBLFVBQVksQ0FBWjtBQUFBLFVBQWMsQ0FBZDtBQUFBLFVBQWdCLENBQWhCO0FBQUEsVUFBa0IsQ0FBbEI7QUFBQSxVQUFvQixDQUFwQjtBQUFBLFVBQXNCLENBQXRCO0FBQUEsVUFBd0IsQ0FBeEI7QUFBQSxVQUEwQixJQUFFLEVBQUUsT0FBRixDQUFVLENBQVYsS0FBYyxFQUFFLEdBQUYsQ0FBTSxDQUFOLENBQTFDLENBQW1ELElBQUcsTUFBSSxJQUFFLEVBQUUsTUFBUixDQUFILEVBQW1CO0FBQUMsWUFBRSxDQUFDLElBQUUsQ0FBQyxLQUFHLEVBQUosRUFBUSxLQUFSLENBQWMsQ0FBZCxLQUFrQixDQUFDLEVBQUQsQ0FBckIsRUFBMkIsTUFBN0IsQ0FBb0MsT0FBTSxHQUFOO0FBQVUsY0FBRyxJQUFFLEdBQUcsSUFBSCxDQUFRLEVBQUUsQ0FBRixDQUFSLEtBQWUsRUFBakIsRUFBb0IsSUFBRSxJQUFFLEVBQUUsQ0FBRixDQUF4QixFQUE2QixJQUFFLENBQUMsRUFBRSxDQUFGLEtBQU0sRUFBUCxFQUFXLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0IsSUFBdEIsRUFBL0IsRUFBNEQsQ0FBL0QsRUFBaUU7QUFBQyxnQkFBRSxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLEtBQW9CLEVBQXRCLEVBQXlCLElBQUUsRUFBRSxJQUFFLENBQUMsSUFBRSxFQUFFLFlBQUosR0FBaUIsRUFBRSxRQUFwQixLQUErQixDQUFuQyxLQUF1QyxFQUFsRSxFQUFxRSxJQUFFLEVBQUUsQ0FBRixLQUFNLElBQUksTUFBSixDQUFXLFlBQVUsRUFBRSxJQUFGLENBQU8sZUFBUCxDQUFWLEdBQWtDLFNBQTdDLENBQTdFLEVBQXFJLElBQUUsSUFBRSxFQUFFLE1BQTNJLENBQWtKLE9BQU0sR0FBTjtBQUFVLGtCQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sQ0FBQyxDQUFELElBQUksTUFBSSxFQUFFLFFBQVYsSUFBb0IsS0FBRyxFQUFFLElBQUYsS0FBUyxFQUFFLElBQWxDLElBQXdDLEtBQUcsQ0FBQyxFQUFFLElBQUYsQ0FBTyxFQUFFLFNBQVQsQ0FBNUMsSUFBaUUsS0FBRyxNQUFJLEVBQUUsUUFBVCxLQUFvQixTQUFPLENBQVAsSUFBVSxDQUFDLEVBQUUsUUFBakMsQ0FBakUsS0FBOEcsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsR0FBYyxFQUFFLFFBQUYsSUFBWSxFQUFFLGFBQUYsRUFBMUIsRUFBNEMsRUFBRSxNQUFGLElBQVUsRUFBRSxNQUFGLENBQVMsSUFBVCxDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBcEssQ0FBUDtBQUFWLGFBQXlNLEtBQUcsQ0FBQyxFQUFFLE1BQU4sS0FBZSxFQUFFLFFBQUYsSUFBWSxDQUFDLENBQUQsS0FBSyxFQUFFLFFBQUYsQ0FBVyxJQUFYLENBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLEVBQUUsTUFBdEIsQ0FBakIsSUFBZ0QsRUFBRSxXQUFGLENBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixFQUFFLE1BQXBCLENBQWhELEVBQTRFLE9BQU8sRUFBRSxDQUFGLENBQWxHO0FBQXdHLFdBQXJnQixNQUEwZ0IsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLGNBQUUsS0FBRixDQUFRLE1BQVIsQ0FBZSxDQUFmLEVBQWlCLElBQUUsRUFBRSxDQUFGLENBQW5CLEVBQXdCLENBQXhCLEVBQTBCLENBQTFCLEVBQTRCLENBQUMsQ0FBN0I7QUFBWDtBQUFwaEIsU0FBK2pCLEVBQUUsYUFBRixDQUFnQixDQUFoQixLQUFvQixFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsZUFBWCxDQUFwQjtBQUFnRDtBQUFDLEtBQXBxRCxFQUFxcUQsVUFBUyxrQkFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsRUFBRSxLQUFGLENBQVEsR0FBUixDQUFZLENBQVosQ0FBTjtBQUFBLFVBQXFCLENBQXJCO0FBQUEsVUFBdUIsQ0FBdkI7QUFBQSxVQUF5QixDQUF6QjtBQUFBLFVBQTJCLENBQTNCO0FBQUEsVUFBNkIsQ0FBN0I7QUFBQSxVQUErQixDQUEvQjtBQUFBLFVBQWlDLElBQUUsSUFBSSxLQUFKLENBQVUsVUFBVSxNQUFwQixDQUFuQztBQUFBLFVBQStELElBQUUsQ0FBQyxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsUUFBWCxLQUFzQixFQUF2QixFQUEyQixFQUFFLElBQTdCLEtBQW9DLEVBQXJHO0FBQUEsVUFBd0csSUFBRSxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLEVBQUUsSUFBbEIsS0FBeUIsRUFBbkksQ0FBc0ksS0FBSSxFQUFFLENBQUYsSUFBSyxDQUFMLEVBQU8sSUFBRSxDQUFiLEVBQWUsSUFBRSxVQUFVLE1BQTNCLEVBQWtDLEdBQWxDO0FBQXNDLFVBQUUsQ0FBRixJQUFLLFVBQVUsQ0FBVixDQUFMO0FBQXRDLE9BQXdELElBQUcsRUFBRSxjQUFGLEdBQWlCLElBQWpCLEVBQXNCLENBQUMsRUFBRSxXQUFILElBQWdCLENBQUMsQ0FBRCxLQUFLLEVBQUUsV0FBRixDQUFjLElBQWQsQ0FBbUIsSUFBbkIsRUFBd0IsQ0FBeEIsQ0FBOUMsRUFBeUU7QUFBQyxZQUFFLEVBQUUsS0FBRixDQUFRLFFBQVIsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsRUFBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsQ0FBRixFQUFrQyxJQUFFLENBQXBDLENBQXNDLE9BQU0sQ0FBQyxJQUFFLEVBQUUsR0FBRixDQUFILEtBQVksQ0FBQyxFQUFFLG9CQUFGLEVBQW5CLEVBQTRDO0FBQUMsWUFBRSxhQUFGLEdBQWdCLEVBQUUsSUFBbEIsRUFBdUIsSUFBRSxDQUF6QixDQUEyQixPQUFNLENBQUMsSUFBRSxFQUFFLFFBQUYsQ0FBVyxHQUFYLENBQUgsS0FBcUIsQ0FBQyxFQUFFLDZCQUFGLEVBQTVCO0FBQThELGNBQUUsVUFBRixJQUFjLENBQUMsRUFBRSxVQUFGLENBQWEsSUFBYixDQUFrQixFQUFFLFNBQXBCLENBQWYsS0FBZ0QsRUFBRSxTQUFGLEdBQVksQ0FBWixFQUFjLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBdkIsRUFBNEIsS0FBSyxDQUFMLE1BQVUsSUFBRSxDQUFDLENBQUMsRUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixFQUFFLFFBQWxCLEtBQTZCLEVBQTlCLEVBQWtDLE1BQWxDLElBQTBDLEVBQUUsT0FBN0MsRUFBc0QsS0FBdEQsQ0FBNEQsRUFBRSxJQUE5RCxFQUFtRSxDQUFuRSxDQUFaLEtBQW9GLENBQUMsQ0FBRCxNQUFNLEVBQUUsTUFBRixHQUFTLENBQWYsQ0FBcEYsS0FBd0csRUFBRSxjQUFGLElBQW1CLEVBQUUsZUFBRixFQUEzSCxDQUE1RTtBQUE5RDtBQUEyUixnQkFBTyxFQUFFLFlBQUYsSUFBZ0IsRUFBRSxZQUFGLENBQWUsSUFBZixDQUFvQixJQUFwQixFQUF5QixDQUF6QixDQUFoQixFQUE0QyxFQUFFLE1BQXJEO0FBQTREO0FBQUMsS0FBeDRFLEVBQXk0RSxVQUFTLGtCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLENBQU47QUFBQSxVQUFRLENBQVI7QUFBQSxVQUFVLENBQVY7QUFBQSxVQUFZLENBQVo7QUFBQSxVQUFjLElBQUUsRUFBaEI7QUFBQSxVQUFtQixJQUFFLEVBQUUsYUFBdkI7QUFBQSxVQUFxQyxJQUFFLEVBQUUsTUFBekMsQ0FBZ0QsSUFBRyxLQUFHLEVBQUUsUUFBTCxJQUFlLEVBQUUsWUFBVSxFQUFFLElBQVosSUFBa0IsRUFBRSxNQUFGLElBQVUsQ0FBOUIsQ0FBbEIsRUFBbUQsT0FBSyxNQUFJLElBQVQsRUFBYyxJQUFFLEVBQUUsVUFBRixJQUFjLElBQTlCO0FBQW1DLFlBQUcsTUFBSSxFQUFFLFFBQU4sS0FBaUIsWUFBVSxFQUFFLElBQVosSUFBa0IsQ0FBQyxDQUFELEtBQUssRUFBRSxRQUExQyxDQUFILEVBQXVEO0FBQUMsZUFBSSxJQUFFLEVBQUYsRUFBSyxJQUFFLEVBQVAsRUFBVSxJQUFFLENBQWhCLEVBQWtCLElBQUUsQ0FBcEIsRUFBc0IsR0FBdEI7QUFBMEIsaUJBQUssQ0FBTCxLQUFTLEVBQUUsSUFBRSxDQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsRUFBUyxRQUFULEdBQWtCLEdBQXRCLENBQVQsS0FBc0MsRUFBRSxDQUFGLElBQUssRUFBRSxZQUFGLEdBQWUsRUFBRSxDQUFGLEVBQUksSUFBSixFQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsSUFBbUIsQ0FBQyxDQUFuQyxHQUFxQyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsSUFBVCxFQUFjLElBQWQsRUFBbUIsQ0FBQyxDQUFELENBQW5CLEVBQXdCLE1BQXhHLEdBQWdILEVBQUUsQ0FBRixLQUFNLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBdEg7QUFBMUIsV0FBMEosRUFBRSxNQUFGLElBQVUsRUFBRSxJQUFGLENBQU8sRUFBQyxNQUFLLENBQU4sRUFBUSxVQUFTLENBQWpCLEVBQVAsQ0FBVjtBQUFzQztBQUEzUixPQUEyUixPQUFPLElBQUUsSUFBRixFQUFPLElBQUUsRUFBRSxNQUFKLElBQVksRUFBRSxJQUFGLENBQU8sRUFBQyxNQUFLLENBQU4sRUFBUSxVQUFTLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBakIsRUFBUCxDQUFuQixFQUF3RCxDQUEvRDtBQUFpRSxLQUEvMUYsRUFBZzJGLFNBQVEsaUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sY0FBUCxDQUFzQixFQUFFLEtBQUYsQ0FBUSxTQUE5QixFQUF3QyxDQUF4QyxFQUEwQyxFQUFDLFlBQVcsQ0FBQyxDQUFiLEVBQWUsY0FBYSxDQUFDLENBQTdCLEVBQStCLEtBQUksRUFBRSxDQUFGLElBQUssWUFBVTtBQUFDLGNBQUcsS0FBSyxhQUFSLEVBQXNCLE9BQU8sRUFBRSxLQUFLLGFBQVAsQ0FBUDtBQUE2QixTQUFuRSxHQUFvRSxZQUFVO0FBQUMsY0FBRyxLQUFLLGFBQVIsRUFBc0IsT0FBTyxLQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBUDtBQUE2QixTQUFySyxFQUFzSyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU8sY0FBUCxDQUFzQixJQUF0QixFQUEyQixDQUEzQixFQUE2QixFQUFDLFlBQVcsQ0FBQyxDQUFiLEVBQWUsY0FBYSxDQUFDLENBQTdCLEVBQStCLFVBQVMsQ0FBQyxDQUF6QyxFQUEyQyxPQUFNLENBQWpELEVBQTdCO0FBQWtGLFNBQXhRLEVBQTFDO0FBQXFULEtBQTNxRyxFQUE0cUcsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sRUFBRSxFQUFFLE9BQUosSUFBYSxDQUFiLEdBQWUsSUFBSSxFQUFFLEtBQU4sQ0FBWSxDQUFaLENBQXRCO0FBQXFDLEtBQWp1RyxFQUFrdUcsU0FBUSxFQUFDLE1BQUssRUFBQyxVQUFTLENBQUMsQ0FBWCxFQUFOLEVBQW9CLE9BQU0sRUFBQyxTQUFRLG1CQUFVO0FBQUMsY0FBRyxTQUFPLElBQVAsSUFBYSxLQUFLLEtBQXJCLEVBQTJCLE9BQU8sS0FBSyxLQUFMLElBQWEsQ0FBQyxDQUFyQjtBQUF1QixTQUF0RSxFQUF1RSxjQUFhLFNBQXBGLEVBQTFCLEVBQXlILE1BQUssRUFBQyxTQUFRLG1CQUFVO0FBQUMsY0FBRyxTQUFPLElBQVAsSUFBYSxLQUFLLElBQXJCLEVBQTBCLE9BQU8sS0FBSyxJQUFMLElBQVksQ0FBQyxDQUFwQjtBQUFzQixTQUFwRSxFQUFxRSxjQUFhLFVBQWxGLEVBQTlILEVBQTROLE9BQU0sRUFBQyxTQUFRLG1CQUFVO0FBQUMsY0FBRyxlQUFhLEtBQUssSUFBbEIsSUFBd0IsS0FBSyxLQUE3QixJQUFvQyxFQUFFLElBQUYsRUFBTyxPQUFQLENBQXZDLEVBQXVELE9BQU8sS0FBSyxLQUFMLElBQWEsQ0FBQyxDQUFyQjtBQUF1QixTQUFsRyxFQUFtRyxVQUFTLGtCQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLEVBQUUsRUFBRSxNQUFKLEVBQVcsR0FBWCxDQUFQO0FBQXVCLFNBQS9JLEVBQWxPLEVBQW1YLGNBQWEsRUFBQyxjQUFhLHNCQUFTLENBQVQsRUFBVztBQUFDLGVBQUssQ0FBTCxLQUFTLEVBQUUsTUFBWCxJQUFtQixFQUFFLGFBQXJCLEtBQXFDLEVBQUUsYUFBRixDQUFnQixXQUFoQixHQUE0QixFQUFFLE1BQW5FO0FBQTJFLFNBQXJHLEVBQWhZLEVBQTF1RyxFQUFSLEVBQTJ0SCxFQUFFLFdBQUYsR0FBYyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsTUFBRSxtQkFBRixJQUF1QixFQUFFLG1CQUFGLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLENBQXZCO0FBQWtELEdBQTN5SCxFQUE0eUgsRUFBRSxLQUFGLEdBQVEsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRyxFQUFFLGdCQUFnQixFQUFFLEtBQXBCLENBQUgsRUFBOEIsT0FBTyxJQUFJLEVBQUUsS0FBTixDQUFZLENBQVosRUFBYyxDQUFkLENBQVAsQ0FBd0IsS0FBRyxFQUFFLElBQUwsSUFBVyxLQUFLLGFBQUwsR0FBbUIsQ0FBbkIsRUFBcUIsS0FBSyxJQUFMLEdBQVUsRUFBRSxJQUFqQyxFQUFzQyxLQUFLLGtCQUFMLEdBQXdCLEVBQUUsZ0JBQUYsSUFBb0IsS0FBSyxDQUFMLEtBQVMsRUFBRSxnQkFBWCxJQUE2QixDQUFDLENBQUQsS0FBSyxFQUFFLFdBQXhELEdBQW9FLEVBQXBFLEdBQXVFLEVBQXJJLEVBQXdJLEtBQUssTUFBTCxHQUFZLEVBQUUsTUFBRixJQUFVLE1BQUksRUFBRSxNQUFGLENBQVMsUUFBdkIsR0FBZ0MsRUFBRSxNQUFGLENBQVMsVUFBekMsR0FBb0QsRUFBRSxNQUExTSxFQUFpTixLQUFLLGFBQUwsR0FBbUIsRUFBRSxhQUF0TyxFQUFvUCxLQUFLLGFBQUwsR0FBbUIsRUFBRSxhQUFwUixJQUFtUyxLQUFLLElBQUwsR0FBVSxDQUE3UyxFQUErUyxLQUFHLEVBQUUsTUFBRixDQUFTLElBQVQsRUFBYyxDQUFkLENBQWxULEVBQW1VLEtBQUssU0FBTCxHQUFlLEtBQUcsRUFBRSxTQUFMLElBQWdCLEtBQUssR0FBTCxFQUFsVyxFQUE2VyxLQUFLLEVBQUUsT0FBUCxJQUFnQixDQUFDLENBQTlYO0FBQWdZLEdBQXh2SSxFQUF5dkksRUFBRSxLQUFGLENBQVEsU0FBUixHQUFrQixFQUFDLGFBQVksRUFBRSxLQUFmLEVBQXFCLG9CQUFtQixFQUF4QyxFQUEyQyxzQkFBcUIsRUFBaEUsRUFBbUUsK0JBQThCLEVBQWpHLEVBQW9HLGFBQVksQ0FBQyxDQUFqSCxFQUFtSCxnQkFBZSwwQkFBVTtBQUFDLFVBQUksSUFBRSxLQUFLLGFBQVgsQ0FBeUIsS0FBSyxrQkFBTCxHQUF3QixFQUF4QixFQUEyQixLQUFHLENBQUMsS0FBSyxXQUFULElBQXNCLEVBQUUsY0FBRixFQUFqRDtBQUFvRSxLQUExTyxFQUEyTyxpQkFBZ0IsMkJBQVU7QUFBQyxVQUFJLElBQUUsS0FBSyxhQUFYLENBQXlCLEtBQUssb0JBQUwsR0FBMEIsRUFBMUIsRUFBNkIsS0FBRyxDQUFDLEtBQUssV0FBVCxJQUFzQixFQUFFLGVBQUYsRUFBbkQ7QUFBdUUsS0FBdFcsRUFBdVcsMEJBQXlCLG9DQUFVO0FBQUMsVUFBSSxJQUFFLEtBQUssYUFBWCxDQUF5QixLQUFLLDZCQUFMLEdBQW1DLEVBQW5DLEVBQXNDLEtBQUcsQ0FBQyxLQUFLLFdBQVQsSUFBc0IsRUFBRSx3QkFBRixFQUE1RCxFQUF5RixLQUFLLGVBQUwsRUFBekY7QUFBZ0gsS0FBcGhCLEVBQTN3SSxFQUFpeUosRUFBRSxJQUFGLENBQU8sRUFBQyxRQUFPLENBQUMsQ0FBVCxFQUFXLFNBQVEsQ0FBQyxDQUFwQixFQUFzQixZQUFXLENBQUMsQ0FBbEMsRUFBb0MsZ0JBQWUsQ0FBQyxDQUFwRCxFQUFzRCxTQUFRLENBQUMsQ0FBL0QsRUFBaUUsUUFBTyxDQUFDLENBQXpFLEVBQTJFLFlBQVcsQ0FBQyxDQUF2RixFQUF5RixTQUFRLENBQUMsQ0FBbEcsRUFBb0csT0FBTSxDQUFDLENBQTNHLEVBQTZHLE9BQU0sQ0FBQyxDQUFwSCxFQUFzSCxVQUFTLENBQUMsQ0FBaEksRUFBa0ksTUFBSyxDQUFDLENBQXhJLEVBQTBJLFFBQU8sQ0FBQyxDQUFsSixFQUFvSixVQUFTLENBQUMsQ0FBOUosRUFBZ0ssS0FBSSxDQUFDLENBQXJLLEVBQXVLLFNBQVEsQ0FBQyxDQUFoTCxFQUFrTCxRQUFPLENBQUMsQ0FBMUwsRUFBNEwsU0FBUSxDQUFDLENBQXJNLEVBQXVNLFNBQVEsQ0FBQyxDQUFoTixFQUFrTixTQUFRLENBQUMsQ0FBM04sRUFBNk4sU0FBUSxDQUFDLENBQXRPLEVBQXdPLFNBQVEsQ0FBQyxDQUFqUCxFQUFtUCxXQUFVLENBQUMsQ0FBOVAsRUFBZ1EsYUFBWSxDQUFDLENBQTdRLEVBQStRLFNBQVEsQ0FBQyxDQUF4UixFQUEwUixTQUFRLENBQUMsQ0FBblMsRUFBcVMsZUFBYyxDQUFDLENBQXBULEVBQXNULFdBQVUsQ0FBQyxDQUFqVSxFQUFtVSxTQUFRLENBQUMsQ0FBNVUsRUFBOFUsT0FBTSxlQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLE1BQVIsQ0FBZSxPQUFPLFFBQU0sRUFBRSxLQUFSLElBQWUsR0FBRyxJQUFILENBQVEsRUFBRSxJQUFWLENBQWYsR0FBK0IsUUFBTSxFQUFFLFFBQVIsR0FBaUIsRUFBRSxRQUFuQixHQUE0QixFQUFFLE9BQTdELEdBQXFFLENBQUMsRUFBRSxLQUFILElBQVUsS0FBSyxDQUFMLEtBQVMsQ0FBbkIsSUFBc0IsR0FBRyxJQUFILENBQVEsRUFBRSxJQUFWLENBQXRCLEdBQXNDLElBQUUsQ0FBRixHQUFJLENBQUosR0FBTSxJQUFFLENBQUYsR0FBSSxDQUFKLEdBQU0sSUFBRSxDQUFGLEdBQUksQ0FBSixHQUFNLENBQXhELEdBQTBELEVBQUUsS0FBeEk7QUFBOEksS0FBN2YsRUFBUCxFQUFzZ0IsRUFBRSxLQUFGLENBQVEsT0FBOWdCLENBQWp5SixFQUF3ekssRUFBRSxJQUFGLENBQU8sRUFBQyxZQUFXLFdBQVosRUFBd0IsWUFBVyxVQUFuQyxFQUE4QyxjQUFhLGFBQTNELEVBQXlFLGNBQWEsWUFBdEYsRUFBUCxFQUEyRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLElBQW1CLEVBQUMsY0FBYSxDQUFkLEVBQWdCLFVBQVMsQ0FBekIsRUFBMkIsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxZQUFJLENBQUo7QUFBQSxZQUFNLElBQUUsSUFBUjtBQUFBLFlBQWEsSUFBRSxFQUFFLGFBQWpCO0FBQUEsWUFBK0IsSUFBRSxFQUFFLFNBQW5DLENBQTZDLE9BQU8sTUFBSSxNQUFJLENBQUosSUFBTyxFQUFFLFFBQUYsQ0FBVyxDQUFYLEVBQWEsQ0FBYixDQUFYLE1BQThCLEVBQUUsSUFBRixHQUFPLEVBQUUsUUFBVCxFQUFrQixJQUFFLEVBQUUsT0FBRixDQUFVLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBcUIsU0FBckIsQ0FBcEIsRUFBb0QsRUFBRSxJQUFGLEdBQU8sQ0FBekYsR0FBNEYsQ0FBbkc7QUFBcUcsT0FBaE0sRUFBbkI7QUFBcU4sR0FBOVUsQ0FBeHpLLEVBQXdvTCxFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxJQUFHLFlBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLGFBQU8sR0FBRyxJQUFILEVBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxDQUFQO0FBQXdCLEtBQTlDLEVBQStDLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsYUFBTyxHQUFHLElBQUgsRUFBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLENBQVA7QUFBMEIsS0FBL0YsRUFBZ0csS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFRLElBQUcsS0FBRyxFQUFFLGNBQUwsSUFBcUIsRUFBRSxTQUExQixFQUFvQyxPQUFPLElBQUUsRUFBRSxTQUFKLEVBQWMsRUFBRSxFQUFFLGNBQUosRUFBb0IsR0FBcEIsQ0FBd0IsRUFBRSxTQUFGLEdBQVksRUFBRSxRQUFGLEdBQVcsR0FBWCxHQUFlLEVBQUUsU0FBN0IsR0FBdUMsRUFBRSxRQUFqRSxFQUEwRSxFQUFFLFFBQTVFLEVBQXFGLEVBQUUsT0FBdkYsQ0FBZCxFQUE4RyxJQUFySCxDQUEwSCxJQUFHLG9CQUFpQixDQUFqQix5Q0FBaUIsQ0FBakIsRUFBSCxFQUFzQjtBQUFDLGFBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxlQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLEVBQUUsQ0FBRixDQUFiO0FBQVgsU0FBOEIsT0FBTyxJQUFQO0FBQVksY0FBTSxDQUFDLENBQUQsS0FBSyxDQUFMLElBQVEsY0FBWSxPQUFPLENBQTNCLEtBQStCLElBQUUsQ0FBRixFQUFJLElBQUUsS0FBSyxDQUExQyxHQUE2QyxDQUFDLENBQUQsS0FBSyxDQUFMLEtBQVMsSUFBRSxFQUFYLENBQTdDLEVBQTRELEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxVQUFFLEtBQUYsQ0FBUSxNQUFSLENBQWUsSUFBZixFQUFvQixDQUFwQixFQUFzQixDQUF0QixFQUF3QixDQUF4QjtBQUEyQixPQUFoRCxDQUFsRTtBQUFvSCxLQUEvYyxFQUFaLENBQXhvTCxDQUFzbU0sSUFBSSxLQUFHLDZGQUFQO0FBQUEsTUFBcUcsS0FBRyx1QkFBeEc7QUFBQSxNQUFnSSxLQUFHLG1DQUFuSTtBQUFBLE1BQXVLLEtBQUcsMENBQTFLLENBQXFOLFNBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsV0FBTyxFQUFFLENBQUYsRUFBSSxPQUFKLEtBQWMsRUFBRSxPQUFLLEVBQUUsUUFBUCxHQUFnQixDQUFoQixHQUFrQixFQUFFLFVBQXRCLEVBQWlDLElBQWpDLENBQWQsR0FBcUQsRUFBRSxDQUFGLEVBQUssUUFBTCxDQUFjLE9BQWQsRUFBdUIsQ0FBdkIsS0FBMkIsQ0FBaEYsR0FBa0YsQ0FBekY7QUFBMkYsWUFBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBTyxFQUFFLElBQUYsR0FBTyxDQUFDLFNBQU8sRUFBRSxZQUFGLENBQWUsTUFBZixDQUFSLElBQWdDLEdBQWhDLEdBQW9DLEVBQUUsSUFBN0MsRUFBa0QsQ0FBekQ7QUFBMkQsWUFBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBTSxZQUFVLENBQUMsRUFBRSxJQUFGLElBQVEsRUFBVCxFQUFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsQ0FBVixHQUFrQyxFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsQ0FBTyxLQUFQLENBQWEsQ0FBYixDQUF6QyxHQUF5RCxFQUFFLGVBQUYsQ0FBa0IsTUFBbEIsQ0FBekQsRUFBbUYsQ0FBekY7QUFBMkYsWUFBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQyxRQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixDQUFvQixJQUFHLE1BQUksRUFBRSxRQUFULEVBQWtCO0FBQUMsVUFBRyxFQUFFLE9BQUYsQ0FBVSxDQUFWLE1BQWUsSUFBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULENBQUYsRUFBYyxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLENBQWhCLEVBQTJCLElBQUUsRUFBRSxNQUE5QyxDQUFILEVBQXlEO0FBQUMsZUFBTyxFQUFFLE1BQVQsRUFBZ0IsRUFBRSxNQUFGLEdBQVMsRUFBekIsQ0FBNEIsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLGVBQUksSUFBRSxDQUFGLEVBQUksSUFBRSxFQUFFLENBQUYsRUFBSyxNQUFmLEVBQXNCLElBQUUsQ0FBeEIsRUFBMEIsR0FBMUI7QUFBOEIsY0FBRSxLQUFGLENBQVEsR0FBUixDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLEVBQUUsQ0FBRixFQUFLLENBQUwsQ0FBaEI7QUFBOUI7QUFBWDtBQUFrRSxTQUFFLE9BQUYsQ0FBVSxDQUFWLE1BQWUsSUFBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULENBQUYsRUFBYyxJQUFFLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBWSxDQUFaLENBQWhCLEVBQStCLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLENBQTlDO0FBQTBEO0FBQUMsWUFBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQyxRQUFJLElBQUUsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFOLENBQStCLFlBQVUsQ0FBVixJQUFhLEdBQUcsSUFBSCxDQUFRLEVBQUUsSUFBVixDQUFiLEdBQTZCLEVBQUUsT0FBRixHQUFVLEVBQUUsT0FBekMsR0FBaUQsWUFBVSxDQUFWLElBQWEsZUFBYSxDQUExQixLQUE4QixFQUFFLFlBQUYsR0FBZSxFQUFFLFlBQS9DLENBQWpEO0FBQThHLFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CO0FBQUMsUUFBRSxFQUFFLEtBQUYsQ0FBUSxFQUFSLEVBQVcsQ0FBWCxDQUFGLENBQWdCLElBQUksQ0FBSjtBQUFBLFFBQU0sQ0FBTjtBQUFBLFFBQVEsQ0FBUjtBQUFBLFFBQVUsQ0FBVjtBQUFBLFFBQVksQ0FBWjtBQUFBLFFBQWMsQ0FBZDtBQUFBLFFBQWdCLElBQUUsQ0FBbEI7QUFBQSxRQUFvQixJQUFFLEVBQUUsTUFBeEI7QUFBQSxRQUErQixJQUFFLElBQUUsQ0FBbkM7QUFBQSxRQUFxQyxJQUFFLEVBQUUsQ0FBRixDQUF2QztBQUFBLFFBQTRDLElBQUUsRUFBRSxDQUFGLENBQTlDLENBQW1ELElBQUcsS0FBRyxJQUFFLENBQUYsSUFBSyxZQUFVLE9BQU8sQ0FBdEIsSUFBeUIsQ0FBQyxFQUFFLFVBQTVCLElBQXdDLEdBQUcsSUFBSCxDQUFRLENBQVIsQ0FBOUMsRUFBeUQsT0FBTyxFQUFFLElBQUYsQ0FBTyxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLEVBQUYsQ0FBSyxDQUFMLENBQU4sQ0FBYyxNQUFJLEVBQUUsQ0FBRixJQUFLLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxDQUFaLEVBQWMsRUFBRSxJQUFGLEVBQWQsQ0FBVCxHQUFrQyxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBbEM7QUFBOEMsS0FBL0UsQ0FBUCxDQUF3RixJQUFHLE1BQUksSUFBRSxHQUFHLENBQUgsRUFBSyxFQUFFLENBQUYsRUFBSyxhQUFWLEVBQXdCLENBQUMsQ0FBekIsRUFBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsQ0FBRixFQUFrQyxJQUFFLEVBQUUsVUFBdEMsRUFBaUQsTUFBSSxFQUFFLFVBQUYsQ0FBYSxNQUFqQixLQUEwQixJQUFFLENBQTVCLENBQWpELEVBQWdGLEtBQUcsQ0FBdkYsQ0FBSCxFQUE2RjtBQUFDLFdBQUksSUFBRSxDQUFDLElBQUUsRUFBRSxHQUFGLENBQU0sR0FBRyxDQUFILEVBQUssUUFBTCxDQUFOLEVBQXFCLEVBQXJCLENBQUgsRUFBNkIsTUFBbkMsRUFBMEMsSUFBRSxDQUE1QyxFQUE4QyxHQUE5QztBQUFrRCxZQUFFLENBQUYsRUFBSSxNQUFJLENBQUosS0FBUSxJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFDLENBQVgsRUFBYSxDQUFDLENBQWQsQ0FBRixFQUFtQixLQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxHQUFHLENBQUgsRUFBSyxRQUFMLENBQVYsQ0FBOUIsQ0FBSixFQUE2RCxFQUFFLElBQUYsQ0FBTyxFQUFFLENBQUYsQ0FBUCxFQUFZLENBQVosRUFBYyxDQUFkLENBQTdEO0FBQWxELE9BQWdJLElBQUcsQ0FBSCxFQUFLLEtBQUksSUFBRSxFQUFFLEVBQUUsTUFBRixHQUFTLENBQVgsRUFBYyxhQUFoQixFQUE4QixFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsRUFBUixDQUE5QixFQUEwQyxJQUFFLENBQWhELEVBQWtELElBQUUsQ0FBcEQsRUFBc0QsR0FBdEQ7QUFBMEQsWUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLEdBQUcsSUFBSCxDQUFRLEVBQUUsSUFBRixJQUFRLEVBQWhCLEtBQXFCLENBQUMsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLFlBQVgsQ0FBdEIsSUFBZ0QsRUFBRSxRQUFGLENBQVcsQ0FBWCxFQUFhLENBQWIsQ0FBaEQsS0FBa0UsRUFBRSxHQUFGLElBQU8sYUFBVyxDQUFDLEVBQUUsSUFBRixJQUFRLEVBQVQsRUFBYSxXQUFiLEVBQWxCLEdBQTZDLEVBQUUsUUFBRixJQUFZLEVBQUUsUUFBRixDQUFXLEVBQUUsR0FBYixDQUF6RCxHQUEyRSxFQUFFLEVBQUUsV0FBRixDQUFjLE9BQWQsQ0FBc0IsRUFBdEIsRUFBeUIsRUFBekIsQ0FBRixFQUErQixDQUEvQixFQUFpQyxDQUFqQyxDQUE3SSxDQUFQO0FBQTFEO0FBQW1QLFlBQU8sQ0FBUDtBQUFTLFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCO0FBQUMsU0FBSSxJQUFJLENBQUosRUFBTSxJQUFFLElBQUUsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBRixHQUFnQixDQUF4QixFQUEwQixJQUFFLENBQWhDLEVBQWtDLFNBQU8sSUFBRSxFQUFFLENBQUYsQ0FBVCxDQUFsQyxFQUFpRCxHQUFqRDtBQUFxRCxXQUFHLE1BQUksRUFBRSxRQUFULElBQW1CLEVBQUUsU0FBRixDQUFZLEdBQUcsQ0FBSCxDQUFaLENBQW5CLEVBQXNDLEVBQUUsVUFBRixLQUFlLEtBQUcsRUFBRSxRQUFGLENBQVcsRUFBRSxhQUFiLEVBQTJCLENBQTNCLENBQUgsSUFBa0MsR0FBRyxHQUFHLENBQUgsRUFBSyxRQUFMLENBQUgsQ0FBbEMsRUFBcUQsRUFBRSxVQUFGLENBQWEsV0FBYixDQUF5QixDQUF6QixDQUFwRSxDQUF0QztBQUFyRCxLQUE0TCxPQUFPLENBQVA7QUFBUyxLQUFFLE1BQUYsQ0FBUyxFQUFDLGVBQWMsdUJBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWEsV0FBYixDQUFQO0FBQWlDLEtBQTVELEVBQTZELE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsQ0FBVjtBQUFBLFVBQVksSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFDLENBQWIsQ0FBZDtBQUFBLFVBQThCLElBQUUsRUFBRSxRQUFGLENBQVcsRUFBRSxhQUFiLEVBQTJCLENBQTNCLENBQWhDLENBQThELElBQUcsRUFBRSxFQUFFLGNBQUYsSUFBa0IsTUFBSSxFQUFFLFFBQU4sSUFBZ0IsT0FBSyxFQUFFLFFBQXpDLElBQW1ELEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBckQsQ0FBSCxFQUF1RSxLQUFJLElBQUUsR0FBRyxDQUFILENBQUYsRUFBUSxJQUFFLENBQVYsRUFBWSxJQUFFLENBQUMsSUFBRSxHQUFHLENBQUgsQ0FBSCxFQUFVLE1BQTVCLEVBQW1DLElBQUUsQ0FBckMsRUFBdUMsR0FBdkM7QUFBMkMsV0FBRyxFQUFFLENBQUYsQ0FBSCxFQUFRLEVBQUUsQ0FBRixDQUFSO0FBQTNDLE9BQXlELElBQUcsQ0FBSCxFQUFLLElBQUcsQ0FBSCxFQUFLLEtBQUksSUFBRSxLQUFHLEdBQUcsQ0FBSCxDQUFMLEVBQVcsSUFBRSxLQUFHLEdBQUcsQ0FBSCxDQUFoQixFQUFzQixJQUFFLENBQXhCLEVBQTBCLElBQUUsRUFBRSxNQUFsQyxFQUF5QyxJQUFFLENBQTNDLEVBQTZDLEdBQTdDO0FBQWlELFdBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxFQUFFLENBQUYsQ0FBUjtBQUFqRCxPQUFMLE1BQXlFLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBUSxPQUFNLENBQUMsSUFBRSxHQUFHLENBQUgsRUFBSyxRQUFMLENBQUgsRUFBbUIsTUFBbkIsR0FBMEIsQ0FBMUIsSUFBNkIsR0FBRyxDQUFILEVBQUssQ0FBQyxDQUFELElBQUksR0FBRyxDQUFILEVBQUssUUFBTCxDQUFULENBQTdCLEVBQXNELENBQTVEO0FBQThELEtBQXJhLEVBQXNhLFdBQVUsbUJBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLElBQUUsRUFBRSxLQUFGLENBQVEsT0FBcEIsRUFBNEIsSUFBRSxDQUFsQyxFQUFvQyxLQUFLLENBQUwsTUFBVSxJQUFFLEVBQUUsQ0FBRixDQUFaLENBQXBDLEVBQXNELEdBQXREO0FBQTBELFlBQUcsRUFBRSxDQUFGLENBQUgsRUFBUTtBQUFDLGNBQUcsSUFBRSxFQUFFLEVBQUUsT0FBSixDQUFMLEVBQWtCO0FBQUMsZ0JBQUcsRUFBRSxNQUFMLEVBQVksS0FBSSxDQUFKLElBQVMsRUFBRSxNQUFYO0FBQWtCLGdCQUFFLENBQUYsSUFBSyxFQUFFLEtBQUYsQ0FBUSxNQUFSLENBQWUsQ0FBZixFQUFpQixDQUFqQixDQUFMLEdBQXlCLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsRUFBRSxNQUFwQixDQUF6QjtBQUFsQixhQUF1RSxFQUFFLEVBQUUsT0FBSixJQUFhLEtBQUssQ0FBbEI7QUFBb0IsYUFBRSxFQUFFLE9BQUosTUFBZSxFQUFFLEVBQUUsT0FBSixJQUFhLEtBQUssQ0FBakM7QUFBb0M7QUFBak87QUFBa08sS0FBOXBCLEVBQVQsR0FBMHFCLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxHQUFHLElBQUgsRUFBUSxDQUFSLEVBQVUsQ0FBQyxDQUFYLENBQVA7QUFBcUIsS0FBekMsRUFBMEMsUUFBTyxnQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLENBQVIsQ0FBUDtBQUFrQixLQUEvRSxFQUFnRixNQUFLLGNBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLElBQUYsRUFBTyxVQUFTLENBQVQsRUFBVztBQUFDLGVBQU8sS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLEVBQUUsSUFBRixDQUFPLElBQVAsQ0FBWCxHQUF3QixLQUFLLEtBQUwsR0FBYSxJQUFiLENBQWtCLFlBQVU7QUFBQyxnQkFBSSxLQUFLLFFBQVQsSUFBbUIsT0FBSyxLQUFLLFFBQTdCLElBQXVDLE1BQUksS0FBSyxRQUFoRCxLQUEyRCxLQUFLLFdBQUwsR0FBaUIsQ0FBNUU7QUFBK0UsU0FBNUcsQ0FBL0I7QUFBNkksT0FBaEssRUFBaUssSUFBakssRUFBc0ssQ0FBdEssRUFBd0ssVUFBVSxNQUFsTCxDQUFQO0FBQWlNLEtBQWxTLEVBQW1TLFFBQU8sa0JBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLFNBQVIsRUFBa0IsVUFBUyxDQUFULEVBQVc7QUFBQyxjQUFJLEtBQUssUUFBVCxJQUFtQixPQUFLLEtBQUssUUFBN0IsSUFBdUMsTUFBSSxLQUFLLFFBQWhELElBQTBELEdBQUcsSUFBSCxFQUFRLENBQVIsRUFBVyxXQUFYLENBQXVCLENBQXZCLENBQTFEO0FBQW9GLE9BQWxILENBQVA7QUFBMkgsS0FBaGIsRUFBaWIsU0FBUSxtQkFBVTtBQUFDLGFBQU8sR0FBRyxJQUFILEVBQVEsU0FBUixFQUFrQixVQUFTLENBQVQsRUFBVztBQUFDLFlBQUcsTUFBSSxLQUFLLFFBQVQsSUFBbUIsT0FBSyxLQUFLLFFBQTdCLElBQXVDLE1BQUksS0FBSyxRQUFuRCxFQUE0RDtBQUFDLGNBQUksSUFBRSxHQUFHLElBQUgsRUFBUSxDQUFSLENBQU4sQ0FBaUIsRUFBRSxZQUFGLENBQWUsQ0FBZixFQUFpQixFQUFFLFVBQW5CO0FBQStCO0FBQUMsT0FBNUksQ0FBUDtBQUFxSixLQUF6bEIsRUFBMGxCLFFBQU8sa0JBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSCxFQUFRLFNBQVIsRUFBa0IsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFLLFVBQUwsSUFBaUIsS0FBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLENBQTdCLEVBQStCLElBQS9CLENBQWpCO0FBQXNELE9BQXBGLENBQVA7QUFBNkYsS0FBenNCLEVBQTBzQixPQUFNLGlCQUFVO0FBQUMsYUFBTyxHQUFHLElBQUgsRUFBUSxTQUFSLEVBQWtCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBSyxVQUFMLElBQWlCLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUE2QixDQUE3QixFQUErQixLQUFLLFdBQXBDLENBQWpCO0FBQWtFLE9BQWhHLENBQVA7QUFBeUcsS0FBcDBCLEVBQXEwQixPQUFNLGlCQUFVO0FBQUMsV0FBSSxJQUFJLENBQUosRUFBTSxJQUFFLENBQVosRUFBYyxTQUFPLElBQUUsS0FBSyxDQUFMLENBQVQsQ0FBZCxFQUFnQyxHQUFoQztBQUFvQyxjQUFJLEVBQUUsUUFBTixLQUFpQixFQUFFLFNBQUYsQ0FBWSxHQUFHLENBQUgsRUFBSyxDQUFDLENBQU4sQ0FBWixHQUFzQixFQUFFLFdBQUYsR0FBYyxFQUFyRDtBQUFwQyxPQUE2RixPQUFPLElBQVA7QUFBWSxLQUEvN0IsRUFBZzhCLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxJQUFFLFFBQU0sQ0FBTixJQUFTLENBQVgsRUFBYSxJQUFFLFFBQU0sQ0FBTixHQUFRLENBQVIsR0FBVSxDQUF6QixFQUEyQixLQUFLLEdBQUwsQ0FBUyxZQUFVO0FBQUMsZUFBTyxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWEsQ0FBYixFQUFlLENBQWYsQ0FBUDtBQUF5QixPQUE3QyxDQUFsQztBQUFpRixLQUFyaUMsRUFBc2lDLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsSUFBRixFQUFPLFVBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBSSxJQUFFLEtBQUssQ0FBTCxLQUFTLEVBQWY7QUFBQSxZQUFrQixJQUFFLENBQXBCO0FBQUEsWUFBc0IsSUFBRSxLQUFLLE1BQTdCLENBQW9DLElBQUcsS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLE1BQUksRUFBRSxRQUFyQixFQUE4QixPQUFPLEVBQUUsU0FBVCxDQUFtQixJQUFHLFlBQVUsT0FBTyxDQUFqQixJQUFvQixDQUFDLEdBQUcsSUFBSCxDQUFRLENBQVIsQ0FBckIsSUFBaUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFILENBQVEsQ0FBUixLQUFZLENBQUMsRUFBRCxFQUFJLEVBQUosQ0FBYixFQUFzQixDQUF0QixFQUF5QixXQUF6QixFQUFILENBQXJDLEVBQWdGO0FBQUMsY0FBRSxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBRixDQUFxQixJQUFHO0FBQUMsbUJBQUssSUFBRSxDQUFQLEVBQVMsR0FBVDtBQUFhLG9CQUFJLENBQUMsSUFBRSxLQUFLLENBQUwsS0FBUyxFQUFaLEVBQWdCLFFBQXBCLEtBQStCLEVBQUUsU0FBRixDQUFZLEdBQUcsQ0FBSCxFQUFLLENBQUMsQ0FBTixDQUFaLEdBQXNCLEVBQUUsU0FBRixHQUFZLENBQWpFO0FBQWIsYUFBaUYsSUFBRSxDQUFGO0FBQUksV0FBekYsQ0FBeUYsT0FBTSxDQUFOLEVBQVEsQ0FBRTtBQUFDLGNBQUcsS0FBSyxLQUFMLEdBQWEsTUFBYixDQUFvQixDQUFwQixDQUFIO0FBQTBCLE9BQTVVLEVBQTZVLElBQTdVLEVBQWtWLENBQWxWLEVBQW9WLFVBQVUsTUFBOVYsQ0FBUDtBQUE2VyxLQUFwNkMsRUFBcTZDLGFBQVksdUJBQVU7QUFBQyxVQUFJLElBQUUsRUFBTixDQUFTLE9BQU8sR0FBRyxJQUFILEVBQVEsU0FBUixFQUFrQixVQUFTLENBQVQsRUFBVztBQUFDLFlBQUksSUFBRSxLQUFLLFVBQVgsQ0FBc0IsRUFBRSxPQUFGLENBQVUsSUFBVixFQUFlLENBQWYsSUFBa0IsQ0FBbEIsS0FBc0IsRUFBRSxTQUFGLENBQVksR0FBRyxJQUFILENBQVosR0FBc0IsS0FBRyxFQUFFLFlBQUYsQ0FBZSxDQUFmLEVBQWlCLElBQWpCLENBQS9DO0FBQXVFLE9BQTNILEVBQTRILENBQTVILENBQVA7QUFBc0ksS0FBM2tELEVBQVosQ0FBMXFCLEVBQW93RSxFQUFFLElBQUYsQ0FBTyxFQUFDLFVBQVMsUUFBVixFQUFtQixXQUFVLFNBQTdCLEVBQXVDLGNBQWEsUUFBcEQsRUFBNkQsYUFBWSxPQUF6RSxFQUFpRixZQUFXLGFBQTVGLEVBQVAsRUFBa0gsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxFQUFGLENBQUssQ0FBTCxJQUFRLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJLENBQUosRUFBTSxJQUFFLEVBQVIsRUFBVyxJQUFFLEVBQUUsQ0FBRixDQUFiLEVBQWtCLElBQUUsRUFBRSxNQUFGLEdBQVMsQ0FBN0IsRUFBK0IsSUFBRSxDQUFyQyxFQUF1QyxLQUFHLENBQTFDLEVBQTRDLEdBQTVDO0FBQWdELFlBQUUsTUFBSSxDQUFKLEdBQU0sSUFBTixHQUFXLEtBQUssS0FBTCxDQUFXLENBQUMsQ0FBWixDQUFiLEVBQTRCLEVBQUUsRUFBRSxDQUFGLENBQUYsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUE1QixFQUEwQyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxHQUFGLEVBQVYsQ0FBMUM7QUFBaEQsT0FBNkcsT0FBTyxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQVA7QUFBeUIsS0FBMUo7QUFBMkosR0FBM1IsQ0FBcHdFLENBQWlpRixJQUFJLEtBQUcsSUFBSSxNQUFKLENBQVcsT0FBSyxFQUFMLEdBQVEsaUJBQW5CLEVBQXFDLEdBQXJDLENBQVA7QUFBQSxNQUFpRCxLQUFHLFNBQUgsRUFBRyxDQUFTLENBQVQsRUFBVztBQUFDLFFBQUksSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsV0FBdEIsQ0FBa0MsT0FBTyxLQUFHLEVBQUUsTUFBTCxLQUFjLElBQUUsQ0FBaEIsR0FBbUIsRUFBRSxnQkFBRixDQUFtQixDQUFuQixDQUExQjtBQUFnRCxHQUFsSjtBQUFBLE1BQW1KLEtBQUcsSUFBSSxNQUFKLENBQVcsR0FBRyxJQUFILENBQVEsR0FBUixDQUFYLEVBQXdCLEdBQXhCLENBQXRKLENBQW1MLENBQUMsWUFBVTtBQUFDLGFBQVMsQ0FBVCxHQUFZO0FBQUMsVUFBRyxDQUFILEVBQUs7QUFBQyxVQUFFLEtBQUYsQ0FBUSxPQUFSLEdBQWdCLDhFQUFoQixFQUErRixFQUFFLEtBQUYsQ0FBUSxPQUFSLEdBQWdCLDJIQUEvRyxFQUEyTyxHQUFHLFdBQUgsQ0FBZSxDQUFmLEVBQWtCLFdBQWxCLENBQThCLENBQTlCLENBQTNPLENBQTRRLElBQUksSUFBRSxFQUFFLGdCQUFGLENBQW1CLENBQW5CLENBQU4sQ0FBNEIsSUFBRSxTQUFPLEVBQUUsR0FBWCxFQUFlLElBQUUsT0FBSyxFQUFFLEVBQUUsVUFBSixDQUF0QixFQUFzQyxFQUFFLEtBQUYsQ0FBUSxLQUFSLEdBQWMsS0FBcEQsRUFBMEQsSUFBRSxPQUFLLEVBQUUsRUFBRSxLQUFKLENBQWpFLEVBQTRFLElBQUUsT0FBSyxFQUFFLEVBQUUsS0FBSixDQUFuRixFQUE4RixFQUFFLEtBQUYsQ0FBUSxRQUFSLEdBQWlCLFVBQS9HLEVBQTBILElBQUUsT0FBSyxFQUFFLFdBQVAsSUFBb0IsVUFBaEosRUFBMkosR0FBRyxXQUFILENBQWUsQ0FBZixDQUEzSixFQUE2SyxJQUFFLElBQS9LO0FBQW9MO0FBQUMsY0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLEtBQUwsQ0FBVyxXQUFXLENBQVgsQ0FBWCxDQUFQO0FBQWlDLFNBQUksQ0FBSjtBQUFBLFFBQU0sQ0FBTjtBQUFBLFFBQVEsQ0FBUjtBQUFBLFFBQVUsQ0FBVjtBQUFBLFFBQVksQ0FBWjtBQUFBLFFBQWMsSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBaEI7QUFBQSxRQUF1QyxJQUFFLEVBQUUsYUFBRixDQUFnQixLQUFoQixDQUF6QyxDQUFnRSxFQUFFLEtBQUYsS0FBVSxFQUFFLEtBQUYsQ0FBUSxjQUFSLEdBQXVCLGFBQXZCLEVBQXFDLEVBQUUsU0FBRixDQUFZLENBQUMsQ0FBYixFQUFnQixLQUFoQixDQUFzQixjQUF0QixHQUFxQyxFQUExRSxFQUE2RSxFQUFFLGVBQUYsR0FBa0Isa0JBQWdCLEVBQUUsS0FBRixDQUFRLGNBQXZILEVBQXNJLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxFQUFDLG1CQUFrQiw2QkFBVTtBQUFDLGVBQU8sS0FBSSxDQUFYO0FBQWEsT0FBM0MsRUFBNEMsZ0JBQWUsMEJBQVU7QUFBQyxlQUFPLEtBQUksQ0FBWDtBQUFhLE9BQW5GLEVBQW9GLGVBQWMseUJBQVU7QUFBQyxlQUFPLEtBQUksQ0FBWDtBQUFhLE9BQTFILEVBQTJILG9CQUFtQiw4QkFBVTtBQUFDLGVBQU8sS0FBSSxDQUFYO0FBQWEsT0FBdEssRUFBdUssZUFBYyx5QkFBVTtBQUFDLGVBQU8sS0FBSSxDQUFYO0FBQWEsT0FBN00sRUFBWCxDQUFoSjtBQUE0VyxHQUF0OUIsRUFBRCxDQUEwOUIsU0FBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLENBQU47QUFBQSxRQUFRLENBQVI7QUFBQSxRQUFVLENBQVY7QUFBQSxRQUFZLElBQUUsRUFBRSxLQUFoQixDQUFzQixPQUFNLENBQUMsSUFBRSxLQUFHLEdBQUcsQ0FBSCxDQUFOLE1BQWUsUUFBTSxJQUFFLEVBQUUsZ0JBQUYsQ0FBbUIsQ0FBbkIsS0FBdUIsRUFBRSxDQUFGLENBQS9CLEtBQXNDLEVBQUUsUUFBRixDQUFXLEVBQUUsYUFBYixFQUEyQixDQUEzQixDQUF0QyxLQUFzRSxJQUFFLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLENBQXhFLEdBQXNGLENBQUMsRUFBRSxjQUFGLEVBQUQsSUFBcUIsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFyQixJQUFpQyxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQWpDLEtBQThDLElBQUUsRUFBRSxLQUFKLEVBQVUsSUFBRSxFQUFFLFFBQWQsRUFBdUIsSUFBRSxFQUFFLFFBQTNCLEVBQW9DLEVBQUUsUUFBRixHQUFXLEVBQUUsUUFBRixHQUFXLEVBQUUsS0FBRixHQUFRLENBQWxFLEVBQW9FLElBQUUsRUFBRSxLQUF4RSxFQUE4RSxFQUFFLEtBQUYsR0FBUSxDQUF0RixFQUF3RixFQUFFLFFBQUYsR0FBVyxDQUFuRyxFQUFxRyxFQUFFLFFBQUYsR0FBVyxDQUE5SixDQUFyRyxHQUF1USxLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsSUFBRSxFQUFiLEdBQWdCLENBQTdSO0FBQStSLFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUMsV0FBTSxFQUFDLEtBQUksZUFBVTtBQUFDLFlBQUcsQ0FBQyxHQUFKLEVBQVEsT0FBTSxDQUFDLEtBQUssR0FBTCxHQUFTLENBQVYsRUFBYSxLQUFiLENBQW1CLElBQW5CLEVBQXdCLFNBQXhCLENBQU4sQ0FBeUMsT0FBTyxLQUFLLEdBQVo7QUFBZ0IsT0FBakYsRUFBTjtBQUF5RixPQUFJLEtBQUcsMkJBQVA7QUFBQSxNQUFtQyxLQUFHLEtBQXRDO0FBQUEsTUFBNEMsS0FBRyxFQUFDLFVBQVMsVUFBVixFQUFxQixZQUFXLFFBQWhDLEVBQXlDLFNBQVEsT0FBakQsRUFBL0M7QUFBQSxNQUF5RyxLQUFHLEVBQUMsZUFBYyxHQUFmLEVBQW1CLFlBQVcsS0FBOUIsRUFBNUc7QUFBQSxNQUFpSixLQUFHLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsSUFBaEIsQ0FBcEo7QUFBQSxNQUEwSyxLQUFHLEVBQUUsYUFBRixDQUFnQixLQUFoQixFQUF1QixLQUFwTSxDQUEwTSxTQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxRQUFHLEtBQUssRUFBUixFQUFXLE9BQU8sQ0FBUCxDQUFTLElBQUksSUFBRSxFQUFFLENBQUYsRUFBSyxXQUFMLEtBQW1CLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBekI7QUFBQSxRQUFvQyxJQUFFLEdBQUcsTUFBekMsQ0FBZ0QsT0FBTSxHQUFOO0FBQVUsVUFBRyxDQUFDLElBQUUsR0FBRyxDQUFILElBQU0sQ0FBVCxLQUFjLEVBQWpCLEVBQW9CLE9BQU8sQ0FBUDtBQUE5QjtBQUF1QyxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxRQUFJLElBQUUsRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFOLENBQW9CLE9BQU8sTUFBSSxJQUFFLEVBQUUsUUFBRixDQUFXLENBQVgsSUFBYyxHQUFHLENBQUgsS0FBTyxDQUEzQixHQUE4QixDQUFyQztBQUF1QyxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUFDLFFBQUksSUFBRSxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQU4sQ0FBaUIsT0FBTyxJQUFFLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBVyxFQUFFLENBQUYsS0FBTSxLQUFHLENBQVQsQ0FBWCxLQUF5QixFQUFFLENBQUYsS0FBTSxJQUEvQixDQUFGLEdBQXVDLENBQTlDO0FBQWdELFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCO0FBQUMsUUFBSSxJQUFFLFlBQVUsQ0FBVixHQUFZLENBQVosR0FBYyxDQUFwQjtBQUFBLFFBQXNCLElBQUUsQ0FBeEI7QUFBQSxRQUEwQixJQUFFLENBQTVCLENBQThCLElBQUcsT0FBSyxJQUFFLFFBQUYsR0FBVyxTQUFoQixDQUFILEVBQThCLE9BQU8sQ0FBUCxDQUFTLE9BQUssSUFBRSxDQUFQLEVBQVMsS0FBRyxDQUFaO0FBQWMsbUJBQVcsQ0FBWCxLQUFlLEtBQUcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLElBQUUsR0FBRyxDQUFILENBQVYsRUFBZ0IsQ0FBQyxDQUFqQixFQUFtQixDQUFuQixDQUFsQixHQUF5QyxLQUFHLGNBQVksQ0FBWixLQUFnQixLQUFHLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxZQUFVLEdBQUcsQ0FBSCxDQUFsQixFQUF3QixDQUFDLENBQXpCLEVBQTJCLENBQTNCLENBQW5CLEdBQWtELGFBQVcsQ0FBWCxLQUFlLEtBQUcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFdBQVMsR0FBRyxDQUFILENBQVQsR0FBZSxPQUF2QixFQUErQixDQUFDLENBQWhDLEVBQWtDLENBQWxDLENBQWxCLENBQXJELEtBQStHLEtBQUcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFlBQVUsR0FBRyxDQUFILENBQWxCLEVBQXdCLENBQUMsQ0FBekIsRUFBMkIsQ0FBM0IsQ0FBSCxFQUFpQyxjQUFZLENBQVosR0FBYyxLQUFHLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxXQUFTLEdBQUcsQ0FBSCxDQUFULEdBQWUsT0FBdkIsRUFBK0IsQ0FBQyxDQUFoQyxFQUFrQyxDQUFsQyxDQUFqQixHQUFzRCxLQUFHLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxXQUFTLEdBQUcsQ0FBSCxDQUFULEdBQWUsT0FBdkIsRUFBK0IsQ0FBQyxDQUFoQyxFQUFrQyxDQUFsQyxDQUF6TSxDQUF6QztBQUFkLEtBQXNTLE9BQU0sQ0FBQyxDQUFELElBQUksS0FBRyxDQUFQLEtBQVcsS0FBRyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVcsS0FBSyxJQUFMLENBQVUsRUFBRSxXQUFTLEVBQUUsQ0FBRixFQUFLLFdBQUwsRUFBVCxHQUE0QixFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQTlCLElBQTBDLENBQTFDLEdBQTRDLENBQTVDLEdBQThDLENBQTlDLEdBQWdELEVBQTFELENBQVgsQ0FBZCxHQUF5RixDQUEvRjtBQUFpRyxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQjtBQUFDLFFBQUksSUFBRSxHQUFHLENBQUgsQ0FBTjtBQUFBLFFBQVksSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFkO0FBQUEsUUFBd0IsSUFBRSxpQkFBZSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsV0FBUixFQUFvQixDQUFDLENBQXJCLEVBQXVCLENBQXZCLENBQXpDO0FBQUEsUUFBbUUsSUFBRSxDQUFyRSxDQUF1RSxJQUFHLEdBQUcsSUFBSCxDQUFRLENBQVIsQ0FBSCxFQUFjO0FBQUMsVUFBRyxDQUFDLENBQUosRUFBTSxPQUFPLENBQVAsQ0FBUyxJQUFFLE1BQUY7QUFBUyxZQUFPLElBQUUsTUFBSSxFQUFFLGlCQUFGLE1BQXVCLE1BQUksRUFBRSxLQUFGLENBQVEsQ0FBUixDQUEvQixDQUFGLEVBQTZDLENBQUMsV0FBUyxDQUFULElBQVksQ0FBQyxXQUFXLENBQVgsQ0FBRCxJQUFnQixhQUFXLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxTQUFSLEVBQWtCLENBQUMsQ0FBbkIsRUFBcUIsQ0FBckIsQ0FBeEMsTUFBbUUsSUFBRSxFQUFFLFdBQVMsRUFBRSxDQUFGLEVBQUssV0FBTCxFQUFULEdBQTRCLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBOUIsQ0FBRixFQUE0QyxJQUFFLENBQUMsQ0FBbEgsQ0FBN0MsRUFBa0ssQ0FBQyxJQUFFLFdBQVcsQ0FBWCxLQUFlLENBQWxCLElBQXFCLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxNQUFJLElBQUUsUUFBRixHQUFXLFNBQWYsQ0FBUCxFQUFpQyxDQUFqQyxFQUFtQyxDQUFuQyxFQUFxQyxDQUFyQyxDQUFyQixHQUE2RCxJQUF0TztBQUEyTyxLQUFFLE1BQUYsQ0FBUyxFQUFDLFVBQVMsRUFBQyxTQUFRLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFHLENBQUgsRUFBSztBQUFDLGdCQUFJLElBQUUsR0FBRyxDQUFILEVBQUssU0FBTCxDQUFOLENBQXNCLE9BQU0sT0FBSyxDQUFMLEdBQU8sR0FBUCxHQUFXLENBQWpCO0FBQW1CO0FBQUMsU0FBbkUsRUFBVCxFQUFWLEVBQXlGLFdBQVUsRUFBQyx5QkFBd0IsQ0FBQyxDQUExQixFQUE0QixhQUFZLENBQUMsQ0FBekMsRUFBMkMsYUFBWSxDQUFDLENBQXhELEVBQTBELFVBQVMsQ0FBQyxDQUFwRSxFQUFzRSxZQUFXLENBQUMsQ0FBbEYsRUFBb0YsWUFBVyxDQUFDLENBQWhHLEVBQWtHLFlBQVcsQ0FBQyxDQUE5RyxFQUFnSCxTQUFRLENBQUMsQ0FBekgsRUFBMkgsT0FBTSxDQUFDLENBQWxJLEVBQW9JLFNBQVEsQ0FBQyxDQUE3SSxFQUErSSxRQUFPLENBQUMsQ0FBdkosRUFBeUosUUFBTyxDQUFDLENBQWpLLEVBQW1LLE1BQUssQ0FBQyxDQUF6SyxFQUFuRyxFQUErUSxVQUFTLEVBQXhSLEVBQTJSLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsVUFBRyxLQUFHLE1BQUksRUFBRSxRQUFULElBQW1CLE1BQUksRUFBRSxRQUF6QixJQUFtQyxFQUFFLEtBQXhDLEVBQThDO0FBQUMsWUFBSSxDQUFKO0FBQUEsWUFBTSxDQUFOO0FBQUEsWUFBUSxDQUFSO0FBQUEsWUFBVSxJQUFFLEVBQUUsQ0FBRixDQUFaO0FBQUEsWUFBaUIsSUFBRSxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQW5CO0FBQUEsWUFBOEIsSUFBRSxFQUFFLEtBQWxDLENBQXdDLElBQUcsTUFBSSxJQUFFLEdBQUcsQ0FBSCxDQUFOLEdBQWEsSUFBRSxFQUFFLFFBQUYsQ0FBVyxDQUFYLEtBQWUsRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUE5QixFQUE0QyxLQUFLLENBQUwsS0FBUyxDQUF4RCxFQUEwRCxPQUFPLEtBQUcsU0FBUSxDQUFYLElBQWMsS0FBSyxDQUFMLE1BQVUsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBQyxDQUFULEVBQVcsQ0FBWCxDQUFaLENBQWQsR0FBeUMsQ0FBekMsR0FBMkMsRUFBRSxDQUFGLENBQWxELENBQXVELGFBQVcsV0FBUyxDQUFULHlDQUFTLENBQVQsQ0FBWCxNQUF5QixJQUFFLEdBQUcsSUFBSCxDQUFRLENBQVIsQ0FBM0IsS0FBd0MsRUFBRSxDQUFGLENBQXhDLEtBQStDLElBQUUsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBRixFQUFZLElBQUUsUUFBN0QsR0FBdUUsUUFBTSxDQUFOLElBQVMsTUFBSSxDQUFiLEtBQWlCLGFBQVcsQ0FBWCxLQUFlLEtBQUcsS0FBRyxFQUFFLENBQUYsQ0FBSCxLQUFVLEVBQUUsU0FBRixDQUFZLENBQVosSUFBZSxFQUFmLEdBQWtCLElBQTVCLENBQWxCLEdBQXFELEVBQUUsZUFBRixJQUFtQixPQUFLLENBQXhCLElBQTJCLE1BQUksRUFBRSxPQUFGLENBQVUsWUFBVixDQUEvQixLQUF5RCxFQUFFLENBQUYsSUFBSyxTQUE5RCxDQUFyRCxFQUE4SCxLQUFHLFNBQVEsQ0FBWCxJQUFjLEtBQUssQ0FBTCxNQUFVLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLENBQVosQ0FBZCxLQUEwQyxJQUFFLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBRixHQUFxQixFQUFFLENBQUYsSUFBSyxDQUFwRSxDQUEvSSxDQUF2RTtBQUE4UjtBQUFDLEtBQTF4QixFQUEyeEIsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLENBQU47QUFBQSxVQUFRLENBQVI7QUFBQSxVQUFVLElBQUUsRUFBRSxDQUFGLENBQVosQ0FBaUIsT0FBTyxHQUFHLElBQUgsQ0FBUSxDQUFSLE1BQWEsSUFBRSxHQUFHLENBQUgsQ0FBZixHQUFzQixDQUFDLElBQUUsRUFBRSxRQUFGLENBQVcsQ0FBWCxLQUFlLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBbEIsS0FBa0MsU0FBUSxDQUExQyxLQUE4QyxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFDLENBQVQsRUFBVyxDQUFYLENBQWhELENBQXRCLEVBQXFGLEtBQUssQ0FBTCxLQUFTLENBQVQsS0FBYSxJQUFFLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQWYsQ0FBckYsRUFBK0csYUFBVyxDQUFYLElBQWMsS0FBSyxFQUFuQixLQUF3QixJQUFFLEdBQUcsQ0FBSCxDQUExQixDQUEvRyxFQUFnSixPQUFLLENBQUwsSUFBUSxDQUFSLElBQVcsSUFBRSxXQUFXLENBQVgsQ0FBRixFQUFnQixDQUFDLENBQUQsS0FBSyxDQUFMLElBQVEsU0FBUyxDQUFULENBQVIsR0FBb0IsS0FBRyxDQUF2QixHQUF5QixDQUFwRCxJQUF1RCxDQUE5TTtBQUFnTixLQUFsaEMsRUFBVCxHQUE4aEMsRUFBRSxJQUFGLENBQU8sQ0FBQyxRQUFELEVBQVUsT0FBVixDQUFQLEVBQTBCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUUsUUFBRixDQUFXLENBQVgsSUFBYyxFQUFDLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUcsQ0FBSCxFQUFLLE9BQU0sQ0FBQyxHQUFHLElBQUgsQ0FBUSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsU0FBUixDQUFSLENBQUQsSUFBOEIsRUFBRSxjQUFGLEdBQW1CLE1BQW5CLElBQTJCLEVBQUUscUJBQUYsR0FBMEIsS0FBbkYsR0FBeUYsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBekYsR0FBbUcsR0FBRyxDQUFILEVBQUssRUFBTCxFQUFRLFlBQVU7QUFBQyxpQkFBTyxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFQO0FBQWlCLFNBQXBDLENBQXpHO0FBQStJLE9BQXpLLEVBQTBLLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUksQ0FBSjtBQUFBLFlBQU0sSUFBRSxHQUFHLENBQUgsQ0FBUjtBQUFBLFlBQWMsSUFBRSxpQkFBZSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsV0FBUixFQUFvQixDQUFDLENBQXJCLEVBQXVCLENBQXZCLENBQS9CO0FBQUEsWUFBeUQsSUFBRSxLQUFHLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBOUQsQ0FBNEUsT0FBTyxLQUFHLEVBQUUsYUFBRixPQUFvQixFQUFFLFFBQXpCLEtBQW9DLEtBQUcsS0FBSyxJQUFMLENBQVUsRUFBRSxXQUFTLEVBQUUsQ0FBRixFQUFLLFdBQUwsRUFBVCxHQUE0QixFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQTlCLElBQTBDLFdBQVcsRUFBRSxDQUFGLENBQVgsQ0FBMUMsR0FBMkQsR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLFFBQVAsRUFBZ0IsQ0FBQyxDQUFqQixFQUFtQixDQUFuQixDQUEzRCxHQUFpRixFQUEzRixDQUF2QyxHQUF1SSxNQUFJLElBQUUsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFOLEtBQW1CLFVBQVEsRUFBRSxDQUFGLEtBQU0sSUFBZCxDQUFuQixLQUF5QyxFQUFFLEtBQUYsQ0FBUSxDQUFSLElBQVcsQ0FBWCxFQUFhLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBeEQsQ0FBdkksRUFBMk0sR0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBbE47QUFBNE4sT0FBdGUsRUFBZDtBQUFzZixHQUE5aEIsQ0FBOWhDLEVBQThqRCxFQUFFLFFBQUYsQ0FBVyxVQUFYLEdBQXNCLEdBQUcsRUFBRSxrQkFBTCxFQUF3QixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFHLENBQUgsRUFBSyxPQUFNLENBQUMsV0FBVyxHQUFHLENBQUgsRUFBSyxZQUFMLENBQVgsS0FBZ0MsRUFBRSxxQkFBRixHQUEwQixJQUExQixHQUErQixHQUFHLENBQUgsRUFBSyxFQUFDLFlBQVcsQ0FBWixFQUFMLEVBQW9CLFlBQVU7QUFBQyxhQUFPLEVBQUUscUJBQUYsR0FBMEIsSUFBakM7QUFBc0MsS0FBckUsQ0FBaEUsSUFBd0ksSUFBOUk7QUFBbUosR0FBOUwsQ0FBcGxELEVBQW94RCxFQUFFLElBQUYsQ0FBTyxFQUFDLFFBQU8sRUFBUixFQUFXLFNBQVEsRUFBbkIsRUFBc0IsUUFBTyxPQUE3QixFQUFQLEVBQTZDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUUsUUFBRixDQUFXLElBQUUsQ0FBYixJQUFnQixFQUFDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJLElBQUUsQ0FBTixFQUFRLElBQUUsRUFBVixFQUFhLElBQUUsWUFBVSxPQUFPLENBQWpCLEdBQW1CLEVBQUUsS0FBRixDQUFRLEdBQVIsQ0FBbkIsR0FBZ0MsQ0FBQyxDQUFELENBQW5ELEVBQXVELElBQUUsQ0FBekQsRUFBMkQsR0FBM0Q7QUFBK0QsWUFBRSxJQUFFLEdBQUcsQ0FBSCxDQUFGLEdBQVEsQ0FBVixJQUFhLEVBQUUsQ0FBRixLQUFNLEVBQUUsSUFBRSxDQUFKLENBQU4sSUFBYyxFQUFFLENBQUYsQ0FBM0I7QUFBL0QsU0FBK0YsT0FBTyxDQUFQO0FBQVMsT0FBNUgsRUFBaEIsRUFBOEksYUFBVyxDQUFYLEtBQWUsRUFBRSxRQUFGLENBQVcsSUFBRSxDQUFiLEVBQWdCLEdBQWhCLEdBQW9CLEVBQW5DLENBQTlJO0FBQXFMLEdBQWhQLENBQXB4RCxFQUFzZ0UsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLEVBQUUsSUFBRixFQUFPLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxZQUFJLENBQUo7QUFBQSxZQUFNLENBQU47QUFBQSxZQUFRLElBQUUsRUFBVjtBQUFBLFlBQWEsSUFBRSxDQUFmLENBQWlCLElBQUcsTUFBTSxPQUFOLENBQWMsQ0FBZCxDQUFILEVBQW9CO0FBQUMsZUFBSSxJQUFFLEdBQUcsQ0FBSCxDQUFGLEVBQVEsSUFBRSxFQUFFLE1BQWhCLEVBQXVCLElBQUUsQ0FBekIsRUFBMkIsR0FBM0I7QUFBK0IsY0FBRSxFQUFFLENBQUYsQ0FBRixJQUFRLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxFQUFFLENBQUYsQ0FBUixFQUFhLENBQUMsQ0FBZCxFQUFnQixDQUFoQixDQUFSO0FBQS9CLFdBQTBELE9BQU8sQ0FBUDtBQUFTLGdCQUFPLEtBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQVosQ0FBWCxHQUEwQixFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFqQztBQUE0QyxPQUE1SyxFQUE2SyxDQUE3SyxFQUErSyxDQUEvSyxFQUFpTCxVQUFVLE1BQVYsR0FBaUIsQ0FBbE0sQ0FBUDtBQUE0TSxLQUEvTixFQUFaLENBQXRnRSxDQUFvdkUsU0FBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0I7QUFBQyxXQUFPLElBQUksR0FBRyxTQUFILENBQWEsSUFBakIsQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBMEIsQ0FBMUIsRUFBNEIsQ0FBNUIsRUFBOEIsQ0FBOUIsQ0FBUDtBQUF3QyxLQUFFLEtBQUYsR0FBUSxFQUFSLEVBQVcsR0FBRyxTQUFILEdBQWEsRUFBQyxhQUFZLEVBQWIsRUFBZ0IsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUI7QUFBQyxXQUFLLElBQUwsR0FBVSxDQUFWLEVBQVksS0FBSyxJQUFMLEdBQVUsQ0FBdEIsRUFBd0IsS0FBSyxNQUFMLEdBQVksS0FBRyxFQUFFLE1BQUYsQ0FBUyxRQUFoRCxFQUF5RCxLQUFLLE9BQUwsR0FBYSxDQUF0RSxFQUF3RSxLQUFLLEtBQUwsR0FBVyxLQUFLLEdBQUwsR0FBUyxLQUFLLEdBQUwsRUFBNUYsRUFBdUcsS0FBSyxHQUFMLEdBQVMsQ0FBaEgsRUFBa0gsS0FBSyxJQUFMLEdBQVUsTUFBSSxFQUFFLFNBQUYsQ0FBWSxDQUFaLElBQWUsRUFBZixHQUFrQixJQUF0QixDQUE1SDtBQUF3SixLQUFuTSxFQUFvTSxLQUFJLGVBQVU7QUFBQyxVQUFJLElBQUUsR0FBRyxTQUFILENBQWEsS0FBSyxJQUFsQixDQUFOLENBQThCLE9BQU8sS0FBRyxFQUFFLEdBQUwsR0FBUyxFQUFFLEdBQUYsQ0FBTSxJQUFOLENBQVQsR0FBcUIsR0FBRyxTQUFILENBQWEsUUFBYixDQUFzQixHQUF0QixDQUEwQixJQUExQixDQUE1QjtBQUE0RCxLQUE3UyxFQUE4UyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxDQUFKO0FBQUEsVUFBTSxJQUFFLEdBQUcsU0FBSCxDQUFhLEtBQUssSUFBbEIsQ0FBUixDQUFnQyxPQUFPLEtBQUssT0FBTCxDQUFhLFFBQWIsR0FBc0IsS0FBSyxHQUFMLEdBQVMsSUFBRSxFQUFFLE1BQUYsQ0FBUyxLQUFLLE1BQWQsRUFBc0IsQ0FBdEIsRUFBd0IsS0FBSyxPQUFMLENBQWEsUUFBYixHQUFzQixDQUE5QyxFQUFnRCxDQUFoRCxFQUFrRCxDQUFsRCxFQUFvRCxLQUFLLE9BQUwsQ0FBYSxRQUFqRSxDQUFqQyxHQUE0RyxLQUFLLEdBQUwsR0FBUyxJQUFFLENBQXZILEVBQXlILEtBQUssR0FBTCxHQUFTLENBQUMsS0FBSyxHQUFMLEdBQVMsS0FBSyxLQUFmLElBQXNCLENBQXRCLEdBQXdCLEtBQUssS0FBL0osRUFBcUssS0FBSyxPQUFMLENBQWEsSUFBYixJQUFtQixLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQXVCLEtBQUssSUFBNUIsRUFBaUMsS0FBSyxHQUF0QyxFQUEwQyxJQUExQyxDQUF4TCxFQUF3TyxLQUFHLEVBQUUsR0FBTCxHQUFTLEVBQUUsR0FBRixDQUFNLElBQU4sQ0FBVCxHQUFxQixHQUFHLFNBQUgsQ0FBYSxRQUFiLENBQXNCLEdBQXRCLENBQTBCLElBQTFCLENBQTdQLEVBQTZSLElBQXBTO0FBQXlTLEtBQXZvQixFQUF4QixFQUFpcUIsR0FBRyxTQUFILENBQWEsSUFBYixDQUFrQixTQUFsQixHQUE0QixHQUFHLFNBQWhzQixFQUEwc0IsR0FBRyxTQUFILEdBQWEsRUFBQyxVQUFTLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLFlBQUksQ0FBSixDQUFNLE9BQU8sTUFBSSxFQUFFLElBQUYsQ0FBTyxRQUFYLElBQXFCLFFBQU0sRUFBRSxJQUFGLENBQU8sRUFBRSxJQUFULENBQU4sSUFBc0IsUUFBTSxFQUFFLElBQUYsQ0FBTyxLQUFQLENBQWEsRUFBRSxJQUFmLENBQWpELEdBQXNFLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBVCxDQUF0RSxHQUFxRixDQUFDLElBQUUsRUFBRSxHQUFGLENBQU0sRUFBRSxJQUFSLEVBQWEsRUFBRSxJQUFmLEVBQW9CLEVBQXBCLENBQUgsS0FBNkIsV0FBUyxDQUF0QyxHQUF3QyxDQUF4QyxHQUEwQyxDQUF0STtBQUF3SSxPQUEvSixFQUFnSyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxFQUFGLENBQUssSUFBTCxDQUFVLEVBQUUsSUFBWixJQUFrQixFQUFFLEVBQUYsQ0FBSyxJQUFMLENBQVUsRUFBRSxJQUFaLEVBQWtCLENBQWxCLENBQWxCLEdBQXVDLE1BQUksRUFBRSxJQUFGLENBQU8sUUFBWCxJQUFxQixRQUFNLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxFQUFFLFFBQUYsQ0FBVyxFQUFFLElBQWIsQ0FBYixDQUFOLElBQXdDLENBQUMsRUFBRSxRQUFGLENBQVcsRUFBRSxJQUFiLENBQTlELEdBQWlGLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBVCxJQUFlLEVBQUUsR0FBbEcsR0FBc0csRUFBRSxLQUFGLENBQVEsRUFBRSxJQUFWLEVBQWUsRUFBRSxJQUFqQixFQUFzQixFQUFFLEdBQUYsR0FBTSxFQUFFLElBQTlCLENBQTdJO0FBQWlMLE9BQWpXLEVBQVYsRUFBdnRCLEVBQXFrQyxHQUFHLFNBQUgsQ0FBYSxTQUFiLEdBQXVCLEdBQUcsU0FBSCxDQUFhLFVBQWIsR0FBd0IsRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxJQUFGLENBQU8sUUFBUCxJQUFpQixFQUFFLElBQUYsQ0FBTyxVQUF4QixLQUFxQyxFQUFFLElBQUYsQ0FBTyxFQUFFLElBQVQsSUFBZSxFQUFFLEdBQXREO0FBQTJELEtBQTVFLEVBQXBuQyxFQUFrc0MsRUFBRSxNQUFGLEdBQVMsRUFBQyxRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sQ0FBUDtBQUFTLEtBQTdCLEVBQThCLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxhQUFNLEtBQUcsS0FBSyxHQUFMLENBQVMsSUFBRSxLQUFLLEVBQWhCLElBQW9CLENBQTdCO0FBQStCLEtBQS9FLEVBQWdGLFVBQVMsT0FBekYsRUFBM3NDLEVBQTZ5QyxFQUFFLEVBQUYsR0FBSyxHQUFHLFNBQUgsQ0FBYSxJQUEvekMsRUFBbzBDLEVBQUUsRUFBRixDQUFLLElBQUwsR0FBVSxFQUE5MEMsQ0FBaTFDLElBQUksRUFBSjtBQUFBLE1BQU8sRUFBUDtBQUFBLE1BQVUsS0FBRyx3QkFBYjtBQUFBLE1BQXNDLEtBQUcsYUFBekMsQ0FBdUQsU0FBUyxFQUFULEdBQWE7QUFBQyxXQUFLLENBQUMsQ0FBRCxLQUFLLEVBQUUsTUFBUCxJQUFlLEVBQUUscUJBQWpCLEdBQXVDLEVBQUUscUJBQUYsQ0FBd0IsRUFBeEIsQ0FBdkMsR0FBbUUsRUFBRSxVQUFGLENBQWEsRUFBYixFQUFnQixFQUFFLEVBQUYsQ0FBSyxRQUFyQixDQUFuRSxFQUFrRyxFQUFFLEVBQUYsQ0FBSyxJQUFMLEVBQXZHO0FBQW9ILFlBQVMsRUFBVCxHQUFhO0FBQUMsV0FBTyxFQUFFLFVBQUYsQ0FBYSxZQUFVO0FBQUMsV0FBRyxLQUFLLENBQVI7QUFBVSxLQUFsQyxHQUFvQyxLQUFHLEtBQUssR0FBTCxFQUE5QztBQUF5RCxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFFBQUksQ0FBSjtBQUFBLFFBQU0sSUFBRSxDQUFSO0FBQUEsUUFBVSxJQUFFLEVBQUMsUUFBTyxDQUFSLEVBQVosQ0FBdUIsS0FBSSxJQUFFLElBQUUsQ0FBRixHQUFJLENBQVYsRUFBWSxJQUFFLENBQWQsRUFBZ0IsS0FBRyxJQUFFLENBQXJCO0FBQXVCLFFBQUUsWUFBVSxJQUFFLEdBQUcsQ0FBSCxDQUFaLENBQUYsSUFBc0IsRUFBRSxZQUFVLENBQVosSUFBZSxDQUFyQztBQUF2QixLQUE4RCxPQUFPLE1BQUksRUFBRSxPQUFGLEdBQVUsRUFBRSxLQUFGLEdBQVEsQ0FBdEIsR0FBeUIsQ0FBaEM7QUFBa0MsWUFBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxTQUFJLElBQUksQ0FBSixFQUFNLElBQUUsQ0FBQyxHQUFHLFFBQUgsQ0FBWSxDQUFaLEtBQWdCLEVBQWpCLEVBQXFCLE1BQXJCLENBQTRCLEdBQUcsUUFBSCxDQUFZLEdBQVosQ0FBNUIsQ0FBUixFQUFzRCxJQUFFLENBQXhELEVBQTBELElBQUUsRUFBRSxNQUFsRSxFQUF5RSxJQUFFLENBQTNFLEVBQTZFLEdBQTdFO0FBQWlGLFVBQUcsSUFBRSxFQUFFLENBQUYsRUFBSyxJQUFMLENBQVUsQ0FBVixFQUFZLENBQVosRUFBYyxDQUFkLENBQUwsRUFBc0IsT0FBTyxDQUFQO0FBQXZHO0FBQWdILFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCO0FBQUMsUUFBSSxDQUFKO0FBQUEsUUFBTSxDQUFOO0FBQUEsUUFBUSxDQUFSO0FBQUEsUUFBVSxDQUFWO0FBQUEsUUFBWSxDQUFaO0FBQUEsUUFBYyxDQUFkO0FBQUEsUUFBZ0IsQ0FBaEI7QUFBQSxRQUFrQixDQUFsQjtBQUFBLFFBQW9CLElBQUUsV0FBVSxDQUFWLElBQWEsWUFBVyxDQUE5QztBQUFBLFFBQWdELElBQUUsSUFBbEQ7QUFBQSxRQUF1RCxJQUFFLEVBQXpEO0FBQUEsUUFBNEQsSUFBRSxFQUFFLEtBQWhFO0FBQUEsUUFBc0UsSUFBRSxFQUFFLFFBQUYsSUFBWSxHQUFHLENBQUgsQ0FBcEY7QUFBQSxRQUEwRixJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxRQUFSLENBQTVGLENBQThHLEVBQUUsS0FBRixLQUFVLFFBQU0sQ0FBQyxJQUFFLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsSUFBaEIsQ0FBSCxFQUEwQixRQUFoQyxLQUEyQyxFQUFFLFFBQUYsR0FBVyxDQUFYLEVBQWEsSUFBRSxFQUFFLEtBQUYsQ0FBUSxJQUF2QixFQUE0QixFQUFFLEtBQUYsQ0FBUSxJQUFSLEdBQWEsWUFBVTtBQUFDLFFBQUUsUUFBRixJQUFZLEdBQVo7QUFBZ0IsS0FBL0csR0FBaUgsRUFBRSxRQUFGLEVBQWpILEVBQThILEVBQUUsTUFBRixDQUFTLFlBQVU7QUFBQyxRQUFFLE1BQUYsQ0FBUyxZQUFVO0FBQUMsVUFBRSxRQUFGLElBQWEsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsSUFBd0IsRUFBRSxLQUFGLENBQVEsSUFBUixFQUFyQztBQUFvRCxPQUF4RTtBQUEwRSxLQUE5RixDQUF4SSxFQUF5TyxLQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsVUFBRyxJQUFFLEVBQUUsQ0FBRixDQUFGLEVBQU8sR0FBRyxJQUFILENBQVEsQ0FBUixDQUFWLEVBQXFCO0FBQUMsWUFBRyxPQUFPLEVBQUUsQ0FBRixDQUFQLEVBQVksSUFBRSxLQUFHLGFBQVcsQ0FBNUIsRUFBOEIsT0FBSyxJQUFFLE1BQUYsR0FBUyxNQUFkLENBQWpDLEVBQXVEO0FBQUMsY0FBRyxXQUFTLENBQVQsSUFBWSxDQUFDLENBQWIsSUFBZ0IsS0FBSyxDQUFMLEtBQVMsRUFBRSxDQUFGLENBQTVCLEVBQWlDLFNBQVMsSUFBRSxDQUFDLENBQUg7QUFBSyxXQUFFLENBQUYsSUFBSyxLQUFHLEVBQUUsQ0FBRixDQUFILElBQVMsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBZDtBQUEyQjtBQUFuSyxLQUFtSyxJQUFHLENBQUMsSUFBRSxDQUFDLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFKLEtBQXlCLENBQUMsRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQTdCLEVBQWdEO0FBQUMsV0FBRyxNQUFJLEVBQUUsUUFBVCxLQUFvQixFQUFFLFFBQUYsR0FBVyxDQUFDLEVBQUUsUUFBSCxFQUFZLEVBQUUsU0FBZCxFQUF3QixFQUFFLFNBQTFCLENBQVgsRUFBZ0QsU0FBTyxJQUFFLEtBQUcsRUFBRSxPQUFkLE1BQXlCLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFNBQVIsQ0FBM0IsQ0FBaEQsRUFBK0YsWUFBVSxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxTQUFSLENBQVosTUFBa0MsSUFBRSxJQUFFLENBQUosSUFBTyxHQUFHLENBQUMsQ0FBRCxDQUFILEVBQU8sQ0FBQyxDQUFSLEdBQVcsSUFBRSxFQUFFLEtBQUYsQ0FBUSxPQUFSLElBQWlCLENBQTlCLEVBQWdDLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFNBQVIsQ0FBbEMsRUFBcUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUE1RCxDQUFsQyxDQUEvRixFQUF1TSxDQUFDLGFBQVcsQ0FBWCxJQUFjLG1CQUFpQixDQUFqQixJQUFvQixRQUFNLENBQXpDLEtBQTZDLFdBQVMsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLE9BQVIsQ0FBdEQsS0FBeUUsTUFBSSxFQUFFLElBQUYsQ0FBTyxZQUFVO0FBQUMsVUFBRSxPQUFGLEdBQVUsQ0FBVjtBQUFZLE9BQTlCLEdBQWdDLFFBQU0sQ0FBTixLQUFVLElBQUUsRUFBRSxPQUFKLEVBQVksSUFBRSxXQUFTLENBQVQsR0FBVyxFQUFYLEdBQWMsQ0FBdEMsQ0FBcEMsR0FBOEUsRUFBRSxPQUFGLEdBQVUsY0FBakssQ0FBM04sR0FBNlksRUFBRSxRQUFGLEtBQWEsRUFBRSxRQUFGLEdBQVcsUUFBWCxFQUFvQixFQUFFLE1BQUYsQ0FBUyxZQUFVO0FBQUMsVUFBRSxRQUFGLEdBQVcsRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFYLEVBQXlCLEVBQUUsU0FBRixHQUFZLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBckMsRUFBbUQsRUFBRSxTQUFGLEdBQVksRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUEvRDtBQUE2RSxPQUFqRyxDQUFqQyxDQUE3WSxFQUFraEIsSUFBRSxDQUFDLENBQXJoQixDQUF1aEIsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLGNBQUksSUFBRSxZQUFXLENBQVgsS0FBZSxJQUFFLEVBQUUsTUFBbkIsQ0FBRixHQUE2QixJQUFFLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxRQUFYLEVBQW9CLEVBQUMsU0FBUSxDQUFULEVBQXBCLENBQS9CLEVBQWdFLE1BQUksRUFBRSxNQUFGLEdBQVMsQ0FBQyxDQUFkLENBQWhFLEVBQWlGLEtBQUcsR0FBRyxDQUFDLENBQUQsQ0FBSCxFQUFPLENBQUMsQ0FBUixDQUFwRixFQUErRixFQUFFLElBQUYsQ0FBTyxZQUFVO0FBQUMsZUFBRyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQUgsRUFBVyxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsUUFBWCxDQUFYLENBQWdDLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxjQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLEVBQUUsQ0FBRixDQUFaO0FBQVg7QUFBNkIsU0FBL0UsQ0FBbkcsR0FBcUwsSUFBRSxHQUFHLElBQUUsRUFBRSxDQUFGLENBQUYsR0FBTyxDQUFWLEVBQVksQ0FBWixFQUFjLENBQWQsQ0FBdkwsRUFBd00sS0FBSyxDQUFMLEtBQVMsRUFBRSxDQUFGLElBQUssRUFBRSxLQUFQLEVBQWEsTUFBSSxFQUFFLEdBQUYsR0FBTSxFQUFFLEtBQVIsRUFBYyxFQUFFLEtBQUYsR0FBUSxDQUExQixDQUF0QixDQUF4TTtBQUFYO0FBQXVRO0FBQUMsWUFBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQyxRQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFaLENBQWMsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFVBQUcsSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLElBQUUsRUFBRSxDQUFGLENBQVQsRUFBYyxJQUFFLEVBQUUsQ0FBRixDQUFoQixFQUFxQixNQUFNLE9BQU4sQ0FBYyxDQUFkLE1BQW1CLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxJQUFFLEVBQUUsQ0FBRixJQUFLLEVBQUUsQ0FBRixDQUFqQyxDQUFyQixFQUE0RCxNQUFJLENBQUosS0FBUSxFQUFFLENBQUYsSUFBSyxDQUFMLEVBQU8sT0FBTyxFQUFFLENBQUYsQ0FBdEIsQ0FBNUQsRUFBd0YsQ0FBQyxJQUFFLEVBQUUsUUFBRixDQUFXLENBQVgsQ0FBSCxLQUFtQixZQUFXLENBQXpILEVBQTJIO0FBQUMsWUFBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULENBQUYsRUFBYyxPQUFPLEVBQUUsQ0FBRixDQUFyQixDQUEwQixLQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsZUFBSyxDQUFMLEtBQVMsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLENBQUwsRUFBVSxFQUFFLENBQUYsSUFBSyxDQUF4QjtBQUFYO0FBQXNDLE9BQTVMLE1BQWlNLEVBQUUsQ0FBRixJQUFLLENBQUw7QUFBNU07QUFBbU4sWUFBUyxFQUFULENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0I7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLENBQU47QUFBQSxRQUFRLElBQUUsQ0FBVjtBQUFBLFFBQVksSUFBRSxHQUFHLFVBQUgsQ0FBYyxNQUE1QjtBQUFBLFFBQW1DLElBQUUsRUFBRSxRQUFGLEdBQWEsTUFBYixDQUFvQixZQUFVO0FBQUMsYUFBTyxFQUFFLElBQVQ7QUFBYyxLQUE3QyxDQUFyQztBQUFBLFFBQW9GLElBQUUsU0FBRixDQUFFLEdBQVU7QUFBQyxVQUFHLENBQUgsRUFBSyxPQUFNLENBQUMsQ0FBUCxDQUFTLEtBQUksSUFBSSxJQUFFLE1BQUksSUFBVixFQUFlLElBQUUsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFXLEVBQUUsU0FBRixHQUFZLEVBQUUsUUFBZCxHQUF1QixDQUFsQyxDQUFqQixFQUFzRCxJQUFFLEtBQUcsSUFBRSxFQUFFLFFBQUosSUFBYyxDQUFqQixDQUF4RCxFQUE0RSxJQUFFLENBQTlFLEVBQWdGLElBQUUsRUFBRSxNQUFGLENBQVMsTUFBL0YsRUFBc0csSUFBRSxDQUF4RyxFQUEwRyxHQUExRztBQUE4RyxVQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksR0FBWixDQUFnQixDQUFoQjtBQUE5RyxPQUFpSSxPQUFPLEVBQUUsVUFBRixDQUFhLENBQWIsRUFBZSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFmLEdBQXdCLElBQUUsQ0FBRixJQUFLLENBQUwsR0FBTyxDQUFQLElBQVUsS0FBRyxFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBZixDQUFILEVBQTJCLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFELENBQWhCLENBQTNCLEVBQWdELENBQUMsQ0FBM0QsQ0FBL0I7QUFBNkYsS0FBN1U7QUFBQSxRQUE4VSxJQUFFLEVBQUUsT0FBRixDQUFVLEVBQUMsTUFBSyxDQUFOLEVBQVEsT0FBTSxFQUFFLE1BQUYsQ0FBUyxFQUFULEVBQVksQ0FBWixDQUFkLEVBQTZCLE1BQUssRUFBRSxNQUFGLENBQVMsQ0FBQyxDQUFWLEVBQVksRUFBQyxlQUFjLEVBQWYsRUFBa0IsUUFBTyxFQUFFLE1BQUYsQ0FBUyxRQUFsQyxFQUFaLEVBQXdELENBQXhELENBQWxDLEVBQTZGLG9CQUFtQixDQUFoSCxFQUFrSCxpQkFBZ0IsQ0FBbEksRUFBb0ksV0FBVSxNQUFJLElBQWxKLEVBQXVKLFVBQVMsRUFBRSxRQUFsSyxFQUEySyxRQUFPLEVBQWxMLEVBQXFMLGFBQVkscUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUksSUFBRSxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsRUFBRSxJQUFaLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLEVBQUUsSUFBRixDQUFPLGFBQVAsQ0FBcUIsQ0FBckIsS0FBeUIsRUFBRSxJQUFGLENBQU8sTUFBckQsQ0FBTixDQUFtRSxPQUFPLEVBQUUsTUFBRixDQUFTLElBQVQsQ0FBYyxDQUFkLEdBQWlCLENBQXhCO0FBQTBCLE9BQTVTLEVBQTZTLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxZQUFJLElBQUUsQ0FBTjtBQUFBLFlBQVEsSUFBRSxJQUFFLEVBQUUsTUFBRixDQUFTLE1BQVgsR0FBa0IsQ0FBNUIsQ0FBOEIsSUFBRyxDQUFILEVBQUssT0FBTyxJQUFQLENBQVksS0FBSSxJQUFFLENBQUMsQ0FBUCxFQUFTLElBQUUsQ0FBWCxFQUFhLEdBQWI7QUFBaUIsWUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBZ0IsQ0FBaEI7QUFBakIsU0FBb0MsT0FBTyxLQUFHLEVBQUUsVUFBRixDQUFhLENBQWIsRUFBZSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFmLEdBQXdCLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFoQixDQUEzQixJQUFtRCxFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFmLENBQW5ELEVBQXlFLElBQWhGO0FBQXFGLE9BQXRlLEVBQVYsQ0FBaFY7QUFBQSxRQUFtMEIsSUFBRSxFQUFFLEtBQXYwQixDQUE2MEIsS0FBSSxHQUFHLENBQUgsRUFBSyxFQUFFLElBQUYsQ0FBTyxhQUFaLENBQUosRUFBK0IsSUFBRSxDQUFqQyxFQUFtQyxHQUFuQztBQUF1QyxVQUFHLElBQUUsR0FBRyxVQUFILENBQWMsQ0FBZCxFQUFpQixJQUFqQixDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQixDQUExQixFQUE0QixFQUFFLElBQTlCLENBQUwsRUFBeUMsT0FBTyxFQUFFLEVBQUUsSUFBSixNQUFZLEVBQUUsV0FBRixDQUFjLEVBQUUsSUFBaEIsRUFBcUIsRUFBRSxJQUFGLENBQU8sS0FBNUIsRUFBbUMsSUFBbkMsR0FBd0MsRUFBRSxJQUFGLENBQU8sSUFBUCxDQUFZLENBQVosQ0FBcEQsR0FBb0UsQ0FBM0U7QUFBaEYsS0FBNkosT0FBTyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsRUFBUixFQUFXLENBQVgsR0FBYyxFQUFFLEVBQUUsSUFBRixDQUFPLEtBQVQsS0FBaUIsRUFBRSxJQUFGLENBQU8sS0FBUCxDQUFhLElBQWIsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsQ0FBL0IsRUFBc0QsRUFBRSxRQUFGLENBQVcsRUFBRSxJQUFGLENBQU8sUUFBbEIsRUFBNEIsSUFBNUIsQ0FBaUMsRUFBRSxJQUFGLENBQU8sSUFBeEMsRUFBNkMsRUFBRSxJQUFGLENBQU8sUUFBcEQsRUFBOEQsSUFBOUQsQ0FBbUUsRUFBRSxJQUFGLENBQU8sSUFBMUUsRUFBZ0YsTUFBaEYsQ0FBdUYsRUFBRSxJQUFGLENBQU8sTUFBOUYsQ0FBdEQsRUFBNEosRUFBRSxFQUFGLENBQUssS0FBTCxDQUFXLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxFQUFDLE1BQUssQ0FBTixFQUFRLE1BQUssQ0FBYixFQUFlLE9BQU0sRUFBRSxJQUFGLENBQU8sS0FBNUIsRUFBWCxDQUFYLENBQTVKLEVBQXVOLENBQTlOO0FBQWdPLEtBQUUsU0FBRixHQUFZLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBWSxFQUFDLFVBQVMsRUFBQyxLQUFJLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBSSxJQUFFLEtBQUssV0FBTCxDQUFpQixDQUFqQixFQUFtQixDQUFuQixDQUFOLENBQTRCLE9BQU8sR0FBRyxFQUFFLElBQUwsRUFBVSxDQUFWLEVBQVksR0FBRyxJQUFILENBQVEsQ0FBUixDQUFaLEVBQXVCLENBQXZCLEdBQTBCLENBQWpDO0FBQW1DLE9BQTlFLENBQUwsRUFBVixFQUFnRyxTQUFRLGlCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFFLENBQUYsS0FBTSxJQUFFLENBQUYsRUFBSSxJQUFFLENBQUMsR0FBRCxDQUFaLElBQW1CLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFyQixDQUFnQyxLQUFJLElBQUksQ0FBSixFQUFNLElBQUUsQ0FBUixFQUFVLElBQUUsRUFBRSxNQUFsQixFQUF5QixJQUFFLENBQTNCLEVBQTZCLEdBQTdCO0FBQWlDLFlBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxHQUFHLFFBQUgsQ0FBWSxDQUFaLElBQWUsR0FBRyxRQUFILENBQVksQ0FBWixLQUFnQixFQUF0QyxFQUF5QyxHQUFHLFFBQUgsQ0FBWSxDQUFaLEVBQWUsT0FBZixDQUF1QixDQUF2QixDQUF6QztBQUFqQztBQUFvRyxLQUExUCxFQUEyUCxZQUFXLENBQUMsRUFBRCxDQUF0USxFQUEyUSxXQUFVLG1CQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFFLEdBQUcsVUFBSCxDQUFjLE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBRixHQUEyQixHQUFHLFVBQUgsQ0FBYyxJQUFkLENBQW1CLENBQW5CLENBQTNCO0FBQWlELEtBQXBWLEVBQVosQ0FBWixFQUErVyxFQUFFLEtBQUYsR0FBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBSSxJQUFFLEtBQUcsb0JBQWlCLENBQWpCLHlDQUFpQixDQUFqQixFQUFILEdBQXNCLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBWSxDQUFaLENBQXRCLEdBQXFDLEVBQUMsVUFBUyxLQUFHLENBQUMsQ0FBRCxJQUFJLENBQVAsSUFBVSxFQUFFLENBQUYsS0FBTSxDQUExQixFQUE0QixVQUFTLENBQXJDLEVBQXVDLFFBQU8sS0FBRyxDQUFILElBQU0sS0FBRyxDQUFDLEVBQUUsQ0FBRixDQUFKLElBQVUsQ0FBOUQsRUFBM0MsQ0FBNEcsT0FBTyxFQUFFLEVBQUYsQ0FBSyxHQUFMLEdBQVMsRUFBRSxRQUFGLEdBQVcsQ0FBcEIsR0FBc0IsWUFBVSxPQUFPLEVBQUUsUUFBbkIsS0FBOEIsRUFBRSxRQUFGLElBQWMsRUFBRSxFQUFGLENBQUssTUFBbkIsR0FBMEIsRUFBRSxRQUFGLEdBQVcsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUUsUUFBZCxDQUFyQyxHQUE2RCxFQUFFLFFBQUYsR0FBVyxFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksUUFBbEgsQ0FBdEIsRUFBa0osUUFBTSxFQUFFLEtBQVIsSUFBZSxDQUFDLENBQUQsS0FBSyxFQUFFLEtBQXRCLEtBQThCLEVBQUUsS0FBRixHQUFRLElBQXRDLENBQWxKLEVBQThMLEVBQUUsR0FBRixHQUFNLEVBQUUsUUFBdE0sRUFBK00sRUFBRSxRQUFGLEdBQVcsWUFBVTtBQUFDLFFBQUUsRUFBRSxHQUFKLEtBQVUsRUFBRSxHQUFGLENBQU0sSUFBTixDQUFXLElBQVgsQ0FBVixFQUEyQixFQUFFLEtBQUYsSUFBUyxFQUFFLE9BQUYsQ0FBVSxJQUFWLEVBQWUsRUFBRSxLQUFqQixDQUFwQztBQUE0RCxLQUFqUyxFQUFrUyxDQUF6UztBQUEyUyxHQUE5eEIsRUFBK3hCLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLGFBQU8sS0FBSyxNQUFMLENBQVksRUFBWixFQUFnQixHQUFoQixDQUFvQixTQUFwQixFQUE4QixDQUE5QixFQUFpQyxJQUFqQyxHQUF3QyxHQUF4QyxHQUE4QyxPQUE5QyxDQUFzRCxFQUFDLFNBQVEsQ0FBVCxFQUF0RCxFQUFrRSxDQUFsRSxFQUFvRSxDQUFwRSxFQUFzRSxDQUF0RSxDQUFQO0FBQWdGLEtBQTFHLEVBQTJHLFNBQVEsaUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFVBQUksSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBTjtBQUFBLFVBQXlCLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxDQUFaLENBQTNCO0FBQUEsVUFBMEMsSUFBRSxTQUFGLENBQUUsR0FBVTtBQUFDLFlBQUksSUFBRSxHQUFHLElBQUgsRUFBUSxFQUFFLE1BQUYsQ0FBUyxFQUFULEVBQVksQ0FBWixDQUFSLEVBQXVCLENBQXZCLENBQU4sQ0FBZ0MsQ0FBQyxLQUFHLEVBQUUsR0FBRixDQUFNLElBQU4sRUFBVyxRQUFYLENBQUosS0FBMkIsRUFBRSxJQUFGLENBQU8sQ0FBQyxDQUFSLENBQTNCO0FBQXNDLE9BQTdILENBQThILE9BQU8sRUFBRSxNQUFGLEdBQVMsQ0FBVCxFQUFXLEtBQUcsQ0FBQyxDQUFELEtBQUssRUFBRSxLQUFWLEdBQWdCLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBaEIsR0FBNkIsS0FBSyxLQUFMLENBQVcsRUFBRSxLQUFiLEVBQW1CLENBQW5CLENBQS9DO0FBQXFFLEtBQXhVLEVBQXlVLE1BQUssY0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFVBQUksSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVc7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFSLENBQWEsT0FBTyxFQUFFLElBQVQsRUFBYyxFQUFFLENBQUYsQ0FBZDtBQUFtQixPQUFsRCxDQUFtRCxPQUFNLFlBQVUsT0FBTyxDQUFqQixLQUFxQixJQUFFLENBQUYsRUFBSSxJQUFFLENBQU4sRUFBUSxJQUFFLEtBQUssQ0FBcEMsR0FBdUMsS0FBRyxDQUFDLENBQUQsS0FBSyxDQUFSLElBQVcsS0FBSyxLQUFMLENBQVcsS0FBRyxJQUFkLEVBQW1CLEVBQW5CLENBQWxELEVBQXlFLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxZQUFJLElBQUUsQ0FBQyxDQUFQO0FBQUEsWUFBUyxJQUFFLFFBQU0sQ0FBTixJQUFTLElBQUUsWUFBdEI7QUFBQSxZQUFtQyxJQUFFLEVBQUUsTUFBdkM7QUFBQSxZQUE4QyxJQUFFLEVBQUUsR0FBRixDQUFNLElBQU4sQ0FBaEQsQ0FBNEQsSUFBRyxDQUFILEVBQUssRUFBRSxDQUFGLEtBQU0sRUFBRSxDQUFGLEVBQUssSUFBWCxJQUFpQixFQUFFLEVBQUUsQ0FBRixDQUFGLENBQWpCLENBQUwsS0FBbUMsS0FBSSxDQUFKLElBQVMsQ0FBVDtBQUFXLFlBQUUsQ0FBRixLQUFNLEVBQUUsQ0FBRixFQUFLLElBQVgsSUFBaUIsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFqQixJQUE2QixFQUFFLEVBQUUsQ0FBRixDQUFGLENBQTdCO0FBQVgsU0FBZ0QsS0FBSSxJQUFFLEVBQUUsTUFBUixFQUFlLEdBQWY7QUFBb0IsWUFBRSxDQUFGLEVBQUssSUFBTCxLQUFZLElBQVosSUFBa0IsUUFBTSxDQUFOLElBQVMsRUFBRSxDQUFGLEVBQUssS0FBTCxLQUFhLENBQXhDLEtBQTRDLEVBQUUsQ0FBRixFQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsQ0FBZixHQUFrQixJQUFFLENBQUMsQ0FBckIsRUFBdUIsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBbkU7QUFBcEIsU0FBc0csQ0FBQyxDQUFELElBQUksQ0FBSixJQUFPLEVBQUUsT0FBRixDQUFVLElBQVYsRUFBZSxDQUFmLENBQVA7QUFBeUIsT0FBblMsQ0FBL0U7QUFBb1gsS0FBcndCLEVBQXN3QixRQUFPLGdCQUFTLENBQVQsRUFBVztBQUFDLGFBQU0sQ0FBQyxDQUFELEtBQUssQ0FBTCxLQUFTLElBQUUsS0FBRyxJQUFkLEdBQW9CLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxZQUFJLENBQUo7QUFBQSxZQUFNLElBQUUsRUFBRSxHQUFGLENBQU0sSUFBTixDQUFSO0FBQUEsWUFBb0IsSUFBRSxFQUFFLElBQUUsT0FBSixDQUF0QjtBQUFBLFlBQW1DLElBQUUsRUFBRSxJQUFFLFlBQUosQ0FBckM7QUFBQSxZQUF1RCxJQUFFLEVBQUUsTUFBM0Q7QUFBQSxZQUFrRSxJQUFFLElBQUUsRUFBRSxNQUFKLEdBQVcsQ0FBL0UsQ0FBaUYsS0FBSSxFQUFFLE1BQUYsR0FBUyxDQUFDLENBQVYsRUFBWSxFQUFFLEtBQUYsQ0FBUSxJQUFSLEVBQWEsQ0FBYixFQUFlLEVBQWYsQ0FBWixFQUErQixLQUFHLEVBQUUsSUFBTCxJQUFXLEVBQUUsSUFBRixDQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWlCLENBQUMsQ0FBbEIsQ0FBMUMsRUFBK0QsSUFBRSxFQUFFLE1BQXZFLEVBQThFLEdBQTlFO0FBQW1GLFlBQUUsQ0FBRixFQUFLLElBQUwsS0FBWSxJQUFaLElBQWtCLEVBQUUsQ0FBRixFQUFLLEtBQUwsS0FBYSxDQUEvQixLQUFtQyxFQUFFLENBQUYsRUFBSyxJQUFMLENBQVUsSUFBVixDQUFlLENBQUMsQ0FBaEIsR0FBbUIsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBdEQ7QUFBbkYsU0FBd0osS0FBSSxJQUFFLENBQU4sRUFBUSxJQUFFLENBQVYsRUFBWSxHQUFaO0FBQWdCLFlBQUUsQ0FBRixLQUFNLEVBQUUsQ0FBRixFQUFLLE1BQVgsSUFBbUIsRUFBRSxDQUFGLEVBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FBbkI7QUFBaEIsU0FBMEQsT0FBTyxFQUFFLE1BQVQ7QUFBZ0IsT0FBeFUsQ0FBMUI7QUFBb1csS0FBN25DLEVBQVosQ0FBL3hCLEVBQTI2RCxFQUFFLElBQUYsQ0FBTyxDQUFDLFFBQUQsRUFBVSxNQUFWLEVBQWlCLE1BQWpCLENBQVAsRUFBZ0MsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBSSxJQUFFLEVBQUUsRUFBRixDQUFLLENBQUwsQ0FBTixDQUFjLEVBQUUsRUFBRixDQUFLLENBQUwsSUFBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxRQUFNLENBQU4sSUFBUyxhQUFXLE9BQU8sQ0FBM0IsR0FBNkIsRUFBRSxLQUFGLENBQVEsSUFBUixFQUFhLFNBQWIsQ0FBN0IsR0FBcUQsS0FBSyxPQUFMLENBQWEsR0FBRyxDQUFILEVBQUssQ0FBQyxDQUFOLENBQWIsRUFBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBMEIsQ0FBMUIsQ0FBNUQ7QUFBeUYsS0FBakg7QUFBa0gsR0FBOUssQ0FBMzZELEVBQTJsRSxFQUFFLElBQUYsQ0FBTyxFQUFDLFdBQVUsR0FBRyxNQUFILENBQVgsRUFBc0IsU0FBUSxHQUFHLE1BQUgsQ0FBOUIsRUFBeUMsYUFBWSxHQUFHLFFBQUgsQ0FBckQsRUFBa0UsUUFBTyxFQUFDLFNBQVEsTUFBVCxFQUF6RSxFQUEwRixTQUFRLEVBQUMsU0FBUSxNQUFULEVBQWxHLEVBQW1ILFlBQVcsRUFBQyxTQUFRLFFBQVQsRUFBOUgsRUFBUCxFQUF5SixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxNQUFFLEVBQUYsQ0FBSyxDQUFMLElBQVEsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sS0FBSyxPQUFMLENBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsQ0FBUDtBQUE2QixLQUFyRDtBQUFzRCxHQUE3TixDQUEzbEUsRUFBMHpFLEVBQUUsTUFBRixHQUFTLEVBQW4wRSxFQUFzMEUsRUFBRSxFQUFGLENBQUssSUFBTCxHQUFVLFlBQVU7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLElBQUUsQ0FBUjtBQUFBLFFBQVUsSUFBRSxFQUFFLE1BQWQsQ0FBcUIsS0FBSSxLQUFHLEtBQUssR0FBTCxFQUFQLEVBQWtCLElBQUUsRUFBRSxNQUF0QixFQUE2QixHQUE3QjtBQUFpQyxPQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsT0FBWSxFQUFFLENBQUYsTUFBTyxDQUFuQixJQUFzQixFQUFFLE1BQUYsQ0FBUyxHQUFULEVBQWEsQ0FBYixDQUF0QjtBQUFqQyxLQUF1RSxFQUFFLE1BQUYsSUFBVSxFQUFFLEVBQUYsQ0FBSyxJQUFMLEVBQVYsRUFBc0IsS0FBRyxLQUFLLENBQTlCO0FBQWdDLEdBQXY5RSxFQUF3OUUsRUFBRSxFQUFGLENBQUssS0FBTCxHQUFXLFVBQVMsQ0FBVCxFQUFXO0FBQUMsTUFBRSxNQUFGLENBQVMsSUFBVCxDQUFjLENBQWQsR0FBaUIsRUFBRSxFQUFGLENBQUssS0FBTCxFQUFqQjtBQUE4QixHQUE3Z0YsRUFBOGdGLEVBQUUsRUFBRixDQUFLLFFBQUwsR0FBYyxFQUE1aEYsRUFBK2hGLEVBQUUsRUFBRixDQUFLLEtBQUwsR0FBVyxZQUFVO0FBQUMsV0FBSyxLQUFHLENBQUMsQ0FBSixFQUFNLElBQVg7QUFBaUIsR0FBdGtGLEVBQXVrRixFQUFFLEVBQUYsQ0FBSyxJQUFMLEdBQVUsWUFBVTtBQUFDLFNBQUcsSUFBSDtBQUFRLEdBQXBtRixFQUFxbUYsRUFBRSxFQUFGLENBQUssTUFBTCxHQUFZLEVBQUMsTUFBSyxHQUFOLEVBQVUsTUFBSyxHQUFmLEVBQW1CLFVBQVMsR0FBNUIsRUFBam5GLEVBQWtwRixFQUFFLEVBQUYsQ0FBSyxLQUFMLEdBQVcsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBTyxJQUFFLEVBQUUsRUFBRixHQUFLLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxDQUFaLEtBQWdCLENBQXJCLEdBQXVCLENBQXpCLEVBQTJCLElBQUUsS0FBRyxJQUFoQyxFQUFxQyxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWEsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxJQUFFLEVBQUUsVUFBRixDQUFhLENBQWIsRUFBZSxDQUFmLENBQU4sQ0FBd0IsRUFBRSxJQUFGLEdBQU8sWUFBVTtBQUFDLFVBQUUsWUFBRixDQUFlLENBQWY7QUFBa0IsT0FBcEM7QUFBcUMsS0FBeEYsQ0FBNUM7QUFBc0ksR0FBanpGLEVBQWt6RixZQUFVO0FBQUMsUUFBSSxJQUFFLEVBQUUsYUFBRixDQUFnQixPQUFoQixDQUFOO0FBQUEsUUFBK0IsSUFBRSxFQUFFLGFBQUYsQ0FBZ0IsUUFBaEIsRUFBMEIsV0FBMUIsQ0FBc0MsRUFBRSxhQUFGLENBQWdCLFFBQWhCLENBQXRDLENBQWpDLENBQWtHLEVBQUUsSUFBRixHQUFPLFVBQVAsRUFBa0IsRUFBRSxPQUFGLEdBQVUsT0FBSyxFQUFFLEtBQW5DLEVBQXlDLEVBQUUsV0FBRixHQUFjLEVBQUUsUUFBekQsRUFBa0UsQ0FBQyxJQUFFLEVBQUUsYUFBRixDQUFnQixPQUFoQixDQUFILEVBQTZCLEtBQTdCLEdBQW1DLEdBQXJHLEVBQXlHLEVBQUUsSUFBRixHQUFPLE9BQWhILEVBQXdILEVBQUUsVUFBRixHQUFhLFFBQU0sRUFBRSxLQUE3STtBQUFtSixHQUFoUSxFQUFsekYsQ0FBcWpHLElBQUksRUFBSjtBQUFBLE1BQU8sS0FBRyxFQUFFLElBQUYsQ0FBTyxVQUFqQixDQUE0QixFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sRUFBRSxJQUFGLEVBQU8sRUFBRSxJQUFULEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixVQUFVLE1BQVYsR0FBaUIsQ0FBbkMsQ0FBUDtBQUE2QyxLQUFqRSxFQUFrRSxZQUFXLG9CQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sS0FBSyxJQUFMLENBQVUsWUFBVTtBQUFDLFVBQUUsVUFBRixDQUFhLElBQWIsRUFBa0IsQ0FBbEI7QUFBcUIsT0FBMUMsQ0FBUDtBQUFtRCxLQUE1SSxFQUFaLEdBQTJKLEVBQUUsTUFBRixDQUFTLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKO0FBQUEsVUFBTSxDQUFOO0FBQUEsVUFBUSxJQUFFLEVBQUUsUUFBWixDQUFxQixJQUFHLE1BQUksQ0FBSixJQUFPLE1BQUksQ0FBWCxJQUFjLE1BQUksQ0FBckIsRUFBdUIsT0FBTSxlQUFhLE9BQU8sRUFBRSxZQUF0QixHQUFtQyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBbkMsSUFBa0QsTUFBSSxDQUFKLElBQU8sRUFBRSxRQUFGLENBQVcsQ0FBWCxDQUFQLEtBQXVCLElBQUUsRUFBRSxTQUFGLENBQVksRUFBRSxXQUFGLEVBQVosTUFBK0IsRUFBRSxJQUFGLENBQU8sS0FBUCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBdUIsQ0FBdkIsSUFBMEIsRUFBMUIsR0FBNkIsS0FBSyxDQUFqRSxDQUF6QixHQUE4RixLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsU0FBTyxDQUFQLEdBQVMsS0FBSyxFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBZixDQUFkLEdBQWdDLEtBQUcsU0FBUSxDQUFYLElBQWMsS0FBSyxDQUFMLE1BQVUsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsQ0FBWixDQUFkLEdBQXdDLENBQXhDLElBQTJDLEVBQUUsWUFBRixDQUFlLENBQWYsRUFBaUIsSUFBRSxFQUFuQixHQUF1QixDQUFsRSxDQUEzQyxHQUFnSCxLQUFHLFNBQVEsQ0FBWCxJQUFjLFVBQVEsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFWLENBQWQsR0FBb0MsQ0FBcEMsR0FBc0MsU0FBTyxJQUFFLEVBQUUsSUFBRixDQUFPLElBQVAsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxDQUFULElBQTJCLEtBQUssQ0FBaEMsR0FBa0MsQ0FBeFUsQ0FBTjtBQUFpVixLQUFuWixFQUFvWixXQUFVLEVBQUMsTUFBSyxFQUFDLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsY0FBRyxDQUFDLEVBQUUsVUFBSCxJQUFlLFlBQVUsQ0FBekIsSUFBNEIsRUFBRSxDQUFGLEVBQUksT0FBSixDQUEvQixFQUE0QztBQUFDLGdCQUFJLElBQUUsRUFBRSxLQUFSLENBQWMsT0FBTyxFQUFFLFlBQUYsQ0FBZSxNQUFmLEVBQXNCLENBQXRCLEdBQXlCLE1BQUksRUFBRSxLQUFGLEdBQVEsQ0FBWixDQUF6QixFQUF3QyxDQUEvQztBQUFpRDtBQUFDLFNBQWhJLEVBQU4sRUFBOVosRUFBdWlCLFlBQVcsb0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sSUFBRSxDQUFSO0FBQUEsVUFBVSxJQUFFLEtBQUcsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFmLENBQTBCLElBQUcsS0FBRyxNQUFJLEVBQUUsUUFBWixFQUFxQixPQUFNLElBQUUsRUFBRSxHQUFGLENBQVI7QUFBZSxVQUFFLGVBQUYsQ0FBa0IsQ0FBbEI7QUFBZjtBQUFvQyxLQUFucEIsRUFBVCxDQUEzSixFQUEwekIsS0FBRyxFQUFDLEtBQUksYUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU0sQ0FBQyxDQUFELEtBQUssQ0FBTCxHQUFPLEVBQUUsVUFBRixDQUFhLENBQWIsRUFBZSxDQUFmLENBQVAsR0FBeUIsRUFBRSxZQUFGLENBQWUsQ0FBZixFQUFpQixDQUFqQixDQUF6QixFQUE2QyxDQUFuRDtBQUFxRCxLQUExRSxFQUE3ekIsRUFBeTRCLEVBQUUsSUFBRixDQUFPLEVBQUUsSUFBRixDQUFPLEtBQVAsQ0FBYSxJQUFiLENBQWtCLE1BQWxCLENBQXlCLEtBQXpCLENBQStCLE1BQS9CLENBQVAsRUFBOEMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBSSxJQUFFLEdBQUcsQ0FBSCxLQUFPLEVBQUUsSUFBRixDQUFPLElBQXBCLENBQXlCLEdBQUcsQ0FBSCxJQUFNLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLENBQU47QUFBQSxVQUFRLElBQUUsRUFBRSxXQUFGLEVBQVYsQ0FBMEIsT0FBTyxNQUFJLElBQUUsR0FBRyxDQUFILENBQUYsRUFBUSxHQUFHLENBQUgsSUFBTSxDQUFkLEVBQWdCLElBQUUsUUFBTSxFQUFFLENBQUYsRUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFOLEdBQWUsQ0FBZixHQUFpQixJQUFuQyxFQUF3QyxHQUFHLENBQUgsSUFBTSxDQUFsRCxHQUFxRCxDQUE1RDtBQUE4RCxLQUE5RztBQUErRyxHQUFwTSxDQUF6NEIsQ0FBK2tDLElBQUksS0FBRyxxQ0FBUDtBQUFBLE1BQTZDLEtBQUcsZUFBaEQsQ0FBZ0UsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLEVBQUUsSUFBRixFQUFPLEVBQUUsSUFBVCxFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0IsVUFBVSxNQUFWLEdBQWlCLENBQW5DLENBQVA7QUFBNkMsS0FBakUsRUFBa0UsWUFBVyxvQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxlQUFPLEtBQUssRUFBRSxPQUFGLENBQVUsQ0FBVixLQUFjLENBQW5CLENBQVA7QUFBNkIsT0FBbEQsQ0FBUDtBQUEyRCxLQUFwSixFQUFaLEdBQW1LLEVBQUUsTUFBRixDQUFTLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxDQUFKO0FBQUEsVUFBTSxDQUFOO0FBQUEsVUFBUSxJQUFFLEVBQUUsUUFBWixDQUFxQixJQUFHLE1BQUksQ0FBSixJQUFPLE1BQUksQ0FBWCxJQUFjLE1BQUksQ0FBckIsRUFBdUIsT0FBTyxNQUFJLENBQUosSUFBTyxFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQVAsS0FBdUIsSUFBRSxFQUFFLE9BQUYsQ0FBVSxDQUFWLEtBQWMsQ0FBaEIsRUFBa0IsSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQTNDLEdBQTJELEtBQUssQ0FBTCxLQUFTLENBQVQsR0FBVyxLQUFHLFNBQVEsQ0FBWCxJQUFjLEtBQUssQ0FBTCxNQUFVLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLENBQVosQ0FBZCxHQUF3QyxDQUF4QyxHQUEwQyxFQUFFLENBQUYsSUFBSyxDQUExRCxHQUE0RCxLQUFHLFNBQVEsQ0FBWCxJQUFjLFVBQVEsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFWLENBQWQsR0FBb0MsQ0FBcEMsR0FBc0MsRUFBRSxDQUFGLENBQXBLO0FBQXlLLEtBQTNPLEVBQTRPLFdBQVUsRUFBQyxVQUFTLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQVksQ0FBWixFQUFjLFVBQWQsQ0FBTixDQUFnQyxPQUFPLElBQUUsU0FBUyxDQUFULEVBQVcsRUFBWCxDQUFGLEdBQWlCLEdBQUcsSUFBSCxDQUFRLEVBQUUsUUFBVixLQUFxQixHQUFHLElBQUgsQ0FBUSxFQUFFLFFBQVYsS0FBcUIsRUFBRSxJQUE1QyxHQUFpRCxDQUFqRCxHQUFtRCxDQUFDLENBQTVFO0FBQThFLFNBQS9ILEVBQVYsRUFBdFAsRUFBa1ksU0FBUSxFQUFDLE9BQU0sU0FBUCxFQUFpQixTQUFRLFdBQXpCLEVBQTFZLEVBQVQsQ0FBbkssRUFBOGxCLEVBQUUsV0FBRixLQUFnQixFQUFFLFNBQUYsQ0FBWSxRQUFaLEdBQXFCLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLFVBQUksSUFBRSxFQUFFLFVBQVIsQ0FBbUIsT0FBTyxLQUFHLEVBQUUsVUFBTCxJQUFpQixFQUFFLFVBQUYsQ0FBYSxhQUE5QixFQUE0QyxJQUFuRDtBQUF3RCxLQUE1RixFQUE2RixLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxJQUFFLEVBQUUsVUFBUixDQUFtQixNQUFJLEVBQUUsYUFBRixFQUFnQixFQUFFLFVBQUYsSUFBYyxFQUFFLFVBQUYsQ0FBYSxhQUEvQztBQUE4RCxLQUE5TCxFQUFyQyxDQUE5bEIsRUFBbzBCLEVBQUUsSUFBRixDQUFPLENBQUMsVUFBRCxFQUFZLFVBQVosRUFBdUIsV0FBdkIsRUFBbUMsYUFBbkMsRUFBaUQsYUFBakQsRUFBK0QsU0FBL0QsRUFBeUUsU0FBekUsRUFBbUYsUUFBbkYsRUFBNEYsYUFBNUYsRUFBMEcsaUJBQTFHLENBQVAsRUFBb0ksWUFBVTtBQUFDLE1BQUUsT0FBRixDQUFVLEtBQUssV0FBTCxFQUFWLElBQThCLElBQTlCO0FBQW1DLEdBQWxMLENBQXAwQixDQUF3L0IsU0FBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBTSxDQUFDLEVBQUUsS0FBRixDQUFRLENBQVIsS0FBWSxFQUFiLEVBQWlCLElBQWpCLENBQXNCLEdBQXRCLENBQU47QUFBaUMsWUFBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBTyxFQUFFLFlBQUYsSUFBZ0IsRUFBRSxZQUFGLENBQWUsT0FBZixDQUFoQixJQUF5QyxFQUFoRDtBQUFtRCxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWM7QUFBQyxXQUFPLE1BQU0sT0FBTixDQUFjLENBQWQsSUFBaUIsQ0FBakIsR0FBbUIsWUFBVSxPQUFPLENBQWpCLEdBQW1CLEVBQUUsS0FBRixDQUFRLENBQVIsS0FBWSxFQUEvQixHQUFrQyxFQUE1RDtBQUErRCxLQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxVQUFTLGtCQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsQ0FBVjtBQUFBLFVBQVksQ0FBWjtBQUFBLFVBQWMsQ0FBZDtBQUFBLFVBQWdCLENBQWhCO0FBQUEsVUFBa0IsSUFBRSxDQUFwQixDQUFzQixJQUFHLEVBQUUsQ0FBRixDQUFILEVBQVEsT0FBTyxLQUFLLElBQUwsQ0FBVSxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosRUFBYyxHQUFHLElBQUgsQ0FBZCxDQUFqQjtBQUEwQyxPQUFoRSxDQUFQLENBQXlFLElBQUcsQ0FBQyxJQUFFLEdBQUcsQ0FBSCxDQUFILEVBQVUsTUFBYixFQUFvQixPQUFNLElBQUUsS0FBSyxHQUFMLENBQVI7QUFBa0IsWUFBRyxJQUFFLEdBQUcsQ0FBSCxDQUFGLEVBQVEsSUFBRSxNQUFJLEVBQUUsUUFBTixJQUFnQixNQUFJLEdBQUcsQ0FBSCxDQUFKLEdBQVUsR0FBdkMsRUFBMkM7QUFBQyxjQUFFLENBQUYsQ0FBSSxPQUFNLElBQUUsRUFBRSxHQUFGLENBQVI7QUFBZSxjQUFFLE9BQUYsQ0FBVSxNQUFJLENBQUosR0FBTSxHQUFoQixJQUFxQixDQUFyQixLQUF5QixLQUFHLElBQUUsR0FBOUI7QUFBZixXQUFrRCxPQUFLLElBQUUsR0FBRyxDQUFILENBQVAsS0FBZSxFQUFFLFlBQUYsQ0FBZSxPQUFmLEVBQXVCLENBQXZCLENBQWY7QUFBeUM7QUFBN0osT0FBNkosT0FBTyxJQUFQO0FBQVksS0FBMVQsRUFBMlQsYUFBWSxxQkFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLENBQU47QUFBQSxVQUFRLENBQVI7QUFBQSxVQUFVLENBQVY7QUFBQSxVQUFZLENBQVo7QUFBQSxVQUFjLENBQWQ7QUFBQSxVQUFnQixDQUFoQjtBQUFBLFVBQWtCLElBQUUsQ0FBcEIsQ0FBc0IsSUFBRyxFQUFFLENBQUYsQ0FBSCxFQUFRLE9BQU8sS0FBSyxJQUFMLENBQVUsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxDQUFaLEVBQWMsR0FBRyxJQUFILENBQWQsQ0FBcEI7QUFBNkMsT0FBbkUsQ0FBUCxDQUE0RSxJQUFHLENBQUMsVUFBVSxNQUFkLEVBQXFCLE9BQU8sS0FBSyxJQUFMLENBQVUsT0FBVixFQUFrQixFQUFsQixDQUFQLENBQTZCLElBQUcsQ0FBQyxJQUFFLEdBQUcsQ0FBSCxDQUFILEVBQVUsTUFBYixFQUFvQixPQUFNLElBQUUsS0FBSyxHQUFMLENBQVI7QUFBa0IsWUFBRyxJQUFFLEdBQUcsQ0FBSCxDQUFGLEVBQVEsSUFBRSxNQUFJLEVBQUUsUUFBTixJQUFnQixNQUFJLEdBQUcsQ0FBSCxDQUFKLEdBQVUsR0FBdkMsRUFBMkM7QUFBQyxjQUFFLENBQUYsQ0FBSSxPQUFNLElBQUUsRUFBRSxHQUFGLENBQVI7QUFBZSxtQkFBTSxFQUFFLE9BQUYsQ0FBVSxNQUFJLENBQUosR0FBTSxHQUFoQixJQUFxQixDQUFDLENBQTVCO0FBQThCLGtCQUFFLEVBQUUsT0FBRixDQUFVLE1BQUksQ0FBSixHQUFNLEdBQWhCLEVBQW9CLEdBQXBCLENBQUY7QUFBOUI7QUFBZixXQUF3RSxPQUFLLElBQUUsR0FBRyxDQUFILENBQVAsS0FBZSxFQUFFLFlBQUYsQ0FBZSxPQUFmLEVBQXVCLENBQXZCLENBQWY7QUFBeUM7QUFBbkwsT0FBbUwsT0FBTyxJQUFQO0FBQVksS0FBbHNCLEVBQW1zQixhQUFZLHFCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLFdBQVMsQ0FBVCx5Q0FBUyxDQUFULENBQUo7QUFBQSxVQUFlLElBQUUsYUFBVyxDQUFYLElBQWMsTUFBTSxPQUFOLENBQWMsQ0FBZCxDQUEvQixDQUFnRCxPQUFNLGFBQVcsT0FBTyxDQUFsQixJQUFxQixDQUFyQixHQUF1QixJQUFFLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBRixHQUFtQixLQUFLLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBMUMsR0FBOEQsRUFBRSxDQUFGLElBQUssS0FBSyxJQUFMLENBQVUsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxDQUFaLEVBQWMsR0FBRyxJQUFILENBQWQsRUFBdUIsQ0FBdkIsQ0FBcEIsRUFBOEMsQ0FBOUM7QUFBaUQsT0FBdkUsQ0FBTCxHQUE4RSxLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsWUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLENBQVksSUFBRyxDQUFILEVBQUs7QUFBQyxjQUFFLENBQUYsRUFBSSxJQUFFLEVBQUUsSUFBRixDQUFOLEVBQWMsSUFBRSxHQUFHLENBQUgsQ0FBaEIsQ0FBc0IsT0FBTSxJQUFFLEVBQUUsR0FBRixDQUFSO0FBQWUsY0FBRSxRQUFGLENBQVcsQ0FBWCxJQUFjLEVBQUUsV0FBRixDQUFjLENBQWQsQ0FBZCxHQUErQixFQUFFLFFBQUYsQ0FBVyxDQUFYLENBQS9CO0FBQWY7QUFBNEQsU0FBeEYsTUFBNkYsS0FBSyxDQUFMLEtBQVMsQ0FBVCxJQUFZLGNBQVksQ0FBeEIsS0FBNEIsQ0FBQyxJQUFFLEdBQUcsSUFBSCxDQUFILEtBQWMsRUFBRSxHQUFGLENBQU0sSUFBTixFQUFXLGVBQVgsRUFBMkIsQ0FBM0IsQ0FBZCxFQUE0QyxLQUFLLFlBQUwsSUFBbUIsS0FBSyxZQUFMLENBQWtCLE9BQWxCLEVBQTBCLEtBQUcsQ0FBQyxDQUFELEtBQUssQ0FBUixHQUFVLEVBQVYsR0FBYSxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsZUFBWCxLQUE2QixFQUFwRSxDQUEzRjtBQUFvSyxPQUFsUyxDQUFsSjtBQUFzYixLQUFuc0MsRUFBb3NDLFVBQVMsa0JBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBSSxDQUFKO0FBQUEsVUFBTSxDQUFOO0FBQUEsVUFBUSxJQUFFLENBQVYsQ0FBWSxJQUFFLE1BQUksQ0FBSixHQUFNLEdBQVIsQ0FBWSxPQUFNLElBQUUsS0FBSyxHQUFMLENBQVI7QUFBa0IsWUFBRyxNQUFJLEVBQUUsUUFBTixJQUFnQixDQUFDLE1BQUksR0FBRyxHQUFHLENBQUgsQ0FBSCxDQUFKLEdBQWMsR0FBZixFQUFvQixPQUFwQixDQUE0QixDQUE1QixJQUErQixDQUFDLENBQW5ELEVBQXFELE9BQU0sQ0FBQyxDQUFQO0FBQXZFLE9BQWdGLE9BQU0sQ0FBQyxDQUFQO0FBQVMsS0FBMTBDLEVBQVosRUFBeTFDLElBQUksS0FBRyxLQUFQLENBQWEsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLFVBQUksQ0FBSjtBQUFBLFVBQU0sQ0FBTjtBQUFBLFVBQVEsQ0FBUjtBQUFBLFVBQVUsSUFBRSxLQUFLLENBQUwsQ0FBWixDQUFvQjtBQUFDLFlBQUcsVUFBVSxNQUFiLEVBQW9CLE9BQU8sSUFBRSxFQUFFLENBQUYsQ0FBRixFQUFPLEtBQUssSUFBTCxDQUFVLFVBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKLENBQU0sTUFBSSxLQUFLLFFBQVQsS0FBb0IsU0FBTyxJQUFFLElBQUUsRUFBRSxJQUFGLENBQU8sSUFBUCxFQUFZLENBQVosRUFBYyxFQUFFLElBQUYsRUFBUSxHQUFSLEVBQWQsQ0FBRixHQUErQixDQUF4QyxJQUEyQyxJQUFFLEVBQTdDLEdBQWdELFlBQVUsT0FBTyxDQUFqQixHQUFtQixLQUFHLEVBQXRCLEdBQXlCLE1BQU0sT0FBTixDQUFjLENBQWQsTUFBbUIsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsVUFBUyxDQUFULEVBQVc7QUFBQyxtQkFBTyxRQUFNLENBQU4sR0FBUSxFQUFSLEdBQVcsSUFBRSxFQUFwQjtBQUF1QixXQUEzQyxDQUFyQixDQUF6RSxFQUE0SSxDQUFDLElBQUUsRUFBRSxRQUFGLENBQVcsS0FBSyxJQUFoQixLQUF1QixFQUFFLFFBQUYsQ0FBVyxLQUFLLFFBQUwsQ0FBYyxXQUFkLEVBQVgsQ0FBMUIsS0FBb0UsU0FBUSxDQUE1RSxJQUErRSxLQUFLLENBQUwsS0FBUyxFQUFFLEdBQUYsQ0FBTSxJQUFOLEVBQVcsQ0FBWCxFQUFhLE9BQWIsQ0FBeEYsS0FBZ0gsS0FBSyxLQUFMLEdBQVcsQ0FBM0gsQ0FBaEs7QUFBK1IsU0FBM1QsQ0FBZCxDQUEyVSxJQUFHLENBQUgsRUFBSyxPQUFNLENBQUMsSUFBRSxFQUFFLFFBQUYsQ0FBVyxFQUFFLElBQWIsS0FBb0IsRUFBRSxRQUFGLENBQVcsRUFBRSxRQUFGLENBQVcsV0FBWCxFQUFYLENBQXZCLEtBQThELFNBQVEsQ0FBdEUsSUFBeUUsS0FBSyxDQUFMLE1BQVUsSUFBRSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsT0FBUixDQUFaLENBQXpFLEdBQXVHLENBQXZHLEdBQXlHLFlBQVUsUUFBTyxJQUFFLEVBQUUsS0FBWCxDQUFWLEdBQTRCLEVBQUUsT0FBRixDQUFVLEVBQVYsRUFBYSxFQUFiLENBQTVCLEdBQTZDLFFBQU0sQ0FBTixHQUFRLEVBQVIsR0FBVyxDQUF2SztBQUF5SztBQUFDLEtBQXBqQixFQUFaLEdBQW1rQixFQUFFLE1BQUYsQ0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVztBQUFDLGNBQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLENBQVksQ0FBWixFQUFjLE9BQWQsQ0FBTixDQUE2QixPQUFPLFFBQU0sQ0FBTixHQUFRLENBQVIsR0FBVSxHQUFHLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBSCxDQUFqQjtBQUErQixTQUE3RSxFQUFSLEVBQXVGLFFBQU8sRUFBQyxLQUFJLGFBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKO0FBQUEsY0FBTSxDQUFOO0FBQUEsY0FBUSxDQUFSO0FBQUEsY0FBVSxJQUFFLEVBQUUsT0FBZDtBQUFBLGNBQXNCLElBQUUsRUFBRSxhQUExQjtBQUFBLGNBQXdDLElBQUUsaUJBQWUsRUFBRSxJQUEzRDtBQUFBLGNBQWdFLElBQUUsSUFBRSxJQUFGLEdBQU8sRUFBekU7QUFBQSxjQUE0RSxJQUFFLElBQUUsSUFBRSxDQUFKLEdBQU0sRUFBRSxNQUF0RixDQUE2RixLQUFJLElBQUUsSUFBRSxDQUFGLEdBQUksQ0FBSixHQUFNLElBQUUsQ0FBRixHQUFJLENBQWhCLEVBQWtCLElBQUUsQ0FBcEIsRUFBc0IsR0FBdEI7QUFBMEIsZ0JBQUcsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFGLENBQUgsRUFBUyxRQUFULElBQW1CLE1BQUksQ0FBeEIsS0FBNEIsQ0FBQyxFQUFFLFFBQS9CLEtBQTBDLENBQUMsRUFBRSxVQUFGLENBQWEsUUFBZCxJQUF3QixDQUFDLEVBQUUsRUFBRSxVQUFKLEVBQWUsVUFBZixDQUFuRSxDQUFILEVBQWtHO0FBQUMsa0JBQUcsSUFBRSxFQUFFLENBQUYsRUFBSyxHQUFMLEVBQUYsRUFBYSxDQUFoQixFQUFrQixPQUFPLENBQVAsQ0FBUyxFQUFFLElBQUYsQ0FBTyxDQUFQO0FBQVU7QUFBbEssV0FBa0ssT0FBTyxDQUFQO0FBQVMsU0FBelIsRUFBMFIsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFJLENBQUo7QUFBQSxjQUFNLENBQU47QUFBQSxjQUFRLElBQUUsRUFBRSxPQUFaO0FBQUEsY0FBb0IsSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQXRCO0FBQUEsY0FBcUMsSUFBRSxFQUFFLE1BQXpDLENBQWdELE9BQU0sR0FBTjtBQUFVLGFBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBRixDQUFILEVBQVMsUUFBVCxHQUFrQixFQUFFLE9BQUYsQ0FBVSxFQUFFLFFBQUYsQ0FBVyxNQUFYLENBQWtCLEdBQWxCLENBQXNCLENBQXRCLENBQVYsRUFBbUMsQ0FBbkMsSUFBc0MsQ0FBQyxDQUExRCxNQUErRCxJQUFFLENBQUMsQ0FBbEU7QUFBVixXQUErRSxPQUFPLE1BQUksRUFBRSxhQUFGLEdBQWdCLENBQUMsQ0FBckIsR0FBd0IsQ0FBL0I7QUFBaUMsU0FBNWMsRUFBOUYsRUFBVixFQUFULENBQW5rQixFQUFxb0MsRUFBRSxJQUFGLENBQU8sQ0FBQyxPQUFELEVBQVMsVUFBVCxDQUFQLEVBQTRCLFlBQVU7QUFBQyxNQUFFLFFBQUYsQ0FBVyxJQUFYLElBQWlCLEVBQUMsS0FBSSxhQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFHLE1BQU0sT0FBTixDQUFjLENBQWQsQ0FBSCxFQUFvQixPQUFPLEVBQUUsT0FBRixHQUFVLEVBQUUsT0FBRixDQUFVLEVBQUUsQ0FBRixFQUFLLEdBQUwsRUFBVixFQUFxQixDQUFyQixJQUF3QixDQUFDLENBQTFDO0FBQTRDLE9BQW5GLEVBQWpCLEVBQXNHLEVBQUUsT0FBRixLQUFZLEVBQUUsUUFBRixDQUFXLElBQVgsRUFBaUIsR0FBakIsR0FBcUIsVUFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLFNBQU8sRUFBRSxZQUFGLENBQWUsT0FBZixDQUFQLEdBQStCLElBQS9CLEdBQW9DLEVBQUUsS0FBN0M7QUFBbUQsS0FBaEcsQ0FBdEc7QUFBd00sR0FBL08sQ0FBcm9DLEVBQXMzQyxFQUFFLE9BQUYsR0FBVSxlQUFjLENBQTk0QyxDQUFnNUMsSUFBSSxLQUFHLGlDQUFQO0FBQUEsTUFBeUMsS0FBRyxTQUFILEVBQUcsQ0FBUyxDQUFULEVBQVc7QUFBQyxNQUFFLGVBQUY7QUFBb0IsR0FBNUUsQ0FBNkUsRUFBRSxNQUFGLENBQVMsRUFBRSxLQUFYLEVBQWlCLEVBQUMsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsVUFBSSxDQUFKO0FBQUEsVUFBTSxDQUFOO0FBQUEsVUFBUSxDQUFSO0FBQUEsVUFBVSxDQUFWO0FBQUEsVUFBWSxDQUFaO0FBQUEsVUFBYyxDQUFkO0FBQUEsVUFBZ0IsQ0FBaEI7QUFBQSxVQUFrQixDQUFsQjtBQUFBLFVBQW9CLElBQUUsQ0FBQyxLQUFHLENBQUosQ0FBdEI7QUFBQSxVQUE2QixJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxNQUFULElBQWlCLEVBQUUsSUFBbkIsR0FBd0IsQ0FBdkQ7QUFBQSxVQUF5RCxJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxXQUFULElBQXNCLEVBQUUsU0FBRixDQUFZLEtBQVosQ0FBa0IsR0FBbEIsQ0FBdEIsR0FBNkMsRUFBeEcsQ0FBMkcsSUFBRyxJQUFFLElBQUUsSUFBRSxJQUFFLEtBQUcsQ0FBWCxFQUFhLE1BQUksRUFBRSxRQUFOLElBQWdCLE1BQUksRUFBRSxRQUF0QixJQUFnQyxDQUFDLEdBQUcsSUFBSCxDQUFRLElBQUUsRUFBRSxLQUFGLENBQVEsU0FBbEIsQ0FBakMsS0FBZ0UsRUFBRSxPQUFGLENBQVUsR0FBVixJQUFlLENBQUMsQ0FBaEIsS0FBb0IsSUFBRSxDQUFDLElBQUUsRUFBRSxLQUFGLENBQVEsR0FBUixDQUFILEVBQWlCLEtBQWpCLEVBQUYsRUFBMkIsRUFBRSxJQUFGLEVBQS9DLEdBQXlELElBQUUsRUFBRSxPQUFGLENBQVUsR0FBVixJQUFlLENBQWYsSUFBa0IsT0FBSyxDQUFsRixFQUFvRixJQUFFLEVBQUUsRUFBRSxPQUFKLElBQWEsQ0FBYixHQUFlLElBQUksRUFBRSxLQUFOLENBQVksQ0FBWixFQUFjLG9CQUFpQixDQUFqQix5Q0FBaUIsQ0FBakIsTUFBb0IsQ0FBbEMsQ0FBckcsRUFBMEksRUFBRSxTQUFGLEdBQVksSUFBRSxDQUFGLEdBQUksQ0FBMUosRUFBNEosRUFBRSxTQUFGLEdBQVksRUFBRSxJQUFGLENBQU8sR0FBUCxDQUF4SyxFQUFvTCxFQUFFLFVBQUYsR0FBYSxFQUFFLFNBQUYsR0FBWSxJQUFJLE1BQUosQ0FBVyxZQUFVLEVBQUUsSUFBRixDQUFPLGVBQVAsQ0FBVixHQUFrQyxTQUE3QyxDQUFaLEdBQW9FLElBQXJRLEVBQTBRLEVBQUUsTUFBRixHQUFTLEtBQUssQ0FBeFIsRUFBMFIsRUFBRSxNQUFGLEtBQVcsRUFBRSxNQUFGLEdBQVMsQ0FBcEIsQ0FBMVIsRUFBaVQsSUFBRSxRQUFNLENBQU4sR0FBUSxDQUFDLENBQUQsQ0FBUixHQUFZLEVBQUUsU0FBRixDQUFZLENBQVosRUFBYyxDQUFDLENBQUQsQ0FBZCxDQUEvVCxFQUFrVixJQUFFLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBb0IsRUFBeFcsRUFBMlcsS0FBRyxDQUFDLEVBQUUsT0FBTixJQUFlLENBQUMsQ0FBRCxLQUFLLEVBQUUsT0FBRixDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsQ0FBL2IsQ0FBaEIsRUFBcWU7QUFBQyxZQUFHLENBQUMsQ0FBRCxJQUFJLENBQUMsRUFBRSxRQUFQLElBQWlCLENBQUMsRUFBRSxDQUFGLENBQXJCLEVBQTBCO0FBQUMsZUFBSSxJQUFFLEVBQUUsWUFBRixJQUFnQixDQUFsQixFQUFvQixHQUFHLElBQUgsQ0FBUSxJQUFFLENBQVYsTUFBZSxJQUFFLEVBQUUsVUFBbkIsQ0FBeEIsRUFBdUQsQ0FBdkQsRUFBeUQsSUFBRSxFQUFFLFVBQTdEO0FBQXdFLGNBQUUsSUFBRixDQUFPLENBQVAsR0FBVSxJQUFFLENBQVo7QUFBeEUsV0FBc0YsT0FBSyxFQUFFLGFBQUYsSUFBaUIsQ0FBdEIsS0FBMEIsRUFBRSxJQUFGLENBQU8sRUFBRSxXQUFGLElBQWUsRUFBRSxZQUFqQixJQUErQixDQUF0QyxDQUExQjtBQUFtRSxhQUFFLENBQUYsQ0FBSSxPQUFNLENBQUMsSUFBRSxFQUFFLEdBQUYsQ0FBSCxLQUFZLENBQUMsRUFBRSxvQkFBRixFQUFuQjtBQUE0QyxjQUFFLENBQUYsRUFBSSxFQUFFLElBQUYsR0FBTyxJQUFFLENBQUYsR0FBSSxDQUFKLEdBQU0sRUFBRSxRQUFGLElBQVksQ0FBN0IsRUFBK0IsQ0FBQyxJQUFFLENBQUMsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFFBQVIsS0FBbUIsRUFBcEIsRUFBd0IsRUFBRSxJQUExQixLQUFpQyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsUUFBUixDQUFwQyxLQUF3RCxFQUFFLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUF2RixFQUFvRyxDQUFDLElBQUUsS0FBRyxFQUFFLENBQUYsQ0FBTixLQUFhLEVBQUUsS0FBZixJQUFzQixFQUFFLENBQUYsQ0FBdEIsS0FBNkIsRUFBRSxNQUFGLEdBQVMsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBVCxFQUFzQixDQUFDLENBQUQsS0FBSyxFQUFFLE1BQVAsSUFBZSxFQUFFLGNBQUYsRUFBbEUsQ0FBcEc7QUFBNUMsU0FBc08sT0FBTyxFQUFFLElBQUYsR0FBTyxDQUFQLEVBQVMsS0FBRyxFQUFFLGtCQUFGLEVBQUgsSUFBMkIsRUFBRSxRQUFGLElBQVksQ0FBQyxDQUFELEtBQUssRUFBRSxRQUFGLENBQVcsS0FBWCxDQUFpQixFQUFFLEdBQUYsRUFBakIsRUFBeUIsQ0FBekIsQ0FBNUMsSUFBeUUsQ0FBQyxFQUFFLENBQUYsQ0FBMUUsSUFBZ0YsS0FBRyxFQUFFLEVBQUUsQ0FBRixDQUFGLENBQUgsSUFBWSxDQUFDLEVBQUUsQ0FBRixDQUFiLEtBQW9CLENBQUMsSUFBRSxFQUFFLENBQUYsQ0FBSCxNQUFXLEVBQUUsQ0FBRixJQUFLLElBQWhCLEdBQXNCLEVBQUUsS0FBRixDQUFRLFNBQVIsR0FBa0IsQ0FBeEMsRUFBMEMsRUFBRSxvQkFBRixNQUEwQixFQUFFLGdCQUFGLENBQW1CLENBQW5CLEVBQXFCLEVBQXJCLENBQXBFLEVBQTZGLEVBQUUsQ0FBRixHQUE3RixFQUFvRyxFQUFFLG9CQUFGLE1BQTBCLEVBQUUsbUJBQUYsQ0FBc0IsQ0FBdEIsRUFBd0IsRUFBeEIsQ0FBOUgsRUFBMEosRUFBRSxLQUFGLENBQVEsU0FBUixHQUFrQixLQUFLLENBQWpMLEVBQW1MLE1BQUksRUFBRSxDQUFGLElBQUssQ0FBVCxDQUF2TSxDQUF6RixFQUE2UyxFQUFFLE1BQXRUO0FBQTZUO0FBQUMsS0FBeDBDLEVBQXkwQyxVQUFTLGtCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBRixDQUFTLElBQUksRUFBRSxLQUFOLEVBQVQsRUFBcUIsQ0FBckIsRUFBdUIsRUFBQyxNQUFLLENBQU4sRUFBUSxhQUFZLENBQUMsQ0FBckIsRUFBdkIsQ0FBTixDQUFzRCxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLEVBQWtCLElBQWxCLEVBQXVCLENBQXZCO0FBQTBCLEtBQWw3QyxFQUFqQixHQUFzOEMsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLElBQUwsQ0FBVSxZQUFVO0FBQUMsVUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixJQUFwQjtBQUEwQixPQUEvQyxDQUFQO0FBQXdELEtBQS9FLEVBQWdGLGdCQUFlLHdCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxVQUFJLElBQUUsS0FBSyxDQUFMLENBQU4sQ0FBYyxJQUFHLENBQUgsRUFBSyxPQUFPLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBQyxDQUF2QixDQUFQO0FBQWlDLEtBQWpLLEVBQVosQ0FBdDhDLEVBQXNuRCxFQUFFLE9BQUYsSUFBVyxFQUFFLElBQUYsQ0FBTyxFQUFDLE9BQU0sU0FBUCxFQUFpQixNQUFLLFVBQXRCLEVBQVAsRUFBeUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBSSxJQUFFLFNBQUYsQ0FBRSxDQUFTLENBQVQsRUFBVztBQUFDLFFBQUUsS0FBRixDQUFRLFFBQVIsQ0FBaUIsQ0FBakIsRUFBbUIsRUFBRSxNQUFyQixFQUE0QixFQUFFLEtBQUYsQ0FBUSxHQUFSLENBQVksQ0FBWixDQUE1QjtBQUE0QyxLQUE5RCxDQUErRCxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLENBQWhCLElBQW1CLEVBQUMsT0FBTSxpQkFBVTtBQUFDLFlBQUksSUFBRSxLQUFLLGFBQUwsSUFBb0IsSUFBMUI7QUFBQSxZQUErQixJQUFFLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQWpDLENBQStDLEtBQUcsRUFBRSxnQkFBRixDQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUFDLENBQXhCLENBQUgsRUFBOEIsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFDLEtBQUcsQ0FBSixJQUFPLENBQXBCLENBQTlCO0FBQXFELE9BQXRILEVBQXVILFVBQVMsb0JBQVU7QUFBQyxZQUFJLElBQUUsS0FBSyxhQUFMLElBQW9CLElBQTFCO0FBQUEsWUFBK0IsSUFBRSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVcsQ0FBWCxJQUFjLENBQS9DLENBQWlELElBQUUsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBQUYsSUFBbUIsRUFBRSxtQkFBRixDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQixDQUFDLENBQTNCLEdBQThCLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQWpEO0FBQWdFLE9BQTVQLEVBQW5CO0FBQWlSLEdBQXZZLENBQWpvRCxDQUEwZ0UsSUFBSSxLQUFHLEVBQUUsUUFBVDtBQUFBLE1BQWtCLEtBQUcsS0FBSyxHQUFMLEVBQXJCO0FBQUEsTUFBZ0MsS0FBRyxJQUFuQyxDQUF3QyxFQUFFLFFBQUYsR0FBVyxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUksQ0FBSixDQUFNLElBQUcsQ0FBQyxDQUFELElBQUksWUFBVSxPQUFPLENBQXhCLEVBQTBCLE9BQU8sSUFBUCxDQUFZLElBQUc7QUFBQyxVQUFHLElBQUksRUFBRSxTQUFOLEVBQUQsQ0FBa0IsZUFBbEIsQ0FBa0MsQ0FBbEMsRUFBb0MsVUFBcEMsQ0FBRjtBQUFrRCxLQUF0RCxDQUFzRCxPQUFNLENBQU4sRUFBUTtBQUFDLFVBQUUsS0FBSyxDQUFQO0FBQVMsWUFBTyxLQUFHLENBQUMsRUFBRSxvQkFBRixDQUF1QixhQUF2QixFQUFzQyxNQUExQyxJQUFrRCxFQUFFLEtBQUYsQ0FBUSxrQkFBZ0IsQ0FBeEIsQ0FBbEQsRUFBNkUsQ0FBcEY7QUFBc0YsR0FBak8sQ0FBa08sSUFBSSxLQUFHLE9BQVA7QUFBQSxNQUFlLEtBQUcsUUFBbEI7QUFBQSxNQUEyQixLQUFHLHVDQUE5QjtBQUFBLE1BQXNFLEtBQUcsb0NBQXpFLENBQThHLFNBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CO0FBQUMsUUFBSSxDQUFKLENBQU0sSUFBRyxNQUFNLE9BQU4sQ0FBYyxDQUFkLENBQUgsRUFBb0IsRUFBRSxJQUFGLENBQU8sQ0FBUCxFQUFTLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFdBQUcsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFILEdBQWMsRUFBRSxDQUFGLEVBQUksQ0FBSixDQUFkLEdBQXFCLEdBQUcsSUFBRSxHQUFGLElBQU8sb0JBQWlCLENBQWpCLHlDQUFpQixDQUFqQixNQUFvQixRQUFNLENBQTFCLEdBQTRCLENBQTVCLEdBQThCLEVBQXJDLElBQXlDLEdBQTVDLEVBQWdELENBQWhELEVBQWtELENBQWxELEVBQW9ELENBQXBELENBQXJCO0FBQTRFLEtBQW5HLEVBQXBCLEtBQThILElBQUcsS0FBRyxhQUFXLEVBQUUsQ0FBRixDQUFqQixFQUFzQixFQUFFLENBQUYsRUFBSSxDQUFKLEVBQXRCLEtBQWtDLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxTQUFHLElBQUUsR0FBRixHQUFNLENBQU4sR0FBUSxHQUFYLEVBQWUsRUFBRSxDQUFGLENBQWYsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEI7QUFBWDtBQUFvQyxLQUFFLEtBQUYsR0FBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLElBQUUsRUFBUjtBQUFBLFFBQVcsSUFBRSxTQUFGLENBQUUsQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBRixJQUFLLEdBQUwsR0FBUyxDQUFmLENBQWlCLEVBQUUsRUFBRSxNQUFKLElBQVksbUJBQW1CLENBQW5CLElBQXNCLEdBQXRCLEdBQTBCLG1CQUFtQixRQUFNLENBQU4sR0FBUSxFQUFSLEdBQVcsQ0FBOUIsQ0FBdEM7QUFBdUUsS0FBbkgsQ0FBb0gsSUFBRyxNQUFNLE9BQU4sQ0FBYyxDQUFkLEtBQWtCLEVBQUUsTUFBRixJQUFVLENBQUMsRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQWhDLEVBQW1ELEVBQUUsSUFBRixDQUFPLENBQVAsRUFBUyxZQUFVO0FBQUMsUUFBRSxLQUFLLElBQVAsRUFBWSxLQUFLLEtBQWpCO0FBQXdCLEtBQTVDLEVBQW5ELEtBQXNHLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxTQUFHLENBQUgsRUFBSyxFQUFFLENBQUYsQ0FBTCxFQUFVLENBQVYsRUFBWSxDQUFaO0FBQVgsS0FBMEIsT0FBTyxFQUFFLElBQUYsQ0FBTyxHQUFQLENBQVA7QUFBbUIsR0FBN1IsRUFBOFIsRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsV0FBVSxxQkFBVTtBQUFDLGFBQU8sRUFBRSxLQUFGLENBQVEsS0FBSyxjQUFMLEVBQVIsQ0FBUDtBQUFzQyxLQUE1RCxFQUE2RCxnQkFBZSwwQkFBVTtBQUFDLGFBQU8sS0FBSyxHQUFMLENBQVMsWUFBVTtBQUFDLFlBQUksSUFBRSxFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQVksVUFBWixDQUFOLENBQThCLE9BQU8sSUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQUYsR0FBaUIsSUFBeEI7QUFBNkIsT0FBL0UsRUFBaUYsTUFBakYsQ0FBd0YsWUFBVTtBQUFDLFlBQUksSUFBRSxLQUFLLElBQVgsQ0FBZ0IsT0FBTyxLQUFLLElBQUwsSUFBVyxDQUFDLEVBQUUsSUFBRixFQUFRLEVBQVIsQ0FBVyxXQUFYLENBQVosSUFBcUMsR0FBRyxJQUFILENBQVEsS0FBSyxRQUFiLENBQXJDLElBQTZELENBQUMsR0FBRyxJQUFILENBQVEsQ0FBUixDQUE5RCxLQUEyRSxLQUFLLE9BQUwsSUFBYyxDQUFDLEdBQUcsSUFBSCxDQUFRLENBQVIsQ0FBMUYsQ0FBUDtBQUE2RyxPQUFoTyxFQUFrTyxHQUFsTyxDQUFzTyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFGLEVBQVEsR0FBUixFQUFOLENBQW9CLE9BQU8sUUFBTSxDQUFOLEdBQVEsSUFBUixHQUFhLE1BQU0sT0FBTixDQUFjLENBQWQsSUFBaUIsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFVBQVMsQ0FBVCxFQUFXO0FBQUMsaUJBQU0sRUFBQyxNQUFLLEVBQUUsSUFBUixFQUFhLE9BQU0sRUFBRSxPQUFGLENBQVUsRUFBVixFQUFhLE1BQWIsQ0FBbkIsRUFBTjtBQUErQyxTQUFuRSxDQUFqQixHQUFzRixFQUFDLE1BQUssRUFBRSxJQUFSLEVBQWEsT0FBTSxFQUFFLE9BQUYsQ0FBVSxFQUFWLEVBQWEsTUFBYixDQUFuQixFQUExRztBQUFtSixPQUEzWixFQUE2WixHQUE3WixFQUFQO0FBQTBhLEtBQWpnQixFQUFaLENBQTlSLENBQTh5QixJQUFJLEtBQUcsTUFBUDtBQUFBLE1BQWMsS0FBRyxNQUFqQjtBQUFBLE1BQXdCLEtBQUcsZUFBM0I7QUFBQSxNQUEyQyxLQUFHLDRCQUE5QztBQUFBLE1BQTJFLEtBQUcsMkRBQTlFO0FBQUEsTUFBMEksS0FBRyxnQkFBN0k7QUFBQSxNQUE4SixLQUFHLE9BQWpLO0FBQUEsTUFBeUssS0FBRyxFQUE1SztBQUFBLE1BQStLLEtBQUcsRUFBbEw7QUFBQSxNQUFxTCxLQUFHLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBeEw7QUFBQSxNQUF5TSxLQUFHLEVBQUUsYUFBRixDQUFnQixHQUFoQixDQUE1TSxDQUFpTyxHQUFHLElBQUgsR0FBUSxHQUFHLElBQVgsQ0FBZ0IsU0FBUyxFQUFULENBQVksQ0FBWixFQUFjO0FBQUMsV0FBTyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxrQkFBVSxPQUFPLENBQWpCLEtBQXFCLElBQUUsQ0FBRixFQUFJLElBQUUsR0FBM0IsRUFBZ0MsSUFBSSxDQUFKO0FBQUEsVUFBTSxJQUFFLENBQVI7QUFBQSxVQUFVLElBQUUsRUFBRSxXQUFGLEdBQWdCLEtBQWhCLENBQXNCLENBQXRCLEtBQTBCLEVBQXRDLENBQXlDLElBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxPQUFNLElBQUUsRUFBRSxHQUFGLENBQVI7QUFBZSxnQkFBTSxFQUFFLENBQUYsQ0FBTixJQUFZLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixLQUFZLEdBQWQsRUFBa0IsQ0FBQyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsS0FBTSxFQUFaLEVBQWdCLE9BQWhCLENBQXdCLENBQXhCLENBQTlCLElBQTBELENBQUMsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLEtBQU0sRUFBWixFQUFnQixJQUFoQixDQUFxQixDQUFyQixDQUExRDtBQUFmO0FBQWlHLEtBQXZNO0FBQXdNLFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CO0FBQUMsUUFBSSxJQUFFLEVBQU47QUFBQSxRQUFTLElBQUUsTUFBSSxFQUFmLENBQWtCLFNBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFVBQUksQ0FBSixDQUFNLE9BQU8sRUFBRSxDQUFGLElBQUssQ0FBQyxDQUFOLEVBQVEsRUFBRSxJQUFGLENBQU8sRUFBRSxDQUFGLEtBQU0sRUFBYixFQUFnQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFGLEVBQUksQ0FBSixFQUFNLENBQU4sQ0FBTixDQUFlLE9BQU0sWUFBVSxPQUFPLENBQWpCLElBQW9CLENBQXBCLElBQXVCLEVBQUUsQ0FBRixDQUF2QixHQUE0QixJQUFFLEVBQUUsSUFBRSxDQUFKLENBQUYsR0FBUyxLQUFLLENBQTFDLElBQTZDLEVBQUUsU0FBRixDQUFZLE9BQVosQ0FBb0IsQ0FBcEIsR0FBdUIsRUFBRSxDQUFGLENBQXZCLEVBQTRCLENBQUMsQ0FBMUUsQ0FBTjtBQUFtRixPQUFoSSxDQUFSLEVBQTBJLENBQWpKO0FBQW1KLFlBQU8sRUFBRSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQUYsS0FBbUIsQ0FBQyxFQUFFLEdBQUYsQ0FBRCxJQUFTLEVBQUUsR0FBRixDQUFuQztBQUEwQyxZQUFTLEVBQVQsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQjtBQUFDLFFBQUksQ0FBSjtBQUFBLFFBQU0sQ0FBTjtBQUFBLFFBQVEsSUFBRSxFQUFFLFlBQUYsQ0FBZSxXQUFmLElBQTRCLEVBQXRDLENBQXlDLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxXQUFLLENBQUwsS0FBUyxFQUFFLENBQUYsQ0FBVCxLQUFnQixDQUFDLEVBQUUsQ0FBRixJQUFLLENBQUwsR0FBTyxNQUFJLElBQUUsRUFBTixDQUFSLEVBQW1CLENBQW5CLElBQXNCLEVBQUUsQ0FBRixDQUF0QztBQUFYLEtBQXVELE9BQU8sS0FBRyxFQUFFLE1BQUYsQ0FBUyxDQUFDLENBQVYsRUFBWSxDQUFaLEVBQWMsQ0FBZCxDQUFILEVBQW9CLENBQTNCO0FBQTZCLFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCO0FBQUMsUUFBSSxDQUFKO0FBQUEsUUFBTSxDQUFOO0FBQUEsUUFBUSxDQUFSO0FBQUEsUUFBVSxDQUFWO0FBQUEsUUFBWSxJQUFFLEVBQUUsUUFBaEI7QUFBQSxRQUF5QixJQUFFLEVBQUUsU0FBN0IsQ0FBdUMsT0FBTSxRQUFNLEVBQUUsQ0FBRixDQUFaO0FBQWlCLFFBQUUsS0FBRixJQUFVLEtBQUssQ0FBTCxLQUFTLENBQVQsS0FBYSxJQUFFLEVBQUUsUUFBRixJQUFZLEVBQUUsaUJBQUYsQ0FBb0IsY0FBcEIsQ0FBM0IsQ0FBVjtBQUFqQixLQUEyRixJQUFHLENBQUgsRUFBSyxLQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsVUFBRyxFQUFFLENBQUYsS0FBTSxFQUFFLENBQUYsRUFBSyxJQUFMLENBQVUsQ0FBVixDQUFULEVBQXNCO0FBQUMsVUFBRSxPQUFGLENBQVUsQ0FBVixFQUFhO0FBQU07QUFBckQsS0FBcUQsSUFBRyxFQUFFLENBQUYsS0FBTyxDQUFWLEVBQVksSUFBRSxFQUFFLENBQUYsQ0FBRixDQUFaLEtBQXVCO0FBQUMsV0FBSSxDQUFKLElBQVMsQ0FBVCxFQUFXO0FBQUMsWUFBRyxDQUFDLEVBQUUsQ0FBRixDQUFELElBQU8sRUFBRSxVQUFGLENBQWEsSUFBRSxHQUFGLEdBQU0sRUFBRSxDQUFGLENBQW5CLENBQVYsRUFBbUM7QUFBQyxjQUFFLENBQUYsQ0FBSTtBQUFNLGVBQUksSUFBRSxDQUFOO0FBQVMsV0FBRSxLQUFHLENBQUw7QUFBTyxTQUFHLENBQUgsRUFBSyxPQUFPLE1BQUksRUFBRSxDQUFGLENBQUosSUFBVSxFQUFFLE9BQUYsQ0FBVSxDQUFWLENBQVYsRUFBdUIsRUFBRSxDQUFGLENBQTlCO0FBQW1DLFlBQVMsRUFBVCxDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CO0FBQUMsUUFBSSxDQUFKO0FBQUEsUUFBTSxDQUFOO0FBQUEsUUFBUSxDQUFSO0FBQUEsUUFBVSxDQUFWO0FBQUEsUUFBWSxDQUFaO0FBQUEsUUFBYyxJQUFFLEVBQWhCO0FBQUEsUUFBbUIsSUFBRSxFQUFFLFNBQUYsQ0FBWSxLQUFaLEVBQXJCLENBQXlDLElBQUcsRUFBRSxDQUFGLENBQUgsRUFBUSxLQUFJLENBQUosSUFBUyxFQUFFLFVBQVg7QUFBc0IsUUFBRSxFQUFFLFdBQUYsRUFBRixJQUFtQixFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQW5CO0FBQXRCLEtBQXlELElBQUUsRUFBRSxLQUFGLEVBQUYsQ0FBWSxPQUFNLENBQU47QUFBUSxVQUFHLEVBQUUsY0FBRixDQUFpQixDQUFqQixNQUFzQixFQUFFLEVBQUUsY0FBRixDQUFpQixDQUFqQixDQUFGLElBQXVCLENBQTdDLEdBQWdELENBQUMsQ0FBRCxJQUFJLENBQUosSUFBTyxFQUFFLFVBQVQsS0FBc0IsSUFBRSxFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsRUFBRSxRQUFqQixDQUF4QixDQUFoRCxFQUFvRyxJQUFFLENBQXRHLEVBQXdHLElBQUUsRUFBRSxLQUFGLEVBQTdHLEVBQXVILElBQUcsUUFBTSxDQUFULEVBQVcsSUFBRSxDQUFGLENBQVgsS0FBb0IsSUFBRyxRQUFNLENBQU4sSUFBUyxNQUFJLENBQWhCLEVBQWtCO0FBQUMsWUFBRyxFQUFFLElBQUUsRUFBRSxJQUFFLEdBQUYsR0FBTSxDQUFSLEtBQVksRUFBRSxPQUFLLENBQVAsQ0FBaEIsQ0FBSCxFQUE4QixLQUFJLENBQUosSUFBUyxDQUFUO0FBQVcsY0FBRyxDQUFDLElBQUUsRUFBRSxLQUFGLENBQVEsR0FBUixDQUFILEVBQWlCLENBQWpCLE1BQXNCLENBQXRCLEtBQTBCLElBQUUsRUFBRSxJQUFFLEdBQUYsR0FBTSxFQUFFLENBQUYsQ0FBUixLQUFlLEVBQUUsT0FBSyxFQUFFLENBQUYsQ0FBUCxDQUEzQyxDQUFILEVBQTREO0FBQUMsYUFBQyxDQUFELEtBQUssQ0FBTCxHQUFPLElBQUUsRUFBRSxDQUFGLENBQVQsR0FBYyxDQUFDLENBQUQsS0FBSyxFQUFFLENBQUYsQ0FBTCxLQUFZLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxFQUFFLE9BQUYsQ0FBVSxFQUFFLENBQUYsQ0FBVixDQUFuQixDQUFkLENBQWtEO0FBQU07QUFBaEksU0FBZ0ksSUFBRyxDQUFDLENBQUQsS0FBSyxDQUFSLEVBQVUsSUFBRyxLQUFHLEVBQUUsUUFBRixDQUFOLEVBQWtCLElBQUUsRUFBRSxDQUFGLENBQUYsQ0FBbEIsS0FBOEIsSUFBRztBQUFDLGNBQUUsRUFBRSxDQUFGLENBQUY7QUFBTyxTQUFYLENBQVcsT0FBTSxDQUFOLEVBQVE7QUFBQyxpQkFBTSxFQUFDLE9BQU0sYUFBUCxFQUFxQixPQUFNLElBQUUsQ0FBRixHQUFJLHdCQUFzQixDQUF0QixHQUF3QixNQUF4QixHQUErQixDQUE5RCxFQUFOO0FBQXVFO0FBQUM7QUFBeGMsS0FBd2MsT0FBTSxFQUFDLE9BQU0sU0FBUCxFQUFpQixNQUFLLENBQXRCLEVBQU47QUFBK0IsS0FBRSxNQUFGLENBQVMsRUFBQyxRQUFPLENBQVIsRUFBVSxjQUFhLEVBQXZCLEVBQTBCLE1BQUssRUFBL0IsRUFBa0MsY0FBYSxFQUFDLEtBQUksR0FBRyxJQUFSLEVBQWEsTUFBSyxLQUFsQixFQUF3QixTQUFRLEdBQUcsSUFBSCxDQUFRLEdBQUcsUUFBWCxDQUFoQyxFQUFxRCxRQUFPLENBQUMsQ0FBN0QsRUFBK0QsYUFBWSxDQUFDLENBQTVFLEVBQThFLE9BQU0sQ0FBQyxDQUFyRixFQUF1RixhQUFZLGtEQUFuRyxFQUFzSixTQUFRLEVBQUMsS0FBSSxFQUFMLEVBQVEsTUFBSyxZQUFiLEVBQTBCLE1BQUssV0FBL0IsRUFBMkMsS0FBSSwyQkFBL0MsRUFBMkUsTUFBSyxtQ0FBaEYsRUFBOUosRUFBbVIsVUFBUyxFQUFDLEtBQUksU0FBTCxFQUFlLE1BQUssUUFBcEIsRUFBNkIsTUFBSyxVQUFsQyxFQUE1UixFQUEwVSxnQkFBZSxFQUFDLEtBQUksYUFBTCxFQUFtQixNQUFLLGNBQXhCLEVBQXVDLE1BQUssY0FBNUMsRUFBelYsRUFBcVosWUFBVyxFQUFDLFVBQVMsTUFBVixFQUFpQixhQUFZLENBQUMsQ0FBOUIsRUFBZ0MsYUFBWSxLQUFLLEtBQWpELEVBQXVELFlBQVcsRUFBRSxRQUFwRSxFQUFoYSxFQUE4ZSxhQUFZLEVBQUMsS0FBSSxDQUFDLENBQU4sRUFBUSxTQUFRLENBQUMsQ0FBakIsRUFBMWYsRUFBL0MsRUFBOGpCLFdBQVUsbUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sSUFBRSxHQUFHLEdBQUcsQ0FBSCxFQUFLLEVBQUUsWUFBUCxDQUFILEVBQXdCLENBQXhCLENBQUYsR0FBNkIsR0FBRyxFQUFFLFlBQUwsRUFBa0IsQ0FBbEIsQ0FBcEM7QUFBeUQsS0FBL29CLEVBQWdwQixlQUFjLEdBQUcsRUFBSCxDQUE5cEIsRUFBcXFCLGVBQWMsR0FBRyxFQUFILENBQW5yQixFQUEwckIsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQywwQkFBaUIsQ0FBakIseUNBQWlCLENBQWpCLE9BQXFCLElBQUUsQ0FBRixFQUFJLElBQUUsS0FBSyxDQUFoQyxHQUFtQyxJQUFFLEtBQUcsRUFBeEMsQ0FBMkMsSUFBSSxDQUFKO0FBQUEsVUFBTSxDQUFOO0FBQUEsVUFBUSxDQUFSO0FBQUEsVUFBVSxDQUFWO0FBQUEsVUFBWSxDQUFaO0FBQUEsVUFBYyxDQUFkO0FBQUEsVUFBZ0IsQ0FBaEI7QUFBQSxVQUFrQixDQUFsQjtBQUFBLFVBQW9CLENBQXBCO0FBQUEsVUFBc0IsQ0FBdEI7QUFBQSxVQUF3QixJQUFFLEVBQUUsU0FBRixDQUFZLEVBQVosRUFBZSxDQUFmLENBQTFCO0FBQUEsVUFBNEMsSUFBRSxFQUFFLE9BQUYsSUFBVyxDQUF6RDtBQUFBLFVBQTJELElBQUUsRUFBRSxPQUFGLEtBQVksRUFBRSxRQUFGLElBQVksRUFBRSxNQUExQixJQUFrQyxFQUFFLENBQUYsQ0FBbEMsR0FBdUMsRUFBRSxLQUF0RztBQUFBLFVBQTRHLElBQUUsRUFBRSxRQUFGLEVBQTlHO0FBQUEsVUFBMkgsSUFBRSxFQUFFLFNBQUYsQ0FBWSxhQUFaLENBQTdIO0FBQUEsVUFBd0osSUFBRSxFQUFFLFVBQUYsSUFBYyxFQUF4SztBQUFBLFVBQTJLLElBQUUsRUFBN0s7QUFBQSxVQUFnTCxJQUFFLEVBQWxMO0FBQUEsVUFBcUwsSUFBRSxVQUF2TDtBQUFBLFVBQWtNLElBQUUsRUFBQyxZQUFXLENBQVosRUFBYyxtQkFBa0IsMkJBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKLENBQU0sSUFBRyxDQUFILEVBQUs7QUFBQyxnQkFBRyxDQUFDLENBQUosRUFBTTtBQUFDLGtCQUFFLEVBQUYsQ0FBSyxPQUFNLElBQUUsR0FBRyxJQUFILENBQVEsQ0FBUixDQUFSO0FBQW1CLGtCQUFFLEVBQUUsQ0FBRixFQUFLLFdBQUwsRUFBRixJQUFzQixFQUFFLENBQUYsQ0FBdEI7QUFBbkI7QUFBOEMsaUJBQUUsRUFBRSxFQUFFLFdBQUYsRUFBRixDQUFGO0FBQXFCLGtCQUFPLFFBQU0sQ0FBTixHQUFRLElBQVIsR0FBYSxDQUFwQjtBQUFzQixTQUE3SixFQUE4Six1QkFBc0IsaUNBQVU7QUFBQyxpQkFBTyxJQUFFLENBQUYsR0FBSSxJQUFYO0FBQWdCLFNBQS9NLEVBQWdOLGtCQUFpQiwwQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsaUJBQU8sUUFBTSxDQUFOLEtBQVUsSUFBRSxFQUFFLEVBQUUsV0FBRixFQUFGLElBQW1CLEVBQUUsRUFBRSxXQUFGLEVBQUYsS0FBb0IsQ0FBekMsRUFBMkMsRUFBRSxDQUFGLElBQUssQ0FBMUQsR0FBNkQsSUFBcEU7QUFBeUUsU0FBeFQsRUFBeVQsa0JBQWlCLDBCQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLFFBQU0sQ0FBTixLQUFVLEVBQUUsUUFBRixHQUFXLENBQXJCLEdBQXdCLElBQS9CO0FBQW9DLFNBQTFYLEVBQTJYLFlBQVcsb0JBQVMsQ0FBVCxFQUFXO0FBQUMsY0FBSSxDQUFKLENBQU0sSUFBRyxDQUFILEVBQUssSUFBRyxDQUFILEVBQUssRUFBRSxNQUFGLENBQVMsRUFBRSxFQUFFLE1BQUosQ0FBVCxFQUFMLEtBQWdDLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxjQUFFLENBQUYsSUFBSyxDQUFDLEVBQUUsQ0FBRixDQUFELEVBQU0sRUFBRSxDQUFGLENBQU4sQ0FBTDtBQUFYLFdBQTRCLE9BQU8sSUFBUDtBQUFZLFNBQXJlLEVBQXNlLE9BQU0sZUFBUyxDQUFULEVBQVc7QUFBQyxjQUFJLElBQUUsS0FBRyxDQUFULENBQVcsT0FBTyxLQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBSCxFQUFjLEVBQUUsQ0FBRixFQUFJLENBQUosQ0FBZCxFQUFxQixJQUE1QjtBQUFpQyxTQUFwaUIsRUFBcE0sQ0FBMHVCLElBQUcsRUFBRSxPQUFGLENBQVUsQ0FBVixHQUFhLEVBQUUsR0FBRixHQUFNLENBQUMsQ0FBQyxLQUFHLEVBQUUsR0FBTCxJQUFVLEdBQUcsSUFBZCxJQUFvQixFQUFyQixFQUF5QixPQUF6QixDQUFpQyxFQUFqQyxFQUFvQyxHQUFHLFFBQUgsR0FBWSxJQUFoRCxDQUFuQixFQUF5RSxFQUFFLElBQUYsR0FBTyxFQUFFLE1BQUYsSUFBVSxFQUFFLElBQVosSUFBa0IsRUFBRSxNQUFwQixJQUE0QixFQUFFLElBQTlHLEVBQW1ILEVBQUUsU0FBRixHQUFZLENBQUMsRUFBRSxRQUFGLElBQVksR0FBYixFQUFrQixXQUFsQixHQUFnQyxLQUFoQyxDQUFzQyxDQUF0QyxLQUEwQyxDQUFDLEVBQUQsQ0FBekssRUFBOEssUUFBTSxFQUFFLFdBQXpMLEVBQXFNO0FBQUMsWUFBRSxFQUFFLGFBQUYsQ0FBZ0IsR0FBaEIsQ0FBRixDQUF1QixJQUFHO0FBQUMsWUFBRSxJQUFGLEdBQU8sRUFBRSxHQUFULEVBQWEsRUFBRSxJQUFGLEdBQU8sRUFBRSxJQUF0QixFQUEyQixFQUFFLFdBQUYsR0FBYyxHQUFHLFFBQUgsR0FBWSxJQUFaLEdBQWlCLEdBQUcsSUFBcEIsSUFBMEIsRUFBRSxRQUFGLEdBQVcsSUFBWCxHQUFnQixFQUFFLElBQXJGO0FBQTBGLFNBQTlGLENBQThGLE9BQU0sQ0FBTixFQUFRO0FBQUMsWUFBRSxXQUFGLEdBQWMsQ0FBQyxDQUFmO0FBQWlCO0FBQUMsV0FBRyxFQUFFLElBQUYsSUFBUSxFQUFFLFdBQVYsSUFBdUIsWUFBVSxPQUFPLEVBQUUsSUFBMUMsS0FBaUQsRUFBRSxJQUFGLEdBQU8sRUFBRSxLQUFGLENBQVEsRUFBRSxJQUFWLEVBQWUsRUFBRSxXQUFqQixDQUF4RCxHQUF1RixHQUFHLEVBQUgsRUFBTSxDQUFOLEVBQVEsQ0FBUixFQUFVLENBQVYsQ0FBdkYsRUFBb0csQ0FBdkcsRUFBeUcsT0FBTyxDQUFQLENBQVMsQ0FBQyxJQUFFLEVBQUUsS0FBRixJQUFTLEVBQUUsTUFBZCxLQUF1QixLQUFHLEVBQUUsTUFBRixFQUExQixJQUFzQyxFQUFFLEtBQUYsQ0FBUSxPQUFSLENBQWdCLFdBQWhCLENBQXRDLEVBQW1FLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixDQUFPLFdBQVAsRUFBMUUsRUFBK0YsRUFBRSxVQUFGLEdBQWEsQ0FBQyxHQUFHLElBQUgsQ0FBUSxFQUFFLElBQVYsQ0FBN0csRUFBNkgsSUFBRSxFQUFFLEdBQUYsQ0FBTSxPQUFOLENBQWMsRUFBZCxFQUFpQixFQUFqQixDQUEvSCxFQUFvSixFQUFFLFVBQUYsR0FBYSxFQUFFLElBQUYsSUFBUSxFQUFFLFdBQVYsSUFBdUIsTUFBSSxDQUFDLEVBQUUsV0FBRixJQUFlLEVBQWhCLEVBQW9CLE9BQXBCLENBQTRCLG1DQUE1QixDQUEzQixLQUE4RixFQUFFLElBQUYsR0FBTyxFQUFFLElBQUYsQ0FBTyxPQUFQLENBQWUsRUFBZixFQUFrQixHQUFsQixDQUFyRyxDQUFiLElBQTJJLElBQUUsRUFBRSxHQUFGLENBQU0sS0FBTixDQUFZLEVBQUUsTUFBZCxDQUFGLEVBQXdCLEVBQUUsSUFBRixLQUFTLEVBQUUsV0FBRixJQUFlLFlBQVUsT0FBTyxFQUFFLElBQTNDLE1BQW1ELEtBQUcsQ0FBQyxHQUFHLElBQUgsQ0FBUSxDQUFSLElBQVcsR0FBWCxHQUFlLEdBQWhCLElBQXFCLEVBQUUsSUFBMUIsRUFBK0IsT0FBTyxFQUFFLElBQTNGLENBQXhCLEVBQXlILENBQUMsQ0FBRCxLQUFLLEVBQUUsS0FBUCxLQUFlLElBQUUsRUFBRSxPQUFGLENBQVUsRUFBVixFQUFhLElBQWIsQ0FBRixFQUFxQixJQUFFLENBQUMsR0FBRyxJQUFILENBQVEsQ0FBUixJQUFXLEdBQVgsR0FBZSxHQUFoQixJQUFxQixJQUFyQixHQUEwQixJQUExQixHQUErQixDQUFyRSxDQUF6SCxFQUFpTSxFQUFFLEdBQUYsR0FBTSxJQUFFLENBQXBWLENBQXBKLEVBQTJlLEVBQUUsVUFBRixLQUFlLEVBQUUsWUFBRixDQUFlLENBQWYsS0FBbUIsRUFBRSxnQkFBRixDQUFtQixtQkFBbkIsRUFBdUMsRUFBRSxZQUFGLENBQWUsQ0FBZixDQUF2QyxDQUFuQixFQUE2RSxFQUFFLElBQUYsQ0FBTyxDQUFQLEtBQVcsRUFBRSxnQkFBRixDQUFtQixlQUFuQixFQUFtQyxFQUFFLElBQUYsQ0FBTyxDQUFQLENBQW5DLENBQXZHLENBQTNlLEVBQWlvQixDQUFDLEVBQUUsSUFBRixJQUFRLEVBQUUsVUFBVixJQUFzQixDQUFDLENBQUQsS0FBSyxFQUFFLFdBQTdCLElBQTBDLEVBQUUsV0FBN0MsS0FBMkQsRUFBRSxnQkFBRixDQUFtQixjQUFuQixFQUFrQyxFQUFFLFdBQXBDLENBQTVyQixFQUE2dUIsRUFBRSxnQkFBRixDQUFtQixRQUFuQixFQUE0QixFQUFFLFNBQUYsQ0FBWSxDQUFaLEtBQWdCLEVBQUUsT0FBRixDQUFVLEVBQUUsU0FBRixDQUFZLENBQVosQ0FBVixDQUFoQixHQUEwQyxFQUFFLE9BQUYsQ0FBVSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQVYsS0FBMkIsUUFBTSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQU4sR0FBcUIsT0FBSyxFQUFMLEdBQVEsVUFBN0IsR0FBd0MsRUFBbkUsQ0FBMUMsR0FBaUgsRUFBRSxPQUFGLENBQVUsR0FBVixDQUE3SSxDQUE3dUIsQ0FBMDRCLEtBQUksQ0FBSixJQUFTLEVBQUUsT0FBWDtBQUFtQixVQUFFLGdCQUFGLENBQW1CLENBQW5CLEVBQXFCLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBckI7QUFBbkIsT0FBc0QsSUFBRyxFQUFFLFVBQUYsS0FBZSxDQUFDLENBQUQsS0FBSyxFQUFFLFVBQUYsQ0FBYSxJQUFiLENBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQUwsSUFBK0IsQ0FBOUMsQ0FBSCxFQUFvRCxPQUFPLEVBQUUsS0FBRixFQUFQLENBQWlCLElBQUcsSUFBRSxPQUFGLEVBQVUsRUFBRSxHQUFGLENBQU0sRUFBRSxRQUFSLENBQVYsRUFBNEIsRUFBRSxJQUFGLENBQU8sRUFBRSxPQUFULENBQTVCLEVBQThDLEVBQUUsSUFBRixDQUFPLEVBQUUsS0FBVCxDQUE5QyxFQUE4RCxJQUFFLEdBQUcsRUFBSCxFQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsQ0FBVixDQUFuRSxFQUFnRjtBQUFDLFlBQUcsRUFBRSxVQUFGLEdBQWEsQ0FBYixFQUFlLEtBQUcsRUFBRSxPQUFGLENBQVUsVUFBVixFQUFxQixDQUFDLENBQUQsRUFBRyxDQUFILENBQXJCLENBQWxCLEVBQThDLENBQWpELEVBQW1ELE9BQU8sQ0FBUCxDQUFTLEVBQUUsS0FBRixJQUFTLEVBQUUsT0FBRixHQUFVLENBQW5CLEtBQXVCLElBQUUsRUFBRSxVQUFGLENBQWEsWUFBVTtBQUFDLFlBQUUsS0FBRixDQUFRLFNBQVI7QUFBbUIsU0FBM0MsRUFBNEMsRUFBRSxPQUE5QyxDQUF6QixFQUFpRixJQUFHO0FBQUMsY0FBRSxDQUFDLENBQUgsRUFBSyxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxDQUFMO0FBQWlCLFNBQXJCLENBQXFCLE9BQU0sQ0FBTixFQUFRO0FBQUMsY0FBRyxDQUFILEVBQUssTUFBTSxDQUFOLENBQVEsRUFBRSxDQUFDLENBQUgsRUFBSyxDQUFMO0FBQVE7QUFBQyxPQUFsUixNQUF1UixFQUFFLENBQUMsQ0FBSCxFQUFLLGNBQUwsRUFBcUIsU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CO0FBQUMsWUFBSSxDQUFKO0FBQUEsWUFBTSxDQUFOO0FBQUEsWUFBUSxDQUFSO0FBQUEsWUFBVSxDQUFWO0FBQUEsWUFBWSxDQUFaO0FBQUEsWUFBYyxJQUFFLENBQWhCLENBQWtCLE1BQUksSUFBRSxDQUFDLENBQUgsRUFBSyxLQUFHLEVBQUUsWUFBRixDQUFlLENBQWYsQ0FBUixFQUEwQixJQUFFLEtBQUssQ0FBakMsRUFBbUMsSUFBRSxLQUFHLEVBQXhDLEVBQTJDLEVBQUUsVUFBRixHQUFhLElBQUUsQ0FBRixHQUFJLENBQUosR0FBTSxDQUE5RCxFQUFnRSxJQUFFLEtBQUcsR0FBSCxJQUFRLElBQUUsR0FBVixJQUFlLFFBQU0sQ0FBdkYsRUFBeUYsTUFBSSxJQUFFLEdBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQU4sQ0FBekYsRUFBMEcsSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBNUcsRUFBd0gsS0FBRyxFQUFFLFVBQUYsS0FBZSxDQUFDLElBQUUsRUFBRSxpQkFBRixDQUFvQixlQUFwQixDQUFILE1BQTJDLEVBQUUsWUFBRixDQUFlLENBQWYsSUFBa0IsQ0FBN0QsR0FBZ0UsQ0FBQyxJQUFFLEVBQUUsaUJBQUYsQ0FBb0IsTUFBcEIsQ0FBSCxNQUFrQyxFQUFFLElBQUYsQ0FBTyxDQUFQLElBQVUsQ0FBNUMsQ0FBL0UsR0FBK0gsUUFBTSxDQUFOLElBQVMsV0FBUyxFQUFFLElBQXBCLEdBQXlCLElBQUUsV0FBM0IsR0FBdUMsUUFBTSxDQUFOLEdBQVEsSUFBRSxhQUFWLElBQXlCLElBQUUsRUFBRSxLQUFKLEVBQVUsSUFBRSxFQUFFLElBQWQsRUFBbUIsSUFBRSxFQUFFLElBQUUsRUFBRSxLQUFOLENBQTlDLENBQXpLLEtBQXVPLElBQUUsQ0FBRixFQUFJLENBQUMsQ0FBRCxJQUFJLENBQUosS0FBUSxJQUFFLE9BQUYsRUFBVSxJQUFFLENBQUYsS0FBTSxJQUFFLENBQVIsQ0FBbEIsQ0FBM08sQ0FBeEgsRUFBa1ksRUFBRSxNQUFGLEdBQVMsQ0FBM1ksRUFBNlksRUFBRSxVQUFGLEdBQWEsQ0FBQyxLQUFHLENBQUosSUFBTyxFQUFqYSxFQUFvYSxJQUFFLEVBQUUsV0FBRixDQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBaEIsQ0FBRixHQUEyQixFQUFFLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBZixDQUEvYixFQUF1ZCxFQUFFLFVBQUYsQ0FBYSxDQUFiLENBQXZkLEVBQXVlLElBQUUsS0FBSyxDQUE5ZSxFQUFnZixLQUFHLEVBQUUsT0FBRixDQUFVLElBQUUsYUFBRixHQUFnQixXQUExQixFQUFzQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssSUFBRSxDQUFGLEdBQUksQ0FBVCxDQUF0QyxDQUFuZixFQUFzaUIsRUFBRSxRQUFGLENBQVcsQ0FBWCxFQUFhLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBYixDQUF0aUIsRUFBMGpCLE1BQUksRUFBRSxPQUFGLENBQVUsY0FBVixFQUF5QixDQUFDLENBQUQsRUFBRyxDQUFILENBQXpCLEdBQWdDLEVBQUUsRUFBRSxNQUFKLElBQVksRUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixVQUFoQixDQUFoRCxDQUE5akI7QUFBNG9CLGNBQU8sQ0FBUDtBQUFTLEtBQXQ1SCxFQUF1NUgsU0FBUSxpQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLGFBQU8sRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksTUFBWixDQUFQO0FBQTJCLEtBQTE4SCxFQUEyOEgsV0FBVSxtQkFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsS0FBSyxDQUFiLEVBQWUsQ0FBZixFQUFpQixRQUFqQixDQUFQO0FBQWtDLEtBQXJnSSxFQUFULEdBQWloSSxFQUFFLElBQUYsQ0FBTyxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQVAsRUFBc0IsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxDQUFGLElBQUssVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsYUFBTyxFQUFFLENBQUYsTUFBTyxJQUFFLEtBQUcsQ0FBTCxFQUFPLElBQUUsQ0FBVCxFQUFXLElBQUUsS0FBSyxDQUF6QixHQUE0QixFQUFFLElBQUYsQ0FBTyxFQUFFLE1BQUYsQ0FBUyxFQUFDLEtBQUksQ0FBTCxFQUFPLE1BQUssQ0FBWixFQUFjLFVBQVMsQ0FBdkIsRUFBeUIsTUFBSyxDQUE5QixFQUFnQyxTQUFRLENBQXhDLEVBQVQsRUFBb0QsRUFBRSxhQUFGLENBQWdCLENBQWhCLEtBQW9CLENBQXhFLENBQVAsQ0FBbkM7QUFBc0gsS0FBN0k7QUFBOEksR0FBbEwsQ0FBamhJLEVBQXFzSSxFQUFFLFFBQUYsR0FBVyxVQUFTLENBQVQsRUFBVztBQUFDLFdBQU8sRUFBRSxJQUFGLENBQU8sRUFBQyxLQUFJLENBQUwsRUFBTyxNQUFLLEtBQVosRUFBa0IsVUFBUyxRQUEzQixFQUFvQyxPQUFNLENBQUMsQ0FBM0MsRUFBNkMsT0FBTSxDQUFDLENBQXBELEVBQXNELFFBQU8sQ0FBQyxDQUE5RCxFQUFnRSxVQUFTLENBQUMsQ0FBMUUsRUFBUCxDQUFQO0FBQTRGLEdBQXh6SSxFQUF5ekksRUFBRSxFQUFGLENBQUssTUFBTCxDQUFZLEVBQUMsU0FBUSxpQkFBUyxDQUFULEVBQVc7QUFBQyxVQUFJLENBQUosQ0FBTSxPQUFPLEtBQUssQ0FBTCxNQUFVLEVBQUUsQ0FBRixNQUFPLElBQUUsRUFBRSxJQUFGLENBQU8sS0FBSyxDQUFMLENBQVAsQ0FBVCxHQUEwQixJQUFFLEVBQUUsQ0FBRixFQUFJLEtBQUssQ0FBTCxFQUFRLGFBQVosRUFBMkIsRUFBM0IsQ0FBOEIsQ0FBOUIsRUFBaUMsS0FBakMsQ0FBdUMsQ0FBQyxDQUF4QyxDQUE1QixFQUF1RSxLQUFLLENBQUwsRUFBUSxVQUFSLElBQW9CLEVBQUUsWUFBRixDQUFlLEtBQUssQ0FBTCxDQUFmLENBQTNGLEVBQW1ILEVBQUUsR0FBRixDQUFNLFlBQVU7QUFBQyxZQUFJLElBQUUsSUFBTixDQUFXLE9BQU0sRUFBRSxpQkFBUjtBQUEwQixjQUFFLEVBQUUsaUJBQUo7QUFBMUIsU0FBZ0QsT0FBTyxDQUFQO0FBQVMsT0FBckYsRUFBdUYsTUFBdkYsQ0FBOEYsSUFBOUYsQ0FBN0gsR0FBa08sSUFBek87QUFBOE8sS0FBelEsRUFBMFEsV0FBVSxtQkFBUyxDQUFULEVBQVc7QUFBQyxhQUFPLEVBQUUsQ0FBRixJQUFLLEtBQUssSUFBTCxDQUFVLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxJQUFGLEVBQVEsU0FBUixDQUFrQixFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQVksQ0FBWixDQUFsQjtBQUFrQyxPQUF4RCxDQUFMLEdBQStELEtBQUssSUFBTCxDQUFVLFlBQVU7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFGLENBQU47QUFBQSxZQUFjLElBQUUsRUFBRSxRQUFGLEVBQWhCLENBQTZCLEVBQUUsTUFBRixHQUFTLEVBQUUsT0FBRixDQUFVLENBQVYsQ0FBVCxHQUFzQixFQUFFLE1BQUYsQ0FBUyxDQUFULENBQXRCO0FBQWtDLE9BQXBGLENBQXRFO0FBQTRKLEtBQTViLEVBQTZiLE1BQUssY0FBUyxDQUFULEVBQVc7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFGLENBQU4sQ0FBVyxPQUFPLEtBQUssSUFBTCxDQUFVLFVBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixJQUFFLEVBQUUsSUFBRixDQUFPLElBQVAsRUFBWSxDQUFaLENBQUYsR0FBaUIsQ0FBakM7QUFBb0MsT0FBMUQsQ0FBUDtBQUFtRSxLQUE1aEIsRUFBNmhCLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLE1BQUwsQ0FBWSxDQUFaLEVBQWUsR0FBZixDQUFtQixNQUFuQixFQUEyQixJQUEzQixDQUFnQyxZQUFVO0FBQUMsVUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixLQUFLLFVBQXpCO0FBQXFDLE9BQWhGLEdBQWtGLElBQXpGO0FBQThGLEtBQTlvQixFQUFaLENBQXp6SSxFQUFzOUosRUFBRSxJQUFGLENBQU8sT0FBUCxDQUFlLE1BQWYsR0FBc0IsVUFBUyxDQUFULEVBQVc7QUFBQyxXQUFNLENBQUMsRUFBRSxJQUFGLENBQU8sT0FBUCxDQUFlLE9BQWYsQ0FBdUIsQ0FBdkIsQ0FBUDtBQUFpQyxHQUF6aEssRUFBMGhLLEVBQUUsSUFBRixDQUFPLE9BQVAsQ0FBZSxPQUFmLEdBQXVCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTSxDQUFDLEVBQUUsRUFBRSxXQUFGLElBQWUsRUFBRSxZQUFqQixJQUErQixFQUFFLGNBQUYsR0FBbUIsTUFBcEQsQ0FBUDtBQUFtRSxHQUFob0ssRUFBaW9LLEVBQUUsWUFBRixDQUFlLEdBQWYsR0FBbUIsWUFBVTtBQUFDLFFBQUc7QUFBQyxhQUFPLElBQUksRUFBRSxjQUFOLEVBQVA7QUFBNEIsS0FBaEMsQ0FBZ0MsT0FBTSxDQUFOLEVBQVEsQ0FBRTtBQUFDLEdBQTFzSyxDQUEyc0ssSUFBSSxLQUFHLEVBQUMsR0FBRSxHQUFILEVBQU8sTUFBSyxHQUFaLEVBQVA7QUFBQSxNQUF3QixLQUFHLEVBQUUsWUFBRixDQUFlLEdBQWYsRUFBM0IsQ0FBZ0QsRUFBRSxJQUFGLEdBQU8sQ0FBQyxDQUFDLEVBQUYsSUFBTSxxQkFBb0IsRUFBakMsRUFBb0MsRUFBRSxJQUFGLEdBQU8sS0FBRyxDQUFDLENBQUMsRUFBaEQsRUFBbUQsRUFBRSxhQUFGLENBQWdCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBSSxFQUFKLEVBQU0sQ0FBTixDQUFRLElBQUcsRUFBRSxJQUFGLElBQVEsTUFBSSxDQUFDLEVBQUUsV0FBbEIsRUFBOEIsT0FBTSxFQUFDLE1BQUssY0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsWUFBSSxDQUFKO0FBQUEsWUFBTSxJQUFFLEVBQUUsR0FBRixFQUFSLENBQWdCLElBQUcsRUFBRSxJQUFGLENBQU8sRUFBRSxJQUFULEVBQWMsRUFBRSxHQUFoQixFQUFvQixFQUFFLEtBQXRCLEVBQTRCLEVBQUUsUUFBOUIsRUFBdUMsRUFBRSxRQUF6QyxHQUFtRCxFQUFFLFNBQXhELEVBQWtFLEtBQUksQ0FBSixJQUFTLEVBQUUsU0FBWDtBQUFxQixZQUFFLENBQUYsSUFBSyxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQUw7QUFBckIsU0FBeUMsRUFBRSxRQUFGLElBQVksRUFBRSxnQkFBZCxJQUFnQyxFQUFFLGdCQUFGLENBQW1CLEVBQUUsUUFBckIsQ0FBaEMsRUFBK0QsRUFBRSxXQUFGLElBQWUsRUFBRSxrQkFBRixDQUFmLEtBQXVDLEVBQUUsa0JBQUYsSUFBc0IsZ0JBQTdELENBQS9ELENBQThJLEtBQUksQ0FBSixJQUFTLENBQVQ7QUFBVyxZQUFFLGdCQUFGLENBQW1CLENBQW5CLEVBQXFCLEVBQUUsQ0FBRixDQUFyQjtBQUFYLFNBQXNDLEtBQUUsV0FBUyxDQUFULEVBQVc7QUFBQyxpQkFBTyxZQUFVO0FBQUMsbUJBQUksS0FBRSxJQUFFLEVBQUUsTUFBRixHQUFTLEVBQUUsT0FBRixHQUFVLEVBQUUsT0FBRixHQUFVLEVBQUUsU0FBRixHQUFZLEVBQUUsa0JBQUYsR0FBcUIsSUFBbEUsRUFBdUUsWUFBVSxDQUFWLEdBQVksRUFBRSxLQUFGLEVBQVosR0FBc0IsWUFBVSxDQUFWLEdBQVksWUFBVSxPQUFPLEVBQUUsTUFBbkIsR0FBMEIsRUFBRSxDQUFGLEVBQUksT0FBSixDQUExQixHQUF1QyxFQUFFLEVBQUUsTUFBSixFQUFXLEVBQUUsVUFBYixDQUFuRCxHQUE0RSxFQUFFLEdBQUcsRUFBRSxNQUFMLEtBQWMsRUFBRSxNQUFsQixFQUF5QixFQUFFLFVBQTNCLEVBQXNDLFlBQVUsRUFBRSxZQUFGLElBQWdCLE1BQTFCLEtBQW1DLFlBQVUsT0FBTyxFQUFFLFlBQXRELEdBQW1FLEVBQUMsUUFBTyxFQUFFLFFBQVYsRUFBbkUsR0FBdUYsRUFBQyxNQUFLLEVBQUUsWUFBUixFQUE3SCxFQUFtSixFQUFFLHFCQUFGLEVBQW5KLENBQTdLO0FBQTRWLFdBQTlXO0FBQStXLFNBQTdYLEVBQThYLEVBQUUsTUFBRixHQUFTLElBQXZZLEVBQTJZLElBQUUsRUFBRSxPQUFGLEdBQVUsRUFBRSxTQUFGLEdBQVksR0FBRSxPQUFGLENBQW5hLEVBQThhLEtBQUssQ0FBTCxLQUFTLEVBQUUsT0FBWCxHQUFtQixFQUFFLE9BQUYsR0FBVSxDQUE3QixHQUErQixFQUFFLGtCQUFGLEdBQXFCLFlBQVU7QUFBQyxnQkFBSSxFQUFFLFVBQU4sSUFBa0IsRUFBRSxVQUFGLENBQWEsWUFBVTtBQUFDLGtCQUFHLEdBQUg7QUFBTyxXQUEvQixDQUFsQjtBQUFtRCxTQUFoaUIsRUFBaWlCLEtBQUUsR0FBRSxPQUFGLENBQW5pQixDQUE4aUIsSUFBRztBQUFDLFlBQUUsSUFBRixDQUFPLEVBQUUsVUFBRixJQUFjLEVBQUUsSUFBaEIsSUFBc0IsSUFBN0I7QUFBbUMsU0FBdkMsQ0FBdUMsT0FBTSxDQUFOLEVBQVE7QUFBQyxjQUFHLEVBQUgsRUFBSyxNQUFNLENBQU47QUFBUTtBQUFDLE9BQS82QixFQUFnN0IsT0FBTSxpQkFBVTtBQUFDLGNBQUcsSUFBSDtBQUFPLE9BQXg4QixFQUFOO0FBQWc5QixHQUFsaEMsQ0FBbkQsRUFBdWtDLEVBQUUsYUFBRixDQUFnQixVQUFTLENBQVQsRUFBVztBQUFDLE1BQUUsV0FBRixLQUFnQixFQUFFLFFBQUYsQ0FBVyxNQUFYLEdBQWtCLENBQUMsQ0FBbkM7QUFBc0MsR0FBbEUsQ0FBdmtDLEVBQTJvQyxFQUFFLFNBQUYsQ0FBWSxFQUFDLFNBQVEsRUFBQyxRQUFPLDJGQUFSLEVBQVQsRUFBOEcsVUFBUyxFQUFDLFFBQU8seUJBQVIsRUFBdkgsRUFBMEosWUFBVyxFQUFDLGVBQWMsb0JBQVMsQ0FBVCxFQUFXO0FBQUMsZUFBTyxFQUFFLFVBQUYsQ0FBYSxDQUFiLEdBQWdCLENBQXZCO0FBQXlCLE9BQXBELEVBQXJLLEVBQVosQ0FBM29DLEVBQW8zQyxFQUFFLGFBQUYsQ0FBZ0IsUUFBaEIsRUFBeUIsVUFBUyxDQUFULEVBQVc7QUFBQyxTQUFLLENBQUwsS0FBUyxFQUFFLEtBQVgsS0FBbUIsRUFBRSxLQUFGLEdBQVEsQ0FBQyxDQUE1QixHQUErQixFQUFFLFdBQUYsS0FBZ0IsRUFBRSxJQUFGLEdBQU8sS0FBdkIsQ0FBL0I7QUFBNkQsR0FBbEcsQ0FBcDNDLEVBQXc5QyxFQUFFLGFBQUYsQ0FBZ0IsUUFBaEIsRUFBeUIsVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFHLEVBQUUsV0FBTCxFQUFpQjtBQUFDLFVBQUksQ0FBSixFQUFNLEdBQU4sQ0FBUSxPQUFNLEVBQUMsTUFBSyxjQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxjQUFFLEVBQUUsVUFBRixFQUFjLElBQWQsQ0FBbUIsRUFBQyxTQUFRLEVBQUUsYUFBWCxFQUF5QixLQUFJLEVBQUUsR0FBL0IsRUFBbkIsRUFBd0QsRUFBeEQsQ0FBMkQsWUFBM0QsRUFBd0UsTUFBRSxXQUFTLENBQVQsRUFBVztBQUFDLGNBQUUsTUFBRixJQUFXLE1BQUUsSUFBYixFQUFrQixLQUFHLEVBQUUsWUFBVSxFQUFFLElBQVosR0FBaUIsR0FBakIsR0FBcUIsR0FBdkIsRUFBMkIsRUFBRSxJQUE3QixDQUFyQjtBQUF3RCxXQUE5SSxDQUFGLEVBQWtKLEVBQUUsSUFBRixDQUFPLFdBQVAsQ0FBbUIsRUFBRSxDQUFGLENBQW5CLENBQWxKO0FBQTJLLFNBQS9MLEVBQWdNLE9BQU0saUJBQVU7QUFBQyxpQkFBRyxLQUFIO0FBQU8sU0FBeE4sRUFBTjtBQUFnTztBQUFDLEdBQWhTLENBQXg5QyxDQUEwdkQsSUFBSSxLQUFHLEVBQVA7QUFBQSxNQUFVLEtBQUcsbUJBQWIsQ0FBaUMsRUFBRSxTQUFGLENBQVksRUFBQyxPQUFNLFVBQVAsRUFBa0IsZUFBYyx5QkFBVTtBQUFDLFVBQUksSUFBRSxHQUFHLEdBQUgsTUFBVSxFQUFFLE9BQUYsR0FBVSxHQUFWLEdBQWMsSUFBOUIsQ0FBbUMsT0FBTyxLQUFLLENBQUwsSUFBUSxDQUFDLENBQVQsRUFBVyxDQUFsQjtBQUFvQixLQUFsRyxFQUFaLEdBQWlILEVBQUUsYUFBRixDQUFnQixZQUFoQixFQUE2QixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsUUFBSSxDQUFKO0FBQUEsUUFBTSxDQUFOO0FBQUEsUUFBUSxDQUFSO0FBQUEsUUFBVSxJQUFFLENBQUMsQ0FBRCxLQUFLLEVBQUUsS0FBUCxLQUFlLEdBQUcsSUFBSCxDQUFRLEVBQUUsR0FBVixJQUFlLEtBQWYsR0FBcUIsWUFBVSxPQUFPLEVBQUUsSUFBbkIsSUFBeUIsTUFBSSxDQUFDLEVBQUUsV0FBRixJQUFlLEVBQWhCLEVBQW9CLE9BQXBCLENBQTRCLG1DQUE1QixDQUE3QixJQUErRixHQUFHLElBQUgsQ0FBUSxFQUFFLElBQVYsQ0FBL0YsSUFBZ0gsTUFBcEosQ0FBWixDQUF3SyxJQUFHLEtBQUcsWUFBVSxFQUFFLFNBQUYsQ0FBWSxDQUFaLENBQWhCLEVBQStCLE9BQU8sSUFBRSxFQUFFLGFBQUYsR0FBZ0IsRUFBRSxFQUFFLGFBQUosSUFBbUIsRUFBRSxhQUFGLEVBQW5CLEdBQXFDLEVBQUUsYUFBekQsRUFBdUUsSUFBRSxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsRUFBSyxPQUFMLENBQWEsRUFBYixFQUFnQixPQUFLLENBQXJCLENBQVAsR0FBK0IsQ0FBQyxDQUFELEtBQUssRUFBRSxLQUFQLEtBQWUsRUFBRSxHQUFGLElBQU8sQ0FBQyxHQUFHLElBQUgsQ0FBUSxFQUFFLEdBQVYsSUFBZSxHQUFmLEdBQW1CLEdBQXBCLElBQXlCLEVBQUUsS0FBM0IsR0FBaUMsR0FBakMsR0FBcUMsQ0FBM0QsQ0FBdEcsRUFBb0ssRUFBRSxVQUFGLENBQWEsYUFBYixJQUE0QixZQUFVO0FBQUMsYUFBTyxLQUFHLEVBQUUsS0FBRixDQUFRLElBQUUsaUJBQVYsQ0FBSCxFQUFnQyxFQUFFLENBQUYsQ0FBdkM7QUFBNEMsS0FBdlAsRUFBd1AsRUFBRSxTQUFGLENBQVksQ0FBWixJQUFlLE1BQXZRLEVBQThRLElBQUUsRUFBRSxDQUFGLENBQWhSLEVBQXFSLEVBQUUsQ0FBRixJQUFLLFlBQVU7QUFBQyxVQUFFLFNBQUY7QUFBWSxLQUFqVCxFQUFrVCxFQUFFLE1BQUYsQ0FBUyxZQUFVO0FBQUMsV0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLEVBQUUsQ0FBRixFQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUE4QixFQUFFLENBQUYsSUFBSyxDQUFuQyxFQUFxQyxFQUFFLENBQUYsTUFBTyxFQUFFLGFBQUYsR0FBZ0IsRUFBRSxhQUFsQixFQUFnQyxHQUFHLElBQUgsQ0FBUSxDQUFSLENBQXZDLENBQXJDLEVBQXdGLEtBQUcsRUFBRSxDQUFGLENBQUgsSUFBUyxFQUFFLEVBQUUsQ0FBRixDQUFGLENBQWpHLEVBQXlHLElBQUUsSUFBRSxLQUFLLENBQWxIO0FBQW9ILEtBQXhJLENBQWxULEVBQTRiLFFBQW5jO0FBQTRjLEdBQWhzQixDQUFqSCxFQUFtekIsRUFBRSxrQkFBRixHQUFxQixZQUFVO0FBQUMsUUFBSSxJQUFFLEVBQUUsY0FBRixDQUFpQixrQkFBakIsQ0FBb0MsRUFBcEMsRUFBd0MsSUFBOUMsQ0FBbUQsT0FBTyxFQUFFLFNBQUYsR0FBWSw0QkFBWixFQUF5QyxNQUFJLEVBQUUsVUFBRixDQUFhLE1BQWpFO0FBQXdFLEdBQXRJLEVBQXgwQixFQUFpOUIsRUFBRSxTQUFGLEdBQVksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFFBQUcsWUFBVSxPQUFPLENBQXBCLEVBQXNCLE9BQU0sRUFBTixDQUFTLGFBQVcsT0FBTyxDQUFsQixLQUFzQixJQUFFLENBQUYsRUFBSSxJQUFFLENBQUMsQ0FBN0IsRUFBZ0MsSUFBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLENBQVIsQ0FBVSxPQUFPLE1BQUksRUFBRSxrQkFBRixJQUFzQixDQUFDLElBQUUsQ0FBQyxJQUFFLEVBQUUsY0FBRixDQUFpQixrQkFBakIsQ0FBb0MsRUFBcEMsQ0FBSCxFQUE0QyxhQUE1QyxDQUEwRCxNQUExRCxDQUFILEVBQXNFLElBQXRFLEdBQTJFLEVBQUUsUUFBRixDQUFXLElBQXRGLEVBQTJGLEVBQUUsSUFBRixDQUFPLFdBQVAsQ0FBbUIsQ0FBbkIsQ0FBakgsSUFBd0ksSUFBRSxDQUE5SSxHQUFpSixJQUFFLEVBQUUsSUFBRixDQUFPLENBQVAsQ0FBbkosRUFBNkosSUFBRSxDQUFDLENBQUQsSUFBSSxFQUFuSyxFQUFzSyxJQUFFLENBQUMsRUFBRSxhQUFGLENBQWdCLEVBQUUsQ0FBRixDQUFoQixDQUFELENBQUYsSUFBMkIsSUFBRSxHQUFHLENBQUMsQ0FBRCxDQUFILEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBRixFQUFjLEtBQUcsRUFBRSxNQUFMLElBQWEsRUFBRSxDQUFGLEVBQUssTUFBTCxFQUEzQixFQUF5QyxFQUFFLEtBQUYsQ0FBUSxFQUFSLEVBQVcsRUFBRSxVQUFiLENBQXBFLENBQTdLO0FBQTJRLEdBQWowQyxFQUFrMEMsRUFBRSxFQUFGLENBQUssSUFBTCxHQUFVLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxRQUFJLENBQUo7QUFBQSxRQUFNLENBQU47QUFBQSxRQUFRLENBQVI7QUFBQSxRQUFVLElBQUUsSUFBWjtBQUFBLFFBQWlCLElBQUUsRUFBRSxPQUFGLENBQVUsR0FBVixDQUFuQixDQUFrQyxPQUFPLElBQUUsQ0FBQyxDQUFILEtBQU8sSUFBRSxHQUFHLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBSCxDQUFGLEVBQWlCLElBQUUsRUFBRSxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBMUIsR0FBd0MsRUFBRSxDQUFGLEtBQU0sSUFBRSxDQUFGLEVBQUksSUFBRSxLQUFLLENBQWpCLElBQW9CLEtBQUcsb0JBQWlCLENBQWpCLHlDQUFpQixDQUFqQixFQUFILEtBQXdCLElBQUUsTUFBMUIsQ0FBNUQsRUFBOEYsRUFBRSxNQUFGLEdBQVMsQ0FBVCxJQUFZLEVBQUUsSUFBRixDQUFPLEVBQUMsS0FBSSxDQUFMLEVBQU8sTUFBSyxLQUFHLEtBQWYsRUFBcUIsVUFBUyxNQUE5QixFQUFxQyxNQUFLLENBQTFDLEVBQVAsRUFBcUQsSUFBckQsQ0FBMEQsVUFBUyxDQUFULEVBQVc7QUFBQyxVQUFFLFNBQUYsRUFBWSxFQUFFLElBQUYsQ0FBTyxJQUFFLEVBQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsRUFBRSxTQUFGLENBQVksQ0FBWixDQUFsQixFQUFrQyxJQUFsQyxDQUF1QyxDQUF2QyxDQUFGLEdBQTRDLENBQW5ELENBQVo7QUFBa0UsS0FBeEksRUFBMEksTUFBMUksQ0FBaUosS0FBRyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFFLElBQUYsQ0FBTyxZQUFVO0FBQUMsVUFBRSxLQUFGLENBQVEsSUFBUixFQUFhLEtBQUcsQ0FBQyxFQUFFLFlBQUgsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsQ0FBaEI7QUFBc0MsT0FBeEQ7QUFBMEQsS0FBNU4sQ0FBMUcsRUFBd1UsSUFBL1U7QUFBb1YsR0FBbHRELEVBQW10RCxFQUFFLElBQUYsQ0FBTyxDQUFDLFdBQUQsRUFBYSxVQUFiLEVBQXdCLGNBQXhCLEVBQXVDLFdBQXZDLEVBQW1ELGFBQW5ELEVBQWlFLFVBQWpFLENBQVAsRUFBb0YsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxFQUFGLENBQUssQ0FBTCxJQUFRLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxLQUFLLEVBQUwsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFQO0FBQW9CLEtBQXhDO0FBQXlDLEdBQTNJLENBQW50RCxFQUFnMkQsRUFBRSxJQUFGLENBQU8sT0FBUCxDQUFlLFFBQWYsR0FBd0IsVUFBUyxDQUFULEVBQVc7QUFBQyxXQUFPLEVBQUUsSUFBRixDQUFPLEVBQUUsTUFBVCxFQUFnQixVQUFTLENBQVQsRUFBVztBQUFDLGFBQU8sTUFBSSxFQUFFLElBQWI7QUFBa0IsS0FBOUMsRUFBZ0QsTUFBdkQ7QUFBOEQsR0FBbDhELEVBQW04RCxFQUFFLE1BQUYsR0FBUyxFQUFDLFdBQVUsbUJBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxVQUFJLENBQUo7QUFBQSxVQUFNLENBQU47QUFBQSxVQUFRLENBQVI7QUFBQSxVQUFVLENBQVY7QUFBQSxVQUFZLENBQVo7QUFBQSxVQUFjLENBQWQ7QUFBQSxVQUFnQixDQUFoQjtBQUFBLFVBQWtCLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFVBQVIsQ0FBcEI7QUFBQSxVQUF3QyxJQUFFLEVBQUUsQ0FBRixDQUExQztBQUFBLFVBQStDLElBQUUsRUFBakQsQ0FBb0QsYUFBVyxDQUFYLEtBQWUsRUFBRSxLQUFGLENBQVEsUUFBUixHQUFpQixVQUFoQyxHQUE0QyxJQUFFLEVBQUUsTUFBRixFQUE5QyxFQUF5RCxJQUFFLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxLQUFSLENBQTNELEVBQTBFLElBQUUsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLE1BQVIsQ0FBNUUsRUFBNEYsQ0FBQyxJQUFFLENBQUMsZUFBYSxDQUFiLElBQWdCLFlBQVUsQ0FBM0IsS0FBK0IsQ0FBQyxJQUFFLENBQUgsRUFBTSxPQUFOLENBQWMsTUFBZCxJQUFzQixDQUFDLENBQXpELEtBQTZELElBQUUsQ0FBQyxJQUFFLEVBQUUsUUFBRixFQUFILEVBQWlCLEdBQW5CLEVBQXVCLElBQUUsRUFBRSxJQUF4RixLQUErRixJQUFFLFdBQVcsQ0FBWCxLQUFlLENBQWpCLEVBQW1CLElBQUUsV0FBVyxDQUFYLEtBQWUsQ0FBbkksQ0FBNUYsRUFBa08sRUFBRSxDQUFGLE1BQU8sSUFBRSxFQUFFLElBQUYsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLEVBQUUsTUFBRixDQUFTLEVBQVQsRUFBWSxDQUFaLENBQVgsQ0FBVCxDQUFsTyxFQUF1USxRQUFNLEVBQUUsR0FBUixLQUFjLEVBQUUsR0FBRixHQUFNLEVBQUUsR0FBRixHQUFNLEVBQUUsR0FBUixHQUFZLENBQWhDLENBQXZRLEVBQTBTLFFBQU0sRUFBRSxJQUFSLEtBQWUsRUFBRSxJQUFGLEdBQU8sRUFBRSxJQUFGLEdBQU8sRUFBRSxJQUFULEdBQWMsQ0FBcEMsQ0FBMVMsRUFBaVYsV0FBVSxDQUFWLEdBQVksRUFBRSxLQUFGLENBQVEsSUFBUixDQUFhLENBQWIsRUFBZSxDQUFmLENBQVosR0FBOEIsRUFBRSxHQUFGLENBQU0sQ0FBTixDQUEvVztBQUF3WCxLQUF2YyxFQUE1OEQsRUFBcTVFLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLFFBQU8sZ0JBQVMsQ0FBVCxFQUFXO0FBQUMsVUFBRyxVQUFVLE1BQWIsRUFBb0IsT0FBTyxLQUFLLENBQUwsS0FBUyxDQUFULEdBQVcsSUFBWCxHQUFnQixLQUFLLElBQUwsQ0FBVSxVQUFTLENBQVQsRUFBVztBQUFDLFVBQUUsTUFBRixDQUFTLFNBQVQsQ0FBbUIsSUFBbkIsRUFBd0IsQ0FBeEIsRUFBMEIsQ0FBMUI7QUFBNkIsT0FBbkQsQ0FBdkIsQ0FBNEUsSUFBSSxDQUFKO0FBQUEsVUFBTSxDQUFOO0FBQUEsVUFBUSxJQUFFLEtBQUssQ0FBTCxDQUFWLENBQWtCLElBQUcsQ0FBSCxFQUFLLE9BQU8sRUFBRSxjQUFGLEdBQW1CLE1BQW5CLElBQTJCLElBQUUsRUFBRSxxQkFBRixFQUFGLEVBQTRCLElBQUUsRUFBRSxhQUFGLENBQWdCLFdBQTlDLEVBQTBELEVBQUMsS0FBSSxFQUFFLEdBQUYsR0FBTSxFQUFFLFdBQWIsRUFBeUIsTUFBSyxFQUFFLElBQUYsR0FBTyxFQUFFLFdBQXZDLEVBQXJGLElBQTBJLEVBQUMsS0FBSSxDQUFMLEVBQU8sTUFBSyxDQUFaLEVBQWpKO0FBQWdLLEtBQTNTLEVBQTRTLFVBQVMsb0JBQVU7QUFBQyxVQUFHLEtBQUssQ0FBTCxDQUFILEVBQVc7QUFBQyxZQUFJLENBQUo7QUFBQSxZQUFNLENBQU47QUFBQSxZQUFRLENBQVI7QUFBQSxZQUFVLElBQUUsS0FBSyxDQUFMLENBQVo7QUFBQSxZQUFvQixJQUFFLEVBQUMsS0FBSSxDQUFMLEVBQU8sTUFBSyxDQUFaLEVBQXRCLENBQXFDLElBQUcsWUFBVSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsVUFBUixDQUFiLEVBQWlDLElBQUUsRUFBRSxxQkFBRixFQUFGLENBQWpDLEtBQWlFO0FBQUMsY0FBRSxLQUFLLE1BQUwsRUFBRixFQUFnQixJQUFFLEVBQUUsYUFBcEIsRUFBa0MsSUFBRSxFQUFFLFlBQUYsSUFBZ0IsRUFBRSxlQUF0RCxDQUFzRSxPQUFNLE1BQUksTUFBSSxFQUFFLElBQU4sSUFBWSxNQUFJLEVBQUUsZUFBdEIsS0FBd0MsYUFBVyxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsVUFBUixDQUF6RDtBQUE2RSxnQkFBRSxFQUFFLFVBQUo7QUFBN0UsV0FBNEYsS0FBRyxNQUFJLENBQVAsSUFBVSxNQUFJLEVBQUUsUUFBaEIsS0FBMkIsQ0FBQyxJQUFFLEVBQUUsQ0FBRixFQUFLLE1BQUwsRUFBSCxFQUFrQixHQUFsQixJQUF1QixFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsZ0JBQVIsRUFBeUIsQ0FBQyxDQUExQixDQUF2QixFQUFvRCxFQUFFLElBQUYsSUFBUSxFQUFFLEdBQUYsQ0FBTSxDQUFOLEVBQVEsaUJBQVIsRUFBMEIsQ0FBQyxDQUEzQixDQUF2RjtBQUFzSCxnQkFBTSxFQUFDLEtBQUksRUFBRSxHQUFGLEdBQU0sRUFBRSxHQUFSLEdBQVksRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFdBQVIsRUFBb0IsQ0FBQyxDQUFyQixDQUFqQixFQUF5QyxNQUFLLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBVCxHQUFjLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxZQUFSLEVBQXFCLENBQUMsQ0FBdEIsQ0FBNUQsRUFBTjtBQUE0RjtBQUFDLEtBQXh5QixFQUF5eUIsY0FBYSx3QkFBVTtBQUFDLGFBQU8sS0FBSyxHQUFMLENBQVMsWUFBVTtBQUFDLFlBQUksSUFBRSxLQUFLLFlBQVgsQ0FBd0IsT0FBTSxLQUFHLGFBQVcsRUFBRSxHQUFGLENBQU0sQ0FBTixFQUFRLFVBQVIsQ0FBcEI7QUFBd0MsY0FBRSxFQUFFLFlBQUo7QUFBeEMsU0FBeUQsT0FBTyxLQUFHLEVBQVY7QUFBYSxPQUFsSCxDQUFQO0FBQTJILEtBQTU3QixFQUFaLENBQXI1RSxFQUFnMkcsRUFBRSxJQUFGLENBQU8sRUFBQyxZQUFXLGFBQVosRUFBMEIsV0FBVSxhQUFwQyxFQUFQLEVBQTBELFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUksSUFBRSxrQkFBZ0IsQ0FBdEIsQ0FBd0IsRUFBRSxFQUFGLENBQUssQ0FBTCxJQUFRLFVBQVMsQ0FBVCxFQUFXO0FBQUMsYUFBTyxFQUFFLElBQUYsRUFBTyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsWUFBSSxDQUFKLENBQU0sSUFBRyxFQUFFLENBQUYsSUFBSyxJQUFFLENBQVAsR0FBUyxNQUFJLEVBQUUsUUFBTixLQUFpQixJQUFFLEVBQUUsV0FBckIsQ0FBVCxFQUEyQyxLQUFLLENBQUwsS0FBUyxDQUF2RCxFQUF5RCxPQUFPLElBQUUsRUFBRSxDQUFGLENBQUYsR0FBTyxFQUFFLENBQUYsQ0FBZCxDQUFtQixJQUFFLEVBQUUsUUFBRixDQUFXLElBQUUsRUFBRSxXQUFKLEdBQWdCLENBQTNCLEVBQTZCLElBQUUsQ0FBRixHQUFJLEVBQUUsV0FBbkMsQ0FBRixHQUFrRCxFQUFFLENBQUYsSUFBSyxDQUF2RDtBQUF5RCxPQUFsSyxFQUFtSyxDQUFuSyxFQUFxSyxDQUFySyxFQUF1SyxVQUFVLE1BQWpMLENBQVA7QUFBZ00sS0FBcE47QUFBcU4sR0FBclQsQ0FBaDJHLEVBQXVwSCxFQUFFLElBQUYsQ0FBTyxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQVAsRUFBc0IsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsTUFBRSxRQUFGLENBQVcsQ0FBWCxJQUFjLEdBQUcsRUFBRSxhQUFMLEVBQW1CLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFVBQUcsQ0FBSCxFQUFLLE9BQU8sSUFBRSxHQUFHLENBQUgsRUFBSyxDQUFMLENBQUYsRUFBVSxHQUFHLElBQUgsQ0FBUSxDQUFSLElBQVcsRUFBRSxDQUFGLEVBQUssUUFBTCxHQUFnQixDQUFoQixJQUFtQixJQUE5QixHQUFtQyxDQUFwRDtBQUFzRCxLQUE1RixDQUFkO0FBQTRHLEdBQWhKLENBQXZwSCxFQUF5eUgsRUFBRSxJQUFGLENBQU8sRUFBQyxRQUFPLFFBQVIsRUFBaUIsT0FBTSxPQUF2QixFQUFQLEVBQXVDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUUsSUFBRixDQUFPLEVBQUMsU0FBUSxVQUFRLENBQWpCLEVBQW1CLFNBQVEsQ0FBM0IsRUFBNkIsSUFBRyxVQUFRLENBQXhDLEVBQVAsRUFBa0QsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRSxFQUFGLENBQUssQ0FBTCxJQUFRLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFlBQUksSUFBRSxVQUFVLE1BQVYsS0FBbUIsS0FBRyxhQUFXLE9BQU8sQ0FBeEMsQ0FBTjtBQUFBLFlBQWlELElBQUUsTUFBSSxDQUFDLENBQUQsS0FBSyxDQUFMLElBQVEsQ0FBQyxDQUFELEtBQUssQ0FBYixHQUFlLFFBQWYsR0FBd0IsUUFBNUIsQ0FBbkQsQ0FBeUYsT0FBTyxFQUFFLElBQUYsRUFBTyxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsY0FBSSxDQUFKLENBQU0sT0FBTyxFQUFFLENBQUYsSUFBSyxNQUFJLEVBQUUsT0FBRixDQUFVLE9BQVYsQ0FBSixHQUF1QixFQUFFLFVBQVEsQ0FBVixDQUF2QixHQUFvQyxFQUFFLFFBQUYsQ0FBVyxlQUFYLENBQTJCLFdBQVMsQ0FBcEMsQ0FBekMsR0FBZ0YsTUFBSSxFQUFFLFFBQU4sSUFBZ0IsSUFBRSxFQUFFLGVBQUosRUFBb0IsS0FBSyxHQUFMLENBQVMsRUFBRSxJQUFGLENBQU8sV0FBUyxDQUFoQixDQUFULEVBQTRCLEVBQUUsV0FBUyxDQUFYLENBQTVCLEVBQTBDLEVBQUUsSUFBRixDQUFPLFdBQVMsQ0FBaEIsQ0FBMUMsRUFBNkQsRUFBRSxXQUFTLENBQVgsQ0FBN0QsRUFBMkUsRUFBRSxXQUFTLENBQVgsQ0FBM0UsQ0FBcEMsSUFBK0gsS0FBSyxDQUFMLEtBQVMsQ0FBVCxHQUFXLEVBQUUsR0FBRixDQUFNLENBQU4sRUFBUSxDQUFSLEVBQVUsQ0FBVixDQUFYLEdBQXdCLEVBQUUsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBWixFQUFjLENBQWQsQ0FBOU87QUFBK1AsU0FBNVIsRUFBNlIsQ0FBN1IsRUFBK1IsSUFBRSxDQUFGLEdBQUksS0FBSyxDQUF4UyxFQUEwUyxDQUExUyxDQUFQO0FBQW9ULE9BQW5hO0FBQW9hLEtBQXBlO0FBQXNlLEdBQTNoQixDQUF6eUgsRUFBczBJLEVBQUUsSUFBRixDQUFPLHdMQUF3TCxLQUF4TCxDQUE4TCxHQUE5TCxDQUFQLEVBQTBNLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLE1BQUUsRUFBRixDQUFLLENBQUwsSUFBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxhQUFPLFVBQVUsTUFBVixHQUFpQixDQUFqQixHQUFtQixLQUFLLEVBQUwsQ0FBUSxDQUFSLEVBQVUsSUFBVixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBbkIsR0FBdUMsS0FBSyxPQUFMLENBQWEsQ0FBYixDQUE5QztBQUE4RCxLQUFwRjtBQUFxRixHQUE3UyxDQUF0MEksRUFBcW5KLEVBQUUsRUFBRixDQUFLLE1BQUwsQ0FBWSxFQUFDLE9BQU0sZUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsVUFBbkIsQ0FBOEIsS0FBRyxDQUFqQyxDQUFQO0FBQTJDLEtBQWhFLEVBQVosQ0FBcm5KLEVBQW9zSixFQUFFLEVBQUYsQ0FBSyxNQUFMLENBQVksRUFBQyxNQUFLLGNBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxhQUFPLEtBQUssRUFBTCxDQUFRLENBQVIsRUFBVSxJQUFWLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUFQO0FBQTJCLEtBQWpELEVBQWtELFFBQU8sZ0JBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLGFBQU8sS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFXLElBQVgsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUEwQixLQUFqRyxFQUFrRyxVQUFTLGtCQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxhQUFPLEtBQUssRUFBTCxDQUFRLENBQVIsRUFBVSxDQUFWLEVBQVksQ0FBWixFQUFjLENBQWQsQ0FBUDtBQUF3QixLQUFySixFQUFzSixZQUFXLG9CQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsYUFBTyxNQUFJLFVBQVUsTUFBZCxHQUFxQixLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVcsSUFBWCxDQUFyQixHQUFzQyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVcsS0FBRyxJQUFkLEVBQW1CLENBQW5CLENBQTdDO0FBQW1FLEtBQXBQLEVBQVosQ0FBcHNKLEVBQXU4SixFQUFFLEtBQUYsR0FBUSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFJLENBQUosRUFBTSxDQUFOLEVBQVEsQ0FBUixDQUFVLElBQUcsWUFBVSxPQUFPLENBQWpCLEtBQXFCLElBQUUsRUFBRSxDQUFGLENBQUYsRUFBTyxJQUFFLENBQVQsRUFBVyxJQUFFLENBQWxDLEdBQXFDLEVBQUUsQ0FBRixDQUF4QyxFQUE2QyxPQUFPLElBQUUsRUFBRSxJQUFGLENBQU8sU0FBUCxFQUFpQixDQUFqQixDQUFGLEVBQXNCLElBQUUsYUFBVTtBQUFDLGFBQU8sRUFBRSxLQUFGLENBQVEsS0FBRyxJQUFYLEVBQWdCLEVBQUUsTUFBRixDQUFTLEVBQUUsSUFBRixDQUFPLFNBQVAsQ0FBVCxDQUFoQixDQUFQO0FBQW9ELEtBQXZGLEVBQXdGLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixHQUFPLEVBQUUsSUFBRixJQUFRLEVBQUUsSUFBRixFQUE5RyxFQUF1SCxDQUE5SDtBQUFnSSxHQUFwcEssRUFBcXBLLEVBQUUsU0FBRixHQUFZLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRSxFQUFFLFNBQUYsRUFBRixHQUFnQixFQUFFLEtBQUYsQ0FBUSxDQUFDLENBQVQsQ0FBaEI7QUFBNEIsR0FBenNLLEVBQTBzSyxFQUFFLE9BQUYsR0FBVSxNQUFNLE9BQTF0SyxFQUFrdUssRUFBRSxTQUFGLEdBQVksS0FBSyxLQUFudkssRUFBeXZLLEVBQUUsUUFBRixHQUFXLENBQXB3SyxFQUFzd0ssRUFBRSxVQUFGLEdBQWEsQ0FBbnhLLEVBQXF4SyxFQUFFLFFBQUYsR0FBVyxDQUFoeUssRUFBa3lLLEVBQUUsU0FBRixHQUFZLENBQTl5SyxFQUFnekssRUFBRSxJQUFGLEdBQU8sQ0FBdnpLLEVBQXl6SyxFQUFFLEdBQUYsR0FBTSxLQUFLLEdBQXAwSyxFQUF3MEssRUFBRSxTQUFGLEdBQVksVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLElBQUUsRUFBRSxJQUFGLENBQU8sQ0FBUCxDQUFOLENBQWdCLE9BQU0sQ0FBQyxhQUFXLENBQVgsSUFBYyxhQUFXLENBQTFCLEtBQThCLENBQUMsTUFBTSxJQUFFLFdBQVcsQ0FBWCxDQUFSLENBQXJDO0FBQTRELEdBQTU2SyxFQUE2NkssY0FBWSxPQUFPLE1BQW5CLElBQTJCLE9BQU8sR0FBbEMsSUFBdUMsT0FBTyxRQUFQLEVBQWdCLEVBQWhCLEVBQW1CLFlBQVU7QUFBQyxXQUFPLENBQVA7QUFBUyxHQUF2QyxDQUFwOUssQ0FBNi9LLElBQUksS0FBRyxFQUFFLE1BQVQ7QUFBQSxNQUFnQixLQUFHLEVBQUUsQ0FBckIsQ0FBdUIsT0FBTyxFQUFFLFVBQUYsR0FBYSxVQUFTLENBQVQsRUFBVztBQUFDLFdBQU8sRUFBRSxDQUFGLEtBQU0sQ0FBTixLQUFVLEVBQUUsQ0FBRixHQUFJLEVBQWQsR0FBa0IsS0FBRyxFQUFFLE1BQUYsS0FBVyxDQUFkLEtBQWtCLEVBQUUsTUFBRixHQUFTLEVBQTNCLENBQWxCLEVBQWlELENBQXhEO0FBQTBELEdBQW5GLEVBQW9GLE1BQUksRUFBRSxNQUFGLEdBQVMsRUFBRSxDQUFGLEdBQUksQ0FBakIsQ0FBcEYsRUFBd0csQ0FBL0c7QUFBaUgsQ0FBdHpwRixDQUFEOzs7Ozs7a0JDb0N3QixROztBQXJDeEI7Ozs7OztBQUVBO0FBQ0EsU0FBUyxjQUFULENBQXdCLENBQXhCLEVBQTJCO0FBQ3pCLEtBQUksS0FBSyxPQUFPLEtBQWhCO0FBQ0EsS0FBSSxFQUFFLGNBQU4sRUFDSSxFQUFFLGNBQUY7QUFDSixHQUFFLFdBQUYsR0FBZ0IsS0FBaEIsQ0FKeUIsQ0FJRDtBQUN6Qjs7QUFFRCxTQUFTLDJCQUFULENBQXFDLENBQXJDLEVBQXdDO0FBQ3BDLEtBQUksS0FBSyxFQUFFLE9BQVAsQ0FBSixFQUFxQjtBQUNqQixpQkFBZSxDQUFmO0FBQ0EsU0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFFRCxTQUFTLGFBQVQsR0FBeUI7QUFDdkIsS0FBSSxPQUFPLGdCQUFYLEVBQTZCO0FBQ3pCLFNBQU8sZ0JBQVAsQ0FBd0IsZ0JBQXhCLEVBQTBDLGNBQTFDLEVBQTBELEtBQTFEO0FBQ0osUUFBTyxPQUFQLEdBQWlCLGNBQWpCLENBSHVCLENBR1U7QUFDakMsUUFBTyxZQUFQLEdBQXNCLFNBQVMsWUFBVCxHQUF3QixjQUE5QyxDQUp1QixDQUl1QztBQUM5RCxRQUFPLFdBQVAsR0FBc0IsY0FBdEIsQ0FMdUIsQ0FLZTtBQUN0QyxVQUFTLFNBQVQsR0FBc0IsMkJBQXRCO0FBQ0Q7O0FBRUQsU0FBUyxZQUFULEdBQXdCO0FBQ3BCLEtBQUksT0FBTyxtQkFBWCxFQUNJLE9BQU8sbUJBQVAsQ0FBMkIsZ0JBQTNCLEVBQTZDLGNBQTdDLEVBQTZELEtBQTdEO0FBQ0osUUFBTyxZQUFQLEdBQXNCLFNBQVMsWUFBVCxHQUF3QixJQUE5QztBQUNBLFFBQU8sT0FBUCxHQUFpQixJQUFqQjtBQUNBLFFBQU8sV0FBUCxHQUFxQixJQUFyQjtBQUNBLFVBQVMsU0FBVCxHQUFxQixJQUFyQjtBQUNIOztBQUljLFNBQVMsUUFBVCxHQUFxQixDQUFFO0FBQ3RDLFNBQVMsU0FBVCxDQUFtQixJQUFuQixHQUEwQixVQUFVLEdBQVYsRUFBZTtBQUN4QyxLQUFJLElBQUksSUFBSSxxQkFBSixHQUE0QixJQUFwQyxDQUR3QyxDQUNHO0FBQzNDLEtBQUksSUFBSSxJQUFJLHFCQUFKLEdBQTRCLEdBQXBDO0FBQ0EsS0FBSSxJQUFJLElBQUksWUFBWixDQUh3QyxDQUdiO0FBQzNCLEtBQUksTUFBTSxHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsc0JBQUUsb0JBQUYsQ0FBZCxDQUFWO0FBQ0EsS0FBSSxlQUFlLHNCQUFFLGNBQUYsQ0FBbkI7QUFDQSxLQUFJLFNBQVMsc0JBQUUsOEJBQUYsQ0FBYjtBQUNBO0FBQ0EsS0FBSSxJQUFJLEtBQVIsRUFBZTtBQUNkLE1BQUksT0FBSixDQUFZLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUNyQix5QkFBRSxDQUFGLEVBQUssV0FBTCxDQUFpQiwwQkFBakI7QUFDQSxPQUFJLEVBQUUsU0FBRixLQUFnQixJQUFJLEtBQXhCLEVBQStCO0FBQzlCLDBCQUFFLENBQUYsRUFBSyxRQUFMLENBQWMsMEJBQWQ7QUFDQSxRQUFJLE1BQU0sQ0FBVixFQUFhO0FBQ2IsU0FBSyxJQUFJLEVBQVQsQ0FIOEIsQ0FHZDtBQUNoQjtBQUNELEdBUEQ7QUFRQTtBQUNELGNBQWEsSUFBYixDQUFrQixVQUFsQixFQUE4QixDQUE5QixFQWxCd0MsQ0FrQko7O0FBRXBDLHVCQUFFLFdBQUYsRUFBZSxNQUFmLEdBcEJ3QyxDQW9CUjtBQUNoQyx1QkFBRSxTQUFTLElBQVgsRUFBaUIsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQSxRQUFPLElBQVA7QUFDQSxRQUFPLE9BQVAsQ0FBZSxFQUFDLFNBQVMsQ0FBVixFQUFmO0FBQ0E7QUFDQSxLQUFJLHNCQUFFLE1BQUYsRUFBVSxNQUFWLE1BQXNCLElBQUksYUFBYSxNQUFiLEVBQTlCLEVBQXFEO0FBQ3BELE1BQUksc0JBQUUsTUFBRixFQUFVLE1BQVYsS0FBcUIsYUFBYSxNQUFiLEVBQXJCLEdBQTZDLEVBQWpELENBRG9ELENBQ0U7QUFDdEQ7QUFDRCxjQUFhLEdBQWIsQ0FBaUIsRUFBQyxLQUFLLElBQUksSUFBVixFQUFnQixNQUFNLElBQUksSUFBMUIsRUFBakI7QUFDQSxjQUFhLFFBQWIsQ0FBc0IscUJBQXRCO0FBQ0E7QUFDQTtBQUNBLFVBQVMsU0FBVCxHQUFzQjtBQUNyQixlQUFhLEdBQWIsQ0FBaUIsT0FBakI7QUFDQSxTQUFPLEdBQVAsQ0FBVyxPQUFYO0FBQ0EsZUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFVBQVUsRUFBVixFQUFjO0FBQ3RDLE9BQUksU0FBUyxHQUFHLE1BQWhCO0FBQ0EsT0FBSSxLQUFKLEdBQVksT0FBTyxTQUFuQjtBQUNBLGdCQUFhLFdBQWIsQ0FBeUIscUJBQXpCO0FBQ0EsVUFBTyxJQUFQO0FBQ0EsT0FBSSxLQUFKLEdBQVksT0FBTyxTQUFuQjtBQUNBLHVCQUFvQixRQUFwQixFQUE4QixHQUE5QjtBQUNBO0FBQ0EsR0FSRDtBQVNBLFNBQU8sRUFBUCxDQUFVLE9BQVYsRUFBbUIsWUFBWTtBQUM5QixnQkFBYSxXQUFiLENBQXlCLHFCQUF6QjtBQUNBLFVBQU8sSUFBUDtBQUNBLHVCQUFvQixRQUFwQixFQUE4QixHQUE5QjtBQUNBO0FBQ0EsR0FMRDtBQU1BLFdBQVMsR0FBVCxHQUFnQjtBQUNmLE9BQUksVUFBVSxzQkFBRSxjQUFGLENBQWQ7QUFDQSxPQUFJLFdBQVcsc0JBQUUsTUFBRixFQUFVLE1BQVYsRUFBZjtBQUNBLE9BQUksV0FBVyxRQUFRLE1BQVIsRUFBZjtBQUNBLE9BQUksV0FBVyxRQUFRLElBQVIsQ0FBYSxVQUFiLENBQWY7O0FBRUEsT0FBSSxXQUFXLFFBQVgsSUFBdUIsUUFBM0IsRUFBcUM7QUFDbkMsWUFBUSxHQUFSLENBQVksRUFBQyxLQUFLLFdBQVcsRUFBWCxHQUFnQixRQUFoQixHQUEyQixJQUFqQyxFQUFaO0FBQ0QsSUFGRCxNQUVPO0FBQ04sWUFBUSxHQUFSLENBQVksRUFBQyxLQUFLLFdBQVcsSUFBakIsRUFBWjtBQUNBO0FBQ0Q7QUFDRCxXQUFTLFNBQVQsQ0FBbUIsRUFBbkIsRUFBc0IsSUFBdEIsRUFBMkIsSUFBM0IsRUFBZ0M7QUFDNUIsT0FBSSxXQUFXLElBQWYsQ0FENEIsQ0FDUDtBQUNyQixPQUFJLFFBQVEsSUFBWjtBQUNBLFVBQU8sWUFBVTtBQUNiLFFBQUksTUFBTSxJQUFJLElBQUosRUFBVjtBQUNBLFFBQUcsQ0FBQyxRQUFKLEVBQWMsV0FBVyxHQUFYO0FBQ2Q7QUFDQSxRQUFHLE1BQU0sUUFBTixHQUFpQixJQUFwQixFQUF5QjtBQUNyQixrQkFBYSxLQUFiO0FBQ0E7QUFDQSxnQkFBVyxHQUFYLENBSHFCLENBR047QUFDbEIsS0FKRCxNQUlLO0FBQ0Qsa0JBQWEsS0FBYjtBQUNBLGFBQVEsV0FBVyxZQUFVO0FBQ3pCO0FBQ0gsTUFGTyxFQUVOLElBRk0sQ0FBUjtBQUdIO0FBQ0osSUFkRDtBQWVIO0FBQ0QsU0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFVLEdBQVYsRUFBYyxHQUFkLEVBQWtCLElBQWxCLENBQWxDO0FBQ0E7QUFDRCxDQW5GRDs7Ozs7OztxakJDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFDQTs7Ozs7Ozs7SUFDcUIsUTtBQUNwQixxQkFBZTtBQUFBO0FBQUU7Ozs7MkJBQ1A7QUFDVCxPQUFJLE9BQU8sSUFBWDtBQUNBLGNBQVcsWUFBWTtBQUN0QixTQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLG9CQUFvQixLQUFLLElBQTVDO0FBQ0EsSUFGRCxFQUVHLENBRkg7QUFJQTs7OzJCQUNTO0FBQ1QsT0FBSSxPQUFPLElBQVg7QUFDQSxRQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLG9CQUFvQixLQUFLLElBQTVDLEVBQWtELEVBQWxELENBQXFELGVBQXJELEVBQXNFLFlBQVk7QUFDakYsU0FBSyxJQUFMLENBQVUsTUFBVjtBQUNBLElBRkQ7QUFHQTs7O3VCQUNLLEcsRUFBSyxJLEVBQU0sSyxFQUFPO0FBQ3ZCLFFBQUssSUFBTCxHQUFZLFFBQVEsYUFBcEI7QUFDQSxRQUFLLElBQUwsR0FBWSxzSUFDa0IsR0FEbEIsNEpBQVo7QUFLQSxPQUFJLE1BQU0sSUFBTixDQUFXLEtBQUssSUFBaEIsQ0FBSixFQUEyQjtBQUMxQixTQUFLLElBQUwsR0FBWSxtSUFDaUIsR0FEakIsNEpBQVo7QUFLQTtBQUNELFdBQVEsS0FBSyxJQUFiO0FBQ0MsU0FBSyxVQUFMO0FBQ0MsVUFBSyxJQUFMLENBQVUsR0FBVixDQUFjLEVBQUMsTUFBTSxNQUFQLEVBQWQ7QUFDQTtBQUNELFNBQUssWUFBTDtBQUNDLFVBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxFQUFDLE1BQU0sS0FBUCxFQUFjLFlBQVksUUFBMUIsRUFBZDtBQUNBO0FBQ0QsU0FBSyxXQUFMO0FBQ0MsVUFBSyxJQUFMLENBQVUsR0FBVixDQUFjLEVBQUMsT0FBTyxNQUFSLEVBQWQ7QUFDQTtBQUNELFNBQUssZUFBTDtBQUNDLFVBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxFQUFDLE1BQU0sS0FBUCxFQUFjLFlBQVksUUFBMUIsRUFBZDtBQUNBO0FBQ0QsU0FBSyxjQUFMO0FBQ0MsVUFBSyxJQUFMLENBQVUsR0FBVixDQUFjLEVBQUMsT0FBTyxNQUFSLEVBQWQ7QUFDQTtBQUNEO0FBQ0MsVUFBSyxJQUFMLENBQVUsR0FBVixDQUFjLEVBQUMsTUFBTSxNQUFQLEVBQWQ7QUFqQkY7QUFtQkEsT0FBSSxLQUFKLEVBQVc7QUFDVixTQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFlBQVksS0FBL0I7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLGdCQUFuQjtBQUNBO0FBQ0QsUUFBSyxJQUFMLENBQVUsV0FBVixDQUFzQixLQUFLLEdBQTNCO0FBQ0EsUUFBSyxNQUFMO0FBQ0EsT0FBSSxPQUFPLElBQVg7QUFDQSxRQUFLLEtBQUwsR0FBYSxXQUFXLFlBQVk7QUFDbkMsaUJBQWEsS0FBSyxLQUFsQjtBQUNBLFNBQUssTUFBTDtBQUNBLElBSFksRUFHVixJQUhVLENBQWI7QUFJQSxRQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsT0FBYixFQUFzQixTQUF0QixFQUFpQyxZQUFZO0FBQzVDO0FBQ0EsaUJBQWEsS0FBSyxLQUFsQjtBQUNBLFNBQUssTUFBTDtBQUNBLElBSkQ7QUFLQTs7O3lCQUNPLEUsRUFBSSxHLEVBQUssSSxFQUFNLEssRUFBTztBQUM3QixRQUFLLEdBQUwsR0FBVyxzQkFBRSxFQUFGLENBQVg7QUFDQSxRQUFLLEdBQUwsQ0FBUyxNQUFULEdBQWtCLFFBQWxCLEdBQTZCLFFBQTdCLENBQXNDLGdCQUF0QyxFQUF3RCxJQUF4RCxDQUE2RCxZQUFZO0FBQ3hFLFFBQUksc0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxlQUFiLEVBQThCLENBQTlCLENBQUosRUFBc0M7QUFDckMsVUFBSyxRQUFMLENBQWMsTUFBZDtBQUNBLGtCQUFhLEtBQUssUUFBTCxDQUFjLEtBQTNCO0FBQ0E7QUFDRCxJQUxEO0FBTUEsT0FBSSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsZUFBZCxFQUErQixDQUEvQixDQUFKLEVBQXVDO0FBQ3ZDLFFBQUssSUFBTCxDQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCLEtBQXJCO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztrQkF0Rm9CLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgICQgZnJvbScuL2pxdWVyeS5qcydcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuL3NlbGVjdG9yLmpzJ1xuaW1wb3J0IFNuYWNrQmFyIGZyb20gJy4vc25hY2tiYXIuanMnXG5cbiQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICdpbnB1dFt1c3VhbF0nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2JsdXItbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlLXVzdWFsJylcblx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKS5hZGRDbGFzcygnZm9jdXMtZmllbGRfX3VzdWFsJylcblx0XHRcdH0pXG5cdFx0XHQkKGRvY3VtZW50KS5vbignYmx1cicsICdpbnB1dFt1c3VhbF0nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmlucHV0LWZpZWxkJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWZpZWxkX191c3VhbCcpXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykuYWRkQ2xhc3MoJ2JsdXItbGFiZWwnKVxuXHRcdFx0XHRpZiAodGhpcy52YWx1ZSkgcmV0dXJuXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS11c3VhbCcpXG5cdFx0XHR9KVxuXHRcdFx0JChkb2N1bWVudCkub24oJ2ZvY3VzJywgJ2lucHV0W2Vycm9yXScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlLWVycm9yJylcblx0XHRcdH0pXG5cdFx0XHQkKGRvY3VtZW50KS5vbignYmx1cicsICdpbnB1dFtlcnJvcl0nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlKSByZXR1cm5cblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWVycm9yJylcblx0XHRcdH0pXG5cdFx0XHQkKGRvY3VtZW50KS5vbignZm9jdXMnLCAndGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZS11c3VhbCcpXG5cdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmlucHV0LWZpZWxkJykuYWRkQ2xhc3MoJ2ZvY3VzLWZpZWxkX191c3VhbCcpXG5cdFx0XHR9KVxuXHRcdFx0JChkb2N1bWVudCkub24oJ2JsdXInLCAndGV4dGFyZWEnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmlucHV0LWZpZWxkJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWZpZWxkX191c3VhbCcpXG5cdFx0XHRcdGlmICh0aGlzLnZhbHVlKSByZXR1cm5cblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXVzdWFsJylcblx0XHRcdH0pXG5cdFx0XHQkKGRvY3VtZW50KS5vbignZm9jdXMnLCAnaW5wdXRbd2l0aHBsYWNlaG9sZGVyXScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbignbGFiZWwnKS5yZW1vdmVDbGFzcygnYmx1ci1sYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUtdXN1YWwnKVxuXHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpLmFkZENsYXNzKCdmb2N1cy1maWVsZF9fdXN1YWwnKVxuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gJ3BsYWNlaG9sZGVyJ1xuXHRcdFx0fSlcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdibHVyJywgJ2lucHV0W3dpdGhwbGFjZWhvbGRlcl0nLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSAnJ1xuXHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpLnJlbW92ZUNsYXNzKCdmb2N1cy1maWVsZF9fdXN1YWwnKVxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdsYWJlbCcpLmFkZENsYXNzKCdibHVyLWxhYmVsJylcblx0XHRcdFx0aWYgKHRoaXMudmFsdWUpIHJldHVyblxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdXN1YWwnKVxuXHRcdFx0fSlcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdmb2N1cycsICdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2JsdXItbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlLXVzdWFsJylcblx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKS5hZGRDbGFzcygnZm9jdXMtZmllbGRfX3VzdWFsJylcblx0XHRcdH0pXG5cdFx0XHQkKGRvY3VtZW50KS5vbignYmx1cicsICdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmlucHV0LWZpZWxkJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWZpZWxkX191c3VhbCcpXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykuYWRkQ2xhc3MoJ2JsdXItbGFiZWwnKVxuXHRcdFx0XHRpZiAodGhpcy52YWx1ZSkgcmV0dXJuXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS11c3VhbCcpXG5cdFx0XHR9KVxuXG5cdFx0XHR2YXIgc2VsZWN0X21hbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RfbWFuJykgXG5cdFx0XHR2YXIgcyA9IG5ldyBTZWxlY3RvcigpXG5cdFx0XHRzZWxlY3RfbWFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHMuaW5pdChzZWxlY3RfbWFuKVxuXHRcdFx0fVxuXG5cdFx0XHQvL3NuYWNrYmFyXG5cdFx0XHQkKGRvY3VtZW50KVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJ1tzbmFja2Jhcl90b3BfbGVmdF0nLCBmdW5jdGlvbiAoZXYpIHtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldFxuXHRcdFx0XHRcdGlmICghdGFyZ2V0LnNuYWNrYmFyKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIuc2luZ2xlKHRhcmdldCwgJ+S4iuW3picgLCd0b3AtbGVmdCcpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX3RvcF9jZW50ZXJdJywgZnVuY3Rpb24gKGV2KSB7XG5cdFx0XHRcdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXRcblx0XHRcdFx0XHRpZiAoIXRhcmdldC5zbmFja2Jhcikge1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFyZ2V0LnNuYWNrYmFyLnNpbmdsZSh0YXJnZXQsICfkuIrkuK0nICwndG9wLWNlbnRlcicpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX3RvcF9yaWdodF0nLCBmdW5jdGlvbiAoZXYpIHtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldFxuXHRcdFx0XHRcdGlmICghdGFyZ2V0LnNuYWNrYmFyKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIuc2luZ2xlKHRhcmdldCwgJ+S4iuWPsycgLCd0b3AtcmlnaHQnKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJ1tzbmFja2Jhcl9ib3R0b21fbGVmdF0nLCBmdW5jdGlvbiAoZXYpIHtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldFxuXHRcdFx0XHRcdGlmICghdGFyZ2V0LnNuYWNrYmFyKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIuc2luZ2xlKHRhcmdldCwgJ+S4i+W3picgLCdib3R0b20tbGVmdCcpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX2JvdHRvbV9jZW50ZXJdJywgZnVuY3Rpb24gKGV2KSB7XG5cdFx0XHRcdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXRcblx0XHRcdFx0XHRpZiAoIXRhcmdldC5zbmFja2Jhcikge1xuXHRcdFx0XHRcdFx0dGFyZ2V0LnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFyZ2V0LnNuYWNrYmFyLnNpbmdsZSh0YXJnZXQsICfkuIvkuK0nICwnYm90dG9tLWNlbnRlcicpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX2JvdHRvbV9yaWdodF0nLCBmdW5jdGlvbiAoZXYpIHtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldFxuXHRcdFx0XHRcdGlmICghdGFyZ2V0LnNuYWNrYmFyKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIuc2luZ2xlKHRhcmdldCwgJ+S4i+WPsycgLCdib3R0b20tcmlnaHQnKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJ1tzbmFja2Jhcl9jdXN0b21fc3VjY2Vzc10nLCBmdW5jdGlvbiAoZXYpIHtcblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldFxuXHRcdFx0XHRcdGlmICghdGFyZ2V0LnNuYWNrYmFyKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0YXJnZXQuc25hY2tiYXIuc2luZ2xlKHRhcmdldCwgJ3N1Y2Nlc3MnICwgJycsICdzdWNjZXNzJylcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjbGljaycsICdbc25hY2tiYXJfY3VzdG9tX2Vycm9yXScsIGZ1bmN0aW9uIChldikge1xuXHRcdFx0XHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdFx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAnZXJyb3InICwgJycsICdlcnJvcicpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2xpY2snLCAnW3NuYWNrYmFyX2N1c3RvbV93YXJuXScsIGZ1bmN0aW9uIChldikge1xuXHRcdFx0XHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdFx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAnd2FybicgLCAnJywgJ3dhcm4nKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NsaWNrJywgJ1tzbmFja2Jhcl9jdXN0b21fbm9ybWFsXScsIGZ1bmN0aW9uIChldikge1xuXHRcdFx0XHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0XG5cdFx0XHRcdFx0aWYgKCF0YXJnZXQuc25hY2tiYXIpIHtcblx0XHRcdFx0XHRcdHRhcmdldC5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRhcmdldC5zbmFja2Jhci5zaW5nbGUodGFyZ2V0LCAnbm9ybWFsJyAsICcnLCAnbm9ybWFsJylcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gLm9uKCdjbGljaycsICdbc25hY2tiYXJfY3VzdG9tX21vcmVdJywgZnVuY3Rpb24gKGV2KSB7XG5cdFx0XHRcdC8vIFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXRcblx0XHRcdFx0Ly8gXHRpZiAoIXRhcmdldC5zbmFja2Jhcikge1xuXHRcdFx0XHQvLyBcdFx0dGFyZ2V0LnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKClcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vIFx0dGFyZ2V0LnNuYWNrYmFyLm1vcmUodGFyZ2V0LCAnbW9yZScgLCcnLCAnbW9yZScpXG5cdFx0XHRcdC8vIH0pIiwiLyohIGpRdWVyeSB2My4zLjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIHQoZSl9OnQoZSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbj1bXSxyPWUuZG9jdW1lbnQsaT1PYmplY3QuZ2V0UHJvdG90eXBlT2Ysbz1uLnNsaWNlLGE9bi5jb25jYXQscz1uLnB1c2gsdT1uLmluZGV4T2YsbD17fSxjPWwudG9TdHJpbmcsZj1sLmhhc093blByb3BlcnR5LHA9Zi50b1N0cmluZyxkPXAuY2FsbChPYmplY3QpLGg9e30sZz1mdW5jdGlvbiBlKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJlwibnVtYmVyXCIhPXR5cGVvZiB0Lm5vZGVUeXBlfSx5PWZ1bmN0aW9uIGUodCl7cmV0dXJuIG51bGwhPXQmJnQ9PT10LndpbmRvd30sdj17dHlwZTohMCxzcmM6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIG0oZSx0LG4pe3ZhciBpLG89KHQ9dHx8cikuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihvLnRleHQ9ZSxuKWZvcihpIGluIHYpbltpXSYmKG9baV09bltpXSk7dC5oZWFkLmFwcGVuZENoaWxkKG8pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyl9ZnVuY3Rpb24geChlKXtyZXR1cm4gbnVsbD09ZT9lK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/bFtjLmNhbGwoZSldfHxcIm9iamVjdFwiOnR5cGVvZiBlfXZhciBiPVwiMy4zLjFcIix3PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyB3LmZuLmluaXQoZSx0KX0sVD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7dy5mbj13LnByb3RvdHlwZT17anF1ZXJ5OlwiMy4zLjFcIixjb25zdHJ1Y3Rvcjp3LGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gby5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/by5jYWxsKHRoaXMpOmU8MD90aGlzW2UrdGhpcy5sZW5ndGhdOnRoaXNbZV19LHB1c2hTdGFjazpmdW5jdGlvbihlKXt2YXIgdD13Lm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxlKTtyZXR1cm4gdC5wcmV2T2JqZWN0PXRoaXMsdH0sZWFjaDpmdW5jdGlvbihlKXtyZXR1cm4gdy5lYWNoKHRoaXMsZSl9LG1hcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sody5tYXAodGhpcyxmdW5jdGlvbih0LG4pe3JldHVybiBlLmNhbGwodCxuLHQpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhuPj0wJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOnMsc29ydDpuLnNvcnQsc3BsaWNlOm4uc3BsaWNlfSx3LmV4dGVuZD13LmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixyLGksbyxhPWFyZ3VtZW50c1swXXx8e30scz0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksXCJvYmplY3RcIj09dHlwZW9mIGF8fGcoYSl8fChhPXt9KSxzPT09dSYmKGE9dGhpcyxzLS0pO3M8dTtzKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW3NdKSlmb3IodCBpbiBlKW49YVt0XSxhIT09KHI9ZVt0XSkmJihsJiZyJiYody5pc1BsYWluT2JqZWN0KHIpfHwoaT1BcnJheS5pc0FycmF5KHIpKSk/KGk/KGk9ITEsbz1uJiZBcnJheS5pc0FycmF5KG4pP246W10pOm89biYmdy5pc1BsYWluT2JqZWN0KG4pP246e30sYVt0XT13LmV4dGVuZChsLG8scikpOnZvaWQgMCE9PXImJihhW3RdPXIpKTtyZXR1cm4gYX0sdy5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoXCIzLjMuMVwiK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PWMuY2FsbChlKSkmJighKHQ9aShlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49Zi5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJnAuY2FsbChuKT09PWQpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSl7bShlKX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtpZihDKGUpKXtmb3Iobj1lLmxlbmd0aDtyPG47cisrKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVha31lbHNlIGZvcihyIGluIGUpaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrO3JldHVybiBlfSx0cmltOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShULFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKEMoT2JqZWN0KGUpKT93Lm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOnMuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTp1LmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgscj0wLGk9ZS5sZW5ndGg7cjxuO3IrKyllW2krK109dFtyXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHIsaT1bXSxvPTAsYT1lLmxlbmd0aCxzPSFuO288YTtvKyspKHI9IXQoZVtvXSxvKSkhPT1zJiZpLnB1c2goZVtvXSk7cmV0dXJuIGl9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPTAscz1bXTtpZihDKGUpKWZvcihyPWUubGVuZ3RoO288cjtvKyspbnVsbCE9KGk9dChlW29dLG8sbikpJiZzLnB1c2goaSk7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmcy5wdXNoKGkpO3JldHVybiBhLmFwcGx5KFtdLHMpfSxndWlkOjEsc3VwcG9ydDpofSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYody5mbltTeW1ib2wuaXRlcmF0b3JdPW5bU3ltYm9sLml0ZXJhdG9yXSksdy5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtsW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBDKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49eChlKTtyZXR1cm4hZyhlKSYmIXkoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+MCYmdC0xIGluIGUpfXZhciBFPWZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzLHUsbCxjLGYscCxkLGgsZyx5LHYsbSx4LGI9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHc9ZS5kb2N1bWVudCxUPTAsQz0wLEU9YWUoKSxrPWFlKCksUz1hZSgpLEQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihmPSEwKSwwfSxOPXt9Lmhhc093blByb3BlcnR5LEE9W10saj1BLnBvcCxxPUEucHVzaCxMPUEucHVzaCxIPUEuc2xpY2UsTz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUD1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsUj1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsST1cIlxcXFxbXCIrTStcIiooXCIrUitcIikoPzpcIitNK1wiKihbKl4kfCF+XT89KVwiK00rXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitSK1wiKSl8KVwiK00rXCIqXFxcXF1cIixXPVwiOihcIitSK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitJK1wiKSopfC4qKVxcXFwpfClcIiwkPW5ldyBSZWdFeHAoTStcIitcIixcImdcIiksQj1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxGPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksej1uZXcgUmVnRXhwKFwiPVwiK00rXCIqKFteXFxcXF0nXFxcIl0qPylcIitNK1wiKlxcXFxdXCIsXCJnXCIpLFg9bmV3IFJlZ0V4cChXKSxVPW5ldyBSZWdFeHAoXCJeXCIrUitcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK1IrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrUitcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK1IrXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrSSksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrVyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK1ArXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxHPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWT0vXmhcXGQkL2ksUT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLEo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sSz0vWyt+XS8sWj1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTStcIj98KFwiK00rXCIpfC4pXCIsXCJpZ1wiKSxlZT1mdW5jdGlvbihlLHQsbil7dmFyIHI9XCIweFwiK3QtNjU1MzY7cmV0dXJuIHIhPT1yfHxuP3Q6cjwwP1N0cmluZy5mcm9tQ2hhckNvZGUocis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMHw1NTI5NiwxMDIzJnJ8NTYzMjApfSx0ZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxuZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxyZT1mdW5jdGlvbigpe3AoKX0saWU9bWUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiYoXCJmb3JtXCJpbiBlfHxcImxhYmVsXCJpbiBlKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7TC5hcHBseShBPUguY2FsbCh3LmNoaWxkTm9kZXMpLHcuY2hpbGROb2RlcyksQVt3LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlKXtMPXthcHBseTpBLmxlbmd0aD9mdW5jdGlvbihlLHQpe3EuYXBwbHkoZSxILmNhbGwodCkpfTpmdW5jdGlvbihlLHQpe3ZhciBuPWUubGVuZ3RoLHI9MDt3aGlsZShlW24rK109dFtyKytdKTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBvZShlLHQscixpKXt2YXIgbyxzLGwsYyxmLGgsdixtPXQmJnQub3duZXJEb2N1bWVudCxUPXQ/dC5ub2RlVHlwZTo5O2lmKHI9cnx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGV8fCFlfHwxIT09VCYmOSE9PVQmJjExIT09VClyZXR1cm4gcjtpZighaSYmKCh0P3Qub3duZXJEb2N1bWVudHx8dDp3KSE9PWQmJnAodCksdD10fHxkLGcpKXtpZigxMSE9PVQmJihmPUouZXhlYyhlKSkpaWYobz1mWzFdKXtpZig5PT09VCl7aWYoIShsPXQuZ2V0RWxlbWVudEJ5SWQobykpKXJldHVybiByO2lmKGwuaWQ9PT1vKXJldHVybiByLnB1c2gobCkscn1lbHNlIGlmKG0mJihsPW0uZ2V0RWxlbWVudEJ5SWQobykpJiZ4KHQsbCkmJmwuaWQ9PT1vKXJldHVybiByLnB1c2gobCkscn1lbHNle2lmKGZbMl0pcmV0dXJuIEwuYXBwbHkocix0LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpKSxyO2lmKChvPWZbM10pJiZuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gTC5hcHBseShyLHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShvKSkscn1pZihuLnFzYSYmIVNbZStcIiBcIl0mJigheXx8IXkudGVzdChlKSkpe2lmKDEhPT1UKW09dCx2PWU7ZWxzZSBpZihcIm9iamVjdFwiIT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoYz10LmdldEF0dHJpYnV0ZShcImlkXCIpKT9jPWMucmVwbGFjZSh0ZSxuZSk6dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGM9Yikscz0oaD1hKGUpKS5sZW5ndGg7d2hpbGUocy0tKWhbc109XCIjXCIrYytcIiBcIit2ZShoW3NdKTt2PWguam9pbihcIixcIiksbT1LLnRlc3QoZSkmJmdlKHQucGFyZW50Tm9kZSl8fHR9aWYodil0cnl7cmV0dXJuIEwuYXBwbHkocixtLnF1ZXJ5U2VsZWN0b3JBbGwodikpLHJ9Y2F0Y2goZSl7fWZpbmFsbHl7Yz09PWImJnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gdShlLnJlcGxhY2UoQixcIiQxXCIpLHQscixpKX1mdW5jdGlvbiBhZSgpe3ZhciBlPVtdO2Z1bmN0aW9uIHQobixpKXtyZXR1cm4gZS5wdXNoKG4rXCIgXCIpPnIuY2FjaGVMZW5ndGgmJmRlbGV0ZSB0W2Uuc2hpZnQoKV0sdFtuK1wiIFwiXT1pfXJldHVybiB0fWZ1bmN0aW9uIHNlKGUpe3JldHVybiBlW2JdPSEwLGV9ZnVuY3Rpb24gdWUoZSl7dmFyIHQ9ZC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gbGUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxpPW4ubGVuZ3RoO3doaWxlKGktLSlyLmF0dHJIYW5kbGVbbltpXV09dH1mdW5jdGlvbiBjZShlLHQpe3ZhciBuPXQmJmUscj1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZmUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVyblwiaW5wdXRcIj09PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmdC50eXBlPT09ZX19ZnVuY3Rpb24gcGUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09bnx8XCJidXR0b25cIj09PW4pJiZ0LnR5cGU9PT1lfX1mdW5jdGlvbiBkZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuXCJmb3JtXCJpbiB0P3QucGFyZW50Tm9kZSYmITE9PT10LmRpc2FibGVkP1wibGFiZWxcImluIHQ/XCJsYWJlbFwiaW4gdC5wYXJlbnROb2RlP3QucGFyZW50Tm9kZS5kaXNhYmxlZD09PWU6dC5kaXNhYmxlZD09PWU6dC5pc0Rpc2FibGVkPT09ZXx8dC5pc0Rpc2FibGVkIT09IWUmJmllKHQpPT09ZTp0LmRpc2FibGVkPT09ZTpcImxhYmVsXCJpbiB0JiZ0LmRpc2FibGVkPT09ZX19ZnVuY3Rpb24gaGUoZSl7cmV0dXJuIHNlKGZ1bmN0aW9uKHQpe3JldHVybiB0PSt0LHNlKGZ1bmN0aW9uKG4scil7dmFyIGksbz1lKFtdLG4ubGVuZ3RoLHQpLGE9by5sZW5ndGg7d2hpbGUoYS0tKW5baT1vW2FdXSYmKG5baV09IShyW2ldPW5baV0pKX0pfSl9ZnVuY3Rpb24gZ2UoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfW49b2Uuc3VwcG9ydD17fSxvPW9lLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJihlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hIXQmJlwiSFRNTFwiIT09dC5ub2RlTmFtZX0scD1vZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxpLGE9ZT9lLm93bmVyRG9jdW1lbnR8fGU6dztyZXR1cm4gYSE9PWQmJjk9PT1hLm5vZGVUeXBlJiZhLmRvY3VtZW50RWxlbWVudD8oZD1hLGg9ZC5kb2N1bWVudEVsZW1lbnQsZz0hbyhkKSx3IT09ZCYmKGk9ZC5kZWZhdWx0VmlldykmJmkudG9wIT09aSYmKGkuYWRkRXZlbnRMaXN0ZW5lcj9pLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixyZSwhMSk6aS5hdHRhY2hFdmVudCYmaS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIscmUpKSxuLmF0dHJpYnV0ZXM9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xhc3NOYW1lPVwiaVwiLCFlLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLG4uZ2V0RWxlbWVudHNCeVRhZ05hbWU9dWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQoZC5jcmVhdGVDb21tZW50KFwiXCIpKSwhZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVEudGVzdChkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLG4uZ2V0QnlJZD11ZShmdW5jdGlvbihlKXtyZXR1cm4gaC5hcHBlbmRDaGlsZChlKS5pZD1iLCFkLmdldEVsZW1lbnRzQnlOYW1lfHwhZC5nZXRFbGVtZW50c0J5TmFtZShiKS5sZW5ndGh9KSxuLmdldEJ5SWQ/KHIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShaLGVlKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0sci5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJmcpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihyLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UoWixlZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBuJiZuLnZhbHVlPT09dH19LHIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZnKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksci5maW5kLlRBRz1uLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpuLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LHIuZmluZC5DTEFTUz1uLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZylyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSx2PVtdLHk9W10sKG4ucXNhPVEudGVzdChkLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKHVlKGZ1bmN0aW9uKGUpe2guYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK2IrXCInPjwvYT48c2VsZWN0IGlkPSdcIitiK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ5LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8eS5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1ArXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrYitcIi1dXCIpLmxlbmd0aHx8eS5wdXNoKFwifj1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx5LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK2IrXCIrKlwiKS5sZW5ndGh8fHkucHVzaChcIi4jLitbK35dXCIpfSksdWUoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ5LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnkucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksaC5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmeS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHkucHVzaChcIiwuKjpcIil9KSksKG4ubWF0Y2hlc1NlbGVjdG9yPVEudGVzdChtPWgubWF0Y2hlc3x8aC53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGgubW96TWF0Y2hlc1NlbGVjdG9yfHxoLm9NYXRjaGVzU2VsZWN0b3J8fGgubXNNYXRjaGVzU2VsZWN0b3IpKSYmdWUoZnVuY3Rpb24oZSl7bi5kaXNjb25uZWN0ZWRNYXRjaD1tLmNhbGwoZSxcIipcIiksbS5jYWxsKGUsXCJbcyE9JyddOnhcIiksdi5wdXNoKFwiIT1cIixXKX0pLHk9eS5sZW5ndGgmJm5ldyBSZWdFeHAoeS5qb2luKFwifFwiKSksdj12Lmxlbmd0aCYmbmV3IFJlZ0V4cCh2LmpvaW4oXCJ8XCIpKSx0PVEudGVzdChoLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx4PXR8fFEudGVzdChoLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LEQ9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBmPSEwLDA7dmFyIHI9IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIHJ8fCgxJihyPShlLm93bmVyRG9jdW1lbnR8fGUpPT09KHQub3duZXJEb2N1bWVudHx8dCk/ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KToxKXx8IW4uc29ydERldGFjaGVkJiZ0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09cj9lPT09ZHx8ZS5vd25lckRvY3VtZW50PT09dyYmeCh3LGUpPy0xOnQ9PT1kfHx0Lm93bmVyRG9jdW1lbnQ9PT13JiZ4KHcsdCk/MTpjP08oYyxlKS1PKGMsdCk6MDo0JnI/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGY9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT09ZD8tMTp0PT09ZD8xOmk/LTE6bz8xOmM/TyhjLGUpLU8oYyx0KTowO2lmKGk9PT1vKXJldHVybiBjZShlLHQpO249ZTt3aGlsZShuPW4ucGFyZW50Tm9kZSlhLnVuc2hpZnQobik7bj10O3doaWxlKG49bi5wYXJlbnROb2RlKXMudW5zaGlmdChuKTt3aGlsZShhW3JdPT09c1tyXSlyKys7cmV0dXJuIHI/Y2UoYVtyXSxzW3JdKTphW3JdPT09dz8tMTpzW3JdPT09dz8xOjB9LGQpOmR9LG9lLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gb2UoZSxudWxsLG51bGwsdCl9LG9lLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKChlLm93bmVyRG9jdW1lbnR8fGUpIT09ZCYmcChlKSx0PXQucmVwbGFjZSh6LFwiPSckMSddXCIpLG4ubWF0Y2hlc1NlbGVjdG9yJiZnJiYhU1t0K1wiIFwiXSYmKCF2fHwhdi50ZXN0KHQpKSYmKCF5fHwheS50ZXN0KHQpKSl0cnl7dmFyIHI9bS5jYWxsKGUsdCk7aWYocnx8bi5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiByfWNhdGNoKGUpe31yZXR1cm4gb2UodCxkLG51bGwsW2VdKS5sZW5ndGg+MH0sb2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9PWQmJnAoZSkseChlLHQpfSxvZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPT1kJiZwKGUpO3ZhciBpPXIuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLG89aSYmTi5jYWxsKHIuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP2koZSx0LCFnKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PW8/bzpuLmF0dHJpYnV0ZXN8fCFnP2UuZ2V0QXR0cmlidXRlKHQpOihvPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJm8uc3BlY2lmaWVkP28udmFsdWU6bnVsbH0sb2UuZXNjYXBlPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UodGUsbmUpfSxvZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sb2UudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxyPVtdLGk9MCxvPTA7aWYoZj0hbi5kZXRlY3REdXBsaWNhdGVzLGM9IW4uc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoRCksZil7d2hpbGUodD1lW28rK10pdD09PWVbb10mJihpPXIucHVzaChvKSk7d2hpbGUoaS0tKWUuc3BsaWNlKHJbaV0sMSl9cmV0dXJuIGM9bnVsbCxlfSxpPW9lLmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxvPWUubm9kZVR5cGU7aWYobyl7aWYoMT09PW98fDk9PT1vfHwxMT09PW8pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1pKGUpfWVsc2UgaWYoMz09PW98fDQ9PT1vKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKHQ9ZVtyKytdKW4rPWkodCk7cmV0dXJuIG59LChyPW9lLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOnNlLG1hdGNoOlYsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UoWixlZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZShaLGVlKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxvZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZvZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gVi5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9YShuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZShaLGVlKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PUVbZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIitNK1wiKVwiK2UrXCIoXCIrTStcInwkKVwiKSkmJkUoZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBlLmNsYXNzTmFtZSYmZS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciBpPW9lLmF0dHIocixlKTtyZXR1cm4gbnVsbD09aT9cIiE9XCI9PT10OiF0fHwoaSs9XCJcIixcIj1cIj09PXQ/aT09PW46XCIhPVwiPT09dD9pIT09bjpcIl49XCI9PT10P24mJjA9PT1pLmluZGV4T2Yobik6XCIqPVwiPT09dD9uJiZpLmluZGV4T2Yobik+LTE6XCIkPVwiPT09dD9uJiZpLnNsaWNlKC1uLmxlbmd0aCk9PT1uOlwifj1cIj09PXQ/KFwiIFwiK2kucmVwbGFjZSgkLFwiIFwiKStcIiBcIikuaW5kZXhPZihuKT4tMTpcInw9XCI9PT10JiYoaT09PW58fGkuc2xpY2UoMCxuLmxlbmd0aCsxKT09PW4rXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG89XCJudGhcIiE9PWUuc2xpY2UoMCwzKSxhPVwibGFzdFwiIT09ZS5zbGljZSgtNCkscz1cIm9mLXR5cGVcIj09PXQ7cmV0dXJuIDE9PT1yJiYwPT09aT9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24odCxuLHUpe3ZhciBsLGMsZixwLGQsaCxnPW8hPT1hP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHk9dC5wYXJlbnROb2RlLHY9cyYmdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLG09IXUmJiFzLHg9ITE7aWYoeSl7aWYobyl7d2hpbGUoZyl7cD10O3doaWxlKHA9cFtnXSlpZihzP3Aubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXY6MT09PXAubm9kZVR5cGUpcmV0dXJuITE7aD1nPVwib25seVwiPT09ZSYmIWgmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihoPVthP3kuZmlyc3RDaGlsZDp5Lmxhc3RDaGlsZF0sYSYmbSl7eD0oZD0obD0oYz0oZj0ocD15KVtiXXx8KHBbYl09e30pKVtwLnVuaXF1ZUlEXXx8KGZbcC51bmlxdWVJRF09e30pKVtlXXx8W10pWzBdPT09VCYmbFsxXSkmJmxbMl0scD1kJiZ5LmNoaWxkTm9kZXNbZF07d2hpbGUocD0rK2QmJnAmJnBbZ118fCh4PWQ9MCl8fGgucG9wKCkpaWYoMT09PXAubm9kZVR5cGUmJisreCYmcD09PXQpe2NbZV09W1QsZCx4XTticmVha319ZWxzZSBpZihtJiYoeD1kPShsPShjPShmPShwPXQpW2JdfHwocFtiXT17fSkpW3AudW5pcXVlSURdfHwoZltwLnVuaXF1ZUlEXT17fSkpW2VdfHxbXSlbMF09PT1UJiZsWzFdKSwhMT09PXgpd2hpbGUocD0rK2QmJnAmJnBbZ118fCh4PWQ9MCl8fGgucG9wKCkpaWYoKHM/cC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09djoxPT09cC5ub2RlVHlwZSkmJisreCYmKG0mJigoYz0oZj1wW2JdfHwocFtiXT17fSkpW3AudW5pcXVlSURdfHwoZltwLnVuaXF1ZUlEXT17fSkpW2VdPVtULHhdKSxwPT09dCkpYnJlYWs7cmV0dXJuKHgtPWkpPT09cnx8eCVyPT0wJiZ4L3I+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGUsdCl7dmFyIG4saT1yLnBzZXVkb3NbZV18fHIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxvZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIGlbYl0/aSh0KTppLmxlbmd0aD4xPyhuPVtlLGUsXCJcIix0XSxyLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9zZShmdW5jdGlvbihlLG4pe3ZhciByLG89aShlLHQpLGE9by5sZW5ndGg7d2hpbGUoYS0tKWVbcj1PKGUsb1thXSldPSEobltyXT1vW2FdKX0pOmZ1bmN0aW9uKGUpe3JldHVybiBpKGUsMCxuKX0pOml9fSxwc2V1ZG9zOntub3Q6c2UoZnVuY3Rpb24oZSl7dmFyIHQ9W10sbj1bXSxyPXMoZS5yZXBsYWNlKEIsXCIkMVwiKSk7cmV0dXJuIHJbYl0/c2UoZnVuY3Rpb24oZSx0LG4saSl7dmFyIG8sYT1yKGUsbnVsbCxpLFtdKSxzPWUubGVuZ3RoO3doaWxlKHMtLSkobz1hW3NdKSYmKGVbc109ISh0W3NdPW8pKX0pOmZ1bmN0aW9uKGUsaSxvKXtyZXR1cm4gdFswXT1lLHIodCxudWxsLG8sbiksdFswXT1udWxsLCFuLnBvcCgpfX0pLGhhczpzZShmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG9lKGUsdCkubGVuZ3RoPjB9fSksY29udGFpbnM6c2UoZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZS5yZXBsYWNlKFosZWUpLGZ1bmN0aW9uKHQpe3JldHVybih0LnRleHRDb250ZW50fHx0LmlubmVyVGV4dHx8aSh0KSkuaW5kZXhPZihlKT4tMX19KSxsYW5nOnNlKGZ1bmN0aW9uKGUpe3JldHVybiBVLnRlc3QoZXx8XCJcIil8fG9lLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrZSksZT1lLnJlcGxhY2UoWixlZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbih0KXt2YXIgbjtkb3tpZihuPWc/dC5sYW5nOnQuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fHQuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4obj1uLnRvTG93ZXJDYXNlKCkpPT09ZXx8MD09PW4uaW5kZXhPZihlK1wiLVwiKX13aGlsZSgodD10LnBhcmVudE5vZGUpJiYxPT09dC5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKHQpe3ZhciBuPWUubG9jYXRpb24mJmUubG9jYXRpb24uaGFzaDtyZXR1cm4gbiYmbi5zbGljZSgxKT09PXQuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1ofSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWQuYWN0aXZlRWxlbWVudCYmKCFkLmhhc0ZvY3VzfHxkLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmRlKCExKSxkaXNhYmxlZDpkZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFyLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gWS50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gRy50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OmhlKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpoZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6aGUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjpoZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDpoZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OmhlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDpuOy0tcj49MDspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6aGUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPXIucHNldWRvcy5lcTtmb3IodCBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlyLnBzZXVkb3NbdF09ZmUodCk7Zm9yKHQgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlyLnBzZXVkb3NbdF09cGUodCk7ZnVuY3Rpb24geWUoKXt9eWUucHJvdG90eXBlPXIuZmlsdGVycz1yLnBzZXVkb3Msci5zZXRGaWx0ZXJzPW5ldyB5ZSxhPW9lLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4saSxvLGEscyx1LGwsYz1rW2UrXCIgXCJdO2lmKGMpcmV0dXJuIHQ/MDpjLnNsaWNlKDApO3M9ZSx1PVtdLGw9ci5wcmVGaWx0ZXI7d2hpbGUocyl7biYmIShpPUYuZXhlYyhzKSl8fChpJiYocz1zLnNsaWNlKGlbMF0ubGVuZ3RoKXx8cyksdS5wdXNoKG89W10pKSxuPSExLChpPV8uZXhlYyhzKSkmJihuPWkuc2hpZnQoKSxvLnB1c2goe3ZhbHVlOm4sdHlwZTppWzBdLnJlcGxhY2UoQixcIiBcIil9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtmb3IoYSBpbiByLmZpbHRlcikhKGk9VlthXS5leGVjKHMpKXx8bFthXSYmIShpPWxbYV0oaSkpfHwobj1pLnNoaWZ0KCksby5wdXNoKHt2YWx1ZTpuLHR5cGU6YSxtYXRjaGVzOml9KSxzPXMuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9zLmxlbmd0aDpzP29lLmVycm9yKGUpOmsoZSx1KS5zbGljZSgwKX07ZnVuY3Rpb24gdmUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIG1lKGUsdCxuKXt2YXIgcj10LmRpcixpPXQubmV4dCxvPWl8fHIsYT1uJiZcInBhcmVudE5vZGVcIj09PW8scz1DKys7cmV0dXJuIHQuZmlyc3Q/ZnVuY3Rpb24odCxuLGkpe3doaWxlKHQ9dFtyXSlpZigxPT09dC5ub2RlVHlwZXx8YSlyZXR1cm4gZSh0LG4saSk7cmV0dXJuITF9OmZ1bmN0aW9uKHQsbix1KXt2YXIgbCxjLGYscD1bVCxzXTtpZih1KXt3aGlsZSh0PXRbcl0paWYoKDE9PT10Lm5vZGVUeXBlfHxhKSYmZSh0LG4sdSkpcmV0dXJuITB9ZWxzZSB3aGlsZSh0PXRbcl0paWYoMT09PXQubm9kZVR5cGV8fGEpaWYoZj10W2JdfHwodFtiXT17fSksYz1mW3QudW5pcXVlSURdfHwoZlt0LnVuaXF1ZUlEXT17fSksaSYmaT09PXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl0PXRbcl18fHQ7ZWxzZXtpZigobD1jW29dKSYmbFswXT09PVQmJmxbMV09PT1zKXJldHVybiBwWzJdPWxbMl07aWYoY1tvXT1wLHBbMl09ZSh0LG4sdSkpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHhlKGUpe3JldHVybiBlLmxlbmd0aD4xP2Z1bmN0aW9uKHQsbixyKXt2YXIgaT1lLmxlbmd0aDt3aGlsZShpLS0paWYoIWVbaV0odCxuLHIpKXJldHVybiExO3JldHVybiEwfTplWzBdfWZ1bmN0aW9uIGJlKGUsdCxuKXtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspb2UoZSx0W3JdLG4pO3JldHVybiBufWZ1bmN0aW9uIHdlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gVGUoZSx0LG4scixpLG8pe3JldHVybiByJiYhcltiXSYmKHI9VGUocikpLGkmJiFpW2JdJiYoaT1UZShpLG8pKSxzZShmdW5jdGlvbihvLGEscyx1KXt2YXIgbCxjLGYscD1bXSxkPVtdLGg9YS5sZW5ndGgsZz1vfHxiZSh0fHxcIipcIixzLm5vZGVUeXBlP1tzXTpzLFtdKSx5PSFlfHwhbyYmdD9nOndlKGcscCxlLHMsdSksdj1uP2l8fChvP2U6aHx8cik/W106YTp5O2lmKG4mJm4oeSx2LHMsdSkscil7bD13ZSh2LGQpLHIobCxbXSxzLHUpLGM9bC5sZW5ndGg7d2hpbGUoYy0tKShmPWxbY10pJiYodltkW2NdXT0hKHlbZFtjXV09ZikpfWlmKG8pe2lmKGl8fGUpe2lmKGkpe2w9W10sYz12Lmxlbmd0aDt3aGlsZShjLS0pKGY9dltjXSkmJmwucHVzaCh5W2NdPWYpO2kobnVsbCx2PVtdLGwsdSl9Yz12Lmxlbmd0aDt3aGlsZShjLS0pKGY9dltjXSkmJihsPWk/TyhvLGYpOnBbY10pPi0xJiYob1tsXT0hKGFbbF09ZikpfX1lbHNlIHY9d2Uodj09PWE/di5zcGxpY2UoaCx2Lmxlbmd0aCk6diksaT9pKG51bGwsYSx2LHUpOkwuYXBwbHkoYSx2KX0pfWZ1bmN0aW9uIENlKGUpe2Zvcih2YXIgdCxuLGksbz1lLmxlbmd0aCxhPXIucmVsYXRpdmVbZVswXS50eXBlXSxzPWF8fHIucmVsYXRpdmVbXCIgXCJdLHU9YT8xOjAsYz1tZShmdW5jdGlvbihlKXtyZXR1cm4gZT09PXR9LHMsITApLGY9bWUoZnVuY3Rpb24oZSl7cmV0dXJuIE8odCxlKT4tMX0scywhMCkscD1bZnVuY3Rpb24oZSxuLHIpe3ZhciBpPSFhJiYocnx8biE9PWwpfHwoKHQ9bikubm9kZVR5cGU/YyhlLG4scik6ZihlLG4scikpO3JldHVybiB0PW51bGwsaX1dO3U8bzt1KyspaWYobj1yLnJlbGF0aXZlW2VbdV0udHlwZV0pcD1bbWUoeGUocCksbildO2Vsc2V7aWYoKG49ci5maWx0ZXJbZVt1XS50eXBlXS5hcHBseShudWxsLGVbdV0ubWF0Y2hlcykpW2JdKXtmb3IoaT0rK3U7aTxvO2krKylpZihyLnJlbGF0aXZlW2VbaV0udHlwZV0pYnJlYWs7cmV0dXJuIFRlKHU+MSYmeGUocCksdT4xJiZ2ZShlLnNsaWNlKDAsdS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVt1LTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKEIsXCIkMVwiKSxuLHU8aSYmQ2UoZS5zbGljZSh1LGkpKSxpPG8mJkNlKGU9ZS5zbGljZShpKSksaTxvJiZ2ZShlKSl9cC5wdXNoKG4pfXJldHVybiB4ZShwKX1mdW5jdGlvbiBFZShlLHQpe3ZhciBuPXQubGVuZ3RoPjAsaT1lLmxlbmd0aD4wLG89ZnVuY3Rpb24obyxhLHMsdSxjKXt2YXIgZixoLHksdj0wLG09XCIwXCIseD1vJiZbXSxiPVtdLHc9bCxDPW98fGkmJnIuZmluZC5UQUcoXCIqXCIsYyksRT1UKz1udWxsPT13PzE6TWF0aC5yYW5kb20oKXx8LjEsaz1DLmxlbmd0aDtmb3IoYyYmKGw9YT09PWR8fGF8fGMpO20hPT1rJiZudWxsIT0oZj1DW21dKTttKyspe2lmKGkmJmYpe2g9MCxhfHxmLm93bmVyRG9jdW1lbnQ9PT1kfHwocChmKSxzPSFnKTt3aGlsZSh5PWVbaCsrXSlpZih5KGYsYXx8ZCxzKSl7dS5wdXNoKGYpO2JyZWFrfWMmJihUPUUpfW4mJigoZj0heSYmZikmJnYtLSxvJiZ4LnB1c2goZikpfWlmKHYrPW0sbiYmbSE9PXYpe2g9MDt3aGlsZSh5PXRbaCsrXSl5KHgsYixhLHMpO2lmKG8pe2lmKHY+MCl3aGlsZShtLS0peFttXXx8YlttXXx8KGJbbV09ai5jYWxsKHUpKTtiPXdlKGIpfUwuYXBwbHkodSxiKSxjJiYhbyYmYi5sZW5ndGg+MCYmdit0Lmxlbmd0aD4xJiZvZS51bmlxdWVTb3J0KHUpfXJldHVybiBjJiYoVD1FLGw9dykseH07cmV0dXJuIG4/c2Uobyk6b31yZXR1cm4gcz1vZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPVtdLG89U1tlK1wiIFwiXTtpZighbyl7dHx8KHQ9YShlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pKG89Q2UodFtuXSkpW2JdP3IucHVzaChvKTppLnB1c2gobyk7KG89UyhlLEVlKGkscikpKS5zZWxlY3Rvcj1lfXJldHVybiBvfSx1PW9lLnNlbGVjdD1mdW5jdGlvbihlLHQsbixpKXt2YXIgbyx1LGwsYyxmLHA9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxkPSFpJiZhKGU9cC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09ZC5sZW5ndGgpe2lmKCh1PWRbMF09ZFswXS5zbGljZSgwKSkubGVuZ3RoPjImJlwiSURcIj09PShsPXVbMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZnJiZyLnJlbGF0aXZlW3VbMV0udHlwZV0pe2lmKCEodD0oci5maW5kLklEKGwubWF0Y2hlc1swXS5yZXBsYWNlKFosZWUpLHQpfHxbXSlbMF0pKXJldHVybiBuO3AmJih0PXQucGFyZW50Tm9kZSksZT1lLnNsaWNlKHUuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfW89Vi5uZWVkc0NvbnRleHQudGVzdChlKT8wOnUubGVuZ3RoO3doaWxlKG8tLSl7aWYobD11W29dLHIucmVsYXRpdmVbYz1sLnR5cGVdKWJyZWFrO2lmKChmPXIuZmluZFtjXSkmJihpPWYobC5tYXRjaGVzWzBdLnJlcGxhY2UoWixlZSksSy50ZXN0KHVbMF0udHlwZSkmJmdlKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYodS5zcGxpY2UobywxKSwhKGU9aS5sZW5ndGgmJnZlKHUpKSlyZXR1cm4gTC5hcHBseShuLGkpLG47YnJlYWt9fX1yZXR1cm4ocHx8cyhlLGQpKShpLHQsIWcsbiwhdHx8Sy50ZXN0KGUpJiZnZSh0LnBhcmVudE5vZGUpfHx0KSxufSxuLnNvcnRTdGFibGU9Yi5zcGxpdChcIlwiKS5zb3J0KEQpLmpvaW4oXCJcIik9PT1iLG4uZGV0ZWN0RHVwbGljYXRlcz0hIWYscCgpLG4uc29ydERldGFjaGVkPXVlKGZ1bmN0aW9uKGUpe3JldHVybiAxJmUuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksdWUoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8bGUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LFwidHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpPzE6Mil9KSxuLmF0dHJpYnV0ZXMmJnVlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxsZShcInZhbHVlXCIsZnVuY3Rpb24oZSx0LG4pe2lmKCFuJiZcImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGUuZGVmYXVsdFZhbHVlfSksdWUoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8bGUoUCxmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoIW4pcmV0dXJuITA9PT1lW3RdP3QudG9Mb3dlckNhc2UoKToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9KSxvZX0oZSk7dy5maW5kPUUsdy5leHByPUUuc2VsZWN0b3JzLHcuZXhwcltcIjpcIl09dy5leHByLnBzZXVkb3Msdy51bmlxdWVTb3J0PXcudW5pcXVlPUUudW5pcXVlU29ydCx3LnRleHQ9RS5nZXRUZXh0LHcuaXNYTUxEb2M9RS5pc1hNTCx3LmNvbnRhaW5zPUUuY29udGFpbnMsdy5lc2NhcGVTZWxlY3Rvcj1FLmVzY2FwZTt2YXIgaz1mdW5jdGlvbihlLHQsbil7dmFyIHI9W10saT12b2lkIDAhPT1uO3doaWxlKChlPWVbdF0pJiY5IT09ZS5ub2RlVHlwZSlpZigxPT09ZS5ub2RlVHlwZSl7aWYoaSYmdyhlKS5pcyhuKSlicmVhaztyLnB1c2goZSl9cmV0dXJuIHJ9LFM9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W107ZTtlPWUubmV4dFNpYmxpbmcpMT09PWUubm9kZVR5cGUmJmUhPT10JiZuLnB1c2goZSk7cmV0dXJuIG59LEQ9dy5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtmdW5jdGlvbiBOKGUsdCl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXQudG9Mb3dlckNhc2UoKX12YXIgQT0vXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaTtmdW5jdGlvbiBqKGUsdCxuKXtyZXR1cm4gZyh0KT93LmdyZXAoZSxmdW5jdGlvbihlLHIpe3JldHVybiEhdC5jYWxsKGUscixlKSE9PW59KTp0Lm5vZGVUeXBlP3cuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlPT09dCE9PW59KTpcInN0cmluZ1wiIT10eXBlb2YgdD93LmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gdS5jYWxsKHQsZSk+LTEhPT1ufSk6dy5maWx0ZXIodCxlLG4pfXcuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT93LmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOncuZmluZC5tYXRjaGVzKGUsdy5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSx3LmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayh3KGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZih3LmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKXcuZmluZChlLGlbdF0sbik7cmV0dXJuIHI+MT93LnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFqKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJkQudGVzdChlKT93KGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIHEsTD0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsody5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgaSxvO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8cSxcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShpPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiZlLmxlbmd0aD49Mz9bbnVsbCxlLG51bGxdOkwuZXhlYyhlKSl8fCFpWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoaVsxXSl7aWYodD10IGluc3RhbmNlb2Ygdz90WzBdOnQsdy5tZXJnZSh0aGlzLHcucGFyc2VIVE1MKGlbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6ciwhMCkpLEEudGVzdChpWzFdKSYmdy5pc1BsYWluT2JqZWN0KHQpKWZvcihpIGluIHQpZyh0aGlzW2ldKT90aGlzW2ldKHRbaV0pOnRoaXMuYXR0cihpLHRbaV0pO3JldHVybiB0aGlzfXJldHVybihvPXIuZ2V0RWxlbWVudEJ5SWQoaVsyXSkpJiYodGhpc1swXT1vLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOmcoZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUodyk6dy5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT13LmZuLHE9dyhyKTt2YXIgSD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxPPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O3cuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9dyhlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZih3LmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmdyhlKTtpZighRC50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhP2EuaW5kZXgobik+LTE6MT09PW4ubm9kZVR5cGUmJncuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soby5sZW5ndGg+MT93LnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP3UuY2FsbCh3KGUpLHRoaXNbMF0pOnUuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sody51bmlxdWVTb3J0KHcubWVyZ2UodGhpcy5nZXQoKSx3KGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pO2Z1bmN0aW9uIFAoZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfXcuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gayhlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gayhlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBQKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gUChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBrKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gayhlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBrKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBrKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFMoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBTKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBOKGUsXCJpZnJhbWVcIik/ZS5jb250ZW50RG9jdW1lbnQ6KE4oZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLHcubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihlLHQpe3cuZm5bZV09ZnVuY3Rpb24obixyKXt2YXIgaT13Lm1hcCh0aGlzLHQsbik7cmV0dXJuXCJVbnRpbFwiIT09ZS5zbGljZSgtNSkmJihyPW4pLHImJlwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT13LmZpbHRlcihyLGkpKSx0aGlzLmxlbmd0aD4xJiYoT1tlXXx8dy51bmlxdWVTb3J0KGkpLEgudGVzdChlKSYmaS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGkpfX0pO3ZhciBNPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3ZhciB0PXt9O3JldHVybiB3LmVhY2goZS5tYXRjaChNKXx8W10sZnVuY3Rpb24oZSxuKXt0W25dPSEwfSksdH13LkNhbGxiYWNrcz1mdW5jdGlvbihlKXtlPVwic3RyaW5nXCI9PXR5cGVvZiBlP1IoZSk6dy5leHRlbmQoe30sZSk7dmFyIHQsbixyLGksbz1bXSxhPVtdLHM9LTEsdT1mdW5jdGlvbigpe2ZvcihpPWl8fGUub25jZSxyPXQ9ITA7YS5sZW5ndGg7cz0tMSl7bj1hLnNoaWZ0KCk7d2hpbGUoKytzPG8ubGVuZ3RoKSExPT09b1tzXS5hcHBseShuWzBdLG5bMV0pJiZlLnN0b3BPbkZhbHNlJiYocz1vLmxlbmd0aCxuPSExKX1lLm1lbW9yeXx8KG49ITEpLHQ9ITEsaSYmKG89bj9bXTpcIlwiKX0sbD17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIG8mJihuJiYhdCYmKHM9by5sZW5ndGgtMSxhLnB1c2gobikpLGZ1bmN0aW9uIHQobil7dy5lYWNoKG4sZnVuY3Rpb24obixyKXtnKHIpP2UudW5pcXVlJiZsLmhhcyhyKXx8by5wdXNoKHIpOnImJnIubGVuZ3RoJiZcInN0cmluZ1wiIT09eChyKSYmdChyKX0pfShhcmd1bWVudHMpLG4mJiF0JiZ1KCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiB3LmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoKG49dy5pbkFycmF5KHQsbyxuKSk+LTEpby5zcGxpY2UobiwxKSxuPD1zJiZzLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/dy5pbkFycmF5KGUsbyk+LTE6by5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gbyYmKG89W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gaT1hPVtdLG89bj1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIW99LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaT1hPVtdLG58fHR8fChvPW49XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFpfSxmaXJlV2l0aDpmdW5jdGlvbihlLG4pe3JldHVybiBpfHwobj1bZSwobj1ufHxbXSkuc2xpY2U/bi5zbGljZSgpOm5dLGEucHVzaChuKSx0fHx1KCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gbC5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIXJ9fTtyZXR1cm4gbH07ZnVuY3Rpb24gSShlKXtyZXR1cm4gZX1mdW5jdGlvbiBXKGUpe3Rocm93IGV9ZnVuY3Rpb24gJChlLHQsbixyKXt2YXIgaTt0cnl7ZSYmZyhpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZnKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19dy5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKHQpe3ZhciBuPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsdy5DYWxsYmFja3MoXCJtZW1vcnlcIiksdy5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsdy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0scj1cInBlbmRpbmdcIixpPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiByfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gby5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gaS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHM7cmV0dXJuIHcuRGVmZXJyZWQoZnVuY3Rpb24odCl7dy5lYWNoKG4sZnVuY3Rpb24obixyKXt2YXIgaT1nKGVbcls0XV0pJiZlW3JbNF1dO29bclsxXV0oZnVuY3Rpb24oKXt2YXIgZT1pJiZpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZnKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3ModC5ub3RpZnkpLmRvbmUodC5yZXNvbHZlKS5mYWlsKHQucmVqZWN0KTp0W3JbMF0rXCJXaXRoXCJdKHRoaXMsaT9bZV06YXJndW1lbnRzKX0pfSksZT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQscixpKXt2YXIgbz0wO2Z1bmN0aW9uIGEodCxuLHIsaSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHM9dGhpcyx1PWFyZ3VtZW50cyxsPWZ1bmN0aW9uKCl7dmFyIGUsbDtpZighKHQ8bykpe2lmKChlPXIuYXBwbHkocyx1KSk9PT1uLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO2w9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLGcobCk/aT9sLmNhbGwoZSxhKG8sbixJLGkpLGEobyxuLFcsaSkpOihvKyssbC5jYWxsKGUsYShvLG4sSSxpKSxhKG8sbixXLGkpLGEobyxuLEksbi5ub3RpZnlXaXRoKSkpOihyIT09SSYmKHM9dm9pZCAwLHU9W2VdKSwoaXx8bi5yZXNvbHZlV2l0aCkocyx1KSl9fSxjPWk/bDpmdW5jdGlvbigpe3RyeXtsKCl9Y2F0Y2goZSl7dy5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZ3LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSxjLnN0YWNrVHJhY2UpLHQrMT49byYmKHIhPT1XJiYocz12b2lkIDAsdT1bZV0pLG4ucmVqZWN0V2l0aChzLHUpKX19O3Q/YygpOih3LkRlZmVycmVkLmdldFN0YWNrSG9vayYmKGMuc3RhY2tUcmFjZT13LkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxlLnNldFRpbWVvdXQoYykpfX1yZXR1cm4gdy5EZWZlcnJlZChmdW5jdGlvbihlKXtuWzBdWzNdLmFkZChhKDAsZSxnKGkpP2k6SSxlLm5vdGlmeVdpdGgpKSxuWzFdWzNdLmFkZChhKDAsZSxnKHQpP3Q6SSkpLG5bMl1bM10uYWRkKGEoMCxlLGcocik/cjpXKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/dy5leHRlbmQoZSxpKTppfX0sbz17fTtyZXR1cm4gdy5lYWNoKG4sZnVuY3Rpb24oZSx0KXt2YXIgYT10WzJdLHM9dFs1XTtpW3RbMV1dPWEuYWRkLHMmJmEuYWRkKGZ1bmN0aW9uKCl7cj1zfSxuWzMtZV1bMl0uZGlzYWJsZSxuWzMtZV1bM10uZGlzYWJsZSxuWzBdWzJdLmxvY2ssblswXVszXS5sb2NrKSxhLmFkZCh0WzNdLmZpcmUpLG9bdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gb1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09bz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LG9bdFswXStcIldpdGhcIl09YS5maXJlV2l0aH0pLGkucHJvbWlzZShvKSx0JiZ0LmNhbGwobyxvKSxvfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj10LHI9QXJyYXkobiksaT1vLmNhbGwoYXJndW1lbnRzKSxhPXcuRGVmZXJyZWQoKSxzPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihuKXtyW2VdPXRoaXMsaVtlXT1hcmd1bWVudHMubGVuZ3RoPjE/by5jYWxsKGFyZ3VtZW50cyk6biwtLXR8fGEucmVzb2x2ZVdpdGgocixpKX19O2lmKHQ8PTEmJigkKGUsYS5kb25lKHMobikpLnJlc29sdmUsYS5yZWplY3QsIXQpLFwicGVuZGluZ1wiPT09YS5zdGF0ZSgpfHxnKGlbbl0mJmlbbl0udGhlbikpKXJldHVybiBhLnRoZW4oKTt3aGlsZShuLS0pJChpW25dLHMobiksYS5yZWplY3QpO3JldHVybiBhLnByb21pc2UoKX19KTt2YXIgQj0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLzt3LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24odCxuKXtlLmNvbnNvbGUmJmUuY29uc29sZS53YXJuJiZ0JiZCLnRlc3QodC5uYW1lKSYmZS5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIit0Lm1lc3NhZ2UsdC5zdGFjayxuKX0sdy5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbih0KXtlLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyB0fSl9O3ZhciBGPXcuRGVmZXJyZWQoKTt3LmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXt3LnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30sdy5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLXcucmVhZHlXYWl0OncuaXNSZWFkeSl8fCh3LmlzUmVhZHk9ITAsITAhPT1lJiYtLXcucmVhZHlXYWl0PjB8fEYucmVzb2x2ZVdpdGgocixbd10pKX19KSx3LnJlYWR5LnRoZW49Ri50aGVuO2Z1bmN0aW9uIF8oKXtyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsXyksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLF8pLHcucmVhZHkoKX1cImNvbXBsZXRlXCI9PT1yLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ci5yZWFkeVN0YXRlJiYhci5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/ZS5zZXRUaW1lb3V0KHcucmVhZHkpOihyLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsXyksZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLF8pKTt2YXIgej1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT14KG4pKXtpPSEwO2ZvcihzIGluIG4peihlLHQscyxuW3NdLCEwLG8sYSl9ZWxzZSBpZih2b2lkIDAhPT1yJiYoaT0hMCxnKHIpfHwoYT0hMCksbCYmKGE/KHQuY2FsbChlLHIpLHQ9bnVsbCk6KGw9dCx0PWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbC5jYWxsKHcoZSksbil9KSksdCkpZm9yKDtzPHU7cysrKXQoZVtzXSxuLGE/cjpyLmNhbGwoZVtzXSxzLHQoZVtzXSxuKSkpO3JldHVybiBpP2U6bD90LmNhbGwoZSk6dT90KGVbMF0sbik6b30sWD0vXi1tcy0vLFU9Ly0oW2Etel0pL2c7ZnVuY3Rpb24gVihlLHQpe3JldHVybiB0LnRvVXBwZXJDYXNlKCl9ZnVuY3Rpb24gRyhlKXtyZXR1cm4gZS5yZXBsYWNlKFgsXCJtcy1cIikucmVwbGFjZShVLFYpfXZhciBZPWZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZXx8OT09PWUubm9kZVR5cGV8fCErZS5ub2RlVHlwZX07ZnVuY3Rpb24gUSgpe3RoaXMuZXhwYW5kbz13LmV4cGFuZG8rUS51aWQrK31RLnVpZD0xLFEucHJvdG90eXBlPXtjYWNoZTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHR8fCh0PXt9LFkoZSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT10Ok9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHRoaXMuZXhwYW5kbyx7dmFsdWU6dCxjb25maWd1cmFibGU6ITB9KSkpLHR9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT10aGlzLmNhY2hlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KWlbRyh0KV09bjtlbHNlIGZvcihyIGluIHQpaVtHKHIpXT10W3JdO3JldHVybiBpfSxnZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLmNhY2hlKGUpOmVbdGhpcy5leHBhbmRvXSYmZVt0aGlzLmV4cGFuZG9dW0codCldfSxhY2Nlc3M6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmdm9pZCAwPT09bj90aGlzLmdldChlLHQpOih0aGlzLnNldChlLHQsbiksdm9pZCAwIT09bj9uOnQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWVbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1yKXtpZih2b2lkIDAhPT10KXtuPSh0PUFycmF5LmlzQXJyYXkodCk/dC5tYXAoRyk6KHQ9Ryh0KSlpbiByP1t0XTp0Lm1hdGNoKE0pfHxbXSkubGVuZ3RoO3doaWxlKG4tLSlkZWxldGUgclt0W25dXX0odm9pZCAwPT09dHx8dy5pc0VtcHR5T2JqZWN0KHIpKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgZVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT10JiYhdy5pc0VtcHR5T2JqZWN0KHQpfX07dmFyIEo9bmV3IFEsSz1uZXcgUSxaPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxlZT0vW0EtWl0vZztmdW5jdGlvbiB0ZShlKXtyZXR1cm5cInRydWVcIj09PWV8fFwiZmFsc2VcIiE9PWUmJihcIm51bGxcIj09PWU/bnVsbDplPT09K2UrXCJcIj8rZTpaLnRlc3QoZSk/SlNPTi5wYXJzZShlKTplKX1mdW5jdGlvbiBuZShlLHQsbil7dmFyIHI7aWYodm9pZCAwPT09biYmMT09PWUubm9kZVR5cGUpaWYocj1cImRhdGEtXCIrdC5yZXBsYWNlKGVlLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj10ZShuKX1jYXRjaChlKXt9Sy5zZXQoZSx0LG4pfWVsc2Ugbj12b2lkIDA7cmV0dXJuIG59dy5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIEsuaGFzRGF0YShlKXx8Si5oYXNEYXRhKGUpfSxkYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gSy5hY2Nlc3MoZSx0LG4pfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7Sy5yZW1vdmUoZSx0KX0sX2RhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBKLmFjY2VzcyhlLHQsbil9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGUsdCl7Si5yZW1vdmUoZSx0KX19KSx3LmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvPXRoaXNbMF0sYT1vJiZvLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09ZSl7aWYodGhpcy5sZW5ndGgmJihpPUsuZ2V0KG8pLDE9PT1vLm5vZGVUeXBlJiYhSi5nZXQobyxcImhhc0RhdGFBdHRyc1wiKSkpe249YS5sZW5ndGg7d2hpbGUobi0tKWFbbl0mJjA9PT0ocj1hW25dLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSYmKHI9RyhyLnNsaWNlKDUpKSxuZShvLHIsaVtyXSkpO0ouc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGU/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Sy5zZXQodGhpcyxlKX0pOnoodGhpcyxmdW5jdGlvbih0KXt2YXIgbjtpZihvJiZ2b2lkIDA9PT10KXtpZih2b2lkIDAhPT0obj1LLmdldChvLGUpKSlyZXR1cm4gbjtpZih2b2lkIDAhPT0obj1uZShvLGUpKSlyZXR1cm4gbn1lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe0suc2V0KHRoaXMsZSx0KX0pfSxudWxsLHQsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtLLnJlbW92ZSh0aGlzLGUpfSl9fSksdy5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPUouZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9Si5hY2Nlc3MoZSx0LHcubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49dy5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz13Ll9xdWV1ZUhvb2tzKGUsdCksYT1mdW5jdGlvbigpe3cuZGVxdWV1ZShlLHQpfTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsYSxvKSksIXImJm8mJm8uZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihlLHQpe3ZhciBuPXQrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIEouZ2V0KGUsbil8fEouYWNjZXNzKGUsbix7ZW1wdHk6dy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtKLnJlbW92ZShlLFt0K1wicXVldWVcIixuXSl9KX0pfX0pLHcuZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cImZ4XCIsbi0tKSxhcmd1bWVudHMubGVuZ3RoPG4/dy5xdWV1ZSh0aGlzWzBdLGUpOnZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgbj13LnF1ZXVlKHRoaXMsZSx0KTt3Ll9xdWV1ZUhvb2tzKHRoaXMsZSksXCJmeFwiPT09ZSYmXCJpbnByb2dyZXNzXCIhPT1uWzBdJiZ3LmRlcXVldWUodGhpcyxlKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt3LmRlcXVldWUodGhpcyxlKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTEsaT13LkRlZmVycmVkKCksbz10aGlzLGE9dGhpcy5sZW5ndGgscz1mdW5jdGlvbigpey0tcnx8aS5yZXNvbHZlV2l0aChvLFtvXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjt3aGlsZShhLS0pKG49Si5nZXQob1thXSxlK1wicXVldWVIb29rc1wiKSkmJm4uZW1wdHkmJihyKyssbi5lbXB0eS5hZGQocykpO3JldHVybiBzKCksaS5wcm9taXNlKHQpfX0pO3ZhciByZT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsaWU9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrcmUrXCIpKFthLXolXSopJFwiLFwiaVwiKSxvZT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJncuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpJiZcIm5vbmVcIj09PXcuY3NzKGUsXCJkaXNwbGF5XCIpfSxzZT1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGE9e307Zm9yKG8gaW4gdClhW29dPWUuc3R5bGVbb10sZS5zdHlsZVtvXT10W29dO2k9bi5hcHBseShlLHJ8fFtdKTtmb3IobyBpbiB0KWUuc3R5bGVbb109YVtvXTtyZXR1cm4gaX07ZnVuY3Rpb24gdWUoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiB3LmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KHcuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPSh3LmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZpZS5leGVjKHcuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSl3LnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsdy5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciBsZT17fTtmdW5jdGlvbiBjZShlKXt2YXIgdCxuPWUub3duZXJEb2N1bWVudCxyPWUubm9kZU5hbWUsaT1sZVtyXTtyZXR1cm4gaXx8KHQ9bi5ib2R5LmFwcGVuZENoaWxkKG4uY3JlYXRlRWxlbWVudChyKSksaT13LmNzcyh0LFwiZGlzcGxheVwiKSx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksXCJub25lXCI9PT1pJiYoaT1cImJsb2NrXCIpLGxlW3JdPWksaSl9ZnVuY3Rpb24gZmUoZSx0KXtmb3IodmFyIG4scixpPVtdLG89MCxhPWUubGVuZ3RoO288YTtvKyspKHI9ZVtvXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihpW29dPUouZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGlbb118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJmFlKHIpJiYoaVtvXT1jZShyKSkpOlwibm9uZVwiIT09biYmKGlbb109XCJub25lXCIsSi5zZXQocixcImRpc3BsYXlcIixuKSkpO2ZvcihvPTA7bzxhO28rKyludWxsIT1pW29dJiYoZVtvXS5zdHlsZS5kaXNwbGF5PWlbb10pO3JldHVybiBlfXcuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGZlKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGZlKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7YWUodGhpcyk/dyh0aGlzKS5zaG93KCk6dyh0aGlzKS5oaWRlKCl9KX19KTt2YXIgcGU9L14oPzpjaGVja2JveHxyYWRpbykkL2ksZGU9LzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pLGhlPS9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksZ2U9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtnZS5vcHRncm91cD1nZS5vcHRpb24sZ2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZDtmdW5jdGlvbiB5ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZOKGUsdCk/dy5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB2ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylKLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxKLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIG1lPS88fCYjP1xcdys7LztmdW5jdGlvbiB4ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT14KG8pKXcubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG1lLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0rdy5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO3cubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJncuaW5BcnJheShvLHIpPi0xKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9dy5jb250YWlucyhvLm93bmVyRG9jdW1lbnQsbyksYT15ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnZlKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn0hZnVuY3Rpb24oKXt2YXIgZT1yLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHQ9ci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSx0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGUuYXBwZW5kQ2hpbGQodCksaC5jaGVja0Nsb25lPWUuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGUuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGgubm9DbG9uZUNoZWNrZWQ9ISFlLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgYmU9ci5kb2N1bWVudEVsZW1lbnQsd2U9L15rZXkvLFRlPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxDZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIEVlKCl7cmV0dXJuITB9ZnVuY3Rpb24ga2UoKXtyZXR1cm4hMX1mdW5jdGlvbiBTZSgpe3RyeXtyZXR1cm4gci5hY3RpdmVFbGVtZW50fWNhdGNoKGUpe319ZnVuY3Rpb24gRGUoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe1wic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKTtmb3IocyBpbiB0KURlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9a2U7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIHcoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD13Lmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe3cuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX13LmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx5PUouZ2V0KGUpO2lmKHkpe24uaGFuZGxlciYmKG49KG89bikuaGFuZGxlcixpPW8uc2VsZWN0b3IpLGkmJncuZmluZC5tYXRjaGVzU2VsZWN0b3IoYmUsaSksbi5ndWlkfHwobi5ndWlkPXcuZ3VpZCsrKSwodT15LmV2ZW50cyl8fCh1PXkuZXZlbnRzPXt9KSwoYT15LmhhbmRsZSl8fChhPXkuaGFuZGxlPWZ1bmN0aW9uKHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3JiZ3LmV2ZW50LnRyaWdnZXJlZCE9PXQudHlwZT93LmV2ZW50LmRpc3BhdGNoLmFwcGx5KGUsYXJndW1lbnRzKTp2b2lkIDB9KSxsPSh0PSh0fHxcIlwiKS5tYXRjaChNKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWQ9Zz0ocz1DZS5leGVjKHRbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj13LmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj13LmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9dy5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmdy5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbChlLHIsaCxhKXx8ZS5hZGRFdmVudExpc3RlbmVyJiZlLmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKGUsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLHcuZXZlbnQuZ2xvYmFsW2RdPSEwKX19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcseT1KLmhhc0RhdGEoZSkmJkouZ2V0KGUpO2lmKHkmJih1PXkuZXZlbnRzKSl7bD0odD0odHx8XCJcIikubWF0Y2goTSl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihzPUNlLmV4ZWModFtsXSl8fFtdLGQ9Zz1zWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zj13LmV2ZW50LnNwZWNpYWxbZF18fHt9LHA9dVtkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkXXx8W10scz1zWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHkuaGFuZGxlKXx8dy5yZW1vdmVFdmVudChlLGQseS5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpdy5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTt3LmlzRW1wdHlPYmplY3QodSkmJkoucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQ9dy5ldmVudC5maXgoZSksbixyLGksbyxhLHMsdT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksbD0oSi5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW3QudHlwZV18fFtdLGM9dy5ldmVudC5zcGVjaWFsW3QudHlwZV18fHt9O2Zvcih1WzBdPXQsbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdVtuXT1hcmd1bWVudHNbbl07aWYodC5kZWxlZ2F0ZVRhcmdldD10aGlzLCFjLnByZURpc3BhdGNofHwhMSE9PWMucHJlRGlzcGF0Y2guY2FsbCh0aGlzLHQpKXtzPXcuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHQsbCksbj0wO3doaWxlKChvPXNbbisrXSkmJiF0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe3QuY3VycmVudFRhcmdldD1vLmVsZW0scj0wO3doaWxlKChhPW8uaGFuZGxlcnNbcisrXSkmJiF0LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpdC5ybmFtZXNwYWNlJiYhdC5ybmFtZXNwYWNlLnRlc3QoYS5uYW1lc3BhY2UpfHwodC5oYW5kbGVPYmo9YSx0LmRhdGE9YS5kYXRhLHZvaWQgMCE9PShpPSgody5ldmVudC5zcGVjaWFsW2Eub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxhLmhhbmRsZXIpLmFwcGx5KG8uZWxlbSx1KSkmJiExPT09KHQucmVzdWx0PWkpJiYodC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gYy5wb3N0RGlzcGF0Y2gmJmMucG9zdERpc3BhdGNoLmNhbGwodGhpcyx0KSx0LnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzPVtdLHU9dC5kZWxlZ2F0ZUNvdW50LGw9ZS50YXJnZXQ7aWYodSYmbC5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1lLnR5cGUmJmUuYnV0dG9uPj0xKSlmb3IoO2whPT10aGlzO2w9bC5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1sLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09ZS50eXBlfHwhMCE9PWwuZGlzYWJsZWQpKXtmb3Iobz1bXSxhPXt9LG49MDtuPHU7bisrKXZvaWQgMD09PWFbaT0ocj10W25dKS5zZWxlY3RvcitcIiBcIl0mJihhW2ldPXIubmVlZHNDb250ZXh0P3coaSx0aGlzKS5pbmRleChsKT4tMTp3LmZpbmQoaSx0aGlzLG51bGwsW2xdKS5sZW5ndGgpLGFbaV0mJm8ucHVzaChyKTtvLmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6b30pfXJldHVybiBsPXRoaXMsdTx0Lmxlbmd0aCYmcy5wdXNoKHtlbGVtOmwsaGFuZGxlcnM6dC5zbGljZSh1KX0pLHN9LGFkZFByb3A6ZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkody5FdmVudC5wcm90b3R5cGUsZSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmcodCk/ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHQodGhpcy5vcmlnaW5hbEV2ZW50KX06ZnVuY3Rpb24oKXtpZih0aGlzLm9yaWdpbmFsRXZlbnQpcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFtlXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0sZml4OmZ1bmN0aW9uKGUpe3JldHVybiBlW3cuZXhwYW5kb10/ZTpuZXcgdy5FdmVudChlKX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PVNlKCkmJnRoaXMuZm9jdXMpcmV0dXJuIHRoaXMuZm9jdXMoKSwhMX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcz09PVNlKCkmJnRoaXMuYmx1cilyZXR1cm4gdGhpcy5ibHVyKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYoXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZOKHRoaXMsXCJpbnB1dFwiKSlyZXR1cm4gdGhpcy5jbGljaygpLCExfSxfZGVmYXVsdDpmdW5jdGlvbihlKXtyZXR1cm4gTihlLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0sdy5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sdy5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHcuRXZlbnQpKXJldHVybiBuZXcgdy5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP0VlOmtlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJncuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1t3LmV4cGFuZG9dPSEwfSx3LkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6dy5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6a2UsaXNQcm9wYWdhdGlvblN0b3BwZWQ6a2UsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6a2UsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9RWUsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9RWUsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPUVlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSx3LmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5idXR0b247cmV0dXJuIG51bGw9PWUud2hpY2gmJndlLnRlc3QoZS50eXBlKT9udWxsIT1lLmNoYXJDb2RlP2UuY2hhckNvZGU6ZS5rZXlDb2RlOiFlLndoaWNoJiZ2b2lkIDAhPT10JiZUZS50ZXN0KGUudHlwZSk/MSZ0PzE6MiZ0PzM6NCZ0PzI6MDplLndoaWNofX0sdy5ldmVudC5hZGRQcm9wKSx3LmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oZSx0KXt3LmV2ZW50LnNwZWNpYWxbZV09e2RlbGVnYXRlVHlwZTp0LGJpbmRUeXBlOnQsaGFuZGxlOmZ1bmN0aW9uKGUpe3ZhciBuLHI9dGhpcyxpPWUucmVsYXRlZFRhcmdldCxvPWUuaGFuZGxlT2JqO3JldHVybiBpJiYoaT09PXJ8fHcuY29udGFpbnMocixpKSl8fChlLnR5cGU9by5vcmlnVHlwZSxuPW8uaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPXQpLG59fX0pLHcuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gRGUodGhpcyxlLHQsbixyKX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBEZSh0aGlzLGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gcj1lLmhhbmRsZU9iaix3KGUuZGVsZWdhdGVUYXJnZXQpLm9mZihyLm5hbWVzcGFjZT9yLm9yaWdUeXBlK1wiLlwiK3IubmFtZXNwYWNlOnIub3JpZ1R5cGUsci5zZWxlY3RvcixyLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1rZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dy5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIgTmU9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksQWU9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksamU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxxZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gTGUoZSx0KXtyZXR1cm4gTihlLFwidGFibGVcIikmJk4oMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIik/dyhlKS5jaGlsZHJlbihcInRib2R5XCIpWzBdfHxlOmV9ZnVuY3Rpb24gSGUoZSl7cmV0dXJuIGUudHlwZT0obnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrZS50eXBlLGV9ZnVuY3Rpb24gT2UoZSl7cmV0dXJuXCJ0cnVlL1wiPT09KGUudHlwZXx8XCJcIikuc2xpY2UoMCw1KT9lLnR5cGU9ZS50eXBlLnNsaWNlKDUpOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIFBlKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbDtpZigxPT09dC5ub2RlVHlwZSl7aWYoSi5oYXNEYXRhKGUpJiYobz1KLmFjY2VzcyhlKSxhPUouc2V0KHQsbyksbD1vLmV2ZW50cykpe2RlbGV0ZSBhLmhhbmRsZSxhLmV2ZW50cz17fTtmb3IoaSBpbiBsKWZvcihuPTAscj1sW2ldLmxlbmd0aDtuPHI7bisrKXcuZXZlbnQuYWRkKHQsaSxsW2ldW25dKX1LLmhhc0RhdGEoZSkmJihzPUsuYWNjZXNzKGUpLHU9dy5leHRlbmQoe30scyksSy5zZXQodCx1KSl9fWZ1bmN0aW9uIE1lKGUsdCl7dmFyIG49dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PW4mJnBlLnRlc3QoZS50eXBlKT90LmNoZWNrZWQ9ZS5jaGVja2VkOlwiaW5wdXRcIiE9PW4mJlwidGV4dGFyZWFcIiE9PW58fCh0LmRlZmF1bHRWYWx1ZT1lLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gUmUoZSx0LG4scil7dD1hLmFwcGx5KFtdLHQpO3ZhciBpLG8scyx1LGwsYyxmPTAscD1lLmxlbmd0aCxkPXAtMSx5PXRbMF0sdj1nKHkpO2lmKHZ8fHA+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHkmJiFoLmNoZWNrQ2xvbmUmJmplLnRlc3QoeSkpcmV0dXJuIGUuZWFjaChmdW5jdGlvbihpKXt2YXIgbz1lLmVxKGkpO3YmJih0WzBdPXkuY2FsbCh0aGlzLGksby5odG1sKCkpKSxSZShvLHQsbixyKX0pO2lmKHAmJihpPXhlKHQsZVswXS5vd25lckRvY3VtZW50LCExLGUsciksbz1pLmZpcnN0Q2hpbGQsMT09PWkuY2hpbGROb2Rlcy5sZW5ndGgmJihpPW8pLG98fHIpKXtmb3IodT0ocz13Lm1hcCh5ZShpLFwic2NyaXB0XCIpLEhlKSkubGVuZ3RoO2Y8cDtmKyspbD1pLGYhPT1kJiYobD13LmNsb25lKGwsITAsITApLHUmJncubWVyZ2Uocyx5ZShsLFwic2NyaXB0XCIpKSksbi5jYWxsKGVbZl0sbCxmKTtpZih1KWZvcihjPXNbcy5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCx3Lm1hcChzLE9lKSxmPTA7Zjx1O2YrKylsPXNbZl0saGUudGVzdChsLnR5cGV8fFwiXCIpJiYhSi5hY2Nlc3MobCxcImdsb2JhbEV2YWxcIikmJncuY29udGFpbnMoYyxsKSYmKGwuc3JjJiZcIm1vZHVsZVwiIT09KGwudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT93Ll9ldmFsVXJsJiZ3Ll9ldmFsVXJsKGwuc3JjKTptKGwudGV4dENvbnRlbnQucmVwbGFjZShxZSxcIlwiKSxjLGwpKX1yZXR1cm4gZX1mdW5jdGlvbiBJZShlLHQsbil7Zm9yKHZhciByLGk9dD93LmZpbHRlcih0LGUpOmUsbz0wO251bGwhPShyPWlbb10pO28rKylufHwxIT09ci5ub2RlVHlwZXx8dy5jbGVhbkRhdGEoeWUocikpLHIucGFyZW50Tm9kZSYmKG4mJncuY29udGFpbnMoci5vd25lckRvY3VtZW50LHIpJiZ2ZSh5ZShyLFwic2NyaXB0XCIpKSxyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocikpO3JldHVybiBlfXcuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoTmUsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY2xvbmVOb2RlKCEwKSx1PXcuY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpO2lmKCEoaC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8dy5pc1hNTERvYyhlKSkpZm9yKGE9eWUocykscj0wLGk9KG89eWUoZSkpLmxlbmd0aDtyPGk7cisrKU1lKG9bcl0sYVtyXSk7aWYodClpZihuKWZvcihvPW98fHllKGUpLGE9YXx8eWUocykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylQZShvW3JdLGFbcl0pO2Vsc2UgUGUoZSxzKTtyZXR1cm4oYT15ZShzLFwic2NyaXB0XCIpKS5sZW5ndGg+MCYmdmUoYSwhdSYmeWUoZSxcInNjcmlwdFwiKSksc30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT13LmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihZKG4pKXtpZih0PW5bSi5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT93LmV2ZW50LnJlbW92ZShuLHIpOncucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW0ouZXhwYW5kb109dm9pZCAwfW5bSy5leHBhbmRvXSYmKG5bSy5leHBhbmRvXT12b2lkIDApfX19KSx3LmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBJZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIEllKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHoodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT93LnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fExlKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBSZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9TGUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBSZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBSZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYody5jbGVhbkRhdGEoeWUoZSwhMSkpLGUudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbCE9ZSYmZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHcuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuIHoodGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAscj10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFBZS50ZXN0KGUpJiYhZ2VbKGRlLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT13Lmh0bWxQcmVmaWx0ZXIoZSk7dHJ5e2Zvcig7bjxyO24rKykxPT09KHQ9dGhpc1tuXXx8e30pLm5vZGVUeXBlJiYody5jbGVhbkRhdGEoeWUodCwhMSkpLHQuaW5uZXJIVE1MPWUpO3Q9MH1jYXRjaChlKXt9fXQmJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4gUmUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24odCl7dmFyIG49dGhpcy5wYXJlbnROb2RlO3cuaW5BcnJheSh0aGlzLGUpPDAmJih3LmNsZWFuRGF0YSh5ZSh0aGlzKSksbiYmbi5yZXBsYWNlQ2hpbGQodCx0aGlzKSl9LGUpfX0pLHcuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLHQpe3cuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciBuLHI9W10saT13KGUpLG89aS5sZW5ndGgtMSxhPTA7YTw9bzthKyspbj1hPT09bz90aGlzOnRoaXMuY2xvbmUoITApLHcoaVthXSlbdF0obikscy5hcHBseShyLG4uZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhyKX19KTt2YXIgV2U9bmV3IFJlZ0V4cChcIl4oXCIrcmUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksJGU9ZnVuY3Rpb24odCl7dmFyIG49dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBuJiZuLm9wZW5lcnx8KG49ZSksbi5nZXRDb21wdXRlZFN0eWxlKHQpfSxCZT1uZXcgUmVnRXhwKG9lLmpvaW4oXCJ8XCIpLFwiaVwiKTshZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7aWYoYyl7bC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLGMuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixiZS5hcHBlbmRDaGlsZChsKS5hcHBlbmRDaGlsZChjKTt2YXIgdD1lLmdldENvbXB1dGVkU3R5bGUoYyk7aT1cIjElXCIhPT10LnRvcCx1PTEyPT09bih0Lm1hcmdpbkxlZnQpLGMuc3R5bGUucmlnaHQ9XCI2MCVcIixzPTM2PT09bih0LnJpZ2h0KSxvPTM2PT09bih0LndpZHRoKSxjLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixhPTM2PT09Yy5vZmZzZXRXaWR0aHx8XCJhYnNvbHV0ZVwiLGJlLnJlbW92ZUNoaWxkKGwpLGM9bnVsbH19ZnVuY3Rpb24gbihlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgaSxvLGEscyx1LGw9ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGM9ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Muc3R5bGUmJihjLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixjLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixoLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1jLnN0eWxlLmJhY2tncm91bmRDbGlwLHcuZXh0ZW5kKGgse2JveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxvfSxwaXhlbEJveFN0eWxlczpmdW5jdGlvbigpe3JldHVybiB0KCksc30scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiB0KCksaX0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSx1fSxzY3JvbGxib3hTaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHQoKSxhfX0pKX0oKTtmdW5jdGlvbiBGZShlLHQsbil7dmFyIHIsaSxvLGEscz1lLnN0eWxlO3JldHVybihuPW58fCRlKGUpKSYmKFwiXCIhPT0oYT1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0pfHx3LmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8KGE9dy5zdHlsZShlLHQpKSwhaC5waXhlbEJveFN0eWxlcygpJiZXZS50ZXN0KGEpJiZCZS50ZXN0KHQpJiYocj1zLndpZHRoLGk9cy5taW5XaWR0aCxvPXMubWF4V2lkdGgscy5taW5XaWR0aD1zLm1heFdpZHRoPXMud2lkdGg9YSxhPW4ud2lkdGgscy53aWR0aD1yLHMubWluV2lkdGg9aSxzLm1heFdpZHRoPW8pKSx2b2lkIDAhPT1hP2ErXCJcIjphfWZ1bmN0aW9uIF9lKGUsdCl7cmV0dXJue2dldDpmdW5jdGlvbigpe2lmKCFlKCkpcmV0dXJuKHRoaXMuZ2V0PXQpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtkZWxldGUgdGhpcy5nZXR9fX12YXIgemU9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFhlPS9eLS0vLFVlPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxWZT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEdlPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxZZT1yLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gUWUoZSl7aWYoZSBpbiBZZSlyZXR1cm4gZTt2YXIgdD1lWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPUdlLmxlbmd0aDt3aGlsZShuLS0paWYoKGU9R2Vbbl0rdClpbiBZZSlyZXR1cm4gZX1mdW5jdGlvbiBKZShlKXt2YXIgdD13LmNzc1Byb3BzW2VdO3JldHVybiB0fHwodD13LmNzc1Byb3BzW2VdPVFlKGUpfHxlKSx0fWZ1bmN0aW9uIEtlKGUsdCxuKXt2YXIgcj1pZS5leGVjKHQpO3JldHVybiByP01hdGgubWF4KDAsclsyXS0obnx8MCkpKyhyWzNdfHxcInB4XCIpOnR9ZnVuY3Rpb24gWmUoZSx0LG4scixpLG8pe3ZhciBhPVwid2lkdGhcIj09PXQ/MTowLHM9MCx1PTA7aWYobj09PShyP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXJldHVybiAwO2Zvcig7YTw0O2ErPTIpXCJtYXJnaW5cIj09PW4mJih1Kz13LmNzcyhlLG4rb2VbYV0sITAsaSkpLHI/KFwiY29udGVudFwiPT09biYmKHUtPXcuY3NzKGUsXCJwYWRkaW5nXCIrb2VbYV0sITAsaSkpLFwibWFyZ2luXCIhPT1uJiYodS09dy5jc3MoZSxcImJvcmRlclwiK29lW2FdK1wiV2lkdGhcIiwhMCxpKSkpOih1Kz13LmNzcyhlLFwicGFkZGluZ1wiK29lW2FdLCEwLGkpLFwicGFkZGluZ1wiIT09bj91Kz13LmNzcyhlLFwiYm9yZGVyXCIrb2VbYV0rXCJXaWR0aFwiLCEwLGkpOnMrPXcuY3NzKGUsXCJib3JkZXJcIitvZVthXStcIldpZHRoXCIsITAsaSkpO3JldHVybiFyJiZvPj0wJiYodSs9TWF0aC5tYXgoMCxNYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1vLXUtcy0uNSkpKSx1fWZ1bmN0aW9uIGV0KGUsdCxuKXt2YXIgcj0kZShlKSxpPUZlKGUsdCxyKSxvPVwiYm9yZGVyLWJveFwiPT09dy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLGE9bztpZihXZS50ZXN0KGkpKXtpZighbilyZXR1cm4gaTtpPVwiYXV0b1wifXJldHVybiBhPWEmJihoLmJveFNpemluZ1JlbGlhYmxlKCl8fGk9PT1lLnN0eWxlW3RdKSwoXCJhdXRvXCI9PT1pfHwhcGFyc2VGbG9hdChpKSYmXCJpbmxpbmVcIj09PXcuY3NzKGUsXCJkaXNwbGF5XCIsITEscikpJiYoaT1lW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLGE9ITApLChpPXBhcnNlRmxvYXQoaSl8fDApK1plKGUsdCxufHwobz9cImJvcmRlclwiOlwiY29udGVudFwiKSxhLHIsaSkrXCJweFwifXcuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49RmUoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7fSxzdHlsZTpmdW5jdGlvbihlLHQsbixyKXtpZihlJiYzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJmUuc3R5bGUpe3ZhciBpLG8sYSxzPUcodCksdT1YZS50ZXN0KHQpLGw9ZS5zdHlsZTtpZih1fHwodD1KZShzKSksYT13LmNzc0hvb2tzW3RdfHx3LmNzc0hvb2tzW3NdLHZvaWQgMD09PW4pcmV0dXJuIGEmJlwiZ2V0XCJpbiBhJiZ2b2lkIDAhPT0oaT1hLmdldChlLCExLHIpKT9pOmxbdF07XCJzdHJpbmdcIj09KG89dHlwZW9mIG4pJiYoaT1pZS5leGVjKG4pKSYmaVsxXSYmKG49dWUoZSx0LGkpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09PW4mJihcIm51bWJlclwiPT09byYmKG4rPWkmJmlbM118fCh3LmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLGguY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPUcodCk7cmV0dXJuIFhlLnRlc3QodCl8fCh0PUplKHMpKSwoYT13LmNzc0hvb2tzW3RdfHx3LmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPUZlKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gVmUmJihpPVZlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLHcuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGUsdCl7dy5jc3NIb29rc1t0XT17Z2V0OmZ1bmN0aW9uKGUsbixyKXtpZihuKXJldHVybiF6ZS50ZXN0KHcuY3NzKGUsXCJkaXNwbGF5XCIpKXx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aD9ldChlLHQscik6c2UoZSxVZSxmdW5jdGlvbigpe3JldHVybiBldChlLHQscil9KX0sc2V0OmZ1bmN0aW9uKGUsbixyKXt2YXIgaSxvPSRlKGUpLGE9XCJib3JkZXItYm94XCI9PT13LmNzcyhlLFwiYm94U2l6aW5nXCIsITEsbykscz1yJiZaZShlLHQscixhLG8pO3JldHVybiBhJiZoLnNjcm9sbGJveFNpemUoKT09PW8ucG9zaXRpb24mJihzLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpXS1wYXJzZUZsb2F0KG9bdF0pLVplKGUsdCxcImJvcmRlclwiLCExLG8pLS41KSkscyYmKGk9aWUuZXhlYyhuKSkmJlwicHhcIiE9PShpWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt0XT1uLG49dy5jc3MoZSx0KSksS2UoZSxuLHMpfX19KSx3LmNzc0hvb2tzLm1hcmdpbkxlZnQ9X2UoaC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KEZlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LXNlKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLHcuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGUsdCl7dy5jc3NIb29rc1tlK3RdPXtleHBhbmQ6ZnVuY3Rpb24obil7Zm9yKHZhciByPTAsaT17fSxvPVwic3RyaW5nXCI9PXR5cGVvZiBuP24uc3BsaXQoXCIgXCIpOltuXTtyPDQ7cisrKWlbZStvZVtyXSt0XT1vW3JdfHxvW3ItMl18fG9bMF07cmV0dXJuIGl9fSxcIm1hcmdpblwiIT09ZSYmKHcuY3NzSG9va3NbZSt0XS5zZXQ9S2UpfSksdy5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiB6KHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9JGUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09dy5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP3cuc3R5bGUoZSx0LG4pOncuY3NzKGUsdCl9LGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfX0pO2Z1bmN0aW9uIHR0KGUsdCxuLHIsaSl7cmV0dXJuIG5ldyB0dC5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfXcuVHdlZW49dHQsdHQucHJvdG90eXBlPXtjb25zdHJ1Y3Rvcjp0dCxpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHx3LmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KHcuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9dHQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOnR0LnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPXR0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD13LmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6dHQucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sdHQucHJvdG90eXBlLmluaXQucHJvdG90eXBlPXR0LnByb3RvdHlwZSx0dC5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD13LmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe3cuZnguc3RlcFtlLnByb3BdP3cuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGw9PWUuZWxlbS5zdHlsZVt3LmNzc1Byb3BzW2UucHJvcF1dJiYhdy5jc3NIb29rc1tlLnByb3BdP2UuZWxlbVtlLnByb3BdPWUubm93Oncuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19LHR0LnByb3BIb29rcy5zY3JvbGxUb3A9dHQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sdy5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LHcuZng9dHQucHJvdG90eXBlLmluaXQsdy5meC5zdGVwPXt9O3ZhciBudCxydCxpdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sb3Q9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBhdCgpe3J0JiYoITE9PT1yLmhpZGRlbiYmZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXQpOmUuc2V0VGltZW91dChhdCx3LmZ4LmludGVydmFsKSx3LmZ4LnRpY2soKSl9ZnVuY3Rpb24gc3QoKXtyZXR1cm4gZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bnQ9dm9pZCAwfSksbnQ9RGF0ZS5ub3coKX1mdW5jdGlvbiB1dChlLHQpe3ZhciBuLHI9MCxpPXtoZWlnaHQ6ZX07Zm9yKHQ9dD8xOjA7cjw0O3IrPTItdClpW1wibWFyZ2luXCIrKG49b2Vbcl0pXT1pW1wicGFkZGluZ1wiK25dPWU7cmV0dXJuIHQmJihpLm9wYWNpdHk9aS53aWR0aD1lKSxpfWZ1bmN0aW9uIGx0KGUsdCxuKXtmb3IodmFyIHIsaT0ocHQudHdlZW5lcnNbdF18fFtdKS5jb25jYXQocHQudHdlZW5lcnNbXCIqXCJdKSxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKHI9aVtvXS5jYWxsKG4sdCxlKSlyZXR1cm4gcn1mdW5jdGlvbiBjdChlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmFlKGUpLHk9Si5nZXQoZSxcImZ4c2hvd1wiKTtuLnF1ZXVlfHwobnVsbD09KGE9dy5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cyhmdW5jdGlvbigpe3AuYWx3YXlzKGZ1bmN0aW9uKCl7YS51bnF1ZXVlZC0tLHcucXVldWUoZSxcImZ4XCIpLmxlbmd0aHx8YS5lbXB0eS5maXJlKCl9KX0pKTtmb3IociBpbiB0KWlmKGk9dFtyXSxpdC50ZXN0KGkpKXtpZihkZWxldGUgdFtyXSxvPW98fFwidG9nZ2xlXCI9PT1pLGk9PT0oZz9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09aXx8IXl8fHZvaWQgMD09PXlbcl0pY29udGludWU7Zz0hMH1kW3JdPXkmJnlbcl18fHcuc3R5bGUoZSxyKX1pZigodT0hdy5pc0VtcHR5T2JqZWN0KHQpKXx8IXcuaXNFbXB0eU9iamVjdChkKSl7ZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD15JiZ5LmRpc3BsYXkpJiYobD1KLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz13LmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDooZmUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPXcuY3NzKGUsXCJkaXNwbGF5XCIpLGZlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT13LmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExO2ZvcihyIGluIGQpdXx8KHk/XCJoaWRkZW5cImluIHkmJihnPXkuaGlkZGVuKTp5PUouYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHkuaGlkZGVuPSFnKSxnJiZmZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2d8fGZlKFtlXSksSi5yZW1vdmUoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBkKXcuc3R5bGUoZSxyLGRbcl0pfSkpLHU9bHQoZz95W3JdOjAscixwKSxyIGluIHl8fCh5W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9fWZ1bmN0aW9uIGZ0KGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKHI9RyhuKSxpPXRbcl0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT13LmNzc0hvb2tzW3JdKSYmXCJleHBhbmRcImluIGEpe289YS5leHBhbmQobyksZGVsZXRlIGVbcl07Zm9yKG4gaW4gbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKX1lbHNlIHRbcl09aX1mdW5jdGlvbiBwdChlLHQsbil7dmFyIHIsaSxvPTAsYT1wdC5wcmVmaWx0ZXJzLmxlbmd0aCxzPXcuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSksdT1mdW5jdGlvbigpe2lmKGkpcmV0dXJuITE7Zm9yKHZhciB0PW50fHxzdCgpLG49TWF0aC5tYXgoMCxsLnN0YXJ0VGltZStsLmR1cmF0aW9uLXQpLHI9MS0obi9sLmR1cmF0aW9ufHwwKSxvPTAsYT1sLnR3ZWVucy5sZW5ndGg7bzxhO28rKylsLnR3ZWVuc1tvXS5ydW4ocik7cmV0dXJuIHMubm90aWZ5V2l0aChlLFtsLHIsbl0pLHI8MSYmYT9uOihhfHxzLm5vdGlmeVdpdGgoZSxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKGUsW2xdKSwhMSl9LGw9cy5wcm9taXNlKHtlbGVtOmUscHJvcHM6dy5leHRlbmQoe30sdCksb3B0czp3LmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6dy5lYXNpbmcuX2RlZmF1bHR9LG4pLG9yaWdpbmFsUHJvcGVydGllczp0LG9yaWdpbmFsT3B0aW9uczpuLHN0YXJ0VGltZTpudHx8c3QoKSxkdXJhdGlvbjpuLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbih0LG4pe3ZhciByPXcuVHdlZW4oZSxsLm9wdHMsdCxuLGwub3B0cy5zcGVjaWFsRWFzaW5nW3RdfHxsLm9wdHMuZWFzaW5nKTtyZXR1cm4gbC50d2VlbnMucHVzaChyKSxyfSxzdG9wOmZ1bmN0aW9uKHQpe3ZhciBuPTAscj10P2wudHdlZW5zLmxlbmd0aDowO2lmKGkpcmV0dXJuIHRoaXM7Zm9yKGk9ITA7bjxyO24rKylsLnR3ZWVuc1tuXS5ydW4oMSk7cmV0dXJuIHQ/KHMubm90aWZ5V2l0aChlLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgoZSxbbCx0XSkpOnMucmVqZWN0V2l0aChlLFtsLHRdKSx0aGlzfX0pLGM9bC5wcm9wcztmb3IoZnQoYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7bzxhO28rKylpZihyPXB0LnByZWZpbHRlcnNbb10uY2FsbChsLGUsYyxsLm9wdHMpKXJldHVybiBnKHIuc3RvcCkmJih3Ll9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9ci5zdG9wLmJpbmQocikpLHI7cmV0dXJuIHcubWFwKGMsbHQsbCksZyhsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChlLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLHcuZngudGltZXIody5leHRlbmQodSx7ZWxlbTplLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH13LkFuaW1hdGlvbj13LmV4dGVuZChwdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gdWUobi5lbGVtLGUsaWUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXtnKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goTSk7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLHB0LnR3ZWVuZXJzW25dPXB0LnR3ZWVuZXJzW25dfHxbXSxwdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltjdF0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9wdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6cHQucHJlZmlsdGVycy5wdXNoKGUpfX0pLHcuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP3cuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8ZyhlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhZyh0KSYmdH07cmV0dXJuIHcuZngub2ZmP3IuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2Ygci5kdXJhdGlvbiYmKHIuZHVyYXRpb24gaW4gdy5meC5zcGVlZHM/ci5kdXJhdGlvbj13LmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpyLmR1cmF0aW9uPXcuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1yLnF1ZXVlJiYhMCE9PXIucXVldWV8fChyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7ZyhyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmdy5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LHcuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKGFlKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPXcuaXNFbXB0eU9iamVjdChlKSxvPXcuc3BlZWQodCxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgdD1wdCh0aGlzLHcuZXh0ZW5kKHt9LGUpLG8pOyhpfHxKLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmdC5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobil9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlJiYobj10LHQ9ZSxlPXZvaWQgMCksdCYmITEhPT1lJiZ0aGlzLnF1ZXVlKGV8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9ITAsaT1udWxsIT1lJiZlK1wicXVldWVIb29rc1wiLG89dy50aW1lcnMsYT1KLmdldCh0aGlzKTtpZihpKWFbaV0mJmFbaV0uc3RvcCYmcihhW2ldKTtlbHNlIGZvcihpIGluIGEpYVtpXSYmYVtpXS5zdG9wJiZvdC50ZXN0KGkpJiZyKGFbaV0pO2ZvcihpPW8ubGVuZ3RoO2ktLTspb1tpXS5lbGVtIT09dGhpc3x8bnVsbCE9ZSYmb1tpXS5xdWV1ZSE9PWV8fChvW2ldLmFuaW0uc3RvcChuKSx0PSExLG8uc3BsaWNlKGksMSkpOyF0JiZufHx3LmRlcXVldWUodGhpcyxlKX0pfSxmaW5pc2g6ZnVuY3Rpb24oZSl7cmV0dXJuITEhPT1lJiYoZT1lfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0LG49Si5nZXQodGhpcykscj1uW2UrXCJxdWV1ZVwiXSxpPW5bZStcInF1ZXVlSG9va3NcIl0sbz13LnRpbWVycyxhPXI/ci5sZW5ndGg6MDtmb3Iobi5maW5pc2g9ITAsdy5xdWV1ZSh0aGlzLGUsW10pLGkmJmkuc3RvcCYmaS5zdG9wLmNhbGwodGhpcywhMCksdD1vLmxlbmd0aDt0LS07KW9bdF0uZWxlbT09PXRoaXMmJm9bdF0ucXVldWU9PT1lJiYob1t0XS5hbmltLnN0b3AoITApLG8uc3BsaWNlKHQsMSkpO2Zvcih0PTA7dDxhO3QrKylyW3RdJiZyW3RdLmZpbmlzaCYmclt0XS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgbi5maW5pc2h9KX19KSx3LmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dy5mblt0XTt3LmZuW3RdPWZ1bmN0aW9uKGUscixpKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP24uYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZSh1dCh0LCEwKSxlLHIsaSl9fSksdy5lYWNoKHtzbGlkZURvd246dXQoXCJzaG93XCIpLHNsaWRlVXA6dXQoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOnV0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSx0KXt3LmZuW2VdPWZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdGhpcy5hbmltYXRlKHQsZSxuLHIpfX0pLHcudGltZXJzPVtdLHcuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPXcudGltZXJzO2ZvcihudD1EYXRlLm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fHcuZnguc3RvcCgpLG50PXZvaWQgMH0sdy5meC50aW1lcj1mdW5jdGlvbihlKXt3LnRpbWVycy5wdXNoKGUpLHcuZnguc3RhcnQoKX0sdy5meC5pbnRlcnZhbD0xMyx3LmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7cnR8fChydD0hMCxhdCgpKX0sdy5meC5zdG9wPWZ1bmN0aW9uKCl7cnQ9bnVsbH0sdy5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sdy5mbi5kZWxheT1mdW5jdGlvbih0LG4pe3JldHVybiB0PXcuZng/dy5meC5zcGVlZHNbdF18fHQ6dCxuPW58fFwiZnhcIix0aGlzLnF1ZXVlKG4sZnVuY3Rpb24obixyKXt2YXIgaT1lLnNldFRpbWVvdXQobix0KTtyLnN0b3A9ZnVuY3Rpb24oKXtlLmNsZWFyVGltZW91dChpKX19KX0sZnVuY3Rpb24oKXt2YXIgZT1yLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0PXIuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChyLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2UudHlwZT1cImNoZWNrYm94XCIsaC5jaGVja09uPVwiXCIhPT1lLnZhbHVlLGgub3B0U2VsZWN0ZWQ9dC5zZWxlY3RlZCwoZT1yLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIsZS50eXBlPVwicmFkaW9cIixoLnJhZGlvVmFsdWU9XCJ0XCI9PT1lLnZhbHVlfSgpO3ZhciBkdCxodD13LmV4cHIuYXR0ckhhbmRsZTt3LmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiB6KHRoaXMsdy5hdHRyLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt3LnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLHcuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT93LnByb3AoZSx0LG4pOigxPT09byYmdy5pc1hNTERvYyhlKXx8KGk9dy5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KHcuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/ZHQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIHcucmVtb3ZlQXR0cihlLHQpOmkmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6bnVsbD09KHI9dy5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCFoLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJk4oZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dCYmdC5tYXRjaChNKTtpZihpJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPWlbcisrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxkdD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/dy5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0sdy5lYWNoKHcuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBuPWh0W3RdfHx3LmZpbmQuYXR0cjtodFt0XT1mdW5jdGlvbihlLHQscil7dmFyIGksbyxhPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gcnx8KG89aHRbYV0saHRbYV09aSxpPW51bGwhPW4oZSx0LHIpP2E6bnVsbCxodFthXT1vKSxpfX0pO3ZhciBndD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLHl0PS9eKD86YXxhcmVhKSQvaTt3LmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiB6KHRoaXMsdy5wcm9wLGUsdCxhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1t3LnByb3BGaXhbZV18fGVdfSl9fSksdy5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZ3LmlzWE1MRG9jKGUpfHwodD13LnByb3BGaXhbdF18fHQsaT13LnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9pJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOmVbdF09bjppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PXcuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTpndC50ZXN0KGUubm9kZU5hbWUpfHx5dC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLGgub3B0U2VsZWN0ZWR8fCh3LnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksdy5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe3cucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTtmdW5jdGlvbiB2dChlKXtyZXR1cm4oZS5tYXRjaChNKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIG10KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiB4dChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlP2UubWF0Y2goTSl8fFtdOltdfXcuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscyx1PTA7aWYoZyhlKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHQpe3codGhpcykuYWRkQ2xhc3MoZS5jYWxsKHRoaXMsdCxtdCh0aGlzKSkpfSk7aWYoKHQ9eHQoZSkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPW10KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK3Z0KGkpK1wiIFwiKXthPTA7d2hpbGUobz10W2ErK10pci5pbmRleE9mKFwiIFwiK28rXCIgXCIpPDAmJihyKz1vK1wiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpLG8sYSxzLHU9MDtpZihnKGUpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24odCl7dyh0aGlzKS5yZW1vdmVDbGFzcyhlLmNhbGwodGhpcyx0LG10KHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZigodD14dChlKSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9bXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPXRbYSsrXSl3aGlsZShyLmluZGV4T2YoXCIgXCIrbytcIiBcIik+LTEpcj1yLnJlcGxhY2UoXCIgXCIrbytcIiBcIixcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihlLHQpe3ZhciBuPXR5cGVvZiBlLHI9XCJzdHJpbmdcIj09PW58fEFycmF5LmlzQXJyYXkoZSk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0JiZyP3Q/dGhpcy5hZGRDbGFzcyhlKTp0aGlzLnJlbW92ZUNsYXNzKGUpOmcoZSk/dGhpcy5lYWNoKGZ1bmN0aW9uKG4pe3codGhpcykudG9nZ2xlQ2xhc3MoZS5jYWxsKHRoaXMsbixtdCh0aGlzKSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0LGksbyxhO2lmKHIpe2k9MCxvPXcodGhpcyksYT14dChlKTt3aGlsZSh0PWFbaSsrXSlvLmhhc0NsYXNzKHQpP28ucmVtb3ZlQ2xhc3ModCk6by5hZGRDbGFzcyh0KX1lbHNlIHZvaWQgMCE9PWUmJlwiYm9vbGVhblwiIT09bnx8KCh0PW10KHRoaXMpKSYmSi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0KSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHR8fCExPT09ZT9cIlwiOkouZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPTA7dD1cIiBcIitlK1wiIFwiO3doaWxlKG49dGhpc1tyKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYoXCIgXCIrdnQobXQobikpK1wiIFwiKS5pbmRleE9mKHQpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBidD0vXFxyL2c7dy5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiByPWcoZSksdGhpcy5lYWNoKGZ1bmN0aW9uKG4pe3ZhciBpOzE9PT10aGlzLm5vZGVUeXBlJiYobnVsbD09KGk9cj9lLmNhbGwodGhpcyxuLHcodGhpcykudmFsKCkpOmUpP2k9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgaT9pKz1cIlwiOkFycmF5LmlzQXJyYXkoaSkmJihpPXcubWFwKGksZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksKHQ9dy52YWxIb29rc1t0aGlzLnR5cGVdfHx3LnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gdCYmdm9pZCAwIT09dC5zZXQodGhpcyxpLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWkpKX0pO2lmKGkpcmV0dXJuKHQ9dy52YWxIb29rc1tpLnR5cGVdfHx3LnZhbEhvb2tzW2kubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gdCYmdm9pZCAwIT09KG49dC5nZXQoaSxcInZhbHVlXCIpKT9uOlwic3RyaW5nXCI9PXR5cGVvZihuPWkudmFsdWUpP24ucmVwbGFjZShidCxcIlwiKTpudWxsPT1uP1wiXCI6bn19fSksdy5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD13LmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDp2dCh3LnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFOKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD13KG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89dy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPXcuaW5BcnJheSh3LnZhbEhvb2tzLm9wdGlvbi5nZXQociksbyk+LTEpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSx3LmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7dy52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPXcuaW5BcnJheSh3KGUpLnZhbCgpLHQpPi0xfX0saC5jaGVja09ufHwody52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSxoLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGU7dmFyIHd0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxUdD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTt3LmV4dGVuZCh3LmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKHQsbixpLG8pe3ZhciBhLHMsdSxsLGMscCxkLGgsdj1baXx8cl0sbT1mLmNhbGwodCxcInR5cGVcIik/dC50eXBlOnQseD1mLmNhbGwodCxcIm5hbWVzcGFjZVwiKT90Lm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYocz1oPXU9aT1pfHxyLDMhPT1pLm5vZGVUeXBlJiY4IT09aS5ub2RlVHlwZSYmIXd0LnRlc3QobSt3LmV2ZW50LnRyaWdnZXJlZCkmJihtLmluZGV4T2YoXCIuXCIpPi0xJiYobT0oeD1tLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSx4LnNvcnQoKSksYz1tLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIittLHQ9dFt3LmV4cGFuZG9dP3Q6bmV3IHcuRXZlbnQobSxcIm9iamVjdFwiPT10eXBlb2YgdCYmdCksdC5pc1RyaWdnZXI9bz8yOjMsdC5uYW1lc3BhY2U9eC5qb2luKFwiLlwiKSx0LnJuYW1lc3BhY2U9dC5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsdC5yZXN1bHQ9dm9pZCAwLHQudGFyZ2V0fHwodC50YXJnZXQ9aSksbj1udWxsPT1uP1t0XTp3Lm1ha2VBcnJheShuLFt0XSksZD13LmV2ZW50LnNwZWNpYWxbbV18fHt9LG98fCFkLnRyaWdnZXJ8fCExIT09ZC50cmlnZ2VyLmFwcGx5KGksbikpKXtpZighbyYmIWQubm9CdWJibGUmJiF5KGkpKXtmb3IobD1kLmRlbGVnYXRlVHlwZXx8bSx3dC50ZXN0KGwrbSl8fChzPXMucGFyZW50Tm9kZSk7cztzPXMucGFyZW50Tm9kZSl2LnB1c2gocyksdT1zO3U9PT0oaS5vd25lckRvY3VtZW50fHxyKSYmdi5wdXNoKHUuZGVmYXVsdFZpZXd8fHUucGFyZW50V2luZG93fHxlKX1hPTA7d2hpbGUoKHM9dlthKytdKSYmIXQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSloPXMsdC50eXBlPWE+MT9sOmQuYmluZFR5cGV8fG0sKHA9KEouZ2V0KHMsXCJldmVudHNcIil8fHt9KVt0LnR5cGVdJiZKLmdldChzLFwiaGFuZGxlXCIpKSYmcC5hcHBseShzLG4pLChwPWMmJnNbY10pJiZwLmFwcGx5JiZZKHMpJiYodC5yZXN1bHQ9cC5hcHBseShzLG4pLCExPT09dC5yZXN1bHQmJnQucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIHQudHlwZT1tLG98fHQuaXNEZWZhdWx0UHJldmVudGVkKCl8fGQuX2RlZmF1bHQmJiExIT09ZC5fZGVmYXVsdC5hcHBseSh2LnBvcCgpLG4pfHwhWShpKXx8YyYmZyhpW21dKSYmIXkoaSkmJigodT1pW2NdKSYmKGlbY109bnVsbCksdy5ldmVudC50cmlnZ2VyZWQ9bSx0LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmguYWRkRXZlbnRMaXN0ZW5lcihtLFR0KSxpW21dKCksdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZoLnJlbW92ZUV2ZW50TGlzdGVuZXIobSxUdCksdy5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLHUmJihpW2NdPXUpKSx0LnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj13LmV4dGVuZChuZXcgdy5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTt3LmV2ZW50LnRyaWdnZXIocixudWxsLHQpfX0pLHcuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3cuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIHcuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSksaC5mb2N1c2lufHx3LmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKGUpe3cuZXZlbnQuc2ltdWxhdGUodCxlLnRhcmdldCx3LmV2ZW50LmZpeChlKSl9O3cuZXZlbnQuc3BlY2lhbFt0XT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgcj10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsaT1KLmFjY2VzcyhyLHQpO2l8fHIuYWRkRXZlbnRMaXN0ZW5lcihlLG4sITApLEouYWNjZXNzKHIsdCwoaXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIHI9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGk9Si5hY2Nlc3Mocix0KS0xO2k/Si5hY2Nlc3Mocix0LGkpOihyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuLCEwKSxKLnJlbW92ZShyLHQpKX19fSk7dmFyIEN0PWUubG9jYXRpb24sRXQ9RGF0ZS5ub3coKSxrdD0vXFw/Lzt3LnBhcnNlWE1MPWZ1bmN0aW9uKHQpe3ZhciBuO2lmKCF0fHxcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbnVsbDt0cnl7bj0obmV3IGUuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodCxcInRleHQveG1sXCIpfWNhdGNoKGUpe249dm9pZCAwfXJldHVybiBuJiYhbi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8dy5lcnJvcihcIkludmFsaWQgWE1MOiBcIit0KSxufTt2YXIgU3Q9L1xcW1xcXSQvLER0PS9cXHI/XFxuL2csTnQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLEF0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBqdChlLHQsbixyKXt2YXIgaTtpZihBcnJheS5pc0FycmF5KHQpKXcuZWFjaCh0LGZ1bmN0aW9uKHQsaSl7bnx8U3QudGVzdChlKT9yKGUsaSk6anQoZStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGkmJm51bGwhPWk/dDpcIlwiKStcIl1cIixpLG4scil9KTtlbHNlIGlmKG58fFwib2JqZWN0XCIhPT14KHQpKXIoZSx0KTtlbHNlIGZvcihpIGluIHQpanQoZStcIltcIitpK1wiXVwiLHRbaV0sbixyKX13LnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49Zyh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiF3LmlzUGxhaW5PYmplY3QoZSkpdy5lYWNoKGUsZnVuY3Rpb24oKXtpKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlqdChuLGVbbl0sdCxpKTtyZXR1cm4gci5qb2luKFwiJlwiKX0sdy5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiB3LnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dy5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT93Lm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiF3KHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZBdC50ZXN0KHRoaXMubm9kZU5hbWUpJiYhTnQudGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IXBlLnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49dyh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/dy5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKER0LFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2UoRHQsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIHF0PS8lMjAvZyxMdD0vIy4qJC8sSHQ9LyhbPyZdKV89W14mXSovLE90PS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sUHQ9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sTXQ9L14oPzpHRVR8SEVBRCkkLyxSdD0vXlxcL1xcLy8sSXQ9e30sV3Q9e30sJHQ9XCIqL1wiLmNvbmNhdChcIipcIiksQnQ9ci5jcmVhdGVFbGVtZW50KFwiYVwiKTtCdC5ocmVmPUN0LmhyZWY7ZnVuY3Rpb24gRnQoZSl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIiE9dHlwZW9mIHQmJihuPXQsdD1cIipcIik7dmFyIHIsaT0wLG89dC50b0xvd2VyQ2FzZSgpLm1hdGNoKE0pfHxbXTtpZihnKG4pKXdoaWxlKHI9b1tpKytdKVwiK1wiPT09clswXT8ocj1yLnNsaWNlKDEpfHxcIipcIiwoZVtyXT1lW3JdfHxbXSkudW5zaGlmdChuKSk6KGVbcl09ZVtyXXx8W10pLnB1c2gobil9fWZ1bmN0aW9uIF90KGUsdCxuLHIpe3ZhciBpPXt9LG89ZT09PVd0O2Z1bmN0aW9uIGEocyl7dmFyIHU7cmV0dXJuIGlbc109ITAsdy5lYWNoKGVbc118fFtdLGZ1bmN0aW9uKGUscyl7dmFyIGw9cyh0LG4scik7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGx8fG98fGlbbF0/bz8hKHU9bCk6dm9pZCAwOih0LmRhdGFUeXBlcy51bnNoaWZ0KGwpLGEobCksITEpfSksdX1yZXR1cm4gYSh0LmRhdGFUeXBlc1swXSl8fCFpW1wiKlwiXSYmYShcIipcIil9ZnVuY3Rpb24genQoZSx0KXt2YXIgbixyLGk9dy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmdy5leHRlbmQoITAsZSxyKSxlfWZ1bmN0aW9uIFh0KGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuY29udGVudHMsdT1lLmRhdGFUeXBlczt3aGlsZShcIipcIj09PXVbMF0pdS5zaGlmdCgpLHZvaWQgMD09PXImJihyPWUubWltZVR5cGV8fHQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKHIpZm9yKGkgaW4gcylpZihzW2ldJiZzW2ldLnRlc3Qocikpe3UudW5zaGlmdChpKTticmVha31pZih1WzBdaW4gbilvPXVbMF07ZWxzZXtmb3IoaSBpbiBuKXtpZighdVswXXx8ZS5jb252ZXJ0ZXJzW2krXCIgXCIrdVswXV0pe289aTticmVha31hfHwoYT1pKX1vPW98fGF9aWYobylyZXR1cm4gbyE9PXVbMF0mJnUudW5zaGlmdChvKSxuW29dfWZ1bmN0aW9uIFV0KGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD17fSxjPWUuZGF0YVR5cGVzLnNsaWNlKCk7aWYoY1sxXSlmb3IoYSBpbiBlLmNvbnZlcnRlcnMpbFthLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1thXTtvPWMuc2hpZnQoKTt3aGlsZShvKWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlW1widGhyb3dzXCJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjphP2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrdStcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19dy5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOkN0LmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6UHQudGVzdChDdC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6JHQsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOncucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0P3p0KHp0KGUsdy5hamF4U2V0dGluZ3MpLHQpOnp0KHcuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkZ0KEl0KSxhamF4VHJhbnNwb3J0OkZ0KFd0KSxhamF4OmZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIHQmJihuPXQsdD12b2lkIDApLG49bnx8e307dmFyIGksbyxhLHMsdSxsLGMsZixwLGQsaD13LmFqYXhTZXR1cCh7fSxuKSxnPWguY29udGV4dHx8aCx5PWguY29udGV4dCYmKGcubm9kZVR5cGV8fGcuanF1ZXJ5KT93KGcpOncuZXZlbnQsdj13LkRlZmVycmVkKCksbT13LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHg9aC5zdGF0dXNDb2RlfHx7fSxiPXt9LFQ9e30sQz1cImNhbmNlbGVkXCIsRT17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGMpe2lmKCFzKXtzPXt9O3doaWxlKHQ9T3QuZXhlYyhhKSlzW3RbMV0udG9Mb3dlckNhc2UoKV09dFsyXX10PXNbZS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09dD9udWxsOnR9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBjP2E6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1jJiYoZT1UW2UudG9Mb3dlckNhc2UoKV09VFtlLnRvTG93ZXJDYXNlKCldfHxlLGJbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09YyYmKGgubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGMpRS5hbHdheXMoZVtFLnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl4W3RdPVt4W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHxDO3JldHVybiBpJiZpLmFib3J0KHQpLGsoMCx0KSx0aGlzfX07aWYodi5wcm9taXNlKEUpLGgudXJsPSgodHx8aC51cmx8fEN0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUnQsQ3QucHJvdG9jb2wrXCIvL1wiKSxoLnR5cGU9bi5tZXRob2R8fG4udHlwZXx8aC5tZXRob2R8fGgudHlwZSxoLmRhdGFUeXBlcz0oaC5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goTSl8fFtcIlwiXSxudWxsPT1oLmNyb3NzRG9tYWluKXtsPXIuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2wuaHJlZj1oLnVybCxsLmhyZWY9bC5ocmVmLGguY3Jvc3NEb21haW49QnQucHJvdG9jb2wrXCIvL1wiK0J0Lmhvc3QhPWwucHJvdG9jb2wrXCIvL1wiK2wuaG9zdH1jYXRjaChlKXtoLmNyb3NzRG9tYWluPSEwfX1pZihoLmRhdGEmJmgucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBoLmRhdGEmJihoLmRhdGE9dy5wYXJhbShoLmRhdGEsaC50cmFkaXRpb25hbCkpLF90KEl0LGgsbixFKSxjKXJldHVybiBFOyhmPXcuZXZlbnQmJmguZ2xvYmFsKSYmMD09dy5hY3RpdmUrKyYmdy5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLGgudHlwZT1oLnR5cGUudG9VcHBlckNhc2UoKSxoLmhhc0NvbnRlbnQ9IU10LnRlc3QoaC50eXBlKSxvPWgudXJsLnJlcGxhY2UoTHQsXCJcIiksaC5oYXNDb250ZW50P2guZGF0YSYmaC5wcm9jZXNzRGF0YSYmMD09PShoLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYoaC5kYXRhPWguZGF0YS5yZXBsYWNlKHF0LFwiK1wiKSk6KGQ9aC51cmwuc2xpY2Uoby5sZW5ndGgpLGguZGF0YSYmKGgucHJvY2Vzc0RhdGF8fFwic3RyaW5nXCI9PXR5cGVvZiBoLmRhdGEpJiYobys9KGt0LnRlc3Qobyk/XCImXCI6XCI/XCIpK2guZGF0YSxkZWxldGUgaC5kYXRhKSwhMT09PWguY2FjaGUmJihvPW8ucmVwbGFjZShIdCxcIiQxXCIpLGQ9KGt0LnRlc3Qobyk/XCImXCI6XCI/XCIpK1wiXz1cIitFdCsrK2QpLGgudXJsPW8rZCksaC5pZk1vZGlmaWVkJiYody5sYXN0TW9kaWZpZWRbb10mJkUuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsdy5sYXN0TW9kaWZpZWRbb10pLHcuZXRhZ1tvXSYmRS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLHcuZXRhZ1tvXSkpLChoLmRhdGEmJmguaGFzQ29udGVudCYmITEhPT1oLmNvbnRlbnRUeXBlfHxuLmNvbnRlbnRUeXBlKSYmRS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsaC5jb250ZW50VHlwZSksRS5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsaC5kYXRhVHlwZXNbMF0mJmguYWNjZXB0c1toLmRhdGFUeXBlc1swXV0/aC5hY2NlcHRzW2guZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1oLmRhdGFUeXBlc1swXT9cIiwgXCIrJHQrXCI7IHE9MC4wMVwiOlwiXCIpOmguYWNjZXB0c1tcIipcIl0pO2ZvcihwIGluIGguaGVhZGVycylFLnNldFJlcXVlc3RIZWFkZXIocCxoLmhlYWRlcnNbcF0pO2lmKGguYmVmb3JlU2VuZCYmKCExPT09aC5iZWZvcmVTZW5kLmNhbGwoZyxFLGgpfHxjKSlyZXR1cm4gRS5hYm9ydCgpO2lmKEM9XCJhYm9ydFwiLG0uYWRkKGguY29tcGxldGUpLEUuZG9uZShoLnN1Y2Nlc3MpLEUuZmFpbChoLmVycm9yKSxpPV90KFd0LGgsbixFKSl7aWYoRS5yZWFkeVN0YXRlPTEsZiYmeS50cmlnZ2VyKFwiYWpheFNlbmRcIixbRSxoXSksYylyZXR1cm4gRTtoLmFzeW5jJiZoLnRpbWVvdXQ+MCYmKHU9ZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7RS5hYm9ydChcInRpbWVvdXRcIil9LGgudGltZW91dCkpO3RyeXtjPSExLGkuc2VuZChiLGspfWNhdGNoKGUpe2lmKGMpdGhyb3cgZTtrKC0xLGUpfX1lbHNlIGsoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gayh0LG4scixzKXt2YXIgbCxwLGQsYixULEM9bjtjfHwoYz0hMCx1JiZlLmNsZWFyVGltZW91dCh1KSxpPXZvaWQgMCxhPXN8fFwiXCIsRS5yZWFkeVN0YXRlPXQ+MD80OjAsbD10Pj0yMDAmJnQ8MzAwfHwzMDQ9PT10LHImJihiPVh0KGgsRSxyKSksYj1VdChoLGIsRSxsKSxsPyhoLmlmTW9kaWZpZWQmJigoVD1FLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkmJih3Lmxhc3RNb2RpZmllZFtvXT1UKSwoVD1FLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSkmJih3LmV0YWdbb109VCkpLDIwND09PXR8fFwiSEVBRFwiPT09aC50eXBlP0M9XCJub2NvbnRlbnRcIjozMDQ9PT10P0M9XCJub3Rtb2RpZmllZFwiOihDPWIuc3RhdGUscD1iLmRhdGEsbD0hKGQ9Yi5lcnJvcikpKTooZD1DLCF0JiZDfHwoQz1cImVycm9yXCIsdDwwJiYodD0wKSkpLEUuc3RhdHVzPXQsRS5zdGF0dXNUZXh0PShufHxDKStcIlwiLGw/di5yZXNvbHZlV2l0aChnLFtwLEMsRV0pOnYucmVqZWN0V2l0aChnLFtFLEMsZF0pLEUuc3RhdHVzQ29kZSh4KSx4PXZvaWQgMCxmJiZ5LnRyaWdnZXIobD9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbRSxoLGw/cDpkXSksbS5maXJlV2l0aChnLFtFLENdKSxmJiYoeS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW0UsaF0pLC0tdy5hY3RpdmV8fHcuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIEV9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB3LmdldChlLHQsbixcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiB3LmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLHcuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSx0KXt3W3RdPWZ1bmN0aW9uKGUsbixyLGkpe3JldHVybiBnKG4pJiYoaT1pfHxyLHI9bixuPXZvaWQgMCksdy5hamF4KHcuZXh0ZW5kKHt1cmw6ZSx0eXBlOnQsZGF0YVR5cGU6aSxkYXRhOm4sc3VjY2VzczpyfSx3LmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSx3Ll9ldmFsVXJsPWZ1bmN0aW9uKGUpe3JldHVybiB3LmFqYXgoe3VybDplLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LHcuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYoZyhlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PXcoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKGUpe3JldHVybiBnKGUpP3RoaXMuZWFjaChmdW5jdGlvbih0KXt3KHRoaXMpLndyYXBJbm5lcihlLmNhbGwodGhpcyx0KSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgdD13KHRoaXMpLG49dC5jb250ZW50cygpO24ubGVuZ3RoP24ud3JhcEFsbChlKTp0LmFwcGVuZChlKX0pfSx3cmFwOmZ1bmN0aW9uKGUpe3ZhciB0PWcoZSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihuKXt3KHRoaXMpLndyYXBBbGwodD9lLmNhbGwodGhpcyxuKTplKX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe3codGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksdy5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiF3LmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSx3LmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiEhKGUub2Zmc2V0V2lkdGh8fGUub2Zmc2V0SGVpZ2h0fHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sdy5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgZS5YTUxIdHRwUmVxdWVzdH1jYXRjaChlKXt9fTt2YXIgVnQ9ezA6MjAwLDEyMjM6MjA0fSxHdD13LmFqYXhTZXR0aW5ncy54aHIoKTtoLmNvcnM9ISFHdCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIEd0LGguYWpheD1HdD0hIUd0LHcuYWpheFRyYW5zcG9ydChmdW5jdGlvbih0KXt2YXIgbixyO2lmKGguY29yc3x8R3QmJiF0LmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGksbyl7dmFyIGEscz10LnhocigpO2lmKHMub3Blbih0LnR5cGUsdC51cmwsdC5hc3luYyx0LnVzZXJuYW1lLHQucGFzc3dvcmQpLHQueGhyRmllbGRzKWZvcihhIGluIHQueGhyRmllbGRzKXNbYV09dC54aHJGaWVsZHNbYV07dC5taW1lVHlwZSYmcy5vdmVycmlkZU1pbWVUeXBlJiZzLm92ZXJyaWRlTWltZVR5cGUodC5taW1lVHlwZSksdC5jcm9zc0RvbWFpbnx8aVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChpW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihhIGluIGkpcy5zZXRSZXF1ZXN0SGVhZGVyKGEsaVthXSk7bj1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtuJiYobj1yPXMub25sb2FkPXMub25lcnJvcj1zLm9uYWJvcnQ9cy5vbnRpbWVvdXQ9cy5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3MuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiBzLnN0YXR1cz9vKDAsXCJlcnJvclwiKTpvKHMuc3RhdHVzLHMuc3RhdHVzVGV4dCk6byhWdFtzLnN0YXR1c118fHMuc3RhdHVzLHMuc3RhdHVzVGV4dCxcInRleHRcIiE9PShzLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygcy5yZXNwb25zZVRleHQ/e2JpbmFyeTpzLnJlc3BvbnNlfTp7dGV4dDpzLnJlc3BvbnNlVGV4dH0scy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0scy5vbmxvYWQ9bigpLHI9cy5vbmVycm9yPXMub250aW1lb3V0PW4oXCJlcnJvclwiKSx2b2lkIDAhPT1zLm9uYWJvcnQ/cy5vbmFib3J0PXI6cy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09cy5yZWFkeVN0YXRlJiZlLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtuJiZyKCl9KX0sbj1uKFwiYWJvcnRcIik7dHJ5e3Muc2VuZCh0Lmhhc0NvbnRlbnQmJnQuZGF0YXx8bnVsbCl9Y2F0Y2goZSl7aWYobil0aHJvdyBlfX0sYWJvcnQ6ZnVuY3Rpb24oKXtuJiZuKCl9fX0pLHcuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXtlLmNyb3NzRG9tYWluJiYoZS5jb250ZW50cy5zY3JpcHQ9ITEpfSksdy5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIHcuZ2xvYmFsRXZhbChlKSxlfX19KSx3LmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pLHcuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe2lmKGUuY3Jvc3NEb21haW4pe3ZhciB0LG47cmV0dXJue3NlbmQ6ZnVuY3Rpb24oaSxvKXt0PXcoXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmUuc2NyaXB0Q2hhcnNldCxzcmM6ZS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixuPWZ1bmN0aW9uKGUpe3QucmVtb3ZlKCksbj1udWxsLGUmJm8oXCJlcnJvclwiPT09ZS50eXBlPzQwNDoyMDAsZS50eXBlKX0pLHIuaGVhZC5hcHBlbmRDaGlsZCh0WzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtuJiZuKCl9fX19KTt2YXIgWXQ9W10sUXQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/Lzt3LmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1ZdC5wb3AoKXx8dy5leHBhbmRvK1wiX1wiK0V0Kys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSx3LmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24odCxuLHIpe3ZhciBpLG8sYSxzPSExIT09dC5qc29ucCYmKFF0LnRlc3QodC51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIHQuZGF0YSYmMD09PSh0LmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZRdC50ZXN0KHQuZGF0YSkmJlwiZGF0YVwiKTtpZihzfHxcImpzb25wXCI9PT10LmRhdGFUeXBlc1swXSlyZXR1cm4gaT10Lmpzb25wQ2FsbGJhY2s9Zyh0Lmpzb25wQ2FsbGJhY2spP3QuanNvbnBDYWxsYmFjaygpOnQuanNvbnBDYWxsYmFjayxzP3Rbc109dFtzXS5yZXBsYWNlKFF0LFwiJDFcIitpKTohMSE9PXQuanNvbnAmJih0LnVybCs9KGt0LnRlc3QodC51cmwpP1wiJlwiOlwiP1wiKSt0Lmpzb25wK1wiPVwiK2kpLHQuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGF8fHcuZXJyb3IoaStcIiB3YXMgbm90IGNhbGxlZFwiKSxhWzBdfSx0LmRhdGFUeXBlc1swXT1cImpzb25cIixvPWVbaV0sZVtpXT1mdW5jdGlvbigpe2E9YXJndW1lbnRzfSxyLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PW8/dyhlKS5yZW1vdmVQcm9wKGkpOmVbaV09byx0W2ldJiYodC5qc29ucENhbGxiYWNrPW4uanNvbnBDYWxsYmFjayxZdC5wdXNoKGkpKSxhJiZnKG8pJiZvKGFbMF0pLGE9bz12b2lkIDB9KSxcInNjcmlwdFwifSksaC5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgZT1yLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBlLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWUuY2hpbGROb2Rlcy5sZW5ndGh9KCksdy5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybltdO1wiYm9vbGVhblwiPT10eXBlb2YgdCYmKG49dCx0PSExKTt2YXIgaSxvLGE7cmV0dXJuIHR8fChoLmNyZWF0ZUhUTUxEb2N1bWVudD8oKGk9KHQ9ci5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikpLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKS5ocmVmPXIubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQoaSkpOnQ9ciksbz1BLmV4ZWMoZSksYT0hbiYmW10sbz9bdC5jcmVhdGVFbGVtZW50KG9bMV0pXToobz14ZShbZV0sdCxhKSxhJiZhLmxlbmd0aCYmdyhhKS5yZW1vdmUoKSx3Lm1lcmdlKFtdLG8uY2hpbGROb2RlcykpfSx3LmZuLmxvYWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPXRoaXMscz1lLmluZGV4T2YoXCIgXCIpO3JldHVybiBzPi0xJiYocj12dChlLnNsaWNlKHMpKSxlPWUuc2xpY2UoMCxzKSksZyh0KT8obj10LHQ9dm9pZCAwKTp0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmKGk9XCJQT1NUXCIpLGEubGVuZ3RoPjAmJncuYWpheCh7dXJsOmUsdHlwZTppfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/dyhcIjxkaXY+XCIpLmFwcGVuZCh3LnBhcnNlSFRNTChlKSkuZmluZChyKTplKX0pLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaChmdW5jdGlvbigpe24uYXBwbHkodGhpcyxvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KX0pLHRoaXN9LHcuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7dy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLHcuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKGUpe3JldHVybiB3LmdyZXAody50aW1lcnMsZnVuY3Rpb24odCl7cmV0dXJuIGU9PT10LmVsZW19KS5sZW5ndGh9LHcub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9dy5jc3MoZSxcInBvc2l0aW9uXCIpLGY9dyhlKSxwPXt9O1wic3RhdGljXCI9PT1jJiYoZS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLHM9Zi5vZmZzZXQoKSxvPXcuY3NzKGUsXCJ0b3BcIiksdT13LmNzcyhlLFwibGVmdFwiKSwobD0oXCJhYnNvbHV0ZVwiPT09Y3x8XCJmaXhlZFwiPT09YykmJihvK3UpLmluZGV4T2YoXCJhdXRvXCIpPi0xKT8oYT0ocj1mLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLGcodCkmJih0PXQuY2FsbChlLG4sdy5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKHAudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKHAubGVmdD10LmxlZnQtcy5sZWZ0K2kpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUscCk6Zi5jc3MocCl9fSx3LmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGUpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWU/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24odCl7dy5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsZSx0KX0pO3ZhciB0LG4scj10aGlzWzBdO2lmKHIpcmV0dXJuIHIuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KHQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyx7dG9wOnQudG9wK24ucGFnZVlPZmZzZXQsbGVmdDp0LmxlZnQrbi5wYWdlWE9mZnNldH0pOnt0b3A6MCxsZWZ0OjB9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT13LmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09dy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPXcoZSkub2Zmc2V0KCkpLnRvcCs9dy5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9dy5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC13LmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC13LmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09dy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fGJlfSl9fSksdy5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihlLHQpe3ZhciBuPVwicGFnZVlPZmZzZXRcIj09PXQ7dy5mbltlXT1mdW5jdGlvbihyKXtyZXR1cm4geih0aGlzLGZ1bmN0aW9uKGUscixpKXt2YXIgbztpZih5KGUpP289ZTo5PT09ZS5ub2RlVHlwZSYmKG89ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09aSlyZXR1cm4gbz9vW3RdOmVbcl07bz9vLnNjcm9sbFRvKG4/by5wYWdlWE9mZnNldDppLG4/aTpvLnBhZ2VZT2Zmc2V0KTplW3JdPWl9LGUscixhcmd1bWVudHMubGVuZ3RoKX19KSx3LmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsdCl7dy5jc3NIb29rc1t0XT1fZShoLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSxuKXtpZihuKXJldHVybiBuPUZlKGUsdCksV2UudGVzdChuKT93KGUpLnBvc2l0aW9uKClbdF0rXCJweFwiOm59KX0pLHcuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihlLHQpe3cuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrZSxjb250ZW50OnQsXCJcIjpcIm91dGVyXCIrZX0sZnVuY3Rpb24obixyKXt3LmZuW3JdPWZ1bmN0aW9uKGksbyl7dmFyIGE9YXJndW1lbnRzLmxlbmd0aCYmKG58fFwiYm9vbGVhblwiIT10eXBlb2YgaSkscz1ufHwoITA9PT1pfHwhMD09PW8/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4geih0aGlzLGZ1bmN0aW9uKHQsbixpKXt2YXIgbztyZXR1cm4geSh0KT8wPT09ci5pbmRleE9mKFwib3V0ZXJcIik/dFtcImlubmVyXCIrZV06dC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIitlXTo5PT09dC5ub2RlVHlwZT8obz10LmRvY3VtZW50RWxlbWVudCxNYXRoLm1heCh0LmJvZHlbXCJzY3JvbGxcIitlXSxvW1wic2Nyb2xsXCIrZV0sdC5ib2R5W1wib2Zmc2V0XCIrZV0sb1tcIm9mZnNldFwiK2VdLG9bXCJjbGllbnRcIitlXSkpOnZvaWQgMD09PWk/dy5jc3ModCxuLHMpOncuc3R5bGUodCxuLGkscyl9LHQsYT9pOnZvaWQgMCxhKX19KX0pLHcuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXt3LmZuW3RdPWZ1bmN0aW9uKGUsbil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKHQsbnVsbCxlLG4pOnRoaXMudHJpZ2dlcih0KX19KSx3LmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksdy5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX19KSx3LnByb3h5PWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1lW3RdLHQ9ZSxlPW4pLGcoZSkpcmV0dXJuIHI9by5jYWxsKGFyZ3VtZW50cywyKSxpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodHx8dGhpcyxyLmNvbmNhdChvLmNhbGwoYXJndW1lbnRzKSkpfSxpLmd1aWQ9ZS5ndWlkPWUuZ3VpZHx8dy5ndWlkKyssaX0sdy5ob2xkUmVhZHk9ZnVuY3Rpb24oZSl7ZT93LnJlYWR5V2FpdCsrOncucmVhZHkoITApfSx3LmlzQXJyYXk9QXJyYXkuaXNBcnJheSx3LnBhcnNlSlNPTj1KU09OLnBhcnNlLHcubm9kZU5hbWU9Tix3LmlzRnVuY3Rpb249Zyx3LmlzV2luZG93PXksdy5jYW1lbENhc2U9Ryx3LnR5cGU9eCx3Lm5vdz1EYXRlLm5vdyx3LmlzTnVtZXJpYz1mdW5jdGlvbihlKXt2YXIgdD13LnR5cGUoZSk7cmV0dXJuKFwibnVtYmVyXCI9PT10fHxcInN0cmluZ1wiPT09dCkmJiFpc05hTihlLXBhcnNlRmxvYXQoZSkpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHd9KTt2YXIgSnQ9ZS5qUXVlcnksS3Q9ZS4kO3JldHVybiB3Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGUuJD09PXcmJihlLiQ9S3QpLHQmJmUualF1ZXJ5PT09dyYmKGUualF1ZXJ5PUp0KSx3fSx0fHwoZS5qUXVlcnk9ZS4kPXcpLHd9KTsiLCJpbXBvcnQgJCBmcm9tICcuL2pxdWVyeS5qcydcblxuLy/lj5bmtojmu5rliqjkuovku7blkozmgaLlpI3mu5rliqjkuovku7ZcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcbiAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyAgLy/lhbzlrrlpZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gIHdpbmRvdy5vbndoZWVsID0gcHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gcHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICB3aW5kb3cub250b3VjaG1vdmUgID0gcHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICBkb2N1bWVudC5vbmtleWRvd24gID0gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xufVxuXG5mdW5jdGlvbiBlbmFibGVTY3JvbGwoKSB7XG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7ICBcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsOyAgXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3RvciAoKSB7fVxuU2VsZWN0b3IucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoZWxlKSB7XG5cdHZhciBsID0gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgICAvL+iOt+WPluebuOWvueS6jua1j+iniOWZqOWdkOS4iuinkuWdkOagh1xuXHR2YXIgdCA9IGVsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Bcblx0dmFyIGggPSBlbGUub2Zmc2V0SGVpZ2h0ICAgLy/lhYPntKDnmoTpq5jluqZcblx0dmFyIGFyciA9IFtdLnNsaWNlLmNhbGwoJCgnLm1pa2ktc2VsZWN0X19pdGVtJykpXG5cdHZhciAkbWlraV9zZWxlY3QgPSAkKCcubWlraS1zZWxlY3QnKVxuXHR2YXIgJG1hdHRlID0gJCgnPGRpdiBjbGFzcz1cIm15LW1hdHRlXCI+PC9kaXY+Jylcblx0Ly/orqHnrpfpgInmi6nlmajlh7rnjrDnmoTkvY3nva5cblx0aWYgKGVsZS52YWx1ZSkge1xuXHRcdGFyci5mb3JFYWNoKChlLCBpKSA9PiB7XG5cdFx0XHQkKGUpLnJlbW92ZUNsYXNzKCdtaWtpLXNlbGVjdF9faXRlbS1hY3RpdmUnKVxuXHRcdFx0aWYgKGUuaW5uZXJIVE1MID09PSBlbGUudmFsdWUpIHtcblx0XHRcdFx0JChlKS5hZGRDbGFzcygnbWlraS1zZWxlY3RfX2l0ZW0tYWN0aXZlJylcblx0XHRcdFx0aWYgKGkgPT09IDApIHJldHVyblxuXHRcdFx0XHR0IC09IGkgKiA0MCAgICAgLy80MOaYr3NlbGVjdG9y5Lit5q+P5LiA5Liq6YCJ6aG555qE6auY5bqmXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHQkbWlraV9zZWxlY3QuZGF0YSgnb3JpZ2luX3QnLCB0KSAgICAvL+aKiumAieaLqeWZqOWOn+Wni+eahHRvcOS9jee9rue7keWumuWIsOWFg+e0oOS4iumdoizmlrnkvr/ku6XlkI7kvb/nlKhcblxuXHQkKCcubXktbWF0dGUnKS5yZW1vdmUoKSAgICAgICAgIC8v56e76Zmk5Y+v6IO95bey57uP5a2Y5Zyo55qE6YGu572p5bGCXG5cdCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKCRtYXR0ZSlcblx0JG1hdHRlLnNob3coKVxuXHQkbWF0dGUuYW5pbWF0ZSh7b3BhY2l0eTogMX0pXG5cdC8v5aaC5p6c5rWP6KeI5Zmo55qE6auY5bqm5LiN5aSfLOmHjeaWsOiwg+aVtOmAieaLqeWZqOeahOS9jee9rlxuXHRpZiAoJCh3aW5kb3cpLmhlaWdodCgpIDw9IHQgKyAkbWlraV9zZWxlY3QuaGVpZ2h0KCkpIHtcblx0XHR0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gJG1pa2lfc2VsZWN0LmhlaWdodCgpIC0gMzAgICAvLzMw5piv6Ieq5a6a5LmJ55qEc2VsZWN0b3Lot53mtY/op4jlmajlupXpg6jnmoTpq5jluqZcblx0fVxuXHQkbWlraV9zZWxlY3QuY3NzKHt0b3A6IHQgKyAncHgnLCBsZWZ0OiBsICsgJ3B4J30pXG5cdCRtaWtpX3NlbGVjdC5hZGRDbGFzcygnbWlraS1zZWxlY3RfX2FjdGl2ZScpXG5cdGJpbmRFdmVudCgpXG5cdGRpc2FibGVTY3JvbGwoKVxuXHRmdW5jdGlvbiBiaW5kRXZlbnQgKCkge1xuXHRcdCRtaWtpX3NlbGVjdC5vZmYoJ2NsaWNrJylcblx0XHQkbWF0dGUub2ZmKCdjbGljaycpXG5cdFx0JG1pa2lfc2VsZWN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xuXHRcdFx0dmFyIHRhcmdldCA9IGV2LnRhcmdldFxuXHRcdFx0ZWxlLnZhbHVlID0gdGFyZ2V0LmlubmVySFRNTFxuXHRcdFx0JG1pa2lfc2VsZWN0LnJlbW92ZUNsYXNzKCdtaWtpLXNlbGVjdF9fYWN0aXZlJylcblx0XHRcdCRtYXR0ZS5oaWRlKClcblx0XHRcdGVsZS52YWx1ZSA9IHRhcmdldC5pbm5lckhUTUxcblx0XHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeClcblx0XHRcdGVuYWJsZVNjcm9sbCgpXG5cdFx0fSlcblx0XHQkbWF0dGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JG1pa2lfc2VsZWN0LnJlbW92ZUNsYXNzKCdtaWtpLXNlbGVjdF9fYWN0aXZlJylcblx0XHRcdCRtYXR0ZS5oaWRlKClcblx0XHRcdHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeClcblx0XHRcdGVuYWJsZVNjcm9sbCgpXG5cdFx0fSlcblx0XHRmdW5jdGlvbiBmaXggKCkge1xuXHRcdFx0dmFyICR0YXJnZXQgPSAkKCcubWlraS1zZWxlY3QnKVxuXHRcdFx0dmFyIHdpbmRvd19oID0gJCh3aW5kb3cpLmhlaWdodCgpXG5cdFx0XHR2YXIgdGFyZ2V0X2ggPSAkdGFyZ2V0LmhlaWdodCgpXG5cdFx0XHR2YXIgb3JpZ2luX3QgPSAkdGFyZ2V0LmRhdGEoJ29yaWdpbl90JylcblxuXHRcdFx0aWYgKG9yaWdpbl90ICsgdGFyZ2V0X2ggPj0gd2luZG93X2gpIHtcblx0XHRcdFx0ICR0YXJnZXQuY3NzKHt0b3A6IHdpbmRvd19oIC0gMzAgLSB0YXJnZXRfaCArICdweCd9KSBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0YXJnZXQuY3NzKHt0b3A6IG9yaWdpbl90ICsgJ3B4J30pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZ1bmN0aW9uIF90aHJvdHRsZShmbix3YWl0LHRpbWUpe1xuXHRcdCAgICB2YXIgcHJldmlvdXMgPSBudWxsOyAvL+iusOW9leS4iuS4gOasoei/kOihjOeahOaXtumXtFxuXHRcdCAgICB2YXIgdGltZXIgPSBudWxsO1xuXHRcdCAgICByZXR1cm4gZnVuY3Rpb24oKXtcblx0XHQgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdCAgICAgICAgaWYoIXByZXZpb3VzKSBwcmV2aW91cyA9IG5vdztcblx0XHQgICAgICAgIC8v5b2T5LiK5LiA5qyh5omn6KGM55qE5pe26Ze05LiO5b2T5YmN55qE5pe26Ze05beu5aSn5LqO6K6+572u55qE5omn6KGM6Ze06ZqU5pe26ZW/55qE6K+d77yM5bCx5Li75Yqo5omn6KGM5LiA5qyhXG5cdFx0ICAgICAgICBpZihub3cgLSBwcmV2aW91cyA+IHRpbWUpe1xuXHRcdCAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0ICAgICAgICAgICAgZm4oKTtcblx0XHQgICAgICAgICAgICBwcmV2aW91cyA9IG5vdzsvLyDmiafooYzlh73mlbDlkI7vvIzpqazkuIrorrDlvZXlvZPliY3ml7bpl7Rcblx0XHQgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0ICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0ICAgICAgICAgICAgICAgIGZuKCk7XG5cdFx0ICAgICAgICAgICAgfSx3YWl0KTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgfVxuXHRcdH1cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX3Rocm90dGxlKGZpeCw1MDAsMTAwMCkpXG5cdH1cbn0iLCIvL+iLpea2iOaBr+aPkOekuuS4jeimgemBrue9qeWxglxuLy8gY2xhc3MgTWF0dGUge1xuLy8gXHRjb25zdHJ1Y3RvciAoKSB7XG4vLyBcdFx0dGhpcy4kbWF0dGUgPSAkKCc8ZGl2IGNsYXNzPVwibXktbWF0dGVcIj48L2Rpdj4nKVxuLy8gXHR9XG4vLyBcdHNob3dNYXR0ZSAoY29uKSB7XG4vLyBcdFx0dmFyICRjb24gPSAkKGNvbilcbi8vIFx0XHR0aGlzLiRtYXR0ZS5hcHBlbmQoJGNvbilcbi8vIFx0XHRpZiAoISQoJy5teS1tYXR0ZScpWzBdKSAkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCh0aGlzLiRtYXR0ZSlcbi8vIFx0fVxuLy8gXHRoaWRlTWF0dGUgKCkge1xuLy8gXHRcdCQoJy5teS1tYXR0ZScpLnJlbW92ZSgpXG4vLyBcdH1cblx0XG4vLyB9XG5pbXBvcnQgICQgZnJvbScuL2pxdWVyeS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuYWNrQmFyIHtcblx0Y29uc3RydWN0b3IgKCkge31cblx0c2hvd1NCICgpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXNcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoYXQuJGRvbS5hZGRDbGFzcygnc25hY2tiYXItZW50ZXItJyArIHRoYXQudHlwZSlcblx0XHR9LCAwKVxuXHRcdFxuXHR9XG5cdGhpZGVTQiAoKSB7XG5cdFx0dmFyIHRoYXQgPSB0aGlzXG5cdFx0dGhpcy4kZG9tLmFkZENsYXNzKCdzbmFja2Jhci1sZWF2ZS0nICsgdGhhdC50eXBlKS5vbigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoYXQuJGRvbS5yZW1vdmUoKVxuXHRcdH0pXG5cdH1cblx0aW5pdCAobXNnLCB0eXBlLCBjb2xvcikge1xuXHRcdHRoaXMudHlwZSA9IHR5cGUgfHwgJ2JvdHRvbS1sZWZ0J1xuXHRcdHRoaXMuJGRvbSA9ICQoYDxkaXYgY2xhc3M9XCJzbmFja2Jhci1ib3ggc25hY2tiYXItYm90dG9tXCIgb25zZWxlY3RzdGFydD1cInJldHVybiBmYWxzZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic25hY2tiYXItdHh0XCI+JHttc2d9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzbmFja2Jhci1jbG9zZVwiIGNsb3NlPjxkaXYgY2xhc3M9XCJzbmFja2Jhci1jbG9zZS1idG5cIj48L2Rpdj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNuYWNrYmFyLWJ0blwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+YClcblx0XHRpZiAoL3RvcC8udGVzdCh0aGlzLnR5cGUpKSB7XG5cdFx0XHR0aGlzLiRkb20gPSAkKGA8ZGl2IGNsYXNzPVwic25hY2tiYXItYm94IHNuYWNrYmFyLXRvcFwiIG9uc2VsZWN0c3RhcnQ9XCJyZXR1cm4gZmFsc2VcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNuYWNrYmFyLXR4dFwiPiR7bXNnfTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic25hY2tiYXItY2xvc2VcIiBjbG9zZT48ZGl2IGNsYXNzPVwic25hY2tiYXItY2xvc2UtYnRuXCI+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzbmFja2Jhci1idG5cIj48L2Rpdj5cblx0XHRcdDwvZGl2PmApXG5cdFx0fVxuXHRcdHN3aXRjaCAodGhpcy50eXBlKSB7XG5cdFx0XHRjYXNlICd0b3AtbGVmdCc6IFxuXHRcdFx0XHR0aGlzLiRkb20uY3NzKHtsZWZ0OiAnMjBweCd9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RvcC1jZW50ZXInOiBcblx0XHRcdFx0dGhpcy4kZG9tLmNzcyh7bGVmdDogJzUwJScsIG1hcmdpbkxlZnQ6ICctMTI1cHgnfSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0b3AtcmlnaHQnOiBcblx0XHRcdFx0dGhpcy4kZG9tLmNzcyh7cmlnaHQ6ICcyMHB4J30pXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYm90dG9tLWNlbnRlcic6IFxuXHRcdFx0XHR0aGlzLiRkb20uY3NzKHtsZWZ0OiAnNTAlJywgbWFyZ2luTGVmdDogJy0xMjVweCd9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2JvdHRvbS1yaWdodCc6IFxuXHRcdFx0XHR0aGlzLiRkb20uY3NzKHtyaWdodDogJzIwcHgnfSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiBcblx0XHRcdFx0dGhpcy4kZG9tLmNzcyh7bGVmdDogJzIwcHgnfSlcblx0XHR9XG5cdFx0aWYgKGNvbG9yKSB7XG5cdFx0XHR0aGlzLiRkb20uYWRkQ2xhc3MoJ2N1c3RvbS0nICsgY29sb3IpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJGRvbS5hZGRDbGFzcygnY3VzdG9tLWRlZmF1bHQnKVxuXHRcdH1cblx0XHR0aGlzLiRkb20uaW5zZXJ0QWZ0ZXIodGhpcy4kZWwpXG5cdFx0dGhpcy5zaG93U0IoKVxuXHRcdHZhciB0aGF0ID0gdGhpc1xuXHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGF0LnRpbWVyKVxuXHRcdFx0dGhhdC5oaWRlU0IoKSBcblx0XHR9LCAzMDAwKVxuXHRcdHRoaXMuJGRvbS5vbignY2xpY2snLCAnW2Nsb3NlXScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vICQodGhpcykuY2hpbGRyZW4oJy5zbmFja2Jhci1jbG9zZS1idG4nKS5hZGRDbGFzcygnc25hY2tiYXItY2xvc2UtYnRuX2FjdGl2ZScpXG5cdFx0XHRjbGVhclRpbWVvdXQodGhhdC50aW1lcilcblx0XHRcdHRoYXQuaGlkZVNCKClcblx0XHR9KVxuXHR9XG5cdHNpbmdsZSAoZWwsIG1zZywgdHlwZSwgY29sb3IpIHtcblx0XHR0aGlzLiRlbCA9ICQoZWwpXG5cdFx0dGhpcy4kZWwucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnNuYWNrYmFyLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICgkKHRoaXMpLm5leHQoJy5zbmFja2Jhci1ib3gnKVswXSkge1xuXHRcdFx0XHR0aGlzLnNuYWNrYmFyLmhpZGVTQigpXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnNuYWNrYmFyLnRpbWVyKVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0aWYgKHRoaXMuJGVsLm5leHQoJy5zbmFja2Jhci1ib3gnKVswXSkgcmV0dXJuXG5cdFx0dGhpcy5pbml0KG1zZywgdHlwZSwgY29sb3IpXG5cdH1cblx0Ly8gbW9yZSAoZWwsIG1zZywgdHlwZSwgY29sb3IpIHtcblx0Ly8gXHR0aGlzLm1vcmUgPSBlbC5zbmFja2Jhci5tb3JlIHx8IDBcblx0Ly8gXHR2YXIgdGhhdCA9IHRoaXNcblx0Ly8gXHR0aGlzLiRlbCA9ICQoZWwpXG5cdC8vIFx0dGhpcy4kZWwucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLnNuYWNrYmFyLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0Ly8gXHRcdHRoaXMuc25hY2tiYXIgJiYgdGhpcy5zbmFja2Jhci5oaWRlU0IoKVxuXHQvLyBcdH0pXG5cdC8vIFx0ZWwuc25hY2tiYXIgJiYgZWwuc25hY2tiYXIuJGRvbSAmJiBlbC5zbmFja2Jhci5oaWRlU0IoKVxuXHQvLyBcdHRoaXMuaW5pdChtc2csIHR5cGUsIGNvbG9yKVxuXHQvLyB9XG59Il19
