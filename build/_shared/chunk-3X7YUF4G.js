import { a as g } from "/build/_shared/chunk-O4ZNHJCK.js";
import { d as u } from "/build/_shared/chunk-W6WK5VNR.js";
var c = u(g());
var l = u(g()),
  a = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  m = l.default.createContext && l.default.createContext(a);
var n = function () {
    return (
      (n =
        Object.assign ||
        function (e) {
          for (var i, t = 1, o = arguments.length; t < o; t++) {
            i = arguments[t];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
      n.apply(this, arguments)
    );
  },
  I = function (e, i) {
    var t = {};
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) &&
        i.indexOf(o) < 0 &&
        (t[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
        i.indexOf(o[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
          (t[o[s]] = e[o[s]]);
    return t;
  };
function b(e) {
  return (
    e &&
    e.map(function (i, t) {
      return c.default.createElement(i.tag, n({ key: t }, i.attr), b(i.child));
    })
  );
}
function j(e) {
  return function (i) {
    return c.default.createElement(
      U,
      n({ attr: n({}, e.attr) }, i),
      b(e.child)
    );
  };
}
function U(e) {
  var i = function (t) {
    var o = e.attr,
      s = e.size,
      h = e.title,
      d = I(e, ["attr", "size", "title"]),
      p = s || t.size || "1em",
      r;
    return (
      t.className && (r = t.className),
      e.className && (r = (r ? r + " " : "") + e.className),
      c.default.createElement(
        "svg",
        n(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          o,
          d,
          {
            className: r,
            style: n(n({ color: e.color || t.color }, t.style), e.style),
            height: p,
            width: p,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        h && c.default.createElement("title", null, h),
        e.children
      )
    );
  };
  return m !== void 0
    ? c.default.createElement(m.Consumer, null, function (t) {
        return i(t);
      })
    : i(a);
}
export { j as a };
