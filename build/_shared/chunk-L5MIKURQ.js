import { b as s } from "/build/_shared/chunk-W6WK5VNR.js";
var l = s((v) => {
  "use strict";
  Object.defineProperty(v, "__esModule", { value: !0 });
  v.format = void 0;
  var j = /(%?)(%([sdjo]))/g;
  function P(t, n) {
    switch (n) {
      case "s":
        return t;
      case "d":
      case "i":
        return Number(t);
      case "j":
        return JSON.stringify(t);
      case "o": {
        if (typeof t == "string") return t;
        var r = JSON.stringify(t);
        return r === "{}" || r === "[]" || /^\[object .+?\]$/.test(r) ? t : r;
      }
    }
  }
  function w(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (n.length === 0) return t;
    var e = 0,
      a = t.replace(j, function (i, c, d, f) {
        var I = n[e],
          S = P(I, f);
        return c ? i : (e++, S);
      });
    return (
      e < n.length && (a += " " + n.slice(e).join(" ")),
      (a = a.replace(/%{2,2}/g, "%")),
      a
    );
  }
  v.format = w;
});
var O = s((u) => {
  "use strict";
  var E =
      (u && u.__extends) ||
      (function () {
        var t = function (n, r) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, a) {
                  e.__proto__ = a;
                }) ||
              function (e, a) {
                for (var i in a)
                  Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
              }),
            t(n, r)
          );
        };
        return function (n, r) {
          if (typeof r != "function" && r !== null)
            throw new TypeError(
              "Class extends value " +
                String(r) +
                " is not a constructor or null"
            );
          t(n, r);
          function e() {
            this.constructor = n;
          }
          n.prototype =
            r === null
              ? Object.create(r)
              : ((e.prototype = r.prototype), new e());
        };
      })(),
    _ =
      (u && u.__spreadArray) ||
      function (t, n) {
        for (var r = 0, e = n.length, a = t.length; r < e; r++, a++)
          t[a] = n[r];
        return t;
      };
  Object.defineProperty(u, "__esModule", { value: !0 });
  u.invariant = u.createInvariantWith = u.InvariantError = void 0;
  var g = l(),
    A = 2;
  function p(t) {
    if (!!t.stack) {
      var n = t.stack.split(`
`);
      n.splice(1, A),
        (t.stack = n.join(`
`));
    }
  }
  var y = (function (t) {
    E(n, t);
    function n(r) {
      for (var e = [], a = 1; a < arguments.length; a++)
        e[a - 1] = arguments[a];
      var i = t.call(this, r) || this;
      return (
        (i.message = r),
        (i.name = "Invariant Violation"),
        (i.message = g.format.apply(void 0, _([r], e))),
        p(i),
        i
      );
    }
    return n;
  })(Error);
  u.InvariantError = y;
  function h(t) {
    var n = function (r, e) {
      for (var a = [], i = 2; i < arguments.length; i++)
        a[i - 2] = arguments[i];
      if (!r) {
        var c = g.format.apply(void 0, _([e], a)),
          d = !!t.prototype.name,
          f = d ? new t(c) : t(c);
        throw (p(f), f);
      }
    };
    return n;
  }
  u.createInvariantWith = h;
  function N(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    return h(t).apply(void 0, n);
  }
  u.invariant = h(y);
  u.invariant.as = N;
});
var M = s((o) => {
  "use strict";
  var b =
      (o && o.__createBinding) ||
      (Object.create
        ? function (t, n, r, e) {
            e === void 0 && (e = r),
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return n[r];
                },
              });
          }
        : function (t, n, r, e) {
            e === void 0 && (e = r), (t[e] = n[r]);
          }),
    m =
      (o && o.__exportStar) ||
      function (t, n) {
        for (var r in t)
          r !== "default" &&
            !Object.prototype.hasOwnProperty.call(n, r) &&
            b(n, t, r);
      };
  Object.defineProperty(o, "__esModule", { value: !0 });
  m(O(), o);
  m(l(), o);
});
export { M as a };
