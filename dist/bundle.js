/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    var t = {
            216: () => {
                function t(n) {
                    return (
                        (t =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t &&
                                          'function' == typeof Symbol &&
                                          t.constructor === Symbol &&
                                          t !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof t;
                                  }),
                        t(n)
                    );
                }
                function n(t, n) {
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, e(o.key), o);
                    }
                }
                function e(n) {
                    var e = (function (n, e) {
                        if ('object' != t(n) || !n) return n;
                        var r = n[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(n, 'string');
                            if ('object' != t(o)) return o;
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.',
                            );
                        }
                        return String(n);
                    })(n);
                    return 'symbol' == t(e) ? e : e + '';
                }
                function r(t) {
                    var n = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (r = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(t)
                                                .indexOf('[native code]')
                                        );
                                    } catch (n) {
                                        return 'function' == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Super expression must either be null or a function',
                                );
                            if (void 0 !== n) {
                                if (n.has(t)) return n.get(t);
                                n.set(t, e);
                            }
                            function e() {
                                return (function (t, n, e) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments,
                                        );
                                    var r = [null];
                                    r.push.apply(r, n);
                                    var a = new (t.bind.apply(t, r))();
                                    return e && i(a, e.prototype), a;
                                })(t, arguments, a(this).constructor);
                            }
                            return (
                                (e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(e, t)
                            );
                        }),
                        r(t)
                    );
                }
                function o() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                        );
                    } catch (t) {}
                    return (o = function () {
                        return !!t;
                    })();
                }
                function i(t, n) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, n) {
                                  return (t.__proto__ = n), t;
                              }),
                        i(t, n)
                    );
                }
                function a(t) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        a(t)
                    );
                }
                var c = (function (e) {
                    function r() {
                        var n, e, i, c;
                        return (
                            (function (t, n) {
                                if (!(t instanceof n))
                                    throw new TypeError(
                                        'Cannot call a class as a function',
                                    );
                            })(this, r),
                            ((e = this),
                            (i = r),
                            (i = a(i)),
                            (n = (function (n, e) {
                                if (
                                    e &&
                                    ('object' === t(e) ||
                                        'function' == typeof e)
                                )
                                    return e;
                                if (void 0 !== e)
                                    throw new TypeError(
                                        'Derived constructors may only return object or undefined',
                                    );
                                return (function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return t;
                                })(n);
                            })(
                                e,
                                o()
                                    ? Reflect.construct(
                                          i,
                                          c || [],
                                          a(e).constructor,
                                      )
                                    : i.apply(e, c),
                            ))).render(),
                            n
                        );
                    }
                    return (
                        (function (t, n) {
                            if ('function' != typeof n && null !== n)
                                throw new TypeError(
                                    'Super expression must either be null or a function',
                                );
                            (t.prototype = Object.create(n && n.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(t, 'prototype', {
                                    writable: !1,
                                }),
                                n && i(t, n);
                        })(r, e),
                        (c = r),
                        (u = [
                            {
                                key: 'render',
                                value: function () {
                                    this.innerHTML =
                                        '\n            <div class="form-input">\n                <label for="body">Isi :</label>\n                  <textarea name="body" id="body" cols="20" rows="10" required></textarea>\n            </div>\n        ';
                                },
                            },
                        ]) && n(c.prototype, u),
                        Object.defineProperty(c, 'prototype', { writable: !1 }),
                        c
                    );
                    var c, u;
                })(r(HTMLElement));
                customElements.define('input-body', c);
            },
            592: () => {
                function t(n) {
                    return (
                        (t =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t &&
                                          'function' == typeof Symbol &&
                                          t.constructor === Symbol &&
                                          t !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof t;
                                  }),
                        t(n)
                    );
                }
                function n(t, n) {
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, e(o.key), o);
                    }
                }
                function e(n) {
                    var e = (function (n, e) {
                        if ('object' != t(n) || !n) return n;
                        var r = n[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(n, 'string');
                            if ('object' != t(o)) return o;
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.',
                            );
                        }
                        return String(n);
                    })(n);
                    return 'symbol' == t(e) ? e : e + '';
                }
                function r(t) {
                    var n = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (r = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(t)
                                                .indexOf('[native code]')
                                        );
                                    } catch (n) {
                                        return 'function' == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Super expression must either be null or a function',
                                );
                            if (void 0 !== n) {
                                if (n.has(t)) return n.get(t);
                                n.set(t, e);
                            }
                            function e() {
                                return (function (t, n, e) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments,
                                        );
                                    var r = [null];
                                    r.push.apply(r, n);
                                    var a = new (t.bind.apply(t, r))();
                                    return e && i(a, e.prototype), a;
                                })(t, arguments, a(this).constructor);
                            }
                            return (
                                (e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(e, t)
                            );
                        }),
                        r(t)
                    );
                }
                function o() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                        );
                    } catch (t) {}
                    return (o = function () {
                        return !!t;
                    })();
                }
                function i(t, n) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, n) {
                                  return (t.__proto__ = n), t;
                              }),
                        i(t, n)
                    );
                }
                function a(t) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        a(t)
                    );
                }
                var c = (function (e) {
                    function r() {
                        var n, e, i, c;
                        return (
                            (function (t, n) {
                                if (!(t instanceof n))
                                    throw new TypeError(
                                        'Cannot call a class as a function',
                                    );
                            })(this, r),
                            ((e = this),
                            (i = r),
                            (i = a(i)),
                            (n = (function (n, e) {
                                if (
                                    e &&
                                    ('object' === t(e) ||
                                        'function' == typeof e)
                                )
                                    return e;
                                if (void 0 !== e)
                                    throw new TypeError(
                                        'Derived constructors may only return object or undefined',
                                    );
                                return (function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return t;
                                })(n);
                            })(
                                e,
                                o()
                                    ? Reflect.construct(
                                          i,
                                          c || [],
                                          a(e).constructor,
                                      )
                                    : i.apply(e, c),
                            ))).render(),
                            n
                        );
                    }
                    return (
                        (function (t, n) {
                            if ('function' != typeof n && null !== n)
                                throw new TypeError(
                                    'Super expression must either be null or a function',
                                );
                            (t.prototype = Object.create(n && n.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(t, 'prototype', {
                                    writable: !1,
                                }),
                                n && i(t, n);
                        })(r, e),
                        (c = r),
                        (u = [
                            {
                                key: 'render',
                                value: function () {
                                    this.innerHTML =
                                        '\n            <div class="form-input">\n                <label for="title">Judul :</label>\n                  <input type="text" name="title" id="title" required autocomplete="off">\n            </div>\n        ';
                                },
                            },
                        ]) && n(c.prototype, u),
                        Object.defineProperty(c, 'prototype', { writable: !1 }),
                        c
                    );
                    var c, u;
                })(r(HTMLElement));
                customElements.define('input-title', c);
            },
            946: () => {
                function t(n) {
                    return (
                        (t =
                            'function' == typeof Symbol &&
                            'symbol' == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t &&
                                          'function' == typeof Symbol &&
                                          t.constructor === Symbol &&
                                          t !== Symbol.prototype
                                          ? 'symbol'
                                          : typeof t;
                                  }),
                        t(n)
                    );
                }
                function n(t, n) {
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        (o.enumerable = o.enumerable || !1),
                            (o.configurable = !0),
                            'value' in o && (o.writable = !0),
                            Object.defineProperty(t, e(o.key), o);
                    }
                }
                function e(n) {
                    var e = (function (n, e) {
                        if ('object' != t(n) || !n) return n;
                        var r = n[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(n, 'string');
                            if ('object' != t(o)) return o;
                            throw new TypeError(
                                '@@toPrimitive must return a primitive value.',
                            );
                        }
                        return String(n);
                    })(n);
                    return 'symbol' == t(e) ? e : e + '';
                }
                function r(t) {
                    var n = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (r = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return (
                                            -1 !==
                                            Function.toString
                                                .call(t)
                                                .indexOf('[native code]')
                                        );
                                    } catch (n) {
                                        return 'function' == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ('function' != typeof t)
                                throw new TypeError(
                                    'Super expression must either be null or a function',
                                );
                            if (void 0 !== n) {
                                if (n.has(t)) return n.get(t);
                                n.set(t, e);
                            }
                            function e() {
                                return (function (t, n, e) {
                                    if (o())
                                        return Reflect.construct.apply(
                                            null,
                                            arguments,
                                        );
                                    var r = [null];
                                    r.push.apply(r, n);
                                    var a = new (t.bind.apply(t, r))();
                                    return e && i(a, e.prototype), a;
                                })(t, arguments, a(this).constructor);
                            }
                            return (
                                (e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0,
                                    },
                                })),
                                i(e, t)
                            );
                        }),
                        r(t)
                    );
                }
                function o() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                        );
                    } catch (t) {}
                    return (o = function () {
                        return !!t;
                    })();
                }
                function i(t, n) {
                    return (
                        (i = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, n) {
                                  return (t.__proto__ = n), t;
                              }),
                        i(t, n)
                    );
                }
                function a(t) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return (
                                      t.__proto__ || Object.getPrototypeOf(t)
                                  );
                              }),
                        a(t)
                    );
                }
                var c = (function (e) {
                    function r() {
                        var n, e, i, c;
                        return (
                            (function (t, n) {
                                if (!(t instanceof n))
                                    throw new TypeError(
                                        'Cannot call a class as a function',
                                    );
                            })(this, r),
                            ((e = this),
                            (i = r),
                            (i = a(i)),
                            (n = (function (n, e) {
                                if (
                                    e &&
                                    ('object' === t(e) ||
                                        'function' == typeof e)
                                )
                                    return e;
                                if (void 0 !== e)
                                    throw new TypeError(
                                        'Derived constructors may only return object or undefined',
                                    );
                                return (function (t) {
                                    if (void 0 === t)
                                        throw new ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return t;
                                })(n);
                            })(
                                e,
                                o()
                                    ? Reflect.construct(
                                          i,
                                          c || [],
                                          a(e).constructor,
                                      )
                                    : i.apply(e, c),
                            ))).render(),
                            n
                        );
                    }
                    return (
                        (function (t, n) {
                            if ('function' != typeof n && null !== n)
                                throw new TypeError(
                                    'Super expression must either be null or a function',
                                );
                            (t.prototype = Object.create(n && n.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                Object.defineProperty(t, 'prototype', {
                                    writable: !1,
                                }),
                                n && i(t, n);
                        })(r, e),
                        (c = r),
                        (u = [
                            {
                                key: 'render',
                                value: function () {
                                    this.innerHTML =
                                        '\n            <h2 align="center">Catatan yang telah di tambahkan</h2>\n            <div class="notes" id="notes"></div>\n        ';
                                },
                            },
                        ]) && n(c.prototype, u),
                        Object.defineProperty(c, 'prototype', { writable: !1 }),
                        c
                    );
                    var c, u;
                })(r(HTMLElement));
                customElements.define('notes-box', c);
            },
            106: (t, n, e) => {
                'use strict';
                e.d(n, { A: () => c });
                var r = e(601),
                    o = e.n(r),
                    i = e(314),
                    a = e.n(i)()(o());
                a.push([
                    t.id,
                    '* {\n  box-sizing: border-box;\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    "Open Sans",\n    "Helvetica Neue",\n    sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nheader {\n  padding: 20px;\n  background-color: #627254;\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 25px;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.form {\n  border: 2px solid #627254;\n  background-color: #dddddd;\n  padding: 35px 25px 35px 25px;\n  border-radius: 20px;\n  width: 75%;\n  margin-bottom: 45px;\n  margin-top: 25px;\n}\n\n.form h2 {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.form-body {\n  display: flex;\n  padding: 20px 20px 0 20px;\n  flex-direction: column;\n  border-radius: 16px;\n}\n\n.form-input {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\ninput[type="text"],\ntextarea {\n  border: 2px solid #627254;\n  border-radius: 8px;\n  padding: 20px;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n  background-color: #eeeeee;\n}\n\n.validity-title,\n.validity-body {\n  color: red;\n}\n\n.submit {\n  border: 2px solid #627254;\n  border-radius: 8px;\n  padding: 5px;\n  margin-top: 10px;\n  align-self: center;\n  background-color: #eeeeee;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.update {\n  border: 2px solid green;\n  border-radius: 8px;\n  padding: 5px;\n  margin-top: 10px;\n  align-self: center;\n  background-color: #eeeeee;\n  font-size: 15px;\n  font-weight: bold;\n  color: green;\n}\n\n.update:hover {\n  background-color: green;\n  color: white;\n  transition: 0.2s ease-in-out;\n}\n\n.delete {\n  border: 2px solid red;\n  border-radius: 8px;\n  padding: 5px;\n  margin-top: 10px;\n  align-self: center;\n  background-color: #eeeeee;\n  font-size: 15px;\n  font-weight: bold;\n  color: red;\n}\n\n.delete:hover {\n  background-color: red;\n  color: white;\n  transition: 0.2s ease-in-out;\n}\n\n.submit:hover {\n  background-color: #627254;\n  color: white;\n  transition: 0.2s ease-in-out;\n}\n\n.notes {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: auto;\n  justify-content: space-around;\n  margin: 30px 10px 0 10px;\n}\n\n.note {\n  border: 2px solid #627254;\n  padding: 10px;\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #dddddd;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.note .date {\n  align-self: end;\n}\n\nfooter {\n  padding: 20px;\n  background-color: #627254;\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  margin-top: 40px;\n}\n\n@media screen and (max-width: 1000px) {\n  .notes {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .notes {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .notes {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .note {\n    grid-template-rows: auto;\n    gap: 10px;\n  }\n}\n\n@media screen and (max-width: 550px) {\n  .form {\n    width: 100%;\n  }\n  .notes {\n    grid-template-columns: repeat(1, auto);\n  }\n  .note {\n    grid-template-rows: auto;\n    gap: 10px;\n  }\n}\n',
                    '',
                ]);
                const c = a;
            },
            314: (t) => {
                'use strict';
                t.exports = function (t) {
                    var n = [];
                    return (
                        (n.toString = function () {
                            return this.map(function (n) {
                                var e = '',
                                    r = void 0 !== n[5];
                                return (
                                    n[4] &&
                                        (e += '@supports ('.concat(
                                            n[4],
                                            ') {',
                                        )),
                                    n[2] && (e += '@media '.concat(n[2], ' {')),
                                    r &&
                                        (e += '@layer'.concat(
                                            n[5].length > 0
                                                ? ' '.concat(n[5])
                                                : '',
                                            ' {',
                                        )),
                                    (e += t(n)),
                                    r && (e += '}'),
                                    n[2] && (e += '}'),
                                    n[4] && (e += '}'),
                                    e
                                );
                            }).join('');
                        }),
                        (n.i = function (t, e, r, o, i) {
                            'string' == typeof t && (t = [[null, t, void 0]]);
                            var a = {};
                            if (r)
                                for (var c = 0; c < this.length; c++) {
                                    var u = this[c][0];
                                    null != u && (a[u] = !0);
                                }
                            for (var l = 0; l < t.length; l++) {
                                var f = [].concat(t[l]);
                                (r && a[f[0]]) ||
                                    (void 0 !== i &&
                                        (void 0 === f[5] ||
                                            (f[1] = '@layer'
                                                .concat(
                                                    f[5].length > 0
                                                        ? ' '.concat(f[5])
                                                        : '',
                                                    ' {',
                                                )
                                                .concat(f[1], '}')),
                                        (f[5] = i)),
                                    e &&
                                        (f[2]
                                            ? ((f[1] = '@media '
                                                  .concat(f[2], ' {')
                                                  .concat(f[1], '}')),
                                              (f[2] = e))
                                            : (f[2] = e)),
                                    o &&
                                        (f[4]
                                            ? ((f[1] = '@supports ('
                                                  .concat(f[4], ') {')
                                                  .concat(f[1], '}')),
                                              (f[4] = o))
                                            : (f[4] = ''.concat(o))),
                                    n.push(f));
                            }
                        }),
                        n
                    );
                };
            },
            601: (t) => {
                'use strict';
                t.exports = function (t) {
                    return t[1];
                };
            },
            72: (t) => {
                'use strict';
                var n = [];
                function e(t) {
                    for (var e = -1, r = 0; r < n.length; r++)
                        if (n[r].identifier === t) {
                            e = r;
                            break;
                        }
                    return e;
                }
                function r(t, r) {
                    for (var i = {}, a = [], c = 0; c < t.length; c++) {
                        var u = t[c],
                            l = r.base ? u[0] + r.base : u[0],
                            f = i[l] || 0,
                            s = ''.concat(l, ' ').concat(f);
                        i[l] = f + 1;
                        var p = e(s),
                            d = {
                                css: u[1],
                                media: u[2],
                                sourceMap: u[3],
                                supports: u[4],
                                layer: u[5],
                            };
                        if (-1 !== p) n[p].references++, n[p].updater(d);
                        else {
                            var y = o(d, r);
                            (r.byIndex = c),
                                n.splice(c, 0, {
                                    identifier: s,
                                    updater: y,
                                    references: 1,
                                });
                        }
                        a.push(s);
                    }
                    return a;
                }
                function o(t, n) {
                    var e = n.domAPI(n);
                    return (
                        e.update(t),
                        function (n) {
                            if (n) {
                                if (
                                    n.css === t.css &&
                                    n.media === t.media &&
                                    n.sourceMap === t.sourceMap &&
                                    n.supports === t.supports &&
                                    n.layer === t.layer
                                )
                                    return;
                                e.update((t = n));
                            } else e.remove();
                        }
                    );
                }
                t.exports = function (t, o) {
                    var i = r((t = t || []), (o = o || {}));
                    return function (t) {
                        t = t || [];
                        for (var a = 0; a < i.length; a++) {
                            var c = e(i[a]);
                            n[c].references--;
                        }
                        for (var u = r(t, o), l = 0; l < i.length; l++) {
                            var f = e(i[l]);
                            0 === n[f].references &&
                                (n[f].updater(), n.splice(f, 1));
                        }
                        i = u;
                    };
                };
            },
            659: (t) => {
                'use strict';
                var n = {};
                t.exports = function (t, e) {
                    var r = (function (t) {
                        if (void 0 === n[t]) {
                            var e = document.querySelector(t);
                            if (
                                window.HTMLIFrameElement &&
                                e instanceof window.HTMLIFrameElement
                            )
                                try {
                                    e = e.contentDocument.head;
                                } catch (t) {
                                    e = null;
                                }
                            n[t] = e;
                        }
                        return n[t];
                    })(t);
                    if (!r)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                        );
                    r.appendChild(e);
                };
            },
            540: (t) => {
                'use strict';
                t.exports = function (t) {
                    var n = document.createElement('style');
                    return (
                        t.setAttributes(n, t.attributes),
                        t.insert(n, t.options),
                        n
                    );
                };
            },
            56: (t, n, e) => {
                'use strict';
                t.exports = function (t) {
                    var n = e.nc;
                    n && t.setAttribute('nonce', n);
                };
            },
            825: (t) => {
                'use strict';
                t.exports = function (t) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        };
                    var n = t.insertStyleElement(t);
                    return {
                        update: function (e) {
                            !(function (t, n, e) {
                                var r = '';
                                e.supports &&
                                    (r += '@supports ('.concat(
                                        e.supports,
                                        ') {',
                                    )),
                                    e.media &&
                                        (r += '@media '.concat(e.media, ' {'));
                                var o = void 0 !== e.layer;
                                o &&
                                    (r += '@layer'.concat(
                                        e.layer.length > 0
                                            ? ' '.concat(e.layer)
                                            : '',
                                        ' {',
                                    )),
                                    (r += e.css),
                                    o && (r += '}'),
                                    e.media && (r += '}'),
                                    e.supports && (r += '}');
                                var i = e.sourceMap;
                                i &&
                                    'undefined' != typeof btoa &&
                                    (r +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(i),
                                                    ),
                                                ),
                                            ),
                                            ' */',
                                        )),
                                    n.styleTagTransform(r, t, n.options);
                            })(n, t, e);
                        },
                        remove: function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(n);
                        },
                    };
                };
            },
            113: (t) => {
                'use strict';
                t.exports = function (t, n) {
                    if (n.styleSheet) n.styleSheet.cssText = t;
                    else {
                        for (; n.firstChild; ) n.removeChild(n.firstChild);
                        n.appendChild(document.createTextNode(t));
                    }
                };
            },
        },
        n = {};
    function e(r) {
        var o = n[r];
        if (void 0 !== o) return o.exports;
        var i = (n[r] = { id: r, exports: {} });
        return t[r](i, i.exports, e), i.exports;
    }
    (e.n = (t) => {
        var n = t && t.__esModule ? () => t.default : () => t;
        return e.d(n, { a: n }), n;
    }),
        (e.d = (t, n) => {
            for (var r in n)
                e.o(n, r) &&
                    !e.o(t, r) &&
                    Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
        }),
        (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
        (e.nc = void 0),
        (() => {
            'use strict';
            var t,
                n,
                r,
                o,
                i = e(72),
                a = e.n(i),
                c = e(825),
                u = e.n(c),
                l = e(659),
                f = e.n(l),
                s = e(56),
                p = e.n(s),
                d = e(540),
                y = e.n(d),
                h = e(113),
                v = e.n(h),
                b = e(106),
                m = {};
            function g(t) {
                return (
                    (g =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t &&
                                      'function' == typeof Symbol &&
                                      t.constructor === Symbol &&
                                      t !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof t;
                              }),
                    g(t)
                );
            }
            function w() {
                w = function () {
                    return n;
                };
                var t,
                    n = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    o =
                        Object.defineProperty ||
                        function (t, n, e) {
                            t[n] = e.value;
                        },
                    i = 'function' == typeof Symbol ? Symbol : {},
                    a = i.iterator || '@@iterator',
                    c = i.asyncIterator || '@@asyncIterator',
                    u = i.toStringTag || '@@toStringTag';
                function l(t, n, e) {
                    return (
                        Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        }),
                        t[n]
                    );
                }
                try {
                    l({}, '');
                } catch (t) {
                    l = function (t, n, e) {
                        return (t[n] = e);
                    };
                }
                function f(t, n, e, r) {
                    var i = n && n.prototype instanceof b ? n : b,
                        a = Object.create(i.prototype),
                        c = new C(r || []);
                    return o(a, '_invoke', { value: T(t, e, c) }), a;
                }
                function s(t, n, e) {
                    try {
                        return { type: 'normal', arg: t.call(n, e) };
                    } catch (t) {
                        return { type: 'throw', arg: t };
                    }
                }
                n.wrap = f;
                var p = 'suspendedStart',
                    d = 'suspendedYield',
                    y = 'executing',
                    h = 'completed',
                    v = {};
                function b() {}
                function m() {}
                function x() {}
                var O = {};
                l(O, a, function () {
                    return this;
                });
                var j = Object.getPrototypeOf,
                    E = j && j(j(I([])));
                E && E !== e && r.call(E, a) && (O = E);
                var S = (x.prototype = b.prototype = Object.create(O));
                function L(t) {
                    ['next', 'throw', 'return'].forEach(function (n) {
                        l(t, n, function (t) {
                            return this._invoke(n, t);
                        });
                    });
                }
                function P(t, n) {
                    function e(o, i, a, c) {
                        var u = s(t[o], t, i);
                        if ('throw' !== u.type) {
                            var l = u.arg,
                                f = l.value;
                            return f && 'object' == g(f) && r.call(f, '__await')
                                ? n.resolve(f.__await).then(
                                      function (t) {
                                          e('next', t, a, c);
                                      },
                                      function (t) {
                                          e('throw', t, a, c);
                                      },
                                  )
                                : n.resolve(f).then(
                                      function (t) {
                                          (l.value = t), a(l);
                                      },
                                      function (t) {
                                          return e('throw', t, a, c);
                                      },
                                  );
                        }
                        c(u.arg);
                    }
                    var i;
                    o(this, '_invoke', {
                        value: function (t, r) {
                            function o() {
                                return new n(function (n, o) {
                                    e(t, r, n, o);
                                });
                            }
                            return (i = i ? i.then(o, o) : o());
                        },
                    });
                }
                function T(n, e, r) {
                    var o = p;
                    return function (i, a) {
                        if (o === y)
                            throw Error('Generator is already running');
                        if (o === h) {
                            if ('throw' === i) throw a;
                            return { value: t, done: !0 };
                        }
                        for (r.method = i, r.arg = a; ; ) {
                            var c = r.delegate;
                            if (c) {
                                var u = _(c, r);
                                if (u) {
                                    if (u === v) continue;
                                    return u;
                                }
                            }
                            if ('next' === r.method) r.sent = r._sent = r.arg;
                            else if ('throw' === r.method) {
                                if (o === p) throw ((o = h), r.arg);
                                r.dispatchException(r.arg);
                            } else
                                'return' === r.method &&
                                    r.abrupt('return', r.arg);
                            o = y;
                            var l = s(n, e, r);
                            if ('normal' === l.type) {
                                if (((o = r.done ? h : d), l.arg === v))
                                    continue;
                                return { value: l.arg, done: r.done };
                            }
                            'throw' === l.type &&
                                ((o = h),
                                (r.method = 'throw'),
                                (r.arg = l.arg));
                        }
                    };
                }
                function _(n, e) {
                    var r = e.method,
                        o = n.iterator[r];
                    if (o === t)
                        return (
                            (e.delegate = null),
                            ('throw' === r &&
                                n.iterator.return &&
                                ((e.method = 'return'),
                                (e.arg = t),
                                _(n, e),
                                'throw' === e.method)) ||
                                ('return' !== r &&
                                    ((e.method = 'throw'),
                                    (e.arg = new TypeError(
                                        "The iterator does not provide a '" +
                                            r +
                                            "' method",
                                    )))),
                            v
                        );
                    var i = s(o, n.iterator, e.arg);
                    if ('throw' === i.type)
                        return (
                            (e.method = 'throw'),
                            (e.arg = i.arg),
                            (e.delegate = null),
                            v
                        );
                    var a = i.arg;
                    return a
                        ? a.done
                            ? ((e[n.resultName] = a.value),
                              (e.next = n.nextLoc),
                              'return' !== e.method &&
                                  ((e.method = 'next'), (e.arg = t)),
                              (e.delegate = null),
                              v)
                            : a
                        : ((e.method = 'throw'),
                          (e.arg = new TypeError(
                              'iterator result is not an object',
                          )),
                          (e.delegate = null),
                          v);
                }
                function k(t) {
                    var n = { tryLoc: t[0] };
                    1 in t && (n.catchLoc = t[1]),
                        2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
                        this.tryEntries.push(n);
                }
                function M(t) {
                    var n = t.completion || {};
                    (n.type = 'normal'), delete n.arg, (t.completion = n);
                }
                function C(t) {
                    (this.tryEntries = [{ tryLoc: 'root' }]),
                        t.forEach(k, this),
                        this.reset(!0);
                }
                function I(n) {
                    if (n || '' === n) {
                        var e = n[a];
                        if (e) return e.call(n);
                        if ('function' == typeof n.next) return n;
                        if (!isNaN(n.length)) {
                            var o = -1,
                                i = function e() {
                                    for (; ++o < n.length; )
                                        if (r.call(n, o))
                                            return (
                                                (e.value = n[o]),
                                                (e.done = !1),
                                                e
                                            );
                                    return (e.value = t), (e.done = !0), e;
                                };
                            return (i.next = i);
                        }
                    }
                    throw new TypeError(g(n) + ' is not iterable');
                }
                return (
                    (m.prototype = x),
                    o(S, 'constructor', { value: x, configurable: !0 }),
                    o(x, 'constructor', { value: m, configurable: !0 }),
                    (m.displayName = l(x, u, 'GeneratorFunction')),
                    (n.isGeneratorFunction = function (t) {
                        var n = 'function' == typeof t && t.constructor;
                        return (
                            !!n &&
                            (n === m ||
                                'GeneratorFunction' ===
                                    (n.displayName || n.name))
                        );
                    }),
                    (n.mark = function (t) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(t, x)
                                : ((t.__proto__ = x),
                                  l(t, u, 'GeneratorFunction')),
                            (t.prototype = Object.create(S)),
                            t
                        );
                    }),
                    (n.awrap = function (t) {
                        return { __await: t };
                    }),
                    L(P.prototype),
                    l(P.prototype, c, function () {
                        return this;
                    }),
                    (n.AsyncIterator = P),
                    (n.async = function (t, e, r, o, i) {
                        void 0 === i && (i = Promise);
                        var a = new P(f(t, e, r, o), i);
                        return n.isGeneratorFunction(e)
                            ? a
                            : a.next().then(function (t) {
                                  return t.done ? t.value : a.next();
                              });
                    }),
                    L(S),
                    l(S, u, 'Generator'),
                    l(S, a, function () {
                        return this;
                    }),
                    l(S, 'toString', function () {
                        return '[object Generator]';
                    }),
                    (n.keys = function (t) {
                        var n = Object(t),
                            e = [];
                        for (var r in n) e.push(r);
                        return (
                            e.reverse(),
                            function t() {
                                for (; e.length; ) {
                                    var r = e.pop();
                                    if (r in n)
                                        return (t.value = r), (t.done = !1), t;
                                }
                                return (t.done = !0), t;
                            }
                        );
                    }),
                    (n.values = I),
                    (C.prototype = {
                        constructor: C,
                        reset: function (n) {
                            if (
                                ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = t),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = 'next'),
                                (this.arg = t),
                                this.tryEntries.forEach(M),
                                !n)
                            )
                                for (var e in this)
                                    't' === e.charAt(0) &&
                                        r.call(this, e) &&
                                        !isNaN(+e.slice(1)) &&
                                        (this[e] = t);
                        },
                        stop: function () {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ('throw' === t.type) throw t.arg;
                            return this.rval;
                        },
                        dispatchException: function (n) {
                            if (this.done) throw n;
                            var e = this;
                            function o(r, o) {
                                return (
                                    (c.type = 'throw'),
                                    (c.arg = n),
                                    (e.next = r),
                                    o && ((e.method = 'next'), (e.arg = t)),
                                    !!o
                                );
                            }
                            for (
                                var i = this.tryEntries.length - 1;
                                i >= 0;
                                --i
                            ) {
                                var a = this.tryEntries[i],
                                    c = a.completion;
                                if ('root' === a.tryLoc) return o('end');
                                if (a.tryLoc <= this.prev) {
                                    var u = r.call(a, 'catchLoc'),
                                        l = r.call(a, 'finallyLoc');
                                    if (u && l) {
                                        if (this.prev < a.catchLoc)
                                            return o(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc)
                                            return o(a.finallyLoc);
                                    } else if (u) {
                                        if (this.prev < a.catchLoc)
                                            return o(a.catchLoc, !0);
                                    } else {
                                        if (!l)
                                            throw Error(
                                                'try statement without catch or finally',
                                            );
                                        if (this.prev < a.finallyLoc)
                                            return o(a.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (t, n) {
                            for (
                                var e = this.tryEntries.length - 1;
                                e >= 0;
                                --e
                            ) {
                                var o = this.tryEntries[e];
                                if (
                                    o.tryLoc <= this.prev &&
                                    r.call(o, 'finallyLoc') &&
                                    this.prev < o.finallyLoc
                                ) {
                                    var i = o;
                                    break;
                                }
                            }
                            i &&
                                ('break' === t || 'continue' === t) &&
                                i.tryLoc <= n &&
                                n <= i.finallyLoc &&
                                (i = null);
                            var a = i ? i.completion : {};
                            return (
                                (a.type = t),
                                (a.arg = n),
                                i
                                    ? ((this.method = 'next'),
                                      (this.next = i.finallyLoc),
                                      v)
                                    : this.complete(a)
                            );
                        },
                        complete: function (t, n) {
                            if ('throw' === t.type) throw t.arg;
                            return (
                                'break' === t.type || 'continue' === t.type
                                    ? (this.next = t.arg)
                                    : 'return' === t.type
                                      ? ((this.rval = this.arg = t.arg),
                                        (this.method = 'return'),
                                        (this.next = 'end'))
                                      : 'normal' === t.type &&
                                        n &&
                                        (this.next = n),
                                v
                            );
                        },
                        finish: function (t) {
                            for (
                                var n = this.tryEntries.length - 1;
                                n >= 0;
                                --n
                            ) {
                                var e = this.tryEntries[n];
                                if (e.finallyLoc === t)
                                    return (
                                        this.complete(e.completion, e.afterLoc),
                                        M(e),
                                        v
                                    );
                            }
                        },
                        catch: function (t) {
                            for (
                                var n = this.tryEntries.length - 1;
                                n >= 0;
                                --n
                            ) {
                                var e = this.tryEntries[n];
                                if (e.tryLoc === t) {
                                    var r = e.completion;
                                    if ('throw' === r.type) {
                                        var o = r.arg;
                                        M(e);
                                    }
                                    return o;
                                }
                            }
                            throw Error('illegal catch attempt');
                        },
                        delegateYield: function (n, e, r) {
                            return (
                                (this.delegate = {
                                    iterator: I(n),
                                    resultName: e,
                                    nextLoc: r,
                                }),
                                'next' === this.method && (this.arg = t),
                                v
                            );
                        },
                    }),
                    n
                );
            }
            function x(t, n, e, r, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value;
                } catch (t) {
                    return void e(t);
                }
                c.done ? n(u) : Promise.resolve(u).then(r, o);
            }
            (m.styleTagTransform = v()),
                (m.setAttributes = p()),
                (m.insert = f().bind(null, 'head')),
                (m.domAPI = u()),
                (m.insertStyleElement = y()),
                a()(b.A, m),
                b.A && b.A.locals && b.A.locals,
                e(592),
                e(216),
                e(946),
                (t = 'https://notes-api.dicoding.dev/v2'),
                (n = (function () {
                    var n,
                        e =
                            ((n = w().mark(function n() {
                                var e, i;
                                return w().wrap(
                                    function (n) {
                                        for (;;)
                                            switch ((n.prev = n.next)) {
                                                case 0:
                                                    return (
                                                        (document.getElementById(
                                                            'loadingIndicator',
                                                        ).style.display =
                                                            'block'),
                                                        (n.prev = 1),
                                                        (n.next = 4),
                                                        fetch(
                                                            ''.concat(
                                                                t,
                                                                '/notes',
                                                            ),
                                                        )
                                                    );
                                                case 4:
                                                    return (
                                                        (e = n.sent),
                                                        (n.next = 7),
                                                        e.json()
                                                    );
                                                case 7:
                                                    (i = n.sent),
                                                        (document.getElementById(
                                                            'loadingIndicator',
                                                        ).style.display =
                                                            'none'),
                                                        i.error
                                                            ? o(i.message)
                                                            : r(i.data),
                                                        (n.next = 16);
                                                    break;
                                                case 12:
                                                    (n.prev = 12),
                                                        (n.t0 = n.catch(1)),
                                                        o(n.t0);
                                                case 16:
                                                case 'end':
                                                    return n.stop();
                                            }
                                    },
                                    n,
                                    null,
                                    [[1, 12]],
                                );
                            })),
                            function () {
                                var t = this,
                                    e = arguments;
                                return new Promise(function (r, o) {
                                    var i = n.apply(t, e);
                                    function a(t) {
                                        x(i, r, o, a, c, 'next', t);
                                    }
                                    function c(t) {
                                        x(i, r, o, a, c, 'throw', t);
                                    }
                                    a(void 0);
                                });
                            });
                    return function () {
                        return e.apply(this, arguments);
                    };
                })()),
                (r = function (e) {
                    var r = document.getElementById('notes');
                    (r.innerHTML = ''),
                        e.forEach(function (t) {
                            r.innerHTML +=
                                '\n            <div class="note">\n                <h2>'
                                    .concat(
                                        t.title,
                                        '</h2>\n                <p>',
                                    )
                                    .concat(
                                        t.body,
                                        '<br></p>\n                <p class="date">Di buat pada tanggal: ',
                                    )
                                    .concat(
                                        t.createdAt,
                                        '</p>\n                <button type="button" class="delete" id="',
                                    )
                                    .concat(
                                        t.id,
                                        '">Hapus</button>\n            </div>\n          ',
                                    );
                        }),
                        document
                            .querySelectorAll('.delete')
                            .forEach(function (e) {
                                e.addEventListener('click', function (e) {
                                    var r;
                                    (r = e.target.id),
                                        fetch(
                                            ''.concat(t, '/notes/').concat(r),
                                            { method: 'DELETE' },
                                        )
                                            .then(function (t) {
                                                return t.json();
                                            })
                                            .then(function (t) {
                                                o(t.message), n();
                                            })
                                            .catch(function (t) {
                                                o(t);
                                            });
                                });
                            });
                }),
                (o = function () {
                    alert(
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'Cek koneksi internet anda',
                    );
                }),
                document.addEventListener('DOMContentLoaded', function () {
                    var e = document.querySelector('#form'),
                        r = document.querySelector('#title'),
                        i = document.querySelector('#body');
                    e.addEventListener('submit', function (e) {
                        var a;
                        e.preventDefault(),
                            (a = {
                                title: String(r.value),
                                body: String(i.value),
                            }),
                            fetch(''.concat(t, '/notes'), {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(a),
                            })
                                .then(function (t) {
                                    return t.json();
                                })
                                .then(function (t) {
                                    o(t.message), n();
                                })
                                .catch(function (t) {
                                    o(t);
                                });
                    }),
                        n();
                });
        })();
})();
