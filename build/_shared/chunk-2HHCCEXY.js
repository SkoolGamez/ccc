import { a as w } from "/build/_shared/chunk-O4ZNHJCK.js";
import {
  a as on,
  c as ba,
  d as M,
  e as Sa,
} from "/build/_shared/chunk-W6WK5VNR.js";
function La(t) {
  var e = {};
  return function (r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var kn,
  Bn = on(() => {
    kn = La;
  });
var Fn = {};
ba(Fn, { default: () => Ba });
var Ea,
  ka,
  Ba,
  On = on(() => {
    Bn();
    (Ea =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/),
      (ka = kn(function (t) {
        return (
          Ea.test(t) ||
          (t.charCodeAt(0) === 111 &&
            t.charCodeAt(1) === 110 &&
            t.charCodeAt(2) < 91)
        );
      })),
      (Ba = ka);
  });
var eo = M(w(), 1),
  Et = M(w(), 1);
var nn = M(w(), 1),
  Ue = (0, nn.createContext)({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
var sn = M(w(), 1),
  xt = (0, sn.createContext)({});
var tt = M(w(), 1);
var an = M(w(), 1),
  vt = (0, an.createContext)(null);
var Ge = M(w(), 1);
var Pt = typeof document < "u";
var Wt = Pt ? Ge.useLayoutEffect : Ge.useEffect;
var cn = M(w(), 1),
  ze = (0, cn.createContext)({ strict: !1 });
function ln(t, e, r, o) {
  let { visualElement: n } = (0, tt.useContext)(xt),
    s = (0, tt.useContext)(ze),
    i = (0, tt.useContext)(vt),
    a = (0, tt.useContext)(Ue).reducedMotion,
    c = (0, tt.useRef)();
  (o = o || s.renderer),
    !c.current &&
      o &&
      (c.current = o(t, {
        visualState: e,
        parent: n,
        props: r,
        presenceContext: i,
        blockInitialAnimation: i ? i.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  let l = c.current;
  (0, tt.useInsertionEffect)(() => {
    l && l.update(r, i);
  });
  let u = (0, tt.useRef)(Boolean(window.HandoffAppearAnimations));
  return (
    Wt(() => {
      !l ||
        (l.render(),
        u.current && l.animationState && l.animationState.animateChanges());
    }),
    (0, tt.useEffect)(() => {
      !l ||
        (l.updateFeatures(),
        !u.current && l.animationState && l.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (u.current = !1));
    }),
    l
  );
}
var un = M(w(), 1);
function lt(t) {
  return (
    typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function mn(t, e, r) {
  return (0, un.useCallback)(
    (o) => {
      o && t.mount && t.mount(o),
        e && (o ? e.mount(o) : e.unmount()),
        r && (typeof r == "function" ? r(o) : lt(r) && (r.current = o));
    },
    [e]
  );
}
var $e = M(w(), 1);
function ut(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Tt(t) {
  return typeof t == "object" && typeof t.start == "function";
}
var He = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Ve = ["initial", ...He];
function Rt(t) {
  return Tt(t.animate) || Ve.some((e) => ut(t[e]));
}
function We(t) {
  return Boolean(Rt(t) || t.variants);
}
function fn(t, e) {
  if (Rt(t)) {
    let { initial: r, animate: o } = t;
    return {
      initial: r === !1 || ut(r) ? r : void 0,
      animate: ut(o) ? o : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function hn(t) {
  let { initial: e, animate: r } = fn(t, (0, $e.useContext)(xt));
  return (0, $e.useMemo)(() => ({ initial: e, animate: r }), [pn(e), pn(r)]);
}
function pn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
var dn = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Lt = {};
for (let t in dn) Lt[t] = { isEnabled: (e) => dn[t].some((r) => !!e[r]) };
function gn(t) {
  for (let e in t) Lt[e] = { ...Lt[e], ...t[e] };
}
var yn = M(w(), 1),
  $t = (0, yn.createContext)({});
var xn = M(w(), 1),
  Ke = (0, xn.createContext)({});
var vn = Symbol.for("motionComponentSymbol");
function Pn({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: r,
  useVisualState: o,
  Component: n,
}) {
  t && gn(t);
  function s(a, c) {
    let l,
      u = { ...(0, Et.useContext)(Ue), ...a, layoutId: Ca(a) },
      { isStatic: m } = u,
      f = hn(a),
      p = o(a, m);
    if (!m && Pt) {
      f.visualElement = ln(n, p, u, e);
      let h = (0, Et.useContext)(Ke),
        y = (0, Et.useContext)(ze).strict;
      f.visualElement && (l = f.visualElement.loadFeatures(u, y, t, h));
    }
    return eo.createElement(
      xt.Provider,
      { value: f },
      l && f.visualElement
        ? eo.createElement(l, { visualElement: f.visualElement, ...u })
        : null,
      r(n, a, mn(p, f.visualElement, c), p, m, f.visualElement)
    );
  }
  let i = (0, Et.forwardRef)(s);
  return (i[vn] = n), i;
}
function Ca({ layoutId: t }) {
  let e = (0, Et.useContext)($t).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Tn(t) {
  function e(o, n = {}) {
    return Pn(t(o, n));
  }
  if (typeof Proxy > "u") return e;
  let r = new Map();
  return new Proxy(e, {
    get: (o, n) => (r.has(n) || r.set(n, e(n)), r.get(n)),
  });
}
var Vn = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Kt(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(Vn.indexOf(t) > -1 || /[A-Z]/.test(t));
}
var Je = M(w(), 1);
var Ln = M(w(), 1);
var _t = {};
function bn(t) {
  Object.assign(_t, t);
}
var Vt = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  K = new Set(Vt);
function _e(t, { layout: e, layoutId: r }) {
  return (
    K.has(t) ||
    t.startsWith("origin") ||
    ((e || r !== void 0) && (!!_t[t] || t === "opacity"))
  );
}
var L = (t) => Boolean(t && t.getVelocity);
var Aa = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Ma = Vt.length;
function Sn(
  t,
  { enableHardwareAcceleration: e = !0, allowTransformNone: r = !0 },
  o,
  n
) {
  let s = "";
  for (let i = 0; i < Ma; i++) {
    let a = Vt[i];
    if (t[a] !== void 0) {
      let c = Aa[a] || a;
      s += `${c}(${t[a]}) `;
    }
  }
  return (
    e && !t.z && (s += "translateZ(0)"),
    (s = s.trim()),
    n ? (s = n(t, o ? "" : s)) : r && o && (s = "none"),
    s
  );
}
var Cn = (t) => (e) => typeof e == "string" && e.startsWith(t),
  qe = Cn("--"),
  Ye = Cn("var(--"),
  An =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
var Mn = (t, e) => (e && typeof t == "number" ? e.transform(t) : t);
var z = (t, e, r) => Math.min(Math.max(r, t), e);
var et = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  bt = { ...et, transform: (t) => z(0, 1, t) },
  be = { ...et, default: 1 };
var St = (t) => Math.round(t * 1e5) / 1e5,
  kt = /(-)?([\d]*\.?[\d])+/g,
  ro =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  wn =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function mt(t) {
  return typeof t == "string";
}
var Se = (t) => ({
    test: (e) => mt(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  ot = Se("deg"),
  H = Se("%"),
  x = Se("px"),
  Dn = Se("vh"),
  Rn = Se("vw"),
  oo = {
    ...H,
    parse: (t) => H.parse(t) / 100,
    transform: (t) => H.transform(t * 100),
  };
var no = { ...et, transform: Math.round };
var Xe = {
  borderWidth: x,
  borderTopWidth: x,
  borderRightWidth: x,
  borderBottomWidth: x,
  borderLeftWidth: x,
  borderRadius: x,
  radius: x,
  borderTopLeftRadius: x,
  borderTopRightRadius: x,
  borderBottomRightRadius: x,
  borderBottomLeftRadius: x,
  width: x,
  maxWidth: x,
  height: x,
  maxHeight: x,
  size: x,
  top: x,
  right: x,
  bottom: x,
  left: x,
  padding: x,
  paddingTop: x,
  paddingRight: x,
  paddingBottom: x,
  paddingLeft: x,
  margin: x,
  marginTop: x,
  marginRight: x,
  marginBottom: x,
  marginLeft: x,
  rotate: ot,
  rotateX: ot,
  rotateY: ot,
  rotateZ: ot,
  scale: be,
  scaleX: be,
  scaleY: be,
  scaleZ: be,
  skew: ot,
  skewX: ot,
  skewY: ot,
  distance: x,
  translateX: x,
  translateY: x,
  translateZ: x,
  x,
  y: x,
  z: x,
  perspective: x,
  transformPerspective: x,
  opacity: bt,
  originX: oo,
  originY: oo,
  originZ: x,
  zIndex: no,
  fillOpacity: bt,
  strokeOpacity: bt,
  numOctaves: no,
};
function qt(t, e, r, o) {
  let { style: n, vars: s, transform: i, transformOrigin: a } = t,
    c = !1,
    l = !1,
    u = !0;
  for (let m in e) {
    let f = e[m];
    if (qe(m)) {
      s[m] = f;
      continue;
    }
    let p = Xe[m],
      h = Mn(f, p);
    if (K.has(m)) {
      if (((c = !0), (i[m] = h), !u)) continue;
      f !== (p.default || 0) && (u = !1);
    } else m.startsWith("origin") ? ((l = !0), (a[m] = h)) : (n[m] = h);
  }
  if (
    (e.transform ||
      (c || o
        ? (n.transform = Sn(t.transform, r, u, o))
        : n.transform && (n.transform = "none")),
    l)
  ) {
    let { originX: m = "50%", originY: f = "50%", originZ: p = 0 } = a;
    n.transformOrigin = `${m} ${f} ${p}`;
  }
}
var Yt = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function io(t, e, r) {
  for (let o in e) !L(e[o]) && !_e(o, r) && (t[o] = e[o]);
}
function wa({ transformTemplate: t }, e, r) {
  return (0, Ln.useMemo)(() => {
    let o = Yt();
    return (
      qt(o, e, { enableHardwareAcceleration: !r }, t),
      Object.assign({}, o.vars, o.style)
    );
  }, [e]);
}
function Da(t, e, r) {
  let o = t.style || {},
    n = {};
  return (
    io(n, o, t),
    Object.assign(n, wa(t, e, r)),
    t.transformValues ? t.transformValues(n) : n
  );
}
function En(t, e, r) {
  let o = {},
    n = Da(t, e, r);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((o.draggable = !1),
      (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none"),
      (n.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (o.tabIndex = 0),
    (o.style = n),
    o
  );
}
var Ra = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Ce(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    Ra.has(t)
  );
}
var In = (t) => !Ce(t);
function Fa(t) {
  !t || (In = (e) => (e.startsWith("on") ? !Ce(e) : t(e)));
}
try {
  Fa((On(), Sa(Fn)).default);
} catch {}
function jn(t, e, r) {
  let o = {};
  for (let n in t)
    (n === "values" && typeof t.values == "object") ||
      ((In(n) ||
        (r === !0 && Ce(n)) ||
        (!e && !Ce(n)) ||
        (t.draggable && n.startsWith("onDrag"))) &&
        (o[n] = t[n]));
  return o;
}
var zn = M(w(), 1);
function Nn(t, e, r) {
  return typeof t == "string" ? t : x.transform(e + r * t);
}
function Un(t, e, r) {
  let o = Nn(e, t.x, t.width),
    n = Nn(r, t.y, t.height);
  return `${o} ${n}`;
}
var Oa = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Ia = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Gn(t, e, r = 1, o = 0, n = !0) {
  t.pathLength = 1;
  let s = n ? Oa : Ia;
  t[s.offset] = x.transform(-o);
  let i = x.transform(e),
    a = x.transform(r);
  t[s.array] = `${i} ${a}`;
}
function Xt(
  t,
  {
    attrX: e,
    attrY: r,
    attrScale: o,
    originX: n,
    originY: s,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  m,
  f
) {
  if ((qt(t, l, u, f), m)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  let { attrs: p, style: h, dimensions: y } = t;
  p.transform && (y && (h.transform = p.transform), delete p.transform),
    y &&
      (n !== void 0 || s !== void 0 || h.transform) &&
      (h.transformOrigin = Un(
        y,
        n !== void 0 ? n : 0.5,
        s !== void 0 ? s : 0.5
      )),
    e !== void 0 && (p.x = e),
    r !== void 0 && (p.y = r),
    o !== void 0 && (p.scale = o),
    i !== void 0 && Gn(p, i, a, c, !1);
}
var Ze = () => ({ ...Yt(), attrs: {} });
var Zt = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Hn(t, e, r, o) {
  let n = (0, zn.useMemo)(() => {
    let s = Ze();
    return (
      Xt(s, e, { enableHardwareAcceleration: !1 }, Zt(o), t.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [e]);
  if (t.style) {
    let s = {};
    io(s, t.style, t), (n.style = { ...s, ...n.style });
  }
  return n;
}
function Wn(t = !1) {
  return (r, o, n, { latestValues: s }, i) => {
    let c = (Kt(r) ? Hn : En)(o, s, i, r),
      u = { ...jn(o, typeof r == "string", t), ...c, ref: n },
      { children: m } = o,
      f = (0, Je.useMemo)(() => (L(m) ? m.get() : m), [m]);
    return (0, Je.createElement)(r, { ...u, children: f });
  };
}
var Jt = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Qe(t, { style: e, vars: r }, o, n) {
  Object.assign(t.style, e, n && n.getProjectionStyles(o));
  for (let s in r) t.style.setProperty(s, r[s]);
}
var tr = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function er(t, e, r, o) {
  Qe(t, e, void 0, o);
  for (let n in e.attrs) t.setAttribute(tr.has(n) ? n : Jt(n), e.attrs[n]);
}
function Qt(t, e) {
  let { style: r } = t,
    o = {};
  for (let n in r)
    (L(r[n]) || (e.style && L(e.style[n])) || _e(n, t)) && (o[n] = r[n]);
  return o;
}
function rr(t, e) {
  let r = Qt(t, e);
  for (let o in t)
    if (L(t[o]) || L(e[o])) {
      let n =
        Vt.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[n] = t[o];
    }
  return r;
}
var so = M(w(), 1);
function te(t, e, r, o = {}, n = {}) {
  return (
    typeof e == "function" && (e = e(r !== void 0 ? r : t.custom, o, n)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(r !== void 0 ? r : t.custom, o, n)),
    e
  );
}
var $n = M(w(), 1);
function or(t) {
  let e = (0, $n.useRef)(null);
  return e.current === null && (e.current = t()), e.current;
}
var Bt = (t) => Array.isArray(t);
var Kn = (t) => Boolean(t && typeof t == "object" && t.mix && t.toValue),
  _n = (t) => (Bt(t) ? t[t.length - 1] || 0 : t);
function ee(t) {
  let e = L(t) ? t.get() : t;
  return Kn(e) ? e.toValue() : e;
}
function ja(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: r },
  o,
  n,
  s
) {
  let i = { latestValues: Na(o, n, s, t), renderState: e() };
  return r && (i.mount = (a) => r(o, a, i)), i;
}
var nr = (t) => (e, r) => {
  let o = (0, so.useContext)(xt),
    n = (0, so.useContext)(vt),
    s = () => ja(t, e, o, n);
  return r ? s() : or(s);
};
function Na(t, e, r, o) {
  let n = {},
    s = o(t, {});
  for (let f in s) n[f] = ee(s[f]);
  let { initial: i, animate: a } = t,
    c = Rt(t),
    l = We(t);
  e &&
    l &&
    !c &&
    t.inherit !== !1 &&
    (i === void 0 && (i = e.initial), a === void 0 && (a = e.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  let m = u ? a : i;
  return (
    m &&
      typeof m != "boolean" &&
      !Tt(m) &&
      (Array.isArray(m) ? m : [m]).forEach((p) => {
        let h = te(t, p);
        if (!h) return;
        let { transitionEnd: y, transition: v, ...b } = h;
        for (let g in b) {
          let d = b[g];
          if (Array.isArray(d)) {
            let P = u ? d.length - 1 : 0;
            d = d[P];
          }
          d !== null && (n[g] = d);
        }
        for (let g in y) n[g] = y[g];
      }),
    n
  );
}
var C = (t) => t;
var ir = class {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    let r = this.order.indexOf(e);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(e));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
};
function qn(t) {
  let e = new ir(),
    r = new ir(),
    o = 0,
    n = !1,
    s = !1,
    i = new WeakSet(),
    a = {
      schedule: (c, l = !1, u = !1) => {
        let m = u && n,
          f = m ? e : r;
        return l && i.add(c), f.add(c) && m && n && (o = e.order.length), c;
      },
      cancel: (c) => {
        r.remove(c), i.delete(c);
      },
      process: (c) => {
        if (n) {
          s = !0;
          return;
        }
        if (((n = !0), ([e, r] = [r, e]), r.clear(), (o = e.order.length), o))
          for (let l = 0; l < o; l++) {
            let u = e.order[l];
            u(c), i.has(u) && (a.schedule(u), t());
          }
        (n = !1), s && ((s = !1), a.process(c));
      },
    };
  return a;
}
var sr = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Ua = 40;
function Yn(t, e) {
  let r = !1,
    o = !0,
    n = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = sr.reduce((m, f) => ((m[f] = qn(() => (r = !0))), m), {}),
    i = (m) => s[m].process(n),
    a = () => {
      let m = performance.now();
      (r = !1),
        (n.delta = o ? 1e3 / 60 : Math.max(Math.min(m - n.timestamp, Ua), 1)),
        (n.timestamp = m),
        (n.isProcessing = !0),
        sr.forEach(i),
        (n.isProcessing = !1),
        r && e && ((o = !1), t(a));
    },
    c = () => {
      (r = !0), (o = !0), n.isProcessing || t(a);
    };
  return {
    schedule: sr.reduce((m, f) => {
      let p = s[f];
      return (m[f] = (h, y = !1, v = !1) => (r || c(), p.schedule(h, y, v))), m;
    }, {}),
    cancel: (m) => sr.forEach((f) => s[f].cancel(m)),
    state: n,
    steps: s,
  };
}
var {
  schedule: T,
  cancel: W,
  state: B,
  steps: ar,
} = Yn(typeof requestAnimationFrame < "u" ? requestAnimationFrame : C, !0);
var Xn = {
  useVisualState: nr({
    scrapeMotionValuesFromProps: rr,
    createRenderState: Ze,
    onMount: (t, e, { renderState: r, latestValues: o }) => {
      T.read(() => {
        try {
          r.dimensions =
            typeof e.getBBox == "function"
              ? e.getBBox()
              : e.getBoundingClientRect();
        } catch {
          r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }),
        T.render(() => {
          Xt(
            r,
            o,
            { enableHardwareAcceleration: !1 },
            Zt(e.tagName),
            t.transformTemplate
          ),
            er(e, r);
        });
    },
  }),
};
var Zn = {
  useVisualState: nr({
    scrapeMotionValuesFromProps: Qt,
    createRenderState: Yt,
  }),
};
function Jn(t, { forwardMotionProps: e = !1 }, r, o) {
  return {
    ...(Kt(t) ? Xn : Zn),
    preloadedFeatures: r,
    useRender: Wn(e),
    createVisualElement: o,
    Component: t,
  };
}
function _(t, e, r, o = { passive: !0 }) {
  return t.addEventListener(e, r, o), () => t.removeEventListener(e, r);
}
var cr = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function Ft(t, e = "page") {
  return { point: { x: t[e + "X"], y: t[e + "Y"] } };
}
var Qn = (t) => (e) => cr(e) && t(e, Ft(e));
function q(t, e, r, o) {
  return _(t, e, Qn(r), o);
}
var Ga = (t, e) => (r) => e(t(r)),
  Y = (...t) => t.reduce(Ga);
function ri(t) {
  let e = null;
  return () => {
    let r = () => {
      e = null;
    };
    return e === null ? ((e = t), r) : !1;
  };
}
var ti = ri("dragHorizontal"),
  ei = ri("dragVertical");
function ao(t) {
  let e = !1;
  if (t === "y") e = ei();
  else if (t === "x") e = ti();
  else {
    let r = ti(),
      o = ei();
    r && o
      ? (e = () => {
          r(), o();
        })
      : (r && r(), o && o());
  }
  return e;
}
function lr() {
  let t = ao(!0);
  return t ? (t(), !1) : !0;
}
var N = class {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
};
function oi(t, e) {
  let r = "pointer" + (e ? "enter" : "leave"),
    o = "onHover" + (e ? "Start" : "End"),
    n = (s, i) => {
      if (s.type === "touch" || lr()) return;
      let a = t.getProps();
      t.animationState &&
        a.whileHover &&
        t.animationState.setActive("whileHover", e),
        a[o] && T.update(() => a[o](s, i));
    };
  return q(t.current, r, n, { passive: !t.getProps()[o] });
}
var ur = class extends N {
  mount() {
    this.unmount = Y(oi(this.node, !0), oi(this.node, !1));
  }
  unmount() {}
};
var mr = class extends N {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Y(
      _(this.node.current, "focus", () => this.onFocus()),
      _(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
};
var co = (t, e) => (e ? (t === e ? !0 : co(t, e.parentElement)) : !1);
function lo(t, e) {
  if (!e) return;
  let r = new PointerEvent("pointer" + t);
  e(r, Ft(r));
}
var fr = class extends N {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = C),
      (this.removeEndListeners = C),
      (this.removeAccessibleListeners = C),
      (this.startPointerPress = (e, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        let o = this.node.getProps(),
          s = q(
            window,
            "pointerup",
            (a, c) => {
              if (!this.checkPressEnd()) return;
              let { onTap: l, onTapCancel: u } = this.node.getProps();
              T.update(() => {
                co(this.node.current, a.target) ? l && l(a, c) : u && u(a, c);
              });
            },
            { passive: !(o.onTap || o.onPointerUp) }
          ),
          i = q(window, "pointercancel", (a, c) => this.cancelPress(a, c), {
            passive: !(o.onTapCancel || o.onPointerCancel),
          });
        (this.removeEndListeners = Y(s, i)), this.startPress(e, r);
      }),
      (this.startAccessiblePress = () => {
        let e = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            let i = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                lo("up", (c, l) => {
                  let { onTap: u } = this.node.getProps();
                  u && T.update(() => u(c, l));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = _(this.node.current, "keyup", i)),
              lo("down", (a, c) => {
                this.startPress(a, c);
              });
          },
          r = _(this.node.current, "keydown", e),
          o = () => {
            !this.isPressing || lo("cancel", (s, i) => this.cancelPress(s, i));
          },
          n = _(this.node.current, "blur", o);
        this.removeAccessibleListeners = Y(r, n);
      });
  }
  startPress(e, r) {
    this.isPressing = !0;
    let { onTapStart: o, whileTap: n } = this.node.getProps();
    n &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      o && T.update(() => o(e, r));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !lr()
    );
  }
  cancelPress(e, r) {
    if (!this.checkPressEnd()) return;
    let { onTapCancel: o } = this.node.getProps();
    o && T.update(() => o(e, r));
  }
  mount() {
    let e = this.node.getProps(),
      r = q(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(e.onTapStart || e.onPointerStart),
      }),
      o = _(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Y(r, o);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
};
var mo = new WeakMap(),
  uo = new WeakMap(),
  za = (t) => {
    let e = mo.get(t.target);
    e && e(t);
  },
  Ha = (t) => {
    t.forEach(za);
  };
function Wa({ root: t, ...e }) {
  let r = t || document;
  uo.has(r) || uo.set(r, {});
  let o = uo.get(r),
    n = JSON.stringify(e);
  return o[n] || (o[n] = new IntersectionObserver(Ha, { root: t, ...e })), o[n];
}
function ni(t, e, r) {
  let o = Wa(e);
  return (
    mo.set(t, r),
    o.observe(t),
    () => {
      mo.delete(t), o.unobserve(t);
    }
  );
}
var $a = { some: 0, all: 1 },
  pr = class extends N {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: r, margin: o, amount: n = "some", once: s } = e,
        i = {
          root: r ? r.current : void 0,
          rootMargin: o,
          threshold: typeof n == "number" ? n : $a[n],
        },
        a = (c) => {
          let { isIntersecting: l } = c;
          if (
            this.isInView === l ||
            ((this.isInView = l), s && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: u, onViewportLeave: m } = this.node.getProps(),
            f = l ? u : m;
          f && f(c);
        };
      return ni(this.node.current, i, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: r } = this.node;
      ["amount", "margin", "root"].some(Ka(e, r)) && this.startObserver();
    }
    unmount() {}
  };
function Ka({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (r) => t[r] !== e[r];
}
var ii = {
  inView: { Feature: pr },
  tap: { Feature: fr },
  focus: { Feature: mr },
  hover: { Feature: ur },
};
function fo(t, e) {
  if (!Array.isArray(e)) return !1;
  let r = e.length;
  if (r !== t.length) return !1;
  for (let o = 0; o < r; o++) if (e[o] !== t[o]) return !1;
  return !0;
}
function _a(t) {
  let e = {};
  return t.values.forEach((r, o) => (e[o] = r.get())), e;
}
function qa(t) {
  let e = {};
  return t.values.forEach((r, o) => (e[o] = r.getVelocity())), e;
}
function Ct(t, e, r) {
  let o = t.getProps();
  return te(o, e, r !== void 0 ? r : o.custom, _a(t), qa(t));
}
var Ya = "framerAppearId",
  si = "data-" + Jt(Ya);
var re = C,
  G = C;
var Z = (t) => t * 1e3,
  X = (t) => t / 1e3;
var po = { current: !1 };
var ho = (t) => Array.isArray(t) && typeof t[0] == "number";
function go(t) {
  return Boolean(
    !t ||
      (typeof t == "string" && ai[t]) ||
      ho(t) ||
      (Array.isArray(t) && t.every(go))
  );
}
var Ae = ([t, e, r, o]) => `cubic-bezier(${t}, ${e}, ${r}, ${o})`,
  ai = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ae([0, 0.65, 0.55, 1]),
    circOut: Ae([0.55, 0, 1, 0.45]),
    backIn: Ae([0.31, 0.01, 0.66, -0.59]),
    backOut: Ae([0.33, 1.53, 0.69, 0.99]),
  };
function yo(t) {
  if (!!t) return ho(t) ? Ae(t) : Array.isArray(t) ? t.map(yo) : ai[t];
}
function ci(
  t,
  e,
  r,
  {
    delay: o = 0,
    duration: n,
    repeat: s = 0,
    repeatType: i = "loop",
    ease: a,
    times: c,
  } = {}
) {
  let l = { [e]: r };
  c && (l.offset = c);
  let u = yo(a);
  return (
    Array.isArray(u) && (l.easing = u),
    t.animate(l, {
      delay: o,
      duration: n,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: s + 1,
      direction: i === "reverse" ? "alternate" : "normal",
    })
  );
}
function li(t, { repeat: e, repeatType: r = "loop" }) {
  let o = e && r !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[o];
}
var ui = (t, e, r) =>
    (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
  Xa = 1e-7,
  Za = 12;
function Ja(t, e, r, o, n) {
  let s,
    i,
    a = 0;
  do (i = e + (r - e) / 2), (s = ui(i, o, n) - t), s > 0 ? (r = i) : (e = i);
  while (Math.abs(s) > Xa && ++a < Za);
  return i;
}
function At(t, e, r, o) {
  if (t === e && r === o) return C;
  let n = (s) => Ja(s, 0, 1, t, r);
  return (s) => (s === 0 || s === 1 ? s : ui(n(s), e, o));
}
var mi = At(0.42, 0, 1, 1),
  fi = At(0, 0, 0.58, 1),
  hr = At(0.42, 0, 0.58, 1);
var pi = (t) => Array.isArray(t) && typeof t[0] != "number";
var dr = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
var gr = (t) => (e) => 1 - t(1 - e);
var xo = (t) => 1 - Math.sin(Math.acos(t)),
  Me = gr(xo),
  hi = dr(Me);
var vo = At(0.33, 1.53, 0.69, 0.99),
  we = gr(vo),
  di = dr(we);
var gi = (t) =>
  (t *= 2) < 1 ? 0.5 * we(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
var yi = {
    linear: C,
    easeIn: mi,
    easeInOut: hr,
    easeOut: fi,
    circIn: xo,
    circInOut: hi,
    circOut: Me,
    backIn: we,
    backInOut: di,
    backOut: vo,
    anticipate: gi,
  },
  Po = (t) => {
    if (Array.isArray(t)) {
      G(
        t.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [e, r, o, n] = t;
      return At(e, r, o, n);
    } else if (typeof t == "string")
      return G(yi[t] !== void 0, `Invalid easing type '${t}'`), yi[t];
    return t;
  };
var oe = (t, e) => (r) =>
    Boolean(
      (mt(r) && wn.test(r) && r.startsWith(t)) ||
        (e && Object.prototype.hasOwnProperty.call(r, e))
    ),
  yr = (t, e, r) => (o) => {
    if (!mt(o)) return o;
    let [n, s, i, a] = o.match(kt);
    return {
      [t]: parseFloat(n),
      [e]: parseFloat(s),
      [r]: parseFloat(i),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  };
var Qa = (t) => z(0, 255, t),
  To = { ...et, transform: (t) => Math.round(Qa(t)) },
  nt = {
    test: oe("rgb", "red"),
    parse: yr("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: r, alpha: o = 1 }) =>
      "rgba(" +
      To.transform(t) +
      ", " +
      To.transform(e) +
      ", " +
      To.transform(r) +
      ", " +
      St(bt.transform(o)) +
      ")",
  };
function tc(t) {
  let e = "",
    r = "",
    o = "",
    n = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (r = t.substring(3, 5)),
        (o = t.substring(5, 7)),
        (n = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (r = t.substring(2, 3)),
        (o = t.substring(3, 4)),
        (n = t.substring(4, 5)),
        (e += e),
        (r += r),
        (o += o),
        (n += n)),
    {
      red: parseInt(e, 16),
      green: parseInt(r, 16),
      blue: parseInt(o, 16),
      alpha: n ? parseInt(n, 16) / 255 : 1,
    }
  );
}
var De = { test: oe("#"), parse: tc, transform: nt.transform };
var Mt = {
  test: oe("hsl", "hue"),
  parse: yr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: r, alpha: o = 1 }) =>
    "hsla(" +
    Math.round(t) +
    ", " +
    H.transform(St(e)) +
    ", " +
    H.transform(St(r)) +
    ", " +
    St(bt.transform(o)) +
    ")",
};
var O = {
  test: (t) => nt.test(t) || De.test(t) || Mt.test(t),
  parse: (t) =>
    nt.test(t) ? nt.parse(t) : Mt.test(t) ? Mt.parse(t) : De.parse(t),
  transform: (t) =>
    mt(t) ? t : t.hasOwnProperty("red") ? nt.transform(t) : Mt.transform(t),
};
var A = (t, e, r) => -r * t + r * e + t;
function Vo(t, e, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? t + (e - t) * 6 * r
      : r < 1 / 2
      ? e
      : r < 2 / 3
      ? t + (e - t) * (2 / 3 - r) * 6
      : t
  );
}
function xi({ hue: t, saturation: e, lightness: r, alpha: o }) {
  (t /= 360), (e /= 100), (r /= 100);
  let n = 0,
    s = 0,
    i = 0;
  if (!e) n = s = i = r;
  else {
    let a = r < 0.5 ? r * (1 + e) : r + e - r * e,
      c = 2 * r - a;
    (n = Vo(c, a, t + 1 / 3)), (s = Vo(c, a, t)), (i = Vo(c, a, t - 1 / 3));
  }
  return {
    red: Math.round(n * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: o,
  };
}
var bo = (t, e, r) => {
    let o = t * t;
    return Math.sqrt(Math.max(0, r * (e * e - o) + o));
  },
  ec = [De, nt, Mt],
  rc = (t) => ec.find((e) => e.test(t));
function vi(t) {
  let e = rc(t);
  G(
    Boolean(e),
    `'${t}' is not an animatable color. Use the equivalent color code instead.`
  );
  let r = e.parse(t);
  return e === Mt && (r = xi(r)), r;
}
var xr = (t, e) => {
  let r = vi(t),
    o = vi(e),
    n = { ...r };
  return (s) => (
    (n.red = bo(r.red, o.red, s)),
    (n.green = bo(r.green, o.green, s)),
    (n.blue = bo(r.blue, o.blue, s)),
    (n.alpha = A(r.alpha, o.alpha, s)),
    nt.transform(n)
  );
};
function oc(t) {
  var e, r;
  return (
    isNaN(t) &&
    mt(t) &&
    (((e = t.match(kt)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((r = t.match(ro)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
var Pi = { regex: An, countKey: "Vars", token: "${v}", parse: C },
  Ti = { regex: ro, countKey: "Colors", token: "${c}", parse: O.parse },
  Vi = { regex: kt, countKey: "Numbers", token: "${n}", parse: et.parse };
function So(t, { regex: e, countKey: r, token: o, parse: n }) {
  let s = t.tokenised.match(e);
  !s ||
    ((t["num" + r] = s.length),
    (t.tokenised = t.tokenised.replace(e, o)),
    t.values.push(...s.map(n)));
}
function Re(t) {
  let e = t.toString(),
    r = {
      value: e,
      tokenised: e,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return r.value.includes("var(--") && So(r, Pi), So(r, Ti), So(r, Vi), r;
}
function bi(t) {
  return Re(t).values;
}
function Si(t) {
  let { values: e, numColors: r, numVars: o, tokenised: n } = Re(t),
    s = e.length;
  return (i) => {
    let a = n;
    for (let c = 0; c < s; c++)
      c < o
        ? (a = a.replace(Pi.token, i[c]))
        : c < o + r
        ? (a = a.replace(Ti.token, O.transform(i[c])))
        : (a = a.replace(Vi.token, St(i[c])));
    return a;
  };
}
var nc = (t) => (typeof t == "number" ? 0 : t);
function ic(t) {
  let e = bi(t);
  return Si(t)(e.map(nc));
}
var $ = { test: oc, parse: bi, createTransformer: Si, getAnimatableNone: ic };
var Ci = (t, e) => (r) => `${r > 0 ? e : t}`;
function Ai(t, e) {
  return typeof t == "number"
    ? (r) => A(t, e, r)
    : O.test(t)
    ? xr(t, e)
    : t.startsWith("var(")
    ? Ci(t, e)
    : Ao(t, e);
}
var Co = (t, e) => {
    let r = [...t],
      o = r.length,
      n = t.map((s, i) => Ai(s, e[i]));
    return (s) => {
      for (let i = 0; i < o; i++) r[i] = n[i](s);
      return r;
    };
  },
  Mi = (t, e) => {
    let r = { ...t, ...e },
      o = {};
    for (let n in r)
      t[n] !== void 0 && e[n] !== void 0 && (o[n] = Ai(t[n], e[n]));
    return (n) => {
      for (let s in o) r[s] = o[s](n);
      return r;
    };
  },
  Ao = (t, e) => {
    let r = $.createTransformer(e),
      o = Re(t),
      n = Re(e);
    return o.numVars === n.numVars &&
      o.numColors === n.numColors &&
      o.numNumbers >= n.numNumbers
      ? Y(Co(o.values, n.values), r)
      : (re(
          !0,
          `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
        ),
        Ci(t, e));
  };
var ft = (t, e, r) => {
  let o = e - t;
  return o === 0 ? 1 : (r - t) / o;
};
var wi = (t, e) => (r) => A(t, e, r);
function sc(t) {
  return typeof t == "number"
    ? wi
    : typeof t == "string"
    ? O.test(t)
      ? xr
      : Ao
    : Array.isArray(t)
    ? Co
    : typeof t == "object"
    ? Mi
    : wi;
}
function ac(t, e, r) {
  let o = [],
    n = r || sc(t[0]),
    s = t.length - 1;
  for (let i = 0; i < s; i++) {
    let a = n(t[i], t[i + 1]);
    if (e) {
      let c = Array.isArray(e) ? e[i] || C : e;
      a = Y(c, a);
    }
    o.push(a);
  }
  return o;
}
function vr(t, e, { clamp: r = !0, ease: o, mixer: n } = {}) {
  let s = t.length;
  if (
    (G(s === e.length, "Both input and output ranges must be the same length"),
    s === 1)
  )
    return () => e[0];
  t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  let i = ac(e, o, n),
    a = i.length,
    c = (l) => {
      let u = 0;
      if (a > 1) for (; u < t.length - 2 && !(l < t[u + 1]); u++);
      let m = ft(t[u], t[u + 1], l);
      return i[u](m);
    };
  return r ? (l) => c(z(t[0], t[s - 1], l)) : c;
}
function Di(t, e) {
  let r = t[t.length - 1];
  for (let o = 1; o <= e; o++) {
    let n = ft(0, e, o);
    t.push(A(r, 1, n));
  }
}
function Ri(t) {
  let e = [0];
  return Di(e, t.length - 1), e;
}
function Li(t, e) {
  return t.map((r) => r * e);
}
function cc(t, e) {
  return t.map(() => e || hr).splice(0, t.length - 1);
}
function Le({
  duration: t = 300,
  keyframes: e,
  times: r,
  ease: o = "easeInOut",
}) {
  let n = pi(o) ? o.map(Po) : Po(o),
    s = { done: !1, value: e[0] },
    i = Li(r && r.length === e.length ? r : Ri(e), t),
    a = vr(i, e, { ease: Array.isArray(n) ? n : cc(e, n) });
  return {
    calculatedDuration: t,
    next: (c) => ((s.value = a(c)), (s.done = c >= t), s),
  };
}
function Pr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
var lc = 5;
function Tr(t, e, r) {
  let o = Math.max(e - lc, 0);
  return Pr(r - t(o), e - o);
}
var Mo = 0.001,
  uc = 0.01,
  Ei = 10,
  mc = 0.05,
  fc = 1;
function ki({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: r = 0,
  mass: o = 1,
}) {
  let n, s;
  re(t <= Z(Ei), "Spring duration must be 10 seconds or less");
  let i = 1 - e;
  (i = z(mc, fc, i)),
    (t = z(uc, Ei, X(t))),
    i < 1
      ? ((n = (l) => {
          let u = l * i,
            m = u * t,
            f = u - r,
            p = Vr(l, i),
            h = Math.exp(-m);
          return Mo - (f / p) * h;
        }),
        (s = (l) => {
          let m = l * i * t,
            f = m * r + r,
            p = Math.pow(i, 2) * Math.pow(l, 2) * t,
            h = Math.exp(-m),
            y = Vr(Math.pow(l, 2), i);
          return ((-n(l) + Mo > 0 ? -1 : 1) * ((f - p) * h)) / y;
        }))
      : ((n = (l) => {
          let u = Math.exp(-l * t),
            m = (l - r) * t + 1;
          return -Mo + u * m;
        }),
        (s = (l) => {
          let u = Math.exp(-l * t),
            m = (r - l) * (t * t);
          return u * m;
        }));
  let a = 5 / t,
    c = hc(n, s, a);
  if (((t = Z(t)), isNaN(c)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    let l = Math.pow(c, 2) * o;
    return { stiffness: l, damping: i * 2 * Math.sqrt(o * l), duration: t };
  }
}
var pc = 12;
function hc(t, e, r) {
  let o = r;
  for (let n = 1; n < pc; n++) o = o - t(o) / e(o);
  return o;
}
function Vr(t, e) {
  return t * Math.sqrt(1 - e * e);
}
var dc = ["duration", "bounce"],
  gc = ["stiffness", "damping", "mass"];
function Bi(t, e) {
  return e.some((r) => t[r] !== void 0);
}
function yc(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Bi(t, gc) && Bi(t, dc)) {
    let r = ki(t);
    (e = { ...e, ...r, velocity: 0, mass: 1 }), (e.isResolvedFromDuration = !0);
  }
  return e;
}
function br({ keyframes: t, restDelta: e, restSpeed: r, ...o }) {
  let n = t[0],
    s = t[t.length - 1],
    i = { done: !1, value: n },
    {
      stiffness: a,
      damping: c,
      mass: l,
      velocity: u,
      duration: m,
      isResolvedFromDuration: f,
    } = yc(o),
    p = u ? -X(u) : 0,
    h = c / (2 * Math.sqrt(a * l)),
    y = s - n,
    v = X(Math.sqrt(a / l)),
    b = Math.abs(y) < 5;
  r || (r = b ? 0.01 : 2), e || (e = b ? 0.005 : 0.5);
  let g;
  if (h < 1) {
    let d = Vr(v, h);
    g = (P) => {
      let V = Math.exp(-h * v * P);
      return (
        s - V * (((p + h * v * y) / d) * Math.sin(d * P) + y * Math.cos(d * P))
      );
    };
  } else if (h === 1) g = (d) => s - Math.exp(-v * d) * (y + (p + v * y) * d);
  else {
    let d = v * Math.sqrt(h * h - 1);
    g = (P) => {
      let V = Math.exp(-h * v * P),
        F = Math.min(d * P, 300);
      return (
        s - (V * ((p + h * v * y) * Math.sinh(F) + d * y * Math.cosh(F))) / d
      );
    };
  }
  return {
    calculatedDuration: (f && m) || null,
    next: (d) => {
      let P = g(d);
      if (f) i.done = d >= m;
      else {
        let V = p;
        d !== 0 && (h < 1 ? (V = Tr(g, d, P)) : (V = 0));
        let F = Math.abs(V) <= r,
          D = Math.abs(s - P) <= e;
        i.done = F && D;
      }
      return (i.value = i.done ? s : P), i;
    },
  };
}
function wo({
  keyframes: t,
  velocity: e = 0,
  power: r = 0.8,
  timeConstant: o = 325,
  bounceDamping: n = 10,
  bounceStiffness: s = 500,
  modifyTarget: i,
  min: a,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let m = t[0],
    f = { done: !1, value: m },
    p = (S) => (a !== void 0 && S < a) || (c !== void 0 && S > c),
    h = (S) =>
      a === void 0
        ? c
        : c === void 0 || Math.abs(a - S) < Math.abs(c - S)
        ? a
        : c,
    y = r * e,
    v = m + y,
    b = i === void 0 ? v : i(v);
  b !== v && (y = b - m);
  let g = (S) => -y * Math.exp(-S / o),
    d = (S) => b + g(S),
    P = (S) => {
      let R = g(S),
        at = d(S);
      (f.done = Math.abs(R) <= l), (f.value = f.done ? b : at);
    },
    V,
    F,
    D = (S) => {
      !p(f.value) ||
        ((V = S),
        (F = br({
          keyframes: [f.value, h(f.value)],
          velocity: Tr(d, S, f.value),
          damping: n,
          stiffness: s,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    D(0),
    {
      calculatedDuration: null,
      next: (S) => {
        let R = !1;
        return (
          !F && V === void 0 && ((R = !0), P(S), D(S)),
          V !== void 0 && S > V ? F.next(S - V) : (!R && P(S), f)
        );
      },
    }
  );
}
var Fi = (t) => {
  let e = ({ timestamp: r }) => t(r);
  return {
    start: () => T.update(e, !0),
    stop: () => W(e),
    now: () => (B.isProcessing ? B.timestamp : performance.now()),
  };
};
function Do(t) {
  let e = 0,
    r = 50,
    o = t.next(e);
  for (; !o.done && e < 2e4; ) (e += r), (o = t.next(e));
  return e >= 2e4 ? 1 / 0 : e;
}
var xc = { decay: wo, inertia: wo, tween: Le, keyframes: Le, spring: br };
function Ot({
  autoplay: t = !0,
  delay: e = 0,
  driver: r = Fi,
  keyframes: o,
  type: n = "keyframes",
  repeat: s = 0,
  repeatDelay: i = 0,
  repeatType: a = "loop",
  onPlay: c,
  onStop: l,
  onComplete: u,
  onUpdate: m,
  ...f
}) {
  let p = 1,
    h = !1,
    y,
    v,
    b = () => {
      v = new Promise((k) => {
        y = k;
      });
    };
  b();
  let g,
    d = xc[n] || Le,
    P;
  d !== Le &&
    typeof o[0] != "number" &&
    ((P = vr([0, 100], o, { clamp: !1 })), (o = [0, 100]));
  let V = d({ ...f, keyframes: o }),
    F;
  a === "mirror" &&
    (F = d({
      ...f,
      keyframes: [...o].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let D = "idle",
    S = null,
    R = null,
    at = null;
  V.calculatedDuration === null && s && (V.calculatedDuration = Do(V));
  let { calculatedDuration: ct } = V,
    dt = 1 / 0,
    gt = 1 / 0;
  ct !== null && ((dt = ct + i), (gt = dt * (s + 1) - i));
  let j = 0,
    I = (k) => {
      if (R === null) return;
      p > 0 && (R = Math.min(R, k)),
        p < 0 && (R = Math.min(k - gt / p, R)),
        S !== null ? (j = S) : (j = Math.round(k - R) * p);
      let Pe = j - e * (p >= 0 ? 1 : -1),
        Zo = p >= 0 ? Pe < 0 : Pe > gt;
      (j = Math.max(Pe, 0)), D === "finished" && S === null && (j = gt);
      let Jo = j,
        Qo = V;
      if (s) {
        let to = j / dt,
          Ne = Math.floor(to),
          Dt = to % 1;
        !Dt && to >= 1 && (Dt = 1),
          Dt === 1 && Ne--,
          (Ne = Math.min(Ne, s + 1));
        let en = Boolean(Ne % 2);
        en &&
          (a === "reverse"
            ? ((Dt = 1 - Dt), i && (Dt -= i / dt))
            : a === "mirror" && (Qo = F));
        let rn = z(0, 1, Dt);
        j > gt && (rn = a === "reverse" && en ? 1 : 0), (Jo = rn * dt);
      }
      let Te = Zo ? { done: !1, value: o[0] } : Qo.next(Jo);
      P && (Te.value = P(Te.value));
      let { done: tn } = Te;
      !Zo && ct !== null && (tn = p >= 0 ? j >= gt : j <= 0);
      let Va = S === null && (D === "finished" || (D === "running" && tn));
      return m && m(Te.value), Va && Ta(), Te;
    },
    yt = () => {
      g && g.stop(), (g = void 0);
    },
    Ht = () => {
      (D = "idle"), yt(), y(), b(), (R = at = null);
    },
    Ta = () => {
      (D = "finished"), u && u(), yt(), y();
    },
    Yo = () => {
      if (h) return;
      g || (g = r(I));
      let k = g.now();
      c && c(),
        S !== null ? (R = k - S) : (!R || D === "finished") && (R = k),
        D === "finished" && b(),
        (at = R),
        (S = null),
        (D = "running"),
        g.start();
    };
  t && Yo();
  let Xo = {
    then(k, Pe) {
      return v.then(k, Pe);
    },
    get time() {
      return X(j);
    },
    set time(k) {
      (k = Z(k)),
        (j = k),
        S !== null || !g || p === 0 ? (S = k) : (R = g.now() - k / p);
    },
    get duration() {
      let k = V.calculatedDuration === null ? Do(V) : V.calculatedDuration;
      return X(k);
    },
    get speed() {
      return p;
    },
    set speed(k) {
      k === p || !g || ((p = k), (Xo.time = X(j)));
    },
    get state() {
      return D;
    },
    play: Yo,
    pause: () => {
      (D = "paused"), (S = j);
    },
    stop: () => {
      (h = !0), D !== "idle" && ((D = "idle"), l && l(), Ht());
    },
    cancel: () => {
      at !== null && I(at), Ht();
    },
    complete: () => {
      D = "finished";
    },
    sample: (k) => ((R = 0), I(k)),
  };
  return Xo;
}
function Oi(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
var vc = Oi(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Pc = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Sr = 10,
  Tc = 2e4,
  Vc = (t, e) => e.type === "spring" || t === "backgroundColor" || !go(e.ease);
function Ii(t, e, { onUpdate: r, onComplete: o, ...n }) {
  if (
    !(
      vc() &&
      Pc.has(e) &&
      !n.repeatDelay &&
      n.repeatType !== "mirror" &&
      n.damping !== 0 &&
      n.type !== "inertia"
    )
  )
    return !1;
  let i = !1,
    a,
    c,
    l = () => {
      c = new Promise((g) => {
        a = g;
      });
    };
  l();
  let { keyframes: u, duration: m = 300, ease: f, times: p } = n;
  if (Vc(e, n)) {
    let g = Ot({ ...n, repeat: 0, delay: 0 }),
      d = { done: !1, value: u[0] },
      P = [],
      V = 0;
    for (; !d.done && V < Tc; ) (d = g.sample(V)), P.push(d.value), (V += Sr);
    (p = void 0), (u = P), (m = V - Sr), (f = "linear");
  }
  let h = ci(t.owner.current, e, u, { ...n, duration: m, ease: f, times: p });
  n.syncStart &&
    (h.startTime = B.isProcessing
      ? B.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  let y = () => h.cancel(),
    v = () => {
      T.update(y), a(), l();
    };
  return (
    (h.onfinish = () => {
      t.set(li(u, n)), o && o(), v();
    }),
    {
      then(g, d) {
        return c.then(g, d);
      },
      attachTimeline(g) {
        return (h.timeline = g), (h.onfinish = null), C;
      },
      get time() {
        return X(h.currentTime || 0);
      },
      set time(g) {
        h.currentTime = Z(g);
      },
      get speed() {
        return h.playbackRate;
      },
      set speed(g) {
        h.playbackRate = g;
      },
      get duration() {
        return X(m);
      },
      play: () => {
        i || (h.play(), W(y));
      },
      pause: () => h.pause(),
      stop: () => {
        if (((i = !0), h.playState === "idle")) return;
        let { currentTime: g } = h;
        if (g) {
          let d = Ot({ ...n, autoplay: !1 });
          t.setWithVelocity(d.sample(g - Sr).value, d.sample(g).value, Sr);
        }
        v();
      },
      complete: () => h.finish(),
      cancel: v,
    }
  );
}
function ji({ keyframes: t, delay: e, onUpdate: r, onComplete: o }) {
  let n = () => (
    r && r(t[t.length - 1]),
    o && o(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: C,
      pause: C,
      stop: C,
      then: (s) => (s(), Promise.resolve()),
      cancel: C,
      complete: C,
    }
  );
  return e
    ? Ot({ keyframes: [0, 1], duration: 0, delay: e, onComplete: n })
    : n();
}
var bc = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Sc = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Cc = { type: "keyframes", duration: 0.8 },
  Ac = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ni = (t, { keyframes: e }) =>
    e.length > 2 ? Cc : K.has(t) ? (t.startsWith("scale") ? Sc(e[1]) : bc) : Ac;
var Ee = (t, e) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          ($.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
var Mc = new Set(["brightness", "contrast", "saturate", "opacity"]);
function wc(t) {
  let [e, r] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  let [o] = r.match(kt) || [];
  if (!o) return t;
  let n = r.replace(o, ""),
    s = Mc.has(e) ? 1 : 0;
  return o !== r && (s *= 100), e + "(" + s + n + ")";
}
var Dc = /([a-z-]*)\(.*?\)/g,
  ke = {
    ...$,
    getAnimatableNone: (t) => {
      let e = t.match(Dc);
      return e ? e.map(wc).join(" ") : t;
    },
  };
var Rc = {
    ...Xe,
    color: O,
    backgroundColor: O,
    outlineColor: O,
    fill: O,
    stroke: O,
    borderColor: O,
    borderTopColor: O,
    borderRightColor: O,
    borderBottomColor: O,
    borderLeftColor: O,
    filter: ke,
    WebkitFilter: ke,
  },
  ne = (t) => Rc[t];
function Cr(t, e) {
  let r = ne(t);
  return (
    r !== ke && (r = $), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
  );
}
var Ar = (t) => /^0[^.\s]+$/.test(t);
function Ui(t) {
  if (typeof t == "number") return t === 0;
  if (t !== null) return t === "none" || t === "0" || Ar(t);
}
function Gi(t, e, r, o) {
  let n = Ee(e, r),
    s;
  Array.isArray(r) ? (s = [...r]) : (s = [null, r]);
  let i = o.from !== void 0 ? o.from : t.get(),
    a,
    c = [];
  for (let l = 0; l < s.length; l++)
    s[l] === null && (s[l] = l === 0 ? i : s[l - 1]),
      Ui(s[l]) && c.push(l),
      typeof s[l] == "string" && s[l] !== "none" && s[l] !== "0" && (a = s[l]);
  if (n && c.length && a)
    for (let l = 0; l < c.length; l++) {
      let u = c[l];
      s[u] = Cr(e, a);
    }
  return s;
}
function zi({
  when: t,
  delay: e,
  delayChildren: r,
  staggerChildren: o,
  staggerDirection: n,
  repeat: s,
  repeatType: i,
  repeatDelay: a,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
function Mr(t, e) {
  return t[e] || t.default || t;
}
var ie =
  (t, e, r, o = {}) =>
  (n) => {
    let s = Mr(o, t) || {},
      i = s.delay || o.delay || 0,
      { elapsed: a = 0 } = o;
    a = a - Z(i);
    let c = Gi(e, t, r, s),
      l = c[0],
      u = c[c.length - 1],
      m = Ee(t, l),
      f = Ee(t, u);
    re(
      m === f,
      `You are trying to animate ${t} from "${l}" to "${u}". ${l} is not an animatable value - to enable this animation set ${l} to a value animatable to ${u} via the \`style\` property.`
    );
    let p = {
      keyframes: c,
      velocity: e.getVelocity(),
      ease: "easeOut",
      ...s,
      delay: -a,
      onUpdate: (h) => {
        e.set(h), s.onUpdate && s.onUpdate(h);
      },
      onComplete: () => {
        n(), s.onComplete && s.onComplete();
      },
    };
    if (
      (zi(s) || (p = { ...p, ...Ni(t, p) }),
      p.duration && (p.duration = Z(p.duration)),
      p.repeatDelay && (p.repeatDelay = Z(p.repeatDelay)),
      !m || !f || po.current || s.type === !1)
    )
      return ji(po.current ? { ...p, delay: 0 } : p);
    if (
      e.owner &&
      e.owner.current instanceof HTMLElement &&
      !e.owner.getProps().onUpdate
    ) {
      let h = Ii(e, t, p);
      if (h) return h;
    }
    return Ot(p);
  };
function It(t) {
  return Boolean(L(t) && t.add);
}
var wr = (t) => /^\-?\d*\.?\d+$/.test(t);
function se(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ae(t, e) {
  let r = t.indexOf(e);
  r > -1 && t.splice(r, 1);
}
var wt = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return se(this.subscriptions, e), () => ae(this.subscriptions, e);
  }
  notify(e, r, o) {
    let n = this.subscriptions.length;
    if (!!n)
      if (n === 1) this.subscriptions[0](e, r, o);
      else
        for (let s = 0; s < n; s++) {
          let i = this.subscriptions[s];
          i && i(e, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
var Lc = (t) => !isNaN(parseFloat(t)),
  Hi = { current: void 0 },
  Ro = class {
    constructor(e, r = {}) {
      (this.version = "10.16.4"),
        (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.canTrackVelocity = !1),
        (this.events = {}),
        (this.updateAndNotify = (o, n = !0) => {
          (this.prev = this.current), (this.current = o);
          let { delta: s, timestamp: i } = B;
          this.lastUpdated !== i &&
            ((this.timeDelta = s),
            (this.lastUpdated = i),
            T.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current &&
              this.events.change &&
              this.events.change.notify(this.current),
            this.events.velocityChange &&
              this.events.velocityChange.notify(this.getVelocity()),
            n &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.scheduleVelocityCheck = () => T.postRender(this.velocityCheck)),
        (this.velocityCheck = ({ timestamp: o }) => {
          o !== this.lastUpdated &&
            ((this.prev = this.current),
            this.events.velocityChange &&
              this.events.velocityChange.notify(this.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = e),
        (this.canTrackVelocity = Lc(this.current)),
        (this.owner = r.owner);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, r) {
      this.events[e] || (this.events[e] = new wt());
      let o = this.events[e].add(r);
      return e === "change"
        ? () => {
            o(),
              T.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : o;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, r) {
      (this.passiveEffect = e), (this.stopPassiveEffect = r);
    }
    set(e, r = !0) {
      !r || !this.passiveEffect
        ? this.updateAndNotify(e, r)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, r, o) {
      this.set(r), (this.prev = e), (this.timeDelta = o);
    }
    jump(e) {
      this.updateAndNotify(e),
        (this.prev = e),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return Hi.current && Hi.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      return this.canTrackVelocity
        ? Pr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
        : 0;
    }
    start(e) {
      return (
        this.stop(),
        new Promise((r) => {
          (this.hasAnimated = !0),
            (this.animation = e(r)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function it(t, e) {
  return new Ro(t, e);
}
var Dr = (t) => (e) => e.test(t);
var Wi = { test: (t) => t === "auto", parse: (t) => t };
var Lo = [et, x, H, ot, Rn, Dn, Wi],
  ce = (t) => Lo.find(Dr(t));
var Ec = [...Lo, O, $],
  $i = (t) => Ec.find(Dr(t));
function kc(t, e, r) {
  t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, it(r));
}
function Ki(t, e) {
  let r = Ct(t, e),
    {
      transitionEnd: o = {},
      transition: n = {},
      ...s
    } = r ? t.makeTargetAnimatable(r, !1) : {};
  s = { ...s, ...o };
  for (let i in s) {
    let a = _n(s[i]);
    kc(t, i, a);
  }
}
function _i(t, e, r) {
  var o, n;
  let s = Object.keys(e).filter((a) => !t.hasValue(a)),
    i = s.length;
  if (!!i)
    for (let a = 0; a < i; a++) {
      let c = s[a],
        l = e[c],
        u = null;
      Array.isArray(l) && (u = l[0]),
        u === null &&
          (u =
            (n = (o = r[c]) !== null && o !== void 0 ? o : t.readValue(c)) !==
              null && n !== void 0
              ? n
              : e[c]),
        u != null &&
          (typeof u == "string" && (wr(u) || Ar(u))
            ? (u = parseFloat(u))
            : !$i(u) && $.test(l) && (u = Cr(c, l)),
          t.addValue(c, it(u, { owner: t })),
          r[c] === void 0 && (r[c] = u),
          u !== null && t.setBaseTarget(c, u));
    }
}
function Bc(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function qi(t, e, r) {
  let o = {};
  for (let n in t) {
    let s = Bc(n, e);
    if (s !== void 0) o[n] = s;
    else {
      let i = r.getValue(n);
      i && (o[n] = i.get());
    }
  }
  return o;
}
function Fc({ protectedKeys: t, needsAnimating: e }, r) {
  let o = t.hasOwnProperty(r) && e[r] !== !0;
  return (e[r] = !1), o;
}
function Rr(t, e, { delay: r = 0, transitionOverride: o, type: n } = {}) {
  let {
      transition: s = t.getDefaultTransition(),
      transitionEnd: i,
      ...a
    } = t.makeTargetAnimatable(e),
    c = t.getValue("willChange");
  o && (s = o);
  let l = [],
    u = n && t.animationState && t.animationState.getState()[n];
  for (let m in a) {
    let f = t.getValue(m),
      p = a[m];
    if (!f || p === void 0 || (u && Fc(u, m))) continue;
    let h = { delay: r, elapsed: 0, ...s };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      let v = t.getProps()[si];
      v &&
        ((h.elapsed = window.HandoffAppearAnimations(v, m, f, T)),
        (h.syncStart = !0));
    }
    f.start(ie(m, f, p, t.shouldReduceMotion && K.has(m) ? { type: !1 } : h));
    let y = f.animation;
    It(c) && (c.add(m), y.then(() => c.remove(m))), l.push(y);
  }
  return (
    i &&
      Promise.all(l).then(() => {
        i && Ki(t, i);
      }),
    l
  );
}
function Lr(t, e, r = {}) {
  let o = Ct(t, e, r.custom),
    { transition: n = t.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (n = r.transitionOverride);
  let s = o ? () => Promise.all(Rr(t, o, r)) : () => Promise.resolve(),
    i =
      t.variantChildren && t.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: l = 0,
              staggerChildren: u,
              staggerDirection: m,
            } = n;
            return Oc(t, e, l + c, u, m, r);
          }
        : () => Promise.resolve(),
    { when: a } = n;
  if (a) {
    let [c, l] = a === "beforeChildren" ? [s, i] : [i, s];
    return c().then(() => l());
  } else return Promise.all([s(), i(r.delay)]);
}
function Oc(t, e, r = 0, o = 0, n = 1, s) {
  let i = [],
    a = (t.variantChildren.size - 1) * o,
    c = n === 1 ? (l = 0) => l * o : (l = 0) => a - l * o;
  return (
    Array.from(t.variantChildren)
      .sort(Ic)
      .forEach((l, u) => {
        l.notify("AnimationStart", e),
          i.push(
            Lr(l, e, { ...s, delay: r + c(u) }).then(() =>
              l.notify("AnimationComplete", e)
            )
          );
      }),
    Promise.all(i)
  );
}
function Ic(t, e) {
  return t.sortNodePosition(e);
}
function Yi(t, e, r = {}) {
  t.notify("AnimationStart", e);
  let o;
  if (Array.isArray(e)) {
    let n = e.map((s) => Lr(t, s, r));
    o = Promise.all(n);
  } else if (typeof e == "string") o = Lr(t, e, r);
  else {
    let n = typeof e == "function" ? Ct(t, e, r.custom) : e;
    o = Promise.all(Rr(t, n, r));
  }
  return o.then(() => t.notify("AnimationComplete", e));
}
var jc = [...He].reverse(),
  Nc = He.length;
function Uc(t) {
  return (e) =>
    Promise.all(e.map(({ animation: r, options: o }) => Yi(t, r, o)));
}
function Xi(t) {
  let e = Uc(t),
    r = zc(),
    o = !0,
    n = (c, l) => {
      let u = Ct(t, l);
      if (u) {
        let { transition: m, transitionEnd: f, ...p } = u;
        c = { ...c, ...p, ...f };
      }
      return c;
    };
  function s(c) {
    e = c(t);
  }
  function i(c, l) {
    let u = t.getProps(),
      m = t.getVariantContext(!0) || {},
      f = [],
      p = new Set(),
      h = {},
      y = 1 / 0;
    for (let b = 0; b < Nc; b++) {
      let g = jc[b],
        d = r[g],
        P = u[g] !== void 0 ? u[g] : m[g],
        V = ut(P),
        F = g === l ? d.isActive : null;
      F === !1 && (y = b);
      let D = P === m[g] && P !== u[g] && V;
      if (
        (D && o && t.manuallyAnimateOnMount && (D = !1),
        (d.protectedKeys = { ...h }),
        (!d.isActive && F === null) ||
          (!P && !d.prevProp) ||
          Tt(P) ||
          typeof P == "boolean")
      )
        continue;
      let S = Gc(d.prevProp, P),
        R = S || (g === l && d.isActive && !D && V) || (b > y && V),
        at = Array.isArray(P) ? P : [P],
        ct = at.reduce(n, {});
      F === !1 && (ct = {});
      let { prevResolvedValues: dt = {} } = d,
        gt = { ...dt, ...ct },
        j = (I) => {
          (R = !0), p.delete(I), (d.needsAnimating[I] = !0);
        };
      for (let I in gt) {
        let yt = ct[I],
          Ht = dt[I];
        h.hasOwnProperty(I) ||
          (yt !== Ht
            ? Bt(yt) && Bt(Ht)
              ? !fo(yt, Ht) || S
                ? j(I)
                : (d.protectedKeys[I] = !0)
              : yt !== void 0
              ? j(I)
              : p.add(I)
            : yt !== void 0 && p.has(I)
            ? j(I)
            : (d.protectedKeys[I] = !0));
      }
      (d.prevProp = P),
        (d.prevResolvedValues = ct),
        d.isActive && (h = { ...h, ...ct }),
        o && t.blockInitialAnimation && (R = !1),
        R &&
          !D &&
          f.push(
            ...at.map((I) => ({ animation: I, options: { type: g, ...c } }))
          );
    }
    if (p.size) {
      let b = {};
      p.forEach((g) => {
        let d = t.getBaseTarget(g);
        d !== void 0 && (b[g] = d);
      }),
        f.push({ animation: b });
    }
    let v = Boolean(f.length);
    return (
      o && u.initial === !1 && !t.manuallyAnimateOnMount && (v = !1),
      (o = !1),
      v ? e(f) : Promise.resolve()
    );
  }
  function a(c, l, u) {
    var m;
    if (r[c].isActive === l) return Promise.resolve();
    (m = t.variantChildren) === null ||
      m === void 0 ||
      m.forEach((p) => {
        var h;
        return (h = p.animationState) === null || h === void 0
          ? void 0
          : h.setActive(c, l);
      }),
      (r[c].isActive = l);
    let f = i(u, c);
    for (let p in r) r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => r,
  };
}
function Gc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !fo(e, t) : !1;
}
function jt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function zc() {
  return {
    animate: jt(!0),
    whileInView: jt(),
    whileHover: jt(),
    whileTap: jt(),
    whileDrag: jt(),
    whileFocus: jt(),
    exit: jt(),
  };
}
var Er = class extends N {
  constructor(e) {
    super(e), e.animationState || (e.animationState = Xi(e));
  }
  updateAnimationControlsSubscription() {
    let { animate: e } = this.node.getProps();
    this.unmount(), Tt(e) && (this.unmount = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    let { animate: e } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    e !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {}
};
var Hc = 0,
  kr = class extends N {
    constructor() {
      super(...arguments), (this.id = Hc++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let {
          isPresent: e,
          onExitComplete: r,
          custom: o,
        } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let s = this.node.animationState.setActive("exit", !e, {
        custom: o ?? this.node.getProps().custom,
      });
      r && !e && s.then(() => r(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  };
var Zi = { animation: { Feature: Er }, exit: { Feature: kr } };
var Ji = (t, e) => Math.abs(t - e);
function Qi(t, e) {
  let r = Ji(t.x, e.x),
    o = Ji(t.y, e.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
var le = class {
  constructor(e, r, { transformPagePoint: o } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let l = ko(this.lastMoveEventInfo, this.history),
          u = this.startEvent !== null,
          m = Qi(l.offset, { x: 0, y: 0 }) >= 3;
        if (!u && !m) return;
        let { point: f } = l,
          { timestamp: p } = B;
        this.history.push({ ...f, timestamp: p });
        let { onStart: h, onMove: y } = this.handlers;
        u ||
          (h && h(this.lastMoveEvent, l),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, l);
      }),
      (this.handlePointerMove = (l, u) => {
        (this.lastMoveEvent = l),
          (this.lastMoveEventInfo = Eo(u, this.transformPagePoint)),
          T.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (l, u) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        let { onEnd: m, onSessionEnd: f } = this.handlers,
          p = ko(
            l.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Eo(u, this.transformPagePoint),
            this.history
          );
        this.startEvent && m && m(l, p), f && f(l, p);
      }),
      !cr(e))
    )
      return;
    (this.handlers = r), (this.transformPagePoint = o);
    let n = Ft(e),
      s = Eo(n, this.transformPagePoint),
      { point: i } = s,
      { timestamp: a } = B;
    this.history = [{ ...i, timestamp: a }];
    let { onSessionStart: c } = r;
    c && c(e, ko(s, this.history)),
      (this.removeListeners = Y(
        q(window, "pointermove", this.handlePointerMove),
        q(window, "pointerup", this.handlePointerUp),
        q(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), W(this.updatePoint);
  }
};
function Eo(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ts(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ko({ point: t }, e) {
  return {
    point: t,
    delta: ts(t, es(e)),
    offset: ts(t, Wc(e)),
    velocity: $c(e, 0.1),
  };
}
function Wc(t) {
  return t[0];
}
function es(t) {
  return t[t.length - 1];
}
function $c(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let r = t.length - 1,
    o = null,
    n = es(t);
  for (; r >= 0 && ((o = t[r]), !(n.timestamp - o.timestamp > Z(e))); ) r--;
  if (!o) return { x: 0, y: 0 };
  let s = X(n.timestamp - o.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  let i = { x: (n.x - o.x) / s, y: (n.y - o.y) / s };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function U(t) {
  return t.max - t.min;
}
function Br(t, e = 0, r = 0.01) {
  return Math.abs(t - e) <= r;
}
function rs(t, e, r, o = 0.5) {
  (t.origin = o),
    (t.originPoint = A(e.min, e.max, t.origin)),
    (t.scale = U(r) / U(e)),
    (Br(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = A(r.min, r.max, t.origin) - t.originPoint),
    (Br(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function ue(t, e, r, o) {
  rs(t.x, e.x, r.x, o ? o.originX : void 0),
    rs(t.y, e.y, r.y, o ? o.originY : void 0);
}
function os(t, e, r) {
  (t.min = r.min + e.min), (t.max = t.min + U(e));
}
function is(t, e, r) {
  os(t.x, e.x, r.x), os(t.y, e.y, r.y);
}
function ns(t, e, r) {
  (t.min = e.min - r.min), (t.max = t.min + U(e));
}
function me(t, e, r) {
  ns(t.x, e.x, r.x), ns(t.y, e.y, r.y);
}
function us(t, { min: e, max: r }, o) {
  return (
    e !== void 0 && t < e
      ? (t = o ? A(e, t, o.min) : Math.max(t, e))
      : r !== void 0 && t > r && (t = o ? A(r, t, o.max) : Math.min(t, r)),
    t
  );
}
function ss(t, e, r) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0,
  };
}
function ms(t, { top: e, left: r, bottom: o, right: n }) {
  return { x: ss(t.x, r, n), y: ss(t.y, e, o) };
}
function as(t, e) {
  let r = e.min - t.min,
    o = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([r, o] = [o, r]), { min: r, max: o };
}
function fs(t, e) {
  return { x: as(t.x, e.x), y: as(t.y, e.y) };
}
function ps(t, e) {
  let r = 0.5,
    o = U(t),
    n = U(e);
  return (
    n > o
      ? (r = ft(e.min, e.max - o, t.min))
      : o > n && (r = ft(t.min, t.max - n, e.min)),
    z(0, 1, r)
  );
}
function hs(t, e) {
  let r = {};
  return (
    e.min !== void 0 && (r.min = e.min - t.min),
    e.max !== void 0 && (r.max = e.max - t.min),
    r
  );
}
var Fr = 0.35;
function ds(t = Fr) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Fr),
    { x: cs(t, "left", "right"), y: cs(t, "top", "bottom") }
  );
}
function cs(t, e, r) {
  return { min: ls(t, e), max: ls(t, r) };
}
function ls(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
var gs = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Nt = () => ({ x: gs(), y: gs() }),
  ys = () => ({ min: 0, max: 0 }),
  E = () => ({ x: ys(), y: ys() });
function rt(t) {
  return [t("x"), t("y")];
}
function Or({ top: t, left: e, right: r, bottom: o }) {
  return { x: { min: e, max: r }, y: { min: t, max: o } };
}
function xs({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function vs(t, e) {
  if (!e) return t;
  let r = e({ x: t.left, y: t.top }),
    o = e({ x: t.right, y: t.bottom });
  return { top: r.y, left: r.x, bottom: o.y, right: o.x };
}
function Bo(t) {
  return t === void 0 || t === 1;
}
function Ir({ scale: t, scaleX: e, scaleY: r }) {
  return !Bo(t) || !Bo(e) || !Bo(r);
}
function pt(t) {
  return Ir(t) || Fo(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function Fo(t) {
  return Ps(t.x) || Ps(t.y);
}
function Ps(t) {
  return t && t !== "0%";
}
function Be(t, e, r) {
  let o = t - r,
    n = e * o;
  return r + n;
}
function Ts(t, e, r, o, n) {
  return n !== void 0 && (t = Be(t, n, o)), Be(t, r, o) + e;
}
function Oo(t, e = 0, r = 1, o, n) {
  (t.min = Ts(t.min, e, r, o, n)), (t.max = Ts(t.max, e, r, o, n));
}
function Io(t, { x: e, y: r }) {
  Oo(t.x, e.translate, e.scale, e.originPoint),
    Oo(t.y, r.translate, r.scale, r.originPoint);
}
function Ss(t, e, r, o = !1) {
  let n = r.length;
  if (!n) return;
  e.x = e.y = 1;
  let s, i;
  for (let a = 0; a < n; a++) {
    (s = r[a]), (i = s.projectionDelta);
    let c = s.instance;
    (c && c.style && c.style.display === "contents") ||
      (o &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Ut(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      i && ((e.x *= i.x.scale), (e.y *= i.y.scale), Io(t, i)),
      o && pt(s.latestValues) && Ut(t, s.latestValues));
  }
  (e.x = Vs(e.x)), (e.y = Vs(e.y));
}
function Vs(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
    ? t
    : 1;
}
function st(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function bs(t, e, [r, o, n]) {
  let s = e[n] !== void 0 ? e[n] : 0.5,
    i = A(t.min, t.max, s);
  Oo(t, e[r], e[o], i, e.scale);
}
var Kc = ["x", "scaleX", "originX"],
  _c = ["y", "scaleY", "originY"];
function Ut(t, e) {
  bs(t.x, e, Kc), bs(t.y, e, _c);
}
function jo(t, e) {
  return Or(vs(t.getBoundingClientRect(), e));
}
function Cs(t, e, r) {
  let o = jo(t, r),
    { scroll: n } = e;
  return n && (st(o.x, n.offset.x), st(o.y, n.offset.y)), o;
}
var qc = new WeakMap(),
  Nr = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = E()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: r = !1 } = {}) {
      let { presenceContext: o } = this.visualElement;
      if (o && o.isPresent === !1) return;
      let n = (c) => {
          this.stopAnimation(), r && this.snapToCursor(Ft(c, "page").point);
        },
        s = (c, l) => {
          let { drag: u, dragPropagation: m, onDragStart: f } = this.getProps();
          if (
            u &&
            !m &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = ao(u)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            rt((h) => {
              let y = this.getAxisMotionValue(h).get() || 0;
              if (H.test(y)) {
                let { projection: v } = this.visualElement;
                if (v && v.layout) {
                  let b = v.layout.layoutBox[h];
                  b && (y = U(b) * (parseFloat(y) / 100));
                }
              }
              this.originPoint[h] = y;
            }),
            f && T.update(() => f(c, l), !1, !0);
          let { animationState: p } = this.visualElement;
          p && p.setActive("whileDrag", !0);
        },
        i = (c, l) => {
          let {
            dragPropagation: u,
            dragDirectionLock: m,
            onDirectionLock: f,
            onDrag: p,
          } = this.getProps();
          if (!u && !this.openGlobalLock) return;
          let { offset: h } = l;
          if (m && this.currentDirection === null) {
            (this.currentDirection = Yc(h)),
              this.currentDirection !== null && f && f(this.currentDirection);
            return;
          }
          this.updateAxis("x", l.point, h),
            this.updateAxis("y", l.point, h),
            this.visualElement.render(),
            p && p(c, l);
        },
        a = (c, l) => this.stop(c, l);
      this.panSession = new le(
        e,
        { onSessionStart: n, onStart: s, onMove: i, onSessionEnd: a },
        { transformPagePoint: this.visualElement.getTransformPagePoint() }
      );
    }
    stop(e, r) {
      let o = this.isDragging;
      if ((this.cancel(), !o)) return;
      let { velocity: n } = r;
      this.startAnimation(n);
      let { onDragEnd: s } = this.getProps();
      s && T.update(() => s(e, r));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: r } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: o } = this.getProps();
      !o &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        r && r.setActive("whileDrag", !1);
    }
    updateAxis(e, r, o) {
      let { drag: n } = this.getProps();
      if (!o || !jr(e, n, this.currentDirection)) return;
      let s = this.getAxisMotionValue(e),
        i = this.originPoint[e] + o[e];
      this.constraints &&
        this.constraints[e] &&
        (i = us(i, this.constraints[e], this.elastic[e])),
        s.set(i);
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: r } = this.getProps(),
        { layout: o } = this.visualElement.projection || {},
        n = this.constraints;
      e && lt(e)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : e && o
        ? (this.constraints = ms(o.layoutBox, e))
        : (this.constraints = !1),
        (this.elastic = ds(r)),
        n !== this.constraints &&
          o &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          rt((s) => {
            this.getAxisMotionValue(s) &&
              (this.constraints[s] = hs(o.layoutBox[s], this.constraints[s]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: r } = this.getProps();
      if (!e || !lt(e)) return !1;
      let o = e.current;
      G(
        o !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: n } = this.visualElement;
      if (!n || !n.layout) return !1;
      let s = Cs(o, n.root, this.visualElement.getTransformPagePoint()),
        i = fs(n.layout.layoutBox, s);
      if (r) {
        let a = r(xs(i));
        (this.hasMutatedConstraints = !!a), a && (i = Or(a));
      }
      return i;
    }
    startAnimation(e) {
      let {
          drag: r,
          dragMomentum: o,
          dragElastic: n,
          dragTransition: s,
          dragSnapToOrigin: i,
          onDragTransitionEnd: a,
        } = this.getProps(),
        c = this.constraints || {},
        l = rt((u) => {
          if (!jr(u, r, this.currentDirection)) return;
          let m = (c && c[u]) || {};
          i && (m = { min: 0, max: 0 });
          let f = n ? 200 : 1e6,
            p = n ? 40 : 1e7,
            h = {
              type: "inertia",
              velocity: o ? e[u] : 0,
              bounceStiffness: f,
              bounceDamping: p,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...m,
            };
          return this.startAxisValueAnimation(u, h);
        });
      return Promise.all(l).then(a);
    }
    startAxisValueAnimation(e, r) {
      let o = this.getAxisMotionValue(e);
      return o.start(ie(e, o, 0, r));
    }
    stopAnimation() {
      rt((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let r = "_drag" + e.toUpperCase(),
        o = this.visualElement.getProps(),
        n = o[r];
      return (
        n ||
        this.visualElement.getValue(e, (o.initial ? o.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      rt((r) => {
        let { drag: o } = this.getProps();
        if (!jr(r, o, this.currentDirection)) return;
        let { projection: n } = this.visualElement,
          s = this.getAxisMotionValue(r);
        if (n && n.layout) {
          let { min: i, max: a } = n.layout.layoutBox[r];
          s.set(e[r] - A(i, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: r } = this.getProps(),
        { projection: o } = this.visualElement;
      if (!lt(r) || !o || !this.constraints) return;
      this.stopAnimation();
      let n = { x: 0, y: 0 };
      rt((i) => {
        let a = this.getAxisMotionValue(i);
        if (a) {
          let c = a.get();
          n[i] = ps({ min: c, max: c }, this.constraints[i]);
        }
      });
      let { transformTemplate: s } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        rt((i) => {
          if (!jr(i, e, null)) return;
          let a = this.getAxisMotionValue(i),
            { min: c, max: l } = this.constraints[i];
          a.set(A(c, l, n[i]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      qc.set(this.visualElement, this);
      let e = this.visualElement.current,
        r = q(e, "pointerdown", (c) => {
          let { drag: l, dragListener: u = !0 } = this.getProps();
          l && u && this.start(c);
        }),
        o = () => {
          let { dragConstraints: c } = this.getProps();
          lt(c) && (this.constraints = this.resolveRefConstraints());
        },
        { projection: n } = this.visualElement,
        s = n.addEventListener("measure", o);
      n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
        o();
      let i = _(window, "resize", () => this.scalePositionWithinConstraints()),
        a = n.addEventListener(
          "didUpdate",
          ({ delta: c, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (rt((u) => {
                let m = this.getAxisMotionValue(u);
                !m ||
                  ((this.originPoint[u] += c[u].translate),
                  m.set(m.get() + c[u].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        i(), r(), s(), a && a();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: r = !1,
          dragDirectionLock: o = !1,
          dragPropagation: n = !1,
          dragConstraints: s = !1,
          dragElastic: i = Fr,
          dragMomentum: a = !0,
        } = e;
      return {
        ...e,
        drag: r,
        dragDirectionLock: o,
        dragPropagation: n,
        dragConstraints: s,
        dragElastic: i,
        dragMomentum: a,
      };
    }
  };
function jr(t, e, r) {
  return (e === !0 || e === t) && (r === null || r === t);
}
function Yc(t, e = 10) {
  let r = null;
  return Math.abs(t.y) > e ? (r = "y") : Math.abs(t.x) > e && (r = "x"), r;
}
var Ur = class extends N {
  constructor(e) {
    super(e),
      (this.removeGroupControls = C),
      (this.removeListeners = C),
      (this.controls = new Nr(e));
  }
  mount() {
    let { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || C);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
};
var As = (t) => (e, r) => {
    t && T.update(() => t(e, r));
  },
  Gr = class extends N {
    constructor() {
      super(...arguments), (this.removePointerDownListener = C);
    }
    onPointerDown(e) {
      this.session = new le(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: r,
        onPan: o,
        onPanEnd: n,
      } = this.node.getProps();
      return {
        onSessionStart: As(e),
        onStart: As(r),
        onMove: o,
        onEnd: (s, i) => {
          delete this.session, n && T.update(() => n(s, i));
        },
      };
    }
    mount() {
      this.removePointerDownListener = q(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  };
var de = M(w(), 1);
var fe = M(w(), 1);
function Ms() {
  let t = (0, fe.useContext)(vt);
  if (t === null) return [!0, null];
  let { isPresent: e, onExitComplete: r, register: o } = t,
    n = (0, fe.useId)();
  return (
    (0, fe.useEffect)(() => o(n), []), !e && r ? [!1, () => r && r(n)] : [!0]
  );
}
var pe = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ws(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
var he = {
  correct: (t, e) => {
    if (!e.target) return t;
    if (typeof t == "string")
      if (x.test(t)) t = parseFloat(t);
      else return t;
    let r = ws(t, e.target.x),
      o = ws(t, e.target.y);
    return `${r}% ${o}%`;
  },
};
var Ds = {
  correct: (t, { treeScale: e, projectionDelta: r }) => {
    let o = t,
      n = $.parse(t);
    if (n.length > 5) return o;
    let s = $.createTransformer(t),
      i = typeof n[0] != "number" ? 1 : 0,
      a = r.x.scale * e.x,
      c = r.y.scale * e.y;
    (n[0 + i] /= a), (n[1 + i] /= c);
    let l = A(a, c, 0.5);
    return (
      typeof n[2 + i] == "number" && (n[2 + i] /= l),
      typeof n[3 + i] == "number" && (n[3 + i] /= l),
      s(n)
    );
  },
};
var No = class extends de.default.Component {
  componentDidMount() {
    let {
        visualElement: e,
        layoutGroup: r,
        switchLayoutGroup: o,
        layoutId: n,
      } = this.props,
      { projection: s } = e;
    bn(Xc),
      s &&
        (r.group && r.group.add(s),
        o && o.register && n && o.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (pe.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    let {
        layoutDependency: r,
        visualElement: o,
        drag: n,
        isPresent: s,
      } = this.props,
      i = o.projection;
    return (
      i &&
        ((i.isPresent = s),
        n || e.layoutDependency !== r || r === void 0
          ? i.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== s &&
          (s
            ? i.promote()
            : i.relegate() ||
              T.postRender(() => {
                let a = i.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    let { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      queueMicrotask(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    let { visualElement: e, layoutGroup: r, switchLayoutGroup: o } = this.props,
      { projection: n } = e;
    n &&
      (n.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(n),
      o && o.deregister && o.deregister(n));
  }
  safeToRemove() {
    let { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
};
function zr(t) {
  let [e, r] = Ms(),
    o = (0, de.useContext)($t);
  return de.default.createElement(No, {
    ...t,
    layoutGroup: o,
    switchLayoutGroup: (0, de.useContext)(Ke),
    isPresent: e,
    safeToRemove: r,
  });
}
var Xc = {
  borderRadius: {
    ...he,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: he,
  borderTopRightRadius: he,
  borderBottomLeftRadius: he,
  borderBottomRightRadius: he,
  boxShadow: Ds,
};
var ks = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Zc = ks.length,
  Rs = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Ls = (t) => typeof t == "number" || x.test(t);
function Bs(t, e, r, o, n, s) {
  n
    ? ((t.opacity = A(0, r.opacity !== void 0 ? r.opacity : 1, Jc(o))),
      (t.opacityExit = A(e.opacity !== void 0 ? e.opacity : 1, 0, Qc(o))))
    : s &&
      (t.opacity = A(
        e.opacity !== void 0 ? e.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        o
      ));
  for (let i = 0; i < Zc; i++) {
    let a = `border${ks[i]}Radius`,
      c = Es(e, a),
      l = Es(r, a);
    if (c === void 0 && l === void 0) continue;
    c || (c = 0),
      l || (l = 0),
      c === 0 || l === 0 || Ls(c) === Ls(l)
        ? ((t[a] = Math.max(A(Rs(c), Rs(l), o), 0)),
          (H.test(l) || H.test(c)) && (t[a] += "%"))
        : (t[a] = l);
  }
  (e.rotate || r.rotate) && (t.rotate = A(e.rotate || 0, r.rotate || 0, o));
}
function Es(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
var Jc = Fs(0, 0.5, Me),
  Qc = Fs(0.5, 0.95, C);
function Fs(t, e, r) {
  return (o) => (o < t ? 0 : o > e ? 1 : r(ft(t, e, o)));
}
function Os(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function J(t, e) {
  Os(t.x, e.x), Os(t.y, e.y);
}
function Is(t, e, r, o, n) {
  return (
    (t -= e), (t = Be(t, 1 / r, o)), n !== void 0 && (t = Be(t, 1 / n, o)), t
  );
}
function tl(t, e = 0, r = 1, o = 0.5, n, s = t, i = t) {
  if (
    (H.test(e) && ((e = parseFloat(e)), (e = A(i.min, i.max, e / 100) - i.min)),
    typeof e != "number")
  )
    return;
  let a = A(s.min, s.max, o);
  t === s && (a -= e),
    (t.min = Is(t.min, e, r, a, n)),
    (t.max = Is(t.max, e, r, a, n));
}
function js(t, e, [r, o, n], s, i) {
  tl(t, e[r], e[o], e[n], e.scale, s, i);
}
var el = ["x", "scaleX", "originX"],
  rl = ["y", "scaleY", "originY"];
function Uo(t, e, r, o) {
  js(t.x, e, el, r ? r.x : void 0, o ? o.x : void 0),
    js(t.y, e, rl, r ? r.y : void 0, o ? o.y : void 0);
}
function Ns(t) {
  return t.translate === 0 && t.scale === 1;
}
function Go(t) {
  return Ns(t.x) && Ns(t.y);
}
function Us(t, e) {
  return (
    t.x.min === e.x.min &&
    t.x.max === e.x.max &&
    t.y.min === e.y.min &&
    t.y.max === e.y.max
  );
}
function zo(t, e) {
  return (
    Math.round(t.x.min) === Math.round(e.x.min) &&
    Math.round(t.x.max) === Math.round(e.x.max) &&
    Math.round(t.y.min) === Math.round(e.y.min) &&
    Math.round(t.y.max) === Math.round(e.y.max)
  );
}
function Ho(t) {
  return U(t.x) / U(t.y);
}
var Hr = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    se(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (ae(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(e) {
    let r = this.members.findIndex((n) => e === n);
    if (r === 0) return !1;
    let o;
    for (let n = r; n >= 0; n--) {
      let s = this.members[n];
      if (s.isPresent !== !1) {
        o = s;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(e, r) {
    let o = this.lead;
    if (e !== o && ((this.prevLead = o), (this.lead = e), e.show(), o)) {
      o.instance && o.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = o),
        r && (e.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((e.snapshot = o.snapshot),
          (e.snapshot.latestValues = o.animationValues || o.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: n } = e.options;
      n === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: r, resumingFrom: o } = e;
      r.onExitComplete && r.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function Wo(t, e, r) {
  let o = "",
    n = t.x.translate / e.x,
    s = t.y.translate / e.y;
  if (
    ((n || s) && (o = `translate3d(${n}px, ${s}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (o += `scale(${1 / e.x}, ${1 / e.y}) `),
    r)
  ) {
    let { rotate: c, rotateX: l, rotateY: u } = r;
    c && (o += `rotate(${c}deg) `),
      l && (o += `rotateX(${l}deg) `),
      u && (o += `rotateY(${u}deg) `);
  }
  let i = t.x.scale * e.x,
    a = t.y.scale * e.y;
  return (i !== 1 || a !== 1) && (o += `scale(${i}, ${a})`), o || "none";
}
var Gs = (t, e) => t.depth - e.depth;
var Wr = class {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    se(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    ae(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(Gs),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
};
function zs(t, e) {
  let r = performance.now(),
    o = ({ timestamp: n }) => {
      let s = n - r;
      s >= e && (W(o), t(s - e));
    };
  return T.read(o, !0), () => W(o);
}
function Hs(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function Ws(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function $s(t, e, r) {
  let o = L(t) ? t : it(t);
  return o.start(ie("", o, e, r)), o.animation;
}
var Ks = ["", "X", "Y", "Z"],
  _s = 1e3,
  ol = 0,
  Gt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
function $r({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: r,
  checkIsScrollRoot: o,
  resetTransform: n,
}) {
  return class {
    constructor(i = {}, a = e?.()) {
      (this.id = ol++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Gt.totalNodes =
            Gt.resolvedTargetDeltas =
            Gt.recalculatedProjection =
              0),
            this.nodes.forEach(sl),
            this.nodes.forEach(ml),
            this.nodes.forEach(fl),
            this.nodes.forEach(al),
            Hs(Gt);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = i),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Wr());
    }
    addEventListener(i, a) {
      return (
        this.eventHandlers.has(i) || this.eventHandlers.set(i, new wt()),
        this.eventHandlers.get(i).add(a)
      );
    }
    notifyListeners(i, ...a) {
      let c = this.eventHandlers.get(i);
      c && c.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    mount(i, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Ws(i)), (this.instance = i);
      let { layoutId: c, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(i),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (l || c) && (this.isLayoutDirty = !0),
        t)
      ) {
        let m,
          f = () => (this.root.updateBlockedByResize = !1);
        t(i, () => {
          (this.root.updateBlockedByResize = !0),
            m && m(),
            (m = zs(f, 250)),
            pe.hasAnimatedSinceResize &&
              ((pe.hasAnimatedSinceResize = !1), this.nodes.forEach(Ys));
        });
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          u &&
          (c || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: m,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: p,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let y = this.options.transition || u.getDefaultTransition() || yl,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: b } =
                  u.getProps(),
                g = !this.targetLayout || !zo(this.targetLayout, h) || p,
                d = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                d ||
                (f && (g || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(m, d);
                let P = { ...Mr(y, "layout"), onPlay: v, onComplete: b };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((P.delay = 0), (P.type = !1)),
                  this.startAnimation(P);
              } else
                f || Ys(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = h;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let i = this.getStack();
      i && i.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        W(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(pl),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let m = this.path[u];
        (m.shouldResetTransform = !0),
          m.updateScroll("snapshot"),
          m.options.layoutRoot && m.willUpdate(!1);
      }
      let { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c) return;
      let l = this.getTransformTemplate();
      (this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        i && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(qs);
        return;
      }
      this.isUpdating || this.nodes.forEach(ll),
        (this.isUpdating = !1),
        this.nodes.forEach(ul),
        this.nodes.forEach(nl),
        this.nodes.forEach(il),
        this.clearAllSnapshots();
      let a = performance.now();
      (B.delta = z(0, 1e3 / 60, a - B.timestamp)),
        (B.timestamp = a),
        (B.isProcessing = !0),
        ar.update.process(B),
        ar.preRender.process(B),
        ar.render.process(B),
        (B.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cl), this.sharedNodes.forEach(hl);
    }
    scheduleUpdateProjection() {
      T.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      T.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      let i = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = E()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          i ? i.layoutBox : void 0
        );
    }
    updateScroll(i = "measure") {
      let a = Boolean(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === i &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: i,
            isRoot: o(this.instance),
            offset: r(this.instance),
          });
    }
    resetTransform() {
      if (!n) return;
      let i = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Go(this.projectionDelta),
        c = this.getTransformTemplate(),
        l = c ? c(this.latestValues, "") : void 0,
        u = l !== this.prevTransformTemplateValue;
      i &&
        (a || pt(this.latestValues) || u) &&
        (n(this.instance, l),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(i = !0) {
      let a = this.measurePageBox(),
        c = this.removeElementScroll(a);
      return (
        i && (c = this.removeTransform(c)),
        xl(c),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: i } = this.options;
      if (!i) return E();
      let a = i.measureViewportBox(),
        { scroll: c } = this.root;
      return c && (st(a.x, c.offset.x), st(a.y, c.offset.y)), a;
    }
    removeElementScroll(i) {
      let a = E();
      J(a, i);
      for (let c = 0; c < this.path.length; c++) {
        let l = this.path[c],
          { scroll: u, options: m } = l;
        if (l !== this.root && u && m.layoutScroll) {
          if (u.isRoot) {
            J(a, i);
            let { scroll: f } = this.root;
            f && (st(a.x, -f.offset.x), st(a.y, -f.offset.y));
          }
          st(a.x, u.offset.x), st(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      let c = E();
      J(c, i);
      for (let l = 0; l < this.path.length; l++) {
        let u = this.path[l];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Ut(c, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          pt(u.latestValues) && Ut(c, u.latestValues);
      }
      return pt(this.latestValues) && Ut(c, this.latestValues), c;
    }
    removeTransform(i) {
      let a = E();
      J(a, i);
      for (let c = 0; c < this.path.length; c++) {
        let l = this.path[c];
        if (!l.instance || !pt(l.latestValues)) continue;
        Ir(l.latestValues) && l.updateSnapshot();
        let u = E(),
          m = l.measurePageBox();
        J(u, m),
          Uo(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return pt(this.latestValues) && Uo(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      (this.targetDelta = i),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      !this.relativeParent ||
        (this.relativeParent.resolvedRelativeTargetAt !== B.timestamp &&
          this.relativeParent.resolveTargetDelta(!0));
    }
    resolveTargetDelta(i = !1) {
      var a;
      let c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      let l = Boolean(this.resumingFrom) || this !== c;
      if (
        !(
          i ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((a = this.parent) === null || a === void 0
            ? void 0
            : a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      let { layout: m, layoutId: f } = this.options;
      if (!(!this.layout || !(m || f))) {
        if (
          ((this.resolvedRelativeTargetAt = B.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = E()),
              (this.relativeTargetOrigin = E()),
              me(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              J(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = E()), (this.targetWithTransforms = E())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                is(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (Boolean(this.resumingFrom)
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : J(this.target, this.layout.layoutBox),
                Io(this.target, this.targetDelta))
              : J(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let p = this.getClosestProjectingParent();
            p &&
            Boolean(p.resumingFrom) === Boolean(this.resumingFrom) &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = E()),
                (this.relativeTargetOrigin = E()),
                me(this.relativeTargetOrigin, this.target, p.target),
                J(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Gt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ir(this.parent.latestValues) ||
          Fo(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return Boolean(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
          this.layout
      );
    }
    calcProjection() {
      var i;
      let a = this.getLead(),
        c = Boolean(this.resumingFrom) || this !== a,
        l = !0;
      if (
        ((this.isProjectionDirty ||
          ((i = this.parent) === null || i === void 0
            ? void 0
            : i.isProjectionDirty)) &&
          (l = !1),
        c &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === B.timestamp && (l = !1),
        l)
      )
        return;
      let { layout: u, layoutId: m } = this.options;
      if (
        ((this.isTreeAnimating = Boolean(
          (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || m))
      )
        return;
      J(this.layoutCorrected, this.layout.layoutBox);
      let f = this.treeScale.x,
        p = this.treeScale.y;
      Ss(this.layoutCorrected, this.treeScale, this.path, c),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      let { target: h } = a;
      if (!h) {
        this.projectionTransform &&
          ((this.projectionDelta = Nt()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Nt()),
        (this.projectionDeltaWithTransform = Nt()));
      let y = this.projectionTransform;
      ue(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.projectionTransform = Wo(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== f ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h)),
        Gt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), i)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = !1) {
      let c = this.snapshot,
        l = c ? c.latestValues : {},
        u = { ...this.latestValues },
        m = Nt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let f = E(),
        p = c ? c.source : void 0,
        h = this.layout ? this.layout.source : void 0,
        y = p !== h,
        v = this.getStack(),
        b = !v || v.members.length <= 1,
        g = Boolean(
          y && !b && this.options.crossfade === !0 && !this.path.some(gl)
        );
      this.animationProgress = 0;
      let d;
      (this.mixTargetDelta = (P) => {
        let V = P / 1e3;
        Xs(m.x, i.x, V),
          Xs(m.y, i.y, V),
          this.setTargetDelta(m),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (me(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            dl(this.relativeTarget, this.relativeTargetOrigin, f, V),
            d && Us(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            d || (d = E()),
            J(d, this.relativeTarget)),
          y &&
            ((this.animationValues = u), Bs(u, l, this.latestValues, V, g, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = V);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (W(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = T.update(() => {
          (pe.hasAnimatedSinceResize = !0),
            (this.currentAnimation = $s(0, _s, {
              ...i,
              onUpdate: (a) => {
                this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
              },
              onComplete: () => {
                i.onComplete && i.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let i = this.getStack();
      i && i.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(_s),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let i = this.getLead(),
        { targetWithTransforms: a, target: c, layout: l, latestValues: u } = i;
      if (!(!a || !c || !l)) {
        if (
          this !== i &&
          this.layout &&
          l &&
          ea(this.options.animationType, this.layout.layoutBox, l.layoutBox)
        ) {
          c = this.target || E();
          let m = U(this.layout.layoutBox.x);
          (c.x.min = i.target.x.min), (c.x.max = c.x.min + m);
          let f = U(this.layout.layoutBox.y);
          (c.y.min = i.target.y.min), (c.y.max = c.y.min + f);
        }
        J(a, c),
          Ut(a, u),
          ue(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new Hr()),
        this.sharedNodes.get(i).add(a);
      let l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity:
          l && l.shouldPreserveFollowOpacity
            ? l.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      let { layoutId: a } = this.options;
      return a
        ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var i;
      let { layoutId: a } = this.options;
      return a
        ? (i = this.getStack()) === null || i === void 0
          ? void 0
          : i.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: i } = this.options;
      if (i) return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: c } = {}) {
      let l = this.getStack();
      l && l.promote(this, c),
        i && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      let { visualElement: i } = this.options;
      if (!i) return;
      let a = !1,
        { latestValues: c } = i;
      if (((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (a = !0), !a))
        return;
      let l = {};
      for (let u = 0; u < Ks.length; u++) {
        let m = "rotate" + Ks[u];
        c[m] && ((l[m] = c[m]), i.setStaticValue(m, 0));
      }
      i.render();
      for (let u in l) i.setStaticValue(u, l[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var a, c;
      let l = {};
      if (!this.instance || this.isSVG) return l;
      if (this.isVisible) l.visibility = "";
      else return { visibility: "hidden" };
      let u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ""),
          (l.pointerEvents = ee(i.pointerEvents) || ""),
          (l.transform = u ? u(this.latestValues, "") : "none"),
          l
        );
      let m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        let y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = ee(i.pointerEvents) || "")),
          this.hasProjected &&
            !pt(this.latestValues) &&
            ((y.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      let f = m.animationValues || m.latestValues;
      this.applyTransformsToTarget(),
        (l.transform = Wo(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        u && (l.transform = u(f, l.transform));
      let { x: p, y: h } = this.projectionDelta;
      (l.transformOrigin = `${p.origin * 100}% ${h.origin * 100}% 0`),
        m.animationValues
          ? (l.opacity =
              m === this
                ? (c =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (l.opacity =
              m === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (let y in _t) {
        if (f[y] === void 0) continue;
        let { correct: v, applyTo: b } = _t[y],
          g = l.transform === "none" ? f[y] : v(f[y], m);
        if (b) {
          let d = b.length;
          for (let P = 0; P < d; P++) l[b[P]] = g;
        } else l[y] = g;
      }
      return (
        this.options.layoutId &&
          (l.pointerEvents = m === this ? ee(i.pointerEvents) || "" : "none"),
        l
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(qs),
        this.root.sharedNodes.clear();
    }
  };
}
function nl(t) {
  t.updateLayout();
}
function il(t) {
  var e;
  let r =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
    let { layoutBox: o, measuredBox: n } = t.layout,
      { animationType: s } = t.options,
      i = r.source !== t.layout.source;
    s === "size"
      ? rt((m) => {
          let f = i ? r.measuredBox[m] : r.layoutBox[m],
            p = U(f);
          (f.min = o[m].min), (f.max = f.min + p);
        })
      : ea(s, r.layoutBox, o) &&
        rt((m) => {
          let f = i ? r.measuredBox[m] : r.layoutBox[m],
            p = U(o[m]);
          (f.max = f.min + p),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[m].max = t.relativeTarget[m].min + p));
        });
    let a = Nt();
    ue(a, o, r.layoutBox);
    let c = Nt();
    i ? ue(c, t.applyTransform(n, !0), r.measuredBox) : ue(c, o, r.layoutBox);
    let l = !Go(a),
      u = !1;
    if (!t.resumeFrom) {
      let m = t.getClosestProjectingParent();
      if (m && !m.resumeFrom) {
        let { snapshot: f, layout: p } = m;
        if (f && p) {
          let h = E();
          me(h, r.layoutBox, f.layoutBox);
          let y = E();
          me(y, o, p.layoutBox),
            zo(h, y) || (u = !0),
            m.options.layoutRoot &&
              ((t.relativeTarget = y),
              (t.relativeTargetOrigin = h),
              (t.relativeParent = m));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: o,
      snapshot: r,
      delta: c,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeTargetChanged: u,
    });
  } else if (t.isLead()) {
    let { onExitComplete: o } = t.options;
    o && o();
  }
  t.options.transition = void 0;
}
function sl(t) {
  Gt.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = Boolean(
          t.isProjectionDirty ||
            t.parent.isProjectionDirty ||
            t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function al(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function cl(t) {
  t.clearSnapshot();
}
function qs(t) {
  t.clearMeasurements();
}
function ll(t) {
  t.isLayoutDirty = !1;
}
function ul(t) {
  let { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function Ys(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function ml(t) {
  t.resolveTargetDelta();
}
function fl(t) {
  t.calcProjection();
}
function pl(t) {
  t.resetRotation();
}
function hl(t) {
  t.removeLeadSnapshot();
}
function Xs(t, e, r) {
  (t.translate = A(e.translate, 0, r)),
    (t.scale = A(e.scale, 1, r)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function Zs(t, e, r, o) {
  (t.min = A(e.min, r.min, o)), (t.max = A(e.max, r.max, o));
}
function dl(t, e, r, o) {
  Zs(t.x, e.x, r.x, o), Zs(t.y, e.y, r.y, o);
}
function gl(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
var yl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Js = (t) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t),
  Qs = Js("applewebkit/") && !Js("chrome/") ? Math.round : C;
function ta(t) {
  (t.min = Qs(t.min)), (t.max = Qs(t.max));
}
function xl(t) {
  ta(t.x), ta(t.y);
}
function ea(t, e, r) {
  return (
    t === "position" || (t === "preserve-aspect" && !Br(Ho(e), Ho(r), 0.2))
  );
}
var ra = $r({
  attachResizeListener: (t, e) => _(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop,
  }),
  checkIsScrollRoot: () => !0,
});
var $o = { current: void 0 },
  Kr = $r({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!$o.current) {
        let t = new ra({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), ($o.current = t);
      }
      return $o.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) =>
      Boolean(window.getComputedStyle(t).position === "fixed"),
  });
var oa = {
  pan: { Feature: Gr },
  drag: { Feature: Ur, ProjectionNode: Kr, MeasureLayout: zr },
};
var vl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Pl(t) {
  let e = vl.exec(t);
  if (!e) return [,];
  let [, r, o] = e;
  return [r, o];
}
var Tl = 4;
function Ko(t, e, r = 1) {
  G(
    r <= Tl,
    `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
  );
  let [o, n] = Pl(t);
  if (!o) return;
  let s = window.getComputedStyle(e).getPropertyValue(o);
  if (s) {
    let i = s.trim();
    return wr(i) ? parseFloat(i) : i;
  } else return Ye(n) ? Ko(n, e, r + 1) : n;
}
function na(t, { ...e }, r) {
  let o = t.current;
  if (!(o instanceof Element)) return { target: e, transitionEnd: r };
  r && (r = { ...r }),
    t.values.forEach((n) => {
      let s = n.get();
      if (!Ye(s)) return;
      let i = Ko(s, o);
      i && n.set(i);
    });
  for (let n in e) {
    let s = e[n];
    if (!Ye(s)) continue;
    let i = Ko(s, o);
    !i || ((e[n] = i), r || (r = {}), r[n] === void 0 && (r[n] = s));
  }
  return { target: e, transitionEnd: r };
}
var Vl = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  aa = (t) => Vl.has(t),
  bl = (t) => Object.keys(t).some(aa),
  _r = (t) => t === et || t === x,
  ia = (t, e) => parseFloat(t.split(", ")[e]),
  sa =
    (t, e) =>
    (r, { transform: o }) => {
      if (o === "none" || !o) return 0;
      let n = o.match(/^matrix3d\((.+)\)$/);
      if (n) return ia(n[1], e);
      {
        let s = o.match(/^matrix\((.+)\)$/);
        return s ? ia(s[1], t) : 0;
      }
    },
  Sl = new Set(["x", "y", "z"]),
  Cl = Vt.filter((t) => !Sl.has(t));
function Al(t) {
  let e = [];
  return (
    Cl.forEach((r) => {
      let o = t.getValue(r);
      o !== void 0 &&
        (e.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
    }),
    e.length && t.render(),
    e
  );
}
var ge = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(r),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(r),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: sa(4, 13),
  y: sa(5, 14),
};
ge.translateX = ge.x;
ge.translateY = ge.y;
var Ml = (t, e, r) => {
    let o = e.measureViewportBox(),
      n = e.current,
      s = getComputedStyle(n),
      { display: i } = s,
      a = {};
    i === "none" && e.setStaticValue("display", t.display || "block"),
      r.forEach((l) => {
        a[l] = ge[l](o, s);
      }),
      e.render();
    let c = e.measureViewportBox();
    return (
      r.forEach((l) => {
        let u = e.getValue(l);
        u && u.jump(a[l]), (t[l] = ge[l](c, s));
      }),
      t
    );
  },
  wl = (t, e, r = {}, o = {}) => {
    (e = { ...e }), (o = { ...o });
    let n = Object.keys(e).filter(aa),
      s = [],
      i = !1,
      a = [];
    if (
      (n.forEach((c) => {
        let l = t.getValue(c);
        if (!t.hasValue(c)) return;
        let u = r[c],
          m = ce(u),
          f = e[c],
          p;
        if (Bt(f)) {
          let h = f.length,
            y = f[0] === null ? 1 : 0;
          (u = f[y]), (m = ce(u));
          for (let v = y; v < h && f[v] !== null; v++)
            p
              ? G(ce(f[v]) === p, "All keyframes must be of the same type")
              : ((p = ce(f[v])),
                G(
                  p === m || (_r(m) && _r(p)),
                  "Keyframes must be of the same dimension as the current value"
                ));
        } else p = ce(f);
        if (m !== p)
          if (_r(m) && _r(p)) {
            let h = l.get();
            typeof h == "string" && l.set(parseFloat(h)),
              typeof f == "string"
                ? (e[c] = parseFloat(f))
                : Array.isArray(f) && p === x && (e[c] = f.map(parseFloat));
          } else
            m?.transform && p?.transform && (u === 0 || f === 0)
              ? u === 0
                ? l.set(p.transform(u))
                : (e[c] = m.transform(f))
              : (i || ((s = Al(t)), (i = !0)),
                a.push(c),
                (o[c] = o[c] !== void 0 ? o[c] : e[c]),
                l.jump(f));
      }),
      a.length)
    ) {
      let c = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        l = Ml(e, t, a);
      return (
        s.length &&
          s.forEach(([u, m]) => {
            t.getValue(u).set(m);
          }),
        t.render(),
        Pt && c !== null && window.scrollTo({ top: c }),
        { target: l, transitionEnd: o }
      );
    } else return { target: e, transitionEnd: o };
  };
function ca(t, e, r, o) {
  return bl(e) ? wl(t, e, r, o) : { target: e, transitionEnd: o };
}
var la = (t, e, r, o) => {
  let n = na(t, e, o);
  return (e = n.target), (o = n.transitionEnd), ca(t, e, r, o);
};
var Fe = { current: null },
  qr = { current: !1 };
function ua() {
  if (((qr.current = !0), !!Pt))
    if (window.matchMedia) {
      let t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Fe.current = t.matches);
      t.addListener(e), e();
    } else Fe.current = !1;
}
function ma(t, e, r) {
  let { willChange: o } = e;
  for (let n in e) {
    let s = e[n],
      i = r[n];
    if (L(s)) t.addValue(n, s), It(o) && o.add(n);
    else if (L(i)) t.addValue(n, it(s, { owner: t })), It(o) && o.remove(n);
    else if (i !== s)
      if (t.hasValue(n)) {
        let a = t.getValue(n);
        !a.hasAnimated && a.set(s);
      } else {
        let a = t.getStaticValue(n);
        t.addValue(n, it(a !== void 0 ? a : s, { owner: t }));
      }
  }
  for (let n in r) e[n] === void 0 && t.removeValue(n);
  return e;
}
var _o = new WeakMap();
var pa = Object.keys(Lt),
  Dl = pa.length,
  fa = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Rl = Ve.length,
  Yr = class {
    constructor(
      {
        parent: e,
        props: r,
        presenceContext: o,
        reducedMotionConfig: n,
        visualState: s,
      },
      i = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          !this.current ||
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.scheduleRender = () => T.render(this.render, !1, !0));
      let { latestValues: a, renderState: c } = s;
      (this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = r.initial ? { ...a } : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = r),
        (this.presenceContext = o),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = n),
        (this.options = i),
        (this.isControllingVariants = Rt(r)),
        (this.isVariantNode = We(r)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = Boolean(e && e.current));
      let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(r, {});
      for (let m in u) {
        let f = u[m];
        a[m] !== void 0 && L(f) && (f.set(a[m], !1), It(l) && l.add(m));
      }
    }
    scrapeMotionValuesFromProps(e, r) {
      return {};
    }
    mount(e) {
      (this.current = e),
        _o.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((r, o) => this.bindToMotionValue(o, r)),
        qr.current || ua(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : Fe.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      _o.delete(this.current),
        this.projection && this.projection.unmount(),
        W(this.notifyUpdate),
        W(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) this.features[e].unmount();
      this.current = null;
    }
    bindToMotionValue(e, r) {
      let o = K.has(e),
        n = r.on("change", (i) => {
          (this.latestValues[e] = i),
            this.props.onUpdate && T.update(this.notifyUpdate, !1, !0),
            o && this.projection && (this.projection.isTransformDirty = !0);
        }),
        s = r.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(e, () => {
        n(), s();
      });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    loadFeatures({ children: e, ...r }, o, n, s) {
      let i, a;
      for (let c = 0; c < Dl; c++) {
        let l = pa[c],
          {
            isEnabled: u,
            Feature: m,
            ProjectionNode: f,
            MeasureLayout: p,
          } = Lt[l];
        f && (i = f),
          u(r) &&
            (!this.features[l] && m && (this.features[l] = new m(this)),
            p && (a = p));
      }
      if (!this.projection && i) {
        this.projection = new i(
          this.latestValues,
          this.parent && this.parent.projection
        );
        let {
          layoutId: c,
          layout: l,
          drag: u,
          dragConstraints: m,
          layoutScroll: f,
          layoutRoot: p,
        } = r;
        this.projection.setOptions({
          layoutId: c,
          layout: l,
          alwaysMeasureLayout: Boolean(u) || (m && lt(m)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof l == "string" ? l : "both",
          initialPromotionConfig: s,
          layoutScroll: f,
          layoutRoot: p,
        });
      }
      return a;
    }
    updateFeatures() {
      for (let e in this.features) {
        let r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : E();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, r) {
      this.latestValues[e] = r;
    }
    makeTargetAnimatable(e, r = !0) {
      return this.makeTargetAnimatableFromInstance(e, this.props, r);
    }
    update(e, r) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = r);
      for (let o = 0; o < fa.length; o++) {
        let n = fa[o];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let s = e["on" + n];
        s && (this.propEventSubscriptions[n] = this.on(n, s));
      }
      (this.prevMotionValues = ma(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    getVariantContext(e = !1) {
      if (e) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        let o = this.parent ? this.parent.getVariantContext() || {} : {};
        return (
          this.props.initial !== void 0 && (o.initial = this.props.initial), o
        );
      }
      let r = {};
      for (let o = 0; o < Rl; o++) {
        let n = Ve[o],
          s = this.props[n];
        (ut(s) || s === !1) && (r[n] = s);
      }
      return r;
    }
    addVariantChild(e) {
      let r = this.getClosestVariantNode();
      if (r)
        return (
          r.variantChildren && r.variantChildren.add(e),
          () => r.variantChildren.delete(e)
        );
    }
    addValue(e, r) {
      r !== this.values.get(e) &&
        (this.removeValue(e), this.bindToMotionValue(e, r)),
        this.values.set(e, r),
        (this.latestValues[e] = r.get());
    }
    removeValue(e) {
      this.values.delete(e);
      let r = this.valueSubscriptions.get(e);
      r && (r(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, r) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let o = this.values.get(e);
      return (
        o === void 0 &&
          r !== void 0 &&
          ((o = it(r, { owner: this })), this.addValue(e, o)),
        o
      );
    }
    readValue(e) {
      var r;
      return this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (r = this.getBaseTargetFromProps(this.props, e)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, e, this.options);
    }
    setBaseTarget(e, r) {
      this.baseTarget[e] = r;
    }
    getBaseTarget(e) {
      var r;
      let { initial: o } = this.props,
        n =
          typeof o == "string" || typeof o == "object"
            ? (r = te(this.props, o)) === null || r === void 0
              ? void 0
              : r[e]
            : void 0;
      if (o && n !== void 0) return n;
      let s = this.getBaseTargetFromProps(this.props, e);
      return s !== void 0 && !L(s)
        ? s
        : this.initialValues[e] !== void 0 && n === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, r) {
      return (
        this.events[e] || (this.events[e] = new wt()), this.events[e].add(r)
      );
    }
    notify(e, ...r) {
      this.events[e] && this.events[e].notify(...r);
    }
  };
var ye = class extends Yr {
  sortInstanceNodePosition(e, r) {
    return e.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, r) {
    return e.style ? e.style[r] : void 0;
  }
  removeValueFromRenderState(e, { vars: r, style: o }) {
    delete r[e], delete o[e];
  }
  makeTargetAnimatableFromInstance(
    { transition: e, transitionEnd: r, ...o },
    { transformValues: n },
    s
  ) {
    let i = qi(o, e || {}, this);
    if ((n && (r && (r = n(r)), o && (o = n(o)), i && (i = n(i))), s)) {
      _i(this, o, i);
      let a = la(this, o, i, r);
      (r = a.transitionEnd), (o = a.target);
    }
    return { transition: e, transitionEnd: r, ...o };
  }
};
function Ll(t) {
  return window.getComputedStyle(t);
}
var Xr = class extends ye {
  readValueFromInstance(e, r) {
    if (K.has(r)) {
      let o = ne(r);
      return (o && o.default) || 0;
    } else {
      let o = Ll(e),
        n = (qe(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof n == "string" ? n.trim() : n;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: r }) {
    return jo(e, r);
  }
  build(e, r, o, n) {
    qt(e, r, o, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, r) {
    return Qt(e, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    let { children: e } = this.props;
    L(e) &&
      (this.childSubscription = e.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(e, r, o, n) {
    Qe(e, r, o, n);
  }
};
var Zr = class extends ye {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(e, r) {
    return e[r];
  }
  readValueFromInstance(e, r) {
    if (K.has(r)) {
      let o = ne(r);
      return (o && o.default) || 0;
    }
    return (r = tr.has(r) ? r : Jt(r)), e.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return E();
  }
  scrapeMotionValuesFromProps(e, r) {
    return rr(e, r);
  }
  build(e, r, o, n) {
    Xt(e, r, o, this.isSVGTag, n.transformTemplate);
  }
  renderInstance(e, r, o, n) {
    er(e, r, o, n);
  }
  mount(e) {
    (this.isSVGTag = Zt(e.tagName)), super.mount(e);
  }
};
var ha = (t, e) =>
  Kt(t)
    ? new Zr(e, { enableHardwareAcceleration: !1 })
    : new Xr(e, { enableHardwareAcceleration: !0 });
var da = { layout: { ProjectionNode: Kr, MeasureLayout: zr } };
var El = { ...Zi, ...ii, ...oa, ...da },
  kl = Tn((t, e) => Jn(t, e, El, ha));
var ht = M(w(), 1),
  Q = M(w(), 1);
var Oe = M(w(), 1);
var ga = M(w(), 1);
function Jr() {
  let t = (0, ga.useRef)(!1);
  return (
    Wt(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      []
    ),
    t
  );
}
function ya() {
  let t = Jr(),
    [e, r] = (0, Oe.useState)(0),
    o = (0, Oe.useCallback)(() => {
      t.current && r(e + 1);
    }, [e]);
  return [(0, Oe.useCallback)(() => T.postRender(o), [o]), e];
}
var Ie = M(w(), 1),
  je = M(w(), 1);
var xe = M(w(), 1),
  zt = M(w(), 1),
  qo = class extends xe.Component {
    getSnapshotBeforeUpdate(e) {
      let r = this.props.childRef.current;
      if (r && e.isPresent && !this.props.isPresent) {
        let o = this.props.sizeRef.current;
        (o.height = r.offsetHeight || 0),
          (o.width = r.offsetWidth || 0),
          (o.top = r.offsetTop),
          (o.left = r.offsetLeft);
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function xa({ children: t, isPresent: e }) {
  let r = (0, zt.useId)(),
    o = (0, zt.useRef)(null),
    n = (0, zt.useRef)({ width: 0, height: 0, top: 0, left: 0 });
  return (
    (0, zt.useInsertionEffect)(() => {
      let { width: s, height: i, top: a, left: c } = n.current;
      if (e || !o.current || !s || !i) return;
      o.current.dataset.motionPopId = r;
      let l = document.createElement("style");
      return (
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l);
        }
      );
    }, [e]),
    xe.createElement(
      qo,
      { isPresent: e, childRef: o, sizeRef: n },
      xe.cloneElement(t, { ref: o })
    )
  );
}
var Qr = ({
  children: t,
  initial: e,
  isPresent: r,
  onExitComplete: o,
  custom: n,
  presenceAffectsLayout: s,
  mode: i,
}) => {
  let a = or(Bl),
    c = (0, je.useId)(),
    l = (0, je.useMemo)(
      () => ({
        id: c,
        initial: e,
        isPresent: r,
        custom: n,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (let m of a.values()) if (!m) return;
          o && o();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      s ? void 0 : [r]
    );
  return (
    (0, je.useMemo)(() => {
      a.forEach((u, m) => a.set(m, !1));
    }, [r]),
    Ie.useEffect(() => {
      !r && !a.size && o && o();
    }, [r]),
    i === "popLayout" && (t = Ie.createElement(xa, { isPresent: r }, t)),
    Ie.createElement(vt.Provider, { value: l }, t)
  );
};
function Bl() {
  return new Map();
}
var va = M(w(), 1);
function Pa(t) {
  return (0, va.useEffect)(() => () => t(), []);
}
var ve = (t) => t.key || "";
function Fl(t, e) {
  t.forEach((r) => {
    let o = ve(r);
    e.set(o, r);
  });
}
function Ol(t) {
  let e = [];
  return (
    Q.Children.forEach(t, (r) => {
      (0, Q.isValidElement)(r) && e.push(r);
    }),
    e
  );
}
var Il = ({
  children: t,
  custom: e,
  initial: r = !0,
  onExitComplete: o,
  exitBeforeEnter: n,
  presenceAffectsLayout: s = !0,
  mode: i = "sync",
}) => {
  G(!n, "Replace exitBeforeEnter with mode='wait'");
  let a = (0, Q.useContext)($t).forceRender || ya()[0],
    c = Jr(),
    l = Ol(t),
    u = l,
    m = (0, Q.useRef)(new Map()).current,
    f = (0, Q.useRef)(u),
    p = (0, Q.useRef)(new Map()).current,
    h = (0, Q.useRef)(!0);
  if (
    (Wt(() => {
      (h.current = !1), Fl(l, p), (f.current = u);
    }),
    Pa(() => {
      (h.current = !0), p.clear(), m.clear();
    }),
    h.current)
  )
    return ht.createElement(
      ht.Fragment,
      null,
      u.map((g) =>
        ht.createElement(
          Qr,
          {
            key: ve(g),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: s,
            mode: i,
          },
          g
        )
      )
    );
  u = [...u];
  let y = f.current.map(ve),
    v = l.map(ve),
    b = y.length;
  for (let g = 0; g < b; g++) {
    let d = y[g];
    v.indexOf(d) === -1 && !m.has(d) && m.set(d, void 0);
  }
  return (
    i === "wait" && m.size && (u = []),
    m.forEach((g, d) => {
      if (v.indexOf(d) !== -1) return;
      let P = p.get(d);
      if (!P) return;
      let V = y.indexOf(d),
        F = g;
      if (!F) {
        let D = () => {
          p.delete(d), m.delete(d);
          let S = f.current.findIndex((R) => R.key === d);
          if ((f.current.splice(S, 1), !m.size)) {
            if (((f.current = l), c.current === !1)) return;
            a(), o && o();
          }
        };
        (F = ht.createElement(
          Qr,
          {
            key: ve(P),
            isPresent: !1,
            onExitComplete: D,
            custom: e,
            presenceAffectsLayout: s,
            mode: i,
          },
          P
        )),
          m.set(d, F);
      }
      u.splice(V, 0, F);
    }),
    (u = u.map((g) => {
      let d = g.key;
      return m.has(d)
        ? g
        : ht.createElement(
            Qr,
            { key: ve(g), isPresent: !0, presenceAffectsLayout: s, mode: i },
            g
          );
    })),
    ht.createElement(
      ht.Fragment,
      null,
      m.size ? u : u.map((g) => (0, Q.cloneElement)(g))
    )
  );
};
export { kl as a, Il as b };
