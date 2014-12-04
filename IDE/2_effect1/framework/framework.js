(function() {
    window.$ = function(e) {
        return document.querySelector(e)
    },
    window.$$ = function(e) {
        return document.querySelectorAll(e)
    },
    $.appendClassName = function(n, e) {
        var t = n.className.split(/\s+/);
        t.indexOf(e) == -1 && t.push(e),
        n.className = t.join(" ")
    },
    $.removeClassName = function(n, t) {
        var e = n.className.split(/\s+/),
        r = e.indexOf(t);
        r != -1 && e.splice(r, 1),
        n.className = e.join(" ")
    },
    $.replaceClassName = function(t, n, r) {
        var e = t.className.split(/\s+/),
        i = e.indexOf(n);
        i != -1 && e.splice(i, 1),
        e.indexOf(r) == -1 && e.push(r),
        t.className = e.join(" ")
    },
    $.containsClassName = function(n, e) {
        if (n.className) {
            var t = n.className.split(/\s+/);
            return t.indexOf(e) != -1
        }
        return ! 1
    },
    $.fade = function(t, e, n) {
        t.style.webkitTransition = n ? "opacity " + n + "ms ease-out 0ms": "",
        t.style.opacity = e ? e: 0
    }
})(),
function(r) {
    var o = "ontouchstart" in r,
    u = o ? "touchstart": "mousedown",
    t = o ? "touchmove": "mousemove",
    i = o ? "touchend": "mouseup",
    n = function(n, t) {
        var e, r = n.changedTouches.length - 1;
        while (r > -1) {
            e = n.changedTouches[r--];
            if (e.identifier == t) return e
        }
    },
    s = function(e, t) {
        var n = r.webkitConvertPointFromPageToNode(e, new WebKitPoint(t.pageX, t.pageY));
        return n
    },
    e = function(e, t) {
        return t.x >= -30 && t.y >= -30 && t.x < e.clientWidth + 30 && t.y < e.clientHeight + 30 ? !0 : !1
    };
    r.getElementTouchCoordinate = s,
    r.addSingleTouchListener = o ?
    function(s, e) {
        var f = 0,
        l = !1,
        a = function(n) {
            if (n.touches.length == 1) {
                var s = n.touches[0];
                f = s.identifier,
                e.onTouchStart && e.onTouchStart(n, s),
                l || (l = !0, document.body.addEventListener(t, r), document.body.addEventListener(i, o))
            }
        },
        r = function(t) {
            if (l) {
                var r = n(t, f);
                r && e.onTouchMove && e.onTouchMove(t, r)
            }
        },
        o = function(s) {
            if (l) {
                var u = n(s, f);
                if (u || s.touches == 0) u && e.onTouchEnd && e.onTouchEnd(s, u),
                l = !1,
                document.body.removeEventListener(t, r),
                document.body.removeEventListener(i, o)
            }
        };
        return s.addEventListener(u, a),
        {
            uninstall: function() {
                s.removeEventListener(u, a),
                document.body.removeEventListener(t, r),
                document.body.removeEventListener(i, o)
            }
        }
    }: function(r, e) {
        var a = !1,
        o = function(r) {
            e.onTouchStart && e.onTouchStart(r, r),
            a || (a = !0, document.body.addEventListener(t, n), document.body.addEventListener(i, s))
        },
        n = function(t) {
            a && e.onTouchMove && e.onTouchMove(t, t)
        },
        s = function(r) {
            a && (e.onTouchEnd && e.onTouchEnd(r, r), a = !1, document.body.removeEventListener(t, n), document.body.removeEventListener(i, s))
        };
        return r.addEventListener(u, o),
        {
            uninstall: function() {
                r.removeEventListener(u, o),
                document.body.removeEventListener(t, n),
                document.body.removeEventListener(i, s)
            }
        }
    },
    r.addPressListener = function(i, n, t) {
        var r = t || e,
        o = !1,
        a = {
            onTouchStart: function(e, t) {
                var u = s(i, t);
                r(i, u) ? ($.appendClassName(i, "pressed"), n.onPressStart && n.onPressStart(e), e.stopPropagation(), e.preventDefault(), o = !0) : o = !1
            },
            onTouchMove: function(e, t) {
                if (!o) return;
                var n = s(i, t);
                r(i, n) ? $.appendClassName(i, "pressed") : $.removeClassName(i, "pressed")
            },
            onTouchEnd: function(e, t) {
                if (!o) return;
                var u = s(i, t);
                r(i, u) ? n.onPressEnd && n.onPressEnd(e) : n.onPressCancel && n.onPressCancel(e),
                $.removeClassName(i, "pressed")
            }
        },
        u = addSingleTouchListener(i, a);
        return u
    }
} (window),
function(e) {
    var t = function() {
        event.preventDefault(),
        event.stopPropagation()
    };
    e.addEventListener("touchstart", t),
    e.addEventListener("touchmove", t),
    e.addEventListener("touchend", t)
} (window),
function(t) {
    var r, e, n;
    t.openPopup = function(i) {
        document.body.style.pointerEvents = "none",
        n || (e || (e = $("#background-pop-up"), e.style.webkitTransition = "opacity 0.5s"), e.style.opacity = .2, e.style.webkitTransform = "translateZ(0)", e.style.pointerEvents = "auto", n = !0),
        i && i !== r && (i.style.webkitTransition = "opacity 0.5s, -webkit-transform 0.5s", i.style.opacity = 1, i.style.webkitTransform = "scale(1)", i.style.pointerEvents = "auto", r = i, t.setTimeout(function() {
            document.body.style.pointerEvents = ""
        },
        550))
    },
    t.closePopup = function() {
        n && (r && (r.style.opacity = 0, r.style.webkitTransform = "", r.style.pointerEvents = "", r = null), e && (e.style.opacity = 0, e.style.webkitTransform = "", e.style.pointerEvents = ""), n = !1)
    }
} (window),
function(e, t) {
    e.isVeeva = !0,
    e.VeevaIdentifier = "9fb6dfbd-4419-44bc-a55d-4e3051fdf330f",
    e.loadVariable = function(i) {
        var r = e.localStorage[e.VeevaIdentifier],
        n = {};
        if (r) {
            try {
                n = JSON.parse(r)
            } catch(t) {}
            return n[i]
        }
        return undefined
    },
    e.saveVariable = function(s, n) {
        var i = e.localStorage[e.VeevaIdentifier],
        r = {};
        if (i) try {
            r = JSON.parse(i)
        } catch(t) {}
        r[s] = n,
        e.localStorage[e.VeevaIdentifier] = JSON.stringify(r)
    },
    e.onContentDestoryed = function(n) {
        var t = function(n) {
            var e = n.length - 1;
            while (e >= 0) {
                var t = n[e--];
                t.className = "",
                t.style.webkitTransition = "",
                t.style.webkitTransform = "",
                t.parentNode.removeChild(t)
            }
        },
        e = [].slice.call($$(".pop-up"), 0).concat([$("#page")]);
        t($("#page").children),
        t(e)
    },
    e.switchToPackage = function(n, r) {
        var i = e.getRealPackageName(n);
        isVeeva ? t.location = "veeva:gotoSlide(" + i + ".zip," + e.getPresentationName(n) + ")": t.location = "../" + n + "/" + n + ".html"
    },
    e.openSafari = function(r) {
        var e = t.createElement("a"),
        n = t.createEvent("MouseEvents");
        e.href = r,
        n.initMouseEvent("click"),
        e.dispatchEvent(n)
    }
} (window, document),
function(r, o) {
    var e = function(t, e) {
        t.style.webkitTransform = e != undefined ? "translateX(" + e + "px)": ""
    },
    i = function(e, t) {
        e.style.webkitTransition = t != undefined ? "-webkit-transform " + t + "s ease-out 0s": ""
    },
    s = function(e, t) {
        e.style.visibility = t ? "visible": ""
    };
    r.addEventListener("load",
    function(d) {
        var n = $("#page"),
        l = $("#previous-page"),
        t = $("#next-page"),
        a = function(r, o) {
            e(n, r),
            i(n, o),
            r >= 0 ? (i(l, o), e(l, -1024 + r), s(l, !0)) : s(l, !1),
            r <= 0 ? (i(t, o), e(t, 1024 + r), s(t, !0)) : s(t, !1)
        },
        f = 0,
        u = 0,
        c = 0,
        h = 0,
        v = 0,
        p = {
            onTouchStart: function(e, t) {
                f = t.screenX,
                h = 0,
                c = f,
                u = 0,
                a(u)
            },
            onTouchMove: function(e, t) {
                u = t.screenX - f,
                a(u),
                c != t.screenX && (h = t.screenX - c, v = Date.now()),
                c = t.screenX
            },
            onTouchEnd: function(e, t) {
                if (u != 0) {
                    var n = Date.now() - v > 500; ! n && h < 0 && u < -3 && nextPageName ? a( - 1024, .5) : !n && h > 0 && u > 3 && previousPageName ? a(1024, .5) : a(0, Math.abs(u) < 100 ? Math.abs(u) / 500 : .5),
                    o.body.style.pointerEvents = "none"
                }
            }
        };
        n.addEventListener("webkitTransitionEnd",
        function(e) {
            if (e.target === n) {
                var t = n.style.webkitTransform;
                t == "translateX(1024px)" ? r.switchToPackage(previousPageName, !0) : t == "translateX(-1024px)" ? r.switchToPackage(nextPageName, !0) : o.body.style.pointerEvents = ""
            }
        }),
        r.setTimeout(function() {
            var i = r.loadVariable("resource-path"),
            e = function(e, t) {
                e.style.backgroundImage || (e.style.backgroundImage = "url(" + t + ")")
            };
            r.previousPageName && e(l, i + "/slides/" + r.previousPageName + ".png"),
            r.nextPageName && e(t, i + "/slides/" + r.nextPageName + ".png"),
            r.swipeDisabled || r.addSingleTouchListener(n, p)
        },
        50)
    });
    var t = loadVariable("resource-path"),
    n = function(e, t) {
        e.style.backgroundImage = "url(" + t + ")"
    };
    o.addEventListener("DOMContentLoaded",
    function() {
        n($("#menu-bar"), t + "/images/menu-bar@2x.png"),
        n($("#header"), t + "/images/header-bar@2x.png")
    }),
    r.addEventListener("load",
    function(h) {
        if (r.isBottomMenuBarLocked) return;
        var a = $("#menu-bar > #menu-button-1"),
        f = $("#menu-bar > #menu-button-2"),
        l = $("#menu-bar > #menu-button-3"),
        c = $("#menu-bar > #menu-button-4");
        r.addPressListener(f, {
            onPressEnd: function(e) {
                r.switchToPackage("0.2")
            }
        }),
        r.addPressListener(l, {
            onPressEnd: function(e) {
                r.switchToPackage("0.3")
            }
        }),
        r.addPressListener(c, {
            onPressEnd: function(e) {
                r.switchToPackage("0.1")
            }
        });
        var u = function(n, e) {
            if (!r.iScroll) {
                var t = o.createElement("script");
                t.src = n,
                t.onload = e,
                o.head.appendChild(t)
            } else e && e()
        },
        s = o.createElement("img"),
        i = $("#reference-pop-up"),
        e = $("#reference-pop-up #reference-wrapper"),
        p = $("#reference-pop-up >.close-button");
        n(i, t + "/images/popup-reference.png"),
        s.src = t + "/images/content-reference.png",
        e.appendChild(s),
        u(t + "/framework/iscroll4.1.js",
        function() {
            var t = new iScroll(e, {
                momentum: !0,
                vScroll: !0,
                hScroll: !1,
                hScrollbar: !1,
                vScrollbar: !0,
                bounce: !0,
                hideScrollbar: !1
            });
            r.addPressListener(a, {
                onPressEnd: function(e) {
                    r.openPopup($("#reference-pop-up"))
                }
            }),
            r.addPressListener(p, {
                onPressEnd: function(e) {
                    r.closePopup()
                }
            })
        })
    })

} (window, document)