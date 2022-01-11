(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [849], {
        49849: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                LayoutTree: function() {
                    return $
                },
                withLayout: function() {
                    return v
                }
            });
            var o = r(67294),
                n = r(45697),
                a = r.n(n),
                u = Number.isNaN || function(e) {
                    return "number" === typeof e && e !== e
                };

            function c(e, t) {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++)
                    if (o = e[r], n = t[r], !(o === n || u(o) && u(n))) return !1;
                var o, n;
                return !0
            }
            var s = function(e, t) {
                var r;
                void 0 === t && (t = c);
                var o, n = [],
                    a = !1;
                return function() {
                    for (var u = [], c = 0; c < arguments.length; c++) u[c] = arguments[c];
                    return a && r === this && t(u, n) || (o = e.apply(this, u), a = !0, r = this, n = u), o
                }
            };
            var i = (0, o.createContext)();
            const p = e => {},
                f = (e, t) => (0, o.cloneElement)(e, {
                    children: e.props.children ? f(e.props.children, t) : t
                });
            var y = (e, t) => e ? (p(e), f(e, t)) : t,
                l = r(8679),
                m = r.n(l);
            var d = e => {
                const [t, r] = (0, o.useState)((() => null !== e && void 0 !== e ? e : {})), n = (0, o.useRef)();
                return n.current || (n.current = (e => t => {
                    const r = "function" === typeof t ? t : () => t;
                    return e((e => ({ ...e,
                        ...r(e)
                    })))
                })(r)), [t, n.current]
            };
            const b = e => "function" === typeof e ? e : () => e,
                g = Symbol("getInitialLayoutTreeSymbol");
            var v = (e, t) => {
                const r = "function" === typeof e;
                return e = b(e), t = b(t), n => {
                    const a = (0, o.forwardRef)(((u, c) => {
                        const {
                            pageKey: s,
                            props: p
                        } = (0, o.useMemo)((() => {
                            const {
                                pageKey: e,
                                ...t
                            } = u;
                            return {
                                pageKey: e,
                                props: t
                            }
                        }), [u]), f = (0, o.useRef)();
                        f.current || (f.current = t(p));
                        const y = (0, o.useContext)(i);
                        const {
                            updateLayoutTree: l,
                            Component: m,
                            pageKey: b
                        } = y, [g, v] = d(f.current);
                        return (0, o.useEffect)((() => {
                            g !== f.current && m === a && b === s && l(e(g))
                        }), [g, l, m, b, s]), (0, o.useMemo)((() => o.createElement(n, Object.assign({
                            ref: c
                        }, r ? {
                            setLayoutState: v
                        } : {}, p))), [c, v, p])
                    }));
                    return Object.defineProperty(a, g, {
                        value: r => {
                            const o = t(r);
                            return e(o)
                        }
                    }), a.displayName = `WithLayout(${n.displayName||n.name||"Component"})`, m()(a, n), a
                }
            };

            function h(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const S = i.Provider;
            class $ extends o.PureComponent {
                constructor(...e) {
                    super(...e), h(this, "state", {}), h(this, "updateLayoutTree", (e => this.setState({
                        layoutTree: e
                    }))), h(this, "getProviderValue", s(((e, t) => ({
                        Component: e,
                        pageKey: t,
                        updateLayoutTree: this.updateLayoutTree
                    }))))
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        Component: r,
                        pageProps: o,
                        pageKey: n
                    } = e;
                    return {
                        Component: r,
                        pageKey: n,
                        layoutTree: r !== t.Component || n !== t.pageKey ? ((e, t) => {
                            var r;
                            return null === (r = e[g]) || void 0 === r ? void 0 : r.call(e, t)
                        })(r, o) : t.layoutTree
                    }
                }
                render() {
                    const {
                        defaultLayout: e,
                        Component: t,
                        pageProps: r,
                        pageKey: n,
                        children: a
                    } = this.props, {
                        layoutTree: u
                    } = this.state, c = (e => !!e[g])(t), s = o.createElement(t, Object.assign({}, r, c && {
                        pageKey: n
                    }, {
                        key: n
                    })), i = y(null !== u && void 0 !== u ? u : e, s), p = this.getProviderValue(t, n);
                    return o.createElement(S, {
                        value: p
                    }, a(i))
                }
            }
            h($, "propTypes", {
                Component: a().elementType.isRequired,
                pageProps: a().object,
                pageKey: a().string,
                defaultLayout: a().element,
                children: a().func
            }), h($, "defaultProps", {
                children: e => e
            })
        },
        8679: function(e, t, r) {
            "use strict";
            var o = r(21296),
                n = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                u = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                c = {};

            function s(e) {
                return o.isMemo(e) ? u : c[e.$$typeof] || n
            }
            c[o.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, c[o.Memo] = u;
            var i = Object.defineProperty,
                p = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                y = Object.getOwnPropertyDescriptor,
                l = Object.getPrototypeOf,
                m = Object.prototype;
            e.exports = function e(t, r, o) {
                if ("string" !== typeof r) {
                    if (m) {
                        var n = l(r);
                        n && n !== m && e(t, n, o)
                    }
                    var u = p(r);
                    f && (u = u.concat(f(r)));
                    for (var c = s(t), d = s(r), b = 0; b < u.length; ++b) {
                        var g = u[b];
                        if (!a[g] && (!o || !o[g]) && (!d || !d[g]) && (!c || !c[g])) {
                            var v = y(r, g);
                            try {
                                i(t, g, v)
                            } catch (h) {}
                        }
                    }
                }
                return t
            }
        },
        96103: function(e, t) {
            "use strict";
            var r = "function" === typeof Symbol && Symbol.for,
                o = r ? Symbol.for("react.element") : 60103,
                n = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                u = r ? Symbol.for("react.strict_mode") : 60108,
                c = r ? Symbol.for("react.profiler") : 60114,
                s = r ? Symbol.for("react.provider") : 60109,
                i = r ? Symbol.for("react.context") : 60110,
                p = r ? Symbol.for("react.async_mode") : 60111,
                f = r ? Symbol.for("react.concurrent_mode") : 60111,
                y = r ? Symbol.for("react.forward_ref") : 60112,
                l = r ? Symbol.for("react.suspense") : 60113,
                m = r ? Symbol.for("react.suspense_list") : 60120,
                d = r ? Symbol.for("react.memo") : 60115,
                b = r ? Symbol.for("react.lazy") : 60116,
                g = r ? Symbol.for("react.block") : 60121,
                v = r ? Symbol.for("react.fundamental") : 60117,
                h = r ? Symbol.for("react.responder") : 60118,
                S = r ? Symbol.for("react.scope") : 60119;

            function $(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case o:
                            switch (e = e.type) {
                                case p:
                                case f:
                                case a:
                                case c:
                                case u:
                                case l:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case i:
                                        case y:
                                        case b:
                                        case d:
                                        case s:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case n:
                            return t
                    }
                }
            }

            function P(e) {
                return $(e) === f
            }
            t.AsyncMode = p, t.ConcurrentMode = f, t.ContextConsumer = i, t.ContextProvider = s, t.Element = o, t.ForwardRef = y, t.Fragment = a, t.Lazy = b, t.Memo = d, t.Portal = n, t.Profiler = c, t.StrictMode = u, t.Suspense = l, t.isAsyncMode = function(e) {
                return P(e) || $(e) === p
            }, t.isConcurrentMode = P, t.isContextConsumer = function(e) {
                return $(e) === i
            }, t.isContextProvider = function(e) {
                return $(e) === s
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === o
            }, t.isForwardRef = function(e) {
                return $(e) === y
            }, t.isFragment = function(e) {
                return $(e) === a
            }, t.isLazy = function(e) {
                return $(e) === b
            }, t.isMemo = function(e) {
                return $(e) === d
            }, t.isPortal = function(e) {
                return $(e) === n
            }, t.isProfiler = function(e) {
                return $(e) === c
            }, t.isStrictMode = function(e) {
                return $(e) === u
            }, t.isSuspense = function(e) {
                return $(e) === l
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === a || e === f || e === c || e === u || e === l || e === m || "object" === typeof e && null !== e && (e.$$typeof === b || e.$$typeof === d || e.$$typeof === s || e.$$typeof === i || e.$$typeof === y || e.$$typeof === v || e.$$typeof === h || e.$$typeof === S || e.$$typeof === g)
            }, t.typeOf = $
        },
        21296: function(e, t, r) {
            "use strict";
            e.exports = r(96103)
        }
    }
]);