(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    [function(t, e, o) {
        "use strict";
        o.d(e, "k", (function() {
            return v
        })), o.d(e, "m", (function() {
            return y
        })), o.d(e, "l", (function() {
            return k
        })), o.d(e, "e", (function() {
            return j
        })), o.d(e, "b", (function() {
            return z
        })), o.d(e, "s", (function() {
            return _
        })), o.d(e, "g", (function() {
            return M
        })), o.d(e, "h", (function() {
            return O
        })), o.d(e, "d", (function() {
            return C
        })), o.d(e, "r", (function() {
            return D
        })), o.d(e, "j", (function() {
            return I
        })), o.d(e, "t", (function() {
            return S
        })), o.d(e, "o", (function() {
            return L
        })), o.d(e, "q", (function() {
            return E
        })), o.d(e, "f", (function() {
            return A
        })), o.d(e, "c", (function() {
            return P
        })), o.d(e, "i", (function() {
            return R
        })), o.d(e, "p", (function() {
            return $
        })), o.d(e, "a", (function() {
            return X
        })), o.d(e, "v", (function() {
            return F
        })), o.d(e, "n", (function() {
            return G
        })), o.d(e, "u", (function() {
            return J
        }));
        o(23), o(47), o(54), o(55);
        var n = o(33),
            r = o(6),
            l = o(17),
            d = o(26),
            c = (o(27), o(34), o(221), o(22), o(36), o(53), o(37), o(41), o(42), o(48), o(57), o(155), o(131), o(156), o(58), o(112), o(227), o(106), o(84), o(4)),
            m = o(39);

        function f(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function h(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? f(Object(source), !0).forEach((function(e) {
                    Object(l.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        function x(t, e) {
            var o;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (o = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return w(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === o && t.constructor && (o = t.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(t);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return w(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    o && (t = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                d = !1;
            return {
                s: function() {
                    o = t[Symbol.iterator]()
                },
                n: function() {
                    var t = o.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, r = t
                },
                f: function() {
                    try {
                        l || null == o.return || o.return()
                    } finally {
                        if (d) throw r
                    }
                }
            }
        }

        function w(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }

        function v(t) {
            c.a.config.errorHandler && c.a.config.errorHandler(t)
        }

        function y(t) {
            return t.then((function(t) {
                return t.default || t
            }))
        }

        function k(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
        }

        function j(t) {
            var e, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = t.$children || [],
                r = x(n);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var l = e.value;
                    l.$fetch ? o.push(l) : l.$children && j(l, o)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
            return o
        }

        function z(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var o = t.options._originDataFn || t.options.data || function() {
                    return {}
                };
                t.options._originDataFn = o, t.options.data = function() {
                    var data = o.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), h(h({}, data), e)
                }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }

        function _(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = c.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
        }

        function M(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                return Object.keys(t[o]).map((function(r) {
                    return e && e.push(n), t[o][r]
                }))
            })))
        }

        function O(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return M(t, e, "instances")
        }

        function C(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function(t, o) {
                return Object.keys(t.components).reduce((function(n, r) {
                    return t.components[r] ? n.push(e(t.components[r], t.instances[r], t, r, o)) : delete t.components[r], n
                }), [])
            })))
        }

        function D(t, e) {
            return Promise.all(C(t, function() {
                var t = Object(r.a)(regeneratorRuntime.mark((function t(o, n, r, l) {
                    var d, c;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof o || o.options) {
                                    t.next = 11;
                                    break
                                }
                                return t.prev = 1, t.next = 4, o();
                            case 4:
                                o = t.sent, t.next = 11;
                                break;
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (d = Date.now(), (!(c = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || c + 6e4 < d) && (window.sessionStorage.setItem("nuxt-reload", d), window.location.reload(!0))), t.t0;
                            case 11:
                                return r.components[l] = o = _(o), t.abrupt("return", "function" == typeof e ? e(o, n, r, l) : o);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 7]
                    ])
                })));
                return function(e, o, n, r) {
                    return t.apply(this, arguments)
                }
            }()))
        }

        function I(t) {
            return N.apply(this, arguments)
        }

        function N() {
            return (N = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4, D(e);
                        case 4:
                            return t.abrupt("return", h(h({}, e), {}, {
                                meta: M(e).map((function(t, o) {
                                    return h(h({}, t.options.meta), (e.matched[o] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function S(t, e) {
            return T.apply(this, arguments)
        }

        function T() {
            return (T = Object(r.a)(regeneratorRuntime.mark((function t(e, o) {
                var r, l, c, f;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                store: e.store,
                                payload: o.payload,
                                error: o.error,
                                base: e.router.options.base,
                                env: {}
                            }, o.req && (e.context.req = o.req), o.res && (e.context.res = o.res), o.ssrContext && (e.context.ssrContext = o.ssrContext), e.context.redirect = function(t, path, o) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var r = Object(n.a)(path);
                                    if ("number" == typeof t || "undefined" !== r && "object" !== r || (o = path || {}, path = t, r = Object(n.a)(path), t = 302), "object" === r && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(m.d)(path, o), window.location.replace(path), new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: path,
                                        query: o,
                                        status: t
                                    })
                                }
                            }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([I(o.route), I(o.from)]);
                        case 3:
                            r = t.sent, l = Object(d.a)(r, 2), c = l[0], f = l[1], o.route && (e.context.route = c), o.from && (e.context.from = f), e.context.next = o.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                        case 15:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function L(t, e) {
            return !t.length || e._redirected || e._errored ? Promise.resolve() : E(t[0], e).then((function() {
                return L(t.slice(1), e)
            }))
        }

        function E(t, e) {
            var o;
            return (o = 2 === t.length ? new Promise((function(o) {
                t(e, (function(t, data) {
                    t && e.error(t), o(data = data || {})
                }))
            })) : t(e)) && o instanceof Promise && "function" == typeof o.then ? o : Promise.resolve(o)
        }

        function A(base, t) {
            if ("hash" === t) return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var e = (path || "/") + window.location.search + window.location.hash;
            return Object(m.c)(e)
        }

        function P(t, e) {
            return function(t, e) {
                for (var o = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(n.a)(t[i]) && (o[i] = new RegExp("^(?:" + t[i].pattern + ")$", Z(e)));
                return function(e, n) {
                    for (var path = "", data = e || {}, r = (n || {}).pretty ? U : encodeURIComponent, l = 0; l < t.length; l++) {
                        var d = t[l];
                        if ("string" != typeof d) {
                            var c = data[d.name || "pathMatch"],
                                m = void 0;
                            if (null == c) {
                                if (d.optional) {
                                    d.partial && (path += d.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + d.name + '" to be defined')
                            }
                            if (Array.isArray(c)) {
                                if (!d.repeat) throw new TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                                if (0 === c.length) {
                                    if (d.optional) continue;
                                    throw new TypeError('Expected "' + d.name + '" to not be empty')
                                }
                                for (var f = 0; f < c.length; f++) {
                                    if (m = r(c[f]), !o[l].test(m)) throw new TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(m) + "`");
                                    path += (0 === f ? d.prefix : d.delimiter) + m
                                }
                            } else {
                                if (m = d.asterisk ? Q(c) : r(c), !o[l].test(m)) throw new TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + m + '"');
                                path += d.prefix + m
                            }
                        } else path += d
                    }
                    return path
                }
            }(function(t, e) {
                var o, n = [],
                    r = 0,
                    l = 0,
                    path = "",
                    d = e && e.delimiter || "/";
                for (; null != (o = Y.exec(t));) {
                    var c = o[0],
                        m = o[1],
                        f = o.index;
                    if (path += t.slice(l, f), l = f + c.length, m) path += m[1];
                    else {
                        var h = t[l],
                            x = o[2],
                            w = o[3],
                            v = o[4],
                            y = o[5],
                            k = o[6],
                            j = o[7];
                        path && (n.push(path), path = "");
                        var z = null != x && null != h && h !== x,
                            _ = "+" === k || "*" === k,
                            M = "?" === k || "*" === k,
                            O = o[2] || d,
                            pattern = v || y;
                        n.push({
                            name: w || r++,
                            prefix: x || "",
                            delimiter: O,
                            optional: M,
                            repeat: _,
                            partial: z,
                            asterisk: Boolean(j),
                            pattern: pattern ? H(pattern) : j ? ".*" : "[^" + B(O) + "]+?"
                        })
                    }
                }
                l < t.length && (path += t.substr(l));
                path && n.push(path);
                return n
            }(t, e), e)
        }

        function R(t, e) {
            var o = {},
                n = h(h({}, t), e);
            for (var r in n) String(t[r]) !== String(e[r]) && (o[r] = !0);
            return o
        }

        function $(t) {
            var e;
            if (t.message || "string" == typeof t) e = t.message || t;
            else try {
                e = JSON.stringify(t, null, 2)
            } catch (o) {
                e = "[".concat(t.constructor.name, "]")
            }
            return h(h({}, t), {}, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
            window.onNuxtReadyCbs.push(t)
        };
        var Y = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function U(t, e) {
            var o = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(o, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function Q(t) {
            return U(t, !0)
        }

        function B(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function H(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }

        function Z(t) {
            return t && t.sensitive ? "" : "i"
        }

        function X(t, e, o) {
            t.$options[e] || (t.$options[e] = []), t.$options[e].includes(o) || t.$options[e].push(o)
        }
        var F = m.b,
            G = (m.e, m.a);

        function J(t) {
            try {
                window.history.scrollRestoration = t
            } catch (t) {}
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        o.d(e, "b", (function() {
            return re
        })), o.d(e, "a", (function() {
            return S
        }));
        o(37), o(23), o(34), o(54), o(55);
        var n = o(6),
            r = o(17),
            l = (o(27), o(36), o(53), o(22), o(57), o(4)),
            d = o(74),
            c = o(183),
            m = o(125),
            f = o.n(m),
            h = o(62),
            x = o.n(h),
            w = o(126),
            v = o(39),
            y = o(0);
        "scrollRestoration" in window.history && (Object(y.u)("manual"), window.addEventListener("beforeunload", (function() {
            Object(y.u)("auto")
        })), window.addEventListener("load", (function() {
            Object(y.u)("manual")
        })));

        function k(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function j(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? k(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var z = function() {};
        l.a.use(w.a);
        var _ = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(t, e, o) {
                var n = !1,
                    r = t !== e;
                o ? n = o : r && function(t) {
                    var e = Object(y.g)(t);
                    if (1 === e.length) {
                        var o = e[0].options;
                        return !1 !== (void 0 === o ? {} : o).scrollToTop
                    }
                    return e.some((function(t) {
                        var e = t.options;
                        return e && e.scrollToTop
                    }))
                }(t) && (n = {
                    x: 0,
                    y: 0
                });
                var l = window.$nuxt;
                return (!r || t.path === e.path && t.hash !== e.hash) && l.$nextTick((function() {
                    return l.$emit("triggerScroll")
                })), new Promise((function(e) {
                    l.$once("triggerScroll", (function() {
                        if (t.hash) {
                            var o = t.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (o = "#" + window.CSS.escape(o.substr(1)));
                            try {
                                document.querySelector(o) && (n = {
                                    selector: o
                                })
                            } catch (t) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        e(n)
                    }))
                }))
            },
            routes: [{
                path: "/calendar",
                component: function() {
                    return Object(y.m)(o.e(13).then(o.bind(null, 428)))
                },
                name: "calendar"
            }, {
                path: "/classes",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(19)]).then(o.bind(null, 429)))
                },
                name: "classes"
            }, {
                path: "/community",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(36)]).then(o.bind(null, 430)))
                },
                name: "community"
            }, {
                path: "/contact",
                component: function() {
                    return Object(y.m)(o.e(37).then(o.bind(null, 463)))
                },
                name: "contact"
            }, {
                path: "/covid-vaccine",
                component: function() {
                    return Object(y.m)(o.e(38).then(o.bind(null, 431)))
                },
                name: "covid-vaccine"
            }, {
                path: "/cultural",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(40)]).then(o.bind(null, 449)))
                },
                name: "cultural"
            }, {
                path: "/deities",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(41)]).then(o.bind(null, 433)))
                },
                name: "deities"
            }, {
                path: "/discourses",
                component: function() {
                    return Object(y.m)(o.e(43).then(o.bind(null, 419)))
                },
                name: "discourses"
            }, {
                path: "/downloads",
                component: function() {
                    return Object(y.m)(o.e(48).then(o.bind(null, 482)))
                },
                name: "downloads"
            }, {
                path: "/downloads-media",
                component: function() {
                    return Object(y.m)(o.e(47).then(o.bind(null, 420)))
                },
                name: "downloads-media"
            }, {
                path: "/estore",
                component: function() {
                    return Object(y.m)(o.e(49).then(o.bind(null, 418)))
                },
                name: "estore"
            }, {
                path: "/experiences",
                component: function() {
                    return Object(y.m)(o.e(50).then(o.bind(null, 438)))
                },
                name: "experiences"
            }, {
                path: "/featured",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(60)]).then(o.bind(null, 439)))
                },
                name: "featured"
            }, {
                path: "/festivals-events",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(62)]).then(o.bind(null, 440)))
                },
                name: "festivals-events"
            }, {
                path: "/health-education",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(64)]).then(o.bind(null, 441)))
                },
                name: "health-education"
            }, {
                path: "/homenew",
                component: function() {
                    return Object(y.m)(o.e(65).then(o.bind(null, 492)))
                },
                name: "homenew"
            }, {
                path: "/priests",
                component: function() {
                    return Object(y.m)(o.e(67).then(o.bind(null, 442)))
                },
                name: "priests"
            }, {
                path: "/privacy-policy",
                component: function() {
                    return Object(y.m)(o.e(68).then(o.bind(null, 494)))
                },
                name: "privacy-policy"
            }, {
                path: "/raffle",
                component: function() {
                    return Object(y.m)(o.e(78).then(o.bind(null, 495)))
                },
                name: "raffle"
            }, {
                path: "/visit",
                component: function() {
                    return Object(y.m)(o.e(173).then(o.bind(null, 416)))
                },
                name: "visit"
            }, {
                path: "/about/board",
                component: function() {
                    return Object(y.m)(o.e(5).then(o.bind(null, 496)))
                },
                name: "about-board"
            }, {
                path: "/about/deities",
                component: function() {
                    return Object(y.m)(o.e(6).then(o.bind(null, 497)))
                },
                name: "about-deities"
            }, {
                path: "/about/directions",
                component: function() {
                    return Object(y.m)(o.e(7).then(o.bind(null, 498)))
                },
                name: "about-directions"
            }, {
                path: "/about/facility",
                component: function() {
                    return Object(y.m)(o.e(8).then(o.bind(null, 499)))
                },
                name: "about-facility"
            }, {
                path: "/about/history",
                component: function() {
                    return Object(y.m)(o.e(9).then(o.bind(null, 500)))
                },
                name: "about-history"
            }, {
                path: "/about/parking",
                component: function() {
                    return Object(y.m)(o.e(10).then(o.bind(null, 501)))
                },
                name: "about-parking"
            }, {
                path: "/about/priests",
                component: function() {
                    return Object(y.m)(o.e(11).then(o.bind(null, 527)))
                },
                name: "about-priests"
            }, {
                path: "/about/swamiji",
                component: function() {
                    return Object(y.m)(o.e(12).then(o.bind(null, 503)))
                },
                name: "about-swamiji"
            }, {
                path: "/calendar/new",
                component: function() {
                    return Object(y.m)(o.e(14).then(o.bind(null, 443)))
                },
                name: "calendar-new"
            }, {
                path: "/classes/arts",
                component: function() {
                    return Object(y.m)(o.e(16).then(o.bind(null, 505)))
                },
                name: "classes-arts"
            }, {
                path: "/classes/bala-datta",
                component: function() {
                    return Object(y.m)(o.e(17).then(o.bind(null, 444)))
                },
                name: "classes-bala-datta"
            }, {
                path: "/classes/dance",
                component: function() {
                    return Object(y.m)(o.e(18).then(o.bind(null, 507)))
                },
                name: "classes-dance"
            }, {
                path: "/classes/religious",
                component: function() {
                    return Object(y.m)(o.e(24).then(o.bind(null, 508)))
                },
                name: "classes-religious"
            }, {
                path: "/classes/schedules",
                component: function() {
                    return Object(y.m)(o.e(28).then(o.bind(null, 509)))
                },
                name: "classes-schedules"
            }, {
                path: "/classes/violin",
                component: function() {
                    return Object(y.m)(o.e(29).then(o.bind(null, 510)))
                },
                name: "classes-violin"
            }, {
                path: "/classes/yoga",
                component: function() {
                    return Object(y.m)(o.e(31).then(o.bind(null, 511)))
                },
                name: "classes-yoga"
            }, {
                path: "/classes/youth-group",
                component: function() {
                    return Object(y.m)(o.e(34).then(o.bind(null, 512)))
                },
                name: "classes-youth-group"
            }, {
                path: "/discourses/indexOld",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(44)]).then(o.bind(null, 445)))
                },
                name: "discourses-indexOld"
            }, {
                path: "/donate/corporate-matching",
                component: function() {
                    return Object(y.m)(o.e(45).then(o.bind(null, 514)))
                },
                name: "donate-corporate-matching"
            }, {
                path: "/donate/general",
                component: function() {
                    return Object(y.m)(o.e(46).then(o.bind(null, 515)))
                },
                name: "donate-general"
            }, {
                path: "/featured-posts/coronavirus-preparedness",
                component: function() {
                    return Object(y.m)(o.e(51).then(o.bind(null, 516)))
                },
                name: "featured-posts-coronavirus-preparedness"
            }, {
                path: "/featured-posts/dhyana-with-mouna",
                component: function() {
                    return Object(y.m)(o.e(52).then(o.bind(null, 517)))
                },
                name: "featured-posts-dhyana-with-mouna"
            }, {
                path: "/featured-posts/gitopadesa-chariot-monument",
                component: function() {
                    return Object(y.m)(o.e(53).then(o.bind(null, 518)))
                },
                name: "featured-posts-gitopadesa-chariot-monument"
            }, {
                path: "/featured-posts/hanuman-sethu-bandha",
                component: function() {
                    return Object(y.m)(o.e(54).then(o.bind(null, 519)))
                },
                name: "featured-posts-hanuman-sethu-bandha"
            }, {
                path: "/featured-posts/har-ghar-gita",
                component: function() {
                    return Object(y.m)(o.e(55).then(o.bind(null, 520)))
                },
                name: "featured-posts-har-ghar-gita"
            }, {
                path: "/featured-posts/kumbhabhisheka",
                component: function() {
                    return Object(y.m)(o.e(56).then(o.bind(null, 521)))
                },
                name: "featured-posts-kumbhabhisheka"
            }, {
                path: "/featured-posts/rajagopura",
                component: function() {
                    return Object(y.m)(o.e(58).then(o.bind(null, 522)))
                },
                name: "featured-posts-rajagopura"
            }, {
                path: "/featured-posts/rajagopura-courtyard",
                component: function() {
                    return Object(y.m)(o.e(57).then(o.bind(null, 523)))
                },
                name: "featured-posts-rajagopura-courtyard"
            }, {
                path: "/puja-services/annadaan",
                component: function() {
                    return Object(y.m)(o.e(69).then(o.bind(null, 446)))
                },
                name: "puja-services-annadaan"
            }, {
                path: "/puja-services/anthralaya-seva",
                component: function() {
                    return Object(y.m)(o.e(70).then(o.bind(null, 525)))
                },
                name: "puja-services-anthralaya-seva"
            }, {
                path: "/puja-services/cafeteria",
                component: function() {
                    return Object(y.m)(o.e(71).then(o.bind(null, 526)))
                },
                name: "puja-services-cafeteria"
            }, {
                path: "/puja-services/car-puja",
                component: function() {
                    return Object(y.m)(o.e(72).then(o.bind(null, 447)))
                },
                name: "puja-services-car-puja"
            }, {
                path: "/puja-services/pradhana-sevas",
                component: function() {
                    return Object(y.m)(o.e(73).then(o.bind(null, 528)))
                },
                name: "puja-services-pradhana-sevas"
            }, {
                path: "/puja-services/puja-schedules",
                component: function() {
                    return Object(y.m)(o.e(74).then(o.bind(null, 529)))
                },
                name: "puja-services-puja-schedules"
            }, {
                path: "/puja-services/request-priest",
                component: function() {
                    return Object(y.m)(o.e(75).then(o.bind(null, 448)))
                },
                name: "puja-services-request-priest"
            }, {
                path: "/puja-services/thoram",
                component: function() {
                    return Object(y.m)(o.e(76).then(o.bind(null, 530)))
                },
                name: "puja-services-thoram"
            }, {
                path: "/puja-services/vadamala-archana",
                component: function() {
                    return Object(y.m)(o.e(77).then(o.bind(null, 531)))
                },
                name: "puja-services-vadamala-archana"
            }, {
                path: "/temple-events/anaghaashtami-2021",
                component: function() {
                    return Object(y.m)(o.e(80).then(o.bind(null, 532)))
                },
                name: "temple-events-anaghaashtami-2021"
            }, {
                path: "/temple-events/anaghastami-2021",
                component: function() {
                    return Object(y.m)(o.e(81).then(o.bind(null, 533)))
                },
                name: "temple-events-anaghastami-2021"
            }, {
                path: "/temple-events/Anniversary-2021",
                component: function() {
                    return Object(y.m)(o.e(79).then(o.bind(null, 534)))
                },
                name: "temple-events-Anniversary-2021"
            }, {
                path: "/temple-events/bhagavad-gita-lecture-series",
                component: function() {
                    return Object(y.m)(o.e(82).then(o.bind(null, 535)))
                },
                name: "temple-events-bhagavad-gita-lecture-series"
            }, {
                path: "/temple-events/community-activities",
                component: function() {
                    return Object(y.m)(o.e(84).then(o.bind(null, 536)))
                },
                name: "temple-events-community-activities"
            }, {
                path: "/temple-events/cultural-programs",
                component: function() {
                    return Object(y.m)(o.e(85).then(o.bind(null, 537)))
                },
                name: "temple-events-cultural-programs"
            }, {
                path: "/temple-events/dattajayanti",
                component: function() {
                    return Object(y.m)(o.e(89).then(o.bind(null, 538)))
                },
                name: "temple-events-dattajayanti"
            }, {
                path: "/temple-events/dattajayanti-2019",
                component: function() {
                    return Object(y.m)(o.e(86).then(o.bind(null, 539)))
                },
                name: "temple-events-dattajayanti-2019"
            }, {
                path: "/temple-events/dattajayanti-2020",
                component: function() {
                    return Object(y.m)(o.e(87).then(o.bind(null, 540)))
                },
                name: "temple-events-dattajayanti-2020"
            }, {
                path: "/temple-events/dattajayanti-2021",
                component: function() {
                    return Object(y.m)(o.e(88).then(o.bind(null, 541)))
                },
                name: "temple-events-dattajayanti-2021"
            }, {
                path: "/temple-events/devinavaratri-utsav-2019",
                component: function() {
                    return Object(y.m)(o.e(90).then(o.bind(null, 542)))
                },
                name: "temple-events-devinavaratri-utsav-2019"
            }, {
                path: "/temple-events/devinavaratri-utsav-2020",
                component: function() {
                    return Object(y.m)(o.e(91).then(o.bind(null, 543)))
                },
                name: "temple-events-devinavaratri-utsav-2020"
            }, {
                path: "/temple-events/devinavatari-utsav-2021",
                component: function() {
                    return Object(y.m)(o.e(92).then(o.bind(null, 544)))
                },
                name: "temple-events-devinavatari-utsav-2021"
            }, {
                path: "/temple-events/diwali-2019",
                component: function() {
                    return Object(y.m)(o.e(93).then(o.bind(null, 545)))
                },
                name: "temple-events-diwali-2019"
            }, {
                path: "/temple-events/diwali-2020",
                component: function() {
                    return Object(y.m)(o.e(94).then(o.bind(null, 546)))
                },
                name: "temple-events-diwali-2020"
            }, {
                path: "/temple-events/diwali-2021",
                component: function() {
                    return Object(y.m)(o.e(95).then(o.bind(null, 547)))
                },
                name: "temple-events-diwali-2021"
            }, {
                path: "/temple-events/gita-for-daily-living-lecture-2020",
                component: function() {
                    return Object(y.m)(o.e(96).then(o.bind(null, 548)))
                },
                name: "temple-events-gita-for-daily-living-lecture-2020"
            }, {
                path: "/temple-events/gita-the-roadmap-lecture",
                component: function() {
                    return Object(y.m)(o.e(97).then(o.bind(null, 549)))
                },
                name: "temple-events-gita-the-roadmap-lecture"
            }, {
                path: "/temple-events/godadevi",
                component: function() {
                    return Object(y.m)(o.e(100).then(o.bind(null, 550)))
                },
                name: "temple-events-godadevi"
            }, {
                path: "/temple-events/godadevi-2021",
                component: function() {
                    return Object(y.m)(o.e(98).then(o.bind(null, 551)))
                },
                name: "temple-events-godadevi-2021"
            }, {
                path: "/temple-events/godadevi-2022",
                component: function() {
                    return Object(y.m)(o.e(99).then(o.bind(null, 552)))
                },
                name: "temple-events-godadevi-2022"
            }, {
                path: "/temple-events/gowrishankara-2019",
                component: function() {
                    return Object(y.m)(o.e(101).then(o.bind(null, 553)))
                },
                name: "temple-events-gowrishankara-2019"
            }, {
                path: "/temple-events/greatness-of-mahabharata-discourses",
                component: function() {
                    return Object(y.m)(o.e(102).then(o.bind(null, 554)))
                },
                name: "temple-events-greatness-of-mahabharata-discourses"
            }, {
                path: "/temple-events/guru-mahotsav-hanuman-jayanti",
                component: function() {
                    return Object(y.m)(o.e(103).then(o.bind(null, 555)))
                },
                name: "temple-events-guru-mahotsav-hanuman-jayanti"
            }, {
                path: "/temple-events/guru-purnima-2019",
                component: function() {
                    return Object(y.m)(o.e(104).then(o.bind(null, 556)))
                },
                name: "temple-events-guru-purnima-2019"
            }, {
                path: "/temple-events/guru-purnima-2020",
                component: function() {
                    return Object(y.m)(o.e(105).then(o.bind(null, 557)))
                },
                name: "temple-events-guru-purnima-2020"
            }, {
                path: "/temple-events/hanumanchalisa",
                component: function() {
                    return Object(y.m)(o.e(106).then(o.bind(null, 558)))
                },
                name: "temple-events-hanumanchalisa"
            }, {
                path: "/temple-events/hanumanjayanti",
                component: function() {
                    return Object(y.m)(o.e(108).then(o.bind(null, 559)))
                },
                name: "temple-events-hanumanjayanti"
            }, {
                path: "/temple-events/hanumanjayanti-2021",
                component: function() {
                    return Object(y.m)(o.e(107).then(o.bind(null, 560)))
                },
                name: "temple-events-hanumanjayanti-2021"
            }, {
                path: "/temple-events/health-fair-2019",
                component: function() {
                    return Object(y.m)(o.e(109).then(o.bind(null, 561)))
                },
                name: "temple-events-health-fair-2019"
            }, {
                path: "/temple-events/health-lectures",
                component: function() {
                    return Object(y.m)(o.e(110).then(o.bind(null, 562)))
                },
                name: "temple-events-health-lectures"
            }, {
                path: "/temple-events/hindu-festivals",
                component: function() {
                    return Object(y.m)(o.e(111).then(o.bind(null, 563)))
                },
                name: "temple-events-hindu-festivals"
            }, {
                path: "/temple-events/holi",
                component: function() {
                    return Object(y.m)(o.e(114).then(o.bind(null, 564)))
                },
                name: "temple-events-holi"
            }, {
                path: "/temple-events/holi-2020",
                component: function() {
                    return Object(y.m)(o.e(112).then(o.bind(null, 565)))
                },
                name: "temple-events-holi-2020"
            }, {
                path: "/temple-events/holi-2021",
                component: function() {
                    return Object(y.m)(o.e(113).then(o.bind(null, 566)))
                },
                name: "temple-events-holi-2021"
            }, {
                path: "/temple-events/karthika-masa",
                component: function() {
                    return Object(y.m)(o.e(118).then(o.bind(null, 567)))
                },
                name: "temple-events-karthika-masa"
            }, {
                path: "/temple-events/karthika-masa-2019",
                component: function() {
                    return Object(y.m)(o.e(115).then(o.bind(null, 568)))
                },
                name: "temple-events-karthika-masa-2019"
            }, {
                path: "/temple-events/karthika-masa-2020",
                component: function() {
                    return Object(y.m)(o.e(116).then(o.bind(null, 569)))
                },
                name: "temple-events-karthika-masa-2020"
            }, {
                path: "/temple-events/karthika-masa-2021",
                component: function() {
                    return Object(y.m)(o.e(117).then(o.bind(null, 570)))
                },
                name: "temple-events-karthika-masa-2021"
            }, {
                path: "/temple-events/khanuman-2019",
                component: function() {
                    return Object(y.m)(o.e(119).then(o.bind(null, 571)))
                },
                name: "temple-events-khanuman-2019"
            }, {
                path: "/temple-events/khanuman-2020",
                component: function() {
                    return Object(y.m)(o.e(120).then(o.bind(null, 572)))
                },
                name: "temple-events-khanuman-2020"
            }, {
                path: "/temple-events/khanuman-2021",
                component: function() {
                    return Object(y.m)(o.e(121).then(o.bind(null, 573)))
                },
                name: "temple-events-khanuman-2021"
            }, {
                path: "/temple-events/koti-anagha-vrata-yagna",
                component: function() {
                    return Object(y.m)(o.e(122).then(o.bind(null, 574)))
                },
                name: "temple-events-koti-anagha-vrata-yagna"
            }, {
                path: "/temple-events/koti-mahayagna",
                component: function() {
                    return Object(y.m)(o.e(123).then(o.bind(null, 575)))
                },
                name: "temple-events-koti-mahayagna"
            }, {
                path: "/temple-events/krishnashtami",
                component: function() {
                    return Object(y.m)(o.e(124).then(o.bind(null, 576)))
                },
                name: "temple-events-krishnashtami"
            }, {
                path: "/temple-events/life-and-works-of-sri-adi-sankara-lecture",
                component: function() {
                    return Object(y.m)(o.e(125).then(o.bind(null, 577)))
                },
                name: "temple-events-life-and-works-of-sri-adi-sankara-lecture"
            }, {
                path: "/temple-events/mahaganapathy-utsav-2019",
                component: function() {
                    return Object(y.m)(o.e(126).then(o.bind(null, 578)))
                },
                name: "temple-events-mahaganapathy-utsav-2019"
            }, {
                path: "/temple-events/mahaganapathy-utsav-2020",
                component: function() {
                    return Object(y.m)(o.e(127).then(o.bind(null, 579)))
                },
                name: "temple-events-mahaganapathy-utsav-2020"
            }, {
                path: "/temple-events/mahaganapathy-utsav-2021",
                component: function() {
                    return Object(y.m)(o.e(128).then(o.bind(null, 580)))
                },
                name: "temple-events-mahaganapathy-utsav-2021"
            }, {
                path: "/temple-events/maruthi-mahima-pravachanam",
                component: function() {
                    return Object(y.m)(o.e(129).then(o.bind(null, 581)))
                },
                name: "temple-events-maruthi-mahima-pravachanam"
            }, {
                path: "/temple-events/matajayanti",
                component: function() {
                    return Object(y.m)(o.e(131).then(o.bind(null, 582)))
                },
                name: "temple-events-matajayanti"
            }, {
                path: "/temple-events/matajayanti-2021",
                component: function() {
                    return Object(y.m)(o.e(130).then(o.bind(null, 583)))
                },
                name: "temple-events-matajayanti-2021"
            }, {
                path: "/temple-events/matakarunamayi-lecture",
                component: function() {
                    return Object(y.m)(o.e(132).then(o.bind(null, 513)))
                },
                name: "temple-events-matakarunamayi-lecture"
            }, {
                path: "/temple-events/rama-katha-discourse",
                component: function() {
                    return Object(y.m)(o.e(133).then(o.bind(null, 502)))
                },
                name: "temple-events-rama-katha-discourse"
            }, {
                path: "/temple-events/ramadasu",
                component: function() {
                    return Object(y.m)(o.e(134).then(o.bind(null, 487)))
                },
                name: "temple-events-ramadasu"
            }, {
                path: "/temple-events/remote-events-services",
                component: function() {
                    return Object(y.m)(o.e(136).then(o.bind(null, 437)))
                },
                name: "temple-events-remote-events-services"
            }, {
                path: "/temple-events/sadhana-panchakam-lecture",
                component: function() {
                    return Object(y.m)(o.e(137).then(o.bind(null, 485)))
                },
                name: "temple-events-sadhana-panchakam-lecture"
            }, {
                path: "/temple-events/sankeertana-saptaham",
                component: function() {
                    return Object(y.m)(o.e(138).then(o.bind(null, 481)))
                },
                name: "temple-events-sankeertana-saptaham"
            }, {
                path: "/temple-events/sankranti-2021",
                component: function() {
                    return Object(y.m)(o.e(139).then(o.bind(null, 480)))
                },
                name: "temple-events-sankranti-2021"
            }, {
                path: "/temple-events/sankranti-2022",
                component: function() {
                    return Object(y.m)(o.e(140).then(o.bind(null, 479)))
                },
                name: "temple-events-sankranti-2022"
            }, {
                path: "/temple-events/shivaratri",
                component: function() {
                    return Object(y.m)(o.e(144).then(o.bind(null, 478)))
                },
                name: "temple-events-shivaratri"
            }, {
                path: "/temple-events/shivaratri-2020",
                component: function() {
                    return Object(y.m)(o.e(141).then(o.bind(null, 476)))
                },
                name: "temple-events-shivaratri-2020"
            }, {
                path: "/temple-events/shivaratri-2021",
                component: function() {
                    return Object(y.m)(o.e(142).then(o.bind(null, 475)))
                },
                name: "temple-events-shivaratri-2021"
            }, {
                path: "/temple-events/shivaratri-2022",
                component: function() {
                    return Object(y.m)(o.e(143).then(o.bind(null, 474)))
                },
                name: "temple-events-shivaratri-2022"
            }, {
                path: "/temple-events/spiritual-discourses",
                component: function() {
                    return Object(y.m)(o.e(145).then(o.bind(null, 473)))
                },
                name: "temple-events-spiritual-discourses"
            }, {
                path: "/temple-events/sri-krishna-tattvam-discourse",
                component: function() {
                    return Object(y.m)(o.e(146).then(o.bind(null, 472)))
                },
                name: "temple-events-sri-krishna-tattvam-discourse"
            }, {
                path: "/temple-events/sri-rama-navaratri",
                component: function() {
                    return Object(y.m)(o.e(149).then(o.bind(null, 471)))
                },
                name: "temple-events-sri-rama-navaratri"
            }, {
                path: "/temple-events/sri-rama-navaratri-2020",
                component: function() {
                    return Object(y.m)(o.e(147).then(o.bind(null, 470)))
                },
                name: "temple-events-sri-rama-navaratri-2020"
            }, {
                path: "/temple-events/sri-rama-navaratri-2021",
                component: function() {
                    return Object(y.m)(o.e(148).then(o.bind(null, 469)))
                },
                name: "temple-events-sri-rama-navaratri-2021"
            }, {
                path: "/temple-events/srinivasakalyana-2021",
                component: function() {
                    return Object(y.m)(o.e(150).then(o.bind(null, 468)))
                },
                name: "temple-events-srinivasakalyana-2021"
            }, {
                path: "/temple-events/srirudra-bhashyam-pravachanam",
                component: function() {
                    return Object(y.m)(o.e(151).then(o.bind(null, 467)))
                },
                name: "temple-events-srirudra-bhashyam-pravachanam"
            }, {
                path: "/temple-events/sriswamiji-birthday-celebrations",
                component: function() {
                    return Object(y.m)(o.e(152).then(o.bind(null, 461)))
                },
                name: "temple-events-sriswamiji-birthday-celebrations"
            }, {
                path: "/temple-events/sriviswayogi-lecture-2019",
                component: function() {
                    return Object(y.m)(o.e(153).then(o.bind(null, 460)))
                },
                name: "temple-events-sriviswayogi-lecture-2019"
            }, {
                path: "/temple-events/subramanya",
                component: function() {
                    return Object(y.m)(o.e(156).then(o.bind(null, 459)))
                },
                name: "temple-events-subramanya"
            }, {
                path: "/temple-events/subramanya-2019",
                component: function() {
                    return Object(y.m)(o.e(154).then(o.bind(null, 458)))
                },
                name: "temple-events-subramanya-2019"
            }, {
                path: "/temple-events/subramanya-2021",
                component: function() {
                    return Object(y.m)(o.e(155).then(o.bind(null, 457)))
                },
                name: "temple-events-subramanya-2021"
            }, {
                path: "/temple-events/sundarakanda-lecture-series",
                component: function() {
                    return Object(y.m)(o.e(157).then(o.bind(null, 524)))
                },
                name: "temple-events-sundarakanda-lecture-series"
            }, {
                path: "/temple-events/surya-aradhana-pravachanam",
                component: function() {
                    return Object(y.m)(o.e(158).then(o.bind(null, 506)))
                },
                name: "temple-events-surya-aradhana-pravachanam"
            }, {
                path: "/temple-events/swamiji-birthday-2021",
                component: function() {
                    return Object(y.m)(o.e(159).then(o.bind(null, 504)))
                },
                name: "temple-events-swamiji-birthday-2021"
            }, {
                path: "/temple-events/thaipoosam",
                component: function() {
                    return Object(y.m)(o.e(163).then(o.bind(null, 493)))
                },
                name: "temple-events-thaipoosam"
            }, {
                path: "/temple-events/thaipoosam-2020",
                component: function() {
                    return Object(y.m)(o.e(160).then(o.bind(null, 491)))
                },
                name: "temple-events-thaipoosam-2020"
            }, {
                path: "/temple-events/thaipoosam-2021",
                component: function() {
                    return Object(y.m)(o.e(161).then(o.bind(null, 490)))
                },
                name: "temple-events-thaipoosam-2021"
            }, {
                path: "/temple-events/thaipoosam-2022",
                component: function() {
                    return Object(y.m)(o.e(162).then(o.bind(null, 489)))
                },
                name: "temple-events-thaipoosam-2022"
            }, {
                path: "/temple-events/thanuman-2019",
                component: function() {
                    return Object(y.m)(o.e(164).then(o.bind(null, 484)))
                },
                name: "temple-events-thanuman-2019"
            }, {
                path: "/temple-events/thanuman-2021",
                component: function() {
                    return Object(y.m)(o.e(165).then(o.bind(null, 483)))
                },
                name: "temple-events-thanuman-2021"
            }, {
                path: "/temple-events/thanumanjayanti-2021",
                component: function() {
                    return Object(y.m)(o.e(166).then(o.bind(null, 477)))
                },
                name: "temple-events-thanumanjayanti-2021"
            }, {
                path: "/temple-events/thyagaraja",
                component: function() {
                    return Object(y.m)(o.e(167).then(o.bind(null, 466)))
                },
                name: "temple-events-thyagaraja"
            }, {
                path: "/temple-events/ugadi-2019",
                component: function() {
                    return Object(y.m)(o.e(168).then(o.bind(null, 452)))
                },
                name: "temple-events-ugadi-2019"
            }, {
                path: "/temple-events/vasantha-2022",
                component: function() {
                    return Object(y.m)(o.e(169).then(o.bind(null, 586)))
                },
                name: "temple-events-vasantha-2022"
            }, {
                path: "/temple-events/walkathon",
                component: function() {
                    return Object(y.m)(o.e(170).then(o.bind(null, 436)))
                },
                name: "temple-events-walkathon"
            }, {
                path: "/temple-events/yogaday-2021",
                component: function() {
                    return Object(y.m)(o.e(171).then(o.bind(null, 454)))
                },
                name: "temple-events-yogaday-2021"
            }, {
                path: "/visit/checkin-backup-08-20-2021-appointmentcheckin",
                component: function() {
                    return Object(y.m)(o.e(172).then(o.bind(null, 427)))
                },
                name: "visit-checkin-backup-08-20-2021-appointmentcheckin"
            }, {
                path: "/visit/index-backup-08-20-2021-appointmentbooking",
                component: function() {
                    return Object(y.m)(o.e(174).then(o.bind(null, 426)))
                },
                name: "visit-index-backup-08-20-2021-appointmentbooking"
            }, {
                path: "/visit/old-initial-appointment",
                component: function() {
                    return Object(y.m)(o.e(175).then(o.bind(null, 451)))
                },
                name: "visit-old-initial-appointment"
            }, {
                path: "/classes/religious/aditya-hridayam",
                component: function() {
                    return Object(y.m)(o.e(20).then(o.bind(null, 450)))
                },
                name: "classes-religious-aditya-hridayam"
            }, {
                path: "/classes/religious/aditya-narayana",
                component: function() {
                    return Object(y.m)(o.e(21).then(o.bind(null, 585)))
                },
                name: "classes-religious-aditya-narayana"
            }, {
                path: "/classes/religious/bhagavad-gita-maha-yagna",
                component: function() {
                    return Object(y.m)(o.e(22).then(o.bind(null, 584)))
                },
                name: "classes-religious-bhagavad-gita-maha-yagna"
            }, {
                path: "/classes/religious/bhagavad-gita-recitation",
                component: function() {
                    return Object(y.m)(o.e(23).then(o.bind(null, 488)))
                },
                name: "classes-religious-bhagavad-gita-recitation"
            }, {
                path: "/classes/religious/narayana-kavacham",
                component: function() {
                    return Object(y.m)(o.e(25).then(o.bind(null, 486)))
                },
                name: "classes-religious-narayana-kavacham"
            }, {
                path: "/classes/religious/shatasloki-ramayana",
                component: function() {
                    return Object(y.m)(o.e(26).then(o.bind(null, 465)))
                },
                name: "classes-religious-shatasloki-ramayana"
            }, {
                path: "/classes/religious/vishnu-sahasranama",
                component: function() {
                    return Object(y.m)(o.e(27).then(o.bind(null, 464)))
                },
                name: "classes-religious-vishnu-sahasranama"
            }, {
                path: "/classes/yoga/dattakriyayoga",
                component: function() {
                    return Object(y.m)(o.e(30).then(o.bind(null, 462)))
                },
                name: "classes-yoga-dattakriyayoga"
            }, {
                path: "/classes/yoga/yogaadults",
                component: function() {
                    return Object(y.m)(o.e(32).then(o.bind(null, 456)))
                },
                name: "classes-yoga-yogaadults"
            }, {
                path: "/classes/yoga/yogakids",
                component: function() {
                    return Object(y.m)(o.e(33).then(o.bind(null, 455)))
                },
                name: "classes-yoga-yogakids"
            }, {
                path: "/temple-events/community-activities/community-ask",
                component: function() {
                    return Object(y.m)(o.e(83).then(o.bind(null, 417)))
                },
                name: "temple-events-community-activities-community-ask"
            }, {
                path: "/temple-events/ramadasu/index-old",
                component: function() {
                    return Object(y.m)(o.e(135).then(o.bind(null, 453)))
                },
                name: "temple-events-ramadasu-index-old"
            }, {
                path: "/classes/:details",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(15)]).then(o.bind(null, 422)))
                },
                name: "classes-details"
            }, {
                path: "/community/:details",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(35)]).then(o.bind(null, 421)))
                },
                name: "community-details"
            }, {
                path: "/cultural/:details",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(39)]).then(o.bind(null, 424)))
                },
                name: "cultural-details"
            }, {
                path: "/discourses/:details",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(42)]).then(o.bind(null, 435)))
                },
                name: "discourses-details"
            }, {
                path: "/featured/:details",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(59)]).then(o.bind(null, 423)))
                },
                name: "featured-details"
            }, {
                path: "/festivals-events/:details?",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(61)]).then(o.bind(null, 425)))
                },
                name: "festivals-events-details"
            }, {
                path: "/health-education/:details?",
                component: function() {
                    return Object(y.m)(Promise.all([o.e(1), o.e(0), o.e(2), o.e(63)]).then(o.bind(null, 432)))
                },
                name: "health-education-details"
            }, {
                path: "/",
                component: function() {
                    return Object(y.m)(o.e(66).then(o.bind(null, 434)))
                },
                name: "index"
            }],
            fallback: !1
        };

        function M(t, e) {
            var base = e._app && e._app.basePath || _.base,
                o = new w.a(j(j({}, _), {}, {
                    base: base
                })),
                n = o.push;
            o.push = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z,
                    o = arguments.length > 2 ? arguments[2] : void 0;
                return n.call(this, t, e, o)
            };
            var r = o.resolve.bind(o);
            return o.resolve = function(t, e, o) {
                return "string" == typeof t && (t = Object(v.c)(t)), r(t, e, o)
            }, o
        }
        var O = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(t, e) {
                    var o = e.parent,
                        data = e.data,
                        n = e.props,
                        r = o.$createElement;
                    data.nuxtChild = !0;
                    for (var l = o, d = o.$nuxt.nuxt.transitions, c = o.$nuxt.nuxt.defaultTransition, m = 0; o;) o.$vnode && o.$vnode.data.nuxtChild && m++, o = o.$parent;
                    data.nuxtChildDepth = m;
                    var f = d[m] || c,
                        h = {};
                    C.forEach((function(t) {
                        void 0 !== f[t] && (h[t] = f[t])
                    }));
                    var x = {};
                    D.forEach((function(t) {
                        "function" == typeof f[t] && (x[t] = f[t].bind(l))
                    }));
                    var w = x.beforeEnter;
                    if (x.beforeEnter = function(t) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), w) return w.call(l, t)
                        }, !1 === f.css) {
                        var v = x.leave;
                        (!v || v.length < 2) && (x.leave = function(t, e) {
                            v && v.call(l, t), l.$nextTick(e)
                        })
                    }
                    var y = r("routerView", data);
                    return n.keepAlive && (y = r("keep-alive", {
                        props: n.keepAliveProps
                    }, [y])), r("transition", {
                        props: h,
                        on: x
                    }, [y])
                }
            },
            C = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            D = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            I = {
                name: "NuxtError",
                props: {
                    error: {
                        type: Object,
                        default: null
                    }
                },
                computed: {
                    statusCode: function() {
                        return this.error && this.error.statusCode || 500
                    },
                    message: function() {
                        return this.error.message || "Error"
                    }
                },
                head: function() {
                    return {
                        title: this.message,
                        meta: [{
                            name: "viewport",
                            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                        }]
                    }
                }
            },
            N = (o(233), o(13)),
            S = Object(N.a)(I, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "__nuxt-error-page"
                }, [o("div", {
                    staticClass: "error"
                }, [o("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "90",
                        height: "90",
                        fill: "#DBE1EC",
                        viewBox: "0 0 48 48"
                    }
                }, [o("path", {
                    attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                    }
                })]), t._v(" "), o("div", {
                    staticClass: "title"
                }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? o("p", {
                    staticClass: "description"
                }, [void 0 === t.$route ? o("a", {
                    staticClass: "error-link",
                    attrs: {
                        href: "/"
                    }
                }) : o("NuxtLink", {
                    staticClass: "error-link",
                    attrs: {
                        to: "/"
                    }
                }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
            }), [function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "logo"
                }, [o("a", {
                    attrs: {
                        href: "https://nuxtjs.org",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [t._v("Nuxt")])])
            }], !1, null, null, null).exports,
            T = o(26),
            L = (o(58), o(112), {
                name: "Nuxt",
                components: {
                    NuxtChild: O,
                    NuxtError: S
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(t) {
                    this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(y.c)(this.$route.matched[0].path)(this.$route.params);
                        var t = Object(T.a)(this.$route.matched, 1)[0];
                        if (!t) return this.$route.path;
                        var e = t.components.default;
                        if (e && e.options) {
                            var o = e.options;
                            if (o.key) return "function" == typeof o.key ? o.key(this.$route) : o.key
                        }
                        return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(t) {
                    var e = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return e.errorFromNuxtError = !1
                    })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return e.displayingNuxtError = !1
                    })), t(S, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : t("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            }),
            E = (o(48), o(47), o(41), o(42), {
                name: "NuxtLoading",
                data: function() {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                },
                computed: {
                    left: function() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy: function() {
                    this.clear()
                },
                methods: {
                    clear: function() {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    },
                    start: function() {
                        var t = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                            return t.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    },
                    set: function(t) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                    },
                    get: function() {
                        return this.percent
                    },
                    increase: function(t) {
                        return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                    },
                    decrease: function(t) {
                        return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                    },
                    pause: function() {
                        return clearInterval(this._timer), this
                    },
                    resume: function() {
                        return this.startTimer(), this
                    },
                    finish: function() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide: function() {
                        var t = this;
                        return this.clear(), setTimeout((function() {
                            t.show = !1, t.$nextTick((function() {
                                t.percent = 0, t.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail: function(t) {
                        return this.canSucceed = !1, this
                    },
                    startTimer: function() {
                        var t = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                            t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                        }), 100)
                    }
                },
                render: function(t) {
                    var e = t(!1);
                    return this.show && (e = t("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), e
                }
            }),
            A = (o(235), Object(N.a)(E, undefined, undefined, !1, null, null, null).exports),
            P = (o(237), o(239), o(241), o(243), o(245), o(247), o(259), o(276), [function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("li", [o("a", {
                    attrs: {
                        href: "https://dallashanumanstore.org/",
                        target: "_new"
                    }
                }, [t._v("Online Donations")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "col-lg-4 col-md-4 col-sm-6 col-xs-12"
                }, [o("div", {
                    staticClass: "widget w-about"
                }, [o("a", {
                    staticClass: "logo",
                    attrs: {
                        href: "#"
                    }
                }, [o("div", {
                    staticClass: "img-wrap"
                }, [o("img", {
                    attrs: {
                        src: "https://assets.dallashanuman.net/images/layout/logo-white-small.png",
                        alt: "KSHT logo"
                    }
                })]), t._v(" "), o("div", {
                    staticClass: "title-block"
                }, [o("h6", {
                    staticClass: "logo-title"
                }, [t._v("Karya Siddhi Hanuman Temple ")]), t._v(" "), o("div", {
                    staticClass: "sub-title"
                }, [t._v("12030 Independence Pkwy")]), t._v(" "), o("div", {
                    staticClass: "sub-title"
                }, [t._v("Frisco TX 75035")]), t._v(" "), o("div", {
                    staticClass: "sub-title"
                }, [t._v("Phone: (866) 996 - 6767")])]), t._v(" "), o("div", {
                    staticClass: "ripple-container"
                })]), t._v(" "), o("ul", {
                    staticClass: "no-circle"
                }, [o("li", [t._v("Temple Hours")]), t._v(" "), o("li", [o("span", {
                    staticClass: "color-ksht-lime"
                }, [t._v(" Mon to Fri ")]), t._v(" 8am to 1pm & 5:30 to 8:30pm")]), t._v(" "), o("li", [o("span", {
                    staticClass: "color-ksht-blue-sky"
                }, [t._v(" Sat & Sun")]), t._v(" 8am to 8:30pm ")]), o("br"), t._v(" "), o("li", [t._v("Datta Yoga Center - 501(c)(3) org")]), t._v(" "), o("li", [t._v("Nonprofit Tax ID: "), o("span", {
                    staticClass: "color-white"
                }, [t._v(" 25-1512568 ")])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12"
                }, [o("div", {
                    staticClass: "sub-footer-copyright"
                }, [o("span", [t._v(" Copyright © "), o("a", {
                    attrs: {
                        href: "index.html"
                    }
                }, [t._v("KSHT")]), t._v(" All Rights Reserved\n            ")])])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("a", {
                    staticClass: "back-to-top",
                    attrs: {
                        href: "#"
                    }
                }, [e("img", {
                    staticClass: "back-icon",
                    attrs: {
                        src: o(196),
                        alt: "arrow"
                    }
                })])
            }]),
            R = {
                components: {
                    TheHeader: Object(N.a)({}, (function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", [n("div", {
                            staticClass: "header--standard header--standard",
                            attrs: {
                                id: "header--standard"
                            }
                        }, [n("div", {
                            staticClass: "container"
                        }, [n("div", {
                            staticClass: "header--standard-wrap"
                        }, [n("nuxt-link", {
                            staticClass: "logo",
                            attrs: {
                                to: "/"
                            }
                        }, [n("div", [n("img", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/images/layout/logo-colored-small.png",
                                alt: "KSHT"
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "title-block"
                        }, [n("h6", {
                            staticClass: "logo-title"
                        }, [t._v("Karya Siddhi "), n("br"), t._v("Hanuman Temple")]), t._v(" "), n("div", {
                            staticClass: "sub-title"
                        }, [t._v("Frisco Texas")])])]), t._v(" "), n("a", {
                            staticClass: "open-responsive-menu js-open-responsive-menu ",
                            attrs: {
                                href: "/"
                            }
                        }, [n("img", {
                            staticClass: "olymp-menu-icon",
                            attrs: {
                                src: o(278)
                            }
                        }), t._v(" "), n("use", {
                            attrs: {
                                "xlink:href": o(136) + "#olymp-menu-icon"
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "nav nav-pills nav1 header-menu"
                        }, [n("div", {
                            staticClass: "mCustomScrollbar"
                        }, [n("ul", {
                            staticClass: "no-circle"
                        }, [n("li", {
                            staticClass: "nav-item dropdown"
                        }, [n("a", {
                            staticClass: "nav-link dropdown-toggle",
                            attrs: {
                                "data-hover": "dropdown",
                                "data-toggle": "dropdown",
                                href: "#",
                                role: "button",
                                "aria-haspopup": "false",
                                "aria-expanded": "false",
                                tabindex: "1"
                            }
                        }, [t._v("Temple Events")]), t._v(" "), n("div", {
                            staticClass: "dropdown-menu"
                        }, [n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/calendar"
                            }
                        }, [t._v("Calendar")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/temple-events/shivaratri-2022"
                            }
                        }, [t._v("Maha Shivaratri \n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/visit"
                            }
                        }, [t._v("Temple Visit")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/temple-events/remote-events-services"
                            }
                        }, [t._v("Remote Events & Services\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/coronavirus-preparedness"
                            }
                        }, [t._v("Coronavirus(COVID-19)\n                    Updates")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/temple-events/hindu-festivals"
                            }
                        }, [t._v("Hindu Festivals")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/temple-events/cultural-programs"
                            }
                        }, [t._v("Cultural Programs")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/temple-events/spiritual-discourses"
                            }
                        }, [t._v("Spiritual Discourses\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/temple-events/community-activities"
                            }
                        }, [t._v("Community Activies\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/temple-events/health-lectures"
                            }
                        }, [t._v("Health Lectures")])], 1)]), t._v(" "), n("li", {
                            staticClass: "nav-item dropdown"
                        }, [n("a", {
                            staticClass: "nav-link dropdown-toggle",
                            attrs: {
                                "data-hover": "dropdown",
                                "data-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "false",
                                "aria-expanded": "false",
                                tabindex: "1"
                            }
                        }, [t._v("Puja & Services")]), t._v(" "), n("div", {
                            staticClass: "dropdown-menu"
                        }, [n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/puja-schedules"
                            }
                        }, [t._v("Puja Schedules")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/request-priest"
                            }
                        }, [t._v("Request a Priest")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/cafeteria"
                            }
                        }, [t._v("Cafeteria")]), t._v(" "), n("hr"), t._v(" "), n("a", {
                            staticClass: "dropdown-item",
                            attrs: {
                                href: "https://dallashanumanstore.org/store/Puja",
                                target: "_new"
                            }
                        }, [t._v("Sponsor Puja\n                    Sevas")]), t._v(" "), n("hr"), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/car-puja"
                            }
                        }, [t._v("Car Puja")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/annadaan"
                            }
                        }, [t._v("Annadaan")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/thoram"
                            }
                        }, [t._v("Hanuman Thoram")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/vadamala-archana"
                            }
                        }, [t._v("Vadamala Archana")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/anthralaya-seva"
                            }
                        }, [t._v("Anthralaya Seva")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/puja-services/pradhana-sevas"
                            }
                        }, [t._v("Pradhana Sevas")])], 1)]), t._v(" "), n("li", {
                            staticClass: "nav-item dropdown"
                        }, [n("a", {
                            staticClass: "nav-link dropdown-toggle",
                            attrs: {
                                "data-hover": "dropdown",
                                "data-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "false",
                                "aria-expanded": "false",
                                tabindex: "1"
                            }
                        }, [t._v("Featured Posts")]), t._v(" "), n("div", {
                            staticClass: "dropdown-menu"
                        }, [n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/rajagopura-courtyard"
                            }
                        }, [t._v("Rajagopura Courtyard\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/har-ghar-gita"
                            }
                        }, [t._v("Har Ghar Gita")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/dhyana-with-mouna"
                            }
                        }, [t._v("Dhyana with Mouna\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/hanuman-sethu-bandha"
                            }
                        }, [t._v("Hanuman Setu Bandha\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/rajagopura"
                            }
                        }, [t._v("Rajagopura")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/kumbhabhisheka"
                            }
                        }, [t._v("Kumbhabhisheka")])], 1)]), t._v(" "), n("li", {
                            staticClass: "nav-item dropdown"
                        }, [n("a", {
                            staticClass: "nav-link dropdown-toggle",
                            attrs: {
                                "data-hover": "dropdown",
                                "data-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "false",
                                "aria-expanded": "false",
                                tabindex: "1"
                            }
                        }, [t._v("Donate")]), t._v(" "), n("div", {
                            staticClass: "dropdown-menu"
                        }, [n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/donate/general"
                            }
                        }, [t._v("General")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/donate/corporate-matching"
                            }
                        }, [t._v("Corporate Matching")]), t._v(" "), n("hr"), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/hanuman-sethu-bandha"
                            }
                        }, [t._v("Hanuman Setu Bandha\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/rajagopura-courtyard"
                            }
                        }, [t._v("Rajagopura Courtyard\n                  ")]), t._v(" "), n("a", {
                            staticClass: "dropdown-item",
                            attrs: {
                                href: "https://dallashanumanstore.org/store/Donations/Temple-Main/General",
                                target: "_new"
                            }
                        }, [t._v("Donate Now")])], 1)]), t._v(" "), n("li", {
                            staticClass: "nav-item dropdown"
                        }, [n("a", {
                            staticClass: "nav-link dropdown-toggle",
                            attrs: {
                                "data-hover": "dropdown",
                                "data-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "false",
                                "aria-expanded": "false",
                                tabindex: "1"
                            }
                        }, [t._v("Classes")]), t._v(" "), n("div", {
                            staticClass: "dropdown-menu"
                        }, [n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/schedules"
                            }
                        }, [t._v("Schedules")]), t._v(" "), n("hr"), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/arts"
                            }
                        }, [t._v("Arts")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/bala-datta"
                            }
                        }, [t._v("Bala Datta")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/dance"
                            }
                        }, [t._v("Dance")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/featured-posts/dhyana-with-mouna"
                            }
                        }, [t._v("Dhyana with Mouna\n                  ")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/religious"
                            }
                        }, [t._v("Religious")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/violin"
                            }
                        }, [t._v("Violin")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/youth-group"
                            }
                        }, [t._v("Youth Group")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/classes/yoga"
                            }
                        }, [t._v("Yoga")])], 1)]), t._v(" "), n("li", {
                            staticClass: "nav-item dropdown"
                        }, [n("a", {
                            staticClass: "nav-link dropdown-toggle",
                            attrs: {
                                "data-hover": "dropdown",
                                "data-toggle": "dropdown",
                                role: "button",
                                "aria-haspopup": "false",
                                "aria-expanded": "false",
                                tabindex: "1"
                            }
                        }, [t._v("About")]), t._v(" "), n("div", {
                            staticClass: "dropdown-menu"
                        }, [n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/history"
                            }
                        }, [t._v("History")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/swamiji"
                            }
                        }, [t._v("Sri Swamiji")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/deities"
                            }
                        }, [t._v("Deities")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/priests"
                            }
                        }, [t._v("Priests")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/board"
                            }
                        }, [t._v("Board")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/facility"
                            }
                        }, [t._v("Facilities")]), t._v(" "), n("hr"), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/parking"
                            }
                        }, [t._v("Parking")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/about/directions"
                            }
                        }, [t._v("Hours & Directions")]), t._v(" "), n("nuxt-link", {
                            staticClass: "dropdown-item",
                            attrs: {
                                to: "/contact"
                            }
                        }, [t._v("Contact")])], 1)]), t._v(" "), n("li", {
                            staticClass: "close-responsive-menu js-close-responsive-menu"
                        }, [n("img", {
                            staticClass: "olymp-close-icon",
                            attrs: {
                                src: o(279)
                            }
                        }), t._v(" "), n("use", {
                            attrs: {
                                "xlink:href": o(136) + "#olymp-close-icon"
                            }
                        })])])])]), t._v(" "), t._m(0), t._v(" "), t._m(1)], 1)])])])
                    }), [function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("a", {
                            staticClass: "logo",
                            attrs: {
                                href: "https://dallashanumanstore.org",
                                target: "_new"
                            }
                        }, [e("div", [e("img", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/images/layout/logo-estore.png",
                                alt: "eStore"
                            }
                        })])])
                    }, function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("a", {
                            staticClass: "logo",
                            attrs: {
                                href: "https://dallashanumanstore.org/store/Donations/Temple-Other-Donations/General/General-Donation",
                                target: "_new"
                            }
                        }, [e("div", [e("img", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/images/layout/logo-donate.png",
                                alt: "eStore"
                            }
                        })])])
                    }], !1, null, null, null).exports,
                    TheFooter: Object(N.a)({}, (function() {
                        var t = this,
                            e = t.$createElement,
                            o = t._self._c || e;
                        return o("footer", [o("div", {
                            staticClass: "footer footer--dark",
                            attrs: {
                                id: "footer"
                            }
                        }, [o("div", {
                            staticClass: "container"
                        }, [o("div", {
                            staticClass: "row"
                        }, [o("div", {
                            staticClass: "col-lg-2 col-md-4 col-sm-6 col-xs-6"
                        }, [o("div", {
                            staticClass: "widget w-list"
                        }, [o("h6", {
                            staticClass: "title is-5"
                        }, [t._v("Temple")]), t._v(" "), o("ul", {
                            staticClass: "no-circle"
                        }, [o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/about/history"
                            }
                        }, [t._v("About KSHT")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/about/swamiji"
                            }
                        }, [t._v("His Holiness SGS Swamiji")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/about/directions"
                            }
                        }, [t._v("Hours & Directions")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/contact"
                            }
                        }, [t._v("Contact")])], 1)])])]), t._v(" "), o("div", {
                            staticClass: "col-lg-2 col-md-4 col-sm-6 col-xs-6"
                        }, [o("div", {
                            staticClass: "widget w-list"
                        }, [o("h6", {
                            staticClass: "title is-5"
                        }, [t._v("Events")]), t._v(" "), o("ul", {
                            staticClass: "no-circle"
                        }, [o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/puja-services/puja-schedules"
                            }
                        }, [t._v("Puja Schedules")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/temple-events/hindu-festivals"
                            }
                        }, [t._v("Hindu Festivals")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/puja-services/request-priest"
                            }
                        }, [t._v("Request a Priest")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/classes/schedules"
                            }
                        }, [t._v("Classes Schedule")])], 1)])])]), t._v(" "), o("div", {
                            staticClass: "col-lg-2 col-md-4 col-sm-6 col-xs-6"
                        }, [o("div", {
                            staticClass: "widget w-list"
                        }, [o("h6", {
                            staticClass: "title is-5"
                        }, [t._v("Puja")]), t._v(" "), o("ul", {
                            staticClass: "no-circle"
                        }, [o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/puja-services/car-puja"
                            }
                        }, [t._v("Car Puja")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/puja-services/annadaan"
                            }
                        }, [t._v("Annadaan")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/puja-services/thoram"
                            }
                        }, [t._v("Hanuman Thoram")])], 1), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/puja-services/vadamala-archana"
                            }
                        }, [t._v("Vadamala Archana")])], 1)])])]), t._v(" "), o("div", {
                            staticClass: "col-lg-2 col-md-4 col-sm-6 col-xs-6"
                        }, [o("div", {
                            staticClass: "widget w-list"
                        }, [o("h6", {
                            staticClass: "title is-5"
                        }, [t._v("KSHT")]), t._v(" "), o("ul", {
                            staticClass: "no-circle"
                        }, [o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/downloads"
                            }
                        }, [t._v("Downloads")])], 1), t._v(" "), t._m(0), t._v(" "), o("li", [o("nuxt-link", {
                            attrs: {
                                to: "/privacy-policy"
                            }
                        }, [t._v("Privacy Policy")])], 1)])])]), t._v(" "), t._m(1), t._v(" "), t._m(2)])])]), t._v(" "), t._m(3), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery-3.2.1.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery.appear.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery.mousewheel.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/perfect-scrollbar.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery.matchHeight.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/svgxuse.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/imagesloaded.pkgd.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/Headroom.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/velocity.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/ScrollMagic.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery.waypoints.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery.countTo.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/popper.min.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/material.min.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/bootstrap-select.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/smooth-scroll.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/selectize.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/swiper.jquery.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/moment.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/daterangepicker.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/simplecalendar.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/fullcalendar.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/isotope.pkgd.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/ajax-pagination.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/Chart.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/chartjs-plugin-deferred.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/circle-progress.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/loader.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/run-chart.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery.magnific-popup.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/jquery.gifplayer.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/mediaelement-and-player.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/mediaelement-playlist-plugin.min.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/base-init.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/bootstrap.bundle.js"
                            }
                        }), t._v(" "), o("script", {
                            attrs: {
                                src: "https://assets.dallashanuman.net/js/gav1.js"
                            }
                        })])
                    }), P, !1, null, null, null).exports
                }
            },
            $ = Object(N.a)(R, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", [o("TheHeader"), t._v(" "), o("nuxt"), t._v(" "), o("TheFooter")], 1)
            }), [], !1, null, null, null).exports,
            Y = {
                components: {
                    TheHeader: Object(N.a)({}, (function() {
                        var t = this,
                            e = t.$createElement;
                        t._self._c;
                        return t._m(0)
                    }), [function() {
                        var t = this,
                            e = t.$createElement,
                            o = t._self._c || e;
                        return o("nav", {
                            staticClass: "navbar",
                            attrs: {
                                role: "navigation",
                                "aria-label": "main navigation"
                            }
                        }, [o("div", {
                            staticClass: "navbar-brand"
                        }, [o("a", {
                            staticClass: "navbar-item",
                            attrs: {
                                href: "https://bulma.io"
                            }
                        }, [o("img", {
                            attrs: {
                                src: "https://bulma.io/images/bulma-logo.png",
                                width: "112",
                                height: "28"
                            }
                        })]), t._v(" "), o("a", {
                            staticClass: "navbar-burger",
                            attrs: {
                                role: "button",
                                "aria-label": "menu",
                                "aria-expanded": "false",
                                "data-target": "navbarBasicExample"
                            }
                        }, [o("span", {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }), t._v(" "), o("span", {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }), t._v(" "), o("span", {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        })])]), t._v(" "), o("div", {
                            staticClass: "navbar-menu",
                            attrs: {
                                id: "navbarBasicExample"
                            }
                        }, [o("div", {
                            staticClass: "navbar-start"
                        }, [o("a", {
                            staticClass: "navbar-item"
                        }, [t._v(" Home ")]), t._v(" "), o("a", {
                            staticClass: "navbar-item"
                        }, [t._v(" Documentation ")]), t._v(" "), o("div", {
                            staticClass: "navbar-item has-dropdown is-hoverable"
                        }, [o("a", {
                            staticClass: "navbar-link"
                        }, [t._v(" More ")]), t._v(" "), o("div", {
                            staticClass: "navbar-dropdown"
                        }, [o("a", {
                            staticClass: "navbar-item"
                        }, [t._v(" About ")]), t._v(" "), o("a", {
                            staticClass: "navbar-item"
                        }, [t._v(" Jobs ")]), t._v(" "), o("a", {
                            staticClass: "navbar-item"
                        }, [t._v(" Contact ")]), t._v(" "), o("hr", {
                            staticClass: "navbar-divider"
                        }), t._v(" "), o("a", {
                            staticClass: "navbar-item"
                        }, [t._v(" Report an issue ")])])])]), t._v(" "), o("div", {
                            staticClass: "navbar-end"
                        }, [o("div", {
                            staticClass: "navbar-item"
                        }, [o("div", {
                            staticClass: "buttons"
                        }, [o("a", {
                            staticClass: "button is-primary"
                        }, [o("strong", [t._v("Sign up")])]), t._v(" "), o("a", {
                            staticClass: "button is-light"
                        }, [t._v(" Log in ")])])])])])])
                    }], !1, null, null, null).exports,
                    TheFooter: Object(N.a)({}, (function() {
                        var t = this,
                            e = t.$createElement;
                        t._self._c;
                        return t._m(0)
                    }), [function() {
                        var t = this,
                            e = t.$createElement,
                            o = t._self._c || e;
                        return o("footer", {
                            staticClass: "footer block"
                        }, [o("div", {
                            staticClass: "content has-text-centered"
                        }, [o("p", [o("strong", [t._v("Bulma")]), t._v(" by\n      "), o("a", {
                            attrs: {
                                href: "https://jgthms.com"
                            }
                        }, [t._v("Jeremy Thomas")]), t._v(". The source code is\n      licensed\n      "), o("a", {
                            attrs: {
                                href: "http://opensource.org/licenses/mit-license.php"
                            }
                        }, [t._v("MIT")]), t._v(". The\n      website content is licensed\n      "), o("a", {
                            attrs: {
                                href: "http://creativecommons.org/licenses/by-nc-sa/4.0/"
                            }
                        }, [t._v("CC BY NC SA 4.0")]), t._v(".\n    ")])])])
                    }], !1, null, null, null).exports
                }
            },
            U = Object(N.a)(Y, (function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", [o("TheHeader"), t._v(" "), o("nuxt"), t._v(" "), o("TheFooter")], 1)
            }), [], !1, null, null, null).exports;

        function Q(t, e) {
            var o;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (o = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return B(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === o && t.constructor && (o = t.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(t);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return B(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    o && (t = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                d = !1;
            return {
                s: function() {
                    o = t[Symbol.iterator]()
                },
                n: function() {
                    var t = o.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, r = t
                },
                f: function() {
                    try {
                        l || null == o.return || o.return()
                    } finally {
                        if (d) throw r
                    }
                }
            }
        }

        function B(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }
        var H = {
                _default: Object(y.s)($),
                _webcms: Object(y.s)(U)
            },
            Z = {
                render: function(t, e) {
                    var o = t("NuxtLoading", {
                            ref: "loading"
                        }),
                        n = t(this.layout || "nuxt"),
                        r = t("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [n]),
                        l = t("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(t) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [r]);
                    return t("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [o, l])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: "",
                        nbFetching: 0
                    }
                },
                beforeCreate: function() {
                    l.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    var t = this;
                    return Object(n.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.$loading = t.$refs.loading;
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    },
                    isFetching: function() {
                        return this.nbFetching > 0
                    },
                    isPreview: function() {
                        return Boolean(this.$options.previewData)
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: function() {
                        var t = this;
                        return Object(n.a)(regeneratorRuntime.mark((function e() {
                            var o, n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((o = Object(y.h)(t.$route)).length) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return t.$loading.start(), n = o.map((function(e) {
                                            var p = [];
                                            if (e.$options.fetch && e.$options.fetch.length && p.push(Object(y.q)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                            else {
                                                var o, n = Q(Object(y.e)(e.$vnode.componentInstance));
                                                try {
                                                    for (n.s(); !(o = n.n()).done;) {
                                                        var component = o.value;
                                                        p.push(component.$fetch())
                                                    }
                                                } catch (t) {
                                                    n.e(t)
                                                } finally {
                                                    n.f()
                                                }
                                            }
                                            return e.$options.asyncData && p.push(Object(y.q)(e.$options.asyncData, t.context).then((function(t) {
                                                for (var o in t) l.a.set(e.$data, o, t[o])
                                            }))), Promise.all(p)
                                        })), e.prev = 5, e.next = 8, Promise.all(n);
                                    case 8:
                                        e.next = 15;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(y.k)(e.t0), t.error(e.t0);
                                    case 15:
                                        t.$loading.finish();
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 10]
                            ])
                        })))()
                    },
                    errorChanged: function() {
                        if (this.nuxt.err) {
                            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                            var t = (S.options || S).layout;
                            "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                        }
                    },
                    setLayout: function(t) {
                        return t && H["_" + t] || (t = "default"), this.layoutName = t, this.layout = H["_" + t], this.layout
                    },
                    loadLayout: function(t) {
                        return t && H["_" + t] || (t = "default"), Promise.resolve(H["_" + t])
                    }
                },
                components: {
                    NuxtLoading: A
                }
            };
        o(99), o(84);

        function X(t, e) {
            var o;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (o = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return F(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === o && t.constructor && (o = t.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(t);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return F(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    o && (t = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                d = !1;
            return {
                s: function() {
                    o = t[Symbol.iterator]()
                },
                n: function() {
                    var t = o.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, r = t
                },
                f: function() {
                    try {
                        l || null == o.return || o.return()
                    } finally {
                        if (d) throw r
                    }
                }
            }
        }

        function F(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }
        l.a.use(d.a);
        var G = ["state", "getters", "actions", "mutations"],
            J = {};
        (J = function(t, e) {
            if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
            return "function" != typeof t && (t = Object.assign({}, t)), V(t, e)
        }(o(280), "store/index.js")).modules = J.modules || {}, K(o(281), "cms.js"), K(o(282), "estore.js"), K(o(283), "vendor.js");
        var W = J instanceof Function ? J : function() {
            return new d.a.Store(Object.assign({
                strict: !1
            }, J))
        };

        function V(t, e) {
            if (t.state && "function" != typeof t.state) {
                console.warn("'state' should be a method that returns an object in ".concat(e));
                var o = Object.assign({}, t.state);
                t = Object.assign({}, t, {
                    state: function() {
                        return o
                    }
                })
            }
            return t
        }

        function K(t, e) {
            t = t.default || t;
            var o = e.replace(/\.(js|mjs)$/, "").split("/"),
                n = o[o.length - 1],
                r = "store/".concat(e);
            if (t = "state" === n ? function(t, e) {
                    if ("function" != typeof t) {
                        console.warn("".concat(e, " should export a method that returns an object"));
                        var o = Object.assign({}, t);
                        return function() {
                            return o
                        }
                    }
                    return V(t, e)
                }(t, r) : V(t, r), G.includes(n)) {
                var l = n;
                et(tt(J, o, {
                    isProperty: !0
                }), t, l)
            } else {
                "index" === n && (o.pop(), n = o[o.length - 1]);
                var d, c = tt(J, o),
                    m = X(G);
                try {
                    for (m.s(); !(d = m.n()).done;) {
                        var f = d.value;
                        et(c, t[f], f)
                    }
                } catch (t) {
                    m.e(t)
                } finally {
                    m.f()
                }!1 === t.namespaced && delete c.namespaced
            }
        }

        function tt(t, e) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = o.isProperty,
                r = void 0 !== n && n;
            if (!e.length || r && 1 === e.length) return t;
            var l = e.shift();
            return t.modules[l] = t.modules[l] || {}, t.modules[l].namespaced = !0, t.modules[l].modules = t.modules[l].modules || {}, tt(t.modules[l], e, {
                isProperty: r
            })
        }

        function et(t, e, o) {
            e && ("state" === o ? t.state = e || t.state : t[o] = Object.assign({}, t[o], e))
        }
        var ot = o(127),
            nt = (o(284), o(98)),
            at = o(195),
            it = o(95);

        function lt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }
        l.a.use(ot.a);
        var st = function(t, e) {
                var o, l = {
                        clients: {}
                    },
                    d = t.app,
                    c = (t.beforeNuxtRender, t.req),
                    m = "cmsBackendApiToken",
                    f = {
                        expires: 7,
                        path: "/",
                        secure: !1
                    },
                    h = new at.a(c && c.headers.cookie),
                    x = m;
                (o = {
                    httpEndpoint: "http://localhost:1337/graphql"
                }).validateToken || (o.validateToken = function() {
                    return !0
                });
                var w = o.cache ? o.cache : new it.a(o.inMemoryCacheOptions ? o.inMemoryCacheOptions : void 0);
                w.restore(window.__NUXT__ && window.__NUXT__.apollo ? window.__NUXT__.apollo.defaultClient : null), o.getAuth || (o.getAuth = function() {
                    var t = h.get(x);
                    return t && o.validateToken(t) ? "Bearer " + t : ""
                }), o.browserHttpEndpoint && (o.httpEndpoint = o.browserHttpEndpoint), o.apollo = {
                    defaultOptions: {
                        $query: {
                            fetchPolicy: "network-only",
                            errorPolicy: "all"
                        }
                    }
                }, o.ssr = !1, o.cache = w, o.tokenName = x;
                var v = Object(nt.a)(function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? lt(Object(source), !0).forEach((function(e) {
                            Object(r.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : lt(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, o));
                v.apolloClient.wsClient = v.wsClient, l.defaultClient = v.apolloClient;
                var y, k, j = Object.assign(l, {
                        defaultOptions: {
                            $query: {
                                fetchPolicy: "network-only",
                                errorPolicy: "all"
                            }
                        },
                        errorHandler: function(t) {
                            console.log("%cError", "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;", t.message)
                        }
                    }),
                    z = new ot.a(j);
                d.apolloProvider = z, e("apolloHelpers", {
                    onLogin: (k = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var o, n, r, l = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (o = l.length > 1 && void 0 !== l[1] ? l[1] : z.defaultClient, n = l.length > 2 && void 0 !== l[2] ? l[2] : f, r = l.length > 3 && void 0 !== l[3] && l[3], "number" == typeof n && (n = {
                                            expires: n
                                        }), "number" == typeof n.expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)), e ? h.set(m, e, n) : h.remove(m, n), o.wsClient && Object(nt.b)(o.wsClient), r) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.prev = 8, t.next = 11, o.resetStore();
                                case 11:
                                    t.next = 16;
                                    break;
                                case 13:
                                    t.prev = 13, t.t0 = t.catch(8), console.log("%cError on cache reset (setToken)", "color: orange;", t.t0.message);
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [8, 13]
                        ])
                    }))), function(t) {
                        return k.apply(this, arguments)
                    }),
                    onLogout: (y = Object(n.a)(regeneratorRuntime.mark((function t() {
                        var e, o, n = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = n.length > 0 && void 0 !== n[0] ? n[0] : z.defaultClient, o = n.length > 1 && void 0 !== n[1] && n[1], h.remove(m, f), e.wsClient && Object(nt.b)(e.wsClient), o) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.prev = 5, t.next = 8, e.resetStore();
                                case 8:
                                    t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10, t.t0 = t.catch(5), console.log("%cError on cache reset (logout)", "color: orange;", t.t0.message);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [5, 10]
                        ])
                    }))), function() {
                        return y.apply(this, arguments)
                    }),
                    getToken: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
                        return h.get(t)
                    }
                })
            },
            pt = o(128),
            ct = o.n(pt),
            mt = function(t, e) {
                t.$dayjs = ct.a, e("dayjs", ct.a)
            },
            ft = o(194);
        l.a.use(ft.a, {
            css: !0,
            materialDesignIcons: !1,
            materialDesignIconsHRef: "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
            async: !0
        });
        var gt = o(63),
            bt = o.n(gt),
            ut = o(190),
            ht = o.n(ut);

        function xt(t, e) {
            var o;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (o = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return wt(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === o && t.constructor && (o = t.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(t);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return wt(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    o && (t = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                d = !1;
            return {
                s: function() {
                    o = t[Symbol.iterator]()
                },
                n: function() {
                    var t = o.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, r = t
                },
                f: function() {
                    try {
                        l || null == o.return || o.return()
                    } finally {
                        if (d) throw r
                    }
                }
            }
        }

        function wt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }
        for (var vt = {
                setBaseURL: function(t) {
                    this.defaults.baseURL = t
                },
                setHeader: function(t, e) {
                    var o, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        r = xt(Array.isArray(n) ? n : [n]);
                    try {
                        for (r.s(); !(o = r.n()).done;) {
                            var l = o.value;
                            if (!e) return void delete this.defaults.headers[l][t];
                            this.defaults.headers[l][t] = e
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                },
                setToken: function(t, e) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = t ? (e ? e + " " : "") + t : null;
                    this.setHeader("Authorization", n, o)
                },
                onRequest: function(t) {
                    this.interceptors.request.use((function(e) {
                        return t(e) || e
                    }))
                },
                onResponse: function(t) {
                    this.interceptors.response.use((function(e) {
                        return t(e) || e
                    }))
                },
                onRequestError: function(t) {
                    this.interceptors.request.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onResponseError: function(t) {
                    this.interceptors.response.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onError: function(t) {
                    this.onRequestError(t), this.onResponseError(t)
                },
                create: function(t) {
                    return zt(ht()(t, this.defaults))
                }
            }, yt = function() {
                var t = jt[kt];
                vt["$" + t] = function() {
                    return this[t].apply(this, arguments).then((function(t) {
                        return t && t.data
                    }))
                }
            }, kt = 0, jt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; kt < jt.length; kt++) yt();
        var zt = function(t) {
                var e = bt.a.create(t);
                return e.CancelToken = bt.a.CancelToken, e.isCancel = bt.a.isCancel,
                    function(t) {
                        for (var e in vt) t[e] = vt[e].bind(t)
                    }(e), _t(e), e
            },
            _t = function(t) {
                var e = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    o = function() {
                        var t = "undefined" != typeof window && window.$nuxt;
                        return t && t.$loading && t.$loading.set ? t.$loading : e
                    },
                    n = 0;
                t.onRequest((function(t) {
                    t && !1 === t.progress || n++
                })), t.onResponse((function(t) {
                    t && t.config && !1 === t.config.progress || --n <= 0 && (n = 0, o().finish())
                })), t.onError((function(t) {
                    t && t.config && !1 === t.config.progress || (n--, bt.a.isCancel(t) ? n <= 0 && (n = 0, o().finish()) : (o().fail(), o().finish()))
                }));
                var r = function(t) {
                    if (n) {
                        var progress = 100 * t.loaded / (t.total * n);
                        o().set(Math.min(100, progress))
                    }
                };
                t.defaults.onUploadProgress = r, t.defaults.onDownloadProgress = r
            },
            Mt = function(t, e) {
                var o = t.$config && t.$config.axios || {},
                    n = o.browserBaseURL || o.baseURL || "http://localhost:3000/";
                var r = zt({
                    baseURL: n,
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                });
                t.$axios = r, e("axios", r)
            },
            Ot = o(73),
            Ct = o(77);

        function Dt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function It(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Dt(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Dt(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        Object(Ot.c)("required", It(It({}, Ct.d), {}, {
            message: "Valid value is required"
        })), Object(Ot.c)("email", It(It({}, Ct.c), {}, {
            message: "Valid email is required"
        })), Object(Ot.c)("digits", It(It({}, Ct.b), {}, {
            message: "Valid phone with 10 digits required"
        })), Object(Ot.c)("alpha_spaces", It(It({}, Ct.a), {}, {
            message: "Valid alphabetic characters required"
        }));
        var Nt = o(24),
            St = o(25),
            Tt = (o(117), o(59)),
            Lt = o(60),
            Et = o(38),
            At = o(191),
            Pt = o.n(At),
            qt = function() {
                function t(e, o) {
                    Object(Nt.a)(this, t), this.faker = e.$faker, this.axios = e.$axios, this.apolloHelpers = e.$apolloHelpers, this.apolloClient = e.app.apolloProvider.defaultClient, this.axios.setBaseURL(o)
                }
                var e, o, r;
                return Object(St.a)(t, [{
                    key: "get",
                    value: function(path) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request(path, "GET", t, {}, e)
                    }
                }, {
                    key: "post",
                    value: function(path, data) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request(path, "POST", {}, data, t)
                    }
                }, {
                    key: "put",
                    value: function(path, data) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request(path, "PUT", {}, data, t)
                    }
                }, {
                    key: "delete",
                    value: function(path) {
                        var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request(path, "DELETE", {}, data, t)
                    }
                }, {
                    key: "query",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.requestGQL("QUERY", t, e)
                    }
                }, {
                    key: "mutate",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.requestGQL("MUTATE", t, e)
                    }
                }, {
                    key: "auth",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.authGQL(t, e)
                    }
                }, {
                    key: "authGQL",
                    value: (r = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var o, n, r, l, d, c = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = c.length > 1 && void 0 !== c[1] ? c[1] : {}, t.prev = 1, t.next = 4, this.apolloClient.mutate({
                                        mutation: e,
                                        variables: o
                                    });
                                case 4:
                                    return n = t.sent, r = n.data.login, l = r.user, d = r.jwt, t.next = 10, this.apolloHelpers.onLogin(d);
                                case 10:
                                    return t.abrupt("return", l);
                                case 13:
                                    return t.prev = 13, t.t0 = t.catch(1), console.error("Application Repository error: ", t.t0), t.abrupt("return", {
                                        err: !0,
                                        code: "GQ403",
                                        message: t.t0.message
                                    });
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [1, 13]
                        ])
                    }))), function(t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "requestGQL",
                    value: (o = Object(n.a)(regeneratorRuntime.mark((function t() {
                        var e, o, n, r, l = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = l.length > 0 && void 0 !== l[0] ? l[0] : "QUERY", o = l.length > 1 ? l[1] : void 0, n = l.length > 2 && void 0 !== l[2] ? l[2] : {}, r = null, t.prev = 4, "QUERY" != e) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.next = 8, this.apolloClient.query({
                                        query: o,
                                        variables: n
                                    });
                                case 8:
                                    r = t.sent, t.next = 14;
                                    break;
                                case 11:
                                    return t.next = 13, this.apolloClient.mutate({
                                        mutation: o,
                                        variables: n
                                    });
                                case 13:
                                    r = t.sent;
                                case 14:
                                    return t.abrupt("return", r.data);
                                case 17:
                                    return t.prev = 17, t.t0 = t.catch(4), console.error("Application Repository error: ", t.t0), t.abrupt("return", {
                                        err: !0,
                                        code: "GQ500",
                                        message: t.t0.message
                                    });
                                case 21:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [4, 17]
                        ])
                    }))), function() {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "request",
                    value: (e = Object(n.a)(regeneratorRuntime.mark((function t(path) {
                        var e, o, n, r, l, d, c, m = arguments;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = m.length > 1 && void 0 !== m[1] ? m[1] : "GET", o = m.length > 2 && void 0 !== m[2] ? m[2] : {}, n = m.length > 3 && void 0 !== m[3] ? m[3] : {}, r = m.length > 4 && void 0 !== m[4] ? m[4] : {}, l = this.axios, d = null, c = Pt()({
                                        method: e,
                                        url: path,
                                        responseType: "json"
                                    }, {
                                        params: o
                                    }, n, r), t.prev = 7, t.next = 10, l(c);
                                case 10:
                                    return d = t.sent, t.abrupt("return", d.data);
                                case 14:
                                    if (t.prev = 14, t.t0 = t.catch(7), console.error("Application Repository error: ", t.t0), t.t0.response) {
                                        t.next = 21;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        err: !0,
                                        code: -1,
                                        message: "Network Error"
                                    });
                                case 21:
                                    return t.abrupt("return", {
                                        err: !0,
                                        code: t.t0.response.status,
                                        message: t.t0.response.statusText
                                    });
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [7, 14]
                        ])
                    }))), function(t) {
                        return e.apply(this, arguments)
                    })
                }]), t
            }(),
            Rt = qt;

        function $t(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var o, n = Object(Et.a)(t);
                if (e) {
                    var r = Object(Et.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(Lt.a)(this, o)
            }
        }
        var Yt = function(t) {
                Object(Tt.a)(o, t);
                var e = $t(o);

                function o() {
                    return Object(Nt.a)(this, o), e.apply(this, arguments)
                }
                return Object(St.a)(o)
            }(Rt),
            Ut = Yt;

        function Qt(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var o, n = Object(Et.a)(t);
                if (e) {
                    var r = Object(Et.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(Lt.a)(this, o)
            }
        }
        var Bt = function(t) {
                Object(Tt.a)(r, t);
                var e, o = Qt(r);

                function r() {
                    return Object(Nt.a)(this, r), o.apply(this, arguments)
                }
                return Object(St.a)(r, [{
                    key: "getCalendarEvents",
                    value: (e = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var o, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o = "https://www.googleapis.com/calendar/v3/calendars/" + e.calendarId + "/events", n = {
                                        singleEvents: !0,
                                        futureevents: !0,
                                        format24HourTime: !1,
                                        timeZone: "America/Chicago",
                                        timeMin: e.currentStartDate,
                                        timeMax: e.currentEndDate,
                                        orderBy: "startTime",
                                        key: "AIzaSyCW90hLkYeX6ofvzdeRUujA2p9YlkyYt_Y"
                                    }, r = {
                                        headers: {
                                            "Content-Type": "application/json",
                                            Accept: "application/json"
                                        }
                                    }, t.next = 5, this.get(o, n, r);
                                case 5:
                                    return t.abrupt("return", t.sent);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return e.apply(this, arguments)
                    })
                }]), r
            }(Rt),
            Ht = Bt,
            Zt = o(192),
            Xt = o.n(Zt);

        function Ft(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var o, n = Object(Et.a)(t);
                if (e) {
                    var r = Object(Et.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(Lt.a)(this, o)
            }
        }
        var Gt = function(t) {
                Object(Tt.a)(r, t);
                var e, o = Ft(r);

                function r() {
                    return Object(Nt.a)(this, r), o.apply(this, arguments)
                }
                return Object(St.a)(r, [{
                    key: "getDiscoursesList",
                    value: (e = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var o;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return console.log(e), t.next = 3, this.query(Xt.a, {});
                                case 3:
                                    return o = t.sent, console.log(o), t.abrupt("return", o.err ? o : o.wcmsPageDiscourses);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function(t) {
                        return e.apply(this, arguments)
                    })
                }]), r
            }(Rt),
            Jt = Gt,
            Wt = function() {
                function t(e) {
                    Object(Nt.a)(this, t), this.context = e, this.repositories = {
                        estoreApi: new Ut(e, this.context.env.estoreApiUrl),
                        googleApi: new Ht(e, this.context.env.googleApiUrl),
                        cmsApi: new Jt(e, this.context.env.cmsApiUrl)
                    }
                }
                return Object(St.a)(t, [{
                    key: "getRepository",
                    value: function(t) {
                        return this.repositories[t]
                    }
                }]), t
            }(),
            Vt = function(t, e) {
                console.log("Injecting API Repo factory"), e("apiRepositoryFactory", new Wt(t))
            };

        function Kt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function te(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Kt(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Kt(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        l.a.component(f.a.name, f.a), l.a.component(x.a.name, te(te({}, x.a), {}, {
            render: function(t, e) {
                return x.a._warned || (x.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), x.a.render(t, e)
            }
        })), l.a.component(O.name, O), l.a.component("NChild", O), l.a.component(L.name, L), Object.defineProperty(l.a.prototype, "$nuxt", {
            get: function() {
                var t = this.$root.$options.$nuxt;
                return t || "undefined" == typeof window ? t : window.$nuxt
            },
            configurable: !0
        }), l.a.use(c.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var ee = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            },
            oe = d.a.Store.prototype.registerModule;

        function ne(path, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = Array.isArray(path) ? !!path.reduce((function(t, path) {
                    return t && t[path]
                }), this.state) : path in this.state;
            return oe.call(this, path, t, te({
                preserveState: o
            }, e))
        }

        function re(t) {
            return ae.apply(this, arguments)
        }

        function ae() {
            return ae = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                var o, r, d, c, m, f, path, h, x = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return h = function(t, e) {
                                if (!t) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                c[t = "$" + t] = e, c.context[t] || (c.context[t] = e), d[t] = c[t];
                                var o = "__nuxt_" + t + "_installed__";
                                l.a[o] || (l.a[o] = !0, l.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(l.a.prototype, t) || Object.defineProperty(l.a.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                })))
                            }, o = x.length > 1 && void 0 !== x[1] ? x[1] : {}, t.next = 4, M(0, o);
                        case 4:
                            return r = t.sent, (d = W(e)).$router = r, d.registerModule = ne, c = te({
                                head: {
                                    title: "Karya Siddhi Hanuman Temple",
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1"
                                    }, {
                                        name: "apple-mobile-app-capable",
                                        content: "yes"
                                    }, {
                                        "http-equiv": "X-UA-Compatible",
                                        content: "IE=edge"
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/icon.png"
                                    }],
                                    style: [],
                                    script: []
                                },
                                store: d,
                                router: r,
                                nuxt: {
                                    defaultTransition: ee,
                                    transitions: [ee],
                                    setTransitions: function(t) {
                                        return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                            return t = t ? "string" == typeof t ? Object.assign({}, ee, {
                                                name: t
                                            }) : Object.assign({}, ee, t) : ee
                                        })), this.$options.nuxt.transitions = t, t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null, c.context._errored = Boolean(t), t = t ? Object(y.p)(t) : null;
                                        var o = c.nuxt;
                                        return this && (o = this.nuxt || this.$options.nuxt), o.dateErr = Date.now(), o.err = t, e && (e.nuxt.error = t), t
                                    }
                                }
                            }, Z), d.app = c, m = e ? e.next : function(t) {
                                return c.router.push(t)
                            }, e ? f = r.resolve(e.url).route : (path = Object(y.f)(r.options.base, r.options.mode), f = r.resolve(path).route), t.next = 14, Object(y.t)(c, {
                                store: d,
                                route: f,
                                next: m,
                                error: c.nuxt.error.bind(c),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                ssrContext: e
                            });
                        case 14:
                            return h("config", o), window.__NUXT__ && window.__NUXT__.state && d.replaceState(window.__NUXT__.state), c.context.enablePreview = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c.previewData = Object.assign({}, t), h("preview", t)
                            }, t.next = 20, st(c.context, h);
                        case 20:
                            return t.next = 23, mt(c.context, h);
                        case 23:
                            t.next = 26;
                            break;
                        case 26:
                            return t.next = 29, Mt(c.context, h);
                        case 29:
                            t.next = 32;
                            break;
                        case 32:
                            return t.next = 35, Vt(c.context, h);
                        case 35:
                            return c.context.enablePreview = function() {
                                console.warn("You cannot call enablePreview() outside a plugin.")
                            }, t.next = 38, new Promise((function(t, e) {
                                if (!r.resolve(c.context.route.fullPath).route.matched.length) return t();
                                r.replace(c.context.route.fullPath, t, (function(o) {
                                    if (!o._isRouter) return e(o);
                                    if (2 !== o.type) return t();
                                    var l = r.afterEach(function() {
                                        var e = Object(n.a)(regeneratorRuntime.mark((function e(o, n) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 3, Object(y.j)(o);
                                                    case 3:
                                                        c.context.route = e.sent, c.context.params = o.params || {}, c.context.query = o.query || {}, l(), t();
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, o) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }))
                            }));
                        case 38:
                            return t.abrupt("return", {
                                store: d,
                                app: c,
                                router: r
                            });
                        case 39:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), ae.apply(this, arguments)
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        o(106), o(84), o(53), o(34), o(22), o(48), o(36), o(23), o(47), o(41), o(42);
        var n = o(4);

        function r(t, e) {
            var o;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (o = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return l(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === o && t.constructor && (o = t.constructor.name);
                        if ("Map" === o || "Set" === o) return Array.from(t);
                        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return l(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    o && (t = o);
                    var i = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, d = !0,
                c = !1;
            return {
                s: function() {
                    o = t[Symbol.iterator]()
                },
                n: function() {
                    var t = o.next();
                    return d = t.done, t
                },
                e: function(t) {
                    c = !0, r = t
                },
                f: function() {
                    try {
                        d || null == o.return || o.return()
                    } finally {
                        if (c) throw r
                    }
                }
            }
        }

        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
            return o
        }
        var d = window.requestIdleCallback || function(t) {
                var e = Date.now();
                return setTimeout((function() {
                    t({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - e))
                        }
                    })
                }), 1)
            },
            c = window.cancelIdleCallback || function(t) {
                clearTimeout(t)
            },
            m = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                t.forEach((function(t) {
                    var e = t.intersectionRatio,
                        link = t.target;
                    e <= 0 || !link.__prefetch || link.__prefetch()
                }))
            }));
        e.a = {
            name: "NuxtLink",
            extends: n.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = d(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                c(this.handleId), this.__observed && (m.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    m && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), m.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t = navigator.connection;
                    return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                        return t.components.default
                    })).filter((function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        m.unobserve(this.$el);
                        var t, e = r(this.getPrefetchComponents());
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var o = t.value,
                                    n = o();
                                n instanceof Promise && n.catch((function() {})), o.__prefetched = !0
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        e.a = {}
    }, , , , , , , , , , , , function(t, e, o) {
        t.exports = o.p + "img/icons.1989506.svg"
    }, , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        var content = o(234);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("72daabed", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var content = o(236);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("3191d5ad", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
        var o = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "wcmsPageDiscourses"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "short_name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "page_meta"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "page_name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "page_url_name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "page_listing_image"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "page_publish_status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "page_date"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "event_schedule"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "start_datetime"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 268
            }
        };
        o.loc.source = {
            body: "query {\n  wcmsPageDiscourses{\n    id\n    short_name\n    page_meta{\n      page_name,\n      page_url_name,\n      page_listing_image{\n        name,\n        url\n      },\n      page_publish_status,\n      page_date\n    },\n    event_schedule{\n      start_datetime\n    }\n  }\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };

        function n(t, e) {
            if ("FragmentSpread" === t.kind) e.add(t.name.value);
            else if ("VariableDefinition" === t.kind) {
                var o = t.type;
                "NamedType" === o.kind && e.add(o.name.value)
            }
            t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                n(t, e)
            })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                n(t, e)
            })), t.definitions && t.definitions.forEach((function(t) {
                n(t, e)
            }))
        }
        var r = {};
        o.definitions.forEach((function(t) {
            if (t.name) {
                var e = new Set;
                n(t, e), r[t.name.value] = e
            }
        })), t.exports = o
    }, function(t, e, o) {
        "use strict";
        var n = o(6),
            r = (o(27), o(22), o(4)),
            l = o(0),
            d = window.__NUXT__;

        function c() {
            if (!this._hydrated) return this.$fetch()
        }

        function m() {
            if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                var t;
                this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = d.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else
                    for (var e in data) r.a.set(this.$data, e, data[e])
            }
        }

        function f() {
            var t = this;
            return this._fetchPromise || (this._fetchPromise = h.call(this).then((function() {
                delete t._fetchPromise
            }))), this._fetchPromise
        }

        function h() {
            return x.apply(this, arguments)
        }

        function x() {
            return (x = Object(n.a)(regeneratorRuntime.mark((function t() {
                var e, o, n, r = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, o = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                        case 9:
                            t.next = 15;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(6), e = Object(l.p)(t.t0);
                        case 15:
                            if (!((n = this._fetchDelay - (Date.now() - o)) > 0)) {
                                t.next = 19;
                                break
                            }
                            return t.next = 19, new Promise((function(t) {
                                return setTimeout(t, n)
                            }));
                        case 19:
                            this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                return r.$nuxt.nbFetching--
                            }));
                        case 23:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [6, 11]
                ])
            })))).apply(this, arguments)
        }
        e.a = {
            beforeCreate: function() {
                Object(l.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, r.a.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = f.bind(this), Object(l.a)(this, "created", m), Object(l.a)(this, "beforeMount", c))
            }
        }
    }, , , function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE0IDE4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRiIgZD0iTTEyLjYwNiA4LjAxMkw4IDMuNjIxdjQuMzgzSDZWMy42MjFMMS4zOTQgOC4wMTItLjAwOCA2LjY3Nmw1LjYwNy01LjM0NEw3LS4wMDRsNy4wMDkgNi42OC0xLjQwMyAxLjMzNnpNOCAxMi4wMDRINnYtMmgydjJ6bTAgNkg2di00aDJ2NHoiLz48L3N2Zz4="
    }, , , , , , function(t, e, o) {
        t.exports = o(203)
    }, function(t, e, o) {
        "use strict";
        o.r(e),
            function(t) {
                var e = o(33),
                    n = o(6),
                    r = (o(137), o(208), o(212), o(214), o(27), o(36), o(34), o(37), o(106), o(84), o(53), o(41), o(22), o(42), o(48), o(23), o(47), o(4)),
                    l = o(182),
                    d = o(124),
                    c = o(0),
                    m = o(40),
                    f = o(193),
                    h = o(97);

                function x(t, e) {
                    var o;
                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (o = function(t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return w(t, e);
                                var o = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === o && t.constructor && (o = t.constructor.name);
                                if ("Map" === o || "Set" === o) return Array.from(t);
                                if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return w(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            o && (t = o);
                            var i = 0,
                                n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: n
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var r, l = !0,
                        d = !1;
                    return {
                        s: function() {
                            o = t[Symbol.iterator]()
                        },
                        n: function() {
                            var t = o.next();
                            return l = t.done, t
                        },
                        e: function(t) {
                            d = !0, r = t
                        },
                        f: function() {
                            try {
                                l || null == o.return || o.return()
                            } finally {
                                if (d) throw r
                            }
                        }
                    }
                }

                function w(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
                    return o
                }
                r.a.__nuxt__fetch__mixin__ || (r.a.mixin(f.a), r.a.__nuxt__fetch__mixin__ = !0), r.a.component(h.a.name, h.a), r.a.component("NLink", h.a), t.fetch || (t.fetch = l.a);
                var v, y, k = [],
                    j = window.__NUXT__ || {},
                    z = j.config || {};
                z._app && (o.p = Object(c.v)(z._app.cdnURL, z._app.assetsPath)), Object.assign(r.a.config, {
                    silent: !0,
                    performance: !1
                });
                var _ = r.a.config.errorHandler || console.error;

                function M(t, e, o) {
                    for (var n = function(component) {
                            var t = function(component, t) {
                                if (!component || !component.options || !component.options[t]) return {};
                                var option = component.options[t];
                                if ("function" == typeof option) {
                                    for (var e = arguments.length, o = new Array(e > 2 ? e - 2 : 0), n = 2; n < e; n++) o[n - 2] = arguments[n];
                                    return option.apply(void 0, o)
                                }
                                return option
                            }(component, "transition", e, o) || {};
                            return "string" == typeof t ? {
                                name: t
                            } : t
                        }, r = o ? Object(c.g)(o) : [], l = Math.max(t.length, r.length), d = [], m = function(i) {
                            var e = Object.assign({}, n(t[i])),
                                o = Object.assign({}, n(r[i]));
                            Object.keys(e).filter((function(t) {
                                return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                            })).forEach((function(t) {
                                o[t] = e[t]
                            })), d.push(o)
                        }, i = 0; i < l; i++) m(i);
                    return d
                }

                function O(t, e, o) {
                    return C.apply(this, arguments)
                }

                function C() {
                    return (C = Object(n.a)(regeneratorRuntime.mark((function t(e, o, n) {
                        var r, l, d, m, f = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this._routeChanged = Boolean(v.nuxt.err) || o.name !== e.name, this._paramChanged = !this._routeChanged && o.path !== e.path, this._queryChanged = !this._paramChanged && o.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(c.i)(e.query, o.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 9, Object(c.r)(e, (function(t, e) {
                                        return {
                                            Component: t,
                                            instance: e
                                        }
                                    }));
                                case 9:
                                    r = t.sent, r.some((function(t) {
                                        var n = t.Component,
                                            r = t.instance,
                                            l = n.options.watchQuery;
                                        return !0 === l || (Array.isArray(l) ? l.some((function(t) {
                                            return f._diffQuery[t]
                                        })) : "function" == typeof l && l.apply(r, [e.query, o.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 12:
                                    n(), t.next = 26;
                                    break;
                                case 15:
                                    if (t.prev = 15, t.t0 = t.catch(5), l = t.t0 || {}, d = l.statusCode || l.status || l.response && l.response.status || 500, m = l.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(m)) {
                                        t.next = 23;
                                        break
                                    }
                                    return window.location.reload(!0), t.abrupt("return");
                                case 23:
                                    this.error({
                                        statusCode: d,
                                        message: m
                                    }), this.$nuxt.$emit("routeChanged", e, o, l), n();
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [5, 15]
                        ])
                    })))).apply(this, arguments)
                }

                function D(t, e) {
                    return j.serverRendered && e && Object(c.b)(t, e), t._Ctor = t, t
                }

                function I(t) {
                    return Object(c.d)(t, function() {
                        var t = Object(n.a)(regeneratorRuntime.mark((function t(e, o, n, r, l) {
                            var d;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("function" != typeof e || e.options) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 3, e();
                                    case 3:
                                        e = t.sent;
                                    case 4:
                                        return d = D(Object(c.s)(e), j.data ? j.data[l] : null), n.components[r] = d, t.abrupt("return", d);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, o, n, r, l) {
                            return t.apply(this, arguments)
                        }
                    }())
                }

                function N(t, e, o) {
                    var n = this,
                        r = [],
                        l = !1;
                    if (void 0 !== o && (r = [], (o = Object(c.s)(o)).options.middleware && (r = r.concat(o.options.middleware)), t.forEach((function(t) {
                            t.options.middleware && (r = r.concat(t.options.middleware))
                        }))), r = r.map((function(t) {
                            return "function" == typeof t ? t : ("function" != typeof d.a[t] && (l = !0, n.error({
                                statusCode: 500,
                                message: "Unknown middleware " + t
                            })), d.a[t])
                        })), !l) return Object(c.o)(r, e)
                }

                function S(t, e, o) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return T = Object(n.a)(regeneratorRuntime.mark((function t(e, o, r) {
                        var l, d, f, h, w, y, j, z, _, O, C, D, I, S, T, L = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", r());
                                case 2:
                                    return !1, e === o ? (k = [], !0) : (l = [], k = Object(c.g)(o, l).map((function(t, i) {
                                        return Object(c.c)(o.matched[l[i]].path)(o.params)
                                    }))), d = !1, f = function(path) {
                                        o.path === path.path && L.$loading.finish && L.$loading.finish(), o.path !== path.path && L.$loading.pause && L.$loading.pause(), d || (d = !0, r(path))
                                    }, t.next = 8, Object(c.t)(v, {
                                        route: e,
                                        from: o,
                                        next: f.bind(this)
                                    });
                                case 8:
                                    if (this._dateLastError = v.nuxt.dateErr, this._hadError = Boolean(v.nuxt.err), h = [], (w = Object(c.g)(e, h)).length) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.next = 15, N.call(this, w, v.context);
                                case 15:
                                    if (!d) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 17:
                                    return y = (m.a.options || m.a).layout, t.next = 20, this.loadLayout("function" == typeof y ? y.call(m.a, v.context) : y);
                                case 20:
                                    return j = t.sent, t.next = 23, N.call(this, w, v.context, j);
                                case 23:
                                    if (!d) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 25:
                                    return v.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", r());
                                case 27:
                                    return w.forEach((function(t) {
                                        t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                    })), this.setTransitions(M(w, e, o)), t.prev = 29, t.next = 32, N.call(this, w, v.context);
                                case 32:
                                    if (!d) {
                                        t.next = 34;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 34:
                                    if (!v.context._errored) {
                                        t.next = 36;
                                        break
                                    }
                                    return t.abrupt("return", r());
                                case 36:
                                    return "function" == typeof(z = w[0].options.layout) && (z = z(v.context)), t.next = 40, this.loadLayout(z);
                                case 40:
                                    return z = t.sent, t.next = 43, N.call(this, w, v.context, z);
                                case 43:
                                    if (!d) {
                                        t.next = 45;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 45:
                                    if (!v.context._errored) {
                                        t.next = 47;
                                        break
                                    }
                                    return t.abrupt("return", r());
                                case 47:
                                    _ = !0, t.prev = 48, O = x(w), t.prev = 50, O.s();
                                case 52:
                                    if ((C = O.n()).done) {
                                        t.next = 63;
                                        break
                                    }
                                    if ("function" == typeof(D = C.value).options.validate) {
                                        t.next = 56;
                                        break
                                    }
                                    return t.abrupt("continue", 61);
                                case 56:
                                    return t.next = 58, D.options.validate(v.context);
                                case 58:
                                    if (_ = t.sent) {
                                        t.next = 61;
                                        break
                                    }
                                    return t.abrupt("break", 63);
                                case 61:
                                    t.next = 52;
                                    break;
                                case 63:
                                    t.next = 68;
                                    break;
                                case 65:
                                    t.prev = 65, t.t0 = t.catch(50), O.e(t.t0);
                                case 68:
                                    return t.prev = 68, O.f(), t.finish(68);
                                case 71:
                                    t.next = 77;
                                    break;
                                case 73:
                                    return t.prev = 73, t.t1 = t.catch(48), this.error({
                                        statusCode: t.t1.statusCode || "500",
                                        message: t.t1.message
                                    }), t.abrupt("return", r());
                                case 77:
                                    if (_) {
                                        t.next = 80;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", r());
                                case 80:
                                    return t.next = 82, Promise.all(w.map(function() {
                                        var t = Object(n.a)(regeneratorRuntime.mark((function t(n, i) {
                                            var r, l, d, m, f, x, w, y, p;
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (n._path = Object(c.c)(e.matched[h[i]].path)(e.params), n._dataRefresh = !1, r = n._path !== k[i], L._routeChanged && r ? n._dataRefresh = !0 : L._paramChanged && r ? (l = n.options.watchParam, n._dataRefresh = !1 !== l) : L._queryChanged && (!0 === (d = n.options.watchQuery) ? n._dataRefresh = !0 : Array.isArray(d) ? n._dataRefresh = d.some((function(t) {
                                                                return L._diffQuery[t]
                                                            })) : "function" == typeof d && (I || (I = Object(c.h)(e)), n._dataRefresh = d.apply(I[i], [e.query, o.query]))), L._hadError || !L._isMounted || n._dataRefresh) {
                                                            t.next = 6;
                                                            break
                                                        }
                                                        return t.abrupt("return");
                                                    case 6:
                                                        return m = [], f = n.options.asyncData && "function" == typeof n.options.asyncData, x = Boolean(n.options.fetch) && n.options.fetch.length, w = f && x ? 30 : 45, f && ((y = Object(c.q)(n.options.asyncData, v.context)).then((function(t) {
                                                            Object(c.b)(n, t), L.$loading.increase && L.$loading.increase(w)
                                                        })), m.push(y)), L.$loading.manual = !1 === n.options.loading, x && ((p = n.options.fetch(v.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                            L.$loading.increase && L.$loading.increase(w)
                                                        })), m.push(p)), t.abrupt("return", Promise.all(m));
                                                    case 14:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e, o) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 82:
                                    d || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), r()), t.next = 99;
                                    break;
                                case 85:
                                    if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (S = t.t2 || {}).message) {
                                        t.next = 90;
                                        break
                                    }
                                    return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, o, S));
                                case 90:
                                    return k = [], Object(c.k)(S), "function" == typeof(T = (m.a.options || m.a).layout) && (T = T(v.context)), t.next = 96, this.loadLayout(T);
                                case 96:
                                    this.error(S), this.$nuxt.$emit("routeChanged", e, o, S), r();
                                case 99:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [29, 85],
                            [48, 73],
                            [50, 65, 68, 71]
                        ])
                    }))), T.apply(this, arguments)
                }

                function L(t, o) {
                    Object(c.d)(t, (function(t, o, n, l) {
                        return "object" !== Object(e.a)(t) || t.options || ((t = r.a.extend(t))._Ctor = t, n.components[l] = t), t
                    }))
                }

                function E(t) {
                    var e = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                    var o = e ? (m.a.options || m.a).layout : t.matched[0].components.default.options.layout;
                    "function" == typeof o && (o = o(v.context)), this.setLayout(o)
                }

                function A(t) {
                    t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                }

                function P(t, e) {
                    var o = this;
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                        var n = Object(c.h)(t),
                            l = Object(c.g)(t),
                            d = !1;
                        r.a.nextTick((function() {
                            n.forEach((function(t, i) {
                                if (t && !t._isDestroyed && t.constructor._dataRefresh && l[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                    var e = t.constructor.options.data.call(t);
                                    for (var o in e) r.a.set(t.$data, o, e[o]);
                                    d = !0
                                }
                            })), d && window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            })), A(o)
                        }))
                    }
                }

                function R(t) {
                    window.onNuxtReadyCbs.forEach((function(e) {
                        "function" == typeof e && e(t)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), y.afterEach((function(e, o) {
                        r.a.nextTick((function() {
                            return t.$nuxt.$emit("routeChanged", e, o)
                        }))
                    }))
                }

                function $() {
                    return ($ = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                        var o, n, l, d, m;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return v = e.app, y = e.router, e.store, o = new r.a(v), n = j.layout || "default", t.next = 7, o.loadLayout(n);
                                case 7:
                                    return o.setLayout(n), l = function() {
                                        o.$mount("#__nuxt"), y.afterEach(L), y.afterEach(E.bind(o)), y.afterEach(P.bind(o)), r.a.nextTick((function() {
                                            R(o)
                                        }))
                                    }, t.next = 11, Promise.all(I(v.context.route));
                                case 11:
                                    if (d = t.sent, o.setTransitions = o.$options.nuxt.setTransitions.bind(o), d.length && (o.setTransitions(M(d, y.currentRoute)), k = y.currentRoute.matched.map((function(t) {
                                            return Object(c.c)(t.path)(y.currentRoute.params)
                                        }))), o.$loading = {}, j.error && o.error(j.error), y.beforeEach(O.bind(o)), y.beforeEach(S.bind(o)), !j.serverRendered || !Object(c.n)(j.routePath, o.context.route.path)) {
                                        t.next = 20;
                                        break
                                    }
                                    return t.abrupt("return", l());
                                case 20:
                                    return m = function() {
                                        L(y.currentRoute, y.currentRoute), E.call(o, y.currentRoute), A(o), l()
                                    }, t.next = 23, new Promise((function(t) {
                                        return setTimeout(t, 0)
                                    }));
                                case 23:
                                    S.call(o, y.currentRoute, y.currentRoute, (function(path) {
                                        if (path) {
                                            var t = y.afterEach((function(e, o) {
                                                t(), m()
                                            }));
                                            y.push(path, void 0, (function(t) {
                                                t && _(t)
                                            }))
                                        } else m()
                                    }));
                                case 24:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))).apply(this, arguments)
                }
                Object(m.b)(null, j.config).then((function(t) {
                    return $.apply(this, arguments)
                })).catch(_)
            }.call(this, o(29))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, o) {
        "use strict";
        o(158)
    }, function(t, e, o) {
        var n = o(31)(!1);
        n.push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), t.exports = n
    }, function(t, e, o) {
        "use strict";
        o(159)
    }, function(t, e, o) {
        var n = o(31)(!1);
        n.push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), t.exports = n
    }, , , function(t, e, o) {
        var content = o(240);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("b524d468", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(31)(!1);
        n.push([t.i, '/*!\r\n * Bootstrap Reboot v4.0.0 (https://getbootstrap.com)\r\n * Copyright 2011-2018 The Bootstrap Authors\r\n * Copyright 2011-2018 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\r\n */a,a:hover{text-decoration:none}dl,h1,h2,h3,h4,h5,h6,ol,p,pre,ul{margin-top:0}address,dl,ol,p,pre,ul{margin-bottom:1rem}body,caption{text-align:left}button,hr,input{overflow:visible}pre,textarea{overflow:auto}article,aside,dialog,figcaption,figure,footer,header,hgroup,legend,main,nav,section{display:block}dd,h1,h2,h3,h4,h5,h6,label,legend{margin-bottom:.5rem}address,legend{line-height:inherit}progress,sub,sup{vertical-align:baseline}label,output{display:inline-block}html{font-size:13px;font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}@media (min-width:540px){html{font-size:13px}}@media (min-width:800px){html{font-size:13px}}@media (min-width:1024px){html{font-size:14px}}@media (min-width:1199px){html{font-size:16px}}*,:after,:before{box-sizing:border-box}@-ms-viewport{width:device-width}body{margin:0;font-family:Roboto,-apple-system,system-ui,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial;font-size:.812rem;font-weight:400;line-height:1.5;color:#888da8;background-color:#edf2f6}[tabindex="-1"]:focus{outline:0!important}hr{box-sizing:content-box;height:0}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}address{font-style:normal}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-left:0}blockquote,figure{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}a{color:#ff5e3a;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:auto}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}pre{-ms-overflow-style:scrollbar}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;caption-side:bottom}th{text-align:inherit}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{width:100%;max-width:100%;padding:0;font-size:1.5rem;color:inherit;white-space:normal}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}', ""]), t.exports = n
    }, function(t, e, o) {
        var content = o(242);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("7264809e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(31)(!1);
        n.push([t.i, "/*!\r\n * Bootstrap v4.0.0 (https://getbootstrap.com)\r\n * Copyright 2011-2018 The Bootstrap Authors\r\n * Copyright 2011-2018 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */dl,h1,h2,h3,h4,h5,h6,ol,p,pre,ul{margin-top:0}address,dl,ol,p,pre,ul{margin-bottom:1rem}body,caption{text-align:left}dd,h1,h2,h3,h4,h5,h6,label{margin-bottom:.5rem}pre,textarea{overflow:auto}article,aside,dialog,figcaption,figure,footer,header,hgroup,legend,main,nav,section{display:block}address,legend{line-height:inherit}progress,sub,sup{vertical-align:baseline}label,output{display:inline-block}button,hr,input{overflow:visible}.btn-outline-danger,.btn-outline-primary,.btn-outline-success,.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{background-image:none}.dropdown-menu,.form-control,.modal-content,.popover{background-clip:padding-box}.dropdown-menu,.nav,.navbar-nav{list-style:none}html{font-size:13px;font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}@media (min-width:540px){html{font-size:13px}}@media (min-width:800px){html{font-size:13px}}@media (min-width:1024px){html{font-size:14px}}@media (min-width:1199px){html{font-size:16px}}:root{--blue:#ff5e3a;--primary:#ff5e3a;--success:#08ddc1;--danger:#f92552;--secondary:#9a9fbf;--breakpoint-xs:0;--breakpoint-sm:540px;--breakpoint-md:800px;--breakpoint-lg:1024px;--breakpoint-xl:1199px;--breakpoint-xxl:1400px;--font-family-sans-serif:Roboto,-apple-system,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}@-ms-viewport{width:device-width}body{margin:0;font-family:Roboto,-apple-system,system-ui,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial;font-size:.812rem;font-weight:400;line-height:1.5;color:#888da8;background-color:#edf2f6}[tabindex=\"-1\"]:focus{outline:0!important}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}.btn:not(:disabled):not(.disabled),.close:not(:disabled):not(.disabled),.navbar-toggler:not(:disabled):not(.disabled),.page-link:not(:disabled):not(.disabled),summary{cursor:pointer}address{font-style:normal}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-left:0}blockquote,figure{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}a{color:#ff5e3a;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:auto;text-decoration:none}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-size:1em}pre{-ms-overflow-style:scrollbar}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;caption-side:bottom}th{text-align:inherit}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;color:inherit;white-space:normal}.badge,.btn,.dropdown-header,.dropdown-item,.input-group-text,.navbar-brand{white-space:nowrap}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}summary{display:list-item}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:700;line-height:1.3;color:#515365}.blockquote,hr{margin-bottom:1rem}.display-1,.display-2,.display-3,.display-4{font-weight:300;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.375rem}.h5,h5{font-size:1rem}.h6,h6{font-size:.875rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-4{font-size:3.5rem}hr{box-sizing:content-box;height:0;margin-top:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.small,small{font-size:80%;font-weight:400}.btn,kbd kbd{font-weight:700}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer:before{content:\"\\2014 \\00A0\"}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code,kbd{font-size:87.5%}a>code,pre code{color:inherit}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}code{color:#e83e8c;word-break:break-word}kbd{padding:.2rem .4rem;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%}.container,.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;width:100%}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}@media (min-width:540px){.container{max-width:600px}}@media (min-width:800px){.container{max-width:680px}}@media (min-width:1024px){.container{max-width:900px}}@media (min-width:1199px){.container{max-width:1110px}}@media (min-width:1400px){.container{max-width:1300px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto,.col-xxl,.col-xxl-1,.col-xxl-2,.col-xxl-3,.col-xxl-4,.col-xxl-5,.col-xxl-6,.col-xxl-7,.col-xxl-8,.col-xxl-9,.col-xxl-10,.col-xxl-11,.col-xxl-12,.col-xxl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:none}.col-1{flex:0 0 8.33333%;max-width:8.33333%}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-8{flex:0 0 66.66667%;max-width:66.66667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333%;max-width:83.33333%}.col-11{flex:0 0 91.66667%;max-width:91.66667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width:540px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:none}.col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width:800px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:none}.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width:1024px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:none}.col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width:1199px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}@media (min-width:1400px){.col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.col-xxl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xxl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xxl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xxl-3{flex:0 0 25%;max-width:25%}.col-xxl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xxl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xxl-6{flex:0 0 50%;max-width:50%}.col-xxl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xxl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xxl-9{flex:0 0 75%;max-width:75%}.col-xxl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xxl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xxl-12{flex:0 0 100%;max-width:100%}.order-xxl-first{order:-1}.order-xxl-last{order:13}.order-xxl-0{order:0}.order-xxl-1{order:1}.order-xxl-2{order:2}.order-xxl-3{order:3}.order-xxl-4{order:4}.order-xxl-5{order:5}.order-xxl-6{order:6}.order-xxl-7{order:7}.order-xxl-8{order:8}.order-xxl-9{order:9}.order-xxl-10{order:10}.order-xxl-11{order:11}.order-xxl-12{order:12}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333%}.offset-xxl-2{margin-left:16.66667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333%}.offset-xxl-5{margin-left:41.66667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333%}.offset-xxl-8{margin-left:66.66667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333%}.offset-xxl-11{margin-left:91.66667%}}.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table .table{background-color:#edf2f6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#ffd2c8}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#ffbdaf}.table-success,.table-success>td,.table-success>th{background-color:#baf5ee}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#a4f2e9}.table-danger,.table-danger>td,.table-danger>th{background-color:#fdc2cf}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#fca9bc}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#e3e4ed}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#d3d5e3}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered,.table-responsive>.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{background-color:hsla(0,0%,100%,.075)}@media (max-width:539.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:799.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width:1023.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1198.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}@media (max-width:1399.98px){.table-responsive-xxl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xxl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.collapsing,.modal,.modal-open,.progress{overflow:hidden}.form-control{display:block;width:100%;padding:1.1rem;font-size:.812rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #e6ecf5;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:transparent;border-color:#ffc6ba;outline:0;box-shadow:none}.form-control::-moz-placeholder{color:#888da8;opacity:1}.form-control:-ms-input-placeholder{color:#888da8;opacity:1}.form-control::placeholder{color:#888da8;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(1.1rem + 1px);padding-bottom:calc(1.1rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(1rem + 1px);padding-bottom:calc(1rem + 1px);font-size:.875rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:.688rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:1.1rem;padding-bottom:1.1rem;margin-bottom:0;line-height:1.5;background-color:transparent;border:solid transparent;border-width:1px 0}.custom-file-input.is-valid~.custom-file-label,.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-file-input:valid~.custom-file-label,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.input-group-append>.form-control-plaintext.btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.5rem 1.7rem;font-size:.688rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:1rem 6rem;font-size:.875rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.invalid-tooltip,.valid-tooltip{position:absolute;z-index:5;max-width:100%;padding:.5rem;line-height:1;border-radius:.2rem;top:100%}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{display:none;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(40,167,69,.8)}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.form-check-input.is-valid~.form-check-label,.was-validated .custom-control-input:valid~.custom-control-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{background-color:#71dd8a}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 1px #edf2f6,0 0 0 .2rem rgba(40,167,69,.25)}.custom-file-input.is-valid~.custom-file-label:before,.was-validated .custom-file-input:valid~.custom-file-label:before{border-color:inherit}.custom-file-input.is-invalid~.custom-file-label,.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-file-input:invalid~.custom-file-label,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{display:none;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.8)}.collapsing,.dropdown,.dropup{position:relative}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.form-check-input.is-invalid~.form-check-label,.was-validated .custom-control-input:invalid~.custom-control-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{background-color:#efa2a9}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 1px #edf2f6,0 0 0 .2rem rgba(220,53,69,.25)}.custom-file-input.is-invalid~.custom-file-label:before,.was-validated .custom-file-input:invalid~.custom-file-label:before{border-color:inherit}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:540px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn-block,input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.btn{display:inline-block;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:.812rem;line-height:1.5;border-radius:.25rem;transition:all .15s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:none}.btn-primary.focus,.btn-primary:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,94,58,.5)}.btn.disabled,.btn:disabled{opacity:.65}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#ff5e3a;border-color:#ff5e3a}.btn-primary:hover{color:#fff;background-color:#ff3f14;border-color:#ff3407}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#ff5e3a;border-color:#ff5e3a}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#ff3407;border-color:#f92e00}.btn-success.focus,.btn-success:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(8,221,193,.5)}.btn-success{color:#212529;background-color:#08ddc1;border-color:#08ddc1}.btn-success:hover{color:#fff;background-color:#07b8a1;border-color:#06ac96}.btn-success.disabled,.btn-success:disabled{color:#212529;background-color:#08ddc1;border-color:#08ddc1}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#06ac96;border-color:#069f8b}.btn-danger.focus,.btn-danger:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(249,37,82,.5)}.btn-danger{color:#fff;background-color:#f92552;border-color:#f92552}.btn-danger:hover{color:#fff;background-color:#f10738;border-color:#e50636}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#f92552;border-color:#f92552}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#e50636;border-color:#d80633}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(154,159,191,.5)}.btn-secondary{color:#212529;background-color:#9a9fbf;border-color:#9a9fbf}.btn-secondary:hover{color:#fff;background-color:#8389b0;border-color:#7b81ab}.btn-secondary.disabled,.btn-secondary:disabled{color:#212529;background-color:#9a9fbf;border-color:#9a9fbf}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#7b81ab;border-color:#737aa6}.btn-outline-primary.focus,.btn-outline-primary:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,94,58,.5)}.btn-outline-primary{color:#ff5e3a;background-color:transparent;border-color:#ff5e3a}.btn-outline-primary:hover{color:#fff;background-color:#ff5e3a;border-color:#ff5e3a}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#ff5e3a;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#ff5e3a;border-color:#ff5e3a}.btn-outline-success.focus,.btn-outline-success:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(8,221,193,.5)}.btn-outline-success{color:#08ddc1;background-color:transparent;border-color:#08ddc1}.btn-outline-success:hover{color:#212529;background-color:#08ddc1;border-color:#08ddc1}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#08ddc1;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#212529;background-color:#08ddc1;border-color:#08ddc1}.btn-outline-danger.focus,.btn-outline-danger:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(249,37,82,.5)}.btn-outline-danger{color:#f92552;background-color:transparent;border-color:#f92552}.btn-outline-danger:hover{color:#fff;background-color:#f92552;border-color:#f92552}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#f92552;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#f92552;border-color:#f92552}.btn-outline-secondary.focus,.btn-outline-secondary:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(154,159,191,.5)}.btn-outline-secondary{color:#9a9fbf;background-color:transparent;background-image:none;border-color:#9a9fbf}.btn-outline-secondary:hover{color:#212529;background-color:#9a9fbf;border-color:#9a9fbf}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#9a9fbf;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#212529;background-color:#9a9fbf;border-color:#9a9fbf}.btn-link,.btn-link:hover{background-color:transparent}.btn-link{font-weight:400;color:#ff5e3a}.btn-link:hover{color:auto;text-decoration:none;border-color:transparent}.btn-link.focus,.btn-link:focus{text-decoration:none;border-color:transparent;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:1rem 6rem;font-size:.875rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.5rem 1.7rem;font-size:.688rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block}.btn-block+.btn-block{margin-top:.5rem}.dropdown-toggle:after,.dropup .dropdown-toggle:after{width:0;height:0;vertical-align:.255em;content:\"\"}.fade{opacity:0;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{height:0;transition:height .35s ease}.dropdown-toggle:after{display:inline-block;margin-left:.255em;border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:.812rem;color:#888da8;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropup .dropdown-menu{margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropleft .dropdown-toggle:before,.dropright .dropdown-toggle:after{width:0;content:\"\";border-top:.3em solid transparent;border-bottom:.3em solid transparent;height:0}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;border-left:.3em solid;vertical-align:0}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-menu{margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;border-right:.3em solid;vertical-align:0}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn,.custom-control-label,.custom-file,.dropdown-header,.input-group-text,.nav{margin-bottom:0}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;background-color:transparent;border:0}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:before,.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child),.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:first-child) .custom-file-label:before,.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;font-size:.688rem;color:#6c757d}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:0 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group,.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-group>.btn:first-child,.dropdown-toggle-split:after{margin-left:0}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:1.275rem;padding-left:1.275rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:4.5rem;padding-left:4.5rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.input-group-append,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text,.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control{margin-left:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file:focus,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file{display:flex;align-items:center}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-prepend{margin-right:-1px}.input-group-text{display:flex;align-items:center;padding:1.1rem;font-size:.812rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.nav,.navbar{flex-wrap:wrap}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.15rem;display:block;width:1.2rem;height:1.2rem;content:\"\";left:0}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:active~.custom-control-label:before{color:#fff;background-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before{background-color:#e9ecef}.custom-control-label:before{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff}.custom-checkbox .custom-control-input:checked~.custom-control-label:before,.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{background-color:#007bff}.custom-control-label:after{background-repeat:no-repeat;background-position:50%;background-size:50% 50%}.custom-file,.custom-select{display:inline-block;width:100%}.custom-file-input:lang(en)~.custom-file-label:after,.custom-file-label:after{content:\"Browse\"}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before,.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:before{background-color:#007bff}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") right .75rem center no-repeat #fff;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select-lg,.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem}.custom-file-input:focus~.custom-file-control:before,.custom-select:focus{border-color:#80bdff}.custom-select:focus{outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(128,189,255,.5)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);font-size:75%}.custom-select-lg{height:calc(2.875rem + 2px);font-size:125%}.custom-file,.custom-file-input,.custom-file-label{height:calc(2.25rem + 2px)}.custom-file{position:relative}.custom-file-input{position:relative;z-index:2;width:100%;margin:0;opacity:0}.custom-file-label,.custom-file-label:after{position:absolute;top:0;padding:.375rem .75rem;line-height:1.5;color:#495057;right:0}.custom-file-input:focus~.custom-file-control{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-label{left:0;z-index:1;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label:after{bottom:0;z-index:3;display:block;height:2.25rem;background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0}.nav{display:flex;padding-left:0}.nav-link,.navbar{padding:.5rem 1rem}.nav-link{display:block}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative}.navbar,.navbar>.container,.navbar>.container-fluid{display:flex;align-items:center;justify-content:space-between}.navbar>.container,.navbar>.container-fluid{flex-wrap:wrap}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50% no-repeat;background-size:100% 100%}@media (max-width:539.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:540px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:799.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:800px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:1023.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1024px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:1198.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1199px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:1399.98px){.navbar-expand-xxl>.container,.navbar-expand-xxl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1400px){.navbar-expand-xxl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl>.container,.navbar-expand-xxl>.container-fluid{flex-wrap:nowrap}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .dropup .dropdown-menu{top:auto;bottom:100%}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .dropup .dropdown-menu{top:auto;bottom:100%}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #e6ecf5;border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1.25rem}.card-footer,.card-header{padding:.75rem 1.25rem;background-color:#fff}.card-title{margin-bottom:.75rem}.card-header,.card-subtitle,.card-text:last-child{margin-bottom:0}.card-subtitle{margin-top:-.375rem}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-header{border-bottom:1px solid #e6ecf5}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{border-top:1px solid #e6ecf5}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.alert,.btn .badge,.page-link{position:relative}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:540px){.card-deck{flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:540px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child),.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}.card-columns{-moz-column-count:3;column-count:3;grid-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.breadcrumb,.pagination{border-radius:.25rem;list-style:none}.card-columns .card{margin-bottom:.75rem}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;background-color:#e9ecef}.breadcrumb-item+.breadcrumb-item:before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0}.page-link{display:block;padding:.9rem 1.2rem;margin-left:-1px;line-height:1.25;color:#515365;background-color:#fff;border:1px solid #e6ecf5}.page-link:hover{color:#fff;text-decoration:none;background-color:#ff5e3a;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:none}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#515365;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:.875rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.688rem;line-height:1.5}.badge,.close{font-weight:700;line-height:1}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;text-align:center;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#ff5e3a}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#ff3407}.badge-success{color:#212529;background-color:#08ddc1}.badge-success[href]:focus,.badge-success[href]:hover{color:#212529;text-decoration:none;background-color:#06ac96}.badge-danger{color:#fff;background-color:#f92552}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#e50636}.badge-secondary{color:#212529;background-color:#9a9fbf}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#212529;text-decoration:none;background-color:#7b81ab}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:540px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#85311e;background-color:#ffdfd8;border-color:#ffd2c8}.alert-primary hr{border-top-color:#ffbdaf}.alert-primary .alert-link{color:#5b2215}.alert-success{color:#047364;background-color:#cef8f3;border-color:#baf5ee}.alert-success hr{border-top-color:#a4f2e9}.alert-success .alert-link{color:#024239}.alert-danger{color:#81132b;background-color:#fed3dc;border-color:#fdc2cf}.alert-danger hr{border-top-color:#fca9bc}.alert-danger .alert-link{color:#550c1c}.alert-secondary{color:#505363;background-color:#ebecf2;border-color:#e3e4ed}.alert-secondary hr{border-top-color:#d3d5e3}.alert-secondary .alert-link{color:#393b47}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;color:#fff;text-align:center;background-color:#007bff;transition:width .6s ease}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-primary{color:#85311e;background-color:#ffd2c8}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#85311e;background-color:#ffbdaf}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#85311e;border-color:#85311e}.list-group-item-success{color:#047364;background-color:#baf5ee}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#047364;background-color:#a4f2e9}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#047364;border-color:#047364}.list-group-item-danger{color:#81132b;background-color:#fdc2cf}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#81132b;background-color:#fca9bc}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#81132b;border-color:#81132b}.list-group-item-secondary{color:#505363;background-color:#e3e4ed}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#505363;background-color:#d3d5e3}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#505363;border-color:#505363}.close{float:right;font-size:1.5rem;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.popover,.tooltip{font-family:Roboto,-apple-system,system-ui,Segoe UI,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial;font-style:normal;font-weight:400;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;text-decoration:none}.modal-title,.popover,.tooltip{line-height:1.5}.popover,.text-hide,.tooltip{text-shadow:none}.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;outline:0}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:30px;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-25%)}.modal.show .modal-dialog{transform:translate(0)}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 60px)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;border:1px solid #e6ecf5;border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:23px 25px 18px;border-bottom:1px solid #e6ecf5;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:23px 25px 18px;margin:-23px 25px 18px -23px}.modal-title{margin-bottom:0}.modal-body{position:relative;flex:1 1 auto;padding:24px 23px 23px}.modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:24px 23px 23px;border-top:1px solid #e9ecef}.popover,.popover .arrow,.popover .arrow:after,.popover .arrow:before,.tooltip,.tooltip .arrow{position:absolute;display:block}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:540px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:1024px){.modal-lg{max-width:800px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{z-index:1070;margin:0;text-align:left;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#3f4257}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#3f4257}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#3f4257}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#3f4257}.tooltip-inner{max-width:200px;padding:5px 10px;color:#fff;text-align:center;background-color:#3f4257;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{top:0;left:0;z-index:1060;max-width:276px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc(-.5rem + -1px)}.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:after,.bs-popover-top .arrow:before{border-width:.5rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:before{bottom:0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-top .arrow:after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc(-.5rem + -1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:after,.bs-popover-right .arrow:before{border-width:.5rem .5rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:before{left:0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-right .arrow:after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc(-.5rem + -1px)}.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:after,.bs-popover-bottom .arrow:before{border-width:0 .5rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:before{top:0;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-bottom .arrow:after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.carousel,.carousel-inner,.carousel-item{position:relative}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc(-.5rem + -1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:after,.bs-popover-left .arrow:before{border-width:.5rem 0 .5rem .5rem}.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:before{right:0;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-left .arrow:after{right:1px;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:.812rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel-inner{width:100%;overflow:hidden}.carousel-item{display:none;align-items:center;width:100%;transition:transform .6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{transform:translateX(0)}@supports (transform-style:preserve-3d){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{transform:translateZ(0)}}.active.carousel-item-right,.carousel-item-next{transform:translateX(100%)}@supports (transform-style:preserve-3d){.active.carousel-item-right,.carousel-item-next{transform:translate3d(100%,0,0)}}.active.carousel-item-left,.carousel-item-prev{transform:translateX(-100%)}@supports (transform-style:preserve-3d){.active.carousel-item-left,.carousel-item-prev{transform:translate3d(-100%,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:50% no-repeat;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;background-color:hsla(0,0%,100%,.5)}.carousel-indicators li:after,.carousel-indicators li:before{left:0;display:inline-block;height:10px;position:absolute;content:\"\";width:100%}.carousel-indicators li:before{top:-10px}.carousel-indicators li:after{bottom:-10px}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#ff5e3a!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#ff3407!important}.bg-success{background-color:#08ddc1!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#06ac96!important}.bg-danger{background-color:#f92552!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#e50636!important}.bg-secondary{background-color:#9a9fbf!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#7b81ab!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-left,.rounded-top{border-top-left-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#ff5e3a!important}.border-success{border-color:#08ddc1!important}.border-danger{border-color:#f92552!important}.border-secondary{border-color:#9a9fbf!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-circle{border-radius:50%!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:540px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:800px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:1024px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1199px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media (min-width:1400px){.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.85714%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-top{top:0}.fixed-bottom{bottom:0}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;-webkit-clip-path:none;clip-path:none}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:540px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:800px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:1024px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1199px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.float-xxl-left{float:left!important}.float-xxl-right{float:right!important}.float-xxl-none{float:none!important}.m-xxl-0{margin:0!important}.mt-xxl-0,.my-xxl-0{margin-top:0!important}.mr-xxl-0,.mx-xxl-0{margin-right:0!important}.mb-xxl-0,.my-xxl-0{margin-bottom:0!important}.ml-xxl-0,.mx-xxl-0{margin-left:0!important}.m-xxl-1{margin:.25rem!important}.mt-xxl-1,.my-xxl-1{margin-top:.25rem!important}.mr-xxl-1,.mx-xxl-1{margin-right:.25rem!important}.mb-xxl-1,.my-xxl-1{margin-bottom:.25rem!important}.ml-xxl-1,.mx-xxl-1{margin-left:.25rem!important}.m-xxl-2{margin:.5rem!important}.mt-xxl-2,.my-xxl-2{margin-top:.5rem!important}.mr-xxl-2,.mx-xxl-2{margin-right:.5rem!important}.mb-xxl-2,.my-xxl-2{margin-bottom:.5rem!important}.ml-xxl-2,.mx-xxl-2{margin-left:.5rem!important}.m-xxl-3{margin:1rem!important}.mt-xxl-3,.my-xxl-3{margin-top:1rem!important}.mr-xxl-3,.mx-xxl-3{margin-right:1rem!important}.mb-xxl-3,.my-xxl-3{margin-bottom:1rem!important}.ml-xxl-3,.mx-xxl-3{margin-left:1rem!important}.m-xxl-4{margin:1.5rem!important}.mt-xxl-4,.my-xxl-4{margin-top:1.5rem!important}.mr-xxl-4,.mx-xxl-4{margin-right:1.5rem!important}.mb-xxl-4,.my-xxl-4{margin-bottom:1.5rem!important}.ml-xxl-4,.mx-xxl-4{margin-left:1.5rem!important}.m-xxl-5{margin:3rem!important}.mt-xxl-5,.my-xxl-5{margin-top:3rem!important}.mr-xxl-5,.mx-xxl-5{margin-right:3rem!important}.mb-xxl-5,.my-xxl-5{margin-bottom:3rem!important}.ml-xxl-5,.mx-xxl-5{margin-left:3rem!important}.p-xxl-0{padding:0!important}.pt-xxl-0,.py-xxl-0{padding-top:0!important}.pr-xxl-0,.px-xxl-0{padding-right:0!important}.pb-xxl-0,.py-xxl-0{padding-bottom:0!important}.pl-xxl-0,.px-xxl-0{padding-left:0!important}.p-xxl-1{padding:.25rem!important}.pt-xxl-1,.py-xxl-1{padding-top:.25rem!important}.pr-xxl-1,.px-xxl-1{padding-right:.25rem!important}.pb-xxl-1,.py-xxl-1{padding-bottom:.25rem!important}.pl-xxl-1,.px-xxl-1{padding-left:.25rem!important}.p-xxl-2{padding:.5rem!important}.pt-xxl-2,.py-xxl-2{padding-top:.5rem!important}.pr-xxl-2,.px-xxl-2{padding-right:.5rem!important}.pb-xxl-2,.py-xxl-2{padding-bottom:.5rem!important}.pl-xxl-2,.px-xxl-2{padding-left:.5rem!important}.p-xxl-3{padding:1rem!important}.pt-xxl-3,.py-xxl-3{padding-top:1rem!important}.pr-xxl-3,.px-xxl-3{padding-right:1rem!important}.pb-xxl-3,.py-xxl-3{padding-bottom:1rem!important}.pl-xxl-3,.px-xxl-3{padding-left:1rem!important}.p-xxl-4{padding:1.5rem!important}.pt-xxl-4,.py-xxl-4{padding-top:1.5rem!important}.pr-xxl-4,.px-xxl-4{padding-right:1.5rem!important}.pb-xxl-4,.py-xxl-4{padding-bottom:1.5rem!important}.pl-xxl-4,.px-xxl-4{padding-left:1.5rem!important}.p-xxl-5{padding:3rem!important}.pt-xxl-5,.py-xxl-5{padding-top:3rem!important}.pr-xxl-5,.px-xxl-5{padding-right:3rem!important}.pb-xxl-5,.py-xxl-5{padding-bottom:3rem!important}.pl-xxl-5,.px-xxl-5{padding-left:3rem!important}.m-xxl-auto{margin:auto!important}.mt-xxl-auto,.my-xxl-auto{margin-top:auto!important}.mr-xxl-auto,.mx-xxl-auto{margin-right:auto!important}.mb-xxl-auto,.my-xxl-auto{margin-bottom:auto!important}.ml-xxl-auto,.mx-xxl-auto{margin-left:auto!important}.text-xxl-left{text-align:left!important}.text-xxl-right{text-align:right!important}.text-xxl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#ff5e3a!important}a.text-primary:focus,a.text-primary:hover{color:#ff3407!important}.text-success{color:#08ddc1!important}a.text-success:focus,a.text-success:hover{color:#06ac96!important}.text-danger{color:#f92552!important}a.text-danger:focus,a.text-danger:hover{color:#e50636!important}.text-secondary{color:#9a9fbf!important}a.text-secondary:focus,a.text-secondary:hover{color:#7b81ab!important}.text-muted{color:#6c757d!important}.text-hide{font:0/0 a;color:transparent;background-color:transparent;border:0}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{blockquote,img,pre,tr{page-break-inside:avoid}*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999}thead{display:table-header-group}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}", ""]), t.exports = n
    }, function(t, e, o) {
        var content = o(244);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("af60c528", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(31)(!1);
        n.push([t.i, "/*!\r\n * Bootstrap Grid v4.0.0 (https://getbootstrap.com)\r\n * Copyright 2011-2018 The Bootstrap Authors\r\n * Copyright 2011-2018 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */.container,.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;width:100%}@-ms-viewport{width:device-width}html{box-sizing:border-box;-ms-overflow-style:scrollbar;font-size:13px}*,:after,:before{box-sizing:inherit}@media (min-width:540px){html{font-size:13px}.container{max-width:600px}}@media (min-width:800px){html{font-size:13px}.container{max-width:680px}}@media (min-width:1024px){html{font-size:14px}.container{max-width:900px}}@media (min-width:1199px){html{font-size:16px}.container{max-width:1110px}}@media (min-width:1400px){.container{max-width:1300px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto,.col-xxl,.col-xxl-1,.col-xxl-2,.col-xxl-3,.col-xxl-4,.col-xxl-5,.col-xxl-6,.col-xxl-7,.col-xxl-8,.col-xxl-9,.col-xxl-10,.col-xxl-11,.col-xxl-12,.col-xxl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:none}.col-1{flex:0 0 8.33333%;max-width:8.33333%}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-8{flex:0 0 66.66667%;max-width:66.66667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333%;max-width:83.33333%}.col-11{flex:0 0 91.66667%;max-width:91.66667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:540px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:none}.col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:800px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:none}.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:1024px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:none}.col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1199px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media (min-width:1400px){.col-xxl{flex-basis:0;flex-grow:1;max-width:100%}.col-xxl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xxl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xxl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xxl-3{flex:0 0 25%;max-width:25%}.col-xxl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xxl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xxl-6{flex:0 0 50%;max-width:50%}.col-xxl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xxl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xxl-9{flex:0 0 75%;max-width:75%}.col-xxl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xxl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xxl-12{flex:0 0 100%;max-width:100%}.order-xxl-first{order:-1}.order-xxl-last{order:13}.order-xxl-0{order:0}.order-xxl-1{order:1}.order-xxl-2{order:2}.order-xxl-3{order:3}.order-xxl-4{order:4}.order-xxl-5{order:5}.order-xxl-6{order:6}.order-xxl-7{order:7}.order-xxl-8{order:8}.order-xxl-9{order:9}.order-xxl-10{order:10}.order-xxl-11{order:11}.order-xxl-12{order:12}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333%}.offset-xxl-2{margin-left:16.66667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333%}.offset-xxl-5{margin-left:41.66667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333%}.offset-xxl-8{margin-left:66.66667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333%}.offset-xxl-11{margin-left:91.66667%}.d-xxl-none{display:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:540px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:800px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:1024px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1199px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}@media (min-width:1400px){.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}}", ""]), t.exports = n
    }, function(t, e, o) {
        var content = o(246);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("57e157a8", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(31)(!1);
        n.push([t.i, '.header--standard>.container,.header--standard>.container>.header--standard-wrap{height:auto}.footer,.section-move-bg .container,section{position:relative}.logo{display:flex;align-items:center;color:#fff}.logo img{transition:opacity .3s ease;height:60px}@media (max-width:420px){.logo img{height:40px}.logo .logo-title{font-size:12px!important}.logo .sub-title{font-size:10px!important}}.logo .logo-title{font-size:14px;font-weight:200;line-height:120%;margin:0;color:inherit;transition:all .3s ease}.logo .sub-title{font-size:12px;font-weight:100;color:#999}.logo:hover{color:#fff}.logo .img-wrap{position:relative}.header{height:70px;background-color:#3f4257;padding-right:70px;position:fixed;top:0;left:0;right:0;z-index:21}.header .page-title{padding:26px 50px 26px 100px;text-transform:uppercase;float:left;height:100%;min-width:170px}.header .page-title>*{color:#fff;margin:0}.header.header--logout{display:flex;align-items:center;padding-right:0}.header.header--logout .page-title{padding:26px}.header.header--logout .header-content-wrapper{width:100%;display:flex;align-items:center}.header.header--logout .logo{height:70px;width:70px;background-color:#ff5e3a;padding:15px}.header-content-wrapper{height:100%}.header-spacer{display:block;height:110px}.header-spacer-small{height:70px}.header-spacer--standard{height:100px}.top-header.top-header-favorit .top-header-author{transform:translate(0);left:100px;bottom:-40px;z-index:5;max-width:unset}.top-header.top-header-favorit .author-thumb{float:left;margin-right:30px}.top-header.top-header-favorit .author-content{text-align:left;margin-top:20px;float:left;color:#fff}.content-bg-wrap,.profile-menu .friend-count-item{text-align:center}.top-header.top-header-favorit .author-name{color:#fff}.top-header-thumb img{width:100%;border-radius:5px 5px 0 0;overflow:hidden}.top-header-thumb:after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:inset 0 -120px 55px -30px rgba(0,0,0,.5)}.search-bar,.search-bar.w-search{width:500px;background-color:#494c62}.search-bar{float:left;height:70px;position:relative}.search-bar.w-search{min-height:70px}.search-bar .form-group{margin-bottom:0;height:70px}.search-bar .form-control{border:none;padding:0}.search-bar .selectize-control{position:relative;z-index:20;height:70px}.search-bar .selectize-dropdown{background-color:#fff;z-index:50;border:1px solid #e6ecf5;box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.search-bar .selectize-input{height:70px}.search-bar .selectize-input.has-items input{background-color:transparent}.search-bar .selectize-input.has-items>*{padding:3px 10px;border-radius:3px;background-color:#9a9fbf;color:#fff;display:inline-block;margin-right:3px}.search-bar .selectize-input.has-items>:first-child{margin-left:15px}.search-bar .form-group.with-button button{color:#696d87;fill:#696d87;background-color:#494c62;width:50px}.search-bar .form-group.with-button button svg{height:22px;width:22px}.search-bar .form-group.with-button input{height:100%;border:none;color:#9a9fbf}.search-bar .notification-list{position:absolute;top:-100%;visibility:hidden;opacity:0;transition:all .3s ease;z-index:50;background:#fff;width:100%;box-shadow:0 0 34px 0 rgba(63,66,87,.1);border-right:1px solid #e6ecf5;border-left:1px solid #e6ecf5}.search-bar .notification-list .notification-icon svg{width:20px;height:20px}.header-menu ul{display:flex;align-items:center;justify-content:space-around;margin-bottom:0;height:100%}.header-menu a{font-size:13px;position:relative;color:#515365;padding:30px;display:block;line-height:1}.header-menu .nav-item.show .nav-link,.header-menu .nav-link.active{background-color:transparent;cursor:pointer;color:inherit}.header-menu .nav-link:hover{color:#ff5e3a}.header-menu .dropdown:hover>.dropdown-menu{visibility:visible;opacity:1}.header-menu .dropdown-menu{visibility:hidden;opacity:0;display:block;transition:all .3s ease;margin:0;padding:0;background-color:#3f4257;border-color:#e6ecf5;box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.header-menu .dropdown-item:focus,.header-menu .dropdown-item:hover{color:#ff5e3a;background-color:transparent}.header--standard .logo,.header--standard .logo:hover{color:#515365}.header-menu.open{transform:translateX(70px)}.header-menu .dropdown-toggle:after{right:0;top:auto}.header--standard-wrap{display:flex;align-items:center;position:relative}.header--standard .header-menu .close-responsive-menu,.header--standard .ps:hover>.ps__scrollbar-x-rail,.header--standard .ps:hover>.ps__scrollbar-y-rail,.open-responsive-menu{display:none}.header--standard{background-color:#fff;width:100%;position:fixed;padding:10px 5px;box-shadow:0 0 34px 0 rgba(63,66,87,.1);z-index:19}.header--standard .logo .img-wrap{margin-right:13px}.header--standard-dark .column-tittle,.header--standard-dark .header-menu a,.header--standard-dark .logo,.header--standard-dark .logo .logo-title,.header--standard-dark .logo:hover,.header--standard-landing,.header--standard-landing .logo .logo-title{color:#fff}.header--standard .header-menu{margin-left:auto}.header--standard .header-menu .dropdown-item{padding:10px 20px;font-weight:500}.header--standard .header-menu .dropdown-item:hover{background-color:#edf2f6}.header--standard .dropdown-menu,.header--standard.header-bg-light{background-color:#fff}.header--standard .header-menu .shoping-cart{visibility:visible;opacity:1}.header--standard.headroom--not-top{padding:0 55px}.header--standard .ps{touch-action:unset;overflow:unset!important;-ms-overflow-style:unset}.header--standard.header--standard-full-width,.header--standard.header--standard-landing{width:100%;left:auto;top:0}.header--standard-dark,.header--standard-dark .header-menu{background-color:#3f4257}.header--standard-dark .header-menu .dropdown-item:hover{background-color:#545875}.header--standard-dark .dropdown-menu{background-color:#3f4257;border-color:#4a4d66}.open-responsive-menu{margin-left:auto;fill:#9a9fbf}.open-responsive-menu:hover{fill:#ff5e3a}.close-responsive-menu{position:absolute;top:20px;margin-left:20px;fill:#9a9fbf;display:none;cursor:pointer;transition:all .3s ease}.close-responsive-menu svg{width:16px;height:16px;margin-left:20px}.close-responsive-menu:hover{fill:#ff5e3a}.dropdown-has-megamenu{position:static}.dropdown-menu.megamenu{width:100%;padding:40px}.dropdown-menu.megamenu .dropdown-item{border-radius:5px;overflow:hidden;background-color:transparent}.dropdown-menu.megamenu .dropdown-item:hover{padding-left:25px;background-color:transparent}.column-tittle{padding-left:20px;padding-bottom:15px;position:relative;overflow:hidden;display:inline-block}.column-tittle:after{display:block;height:2px;background-color:#ff5e3a;width:15%;position:absolute;bottom:0;left:20px;transition:width .3s ease}.column-tittle:hover:after{width:100%}.header--standard .mCustomScrollbar{max-height:calc(100vh - 70px)}.header--standard-landing{width:100%;background-color:transparent;box-shadow:none}.header--standard-landing svg{width:18px;height:18px}.header--standard-landing .logo{float:left;background-color:transparent;padding:0;color:#fff}.header--standard-landing .logo .img-wrap{margin-right:13px;transition:opacity .3s ease}.header--standard-landing .logo .logo-colored{position:absolute;left:0;top:0;opacity:0}.header--standard-landing .logo:hover{color:inherit}.header--standard-landing .dropdown-toggle:after{border-top-color:#fff}.header--standard-landing .dropdown-menu{background-color:#fff}.header--standard-landing .dropdown-menu.megamenu .dropdown-item:hover{color:#ff5e3a}.header--standard-landing .header-menu{float:right;background-color:transparent}.header--standard-landing .header-menu .js-expanded-menu .olymp-close-icon{position:absolute;right:30px;top:0;opacity:0;visibility:hidden}.header--standard-landing .header-menu.expanded-menu .nav-item{visibility:visible;opacity:1}.header--standard-landing .header-menu.expanded-menu .olymp-menu-icon{opacity:0;visibility:hidden}.header--standard-landing .header-menu.expanded-menu .olymp-close-icon{opacity:1;visibility:visible}.header--standard-landing .header-menu .nav-item{display:block;visibility:hidden;opacity:0}.header--standard-landing .header-menu .nav-item a,.header--standard-landing .header-menu li a{color:#fff;fill:#fff;display:block}.header--standard-landing .header-menu .nav-item.js-expanded-menu,.header--standard-landing .header-menu li.js-expanded-menu{visibility:visible;opacity:1;position:relative}.header--standard-landing .header-menu .nav-item.js-expanded-menu a,.header--standard-landing .header-menu li.js-expanded-menu a{padding:0 30px}.header--standard-landing .header-menu .nav-item .nav-link:hover,.header--standard-landing .header-menu li .nav-link:hover{color:#fff}.header--standard-landing .header-menu .nav-item .dropdown-item,.header--standard-landing .header-menu li .dropdown-item{color:#888da8}.header--standard-landing .header-menu .nav-item .dropdown-item:hover,.header--standard-landing .header-menu li .dropdown-item:hover{color:#ff5e3a}.header--standard-landing.headroom--not-top .logo,.header--standard-landing.headroom--not-top .logo .logo-title{color:#515365}.header--standard-landing .header-menu li:first-child>a{padding-left:0}.header--standard-landing .header-menu li:last-child>a{padding-right:0}.header--standard-landing .close-responsive-menu,.header--standard-landing .open-responsive-menu{fill:#fff}.header--standard-landing.headroom--not-top{background-color:#fff;box-shadow:0 0 34px 0 rgba(63,66,87,.2)}.header--standard-landing.headroom--not-top .logo .logo-colored{opacity:1}.header--standard-landing.headroom--not-top .header-menu .nav-item a,.header--standard-landing.headroom--not-top .header-menu .nav-item a:hover,.header--standard-landing.headroom--not-top .header-menu li .nav-link,.header--standard-landing.headroom--not-top .header-menu li .nav-link:hover{color:#515365;fill:#9a9fbf}.header--standard-landing.headroom--not-top .header-menu li .dropdown-item{color:#888da8}.header--standard-landing.headroom--not-top .shoping-cart .count-product{color:#9a9fbf}.footer{min-width:100%;width:calc(100% - 144px);margin:0 auto;padding:70px 55px 0;background-color:#fff}.footer .widget .title{margin-bottom:25px}.footer.footer-full-width{width:100%}.footer.has-not-copyright{padding:70px 55px}.footer--dark{background-color:#3f4257}.footer--dark .socials i,.footer--dark .socials svg,.footer--dark .w-about .logo,.footer--dark .w-about .logo .logo-title,.footer--dark .w-about .logo:hover,.footer--dark .widget .title{color:#fff}.footer--dark .socials i:hover,.footer--dark .socials svg:hover{color:#ff5e3a}.footer,.img-scale-animation img{box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.sub-footer-copyright{padding:40px 0;text-align:center;border-top:1px solid #e6ecf5;margin-top:60px}.sub-footer-copyright span{font-size:12px}.sub-footer-copyright a{color:#ff5e3a;opacity:.7;font-weight:500}.sub-footer-copyright a:hover{opacity:1}@media (max-width:1024px){.footer .widget{margin-bottom:40px}.footer{padding:40px 15px;width:100%}}.left-menu{padding:20px 0}.left-menu .left-menu-title{transition:all .3s ease;font-weight:700}.left-menu .left-menu-icon{fill:#9a9fbf;transition:all .3s ease;margin-right:25px}.left-menu .olymp-weather-icon{width:26px}.left-menu .olymp-happy-faces-icon{width:23px}.left-menu svg{width:20px}.left-menu a{padding:16px 0 16px 25px;display:flex;align-items:center;color:#9a9fbf}.left-menu a:hover{color:#515365}.left-menu a:hover svg{fill:#ff5e3a}.timeline{position:relative;max-width:1200px;margin:0 auto}.timeline:after{content:"";position:absolute;width:2px;background-color:#ff5e3a;top:0;bottom:0;left:50%;margin-left:-3px}.timeblock{padding:10px 30px;position:relative;background-color:inherit;width:50%}.timeblock:after{content:"";position:absolute;width:18px;height:18px;right:-6px;background-color:#fff;border:2px solid #ff5e3a;top:36px;border-radius:50%;z-index:1}.tb-left{left:0}.tb-right{left:50%}.tb-left:before{right:23px;border:solid transparent;border-left:solid #ff5e3a;border-width:10px 0 10px 10px}.tb-left:before,.tb-right:before{content:" ";height:0;position:absolute;top:30px;width:0;z-index:1}.tb-right:before{left:23px;border:solid transparent;border-right:solid #ff5e3a;border-width:10px 10px 10px 0}.tb-right:after{left:-12px}.tb-content{padding:20px 30px;background-color:#fff;position:relative;border-radius:4px;box-shadow:2px 3px 7px 2px #e0dede}.custom-left{z-index:1!important;transform:translateY(15rem)}.timeline-nav__item.slick-slide,.timeline-nav__item.slick-slide.slick-active{line-height:4em;font-size:1.4em;min-width:90px;cursor:pointer}.timeline-wrapper .post-thumb{height:380px;-o-object-fit:cover;object-fit:cover;margin:1em}.timeline-slide__content{width:85%;text-align:center}.timeline-nav__item.slick-slide.slick-current.slick-active{font-weight:800;color:#1fc51f;cursor:auto}.timeline-slide .ui-block.bg-yellow{width:70%;transform:translateY(50%)}@media (max-width:1024px){.timeline-ui-block{display:none}}@media (min-width:1248px){.timeline-ui-block{display:flex;justify-content:flex-end;position:absolute}.timeline-content-block{position:relative;transform:translate(117%,-36em)}}@media (max-width:1024px){.timeline-slide .ui-block.bg-yellow{transform:translateY(50%)}}@media screen and (max-width:1024px){.timeline:after{left:10px}.timeblock{width:100%;padding-left:37px;padding-right:25px}.timeblock:before{left:30px;border:solid transparent;border-right:solid #ff5e3a;border-width:10px 10px 10px 0}.tb-left:after,.tb-right,.tb-right:after{left:0}}.bg-telegram-plane{background:#1e94d3;background:linear-gradient(45deg,#1e94d3,#36aade);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#1e94d3",endColorstr="#36aade",GradientType=1)}.cust-row-height.forums-table td{padding:8px 25px}', ""]), t.exports = n
    }, function(t, e, o) {
        var content = o(248);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("a3a24e50", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(31),
            r = o(160),
            l = o(249),
            d = o(250),
            c = o(251),
            m = o(252),
            f = o(253),
            h = o(254),
            x = o(255),
            w = o(256),
            v = o(257),
            y = o(258),
            k = n(!1),
            j = r(l),
            z = r(d),
            _ = r(c),
            M = r(m),
            O = r(f),
            C = r(h),
            D = r(x),
            I = r(w),
            N = r(v),
            S = r(y);
        k.push([t.i, '.ranges ul,ol li,ul{list-style:none}.mobile-app-tabs .nav-link,.testimonial-item-content{-webkit-box-orient:vertical}.right1{margin-left:25px;border:none}.control-block{float:right;height:100%;display:flex;align-items:center}.control-block .author-thumb{margin-right:8px;position:unset}.control-block .author-title{font-weight:700;font-size:12px;color:#fff}.control-block .author-title>svg{margin-left:15px;fill:#fff;width:6px;height:4px}.control-block .author-subtitle{display:block;font-weight:700;color:#9a9fbf;font-size:8px}.link-find-friend{padding:25px 20px;color:#fff;font-size:12px;font-weight:500;display:inline-block}.control-icon{margin-right:29px;fill:#9a9fbf;margin-top:8px}.control-icon>svg{height:20px}.control-icon.has-items{fill:#fff}.control-icon .label-avatar{width:19px;height:19px;line-height:19px;top:-12px;right:-9px}.control-icon .more-dropdown{width:380px;top:35px;right:-180px;padding:0 0 70px}.control-icon .more-dropdown .view-all{padding:20px;color:#fff}.control-icon .more-dropdown .view-all:hover{color:#fff}.control-icon .more-dropdown .notification-list{padding:0}.control-icon .ui-block-title a{display:inline-block;float:right;margin-left:20px;text-transform:uppercase;font-size:9px;padding:0}.control-icon .accept-request{padding:.5rem;font-size:.688rem;color:#fff;display:inline-block}.control-icon .accept-request:hover{color:#fff}.control-icon .notification-list .author-thumb{height:34px;width:34px;margin-right:0;overflow:hidden}.control-icon .notification-list .notification-friend{padding:0;font-size:14px}.control-icon .notification-list .notification-link{padding:0;display:inline-block}.control-icon .notification-list .notification-event{width:75%}.control-icon .notification-list.friend-requests .accepted .notification-link{padding:0;display:inline-block}.account-settings a,.view-all{display:block;font-weight:700}.control-icon .notification-list.friend-requests .accepted .notification-icon{margin-top:0}.control-icon .notification-list.friend-requests .notification-event{width:60%}.control-icon .notification-list .comment-photo{margin-top:15px;max-width:215px}.control-icon .notification-list .comment-photo span{font-size:11px}.control-icon .notification-list li>*{vertical-align:top}.control-icon .notification-list .notification-icon{margin-top:0}.control-icon .notification-list .notification-icon svg{height:20px;width:20px}.control-icon .chat-message li.chat-group .author-thumb{width:36px}.control-icon .notification-list.chat-message .notification-icon svg{height:24px;width:24px}.control-icon .mCustomScrollbar{overflow:hidden;max-height:300px}.control-icon .ps:hover>.ps__scrollbar-y-rail,.control-icon .ps>.ps__scrollbar-y-rail{left:0;top:40px!important}.view-all{position:absolute;left:0;width:100%;bottom:0;z-index:20;padding:20px;color:#fff;font-size:12px;text-align:center;border-radius:0 0 5px 5px}.top-header,.top-header-thumb{position:relative}.view-all:hover{color:#fff}.author-page{margin-left:50px}.author-page .more-dropdown{width:230px;top:calc(100% + 5px);right:-30px;padding:0}.author-page .chat-settings{padding:15px 40px}.author-page .chat-settings a{color:#888da8}.author-page .chat-settings a:hover{color:#515365}.author-page .chat-settings .icon-status{margin-right:20px;position:relative;border:none}.author-page .account-settings{padding:15px 25px;margin-bottom:0}.author-page .account-settings a{padding:13px 0}.author-page .mCustomScrollbar{max-height:calc(100vh - 40px)}.account-settings{padding:15px 25px;margin-bottom:0}.account-settings a{font-size:12px;color:#515365}.account-settings a:hover{color:#ff5e3a}.account-settings a>*{display:inline-block;vertical-align:middle}.custom-status{margin:15px 25px}.custom-status input{padding:.5rem 1.1rem;font-size:12px}.custom-status.form-group.with-button button{border-radius:0 5px 5px 0;background-color:#7c5ac2;overflow:hidden}.custom-status.form-group.with-button button svg{fill:#fff;width:14px;height:12px}.account-settings a{padding:13px 0}.account-settings svg{margin-right:15px;fill:#9a9fbf;width:20px;height:20px}.column-tittle:after,blockquote p:before{content:""}.profile-menu{margin-bottom:0;display:flex;-webkit-box-align:center;list-style:none;padding:0;align-items:center;justify-content:space-around}.profile-menu li>div,.profile-menu li a{font-size:14px;font-weight:700;color:#9a9fbf;display:block}.profile-menu li>div.active,.profile-menu li>div:hover,.profile-menu li a.active,.profile-menu li a:hover{color:#515365}.profile-menu .more-dropdown{width:230px;top:calc(100% + 10px);right:-25px}.profile-menu .more-dropdown li{display:block}.profile-menu li .more-dropdown a{padding:10px 0;font-size:13px}.profile-menu .friend-count-item .title{font-weight:400;font-size:12px}.author-name,.header-menu a,.top-header-author .author-name{font-weight:700}.author-name{color:#222;font-size:16px}.author-name-intro{font-size:14px;font-weight:400}.top-header-author{position:absolute;left:50%;transform:translate(-50%);bottom:15px;text-align:center;max-width:200px;z-index:4}.top-header-author .author-thumb{border-radius:100%;border:6px solid #fff;margin:0 auto;overflow:hidden;width:132px;height:132px;background-color:#fdfbee}.top-header-author .author-thumb img{border-radius:0}.profile-section{position:relative;padding:38px 0;z-index:3}.profile-section .control-block-button{position:absolute;right:38px;top:-31px}.admin-bar #site-header{top:46px}@media screen and (min-width:783px){.admin-bar #site-header{top:32px}}#site-header .header-menu{top:46px}@media screen and (min-width:783px){#site-header .header-menu{top:32px}}[class*=" -icon"],[class^=olymp-]{height:26px;width:26px;display:inline-block}.header-responsive,.tab-content-responsive{display:none}.post__likes-small{width:16px;height:14px}.post__shared-small{width:24px;height:21px}.post__comments-small{width:18px;height:16px}.post__likes{width:20px;height:18px}.post__comments{width:22px;height:20px}.post__shared{width:26px;height:21px}.fav-icon{width:20px;height:20px}.arrow-down-icon{width:6px;height:4px}.olymp-three-dots-icon{width:16px;height:4px}.olymp-little-delete{width:8px;height:8px}.olymp-trophy-icon{width:18px;height:16px}.fixed-sidebar.fixed-sidebar-responsive{display:none;height:auto;min-height:70px;transition:all .3s ease}.fixed-sidebar.fixed-sidebar-responsive.open{min-height:1000vh}.header-responsive .header-content-wrapper{z-index:5}.tab-content-responsive .tab-pane{background-color:#fff}.tab-content-responsive .search-bar.w-search{background-color:#494c62}.tab-content-responsive .mCustomScrollbar{max-height:calc(100vh - 140px);overflow-y:auto!important}.header-menu{float:left;height:100%;transition:transform .5s cubic-bezier(.55,0,.1,1);background-color:#fff}.landing-page{position:relative;min-height:100vh}.landing-page .content-bg-wrap{-webkit-animation:sidedownscroll 30s linear infinite;animation:sidedownscroll 30s linear infinite}.landing-page .content-bg-wrap:before{content:"";display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(255,94,58,.95);opacity:1;z-index:auto}@-webkit-keyframes sidedownscroll{0%{background-position:0 0}to{background-position:-2000px 2000px}}@keyframes sidedownscroll{0%{background-position:0 0}to{background-position:-2000px 2000px}}.landing-page .header-spacer--standard{margin-bottom:40px}.content-bg-wrap{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;box-sizing:border-box;background-repeat:no-repeat;background-position:50%;background-size:cover}@-webkit-keyframes slide{0%{background-position:0 0}to{background-position:-4000px 0}}.without-animation{-webkit-animation:none;animation:none}.tag-label{display:inline-block;border-radius:3px;padding:4px;color:#fff;font-size:8px;text-transform:uppercase;font-weight:800;margin-left:12px;top:-3px;position:relative}.animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;will-change:transform,opacity}.animated.swingInX{-ie-transform-origin:top;transform-origin:top;-webkit-animation-name:swingInX;-moz-animation-name:swingInX;-o-animation-name:swingInX;backface-visibility:visible!important;animation-name:swingInX}.animated.flipInX,.animated.swingInX,.animated.swingOutX{-webkit-backface-visibility:visible!important;-moz-backface-visibility:visible!important;-o-backface-visibility:visible!important}@media (max-width:480px){.animated{-webkit-animation-fill-mode:none;animation-fill-mode:none;will-change:unset}.animated.swingInX{-webkit-animation-name:none;animation-name:none;transform-origin:unset}}@-webkit-keyframes swingOutX{0%{-webkit-transform:perspective(400px) rotateX(0)}to{-webkit-transform:perspective(400px) rotateX(-90deg)}}@keyframes swingOutX{0%{transform:perspective(400px) rotateX(0)}to{transform:perspective(400px) rotateX(-90deg)}}.animated.swingOutX{-webkit-transform-origin:top;-webkit-animation-name:swingOutX;animation-name:swingOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@media (max-width:480px){.animated.swingOutX{-webkit-animation-name:none;animation-name:none;transform-origin:unset}}@-webkit-keyframes slideDown{0%{-webkit-transform:translateY(-100%)}to{-webkit-transform:translateY(0)}}@keyframes slideDown{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.animated.slideDown{-webkit-animation-name:slideDown;animation-name:slideDown}@media (max-width:480px){.animated.slideDown{-webkit-animation-name:none;animation-name:none}}@-webkit-keyframes slideUp{0%{-webkit-transform:translateY(0)}to{-webkit-transform:translateY(-100%)}}@keyframes slideUp{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animated.slideUp{-webkit-animation-name:slideUp;animation-name:slideUp}@media (max-width:480px){.animated.slideUp{-webkit-animation-name:none;animation-name:none}}@-webkit-keyframes swingInX{0%{-webkit-transform:perspective(400px) rotateX(-90deg)}to{-webkit-transform:perspective(400px) rotateX(0)}}@keyframes swingInX{0%{transform:perspective(400px) rotateX(-90deg)}to{transform:perspective(400px) rotateX(0)}}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);opacity:0}to{-webkit-transform:perspective(400px) rotateX(0);opacity:1}}@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);opacity:0}to{transform:perspective(400px) rotateX(0);opacity:1}}.animated.flipInX{-webkit-animation-name:flipInX;-moz-animation-name:flipInX;-o-animation-name:flipInX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}@media (max-width:480px){.animated.flipInX{-webkit-animation-name:none;animation-name:none}}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px) rotateX(0);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{transform:perspective(400px) rotateX(0);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.animated.flipOutX{-webkit-animation-name:flipOutX;-webkit-backface-visibility:visible!important;-moz-animation-name:flipOutX;-moz-backface-visibility:visible!important;-o-animation-name:flipOutX;-o-backface-visibility:visible!important;animation-name:flipOutX;backface-visibility:visible!important}@media (max-width:480px){.animated.flipOutX{-webkit-animation-name:none;animation-name:none}}@-webkit-keyframes bounceInDown{0%{opacity:0;-webkit-transform:translateY(-200px)}60%{opacity:1;-webkit-transform:translateY(30px)}80%{-webkit-transform:translateY(-10px)}to{-webkit-transform:translateY(0)}}@keyframes bounceInDown{0%{opacity:0;transform:translateY(-200px)}60%{opacity:1;transform:translateY(30px)}80%{transform:translateY(-10px)}to{transform:translateY(0)}}.animated.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@media (max-width:480px){.animated.bounceInDown{-webkit-animation-name:none;animation-name:none}}@-webkit-keyframes bounceOutUp{0%{-webkit-transform:translateY(0)}30%{opacity:1;-webkit-transform:translateY(20px)}to{opacity:0;-webkit-transform:translateY(-200px)}}@keyframes bounceOutUp{0%{transform:translateY(0)}30%{opacity:1;transform:translateY(20px)}to{opacity:0;transform:translateY(-200px)}}.animated.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@media (max-width:480px){.animated.bounceOutUp{-webkit-animation-name:none;animation-name:none;transform-origin:unset}}.headers-demonstration .header--standard{margin-bottom:50px;position:relative}.headers-demonstration .footer{margin-bottom:50px}@media (max-width:1350px){.search-bar.w-search{max-width:300px}}@media (max-width:1200px){.header-menu a{padding:30px 15px}.shoping-cart a{padding:0}}@media (max-width:1150px){.author-page .author-name{display:none}.author-page .more-dropdown{right:-8px;top:calc(100% + 10px)}}@media (max-width:1080px){.control-icon .more-dropdown{width:320px;right:-140px}.control-icon .notification-list .notification-icon{float:none;margin-top:10px}.control-icon .notification-list.friend-requests .accepted .notification-icon{float:right}.header .page-title{display:none}.header{padding-left:70px}.header.header--logout{padding-left:0}.header-content-wrapper{display:flex;justify-content:space-between}}@media (max-width:1024px){.control-icon{margin-right:20px}.author-page{margin-left:10px}.header--standard>.container{width:100%;max-width:unset}.header-menu a{padding:30px 10px}.shoping-cart a{padding:0}}@media (max-width:960px){.header--standard-wrap{flex-direction:row}.header--standard .logo{margin-top:10px}.header--standard{padding:5px}.header--standard .header-menu{margin-left:0}}@media (max-width:880px){.header.header--logout .search-bar.w-search{display:none}}@media (max-width:801px){.search-bar.w-search{max-width:200px}.top-header-author{position:relative;bottom:20px;color:#888da8;margin-top:20px}.top-header-author .author-name{color:#222}.profile-section .control-block-button{right:auto;top:-30px;left:50%;transform:translate(-50%);bottom:auto;width:100%;text-align:center}.top-header.top-header-favorit .top-header-author{bottom:0;top:auto;position:absolute}.top-header.top-header-favorit .profile-section .control-block-button{right:38px;top:-31px;left:auto;transform:none;width:auto}}@media (max-width:799px){.profile-menu{margin-bottom:30px}}@media (max-width:768px){.control-block .author-title,.tab-content-responsive .ui-block-title a{color:#515365}.fixed-sidebar,.header{display:none}.header--standard-landing .header-menu li:last-child>a{padding-left:25px}.header--standard.headroom--not-top{padding:5px}.fixed-sidebar.fixed-sidebar-responsive,.header-responsive{display:block}.header-responsive .mobile-app-tabs .nav-link{padding:0 5px}.search-bar.w-search{width:100%;max-width:100%}.tab-content-responsive{width:100%;left:0;display:block;position:absolute;z-index:-1}.control-block .author-thumb,.view-all{position:relative}.tab-content-responsive .ps:hover>.ps__scrollbar-y-rail,.tab-content-responsive .ps>.ps__scrollbar-y-rail{display:none}.fixed-sidebar-left.sidebar--small{height:70px}.control-block{float:none;display:block;height:auto;padding:15px 20px 0}.author-page .author-name{display:inline-block}.author-thumb .icon-status{border-color:#fff!important}.notification-list .notification-event{padding-left:10px}.friend-requests .chat-message-item{font-size:10px}.notification-list .notification-friend{font-size:13px}.notification-list.chat-message .notification-event{width:auto}.notification-list.chat-message.chat-message-field .notification-event{max-width:82%}.popup-chat .notification-list.chat-message .notification-event{width:75%}.tab-content-responsive .notification-list.friend-requests .selectize-dropdown .notification-icon{display:inline-block;float:right}.profile-section{padding:30px 0;z-index:5}.header--standard-landing{position:absolute}.header--standard-landing .header-menu{background-color:#ff5e3a}.header--standard-landing .header-menu .nav-item{display:inline-block;visibility:visible;opacity:1}.header--standard-landing .logo{float:none;justify-content:center}.header--standard-landing .header-menu .nav-item:first-child a{padding-left:25px}.header--standard-landing .header-menu .nav-item.js-expanded-menu{display:none}.header--standard .header-menu .close-responsive-menu,.header--standard .ps:hover>.ps__scrollbar-x-rail,.header--standard .ps:hover>.ps__scrollbar-y-rail,.header-menu ul,.open-responsive-menu{display:block}.header-menu .shoping-cart a .count-product{top:10px}.header--standard-wrap{flex-direction:row}.header-menu{margin:auto;flex-direction:column;position:fixed;height:100vh;width:270px;transform:translateX(calc(100% + 70px));right:0;top:0;text-align:left;justify-content:baseline;align-items:baseline;padding-top:50px;border-left:1px solid #e6ecf5;box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.dropdown-menu,.header-menu>*,.nav-item{width:100%}.header-menu a{padding:15px 25px;color:#888da8}.header-menu .show .dropdown-menu{opacity:1;visibility:visible;position:relative;margin-bottom:15px;display:block}.header--standard-dark .header-menu{border-left:1px solid #545875}.header-menu .dropdown:hover>.dropdown-menu{opacity:0;visibility:hidden}.header-menu .show.dropdown:hover>.dropdown-menu{opacity:1;visibility:visible}.dropdown-menu{top:auto}.header--standard .header-menu .dropdown-item{padding:10px 30px}.header--standard{z-index:21;height:70px}.header--standard .ps{touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}.header--standard>.container,.header--standard>.container>.header--standard-wrap{height:100%}.megamenu .row>*{width:100%;max-width:100%}.megamenu .row>*+*{margin-top:15px}.header--standard.headroom--not-top .header-menu .nav-link{padding:15px 25px}.dropdown-menu.megamenu{padding:10px}.dropdown-menu.megamenu .dropdown-item:hover{padding-left:35px}.header-spacer--standard{height:70px}}@media (max-width:570px){.top-header.top-header-favorit .top-header-author{left:20px}}@media (max-width:460px){.tab-content-responsive .notification-list .notification-event{width:50%}.tab-content-responsive .notification-list .selectize-dropdown .notification-event{width:auto}.top-header.top-header-favorit .top-header-author{bottom:auto;top:0;margin-top:5px}.top-header.top-header-favorit .top-header-author .author-thumb{width:60px;height:60px;border-width:2px}.top-header.top-header-favorit .author-content{margin-top:0}.top-header.top-header-favorit .profile-menu{flex-direction:column}.top-header.top-header-favorit .profile-menu li{margin-bottom:5px}.control-icon .mCustomScrollbar{max-height:150px}}@media (max-width:420px){.header--standard-wrap{flex-direction:row}.open-responsive-menu{margin-left:0}.header--standard .logo{margin-bottom:0;padding:0 30px}.header--standard{width:100%;left:0;z-index:20;height:auto}.header-menu{transform:translateX(100%)}.header-menu.open{transform:translateX(0)}.top-header.top-header-favorit .author-name{font-size:12px}.author-name{font-size:18px!important}.header-spacer--standard{height:103px}}.section-move-bg .content-bg-wrap{background-position:bottom;background-repeat:repeat-x;background-size:100% 100%}.section-move-bg .container{z-index:5}.section-move-bg-top .content-bg-wrap{background-position:top;background-repeat:repeat-x;bottom:auto;top:0}.section-move-bg-top .container{z-index:5;position:relative}.call-to-action-animation .first-img{position:absolute;left:15%;opacity:0;transition:all .3s ease;bottom:-100%;transform:scale(0);z-index:5}.call-to-action-animation .second-img{position:absolute;right:80%;opacity:0;transition:all .3s ease;bottom:-100%;z-index:5}.img-scale-animation img{position:absolute;transform:scale(0);opacity:0}.img-scale-animation img.main-img{position:relative;box-shadow:none}.img-scale-animation img.first-img1{left:2%;top:5%}.img-scale-animation img.second-img1{left:12%;top:50%}.img-scale-animation img.third-img1{right:2%;top:8%}.subscribe-animation{position:relative}.subscribe-animation .plane{opacity:0;position:absolute;bottom:-100%;transform:scale(0);left:5%}.planer-animation{position:relative}.planer-animation .planer{position:absolute;top:10%;left:0;opacity:0;transform:scale(0)}.contact-form-animation{position:relative}.contact-form-animation .crew{opacity:0;position:absolute;bottom:20%;transform:scale(0);left:0}.block-action{padding:60px 70px 40px;border-radius:5px;min-height:260px;display:flex}.block-action>*{margin-top:auto;min-width:100%}.screen-reader-text{clip:rect(1px,1px,1px,1px);position:absolute!important;height:1px;width:1px;overflow:hidden}.screen-reader-text:focus{background-color:#f1f1f1;border-radius:3px;box-shadow:0 0 2px 2px rgba(0,0,0,.6);clip:auto!important;color:#21759b;display:block;font-size:14px;font-size:.875rem;font-weight:700;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}#content[tabindex="-1"]:focus{outline:0}@media (max-width:860px){.img-scale-animation img.first-img1,.img-scale-animation img.second-img1,.img-scale-animation img.third-img1{top:0;max-height:100%}.subscribe-animation .plane{max-width:200px;max-height:100%}.call-to-action-animation .first-img,.call-to-action-animation .second-img{max-width:50%;max-height:100%}}@media (max-width:460px){.block-action{padding:60px 50px 10px}.subscribe-animation .plane{max-width:100px}}.stunning-header{padding-bottom:120px;position:relative;color:#fff}.stunning-header .stunning-header-title{color:inherit;font-size:40px}.stunning-header+*{margin-top:40px}.stunning-header .content-bg-wrap{z-index:-1}.stunning-header-content{z-index:5;text-align:center;position:relative;padding:0 10px}.bg-primary-opacity{background-color:rgba(255,94,58,.95)}.bg-purple-dark-opacity{background-color:rgba(98,54,178,.95)}.has-error .form-control-danger,.has-success .form-control-success,input,select{background-image:none}.breadcrumbs-item{display:inline-block;margin-bottom:0}.breadcrumbs-item a{margin-right:6px;color:inherit;opacity:.7}.breadcrumbs-item a:hover{color:#fff;opacity:1}.breadcrumbs-item.active span{font-weight:700}.breadcrumbs-item .icon{margin-right:6px}.breadcrumbs-item:last-child .icon{display:none}@media (max-width:768px){.stunning-header{padding-bottom:60px}.stunning-header .stunning-header-title{font-size:24px}.mobile-app .header{min-width:300px}}.mobile-app .chat-settings{padding:15px 40px}.mobile-app .chat-settings a{color:#888da8;padding:7px 0;display:block}.mobile-app .chat-settings a:hover,.mobile-app .left-menu a{color:#515365}.mobile-app .chat-settings .icon-status{margin-right:20px;position:relative;border:none}.mobile-app .olympus-chat{position:relative;display:block}.mobile-app .sidebar--large .olympus-chat{padding:25px 15px 25px 50px}.mobile-app .search-friend{position:relative;bottom:auto;box-shadow:none}.mobile-app .fixed-sidebar{position:fixed;float:none;min-height:70px;transition:all .3s ease}.mobile-app .fixed-sidebar.open{min-height:1000vh}.mobile-app .fixed-sidebar-right.sidebar--large{width:260px;position:absolute}.mobile-app .fixed-sidebar .search-friend svg{width:16px;height:16px}.mobile-app .fixed-sidebar-right{padding-bottom:0;border-left:none;bottom:auto}.mobile-app .header{padding-left:70px}.mobile-app .fixed-sidebar.right{top:0;z-index:30;min-height:70px}.mobile-app .fixed-sidebar.right.open{min-height:1000vh}@media (max-width:768px){.mobile-app .fixed-sidebar.right{display:block}}.mobile-app .fixed-sidebar.right .mCustomScrollbar{max-height:calc(100vh - 140px)}.mobile-app .fixed-sidebar .mCustomScrollbar{max-height:calc(100vh - 70px)}.mobile-app .fixed-sidebar .ui-block-title:first-child{border-top:1px solid #e6ecf5}.mobile-app .fixed-sidebar-left .ui-block-title:first-child{border-top:none}.mobile-app .fixed-sidebar-left.sidebar--small{height:auto;position:absolute}.mobile-app .left-menu{padding:0}.mobile-app .left-menu a:hover{color:#ff5e3a}.mobile-app .fixed-sidebar-left.sidebar--large{width:260px;position:absolute}.mobile-app .fixed-sidebar-right.sidebar--small{position:absolute}.mobile-app .search-bar.w-search{width:100%;max-width:100%}.mobile-app .top-header-author{position:relative;bottom:auto;margin-top:-20px;color:#888da8}.mobile-app .top-header-author .author-name,.mobile-app .ui-block-title a{color:#515365}.mobile-app .comment-form .form-group{width:80%}.mobile-app .ui-block{margin-bottom:40px}.mobile-app .profile-section .control-block-button{right:auto;top:auto;left:50%;transform:translate(-50%);bottom:-22px;width:100%;text-align:center;z-index:5}.mobile-app .post-control-button .btn-control{display:inline-block}.mobile-app .post .control-block-button{right:20px;top:-13px}.mobile-app .post-additional-info .comments-shared{margin-top:0}.mobile-app .post__author .more{margin-right:0}.mobile-app .post-video .video-content{padding:4px 12px}.mobile-app .view-all{position:relative;bottom:auto}.mobile-app .ui-block-title .items-round-little{color:#fff}.mobile-app .notification-list .notification-event{padding-left:10px}.mobile-app .friend-requests .chat-message-item{font-size:10px}.mobile-app .notification-list .notification-friend{font-size:13px}.mobile-app .notification-list.chat-message .notification-event{width:auto}.mobile-app .icon-close{right:50%;margin-right:-9px}.mobile-app .main-header{max-width:100%;padding:40px 15px 90px}.mobile-app .img-bottom{max-height:80px}.mobile-app .choose-photo-item{padding:0 5px 5px 0}.mobile-app .choose-from-my-photo .btn+.btn{margin-left:5px}.about-olympus{padding:0 25px;margin-bottom:15px}.about-olympus a{padding:7px 0;font-size:12px;color:#515365;display:block;font-weight:700}.about-olympus a:hover{color:#ff5e3a}.mobile-app-tabs{background-color:#3f4257;border-bottom-color:transparent;justify-content:space-around;align-items:center;margin-bottom:7px;height:70px;padding:0 13px;position:relative;width:100%}.mobile-app-tabs .nav-link{height:100%;border-color:transparent;padding:0 20px;display:flex;flex-direction:column;justify-content:center;border-bottom:3px solid transparent}.mobile-app-tabs .nav-link:focus,.mobile-app-tabs .nav-link:hover{border-color:transparent}.mobile-app-tabs .olymp-close-icon{display:none}.mobile-app-tabs .olymp-magnifying-glass-icon{width:18px}.mobile-app-tabs .nav-link.active{background-color:transparent;border-color:transparent transparent #ff5e3a}.mobile-app-tabs .nav-link.active svg{fill:#fff}.mobile-app-tabs .nav-link.active .olymp-close-icon{display:block;width:18px;height:18px}.mobile-app-tabs .nav-link.active .olymp-magnifying-glass-icon{display:none;width:18px}.mobile-app-tabs .nav-item{margin-bottom:0;height:70px}.mobile-app-tabs svg{fill:#9a9fbf;height:20px;width:24px}.mobile-app-tabs .control-icon{position:relative;margin-right:0;display:flex}.nav-tabs .app-tabs-close{position:absolute;bottom:-55px;left:50%;margin-left:-33px;z-index:20}.nav-tabs .app-tabs-close:hover svg{fill:#ff5e3a}@media (max-width:768px){.mobile-app .container,body.mobile-app{min-width:300px}body.mobile-app{overflow-x:hidden}.mobile-app .notification-list.friend-requests .selectize-dropdown .notification-icon{float:right}.mobile-app-tabs .nav-item{width:auto}.mobile-app-tabs .nav-link{padding:0 5px}}@media (max-width:480px){.mobile-app .page-link,.mobile-app .upload-photo-item{padding:10px}.mobile-app .choose-photo-item{width:50%}.mobile-app .choose-from-my-photo .btn{width:100%}.mobile-app .upload-photo-item svg{margin-bottom:10px}.mobile-app .remember a{float:none;display:block}.mobile-app .notification-list.friend-requests .notification-icon{float:none;display:block;margin-top:10px}}@media (max-width:460px){.mobile-app .notification-list .notification-event{width:50%}}.shoping-cart a{position:relative;padding:10px 0}.shoping-cart svg{height:22px;width:22px}.shoping-cart .count-product{position:absolute;color:#fff;font-size:10px;top:0;right:-5px}.rait-stars{transition:all .3s ease}.rait-stars .star-icon{font-size:9px}.rait-stars li{display:inline-block;color:#d1d8de}.product-content .counter,.rait-stars li.numerical-rating{color:#515365;font-size:12px;font-weight:700}.rait-stars li+li{margin-left:2px}.rait-stars li.numerical-rating{margin-left:10px}.shop-popup-cart.more-dropdown{width:340px;right:-70px;padding:0}.shop-popup-cart.more-dropdown>ul{padding:0;display:block}.shop-popup-cart.more-dropdown .rait-stars{padding:0;display:block;height:auto;margin-bottom:5px;line-height:1}.shop-popup-cart.more-dropdown a.btn{display:inline-block}.cart-product-item{display:flex;align-content:center;border-bottom:1px solid #e6ecf5;padding:25px;position:relative}.cart-product-item .more{position:absolute;top:10px;right:10px}.form-group,.nav-tabs .nav-item{position:relative}.cart-product-item .more svg{height:8px;width:8px}.product-thumb{width:60px;height:60px;background-color:#f2f4f8;margin-right:15px;display:flex}.form-control,input,select{background-color:transparent}.product-thumb img{margin:auto;max-height:100%}.cart-main .form-inline .form-group,.cart-main td>*,.cart-product__item .rait-stars{margin-bottom:0}.product-content .title{font-size:12px}.product-price{margin-left:auto;color:#888da8;margin-right:20px}.cart-subtotal,.product-price{font-size:12px;font-weight:700}.cart-subtotal{color:#515365;padding:25px 45px 25px 25px;border-bottom:1px solid #e6ecf5;text-align:right}.cart-subtotal>span{margin-left:25px;color:#888da8}.cart-btn-wrap{padding:25px;text-align:center}.cart-btn-wrap .btn+.btn{margin-left:12px}.cart-main table{width:100%}.cart-main th>*,.cart-main tr>*{padding:25px 35px;text-align:center;border-bottom:1px solid #e6ecf5}.cart-main th>:first-child,.cart-main tr>:first-child{padding-left:0;text-align:left}.cart-main th>:last-child,.cart-main tr>:last-child{padding-right:50px}.cart-main th{font-size:10px;text-transform:uppercase;font-weight:700}.cart-main .product-price .price{color:#888da8}.cart-main .product-quantity .form-control{width:auto;max-width:110px}.cart-main .product-quantity .form-group{display:inline-block}.cart-main .product-del svg{width:18px;height:18px;fill:#9a9fbf}.cart-main .product-del svg:hover{fill:#ff5e3a}.cart-main .form-inline>*+*{margin-left:-5px}.cart-main .form-inline{display:inline-flex}.cart-main .form-inline .btn{border-radius:0 5px 5px 0}.cart-main .cart-subtotal{padding:18px 0 18px 25px;border-bottom:none;float:right}.cart-product__item{display:flex;align-items:center}.cart-product__item .product-thumb{width:80px;height:80px}.cart-product__item .cart-product-title{display:block}.cart-product__item .product-category{font-size:9px}.order-totals-list li{display:flex;align-items:center;justify-content:space-between;padding-bottom:25px;margin-bottom:25px;border-bottom:1px solid #e6ecf5}.order-totals-list li.total,.order-totals-list li span{font-weight:700;color:#515365}.payment-methods-list{border-bottom:1px solid #e6ecf5;margin-bottom:30px}.payment-methods-list li{padding-bottom:10px}.payment-methods-list li p{font-size:13px}input,p,select{font-size:.875rem}.payment-methods-list .radio label span{left:0}.payment-methods-list .radio label{padding-left:25px}@media (max-width:768px){.shop-popup-cart.more-dropdown{display:none}.cart-main th>*,.cart-main tr>*{padding:20px 10px}.cart-main th>:last-child,.cart-main tr>:last-child{padding-right:10px}}@media (max-width:540px){.cart-main .cart-subtotal{float:none;text-align:left;padding-left:0}}@media (max-width:420px){.cart-main .form-inline,.cart-product__item{-webkit-box-orient:vertical}.cart-main th>*,.cart-main tr>*{padding:20px 5px}.cart-product__item{display:flex;flex-direction:column;align-items:flex-start}.cart-product__item .product-thumb{width:40px;height:40px;margin-right:0;margin-bottom:10px}.cart-main .form-inline{flex-direction:column;align-items:flex-start}.cart-main .form-inline .btn{margin-left:0;margin-top:10px;border-radius:5px}}ul{padding:5px;list-style-type:disc;margin-left:5px}a{transition:all .15s ease}a:hover{color:#ff5e3a}input,select{display:block;width:100%;padding:1.1rem;line-height:1.25;color:#464a4c;background-clip:padding-box;border:1px solid #e6ecf5;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.h1,.h2,.h3,.h4,.h5,.h6{color:#515365}.form-group{margin-bottom:1.4rem}.form-group textarea{resize:none}.form-group.label-floating label.control-label,.form-group.label-placeholder label.control-label{top:18px;font-size:14px;line-height:1.42857;left:20px}.form-group.has-bootstrap-select label.control-label,.form-group.label-floating.is-focused label.control-label,.form-group.label-floating:not(.is-empty) label.control-label,.form-group.label-static label.control-label{top:10px;font-size:11px;line-height:1.07143}.form-group.label-floating label.control-label,.form-group.label-placeholder label.control-label,.form-group.label-static label.control-label{position:absolute;pointer-events:none;transition:all .3s ease}.card{border:none}.card-header a{color:#515365;display:block}.card-header a:focus,.card-header a:hover{color:#515365}.card-header i,.card-header svg{float:right;transition:all .3s ease;margin-top:4px}.card-header .collapsed i,.card-header .collapsed svg{transform:rotate(-90deg)}.card-header .collapsed .event-status-icon i,.card-header .collapsed .event-status-icon svg{transform:rotate(0)}blockquote{margin:3em 0;padding:15px 80px;position:relative}blockquote h6{font-size:11px;font-weight:400;color:#888da8}blockquote h6 span{font-weight:700;display:block;color:#515365}.h1,.h2,.h3,.h4,blockquote p,h1,h2,h3,h4{font-weight:300}blockquote p{margin:0 0 15px!important;font-size:22px;line-height:1.3em;position:relative;color:#515365}.form-inline .btn,.modal-header>*,.number-spinner.input-group .form-group{margin-bottom:0}blockquote p:before{width:4px;height:100%;position:absolute;top:0;left:-80px;display:block;background-color:#ff5e3a}@media (max-width:640px){blockquote p{font-size:16px}}a>svg{transition:all .15s ease}.btn-more,svg{transition:all .3s ease}button.btn{padding:.5rem 1rem}button.btn-md{padding:1rem 3.5rem;font-size:.75rem;border-radius:.3rem}button.btn-md-2{padding:.8rem 2.1rem;font-size:.688rem;border-radius:.3rem}button.btn-lg{padding:1rem 3rem}.form-inline>*+*{margin-left:16px}img{max-width:100%;height:auto;display:inline-block}.modal-dialog{pointer-events:auto}.was-validated .form-control:valid~.invalid-feedback,.was-validated .form-control:valid~.invalid-tooltip{display:none}.was-validated .form-control:valid~.material-input:after{content:"\\f00c";font-family:"Font Awesome 5 Free";font-weight:900;position:absolute;display:block;width:20px;height:20px;line-height:20px;border-radius:100%;font-size:9px;background-color:#08ddc1;color:#fff;text-align:center;right:20px;top:50%;margin-top:-10px}.number-spinner.input-group .form-control{width:100%;padding:.5rem 1.1rem;max-width:80px}.number-spinner.input-group .input-group-btn>.btn{margin-bottom:0;height:100%;background-color:#ff5e3a;z-index:5}.number-spinner.input-group .glyphicon{position:relative;top:1px;display:inline-block;font-style:normal;font-weight:700;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff}.number-spinner.input-group .glyphicon:before{content:"\\2212"}.number-spinner.input-group .glyphicon-plus:before{content:"\\2b"}.number-spinner.input-group.number-spinner--secondary .input-group-btn>.btn{background-color:#3f4257}.number-spinner.input-group.number-spinner--breez .input-group-btn>.btn{background-color:#08ddc1}.number-spinner.input-group.number-spinner--green .input-group-btn>.btn{background-color:#1ed760}.btn-secondary:not([disabled]):not(.disabled):active{background-color:#fff;border-color:#e6ecf5;color:#515365;box-shadow:none}.modal-content{display:flex!important}.modal-header{line-height:1}@media (max-width:1024px){.form-group.label-floating label.control-label,.form-group.label-placeholder label.control-label{left:15px}}@media (max-width:600px){.card-header a{font-size:18px}.modal-dialog{margin:30px auto}}@media (max-width:360px){.card-header a{font-size:14px}.form-group.label-floating label.control-label,.form-group.label-placeholder label.control-label{font-size:12px}}.ui-block{background-color:#fff;border-radius:5px;border:1px solid #e6ecf5;margin-bottom:15px}.ui-block .ui-block-title:last-child{border-bottom:0}.ui-block-title{padding:23px 25px 18px;line-height:1;border-bottom:1px solid #e6ecf5;border-top:1px solid #e6ecf5;display:table;width:100%;position:relative;border-radius:5px 5px 0 0}.btn-md,.btn-md-2{border-radius:.3rem}.ui-block-title .more{width:16px}.ui-block-title .more,.ui-block-title .more-links{padding-left:25px;text-align:right}.ui-block-title>*{margin-bottom:0;display:table-cell;vertical-align:middle}.ui-block-title.ui-block-title-small{padding:10px 25px}.ui-block-title.ui-block-title-small .title{font-size:12px;text-transform:uppercase;color:#9a9fbf}.ui-block-title:first-child{border-top:none}.ui-block-title .btn{display:inline-block;margin-bottom:0}.ui-block-title .btn+*{margin-left:20px}.ui-block-title.inline-items .more{float:right;margin-top:6px;padding-left:0}.ui-block-title+.ui-block-title{border-bottom:none}.ui-block-title .icon-add{margin-right:0}#accordion+.ui-block-title{border-top:none;border-bottom:none}.ui-block-content{padding:24px 23px 23px}@media (max-width:1200px){.responsive-flex1200 .ui-block-title{display:flex;flex-direction:column}.responsive-flex1200 .ui-block-title>*{margin-bottom:10px}.responsive-flex1200 .ui-block-title .points{text-align:left}.responsive-flex1200 .btn+*{margin-left:0}.responsive-flex1200 .w-search{width:auto}.responsive-flex1200 .w-select{padding:0}}@media (max-width:860px){.responsive-flex .w-search{width:auto}}@media (max-width:768px){.responsive-flex .ui-block-title{display:flex;flex-direction:column}.responsive-flex .ui-block-title>*{margin-bottom:10px}.responsive-flex .ui-block-title .points{text-align:left}.responsive-flex .block-btn{text-align:left;padding-right:0}.responsive-flex .more{padding-left:0}.responsive-flex .photo-gallery{position:relative;right:auto;order:5;left:-26px;bottom:-29px;top:auto}.responsive-flex .photo-gallery.nav-tabs .nav-item{border-top:1px solid #e6ecf5;text-align:center}.responsive-flex .w-search{width:auto}.responsive-flex .align-right,.responsive-flex .bootstrap-select.without-border.btn-group .dropdown-toggle .filter-option{text-align:left}.responsive-flex .align-right *{display:block}.responsive-flex .align-right>*+*{margin-top:15px}.responsive-flex .align-right .btn,.responsive-flex .ui-block-title .btn+*{margin-left:0}}@media (max-width:480px){.ui-block-content.display-flex.content-around{flex-direction:column}.ui-block-content.display-flex.content-around>*{margin-bottom:15px}}@media (max-width:320px){.ui-block-title .btn+.btn{margin-left:0;margin-top:15px}}.btn{color:#fff;margin-bottom:15px;position:relative}.btn:hover{opacity:.8;color:#fff}.btn:focus{box-shadow:none}.btn-market:after,.with--icon:after{box-shadow:10px 0 15px 0 rgba(18,25,33,.3)}.btn.c-grey{border-color:#d8dbe6}.btn.c-grey:hover{color:inherit}.btn.disabled,.btn:disabled{background-color:#9a9fbf;border-color:#9a9fbf}.btn-transparent{background-color:transparent}button:hover{cursor:pointer}.btn-icon-left i,.btn-icon-left svg{font-size:12px;margin-right:10px}.btn-lg i,.btn-lg svg{font-size:16px}@media (max-width:1080px){.btn-lg{padding:1rem}}.btn-md{padding:1rem 3.5rem;font-size:.75rem}@media (max-width:1080px){.btn-md{padding:.6rem .5rem}}.btn-md-2{padding:.8rem 2.1rem;font-size:.688rem}@media (max-width:1080px){.btn-md-2{padding:.6rem .5rem}}.btn-control{border-radius:100%;width:50px;height:50px;line-height:54px;padding:0;fill:#fff;font-size:20px}.btn-control:hover{opacity:1}.btn-control .more-dropdown{top:auto;bottom:100%}.btn-control .more-dropdown li{line-height:1.3;font-size:12px}.btn-control>i,.btn-control svg{font-size:20px;width:20px;height:20px}.btn-control.has-i{font-size:unset}.btn-control.has-i>i,.btn-control.has-i svg{font-size:15px;width:15px;height:15px}.btn-control.btn-more{line-height:54px}.btn-control-small{width:34px;height:34px;line-height:34px}.btn-control-small>i,.btn-control-small svg{font-size:16px;width:16px;height:16px}.btn-more{background-color:#ccd1e0;margin:40px auto;text-align:center;display:block;line-height:40px}.btn-market,.with--icon{text-align:left}.btn-more:hover{fill:#ff5e3a}.btn-border{border:2px solid}.btn-border-think{border:1px solid}.control-block-button{position:absolute}.control-block-button .btn-control{margin-right:20px;margin-bottom:0;fill:#fff}.control-block-button .btn-control:last-child{margin-right:0}.control-block-button .btn-control .olymp-settings-icon{width:17px;height:21px}.control-block-button .btn-control .olymp-happy-face-icon{width:21px;height:21px}.control-block-button .btn-control .olymp-chat---messages-icon{width:23px;height:20px}.control-block-button .btn-control .olymp-star-icon{height:20px;width:20px}.control-block-button .btn-control .olymp-happy-faces-icon{height:22px;width:22px}.btn-primary:hover{background-color:#ff763a;border-color:#ff763a;opacity:1}.btn-secondary:hover{background-color:#ff5e3a;border-color:#ff5e3a;opacity:1}.btn-purple{background-color:#7c5ac2}.btn-blue{background-color:#38a9ff}.btn-breez{background-color:#08ddc1}.btn-green{background-color:#1ed760}.btn-grey{background-color:#515365}.btn-grey-light{background-color:#888da8}.btn-grey-lighter{background-color:#9a9fbf}.btn-breez-light{background-color:#2aebcb}.btn-yellow{background-color:#ffdc1b}.btn-smoke{background-color:#e6ecf5}.btn-bg-secondary{background-color:#3f4257}.btn-light-bg,.btn-light-bg:focus,.btn-light-bg:hover{color:#515365}.btn-market{text-transform:none;padding:13px 23px;background-color:#000}.btn-market .icon{margin-right:5px;height:35px;width:35px}.btn-market>*{display:inline-block;vertical-align:middle}.btn-market .text{overflow:hidden}.btn-market span{display:block}.btn-market .sup-title{font-size:9px;font-weight:700}.btn-market .title{font-size:18px;font-weight:500}.btn-market+.btn-market{margin-left:20px}.with--icon .icon{margin-right:12px;height:35px;width:35px;fill:#fff}.with--icon>*{display:inline-block;vertical-align:middle}.with--icon .text{overflow:hidden}.with--icon span{display:block}.with--icon .sup-title{font-size:8px;font-weight:700}.with--icon .title{font-size:14px;font-weight:700}.icon-add:after,.icon-minus:after{right:-4px;top:-4px;color:inherit;font-size:7px;font-family:"Font Awesome 5 Free"}.with--icon.btn-md .icon{margin-right:15px;height:22px;width:22px}.icon-add{position:relative;display:inline-block;margin-right:12px;vertical-align:middle}.icon-add:after{content:"\\f067";display:block;position:absolute}.icon-add.without-text{margin-right:0}.icon-minus{position:relative;display:inline-block;vertical-align:middle}.icon-minus:after{content:"\\f068";display:block;position:absolute}.accept-request{display:inline-block;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;padding:.5rem;font-size:.688rem;border-radius:.25rem;transition:all .2s ease-in-out;background-color:#38a9ff;color:#fff;fill:#fff}.accept-request,.bootstrap-select.btn-group .dropdown-menu li a,.fc-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.accept-request:focus,.accept-request:hover{color:#fff;fill:#fff;opacity:.9}.accept-request+.accept-request{margin-left:8px}.accept-request svg{width:20px;height:20px}.request-del{background-color:#9a9fbf}.fav-pages{background-color:#ff5e3a}.chat-message{background-color:#7c5ac2}.btn--half-width{width:48%}.back-to-top{position:fixed;z-index:19;width:50px;height:50px;line-height:50px;display:block;fill:#fff;stroke:inherit;transition:all .3s ease;bottom:10px;right:85px;cursor:pointer;box-shadow:0 0 10px 0 rgba(63,66,87,.4);border-radius:100%;background-color:#ff5e3a;text-align:center}.back-to-top.hidden{opacity:0}.back-to-top .back-icon{height:20px;width:20px}@media (max-width:768px){.back-to-top{width:40px;height:40px;line-height:40px;right:10px}.back-to-top .back-icon{height:15px;width:15px}}@media (max-width:410px){.btn-market+.btn-market{margin-left:0}}@media (max-width:360px){.btn-control .more-dropdown{top:100%;bottom:auto}}label.control-label{color:#888da8}textarea{min-height:132px}.form-group.label-floating textarea{padding:1.3rem 1.1rem .2rem}.form-control,input{color:#515365;line-height:inherit;font-size:.875rem}.form-group.has-error:after,.label-floating.has-success:after{font-weight:900;width:20px;height:20px;border-radius:100%;font-size:9px;right:20px;top:50%;margin-top:-10px;display:block;position:absolute;text-align:center;color:#fff;font-family:"Font Awesome 5 Free"}.label-floating.has-success:after{content:"\\f00c";line-height:20px;background-color:#08ddc1}.form-group.with-icon-right .form-control,.form-group.with-icon-right input,.form-group.with-icon-right textarea{padding-right:60px}.label-floating .form-control,.label-floating input,.label-floating select{padding:1.5rem 1.1rem .5rem;line-height:1.75}.label-floating textarea.form-control{padding:1.5rem 1.1rem .2rem}.label-floating.with-icon .form-control,.label-floating.with-icon input,.label-floating.with-icon textarea{padding-left:70px}.form-group.has-error:after{content:"\\f00d";line-height:20px;background-color:#f92552}select.form-control{padding-left:.875rem}.form-group.with-icon:after{content:"";position:absolute;display:block;height:100%;width:1px;background-color:#e6ecf5;top:0;left:50px}.form-group.with-icon i,.form-group.with-icon svg{display:block;position:absolute;left:0;top:50%;margin-top:-10px;width:50px;text-align:center;line-height:3.5rem;font-size:20px}.form-group.with-icon input{padding-left:70px}.form-group.with-button button{display:block;position:absolute;right:0;top:0;height:100%;width:35px;text-align:center;line-height:100%;color:#fff;fill:#fff;background-color:#d7d9e5;border:none}.form-group.with-button input{padding-right:50px;padding-left:15px}.label-floating.with-icon label.control-label,.label-placeholder.with-icon label.control-label{left:70px}.date-time-picker input{position:relative;z-index:5}.input-group-addon{position:absolute;right:0;top:0;background-color:transparent;border:none;height:100%;padding:1.1rem;display:flex;align-items:center}.input-group-addon svg{fill:#9a9fbf;width:22px}.custom-control-description{padding-left:7px;color:#888da8;line-height:2}.form-group.has-bootstrap-select .togglebutton label,.form-group.is-focused .togglebutton label,.togglebutton label{color:rgba(0,0,0,.26)}.tooltip-inner{font-size:9px;text-transform:uppercase;font-weight:500}.tooltip-secondary .tooltip-inner{background-color:#3f4257}.tooltip-primary .tooltip-inner{background-color:#ff5e3a}.tooltip-completed .tooltip-inner{background-color:#08ddc1}.togglebutton{vertical-align:middle;margin-bottom:20px}.togglebutton,.togglebutton .toggle,.togglebutton input,.togglebutton label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.togglebutton label{cursor:pointer}.form-group.is-focused .togglebutton label:focus,.form-group.is-focused .togglebutton label:hover{color:rgba(0,0,0,.54)}fieldset[disabled] .form-group.is-focused .togglebutton label{color:rgba(0,0,0,.26)}.togglebutton label input[type=checkbox]{opacity:0;width:0;height:0}.togglebutton label .toggle{text-align:left;margin-left:5px}.togglebutton label .toggle,.togglebutton label input[type=checkbox][disabled]+.toggle{content:"";display:inline-block;width:66px;height:30px;background-color:rgba(80,80,80,.7);border-radius:15px;margin-right:0;transition:background .3s ease;vertical-align:middle}.togglebutton label .toggle:after{content:"";display:inline-block;width:24px;height:24px;line-height:26px;background-color:#fff;border-radius:20px;position:relative;left:3px;top:3px;transition:left .3s ease,background .3s ease,box-shadow .1s ease;text-align:center}.description-toggle .togglebutton,.switcher-block>:last-child{text-align:right}.togglebutton label input[type=checkbox][disabled]+.toggle:after,.togglebutton label input[type=checkbox][disabled]:checked+.toggle:after{background-color:#bdbdbd}.togglebutton label input[type=checkbox]+.toggle:active:after,.togglebutton label input[type=checkbox][disabled]+.toggle:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,.4),0 0 0 15px rgba(0,0,0,.1)}.togglebutton label input[type=checkbox]:checked+.toggle:after{left:39px}.togglebutton label input[type=checkbox]:checked+.toggle{background-color:#ff5e3a}.togglebutton.blue label input[type=checkbox]:checked+.toggle{background-color:#38a9ff}.togglebutton label input[type=checkbox]:checked+.toggle:active:after{box-shadow:0 1px 3px 1px rgba(0,0,0,.4),0 0 0 15px rgba(156,39,176,.1)}.description-toggle{display:table;width:100%;margin-bottom:30px}.description-toggle>*{display:table-cell;vertical-align:middle}.description-toggle p{margin-bottom:0}.add-field{display:table;color:#888da8;fill:#888da8;margin-bottom:1rem;line-height:100%}.add-field svg{margin-right:10px;width:12px;height:12px}.add-field>*{display:table-cell;vertical-align:middle}.switcher-block{margin:19px 0;display:table;width:100%}.switcher-block .title{font-size:13px}.switcher-block>*{margin-bottom:0;display:table-cell;vertical-align:middle}.error-box,.error-box .danger,.file-upload__label,.friend-item.fav-page .friend-about{text-align:center}.file-upload{position:relative;display:inline-block}.file-upload:hover{cursor:pointer}.file-upload__label{background-color:#3f4257;display:block;color:#fff;font-weight:700;line-height:1.25;padding:.5rem 1rem;font-size:.812rem;border-radius:.25rem;transition:all .2s ease-in-out}.file-upload__label:hover{cursor:pointer;background-color:#ff5e3a}.file-upload__label.bg-blue:hover,.file-upload__label.bg-breez:hover,.file-upload__label.bg-green:hover{background-color:#ff5e3a}.file-upload__input{position:absolute;left:0;top:0;right:0;bottom:0;font-size:0;width:0;height:100%;opacity:0;padding:0}.search-form .form-control,.subscribe-form .form-control{width:100%}.file-upload__input:hover{cursor:pointer}.subscribe-form{margin:40px 0 20px}.subscribe-form .form-group{flex:1 0 auto;margin-bottom:0}.list--styled li,.logo{display:-ms-flexbox;-webkit-box-align:center}.list--styled{margin:35px 0}.list--styled li{color:#515365;display:flex;align-items:center}.list--styled li+li{margin-top:30px}.list--styled i,.list--styled svg{color:#ff5e3a;font-size:20px;margin-right:17px}.list--styled.small-icon i,.list--styled.small-icon svg{font-size:8px}.list--styled.smallest-icon i,.list--styled.smallest-icon svg{font-size:6px}.list--styled.icon-blue i,.list--styled.icon-blue svg{color:#38a9ff}.search-form{padding:50px 40px;background-color:#fff;border-radius:5px;box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.search-form .form-group{flex:1 0 auto;margin-bottom:0}.search-form>*+*{margin-left:-5px}.search-form .btn{border-radius:0 5px 5px 0}.radio{margin-bottom:1rem}.radio label{cursor:pointer;padding-left:35px;position:relative}.radio label span{display:block;position:absolute;left:10px;top:0;transition-duration:.2s}.radio label .circle{border:1px solid #dde0e9;height:18px;width:18px;border-radius:100%}.radio label .check{height:18px;width:18px;border-radius:100%;background-color:#ff5e3a;transform:scale3d(0,0,0)}.radio label .check:after{display:block;position:absolute;content:"";background-color:rgba(0,0,0,.87);left:-18px;top:-18px;height:50px;width:50px;border-radius:100%;z-index:1;opacity:0;margin:0;transform:scale3d(1.5,1.5,1)}.radio input[type=radio]{opacity:0;height:0;width:0;overflow:hidden;display:none}.radio input[type=radio]:checked~.check,.radio input[type=radio]:checked~.circle{opacity:1}.radio input[type=radio]:checked~.check{background-color:#ff5e3a;transform:scale3d(.45,.45,1)}.radio input[type=radio]:checked~.circle{border-color:#ff5e3a}.radio input[type=radio][disabled]~.check,.radio input[type=radio][disabled]~.circle{opacity:.26}.radio input[type=radio][disabled]~.check{background-color:#000}.radio input[type=radio][disabled]~.circle{border-color:#000}@-webkit-keyframes rippleOn{0%,to{opacity:0}50%{opacity:.2}}@-webkit-keyframes rippleOff{0%,to{opacity:0}50%{opacity:.2}}.checkbox{margin-bottom:1rem}.checkbox label{cursor:pointer;padding-left:0;margin-bottom:0}.form-group.is-focused .checkbox label{color:rgba(0,0,0,.26)}.form-group.is-focused .checkbox label:focus,.form-group.is-focused .checkbox label:hover{color:rgba(0,0,0,.54)}fieldset[disabled] .form-group.is-focused .checkbox label{color:rgba(0,0,0,.26)}.checkbox input[type=checkbox]{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none}.checkbox .checkbox-material{vertical-align:middle;position:relative;top:1px;padding-right:5px;display:inline-block}.checkbox .checkbox-material:before{display:block;position:absolute;left:0;content:"";background-color:rgba(0,0,0,.84);height:20px;width:20px;border-radius:100%;z-index:1;opacity:0;margin:0;top:0;transform:scale3d(2.3,2.3,1)}.checkbox .checkbox-material .check{position:relative;display:inline-block;width:20px;height:20px;border:1px solid #e6ecf5;overflow:hidden;z-index:1}.checkbox .checkbox-material .check:before{position:absolute;content:"";transform:rotate(45deg);display:block;margin-top:-3px;margin-left:7px;width:0;height:0;background:red;box-shadow:inset 0 0 0 0;-webkit-animation:checkbox-off .3s forwards;animation:checkbox-off .3s forwards}.checkbox input[type=checkbox]:focus+.checkbox-material .check:after{opacity:.2}.checkbox input[type=checkbox]:checked+.checkbox-material .check{background:#ff5e3a}.checkbox input[type=checkbox]:checked+.checkbox-material .check:before{color:#fff;box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;-webkit-animation:checkbox-on .3s forwards;animation:checkbox-on .3s forwards}.checkbox.clicked input[type=checkbox]:checked+.checkbox-material:before{-webkit-animation:rippleOn .5s;animation:rippleOn .5s}.checkbox.clicked input[type=checkbox]:checked+.checkbox-material .check:after{-webkit-animation:rippleOn .5s forwards;animation:rippleOn .5s forwards}.checkbox.clicked input[type=checkbox]:not(:checked)+.checkbox-material .check:after,.checkbox.clicked input[type=checkbox]:not(:checked)+.checkbox-material:before{-webkit-animation:rippleOff .5s;animation:rippleOff .5s}.checkbox input[type=checkbox][disabled]+.circle,.checkbox input[type=checkbox][disabled]~.checkbox-material .check,fieldset[disabled] .checkbox,fieldset[disabled] .checkbox input[type=checkbox]{opacity:.5}.checkbox input[type=checkbox][disabled]~.checkbox-material .check{border-color:#000;opacity:.26}.checkbox input[type=checkbox][disabled]+.checkbox-material .check:after{background-color:rgba(0,0,0,.87);transform:rotate(-45deg)}@-webkit-keyframes checkbox-on{0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px}50%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px}to{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px}}@keyframes checkbox-on{0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px}50%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px}to{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px}}@keyframes rippleOn{0%,to{opacity:0}50%{opacity:.2}}@keyframes rippleOff{0%,to{opacity:0}50%{opacity:.2}}.error-box{border-radius:5px;background-color:#fff;border:1px solid #e6ecf5;padding:30px;position:absolute;right:-135px;bottom:70%;width:270px;z-index:999}.error-box .danger{margin:0 auto 20px;display:block;width:34px;height:34px;line-height:37px;border-radius:100%;background-color:#f92552}.error-box .danger svg{fill:#fff;width:12px;height:12px}.error-box .title{margin-bottom:13px}.error-box p{font-size:13px;color:#888da8}@media (max-width:860px){.search-form{padding:25px}}@media (max-width:360px){.subscribe-form .btn{margin-left:-5px;border-radius:0 5px 5px 0}.search-form{padding:0}}.fixed-sidebar{position:fixed;z-index:22;width:70px;min-height:1000vh}.fixed-sidebar-left,.fixed-sidebar-right{position:absolute;box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.fixed-sidebar .logo{height:70px;background-color:#ff5e3a;padding:15px}.fixed-sidebar .ui-block-title{margin:15px 0}.fixed-sidebar .ui-block-title:first-child{margin-top:0}.fixed-sidebar .search-friend svg{height:20px;width:20px}.fixed-sidebar .search-friend svg:hover{fill:#ff5e3a}.fixed-sidebar .ui-block-title a{margin-left:20px;text-transform:uppercase;font-size:9px;padding:0}.fixed-sidebar .ui-block-title a+a{float:right;color:#515365}.fixed-sidebar .mCustomScrollbar{max-height:calc(100vh - 70px);overflow:hidden}.fixed-sidebar .ps:hover>.ps__scrollbar-y-rail,.fixed-sidebar .ps>.ps__scrollbar-y-rail{opacity:0;z-index:-1;visibility:hidden}.fixed-sidebar.open .fixed-sidebar-left{transition:transform .5s cubic-bezier(.55,0,.1,1)}.fixed-sidebar.open .fixed-sidebar-left.sidebar--small{transform:translateX(-100%)}.fixed-sidebar.open .fixed-sidebar-left.sidebar--large{transform:translateX(0);transition-delay:.3s}.fixed-sidebar.open .fixed-sidebar-right{transition:transform .5s cubic-bezier(.55,0,.1,1)}.fixed-sidebar.open .fixed-sidebar-right.sidebar--small{transform:translateX(100%)}.fixed-sidebar.open .fixed-sidebar-right.sidebar--large{transform:translateX(0);transition-delay:.3s}.fixed-sidebar.right{top:70px;z-index:20;right:0;min-height:100%}.fixed-sidebar.right .mCustomScrollbar{max-height:calc(100vh - 210px)}.fixed-sidebar-left{height:100%;background-color:#fff;transition:transform .5s cubic-bezier(.55,0,.1,1)}.fixed-sidebar-left.sidebar--small{width:70px;transition-delay:.3s}.fixed-sidebar-left.sidebar--small .left-menu a{padding:14px 0 14px 25px;display:block}.fixed-sidebar-left.sidebar--large{width:270px;transform:translateX(-100%)}.sidebar--large .logo .img-wrap{margin-right:20px}.sidebar--large .search-friend{padding:0;border-top:1px solid #e6ecf5}.sidebar--large .olympus-chat{padding:30px 15px 15px 50px}.sidebar--large .olympus-chat i,.sidebar--large .olympus-chat svg{float:right}.sidebar--large .chat-users li{padding:13px 25px}.sidebar--large .chat-users .more-icons li{padding:0}.fixed-sidebar-right{z-index:20;right:0;top:50%;background-color:#fff;transition:transform .5s cubic-bezier(.55,0,.1,1)}.fixed-sidebar-right.sidebar--small{width:70px;transition-delay:.3s}.fixed-sidebar-right.sidebar--large{width:270px;transform:translateX(100%)}.olympus-chat,.search-friend{position:absolute;width:100%}.profile-completion{padding:15px 25px 25px;transition:all .3s ease}.profile-completion .skills-item-info{font-size:14px}.chat-users{margin-bottom:0}.chat-users li{padding:13px 20px;cursor:pointer}.chat-users .author-thumb{margin-right:8px}.chat-users .author-thumb .icon-status{border-color:#fff}.chat-users .author-name{font-size:12px}.chat-users .status{text-transform:uppercase;font-size:8px;font-weight:700;display:block}.chat-users .more{float:right;margin-top:7px}.chat-users .more:hover .more-icons{visibility:visible;opacity:1;right:100%}.more-icons{position:absolute;right:-100%;opacity:0;visibility:hidden;background-color:#fff;transition:all .3s ease;padding:10px 25px 10px 10px;width:160px;bottom:-17px}.more-icons li{display:inline-block;fill:#c2c5d9;padding:0}.more-icons li:hover{fill:#9a9fbf}.more-icons li+li{margin-left:20px}.more-icons svg{width:22px;height:20px}.olympus-chat{bottom:0;left:0;padding:25px 22px;background-color:#7c5ac2;fill:#fff;height:70px}.olympus-chat .olympus-chat-title{text-transform:uppercase;color:#fff;margin-right:40px;margin-bottom:0}.search-friend{bottom:70px;left:0;box-shadow:0 -50px 45px -3px hsla(0,0%,100%,.7);padding:25px;background-color:#fff}.search-friend input{padding:.5rem 1.1rem;font-size:12px}.search-friend .form-group{margin:15px 20px;max-width:150px}.search-friend a{fill:#9a9fbf}.search-friend a+a{margin-left:13px}.accordion-menu .card-header{padding:0}.accordion-menu .card-header a>.olymp-dropdown-arrow-icon{margin-left:15px;margin-top:4px}.accordion-menu .card-header svg{margin-top:0}.accordion-menu .card-header a{color:inherit;font-size:13px}.crumina-sticky-sidebar{will-change:min-height}.sidebar__inner{transform:translate(0);transform:translateZ(0);will-change:position,transform}@media (max-width:768px){.fixed-sidebar.right{display:none}.fixed-sidebar.right.fixed-sidebar-responsive{display:block;top:0;z-index:30;min-height:70px;height:70px}.fixed-sidebar-right{position:relative;bottom:auto;box-shadow:none;padding-bottom:35px;border-left:none}.fixed-sidebar .mCustomScrollbar{max-height:calc(100vh - 70px)}}.skills-item{margin-bottom:20px}.skills-item .skills-item-meter{padding:0;width:100%;border-radius:10px;background-color:#ebecf2;position:relative;height:6px}.skills-item-info{margin-bottom:16px;color:#515365;font-size:12px}.skills-item-info .skills-item-count{float:right}.skills-item-meter-active{position:relative;height:100%;display:inline-block;border-radius:10px;opacity:0;transition:all .2s ease;top:-8px}.skills-item-meter-active.skills-animate{-webkit-animation:skills-animated 1.2s ease-out;animation:skills-animated 1.2s ease-out}.skills-item-meter-active.skills-animate-opacity{-webkit-animation:skills-animated-opacity .2s ease-out;animation:skills-animated-opacity .2s ease-out}@-webkit-keyframes skills-animated{0%{width:0}}@keyframes skills-animated{0%{width:0}}@-webkit-keyframes skills-animated-opacity{to{opacity:1}}@keyframes skills-animated-opacity{to{opacity:1}}.friend-header-thumb{border-bottom:1px solid #e6ecf5;overflow:hidden}.friend-header-thumb img{width:100%}.friend-item{border-radius:5px;overflow:hidden}.friend-item .control-block-button{position:relative}.friend-item .swiper-container{padding-bottom:40px}.friend-item .btn-control{margin-bottom:0;margin-right:14px}.friend-item-content{padding:0 25px 25px;text-align:center;position:relative}.friend-item-content .more{z-index:5;position:absolute;right:15px;top:50px;font-size:16px;padding:10px}.friend-avatar{margin-top:-49px;position:relative;margin-bottom:30px}.friend-avatar .author-thumb{margin:0 auto 10px;height:98px;width:98px}.friend-avatar .author-thumb img{border:4px solid #fff}.friend-count{margin-bottom:35px}.friend-count-item{display:inline-block;margin-right:25px}.friend-count-item .title{color:#888da8}.friend-count-item:last-child{margin-right:0}.friend-about{text-align:left;margin-bottom:30px;font-size:13px}.friend-since>:first-child{font-size:11px}.more-dropdown{display:block;position:absolute;top:100%;right:0;width:180px;box-shadow:0 0 34px 0 rgba(63,66,87,.1);background-color:#fff;border-radius:4px;visibility:hidden;opacity:0;transition:visibility 0s linear .3s,opacity .3s linear;text-align:left;padding:15px 20px;z-index:5}.more-dropdown ul{padding:15px 25px;margin-bottom:0}.more-dropdown li a>*{display:inline-block;vertical-align:middle}.more-dropdown a{padding:7px 0;font-size:12px;color:#515365;display:block;font-weight:700}.more-dropdown a.btn-sm{padding:.5rem 1.7rem;font-size:.688rem;line-height:1.5;border-radius:.2rem}.more-dropdown a:hover{color:#ff5e3a}.more:hover .more-dropdown{visibility:visible;opacity:1;transition-delay:0s}.more{position:relative;transition:all .3s ease;color:#888da8;fill:#c0c4d8}.more .more,.more>svg{cursor:pointer}.more-with-triangle:before{position:absolute;display:inline-block;content:"";top:-7px;border-right:7px solid transparent;border-left:7px solid transparent;border-bottom:7px solid #fff;right:25px}.more-with-triangle.triangle-bottom-right:before{top:auto;bottom:-7px;right:15px;border-bottom:none;border-top:7px solid #fff}.more-with-triangle.triangle-top-center:before{margin-right:-3px;right:50%}.more-with-triangle.triangle-top-left:before{right:auto;left:15px}.friend-groups .friend-item-content{padding:25px}.friend-groups .friend-item-content .more{top:0;right:10px}.friend-groups .friend-avatar{margin-top:0}.friend-groups .friend-avatar .author-thumb{width:120px;height:120px;border-radius:100px;line-height:120px;background-color:#d7d9e5;margin-bottom:20px;overflow:hidden}.friend-groups .friend-avatar .author-thumb img{border:none}.friend-groups .country{font-size:11px}.friend-groups .friends-harmonic{display:inline-block;margin-bottom:35px}.friend-groups .control-block-button{margin-bottom:15px}.create-group{background-color:transparent;border:2px dashed #bbc0d5;position:relative}.create-group .content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;text-align:center}.create-group .content .btn-control{margin-right:0;margin-bottom:15px}.create-group .content .btn-control svg{width:20px;height:20px}.create-group .author-name{font-size:14px}@media (max-width:640px){.create-group .content{position:relative;transform:none;top:auto;left:auto;margin:30px auto}}.swiper-pagination-bullet{display:inline-block;width:10px;height:10px;background-color:#fff;margin:auto 10px;border-radius:50%;cursor:pointer;transition:all .3s ease;border:2px solid #d9dbe7}.swiper-pagination-bullet.swiper-pagination-bullet-active{background-color:#ff5e3a;border-color:transparent}.pagination-blue .page-link:focus,.pagination-blue .page-link:hover,.pagination-blue .swiper-pagination-bullet.swiper-pagination-bullet-active{background-color:#38a9ff}.swiper-pagination{bottom:0;left:50%;transform:translate(-50%)}.pagination-bottom{padding-bottom:55px}.pagination-bottom .swiper-pagination{bottom:15px}.btn-next,.btn-next-without,.btn-prev,.btn-prev-without{position:absolute;cursor:pointer;width:10px;height:18px;display:block;z-index:10;transition:all .2s ease-in;fill:#fff;stroke:inherit;top:50%;transform:translateY(-50%)}.btn-next-without:hover,.btn-next:hover,.btn-prev-without:hover,.btn-prev:hover{fill:#ff5e3a}.btn-next,.btn-next-without{right:40px}.btn-prev,.btn-prev-without{left:40px}.slider-slides{position:absolute;bottom:-200px;width:100%;text-align:center}.slider-slides .slides-item{position:relative;z-index:1;display:inline-block;margin-right:10px;border-radius:5px;overflow:hidden}.slider-slides .slides-item .overlay{opacity:1;background:rgba(43,45,59,.6)}.slider-slides .slides-item:last-child{margin-right:0}.slider-slides .slides-item.slide-active .overlay{opacity:0}.single-post-slider{position:relative;margin:40px 0;padding-bottom:100px}.single-post-slider .slider-slides{bottom:0}.single-post-slider .btn-next,.single-post-slider .btn-prev{fill:#9a9fbf}.single-post-slider .btn-next:hover,.single-post-slider .btn-prev:hover{fill:#ff5e3a}.single-post-slider .btn-next{right:0}.single-post-slider .btn-prev{left:0}.single-post-slider .slider-slides .slides-item{border-radius:0;margin-right:22px}.single-post-slider .slider-slides .slides-item:last-of-type{margin-right:0}.single-post-slider .swiper-slide img{width:100%}@media (max-width:1080px){.slider-slides{display:none}.single-post-slider .slider-slides{display:block}}@media (max-width:800px){.single-post-slider .slider-slides .slides-item{width:40px;height:40px}.single-post-slider{padding-bottom:50px}}@media (max-width:560px){.single-post-slider .slider-slides .slides-item{width:20px;height:20px}}@media (max-width:460px){.single-post-slider .slider-slides .slides-item{width:15px;height:15px}.single-post-slider .btn-next,.single-post-slider .btn-prev{display:none}}.pagination{margin-top:40px;margin-bottom:40px}.pagination .page-item{font-size:12px;font-weight:700;padding:0 4px}.pagination .page-link{border-radius:5px}.pagination--small{margin-top:15px;margin-bottom:15px}.pagination--small .page-link{padding:.25rem .45rem;font-size:8px}.landing-content{color:#fff;margin-bottom:30px}.landing-content>:first-child{font-weight:300}.landing-content>:last-child{margin-bottom:0}.landing-content>*{color:inherit;margin-bottom:45px}.main-header.main-header-fullwidth,.main-header.main-landing{width:100%;max-width:100%}.main-header.main-landing .logo{text-align:center;display:block;background-color:transparent;margin-bottom:60px}.main-header.main-landing .logo img{display:inline-block;margin:0 auto 10px}.main-header.main-landing h1{font-size:36px;font-weight:300;margin-bottom:40px}.main-header.main-landing p{margin-bottom:60px}.img-rocket{position:absolute;bottom:160px;right:30%}.landing-item{text-align:center;margin-bottom:50px}.landing-item .title{font-weight:700}.landing-item .full-block{z-index:999}.landing-item .landing-item-thumb{position:relative;margin-bottom:25px;box-shadow:0 0 34px 0 rgba(63,66,87,.3)}.landing-item .landing-item-thumb img{width:100%}.landing-item .landing-item-thumb .btn{margin-bottom:0;position:absolute;opacity:0;top:50%;left:50%;transform:translate(-50%,-50%);max-width:90%}.landing-item .landing-item-thumb .new{display:block;position:absolute;right:5px;top:5px;width:50px;height:50px;border-radius:100%;background-color:#ff5e3a;color:#fff;line-height:50px;text-align:center;text-transform:uppercase;font-size:14px;font-weight:700}.landing-item:hover .btn,.landing-item:hover .overlay{opacity:1}.landing-main-content{text-align:center;margin:80px 0}.landing-main-content svg{fill:#ff5e3a;margin-bottom:30px}.landing-main-content .btn{margin:40px 0}.landing-main-content .title{font-weight:300;margin-bottom:30px}@media (max-width:800px){.img-rocket{right:5px}.landing-content>*{margin-bottom:20px}}@media (max-width:420px){.img-rocket{bottom:60px}}.registration-login-form{border:1px solid #e6ecf5;border-radius:0 5px 5px 0;background-color:#fff;overflow:hidden;position:relative;padding-left:71px;margin-bottom:20px;min-height:700px}.registration-login-form .nav-tabs{float:left;display:block;height:100%;border:none;position:absolute;top:0;bottom:0;left:0}.registration-login-form .nav-item{margin-bottom:0;height:50%;display:table}.registration-login-form .nav-item:last-child .nav-link{border-bottom:0}.registration-login-form .nav-link{border-radius:0;border:1px solid #e6ecf5;border-top:none;border-left:none;padding:25px;color:#c0c4d8;fill:#c0c4d8;background-color:#fafbfd;height:100%;display:table-cell;vertical-align:middle}.registration-login-form .nav-link.active{fill:#ff5e3a;background-color:#fff;border-color:#e6ecf5}.registration-login-form .nav-link svg{width:21px;height:21px}.registration-login-form .tab-content{overflow:hidden}.registration-login-form .content{padding:35px 25px}.registration-login-form .title{padding:25px;border-bottom:1px solid #e6ecf5;margin-bottom:0}.registration-login-form p{margin-bottom:0;font-size:13px}.registration-login-form .remember{margin:35px 0 25px}.remember{margin-bottom:1rem}.remember .checkbox{display:inline-block;margin-bottom:0}.remember a{line-height:2}.remember .forgot{float:right;color:#888da8}.or{position:relative;width:100%;height:1px;margin:1rem 0 2rem;background-color:#e6ecf5}.or:after{content:"OR";display:block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background-color:#fff;padding:0 25px;font-size:10px;z-index:5}.form--login-logout{width:100%;margin-right:30px}.form--login-logout form{justify-content:flex-end}.form--login-logout .form-control{background-color:#494c62;border:0;color:#9a9fbf}.form--login-logout .login-btn-responsive{display:none}.form--login-logout button.btn{padding:.578rem 2.1rem}@media (max-width:1023px){.registration-login-form{padding-top:71px;padding-left:0}.registration-login-form .nav-tabs{bottom:auto;height:auto;width:100%}.registration-login-form .nav-item{height:100%;display:block;width:50%;float:left;text-align:center}.registration-login-form .nav-link{display:block}.registration-login-form .nav-item:last-child .nav-link{border-bottom:1px solid #e6ecf5}}@media (max-width:580px){.form--login-logout{text-align:right}.form--login-logout form{display:none}.form--login-logout .btn{display:none;margin-bottom:0}.form--login-logout .btn.login-btn-responsive{display:inline-block;padding:.6rem 1.5rem}}.main-header{padding:70px 0;width:100%;margin:0 auto 30px;position:relative;background-position:50% 50%}.main-header.main-header-has-header-standard{padding:10px}.img-bottom{position:relative;display:block;margin:20px auto -70px}.bg-account{background-image:url(https://assets.dallashanuman.net/images/common/bg-hp-hdr-hanuman-dome.jpg)}.bg-landing{background-image:url(https://assets.dallashanuman.net/images/common/landing-bg.jpg)}.main-header-content{color:#fff;text-align:center}.main-header-content>*{color:inherit}.main-header-content>:first-child{font-weight:300;margin-bottom:20px}.main-header-content p{font-weight:400;margin-bottom:0}.logout-content{text-align:center}.logout-content .logout-icon{font-weight:900;width:20px;height:20px;line-height:20px;border-radius:100%;font-size:9px;text-align:center;color:#fff;background-color:#3f4257;margin:0 auto 35px}.items-round-little{color:#fff;font-weight:700;font-size:10px;text-align:center;width:19px;height:19px;line-height:19px;border-radius:100%;margin-left:12px}.items-round-little:hover{color:#fff}.your-profile-menu{padding:12px 25px;border-bottom:1px solid #e6ecf5;margin-bottom:0}.your-profile-menu li a{font-size:11px;padding:12px 0;color:#888da8;display:block;font-weight:700}.profile-settings-responsive .fa-angle-left,.profile-settings-responsive.open .fa-angle-right{display:none}.your-profile-menu li a:hover{color:#515365}.profile-settings-responsive{width:250px;min-height:100vh;position:fixed;top:70px;transform:translateX(-100%);z-index:21;background-color:#fff;transition:all .3s ease;visibility:hidden;opacity:0;box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.profile-settings-responsive.open{transform:translateX(0)}.profile-settings-responsive.open .fa-angle-left{display:block}.profile-settings-responsive .ps>.ps__scrollbar-y-rail{opacity:0;visibility:hidden;z-index:-4444}.profile-settings-responsive .mCustomScrollbar{max-height:calc(100vh - 70px)}.profile-settings-open{cursor:pointer;position:absolute;left:100%;top:calc(50% - 25px);background-color:#fff;box-shadow:1px 0 3px rgba(0,0,0,.2);border-radius:0 100px 100px 0;line-height:1;padding:20px 8px;font-size:20px}@media (max-width:768px){.main-header{max-width:100%}.profile-settings-responsive{visibility:visible;opacity:1}.responsive-display-none{display:none}}.notification-list{margin-bottom:0}.notification-list .selectize-dropdown-content>*,.notification-list li{padding:25px;border-bottom:1px solid #e6ecf5;display:block;position:relative;transition:all .3s ease}.chat-message-field li,.notification-list .selectize-dropdown-content>:last-child{border-bottom:none}.notification-list .selectize-dropdown-content>*>*,.notification-list li>*{margin-bottom:0;display:inline-block;vertical-align:middle}.notification-list .selectize-dropdown-content>:hover,.notification-list li:hover{background-color:#fafbfd}.notification-list .selectize-dropdown-content>:hover .more,.notification-list li:hover .more{opacity:1}.notification-list .selectize-dropdown-content>.un-read,.notification-list li.un-read{background-color:#f7f9fc}.notification-list .selectize-dropdown-content>.un-read .notification-icon,.notification-list li.un-read .notification-icon{color:#9da2c1;fill:#9da2c1}.notification-list .selectize-dropdown-content>*{cursor:pointer}.notification-list .notification-friend{display:inline-block}.notification-list .comment-photo{margin:30px 0 0 60px;max-width:280px;border-radius:10px;overflow:hidden;display:flex;align-items:center}.notification-list .comment-photo span{background-color:#f5f7fb;padding:0 15px}.notification-list .author-thumb{height:40px;width:40px}.notification-list .notification-event{padding-left:15px}.notification-list .notification-date{font-size:11px;display:block;margin-top:5px}.notification-list .notification-link{color:#ff5e3a}.notification-list .notification-icon{color:#d7d9e5;fill:#d7d9e5;float:right;margin-top:10px}.notification-list .notification-icon svg{width:22px;height:20px}.notification-list .more{position:absolute;right:10px;top:5px;font-size:10px;color:#d6d9e6;opacity:0}.notification-list .more i+i,.notification-list .more i+svg,.notification-list .more svg+i,.notification-list .more svg+svg{margin-left:5px}.notification-list.chat-message{background-color:transparent}.notification-friend{margin-bottom:0}.chat-message .notification-event{max-width:75%;font-size:12px}.chat-message .notification-friend{display:block}.chat-message li>*{vertical-align:top}.chat-message .author-thumb{height:36px;width:36px}.chat-message li.chat-group .author-thumb{border-radius:0}.chat-message li.chat-group .author-thumb img{width:16px;height:16px;float:left;margin-right:2px;margin-bottom:2px;border-radius:100%;overflow:hidden}.chat-message li.chat-group .last-message-author{color:#515365;font-weight:700}.chat-message li.message-unread{background-color:#f7f9fc}.chat-message li.message-unread .notification-icon{fill:#9a9fbf}.chat-field{border-left:1px solid #e6ecf5}.chat-field .mCustomScrollbar{overflow:hidden;max-height:450px}.chat-field .ps:hover>.ps__scrollbar-y-rail,.chat-field .ps>.ps__scrollbar-y-rail{opacity:0;z-index:-1;visibility:hidden}.chat-field textarea{border-radius:0;border-right:0;border-left:0}.chat-message-field .notification-event{max-width:90%}.chat-message-field li:hover{background-color:transparent}.chat-message-field .chat-message-item{float:left;margin-top:10px;font-size:13px}.chat-message-field .notification-date{font-size:10px;float:right;margin-top:0}.chat-message-field .notification-friend{float:left}.added-photos{float:left;margin-top:20px}.added-photos img{border-radius:10px;margin-right:8px;margin-bottom:15px}.added-photos img:last-child{margin-right:0}.added-photos .photos-name{display:block;font-size:10px}.birthday-item .birthday-date,.friend-requests .chat-message-item{font-size:12px}.add-options-message{padding:20px 25px;float:left;width:100%}.add-options-message button{margin-bottom:0;float:right}.add-options-message button+button{margin-right:15px}.add-options-message .options-message{color:#c2c5d9;fill:#c2c5d9;position:relative;display:inline-block;cursor:pointer;vertical-align:middle}.add-options-message .options-message+.options-message{margin-left:35px}.add-options-message .options-message svg{width:24px;height:18px}.add-options-message .more-dropdown{width:215px;top:auto;bottom:20px;right:-20px;padding:8px}.add-options-message .more-dropdown a{padding:0}.add-options-message .more-dropdown li{float:left;padding:4px}.smile-block:hover .more-dropdown{opacity:1;visibility:visible}.smile-block li a{opacity:.7}.smile-block li:hover a{opacity:1}.icon-status{width:6px;height:6px;border-radius:100%;display:inline-block;margin-right:8px}.icon-status.online{background-color:#32e4cd}.icon-status.away{background-color:#ffd52f}.icon-status.disconected{background-color:#ff4f60}.icon-status.status-invisible{background-color:#cbdfee}.friend-requests .notification-icon{margin-top:0}.friend-requests .notification-friend{display:block}.friend-requests .accepted .notification-friend{display:inline-block}.friend-requests .accepted .notification-link{color:#00b7ff}.friend-requests .accepted .notification-icon{margin-top:10px}.birthday-item{padding:25px}.birthday-item .author-thumb{width:40px;height:40px;margin-right:12px}.birthday-item .btn{margin-bottom:0;float:right;margin-top:5px;max-width:35%}.birthday-item.badges .author-thumb{width:38px;height:38px;margin-right:25px}.birthday-item.badges .birthday-date{font-size:13px}.birthday-item.badges .skills-item{min-width:220px;display:block;float:right;margin-bottom:0;margin-top:18px}@media (max-width:999px){.birthday-item.badges .skills-item{float:none}}.birthday-item.badges .skills-item-meter-active{background:linear-gradient(90deg,#ff613a,#ff9432)}.label-avatar{position:absolute;top:-1px;right:-4px;width:16px;height:16px;line-height:16px;text-align:center;color:#fff;font-size:10px;font-weight:700;border-radius:100%;overflow:hidden}@media (max-width:1400px){.birthday-item{padding:25px 10px}}@media (max-width:1200px){.birthday-item{padding:15px}}@media (max-width:980px){.col-xl-5.col-lg-6.col-md-12.col-sm-12.col-xs-12.padding-r-0{padding-right:15px}.col-xl-7.col-lg-6.col-md-12.col-sm-12.col-xs-12.padding-l-0{padding-left:15px}}@media (max-width:480px){.add-options-message .options-message+.options-message{margin-left:15px}.add-options-message button{float:none;margin-left:0;display:block;margin-top:10px}.add-options-message button+button{margin-right:0}.notification-list .notification-event{max-width:75%}.birthday-item{padding:10px}.birthday-item .author-thumb{margin-right:5px}}.popup-chat .add-options-message .options-message+.options-message,.popup-chat .more i+i,.popup-chat .more i+svg,.popup-chat .more svg+i,.popup-chat .more svg+svg{margin-left:15px}@media (max-width:420px){.birthday-item.badges .author-thumb{margin-right:0;margin-bottom:15px;display:block}}@media (max-width:360px){.notification-list .notification-event{max-width:60%}.chat-message-field .notification-date{float:none;margin-top:5px}.chat-message-field .notification-friend{float:none}}.popup-chat{width:320px;box-shadow:0 0 34px 0 rgba(63,66,87,.1);overflow:hidden;position:relative;z-index:5}.popup-chat .modal-body{padding:0}.popup-chat .modal-header{align-items:center;background-color:#7c5ac2;padding:17px}.popup-chat .modal-header .title{margin-right:auto;color:#fff}.popup-chat .modal-content{border:0}.popup-chat .mCustomScrollbar{overflow:hidden;max-height:350px}.popup-chat .ps:hover>.ps__scrollbar-y-rail,.popup-chat .ps>.ps__scrollbar-y-rail{opacity:0;z-index:-1;visibility:hidden}.popup-chat .more{width:auto;font-size:9px;text-align:right;color:#fff;fill:#fff}.popup-chat .notification-event{padding-left:10px;width:75%}.popup-chat .chat-message-item{padding:13px;background-color:#f0f4f9;margin-top:0;border-radius:10px;margin-bottom:5px;font-size:12px}.popup-chat .notification-date{float:left}.popup-chat .author-thumb{width:26px;height:26px}.popup-chat .chat-message-field li{overflow:hidden;padding:9px 25px}.popup-chat .chat-message-field li:last-child{margin-bottom:40px}.popup-chat .chat-message-field li:nth-child(2n) .chat-message-item{background-color:#7c5ac2;color:#fff}.popup-chat .chat-message-field li:nth-child(2n) .author-thumb,.popup-chat .chat-message-field li:nth-child(2n) .chat-message-item{float:right}.popup-chat .chat-message-field li:nth-child(2n) .notification-event{float:right;padding-left:0;padding-right:10px}.popup-chat .add-options-message{position:absolute;right:20px;bottom:15px;width:auto;padding:0}body.body--fixed,body:before{position:fixed;width:100%}.popup-chat .form-group.label-floating textarea.form-control{padding-right:80px;border-left:0;border-bottom:0;border-right:0}.popup-chat .form-group{margin-bottom:0}.popup-chat textarea{min-height:60px;height:60px;transition:all .3s ease;border-radius:0}.popup-chat textarea:focus{min-height:100px}.popup-chat-responsive{position:fixed;right:0;top:0;transform:translateY(-100%);max-width:300px;opacity:1;visibility:visible;display:block;transition:all .3s ease;margin-bottom:0;z-index:999;max-height:70vh}.popup-chat-responsive .mCustomScrollbar{overflow:hidden;max-height:150px}.popup-chat-responsive.open-chat{bottom:auto;top:0;transform:translateY(0)}@media (max-width:768px){.popup-chat-responsive{opacity:1;visibility:visible;display:block}}body{overflow-x:hidden}body:before{content:"";display:block;height:100%;top:0;left:0;background:rgba(43,45,59,.9);opacity:0;transition:opacity .3s ease;z-index:-999}body.overlay-enable:before{opacity:.8;z-index:500}.blog-post-popup .overlay,.open-photo-thumb .photo-item:hover .tag-friends{opacity:1}.window-popup{max-width:calc(100% - 40px)}.window-popup .icon-close{opacity:1;margin-top:0;margin-right:0}.window-popup .icon{fill:#888da8;float:right;margin-top:7px;padding:0}.open-photo-popup-v2 .post-additional-info .comments-shared,.window-popup .input-group-addon .icon{margin-top:0}.window-popup .form-group{margin-bottom:25px}.fav-page-popup button,.upload-photo-item .h6,.upload-photo-item h6{margin-bottom:0}.window-popup .form-group.with-button button{width:50px;border-radius:0 5px 5px 0}.window-popup .olymp-computer-icon{width:22px;height:20px}.fav-page-popup{width:470px}.fav-page-popup .form-group.label-floating .bootstrap-select.btn-group .dropdown-toggle .filter-option{color:#ff5e3a}.icon-close{position:absolute;top:-25px;right:-25px;color:#888da8;fill:#888da8}.icon-close:hover{color:#ff5e3a;fill:#ff5e3a}.icon-close svg{width:18px;height:18px}.update-header-photo{width:770px}.update-header-photo .modal-body{padding:0}.upload-photo-item{display:inline-block;vertical-align:middle;width:49%;padding:50px;text-align:center;fill:#c2c5d9;border-left:1px solid #e6ecf5}.upload-photo-item:first-child{border-right:none}.upload-photo-item svg{margin-bottom:30px;width:22px;height:20px}.upload-photo-item span{font-size:11px;color:#888da8}figcaption,figcaption a{color:#515365}.upload-photo-item:hover{fill:#ff5e3a;background-color:#fafbfd}.choose-from-my-photo{width:770px}.choose-from-my-photo .nav-tabs{position:absolute;top:0;right:0;max-height:100%;border-bottom:none}.choose-from-my-photo .nav-tabs .nav-link{border-radius:0;padding:18px 25px;fill:#c2c5d9;background-color:#fafbfd;border-color:transparent #e6ecf5 #e6ecf5;border-right:none;height:100%}.choose-from-my-photo .nav-tabs .nav-link.active{fill:#ff5e3a;background-color:#fff}.choose-from-my-photo .nav-tabs .nav-link svg{width:18px;height:20px}.choose-from-my-photo .btn{margin-bottom:30px}.choose-from-my-photo .btn+.btn{margin-left:20px}.choose-photo-item{position:relative;border-radius:5px;width:33%;float:left;padding:0 22px 25px 0}.choose-photo-item img{max-width:100%;width:100%}.choose-photo-item:last-child{margin-right:0}.choose-photo-item .radio{position:relative;margin-bottom:0;border:1px solid #e6ecf5;border-radius:5px}.choose-photo-item .radio label{padding-left:0;margin-bottom:0;width:100%}.choose-photo-item .radio label span{position:absolute;top:10px;right:10px;left:auto}.choose-photo-item .circle{background-color:#fff}figcaption{padding:20px 25px;text-align:center;font-size:13px;font-weight:700}figcaption a:hover{color:#ff5e3a}figcaption span{font-size:10px;color:#888da8;font-weight:400;display:block}.more-photos span,.post .author-date a,.post .more-photos span,.post .post__author-name{font-weight:700}.blog-post-popup .ps:hover>.ps__scrollbar-y-rail,.blog-post-popup .ps>.ps__scrollbar-y-rail,.open-photo-popup .ps:hover>.ps__scrollbar-y-rail,.open-photo-popup .ps>.ps__scrollbar-y-rail{display:none}figure{margin:0}.blog-post-popup{width:770px}.blog-post-popup .modal-body{padding:0}.blog-post-popup .post p{padding:0 15px}.blog-post-popup .post-thumb{position:relative}.blog-post-popup .post-title{position:absolute;top:50%;left:50%;color:#fff;transform:translate(-50%,-50%);text-align:center;z-index:20}.blog-post-popup .mCustomScrollbar{overflow:hidden;max-height:365px}.open-photo-popup{width:970px}.open-photo-popup .modal-body{padding:0}.open-photo-popup .modal-content{border:none}.open-photo-popup .mCustomScrollbar{overflow:hidden;max-height:140px}.open-photo-thumb{padding:55px 0;background-color:#000}.open-photo-thumb .photo-item{margin:0;border-radius:0;padding:0;display:block}.open-photo-thumb .photo-item .overlay{bottom:0;right:0}.open-photo-thumb .photo-item img{border-radius:0}.open-photo-thumb .tag-friends{position:absolute;top:25px;right:55px;opacity:0;transition:all .3s ease;fill:#fff}.open-photo-thumb .tag-friends svg{width:20px;height:20px}.open-photo-popup-v2{width:1200px;display:flex}.open-photo-popup-v2 .open-photo-thumb{width:66.66%;float:left;z-index:10}.open-photo-popup-v2 .open-photo-content{width:33%;float:left}.open-photo-popup-v2 .mCustomScrollbar{max-height:180px}.create-photo-album{width:770px}.create-photo-album .photo-album-item.create-album{min-height:200px}.create-photo-album .more{padding:10px 13px;fill:#9a9fbf}.create-photo-album .more a{font-size:12px;display:inline-block;margin-bottom:0}.create-photo-album .more svg{margin-right:5px}.create-photo-album .olymp-happy-face-icon{width:20px;height:20px;fill:#9a9fbf;position:absolute;top:10px;left:15px}.create-photo-album textarea{border-radius:0;border-right:0;border-left:0;font-size:12px}.create-photo-album .btn{margin:30px 0}.create-photo-album .author-title,.registration-login-form-popup .registration-login-form{margin-bottom:0}.create-photo-album .btn+.btn{margin-left:20px}.create-photo-album .more-dropdown{width:260px;right:auto;left:0;padding:0}.edit-widget,.registration-login-form-popup{width:470px}.create-photo-album .more-dropdown input{border:0;border-bottom:1px solid #e6ecf5;font-size:12px}.create-photo-album .author-thumb{margin-right:10px}.registration-login-form-popup .modal-body{padding:0}.edit-widget .custom-control-indicator{width:18px;height:18px}.edit-widget .custom-control{margin-right:0;padding-left:20px}.add-option{display:block;margin:30px 0;color:#888da8}.create-event .more-dropdown .form-group,.create-event .more-dropdown a,.create-friend-group .more-dropdown .form-group,.faqs-popup .collapse,.faqs-popup .collapse p{margin-bottom:0}.add-option svg{fill:#888da8;margin-right:12px;width:14px;height:14px}.add-option span{line-height:1}.create-friend-group{width:470px}.create-friend-group .more-dropdown{width:300px;top:70px;right:-301px;visibility:visible;opacity:1;padding:0}.create-friend-group .more-dropdown a{display:inline-block;margin-bottom:0}.create-friend-group .more-dropdown input{border:0;border-bottom:1px solid #e6ecf5;font-size:12px}.create-friend-group .more-dropdown li{padding:9px 0}.create-friend-group .icon:hover{fill:#ff5e3a}.create-friend-group .icon.check{fill:#38a9ff}.create-friend-group .icon svg{width:14px;height:12px}.create-friend-group .author-thumb{margin-right:10px}.create-friend-group .olymp-happy-face-icon{width:20px;height:20px;fill:#9a9fbf;position:absolute;top:19px;right:15px}.create-friend-group .bootstrap-select.form-control{border-radius:4px;border:1px solid #e6ecf5}.create-friend-group .bootstrap-select.style-2>.dropdown-toggle{padding:1.1rem}.create-friend-group .form-group.label-floating .bootstrap-select.btn-group .dropdown-toggle .filter-option{color:#38a9ff}.create-event .form-group.label-floating .bootstrap-select.btn-group .dropdown-toggle .filter-option,.private-event-head .more-dropdown a:hover{color:#08ddc1}.create-friend-group .dropdown-menu{top:auto;bottom:-100%;left:calc(100% + 25px)}.create-friend-group.create-friend-group-add-friends .bootstrap-select.style-2 .dropdown-menu{display:block;position:relative;top:auto;bottom:auto;left:auto;box-shadow:none;border-radius:0 0 .25rem .25rem;border:none}.create-friend-group.create-friend-group-add-friends .bootstrap-select.style-2>.dropdown-toggle{display:none}.faqs-popup{width:470px}.faqs-popup .collapse{padding:0 0 .75rem}.faqs-popup .modal-body{padding:0}.faqs-popup .card{padding:1px 1.5rem;border-top:1px solid #e6ecf5}.faqs-popup .card-header{padding:1.5rem 0;border-bottom:none}.faqs-popup .card-header a{font-size:13px}.faqs-popup .card-header i,.faqs-popup .card-header svg{margin-top:3px}.faqs-popup .card:first-child{border-top:none}.playlist-popup{width:100%;max-width:100%;top:0!important;left:0;transform:none;height:100vh;position:fixed;visibility:hidden;opacity:0;z-index:999}.create-event .more-dropdown,.playlist-popup.open{visibility:visible;opacity:1}.playlist-popup .icon-close{top:auto;right:25px;bottom:75px;fill:#ff5e3a}.create-event{width:470px}.create-event .icon-close{margin-top:0;margin-right:0}.create-event .more-dropdown{width:300px;top:70px;right:-301px;padding:0}.create-event .more-dropdown a{display:inline-block}.create-event .bootstrap-select.style-2>.dropdown-toggle:after,.event-private-public .ps:hover>.ps__scrollbar-y-rail,.event-private-public .ps>.ps__scrollbar-y-rail{display:none}.create-event .more-dropdown input{border:0;border-bottom:1px solid #e6ecf5;font-size:12px}.create-event .more-dropdown li{padding:9px 0}.create-event .more-dropdown svg{width:14px;height:14px}.create-event .author-thumb{margin-right:10px}.create-event .icon:hover{fill:#ff5e3a}.create-event .icon.check{fill:#08ddc1}.create-event .olymp-happy-face-icon{width:20px;height:20px;fill:#9a9fbf;position:absolute;top:19px;right:15px}.edit-my-poll-popup,.event-private-public{width:770px}.edit-my-poll-popup .place span,.relative{position:relative}.create-event .bootstrap-select.style-2.form-control{border-radius:4px;border:1px solid #e6ecf5}.create-event .bootstrap-select.style-2>.dropdown-toggle{padding:1.1rem 40px 1.1rem 1.1rem;border:none}.create-event .bs-searchbox,.event-private-public .modal-body{padding:0}.create-event .bootstrap-select.style-2 .dropdown-menu{top:auto;bottom:-100%;left:calc(100% + 24px)}.create-event .bootstrap-select li.selected a{background-color:#08ddc1}.create-event .bs-searchbox input{border-radius:0;border-width:0 0 1px}.event-private-public .mCustomScrollbar{overflow:hidden;max-height:365px}.private-event-head{margin-bottom:20px}.private-event-head img{margin-right:14px}.private-event-head .author-date .event-title{line-height:1;margin-bottom:0}.private-event-head .event__date{font-size:12px}.private-event-head .more{float:right;font-size:16px;margin-right:10px}.event-description{padding-left:30px;border-left:1px solid #e6ecf5;margin-bottom:40px}.event-description .event-description-title{font-weight:700;margin-bottom:40px}.event-description .place{margin-bottom:20px}.event-description .friends-harmonic{margin-bottom:35px}.relative{top:auto;left:auto;transform:none}.edit-my-poll-popup .control-block-button{top:20px;right:-17px}.edit-my-poll-popup .edit-my-poll-head{border-radius:5px 5px 0 0;padding:35px 60px;display:flex;align-items:center}.edit-my-poll-popup .edit-my-poll-head .poll-img{margin-left:auto}.edit-my-poll-popup .head-content{color:#fff}.edit-my-poll-popup .head-content .title{margin-bottom:20px;color:inherit}.edit-my-poll-popup .head-content svg{fill:#fff}.edit-my-poll-popup .place span+span{padding-left:17px;margin-left:12px}.edit-my-poll-popup .place span+span:after{content:"/";display:block;position:absolute;left:0;top:0}.more-photos,.post,ol li:before{position:relative}.edit-my-poll-popup .edit-my-poll-content{padding:35px 60px}.edit-my-poll-popup .edit-my-poll-content h3{margin:40px 0}.edit-my-poll-popup .modal-content{border:none}.edit-my-poll-popup .modal-body{padding:0}.modal.show .modal-dialog{display:flex!important}.popup-write-rewiev{width:470px}@media (max-width:1080px){.create-event .bootstrap-select.style-2 .dropdown-menu,.create-friend-group .dropdown-menu{top:100%;bottom:auto;left:0}.icon-close,.window-popup .icon-close{right:50%;margin-right:-9px}.open-photo-popup-v2{display:block}.modal.show .modal-dialog.open-photo-popup-v2{display:block!important}.open-photo-popup-v2 .open-photo-content,.open-photo-popup-v2 .open-photo-thumb{width:100%;float:none}.create-friend-group .bootstrap-select.style-2>.dropdown-toggle{padding-right:2.5rem}}@media (max-width:1024px){.playlist-popup{display:none}}@media (max-width:768px){.edit-my-poll-popup .control-block-button{top:-20px;right:17px}.icon-close{right:50%;margin-right:-9px}.choose-from-my-photo .modal-header .title{width:50%}.choose-from-my-photo .nav-tabs .nav-link{height:100%;display:flex}.choose-from-my-photo .nav-tabs .nav-item{width:auto}.choose-from-my-photo .nav-tabs .nav-link svg{margin:auto}.create-photo-album .btn+.btn{margin-left:0;float:none}.create-photo-album .btn{width:100%;margin:10px 0}.choose-from-my-photo .btn{width:45%}.photo-album-item.create-album .btn-control{width:50px}.blog-post-popup .post p{padding:0}}@media (max-width:580px){.edit-my-poll-popup .edit-my-poll-head{padding:20px 40px;flex-direction:column}.edit-my-poll-popup .edit-my-poll-content{padding:20px 40px}.edit-my-poll-popup .edit-my-poll-head .poll-img{margin:20px auto 0 0}.edit-my-poll-popup .edit-my-poll-content h3{margin:20px 0}}@media (max-width:480px){.page-link,.upload-photo-item{padding:10px}.choose-photo-item{width:50%}.private-event-head .more{float:none}.choose-from-my-photo .btn{width:100%;margin-bottom:10px}.upload-photo-item svg{margin-bottom:10px}.remember a{float:none;display:block}.notification-list.friend-requests .notification-icon{float:none;display:block;margin-top:10px}.choose-from-my-photo .btn+.btn{margin-left:0}.choose-photo-item{padding:0 5px 5px 0}.blog-post-popup .post .post-title{display:none}}@media (max-width:360px){.choose-photo-item{width:100%}.private-event-head .more{float:none;display:block}.private-event-head img{display:block;margin-right:0;margin-bottom:15px}.event-private-public .post__author img{display:block;margin-bottom:10px}}ol{counter-reset:list1;margin:0;padding-left:0}ol li{transition:all .3s ease}ol li:before{counter-increment:list1;content:counter(list1) " ";color:#888da8;display:inline-block;margin-right:10px;font-size:10px}ol li ul li:before{display:none}ol ol{counter-reset:list2;margin-top:10px}ol ol li:before{counter-increment:list2;content:counter(list1) "." counter(list2) ". "}ol ol li{padding-left:40px}.friends-harmonic{margin-bottom:0;overflow:hidden}.friends-harmonic a{width:28px;height:28px;border-radius:100%;overflow:hidden;border:2px solid #fff;display:block;margin-left:-12px}.friends-harmonic li{float:left}.friends-harmonic li:first-child a{margin-left:0}.friends-harmonic .with-text{margin-top:5px;margin-left:15px}.friends-harmonic .all-users{line-height:26px;opacity:.8}.friends-harmonic .all-users:hover{color:#fff}.post{padding:25px;border-bottom:1px solid #e6ecf5}.post p{margin:25px 0}.post .control-block-button{top:20px;right:-17px}.post.thumb-full-width .post-thumb{border-radius:0;margin:0 -25px 25px}.post-thumb,.post .btn{margin-bottom:5px}.post .h1,.post .h2,.post .h3,.post .h4,.post .h5,.post .h6,.post h1,.post h2,.post h3,.post h4,.post h5,.post h6{display:inline-block}.post .h1+p,.post .h2+p,.post .h3+p,.post .h4+p,.post .h5+p,.post .h6+p,.post h1+p,.post h2+p,.post h3+p,.post h4+p,.post h5+p,.post h6+p{margin-top:10px}.post .post__author-name{margin-bottom:0}.post.shared-photo .post-thumb{border:1px solid #e6ecf5;margin-bottom:0}.post-block-photo{margin-bottom:20px;overflow:hidden}.post-block-photo a,.post-block-photo span{float:left;overflow:hidden;padding:0 8px 8px 0}.post-block-photo a img,.post-block-photo span img{border-radius:3px;width:100%}.more-photos:after{content:"";display:block;position:absolute;top:0;left:0;right:8px;bottom:8px;background-color:#ff5e3a;opacity:.8;border-radius:3px}.empty-post-content,.more-photos span{top:50%;left:50%;-webkit-transform:translate(-50%,-50%)}.more-photos span{color:#fff;position:absolute;transform:translate(-50%,-50%);z-index:5;margin-left:-8px}.post-thumb{border-radius:5px;overflow:hidden;position:relative}.post-thumb img{width:100%}.post__author{margin-bottom:20px}.post__author img{width:60px;height:60px;border-radius:100%;overflow:hidden;margin-right:12px}.post__author .more{float:right;font-size:16px;margin-right:20px}.post-additional-info{padding:20px 0 0;border-top:1px solid #e6ecf5;display:flex;align-items:center}.post-additional-info>*{margin-right:15px}.post-additional-info>:last-child{margin-right:0;margin-left:auto}.comments-shared>*{margin-right:15px}.comments-shared>:last-child{margin-right:0}.comments-shared span{color:#888da8}.post-add-icon{fill:#c2c5d9;color:#c2c5d9}.post-add-icon>*{vertical-align:middle;transition:all .15s ease}.cat-list__item a,.comment-form textarea,.more-comments span,.video-player:after{transition:all .3s ease}.post-add-icon img,.post-add-icon svg{margin-right:8px;width:20px;height:18px}.post-add-icon .olymp-speech-balloon-icon{width:22px;height:20px}.post-add-icon .olymp-share-icon{width:26px;height:21px}.post-add-icon:hover{fill:#ff5e3a;color:#ff5e3a}.post-add-icon:hover span{color:#ff5e3a}.post-add-icon:active,.post-add-icon:focus{fill:#c2c5d9;color:#c2c5d9}.empty-post-content .title,.names-people-likes a{color:#515365;font-weight:700}.names-people-likes{font-size:12px}.post-control-button .btn-control{display:block;margin-bottom:6px;margin-right:0;background-color:#9a9fbf;width:34px;height:34px;line-height:36px}.comments-list,.comments-list.style-2 .post__author{margin-bottom:0}.post-control-button .btn-control.bg-facebook,.post-control-button .btn-control.bg-facebook:hover{background-color:#2f5b9d}.post-control-button .btn-control.bg-twitter,.post-control-button .btn-control.bg-twitter:hover{background-color:#38bff1}.post-control-button .btn-control.bg-whatsapp,.post-control-button .btn-control.bg-whatsapp:hover{background-color:#25d366}.post-control-button .btn-control.bg-telegram,.post-control-button .btn-control.bg-telegram:hover{background-color:#1e94d3}.post-control-button .btn-control.bg-envelope-square,.post-control-button .btn-control.bg-envelope-square:hover{background-color:#996dd1}.post-control-button .btn-control svg{width:18px;height:18px}.post-control-button .btn-control .olymp-share-icon{width:24px}.post-control-button .btn-control:hover{background-color:#ff5e3a}.post-control-button .btn-control.featured-post:hover{background-color:#ffc923}.post-control-button .btn-control.has-i i,.post-control-button .btn-control.has-i svg{font-size:15px;width:15px;height:15px}.empty-post{height:600px;background-color:#dce1eb;opacity:.5}.empty-post-content{position:absolute;transform:translate(-50%,-50%);text-align:center}.empty-post-content .title{font-size:16px}.empty-post-content span{font-size:11px}@media (max-width:768px){.post-control-button .btn-control{display:inline-block}.post .control-block-button{right:20px;top:-13px}.post__author .more{margin-right:-16px}}@media (max-width:480px){.post-additional-info{flex-direction:column;align-items:flex-start}.post-additional-info>*{margin-right:0}.post-additional-info>*+*{margin-top:10px}.post-additional-info>:last-child{margin-left:0}}.comments-list .comment-item{padding:25px;border-bottom:1px solid #e6ecf5;background-color:#fafbfd;position:relative}.comments-list .comment-item.has-children{padding-bottom:0}.comments-list .post-add-icon{margin-right:20px}.comments-list .post__author img{width:26px;height:26px}.comments-list.style-2 .comment-item .post__author img{float:left}.comments-list.style-2 .reply{margin-right:20px}.comments-list.style-2 .post__date{display:inline-block;margin-right:20px}.comments-list.style-2 .author-date{overflow:hidden}.comments-list.style-2 .post__author .more{float:none}.comments-list.style-3 .comment-item{background-color:transparent}.comments-list.style-3 .reply{margin-right:20px;color:#ff5e3a}.comments-list.style-3 .post__author-thumb{margin-right:20px;float:left}.comments-list.style-3 .post__author-thumb img{width:56px;height:56px;border-radius:100%}.comments-list.style-3 .comments-content{overflow:hidden}.comments-list.style-3 .children .comment-item{border-left:none}.comments-list.style-3 .children .comment-item:before{display:none}.children{border-top:1px solid #e6ecf5;margin:25px -25px 0;padding-left:35px}.children .comment-item{border-left:1px solid #e6ecf5}.children .comment-item:last-child{border-bottom:none}.children .comment-item:before{content:"";position:absolute;width:9px;height:9px;top:40px;left:-5px;background-color:#fafbfd;border-radius:100%;border:2px solid #c2c5d9;z-index:13}.children.single-children{border-top:0;margin:-3px 0 25px;padding-left:0}.children.single-children .comment-item{padding:25px;position:relative}.children.single-children .comment-item:last-child{padding-bottom:0}.reply,.report{font-size:12px;color:#888da8}.more-comments{text-align:center;padding:15px 0;font-size:12px;color:#515365;display:block;font-weight:700;margin:0 auto}.more-comments:hover{color:#515365}.more-comments:hover span{color:#ff5e3a}.comment-form{padding:25px;border-top:1px solid #e6ecf5;overflow:hidden}.comment-form .add-options-message{position:absolute;right:20px;bottom:15px;width:auto;padding:0}.comment-form .post__author{margin-bottom:0;display:flex;align-items:center}.comment-form .post__author img{margin-right:10px;min-width:28px;max-width:28px;height:28px}.comment-form .form-group{margin-bottom:0;width:100%;margin-left:auto}.comment-form textarea{min-height:60px;height:60px}.comment-form textarea:focus{min-height:100px}.comment-form button{float:right;margin-bottom:0;margin-top:15px}.comment-form button+button{margin-right:15px}@media (max-width:768px){.comments-list .comment-item{padding:10px}.children{margin-right:-10px}.comments-list .comment-item .post__author .more{margin-right:0}.comments-list.style-3 .post__author-thumb img{width:30px;height:30px}}@media (max-width:480px){.comment-form .form-group{width:80%}}.video-player img,.video-thumb img{width:100%}.post-video{border:1px solid #e6ecf5;border-radius:3px;overflow:hidden;margin:20px 0}.post-video .video-content{padding:20px;overflow:hidden}.post-video .video-content .title{display:block}.post-video .video-content p{margin:10px 0;font-size:13px}.post-video .video-content .link-site{font-size:10px;color:#9a9fbf}.post-video .video-content .link-site:hover{color:#ff5e3a}.video-thumb{position:relative;float:left}.video-player{position:relative;overflow:hidden;border-radius:3px;margin:20px 0}.video-player .video-content{position:absolute;bottom:25px;left:25px;color:#fff;z-index:5;opacity:0;transition:all .3s ease;padding:0}.video-player .video-content .title{color:#fff;display:block}.video-player .play-video{opacity:0}.video-player:hover .overlay,.video-player:hover .play-video,.video-player:hover .video-content,.video-player:hover:after{opacity:1}.video-player:after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:inset 0 -120px 55px -30px rgba(0,0,0,.5);opacity:0}@media (max-width:480px){.video-thumb{float:none}.video-player .video-content .title{display:none}}.news-feed-form{overflow:hidden}.news-feed-form .form-group.with-icon:after{display:none}.cat-list-bg-style.cat-list__item-bg-blue .cat-list__item,.cat-list__item{display:inline-block}.news-feed-form .nav-tabs .nav-link{padding:20px;border:1px solid #e6ecf5;border-top:none;border-left:none}.news-feed-form .nav-tabs .nav-link.active{background-color:#fff;fill:#ff5e3a;color:#515365;border-bottom:transparent}.news-feed-form .nav-tabs{background-color:#fafbfd;border-bottom:none}.news-feed-form .nav-link{fill:#888da8;color:#888da8}.news-feed-form .nav-link svg{margin-right:10px;width:18px}.news-feed-form .nav-link .olymp-status-icon{width:20px}.news-feed-form textarea{min-height:160px;border-radius:0;border-top:none;border-left:none;border-right:none}.news-feed-form .form-group.label-floating.has-bootstrap-select .control-label,.news-feed-form .form-group.label-floating.is-focused .control-label{top:16px}.news-feed-form .options-message{margin-top:7px}.news-feed-form .options-message svg{width:22px;height:22px}.news-feed-form .options-message:hover{fill:#9a9fbf}.news-feed-form form{position:relative}.news-feed-form .author-thumb{position:absolute;top:25px;left:25px;z-index:1}.news-feed-form .form-group{margin-bottom:0}.cat-list-bg-style{margin:25px 0;padding:0;list-style:none}.cat-list-bg-style.cat-list__item-bg-blue .cat-list__item.active,.cat-list-bg-style.cat-list__item-bg-blue .cat-list__item a:hover{background-color:#38a9ff}.cat-list__item{background-color:#dee4ec;margin:0 10px;border-radius:30px;overflow:hidden}.cat-list__item.active,.cat-list__item a:hover{background-color:#ff5e3a}.cat-list__item a{font-size:14px;color:#888da8;position:relative;text-transform:capitalize;padding:10px 20px;display:block}.cat-list__item.active a,.cat-list__item a:hover{color:#fff}@media (max-width:768px){.cat-list-bg-style{margin:30px 0}.cat-list-bg-style.cat-list__item-bg-blue .cat-list__item{display:block;margin-top:10px}}@media (max-width:460px){.news-feed-form .nav-tabs .nav-link{padding:12px;text-align:center}.news-feed-form .nav-link svg{display:block;margin:0 auto}}.photo-gallery{display:flex;top:0;right:65px;height:100%;position:absolute;border-bottom:0}.photo-gallery .nav-link{border-radius:0;padding:30px 26px;fill:#c2c5d9;background-color:#fafbfd;border-color:transparent #e6ecf5;height:100%}.photo-gallery .nav-link.active{fill:#ff5e3a;background-color:#fff;border-top-color:transparent}.photo-gallery .nav-link:hover{border-color:transparent #e6ecf5}.photo-gallery .nav-link svg{width:18px;height:20px}.photo-gallery.nav-tabs .nav-item{margin-bottom:0;max-height:100%}.photo-gallery.nav-tabs .nav-item+.nav-item{margin-left:-1px}.block-btn{padding-right:170px}.photo-item{display:inline-block;padding:0 12px 12px 0;margin-right:-3px;position:relative;overflow:hidden}.photo-item .content,.photo-item .more,.photo-item .post-add-icon{position:absolute;opacity:0;transition:all .3s ease}.photo-item .overlay{bottom:12px;right:12px;border-radius:5px}.photo-item img{border-radius:5px;width:100%}.photo-item:last-child{margin-right:0}.photo-item .more{top:25px;right:25px;color:#fff;fill:#fff}.photo-item .content{bottom:25px;left:20px}.photo-item .content .title{color:#fff;display:block;margin-bottom:0}.photo-item .content time{font-size:12px;color:#b6bbd7}.photo-item .post-add-icon{fill:#fff;right:25px;bottom:30px}.photo-item:hover .content,.photo-item:hover .more,.photo-item:hover .overlay,.photo-item:hover .post-add-icon{opacity:1}.photo-album-wrapper{margin-right:-12px}.photo-album-item-wrap{display:inline-block;margin-right:-3px;padding:0 12px 12px 0;vertical-align:top}.photo-album-item{position:relative;border-radius:5px;border:1px solid #e6ecf5;background-color:#fff}.photo-album-item:last-child{margin-right:0}.photo-album-item .photo-item{float:none;margin:0;border-radius:3px;display:block;padding:0}.photo-album-item .photo-item img{width:100%;border-radius:0}.photo-album-item .photo-item .overlay{bottom:0;right:0;border-radius:0}.photo-album-item .content{padding:25px 25px 20px;text-align:center}.photo-album-item .title{display:block;margin-bottom:0}.photo-album-item .sub-title{margin-bottom:30px;display:block}.photo-album-item .friends-harmonic{display:inline-block}.photo-album-item.create-album{background-color:transparent;border:2px dashed #bbc0d5}.photo-album-item.create-album .content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%}.photo-album-item.create-album .btn-control{margin-bottom:20px;float:none}.photo-album-item.create-album svg{width:20px;height:20px}.photo-album-item .form-group{margin-bottom:0}.photo-album-item .form-group>img{width:100%;border-radius:5px 5px 0 0;overflow:hidden}@media (max-width:768px){.photo-gallery.nav-tabs .nav-item{width:auto}}@media (max-width:480px){.photo-item .post-add-icon{right:auto;bottom:auto;left:25px;top:25px}.block-btn .btn+.btn{margin-left:0;margin-top:10px}.photo-album-item.create-album .content{position:relative;transform:none;top:auto;left:auto;width:100%}}.features-video{display:flex;align-items:center;margin-bottom:15px}.features-video .video-player{width:66.66%;margin:0;display:inline-block;border-radius:3px 0 0 3px}.features-video .video-player .play-video{top:40%}.features-video .video-player img{width:100%}.features-video .video-content{left:50%;bottom:30%;transform:translate(-50%,-50%);text-align:center}.features-video .title{font-weight:400;font-size:20px}.features-video .mCustomScrollbar{max-height:110px;overflow:hidden}.features-video .comments-shared{margin-top:0}.features-video .form-group{max-width:85%}.features-video textarea{font-size:13px}.features-video .ps:hover>.ps__scrollbar-y-rail,.features-video .ps>.ps__scrollbar-y-rail{display:none}.features-video-content{width:33%;display:inline-block;background-color:#fff}.video-item .video-player{margin:0;border-radius:3px 3px 0 0}.video-item .title{display:block;margin-bottom:0}.video-item .more{position:absolute;right:25px;top:20px;color:#fff;fill:#fff;opacity:0;z-index:5}.no-past-events .control-block-button,.today-events .control-block-button{right:25px;top:-25px;z-index:5}.video-item:hover .more,.video-item:hover .overlay,.video-item:hover .play-video{opacity:1}@media (max-width:999px){.features-video-content,.features-video .video-player{width:100%}.features-video{display:block}.features-video .video-content{bottom:20px;transform:translate(-50%)}}@media (max-width:480px){.features-video .video-content .title{display:block}}@media (max-width:380px){.features-video .video-content .title{display:none}}.event-item{padding:30px;border-bottom:1px solid #e6ecf5}.event-item:last-child{border-bottom:0}.event-item .place{font-size:12px}.event-item .description{max-width:260px;font-size:12px;margin-bottom:0}.event-item .btn{margin-bottom:0}.date-event{text-align:center}.date-event>*{display:block;line-height:1}.date-event .olymp-small-calendar-icon{width:14px;height:18px}.date-event svg{margin:0 auto 5px;fill:#c2c5d9}.date-event .day{font-size:14px;color:#515365;font-weight:700;margin-bottom:3px}.date-event .month{font-size:9px;text-transform:uppercase}.event-author .author-thumb{margin-right:12px}.event-author .author-name{margin-bottom:0}.event-author time{font-size:11px;display:block}.place svg{margin-right:10px;fill:#c6c9db;width:20px;height:20px}.place{font-size:11px}.no-past-events{color:#d7d9e5;padding:65px 30px;position:relative;margin:0 auto;text-align:center}.no-past-events .btn-control svg{fill:#fff;margin-bottom:0;width:20px;height:20px}.no-past-events a:hover{color:#08ddc1;font-weight:500}.no-past-events svg{fill:#d7d9e5;margin-bottom:20px}.no-past-events span{font-size:14px;display:block}.event-item-table{width:100%}.event-item-table td{padding:25px 12px}.event-item-table td:first-child{padding-left:30px}.event-item-table td:last-child{padding-right:30px}.event-item-table .add-event{text-align:right}.event-item-table thead{border-bottom:1px solid #e6ecf5}.event-item-table thead th{font-size:9px;font-weight:700;padding:12px}.event-item-table thead th:first-child{padding-left:25px}.event-item-table thead th:last-child{padding-right:25px}.event-item-table .author-date a{color:#08ddc1}.event-item-table .author-date .author-name{color:#515365}.event-item-table-fixed-width .author-date,.event-item-table-fixed-width .author-date .author-name{font-size:12px}.event-item-table-fixed-width .event-item .btn{display:block}.event-item-table-fixed-width .event-item .btn+.btn{margin-top:8px}.event-item-table-fixed-width .date-event svg{margin:0 10px 0 0;width:20px;height:20px}@media (max-width:640px){.date-event.align-left,.event-item,.event-item .add-event{text-align:center}.event-item{display:flex;flex-direction:column;width:calc(100vw - 30px)}.event-item .description{max-width:100%}.event-item .friends-harmonic{display:inline-block}.event-item-table td:last-child{padding-right:12px}.event-item-table td:first-child{padding-left:12px}.event-item-table thead{display:none}}.available-widget{padding:16px 25px;display:table;width:100%}.available-widget .custom-control-description{color:#515365;font-weight:700}.available-widget .form-group{margin-bottom:0}.available-widget .custom-control{margin:0}.available-widget>*{margin-bottom:0;display:table-cell;vertical-align:middle}.available-widget .more{font-size:16px;padding-left:25px;text-align:right;width:16px}.chart-text,.circle-pie-chart,.general-statistics,.statistics-list-count.style-2 li,.statistics-slide,.text-stat{text-align:center}.empty-area{border:2px dashed #bbc0d5;height:50px}.today-events .control-block-button svg{width:20px;height:20px}.today-events .control-block-button .olymp-dropdown-arrow-icon{width:6px;height:4px}.today-events .day-event{display:block!important;border-top:none}.today-events .day-event .card-header i,.today-events .day-event .card-header svg{margin-top:3px;margin-left:7px;float:none}.today-events .card.checked .event-time:before{border-color:#38a9ff}.today-events .event-time{position:relative;margin-bottom:10px}.today-events .event-time:before{content:"";width:9px;height:9px;border:2px solid #08ddc1;border-radius:100%;display:block;position:absolute;left:-31px;top:5px;background-color:#fff}.today-events .title{position:relative;padding-right:30px}.today-events .event-status-icon{position:absolute;top:0;right:0;fill:#888da8}.today-events .event-status-icon.completed{fill:#08ddc1}.today-events .event-status-icon.checked{fill:#38a9ff}.today-events .event-time time{font-size:12px;color:brown}.today-events.calendar .list{margin-top:0;position:relative;overflow:visible}.today-events.calendar .card{border-bottom:none;padding-left:25px}.today-events.calendar .card:before{display:block;content:"";width:1px;height:100%;background-color:#e6ecf5;position:absolute;left:25px;top:0}.calendar-events-tabs .nav-item,.calendar-events-tabs.nav-tabs .items-round-little{display:inline-block}.today-events.calendar .card:last-child:before{height:25px}.today-events.calendar .card:last-child .card-header{padding-bottom:25px}.today-events.calendar .card:first-child .card-header{padding-top:25px}.today-events.calendar .day-event .card-header .event-status-icon i,.today-events.calendar .day-event .card-header .event-status-icon svg{margin-top:0;margin-left:0;width:20px;height:20px}.today-events.calendar .card-header{padding:15px 25px}.today-events.calendar .card-header a{font-size:14px}.today-events.calendar .card-header .more-dropdown{right:auto;left:0}.today-events.calendar .card-header .more-dropdown a{font-size:12px}.today-events.calendar .card-header .more-dropdown a:hover{color:#08ddc1}.today-events.calendar .card-header .olymp-dropdown-arrow-icon{width:6px;height:4px;margin-left:5px}.today-events.calendar .card-header .olymp-three-dots-icon{width:16px;height:4px;margin-left:7px}.today-events-thumb{position:relative;text-align:center;padding:25px;color:#fff}.today-events-thumb .day-number{font-size:80px;line-height:1;margin-bottom:5px}.today-events-thumb .day-week{font-size:24px;margin-bottom:5px}.today-events-thumb .month-year{font-size:12px;color:#888da8}.card-header a .olymp-dropdown-arrow-icon{width:6px;height:4px}.calendar-events-tabs .nav-item+.nav-item{margin-left:60px}.calendar-events-tabs.nav-tabs{border-bottom:none}.calendar-events-tabs.nav-tabs .nav-link{padding:0;border:transparent;font-weight:700;font-size:14px;color:#888da8}.single-post-additional>*+*,.sub-forums{border-left:1px solid #e6ecf5}.calendar-events-tabs.nav-tabs .nav-link.active{color:#515365;background-color:transparent}.forums-table thead,.open-topic-table thead{background-color:#38a9ff}@media (max-width:420px){.calendar-events-tabs .nav-item+.nav-item{margin-left:10px}}@media (max-width:320px){.calendar-events-tabs .nav-item{display:block}.calendar-events-tabs .nav-item+.nav-item{margin-left:0;margin-top:10px}}.monthly-indicator{display:inline-block}.monthly-indicator .btn-control{float:left;margin-bottom:0;margin-right:15px}.monthly-indicator>.negative{transform:rotate(180deg)}.monthly-indicator .olymp-stats-arrow{width:18px;height:18px}.monthly-indicator .olymp-comments-post-icon,.monthly-indicator .olymp-happy-face-icon{width:20px;height:20px}.monthly-count{font-size:24px;color:#515365;overflow:hidden;line-height:1}.monthly-count .indicator{font-size:10px;font-weight:700;display:inline-block;vertical-align:middle;margin-left:10px}.monthly-count .period{display:block;font-size:12px;color:#888da8;line-height:1.5;margin-top:3px}.positive{color:#08ddc1}.negative{color:#ff5e3a}.points{font-size:12px;margin-bottom:30px}.points.points-block,.statistics-list-count,.statistics-list-count .points{margin-bottom:0}.points>span+span{margin-left:15px}.points.points-block>span{display:block}.points.points-block>span+span{margin-left:0;margin-top:15px}.statistics-point{display:inline-block;width:8px;height:8px;border-radius:100%;margin-right:6px}.ui-block-title .points{font-size:9px;float:right;margin-bottom:0;margin-top:5px}.chart-with-statistic{overflow:hidden}.chart-with-statistic .statistics-list-count{width:40%;float:left}.chart-with-statistic .chart-js-pie-color{width:60%;float:left}.statistics-list-count .indicator{font-size:10px;font-weight:700;display:inline-block;vertical-align:middle;margin-left:10px}.statistics-list-count .count-stat{font-size:24px;color:#515365}.statistics-list-count li{margin-bottom:18px}.statistics-list-count li:last-child{margin-bottom:0}.statistics-list-count.style-2{overflow:hidden}.statistics-list-count.style-2 li:first-child{float:left;margin-left:50px}.statistics-list-count.style-2 li:last-child{float:right;margin-right:50px}.statistics-list-count.style-2 .statistics-point{display:block;margin:0 auto 10px}.general-statistics{font-size:28px;color:#515365}.general-statistics span{display:block;font-size:12px;color:#888da8;white-space:nowrap}.chart-js-pie-color{position:relative}.chart-js-pie-color .general-statistics{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.world-statistics-img{display:inline-block;vertical-align:middle;margin-right:20px;max-width:70%}.world-statistics-img img{width:100%}.country-statistics{float:right;margin-bottom:0}.country-statistics li{margin-bottom:20px;font-size:12px}.country-statistics li>*{display:inline-block;vertical-align:bottom}.country-statistics .count-stat{font-weight:700;float:right;margin-top:3px;color:#515365}.country-statistics .country{margin-right:30px;line-height:1}.country-statistics img{margin-right:7px;position:relative;bottom:2px}.monthly-indicator-wrap{overflow:hidden}.monthly-indicator-wrap .monthly-indicator{margin:0 25px 30px 0;float:left}.chart-text .title{margin-bottom:10px}.circle-pie-chart{position:relative;margin-bottom:30px}.circle-pie-chart canvas{max-width:180px;max-height:180px}.circle-pie-chart .pie-chart .content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:42px;color:#515365}#us-chart-map{margin:0 auto 35px}.chart-js-small-pie{width:90px;height:90px}.text-stat .count-stat{font-size:32px;color:#515365}.text-stat .title{font-size:12px;font-weight:700;color:#515365}.text-stat .sub-title{font-size:12px}.statistics-slide{margin-bottom:80px}.statistics-slide .count-stat{font-size:60px;color:#515365;margin-bottom:20px}.statistics-slide .title{font-size:16px;font-weight:700;color:#515365;margin-bottom:10px}.statistics-slide .title .c-primary{color:#ff5e3a}@media (max-width:1200px){.country-statistics,.world-statistics-img{vertical-align:middle;display:inline-block}.world-statistics-img{max-width:50%}.country-statistics{float:none}}@media (max-width:1080px){.text-stat .count-stat{font-size:16px}.statistics-list-count.style-2 li:first-child{margin-left:20px}.statistics-list-count.style-2 li:last-child{margin-right:20px}}@media (max-width:380px){.world-statistics-img{max-width:100%;margin-bottom:20px}.world-statistics{text-align:center}.country-statistics{text-align:left}}.forums-table{width:100%;border-radius:5px;overflow:hidden}.forums-table thead th{font-size:12px;font-weight:700;padding:15px 25px;color:#fff;text-align:center}.forum-item .title:hover,.forums-table .count:hover{color:#ff5e3a}.forums-table thead th.forum{text-align:left}.forums-table td{padding:35px 25px;text-align:center}.forums-table td.forum{text-align:left}.forums-table tr{border-bottom:1px solid #e6ecf5;border-top:1px solid #e6ecf5}.forums-table tr:last-child{border-bottom:none}.forums-table .count{font-size:12px}.forum-item img{float:left;margin-right:15px}.forum-item .content{overflow:hidden}.forum-item .text{margin-bottom:0;font-size:13px}.forum-item .icon{font-size:15px;color:#ffdc1b;margin-right:10px;float:left}.author-freshness .title:hover,.sub-forums a:hover{color:#ff5e3a}.author-freshness .author-thumb{display:block;margin-bottom:10px}.author-freshness .author-thumb img{width:26px;height:26px}.author-freshness .title{display:block;font-size:12px;margin-bottom:0}.author-freshness time{font-size:11px}.sub-forums{margin-bottom:0;padding:5px 0;margin-top:15px;display:inline-block}.sub-forums a{font-size:12px;padding:5px 13px;display:block;margin-bottom:0}.author-started{display:flex;align-items:center;margin-top:10px}.author-started>*+*{margin-left:8px}.author-started span{font-size:12px}.author-started .title{margin-bottom:0;font-size:12px}.author-started .author-thumb img{width:18px;height:18px;margin-right:0}@media (max-width:560px){.forum-item{text-align:center}.forum-item img{float:none;margin-right:0;margin-bottom:15px}.forums-table td,.forums-table thead th{padding:5px}}.open-topic-table{width:100%}.open-topic-table thead th{font-size:12px;font-weight:700;padding:15px 25px;color:#fff}.open-topic-table .country,.reply-topic{font-size:11px}.blog-post .post-title:hover,.open-topic-table .author-name:hover,.reply-topic{color:#ff5e3a}.open-topic-table thead th.author{text-align:left}.blog-post-v2,.choose-reaction,.open-topic-table .author{text-align:center}.open-topic-table td{padding:35px 25px}.open-topic-table tr{border-bottom:1px solid #e6ecf5;border-top:1px solid #e6ecf5}.open-topic-table tr:last-child{border-bottom:none}.open-topic-table .topic-date{padding:10px 23px;background-color:#fafbfd;font-size:11px}.open-topic-table .author-thumb{margin-bottom:20px}.open-topic-table .author-thumb img{width:80px;height:80px}.open-topic-table .author-name{display:block;white-space:nowrap}.open-topic-table .posts{vertical-align:top}.reply-topic{float:right}@media (max-width:640px){.open-topic-table td,.open-topic-table thead th{padding:5px}.open-topic-table .author-thumb img{width:40px;height:40px}}.blog-post-v1 .post-thumb:after,.main-header-post:after{content:"";top:0;width:100%;height:100%;left:0}.blog-post-wrap .blog-post,.blog-post-wrap .ui-block{margin-bottom:30px}.blog-post-wrap .ui-block .blog-post{margin-bottom:0}.blog-post .post-thumb{border-radius:5px 5px 0 0;margin-bottom:0}.blog-post .post-content{padding:20px 25px}.blog-post .post-title{display:block;margin-bottom:14px}.blog-post .post__date,.post-category{display:inline-block}.blog-post .author-date{text-transform:uppercase;font-size:10px}.blog-post .post__author-name{font-size:10px}.blog-post .post-additional-info{margin-top:15px}.blog-post .post-additional-info>*{margin-right:0}.blog-post .friends-harmonic a{border-radius:0}.blog-post .post-additional-info .comments-shared{margin-top:4px}.post-category{border-radius:3px;padding:4px 9px;color:#fff;font-size:11px;text-transform:uppercase;margin-bottom:20px}.post-category.bg-transparent{background-color:transparent;color:#ff5e3a;padding:0;font-size:10px}.post-category.bg-transparent:hover{color:#ff5e3a}.post-category:hover{color:#fff}.blog-post-v1:hover .post-title{opacity:1;color:#fff}.blog-post-v1 .post-thumb{position:relative}.blog-post-v1 .post-thumb:after{display:block;position:absolute;box-shadow:inset 0 -170px 55px -30px rgba(0,0,0,.8)}.blog-post-v1 .post-content{position:absolute;bottom:0;left:0;z-index:3}.blog-post-v1 .post-additional-info{margin-top:0;border-top:none;padding:20px 25px}.blog-post-v1 .post-title{color:#fff;opacity:.7}.blog-post-v1 .author-date{color:#888da8}.blog-post-v1 .post__author-name{color:#fff}.choose-reaction .title span,.single-post .post-title:hover{color:#515365}.main-header-post{position:relative}.main-header-post img{width:100%}.main-header-post:after{display:block;position:absolute;box-shadow:inset 0 170px 55px -30px rgba(0,0,0,.8)}.contact-form-wrap,.table-careers li{box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.single-post{position:relative}.single-post .h1,.single-post .h2,.single-post .h3,.single-post .h4,.single-post .h5,.single-post .h6,.single-post h1,.single-post h2,.single-post h3,.single-post h4,.single-post h5,.single-post h6,.single-post p{line-height:1.5}.single-post .control-block-button{top:20px;right:-17px}.single-post .post-title{font-size:46px;margin-bottom:35px}.single-post .post-thumb{border-radius:0;margin:0 -60px 50px}.single-post .post__author-name{font-weight:700}.single-post-v1{padding:5px}.single-post-v1 .post-content-wrap{padding:50px 0;overflow:hidden}.single-post-v1 .post-content{padding:0 40px 0 60px;overflow:hidden}.single-post-v1 .filter-icons{float:left}.single-post-v1 .filter-icons li{display:block}.choose-reaction li,.filter-icons li{display:inline-block}.single-post-v1 .filter-icons li+li{margin-left:0;margin-top:25px}.author-date .author-thumb{margin-right:13px}.author-date.not-uppercase{text-transform:none;font-size:12px}.author-date.not-uppercase .post__author-name{font-size:12px;font-weight:400;text-transform:none}.choose-reaction{padding:30px;border-top:1px solid #e6ecf5;border-bottom:1px solid #e6ecf5}.choose-reaction .title{font-size:12px;margin-bottom:30px}.choose-reaction li+li{margin-left:9px}.choose-reaction li img{filter:grayscale(100%)}.choose-reaction li:hover img{filter:grayscale(0)}.choose-reaction.reaction-colored li img{filter:grayscale(0);opacity:.7}.choose-reaction.reaction-colored li:hover img{opacity:1}.filter-icons li{opacity:.7;transition:all .3s ease}.filter-icons li:hover,.single-post-v3 .video-thumb:hover .overlay{opacity:1}.filter-icons li+li{margin-left:8px}.blog-post-v2 .post__author img{width:28px;height:28px}.blog-post-v2 .post__date{display:block;font-size:11px}.blog-post-v2 .author-date{text-align:left}.blog-post-v2 .post__author-name{margin-bottom:0}.blog-post-v2 .post-additional-info{display:inline-block;margin-top:0}.blog-post-v2 .post-additional-info .comments-shared{margin-left:20px}.single-post-v2{padding:20px;text-align:center}.single-post-v2 .post-content{text-align:left;padding:10px 40px}.single-post-v2 .author-date{text-align:left}.single-post-additional{margin-bottom:50px}.single-post-additional>*{padding:20px 30px}.single-post-additional .post__author{margin-bottom:0}.single-post-additional .author_prof{font-size:11px}.single-post-additional a:hover{color:#ff5e3a}.post-date-wrap svg{height:22px;fill:#9a9fbf;margin-right:12px}.post-date-wrap .post-date{text-align:left;font-size:12px}.post-date-wrap .post-date span{font-size:11px;display:block}.post-date-wrap .date{margin-bottom:0;font-size:12px;font-weight:400}.post-comments-wrap svg{width:22px;fill:#9a9fbf;margin-right:12px}.post-comments-wrap .post-comments{text-align:left;font-size:12px;font-weight:400}.post-comments-wrap .post-comments span{font-size:11px;display:block}.blog-post-v3,.testimonial-item-content{display:-ms-flexbox}.post-comments-wrap .comments{margin-bottom:0;font-size:12px;font-weight:400}.blog-post-v3{display:flex;align-items:center}.blog-post-v3 .post-thumb{border-radius:5px 0 0 5px;width:50%}.blog-post-v3 .post-thumb img{min-height:100%}.blog-post-v3 .post-content{width:50%;padding:25px 30px}.blog-post-v3 .post-category{border-radius:0;position:absolute;left:0;top:15px}.blog-post-v3 .author-date{margin-bottom:13px}.blog-post-v3 .post-additional-info{border-top:none}.blog-post-v3 .post-additional-info .comments-shared{float:none;margin-left:22px;margin-top:0}.blog-post-v3.featured-post-item{display:block}.blog-post-v3.featured-post-item .post-thumb{border-radius:5px 5px 0 0;width:auto}.blog-post-v3.featured-post-item .post-content{width:auto;padding:25px}.blog-post-v3.featured-post-item .post-additional-info{padding:0}.single-post-v3{padding:60px 70px}.single-post-v3 .filter-icons{display:inline-block;margin-left:25px}.single-post-v3 .post-thumb{border-radius:0;margin:50px -70px}.single-post-v3 .control-block-button{float:left;position:relative;top:auto;right:auto}.single-post-v3 .control-block-button>a{margin-bottom:18px}.single-post-v3 .control-block-button .post-add-icon{display:block;text-align:center}.single-post-v3 .control-block-button .post-add-icon svg{margin-right:0;margin-bottom:5px}.single-post-v3 .control-block-button .post-add-icon span{display:block}.single-post-v3 .post-content{padding:0 40px 50px 60px;overflow:hidden}.single-post-v3 .video-thumb{float:none;padding:65px 0;margin:45px 0}.single-post-v3 .video-thumb img{width:auto;margin:0 auto;display:block}@media (max-width:1024px){.single-post .post-title{font-size:30px}.single-post-v1{padding:30px}.single-post-v1 .post-content{padding:0 20px 0 30px}.single-post-v3{padding:30px}.single-post-v3 .post-content{padding:0 20px 0 30px}.single-post-v3 .post-thumb{border-radius:0;margin:30px -30px}.single-post-v2{padding:30px}.single-post-v2 .post-content{padding:10px 0}.single-post-v2 .post-thumb{border-radius:0;margin:0 -30px 50px}.single-post-additional>*{padding:10px}blockquote{margin:1.5em 0;padding:15px 30px}blockquote p:before{left:-30px}}@media (max-width:768px){.blog-post .post-control-button .btn-control{display:block}.author-date .author-thumb{margin-right:8px}.choose-reaction{padding:15px}.single-post-v1 .post-content-wrap{padding:20px 0}}@media (max-width:560px){.blog-post .post-additional-info .comments-shared{float:right}.single-post .post-title{font-size:22px}.blog-post .post-additional-info>*{display:inline-block!important;margin-top:0}.single-post-v1 .filter-icons{float:none}.single-post-v1 .filter-icons li{display:inline-block}.blog-post-v3,.single-post-additional.inline-items>*{display:block}.single-post-v1 .filter-icons li+li{margin-left:5px;margin-top:0}.single-post-v1{padding:10px}.single-post-v1 .post-content,.single-post-v3 .post-content{padding:0}.choose-reaction li+li{margin-left:5px}.single-post-additional{text-align:left}.single-post-additional.inline-items>*+*{border-left:none}.blog-post-v3 .post-content,.blog-post-v3 .post-thumb{width:auto}.single-post-v3 .video-thumb{margin:20px 0}.single-post-v3 .control-block-button{float:none;margin-bottom:20px}.single-post-v3 .control-block-button>a{display:inline-block}.single-post-v3 .control-block-button>a+a{margin-left:10px;margin-top:0}.single-post-v3 .control-block-button .btn-control{display:inline-block;margin-bottom:0;vertical-align:top}.single-post-v3 .control-block-button .post-add-icon{display:inline-block;margin-bottom:0}}.crumina-clients,.crumina-info-box,.crumina-testimonial-item{text-align:center}.inline-items>*,.table-careers span,.table-cell,.w-playlist li>*{vertical-align:middle}.crumina-clients{padding:85px 0}.clients-item{position:relative;display:inline-block}.clients-item:hover img{opacity:1;filter:grayscale(0)}.clients-item img{transition:all .3s linear;transform-style:preserve-3d;opacity:.3;filter:grayscale(100%);max-width:100%}.clients-item .clients-images{position:relative;display:block;margin:auto}@media (max-width:1200px){.crumina-clients{padding:40px 0}.clients-item{margin-bottom:20px}}.crumina-heading{position:relative;z-index:5;margin-bottom:30px}.crumina-heading>:last-child{margin-bottom:0}.crumina-heading>:first-child{margin-top:0}.crumina-heading+*{margin-top:25px}.heading-title{margin-bottom:30px;line-height:1.3em}.heading-text{margin-top:20px;line-height:1.75}.heading-text.small{font-size:14px}.heading-text a{font-weight:700}.heading-sup-title{color:#ff5e3a;margin-bottom:25px;text-transform:uppercase;font-size:10px;font-weight:700}.with-title-decoration .heading-title{position:relative;padding-bottom:30px}.with-title-decoration .heading-title:after,.with-title-decoration .heading-title:before{content:"";display:block;position:absolute;bottom:0;left:0;transition:all .3s ease}.with-title-decoration .heading-title:after{height:1px;background-color:#e6ecf5;width:100%}.with-title-decoration .heading-title:before{height:2px;background-color:#ff5e3a;width:10%}.with-title-decoration:hover .heading-title:before{width:100%}.crumina-testimonial-item .author-thumb{height:98px;width:98px;margin:0 auto 15px}.crumina-testimonial-item .author-thumb img{border:4px solid #fff}.crumina-testimonial-item .rait-stars{margin-bottom:40px}.crumina-testimonial-item .rait-stars .star-icon{font-size:11px;color:#ffce08}.crumina-testimonial-item .author-content{margin-top:auto;margin-bottom:15px}.crumina-testimonial-item .testimonial-message{margin-bottom:70px}.testimonial-header-thumb{height:90px;overflow:hidden;background-size:cover}.testimonial-item-content{margin-top:-49px;padding:0 30px 30px;display:flex;flex-direction:column}.info-box-image{margin-bottom:50px}.info-box-wrap .crumina-info-box{margin-bottom:90px}.info-box-title{margin-bottom:40px}.crumina-info-box--thumb-left{text-align:left;display:flex}.crumina-counter-item,.crumina-teammembers-item,.page-404-content,.search-help-result-title,.shop-product-item.product-item-v2,.total-topic{text-align:center}.crumina-info-box--thumb-left .info-box-image{margin-bottom:0;margin-right:30px}.crumina-info-box--thumb-left .info-box-title{margin-bottom:30px}@media (max-width:768px){.info-box-image,.info-box-title{margin-bottom:20px}.info-box-wrap .crumina-info-box{margin-bottom:30px}}.crumina-counter-item{position:relative}.crumina-counter-item .counter-numbers{font-size:54px;line-height:1;margin-bottom:40px}.crumina-counter-item .counter-title{margin:0;line-height:1.1}.crumina-counter-item .units{display:inline-block}.crumina-counter-item .units div{color:#ff5e3a;display:inline-block}.crumina-counter-item:after{content:"";display:inline-block;height:50%;width:1px;background-color:#dcdde0;position:absolute;right:0;top:50%;transform:translateY(-50%)}.crumina-counter-item:last-child:after{display:none}@media (max-width:1200px){.crumina-counter-item{margin-bottom:40px}.crumina-counter-item .counter-numbers{font-size:30px;margin-bottom:20px}}@media (max-width:1024px){.crumina-counter-item:after{display:none}}.crumina-teammembers-item:hover img.hover{top:0;left:0;transform:scale(2) translate(0);opacity:0;filter:grayscale(0);visibility:hidden}.socials--round svg,.teammembers-thumb img.hover{top:50%;left:50%;-webkit-transform:translate(-50%,-50%)}.crumina-teammembers-item:hover img.main{filter:grayscale(0)}.teammembers-item-prof{font-size:10px;font-weight:700;margin-bottom:30px}.teammembers-item-name{margin-bottom:10px;display:block;font-size:18px}.teammembers-thumb{position:relative;overflow:hidden;margin-bottom:30px;display:inline-block}.teammembers-thumb img{transition:all 1s ease-out;filter:grayscale(100%);display:block;margin:0 auto}.teammembers-thumb img.hover{position:absolute;transform:translate(-50%,-50%)}.teammembers-wrap .crumina-teammembers-item{margin-bottom:60px}@media (max-width:768px){.teammembers-wrap .crumina-teammembers-item{margin-bottom:30px}}.socials i,.socials svg{font-size:15px;transition:all .3s ease}.socials li{display:inline-block}.socials li a{color:#9a9fbf}.socials li a:hover{color:#ff5e3a}.socials li+li{margin-left:20px}.socials--round .social-item{width:34px;height:34px;border-radius:100%;fill:#fff;display:block;position:relative;opacity:.9}.socials--round .social-item:hover{opacity:1}.socials--round .social-item.olympus{background-color:#ff5e3a}.socials--round .social-item.rss{background-color:#f4b459}.socials--round .social-item.mail{background:#996dd1}.socials--round .social-item.pinterest{background:#cc2127}.socials--round .social-item.google,.socials--round .social-item.googleplus{background:#dd4b39}.socials--round .social-item.facebook{background:#3b5998}.socials--round .social-item.twitter{background:#55acee}.socials--round .social-item.amazon{background-color:#f69b06}.socials--round .social-item.behance{background-color:#2d2d2d}.socials--round .social-item.bing{background-color:#ffa616}.socials--round .social-item.creative-market{background-color:#8da741}.socials--round .social-item.deviantart{background-color:#1b1b1b}.socials--round .social-item.dribble{background-color:#f74881}.socials--round .social-item.dropbox{background-color:#0ba4e0}.socials--round .social-item.envato{background-color:#6d9c3e}.socials--round .social-item.flickr{background-color:#26a9e1}.socials--round .social-item.instagram{background-color:#e75351}.socials--round .social-item.kickstarter{background-color:#14e06e}.socials--round .social-item.linkedin{background-color:#4a8f9e}.socials--round .social-item.medium{background-color:#00e56b}.socials--round .social-item.periscope{background-color:#3fa4c4}.socials--round .social-item.quora{background-color:#f85f62}.socials--round .social-item.reddit{background-color:#f05825}.socials--round .social-item.shutterstock{background-color:#008ec0}.socials--round .social-item.skype{background-color:#00aaf1}.socials--round .social-item.snapchat{background-color:#ffed45}.socials--round .social-item.soundcloud{background-color:#f30}.socials--round .social-item.spotify{background-color:#1ed760}.socials--round .social-item.trello{background-color:#0079bf}.socials--round .social-item.tumblr{background-color:#36465d}.socials--round .social-item.vimeo{background-color:#1ab7ea}.socials--round .social-item.vk{background-color:#6383a8}.socials--round .social-item.whatsapp{background-color:#25d366}.socials--round .social-item.wikipedia{background-color:#000}.socials--round .social-item.wordpress{background-color:#21759b}.socials--round .social-item.youtube{background-color:#cd201f}.socials--round svg{height:20px;width:20px;position:absolute;transform:translate(-50%,-50%)}.socials-shared{display:flex;justify-content:center;padding:60px}.socials-shared .social-item{width:100%;padding:15px 30px;margin-bottom:0}.socials-shared .social-item i,.socials-shared .social-item svg{font-size:15px}.socials-shared .social-item+.social-item{margin-left:15px}@media (max-width:560px){.socials-shared{padding:20px}}.contact-item-wrap{margin-bottom:30px}.contact-item-wrap:hover .contact-title:after{width:100%}.contact-title{position:relative;padding-bottom:35px;margin-bottom:50px}.contact-title:after{content:"";display:block;position:absolute;bottom:0;left:0;width:15%;height:2px;background-color:#ff5e3a;transition:width .3s ease-in-out}.contact-item .sub-title{font-weight:400}.contact-item a{color:#888da8;display:block}.contact-form-wrap,.follow-instagram{display:-ms-flexbox;overflow:hidden}.contact-item a:hover{color:#ff5e3a}.contact-item+.contact-item{margin-top:30px}.contact-form-wrap{position:relative;background-color:#fff;border:1px solid #e6ecf5;border-radius:5px;display:flex;z-index:2}.contact-form-wrap .contact-form{width:60%}.contact-form-thumb{position:relative;padding:50px 40px;color:#fff;background-size:cover;background-repeat:no-repeat;width:40%}.contact-form-thumb .title{color:inherit;font-size:34px;margin-bottom:40px;line-height:1}.contact-form-thumb .title span{font-size:64px;display:block}.contact-form{padding:50px 40px 30px}.contact-form .btn{margin-bottom:0}@media (max-width:1200px){.contact-form-thumb .title span{font-size:34px}.contact-form-thumb .title{margin-bottom:20px}.contact-form-thumb,.contact-form-wrap .contact-form{padding:30px}}@media (max-width:860px){.contact-form-thumb .title,.contact-form-thumb .title span{font-size:22px}}@media (max-width:600px){.contact-form-wrap{flex-direction:column}.contact-form-thumb,.contact-form-wrap .contact-form{width:100%}}.accordion-faqs .icons-wrap{display:inline-block;position:relative;margin-left:20px}.accordion-faqs .icons-wrap svg{fill:#ff5e3a;transition:opacity .3s ease}.accordion-faqs .icons-wrap .olymp-plus-icon{position:absolute;top:0;left:0;opacity:0}.accordion-faqs .card-header .collapsed .olymp-accordion-close-ico{opacity:0}.accordion-faqs .card-header .collapsed .olymp-plus-icon,.follow-instagram:hover .overlay{opacity:1}.accordion-faqs .card-header{padding:60px 0;border:none;border-top:1px solid #e6ecf5}.accordion-faqs .card-header:first-child{border-top:none}.accordion-faqs .collapse{margin-bottom:60px}.accordion-faqs svg{width:12px;height:12px}@media (max-width:600px){.accordion-faqs .card-header{padding:30px 0}.accordion-faqs .collapse{margin-bottom:20px}}.table-careers{width:100%}.table-careers li{display:table;width:100%;padding:30px 35px;border:1px solid #e6ecf5;margin-top:18px;border-radius:5px;transition:background-color .3s ease}.table-careers li:hover{background-color:#e6ecf5}.table-careers span{display:table-cell;width:20%}.table-careers span.position,.table-careers span.type{color:#515365}.table-careers .head{border:none;box-shadow:none}.table-careers .head span{font-size:10px;text-transform:uppercase}.table-careers .head:hover{background-color:transparent}.table-careers .btn{margin:0}@media (max-width:640px){.table-careers li{padding:15px}}.follow-instagram{display:flex;border-radius:5px;position:relative}.follow-instagram img{width:20%}.follow-instagram .btn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@media (max-width:460px){.follow-instagram .btn{width:70%}}.help-support-block{margin-bottom:60px}.help-support-block .title{margin-bottom:60px;display:flex;align-items:center}.help-support-block .title .total-topic{margin-left:15px}.help-support-block .title:hover .total-topic{background-color:#7c5ac2;color:#fff}.total-topic{font-size:10px;border-radius:100%;font-weight:900;width:30px;height:30px;background-color:#ebecf2;line-height:30px;display:block;color:#515365}.help-support-list li{display:flex;align-items:flex-start}.help-support-list li svg{margin-right:20px;width:14px;height:14px;fill:#9a9fbf;position:relative;top:3px}.help-support-list li a{font-size:14px;color:#888da8}.help-support-list li+li{margin-top:20px}.help-support-list li:hover a{color:#515365}.help-support-list li:hover svg{fill:#ff5e3a}.help-main-topic .title{margin-bottom:20px}.help-main-topic .help-image{margin:40px auto}.help-main-topic .single-post-additional{margin-bottom:20px}.help-main-topic .single-post-additional>*+*{border-left:none;margin-left:30px}.help-main-topic .single-post-additional>*{padding:20px 0}.user-raiting-choice{padding:35px 0;border-top:1px solid #e6ecf5;border-bottom:1px solid #e6ecf5;margin-top:40px;display:flex;align-items:center;font-size:12px}.user-raiting-choice b{margin-left:5px}.user-raiting-choice a{margin-left:15px;opacity:.8}.shop-product-item:hover .in-cart,.user-raiting-choice a:hover{opacity:1}.user-raiting-choice span{color:#515365;margin-left:auto;font-weight:700}@media (max-width:860px){.help-support-block .title{margin-bottom:20px}}@media (max-width:560px){.help-main-topic .single-post-additional>*{display:inline-block}.user-raiting-choice{display:block;padding:15px 0;margin-top:20px}.user-raiting-choice span{display:block;margin-top:15px}}@media (max-width:360px){.help-main-topic .single-post-additional>*{display:block}.help-main-topic .single-post-additional>*+*{margin-left:0}}.search-help-result-title{margin-bottom:100px}.search-help-result-title .count-result{color:#ff5e3a}.search-help-result-title .search-query{font-style:italic;color:#888da8}.search-help-result-list li{padding-bottom:50px;margin-bottom:50px;border-bottom:1px solid #e6ecf5}.search-help-result-list .title{margin-bottom:40px}.search-help-result-list .single-post-additional{margin-bottom:20px}.search-help-result-list .single-post-additional>*+*{border-left:none;margin-left:30px}.search-help-result-list .single-post-additional>*{padding:20px 0}.search-help-result-list .post__author img{width:26px;height:26px}.user-raiting{margin-top:30px;font-size:12px;color:#515365;font-weight:700}.user-raiting img{margin-right:20px}.page-404-content img{margin-bottom:70px}@media (max-width:860px){.search-help-result-title{margin-bottom:40px}.search-help-result-list li{padding-bottom:20px;margin-bottom:20px}}@media (max-width:768px){.page-404-content img{margin-bottom:30px}}@media (max-width:560px){.search-help-result-list .title{margin-bottom:20px}.search-help-result-list .single-post-additional>*{display:inline-block}}@media (max-width:360px){.search-help-result-list .single-post-additional>*{display:block}.search-help-result-list .single-post-additional>*+*{margin-left:0}}.shop-product-item{margin-bottom:30px}.shop-product-item .product-thumb{display:flex;background-color:#f2f4f8;margin-bottom:10px;margin-right:0;height:420px;width:auto;position:relative}.shop-product-item .product-content{display:flex;align-items:center}.shop-product-item .product-content .block-price{margin-left:auto}.shop-product-item .onsale{display:block;width:42px;height:42px;border-radius:100%;position:absolute;right:20px;top:20px;color:#fff;background-color:#ff5e3a;font-size:10px;font-weight:900;text-transform:uppercase;text-align:center;line-height:42px}.shop-product-item .product-content .title,.shop-product-item .product-price{font-size:16px;transition:opacity .3s ease}.shop-product-item .product-price{margin-right:0;font-weight:700}.shop-product-item .product-price.with-sale{color:#ff5e3a}.shop-product-item .product-price.with-sale del{color:#888da8;margin-right:7px}.shop-product-item .rait-stars{margin-bottom:10px}.shop-product-item:hover .product-price,.shop-product-item:hover .rait-stars{opacity:0}.shop-product-item.product-item-v2 .product-thumb{display:block;margin-bottom:30px;height:auto;padding:20px}.shop-product-item.product-item-v2 .product-thumb img{display:block;margin:10px auto 20px}.shop-product-item.product-item-v2 .product-thumb .btn{margin:0 auto;opacity:0}.shop-product-item.product-item-v2 .product-thumb .product-price,.shop-product-item.product-item-v2 .product-thumb .rait-stars,.shop-product-item:hover .product-thumb .btn{opacity:1}.shop-product-item.product-item-v2 .product-thumb .block-price,.shop-product-item.product-item-v2 .product-thumb .block-title{text-align:left}.product-category{font-size:10px;font-weight:700;margin-bottom:10px;color:#888da8;display:block}.block-price{position:relative}.block-price .in-cart{position:absolute;right:0;top:50%;transform:translateY(-50%);opacity:0;width:40px;height:40px;border-radius:5px;text-align:center;background-color:#38a9ff;transition:opacity .3s ease}.block-price .in-cart svg{fill:#fff;height:22px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.shop-product-detail .thumbs-wrap{display:flex;align-items:flex-start}.small-thumbs-wrap{margin-right:10px}.small-thumbs-wrap .small-thumb{display:flex;width:80px;height:80px;background-color:#f2f4f8}.small-thumbs-wrap .small-thumb img{margin:auto}.small-thumbs-wrap .small-thumb+.small-thumb{margin-top:10px}.shop-product-detail-thumb{height:560px;width:100%;display:flex;background-color:#f2f4f8}.shop-product-detail-thumb img{margin:auto}.shop-product-detail-content .btn,.shop-product-detail-content p{margin-bottom:50px}.shop-product-detail-content .main-content-wrap{display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.shop-product-detail-content .main-content-wrap .title{margin-bottom:20px}.shop-product-detail-content .product-category{font-size:12px;margin-bottom:20px}.shop-product-detail-content .rait-stars .star-icon{font-size:10px}.shop-product-detail-content .product-price{font-size:34px}.shop-product-detail-content .inputs-wrap{display:flex;margin-bottom:50px;align-items:center}.shop-product-detail-content .inputs-wrap>*+*{margin-left:20px;width:100%}.shop-product-detail-content .inputs-wrap .form-group{margin-bottom:0}.quantity{position:relative}.quantity .quantity-minus,.quantity .quantity-plus{position:absolute;right:15px;top:0;color:#515365;font-size:11px;height:50%;width:20px;line-height:27px}.quantity .quantity-minus{top:auto;bottom:0}.full-block,.overlay{position:absolute;top:0;left:0;right:0;bottom:0}.tags{font-size:12px;color:#515365;font-weight:700}.tags li{display:inline-block}.tags li:nth-child(2){margin-left:5px}.tags .tags-item{color:#888da8;font-weight:400}.tags .tags-item:hover{color:#ff5e3a}.article-number{font-size:12px;color:#515365;font-weight:700}.article-number span{color:#888da8;font-weight:400;margin-left:8px}.product-description .nav-tabs{border-bottom:none;justify-content:center;margin-bottom:80px}.product-description .nav-tabs .nav-link{font-weight:700;color:#888da8;font-size:14px}.product-description .nav-tabs .nav-link.active{color:#515365}.product-description .nav-tabs .nav-link.active .total-topic{background-color:#ff5e3a}.product-description .nav-tabs .nav-link .total-topic{width:19px;height:19px;line-height:19px;background-color:#9a9fbf;display:inline-block;color:#fff;margin-left:10px}.product-description .nav-tabs .nav-item.show .nav-link,.product-description .nav-tabs .nav-link.active,.product-description .nav-tabs .nav-link:focus,.product-description .nav-tabs .nav-link:hover{border-color:transparent}.comments__item-review:last-child,.user-description,.w-twitter li{border-bottom:1px solid #e6ecf5}.product-description .tab-pane>.title{margin-bottom:50px}.product-description .tab-pane p{margin-bottom:30px}.comments-title-wrap{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px}.comments-title-wrap .rait-stars .star-icon{font-size:10px}.comments__item-review{padding:50px 0;border-top:1px solid #e6ecf5}.comments__item-review:first-child{margin-top:40px}.comments__item-review .rait-stars{margin-bottom:20px}.comments__item-review .comment-content{margin-bottom:25px}.comments__item-review .comments__header-review{font-size:11px}.comments__item-review .comments__header-review .comments__author-review a{font-weight:700;color:#515365;font-style:normal}.c-primary,.comments__item-review .comments__header-review .comments__author-review a:hover{color:#ff5e3a}@media (max-width:1024px){.shop-product-detail-thumb{height:auto}.shop-product-detail .thumbs-wrap{margin-bottom:40px}}@media (max-width:900px){.product-description .nav-tabs{margin-bottom:40px}.product-description .tab-pane>.title{margin-bottom:30px}.product-description .tab-pane p{margin-bottom:20px}.comments__item-review{padding:30px 0}.comments__item-review:first-child{margin-top:20px}}@media (max-width:768px){.product-description .nav-item{width:auto}}@media (max-width:460px){.small-thumbs-wrap .small-thumb{width:50px;height:50px}.shop-product-detail-content .product-price{margin-right:0;font-size:22px}}.ovh{overflow:hidden}.f-left{float:left}.f-right{float:right}.f-none{float:none}.align-center{text-align:center}.align-left{text-align:left}.align-right{text-align:right}.all-users,.playlist-popup-table .composition-time,.playlist-popup-table .duration,.playlist-popup-table .release-year,.playlist-popup-table .released,.playlist-popup-table .remove,.playlist-popup-table .spotify,.social-item,.w-action,.w-wethear{text-align:center}.align-right .btn{margin-left:20px}.align-right .w-search{display:inline-block}.overlay{background:rgba(43,45,59,.2);transition:all .3s ease;opacity:0}.overlay.overlay-dark{background:rgba(43,45,59,.8)}.background-contain,.crumina-video-background,.w-birthday-alert,.w-wethear{background-repeat:no-repeat}.table{display:table}.inline-items>*{display:inline-block}.table-cell{display:table-cell;float:none}@media (max-width:640px){.table-cell{display:block;float:left}}.text-t-none{text-transform:none}.fc th,.play-gif,.w-action .content span{text-transform:uppercase}.no-padding{padding:0}.padding-r-0{padding-right:0}.padding-l-0{padding-left:0}.mt50{margin-top:50px}.no-margin{margin:0}.negative-margin-top150{margin-top:-150px}@media (max-width:1024px){.negative-margin-top150{margin-top:0}}.negative-margin-top50{margin-top:-50px}.negative-margin-right150{margin-right:-150px}@media (max-width:768px){.negative-margin-right150{margin-right:0}}.mobile-margin-25{margin:0 25px}.presentation-margin{margin:40px 0 20px}.full-width{width:100%}.full-height{height:100%}.display-flex{display:flex;align-items:center}.flip-icon,.inline-block{display:inline-block}.display-flex.content-center{justify-content:center}.display-flex.content-around{justify-content:space-around}.padding40{padding:40px}.padding80{padding:80px}.bg-violet{background-color:#7442ce}.bg-primary{background-color:#ff5e3a}.bg-secondary{background-color:#3f4257}.bg-purple{background-color:#7c5ac2}.bg-blue{background-color:#38a9ff}.bg-bluelight{background-color:#00b7ff}.bg-breez{background-color:#08ddc1}.bg-breez-light{background-color:#2aebcb}.bg-grey{background-color:#515365}.bg-greylight{background-color:#888da8}.bg-greylighter{background-color:#9a9fbf}.bg-orange{background-color:#ff763a}.bg-yellow{background-color:#ffdc1b}.bg-yellowlight{background-color:#ffffe6}.bg-smoke{background-color:#e6ecf5}.bg-smokelight{background-color:#fafbfd}.bg-green{background-color:#1ed760}.bg-greenlight{background-color:#ecffe2}.bg-facebook{background-color:#2f5b9d}.bg-twitter{background-color:#38bff1}.bg-dribbble{background-color:#f74881}.bg-google{background-color:#ea4235}.bg-white{background-color:#fff}.bg-black{background-color:#000}.c-white{color:#fff}.c-grey{color:#888da8}.c-orange{color:#ff763a}.c-secondary{color:#3f4257}.c-yellow{color:#ffdc1b}.c-purple{color:#7c5ac2}.c-green{color:#1ed760;fill:#1ed760}.c-facebook{color:#2f5b9d}.c-twitter{color:#38bff1}.c-dribbble{color:#f74881}.c-rss{color:#fab819}.c-spotify{color:#1ed760}.bold{font-weight:800}.weight-normal{font-weight:400}.weight-light{font-weight:300}.custom-color *{color:inherit!important;fill:inherit}.user-description .title,.w-personal-info li .title{color:#515365;font-weight:500}.flip-button{box-sizing:content-box;cursor:pointer;outline:0;padding:0;position:relative;transform:scale(1) rotate(1turn);transition:transform .15s cubic-bezier(.4,0,1,1)}.flip-icon{width:24px;height:24px;position:relative}.flip-icon>*{left:0;position:absolute;top:-3px;transition:all .2s cubic-bezier(.4,0,.2,1)}.flip-button.active .flip-icon svg:first-of-type,.flip-icon svg:last-of-type{opacity:0;transform:rotate(225deg)}.flip-button.active .flip-icon svg:last-of-type{opacity:1;visibility:visible;transform:rotate(1turn)}.medium-padding80{padding:80px 0}@media (max-width:1024px){.medium-padding80{padding:45px 0}}@media (max-width:800px){.medium-padding80{padding:35px 0}}.medium-padding100{padding:100px 0}@media (max-width:1024px){.medium-padding100{padding:50px 0}}@media (max-width:800px){.medium-padding100{padding:35px 0}}.medium-padding120{padding:120px 0}@media (max-width:1024px){.medium-padding120{padding:50px 0}}@media (max-width:800px){.medium-padding120{padding:35px 0}}.medium-padding180{padding:180px 0}@media (max-width:1024px){.medium-padding180{padding:60px 0}}@media (max-width:800px){.medium-padding180{padding:40px 0}}.pb100{padding-bottom:100px}.pt80{padding-top:80px}@media (max-width:1024px){.pb100{padding-bottom:50px}.pt80{padding-top:45px}}@media (max-width:800px){.pb100{padding-bottom:35px}.pt80{padding-top:35px}}.pt100{padding-top:100px}.pb120{padding-bottom:120px}@media (max-width:1024px){.pt100{padding-top:50px}.pb120{padding-bottom:50px}}@media (max-width:800px){.pt100{padding-top:35px}.pb120{padding-bottom:35px}}.pt120{padding-top:120px}.pb160{padding-bottom:160px}@media (max-width:1024px){.pt120{padding-top:50px}.pb160{padding-bottom:60px}}@media (max-width:800px){.pt120{padding-top:35px}.pb160{padding-bottom:35px}}.pt160{padding-top:160px}.pb80{padding-bottom:80px}@media (max-width:1024px){.pt160{padding-top:60px}.pb80{padding-bottom:45px}}@media (max-width:800px){.pt160{padding-top:35px}.pb80{padding-bottom:35px}}.pb60{padding-bottom:60px}.pt60{padding-top:60px}@media (max-width:1024px){.pb60{padding-bottom:40px}.pt60{padding-top:40px}}@media (max-width:800px){.pb60{padding-bottom:20px}.pt60{padding-top:20px}}.pb30{padding-bottom:30px}.pt30{padding-top:30px}.mt60{margin-top:60px}.mb30{margin-bottom:30px}.mb60{margin-bottom:60px}@media (max-width:800px){.mt60{margin-top:35px}.mb60{margin-bottom:35px}}.half-height-bg{position:absolute;height:50%;left:0;right:0;bottom:0}.withripple{position:relative}.ripple-container{top:0;left:0;z-index:1;width:100%;height:100%;overflow:hidden;border-radius:inherit}.ripple,.ripple-container{position:absolute;pointer-events:none}.ripple{width:20px;height:20px;margin-left:-10px;margin-top:-10px;border-radius:100%;background-color:#000;background-color:rgba(0,0,0,.05);transform:scale(1);transform-origin:50%;opacity:0}.ripple.ripple-on{transition:opacity .15s ease-in 0s,transform .5s cubic-bezier(.4,0,.2,1) .1s;opacity:.1}.ripple.ripple-out{transition:opacity .1s linear 0s!important;opacity:0}.half-width{width:50%}.col-3-width{width:33.33%}.col-4-width{width:25%}.body-bg-white{background-color:#fff}.bg-body{background-color:#edf2f6}.background-contain{background-size:contain}.background-cover,.w-birthday-alert,.w-wethear{background-size:cover}@media (max-width:1200px){.quantity .quantity-minus,.quantity .quantity-plus{line-height:22px}.col-4-width{width:33%}}@media (max-width:840px){.col-3-width,.col-4-width{width:50%}.half-width{width:100%}}@media (max-width:480px){.centered-on-mobile{text-align:center}.col-3-width,.col-4-width{width:100%}}.crumina-video-background{position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;background-size:cover;background-color:transparent;background-position:50% 50%;background-image:none}.crumina-video-background:after{content:"";display:block;width:100%;height:100%;position:absolute;background-color:rgba(255,94,58,.6)}.crumina-video-background .video-background{min-width:100%;min-height:100%;margin:auto;position:absolute;z-index:-1;top:50%;left:50%;transform:translate(-50%,-50%);visibility:visible;opacity:1}.searches-item .friend-count,.w-personal-info,.w-search .form-group{margin-bottom:0}.searches-item .notification-icon{float:right}.searches-item .country{font-size:12px}.searches-item .names-people-likes a{display:block}.searches-item .post-additional-info{display:flex;align-items:center}.searches-item .post-additional-info>:last-child{margin-left:auto}.searches-item .friend-count-item{margin-right:50px}.searches-item .friend-count-item:last-child{margin-right:0}.searches-item .friend-count-item .h6{margin-bottom:0;line-height:1;font-size:12px}.searches-item .friend-count-item .title{font-size:12px;line-height:1}.user-description{font-size:13px;padding:25px 0;border-top:1px solid #e6ecf5}.w-search{width:340px}.w-search input{padding:13px 15px;font-size:12px}.w-search svg{height:15px;width:15px}.w-personal-info li{padding:15px 0}.w-personal-info li .title{margin-right:30px;float:left;width:30%}.w-personal-info li .text{color:#888da8;display:block;overflow:hidden}.w-personal-info li .date{display:block;font-size:11px;color:#bdc0ce;font-weight:500;margin-bottom:15px}.w-personal-info a:hover{color:#ff5e3a}.w-personal-info.item-block .title{margin-right:0;float:none;width:auto}.widget+.widget{margin-top:35px}.widget p{font-size:13px}.social-item{font-size:11px;color:#fff;padding:7px 15px;display:block;border-radius:3px;margin-bottom:15px}.social-item i,.social-item svg{font-size:12px;margin-right:10px}.social-item:hover{color:#fff;opacity:.9}.w-socials .title{margin-bottom:20px}.w-select{padding:0 20px 0 0}.w-select .bootstrap-select>.dropdown-toggle{padding:10px 15px;font-size:12px;height:40px;margin-bottom:0}.w-select .form-group{margin-bottom:0;min-width:180px}.w-select .title{float:left;line-height:40px;margin-right:15px}.w-contacts #map{width:100%;height:200px;margin-bottom:15px}.w-contacts ul{padding:0 25px}.w-contacts ul li{padding:15px 0}.w-contacts ul .title{margin-right:0;float:none;width:auto;color:#515365;font-weight:500}.w-contacts ul .text{color:#888da8;display:block;overflow:hidden}#map{width:100%}.w-faved-page{overflow:hidden;margin:0 0 -8px -15px}.w-faved-page li{margin:0 0 8px 8px;float:left;width:34px;height:34px;border-radius:100%;overflow:hidden}.all-users{line-height:34px;color:#fff;background-color:#ff5e3a;font-size:10px;font-weight:800}.all-users a{color:inherit;display:block}.w-twitter li{padding:25px}.w-twitter li:last-child{border-bottom:none}.w-twitter .author a{line-height:1}.w-twitter .author-name{display:block;font-weight:700;color:#515365}.w-twitter .group{font-size:11px;color:#888da8}.w-twitter .verified{width:10px;height:10px;border-radius:100%;background-color:#6ec4f7;color:#fff;font-size:5px;display:inline-block;text-align:center;line-height:10px;position:relative;top:-2px;margin-left:5px}.w-twitter .author-folder{margin-bottom:12px}.w-twitter .author-folder>*{display:inline-block;vertical-align:middle}.w-twitter .author-folder img{margin-right:8px}.w-twitter .link-post{color:#38bff1}.w-twitter .post__date{font-size:12px}.w-last-photo{margin-bottom:0;overflow:hidden}.w-last-photo li{width:33.33%;float:left;padding:0 4px 4px 0;overflow:hidden}.w-last-photo img{width:100%;border-radius:3px}.w-playlist li{padding:13px 10px;transition:all .3s ease;cursor:pointer}.w-playlist li:first-child{padding-top:25px}.w-playlist li:last-child{padding-bottom:25px}.w-playlist li>*{display:inline-block}.w-playlist li:hover{background-color:#fafbfd}.w-playlist li:hover .overlay,.w-playlist li:hover .play-icon{opacity:1}.w-playlist li:hover time{opacity:0}.w-playlist li:hover .more{opacity:1}.w-playlist .play-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;color:#fff;width:14px;height:16px;opacity:0}.w-playlist .play-icon svg{width:16px;height:16px}.w-playlist .composition-time{position:relative;float:right;font-size:11px;font-weight:500}.w-playlist time{transition:all .3s ease;margin-right:10px}.w-playlist .more{position:absolute;left:0;opacity:0;top:0}.w-playlist .more-dropdown li{padding:0}.w-playlist .more-dropdown li:hover a{color:#1ed760}.w-playlist.without-cover .overlay,.w-playlist.without-cover .playlist-thumb img{display:none}.w-playlist.without-cover .play-icon{opacity:1;fill:#515365}.w-playlist.without-cover li:hover .play-icon{fill:#1ed760}.playlist-thumb{position:relative;width:34px;height:34px;border-radius:3px;overflow:hidden;margin-right:12px}.composition-name{display:block;font-size:12px;font-weight:500;color:#515365}.composition-author{display:block;font-size:11px;color:#888da8}.playlist-popup-table{width:100%}.playlist-popup-table td{padding:25px 12px}.playlist-popup-table td:first-child{padding-left:30px}.playlist-popup-table td:last-child{padding-right:30px}.playlist-popup-table thead{background-color:rgba(43,45,59,.6)}.playlist-popup-table thead th{font-size:9px;font-weight:700;padding:12px;color:#9a9fbf}.playlist-popup-table thead th:first-child{padding-left:25px}.playlist-popup-table thead th:last-child{padding-right:25px}.playlist-popup-table tbody tr:nth-child(odd){background-color:rgba(43,45,59,.8)}.playlist-popup-table tbody tr:nth-child(2n){background-color:rgba(43,45,59,.6)}.playlist-popup-table tbody tr:hover .play-icon{fill:#fff}.playlist-popup-table .play-icon,.playlist-popup-table .remove-icon{fill:#9a9fbf}.playlist-popup-table .play-icon svg{width:23px;height:23px}.playlist-popup-table .playlist-thumb{margin-right:0}.playlist-popup-table .composition-name{color:#fff;font-size:14px}.playlist-popup-table .composition-author{font-size:12px}.playlist-popup-table .album-composition,.playlist-popup-table .composition-time,.playlist-popup-table .release-year{font-weight:500;font-size:12px;color:#fff}.playlist-popup-table .composition-icon{color:#1ed760;font-size:22px}.playlist-popup-table .remove-icon svg{width:20px;height:20px}.playlist-popup-table .remove-icon:hover{fill:#ff5e3a}.w-friend-pages-added li>*{vertical-align:top}.w-friend-pages-added li:hover{background-color:transparent}.w-friend-pages-added .author-thumb{height:34px;width:34px}.page-description .icon svg,.w-create-fav-page .olymp-star-icon,.w-friend-pages-added .notification-icon svg{width:20px;height:20px}.w-friend-pages-added .notification-event{padding-left:8px;max-width:70%}.w-friend-pages-added .notification-friend{font-size:13px}.w-friend-pages-added .chat-message-item{font-size:11px}@media (max-width:768px){.w-friend-pages-added.notification-list.friend-requests .notification-icon{float:right}}.w-create-fav-page{padding:25px;background-color:#ff5e3a}.w-create-fav-page svg{fill:#fff}.w-create-fav-page .more{float:right;color:#ffbfb0;fill:#ffbfb0}.w-create-fav-page .icons-block{margin-bottom:80px}.w-create-fav-page .content{color:#fff}.w-create-fav-page .content span{font-size:10px}.w-create-fav-page .content .title{line-height:1.1;font-weight:400;color:inherit;margin-bottom:20px}.w-create-fav-page .btn{margin-bottom:0}.page-description{border:1px solid #e6ecf5;background-color:#fff;margin-bottom:25px;border-radius:5px;overflow:hidden}.page-description .icon{padding:15px 18px;fill:#fff;background-color:#9a9fbf;border-right:1px solid #e6ecf5;display:inline-block;vertical-align:middle;margin-right:25px}.page-description span{vertical-align:middle}@media (max-width:480px){.page-description{display:flex;align-items:center}}.w-birthday-alert{background-image:url(https://assets.dallashanuman.net/images/common/bg-birthdays.jpg);padding:25px}.w-birthday-alert .more{float:right;opacity:.7;color:#fff;fill:#fff}.w-birthday-alert .icons-block{margin-bottom:35px;fill:#fff;color:#fff}.w-birthday-alert .olymp-cupcake-icon{width:24px;height:20px}.w-birthday-alert .author-thumb img{width:28px;height:28px;border:2px solid #fff;margin-bottom:12px}.w-birthday-alert .content{color:#fff}.w-birthday-alert .content span{font-size:10px;margin-bottom:4px;display:block}.w-birthday-alert .content .title{line-height:1.3;font-weight:400;color:inherit;margin-bottom:20px;font-size:24px;display:block}.w-birthday-alert .content p{font-size:12px}.author-thumb{display:inline-block;position:relative}.author-thumb img{border-radius:100%;overflow:hidden;max-width:unset}.author-thumb .icon-status{position:absolute;margin-right:0;top:0;left:0;border:1px solid #3f4257;width:8px;height:8px}.w-action{background-image:url(https://assets.dallashanuman.net/images/landing-bg.jpg);padding:50px 45px 40px;color:#fff;border-radius:5px}.w-action i,.w-action img{margin-bottom:15px;font-size:35px}.w-action .content span{font-size:10px;margin-bottom:25px;display:block}.w-action .content .title{font-weight:400;color:inherit;margin-bottom:15px;font-size:24px}.w-action .btn{margin-bottom:0}.w-activity-feed .author-thumb{height:48px;width:48px;float:left}.w-activity-feed .author-thumb img{height:48px;width:48px}.w-activity-feed .notification-event,.w-activity-feed .notification-friend{font-size:13px}.w-activity-feed .notification-event{max-width:85%}.w-activity-feed li>*{vertical-align:top}.w-wethear{padding:25px;position:relative;color:#fff;background-color:#38a9ff}.w-wethear .olymp-weather-partly-sunny-icon{width:64px;height:65px}.w-wethear .weekly-forecast{margin-right:-25px;margin-left:-25px;position:relative;padding:0 20px}.w-wethear .weekly-forecast li{display:inline-block;vertical-align:top;padding:15px 3px;text-transform:uppercase;font-size:10px;font-weight:700}.w-wethear .weekly-forecast li>*{margin-bottom:8px}.w-wethear .weekly-forecast li>:last-child{margin-bottom:0}.w-wethear .weekly-forecast li .olymp-weather-partly-sunny-icon,.w-wethear .weekly-forecast li svg{height:22px;width:22px}.w-wethear .weekly-forecast:before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#fff;opacity:.1}.play-gif,.play-video{background-color:rgba(255,94,58,.7);z-index:5;text-align:center;outline:0}.w-wethear .more{position:absolute;right:25px;top:20px;opacity:.8;color:#fff;fill:#fff}.w-last-video li:hover .overlay,.w-last-video li:hover:after{opacity:1}.w-wethear .temperature-sensor{font-size:60px;line-height:1}.w-wethear>*{margin-bottom:25px}.w-wethear>:last-child{margin-bottom:0}.w-wethear .max-min-temperature{margin-right:20px}.w-wethear .max-min-temperature span{display:block}.w-wethear svg{fill:#fff}.w-wethear .climate{font-size:18px}.w-wethear .wethear-now{margin-top:10px}.w-wethear .wethear-now-description span{font-size:11px}.w-wethear .wethear-now-description span>span{font-weight:500}.w-wethear .wethear-now-description span+span{margin-left:15px}.day-wethear-item .wethear-now span+span,.wethear-content .wethear-now span+span{margin-left:12px}.w-wethear .date{font-weight:400;color:#fff;margin-bottom:0}.day-wethear-item .wethear-now,.wethear-content .wethear-now-description span{font-weight:700}.swiper-slide-weather{border-bottom:1px solid #e6ecf5}.day-wethear-item{float:left;padding:25px 0 20px;border-right:1px solid #e6ecf5;text-align:center;width:16.5%}.day-wethear-item:last-child{border-right:none}.day-wethear-item .title{font-size:12px;font-weight:700;color:#515365;margin-bottom:40px}.day-wethear-item .icon{fill:#38a9ff;margin-bottom:30px;min-height:54px;width:55px}.day-wethear-item .temperature-sensor{font-size:18px;color:#515365;margin-bottom:10px}.day-wethear-item .wethear-now span{font-size:11px;color:#c5c8d8}.day-wethear-item .wethear-now .high{color:#888da8}.wethear-content{color:#fff;text-align:center}.wethear-content .icon{fill:#fff;margin-bottom:20px}.wethear-content .temperature-sensor{font-size:84px;margin-bottom:10px;line-height:1}.wethear-content .wethear-now{margin-bottom:15px}.wethear-content .wethear-now span{font-size:13px}.wethear-content .climate{font-size:24px;margin-bottom:15px}.wethear-content .wethear-now-description{font-size:12px}.wethear-content .wethear-now-description>*{display:inline-block;padding:0 25px}.wethear-content .wethear-now-description .icon{margin-bottom:10px}.main-header-weather{padding:20px 30px 30px}.main-header-weather .img-bottom{position:absolute;bottom:0;left:50%;transform:translate(-50%);margin-bottom:0}.main-header-weather .date-and-place{position:absolute;top:40px;left:30px;color:#fff}.main-header-weather .date{font-size:16px}.main-header-weather .place{font-size:11px}.main-header-weather .wethear-update{position:absolute;top:40px;right:30px;font-size:10px;color:#fff;fill:#fff}.main-header-weather .wethear-update svg{margin-left:10px;width:12px;height:13px}.main-header-weather .olymp-weather-partly-sunny-icon{width:64px;height:65px}.main-header-weather .olymp-weather-rain-drops-icon,.main-header-weather .olymp-weather-thermometer-icon,.main-header-weather .olymp-weather-wind-icon-header{width:47px;height:34px}@media (max-width:1400px){.w-select .form-group{min-width:unset}.w-wethear .weekly-forecast li{padding:15px 1px}}@media (max-width:540px){.day-wethear-item{width:33%}}@media (max-width:480px){.wethear-content{margin-top:100px}}@media (max-width:360px){.day-wethear-item{width:49%}.wethear-content .wethear-now-description>*{padding:0 5px}.main-header-weather .date-and-place{position:relative;top:auto;left:auto;text-align:center;margin-bottom:20px}.main-header-weather .wethear-update{position:relative;top:auto;right:auto;text-align:center}.wethear-content{margin-top:20px}}.w-last-video{margin-bottom:0}.w-last-video li{position:relative;padding-bottom:20px;border-radius:5px;overflow:hidden;display:inline-block}.w-last-video li img{max-width:100%;margin:0 auto;display:block}.w-last-video li:last-child{margin-bottom:0}.w-last-video li:hover .video-content{opacity:1;bottom:12px}.w-last-video li:hover .play-video{margin-top:-20px}.w-last-video .video-content,.w-last-video li:after{opacity:0;position:absolute;transition:all .3s ease}.w-last-video li:after{content:"";display:block;top:0;left:0;width:100%;height:100%;box-shadow:inset 0 -120px 55px -30px rgba(0,0,0,.5)}.w-last-video time{font-size:10px}.w-last-video .video-content{bottom:-20px;left:12px;color:#fff;z-index:5}.w-last-video .title{font-size:12px;font-weight:500;line-height:1}.play-video{width:64px;height:64px;line-height:68px;border:4px solid #fff;border-radius:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:all .3s ease}.play-video svg{fill:#fff;width:18px;height:22px;margin-right:-2px}.play-video--small{width:52px;height:52px;line-height:58px}.play-video--mobile{width:42px;height:42px;line-height:50px;border-width:2px}.play-gif{width:64px;height:64px;line-height:62px;position:absolute;border:2px dashed #fff;font-size:20px;font-weight:700;color:#fff;border-radius:100%;transition:all .3s ease;cursor:pointer;text-decoration:none}.w-about .logo,.w-badges li,.w-build-fav,.w-list a{position:relative}.bootstrap-select.btn-group.disabled,.bootstrap-select.btn-group .dropdown-menu li.disabled a,.bootstrap-select.btn-group>.disabled{cursor:not-allowed}.w-pool{margin-bottom:40px}.w-pool .skills-item-info{margin-bottom:0}.w-pool .radio{color:#515365}.w-pool .radio label{padding-left:30px}.w-pool .radio label span{left:0}.w-pool .counter-friends{margin:10px 0}.w-badges{display:inline-block;margin:0 0 -20px -18px}.w-badges li{margin:0 0 20px 15px;float:left;width:38px;height:38px;border-radius:100%}.w-blog-posts{margin-bottom:0}.w-blog-posts .post p{margin:10px 0 15px}.w-blog-posts .post__date{font-size:12px}.w-blog-posts li:last-child .post{border-bottom:none}.w-about .logo{color:inherit;overflow:hidden;margin-bottom:30px;padding:0}.w-about ul,.w-list ul{margin-bottom:0}.w-about img{margin-right:17px}.w-about .logo-title{color:#515365}.w-list a{color:#ccc;padding:8px 0;display:block;font-weight:500}.w-list a:hover{color:#ff5e3a}ul.w-featured-topics{list-style:none;padding:0}.w-featured-topics li+li{margin-top:20px}.w-featured-topics .icon{float:left;margin-right:10px;font-size:15px;color:#ffdc1b}.w-featured-topics .content{overflow:hidden}.w-featured-topics .title{font-size:13px;display:block;margin-bottom:5px}.w-featured-topics .title:hover{color:#ff5e3a}.w-featured-topics time{font-size:11px;margin-bottom:5px;display:block}.w-featured-topics .forums{font-size:11px;color:#ff5e3a}.w-build-fav{padding:25px;color:#fff;background:url(https://assets.dallashanuman.net/images/common/bg-birthdays.jpg) no-repeat;background-size:cover;border-radius:5px}.w-build-fav .more{position:absolute;right:25px;top:20px}.w-build-fav .widget-thumb{margin:20px auto 30px;text-align:center}.w-build-fav .content *>span{font-size:10px;margin-bottom:4px;display:block}.w-build-fav .content .title{line-height:1.3;font-weight:400;color:inherit;margin-bottom:20px;font-size:24px;display:block}.w-build-fav .content p{font-size:12px}.w-build-fav .content p a{color:#fff}\n/*!\n * Bootstrap-select v1.11.0 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2016 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */select.bs-select-hidden,select.selectpicker{display:none!important}.bootstrap-select{width:220px\\9}.bootstrap-select.show .dropdown-menu{display:block}.bootstrap-select li.hidden{display:none!important}.bootstrap-select li.selected a{background:#ff5e3a;color:#fff}.bootstrap-select li.selected a:hover{opacity:.9}.bootstrap-select>.dropdown-toggle{width:100%;z-index:1;background-color:transparent;border:1px solid #e6ecf5;border-radius:.25rem;padding:1rem;margin:0 0 3px;float:none;line-height:1.47}.bootstrap-select>.dropdown-toggle.bs-placeholder,.bootstrap-select>.dropdown-toggle.bs-placeholder:active,.bootstrap-select>.dropdown-toggle.bs-placeholder:focus,.bootstrap-select>.dropdown-toggle.bs-placeholder:hover{color:#464a4c}.bootstrap-select>select{position:absolute!important;bottom:0;left:50%;display:block!important;width:.5px!important;height:100%!important;padding:0!important;opacity:0!important;border:none}.bootstrap-select>select.mobile-device{top:0;left:0;display:block!important;width:100%!important;z-index:2}.error .bootstrap-select .dropdown-toggle,.has-error .bootstrap-select .dropdown-toggle{border-color:#b94a48}.bootstrap-select.fit-width{width:auto!important}.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn){width:220px}.bootstrap-select.btn-group[class*=col-] .dropdown-toggle,.bootstrap-select.form-control:not([class*=col-]),.form-inline .bootstrap-select.btn-group .form-control{width:100%}.bootstrap-select .dropdown-toggle:focus{outline:0}.bootstrap-select.btn-group.disabled:focus,.bootstrap-select.btn-group>.disabled:focus,.mfp-wrap{outline:0!important}.bootstrap-select.form-control{margin-bottom:0;padding:0;border:none}.bootstrap-select.form-control.input-group-btn{z-index:auto}.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child)>.btn{border-radius:0}.bootstrap-select.btn-group:not(.input-group-btn),.bootstrap-select.btn-group[class*=col-]{float:none;display:inline-block;margin-left:0}.bootstrap-select.btn-group.dropdown-menu-right,.bootstrap-select.btn-group[class*=col-].dropdown-menu-right,.row .bootstrap-select.btn-group[class*=col-].dropdown-menu-right{float:right}.form-group .bootstrap-select.btn-group,.form-horizontal .bootstrap-select.btn-group,.form-inline .bootstrap-select.btn-group{margin-bottom:0;margin-left:1px}.form-group-lg .bootstrap-select.btn-group.form-control,.form-group-sm .bootstrap-select.btn-group.form-control{padding:0}.bootstrap-select.btn-group.bs-container{position:absolute;height:0!important;padding:0!important}.bootstrap-select.btn-group.bs-container .dropdown-menu{z-index:1060}.bootstrap-select.btn-group .dropdown-toggle .filter-option{display:inline-block;overflow:hidden;width:100%;text-align:left;color:#515365;font-weight:400}.bootstrap-select.btn-group .dropdown-toggle .caret{position:absolute;top:50%;right:12px;margin-top:-2px;vertical-align:middle}.bootstrap-select.btn-group .dropdown-menu{margin-left:0;min-width:100%;padding:0;box-sizing:border-box}.bootstrap-select.btn-group .dropdown-menu.inner{position:static;float:none;border:0;padding:0;margin:0;border-radius:0;box-shadow:none}.bootstrap-select.btn-group .dropdown-menu li{position:relative}.bootstrap-select.btn-group .dropdown-menu li.active small{color:#fff}.bootstrap-select.btn-group .dropdown-menu li a{padding:10px 1.5rem;color:#888da8;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bootstrap-select.btn-group .dropdown-menu li.selected a{color:#fff}.bootstrap-select.btn-group .dropdown-menu li a.opt{position:relative;padding-left:2.25em}.bootstrap-select.btn-group .dropdown-menu li a span.check-mark{display:none}.bootstrap-select.btn-group .dropdown-menu li a span.text{display:inline-block}.bootstrap-select.btn-group .dropdown-menu li small{padding-left:.5em}.bootstrap-select.btn-group .dropdown-menu .notify{position:absolute;bottom:5px;width:96%;margin:0 2%;min-height:26px;padding:3px 5px;background:#f5f5f5;border:1px solid #e3e3e3;box-shadow:inset 0 1px 1px rgba(0,0,0,.05);pointer-events:none;opacity:.9;box-sizing:border-box}.fc-bgevent,.fc-highlight{opacity:.3;filter:alpha(opacity=30)}.bootstrap-select.btn-group .no-results{padding:3px;background:#f5f5f5;margin:0 5px;white-space:nowrap}.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option{position:static}.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret{position:static;top:auto;margin-top:-1px}.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark{position:absolute;display:inline-block;right:15px;top:12px}.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text{margin-right:34px}.bootstrap-select.show-menu-arrow.open>.dropdown-toggle{z-index:1061}.bootstrap-select.show-menu-arrow .dropdown-toggle:before{content:"";border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid hsla(0,0%,80%,.2);position:absolute;bottom:-4px;left:9px;display:none}.bootstrap-select.show-menu-arrow .dropdown-toggle:after{content:"";border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;position:absolute;bottom:-4px;left:10px;display:none}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before{bottom:auto;top:-3px;border-top:7px solid hsla(0,0%,80%,.2);border-bottom:0}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after{bottom:auto;top:-3px;border-top:6px solid #fff;border-bottom:0}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before{right:12px;left:auto}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after{right:13px;left:auto}.bootstrap-select.show-menu-arrow.open>.dropdown-toggle:after,.bootstrap-select.show-menu-arrow.open>.dropdown-toggle:before{display:block}.bs-actionsbox,.bs-donebutton,.bs-searchbox{padding:4px 8px}.bs-actionsbox{width:100%;box-sizing:border-box}.bs-actionsbox .btn-group button{width:50%}.bs-donebutton{float:left;width:100%;box-sizing:border-box}.bs-donebutton .btn-group button{width:100%}.bs-searchbox+.bs-actionsbox{padding:0 8px 4px}.bs-searchbox .form-control{margin-bottom:0;width:100%;float:none}.show>.btn-secondary.dropdown-toggle{background-color:transparent;border-color:#e6ecf5}.dropdown-toggle:after{border-top-color:#888da8;right:20px;top:-2px;position:relative}.form-group.label-floating .bootstrap-select.btn-group .dropdown-toggle .filter-option{top:5px;position:relative}.form-group.label-floating.is-select label.control-label{top:8px;font-size:11px;line-height:1.42857;z-index:9}.bootstrap-select.style-2>.dropdown-toggle{border:none;border-radius:0;padding:10px 15px 10px 40px;line-height:1;margin-bottom:7px}.bootstrap-select.style-2>.dropdown-toggle:after{display:none}.bootstrap-select.style-2 .dropdown-menu{margin-top:0;border:1px solid #e6ecf5;box-shadow:0 0 34px 0 rgba(63,66,87,.1);overflow:visible!important}.bootstrap-select.style-2 .bs-searchbox{padding:0}.glyphicon-ok:before{content:"\\f00c";font-family:"Font Awesome 5 Free";font-weight:900;color:#515365}.bootstrap-select.style-2 li.selected a{background-color:transparent;color:#515365}.bootstrap-select.style-2 .form-control{border:none;border-bottom:1px solid #e6ecf5;border-radius:0}.bootstrap-select.without-border.form-control{width:170px;float:right;margin-top:4px}.daterangepicker.single .calendar,.daterangepicker.single .ranges,.ranges{float:none}.bootstrap-select.without-border .dropdown-toggle:after{border-top:.4em solid #888da8;border-right:.4em solid transparent;border-left:.4em solid transparent}.bootstrap-select.without-border>.dropdown-toggle{border:none;padding:0;margin-bottom:0;font-size:9px;line-height:1}.bootstrap-select.without-border.btn-group .dropdown-toggle .filter-option{font-weight:700;text-align:right;padding-right:30px}.bootstrap-select.without-border .form-group{margin-bottom:0}.daterangepicker{position:absolute;color:inherit;background-color:#fff;border-radius:4px;padding:4px;margin-top:1px;top:100px;left:20px}.daterangepicker:after,.daterangepicker:before{position:absolute;display:inline-block;content:""}.daterangepicker:before{top:-7px;border-right:7px solid transparent;border-left:7px solid transparent;border-bottom:7px solid #ccc}.daterangepicker:after{top:-6px;border-right:6px solid transparent;border-bottom:6px solid #fff;border-left:6px solid transparent}.daterangepicker.opensleft:before{right:9px}.daterangepicker.opensleft:after{right:10px}.daterangepicker.openscenter:after,.daterangepicker.openscenter:before{left:0;right:0;width:0;margin-left:auto;margin-right:auto}.daterangepicker.opensright:before{left:9px}.daterangepicker.opensright:after{left:10px}.daterangepicker.dropup{margin-top:-5px}.daterangepicker.dropup:before{top:auto;bottom:-7px;border-bottom:initial;border-top:7px solid #ccc}.daterangepicker.dropup:after{top:auto;bottom:-6px;border-bottom:initial;border-top:6px solid #fff}.fc-bg,.fc-row .fc-bgevent-skeleton,.fc-row .fc-highlight-skeleton{bottom:0}.daterangepicker.dropdown-menu{max-width:none;z-index:3001}.daterangepicker.show-calendar .calendar{display:block}.daterangepicker .calendar{display:none;max-width:270px;margin:4px}.daterangepicker .calendar.single .calendar-table{border:none}.daterangepicker .calendar td,.daterangepicker .calendar th{white-space:nowrap;text-align:center}.daterangepicker .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background-color:#fff}.daterangepicker table{width:100%;margin:0}.daterangepicker td,.daterangepicker th{text-align:center;border-radius:4px;border:1px solid transparent;white-space:nowrap;cursor:pointer}.daterangepicker td.available:hover,.daterangepicker th.available:hover{background-color:#eee;border-color:transparent;color:inherit}.daterangepicker td.week,.daterangepicker th.week{font-size:80%;color:#ccc}.daterangepicker td.off,.daterangepicker td.off.end-date,.daterangepicker td.off.in-range,.daterangepicker td.off.start-date{background-color:#fff;border-color:transparent;color:#999}.daterangepicker td.in-range{background-color:#ebf4f8;border-color:transparent;color:#000;border-radius:0}.daterangepicker td.start-date{border-radius:4px 0 0 4px}.daterangepicker td.end-date{border-radius:0 4px 4px 0}.daterangepicker th.month{width:auto}.daterangepicker option.disabled,.daterangepicker td.disabled{color:#999;cursor:not-allowed;text-decoration:line-through}.daterangepicker select.monthselect,.daterangepicker select.yearselect{padding:1px;height:auto;margin:0;cursor:default;display:inline-block}.daterangepicker select.yearselect{width:40%}.daterangepicker select.ampmselect,.daterangepicker select.hourselect,.daterangepicker select.minuteselect,.daterangepicker select.secondselect{width:50px;margin-bottom:0}.daterangepicker .input-mini{border:1px solid #ccc;border-radius:4px;color:#555;height:30px;line-height:30px;display:block;vertical-align:middle;margin:0 0 5px;padding:0 6px 0 28px;width:100%}.daterangepicker .input-mini.active{border:1px solid #08c;border-radius:4px}.daterangepicker .daterangepicker_input{position:relative}.daterangepicker .daterangepicker_input i{position:absolute;left:8px;top:8px}.daterangepicker.rtl .input-mini{padding-right:28px;padding-left:6px}.daterangepicker.rtl .daterangepicker_input i{left:auto;right:8px}.daterangepicker .calendar-time{text-align:center;margin:5px auto;line-height:30px;position:relative;padding-left:28px}.daterangepicker .calendar-time select.disabled{color:#ccc;cursor:not-allowed}.ranges{font-size:11px;margin:4px;text-align:left}.ranges ul{margin:0 auto;padding:0;width:100%}.ranges li{font-size:13px;background-color:#f5f5f5;border:1px solid #f5f5f5;border-radius:4px;color:#08c;padding:3px 12px;margin-bottom:8px;cursor:pointer}.ranges li.active,.ranges li:hover{background-color:#08c;border:1px solid #08c;color:#fff}@media (min-width:564px){.daterangepicker.ltr .calendar.right .calendar-table,.daterangepicker.rtl .calendar.left .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.daterangepicker.ltr .calendar.left .calendar-table,.daterangepicker.rtl .calendar.right .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.daterangepicker{width:auto}.daterangepicker .ranges ul{width:160px}.daterangepicker.single .ranges ul{width:100%}.daterangepicker.single .calendar.left{clear:none}.daterangepicker.single.ltr .calendar,.daterangepicker.single.ltr .ranges{float:left}.daterangepicker.single.rtl .calendar,.daterangepicker.single.rtl .ranges{float:right}.daterangepicker.ltr{direction:ltr;text-align:left}.daterangepicker.ltr .calendar.left{clear:left;margin-right:0}.daterangepicker.ltr .calendar.right{margin-left:0}.daterangepicker.ltr .calendar.left .calendar-table,.daterangepicker.ltr .left .daterangepicker_input{padding-right:12px}.daterangepicker.ltr .calendar,.daterangepicker.ltr .ranges{float:left}.daterangepicker.rtl{direction:rtl;text-align:right}.daterangepicker.rtl .calendar.left{clear:right;margin-left:0}.daterangepicker.rtl .calendar.right{margin-right:0}.daterangepicker.rtl .calendar.left .calendar-table,.daterangepicker.rtl .left .daterangepicker_input{padding-left:12px}.daterangepicker.rtl .calendar,.daterangepicker.rtl .ranges{text-align:right;float:right}}@media (min-width:730px){.daterangepicker .ranges{width:auto}.daterangepicker.ltr .ranges{float:left}.daterangepicker.rtl .ranges{float:right}.daterangepicker .calendar.left{clear:none!important}}.daterangepicker .calendar .next,.daterangepicker .calendar .prev{display:none}.daterangepicker_input .form-group{margin:0}.daterangepicker select.monthselect,.daterangepicker select.yearselect{border:none;font-size:13px;color:#515365}.daterangepicker th.month{padding:15px 5px}.daterangepicker select.monthselect{margin-right:10%;width:50%}.daterangepicker .calendar th,.daterangepicker td.off{font-size:9px;color:#888da8}.daterangepicker .calendar td{color:#4b4e65;font-size:11px;border-radius:50%;display:table-cell;height:auto;width:auto}.fc-icon,body .fc{font-size:1em}.daterangepicker td.active,.daterangepicker td.active:hover,.daterangepicker td.start-date.end-date{background-color:#08ddc1;border-color:transparent;color:#fff;border-radius:50%}.daterangepicker{width:270px;border-color:#e6ecf5;box-shadow:0 0 34px 0 rgba(63,66,87,.1)}.daterangepicker.single.ltr .calendar{float:none;padding:8px}.daterangepicker .calendar td,.daterangepicker .calendar th{line-height:30px;padding:0 5px}\n/*!\n * FullCalendar v2.6.0 Stylesheet\n * Docs & License: http://fullcalendar.io/\n * (c) 2015 Adam Shaw\n */.fc{direction:ltr;text-align:left}.fc-rtl{text-align:right}.fc-basic-view .fc-week-number,.fc-icon,.fc-toolbar,.fc th{text-align:center}.fc-unthemed .fc-divider,.fc-unthemed .fc-popover,.fc-unthemed .fc-row,.fc-unthemed tbody,.fc-unthemed td,.fc-unthemed th,.fc-unthemed thead{border-color:#ddd}.fc-unthemed .fc-popover{background-color:#fff}.fc-unthemed .fc-divider,.fc-unthemed .fc-popover .fc-header{background:#eee}.fc-unthemed .fc-popover .fc-header .fc-close{color:#666}.fc-unthemed .fc-today{background:#f5f5f5;position:relative;color:#fff}.fc-unthemed .fc-today:after{content:"";display:block;position:absolute;width:30px;height:30px;border-radius:100%;background-color:#08ddc1;right:3px;top:7px;z-index:-1}.fc-button-group,.fc-icon{display:inline-block}@media (max-width:460px){.fc-unthemed .fc-today:after{width:15px;height:15px;right:11px;top:14px}}.fc-highlight{background:#bce8f1}.fc-bgevent{background:#8fdf82}.fc-nonbusiness{background:#d7d7d7}.fc-icon{width:1em;height:1em;line-height:1em;overflow:hidden;font-family:"Courier New",Courier,monospace;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fc-icon:after{position:relative;margin:0 -1em}.fc-icon-left-single-arrow:after{content:"\\02039";font-weight:700;font-size:200%;top:-7%;left:3%}.fc-icon-right-single-arrow:after{content:"\\0203A";font-weight:700;font-size:200%;top:-7%;left:-3%}.fc-icon-left-double-arrow:after{content:"\\000AB";font-size:160%;top:-7%}.fc-icon-right-double-arrow:after{content:"\\000BB";font-size:160%;top:-7%}.fc-icon-left-triangle:after{content:"\\25C4";font-size:125%;top:3%;left:-2%}.fc-icon-right-triangle:after{content:"\\25BA";font-size:125%;top:3%;left:2%}.fc-icon-down-triangle:after{content:"\\25BC";font-size:125%;top:2%}.fc-icon-x:after{content:"\\000D7";font-size:200%;top:6%}.fc button{box-sizing:border-box;margin:0;padding:0 .6em;font-size:1em;white-space:nowrap;cursor:pointer}.fc button::-moz-focus-inner{margin:0;padding:0}.fc-state-default{border:1px solid}.fc-state-default.fc-corner-left{border-top-left-radius:4px;border-bottom-left-radius:4px}.fc-state-default.fc-corner-right{border-top-right-radius:4px;border-bottom-right-radius:4px}.fc button .fc-icon{position:relative;top:-.05em;margin:0 .2em;vertical-align:middle}.fc-state-active,.fc-state-disabled,.fc-state-down,.fc-state-hover{color:#333;background-color:#e6e6e6}.fc-state-hover{color:#333;text-decoration:none;background-position:0 -15px;transition:background-position .1s linear}.fc-state-active,.fc-state-down{background-color:#ccc;background-image:none;box-shadow:inset 0 2px 4px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.05)}.fc-state-disabled{cursor:default;background-image:none;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.fc-event.fc-draggable,.fc-event[href],.fc-popover .fc-header .fc-close{cursor:pointer}.fc .fc-button-group>*{float:left;margin:0 0 0 -1px}.fc .fc-button-group>:first-child{margin-left:0}.fc-popover{position:absolute;box-shadow:0 2px 6px rgba(0,0,0,.15)}.fc-popover .fc-header{padding:2px 4px}.fc-popover .fc-header .fc-title{margin:0 2px}.fc-ltr .fc-popover .fc-header .fc-title,.fc-rtl .fc-popover .fc-header .fc-close{float:left}.fc-ltr .fc-popover .fc-header .fc-close,.fc-rtl .fc-popover .fc-header .fc-title{float:right}.fc-unthemed .fc-popover{border-width:1px;border-style:solid}.fc-unthemed .fc-popover .fc-header .fc-close{font-size:.9em;margin-top:2px}.fc-popover>.ui-widget-header+.ui-widget-content{border-top:0}.fc-divider{border-style:solid;border-width:1px}hr.fc-divider{height:0;margin:0;padding:0 0 2px;border-width:1px 0}.fc-bg table,.fc-row .fc-bgevent-skeleton table,.fc-row .fc-highlight-skeleton table{height:100%}.fc-clear{clear:both}.fc-bg,.fc-bgevent-skeleton,.fc-helper-skeleton,.fc-highlight-skeleton{position:absolute;top:0;left:0;right:0}.fc-event,.fc-event .fc-content,.fc-row,.fc-scroller>*{position:relative}.fc table{width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;font-size:1em}.fc td,.fc th{border-style:solid;border-width:1px;vertical-align:top}.fc th{padding:12px;background-color:transparent;font-size:9px;color:#888da8;border-right-width:0;border-left-width:0}@media (max-width:380px){.fc th{font-size:6px}}.fc td.fc-today{border-style:double}.calendar-btn{border-radius:30px;padding:10px 25px;background-color:#f2f3f5;float:left;font-size:13px}.fc .fc-row{border-style:solid;border-width:0;margin-right:0!important}.fc-row table{border-left:0 hidden transparent;border-right:0 hidden transparent;border-bottom:0 hidden transparent}.fc-row:first-child table{border-top:0 hidden transparent}.fc-row .fc-bg{z-index:1}.fc-row .fc-bgevent-skeleton td,.fc-row .fc-highlight-skeleton td{border-color:transparent}.fc-row .fc-bgevent-skeleton{z-index:2}.fc-row .fc-highlight-skeleton{z-index:3}.fc-row .fc-content-skeleton{position:relative;z-index:4;padding-bottom:2px}.fc-row .fc-helper-skeleton{z-index:5}.fc-row .fc-content-skeleton td,.fc-row .fc-helper-skeleton td{background:0 0;border-color:transparent;border-bottom:0}.fc-row .fc-content-skeleton tbody td,.fc-row .fc-helper-skeleton tbody td{border-top:0}.fc-scroller{overflow-y:scroll;overflow-x:hidden}.fc-scroller>*{width:100%;overflow:hidden}.fc-event{display:block;font-size:.85em;line-height:1.3;border-radius:3px;border:1px solid #3a87ad;background-color:#3a87ad;font-weight:400}.fc-event,.fc-event:hover,.ui-widget .fc-event{color:#fff;text-decoration:none}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-event .fc-bg{z-index:1;background:#fff;opacity:.25;filter:alpha(opacity=25)}.fc-event .fc-content{z-index:2}.fc-event .fc-resizer{position:absolute;z-index:3}.fc-ltr .fc-h-event.fc-not-start,.fc-rtl .fc-h-event.fc-not-end{margin-left:0;border-left-width:0;padding-left:1px;border-top-left-radius:0;border-bottom-left-radius:0}.fc-ltr .fc-h-event.fc-not-end,.fc-rtl .fc-h-event.fc-not-start{margin-right:0;border-right-width:0;padding-right:1px;border-top-right-radius:0;border-bottom-right-radius:0}.fc-h-event .fc-resizer{top:-1px;bottom:-1px;left:-1px;right:-1px;width:5px}.fc-ltr .fc-h-event .fc-start-resizer,.fc-ltr .fc-h-event .fc-start-resizer:after,.fc-ltr .fc-h-event .fc-start-resizer:before,.fc-rtl .fc-h-event .fc-end-resizer,.fc-rtl .fc-h-event .fc-end-resizer:after,.fc-rtl .fc-h-event .fc-end-resizer:before{right:auto;cursor:w-resize}.fc-ltr .fc-h-event .fc-end-resizer,.fc-ltr .fc-h-event .fc-end-resizer:after,.fc-ltr .fc-h-event .fc-end-resizer:before,.fc-rtl .fc-h-event .fc-start-resizer,.fc-rtl .fc-h-event .fc-start-resizer:after,.fc-rtl .fc-h-event .fc-start-resizer:before{left:auto;cursor:e-resize}.fc-day-grid-event{margin:1px 2px 0;padding:0 1px}.fc-day-grid-event .fc-content{white-space:nowrap;overflow:hidden}.fc-day-grid-event .fc-time{font-weight:700}.fc-day-grid-event .fc-resizer{left:-3px;right:-3px;width:7px}a.fc-more{margin:1px 3px;font-size:.85em;cursor:pointer;text-decoration:none}a.fc-more:hover{text-decoration:underline}.fc-limited{display:none}.fc-day-grid .fc-row{z-index:1}.fc-more-popover{z-index:2;width:220px}.fc-more-popover .fc-event-container{padding:10px}.fc-now-indicator{position:absolute;border:0 solid red}.fc-toolbar .fc-button-group .fc-next-button,.fc-toolbar .fc-button-group .fc-prev-button{border-radius:0;padding:22px 10px;background-color:transparent;transition:all .3s ease;border:none}.fc-toolbar .fc-button-group .fc-button.fc-next-button,.fc-toolbar .fc-button-group .fc-button.fc-prev-button{border-left:none}.fc-toolbar .fc-button-group .fc-agendaDay-button,.fc-toolbar .fc-button-group .fc-agendaWeek-button,.fc-toolbar .fc-button-group .fc-month-button{border:none;background-color:transparent;text-transform:capitalize;padding:20px;color:#9699a6;border-radius:0;box-shadow:none}.fc-toolbar .fc-button-group .fc-agendaDay-button:after,.fc-toolbar .fc-button-group .fc-agendaWeek-button:after,.fc-toolbar .fc-button-group .fc-month-button:after{content:"";display:block;position:absolute;width:100%;height:3px;bottom:0;left:0;opacity:0;transition:all .3s ease}.fc-toolbar .fc-button-group .fc-agendaDay-button.fc-state-active:after,.fc-toolbar .fc-button-group .fc-agendaWeek-button.fc-state-active:after,.fc-toolbar .fc-button-group .fc-month-button.fc-state-active:after{opacity:1}.fc-toolbar .fc-button-group .fc-button.fc-state-active,.fc-toolbar .fc-button-group .fc-button.fc-state-active svg{color:#08ddc1;fill:#08ddc1}.fc-toolbar .fc-button-group .fc-icon,.fc .date span{color:#888da8}.fc-toolbar .fc-button-group .fc-button{border-left:1px solid #e6ecf5}.fc-toolbar .fc-button-group .fc-button svg{width:18px;height:22px;fill:#c2c5d9}.fc-toolbar .fc-left{float:left}.fc-toolbar .fc-right{float:right}.fc-toolbar .fc-center{display:inline-block;padding:21px 0}.fc .fc-toolbar>*>*{float:left;margin-left:.75em}.fc .fc-toolbar>*>:first-child{margin-left:0}.fc-toolbar h2{font-size:14px;margin:0}.fc-toolbar button{position:relative}.fc-toolbar .fc-state-hover,.fc-toolbar .ui-state-hover{z-index:2}.fc-toolbar .fc-state-down{z-index:3}.fc-toolbar .fc-state-active,.fc-toolbar .ui-state-active{z-index:4}.fc-toolbar button:focus{z-index:5}.fc-view-container *,.fc-view-container :after,.fc-view-container :before{box-sizing:content-box}.fc-view,.fc-view>table{position:relative;z-index:1}.fc-basicDay-view .fc-content-skeleton,.fc-basicWeek-view .fc-content-skeleton{padding-top:1px;padding-bottom:1em}.fc-basic-view .fc-body .fc-row{min-height:4em}.fc-row.fc-rigid{overflow:hidden}.fc-row.fc-rigid .fc-content-skeleton{position:absolute;top:0;left:0;right:0}.fc-basic-view .fc-day-number,.fc-basic-view .fc-week-number{padding:0 2px}.fc-basic-view td.fc-day-number,.fc-basic-view td.fc-week-number span{padding-top:2px;padding-bottom:2px}.fc-ltr .fc-axis,.fc-rtl .fc-basic-view .fc-day-number{text-align:right}.fc-basic-view .fc-week-number span{display:inline-block;min-width:1.25em}.fc-ltr .fc-basic-view .fc-day-number{text-align:right;font-size:12px;padding:15px}.fc-day-number.fc-other-month{opacity:.3;filter:alpha(opacity=30)}.fc-agenda-view .fc-day-grid{position:relative;z-index:2}.fc-agenda-view .fc-day-grid .fc-row{min-height:3em}.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton{padding-top:1px;padding-bottom:1em}.fc .fc-axis{vertical-align:middle;padding:0 4px;white-space:nowrap}.fc-rtl .fc-axis{text-align:left}.ui-widget td.fc-axis{font-weight:400}.fc-time-grid,.fc-time-grid-container{position:relative;z-index:1}.fc-time-grid{min-height:100%}.fc-time-grid table{border:0 hidden transparent}.fc-time-grid>.fc-bg{z-index:1}.fc-time-grid .fc-slats,.fc-time-grid>hr{position:relative;z-index:2}.fc-time-grid .fc-content-col{position:relative}.fc-time-grid .fc-content-skeleton{position:absolute;z-index:3;top:0;left:0;right:0}.fc-time-grid .fc-business-container{position:relative;z-index:1}.fc-time-grid .fc-bgevent-container{position:relative;z-index:2}.fc-time-grid .fc-highlight-container{z-index:3;position:relative}.fc-time-grid .fc-event-container{position:relative;z-index:4}.fc-time-grid .fc-now-indicator-line{z-index:5}.fc-time-grid .fc-helper-container{position:relative;z-index:6}.fc-time-grid .fc-slats td{height:1.5em;border-bottom:0;font-size:9px;font-weight:500;background-color:#fff}.fc-time-grid .fc-slats .fc-minor td{border-top-style:dotted;background-color:#fff}.fc-time-grid .fc-slats .ui-widget-content{background:0 0}.fc-time-grid .fc-highlight{position:absolute;left:0;right:0}.fc-ltr .fc-time-grid .fc-event-container{margin:0 2.5% 0 2px}.fc-rtl .fc-time-grid .fc-event-container{margin:0 2px 0 2.5%}.fc-time-grid .fc-bgevent,.fc-time-grid .fc-event{position:absolute;z-index:1}.fc-time-grid .fc-bgevent{left:0;right:0}.fc-v-event.fc-not-start{border-top-width:0;padding-top:1px;border-top-left-radius:0;border-top-right-radius:0}.fc-v-event.fc-not-end{border-bottom-width:0;padding-bottom:1px;border-bottom-left-radius:0;border-bottom-right-radius:0}.fc-time-grid-event{overflow:hidden}.fc-time-grid-event .fc-time,.fc-time-grid-event .fc-title{padding:0 1px}.fc-time-grid-event .fc-time{font-size:.85em;white-space:nowrap}.fc-time-grid-event.fc-short .fc-content{white-space:nowrap}.fc-time-grid-event.fc-short .fc-time,.fc-time-grid-event.fc-short .fc-title{display:inline-block;vertical-align:top}.fc-time-grid-event.fc-short .fc-time span{display:none}.fc-time-grid-event.fc-short .fc-time:before{content:attr(data-start)}.fc-time-grid-event.fc-short .fc-time:after{content:"\\000A0-\\000A0"}.fc-time-grid-event.fc-short .fc-title{font-size:.85em;padding:0}.fc-time-grid-event .fc-resizer{left:0;right:0;bottom:0;height:8px;overflow:hidden;line-height:8px;font-size:11px;font-family:monospace;text-align:center;cursor:s-resize}.fc-time-grid-event .fc-resizer:after{content:"="}.mfp-arrow:after,.mfp-arrow:before,.mfp-container:before,.mfp-figure:after{content:""}.fc-time-grid .fc-now-indicator-line{border-top-width:1px;left:0;right:0}.fc-time-grid .fc-now-indicator-arrow{margin-top:-5px}.fc-ltr .fc-time-grid .fc-now-indicator-arrow{left:0;border-width:5px 0 5px 6px;border-top-color:transparent;border-bottom-color:transparent}.fc-rtl .fc-time-grid .fc-now-indicator-arrow{right:0;border-width:5px 6px 5px 0;border-top-color:transparent;border-bottom-color:transparent}.fc .date{margin-bottom:0}.fc .nav-link{padding:17px 20px}@media (max-width:420px){.fc .nav-link{padding:18px 5px}}.fc .nav-tabs{border-bottom:0}.fc .nav-item{margin-left:0}.fc .nav-tabs .nav-link{fill:#c2c5d9;border-radius:0;border-top:0;border-bottom:0;border-color:#e6ecf5}.fc .nav-tabs .nav-link.active{fill:#08ddc1;border-top:0;border-bottom:0;border-color:#e6ecf5}.calendar-block-events{text-align:left;margin:10px -8px 0}.calendar-block-events li{font-size:9px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.calendar-block-events .event-status{display:inline-block;width:4px;height:4px;margin-right:6px;border-radius:100%;margin-bottom:2px}.event-status.uncompleted{background-color:#9a9fbf}.event-status.completed{background-color:#08ddc1}.event-status.b-day{background-color:#38a9ff}.fc-agendaDay-view .calendar-block-events,.fc-agendaWeek-view .calendar-block-events{margin:4px 0 0 3px}.ps{touch-action:auto;overflow:hidden!important;-ms-overflow-style:none}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}.ps.ps--active-x>.ps__scrollbar-x-rail,.ps.ps--active-y>.ps__scrollbar-y-rail{display:block;background-color:transparent}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps>.ps__scrollbar-x-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;bottom:0;height:15px}.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;bottom:2px;height:6px}.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x,.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{height:11px}.ps>.ps__scrollbar-y-rail{display:none;position:absolute;opacity:0;transition:background-color .2s linear,opacity .2s linear;right:0;width:7px}.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y{position:absolute;background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s linear,width .2s ease-in-out,border-radius .2s ease-in-out;right:2px;width:6px}.mfp-bg,.mfp-wrap{position:fixed;top:0;left:0}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x{background-color:#999;height:11px}.mfp-bg,.mfp-container,.mfp-wrap{height:100%;width:100%}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail{background-color:#eee;opacity:.9}.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y{background-color:#999;width:11px}.ps:hover>.ps__scrollbar-x-rail,.ps:hover>.ps__scrollbar-y-rail{opacity:.6}.ps:hover>.ps__scrollbar-x-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x{background-color:#999}.ps:hover>.ps__scrollbar-y-rail:hover{background-color:#eee;opacity:.9}.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y{background-color:#999}.mfp-bg{z-index:1042;overflow:hidden;background:#0b0b0b;opacity:.8}.mfp-wrap{z-index:1043;-webkit-backface-visibility:hidden}.mejs-container:focus,.mejs-controls .mejs-button button:focus{outline:0}.mfp-container{text-align:center;position:absolute;left:0;top:0;padding:0 8px;box-sizing:border-box}.mfp-container:before{display:inline-block;height:100%;vertical-align:middle}.mfp-align-top .mfp-container:before{display:none}.mfp-content{position:relative;display:inline-block;vertical-align:middle;margin:0 auto;text-align:left;z-index:1045}.mfp-close,.mfp-preloader{text-align:center;position:absolute}.mfp-ajax-holder .mfp-content,.mfp-inline-holder .mfp-content{width:100%;cursor:auto}.mfp-ajax-cur{cursor:progress}.mfp-zoom-out-cur,.mfp-zoom-out-cur .mfp-image-holder .mfp-close{cursor:zoom-out}.mfp-zoom{cursor:pointer;cursor:zoom-in}.mfp-auto-cursor .mfp-content{cursor:auto}.mfp-arrow,.mfp-close,.mfp-counter,.mfp-preloader{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mfp-loading.mfp-figure{display:none}.mfp-hide{display:none!important}.mfp-preloader{color:#ccc;top:50%;width:auto;margin-top:-.8em;left:8px;right:8px;z-index:1044}.mfp-preloader a{color:#ccc}.mfp-close,.mfp-preloader a:hover{color:#fff}.mfp-s-error .mfp-content,.mfp-s-ready .mfp-preloader{display:none}button.mfp-arrow,button.mfp-close{overflow:visible;cursor:pointer;background:0 0;border:0;-webkit-appearance:none;display:block;outline:0;padding:0;z-index:1046;box-shadow:none;touch-action:manipulation}button::-moz-focus-inner{padding:0;border:0}.mfp-close{width:44px;height:44px;line-height:44px;right:0;top:0;text-decoration:none;opacity:.65;padding:0 0 18px 10px;font-style:normal;font-size:28px;font-family:Arial,Baskerville,monospace}.mfp-close:focus,.mfp-close:hover{opacity:1}.mfp-close:active{top:1px}.mfp-close-btn-in .mfp-close{color:#333}.mfp-iframe-holder .mfp-close,.mfp-image-holder .mfp-close{color:#fff;right:-6px;text-align:right;padding-right:6px;width:100%}.mfp-counter{position:absolute;top:0;right:0;color:#ccc;font-size:12px;line-height:18px;white-space:nowrap}.mfp-figure,img.mfp-img{line-height:0}.mfp-arrow{position:absolute;opacity:.65;margin:-55px 0 0;top:50%;padding:0;width:90px;height:110px;-webkit-tap-highlight-color:transparent}.mfp-arrow:active{margin-top:-54px}.mfp-arrow:focus,.mfp-arrow:hover{opacity:1}.mfp-arrow:after,.mfp-arrow:before{display:block;width:0;height:0;position:absolute;left:0;top:0;margin-top:35px;margin-left:35px;border:inset transparent}.mfp-arrow:after{border-top-width:13px;border-bottom-width:13px;top:8px}.mfp-arrow:before{border-top-width:21px;border-bottom-width:21px;opacity:.7}.mfp-arrow-left{left:0}.mfp-arrow-left:after{border-right:17px solid #fff;margin-left:31px}.mfp-arrow-left:before{margin-left:25px;border-right:27px solid #3f3f3f}.mfp-arrow-right{right:0}.mfp-arrow-right:after{border-left:17px solid #fff;margin-left:39px}.mfp-arrow-right:before{border-left:27px solid #3f3f3f}.mfp-iframe-holder{padding-top:40px;padding-bottom:40px}.mfp-iframe-holder .mfp-content{line-height:0;width:100%;max-width:900px}.mfp-image-holder .mfp-content,img.mfp-img{max-width:100%}.mfp-iframe-holder .mfp-close{top:-40px}.mfp-iframe-scaler{width:100%;height:0;overflow:hidden;padding-top:56.25%}.mfp-iframe-scaler iframe{position:absolute;display:block;top:0;left:0;width:100%;height:100%;box-shadow:0 0 8px rgba(0,0,0,.6);background:#000}.mfp-figure:after,img.mfp-img{width:auto;height:auto;display:block}img.mfp-img{box-sizing:border-box;padding:40px 0 0;margin:0 auto}.mfp-figure:after{position:absolute;left:0;top:40px;bottom:40px;right:0;z-index:-1;box-shadow:0 0 8px rgba(0,0,0,.6);background:#444}.mfp-figure small{color:#bdbdbd;display:block;font-size:12px;line-height:14px}.mfp-figure figure{margin:0}.mfp-bottom-bar{margin-top:-36px;position:absolute;top:100%;left:0;width:100%;cursor:auto}.mfp-title{text-align:left;line-height:18px;color:#f3f3f3;word-wrap:break-word;padding-right:36px}.mfp-gallery .mfp-image-holder .mfp-figure{cursor:pointer}@media screen and (max-height:300px),screen and (max-width:800px) and (orientation:landscape){.mfp-img-mobile .mfp-image-holder{padding-left:0;padding-right:0}.mfp-img-mobile img.mfp-img{padding:0}.mfp-img-mobile .mfp-figure:after{top:0;bottom:0}.mfp-img-mobile .mfp-figure small{display:inline;margin-left:5px}.mfp-img-mobile .mfp-bottom-bar{background:rgba(0,0,0,.6);bottom:0;margin:0;top:auto;padding:3px 5px;position:fixed;box-sizing:border-box}.mfp-img-mobile .mfp-bottom-bar:empty{padding:0}.mfp-img-mobile .mfp-counter{right:5px;top:3px}.mfp-img-mobile .mfp-close{top:0;right:0;width:35px;height:35px;line-height:35px;background:rgba(0,0,0,.6);position:fixed;text-align:center;padding:0}}@media (max-width:900px){.mfp-arrow{transform:scale(.75)}.mfp-arrow-left{transform-origin:0}.mfp-arrow-right{transform-origin:100%}.mfp-container{padding-left:6px;padding-right:6px}}.mfp-fade.mfp-bg{opacity:0;transition:all .15s ease-out}.mfp-fade.mfp-bg.mfp-ready{opacity:.8}.mfp-fade.mfp-bg.mfp-removing{opacity:0}.mfp-fade.mfp-wrap .mfp-content{opacity:0;transition:all .15s ease-out}.mfp-fade.mfp-wrap.mfp-ready .mfp-content{opacity:1}.mfp-fade.mfp-wrap.mfp-removing .mfp-content{opacity:0}.mfp-zoom-in .mfp-with-anim{opacity:0;transition:all .2s ease-in-out;transform:scale(.8)}.mfp-zoom-in.mfp-bg{opacity:0;transition:all .3s ease-out}.mfp-zoom-in.mfp-ready .mfp-with-anim{opacity:1;transform:scale(1)}.mfp-zoom-in.mfp-ready.mfp-bg{opacity:.8}.mfp-zoom-in.mfp-removing.mfp-bg,.popup-video-holder .plyr--youtube .plyr__play-large{opacity:0}.mfp-zoom-in.mfp-removing .mfp-with-anim{transform:scale(.8);opacity:0}.inline--media-content .mfp-container{padding-top:40px;padding-bottom:40px}.inline--media-content .mfp-content{width:100%;max-width:1200px}.popup-video-holder{width:100%;height:0;overflow:hidden;padding-bottom:56.25%}.popup-video-holder .plyr{position:absolute;top:-3px;left:0;width:100%;height:100%;box-shadow:0 0 8px rgba(0,0,0,.6)}.mejs-controls .mejs-hide-playlist button,.mejs-controls .mejs-nexttrack button,.mejs-controls .mejs-prevtrack button,.mejs-controls .mejs-show-playlist button,.mejs-controls .mejs-shuffle-off button,.mejs-controls .mejs-shuffle-on button{background:url(https://assets.dallashanuman.net/images/common/controls-playlist.png) no-repeat}.mejs-controls .mejs-show-playlist button{background-position:-16px -16px}.mejs-controls .mejs-hide-playlist button{background-position:-16px 0}.mejs-controls .mejs-prevtrack button{background-position:0 -16px}.mejs-controls .mejs-shuffle-on button{background-position:-32px 0}.mejs-controls .mejs-shuffle-off button{background-position:-32px -16px}.mejs-container{display:inline-block}.mejs-container .mejs-overlay-loading{background-color:transparent;width:220px;margin:-40px 0 0 -110px}.mejs-container .mejs-overlay-loading span{width:220px;background-size:contain}.mejs-container .mejs-poster{background-size:cover}.mejs-container .mejs-playlist{position:absolute;left:0;overflow-y:auto;width:100%;background-size:cover;background-position:50% 50%}.mejs-container .mejs-playlist,.mejs-container .mejs-playlist ul{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mejs-container .mejs-playlist ul{margin:0 0 30px;padding:0}.mejs-container .mejs-playlist ul li{margin:0;padding:0;height:44px;cursor:pointer}.mejs-container .mejs-playlist ul li:before{content:" ";display:block;height:44px;border-top:1px solid #fff;border-bottom:1px solid #000;background-color:rgba(50,50,50,.7);background-position:right 10px top 100px;background-repeat:no-repeat}.mejs-container .mejs-playlist ul li:hover:before{background-color:rgba(44,124,145,.8);background-position:right 10px top -28px}.mejs-container .mejs-playlist ul li span{position:relative;top:-44px;display:block;padding:8px 50px 10px 10px;height:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff;font-size:14px;line-height:26px}.mejs-container.mep-playing .mejs-playlist ul li.current:before{background-position:right 10px top -328px}.mejs-container.mep-playing .mejs-playlist ul li.current:hover:before{background-position:right 10px top -228px}.mejs-container.mep-paused .mejs-playlist ul li.current:before{background-position:right 10px top -128px}.mejs-container.mep-slider .mejs-playlist{overflow:hidden}.mejs-container.mep-slider .mejs-playlist ul{width:100%;height:100%;overflow:hidden;white-space:nowrap;margin-bottom:0!important;background:radial-gradient(circle,grey,#000)}.mejs-container.mep-slider .mejs-playlist ul li{height:100%;display:inline-block;width:100%;will-change:transform;transition:transform .5s ease-in-out;background-size:100%;background-repeat:no-repeat}.mejs-container.mep-slider .mejs-playlist ul li span{top:100%;margin-top:-7px;position:absolute;height:44px;margin-bottom:-44px;display:inline-block}.mejs-container.mep-slider .mejs-playlist ul li:before{position:absolute;border:none;background-color:transparent;background-position:right 10px top 0;top:50%;left:50%;width:100px;height:100px;margin:-50px 0 0 -50px;opacity:1}.mejs-container.mep-slider .mejs-playlist ul li:hover:before{background-position:right 10px top -100px}.mejs-container.mep-slider.mep-playing .mejs-playlist ul li.current:before{background-position:right 10px top -200px}.mejs-container.mep-slider.mep-playing .mejs-playlist ul li.current:hover:before{background-position:right 10px top -300px}.mejs-container.mep-slider.mep-paused .mejs-playlist ul li.current:before{background-position:right 10px top 0}.mejs-container.mep-slider.mep-paused .mejs-playlist ul li.current:hover:before{background-position:right 10px top -100px}.mejs-container.mep-slider .mejs-playlist>a{position:absolute;top:50%;display:inline-block;height:100px;width:100px;opacity:.9;cursor:pointer;margin-top:-75px}.mejs-container.mep-slider .mejs-playlist>a.mep-prev{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mejs-container.mep-slider .mejs-playlist>a.mep-prev:hover{background-position:left -500px}.mejs-container.mep-slider .mejs-playlist>a.mep-next{right:0;background-position:left -600px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mejs-container.mep-slider .mejs-playlist>a.mep-next:hover{background-position:left -700px}.mejs-offscreen{position:absolute!important;top:-10000px;left:-10000px;overflow:hidden;width:1px;height:1px}.me-plugin,.mejs-container{position:absolute}.mejs-container{bottom:0;left:0;background:#fff;padding:20px;text-align:left;vertical-align:top;text-indent:0;width:100%!important;height:70px!important}.mejs-container-fullscreen .mejs-mediaelement,.mejs-container-fullscreen video,.mejs-mediaelement{width:100%;height:100%}.mejs-embed,.mejs-embed body{width:100%;height:100%;margin:0;padding:0;background:#000;overflow:hidden}.mejs-fullscreen{overflow:hidden!important}.mejs-container-fullscreen{position:fixed;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:1000}.mejs-clear{clear:both}.mejs-background,.mejs-mediaelement,.mejs-poster{position:absolute;top:0;left:0}.mejs-poster{background-size:contain;background-position:50% 50%;background-repeat:no-repeat}:root .mejs-poster img{display:none}.mejs-poster img{padding:0;border:0}.mejs-overlay{position:absolute;top:0;left:0}.mejs-overlay-play{cursor:pointer}.mejs-overlay-button{position:absolute;top:50%;left:50%;width:100px;height:100px;margin:-50px 0 0 -50px}.mejs-overlay:hover .mejs-overlay-button{background-position:0 -100px}.mejs-overlay-loading{position:absolute;top:50%;left:50%;width:80px;height:80px;margin:-40px 0 0 -40px;background:rgba(0,0,0,.9);background:linear-gradient(rgba(50,50,50,.9),rgba(0,0,0,.9))}.mejs-overlay-loading span{display:block;width:80px;height:80px}.mejs-container .mejs-controls{position:relative;list-style-type:none;margin:0;padding:0;width:100%}.mejs-container .mejs-controls div{list-style-type:none;background-image:none;display:block;float:left;margin:0;padding:0;width:26px;height:26px;font-size:11px;line-height:11px;font-family:Helvetica,Arial;border:0}.mejs-controls .mejs-button button{cursor:pointer;display:block;font-size:0;line-height:0;text-decoration:none;margin:7px 0;padding:0;position:absolute;height:27px;width:27px;border:0}.mejs-container .mejs-controls .mejs-time{color:#888da8;display:block;height:17px;width:auto;padding:10px 3px 0;overflow:hidden;text-align:center;box-sizing:content-box}.mejs-container .mejs-controls .mejs-time a{color:#fff;font-size:11px;line-height:12px;display:block;float:left;margin:1px 2px 0 0;width:auto}.mejs-controls .mejs-play button{background-position:0 0}.mejs-controls .mejs-pause button{background-position:0 -16px}.mejs-controls .mejs-stop button{background-position:-112px 0}.mejs-controls div.mejs-time-rail{direction:ltr;width:50%;padding-top:7px}.mejs-controls .mejs-time-rail a,.mejs-controls .mejs-time-rail span{display:block;position:absolute;width:180px;height:6px;border-radius:5px;cursor:pointer}.mejs-controls .mejs-time-rail .mejs-time-total{margin:5px;background:#333;background:rgba(50,50,50,.8);background:linear-gradient(rgba(30,30,30,.8),rgba(60,60,60,.8))}.mejs-controls .mejs-time-rail .mejs-time-buffering{width:100%;background-image:linear-gradient(-45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:15px 15px;-webkit-animation:buffering-stripes 2s linear infinite;animation:buffering-stripes 2s linear infinite}@-webkit-keyframes buffering-stripes{0%{background-position:0 0}to{background-position:30px 0}}@keyframes buffering-stripes{0%{background-position:0 0}to{background-position:30px 0}}.mejs-controls .mejs-time-rail .mejs-time-loaded{background-color:#ebecf2;width:0}.mejs-controls .mejs-time-rail .mejs-time-current{background:linear-gradient(#20d862,#5bf692);width:0}.mejs-controls .mejs-time-rail .mejs-time-current:after{content:"";display:block;position:absolute;right:-10px;top:-5px;width:16px;height:16px;border-radius:100%;background-color:#fff;border:5px solid #9a9fbf}.mejs-controls .mejs-time-rail .mejs-time-handle{display:none;position:absolute;margin:0;width:10px;background:#fff;border-radius:5px;cursor:pointer;border:2px solid #333;top:-2px;text-align:center}.mejs-controls .mejs-time-rail .mejs-time-float{position:absolute;display:none;background:#eee;width:36px;height:17px;border:1px solid #333;top:-26px;margin-left:-18px;text-align:center;color:#111}.mejs-controls .mejs-time-rail .mejs-time-float-current{margin:2px;width:30px;display:block;text-align:center;left:0}.mejs-controls .mejs-time-rail .mejs-time-float-corner{position:absolute;display:block;width:0;height:0;line-height:0;border:5px solid transparent;border-top-color:#eee;border-radius:0;top:15px;left:13px}.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float{width:48px}.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-current{width:44px}.mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-corner{left:18px}.mejs-controls .mejs-fullscreen-button button{background-position:-32px 0}.mejs-controls .mejs-unfullscreen button{background-position:-32px -16px}.mejs-controls .mejs-mute button{background-position:-16px -16px}.mejs-controls .mejs-unmute button{background-position:-16px 0}.mejs-controls .mejs-volume-button{position:relative}.mejs-controls .mejs-volume-button .mejs-volume-slider{display:none;height:115px;width:25px;background:rgba(50,50,50,.7);border-radius:0;top:-115px;left:0;z-index:1;position:absolute;margin:0}.mejs-controls .mejs-volume-button:hover{border-radius:0 0 4px 4px}.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-total{position:absolute;left:11px;top:8px;width:2px;height:100px;background:#ddd;background:hsla(0,0%,100%,.5);margin:0}.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current{position:absolute;left:11px;top:8px;width:2px;height:100px;background:#ddd;background:hsla(0,0%,100%,.9);margin:0}.mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle{position:absolute;left:4px;top:-3px;width:16px;height:6px;background:#ddd;background:hsla(0,0%,100%,.9);cursor:N-resize;border-radius:1px;margin:0}.mejs-controls a.mejs-horizontal-volume-slider{height:26px;width:56px;position:relative;display:block;float:left;vertical-align:middle;margin-top:2px}.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total{position:absolute;left:0;top:11px;width:50px;height:6px;margin:0;padding:0;font-size:1px;border-radius:5px;background-color:#ebecf2}.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current:after{content:"";display:block;position:absolute;right:-10px;top:-3px;width:12px;height:12px;border-radius:100%;background-color:#fff;border:4px solid #9a9fbf}.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current{position:absolute;left:0;top:11px;width:50px;height:6px;margin:0;padding:0;font-size:1px;border-radius:5px;background:#fff;background:hsla(0,0%,100%,.8);background:linear-gradient(#20d862,#5bf692)}.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-handle{display:none}.mejs-controls .mejs-captions-button{position:relative}.mejs-controls .mejs-captions-button button{background-position:-48px 0}.mejs-controls .mejs-captions-button .mejs-captions-selector{visibility:hidden;position:absolute;bottom:26px;right:-51px;width:85px;height:100px;background:rgba(50,50,50,.7);border:1px solid transparent;padding:10px 10px 0;overflow:hidden;border-radius:0}.mejs-controls .mejs-captions-button .mejs-captions-selector ul{margin:0;padding:0;display:block;list-style-type:none!important;overflow:hidden}.mejs-controls .mejs-captions-button .mejs-captions-selector ul li{margin:0 0 6px;padding:0;list-style-type:none!important;display:block;color:#fff;overflow:hidden}.mejs-controls .mejs-captions-button .mejs-captions-selector ul li input{clear:both;float:left;margin:3px 3px 0 5px}.mejs-controls .mejs-captions-button .mejs-captions-selector ul li label{width:55px;float:left;padding:4px 0 0;line-height:15px;font-family:helvetica,arial;font-size:10px}.mejs-controls .mejs-captions-button .mejs-captions-translations{font-size:10px;margin:0 0 5px}.mejs-chapters{position:absolute;top:0;left:0;-xborder-right:solid 1px #fff;width:10000px;z-index:1}.mejs-chapters .mejs-chapter{position:absolute;float:left;background:#222;background:rgba(0,0,0,.7);background:linear-gradient(rgba(50,50,50,.7),rgba(0,0,0,.7));filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0,startColorstr=#323232,endColorstr=#000000);overflow:hidden;border:0}.mejs-chapters .mejs-chapter .mejs-chapter-block{font-size:11px;color:#fff;padding:5px;display:block;border-right:1px solid #333;border-bottom:1px solid #333;cursor:pointer}.mejs-chapters .mejs-chapter .mejs-chapter-block-last{border-right:none}.mejs-chapters .mejs-chapter .mejs-chapter-block:hover{background:#666;background:hsla(0,0%,40%,.7);background:linear-gradient(hsla(0,0%,40%,.7),rgba(50,50,50,.6));filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0,startColorstr=#666666,endColorstr=#323232)}.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-title{font-size:12px;font-weight:700;display:block;white-space:nowrap;text-overflow:ellipsis;margin:0 0 3px;line-height:12px}.mejs-chapters .mejs-chapter .mejs-chapter-block .ch-timespan{font-size:12px;line-height:12px;margin:3px 0 4px;display:block;white-space:nowrap;text-overflow:ellipsis}.mejs-captions-layer{position:absolute;bottom:0;left:0;text-align:center;line-height:20px;font-size:16px;color:#fff}.mejs-captions-layer a{color:#fff;text-decoration:underline}.mejs-captions-layer[lang=ar]{font-size:20px;font-weight:400}.mejs-captions-position{position:absolute;width:100%;bottom:15px;left:0}.mejs-captions-position-hover{bottom:35px}.mejs-captions-text{padding:3px 5px;background:rgba(20,20,20,.5);white-space:pre-wrap}.me-cannotplay a{color:#fff;font-weight:700}.me-cannotplay span{padding:15px;display:block}.mejs-controls .mejs-loop-off button{background-position:-64px -16px}.mejs-controls .mejs-loop-on button{background-position:-64px 0}.mejs-controls .mejs-backlight-off button{background-position:-80px -16px}.mejs-controls .mejs-backlight-on button{background-position:-80px 0}.mejs-controls .mejs-picturecontrols-button{background-position:-96px 0}.mejs-contextmenu{position:absolute;width:150px;padding:10px;border-radius:4px;top:0;left:0;background:#fff;border:1px solid #999;z-index:1001}.mejs-contextmenu .mejs-contextmenu-separator{height:1px;font-size:0;margin:5px 6px;background:#333}.mejs-contextmenu .mejs-contextmenu-item{font-family:Helvetica,Arial;font-size:12px;padding:4px 6px;cursor:pointer;color:#333}.mejs-contextmenu .mejs-contextmenu-item:hover{background:#2c7c91;color:#fff}.mejs-controls .mejs-sourcechooser-button{position:relative}.mejs-controls .mejs-sourcechooser-button button{background-position:-128px 0}.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector{visibility:hidden;position:absolute;bottom:26px;right:-10px;width:130px;height:100px;background:rgba(50,50,50,.7);border:1px solid transparent;padding:10px;overflow:hidden;border-radius:0}.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul{margin:0;padding:0;display:block;list-style-type:none!important;overflow:hidden}.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li{margin:0 0 6px;padding:0;list-style-type:none!important;display:block;color:#fff;overflow:hidden}.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li input{clear:both;float:left;margin:3px 3px 0 5px}.mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li label{width:100px;float:left;padding:4px 0 0;line-height:15px;font-family:helvetica,arial;font-size:10px}.mejs-postroll-layer,.mejs-postroll-layer-content{width:100%;height:100%}.mejs-postroll-layer{bottom:0;left:0;z-index:1000;overflow:hidden}.mejs-postroll-close,.mejs-postroll-layer{position:absolute;background:rgba(50,50,50,.7)}.mejs-postroll-close{right:0;top:0;color:#fff;padding:4px;z-index:100;cursor:pointer}div.mejs-speed-button{width:46px!important;position:relative}.mejs-controls .mejs-button.mejs-speed-button button{background:0 0;width:36px;font-size:11px;line-height:normal;color:#fff}.mejs-controls .mejs-speed-button .mejs-speed-selector{display:none;position:absolute;top:-100px;left:-10px;width:60px;height:100px;background:rgba(50,50,50,.7);border:1px solid transparent;padding:0;overflow:hidden;border-radius:0}.mejs-controls .mejs-speed-button:hover>.mejs-speed-selector{display:block}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li label.mejs-speed-selected{color:#21f8f8}.mejs-controls .mejs-speed-button .mejs-speed-selector ul{margin:0;padding:0;display:block;list-style-type:none!important;overflow:hidden}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li{margin:0 0 6px;padding:0 10px;list-style-type:none!important;display:block;color:#fff;overflow:hidden}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li input{clear:both;float:left;margin:3px 3px 0 5px;display:none}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li label{width:60px;float:left;padding:4px 0 0;line-height:15px;font-family:helvetica,arial;font-size:11.5px;color:#fff;margin-left:5px;cursor:pointer}.calendar .friends-harmonic,.calendar .place{padding:0 25px}[class*=fontawesome-]:before{font-family:"Font Awesome 5 Free",sans-serif}.mejs-controls .mejs-speed-button .mejs-speed-selector ul li:hover{background-color:#c8c8c8!important;background-color:hsla(0,0%,100%,.4)!important}.mejs-controls .mejs-button.mejs-jump-forward-button button,.mejs-controls .mejs-button.mejs-skip-back-button button{background:0 0;font-size:9px;line-height:normal;color:#fff}.mejs-container .mejs-controls>div+div{margin-left:30px}.mejs-container .mejs-controls>div.mejs-nexttrack{margin-left:21px}.mejs-controls>.mejs-button.mejs-pause button{margin:3px 0}.mejs-controls>.mejs-button.mejs-volume-button{margin:0 10px}.mejs-controls>.mejs-button>button{background-position:0 0}.mejs-controls .mejs-prevtrack button{background:url(' + j + ") no-repeat}.mejs-controls .mejs-nexttrack button{background:url(" + z + ") no-repeat}.mejs-controls .mejs-play button{background:url(" + _ + ") no-repeat}.mejs-controls .mejs-pause button{background:url(" + M + ") no-repeat}.mejs-controls .mejs-loop-button.mejs-loop-off button{background:url(" + O + ") no-repeat}.mejs-controls .mejs-loop-button.mejs-loop-on button{background:url(" + C + ") no-repeat}.mejs-controls .mejs-shuffle-button.mejs-shuffle-off button{background:url(" + D + ") no-repeat}.mejs-controls .mejs-shuffle-button.mejs-shuffle-on button{background:url(" + I + ") no-repeat}.mejs-controls .mejs-mute button{background:url(" + N + ") no-repeat}.mejs-controls .mejs-unmute button{background:url(" + S + ") no-repeat}.calendar-container{position:relative;width:100%}.calendar .card{border-bottom:1px solid #e6ecf5}.calendar .list{border-radius:0 0 5px 5px;overflow:hidden}.calendar .place{font-size:11px}.calendar .more-dropdown{right:auto;left:0}.calendar .more-dropdown a{font-size:12px}.calendar .more-dropdown a:hover{color:#08ddc1}.calendar .card-header svg{float:none;margin-left:10px}.calendar .place svg{margin-right:10px;fill:#c6c9db}.calendar .card:last-child{border-bottom:none}.calendar-container table{width:100%;margin-top:15px}.calendar{text-align:center}.calendar .card-header a{font-size:13px}.calendar .card-header{padding:25px;border-bottom:none}.calendar .card-body{padding:0 25px 5px;font-size:14px}.calendar header{position:relative;padding:25px;border-bottom:1px solid #e6ecf5}.calendar .month{margin-bottom:0}.calendar thead{font-weight:600;text-transform:uppercase;font-size:9px;color:#888da8}.calendar tbody{color:#4b4e65;font-size:11px}.calendar td{border:2px solid transparent;display:inline-block;height:40px;line-height:40px;text-align:center;width:30px;border-radius:100%}.current-day{color:#08ddc1}.event{cursor:pointer;position:relative}.event:after,.event:before{border-radius:50%;display:inline-block;content:\"\";height:4px;width:4px;position:absolute;bottom:0}.day-event,input[type=checkbox]{display:none}.event-complited:after{background-color:#08ddc1;right:50%;margin-right:-2px}.event-complited-2:after,.event-complited.event-uncomplited:after,.event-uncomplited-2:after{right:7px;margin-right:0}.event-uncomplited:before{background-color:#9a9fbf;left:50%;margin-left:-2px}.event-complited-2:before,.event-uncomplited-2:before,.event-uncomplited.event-complited:before{left:7px;margin-left:0}.event-complited-2:after,.event-complited-2:before{background-color:#08ddc1}.event-uncomplited-2:after,.event-uncomplited-2:before{background-color:#9a9fbf}.calendar-btn-next,.calendar-btn-prev{color:#d7d9e5;font-size:16px;position:absolute;top:50%;transform:translateY(-50%);width:16px}.check-btn,.day-event{width:100%}.calendar-btn-prev{left:30px}.calendar-btn-next{right:35px}.list{margin-top:20px}.close{color:#a4aaab;margin-top:-15px;margin-right:10px;float:right}.day-event{padding-bottom:0;border-top:1px solid #e6ecf5;text-align:left}.day-event p{padding-left:20px;padding-right:20px;padding-bottom:20px}.day-event span{font-size:12px}.day-event button{position:relative;vertical-align:top;width:100%;height:50px;padding:0;font-size:18px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.25);background:#c0392b;border:0;border-bottom:2px solid #b53224;cursor:pointer;box-shadow:inset 0 -2px #b53224}.event-time .circle,.event-time .more{display:inline-block}.print-btn{padding:1px 14px 5px}.fontawesome-remove:before{content:\"\\f00d\"}.fontawesome-angle-left:before{content:\"\\f104\"}.fontawesome-angle-right:before{content:\"\\f105\"}.event-time{margin-bottom:20px}.event-time .circle{width:8px;height:8px;border:2px solid #34eccd;border-radius:100%;margin-right:7px}.swiper-slide,.swiper-wrapper{height:100%;position:relative;width:100%}.event-time time{font-size:10px;color:#515365;font-weight:700}.event-time .more svg{float:none;color:#d7d9e5;margin-left:5px}.check-all{padding:20px;background-color:#08ddc1;color:#fff;font-size:12px;font-weight:700;display:block;text-align:center}.swiper-container{margin:0 auto;position:relative;overflow:hidden;z-index:3}.swiper-container-cube,.swiper-container-flip,.swiper-container.overflow-visible{overflow:visible}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{touch-action:pan-y}.swiper-wp8-vertical{touch-action:pan-x}.swiper-button-next btn-next.swiper-button-disabled,.swiper-button-prev btn-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s;z-index:25}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet,.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:hsla(0,0%,100%,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container.auto-height .swiper-slide{height:auto!important}", ""]), t.exports = k
    }, function(t, e, o) {
        t.exports = o.p + "img/prev-song.e3b2e2b.svg"
    }, function(t, e, o) {
        t.exports = o.p + "img/next-song.41b4503.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE0IDE2Ij48cGF0aCBmaWxsPSIjOUE5RkJGIiBkPSJNMTIuMzU1IDUuMzMyTDQuNTQ4LjU0NUMzLjk3NS4xOTYgMy4zOTIuMDIxIDIuODA5LjAyMSAxLjQxMy4wMjEgMCAxLjExNSAwIDMuMjA1VjZoMlYzLjIwNGMwLS43NDkuMzE0LTEuMTg0LjgwOS0xLjE4NC4yMDQgMCAuNDM4LjA3NC42OTQuMjI5bDcuODE1IDQuNzkyYy44NzkuNTMzLjkyNCAxLjQwNi4wNDQgMS45MzlsLTcuODU5IDQuNzljLS4yNTYuMTU3LS40OTEuMjMtLjY5NS4yM0MyLjMxNCAxNCAyIDEzLjU2NiAyIDEyLjgxOHYtLjc5My0uMDI0SDBWMTIuODE4QzAgMTQuOTA3IDEuNDEzIDE2IDIuODA4IDE2Yy41ODMgMCAxLjE2Ny0uMTc1IDEuNzM1LS41MjFsNy44Ni00Ljc5QzEzLjQxNiAxMC4wNzQgMTQgOS4xMDcgMTQgOC4wMzhjLjAwMS0xLjA4Ni0uNTk5LTIuMDcyLTEuNjQ1LTIuNzA2eiIvPjxwYXRoIGZpbGw9IiM5QTlGQkYiIGQ9Ik0wIDhoMnYySDB6Ii8+PC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE4IDI0Ij48cGF0aCBmaWxsPSIjOUE5RkJGIiBkPSJNMTQuNSAyQTEuNSAxLjUgMCAwIDEgMTYgMy41djE3YTEuNSAxLjUgMCAwIDEtMyAwdi0xN0ExLjUgMS41IDAgMCAxIDE0LjUgMm0wLTJDMTIuNTcgMCAxMSAxLjU3IDExIDMuNXYxN2MwIDEuOTMgMS41NyAzLjUgMy41IDMuNXMzLjUtMS41NyAzLjUtMy41di0xN0MxOCAxLjU3IDE2LjQzIDAgMTQuNSAwek0zLjUgMEMxLjU3IDAgMCAxLjU3IDAgMy41VjEyaDJWMy41YTEuNSAxLjUgMCAxIDEgMyAwdjE3YTEuNSAxLjUgMCAwIDEtMyAwVjE4SDB2Mi41QzAgMjIuNDMgMS41NyAyNCAzLjUgMjRTNyAyMi40MyA3IDIwLjV2LTE3QzcgMS41NyA1LjQzIDAgMy41IDB6Ii8+PHBhdGggZmlsbD0iIzlBOUZCRiIgZD0iTTAgMTRoMnYySDB6Ii8+PC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDE0Ij48cGF0aCBmaWxsPSIjOUE5RkJGIiBkPSJNMTggMS45OTFoLTJ2MmgyYTQgNCAwIDAgMSAwIDhoLTR2Mmg0YTYgNiAwIDAgMCAwLTEyem0tOCAxMmgydi0yaC0ydjJ6bS0yLjAxNS0xMkg2YTYgNiAwIDAgMCAwIDEyaDJ2LTJINmE0IDQgMCAwIDEgMC04aDEuOTg1djEuOTgyTDEyIDIuOTkxIDcuOTg1LjAwOHYxLjk4M3oiLz48L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI0IDE0Ij48cGF0aCBmaWxsPSIjYzJjNWQ5IiBkPSJNMTggMS45OTFoLTJ2MmgyYTQgNCAwIDAgMSAwIDhoLTR2Mmg0YTYgNiAwIDAgMCAwLTEyem0tOCAxMmgydi0yaC0ydjJ6bS0yLjAxNS0xMkg2YTYgNiAwIDAgMCAwIDEyaDJ2LTJINmE0IDQgMCAwIDEgMC04aDEuOTg1djEuOTgyTDEyIDIuOTkxIDcuOTg1LjAwOHYxLjk4M3oiLz48L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDIzIDE1Ij48ZyBmaWxsPSIjOUE5RkJGIj48cGF0aCBkPSJNMTMuMTY2IDMuNDI2Yy0uNDEzLjU3NC0xLjAyIDEuMzYzLTEuNjYyIDIuM2wtLjAwNi0uMDA4Yy0uNjQ2LS45NC0xLjI1Ni0xLjczMS0xLjY3LTIuMzA4LS44ODktMS4yNC0yLjE3OC0xLjQ3NC0yLjg2MS0xLjQxN0g0LjAxNnYybDMuMTIzLS4wMDdjLjAzNS0uMDA1LjYyMS0uMDI3IDEuMDY0LjU5QTI5OS4zOSAyOTkuMzkgMCAwIDEgMTAuMjc3IDcuNWEyOTkuMzkgMjk5LjM5IDAgMCAxLTIuMDc0IDIuOTI0Yy0uNDQzLjYxNy0xLjAyOS41OTUtMS4wNjQuNTlsLTMuMTIzLS4wMDd2MmgyLjk1Yy42ODQuMDU4IDEuOTczLS4xNzcgMi44NjItMS40MTcuNDE0LS41NzYgMS4wMjMtMS4zNjcgMS42NjktMi4zMDhsLjAwNi0uMDA5Yy42NDIuOTM2IDEuMjUgMS43MjcgMS42NjMgMi4zMDEuODkxIDEuMjM4IDIuMTggMS40NzQgMi44NjMgMS40MTZoMi45NDl2LTJsLTMuMTIzLjAwOGMtLjAzNS4wMDQtLjYyMS4wMjctMS4wNjQtLjU5MUEzMTMuNTI4IDMxMy41MjggMCAwIDEgMTIuNzI4IDcuNWEyODMuODQ0IDI4My44NDQgMCAwIDEgMi4wNjMtMi45MDdjLjQ0My0uNjE4IDEuMDI5LS41OTUgMS4wNjQtLjU5bDMuMTIzLjAwN3YtMmgtMi45NDljLS42ODMtLjA1OC0xLjk3Mi4xNzctMi44NjMgMS40MTZ6TTAgMTFoMnYySDB6TTE4Ljk4NSAwdjUuOTY2TDIzIDIuOTgzek0wIDJoMnYySDB6TTE4Ljk4NSAxNUwyMyAxMi4wMTdsLTQuMDE1LTIuOTgzeiIvPjwvZz48L3N2Zz4="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDIzIDE1Ij48ZyBmaWxsPSIjMWVkNzYwIj48cGF0aCBkPSJNMTMuMTY2IDMuNDI2Yy0uNDEzLjU3NC0xLjAyIDEuMzYzLTEuNjYyIDIuM2wtLjAwNi0uMDA4Yy0uNjQ2LS45NC0xLjI1Ni0xLjczMS0xLjY3LTIuMzA4LS44ODktMS4yNC0yLjE3OC0xLjQ3NC0yLjg2MS0xLjQxN0g0LjAxNnYybDMuMTIzLS4wMDdjLjAzNS0uMDA1LjYyMS0uMDI3IDEuMDY0LjU5QTI5OS4zOSAyOTkuMzkgMCAwIDEgMTAuMjc3IDcuNWEyOTkuMzkgMjk5LjM5IDAgMCAxLTIuMDc0IDIuOTI0Yy0uNDQzLjYxNy0xLjAyOS41OTUtMS4wNjQuNTlsLTMuMTIzLS4wMDd2MmgyLjk1Yy42ODQuMDU4IDEuOTczLS4xNzcgMi44NjItMS40MTcuNDE0LS41NzYgMS4wMjMtMS4zNjcgMS42NjktMi4zMDhsLjAwNi0uMDA5Yy42NDIuOTM2IDEuMjUgMS43MjcgMS42NjMgMi4zMDEuODkxIDEuMjM4IDIuMTggMS40NzQgMi44NjMgMS40MTZoMi45NDl2LTJsLTMuMTIzLjAwOGMtLjAzNS4wMDQtLjYyMS4wMjctMS4wNjQtLjU5MUEzMTMuNTI4IDMxMy41MjggMCAwIDEgMTIuNzI4IDcuNWEyODMuODQ0IDI4My44NDQgMCAwIDEgMi4wNjMtMi45MDdjLjQ0My0uNjE4IDEuMDI5LS41OTUgMS4wNjQtLjU5bDMuMTIzLjAwN3YtMmgtMi45NDljLS42ODMtLjA1OC0xLjk3Mi4xNzctMi44NjMgMS40MTZ6TTAgMTFoMnYySDB6TTE4Ljk4NSAwdjUuOTY2TDIzIDIuOTgzek0wIDJoMnYySDB6TTE4Ljk4NSAxNUwyMyAxMi4wMTdsLTQuMDE1LTIuOTgzeiIvPjwvZz48L3N2Zz4="
    }, function(t, e, o) {
        t.exports = o.p + "img/sound.31ac1f0.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1IDE2Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzlBOUZCRiIgZD0iTTEgNS4wMDFjLS41NTMgMC0xIC4zODQtMSAuODU3djQuMjg1QzAgMTAuNjE3LjQ0NyAxMSAxIDExYy41NTIgMCAxLS4zODQgMS0uODU3VjUuODU4YzAtLjQ3My0uNDQ4LS44NTctMS0uODU3eiIvPjxwYXRoIGZpbGw9IiM5QTlGQkYiIGQ9Ik0xMSA3aDJ2MmgtMnoiLz48cGF0aCBmaWxsPSIjOUE5RkJGIiBkPSJNMTEuMDAyIDExdjIuNDRMNiAxMC41MzFWNS40ODlsNS4wMDItMi45MjZWNWgyVjEuNTgxQzEzLjAwMi41OCAxMi41NjMgMCAxMS44NyAwYy0uMjg1IDAtLjYxMy4wOTktLjk3Mi4zMDdMNCA0LjM0MnY3LjM0bDYuODk4IDQuMDEyYy4zNTkuMjA3LjY4Ny4zMDYuOTczLjMwNi42OTIgMCAxLjEzMS0uNTggMS4xMzEtMS41Nzl2LTMuNDE5VjExaC0yek0yMy41ODYgMy43NDZsLTIuODI4IDIuODI4LTIuODI4LTIuODI4LTEuNDE0IDEuNDE0IDIuODI4IDIuODI4LTIuODI4IDIuODI5IDEuNDE0IDEuNDEzIDIuODI4LTIuODI4IDIuODI4IDIuODI4TDI1IDEwLjgxN2wtMi44MjgtMi44MjlMMjUgNS4xNnoiLz48L3N2Zz4="
    }, function(t, e, o) {
        var content = o(260);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("a9684130", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(31),
            r = o(160),
            l = o(261),
            d = o(262),
            c = o(263),
            m = o(264),
            f = o(265),
            h = o(266),
            x = o(267),
            w = o(268),
            v = o(269),
            y = o(270),
            k = o(271),
            j = o(272),
            z = o(273),
            _ = o(274),
            M = o(275),
            O = n(!1),
            C = r(l),
            D = r(l, {
                hash: "?#iefix"
            }),
            I = r(d),
            N = r(c),
            S = r(m),
            T = r(f, {
                hash: "#fontawesome"
            }),
            L = r(h),
            E = r(h, {
                hash: "?#iefix"
            }),
            A = r(x),
            P = r(w),
            R = r(v),
            $ = r(y, {
                hash: "#fontawesome"
            }),
            Y = r(k),
            U = r(k, {
                hash: "?#iefix"
            }),
            Q = r(j),
            B = r(z),
            H = r(_),
            Z = r(M, {
                hash: "#fontawesome"
            });
        O.push([t.i, '/*!\r\n * Font Awesome Free 5.0.6 by @fontawesome - http://fontawesome.com\r\n * License - http://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n */.fa-fw,.fa-li{text-align:center}.fa,.fab,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-feature-settings:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:"\\f26e"}.fa-accessible-icon:before{content:"\\f368"}.fa-accusoft:before{content:"\\f369"}.fa-address-book:before{content:"\\f2b9"}.fa-address-card:before{content:"\\f2bb"}.fa-adjust:before{content:"\\f042"}.fa-adn:before{content:"\\f170"}.fa-adversal:before{content:"\\f36a"}.fa-affiliatetheme:before{content:"\\f36b"}.fa-algolia:before{content:"\\f36c"}.fa-align-center:before{content:"\\f037"}.fa-align-justify:before{content:"\\f039"}.fa-align-left:before{content:"\\f036"}.fa-align-right:before{content:"\\f038"}.fa-amazon:before{content:"\\f270"}.fa-amazon-pay:before{content:"\\f42c"}.fa-ambulance:before{content:"\\f0f9"}.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-amilia:before{content:"\\f36d"}.fa-anchor:before{content:"\\f13d"}.fa-android:before{content:"\\f17b"}.fa-angellist:before{content:"\\f209"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-down:before{content:"\\f107"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angrycreative:before{content:"\\f36e"}.fa-angular:before{content:"\\f420"}.fa-app-store:before{content:"\\f36f"}.fa-app-store-ios:before{content:"\\f370"}.fa-apper:before{content:"\\f371"}.fa-apple:before{content:"\\f179"}.fa-apple-pay:before{content:"\\f415"}.fa-archive:before{content:"\\f187"}.fa-arrow-alt-circle-down:before{content:"\\f358"}.fa-arrow-alt-circle-left:before{content:"\\f359"}.fa-arrow-alt-circle-right:before{content:"\\f35a"}.fa-arrow-alt-circle-up:before{content:"\\f35b"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-down:before{content:"\\f063"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-arrows-alt-h:before{content:"\\f337"}.fa-arrows-alt-v:before{content:"\\f338"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asterisk:before{content:"\\f069"}.fa-asymmetrik:before{content:"\\f372"}.fa-at:before{content:"\\f1fa"}.fa-audible:before{content:"\\f373"}.fa-audio-description:before{content:"\\f29e"}.fa-autoprefixer:before{content:"\\f41c"}.fa-avianex:before{content:"\\f374"}.fa-aviato:before{content:"\\f421"}.fa-aws:before{content:"\\f375"}.fa-backward:before{content:"\\f04a"}.fa-balance-scale:before{content:"\\f24e"}.fa-ban:before{content:"\\f05e"}.fa-bandcamp:before{content:"\\f2d5"}.fa-barcode:before{content:"\\f02a"}.fa-bars:before{content:"\\f0c9"}.fa-baseball-ball:before{content:"\\f433"}.fa-basketball-ball:before{content:"\\f434"}.fa-bath:before{content:"\\f2cd"}.fa-battery-empty:before{content:"\\f244"}.fa-battery-full:before{content:"\\f240"}.fa-battery-half:before{content:"\\f242"}.fa-battery-quarter:before{content:"\\f243"}.fa-battery-three-quarters:before{content:"\\f241"}.fa-bed:before{content:"\\f236"}.fa-beer:before{content:"\\f0fc"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-bell:before{content:"\\f0f3"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bicycle:before{content:"\\f206"}.fa-bimobject:before{content:"\\f378"}.fa-binoculars:before{content:"\\f1e5"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-bitbucket:before{content:"\\f171"}.fa-bitcoin:before{content:"\\f379"}.fa-bity:before{content:"\\f37a"}.fa-black-tie:before{content:"\\f27e"}.fa-blackberry:before{content:"\\f37b"}.fa-blind:before{content:"\\f29d"}.fa-blogger:before{content:"\\f37c"}.fa-blogger-b:before{content:"\\f37d"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-bold:before{content:"\\f032"}.fa-bolt:before{content:"\\f0e7"}.fa-bomb:before{content:"\\f1e2"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-bowling-ball:before{content:"\\f436"}.fa-braille:before{content:"\\f2a1"}.fa-briefcase:before{content:"\\f0b1"}.fa-btc:before{content:"\\f15a"}.fa-bug:before{content:"\\f188"}.fa-building:before{content:"\\f1ad"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bullseye:before{content:"\\f140"}.fa-buromobelexperte:before{content:"\\f37f"}.fa-bus:before{content:"\\f207"}.fa-buysellads:before{content:"\\f20d"}.fa-calculator:before{content:"\\f1ec"}.fa-calendar:before{content:"\\f133"}.fa-calendar-alt:before{content:"\\f073"}.fa-calendar-check:before{content:"\\f274"}.fa-calendar-minus:before{content:"\\f272"}.fa-calendar-plus:before{content:"\\f271"}.fa-calendar-times:before{content:"\\f273"}.fa-camera:before{content:"\\f030"}.fa-camera-retro:before{content:"\\f083"}.fa-car:before{content:"\\f1b9"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-caret-square-down:before{content:"\\f150"}.fa-caret-square-left:before{content:"\\f191"}.fa-caret-square-right:before{content:"\\f152"}.fa-caret-square-up:before{content:"\\f151"}.fa-caret-up:before{content:"\\f0d8"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-cart-plus:before{content:"\\f217"}.fa-cc-amazon-pay:before{content:"\\f42d"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-apple-pay:before{content:"\\f416"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-cc-visa:before{content:"\\f1f0"}.fa-centercode:before{content:"\\f380"}.fa-certificate:before{content:"\\f0a3"}.fa-chart-area:before{content:"\\f1fe"}.fa-chart-bar:before{content:"\\f080"}.fa-chart-line:before{content:"\\f201"}.fa-chart-pie:before{content:"\\f200"}.fa-check:before{content:"\\f00c"}.fa-check-circle:before{content:"\\f058"}.fa-check-square:before{content:"\\f14a"}.fa-chess:before{content:"\\f439"}.fa-chess-bishop:before{content:"\\f43a"}.fa-chess-board:before{content:"\\f43c"}.fa-chess-king:before{content:"\\f43f"}.fa-chess-knight:before{content:"\\f441"}.fa-chess-pawn:before{content:"\\f443"}.fa-chess-queen:before{content:"\\f445"}.fa-chess-rook:before{content:"\\f447"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-down:before{content:"\\f078"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-chevron-up:before{content:"\\f077"}.fa-child:before{content:"\\f1ae"}.fa-chrome:before{content:"\\f268"}.fa-circle:before{content:"\\f111"}.fa-circle-notch:before{content:"\\f1ce"}.fa-clipboard:before{content:"\\f328"}.fa-clock:before{content:"\\f017"}.fa-clone:before{content:"\\f24d"}.fa-closed-captioning:before{content:"\\f20a"}.fa-cloud:before{content:"\\f0c2"}.fa-cloud-download-alt:before{content:"\\f381"}.fa-cloud-upload-alt:before{content:"\\f382"}.fa-cloudscale:before{content:"\\f383"}.fa-cloudsmith:before{content:"\\f384"}.fa-cloudversify:before{content:"\\f385"}.fa-code:before{content:"\\f121"}.fa-code-branch:before{content:"\\f126"}.fa-codepen:before{content:"\\f1cb"}.fa-codiepie:before{content:"\\f284"}.fa-coffee:before{content:"\\f0f4"}.fa-cog:before{content:"\\f013"}.fa-cogs:before{content:"\\f085"}.fa-columns:before{content:"\\f0db"}.fa-comment:before{content:"\\f075"}.fa-comment-alt:before{content:"\\f27a"}.fa-comments:before{content:"\\f086"}.fa-compass:before{content:"\\f14e"}.fa-compress:before{content:"\\f066"}.fa-connectdevelop:before{content:"\\f20e"}.fa-contao:before{content:"\\f26d"}.fa-copy:before{content:"\\f0c5"}.fa-copyright:before{content:"\\f1f9"}.fa-cpanel:before{content:"\\f388"}.fa-creative-commons:before{content:"\\f25e"}.fa-credit-card:before{content:"\\f09d"}.fa-crop:before{content:"\\f125"}.fa-crosshairs:before{content:"\\f05b"}.fa-css3:before{content:"\\f13c"}.fa-css3-alt:before{content:"\\f38b"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-cut:before{content:"\\f0c4"}.fa-cuttlefish:before{content:"\\f38c"}.fa-d-and-d:before{content:"\\f38d"}.fa-dashcube:before{content:"\\f210"}.fa-database:before{content:"\\f1c0"}.fa-deaf:before{content:"\\f2a4"}.fa-delicious:before{content:"\\f1a5"}.fa-deploydog:before{content:"\\f38e"}.fa-deskpro:before{content:"\\f38f"}.fa-desktop:before{content:"\\f108"}.fa-deviantart:before{content:"\\f1bd"}.fa-digg:before{content:"\\f1a6"}.fa-digital-ocean:before{content:"\\f391"}.fa-discord:before{content:"\\f392"}.fa-discourse:before{content:"\\f393"}.fa-dochub:before{content:"\\f394"}.fa-docker:before{content:"\\f395"}.fa-dollar-sign:before{content:"\\f155"}.fa-dot-circle:before{content:"\\f192"}.fa-download:before{content:"\\f019"}.fa-draft2digital:before{content:"\\f396"}.fa-dribbble:before{content:"\\f17d"}.fa-dribbble-square:before{content:"\\f397"}.fa-dropbox:before{content:"\\f16b"}.fa-drupal:before{content:"\\f1a9"}.fa-dyalog:before{content:"\\f399"}.fa-earlybirds:before{content:"\\f39a"}.fa-edge:before{content:"\\f282"}.fa-edit:before{content:"\\f044"}.fa-eject:before{content:"\\f052"}.fa-elementor:before{content:"\\f430"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-ember:before{content:"\\f423"}.fa-empire:before{content:"\\f1d1"}.fa-envelope:before{content:"\\f0e0"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-square:before{content:"\\f199"}.fa-envira:before{content:"\\f299"}.fa-eraser:before{content:"\\f12d"}.fa-erlang:before{content:"\\f39d"}.fa-ethereum:before{content:"\\f42e"}.fa-etsy:before{content:"\\f2d7"}.fa-euro-sign:before{content:"\\f153"}.fa-exchange-alt:before{content:"\\f362"}.fa-exclamation:before{content:"\\f12a"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-exclamation-triangle:before{content:"\\f071"}.fa-expand:before{content:"\\f065"}.fa-expand-arrows-alt:before{content:"\\f31e"}.fa-expeditedssl:before{content:"\\f23e"}.fa-external-link-alt:before{content:"\\f35d"}.fa-external-link-square-alt:before{content:"\\f360"}.fa-eye:before{content:"\\f06e"}.fa-eye-dropper:before{content:"\\f1fb"}.fa-eye-slash:before{content:"\\f070"}.fa-facebook:before{content:"\\f09a"}.fa-facebook-f:before{content:"\\f39e"}.fa-facebook-messenger:before{content:"\\f39f"}.fa-facebook-square:before{content:"\\f082"}.fa-fast-backward:before{content:"\\f049"}.fa-fast-forward:before{content:"\\f050"}.fa-fax:before{content:"\\f1ac"}.fa-female:before{content:"\\f182"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-file:before{content:"\\f15b"}.fa-file-alt:before{content:"\\f15c"}.fa-file-archive:before{content:"\\f1c6"}.fa-file-audio:before{content:"\\f1c7"}.fa-file-code:before{content:"\\f1c9"}.fa-file-excel:before{content:"\\f1c3"}.fa-file-image:before{content:"\\f1c5"}.fa-file-pdf:before{content:"\\f1c1"}.fa-file-powerpoint:before{content:"\\f1c4"}.fa-file-video:before{content:"\\f1c8"}.fa-file-word:before{content:"\\f1c2"}.fa-film:before{content:"\\f008"}.fa-filter:before{content:"\\f0b0"}.fa-fire:before{content:"\\f06d"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-firefox:before{content:"\\f269"}.fa-first-order:before{content:"\\f2b0"}.fa-firstdraft:before{content:"\\f3a1"}.fa-flag:before{content:"\\f024"}.fa-flag-checkered:before{content:"\\f11e"}.fa-flask:before{content:"\\f0c3"}.fa-flickr:before{content:"\\f16e"}.fa-flipboard:before{content:"\\f44d"}.fa-fly:before{content:"\\f417"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-font:before{content:"\\f031"}.fa-font-awesome:before{content:"\\f2b4"}.fa-font-awesome-alt:before{content:"\\f35c"}.fa-font-awesome-flag:before{content:"\\f425"}.fa-fonticons:before{content:"\\f280"}.fa-fonticons-fi:before{content:"\\f3a2"}.fa-football-ball:before{content:"\\f44e"}.fa-fort-awesome:before{content:"\\f286"}.fa-fort-awesome-alt:before{content:"\\f3a3"}.fa-forumbee:before{content:"\\f211"}.fa-forward:before{content:"\\f04e"}.fa-foursquare:before{content:"\\f180"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-freebsd:before{content:"\\f3a4"}.fa-frown:before{content:"\\f119"}.fa-futbol:before{content:"\\f1e3"}.fa-gamepad:before{content:"\\f11b"}.fa-gavel:before{content:"\\f0e3"}.fa-gem:before{content:"\\f3a5"}.fa-genderless:before{content:"\\f22d"}.fa-get-pocket:before{content:"\\f265"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-gift:before{content:"\\f06b"}.fa-git:before{content:"\\f1d3"}.fa-git-square:before{content:"\\f1d2"}.fa-github:before{content:"\\f09b"}.fa-github-alt:before{content:"\\f113"}.fa-github-square:before{content:"\\f092"}.fa-gitkraken:before{content:"\\f3a6"}.fa-gitlab:before{content:"\\f296"}.fa-gitter:before{content:"\\f426"}.fa-glass-martini:before{content:"\\f000"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-globe:before{content:"\\f0ac"}.fa-gofore:before{content:"\\f3a7"}.fa-golf-ball:before{content:"\\f450"}.fa-goodreads:before{content:"\\f3a8"}.fa-goodreads-g:before{content:"\\f3a9"}.fa-google:before{content:"\\f1a0"}.fa-google-drive:before{content:"\\f3aa"}.fa-google-play:before{content:"\\f3ab"}.fa-google-plus:before{content:"\\f2b3"}.fa-google-plus-g:before{content:"\\f0d5"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-wallet:before{content:"\\f1ee"}.fa-graduation-cap:before{content:"\\f19d"}.fa-gratipay:before{content:"\\f184"}.fa-grav:before{content:"\\f2d6"}.fa-gripfire:before{content:"\\f3ac"}.fa-grunt:before{content:"\\f3ad"}.fa-gulp:before{content:"\\f3ae"}.fa-h-square:before{content:"\\f0fd"}.fa-hacker-news:before{content:"\\f1d4"}.fa-hacker-news-square:before{content:"\\f3af"}.fa-hand-lizard:before{content:"\\f258"}.fa-hand-paper:before{content:"\\f256"}.fa-hand-peace:before{content:"\\f25b"}.fa-hand-point-down:before{content:"\\f0a7"}.fa-hand-point-left:before{content:"\\f0a5"}.fa-hand-point-right:before{content:"\\f0a4"}.fa-hand-point-up:before{content:"\\f0a6"}.fa-hand-pointer:before{content:"\\f25a"}.fa-hand-rock:before{content:"\\f255"}.fa-hand-scissors:before{content:"\\f257"}.fa-hand-spock:before{content:"\\f259"}.fa-handshake:before{content:"\\f2b5"}.fa-hashtag:before{content:"\\f292"}.fa-hdd:before{content:"\\f0a0"}.fa-heading:before{content:"\\f1dc"}.fa-headphones:before{content:"\\f025"}.fa-heart:before{content:"\\f004"}.fa-heartbeat:before{content:"\\f21e"}.fa-hips:before{content:"\\f452"}.fa-hire-a-helper:before{content:"\\f3b0"}.fa-history:before{content:"\\f1da"}.fa-hockey-puck:before{content:"\\f453"}.fa-home:before{content:"\\f015"}.fa-hooli:before{content:"\\f427"}.fa-hospital:before{content:"\\f0f8"}.fa-hotjar:before{content:"\\f3b1"}.fa-hourglass:before{content:"\\f254"}.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-start:before{content:"\\f251"}.fa-houzz:before{content:"\\f27c"}.fa-html5:before{content:"\\f13b"}.fa-hubspot:before{content:"\\f3b2"}.fa-i-cursor:before{content:"\\f246"}.fa-id-badge:before{content:"\\f2c1"}.fa-id-card:before{content:"\\f2c2"}.fa-image:before{content:"\\f03e"}.fa-images:before{content:"\\f302"}.fa-imdb:before{content:"\\f2d8"}.fa-inbox:before{content:"\\f01c"}.fa-indent:before{content:"\\f03c"}.fa-industry:before{content:"\\f275"}.fa-info:before{content:"\\f129"}.fa-info-circle:before{content:"\\f05a"}.fa-instagram:before{content:"\\f16d"}.fa-internet-explorer:before{content:"\\f26b"}.fa-ioxhost:before{content:"\\f208"}.fa-italic:before{content:"\\f033"}.fa-itunes:before{content:"\\f3b4"}.fa-itunes-note:before{content:"\\f3b5"}.fa-jenkins:before{content:"\\f3b6"}.fa-joget:before{content:"\\f3b7"}.fa-joomla:before{content:"\\f1aa"}.fa-js:before{content:"\\f3b8"}.fa-js-square:before{content:"\\f3b9"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-key:before{content:"\\f084"}.fa-keyboard:before{content:"\\f11c"}.fa-keycdn:before{content:"\\f3ba"}.fa-kickstarter:before{content:"\\f3bb"}.fa-kickstarter-k:before{content:"\\f3bc"}.fa-korvue:before{content:"\\f42f"}.fa-language:before{content:"\\f1ab"}.fa-laptop:before{content:"\\f109"}.fa-laravel:before{content:"\\f3bd"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-leaf:before{content:"\\f06c"}.fa-leanpub:before{content:"\\f212"}.fa-lemon:before{content:"\\f094"}.fa-less:before{content:"\\f41d"}.fa-level-down-alt:before{content:"\\f3be"}.fa-level-up-alt:before{content:"\\f3bf"}.fa-life-ring:before{content:"\\f1cd"}.fa-lightbulb:before{content:"\\f0eb"}.fa-line:before{content:"\\f3c0"}.fa-link:before{content:"\\f0c1"}.fa-linkedin:before{content:"\\f08c"}.fa-linkedin-in:before{content:"\\f0e1"}.fa-linode:before{content:"\\f2b8"}.fa-linux:before{content:"\\f17c"}.fa-lira-sign:before{content:"\\f195"}.fa-list:before{content:"\\f03a"}.fa-list-alt:before{content:"\\f022"}.fa-list-ol:before{content:"\\f0cb"}.fa-list-ul:before{content:"\\f0ca"}.fa-location-arrow:before{content:"\\f124"}.fa-lock:before{content:"\\f023"}.fa-lock-open:before{content:"\\f3c1"}.fa-long-arrow-alt-down:before{content:"\\f309"}.fa-long-arrow-alt-left:before{content:"\\f30a"}.fa-long-arrow-alt-right:before{content:"\\f30b"}.fa-long-arrow-alt-up:before{content:"\\f30c"}.fa-low-vision:before{content:"\\f2a8"}.fa-lyft:before{content:"\\f3c3"}.fa-magento:before{content:"\\f3c4"}.fa-magic:before{content:"\\f0d0"}.fa-magnet:before{content:"\\f076"}.fa-male:before{content:"\\f183"}.fa-map:before{content:"\\f279"}.fa-map-marker:before{content:"\\f041"}.fa-map-marker-alt:before{content:"\\f3c5"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-mars:before{content:"\\f222"}.fa-mars-double:before{content:"\\f227"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-maxcdn:before{content:"\\f136"}.fa-medapps:before{content:"\\f3c6"}.fa-medium:before{content:"\\f23a"}.fa-medium-m:before{content:"\\f3c7"}.fa-medkit:before{content:"\\f0fa"}.fa-medrt:before{content:"\\f3c8"}.fa-meetup:before{content:"\\f2e0"}.fa-meh:before{content:"\\f11a"}.fa-mercury:before{content:"\\f223"}.fa-microchip:before{content:"\\f2db"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-microsoft:before{content:"\\f3ca"}.fa-minus:before{content:"\\f068"}.fa-minus-circle:before{content:"\\f056"}.fa-minus-square:before{content:"\\f146"}.fa-mix:before{content:"\\f3cb"}.fa-mixcloud:before{content:"\\f289"}.fa-mizuni:before{content:"\\f3cc"}.fa-mobile:before{content:"\\f10b"}.fa-mobile-alt:before{content:"\\f3cd"}.fa-modx:before{content:"\\f285"}.fa-monero:before{content:"\\f3d0"}.fa-money-bill-alt:before{content:"\\f3d1"}.fa-moon:before{content:"\\f186"}.fa-motorcycle:before{content:"\\f21c"}.fa-mouse-pointer:before{content:"\\f245"}.fa-music:before{content:"\\f001"}.fa-napster:before{content:"\\f3d2"}.fa-neuter:before{content:"\\f22c"}.fa-newspaper:before{content:"\\f1ea"}.fa-nintendo-switch:before{content:"\\f418"}.fa-node:before{content:"\\f419"}.fa-node-js:before{content:"\\f3d3"}.fa-npm:before{content:"\\f3d4"}.fa-ns8:before{content:"\\f3d5"}.fa-nutritionix:before{content:"\\f3d6"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-opencart:before{content:"\\f23d"}.fa-openid:before{content:"\\f19b"}.fa-opera:before{content:"\\f26a"}.fa-optin-monster:before{content:"\\f23c"}.fa-osi:before{content:"\\f41a"}.fa-outdent:before{content:"\\f03b"}.fa-page4:before{content:"\\f3d7"}.fa-pagelines:before{content:"\\f18c"}.fa-paint-brush:before{content:"\\f1fc"}.fa-palfed:before{content:"\\f3d8"}.fa-paper-plane:before{content:"\\f1d8"}.fa-paperclip:before{content:"\\f0c6"}.fa-paragraph:before{content:"\\f1dd"}.fa-paste:before{content:"\\f0ea"}.fa-patreon:before{content:"\\f3d9"}.fa-pause:before{content:"\\f04c"}.fa-pause-circle:before{content:"\\f28b"}.fa-paw:before{content:"\\f1b0"}.fa-paypal:before{content:"\\f1ed"}.fa-pen-square:before{content:"\\f14b"}.fa-pencil-alt:before{content:"\\f303"}.fa-percent:before{content:"\\f295"}.fa-periscope:before{content:"\\f3da"}.fa-phabricator:before{content:"\\f3db"}.fa-phoenix-framework:before{content:"\\f3dc"}.fa-phone:before{content:"\\f095"}.fa-phone-square:before{content:"\\f098"}.fa-phone-volume:before{content:"\\f2a0"}.fa-php:before{content:"\\f457"}.fa-pied-piper:before{content:"\\f2ae"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-p:before{content:"\\f231"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-plane:before{content:"\\f072"}.fa-play:before{content:"\\f04b"}.fa-play-circle:before{content:"\\f144"}.fa-playstation:before{content:"\\f3df"}.fa-plug:before{content:"\\f1e6"}.fa-plus:before{content:"\\f067"}.fa-plus-circle:before{content:"\\f055"}.fa-plus-square:before{content:"\\f0fe"}.fa-podcast:before{content:"\\f2ce"}.fa-pound-sign:before{content:"\\f154"}.fa-power-off:before{content:"\\f011"}.fa-print:before{content:"\\f02f"}.fa-product-hunt:before{content:"\\f288"}.fa-pushed:before{content:"\\f3e1"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-python:before{content:"\\f3e2"}.fa-qq:before{content:"\\f1d6"}.fa-qrcode:before{content:"\\f029"}.fa-question:before{content:"\\f128"}.fa-question-circle:before{content:"\\f059"}.fa-quidditch:before{content:"\\f458"}.fa-quinscape:before{content:"\\f459"}.fa-quora:before{content:"\\f2c4"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-random:before{content:"\\f074"}.fa-ravelry:before{content:"\\f2d9"}.fa-react:before{content:"\\f41b"}.fa-rebel:before{content:"\\f1d0"}.fa-recycle:before{content:"\\f1b8"}.fa-red-river:before{content:"\\f3e3"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-alien:before{content:"\\f281"}.fa-reddit-square:before{content:"\\f1a2"}.fa-redo:before{content:"\\f01e"}.fa-redo-alt:before{content:"\\f2f9"}.fa-registered:before{content:"\\f25d"}.fa-rendact:before{content:"\\f3e4"}.fa-renren:before{content:"\\f18b"}.fa-reply:before{content:"\\f3e5"}.fa-reply-all:before{content:"\\f122"}.fa-replyd:before{content:"\\f3e6"}.fa-resolving:before{content:"\\f3e7"}.fa-retweet:before{content:"\\f079"}.fa-road:before{content:"\\f018"}.fa-rocket:before{content:"\\f135"}.fa-rocketchat:before{content:"\\f3e8"}.fa-rockrms:before{content:"\\f3e9"}.fa-rss:before{content:"\\f09e"}.fa-rss-square:before{content:"\\f143"}.fa-ruble-sign:before{content:"\\f158"}.fa-rupee-sign:before{content:"\\f156"}.fa-safari:before{content:"\\f267"}.fa-sass:before{content:"\\f41e"}.fa-save:before{content:"\\f0c7"}.fa-schlix:before{content:"\\f3ea"}.fa-scribd:before{content:"\\f28a"}.fa-search:before{content:"\\f002"}.fa-search-minus:before{content:"\\f010"}.fa-search-plus:before{content:"\\f00e"}.fa-searchengin:before{content:"\\f3eb"}.fa-sellcast:before{content:"\\f2da"}.fa-sellsy:before{content:"\\f213"}.fa-server:before{content:"\\f233"}.fa-servicestack:before{content:"\\f3ec"}.fa-share:before{content:"\\f064"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-share-square:before{content:"\\f14d"}.fa-shekel-sign:before{content:"\\f20b"}.fa-shield-alt:before{content:"\\f3ed"}.fa-ship:before{content:"\\f21a"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-shopping-cart:before{content:"\\f07a"}.fa-shower:before{content:"\\f2cc"}.fa-sign-in-alt:before{content:"\\f2f6"}.fa-sign-language:before{content:"\\f2a7"}.fa-sign-out-alt:before{content:"\\f2f5"}.fa-signal:before{content:"\\f012"}.fa-simplybuilt:before{content:"\\f215"}.fa-sistrix:before{content:"\\f3ee"}.fa-sitemap:before{content:"\\f0e8"}.fa-skyatlas:before{content:"\\f216"}.fa-skype:before{content:"\\f17e"}.fa-slack:before{content:"\\f198"}.fa-slack-hash:before{content:"\\f3ef"}.fa-sliders-h:before{content:"\\f1de"}.fa-slideshare:before{content:"\\f1e7"}.fa-smile:before{content:"\\f118"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-snowflake:before{content:"\\f2dc"}.fa-sort:before{content:"\\f0dc"}.fa-sort-alpha-down:before{content:"\\f15d"}.fa-sort-alpha-up:before{content:"\\f15e"}.fa-sort-amount-down:before{content:"\\f160"}.fa-sort-amount-up:before{content:"\\f161"}.fa-sort-down:before{content:"\\f0dd"}.fa-sort-numeric-down:before{content:"\\f162"}.fa-sort-numeric-up:before{content:"\\f163"}.fa-sort-up:before{content:"\\f0de"}.fa-soundcloud:before{content:"\\f1be"}.fa-space-shuttle:before{content:"\\f197"}.fa-speakap:before{content:"\\f3f3"}.fa-spinner:before{content:"\\f110"}.fa-spotify:before{content:"\\f1bc"}.fa-square:before{content:"\\f0c8"}.fa-square-full:before{content:"\\f45c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-stack-overflow:before{content:"\\f16c"}.fa-star:before{content:"\\f005"}.fa-star-half:before{content:"\\f089"}.fa-staylinked:before{content:"\\f3f5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-steam-symbol:before{content:"\\f3f6"}.fa-step-backward:before{content:"\\f048"}.fa-step-forward:before{content:"\\f051"}.fa-stethoscope:before{content:"\\f0f1"}.fa-sticker-mule:before{content:"\\f3f7"}.fa-sticky-note:before{content:"\\f249"}.fa-stop:before{content:"\\f04d"}.fa-stop-circle:before{content:"\\f28d"}.fa-stopwatch:before{content:"\\f2f2"}.fa-strava:before{content:"\\f428"}.fa-street-view:before{content:"\\f21d"}.fa-strikethrough:before{content:"\\f0cc"}.fa-stripe:before{content:"\\f429"}.fa-stripe-s:before{content:"\\f42a"}.fa-studiovinari:before{content:"\\f3f8"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-subscript:before{content:"\\f12c"}.fa-subway:before{content:"\\f239"}.fa-suitcase:before{content:"\\f0f2"}.fa-sun:before{content:"\\f185"}.fa-superpowers:before{content:"\\f2dd"}.fa-superscript:before{content:"\\f12b"}.fa-supple:before{content:"\\f3f9"}.fa-sync:before{content:"\\f021"}.fa-sync-alt:before{content:"\\f2f1"}.fa-table:before{content:"\\f0ce"}.fa-table-tennis:before{content:"\\f45d"}.fa-tablet:before{content:"\\f10a"}.fa-tablet-alt:before{content:"\\f3fa"}.fa-tachometer-alt:before{content:"\\f3fd"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-tasks:before{content:"\\f0ae"}.fa-taxi:before{content:"\\f1ba"}.fa-telegram:before{content:"\\f2c6"}.fa-telegram-plane:before{content:"\\f3fe"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-terminal:before{content:"\\f120"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-th:before{content:"\\f00a"}.fa-th-large:before{content:"\\f009"}.fa-th-list:before{content:"\\f00b"}.fa-themeisle:before{content:"\\f2b2"}.fa-thermometer-empty:before{content:"\\f2cb"}.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thumbs-down:before{content:"\\f165"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbtack:before{content:"\\f08d"}.fa-ticket-alt:before{content:"\\f3ff"}.fa-times:before{content:"\\f00d"}.fa-times-circle:before{content:"\\f057"}.fa-tint:before{content:"\\f043"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-trademark:before{content:"\\f25c"}.fa-train:before{content:"\\f238"}.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-trash:before{content:"\\f1f8"}.fa-trash-alt:before{content:"\\f2ed"}.fa-tree:before{content:"\\f1bb"}.fa-trello:before{content:"\\f181"}.fa-tripadvisor:before{content:"\\f262"}.fa-trophy:before{content:"\\f091"}.fa-truck:before{content:"\\f0d1"}.fa-tty:before{content:"\\f1e4"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-tv:before{content:"\\f26c"}.fa-twitch:before{content:"\\f1e8"}.fa-twitter:before{content:"\\f099"}.fa-twitter-square:before{content:"\\f081"}.fa-typo3:before{content:"\\f42b"}.fa-uber:before{content:"\\f402"}.fa-uikit:before{content:"\\f403"}.fa-umbrella:before{content:"\\f0e9"}.fa-underline:before{content:"\\f0cd"}.fa-undo:before{content:"\\f0e2"}.fa-undo-alt:before{content:"\\f2ea"}.fa-uniregistry:before{content:"\\f404"}.fa-universal-access:before{content:"\\f29a"}.fa-university:before{content:"\\f19c"}.fa-unlink:before{content:"\\f127"}.fa-unlock:before{content:"\\f09c"}.fa-unlock-alt:before{content:"\\f13e"}.fa-untappd:before{content:"\\f405"}.fa-upload:before{content:"\\f093"}.fa-usb:before{content:"\\f287"}.fa-user:before{content:"\\f007"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-md:before{content:"\\f0f0"}.fa-user-plus:before{content:"\\f234"}.fa-user-secret:before{content:"\\f21b"}.fa-user-times:before{content:"\\f235"}.fa-users:before{content:"\\f0c0"}.fa-ussunnah:before{content:"\\f407"}.fa-utensil-spoon:before{content:"\\f2e5"}.fa-utensils:before{content:"\\f2e7"}.fa-vaadin:before{content:"\\f408"}.fa-venus:before{content:"\\f221"}.fa-venus-double:before{content:"\\f226"}.fa-venus-mars:before{content:"\\f228"}.fa-viacoin:before{content:"\\f237"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-viber:before{content:"\\f409"}.fa-video:before{content:"\\f03d"}.fa-vimeo:before{content:"\\f40a"}.fa-vimeo-square:before{content:"\\f194"}.fa-vimeo-v:before{content:"\\f27d"}.fa-vine:before{content:"\\f1ca"}.fa-vk:before{content:"\\f189"}.fa-vnv:before{content:"\\f40b"}.fa-volleyball-ball:before{content:"\\f45f"}.fa-volume-down:before{content:"\\f027"}.fa-volume-off:before{content:"\\f026"}.fa-volume-up:before{content:"\\f028"}.fa-vuejs:before{content:"\\f41f"}.fa-weibo:before{content:"\\f18a"}.fa-weixin:before{content:"\\f1d7"}.fa-whatsapp:before{content:"\\f232"}.fa-whatsapp-square:before{content:"\\f40c"}.fa-wheelchair:before{content:"\\f193"}.fa-whmcs:before{content:"\\f40d"}.fa-wifi:before{content:"\\f1eb"}.fa-wikipedia-w:before{content:"\\f266"}.fa-window-close:before{content:"\\f410"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-windows:before{content:"\\f17a"}.fa-won-sign:before{content:"\\f159"}.fa-wordpress:before{content:"\\f19a"}.fa-wordpress-simple:before{content:"\\f411"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpexplorer:before{content:"\\f2de"}.fa-wpforms:before{content:"\\f298"}.fa-wrench:before{content:"\\f0ad"}.fa-xbox:before{content:"\\f412"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-y-combinator:before{content:"\\f23b"}.fa-yahoo:before{content:"\\f19e"}.fa-yandex:before{content:"\\f413"}.fa-yandex-international:before{content:"\\f414"}.fa-yelp:before{content:"\\f1e9"}.fa-yen-sign:before{content:"\\f157"}.fa-yoast:before{content:"\\f2b1"}.fa-youtube:before{content:"\\f167"}.fa-youtube-square:before{content:"\\f431"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:"Font Awesome 5 Brands";font-style:normal;font-weight:400;src:url(' + C + ");src:url(" + D + ') format("embedded-opentype"),url(' + I + ') format("woff2"),url(' + N + ') format("woff"),url(' + S + ') format("truetype"),url(' + T + ') format("svg")}.fab{font-family:"Font Awesome 5 Brands"}.fa,.far,.fas{font-family:"Font Awesome 5 Free"}@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:400;src:url(' + L + ");src:url(" + E + ') format("embedded-opentype"),url(' + A + ') format("woff2"),url(' + P + ') format("woff"),url(' + R + ') format("truetype"),url(' + $ + ') format("svg")}.far{font-weight:400}@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:900;src:url(' + Y + ");src:url(" + U + ') format("embedded-opentype"),url(' + Q + ') format("woff2"),url(' + B + ') format("woff"),url(' + H + ') format("truetype"),url(' + Z + ') format("svg")}.fa,.fas{font-weight:900}', ""]), t.exports = O
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-brands-400.6ebfb17.eot"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-brands-400.6563814.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-brands-400.4614227.woff"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-brands-400.a7bf6b7.ttf"
    }, function(t, e, o) {
        t.exports = o.p + "img/fa-brands-400.4f16f0a.svg"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-regular-400.2a7d0e4.eot"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-regular-400.4e988e0.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-regular-400.9532d08.woff"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-regular-400.c9b43a4.ttf"
    }, function(t, e, o) {
        t.exports = o.p + "img/fa-regular-400.c4257f4.svg"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-solid-900.5e5c6e5.eot"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-solid-900.ea995b6.woff2"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-solid-900.0fc3f8c.woff"
    }, function(t, e, o) {
        t.exports = o.p + "fonts/fa-solid-900.ea6ccb0.ttf"
    }, function(t, e, o) {
        t.exports = o.p + "img/fa-solid-900.c6f75f2.svg"
    }, function(t, e, o) {
        var content = o(277);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, o(32).default)("2632a580", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, o) {
        var n = o(31)(!1);
        n.push([t.i, ".color-ksht001{color:#ff7200!important}.color-ksht002{color:red!important}.color-black{color:#333!important}.color-darkblue{color:#2f5b9d!important}.color-warning{color:#9f6000!important}.color-violet{color:#7442ce!important}.color-primary{color:#ff5e3a!important}.color-secondary{color:#3f4257!important}.color-purple{color:#7c5ac2!important}.color-blue{color:#38a9ff!important}.color-bluelight{color:#00b7ff!important}.color-breez{color:#08ddc1!important}.color-breez-light{color:#2aebcb!important}.color-grey{color:#515365!important}.color-greylight{color:#888da8!important}.color-greylighter{color:#9a9fbf!important}.color-orange{color:#ff763a!important}.color-yellow{color:#ffdc1b!important}.color-yellowlight{color:#ffffe6!important}.color-smoke{color:#e6ecf5!important}.color-smokelight{color:#fafbfd!important}.color-green{color:#1ed760!important}.color-greenlight{color:#ecffe2!important}.color-facebook{color:#2f5b9d!important}.color-twitter{color:#38bff1!important}.color-dribbble{color:#f74881!important}.color-google{color:#ea4235!important}.color-white{color:#fff!important}.color-darkblack{color:#000!important}.loading{display:flex;align-items:center;justify-content:center;min-height:48px}.loading-icon{background-image:url(https://assets.dallashanuman.net/images/common/arrow-loader-48.gif);width:48px}.ico-sm{height:20px;margin:10px}.ico-md{height:48px;margin:10px}.ico-sm-rightalign{height:20px;margin:0}.ico-smallest{height:15px;margin:1px}.ico-lg{height:30px;margin:15px}.ico-svg-lg{height:120px;margin:120px;align-content:center}.linetype1{color:#ccc;border-style:dashed;border-width:1px;width:100%}.linetype2{border-style:dotted;border-width:1px;color:#111;border-style:solid;border-width:2px;width:90%;align-content:center}ul.bullet-circle{list-style-type:disc;margin-left:15px}ul.no-circle{list-style:none;padding:0}.short-timing{font-size:18px;text-transform:uppercase;font-weight:200;background-color:#fff}.block-bg-000{background-color:#fff!important}.block-bg-001{background-color:#ffffe6!important}.block-bg-002{background-color:#ecffe2!important}.w-last-photogallery{margin-bottom:0;overflow:hidden}.w-last-photogallery li{width:30%;float:left;padding:0 4px 4px 0;overflow:hidden}.w-last-photogallery img{width:100%;border-radius:4px}.w-last-photogallery-sm{margin-bottom:0;overflow:hidden}.w-last-photogallery-sm li{width:20%;float:left;padding:0 4px 4px 0;overflow:hidden}.w-last-photogallery-sm img{width:100%;border-radius:4px}.card-bg-common1{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common1-400x100px.png);background-color:#d74144}.card-bg-common2{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common2-400x100px.png);background-color:#d74144}.card-bg-common3{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common3-400x100px.png);background-color:#d74144}.card-bg-common4{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common4-400x100px.png);background-color:#d74144}.card-bg-common5{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common5-400x100px.png);background-color:#d74144}.card-bg-common6{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common6-400x100px.png);background-color:#d74144}.card-bg-common7{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common7-400x100px.png);background-color:#d74144}.card-bg-common8{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common8-400x100px.png);background-color:#d74144}.card-bg-common9{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common9-400x100px.png);background-color:#d74144}.card-bg-common10{background-image:url(https://assets.dallashanuman.net/images/common/backgrounds-common10-400x100px.png);background-color:#d74144}.bg-homepage{background-image:url(https://assets.dallashanuman.net/images/homepage/bg-ksht-design-1940.jpg);background-color:#be4d00}.bg-priest{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-priests1920x400.jpg);background-color:#460103}.bg-board{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-board-1920x400.jpg);background-color:#053f0b}.bg-deities{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-deities-1920x400.jpg);background-color:#0e2244}.bg-direction{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-direction-1920x400.jpg);background-color:#0e2244}.bg-facility{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-facility-1920x400.jpg);background-color:#ccc}.bg-swamiji{background-image:url(https://assets.dallashanuman.net/images/common/bgsm-pg-hdr-sgs-1500x340.png);background-color:#ccc}.bg-swamiji-1up{background-image:url(https://assets.dallashanuman.net/images/common/bg-1up-temple-1940.jpg);background-color:#480105;background-position:50%;background-repeat:no-repeat}.bg-sgs-fb{background-image:url(https://assets.dallashanuman.net/images/common/bgsm-pg-hdr-fb-1500.jpg);background-color:#102000}.bg-parking{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-parking-1940.jpg);background-color:#0e2244}.bg-annadaan{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-annadaan-1940.jpg);background-color:#2b0031}.bg-canteen{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-canteen-1940.jpg);background-color:#853d01}.bg-priestrequest{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-pujrequest-1940.jpg);background-color:#06214f}.bg-walkathon{background-image:url(https://assets.dallashanuman.net/images/event/2019/walkatontop.jpg);background-color:#06214f}.bg-walkathon2{background-image:url(https://assets.dallashanuman.net/images/event/2019/walkatontop2.jpg);background-color:#06214f}.bg-walkathonbg{background-image:url(https://assets.dallashanuman.net/images/event/2019/form-bg.jpg);background-color:#06214f}.bg-pujasch{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-pujasch-1940.jpg);background-color:#d74144}.bg-rajagopuracourtyard{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-rajagopuracourtyard-1940.jpg);background-color:#d74144}.bg-discourses{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-discourses-deepam-v1-1920.jpg);background-color:#be4d00}.bg-featured{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-featured-bells-light-1920.jpg)}.bg-estore{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-estore-v2-1920.jpg)}.bg-estore,.bg-health{background-color:#ff7200}.bg-health{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-health-v1-1920.jpg)}.bg-featured{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-featured-v1-1920.jpg);background-color:#ff7200}.bg-cultural{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-cultural-v1-1920.jpg);background-color:#ff7200}.bg-community{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-community-v1-1920.jpg);background-color:#ff7200}.bg-downloads{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-downloads-v1-1920.jpg);background-color:#ff7200}.bg-classes{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-classes-v2-1920.jpg);background-color:#ff7200}.bg-festivals{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-festivals-v1-1920.jpg);background-color:#ff7200}.bg-carpuja{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-carpuja-1940.jpg)}.bg-healthfair{background-image:url(https://assets.dallashanuman.net/images/event/2019/healthfair.jpg)}.bg-history{background-image:url(https://assets.dallashanuman.net/images/common/bg-hp-hanuman-flying.jpg)}.bg-aboutswamiji{background-image:url(https://assets.dallashanuman.net/images/common/bg-hp-hdr-hanuman-dome.jpg)}.bg-calendar{background-image:url(https://assets.dallashanuman.net/images/common/bg-pg-hdr-calendar-1940.jpg)}.bg-baladatta{background-image:url(https://assets.dallashanuman.net/images/classes/baladatta/baladatta_page_bg_new.jpg)}.bg-tile-blue-light{background-image:url(https://assets.dallashanuman.net/images/common/bg-tile-lightblue.jpg)}.bg-tile-red-color{background-color:#d74144}.bg-tile-blue-color{background-color:#2f5b9d}.bg-tile-green-color{background-color:#053f0b}.bg-tile-brown-color{background-color:#be4d00}.bg-tile-orange-color{background-color:#ff7200}.txt-small-lg{font-size:80%!important}.txt-small-md{font-size:60%!important}.txt-big-regular{font-size:105%!important}.txt-big-lg{font-size:120%!important}.txt-big-xl{font-size:135%!important}.txt-big-xxl{font-size:150%!important}.padding5{padding:5px}.padding10{padding:10px}.padding20{padding:20px}.padding30{padding:30px}.padrt10{padding-right:10px}.listcolor01{color:#db7093}.listcolor02{color:#20b2aa}.bg-yellow-light{background-color:#ffd}.dotted{border-left-style:dotted!important}.quicklink-tile{height:175px}.bg-ksht-lime{background-color:#c2d76f}.bg-ksht-blue-sky{background-color:#6fc4d7}.bg-ksht-hot-pink{background-color:#c10562}.bg-ksht-green-dark{background-color:#2f6811}.bg-blue-dark{background-color:#0c184c}.color-ksht-lime{color:#c2d76f!important}.color-ksht-blue-sky{color:#6fc4d7!important}.color-ksht-hot-pink{color:#c10562!important}.dot-puja{height:8px;width:8px;background-color:#ff7200;border-radius:50%;display:inline-block}.today-events .event-status-icon.puja{fill:#55a9ff}.cal-daytitle{color:#ff7200}.fc-toolbar{color:#ccc;border-bottom-style:dotted;border-width:2px;padding-bottom:10px}.today-events .card.flag-puja .event-time:before{border-color:#7c5ac2}.flag-classes{border-color:#16f46b!important}.today-events .card.flag-community .event-time:before{border-color:#ffdc1b}.today-events .card .flag-cultural .event-time:before{border-color:#f4427d}", ""]), t.exports = n
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIsMTMuNWg0OWMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkgyYy0xLjEwNCwwLTIsMC44OTYtMiwyUzAuODk2LDEzLjUsMiwxMy41eiIvPg0KCQk8cGF0aCBkPSJNMiwyOC41aDQ5YzEuMTA0LDAsMi0wLjg5NiwyLTJzLTAuODk2LTItMi0ySDJjLTEuMTA0LDAtMiwwLjg5Ni0yLDJTMC44OTYsMjguNSwyLDI4LjV6Ii8+DQoJCTxwYXRoIGQ9Ik0yLDQzLjVoNDljMS4xMDQsMCwyLTAuODk2LDItMnMtMC44OTYtMi0yLTJIMmMtMS4xMDQsMC0yLDAuODk2LTIsMlMwLjg5Niw0My41LDIsNDMuNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBkYXRhLW5hbWU9IkNhcGEgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDU2LjM0IDQ1Ni4zNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM4MGNlZjk7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5jbG9zZTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjI3Ljc3LDQ1Ni4zNGEyMjcsMjI3LDAsMCwxLTExMS41Mi0yOS4xNSwxMy40MywxMy40MywwLDAsMSwxMy4xOC0yMy40Yzc4LjM0LDQ0LjExLDE3Ny41MSwzMC40NSwyNDEuMTctMzMuMiw3OC41My03OC41Myw3OC41My0yMDYuMzEsMC0yODQuODRzLTIwNi4zMi03OC41NC0yODQuODYsMC03OC41MywyMDYuMzEsMCwyODQuODRhMTMuNDMsMTMuNDMsMCwxLDEtMTksMTljLTg5LTg5LTg5LTIzMy44MywwLTMyMi44NHMyMzMuODMtODksMzIyLjg0LDAsODksMjMzLjgzLDAsMzIyLjg0QTIyOC43OCwyMjguNzgsMCwwLDEsMjI3Ljc3LDQ1Ni4zNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yOTkuNDgsMzE3LjI5YTEzLjQxLDEzLjQxLDAsMCwxLTkuNS0zLjkzTDE0Ny4zNywxNzAuNzRhMTMuNDMsMTMuNDMsMCwwLDEsMTktMTlMMzA5LDI5NC4zN2ExMy40MywxMy40MywwLDAsMS05LjQ5LDIyLjkyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1Ni44NiwzMTcuMjlhMTMuNDMsMTMuNDMsMCwwLDEtOS40OS0yMi45MkwyOTAsMTUxLjc1YTEzLjQzLDEzLjQzLDAsMCwxLDE5LDE5TDE2Ni4zNSwzMTMuMzZBMTMuMzMsMTMuMzMsMCwwLDEsMTU2Ljg2LDMxNy4yOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48L3N2Zz4="
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "state", (function() {
            return n
        })), o.d(e, "actions", (function() {
            return r
        })), o.d(e, "mutations", (function() {
            return l
        })), o.d(e, "getters", (function() {
            return d
        }));
        var n = function() {
                return {}
            },
            r = {},
            l = {},
            d = {}
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "state", (function() {
            return r
        })), o.d(e, "actions", (function() {
            return l
        })), o.d(e, "mutations", (function() {
            return d
        })), o.d(e, "getters", (function() {
            return c
        }));
        var n = o(6),
            r = (o(27), function() {
                return {}
            }),
            l = {
                getDiscoursesList: function(t, e) {
                    var o = this;
                    return Object(n.a)(regeneratorRuntime.mark((function t() {
                        var n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o.isLoading = !0, t.next = 3, o.$apiRepositoryFactory.getRepository("cmsApi").getDiscoursesList(e);
                                case 3:
                                    return n = t.sent, console.log(n), t.abrupt("return", n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            },
            d = {},
            c = {}
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "state", (function() {
            return n
        })), o.d(e, "actions", (function() {
            return r
        })), o.d(e, "mutations", (function() {
            return l
        })), o.d(e, "getters", (function() {
            return d
        }));
        var n = function() {
                return {}
            },
            r = {},
            l = {},
            d = {}
    }, function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "state", (function() {
            return r
        })), o.d(e, "actions", (function() {
            return l
        })), o.d(e, "mutations", (function() {
            return d
        })), o.d(e, "getters", (function() {
            return c
        }));
        var n = o(6),
            r = (o(27), function() {
                return {}
            }),
            l = {
                getCalendarEvents: function(t, e) {
                    var o = this;
                    return Object(n.a)(regeneratorRuntime.mark((function t() {
                        var n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return o.isLoading = !0, t.next = 3, o.$apiRepositoryFactory.getRepository("googleApi").getCalendarEvents(e);
                                case 3:
                                    return n = t.sent, console.log(n), t.abrupt("return", n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            },
            d = {},
            c = {}
    }],
    [
        [202, 176, 4, 177]
    ]
]);