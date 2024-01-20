import { a as ce, b as Y } from "/build/_shared/chunk-O4ZNHJCK.js";
import { d as $ } from "/build/_shared/chunk-W6WK5VNR.js";
var le = $(ce());
var U = "-";
function de(e) {
  let r = pe(e),
    { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e;
  function l(s) {
    let a = s.split(U);
    return a[0] === "" && a.length !== 1 && a.shift(), re(a, r) || ue(s);
  }
  function n(s, a) {
    let u = t[s] || [];
    return a && o[s] ? [...u, ...o[s]] : u;
  }
  return { getClassGroupId: l, getConflictingClassGroupIds: n };
}
function re(e, r) {
  if (e.length === 0) return r.classGroupId;
  let t = e[0],
    o = r.nextPart.get(t),
    l = o ? re(e.slice(1), o) : void 0;
  if (l) return l;
  if (r.validators.length === 0) return;
  let n = e.join(U);
  return r.validators.find(({ validator: s }) => s(n))?.classGroupId;
}
var D = /^\[(.+)\]$/;
function ue(e) {
  if (D.test(e)) {
    let r = D.exec(e)[1],
      t = r?.substring(0, r.indexOf(":"));
    if (t) return "arbitrary.." + t;
  }
}
function pe(e) {
  let { theme: r, prefix: t } = e,
    o = { nextPart: new Map(), validators: [] };
  return (
    be(Object.entries(e.classGroups), t).forEach(([n, s]) => {
      B(s, o, n, r);
    }),
    o
  );
}
function B(e, r, t, o) {
  e.forEach((l) => {
    if (typeof l == "string") {
      let n = l === "" ? r : ee(r, l);
      n.classGroupId = t;
      return;
    }
    if (typeof l == "function") {
      if (fe(l)) {
        B(l(o), r, t, o);
        return;
      }
      r.validators.push({ validator: l, classGroupId: t });
      return;
    }
    Object.entries(l).forEach(([n, s]) => {
      B(s, ee(r, n), t, o);
    });
  });
}
function ee(e, r) {
  let t = e;
  return (
    r.split(U).forEach((o) => {
      t.nextPart.has(o) ||
        t.nextPart.set(o, { nextPart: new Map(), validators: [] }),
        (t = t.nextPart.get(o));
    }),
    t
  );
}
function fe(e) {
  return e.isThemeGetter;
}
function be(e, r) {
  return r
    ? e.map(([t, o]) => {
        let l = o.map((n) =>
          typeof n == "string"
            ? r + n
            : typeof n == "object"
            ? Object.fromEntries(Object.entries(n).map(([s, a]) => [r + s, a]))
            : n
        );
        return [t, l];
      })
    : e;
}
function ge(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let r = 0,
    t = new Map(),
    o = new Map();
  function l(n, s) {
    t.set(n, s), r++, r > e && ((r = 0), (o = t), (t = new Map()));
  }
  return {
    get(n) {
      let s = t.get(n);
      if (s !== void 0) return s;
      if ((s = o.get(n)) !== void 0) return l(n, s), s;
    },
    set(n, s) {
      t.has(n) ? t.set(n, s) : l(n, s);
    },
  };
}
var te = "!";
function me(e) {
  let r = e.separator,
    t = r.length === 1,
    o = r[0],
    l = r.length;
  return function (s) {
    let a = [],
      u = 0,
      f = 0,
      p;
    for (let b = 0; b < s.length; b++) {
      let m = s[b];
      if (u === 0) {
        if (m === o && (t || s.slice(b, b + l) === r)) {
          a.push(s.slice(f, b)), (f = b + l);
          continue;
        }
        if (m === "/") {
          p = b;
          continue;
        }
      }
      m === "[" ? u++ : m === "]" && u--;
    }
    let g = a.length === 0 ? s : s.substring(f),
      h = g.startsWith(te),
      w = h ? g.substring(1) : g,
      M = p && p > f ? p - f : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: w,
      maybePostfixModifierPosition: M,
    };
  };
}
function he(e) {
  if (e.length <= 1) return e;
  let r = [],
    t = [];
  return (
    e.forEach((o) => {
      o[0] === "[" ? (r.push(...t.sort(), o), (t = [])) : t.push(o);
    }),
    r.push(...t.sort()),
    r
  );
}
function ye(e) {
  return { cache: ge(e.cacheSize), splitModifiers: me(e), ...de(e) };
}
var xe = /\s+/;
function we(e, r) {
  let {
      splitModifiers: t,
      getClassGroupId: o,
      getConflictingClassGroupIds: l,
    } = r,
    n = new Set();
  return e
    .trim()
    .split(xe)
    .map((s) => {
      let {
          modifiers: a,
          hasImportantModifier: u,
          baseClassName: f,
          maybePostfixModifierPosition: p,
        } = t(s),
        g = o(p ? f.substring(0, p) : f),
        h = Boolean(p);
      if (!g) {
        if (!p) return { isTailwindClass: !1, originalClassName: s };
        if (((g = o(f)), !g))
          return { isTailwindClass: !1, originalClassName: s };
        h = !1;
      }
      let w = he(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: u ? w + te : w,
        classGroupId: g,
        originalClassName: s,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      let { modifierId: a, classGroupId: u, hasPostfixModifier: f } = s,
        p = a + u;
      return n.has(p)
        ? !1
        : (n.add(p), l(u, f).forEach((g) => n.add(a + g)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(" ");
}
function ve() {
  let e = 0,
    r,
    t,
    o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = oe(r)) && (o && (o += " "), (o += t));
  return o;
}
function oe(e) {
  if (typeof e == "string") return e;
  let r,
    t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = oe(e[o])) && (t && (t += " "), (t += r));
  return t;
}
function ke(e, ...r) {
  let t,
    o,
    l,
    n = s;
  function s(u) {
    let f = r.reduce((p, g) => g(p), e());
    return (t = ye(f)), (o = t.cache.get), (l = t.cache.set), (n = a), a(u);
  }
  function a(u) {
    let f = o(u);
    if (f) return f;
    let p = we(u, t);
    return l(u, p), p;
  }
  return function () {
    return n(ve.apply(null, arguments));
  };
}
function c(e) {
  let r = (t) => t[e] || [];
  return (r.isThemeGetter = !0), r;
}
var ne = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ze = /^\d+\/\d+$/,
  Ce = new Set(["px", "full", "screen"]),
  Me = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Se =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ae = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ie =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function x(e) {
  return C(e) || Ce.has(e) || ze.test(e);
}
function k(e) {
  return S(e, "length", Ne);
}
function C(e) {
  return Boolean(e) && !Number.isNaN(Number(e));
}
function E(e) {
  return S(e, "number", C);
}
function P(e) {
  return Boolean(e) && Number.isInteger(Number(e));
}
function Pe(e) {
  return e.endsWith("%") && C(e.slice(0, -1));
}
function i(e) {
  return ne.test(e);
}
function z(e) {
  return Me.test(e);
}
var Re = new Set(["length", "size", "percentage"]);
function Te(e) {
  return S(e, Re, se);
}
function Ge(e) {
  return S(e, "position", se);
}
var Le = new Set(["image", "url"]);
function Ee(e) {
  return S(e, Le, _e);
}
function je(e) {
  return S(e, "", We);
}
function R() {
  return !0;
}
function S(e, r, t) {
  let o = ne.exec(e);
  return o
    ? o[1]
      ? typeof r == "string"
        ? o[1] === r
        : r.has(o[1])
      : t(o[2])
    : !1;
}
function Ne(e) {
  return Se.test(e);
}
function se() {
  return !1;
}
function We(e) {
  return Ae.test(e);
}
function _e(e) {
  return Ie.test(e);
}
function Ve() {
  let e = c("colors"),
    r = c("spacing"),
    t = c("blur"),
    o = c("brightness"),
    l = c("borderColor"),
    n = c("borderRadius"),
    s = c("borderSpacing"),
    a = c("borderWidth"),
    u = c("contrast"),
    f = c("grayscale"),
    p = c("hueRotate"),
    g = c("invert"),
    h = c("gap"),
    w = c("gradientColorStops"),
    M = c("gradientColorStopPositions"),
    b = c("inset"),
    m = c("margin"),
    v = c("opacity"),
    y = c("padding"),
    F = c("saturate"),
    j = c("scale"),
    H = c("sepia"),
    O = c("skew"),
    q = c("space"),
    J = c("translate"),
    N = () => ["auto", "contain", "none"],
    W = () => ["auto", "hidden", "clip", "visible", "scroll"],
    _ = () => ["auto", i, r],
    d = () => [i, r],
    K = () => ["", x, k],
    T = () => ["auto", C, i],
    X = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    G = () => ["solid", "dashed", "dotted", "double", "none"],
    Z = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    V = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    A = () => ["", "0", i],
    Q = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    I = () => [C, E],
    L = () => [C, i];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [R],
      spacing: [x, k],
      blur: ["none", "", z, i],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", z, i],
      borderSpacing: d(),
      borderWidth: K(),
      contrast: I(),
      grayscale: A(),
      hueRotate: L(),
      invert: A(),
      gap: d(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Pe, k],
      inset: _(),
      margin: _(),
      opacity: I(),
      padding: d(),
      saturate: I(),
      scale: I(),
      sepia: A(),
      skew: L(),
      space: d(),
      translate: d(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", i] }],
      container: ["container"],
      columns: [{ columns: [z] }],
      "break-after": [{ "break-after": Q() }],
      "break-before": [{ "break-before": Q() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...X(), i] }],
      overflow: [{ overflow: W() }],
      "overflow-x": [{ "overflow-x": W() }],
      "overflow-y": [{ "overflow-y": W() }],
      overscroll: [{ overscroll: N() }],
      "overscroll-x": [{ "overscroll-x": N() }],
      "overscroll-y": [{ "overscroll-y": N() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [b] }],
      "inset-x": [{ "inset-x": [b] }],
      "inset-y": [{ "inset-y": [b] }],
      start: [{ start: [b] }],
      end: [{ end: [b] }],
      top: [{ top: [b] }],
      right: [{ right: [b] }],
      bottom: [{ bottom: [b] }],
      left: [{ left: [b] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", P, i] }],
      basis: [{ basis: _() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", i] }],
      grow: [{ grow: A() }],
      shrink: [{ shrink: A() }],
      order: [{ order: ["first", "last", "none", P, i] }],
      "grid-cols": [{ "grid-cols": [R] }],
      "col-start-end": [{ col: ["auto", { span: ["full", P, i] }, i] }],
      "col-start": [{ "col-start": T() }],
      "col-end": [{ "col-end": T() }],
      "grid-rows": [{ "grid-rows": [R] }],
      "row-start-end": [{ row: ["auto", { span: [P, i] }, i] }],
      "row-start": [{ "row-start": T() }],
      "row-end": [{ "row-end": T() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", i] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", i] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...V()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...V(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...V(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [y] }],
      px: [{ px: [y] }],
      py: [{ py: [y] }],
      ps: [{ ps: [y] }],
      pe: [{ pe: [y] }],
      pt: [{ pt: [y] }],
      pr: [{ pr: [y] }],
      pb: [{ pb: [y] }],
      pl: [{ pl: [y] }],
      m: [{ m: [m] }],
      mx: [{ mx: [m] }],
      my: [{ my: [m] }],
      ms: [{ ms: [m] }],
      me: [{ me: [m] }],
      mt: [{ mt: [m] }],
      mr: [{ mr: [m] }],
      mb: [{ mb: [m] }],
      ml: [{ ml: [m] }],
      "space-x": [{ "space-x": [q] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [q] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", i, r] }],
      "min-w": [{ "min-w": [i, r, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            i,
            r,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [z] },
            z,
          ],
        },
      ],
      h: [{ h: [i, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [i, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [i, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [i, r, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", z, k] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            E,
          ],
        },
      ],
      "font-family": [{ font: [R] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            i,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", C, E] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            x,
            i,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", i] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", i] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [v] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [v] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", x, k] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", x, i] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: d() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            i,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", i] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [v] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...X(), Ge] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Te] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Ee,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [M] }],
      "gradient-via-pos": [{ via: [M] }],
      "gradient-to-pos": [{ to: [M] }],
      "gradient-from": [{ from: [w] }],
      "gradient-via": [{ via: [w] }],
      "gradient-to": [{ to: [w] }],
      rounded: [{ rounded: [n] }],
      "rounded-s": [{ "rounded-s": [n] }],
      "rounded-e": [{ "rounded-e": [n] }],
      "rounded-t": [{ "rounded-t": [n] }],
      "rounded-r": [{ "rounded-r": [n] }],
      "rounded-b": [{ "rounded-b": [n] }],
      "rounded-l": [{ "rounded-l": [n] }],
      "rounded-ss": [{ "rounded-ss": [n] }],
      "rounded-se": [{ "rounded-se": [n] }],
      "rounded-ee": [{ "rounded-ee": [n] }],
      "rounded-es": [{ "rounded-es": [n] }],
      "rounded-tl": [{ "rounded-tl": [n] }],
      "rounded-tr": [{ "rounded-tr": [n] }],
      "rounded-br": [{ "rounded-br": [n] }],
      "rounded-bl": [{ "rounded-bl": [n] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [v] }],
      "border-style": [{ border: [...G(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [v] }],
      "divide-style": [{ divide: G() }],
      "border-color": [{ border: [l] }],
      "border-color-x": [{ "border-x": [l] }],
      "border-color-y": [{ "border-y": [l] }],
      "border-color-t": [{ "border-t": [l] }],
      "border-color-r": [{ "border-r": [l] }],
      "border-color-b": [{ "border-b": [l] }],
      "border-color-l": [{ "border-l": [l] }],
      "divide-color": [{ divide: [l] }],
      "outline-style": [{ outline: ["", ...G()] }],
      "outline-offset": [{ "outline-offset": [x, i] }],
      "outline-w": [{ outline: [x, k] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: K() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [v] }],
      "ring-offset-w": [{ "ring-offset": [x, k] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", z, je] }],
      "shadow-color": [{ shadow: [R] }],
      opacity: [{ opacity: [v] }],
      "mix-blend": [{ "mix-blend": Z() }],
      "bg-blend": [{ "bg-blend": Z() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [t] }],
      brightness: [{ brightness: [o] }],
      contrast: [{ contrast: [u] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", z, i] }],
      grayscale: [{ grayscale: [f] }],
      "hue-rotate": [{ "hue-rotate": [p] }],
      invert: [{ invert: [g] }],
      saturate: [{ saturate: [F] }],
      sepia: [{ sepia: [H] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [t] }],
      "backdrop-brightness": [{ "backdrop-brightness": [o] }],
      "backdrop-contrast": [{ "backdrop-contrast": [u] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [f] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
      "backdrop-invert": [{ "backdrop-invert": [g] }],
      "backdrop-opacity": [{ "backdrop-opacity": [v] }],
      "backdrop-saturate": [{ "backdrop-saturate": [F] }],
      "backdrop-sepia": [{ "backdrop-sepia": [H] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            i,
          ],
        },
      ],
      duration: [{ duration: L() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", i] }],
      delay: [{ delay: L() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", i] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [j] }],
      "scale-x": [{ "scale-x": [j] }],
      "scale-y": [{ "scale-y": [j] }],
      rotate: [{ rotate: [P, i] }],
      "translate-x": [{ "translate-x": [J] }],
      "translate-y": [{ "translate-y": [J] }],
      "skew-x": [{ "skew-x": [O] }],
      "skew-y": [{ "skew-y": [O] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            i,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            i,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": d() }],
      "scroll-mx": [{ "scroll-mx": d() }],
      "scroll-my": [{ "scroll-my": d() }],
      "scroll-ms": [{ "scroll-ms": d() }],
      "scroll-me": [{ "scroll-me": d() }],
      "scroll-mt": [{ "scroll-mt": d() }],
      "scroll-mr": [{ "scroll-mr": d() }],
      "scroll-mb": [{ "scroll-mb": d() }],
      "scroll-ml": [{ "scroll-ml": d() }],
      "scroll-p": [{ "scroll-p": d() }],
      "scroll-px": [{ "scroll-px": d() }],
      "scroll-py": [{ "scroll-py": d() }],
      "scroll-ps": [{ "scroll-ps": d() }],
      "scroll-pe": [{ "scroll-pe": d() }],
      "scroll-pt": [{ "scroll-pt": d() }],
      "scroll-pr": [{ "scroll-pr": d() }],
      "scroll-pb": [{ "scroll-pb": d() }],
      "scroll-pl": [{ "scroll-pl": d() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", i] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [x, k, E] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var ie = ke(Ve);
var ae = $(Y()),
  $e = (e) => {
    let [r, t] = (0, le.useState)(!1);
    return (0, ae.jsx)("img", {
      ...e,
      className: ie(
        `${r ? "opacity-100" : "opacity-0"} transition-opacity duration-500`,
        e.className
      ),
      onLoad: (o) => {
        t(!0), e.onLoad && e.onLoad(o);
      },
    });
  },
  He = $e;
export { He as a };
