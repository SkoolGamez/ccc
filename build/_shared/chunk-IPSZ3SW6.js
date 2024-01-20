import { a as tu } from "/build/_shared/chunk-66MHU67D.js";
import { a as Zs } from "/build/_shared/chunk-O4ZNHJCK.js";
import { c as Qs, d as ri } from "/build/_shared/chunk-W6WK5VNR.js";
var eo = Object.prototype.toString;
function pt(t) {
  switch (eo.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return he(t, Error);
  }
}
function kt(t, e) {
  return eo.call(t) === `[object ${e}]`;
}
function wt(t) {
  return kt(t, "ErrorEvent");
}
function Xn(t) {
  return kt(t, "DOMError");
}
function ii(t) {
  return kt(t, "DOMException");
}
function de(t) {
  return kt(t, "String");
}
function xt(t) {
  return t === null || (typeof t != "object" && typeof t != "function");
}
function Te(t) {
  return kt(t, "Object");
}
function ht(t) {
  return typeof Event < "u" && he(t, Event);
}
function si(t) {
  return typeof Element < "u" && he(t, Element);
}
function oi(t) {
  return kt(t, "RegExp");
}
function mt(t) {
  return Boolean(t && t.then && typeof t.then == "function");
}
function ai(t) {
  return (
    Te(t) &&
    "nativeEvent" in t &&
    "preventDefault" in t &&
    "stopPropagation" in t
  );
}
function dn(t) {
  return typeof t == "number" && t !== t;
}
function he(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function ln(t) {
  return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue));
}
function Me(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e
    ? t
    : `${t.slice(0, e)}...`;
}
function Jn(t, e) {
  if (!Array.isArray(t)) return "";
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    try {
      ln(i) ? n.push("[VueViewModel]") : n.push(String(i));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function to(t, e, n = !1) {
  return de(t)
    ? oi(e)
      ? e.test(t)
      : de(e)
      ? n
        ? t === e
        : t.includes(e)
      : !1
    : !1;
}
function Ae(t, e = [], n = !1) {
  return e.some((r) => to(t, r, n));
}
function fn(t, e, n = 250, r, i, s, o) {
  if (
    !s.exception ||
    !s.exception.values ||
    !o ||
    !he(o.originalException, Error)
  )
    return;
  let a =
    s.exception.values.length > 0
      ? s.exception.values[s.exception.values.length - 1]
      : void 0;
  a &&
    (s.exception.values = nu(
      ci(t, e, i, o.originalException, r, s.exception.values, a, 0),
      n
    ));
}
function ci(t, e, n, r, i, s, o, a) {
  if (s.length >= n + 1) return s;
  let c = [...s];
  if (he(r[i], Error)) {
    no(o, a);
    let u = t(e, r[i]),
      d = c.length;
    ro(u, i, d, a), (c = ci(t, e, n, r[i], i, [u, ...c], u, d));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((u, d) => {
        if (he(u, Error)) {
          no(o, a);
          let l = t(e, u),
            f = c.length;
          ro(l, `errors[${d}]`, f, a), (c = ci(t, e, n, u, i, [l, ...c], l, f));
        }
      }),
    c
  );
}
function no(t, e) {
  (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
    (t.mechanism = { ...t.mechanism, is_exception_group: !0, exception_id: e });
}
function ro(t, e, n, r) {
  (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
    (t.mechanism = {
      ...t.mechanism,
      type: "chained",
      source: e,
      exception_id: n,
      parent_id: r,
    });
}
function nu(t, e) {
  return t.map((n) => (n.value && (n.value = Me(n.value, e)), n));
}
function Qn(t) {
  return t && t.Math == Math ? t : void 0;
}
var N =
  (typeof globalThis == "object" && Qn(globalThis)) ||
  (typeof window == "object" && Qn(window)) ||
  (typeof self == "object" && Qn(self)) ||
  (typeof globalThis == "object" && Qn(globalThis)) ||
  (function () {
    return this;
  })() ||
  {};
function be() {
  return N;
}
function pn(t, e, n) {
  let r = n || N,
    i = (r.__SENTRY__ = r.__SENTRY__ || {});
  return i[t] || (i[t] = e());
}
var Zn = be(),
  ru = 80;
function me(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let n = t,
      r = 5,
      i = [],
      s = 0,
      o = 0,
      a = " > ",
      c = a.length,
      u,
      d = Array.isArray(e) ? e : e.keyAttrs,
      l = (!Array.isArray(e) && e.maxStringLength) || ru;
    for (
      ;
      n &&
      s++ < r &&
      ((u = iu(n, d)),
      !(u === "html" || (s > 1 && o + i.length * c + u.length >= l)));

    )
      i.push(u), (o += u.length), (n = n.parentNode);
    return i.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function iu(t, e) {
  let n = t,
    r = [],
    i,
    s,
    o,
    a,
    c;
  if (!n || !n.tagName) return "";
  r.push(n.tagName.toLowerCase());
  let u =
    e && e.length
      ? e.filter((l) => n.getAttribute(l)).map((l) => [l, n.getAttribute(l)])
      : null;
  if (u && u.length)
    u.forEach((l) => {
      r.push(`[${l[0]}="${l[1]}"]`);
    });
  else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && de(i)))
    for (s = i.split(/\s+/), c = 0; c < s.length; c++) r.push(`.${s[c]}`);
  let d = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < d.length; c++)
    (o = d[c]), (a = n.getAttribute(o)), a && r.push(`[${o}="${a}"]`);
  return r.join("");
}
function ui() {
  try {
    return Zn.document.location.href;
  } catch {
    return "";
  }
}
function di(t) {
  return Zn.document && Zn.document.querySelector
    ? Zn.document.querySelector(t)
    : null;
}
var su = "Sentry Logger ",
  hn = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  Nt = {};
function er(t) {
  if (!("console" in N)) return t();
  let e = N.console,
    n = {},
    r = Object.keys(Nt);
  r.forEach((i) => {
    let s = Nt[i];
    (n[i] = e[i]), (e[i] = s);
  });
  try {
    return t();
  } finally {
    r.forEach((i) => {
      e[i] = n[i];
    });
  }
}
function ou() {
  let t = !1,
    e = {
      enable: () => {
        t = !0;
      },
      disable: () => {
        t = !1;
      },
      isEnabled: () => t,
    };
  return (
    typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
      ? hn.forEach((n) => {
          e[n] = (...r) => {
            t &&
              er(() => {
                N.console[n](`${su}[${n}]:`, ...r);
              });
          };
        })
      : hn.forEach((n) => {
          e[n] = () => {};
        }),
    e
  );
}
var p = ou();
var au = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function cu(t) {
  return t === "http" || t === "https";
}
function ve(t, e = !1) {
  let {
    host: n,
    path: r,
    pass: i,
    port: s,
    projectId: o,
    protocol: a,
    publicKey: c,
  } = t;
  return `${a}://${c}${e && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${
    r && `${r}/`
  }${o}`;
}
function io(t) {
  let e = au.exec(t);
  if (!e) {
    console.error(`Invalid Sentry Dsn: ${t}`);
    return;
  }
  let [n, r, i = "", s, o = "", a] = e.slice(1),
    c = "",
    u = a,
    d = u.split("/");
  if ((d.length > 1 && ((c = d.slice(0, -1).join("/")), (u = d.pop())), u)) {
    let l = u.match(/^\d+/);
    l && (u = l[0]);
  }
  return so({
    host: s,
    pass: i,
    path: c,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function so(t) {
  return {
    protocol: t.protocol,
    publicKey: t.publicKey || "",
    pass: t.pass || "",
    host: t.host,
    port: t.port || "",
    path: t.path || "",
    projectId: t.projectId,
  };
}
function uu(t) {
  if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return !0;
  let { port: e, projectId: n, protocol: r } = t;
  return ["protocol", "publicKey", "host", "projectId"].find((o) =>
    t[o] ? !1 : (p.error(`Invalid Sentry Dsn: ${o} missing`), !0)
  )
    ? !1
    : n.match(/^\d+$/)
    ? cu(r)
      ? e && isNaN(parseInt(e, 10))
        ? (p.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
        : !0
      : (p.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
    : (p.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function mn(t) {
  let e = typeof t == "string" ? io(t) : so(t);
  if (!(!e || !uu(e))) return e;
}
var re = class extends Error {
  constructor(e, n = "warn") {
    super(e),
      (this.message = e),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = n);
  }
};
function W(t, e, n) {
  if (!(e in t)) return;
  let r = t[e],
    i = n(r);
  typeof i == "function" && tr(i, r), (t[e] = i);
}
function Pe(t, e, n) {
  try {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  } catch {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function tr(t, e) {
  try {
    let n = e.prototype || {};
    (t.prototype = e.prototype = n), Pe(t, "__sentry_original__", e);
  } catch {}
}
function _t(t) {
  return t.__sentry_original__;
}
function fi(t) {
  return Object.keys(t)
    .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
    .join("&");
}
function nr(t) {
  if (pt(t))
    return { message: t.message, name: t.name, stack: t.stack, ...ao(t) };
  if (ht(t)) {
    let e = {
      type: t.type,
      target: oo(t.target),
      currentTarget: oo(t.currentTarget),
      ...ao(t),
    };
    return (
      typeof CustomEvent < "u" && he(t, CustomEvent) && (e.detail = t.detail), e
    );
  } else return t;
}
function oo(t) {
  try {
    return si(t) ? me(t) : Object.prototype.toString.call(t);
  } catch {
    return "<unknown>";
  }
}
function ao(t) {
  if (typeof t == "object" && t !== null) {
    let e = {};
    for (let n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  } else return {};
}
function pi(t, e = 40) {
  let n = Object.keys(nr(t));
  if ((n.sort(), !n.length)) return "[object has no keys]";
  if (n[0].length >= e) return Me(n[0], e);
  for (let r = n.length; r > 0; r--) {
    let i = n.slice(0, r).join(", ");
    if (!(i.length > e)) return r === n.length ? i : Me(i, e);
  }
  return "";
}
function ne(t) {
  return li(t, new Map());
}
function li(t, e) {
  if (Te(t)) {
    let n = e.get(t);
    if (n !== void 0) return n;
    let r = {};
    e.set(t, r);
    for (let i of Object.keys(t)) typeof t[i] < "u" && (r[i] = li(t[i], e));
    return r;
  }
  if (Array.isArray(t)) {
    let n = e.get(t);
    if (n !== void 0) return n;
    let r = [];
    return (
      e.set(t, r),
      t.forEach((i) => {
        r.push(li(i, e));
      }),
      r
    );
  }
  return t;
}
function P() {
  let t = N,
    e = t.crypto || t.msCrypto,
    n = () => Math.random() * 16;
  try {
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    e &&
      e.getRandomValues &&
      (n = () => e.getRandomValues(new Uint8Array(1))[0]);
  } catch {}
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (r) =>
    (r ^ ((n() & 15) >> (r / 4))).toString(16)
  );
}
function co(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function Re(t) {
  let { message: e, event_id: n } = t;
  if (e) return e;
  let r = co(t);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || "<unknown>"
    : n || "<unknown>";
}
function Dt(t, e, n) {
  let r = (t.exception = t.exception || {}),
    i = (r.values = r.values || []),
    s = (i[0] = i[0] || {});
  s.value || (s.value = e || ""), s.type || (s.type = n || "Error");
}
function Ie(t, e) {
  let n = co(t);
  if (!n) return;
  let r = { type: "generic", handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...e }), e && "data" in e)) {
    let s = { ...(i && i.data), ...e.data };
    n.mechanism.data = s;
  }
}
function rr(t) {
  if (t && t.__sentry_captured__) return !0;
  try {
    Pe(t, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function _n(t) {
  return Array.isArray(t) ? t : [t];
}
var fo = 50,
  uo = /\(error: (.*)\)/,
  lo = /captureMessage|captureException/;
function ir(...t) {
  let e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0) => {
    let i = [],
      s = n.split(`
`);
    for (let o = r; o < s.length; o++) {
      let a = s[o];
      if (a.length > 1024) continue;
      let c = uo.test(a) ? a.replace(uo, "$1") : a;
      if (!c.match(/\S*Error: /)) {
        for (let u of e) {
          let d = u(c);
          if (d) {
            i.push(d);
            break;
          }
        }
        if (i.length >= fo) break;
      }
    }
    return po(i);
  };
}
function mi(t) {
  return Array.isArray(t) ? ir(...t) : t;
}
function po(t) {
  if (!t.length) return [];
  let e = Array.from(t);
  return (
    /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(),
    e.reverse(),
    lo.test(e[e.length - 1].function || "") &&
      (e.pop(), lo.test(e[e.length - 1].function || "") && e.pop()),
    e
      .slice(0, fo)
      .map((n) => ({
        ...n,
        filename: n.filename || e[e.length - 1].filename,
        function: n.function || "?",
      }))
  );
}
var hi = "<anonymous>";
function le(t) {
  try {
    return !t || typeof t != "function" ? hi : t.name || hi;
  } catch {
    return hi;
  }
}
var _i = be();
function sr() {
  if (!("fetch" in _i)) return !1;
  try {
    return (
      new Headers(), new Request("http://www.example.com"), new Response(), !0
    );
  } catch {
    return !1;
  }
}
function gn(t) {
  return (
    t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
  );
}
function gi() {
  if (!sr()) return !1;
  if (gn(_i.fetch)) return !0;
  let t = !1,
    e = _i.document;
  if (e && typeof e.createElement == "function")
    try {
      let n = e.createElement("iframe");
      (n.hidden = !0),
        e.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (t = gn(n.contentWindow.fetch)),
        e.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return t;
}
var or = be();
function ho() {
  let t = or.chrome,
    e = t && t.app && t.app.runtime,
    n = "history" in or && !!or.history.pushState && !!or.history.replaceState;
  return !e && n;
}
var ee = be(),
  Ee = "__sentry_xhr_v2__",
  En = {},
  mo = {};
function du(t) {
  if (!mo[t])
    switch (((mo[t] = !0), t)) {
      case "console":
        lu();
        break;
      case "dom":
        To();
        break;
      case "xhr":
        So();
        break;
      case "fetch":
        fu();
        break;
      case "history":
        pu();
        break;
      case "error":
        Eu();
        break;
      case "unhandledrejection":
        yu();
        break;
      default:
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.warn("unknown instrumentation type:", t);
        return;
    }
}
function F(t, e) {
  (En[t] = En[t] || []), En[t].push(e), du(t);
}
function ke(t, e) {
  if (!(!t || !En[t]))
    for (let n of En[t] || [])
      try {
        n(e);
      } catch (r) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.error(
            `Error while triggering instrumentation handler.
Type: ${t}
Name: ${le(n)}
Error:`,
            r
          );
      }
}
function lu() {
  "console" in N &&
    hn.forEach(function (t) {
      t in N.console &&
        W(N.console, t, function (e) {
          return (
            (Nt[t] = e),
            function (...n) {
              ke("console", { args: n, level: t });
              let r = Nt[t];
              r && r.apply(N.console, n);
            }
          );
        });
    });
}
function fu() {
  !gi() ||
    W(N, "fetch", function (t) {
      return function (...e) {
        let { method: n, url: r } = yo(e),
          i = {
            args: e,
            fetchData: { method: n, url: r },
            startTimestamp: Date.now(),
          };
        return (
          ke("fetch", { ...i }),
          t.apply(N, e).then(
            (s) => (
              ke("fetch", { ...i, endTimestamp: Date.now(), response: s }), s
            ),
            (s) => {
              throw (
                (ke("fetch", { ...i, endTimestamp: Date.now(), error: s }), s)
              );
            }
          )
        );
      };
    });
}
function Ei(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function _o(t) {
  return typeof t == "string"
    ? t
    : t
    ? Ei(t, "url")
      ? t.url
      : t.toString
      ? t.toString()
      : ""
    : "";
}
function yo(t) {
  if (t.length === 0) return { method: "GET", url: "" };
  if (t.length === 2) {
    let [n, r] = t;
    return {
      url: _o(n),
      method: Ei(r, "method") ? String(r.method).toUpperCase() : "GET",
    };
  }
  let e = t[0];
  return {
    url: _o(e),
    method: Ei(e, "method") ? String(e.method).toUpperCase() : "GET",
  };
}
function So() {
  if (!ee.XMLHttpRequest) return;
  let t = XMLHttpRequest.prototype;
  W(t, "open", function (e) {
    return function (...n) {
      let r = Date.now(),
        i = n[1],
        s = (this[Ee] = {
          method: de(n[0]) ? n[0].toUpperCase() : n[0],
          url: n[1],
          request_headers: {},
        });
      de(i) &&
        s.method === "POST" &&
        i.match(/sentry_key/) &&
        (this.__sentry_own_request__ = !0);
      let o = () => {
        let a = this[Ee];
        if (!!a && this.readyState === 4) {
          try {
            a.status_code = this.status;
          } catch {}
          ke("xhr", {
            args: n,
            endTimestamp: Date.now(),
            startTimestamp: r,
            xhr: this,
          });
        }
      };
      return (
        "onreadystatechange" in this &&
        typeof this.onreadystatechange == "function"
          ? W(this, "onreadystatechange", function (a) {
              return function (...c) {
                return o(), a.apply(this, c);
              };
            })
          : this.addEventListener("readystatechange", o),
        W(this, "setRequestHeader", function (a) {
          return function (...c) {
            let [u, d] = c,
              l = this[Ee];
            return (
              l && (l.request_headers[u.toLowerCase()] = d), a.apply(this, c)
            );
          };
        }),
        e.apply(this, n)
      );
    };
  }),
    W(t, "send", function (e) {
      return function (...n) {
        let r = this[Ee];
        return (
          r && n[0] !== void 0 && (r.body = n[0]),
          ke("xhr", { args: n, startTimestamp: Date.now(), xhr: this }),
          e.apply(this, n)
        );
      };
    });
}
var ar;
function pu() {
  if (!ho()) return;
  let t = ee.onpopstate;
  ee.onpopstate = function (...n) {
    let r = ee.location.href,
      i = ar;
    if (((ar = r), ke("history", { from: i, to: r }), t))
      try {
        return t.apply(this, n);
      } catch {}
  };
  function e(n) {
    return function (...r) {
      let i = r.length > 2 ? r[2] : void 0;
      if (i) {
        let s = ar,
          o = String(i);
        (ar = o), ke("history", { from: s, to: o });
      }
      return n.apply(this, r);
    };
  }
  W(ee.history, "pushState", e), W(ee.history, "replaceState", e);
}
var hu = 1e3,
  go,
  yi,
  Si;
function mu(t) {
  if (t.type !== yi) return !1;
  try {
    if (!t.target || t.target._sentryId !== Si) return !1;
  } catch {}
  return !0;
}
function _u(t, e) {
  return t !== "keypress"
    ? !1
    : !e || !e.tagName
    ? !0
    : !(
        e.tagName === "INPUT" ||
        e.tagName === "TEXTAREA" ||
        e.isContentEditable
      );
}
function gu(t) {
  try {
    return t.target;
  } catch {
    return null;
  }
}
function Eo(t, e = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    let r = gu(n);
    if (_u(n.type, r)) return;
    Pe(n, "_sentryCaptured", !0), r && !r._sentryId && Pe(r, "_sentryId", P());
    let i = n.type === "keypress" ? "input" : n.type;
    mu(n) ||
      (t({ event: n, name: i, global: e }),
      (yi = n.type),
      (Si = r ? r._sentryId : void 0)),
      clearTimeout(go),
      (go = ee.setTimeout(() => {
        (Si = void 0), (yi = void 0);
      }, hu));
  };
}
function To() {
  if (!ee.document) return;
  let t = ke.bind(null, "dom"),
    e = Eo(t, !0);
  ee.document.addEventListener("click", e, !1),
    ee.document.addEventListener("keypress", e, !1),
    ["EventTarget", "Node"].forEach((n) => {
      let r = ee[n] && ee[n].prototype;
      !r ||
        !r.hasOwnProperty ||
        !r.hasOwnProperty("addEventListener") ||
        (W(r, "addEventListener", function (i) {
          return function (s, o, a) {
            if (s === "click" || s == "keypress")
              try {
                let c = this,
                  u = (c.__sentry_instrumentation_handlers__ =
                    c.__sentry_instrumentation_handlers__ || {}),
                  d = (u[s] = u[s] || { refCount: 0 });
                if (!d.handler) {
                  let l = Eo(t);
                  (d.handler = l), i.call(this, s, l, a);
                }
                d.refCount++;
              } catch {}
            return i.call(this, s, o, a);
          };
        }),
        W(r, "removeEventListener", function (i) {
          return function (s, o, a) {
            if (s === "click" || s == "keypress")
              try {
                let c = this,
                  u = c.__sentry_instrumentation_handlers__ || {},
                  d = u[s];
                d &&
                  (d.refCount--,
                  d.refCount <= 0 &&
                    (i.call(this, s, d.handler, a),
                    (d.handler = void 0),
                    delete u[s]),
                  Object.keys(u).length === 0 &&
                    delete c.__sentry_instrumentation_handlers__);
              } catch {}
            return i.call(this, s, o, a);
          };
        }));
    });
}
var cr = null;
function Eu() {
  (cr = ee.onerror),
    (ee.onerror = function (t, e, n, r, i) {
      return (
        ke("error", { column: r, error: i, line: n, msg: t, url: e }),
        cr && !cr.__SENTRY_LOADER__ ? cr.apply(this, arguments) : !1
      );
    }),
    (ee.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
var ur = null;
function yu() {
  (ur = ee.onunhandledrejection),
    (ee.onunhandledrejection = function (t) {
      return (
        ke("unhandledrejection", t),
        ur && !ur.__SENTRY_LOADER__ ? ur.apply(this, arguments) : !0
      );
    }),
    (ee.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
function Ti() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function bi() {
  return "npm";
}
function gt() {
  return (
    !Ti() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function vi(t, e) {
  return t.require(e);
}
function dr() {
  return typeof window < "u" && (!gt() || Su());
}
function Su() {
  return N.process !== void 0 && N.process.type === "renderer";
}
function bo() {
  let t = typeof WeakSet == "function",
    e = t ? new WeakSet() : [];
  function n(i) {
    if (t) return e.has(i) ? !0 : (e.add(i), !1);
    for (let s = 0; s < e.length; s++) if (e[s] === i) return !0;
    return e.push(i), !1;
  }
  function r(i) {
    if (t) e.delete(i);
    else
      for (let s = 0; s < e.length; s++)
        if (e[s] === i) {
          e.splice(s, 1);
          break;
        }
  }
  return [n, r];
}
function fe(t, e = 100, n = 1 / 0) {
  try {
    return lr("", t, e, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function fr(t, e = 3, n = 100 * 1024) {
  let r = fe(t, e);
  return Ru(r) > n ? fr(t, e - 1, n) : r;
}
function lr(t, e, n = 1 / 0, r = 1 / 0, i = bo()) {
  let [s, o] = i;
  if (
    e == null ||
    (["number", "boolean", "string"].includes(typeof e) && !dn(e))
  )
    return e;
  let a = Tu(t, e);
  if (!a.startsWith("[object ")) return a;
  if (e.__sentry_skip_normalization__) return e;
  let c =
    typeof e.__sentry_override_normalization_depth__ == "number"
      ? e.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return a.replace("object ", "");
  if (s(e)) return "[Circular ~]";
  let u = e;
  if (u && typeof u.toJSON == "function")
    try {
      let h = u.toJSON();
      return lr("", h, c - 1, r, i);
    } catch {}
  let d = Array.isArray(e) ? [] : {},
    l = 0,
    f = nr(e);
  for (let h in f) {
    if (!Object.prototype.hasOwnProperty.call(f, h)) continue;
    if (l >= r) {
      d[h] = "[MaxProperties ~]";
      break;
    }
    let m = f[h];
    (d[h] = lr(h, m, c - 1, r, i)), l++;
  }
  return o(e), d;
}
function Tu(t, e) {
  try {
    if (t === "domain" && e && typeof e == "object" && e._events)
      return "[Domain]";
    if (t === "domainEmitter") return "[DomainEmitter]";
    if (typeof globalThis < "u" && e === globalThis) return "[Global]";
    if (typeof window < "u" && e === window) return "[Window]";
    if (typeof document < "u" && e === document) return "[Document]";
    if (ln(e)) return "[VueViewModel]";
    if (ai(e)) return "[SyntheticEvent]";
    if (typeof e == "number" && e !== e) return "[NaN]";
    if (typeof e == "function") return `[Function: ${le(e)}]`;
    if (typeof e == "symbol") return `[${String(e)}]`;
    if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
    let n = bu(e);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function bu(t) {
  let e = Object.getPrototypeOf(t);
  return e ? e.constructor.name : "null prototype";
}
function vu(t) {
  return ~-encodeURI(t).split(/%..|./).length;
}
function Ru(t) {
  return vu(JSON.stringify(t));
}
var Fe;
(function (t) {
  t[(t.PENDING = 0)] = "PENDING";
  let n = 1;
  t[(t.RESOLVED = n)] = "RESOLVED";
  let r = 2;
  t[(t.REJECTED = r)] = "REJECTED";
})(Fe || (Fe = {}));
function _e(t) {
  return new X((e) => {
    e(t);
  });
}
function Et(t) {
  return new X((e, n) => {
    n(t);
  });
}
var X = class {
  constructor(e) {
    X.prototype.__init.call(this),
      X.prototype.__init2.call(this),
      X.prototype.__init3.call(this),
      X.prototype.__init4.call(this),
      (this._state = Fe.PENDING),
      (this._handlers = []);
    try {
      e(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(e, n) {
    return new X((r, i) => {
      this._handlers.push([
        !1,
        (s) => {
          if (!e) r(s);
          else
            try {
              r(e(s));
            } catch (o) {
              i(o);
            }
        },
        (s) => {
          if (!n) i(s);
          else
            try {
              r(n(s));
            } catch (o) {
              i(o);
            }
        },
      ]),
        this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((n) => n, e);
  }
  finally(e) {
    return new X((n, r) => {
      let i, s;
      return this.then(
        (o) => {
          (s = !1), (i = o), e && e();
        },
        (o) => {
          (s = !0), (i = o), e && e();
        }
      ).then(() => {
        if (s) {
          r(i);
          return;
        }
        n(i);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(Fe.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(Fe.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, n) => {
      if (this._state === Fe.PENDING) {
        if (mt(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        (this._state = e), (this._value = n), this._executeHandlers();
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Fe.PENDING) return;
      let e = this._handlers.slice();
      (this._handlers = []),
        e.forEach((n) => {
          n[0] ||
            (this._state === Fe.RESOLVED && n[1](this._value),
            this._state === Fe.REJECTED && n[2](this._value),
            (n[0] = !0));
        });
    };
  }
};
function Ri(t) {
  let e = [];
  function n() {
    return t === void 0 || e.length < t;
  }
  function r(o) {
    return e.splice(e.indexOf(o), 1)[0];
  }
  function i(o) {
    if (!n())
      return Et(new re("Not adding Promise because buffer limit was reached."));
    let a = o();
    return (
      e.indexOf(a) === -1 && e.push(a),
      a.then(() => r(a)).then(null, () => r(a).then(null, () => {})),
      a
    );
  }
  function s(o) {
    return new X((a, c) => {
      let u = e.length;
      if (!u) return a(!0);
      let d = setTimeout(() => {
        o && o > 0 && a(!1);
      }, o);
      e.forEach((l) => {
        _e(l).then(() => {
          --u || (clearTimeout(d), a(!0));
        }, c);
      });
    });
  }
  return { $: e, add: i, drain: s };
}
function yn(t) {
  if (!t) return {};
  let e = t.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!e) return {};
  let n = e[6] || "",
    r = e[8] || "";
  return {
    host: e[4],
    path: e[5],
    protocol: e[2],
    search: n,
    hash: r,
    relative: e[5] + n + r,
  };
}
var vo = ["fatal", "error", "warning", "log", "info", "debug"];
function Ii(t) {
  return t === "warn" ? "warning" : vo.includes(t) ? t : "log";
}
var Io = be(),
  wi = { nowSeconds: () => Date.now() / 1e3 };
function Iu() {
  let { performance: t } = Io;
  if (!t || !t.now) return;
  let e = Date.now() - t.now();
  return { now: () => t.now(), timeOrigin: e };
}
function ku() {
  try {
    return vi(module, "perf_hooks").performance;
  } catch {
    return;
  }
}
var ki = gt() ? ku() : Iu(),
  Ro =
    ki === void 0 ? wi : { nowSeconds: () => (ki.timeOrigin + ki.now()) / 1e3 },
  Ge = wi.nowSeconds.bind(wi),
  we = Ro.nowSeconds.bind(Ro);
var Sn,
  ie = (() => {
    let { performance: t } = Io;
    if (!t || !t.now) {
      Sn = "none";
      return;
    }
    let e = 3600 * 1e3,
      n = t.now(),
      r = Date.now(),
      i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
      s = i < e,
      o = t.timing && t.timing.navigationStart,
      c = typeof o == "number" ? Math.abs(o + n - r) : e,
      u = c < e;
    return s || u
      ? i <= c
        ? ((Sn = "timeOrigin"), t.timeOrigin)
        : ((Sn = "navigationStart"), o)
      : ((Sn = "dateNow"), r);
  })();
var Tn = "baggage",
  xi = "sentry-",
  wo = /^sentry-/,
  xo = 8192;
function Ni(t) {
  if (!de(t) && !Array.isArray(t)) return;
  let e = {};
  if (Array.isArray(t))
    e = t.reduce((r, i) => {
      let s = ko(i);
      return { ...r, ...s };
    }, {});
  else {
    if (!t) return;
    e = ko(t);
  }
  let n = Object.entries(e).reduce((r, [i, s]) => {
    if (i.match(wo)) {
      let o = i.slice(xi.length);
      r[o] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function bn(t) {
  if (!t) return;
  let e = Object.entries(t).reduce(
    (n, [r, i]) => (i && (n[`${xi}${r}`] = i), n),
    {}
  );
  return wu(e);
}
function ko(t) {
  return t
    .split(",")
    .map((e) => e.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((e, [n, r]) => ((e[n] = r), e), {});
}
function wu(t) {
  if (Object.keys(t).length !== 0)
    return Object.entries(t).reduce((e, [n, r], i) => {
      let s = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        o = i === 0 ? s : `${e},${s}`;
      return o.length > xo
        ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`
            ),
          e)
        : o;
    }, "");
}
var No = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
);
function Di(t) {
  if (!t) return;
  let e = t.match(No);
  if (!e) return;
  let n;
  return (
    e[3] === "1" ? (n = !0) : e[3] === "0" && (n = !1),
    { traceId: e[1], parentSampled: n, parentSpanId: e[2] }
  );
}
function Ci(t, e) {
  let n = Di(t),
    r = Ni(e),
    { traceId: i, parentSpanId: s, parentSampled: o } = n || {},
    a = { traceId: i || P(), spanId: P().substring(16), sampled: o };
  return (
    s && (a.parentSpanId = s),
    r && (a.dsc = r),
    { traceparentData: n, dynamicSamplingContext: r, propagationContext: a }
  );
}
function Ct(t = P(), e = P().substring(16), n) {
  let r = "";
  return n !== void 0 && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
}
function ye(t, e = []) {
  return [t, e];
}
function Mi(t, e) {
  let [n, r] = t;
  return [n, [...r, e]];
}
function pr(t, e) {
  let n = t[1];
  for (let r of n) {
    let i = r[0].type;
    if (e(r, i)) return !0;
  }
  return !1;
}
function Oi(t, e) {
  return (e || new TextEncoder()).encode(t);
}
function Ai(t, e) {
  let [n, r] = t,
    i = JSON.stringify(n);
  function s(o) {
    typeof i == "string"
      ? (i = typeof o == "string" ? i + o : [Oi(i, e), o])
      : i.push(typeof o == "string" ? Oi(o, e) : o);
  }
  for (let o of r) {
    let [a, c] = o;
    if (
      (s(`
${JSON.stringify(a)}
`),
      typeof c == "string" || c instanceof Uint8Array)
    )
      s(c);
    else {
      let u;
      try {
        u = JSON.stringify(c);
      } catch {
        u = JSON.stringify(fe(c));
      }
      s(u);
    }
  }
  return typeof i == "string" ? i : xu(i);
}
function xu(t) {
  let e = t.reduce((i, s) => i + s.length, 0),
    n = new Uint8Array(e),
    r = 0;
  for (let i of t) n.set(i, r), (r += i.length);
  return n;
}
function Bi(t, e) {
  let n = typeof t.data == "string" ? Oi(t.data, e) : t.data;
  return [
    ne({
      type: "attachment",
      length: n.length,
      filename: t.filename,
      content_type: t.contentType,
      attachment_type: t.attachmentType,
    }),
    n,
  ];
}
var Nu = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  statsd: "unknown",
};
function hr(t) {
  return Nu[t];
}
function Ot(t) {
  if (!t || !t.sdk) return;
  let { name: e, version: n } = t.sdk;
  return { name: e, version: n };
}
function vn(t, e, n, r) {
  let i =
    t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: t.event_id,
    sent_at: new Date().toISOString(),
    ...(e && { sdk: e }),
    ...(!!n && r && { dsn: ve(r) }),
    ...(i && { trace: ne({ ...i }) }),
  };
}
function Li(t, e, n) {
  let r = [
    { type: "client_report" },
    { timestamp: n || Ge(), discarded_events: t },
  ];
  return ye(e ? { dsn: e } : {}, [r]);
}
function Do(t, e = Date.now()) {
  let n = parseInt(`${t}`, 10);
  if (!isNaN(n)) return n * 1e3;
  let r = Date.parse(`${t}`);
  return isNaN(r) ? 6e4 : r - e;
}
function Co(t, e) {
  return t[e] || t.all || 0;
}
function Rn(t, e, n = Date.now()) {
  return Co(t, e) > n;
}
function In(t, { statusCode: e, headers: n }, r = Date.now()) {
  let i = { ...t },
    s = n && n["x-sentry-rate-limits"],
    o = n && n["retry-after"];
  if (s)
    for (let a of s.trim().split(",")) {
      let [c, u] = a.split(":", 2),
        d = parseInt(c, 10),
        l = (isNaN(d) ? 60 : d) * 1e3;
      if (!u) i.all = r + l;
      else for (let f of u.split(";")) i[f] = r + l;
    }
  else o ? (i.all = r + Do(o, r)) : e === 429 && (i.all = r + 60 * 1e3);
  return i;
}
function Oo(t, e) {
  return t(e.stack || "", 1);
}
function Ui(t, e) {
  let n = { type: e.name || e.constructor.name, value: e.message },
    r = Oo(t, e);
  return r.length && (n.stacktrace = { frames: r }), n;
}
function kn(t) {
  let e,
    n = t[0],
    r = 1;
  for (; r < t.length; ) {
    let i = t[r],
      s = t[r + 1];
    if (
      ((r += 2), (i === "optionalAccess" || i === "optionalCall") && n == null)
    )
      return;
    i === "access" || i === "optionalAccess"
      ? ((e = n), (n = s(n)))
      : (i === "call" || i === "optionalCall") &&
        ((n = s((...o) => n.call(e, ...o))), (e = void 0));
  }
  return n;
}
var Mt = "production";
function wn() {
  return pn("globalEventProcessors", () => []);
}
function Bt(t) {
  wn().push(t);
}
function At(t, e, n, r = 0) {
  return new X((i, s) => {
    let o = t[r];
    if (e === null || typeof o != "function") i(e);
    else {
      let a = o({ ...e }, n);
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        o.id &&
        a === null &&
        p.log(`Event processor "${o.id}" dropped event`),
        mt(a)
          ? a.then((c) => At(t, c, n, r + 1).then(i)).then(null, s)
          : At(t, a, n, r + 1)
              .then(i)
              .then(null, s);
    }
  });
}
function Mo(t) {
  let e = we(),
    n = {
      sid: P(),
      init: !0,
      timestamp: e,
      started: e,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => Du(n),
    };
  return t && He(n, t), n;
}
function He(t, e = {}) {
  if (
    (e.user &&
      (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
      !t.did &&
        !e.did &&
        (t.did = e.user.id || e.user.email || e.user.username)),
    (t.timestamp = e.timestamp || we()),
    e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : P()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
    t.ignoreDuration)
  )
    t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    let n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status);
}
function Ao(t, e) {
  let n = {};
  e ? (n = { status: e }) : t.status === "ok" && (n = { status: "exited" }),
    He(t, n);
}
function Du(t) {
  return ne({
    sid: `${t.sid}`,
    init: t.init,
    started: new Date(t.started * 1e3).toISOString(),
    timestamp: new Date(t.timestamp * 1e3).toISOString(),
    status: t.status,
    errors: t.errors,
    did:
      typeof t.did == "number" || typeof t.did == "string"
        ? `${t.did}`
        : void 0,
    duration: t.duration,
    abnormal_mechanism: t.abnormal_mechanism,
    attrs: {
      release: t.release,
      environment: t.environment,
      ip_address: t.ipAddress,
      user_agent: t.userAgent,
    },
  });
}
var Cu = 100,
  Se = class {
    constructor() {
      (this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = Bo());
    }
    static clone(e) {
      let n = new Se();
      return (
        e &&
          ((n._breadcrumbs = [...e._breadcrumbs]),
          (n._tags = { ...e._tags }),
          (n._extra = { ...e._extra }),
          (n._contexts = { ...e._contexts }),
          (n._user = e._user),
          (n._level = e._level),
          (n._span = e._span),
          (n._session = e._session),
          (n._transactionName = e._transactionName),
          (n._fingerprint = e._fingerprint),
          (n._eventProcessors = [...e._eventProcessors]),
          (n._requestSession = e._requestSession),
          (n._attachments = [...e._attachments]),
          (n._sdkProcessingMetadata = { ...e._sdkProcessingMetadata }),
          (n._propagationContext = { ...e._propagationContext })),
        n
      );
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return this._eventProcessors.push(e), this;
    }
    setUser(e) {
      return (
        (this._user = e || {}),
        this._session && He(this._session, { user: e }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(e) {
      return (this._requestSession = e), this;
    }
    setTags(e) {
      return (
        (this._tags = { ...this._tags, ...e }),
        this._notifyScopeListeners(),
        this
      );
    }
    setTag(e, n) {
      return (
        (this._tags = { ...this._tags, [e]: n }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtras(e) {
      return (
        (this._extra = { ...this._extra, ...e }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtra(e, n) {
      return (
        (this._extra = { ...this._extra, [e]: n }),
        this._notifyScopeListeners(),
        this
      );
    }
    setFingerprint(e) {
      return (this._fingerprint = e), this._notifyScopeListeners(), this;
    }
    setLevel(e) {
      return (this._level = e), this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
      return (this._transactionName = e), this._notifyScopeListeners(), this;
    }
    setContext(e, n) {
      return (
        n === null ? delete this._contexts[e] : (this._contexts[e] = n),
        this._notifyScopeListeners(),
        this
      );
    }
    setSpan(e) {
      return (this._span = e), this._notifyScopeListeners(), this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      let e = this.getSpan();
      return e && e.transaction;
    }
    setSession(e) {
      return (
        e ? (this._session = e) : delete this._session,
        this._notifyScopeListeners(),
        this
      );
    }
    getSession() {
      return this._session;
    }
    update(e) {
      if (!e) return this;
      if (typeof e == "function") {
        let n = e(this);
        return n instanceof Se ? n : this;
      }
      return (
        e instanceof Se
          ? ((this._tags = { ...this._tags, ...e._tags }),
            (this._extra = { ...this._extra, ...e._extra }),
            (this._contexts = { ...this._contexts, ...e._contexts }),
            e._user && Object.keys(e._user).length && (this._user = e._user),
            e._level && (this._level = e._level),
            e._fingerprint && (this._fingerprint = e._fingerprint),
            e._requestSession && (this._requestSession = e._requestSession),
            e._propagationContext &&
              (this._propagationContext = e._propagationContext))
          : Te(e) &&
            ((e = e),
            (this._tags = { ...this._tags, ...e.tags }),
            (this._extra = { ...this._extra, ...e.extra }),
            (this._contexts = { ...this._contexts, ...e.contexts }),
            e.user && (this._user = e.user),
            e.level && (this._level = e.level),
            e.fingerprint && (this._fingerprint = e.fingerprint),
            e.requestSession && (this._requestSession = e.requestSession),
            e.propagationContext &&
              (this._propagationContext = e.propagationContext)),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._span = void 0),
        (this._session = void 0),
        this._notifyScopeListeners(),
        (this._attachments = []),
        (this._propagationContext = Bo()),
        this
      );
    }
    addBreadcrumb(e, n) {
      let r = typeof n == "number" ? n : Cu;
      if (r <= 0) return this;
      let i = { timestamp: Ge(), ...e },
        s = this._breadcrumbs;
      return (
        s.push(i),
        (this._breadcrumbs = s.length > r ? s.slice(-r) : s),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
      return this._attachments.push(e), this;
    }
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      return (this._attachments = []), this;
    }
    applyToEvent(e, n = {}, r) {
      if (
        (this._extra &&
          Object.keys(this._extra).length &&
          (e.extra = { ...this._extra, ...e.extra }),
        this._tags &&
          Object.keys(this._tags).length &&
          (e.tags = { ...this._tags, ...e.tags }),
        this._user &&
          Object.keys(this._user).length &&
          (e.user = { ...this._user, ...e.user }),
        this._contexts &&
          Object.keys(this._contexts).length &&
          (e.contexts = { ...this._contexts, ...e.contexts }),
        this._level && (e.level = this._level),
        this._transactionName && (e.transaction = this._transactionName),
        this._span)
      ) {
        e.contexts = { trace: this._span.getTraceContext(), ...e.contexts };
        let o = this._span.transaction;
        if (o) {
          e.sdkProcessingMetadata = {
            dynamicSamplingContext: o.getDynamicSamplingContext(),
            ...e.sdkProcessingMetadata,
          };
          let a = o.name;
          a && (e.tags = { transaction: a, ...e.tags });
        }
      }
      this._applyFingerprint(e);
      let i = this._getBreadcrumbs(),
        s = [...(e.breadcrumbs || []), ...i];
      return (
        (e.breadcrumbs = s.length > 0 ? s : void 0),
        (e.sdkProcessingMetadata = {
          ...e.sdkProcessingMetadata,
          ...this._sdkProcessingMetadata,
          propagationContext: this._propagationContext,
        }),
        At([...(r || []), ...wn(), ...this._eventProcessors], e, n)
      );
    }
    setSDKProcessingMetadata(e) {
      return (
        (this._sdkProcessingMetadata = {
          ...this._sdkProcessingMetadata,
          ...e,
        }),
        this
      );
    }
    setPropagationContext(e) {
      return (this._propagationContext = e), this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    _getBreadcrumbs() {
      return this._breadcrumbs;
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((e) => {
          e(this);
        }),
        (this._notifyingListeners = !1));
    }
    _applyFingerprint(e) {
      (e.fingerprint = e.fingerprint ? _n(e.fingerprint) : []),
        this._fingerprint &&
          (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
        e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
    }
  };
function Bo() {
  return { traceId: P(), spanId: P().substring(16) };
}
var Lo = 4,
  Ou = 100,
  Lt = class {
    constructor(e, n = new Se(), r = Lo) {
      (this._version = r),
        (this._stack = [{ scope: n }]),
        e && this.bindClient(e);
    }
    isOlderThan(e) {
      return this._version < e;
    }
    bindClient(e) {
      let n = this.getStackTop();
      (n.client = e), e && e.setupIntegrations && e.setupIntegrations();
    }
    pushScope() {
      let e = Se.clone(this.getScope());
      return this.getStack().push({ client: this.getClient(), scope: e }), e;
    }
    popScope() {
      return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
    }
    withScope(e) {
      let n = this.pushScope();
      try {
        e(n);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(e, n) {
      let r = (this._lastEventId = n && n.event_id ? n.event_id : P()),
        i = new Error("Sentry syntheticException");
      return (
        this._withClient((s, o) => {
          s.captureException(
            e,
            { originalException: e, syntheticException: i, ...n, event_id: r },
            o
          );
        }),
        r
      );
    }
    captureMessage(e, n, r) {
      let i = (this._lastEventId = r && r.event_id ? r.event_id : P()),
        s = new Error(e);
      return (
        this._withClient((o, a) => {
          o.captureMessage(
            e,
            n,
            { originalException: e, syntheticException: s, ...r, event_id: i },
            a
          );
        }),
        i
      );
    }
    captureEvent(e, n) {
      let r = n && n.event_id ? n.event_id : P();
      return (
        e.type || (this._lastEventId = r),
        this._withClient((i, s) => {
          i.captureEvent(e, { ...n, event_id: r }, s);
        }),
        r
      );
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(e, n) {
      let { scope: r, client: i } = this.getStackTop();
      if (!i) return;
      let { beforeBreadcrumb: s = null, maxBreadcrumbs: o = Ou } =
        (i.getOptions && i.getOptions()) || {};
      if (o <= 0) return;
      let c = { timestamp: Ge(), ...e },
        u = s ? er(() => s(c, n)) : c;
      u !== null &&
        (i.emit && i.emit("beforeAddBreadcrumb", u, n), r.addBreadcrumb(u, o));
    }
    setUser(e) {
      this.getScope().setUser(e);
    }
    setTags(e) {
      this.getScope().setTags(e);
    }
    setExtras(e) {
      this.getScope().setExtras(e);
    }
    setTag(e, n) {
      this.getScope().setTag(e, n);
    }
    setExtra(e, n) {
      this.getScope().setExtra(e, n);
    }
    setContext(e, n) {
      this.getScope().setContext(e, n);
    }
    configureScope(e) {
      let { scope: n, client: r } = this.getStackTop();
      r && e(n);
    }
    run(e) {
      let n = mr(this);
      try {
        e(this);
      } finally {
        mr(n);
      }
    }
    getIntegration(e) {
      let n = this.getClient();
      if (!n) return null;
      try {
        return n.getIntegration(e);
      } catch {
        return (
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
          null
        );
      }
    }
    startTransaction(e, n) {
      let r = this._callExtensionMethod("startTransaction", e, n);
      if ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && !r) {
        let i = this.getClient();
        console.warn(
          i
            ? `Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`
            : "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
        );
      }
      return r;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(e = !1) {
      if (e) return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      let n = this.getStackTop().scope,
        r = n.getSession();
      r && Ao(r), this._sendSessionUpdate(), n.setSession();
    }
    startSession(e) {
      let { scope: n, client: r } = this.getStackTop(),
        { release: i, environment: s = Mt } = (r && r.getOptions()) || {},
        { userAgent: o } = N.navigator || {},
        a = Mo({
          release: i,
          environment: s,
          user: n.getUser(),
          ...(o && { userAgent: o }),
          ...e,
        }),
        c = n.getSession && n.getSession();
      return (
        c && c.status === "ok" && He(c, { status: "exited" }),
        this.endSession(),
        n.setSession(a),
        a
      );
    }
    shouldSendDefaultPii() {
      let e = this.getClient(),
        n = e && e.getOptions();
      return Boolean(n && n.sendDefaultPii);
    }
    _sendSessionUpdate() {
      let { scope: e, client: n } = this.getStackTop(),
        r = e.getSession();
      r && n && n.captureSession && n.captureSession(r);
    }
    _withClient(e) {
      let { scope: n, client: r } = this.getStackTop();
      r && e(r, n);
    }
    _callExtensionMethod(e, ...n) {
      let i = yt().__SENTRY__;
      if (i && i.extensions && typeof i.extensions[e] == "function")
        return i.extensions[e].apply(this, n);
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(`Extension method ${e} couldn't be found, doing nothing.`);
    }
  };
function yt() {
  return (N.__SENTRY__ = N.__SENTRY__ || { extensions: {}, hub: void 0 }), N;
}
function mr(t) {
  let e = yt(),
    n = xn(e);
  return Pi(e, t), n;
}
function S() {
  let t = yt();
  if (t.__SENTRY__ && t.__SENTRY__.acs) {
    let e = t.__SENTRY__.acs.getCurrentHub();
    if (e) return e;
  }
  return Mu(t);
}
function Mu(t = yt()) {
  return (!Au(t) || xn(t).isOlderThan(Lo)) && Pi(t, new Lt()), xn(t);
}
function Au(t) {
  return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
}
function xn(t) {
  return pn("hub", () => new Lt(), t);
}
function Pi(t, e) {
  if (!t) return !1;
  let n = (t.__SENTRY__ = t.__SENTRY__ || {});
  return (n.hub = e), !0;
}
function xe(t) {
  return (t || S()).getScope().getTransaction();
}
var Uo = !1;
function Po() {
  Uo || ((Uo = !0), F("error", Fi), F("unhandledrejection", Fi));
}
function Fi() {
  let t = xe();
  if (t) {
    let e = "internal_error";
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.log(`[Tracing] Transaction: ${e} -> Global error occured`),
      t.setStatus(e);
  }
}
Fi.tag = "sentry_tracingErrorCallback";
var Ut = class {
    constructor(e = 1e3) {
      (this._maxlen = e), (this.spans = []);
    }
    add(e) {
      this.spans.length > this._maxlen
        ? (e.spanRecorder = void 0)
        : this.spans.push(e);
    }
  },
  Pt = class {
    constructor(e = {}) {
      (this.traceId = e.traceId || P()),
        (this.spanId = e.spanId || P().substring(16)),
        (this.startTimestamp = e.startTimestamp || we()),
        (this.tags = e.tags || {}),
        (this.data = e.data || {}),
        (this.instrumenter = e.instrumenter || "sentry"),
        (this.origin = e.origin || "manual"),
        e.parentSpanId && (this.parentSpanId = e.parentSpanId),
        "sampled" in e && (this.sampled = e.sampled),
        e.op && (this.op = e.op),
        e.description && (this.description = e.description),
        e.name && (this.description = e.name),
        e.status && (this.status = e.status),
        e.endTimestamp && (this.endTimestamp = e.endTimestamp);
    }
    get name() {
      return this.description || "";
    }
    set name(e) {
      this.setName(e);
    }
    startChild(e) {
      let n = new Pt({
        ...e,
        parentSpanId: this.spanId,
        sampled: this.sampled,
        traceId: this.traceId,
      });
      if (
        ((n.spanRecorder = this.spanRecorder),
        n.spanRecorder && n.spanRecorder.add(n),
        (n.transaction = this.transaction),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && n.transaction)
      ) {
        let r = (e && e.op) || "< unknown op >",
          i = n.transaction.name || "< unknown name >",
          s = n.transaction.spanId,
          o = `[Tracing] Starting '${r}' span on transaction '${i}' (${s}).`;
        (n.transaction.metadata.spanMetadata[n.spanId] = { logMessage: o }),
          p.log(o);
      }
      return n;
    }
    setTag(e, n) {
      return (this.tags = { ...this.tags, [e]: n }), this;
    }
    setData(e, n) {
      return (this.data = { ...this.data, [e]: n }), this;
    }
    setStatus(e) {
      return (this.status = e), this;
    }
    setHttpStatus(e) {
      this.setTag("http.status_code", String(e)),
        this.setData("http.response.status_code", e);
      let n = Fo(e);
      return n !== "unknown_error" && this.setStatus(n), this;
    }
    setName(e) {
      this.description = e;
    }
    isSuccess() {
      return this.status === "ok";
    }
    finish(e) {
      if (
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        this.transaction &&
        this.transaction.spanId !== this.spanId
      ) {
        let { logMessage: n } =
          this.transaction.metadata.spanMetadata[this.spanId];
        n && p.log(n.replace("Starting", "Finishing"));
      }
      this.endTimestamp = typeof e == "number" ? e : we();
    }
    toTraceparent() {
      return Ct(this.traceId, this.spanId, this.sampled);
    }
    toContext() {
      return ne({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId,
      });
    }
    updateWithContext(e) {
      return (
        (this.data = e.data || {}),
        (this.description = e.description),
        (this.endTimestamp = e.endTimestamp),
        (this.op = e.op),
        (this.parentSpanId = e.parentSpanId),
        (this.sampled = e.sampled),
        (this.spanId = e.spanId || this.spanId),
        (this.startTimestamp = e.startTimestamp || this.startTimestamp),
        (this.status = e.status),
        (this.tags = e.tags || {}),
        (this.traceId = e.traceId || this.traceId),
        this
      );
    }
    getTraceContext() {
      return ne({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        trace_id: this.traceId,
        origin: this.origin,
      });
    }
    toJSON() {
      return ne({
        data: Object.keys(this.data).length > 0 ? this.data : void 0,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this.endTimestamp,
        trace_id: this.traceId,
        origin: this.origin,
      });
    }
  };
function Fo(t) {
  if (t < 400 && t >= 100) return "ok";
  if (t >= 400 && t < 500)
    switch (t) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (t >= 500 && t < 600)
    switch (t) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
function Ze(t, e, n) {
  let r = e.getOptions(),
    { publicKey: i } = e.getDsn() || {},
    { segment: s } = (n && n.getUser()) || {},
    o = ne({
      environment: r.environment || Mt,
      release: r.release,
      user_segment: s,
      public_key: i,
      trace_id: t,
    });
  return e.emit && e.emit("createDsc", o), o;
}
var Ft = class extends Pt {
  constructor(e, n) {
    super(e),
      delete this.description,
      (this._measurements = {}),
      (this._contexts = {}),
      (this._hub = n || S()),
      (this._name = e.name || ""),
      (this.metadata = { source: "custom", ...e.metadata, spanMetadata: {} }),
      (this._trimEnd = e.trimEnd),
      (this.transaction = this);
    let r = this.metadata.dynamicSamplingContext;
    r && (this._frozenDynamicSamplingContext = { ...r });
  }
  get name() {
    return this._name;
  }
  set name(e) {
    this.setName(e);
  }
  setName(e, n = "custom") {
    (this._name = e), (this.metadata.source = n);
  }
  initSpanRecorder(e = 1e3) {
    this.spanRecorder || (this.spanRecorder = new Ut(e)),
      this.spanRecorder.add(this);
  }
  setContext(e, n) {
    n === null ? delete this._contexts[e] : (this._contexts[e] = n);
  }
  setMeasurement(e, n, r = "") {
    this._measurements[e] = { value: n, unit: r };
  }
  setMetadata(e) {
    this.metadata = { ...this.metadata, ...e };
  }
  finish(e) {
    let n = this._finishTransaction(e);
    if (!!n) return this._hub.captureEvent(n);
  }
  toContext() {
    let e = super.toContext();
    return ne({ ...e, name: this.name, trimEnd: this._trimEnd });
  }
  updateWithContext(e) {
    return (
      super.updateWithContext(e),
      (this.name = e.name || ""),
      (this._trimEnd = e.trimEnd),
      this
    );
  }
  getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext)
      return this._frozenDynamicSamplingContext;
    let e = this._hub || S(),
      n = e.getClient();
    if (!n) return {};
    let r = e.getScope(),
      i = Ze(this.traceId, n, r),
      s = this.metadata.sampleRate;
    s !== void 0 && (i.sample_rate = `${s}`);
    let o = this.metadata.source;
    return (
      o && o !== "url" && (i.transaction = this.name),
      this.sampled !== void 0 && (i.sampled = String(this.sampled)),
      i
    );
  }
  setHub(e) {
    this._hub = e;
  }
  _finishTransaction(e) {
    if (this.endTimestamp !== void 0) return;
    this.name ||
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`."
        ),
      (this.name = "<unlabeled transaction>")),
      super.finish(e);
    let n = this._hub.getClient();
    if (
      (n && n.emit && n.emit("finishTransaction", this), this.sampled !== !0)
    ) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log(
          "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
        ),
        n && n.recordDroppedEvent("sample_rate", "transaction");
      return;
    }
    let r = this.spanRecorder
      ? this.spanRecorder.spans.filter((a) => a !== this && a.endTimestamp)
      : [];
    this._trimEnd &&
      r.length > 0 &&
      (this.endTimestamp = r.reduce((a, c) =>
        a.endTimestamp && c.endTimestamp
          ? a.endTimestamp > c.endTimestamp
            ? a
            : c
          : a
      ).endTimestamp);
    let i = this.metadata,
      s = {
        contexts: { ...this._contexts, trace: this.getTraceContext() },
        spans: r,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...i,
          dynamicSamplingContext: this.getDynamicSamplingContext(),
        },
        ...(i.source && { transaction_info: { source: i.source } }),
      };
    return (
      Object.keys(this._measurements).length > 0 &&
        ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(
            "[Measurements] Adding measurements to transaction",
            JSON.stringify(this._measurements, void 0, 2)
          ),
        (s.measurements = this._measurements)),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
      s
    );
  }
};
var Ht = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
  Bu = "finishReason",
  Gt = [
    "heartbeatFailed",
    "idleTimeout",
    "documentHidden",
    "finalTimeout",
    "externalFinish",
    "cancelled",
  ],
  Gi = class extends Ut {
    constructor(e, n, r, i) {
      super(i),
        (this._pushActivity = e),
        (this._popActivity = n),
        (this.transactionSpanId = r);
    }
    add(e) {
      e.spanId !== this.transactionSpanId &&
        ((e.finish = (n) => {
          (e.endTimestamp = typeof n == "number" ? n : we()),
            this._popActivity(e.spanId);
        }),
        e.endTimestamp === void 0 && this._pushActivity(e.spanId)),
        super.add(e);
    }
  },
  Nn = class extends Ft {
    constructor(
      e,
      n,
      r = Ht.idleTimeout,
      i = Ht.finalTimeout,
      s = Ht.heartbeatInterval,
      o = !1
    ) {
      super(e, n),
        (this._idleHub = n),
        (this._idleTimeout = r),
        (this._finalTimeout = i),
        (this._heartbeatInterval = s),
        (this._onScope = o),
        (this.activities = {}),
        (this._heartbeatCounter = 0),
        (this._finished = !1),
        (this._idleTimeoutCanceledPermanently = !1),
        (this._beforeFinishCallbacks = []),
        (this._finishReason = Gt[4]),
        o &&
          ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
          n.configureScope((a) => a.setSpan(this))),
        this._restartIdleTimeout(),
        setTimeout(() => {
          this._finished ||
            (this.setStatus("deadline_exceeded"),
            (this._finishReason = Gt[3]),
            this.finish());
        }, this._finalTimeout);
    }
    finish(e = we()) {
      if (
        ((this._finished = !0),
        (this.activities = {}),
        this.op === "ui.action.click" && this.setTag(Bu, this._finishReason),
        this.spanRecorder)
      ) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(
            "[Tracing] finishing IdleTransaction",
            new Date(e * 1e3).toISOString(),
            this.op
          );
        for (let n of this._beforeFinishCallbacks) n(this, e);
        (this.spanRecorder.spans = this.spanRecorder.spans.filter((n) => {
          if (n.spanId === this.spanId) return !0;
          n.endTimestamp ||
            ((n.endTimestamp = e),
            n.setStatus("cancelled"),
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.log(
                "[Tracing] cancelling span since transaction ended early",
                JSON.stringify(n, void 0, 2)
              ));
          let r = n.startTimestamp < e,
            i = (this._finalTimeout + this._idleTimeout) / 1e3,
            s = n.endTimestamp - this.startTimestamp < i;
          if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
            let o = JSON.stringify(n, void 0, 2);
            r
              ? s ||
                p.log(
                  "[Tracing] discarding Span since it finished after Transaction final timeout",
                  o
                )
              : p.log(
                  "[Tracing] discarding Span since it happened after Transaction was finished",
                  o
                );
          }
          return r && s;
        })),
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.log("[Tracing] flushing IdleTransaction");
      } else
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log("[Tracing] No active IdleTransaction");
      if (this._onScope) {
        let n = this._idleHub.getScope();
        n.getTransaction() === this && n.setSpan(void 0);
      }
      return super.finish(e);
    }
    registerBeforeFinishCallback(e) {
      this._beforeFinishCallbacks.push(e);
    }
    initSpanRecorder(e) {
      if (!this.spanRecorder) {
        let n = (i) => {
            this._finished || this._pushActivity(i);
          },
          r = (i) => {
            this._finished || this._popActivity(i);
          };
        (this.spanRecorder = new Gi(n, r, this.spanId, e)),
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.log("Starting heartbeat"),
          this._pingHeartbeat();
      }
      this.spanRecorder.add(this);
    }
    cancelIdleTimeout(
      e,
      { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 }
    ) {
      (this._idleTimeoutCanceledPermanently = n === !1),
        this._idleTimeoutID &&
          (clearTimeout(this._idleTimeoutID),
          (this._idleTimeoutID = void 0),
          Object.keys(this.activities).length === 0 &&
            this._idleTimeoutCanceledPermanently &&
            ((this._finishReason = Gt[5]), this.finish(e)));
    }
    setFinishReason(e) {
      this._finishReason = e;
    }
    _restartIdleTimeout(e) {
      this.cancelIdleTimeout(),
        (this._idleTimeoutID = setTimeout(() => {
          !this._finished &&
            Object.keys(this.activities).length === 0 &&
            ((this._finishReason = Gt[1]), this.finish(e));
        }, this._idleTimeout));
    }
    _pushActivity(e) {
      this.cancelIdleTimeout(void 0, {
        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
      }),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(`[Tracing] pushActivity: ${e}`),
        (this.activities[e] = !0),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length
          );
    }
    _popActivity(e) {
      if (
        (this.activities[e] &&
          ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.log(`[Tracing] popActivity ${e}`),
          delete this.activities[e],
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.log(
              "[Tracing] new activities count",
              Object.keys(this.activities).length
            )),
        Object.keys(this.activities).length === 0)
      ) {
        let n = we();
        this._idleTimeoutCanceledPermanently
          ? ((this._finishReason = Gt[5]), this.finish(n))
          : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
      }
    }
    _beat() {
      if (this._finished) return;
      let e = Object.keys(this.activities).join("");
      e === this._prevHeartbeatString
        ? this._heartbeatCounter++
        : (this._heartbeatCounter = 1),
        (this._prevHeartbeatString = e),
        this._heartbeatCounter >= 3
          ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.log(
                "[Tracing] Transaction finished because of no change for 3 heart beats"
              ),
            this.setStatus("deadline_exceeded"),
            (this._finishReason = Gt[0]),
            this.finish())
          : this._pingHeartbeat();
    }
    _pingHeartbeat() {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log(
          `pinging Heartbeat -> current counter: ${this._heartbeatCounter}`
        ),
        setTimeout(() => {
          this._beat();
        }, this._heartbeatInterval);
    }
  };
function Yt(t) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  let e = S().getClient(),
    n = t || (e && e.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
function Hi(t, e, n) {
  if (!Yt(e)) return (t.sampled = !1), t;
  if (t.sampled !== void 0)
    return t.setMetadata({ sampleRate: Number(t.sampled) }), t;
  let r;
  return (
    typeof e.tracesSampler == "function"
      ? ((r = e.tracesSampler(n)), t.setMetadata({ sampleRate: Number(r) }))
      : n.parentSampled !== void 0
      ? (r = n.parentSampled)
      : typeof e.tracesSampleRate < "u"
      ? ((r = e.tracesSampleRate), t.setMetadata({ sampleRate: Number(r) }))
      : ((r = 1), t.setMetadata({ sampleRate: r })),
    Lu(r)
      ? r
        ? ((t.sampled = Math.random() < r),
          t.sampled
            ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                p.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),
              t)
            : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                p.log(
                  `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
                    r
                  )})`
                ),
              t))
        : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.log(
              `[Tracing] Discarding transaction because ${
                typeof e.tracesSampler == "function"
                  ? "tracesSampler returned 0 or false"
                  : "a negative sampling decision was inherited or tracesSampleRate is set to 0"
              }`
            ),
          (t.sampled = !1),
          t)
      : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.warn(
            "[Tracing] Discarding transaction because of invalid sample rate."
          ),
        (t.sampled = !1),
        t)
  );
}
function Lu(t) {
  return dn(t) || !(typeof t == "number" || typeof t == "boolean")
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
            t
          )} of type ${JSON.stringify(typeof t)}.`
        ),
      !1)
    : t < 0 || t > 1
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`
        ),
      !1)
    : !0;
}
function Uu() {
  let e = this.getScope().getSpan();
  return e ? { "sentry-trace": e.toTraceparent() } : {};
}
function Pu(t, e) {
  let n = this.getClient(),
    r = (n && n.getOptions()) || {},
    i = r.instrumenter || "sentry",
    s = t.instrumenter || "sentry";
  i !== s &&
    ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${i}\` instrumenter.
The transaction will not be sampled. Please use the ${i} instrumentation to start transactions.`),
    (t.sampled = !1));
  let o = new Ft(t, this);
  return (
    (o = Hi(o, r, {
      parentSampled: t.parentSampled,
      transactionContext: t,
      ...e,
    })),
    o.sampled && o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
    n && n.emit && n.emit("startTransaction", o),
    o
  );
}
function _r(t, e, n, r, i, s, o) {
  let a = t.getClient(),
    c = (a && a.getOptions()) || {},
    u = new Nn(e, t, n, r, o, i);
  return (
    (u = Hi(u, c, {
      parentSampled: e.parentSampled,
      transactionContext: e,
      ...s,
    })),
    u.sampled && u.initSpanRecorder(c._experiments && c._experiments.maxSpans),
    a && a.emit && a.emit("startTransaction", u),
    u
  );
}
function gr() {
  let t = yt();
  !t.__SENTRY__ ||
    ((t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}),
    t.__SENTRY__.extensions.startTransaction ||
      (t.__SENTRY__.extensions.startTransaction = Pu),
    t.__SENTRY__.extensions.traceHeaders ||
      (t.__SENTRY__.extensions.traceHeaders = Uu),
    Po());
}
function Fu(t, e) {
  return (
    e &&
      ((t.sdk = t.sdk || {}),
      (t.sdk.name = t.sdk.name || e.name),
      (t.sdk.version = t.sdk.version || e.version),
      (t.sdk.integrations = [
        ...(t.sdk.integrations || []),
        ...(e.integrations || []),
      ]),
      (t.sdk.packages = [...(t.sdk.packages || []), ...(e.packages || [])])),
    t
  );
}
function Go(t, e, n, r) {
  let i = Ot(n),
    s = {
      sent_at: new Date().toISOString(),
      ...(i && { sdk: i }),
      ...(!!r && e && { dsn: ve(e) }),
    },
    o =
      "aggregates" in t
        ? [{ type: "sessions" }, t]
        : [{ type: "session" }, t.toJSON()];
  return ye(s, [o]);
}
function Ho(t, e, n, r) {
  let i = Ot(n),
    s = t.type && t.type !== "replay_event" ? t.type : "event";
  Fu(t, n && n.sdk);
  let o = vn(t, i, r, e);
  return delete t.sdkProcessingMetadata, ye(o, [[{ type: s }, t]]);
}
function Ye(t, e) {
  return S().captureException(t, { captureContext: e });
}
function Er(t) {
  S().configureScope(t);
}
function yr(t, e) {
  S().setContext(t, e);
}
function $t(t) {
  S().withScope(t);
}
var Gu = "7";
function Yo(t) {
  let e = t.protocol ? `${t.protocol}:` : "",
    n = t.port ? `:${t.port}` : "";
  return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
}
function Hu(t) {
  return `${Yo(t)}${t.projectId}/envelope/`;
}
function Yu(t, e) {
  return fi({
    sentry_key: t.publicKey,
    sentry_version: Gu,
    ...(e && { sentry_client: `${e.name}/${e.version}` }),
  });
}
function Yi(t, e = {}) {
  let n = typeof e == "string" ? e : e.tunnel,
    r = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
  return n || `${Hu(t)}?${Yu(t, r)}`;
}
function $i(t, e) {
  let n = mn(t);
  if (!n) return "";
  let r = `${Yo(n)}embed/error-page/`,
    i = `dsn=${ve(n)}`;
  for (let s in e)
    if (s !== "dsn")
      if (s === "user") {
        let o = e.user;
        if (!o) continue;
        o.name && (i += `&name=${encodeURIComponent(o.name)}`),
          o.email && (i += `&email=${encodeURIComponent(o.email)}`);
      } else i += `&${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`;
  return `${r}?${i}`;
}
var $o = [];
function $u(t) {
  let e = {};
  return (
    t.forEach((n) => {
      let { name: r } = n,
        i = e[r];
      (i && !i.isDefaultInstance && n.isDefaultInstance) || (e[r] = n);
    }),
    Object.keys(e).map((n) => e[n])
  );
}
function ji(t) {
  let e = t.defaultIntegrations || [],
    n = t.integrations;
  e.forEach((o) => {
    o.isDefaultInstance = !0;
  });
  let r;
  Array.isArray(n)
    ? (r = [...e, ...n])
    : typeof n == "function"
    ? (r = _n(n(e)))
    : (r = e);
  let i = $u(r),
    s = ju(i, (o) => o.name === "Debug");
  if (s !== -1) {
    let [o] = i.splice(s, 1);
    i.push(o);
  }
  return i;
}
function jo(t, e) {
  let n = {};
  return (
    e.forEach((r) => {
      r && Wi(t, r, n);
    }),
    n
  );
}
function Wi(t, e, n) {
  if (
    ((n[e.name] = e),
    $o.indexOf(e.name) === -1 && (e.setupOnce(Bt, S), $o.push(e.name)),
    t.on && typeof e.preprocessEvent == "function")
  ) {
    let r = e.preprocessEvent.bind(e);
    t.on("preprocessEvent", (i, s) => r(i, s, t));
  }
  if (t.addEventProcessor && typeof e.processEvent == "function") {
    let r = e.processEvent.bind(e),
      i = Object.assign((s, o) => r(s, o, t), { id: e.name });
    t.addEventProcessor(i);
  }
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    p.log(`Integration installed: ${e.name}`);
}
function ju(t, e) {
  for (let n = 0; n < t.length; n++) if (e(t[n]) === !0) return n;
  return -1;
}
function Dn(t, e, n, r, i) {
  let { normalizeDepth: s = 3, normalizeMaxBreadth: o = 1e3 } = t,
    a = {
      ...e,
      event_id: e.event_id || n.event_id || P(),
      timestamp: e.timestamp || Ge(),
    },
    c = n.integrations || t.integrations.map((f) => f.name);
  Wu(a, t), Vu(a, c), e.type === void 0 && zu(a, t.stackParser);
  let u = r;
  n.captureContext && (u = Se.clone(u).update(n.captureContext));
  let d = _e(a),
    l = i && i.getEventProcessors ? i.getEventProcessors() : [];
  if (u) {
    if (u.getAttachments) {
      let f = [...(n.attachments || []), ...u.getAttachments()];
      f.length && (n.attachments = f);
    }
    d = u.applyToEvent(a, n, l);
  } else d = At([...l, ...wn()], a, n);
  return d.then(
    (f) => (f && qu(f), typeof s == "number" && s > 0 ? Ku(f, s, o) : f)
  );
}
function Wu(t, e) {
  let { environment: n, release: r, dist: i, maxValueLength: s = 250 } = e;
  "environment" in t || (t.environment = "environment" in e ? n : Mt),
    t.release === void 0 && r !== void 0 && (t.release = r),
    t.dist === void 0 && i !== void 0 && (t.dist = i),
    t.message && (t.message = Me(t.message, s));
  let o = t.exception && t.exception.values && t.exception.values[0];
  o && o.value && (o.value = Me(o.value, s));
  let a = t.request;
  a && a.url && (a.url = Me(a.url, s));
}
var Wo = new WeakMap();
function zu(t, e) {
  let n = N._sentryDebugIds;
  if (!n) return;
  let r,
    i = Wo.get(e);
  i ? (r = i) : ((r = new Map()), Wo.set(e, r));
  let s = Object.keys(n).reduce((o, a) => {
    let c,
      u = r.get(a);
    u ? (c = u) : ((c = e(a)), r.set(a, c));
    for (let d = c.length - 1; d >= 0; d--) {
      let l = c[d];
      if (l.filename) {
        o[l.filename] = n[a];
        break;
      }
    }
    return o;
  }, {});
  try {
    t.exception.values.forEach((o) => {
      o.stacktrace.frames.forEach((a) => {
        a.filename && (a.debug_id = s[a.filename]);
      });
    });
  } catch {}
}
function qu(t) {
  let e = {};
  try {
    t.exception.values.forEach((r) => {
      r.stacktrace.frames.forEach((i) => {
        i.debug_id &&
          (i.abs_path
            ? (e[i.abs_path] = i.debug_id)
            : i.filename && (e[i.filename] = i.debug_id),
          delete i.debug_id);
      });
    });
  } catch {}
  if (Object.keys(e).length === 0) return;
  (t.debug_meta = t.debug_meta || {}),
    (t.debug_meta.images = t.debug_meta.images || []);
  let n = t.debug_meta.images;
  Object.keys(e).forEach((r) => {
    n.push({ type: "sourcemap", code_file: r, debug_id: e[r] });
  });
}
function Vu(t, e) {
  e.length > 0 &&
    ((t.sdk = t.sdk || {}),
    (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
}
function Ku(t, e, n) {
  if (!t) return null;
  let r = {
    ...t,
    ...(t.breadcrumbs && {
      breadcrumbs: t.breadcrumbs.map((i) => ({
        ...i,
        ...(i.data && { data: fe(i.data, e, n) }),
      })),
    }),
    ...(t.user && { user: fe(t.user, e, n) }),
    ...(t.contexts && { contexts: fe(t.contexts, e, n) }),
    ...(t.extra && { extra: fe(t.extra, e, n) }),
  };
  return (
    t.contexts &&
      t.contexts.trace &&
      r.contexts &&
      ((r.contexts.trace = t.contexts.trace),
      t.contexts.trace.data &&
        (r.contexts.trace.data = fe(t.contexts.trace.data, e, n))),
    t.spans &&
      (r.spans = t.spans.map(
        (i) => (i.data && (i.data = fe(i.data, e, n)), i)
      )),
    r
  );
}
var zo = "Not capturing exception because it's already been captured.",
  Cn = class {
    constructor(e) {
      if (
        ((this._options = e),
        (this._integrations = {}),
        (this._integrationsInitialized = !1),
        (this._numProcessing = 0),
        (this._outcomes = {}),
        (this._hooks = {}),
        (this._eventProcessors = []),
        e.dsn
          ? (this._dsn = mn(e.dsn))
          : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.warn("No DSN provided, client will not send events."),
        this._dsn)
      ) {
        let n = Yi(this._dsn, e);
        this._transport = e.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...e.transportOptions,
          url: n,
        });
      }
    }
    captureException(e, n, r) {
      if (rr(e)) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && p.log(zo);
        return;
      }
      let i = n && n.event_id;
      return (
        this._process(
          this.eventFromException(e, n)
            .then((s) => this._captureEvent(s, n, r))
            .then((s) => {
              i = s;
            })
        ),
        i
      );
    }
    captureMessage(e, n, r, i) {
      let s = r && r.event_id,
        o = xt(e)
          ? this.eventFromMessage(String(e), n, r)
          : this.eventFromException(e, r);
      return (
        this._process(
          o
            .then((a) => this._captureEvent(a, r, i))
            .then((a) => {
              s = a;
            })
        ),
        s
      );
    }
    captureEvent(e, n, r) {
      if (n && n.originalException && rr(n.originalException)) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && p.log(zo);
        return;
      }
      let i = n && n.event_id;
      return (
        this._process(
          this._captureEvent(e, n, r).then((s) => {
            i = s;
          })
        ),
        i
      );
    }
    captureSession(e) {
      typeof e.release != "string"
        ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.warn("Discarded session because of missing or non-string release")
        : (this.sendSession(e), He(e, { init: !1 }));
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(e) {
      let n = this._transport;
      return n
        ? this._isClientDoneProcessing(e).then((r) =>
            n.flush(e).then((i) => r && i)
          )
        : _e(!0);
    }
    close(e) {
      return this.flush(e).then((n) => ((this.getOptions().enabled = !1), n));
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(e) {
      this._eventProcessors.push(e);
    }
    setupIntegrations(e) {
      ((e && !this._integrationsInitialized) ||
        (this._isEnabled() && !this._integrationsInitialized)) &&
        ((this._integrations = jo(this, this._options.integrations)),
        (this._integrationsInitialized = !0));
    }
    getIntegrationById(e) {
      return this._integrations[e];
    }
    getIntegration(e) {
      try {
        return this._integrations[e.id] || null;
      } catch {
        return (
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.warn(
              `Cannot retrieve integration ${e.id} from the current Client`
            ),
          null
        );
      }
    }
    addIntegration(e) {
      Wi(this, e, this._integrations);
    }
    sendEvent(e, n = {}) {
      this.emit("beforeSendEvent", e, n);
      let r = Ho(e, this._dsn, this._options._metadata, this._options.tunnel);
      for (let s of n.attachments || [])
        r = Mi(
          r,
          Bi(
            s,
            this._options.transportOptions &&
              this._options.transportOptions.textEncoder
          )
        );
      let i = this._sendEnvelope(r);
      i && i.then((s) => this.emit("afterSendEvent", e, s), null);
    }
    sendSession(e) {
      let n = Go(e, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(n);
    }
    recordDroppedEvent(e, n, r) {
      if (this._options.sendClientReports) {
        let i = `${e}:${n}`;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(`Adding outcome: "${i}"`),
          (this._outcomes[i] = this._outcomes[i] + 1 || 1);
      }
    }
    on(e, n) {
      this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(n);
    }
    emit(e, ...n) {
      this._hooks[e] && this._hooks[e].forEach((r) => r(...n));
    }
    _updateSessionFromEvent(e, n) {
      let r = !1,
        i = !1,
        s = n.exception && n.exception.values;
      if (s) {
        i = !0;
        for (let c of s) {
          let u = c.mechanism;
          if (u && u.handled === !1) {
            r = !0;
            break;
          }
        }
      }
      let o = e.status === "ok";
      ((o && e.errors === 0) || (o && r)) &&
        (He(e, {
          ...(r && { status: "crashed" }),
          errors: e.errors || Number(i || r),
        }),
        this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
      return new X((n) => {
        let r = 0,
          i = 1,
          s = setInterval(() => {
            this._numProcessing == 0
              ? (clearInterval(s), n(!0))
              : ((r += i), e && r >= e && (clearInterval(s), n(!1)));
          }, i);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(e, n, r) {
      let i = this.getOptions(),
        s = Object.keys(this._integrations);
      return (
        !n.integrations && s.length > 0 && (n.integrations = s),
        this.emit("preprocessEvent", e, n),
        Dn(i, e, n, r, this).then((o) => {
          if (o === null) return o;
          let { propagationContext: a } = o.sdkProcessingMetadata || {};
          if (!(o.contexts && o.contexts.trace) && a) {
            let { traceId: u, spanId: d, parentSpanId: l, dsc: f } = a;
            o.contexts = {
              trace: { trace_id: u, span_id: d, parent_span_id: l },
              ...o.contexts,
            };
            let h = f || Ze(u, this, r);
            o.sdkProcessingMetadata = {
              dynamicSamplingContext: h,
              ...o.sdkProcessingMetadata,
            };
          }
          return o;
        })
      );
    }
    _captureEvent(e, n = {}, r) {
      return this._processEvent(e, n, r).then(
        (i) => i.event_id,
        (i) => {
          if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
            let s = i;
            s.logLevel === "log" ? p.log(s.message) : p.warn(s);
          }
        }
      );
    }
    _processEvent(e, n, r) {
      let i = this.getOptions(),
        { sampleRate: s } = i,
        o = Vo(e),
        a = qo(e),
        c = e.type || "error",
        u = `before send for type \`${c}\``;
      if (a && typeof s == "number" && Math.random() > s)
        return (
          this.recordDroppedEvent("sample_rate", "error", e),
          Et(
            new re(
              `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
              "log"
            )
          )
        );
      let d = c === "replay_event" ? "replay" : c;
      return this._prepareEvent(e, n, r)
        .then((l) => {
          if (l === null)
            throw (
              (this.recordDroppedEvent("event_processor", d, e),
              new re(
                "An event processor returned `null`, will not send event.",
                "log"
              ))
            );
          if (n.data && n.data.__sentry__ === !0) return l;
          let h = Ju(i, l, n);
          return Xu(h, u);
        })
        .then((l) => {
          if (l === null)
            throw (
              (this.recordDroppedEvent("before_send", d, e),
              new re(`${u} returned \`null\`, will not send event.`, "log"))
            );
          let f = r && r.getSession();
          !o && f && this._updateSessionFromEvent(f, l);
          let h = l.transaction_info;
          if (o && h && l.transaction !== e.transaction) {
            let m = "custom";
            l.transaction_info = { ...h, source: m };
          }
          return this.sendEvent(l, n), l;
        })
        .then(null, (l) => {
          throw l instanceof re
            ? l
            : (this.captureException(l, {
                data: { __sentry__: !0 },
                originalException: l,
              }),
              new re(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${l}`));
        });
    }
    _process(e) {
      this._numProcessing++,
        e.then(
          (n) => (this._numProcessing--, n),
          (n) => (this._numProcessing--, n)
        );
    }
    _sendEnvelope(e) {
      if (
        (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport)
      )
        return this._transport.send(e).then(null, (n) => {
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.error("Error while sending event:", n);
        });
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.error("Transport disabled");
    }
    _clearOutcomes() {
      let e = this._outcomes;
      return (
        (this._outcomes = {}),
        Object.keys(e).map((n) => {
          let [r, i] = n.split(":");
          return { reason: r, category: i, quantity: e[n] };
        })
      );
    }
  };
function Xu(t, e) {
  let n = `${e} must return \`null\` or a valid event.`;
  if (mt(t))
    return t.then(
      (r) => {
        if (!Te(r) && r !== null) throw new re(n);
        return r;
      },
      (r) => {
        throw new re(`${e} rejected with ${r}`);
      }
    );
  if (!Te(t) && t !== null) throw new re(n);
  return t;
}
function Ju(t, e, n) {
  let { beforeSend: r, beforeSendTransaction: i } = t;
  return qo(e) && r ? r(e, n) : Vo(e) && i ? i(e, n) : e;
}
function qo(t) {
  return t.type === void 0;
}
function Vo(t) {
  return t.type === "transaction";
}
function zi(t, e) {
  e.debug === !0 &&
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__
      ? p.enable()
      : console.warn(
          "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
        ));
  let n = S();
  n.getScope().update(e.initialScope);
  let i = new t(e);
  n.bindClient(i);
}
var Qu = 30;
function jt(t, e, n = Ri(t.bufferSize || Qu)) {
  let r = {},
    i = (o) => n.drain(o);
  function s(o) {
    let a = [];
    if (
      (pr(o, (l, f) => {
        let h = hr(f);
        if (Rn(r, h)) {
          let m = Ko(l, f);
          t.recordDroppedEvent("ratelimit_backoff", h, m);
        } else a.push(l);
      }),
      a.length === 0)
    )
      return _e();
    let c = ye(o[0], a),
      u = (l) => {
        pr(c, (f, h) => {
          let m = Ko(f, h);
          t.recordDroppedEvent(l, hr(h), m);
        });
      },
      d = () =>
        e({ body: Ai(c, t.textEncoder) }).then(
          (l) => (
            l.statusCode !== void 0 &&
              (l.statusCode < 200 || l.statusCode >= 300) &&
              (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.warn(
                `Sentry responded with status code ${l.statusCode} to sent event.`
              ),
            (r = In(r, l)),
            l
          ),
          (l) => {
            throw (u("network_error"), l);
          }
        );
    return n.add(d).then(
      (l) => l,
      (l) => {
        if (l instanceof re)
          return (
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.error("Skipped sending event because buffer is full."),
            u("queue_overflow"),
            _e()
          );
        throw l;
      }
    );
  }
  return (s.__sentry__baseTransport__ = !0), { send: s, flush: i };
}
function Ko(t, e) {
  if (!(e !== "event" && e !== "transaction"))
    return Array.isArray(t) ? t[1] : void 0;
}
var Ne = "7.80.0";
var Tt = {};
Qs(Tt, {
  FunctionToString: () => et,
  InboundFilters: () => tt,
  LinkedErrors: () => St,
});
var Xo,
  et = class {
    static __initStatic() {
      this.id = "FunctionToString";
    }
    constructor() {
      this.name = et.id;
    }
    setupOnce() {
      Xo = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          let n = _t(this) || this;
          return Xo.apply(n, e);
        };
      } catch {}
    }
  };
et.__initStatic();
var Zu = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
  ed = [
    /^.*\/healthcheck$/,
    /^.*\/healthy$/,
    /^.*\/live$/,
    /^.*\/ready$/,
    /^.*\/heartbeat$/,
    /^.*\/health$/,
    /^.*\/healthz$/,
  ],
  tt = class {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    constructor(e = {}) {
      (this.name = tt.id), (this._options = e);
    }
    setupOnce(e, n) {}
    processEvent(e, n, r) {
      let i = r.getOptions(),
        s = td(this._options, i);
      return nd(e, s) ? null : e;
    }
  };
tt.__initStatic();
function td(t = {}, e = {}) {
  return {
    allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
    denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
    ignoreErrors: [
      ...(t.ignoreErrors || []),
      ...(e.ignoreErrors || []),
      ...(t.disableErrorDefaults ? [] : Zu),
    ],
    ignoreTransactions: [
      ...(t.ignoreTransactions || []),
      ...(e.ignoreTransactions || []),
      ...(t.disableTransactionDefaults ? [] : ed),
    ],
    ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0,
  };
}
function nd(t, e) {
  return e.ignoreInternal && cd(t)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(`Event dropped due to being internal Sentry Error.
Event: ${Re(t)}`),
      !0)
    : rd(t, e.ignoreErrors)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Re(t)}`),
      !0)
    : id(t, e.ignoreTransactions)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Re(t)}`),
      !0)
    : sd(t, e.denyUrls)
    ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Re(t)}.
Url: ${Sr(t)}`),
      !0)
    : od(t, e.allowUrls)
    ? !1
    : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Re(t)}.
Url: ${Sr(t)}`),
      !0);
}
function rd(t, e) {
  return t.type || !e || !e.length ? !1 : ad(t).some((n) => Ae(n, e));
}
function id(t, e) {
  if (t.type !== "transaction" || !e || !e.length) return !1;
  let n = t.transaction;
  return n ? Ae(n, e) : !1;
}
function sd(t, e) {
  if (!e || !e.length) return !1;
  let n = Sr(t);
  return n ? Ae(n, e) : !1;
}
function od(t, e) {
  if (!e || !e.length) return !0;
  let n = Sr(t);
  return n ? Ae(n, e) : !0;
}
function ad(t) {
  let e = [];
  t.message && e.push(t.message);
  let n;
  try {
    n = t.exception.values[t.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`)),
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      e.length === 0 &&
      p.error(`Could not extract message for event ${Re(t)}`),
    e
  );
}
function cd(t) {
  try {
    return t.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function ud(t = []) {
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function Sr(t) {
  try {
    let e;
    try {
      e = t.exception.values[0].stacktrace.frames;
    } catch {}
    return e ? ud(e) : null;
  } catch {
    return (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.error(`Cannot extract url for event ${Re(t)}`),
      null
    );
  }
}
var dd = "cause",
  ld = 5,
  St = class {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    constructor(e = {}) {
      (this._key = e.key || dd),
        (this._limit = e.limit || ld),
        (this.name = St.id);
    }
    setupOnce() {}
    preprocessEvent(e, n, r) {
      let i = r.getOptions();
      fn(Ui, i.stackParser, i.maxValueLength, this._key, this._limit, e, n);
    }
  };
St.__initStatic();
function qi(t, e) {
  let n = e.getClient(),
    r = n && n.getDsn(),
    i = n && n.getOptions().tunnel;
  return pd(t, r) || fd(t, i);
}
function fd(t, e) {
  return e ? Jo(t) === Jo(e) : !1;
}
function pd(t, e) {
  return e ? t.includes(e.host) : !1;
}
function Jo(t) {
  return t[t.length - 1] === "/" ? t.slice(0, -1) : t;
}
var D = N;
function Qo() {
  D && D.document
    ? D.document.addEventListener("visibilitychange", () => {
        let t = xe();
        if (D.document.hidden && t) {
          let e = "cancelled";
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.log(
              `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`
            ),
            t.status || t.setStatus(e),
            t.setTag("visibilitychange", "document.hidden"),
            t.finish();
        }
      })
    : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document"
      );
}
var Wt = (t, e, n) => {
  let r, i;
  return (s) => {
    e.value >= 0 &&
      (s || n) &&
      ((i = e.value - (r || 0)),
      (i || r === void 0) && ((r = e.value), (e.delta = i), t(e)));
  };
};
var Zo = () =>
  `v3-${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 1e12}`;
var wd = () => {
    let t = D.performance.timing,
      e = D.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: e == 2 ? "back_forward" : e === 1 ? "reload" : "navigate",
      };
    for (let r in t)
      r !== "navigationStart" &&
        r !== "toJSON" &&
        (n[r] = Math.max(t[r] - t.navigationStart, 0));
    return n;
  },
  Tr = () =>
    D.__WEB_VITALS_POLYFILL__
      ? D.performance &&
        ((performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]) ||
          wd())
      : D.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0];
var br = () => {
  let t = Tr();
  return (t && t.activationStart) || 0;
};
var zt = (t, e) => {
  let n = Tr(),
    r = "navigate";
  return (
    n &&
      (D.document.prerendering || br() > 0
        ? (r = "prerender")
        : (r = n.type.replace(/_/g, "-"))),
    {
      name: t,
      value: typeof e > "u" ? -1 : e,
      rating: "good",
      delta: 0,
      entries: [],
      id: Zo(),
      navigationType: r,
    }
  );
};
var nt = (t, e, n) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
      let r = new PerformanceObserver((i) => {
        e(i.getEntries());
      });
      return r.observe(Object.assign({ type: t, buffered: !0 }, n || {})), r;
    }
  } catch {}
};
var rt = (t, e) => {
  let n = (r) => {
    (r.type === "pagehide" || D.document.visibilityState === "hidden") &&
      (t(r),
      e &&
        (removeEventListener("visibilitychange", n, !0),
        removeEventListener("pagehide", n, !0)));
  };
  addEventListener("visibilitychange", n, !0),
    addEventListener("pagehide", n, !0);
};
var ea = (t) => {
  let e = zt("CLS", 0),
    n,
    r = 0,
    i = [],
    s = (a) => {
      a.forEach((c) => {
        if (!c.hadRecentInput) {
          let u = i[0],
            d = i[i.length - 1];
          r &&
          i.length !== 0 &&
          c.startTime - d.startTime < 1e3 &&
          c.startTime - u.startTime < 5e3
            ? ((r += c.value), i.push(c))
            : ((r = c.value), (i = [c])),
            r > e.value && ((e.value = r), (e.entries = i), n && n());
        }
      });
    },
    o = nt("layout-shift", s);
  if (o) {
    n = Wt(t, e);
    let a = () => {
      s(o.takeRecords()), n(!0);
    };
    return rt(a), a;
  }
};
var vr = -1,
  xd = () =>
    D.document.visibilityState === "hidden" && !D.document.prerendering
      ? 0
      : 1 / 0,
  Nd = () => {
    rt(({ timeStamp: t }) => {
      vr = t;
    }, !0);
  },
  qt = () => (
    vr < 0 && ((vr = xd()), Nd()),
    {
      get firstHiddenTime() {
        return vr;
      },
    }
  );
var ta = (t) => {
  let e = qt(),
    n = zt("FID"),
    r,
    i = (a) => {
      a.startTime < e.firstHiddenTime &&
        ((n.value = a.processingStart - a.startTime), n.entries.push(a), r(!0));
    },
    s = (a) => {
      a.forEach(i);
    },
    o = nt("first-input", s);
  (r = Wt(t, n)),
    o &&
      rt(() => {
        s(o.takeRecords()), o.disconnect();
      }, !0);
};
var na = {},
  ra = (t) => {
    let e = qt(),
      n = zt("LCP"),
      r,
      i = (o) => {
        let a = o[o.length - 1];
        if (a) {
          let c = Math.max(a.startTime - br(), 0);
          c < e.firstHiddenTime && ((n.value = c), (n.entries = [a]), r());
        }
      },
      s = nt("largest-contentful-paint", i);
    if (s) {
      r = Wt(t, n);
      let o = () => {
        na[n.id] ||
          (i(s.takeRecords()), s.disconnect(), (na[n.id] = !0), r(!0));
      };
      return (
        ["keydown", "click"].forEach((a) => {
          addEventListener(a, o, { once: !0, capture: !0 });
        }),
        rt(o, !0),
        o
      );
    }
  };
var On = {},
  Rr = {},
  ia,
  sa,
  oa;
function Vi(t) {
  return Xi("cls", t, Dd, ia);
}
function Mn(t) {
  return Xi("lcp", t, Od, oa);
}
function Ki(t) {
  return Xi("fid", t, Cd, sa);
}
function it(t, e) {
  return aa(t, e), Rr[t] || (Md(t), (Rr[t] = !0)), ca(t, e);
}
function Ir(t, e) {
  let n = On[t];
  if (!(!n || !n.length))
    for (let r of n)
      try {
        r(e);
      } catch (i) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.error(
            `Error while triggering instrumentation handler.
Type: ${t}
Name: ${le(r)}
Error:`,
            i
          );
      }
}
function Dd() {
  ea((t) => {
    Ir("cls", { metric: t }), (ia = t);
  });
}
function Cd() {
  ta((t) => {
    Ir("fid", { metric: t }), (sa = t);
  });
}
function Od() {
  ra((t) => {
    Ir("lcp", { metric: t }), (oa = t);
  });
}
function Xi(t, e, n, r) {
  return (
    aa(t, e), Rr[t] || (n(), (Rr[t] = !0)), r && e({ metric: r }), ca(t, e)
  );
}
function Md(t) {
  let e = {};
  t === "event" && (e.durationThreshold = 0),
    nt(
      t,
      (n) => {
        Ir(t, { entries: n });
      },
      e
    );
}
function aa(t, e) {
  (On[t] = On[t] || []), On[t].push(e);
}
function ca(t, e) {
  return () => {
    let n = On[t];
    if (!n) return;
    let r = n.indexOf(e);
    r !== -1 && n.splice(r, 1);
  };
}
function kr(t) {
  return typeof t == "number" && isFinite(t);
}
function bt(t, { startTimestamp: e, ...n }) {
  return (
    e && t.startTimestamp > e && (t.startTimestamp = e),
    t.startChild({ startTimestamp: e, ...n })
  );
}
function Q(t) {
  return t / 1e3;
}
function da() {
  return D && D.addEventListener && D.performance;
}
var ua = 0,
  z = {},
  Be,
  An;
function la() {
  let t = da();
  if (t && ie) {
    t.mark && D.performance.mark("sentry-tracing-init");
    let e = Ld(),
      n = Ad(),
      r = Bd();
    return () => {
      e(), n(), r();
    };
  }
  return () => {};
}
function fa() {
  it("longtask", ({ entries: t }) => {
    for (let e of t) {
      let n = xe();
      if (!n) return;
      let r = Q(ie + e.startTime),
        i = Q(e.duration);
      n.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        origin: "auto.ui.browser.metrics",
        startTimestamp: r,
        endTimestamp: r + i,
      });
    }
  });
}
function pa() {
  it("event", ({ entries: t }) => {
    for (let e of t) {
      let n = xe();
      if (!n) return;
      if (e.name === "click") {
        let r = Q(ie + e.startTime),
          i = Q(e.duration);
        n.startChild({
          description: me(e.target),
          op: `ui.interaction.${e.name}`,
          origin: "auto.ui.browser.metrics",
          startTimestamp: r,
          endTimestamp: r + i,
        });
      }
    }
  });
}
function Ad() {
  return Vi(({ metric: t }) => {
    let e = t.entries.pop();
    !e ||
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log("[Measurements] Adding CLS"),
      (z.cls = { value: t.value, unit: "" }),
      (An = e));
  });
}
function Bd() {
  return Mn(({ metric: t }) => {
    let e = t.entries.pop();
    !e ||
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log("[Measurements] Adding LCP"),
      (z.lcp = { value: t.value, unit: "millisecond" }),
      (Be = e));
  });
}
function Ld() {
  return Ki(({ metric: t }) => {
    let e = t.entries.pop();
    if (!e) return;
    let n = Q(ie),
      r = Q(e.startTime);
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.log("[Measurements] Adding FID"),
      (z.fid = { value: t.value, unit: "millisecond" }),
      (z["mark.fid"] = { value: n + r, unit: "second" });
  });
}
function ha(t) {
  let e = da();
  if (!e || !D.performance.getEntries || !ie) return;
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    p.log("[Tracing] Adding & adjusting spans using Performance API");
  let n = Q(ie),
    r = e.getEntries(),
    i,
    s;
  if (
    (r.slice(ua).forEach((o) => {
      let a = Q(o.startTime),
        c = Q(o.duration);
      if (!(t.op === "navigation" && n + a < t.startTimestamp))
        switch (o.entryType) {
          case "navigation": {
            Pd(t, o, n),
              (i = n + Q(o.responseStart)),
              (s = n + Q(o.requestStart));
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            Ud(t, o, a, c, n);
            let u = qt(),
              d = o.startTime < u.firstHiddenTime;
            o.name === "first-paint" &&
              d &&
              ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                p.log("[Measurements] Adding FP"),
              (z.fp = { value: o.startTime, unit: "millisecond" })),
              o.name === "first-contentful-paint" &&
                d &&
                ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                  p.log("[Measurements] Adding FCP"),
                (z.fcp = { value: o.startTime, unit: "millisecond" }));
            break;
          }
          case "resource": {
            let u = o.name.replace(D.location.origin, "");
            Gd(t, o, u, a, c, n);
            break;
          }
        }
    }),
    (ua = Math.max(r.length - 1, 0)),
    Hd(t),
    t.op === "pageload")
  ) {
    typeof i == "number" &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log("[Measurements] Adding TTFB"),
      (z.ttfb = { value: (i - t.startTimestamp) * 1e3, unit: "millisecond" }),
      typeof s == "number" &&
        s <= i &&
        (z["ttfb.requestTime"] = {
          value: (i - s) * 1e3,
          unit: "millisecond",
        })),
      ["fcp", "fp", "lcp"].forEach((a) => {
        if (!z[a] || n >= t.startTimestamp) return;
        let c = z[a].value,
          u = n + Q(c),
          d = Math.abs((u - t.startTimestamp) * 1e3),
          l = d - c;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(`[Measurements] Normalized ${a} from ${c} to ${d} (${l})`),
          (z[a].value = d);
      });
    let o = z["mark.fid"];
    o &&
      z.fid &&
      (bt(t, {
        description: "first input delay",
        endTimestamp: o.value + Q(z.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: o.value,
      }),
      delete z["mark.fid"]),
      "fcp" in z || delete z.cls,
      Object.keys(z).forEach((a) => {
        t.setMeasurement(a, z[a].value, z[a].unit);
      }),
      Yd(t);
  }
  (Be = void 0), (An = void 0), (z = {});
}
function Ud(t, e, n, r, i) {
  let s = i + n,
    o = s + r;
  return (
    bt(t, {
      description: e.name,
      endTimestamp: o,
      op: e.entryType,
      origin: "auto.resource.browser.metrics",
      startTimestamp: s,
    }),
    s
  );
}
function Pd(t, e, n) {
  [
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    wr(t, e, r, n);
  }),
    wr(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"),
    wr(t, e, "fetch", n, "cache", "domainLookupStart"),
    wr(t, e, "domainLookup", n, "DNS"),
    Fd(t, e, n);
}
function wr(t, e, n, r, i, s) {
  let o = s ? e[s] : e[`${n}End`],
    a = e[`${n}Start`];
  !a ||
    !o ||
    bt(t, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: i || n,
      startTimestamp: r + Q(a),
      endTimestamp: r + Q(o),
    });
}
function Fd(t, e, n) {
  bt(t, {
    op: "browser",
    origin: "auto.browser.browser.metrics",
    description: "request",
    startTimestamp: n + Q(e.requestStart),
    endTimestamp: n + Q(e.responseEnd),
  }),
    bt(t, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "response",
      startTimestamp: n + Q(e.responseStart),
      endTimestamp: n + Q(e.responseEnd),
    });
}
function Gd(t, e, n, r, i, s) {
  if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch")
    return;
  let o = {};
  "transferSize" in e && (o["http.response_transfer_size"] = e.transferSize),
    "encodedBodySize" in e &&
      (o["http.response_content_length"] = e.encodedBodySize),
    "decodedBodySize" in e &&
      (o["http.decoded_response_content_length"] = e.decodedBodySize),
    "renderBlockingStatus" in e &&
      (o["resource.render_blocking_status"] = e.renderBlockingStatus);
  let a = s + r,
    c = a + i;
  bt(t, {
    description: n,
    endTimestamp: c,
    op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
    origin: "auto.resource.browser.metrics",
    startTimestamp: a,
    data: o,
  });
}
function Hd(t) {
  let e = D.navigator;
  if (!e) return;
  let n = e.connection;
  n &&
    (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType),
    n.type && t.setTag("connectionType", n.type),
    kr(n.rtt) && (z["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
    kr(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`),
    kr(e.hardwareConcurrency) &&
      t.setTag("hardwareConcurrency", String(e.hardwareConcurrency));
}
function Yd(t) {
  Be &&
    ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.log("[Measurements] Adding LCP Data"),
    Be.element && t.setTag("lcp.element", me(Be.element)),
    Be.id && t.setTag("lcp.id", Be.id),
    Be.url && t.setTag("lcp.url", Be.url.trim().slice(0, 200)),
    t.setTag("lcp.size", Be.size)),
    An &&
      An.sources &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log("[Measurements] Adding CLS Data"),
      An.sources.forEach((e, n) =>
        t.setTag(`cls.source.${n + 1}`, me(e.node))
      ));
}
var Ji = ["localhost", /^\/(?!\/)/],
  Bn = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: Ji,
    tracePropagationTargets: Ji,
  };
function Qi(t) {
  let {
      traceFetch: e,
      traceXHR: n,
      tracePropagationTargets: r,
      tracingOrigins: i,
      shouldCreateSpanForRequest: s,
      enableHTTPTimings: o,
    } = { traceFetch: Bn.traceFetch, traceXHR: Bn.traceXHR, ...t },
    a = typeof s == "function" ? s : (d) => !0,
    c = (d) => zd(d, r || i),
    u = {};
  e &&
    F("fetch", (d) => {
      let l = qd(d, a, c, u);
      o && l && ma(l);
    }),
    n &&
      F("xhr", (d) => {
        let l = Kd(d, a, c, u);
        o && l && ma(l);
      });
}
function $d(t) {
  return (
    t.entryType === "resource" &&
    "initiatorType" in t &&
    typeof t.nextHopProtocol == "string" &&
    (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest")
  );
}
function ma(t) {
  let e = t.data.url;
  if (!e) return;
  let n = it("resource", ({ entries: r }) => {
    r.forEach((i) => {
      $d(i) &&
        i.name.endsWith(e) &&
        (Wd(i).forEach((o) => t.setData(...o)), setTimeout(n));
    });
  });
}
function jd(t) {
  let e = "unknown",
    n = "unknown",
    r = "";
  for (let i of t) {
    if (i === "/") {
      [e, n] = t.split("/");
      break;
    }
    if (!isNaN(Number(i))) {
      (e = r === "h" ? "http" : r), (n = t.split(r)[1]);
      break;
    }
    r += i;
  }
  return r === t && (e = r), { name: e, version: n };
}
function Le(t = 0) {
  return ((ie || performance.timeOrigin) + t) / 1e3;
}
function Wd(t) {
  let { name: e, version: n } = jd(t.nextHopProtocol),
    r = [];
  return (
    r.push(["network.protocol.version", n], ["network.protocol.name", e]),
    ie
      ? [
          ...r,
          ["http.request.redirect_start", Le(t.redirectStart)],
          ["http.request.fetch_start", Le(t.fetchStart)],
          ["http.request.domain_lookup_start", Le(t.domainLookupStart)],
          ["http.request.domain_lookup_end", Le(t.domainLookupEnd)],
          ["http.request.connect_start", Le(t.connectStart)],
          ["http.request.secure_connection_start", Le(t.secureConnectionStart)],
          ["http.request.connection_end", Le(t.connectEnd)],
          ["http.request.request_start", Le(t.requestStart)],
          ["http.request.response_start", Le(t.responseStart)],
          ["http.request.response_end", Le(t.responseEnd)],
        ]
      : r
  );
}
function zd(t, e) {
  return Ae(t, e || Ji);
}
function qd(t, e, n, r) {
  if (!Yt() || !t.fetchData) return;
  let i = e(t.fetchData.url);
  if (t.endTimestamp && i) {
    let f = t.fetchData.__span;
    if (!f) return;
    let h = r[f];
    if (h) {
      if (t.response) {
        h.setHttpStatus(t.response.status);
        let m =
            t.response &&
            t.response.headers &&
            t.response.headers.get("content-length"),
          _ = parseInt(m);
        _ > 0 && h.setData("http.response_content_length", _);
      } else t.error && h.setStatus("internal_error");
      h.finish(), delete r[f];
    }
    return;
  }
  let s = S(),
    o = s.getScope(),
    a = s.getClient(),
    c = o.getSpan(),
    { method: u, url: d } = t.fetchData,
    l =
      i && c
        ? c.startChild({
            data: { url: d, type: "fetch", "http.method": u },
            description: `${u} ${d}`,
            op: "http.client",
            origin: "auto.http.browser",
          })
        : void 0;
  if (
    (l && ((t.fetchData.__span = l.spanId), (r[l.spanId] = l)),
    n(t.fetchData.url) && a)
  ) {
    let f = t.args[0];
    t.args[1] = t.args[1] || {};
    let h = t.args[1];
    h.headers = Vd(f, a, o, h, l);
  }
  return l;
}
function Vd(t, e, n, r, i) {
  let s = i || n.getSpan(),
    o = s && s.transaction,
    { traceId: a, sampled: c, dsc: u } = n.getPropagationContext(),
    d = s ? s.toTraceparent() : Ct(a, void 0, c),
    l = o ? o.getDynamicSamplingContext() : u || Ze(a, e, n),
    f = bn(l),
    h = typeof Request < "u" && he(t, Request) ? t.headers : r.headers;
  if (h)
    if (typeof Headers < "u" && he(h, Headers)) {
      let m = new Headers(h);
      return m.append("sentry-trace", d), f && m.append(Tn, f), m;
    } else if (Array.isArray(h)) {
      let m = [...h, ["sentry-trace", d]];
      return f && m.push([Tn, f]), m;
    } else {
      let m = "baggage" in h ? h.baggage : void 0,
        _ = [];
      return (
        Array.isArray(m) ? _.push(...m) : m && _.push(m),
        f && _.push(f),
        {
          ...h,
          "sentry-trace": d,
          baggage: _.length > 0 ? _.join(",") : void 0,
        }
      );
    }
  else return { "sentry-trace": d, baggage: f };
}
function Kd(t, e, n, r) {
  let i = t.xhr,
    s = i && i[Ee];
  if (!Yt() || (i && i.__sentry_own_request__) || !i || !s) return;
  let o = e(s.url);
  if (t.endTimestamp && o) {
    let l = i.__sentry_xhr_span_id__;
    if (!l) return;
    let f = r[l];
    f && (f.setHttpStatus(s.status_code), f.finish(), delete r[l]);
    return;
  }
  let a = S(),
    c = a.getScope(),
    u = c.getSpan(),
    d =
      o && u
        ? u.startChild({
            data: {
              ...s.data,
              type: "xhr",
              "http.method": s.method,
              url: s.url,
            },
            description: `${s.method} ${s.url}`,
            op: "http.client",
            origin: "auto.http.browser",
          })
        : void 0;
  if (
    (d &&
      ((i.__sentry_xhr_span_id__ = d.spanId),
      (r[i.__sentry_xhr_span_id__] = d)),
    i.setRequestHeader && n(s.url))
  )
    if (d) {
      let l = d && d.transaction,
        f = l && l.getDynamicSamplingContext(),
        h = bn(f);
      _a(i, d.toTraceparent(), h);
    } else {
      let l = a.getClient(),
        { traceId: f, sampled: h, dsc: m } = c.getPropagationContext(),
        _ = Ct(f, void 0, h),
        T = m || (l ? Ze(f, l, c) : void 0),
        E = bn(T);
      _a(i, _, E);
    }
  return d;
}
function _a(t, e, n) {
  try {
    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(Tn, n);
  } catch {}
}
function ga(t, e = !0, n = !0) {
  if (!D || !D.location) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.warn(
        "Could not initialize routing instrumentation due to invalid location"
      );
    return;
  }
  let r = D.location.href,
    i;
  e &&
    (i = t({
      name: D.location.pathname,
      startTimestamp: ie ? ie / 1e3 : void 0,
      op: "pageload",
      origin: "auto.pageload.browser",
      metadata: { source: "url" },
    })),
    n &&
      F("history", ({ to: s, from: o }) => {
        if (o === void 0 && r && r.indexOf(s) !== -1) {
          r = void 0;
          return;
        }
        o !== s &&
          ((r = void 0),
          i &&
            ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.log(`[Tracing] Finishing current transaction with op: ${i.op}`),
            i.finish()),
          (i = t({
            name: D.location.pathname,
            op: "navigation",
            origin: "auto.navigation.browser",
            metadata: { source: "url" },
          })));
      });
}
var ya = "BrowserTracing",
  Xd = {
    ...Ht,
    markBackgroundTransactions: !0,
    routingInstrumentation: ga,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    _experiments: {},
    ...Bn,
  },
  xr = class {
    constructor(e) {
      (this.name = ya),
        (this._hasSetTracePropagationTargets = !1),
        gr(),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          (this._hasSetTracePropagationTargets = !!(
            e &&
            (e.tracePropagationTargets || e.tracingOrigins)
          )),
        (this.options = { ...Xd, ...e }),
        this.options._experiments.enableLongTask !== void 0 &&
          (this.options.enableLongTask =
            this.options._experiments.enableLongTask),
        e &&
          !e.tracePropagationTargets &&
          e.tracingOrigins &&
          (this.options.tracePropagationTargets = e.tracingOrigins),
        (this._collectWebVitals = la()),
        this.options.enableLongTask && fa(),
        this.options._experiments.enableInteractions && pa();
    }
    setupOnce(e, n) {
      this._getCurrentHub = n;
      let i = n().getClient(),
        s = i && i.getOptions(),
        {
          routingInstrumentation: o,
          startTransactionOnLocationChange: a,
          startTransactionOnPageLoad: c,
          markBackgroundTransactions: u,
          traceFetch: d,
          traceXHR: l,
          shouldCreateSpanForRequest: f,
          enableHTTPTimings: h,
          _experiments: m,
        } = this.options,
        _ = s && s.tracePropagationTargets,
        T = _ || this.options.tracePropagationTargets;
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        this._hasSetTracePropagationTargets &&
        _ &&
        p.warn(
          "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."
        ),
        o(
          (E) => {
            let R = this._createRouteTransaction(E);
            return (
              this.options._experiments.onStartRouteTransaction &&
                this.options._experiments.onStartRouteTransaction(R, E, n),
              R
            );
          },
          c,
          a
        ),
        u && Qo(),
        m.enableInteractions && this._registerInteractionListener(),
        Qi({
          traceFetch: d,
          traceXHR: l,
          tracePropagationTargets: T,
          shouldCreateSpanForRequest: f,
          enableHTTPTimings: h,
        });
    }
    _createRouteTransaction(e) {
      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.warn(
            `[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`
          );
        return;
      }
      let n = this._getCurrentHub(),
        {
          beforeNavigate: r,
          idleTimeout: i,
          finalTimeout: s,
          heartbeatInterval: o,
        } = this.options,
        a = e.op === "pageload",
        c = a ? Ea("sentry-trace") : "",
        u = a ? Ea("baggage") : "",
        {
          traceparentData: d,
          dynamicSamplingContext: l,
          propagationContext: f,
        } = Ci(c, u),
        h = {
          ...e,
          ...d,
          metadata: { ...e.metadata, dynamicSamplingContext: d && !l ? {} : l },
          trimEnd: !0,
        },
        m = typeof r == "function" ? r(h) : h,
        _ = m === void 0 ? { ...h, sampled: !1 } : m;
      (_.metadata =
        _.name !== h.name ? { ..._.metadata, source: "custom" } : _.metadata),
        (this._latestRouteName = _.name),
        (this._latestRouteSource = _.metadata && _.metadata.source),
        _.sampled === !1 &&
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(
            `[Tracing] Will not send ${_.op} transaction because of beforeNavigate.`
          ),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.log(`[Tracing] Starting ${_.op} transaction on scope`);
      let { location: T } = D,
        E = _r(n, _, i, s, !0, { location: T }, o),
        R = n.getScope();
      return (
        a && d
          ? R.setPropagationContext(f)
          : R.setPropagationContext({
              traceId: E.traceId,
              spanId: E.spanId,
              parentSpanId: E.parentSpanId,
              sampled: E.sampled,
            }),
        E.registerBeforeFinishCallback((C) => {
          this._collectWebVitals(), ha(C);
        }),
        E
      );
    }
    _registerInteractionListener() {
      let e,
        n = () => {
          let {
              idleTimeout: r,
              finalTimeout: i,
              heartbeatInterval: s,
            } = this.options,
            o = "ui.action.click",
            a = xe();
          if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.warn(
                `[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`
              );
            return;
          }
          if (
            (e &&
              (e.setFinishReason("interactionInterrupted"),
              e.finish(),
              (e = void 0)),
            !this._getCurrentHub)
          ) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.warn(
                `[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`
              );
            return;
          }
          if (!this._latestRouteName) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.warn(
                `[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`
              );
            return;
          }
          let c = this._getCurrentHub(),
            { location: u } = D,
            d = {
              name: this._latestRouteName,
              op: o,
              trimEnd: !0,
              metadata: { source: this._latestRouteSource || "url" },
            };
          e = _r(c, d, r, i, !0, { location: u }, s);
        };
      ["click"].forEach((r) => {
        addEventListener(r, n, { once: !1, capture: !0 });
      });
    }
  };
function Ea(t) {
  let e = di(`meta[name=${t}]`);
  return e ? e.getAttribute("content") : void 0;
}
var L = N,
  vs = "sentryReplaySession",
  Jd = "replay_event",
  Rs = "Unable to send Replay",
  Qd = 3e5,
  Zd = 9e5,
  el = 5e3,
  tl = 5500,
  nl = 6e4,
  rl = 5e3,
  il = 3,
  Sa = 15e4,
  Nr = 5e3,
  sl = 3e3,
  ol = 300,
  Is = 2e7,
  al = 4999,
  cl = 15e3,
  Ta = 36e5,
  Z;
(function (t) {
  (t[(t.Document = 0)] = "Document"),
    (t[(t.DocumentType = 1)] = "DocumentType"),
    (t[(t.Element = 2)] = "Element"),
    (t[(t.Text = 3)] = "Text"),
    (t[(t.CDATA = 4)] = "CDATA"),
    (t[(t.Comment = 5)] = "Comment");
})(Z || (Z = {}));
function ul(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function Un(t) {
  let e = t?.host;
  return Boolean(e?.shadowRoot === t);
}
function Pn(t) {
  return Object.prototype.toString.call(t) === "[object ShadowRoot]";
}
function dl(t) {
  return (
    t.includes(" background-clip: text;") &&
      !t.includes(" -webkit-background-clip: text;") &&
      (t = t.replace(
        " background-clip: text;",
        " -webkit-background-clip: text; background-clip: text;"
      )),
    t
  );
}
function ll(t) {
  let { cssText: e } = t;
  if (e.split('"').length < 3) return e;
  let n = ["@import", `url(${JSON.stringify(t.href)})`];
  return (
    t.layerName === ""
      ? n.push("layer")
      : t.layerName && n.push(`layer(${t.layerName})`),
    t.supportsText && n.push(`supports(${t.supportsText})`),
    t.media.length && n.push(t.media.mediaText),
    n.join(" ") + ";"
  );
}
function Or(t) {
  try {
    let e = t.rules || t.cssRules;
    return e ? dl(Array.from(e, Fa).join("")) : null;
  } catch {
    return null;
  }
}
function Fa(t) {
  let e;
  if (pl(t))
    try {
      e = Or(t.styleSheet) || ll(t);
    } catch {}
  else if (hl(t) && t.selectorText.includes(":")) return fl(t.cssText);
  return e || t.cssText;
}
function fl(t) {
  let e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return t.replace(e, "$1\\$2");
}
function pl(t) {
  return "styleSheet" in t;
}
function hl(t) {
  return "selectorText" in t;
}
var Mr = class {
  constructor() {
    (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
  }
  getId(e) {
    var n;
    if (!e) return -1;
    let r = (n = this.getMeta(e)) === null || n === void 0 ? void 0 : n.id;
    return r ?? -1;
  }
  getNode(e) {
    return this.idNodeMap.get(e) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(e) {
    return this.nodeMetaMap.get(e) || null;
  }
  removeNodeFromMap(e) {
    let n = this.getId(e);
    this.idNodeMap.delete(n),
      e.childNodes && e.childNodes.forEach((r) => this.removeNodeFromMap(r));
  }
  has(e) {
    return this.idNodeMap.has(e);
  }
  hasNode(e) {
    return this.nodeMetaMap.has(e);
  }
  add(e, n) {
    let r = n.id;
    this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, n);
  }
  replace(e, n) {
    let r = this.getNode(e);
    if (r) {
      let i = this.nodeMetaMap.get(r);
      i && this.nodeMetaMap.set(n, i);
    }
    this.idNodeMap.set(e, n);
  }
  reset() {
    (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
  }
};
function ml() {
  return new Mr();
}
function Wr({ maskInputOptions: t, tagName: e, type: n }) {
  return (
    e === "OPTION" && (e = "SELECT"),
    Boolean(
      t[e.toLowerCase()] ||
        (n && t[n]) ||
        n === "password" ||
        (e === "INPUT" && !n && t.text)
    )
  );
}
function Gn({ isMasked: t, element: e, value: n, maskInputFn: r }) {
  let i = n || "";
  return t ? (r && (i = r(i, e)), "*".repeat(i.length)) : i;
}
function tn(t) {
  return t.toLowerCase();
}
function ns(t) {
  return t.toUpperCase();
}
var ba = "__rrweb_original__";
function _l(t) {
  let e = t.getContext("2d");
  if (!e) return !0;
  let n = 50;
  for (let r = 0; r < t.width; r += n)
    for (let i = 0; i < t.height; i += n) {
      let s = e.getImageData,
        o = ba in s ? s[ba] : s;
      if (
        new Uint32Array(
          o.call(
            e,
            r,
            i,
            Math.min(n, t.width - r),
            Math.min(n, t.height - i)
          ).data.buffer
        ).some((c) => c !== 0)
      )
        return !1;
    }
  return !0;
}
function ks(t) {
  let e = t.type;
  return t.hasAttribute("data-rr-is-password") ? "password" : e ? tn(e) : null;
}
function Ar(t, e, n) {
  return e === "INPUT" && (n === "radio" || n === "checkbox")
    ? t.getAttribute("value") || ""
    : t.value;
}
var gl = 1,
  El = new RegExp("[^a-z0-9-_:]"),
  Hn = -2;
function ws() {
  return gl++;
}
function yl(t) {
  if (t instanceof HTMLFormElement) return "form";
  let e = tn(t.tagName);
  return El.test(e) ? "div" : e;
}
function Sl(t) {
  let e = "";
  return (
    t.indexOf("//") > -1
      ? (e = t.split("/").slice(0, 3).join("/"))
      : (e = t.split("/")[0]),
    (e = e.split("?")[0]),
    e
  );
}
var Vt,
  va,
  Tl = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  bl = /^(?:[a-z+]+:)?\/\//i,
  vl = /^www\..*/i,
  Rl = /^(data:)([^,]*),(.*)/i;
function Br(t, e) {
  return (t || "").replace(Tl, (n, r, i, s, o, a) => {
    let c = i || o || a,
      u = r || s || "";
    if (!c) return n;
    if (bl.test(c) || vl.test(c)) return `url(${u}${c}${u})`;
    if (Rl.test(c)) return `url(${u}${c}${u})`;
    if (c[0] === "/") return `url(${u}${Sl(e) + c}${u})`;
    let d = e.split("/"),
      l = c.split("/");
    d.pop();
    for (let f of l) f !== "." && (f === ".." ? d.pop() : d.push(f));
    return `url(${u}${d.join("/")}${u})`;
  });
}
var Il = /^[^ \t\n\r\u000c]+/,
  kl = /^[, \t\n\r\u000c]+/;
function wl(t, e) {
  if (e.trim() === "") return e;
  let n = 0;
  function r(s) {
    let o,
      a = s.exec(e.substring(n));
    return a ? ((o = a[0]), (n += o.length), o) : "";
  }
  let i = [];
  for (; r(kl), !(n >= e.length); ) {
    let s = r(Il);
    if (s.slice(-1) === ",")
      (s = Xt(t, s.substring(0, s.length - 1))), i.push(s);
    else {
      let o = "";
      s = Xt(t, s);
      let a = !1;
      for (;;) {
        let c = e.charAt(n);
        if (c === "") {
          i.push((s + o).trim());
          break;
        } else if (a) c === ")" && (a = !1);
        else if (c === ",") {
          (n += 1), i.push((s + o).trim());
          break;
        } else c === "(" && (a = !0);
        (o += c), (n += 1);
      }
    }
  }
  return i.join(", ");
}
function Xt(t, e) {
  if (!e || e.trim() === "") return e;
  let n = t.createElement("a");
  return (n.href = e), n.href;
}
function xl(t) {
  return Boolean(t.tagName === "svg" || t.ownerSVGElement);
}
function xs() {
  let t = document.createElement("a");
  return (t.href = ""), t.href;
}
function Ga(t, e, n, r, i, s) {
  return (
    r &&
    (n === "src" ||
    (n === "href" && !(e === "use" && r[0] === "#")) ||
    (n === "xlink:href" && r[0] !== "#") ||
    (n === "background" && (e === "table" || e === "td" || e === "th"))
      ? Xt(t, r)
      : n === "srcset"
      ? wl(t, r)
      : n === "style"
      ? Br(r, xs())
      : e === "object" && n === "data"
      ? Xt(t, r)
      : typeof s == "function"
      ? s(n, r, i)
      : r)
  );
}
function Ha(t, e, n) {
  return (t === "video" || t === "audio") && e === "autoplay";
}
function Nl(t, e, n, r) {
  try {
    if (r && t.matches(r)) return !1;
    if (typeof e == "string") {
      if (t.classList.contains(e)) return !0;
    } else
      for (let i = t.classList.length; i--; ) {
        let s = t.classList[i];
        if (e.test(s)) return !0;
      }
    if (n) return t.matches(n);
  } catch {}
  return !1;
}
function Dl(t, e) {
  for (let n = t.classList.length; n--; ) {
    let r = t.classList[n];
    if (e.test(r)) return !0;
  }
  return !1;
}
function vt(t, e, n = 1 / 0, r = 0) {
  return !t || t.nodeType !== t.ELEMENT_NODE || r > n
    ? -1
    : e(t)
    ? r
    : vt(t.parentNode, e, n, r + 1);
}
function Jt(t, e) {
  return (n) => {
    let r = n;
    if (r === null) return !1;
    if (t) {
      if (typeof t == "string") {
        if (r.matches(`.${t}`)) return !0;
      } else if (Dl(r, t)) return !0;
    }
    return !!(e && r.matches(e));
  };
}
function nn(t, e, n, r, i, s) {
  try {
    let o = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
    if (o === null) return !1;
    let a = -1,
      c = -1;
    if (s) {
      if (((c = vt(o, Jt(r, i))), c < 0)) return !0;
      a = vt(o, Jt(e, n), c >= 0 ? c : 1 / 0);
    } else {
      if (((a = vt(o, Jt(e, n))), a < 0)) return !1;
      c = vt(o, Jt(r, i), a >= 0 ? a : 1 / 0);
    }
    return a >= 0 ? (c >= 0 ? a <= c : !0) : c >= 0 ? !1 : !!s;
  } catch {}
  return !!s;
}
function Cl(t, e, n) {
  let r = t.contentWindow;
  if (!r) return;
  let i = !1,
    s;
  try {
    s = r.document.readyState;
  } catch {
    return;
  }
  if (s !== "complete") {
    let a = setTimeout(() => {
      i || (e(), (i = !0));
    }, n);
    t.addEventListener("load", () => {
      clearTimeout(a), (i = !0), e();
    });
    return;
  }
  let o = "about:blank";
  if (r.location.href !== o || t.src === o || t.src === "")
    return setTimeout(e, 0), t.addEventListener("load", e);
  t.addEventListener("load", e);
}
function Ol(t, e, n) {
  let r = !1,
    i;
  try {
    i = t.sheet;
  } catch {
    return;
  }
  if (i) return;
  let s = setTimeout(() => {
    r || (e(), (r = !0));
  }, n);
  t.addEventListener("load", () => {
    clearTimeout(s), (r = !0), e();
  });
}
function Ml(t, e) {
  let {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: s,
      unblockSelector: o,
      maskAllText: a,
      maskAttributeFn: c,
      maskTextClass: u,
      unmaskTextClass: d,
      maskTextSelector: l,
      unmaskTextSelector: f,
      inlineStylesheet: h,
      maskInputOptions: m = {},
      maskTextFn: _,
      maskInputFn: T,
      dataURLOptions: E = {},
      inlineImages: R,
      recordCanvas: C,
      keepIframeSrcFn: A,
      newlyAddedElement: q = !1,
    } = e,
    v = Al(n, r);
  switch (t.nodeType) {
    case t.DOCUMENT_NODE:
      return t.compatMode !== "CSS1Compat"
        ? { type: Z.Document, childNodes: [], compatMode: t.compatMode }
        : { type: Z.Document, childNodes: [] };
    case t.DOCUMENT_TYPE_NODE:
      return {
        type: Z.DocumentType,
        name: t.name,
        publicId: t.publicId,
        systemId: t.systemId,
        rootId: v,
      };
    case t.ELEMENT_NODE:
      return Ll(t, {
        doc: n,
        blockClass: i,
        blockSelector: s,
        unblockSelector: o,
        inlineStylesheet: h,
        maskAttributeFn: c,
        maskInputOptions: m,
        maskInputFn: T,
        dataURLOptions: E,
        inlineImages: R,
        recordCanvas: C,
        keepIframeSrcFn: A,
        newlyAddedElement: q,
        rootId: v,
        maskAllText: a,
        maskTextClass: u,
        unmaskTextClass: d,
        maskTextSelector: l,
        unmaskTextSelector: f,
      });
    case t.TEXT_NODE:
      return Bl(t, {
        maskAllText: a,
        maskTextClass: u,
        unmaskTextClass: d,
        maskTextSelector: l,
        unmaskTextSelector: f,
        maskTextFn: _,
        maskInputOptions: m,
        maskInputFn: T,
        rootId: v,
      });
    case t.CDATA_SECTION_NODE:
      return { type: Z.CDATA, textContent: "", rootId: v };
    case t.COMMENT_NODE:
      return { type: Z.Comment, textContent: t.textContent || "", rootId: v };
    default:
      return !1;
  }
}
function Al(t, e) {
  if (!e.hasNode(t)) return;
  let n = e.getId(t);
  return n === 1 ? void 0 : n;
}
function Bl(t, e) {
  var n;
  let {
      maskAllText: r,
      maskTextClass: i,
      unmaskTextClass: s,
      maskTextSelector: o,
      unmaskTextSelector: a,
      maskTextFn: c,
      maskInputOptions: u,
      maskInputFn: d,
      rootId: l,
    } = e,
    f = t.parentNode && t.parentNode.tagName,
    h = t.textContent,
    m = f === "STYLE" ? !0 : void 0,
    _ = f === "SCRIPT" ? !0 : void 0,
    T = f === "TEXTAREA" ? !0 : void 0;
  if (m && h) {
    try {
      t.nextSibling ||
        t.previousSibling ||
        (!((n = t.parentNode.sheet) === null || n === void 0) &&
          n.cssRules &&
          (h = Or(t.parentNode.sheet)));
    } catch (R) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${R}`,
        t
      );
    }
    h = Br(h, xs());
  }
  _ && (h = "SCRIPT_PLACEHOLDER");
  let E = nn(t, i, o, s, a, r);
  if (
    (!m && !_ && !T && h && E && (h = c ? c(h) : h.replace(/[\S]/g, "*")),
    T &&
      h &&
      (u.textarea || E) &&
      (h = d ? d(h, t.parentNode) : h.replace(/[\S]/g, "*")),
    f === "OPTION" && h)
  ) {
    let R = Wr({ type: null, tagName: f, maskInputOptions: u });
    h = Gn({
      isMasked: nn(t, i, o, s, a, R),
      element: t,
      value: h,
      maskInputFn: d,
    });
  }
  return { type: Z.Text, textContent: h || "", isStyle: m, rootId: l };
}
function Ll(t, e) {
  let {
      doc: n,
      blockClass: r,
      blockSelector: i,
      unblockSelector: s,
      inlineStylesheet: o,
      maskInputOptions: a = {},
      maskAttributeFn: c,
      maskInputFn: u,
      dataURLOptions: d = {},
      inlineImages: l,
      recordCanvas: f,
      keepIframeSrcFn: h,
      newlyAddedElement: m = !1,
      rootId: _,
      maskAllText: T,
      maskTextClass: E,
      unmaskTextClass: R,
      maskTextSelector: C,
      unmaskTextSelector: A,
    } = e,
    q = Nl(t, r, i, s),
    v = yl(t),
    g = {},
    M = t.attributes.length;
  for (let y = 0; y < M; y++) {
    let I = t.attributes[y];
    Ha(v, I.name, I.value) || (g[I.name] = Ga(n, v, tn(I.name), I.value, t, c));
  }
  if (v === "link" && o) {
    let y = Array.from(n.styleSheets).find((G) => G.href === t.href),
      I = null;
    y && (I = Or(y)),
      I && (delete g.rel, delete g.href, (g._cssText = Br(I, y.href)));
  }
  if (
    v === "style" &&
    t.sheet &&
    !(t.innerText || t.textContent || "").trim().length
  ) {
    let y = Or(t.sheet);
    y && (g._cssText = Br(y, xs()));
  }
  if (v === "input" || v === "textarea" || v === "select" || v === "option") {
    let y = t,
      I = ks(y),
      G = Ar(y, ns(v), I),
      K = y.checked;
    if (I !== "submit" && I !== "button" && G) {
      let V = nn(
        y,
        E,
        C,
        R,
        A,
        Wr({ type: I, tagName: ns(v), maskInputOptions: a })
      );
      g.value = Gn({ isMasked: V, element: y, value: G, maskInputFn: u });
    }
    K && (g.checked = K);
  }
  if (
    (v === "option" &&
      (t.selected && !a.select ? (g.selected = !0) : delete g.selected),
    v === "canvas" && f)
  ) {
    if (t.__context === "2d")
      _l(t) || (g.rr_dataURL = t.toDataURL(d.type, d.quality));
    else if (!("__context" in t)) {
      let y = t.toDataURL(d.type, d.quality),
        I = document.createElement("canvas");
      (I.width = t.width), (I.height = t.height);
      let G = I.toDataURL(d.type, d.quality);
      y !== G && (g.rr_dataURL = y);
    }
  }
  if (v === "img" && l) {
    Vt || ((Vt = n.createElement("canvas")), (va = Vt.getContext("2d")));
    let y = t,
      I = y.crossOrigin;
    y.crossOrigin = "anonymous";
    let G = () => {
      y.removeEventListener("load", G);
      try {
        (Vt.width = y.naturalWidth),
          (Vt.height = y.naturalHeight),
          va.drawImage(y, 0, 0),
          (g.rr_dataURL = Vt.toDataURL(d.type, d.quality));
      } catch (K) {
        console.warn(`Cannot inline img src=${y.currentSrc}! Error: ${K}`);
      }
      I ? (g.crossOrigin = I) : y.removeAttribute("crossorigin");
    };
    y.complete && y.naturalWidth !== 0 ? G() : y.addEventListener("load", G);
  }
  if (
    ((v === "audio" || v === "video") &&
      ((g.rr_mediaState = t.paused ? "paused" : "played"),
      (g.rr_mediaCurrentTime = t.currentTime)),
    m ||
      (t.scrollLeft && (g.rr_scrollLeft = t.scrollLeft),
      t.scrollTop && (g.rr_scrollTop = t.scrollTop)),
    q)
  ) {
    let { width: y, height: I } = t.getBoundingClientRect();
    g = { class: g.class, rr_width: `${y}px`, rr_height: `${I}px` };
  }
  v === "iframe" &&
    !h(g.src) &&
    (t.contentDocument || (g.rr_src = g.src), delete g.src);
  let H;
  try {
    customElements.get(v) && (H = !0);
  } catch {}
  return {
    type: Z.Element,
    tagName: v,
    attributes: g,
    childNodes: [],
    isSVG: xl(t) || void 0,
    needBlock: q,
    rootId: _,
    isCustom: H,
  };
}
function B(t) {
  return t == null ? "" : t.toLowerCase();
}
function Ul(t, e) {
  if (e.comment && t.type === Z.Comment) return !0;
  if (t.type === Z.Element) {
    if (
      e.script &&
      (t.tagName === "script" ||
        (t.tagName === "link" &&
          (t.attributes.rel === "preload" ||
            t.attributes.rel === "modulepreload") &&
          t.attributes.as === "script") ||
        (t.tagName === "link" &&
          t.attributes.rel === "prefetch" &&
          typeof t.attributes.href == "string" &&
          t.attributes.href.endsWith(".js")))
    )
      return !0;
    if (
      e.headFavicon &&
      ((t.tagName === "link" && t.attributes.rel === "shortcut icon") ||
        (t.tagName === "meta" &&
          (B(t.attributes.name).match(/^msapplication-tile(image|color)$/) ||
            B(t.attributes.name) === "application-name" ||
            B(t.attributes.rel) === "icon" ||
            B(t.attributes.rel) === "apple-touch-icon" ||
            B(t.attributes.rel) === "shortcut icon")))
    )
      return !0;
    if (t.tagName === "meta") {
      if (
        e.headMetaDescKeywords &&
        B(t.attributes.name).match(/^description|keywords$/)
      )
        return !0;
      if (
        e.headMetaSocial &&
        (B(t.attributes.property).match(/^(og|twitter|fb):/) ||
          B(t.attributes.name).match(/^(og|twitter):/) ||
          B(t.attributes.name) === "pinterest")
      )
        return !0;
      if (
        e.headMetaRobots &&
        (B(t.attributes.name) === "robots" ||
          B(t.attributes.name) === "googlebot" ||
          B(t.attributes.name) === "bingbot")
      )
        return !0;
      if (e.headMetaHttpEquiv && t.attributes["http-equiv"] !== void 0)
        return !0;
      if (
        e.headMetaAuthorship &&
        (B(t.attributes.name) === "author" ||
          B(t.attributes.name) === "generator" ||
          B(t.attributes.name) === "framework" ||
          B(t.attributes.name) === "publisher" ||
          B(t.attributes.name) === "progid" ||
          B(t.attributes.property).match(/^article:/) ||
          B(t.attributes.property).match(/^product:/))
      )
        return !0;
      if (
        e.headMetaVerification &&
        (B(t.attributes.name) === "google-site-verification" ||
          B(t.attributes.name) === "yandex-verification" ||
          B(t.attributes.name) === "csrf-token" ||
          B(t.attributes.name) === "p:domain_verify" ||
          B(t.attributes.name) === "verify-v1" ||
          B(t.attributes.name) === "verification" ||
          B(t.attributes.name) === "shopify-checkout-api-token")
      )
        return !0;
    }
  }
  return !1;
}
function Qt(t, e) {
  let {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: s,
      unblockSelector: o,
      maskAllText: a,
      maskTextClass: c,
      unmaskTextClass: u,
      maskTextSelector: d,
      unmaskTextSelector: l,
      skipChild: f = !1,
      inlineStylesheet: h = !0,
      maskInputOptions: m = {},
      maskAttributeFn: _,
      maskTextFn: T,
      maskInputFn: E,
      slimDOMOptions: R,
      dataURLOptions: C = {},
      inlineImages: A = !1,
      recordCanvas: q = !1,
      onSerialize: v,
      onIframeLoad: g,
      iframeLoadTimeout: M = 5e3,
      onStylesheetLoad: H,
      stylesheetLoadTimeout: y = 5e3,
      keepIframeSrcFn: I = () => !1,
      newlyAddedElement: G = !1,
    } = e,
    { preserveWhiteSpace: K = !0 } = e,
    V = Ml(t, {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: s,
      maskAllText: a,
      unblockSelector: o,
      maskTextClass: c,
      unmaskTextClass: u,
      maskTextSelector: d,
      unmaskTextSelector: l,
      inlineStylesheet: h,
      maskInputOptions: m,
      maskAttributeFn: _,
      maskTextFn: T,
      maskInputFn: E,
      dataURLOptions: C,
      inlineImages: A,
      recordCanvas: q,
      keepIframeSrcFn: I,
      newlyAddedElement: G,
    });
  if (!V) return console.warn(t, "not serialized"), null;
  let pe;
  r.hasNode(t)
    ? (pe = r.getId(t))
    : Ul(V, R) ||
      (!K &&
        V.type === Z.Text &&
        !V.isStyle &&
        !V.textContent.replace(/^\s+|\s+$/gm, "").length)
    ? (pe = Hn)
    : (pe = ws());
  let U = Object.assign(V, { id: pe });
  if ((r.add(t, U), pe === Hn)) return null;
  v && v(t);
  let Oe = !f;
  if (U.type === Z.Element) {
    (Oe = Oe && !U.needBlock), delete U.needBlock;
    let j = t.shadowRoot;
    j && Pn(j) && (U.isShadowHost = !0);
  }
  if ((U.type === Z.Document || U.type === Z.Element) && Oe) {
    R.headWhitespace &&
      U.type === Z.Element &&
      U.tagName === "head" &&
      (K = !1);
    let j = {
      doc: n,
      mirror: r,
      blockClass: i,
      blockSelector: s,
      maskAllText: a,
      unblockSelector: o,
      maskTextClass: c,
      unmaskTextClass: u,
      maskTextSelector: d,
      unmaskTextSelector: l,
      skipChild: f,
      inlineStylesheet: h,
      maskInputOptions: m,
      maskAttributeFn: _,
      maskTextFn: T,
      maskInputFn: E,
      slimDOMOptions: R,
      dataURLOptions: C,
      inlineImages: A,
      recordCanvas: q,
      preserveWhiteSpace: K,
      onSerialize: v,
      onIframeLoad: g,
      iframeLoadTimeout: M,
      onStylesheetLoad: H,
      stylesheetLoadTimeout: y,
      keepIframeSrcFn: I,
    };
    for (let ue of Array.from(t.childNodes)) {
      let ge = Qt(ue, j);
      ge && U.childNodes.push(ge);
    }
    if (ul(t) && t.shadowRoot)
      for (let ue of Array.from(t.shadowRoot.childNodes)) {
        let ge = Qt(ue, j);
        ge && (Pn(t.shadowRoot) && (ge.isShadow = !0), U.childNodes.push(ge));
      }
  }
  return (
    t.parentNode && Un(t.parentNode) && Pn(t.parentNode) && (U.isShadow = !0),
    U.type === Z.Element &&
      U.tagName === "iframe" &&
      Cl(
        t,
        () => {
          let j = t.contentDocument;
          if (j && g) {
            let ue = Qt(j, {
              doc: j,
              mirror: r,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: l,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: m,
              maskAttributeFn: _,
              maskTextFn: T,
              maskInputFn: E,
              slimDOMOptions: R,
              dataURLOptions: C,
              inlineImages: A,
              recordCanvas: q,
              preserveWhiteSpace: K,
              onSerialize: v,
              onIframeLoad: g,
              iframeLoadTimeout: M,
              onStylesheetLoad: H,
              stylesheetLoadTimeout: y,
              keepIframeSrcFn: I,
            });
            ue && g(t, ue);
          }
        },
        M
      ),
    U.type === Z.Element &&
      U.tagName === "link" &&
      U.attributes.rel === "stylesheet" &&
      Ol(
        t,
        () => {
          if (H) {
            let j = Qt(t, {
              doc: n,
              mirror: r,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: l,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: m,
              maskAttributeFn: _,
              maskTextFn: T,
              maskInputFn: E,
              slimDOMOptions: R,
              dataURLOptions: C,
              inlineImages: A,
              recordCanvas: q,
              preserveWhiteSpace: K,
              onSerialize: v,
              onIframeLoad: g,
              iframeLoadTimeout: M,
              onStylesheetLoad: H,
              stylesheetLoadTimeout: y,
              keepIframeSrcFn: I,
            });
            j && H(t, j);
          }
        },
        y
      ),
    U
  );
}
function Pl(t, e) {
  let {
    mirror: n = new Mr(),
    blockClass: r = "rr-block",
    blockSelector: i = null,
    unblockSelector: s = null,
    maskAllText: o = !1,
    maskTextClass: a = "rr-mask",
    unmaskTextClass: c = null,
    maskTextSelector: u = null,
    unmaskTextSelector: d = null,
    inlineStylesheet: l = !0,
    inlineImages: f = !1,
    recordCanvas: h = !1,
    maskAllInputs: m = !1,
    maskAttributeFn: _,
    maskTextFn: T,
    maskInputFn: E,
    slimDOM: R = !1,
    dataURLOptions: C,
    preserveWhiteSpace: A,
    onSerialize: q,
    onIframeLoad: v,
    iframeLoadTimeout: g,
    onStylesheetLoad: M,
    stylesheetLoadTimeout: H,
    keepIframeSrcFn: y = () => !1,
  } = e || {};
  return Qt(t, {
    doc: t,
    mirror: n,
    blockClass: r,
    blockSelector: i,
    unblockSelector: s,
    maskAllText: o,
    maskTextClass: a,
    unmaskTextClass: c,
    maskTextSelector: u,
    unmaskTextSelector: d,
    skipChild: !1,
    inlineStylesheet: l,
    maskInputOptions:
      m === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
          }
        : m === !1
        ? {}
        : m,
    maskAttributeFn: _,
    maskTextFn: T,
    maskInputFn: E,
    slimDOMOptions:
      R === !0 || R === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: R === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0,
          }
        : R === !1
        ? {}
        : R,
    dataURLOptions: C,
    inlineImages: f,
    recordCanvas: h,
    preserveWhiteSpace: A,
    onSerialize: q,
    onIframeLoad: v,
    iframeLoadTimeout: g,
    onStylesheetLoad: M,
    stylesheetLoadTimeout: H,
    keepIframeSrcFn: y,
    newlyAddedElement: !1,
  });
}
function ce(t, e, n = document) {
  let r = { capture: !0, passive: !0 };
  return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
}
var Kt = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`,
  Ra = {
    map: {},
    getId() {
      return console.error(Kt), -1;
    },
    getNode() {
      return console.error(Kt), null;
    },
    removeNodeFromMap() {
      console.error(Kt);
    },
    has() {
      return console.error(Kt), !1;
    },
    reset() {
      console.error(Kt);
    },
  };
typeof window < "u" &&
  window.Proxy &&
  window.Reflect &&
  (Ra = new Proxy(Ra, {
    get(t, e, n) {
      return e === "map" && console.error(Kt), Reflect.get(t, e, n);
    },
  }));
function Yn(t, e, n = {}) {
  let r = null,
    i = 0;
  return function (...s) {
    let o = Date.now();
    !i && n.leading === !1 && (i = o);
    let a = e - (o - i),
      c = this;
    a <= 0 || a > e
      ? (r && (clearTimeout(r), (r = null)), (i = o), t.apply(c, s))
      : !r &&
        n.trailing !== !1 &&
        (r = setTimeout(() => {
          (i = n.leading === !1 ? 0 : Date.now()), (r = null), t.apply(c, s);
        }, a));
  };
}
function Ya(t, e, n, r, i = window) {
  let s = i.Object.getOwnPropertyDescriptor(t, e);
  return (
    i.Object.defineProperty(
      t,
      e,
      r
        ? n
        : {
            set(o) {
              setTimeout(() => {
                n.set.call(this, o);
              }, 0),
                s && s.set && s.set.call(this, o);
            },
          }
    ),
    () => Ya(t, e, s || {}, !0)
  );
}
function Ns(t, e, n) {
  try {
    if (!(e in t)) return () => {};
    let r = t[e],
      i = n(r);
    return (
      typeof i == "function" &&
        ((i.prototype = i.prototype || {}),
        Object.defineProperties(i, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (t[e] = i),
      () => {
        t[e] = r;
      }
    );
  } catch {
    return () => {};
  }
}
var Lr = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  (Lr = () => new Date().getTime());
function $a(t) {
  var e, n, r, i, s, o;
  let a = t.document;
  return {
    left: a.scrollingElement
      ? a.scrollingElement.scrollLeft
      : t.pageXOffset !== void 0
      ? t.pageXOffset
      : a?.documentElement.scrollLeft ||
        ((n =
          (e = a?.body) === null || e === void 0 ? void 0 : e.parentElement) ===
          null || n === void 0
          ? void 0
          : n.scrollLeft) ||
        ((r = a?.body) === null || r === void 0 ? void 0 : r.scrollLeft) ||
        0,
    top: a.scrollingElement
      ? a.scrollingElement.scrollTop
      : t.pageYOffset !== void 0
      ? t.pageYOffset
      : a?.documentElement.scrollTop ||
        ((s =
          (i = a?.body) === null || i === void 0 ? void 0 : i.parentElement) ===
          null || s === void 0
          ? void 0
          : s.scrollTop) ||
        ((o = a?.body) === null || o === void 0 ? void 0 : o.scrollTop) ||
        0,
  };
}
function ja() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function Wa() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function De(t, e, n, r, i) {
  if (!t) return !1;
  let s = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
  if (!s) return !1;
  let o = Jt(e, n);
  if (!i) {
    let u = r && s.matches(r);
    return o(s) && !u;
  }
  let a = vt(s, o),
    c = -1;
  return a < 0
    ? !1
    : (r && (c = vt(s, Jt(null, r))), a > -1 && c < 0 ? !0 : a < c);
}
function Fl(t, e) {
  return e.getId(t) !== -1;
}
function Zi(t, e) {
  return e.getId(t) === Hn;
}
function za(t, e) {
  if (Un(t)) return !1;
  let n = e.getId(t);
  return e.has(n)
    ? t.parentNode && t.parentNode.nodeType === t.DOCUMENT_NODE
      ? !1
      : t.parentNode
      ? za(t.parentNode, e)
      : !0
    : !0;
}
function rs(t) {
  return Boolean(t.changedTouches);
}
function Gl(t = window) {
  "NodeList" in t &&
    !t.NodeList.prototype.forEach &&
    (t.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList" in t &&
      !t.DOMTokenList.prototype.forEach &&
      (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = (...e) => {
        let n = e[0];
        if (!(0 in e)) throw new TypeError("1 argument is required");
        do if (this === n) return !0;
        while ((n = n && n.parentNode));
        return !1;
      });
}
function qa(t, e) {
  return Boolean(t.nodeName === "IFRAME" && e.getMeta(t));
}
function Va(t, e) {
  return Boolean(
    t.nodeName === "LINK" &&
      t.nodeType === t.ELEMENT_NODE &&
      t.getAttribute &&
      t.getAttribute("rel") === "stylesheet" &&
      e.getMeta(t)
  );
}
function is(t) {
  return Boolean(t?.shadowRoot);
}
var ss = class {
  constructor() {
    (this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map());
  }
  getId(e) {
    var n;
    return (n = this.styleIDMap.get(e)) !== null && n !== void 0 ? n : -1;
  }
  has(e) {
    return this.styleIDMap.has(e);
  }
  add(e, n) {
    if (this.has(e)) return this.getId(e);
    let r;
    return (
      n === void 0 ? (r = this.id++) : (r = n),
      this.styleIDMap.set(e, r),
      this.idStyleMap.set(r, e),
      r
    );
  }
  getStyle(e) {
    return this.idStyleMap.get(e) || null;
  }
  reset() {
    (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1);
  }
  generateId() {
    return this.id++;
  }
};
function Ka(t) {
  var e, n;
  let r = null;
  return (
    ((n = (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t)) ===
      null || n === void 0
      ? void 0
      : n.nodeType) === Node.DOCUMENT_FRAGMENT_NODE &&
      t.getRootNode().host &&
      (r = t.getRootNode().host),
    r
  );
}
function Hl(t) {
  let e = t,
    n;
  for (; (n = Ka(e)); ) e = n;
  return e;
}
function Yl(t) {
  let e = t.ownerDocument;
  if (!e) return !1;
  let n = Hl(t);
  return e.contains(n);
}
function Xa(t) {
  let e = t.ownerDocument;
  return e ? e.contains(t) || Yl(t) : !1;
}
var w = ((t) => (
    (t[(t.DomContentLoaded = 0)] = "DomContentLoaded"),
    (t[(t.Load = 1)] = "Load"),
    (t[(t.FullSnapshot = 2)] = "FullSnapshot"),
    (t[(t.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (t[(t.Meta = 4)] = "Meta"),
    (t[(t.Custom = 5)] = "Custom"),
    (t[(t.Plugin = 6)] = "Plugin"),
    t
  ))(w || {}),
  k = ((t) => (
    (t[(t.Mutation = 0)] = "Mutation"),
    (t[(t.MouseMove = 1)] = "MouseMove"),
    (t[(t.MouseInteraction = 2)] = "MouseInteraction"),
    (t[(t.Scroll = 3)] = "Scroll"),
    (t[(t.ViewportResize = 4)] = "ViewportResize"),
    (t[(t.Input = 5)] = "Input"),
    (t[(t.TouchMove = 6)] = "TouchMove"),
    (t[(t.MediaInteraction = 7)] = "MediaInteraction"),
    (t[(t.StyleSheetRule = 8)] = "StyleSheetRule"),
    (t[(t.CanvasMutation = 9)] = "CanvasMutation"),
    (t[(t.Font = 10)] = "Font"),
    (t[(t.Log = 11)] = "Log"),
    (t[(t.Drag = 12)] = "Drag"),
    (t[(t.StyleDeclaration = 13)] = "StyleDeclaration"),
    (t[(t.Selection = 14)] = "Selection"),
    (t[(t.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (t[(t.CustomElement = 16)] = "CustomElement"),
    t
  ))(k || {}),
  oe = ((t) => (
    (t[(t.MouseUp = 0)] = "MouseUp"),
    (t[(t.MouseDown = 1)] = "MouseDown"),
    (t[(t.Click = 2)] = "Click"),
    (t[(t.ContextMenu = 3)] = "ContextMenu"),
    (t[(t.DblClick = 4)] = "DblClick"),
    (t[(t.Focus = 5)] = "Focus"),
    (t[(t.Blur = 6)] = "Blur"),
    (t[(t.TouchStart = 7)] = "TouchStart"),
    (t[(t.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (t[(t.TouchEnd = 9)] = "TouchEnd"),
    (t[(t.TouchCancel = 10)] = "TouchCancel"),
    t
  ))(oe || {}),
  $e = ((t) => (
    (t[(t.Mouse = 0)] = "Mouse"),
    (t[(t.Pen = 1)] = "Pen"),
    (t[(t.Touch = 2)] = "Touch"),
    t
  ))($e || {});
function Ia(t) {
  return "__ln" in t;
}
var os = class {
    constructor() {
      (this.length = 0), (this.head = null), (this.tail = null);
    }
    get(e) {
      if (e >= this.length) throw new Error("Position outside of list range");
      let n = this.head;
      for (let r = 0; r < e; r++) n = n?.next || null;
      return n;
    }
    addNode(e) {
      let n = { value: e, previous: null, next: null };
      if (((e.__ln = n), e.previousSibling && Ia(e.previousSibling))) {
        let r = e.previousSibling.__ln.next;
        (n.next = r),
          (n.previous = e.previousSibling.__ln),
          (e.previousSibling.__ln.next = n),
          r && (r.previous = n);
      } else if (
        e.nextSibling &&
        Ia(e.nextSibling) &&
        e.nextSibling.__ln.previous
      ) {
        let r = e.nextSibling.__ln.previous;
        (n.previous = r),
          (n.next = e.nextSibling.__ln),
          (e.nextSibling.__ln.previous = n),
          r && (r.next = n);
      } else
        this.head && (this.head.previous = n),
          (n.next = this.head),
          (this.head = n);
      n.next === null && (this.tail = n), this.length++;
    }
    removeNode(e) {
      let n = e.__ln;
      !this.head ||
        (n.previous
          ? ((n.previous.next = n.next),
            n.next ? (n.next.previous = n.previous) : (this.tail = n.previous))
          : ((this.head = n.next),
            this.head ? (this.head.previous = null) : (this.tail = null)),
        e.__ln && delete e.__ln,
        this.length--);
    }
  },
  ka = (t, e) => `${t}@${e}`,
  as = class {
    constructor() {
      (this.frozen = !1),
        (this.locked = !1),
        (this.texts = []),
        (this.attributes = []),
        (this.removes = []),
        (this.mapRemoves = []),
        (this.movedMap = {}),
        (this.addedSet = new Set()),
        (this.movedSet = new Set()),
        (this.droppedSet = new Set()),
        (this.processMutations = (e) => {
          e.forEach(this.processMutation), this.emit();
        }),
        (this.emit = () => {
          if (this.frozen || this.locked) return;
          let e = [],
            n = new Set(),
            r = new os(),
            i = (c) => {
              let u = c,
                d = Hn;
              for (; d === Hn; )
                (u = u && u.nextSibling), (d = u && this.mirror.getId(u));
              return d;
            },
            s = (c) => {
              if (!c.parentNode || !Xa(c)) return;
              let u = Un(c.parentNode)
                  ? this.mirror.getId(Ka(c))
                  : this.mirror.getId(c.parentNode),
                d = i(c);
              if (u === -1 || d === -1) return r.addNode(c);
              let l = Qt(c, {
                doc: this.doc,
                mirror: this.mirror,
                blockClass: this.blockClass,
                blockSelector: this.blockSelector,
                maskAllText: this.maskAllText,
                unblockSelector: this.unblockSelector,
                maskTextClass: this.maskTextClass,
                unmaskTextClass: this.unmaskTextClass,
                maskTextSelector: this.maskTextSelector,
                unmaskTextSelector: this.unmaskTextSelector,
                skipChild: !0,
                newlyAddedElement: !0,
                inlineStylesheet: this.inlineStylesheet,
                maskInputOptions: this.maskInputOptions,
                maskAttributeFn: this.maskAttributeFn,
                maskTextFn: this.maskTextFn,
                maskInputFn: this.maskInputFn,
                slimDOMOptions: this.slimDOMOptions,
                dataURLOptions: this.dataURLOptions,
                recordCanvas: this.recordCanvas,
                inlineImages: this.inlineImages,
                onSerialize: (f) => {
                  qa(f, this.mirror) && this.iframeManager.addIframe(f),
                    Va(f, this.mirror) &&
                      this.stylesheetManager.trackLinkElement(f),
                    is(c) &&
                      this.shadowDomManager.addShadowRoot(
                        c.shadowRoot,
                        this.doc
                      );
                },
                onIframeLoad: (f, h) => {
                  this.iframeManager.attachIframe(f, h),
                    this.shadowDomManager.observeAttachShadow(f);
                },
                onStylesheetLoad: (f, h) => {
                  this.stylesheetManager.attachLinkElement(f, h);
                },
              });
              l && (e.push({ parentId: u, nextId: d, node: l }), n.add(l.id));
            };
          for (; this.mapRemoves.length; )
            this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (let c of this.movedSet)
            (wa(this.removes, c, this.mirror) &&
              !this.movedSet.has(c.parentNode)) ||
              s(c);
          for (let c of this.addedSet)
            (!xa(this.droppedSet, c) && !wa(this.removes, c, this.mirror)) ||
            xa(this.movedSet, c)
              ? s(c)
              : this.droppedSet.add(c);
          let o = null;
          for (; r.length; ) {
            let c = null;
            if (o) {
              let u = this.mirror.getId(o.value.parentNode),
                d = i(o.value);
              u !== -1 && d !== -1 && (c = o);
            }
            if (!c) {
              let u = r.tail;
              for (; u; ) {
                let d = u;
                if (((u = u.previous), d)) {
                  let l = this.mirror.getId(d.value.parentNode);
                  if (i(d.value) === -1) continue;
                  if (l !== -1) {
                    c = d;
                    break;
                  } else {
                    let h = d.value;
                    if (
                      h.parentNode &&
                      h.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                    ) {
                      let m = h.parentNode.host;
                      if (this.mirror.getId(m) !== -1) {
                        c = d;
                        break;
                      }
                    }
                  }
                }
              }
            }
            if (!c) {
              for (; r.head; ) r.removeNode(r.head.value);
              break;
            }
            (o = c.previous), r.removeNode(c.value), s(c.value);
          }
          let a = {
            texts: this.texts
              .map((c) => ({ id: this.mirror.getId(c.node), value: c.value }))
              .filter((c) => !n.has(c.id))
              .filter((c) => this.mirror.has(c.id)),
            attributes: this.attributes
              .map((c) => {
                let { attributes: u } = c;
                if (typeof u.style == "string") {
                  let d = JSON.stringify(c.styleDiff),
                    l = JSON.stringify(c._unchangedStyles);
                  d.length < u.style.length &&
                    (d + l).split("var(").length ===
                      u.style.split("var(").length &&
                    (u.style = c.styleDiff);
                }
                return { id: this.mirror.getId(c.node), attributes: u };
              })
              .filter((c) => !n.has(c.id))
              .filter((c) => this.mirror.has(c.id)),
            removes: this.removes,
            adds: e,
          };
          (!a.texts.length &&
            !a.attributes.length &&
            !a.removes.length &&
            !a.adds.length) ||
            ((this.texts = []),
            (this.attributes = []),
            (this.removes = []),
            (this.addedSet = new Set()),
            (this.movedSet = new Set()),
            (this.droppedSet = new Set()),
            (this.movedMap = {}),
            this.mutationCb(a));
        }),
        (this.processMutation = (e) => {
          if (Zi(e.target, this.mirror)) return;
          let n;
          try {
            n = document.implementation.createHTMLDocument();
          } catch {
            n = this.doc;
          }
          switch (e.type) {
            case "characterData": {
              let r = e.target.textContent;
              !De(
                e.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1
              ) &&
                r !== e.oldValue &&
                this.texts.push({
                  value:
                    nn(
                      e.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      this.maskAllText
                    ) && r
                      ? this.maskTextFn
                        ? this.maskTextFn(r)
                        : r.replace(/[\S]/g, "*")
                      : r,
                  node: e.target,
                });
              break;
            }
            case "attributes": {
              let r = e.target,
                i = e.attributeName,
                s = e.target.getAttribute(i);
              if (i === "value") {
                let a = ks(r),
                  c = r.tagName;
                s = Ar(r, c, a);
                let u = Wr({
                    maskInputOptions: this.maskInputOptions,
                    tagName: c,
                    type: a,
                  }),
                  d = nn(
                    e.target,
                    this.maskTextClass,
                    this.maskTextSelector,
                    this.unmaskTextClass,
                    this.unmaskTextSelector,
                    u
                  );
                s = Gn({
                  isMasked: d,
                  element: r,
                  value: s,
                  maskInputFn: this.maskInputFn,
                });
              }
              if (
                De(
                  e.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1
                ) ||
                s === e.oldValue
              )
                return;
              let o = this.attributes.find((a) => a.node === e.target);
              if (
                r.tagName === "IFRAME" &&
                i === "src" &&
                !this.keepIframeSrcFn(s)
              )
                if (!r.contentDocument) i = "rr_src";
                else return;
              if (
                (o ||
                  ((o = {
                    node: e.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {},
                  }),
                  this.attributes.push(o)),
                i === "type" &&
                  r.tagName === "INPUT" &&
                  (e.oldValue || "").toLowerCase() === "password" &&
                  r.setAttribute("data-rr-is-password", "true"),
                !Ha(r.tagName, i) &&
                  ((o.attributes[i] = Ga(
                    this.doc,
                    tn(r.tagName),
                    tn(i),
                    s,
                    r,
                    this.maskAttributeFn
                  )),
                  i === "style"))
              ) {
                let a = n.createElement("span");
                e.oldValue && a.setAttribute("style", e.oldValue);
                for (let c of Array.from(r.style)) {
                  let u = r.style.getPropertyValue(c),
                    d = r.style.getPropertyPriority(c);
                  u !== a.style.getPropertyValue(c) ||
                  d !== a.style.getPropertyPriority(c)
                    ? d === ""
                      ? (o.styleDiff[c] = u)
                      : (o.styleDiff[c] = [u, d])
                    : (o._unchangedStyles[c] = [u, d]);
                }
                for (let c of Array.from(a.style))
                  r.style.getPropertyValue(c) === "" && (o.styleDiff[c] = !1);
              }
              break;
            }
            case "childList": {
              if (
                De(
                  e.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !0
                )
              )
                return;
              e.addedNodes.forEach((r) => this.genAdds(r, e.target)),
                e.removedNodes.forEach((r) => {
                  let i = this.mirror.getId(r),
                    s = Un(e.target)
                      ? this.mirror.getId(e.target.host)
                      : this.mirror.getId(e.target);
                  De(
                    e.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1
                  ) ||
                    Zi(r, this.mirror) ||
                    !Fl(r, this.mirror) ||
                    (this.addedSet.has(r)
                      ? (cs(this.addedSet, r), this.droppedSet.add(r))
                      : (this.addedSet.has(e.target) && i === -1) ||
                        za(e.target, this.mirror) ||
                        (this.movedSet.has(r) && this.movedMap[ka(i, s)]
                          ? cs(this.movedSet, r)
                          : this.removes.push({
                              parentId: s,
                              id: i,
                              isShadow:
                                Un(e.target) && Pn(e.target) ? !0 : void 0,
                            })),
                    this.mapRemoves.push(r));
                });
              break;
            }
          }
        }),
        (this.genAdds = (e, n) => {
          if (
            !this.processedNodeManager.inOtherBuffer(e, this) &&
            !(this.addedSet.has(e) || this.movedSet.has(e))
          ) {
            if (this.mirror.hasNode(e)) {
              if (Zi(e, this.mirror)) return;
              this.movedSet.add(e);
              let r = null;
              n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
                r &&
                  r !== -1 &&
                  (this.movedMap[ka(this.mirror.getId(e), r)] = !0);
            } else this.addedSet.add(e), this.droppedSet.delete(e);
            De(
              e,
              this.blockClass,
              this.blockSelector,
              this.unblockSelector,
              !1
            ) ||
              (e.childNodes.forEach((r) => this.genAdds(r)),
              is(e) &&
                e.shadowRoot.childNodes.forEach((r) => {
                  this.processedNodeManager.add(r, this), this.genAdds(r, e);
                }));
          }
        });
    }
    init(e) {
      [
        "mutationCb",
        "blockClass",
        "blockSelector",
        "unblockSelector",
        "maskAllText",
        "maskTextClass",
        "unmaskTextClass",
        "maskTextSelector",
        "unmaskTextSelector",
        "inlineStylesheet",
        "maskInputOptions",
        "maskAttributeFn",
        "maskTextFn",
        "maskInputFn",
        "keepIframeSrcFn",
        "recordCanvas",
        "inlineImages",
        "slimDOMOptions",
        "dataURLOptions",
        "doc",
        "mirror",
        "iframeManager",
        "stylesheetManager",
        "shadowDomManager",
        "canvasManager",
        "processedNodeManager",
      ].forEach((n) => {
        this[n] = e[n];
      });
    }
    freeze() {
      (this.frozen = !0), this.canvasManager.freeze();
    }
    unfreeze() {
      (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
    }
    isFrozen() {
      return this.frozen;
    }
    lock() {
      (this.locked = !0), this.canvasManager.lock();
    }
    unlock() {
      (this.locked = !1), this.canvasManager.unlock(), this.emit();
    }
    reset() {
      this.shadowDomManager.reset(), this.canvasManager.reset();
    }
  };
function cs(t, e) {
  t.delete(e), e.childNodes.forEach((n) => cs(t, n));
}
function wa(t, e, n) {
  return t.length === 0 ? !1 : Ja(t, e, n);
}
function Ja(t, e, n) {
  let { parentNode: r } = e;
  if (!r) return !1;
  let i = n.getId(r);
  return t.some((s) => s.id === i) ? !0 : Ja(t, r, n);
}
function xa(t, e) {
  return t.size === 0 ? !1 : Qa(t, e);
}
function Qa(t, e) {
  let { parentNode: n } = e;
  return n ? (t.has(n) ? !0 : Qa(t, n)) : !1;
}
var Fn;
function $l(t) {
  Fn = t;
}
function jl() {
  Fn = void 0;
}
var O = (t) =>
    Fn
      ? (...n) => {
          try {
            return t(...n);
          } catch (r) {
            if (Fn && Fn(r) === !0) return () => {};
            throw r;
          }
        }
      : t,
  Zt = [];
function zn(t) {
  try {
    if ("composedPath" in t) {
      let e = t.composedPath();
      if (e.length) return e[0];
    } else if ("path" in t && t.path.length) return t.path[0];
  } catch {}
  return t && t.target;
}
function Za(t, e) {
  var n, r;
  let i = new as();
  Zt.push(i), i.init(t);
  let s = window.MutationObserver || window.__rrMutationObserver,
    o =
      (r =
        (n = window?.Zone) === null || n === void 0 ? void 0 : n.__symbol__) ===
        null || r === void 0
        ? void 0
        : r.call(n, "MutationObserver");
  o && window[o] && (s = window[o]);
  let a = new s(
    O((c) => {
      (t.onMutation && t.onMutation(c) === !1) || i.processMutations.bind(i)(c);
    })
  );
  return (
    a.observe(e, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    a
  );
}
function Wl({ mousemoveCb: t, sampling: e, doc: n, mirror: r }) {
  if (e.mousemove === !1) return () => {};
  let i = typeof e.mousemove == "number" ? e.mousemove : 50,
    s = typeof e.mousemoveCallback == "number" ? e.mousemoveCallback : 500,
    o = [],
    a,
    c = Yn(
      O((l) => {
        let f = Date.now() - a;
        t(
          o.map((h) => ((h.timeOffset -= f), h)),
          l
        ),
          (o = []),
          (a = null);
      }),
      s
    ),
    u = O(
      Yn(
        O((l) => {
          let f = zn(l),
            { clientX: h, clientY: m } = rs(l) ? l.changedTouches[0] : l;
          a || (a = Lr()),
            o.push({ x: h, y: m, id: r.getId(f), timeOffset: Lr() - a }),
            c(
              typeof DragEvent < "u" && l instanceof DragEvent
                ? k.Drag
                : l instanceof MouseEvent
                ? k.MouseMove
                : k.TouchMove
            );
        }),
        i,
        { trailing: !1 }
      )
    ),
    d = [ce("mousemove", u, n), ce("touchmove", u, n), ce("drag", u, n)];
  return O(() => {
    d.forEach((l) => l());
  });
}
function zl({
  mouseInteractionCb: t,
  doc: e,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: s,
  sampling: o,
}) {
  if (o.mouseInteraction === !1) return () => {};
  let a =
      o.mouseInteraction === !0 || o.mouseInteraction === void 0
        ? {}
        : o.mouseInteraction,
    c = [],
    u = null,
    d = (l) => (f) => {
      let h = zn(f);
      if (De(h, r, i, s, !0)) return;
      let m = null,
        _ = l;
      if ("pointerType" in f) {
        switch (f.pointerType) {
          case "mouse":
            m = $e.Mouse;
            break;
          case "touch":
            m = $e.Touch;
            break;
          case "pen":
            m = $e.Pen;
            break;
        }
        m === $e.Touch
          ? oe[l] === oe.MouseDown
            ? (_ = "TouchStart")
            : oe[l] === oe.MouseUp && (_ = "TouchEnd")
          : $e.Pen;
      } else rs(f) && (m = $e.Touch);
      m !== null
        ? ((u = m),
          ((_.startsWith("Touch") && m === $e.Touch) ||
            (_.startsWith("Mouse") && m === $e.Mouse)) &&
            (m = null))
        : oe[l] === oe.Click && ((m = u), (u = null));
      let T = rs(f) ? f.changedTouches[0] : f;
      if (!T) return;
      let E = n.getId(h),
        { clientX: R, clientY: C } = T;
      O(t)(
        Object.assign(
          { type: oe[_], id: E, x: R, y: C },
          m !== null && { pointerType: m }
        )
      );
    };
  return (
    Object.keys(oe)
      .filter(
        (l) =>
          Number.isNaN(Number(l)) && !l.endsWith("_Departed") && a[l] !== !1
      )
      .forEach((l) => {
        let f = tn(l),
          h = d(l);
        if (window.PointerEvent)
          switch (oe[l]) {
            case oe.MouseDown:
            case oe.MouseUp:
              f = f.replace("mouse", "pointer");
              break;
            case oe.TouchStart:
            case oe.TouchEnd:
              return;
          }
        c.push(ce(f, h, e));
      }),
    O(() => {
      c.forEach((l) => l());
    })
  );
}
function ec({
  scrollCb: t,
  doc: e,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: s,
  sampling: o,
}) {
  let a = O(
    Yn(
      O((c) => {
        let u = zn(c);
        if (!u || De(u, r, i, s, !0)) return;
        let d = n.getId(u);
        if (u === e && e.defaultView) {
          let l = $a(e.defaultView);
          t({ id: d, x: l.left, y: l.top });
        } else t({ id: d, x: u.scrollLeft, y: u.scrollTop });
      }),
      o.scroll || 100
    )
  );
  return ce("scroll", a, e);
}
function ql({ viewportResizeCb: t }, { win: e }) {
  let n = -1,
    r = -1,
    i = O(
      Yn(
        O(() => {
          let s = ja(),
            o = Wa();
          (n !== s || r !== o) &&
            (t({ width: Number(o), height: Number(s) }), (n = s), (r = o));
        }),
        200
      )
    );
  return ce("resize", i, e);
}
var Vl = ["INPUT", "TEXTAREA", "SELECT"],
  Na = new WeakMap();
function Kl({
  inputCb: t,
  doc: e,
  mirror: n,
  blockClass: r,
  blockSelector: i,
  unblockSelector: s,
  ignoreClass: o,
  ignoreSelector: a,
  maskInputOptions: c,
  maskInputFn: u,
  sampling: d,
  userTriggeredOnInput: l,
  maskTextClass: f,
  unmaskTextClass: h,
  maskTextSelector: m,
  unmaskTextSelector: _,
}) {
  function T(g) {
    let M = zn(g),
      H = g.isTrusted,
      y = M && ns(M.tagName);
    if (
      (y === "OPTION" && (M = M.parentElement),
      !M || !y || Vl.indexOf(y) < 0 || De(M, r, i, s, !0))
    )
      return;
    let I = M;
    if (I.classList.contains(o) || (a && I.matches(a))) return;
    let G = ks(M),
      K = Ar(I, y, G),
      V = !1,
      pe = Wr({ maskInputOptions: c, tagName: y, type: G }),
      U = nn(M, f, m, h, _, pe);
    (G === "radio" || G === "checkbox") && (V = M.checked),
      (K = Gn({ isMasked: U, element: M, value: K, maskInputFn: u })),
      E(
        M,
        l
          ? { text: K, isChecked: V, userTriggered: H }
          : { text: K, isChecked: V }
      );
    let Oe = M.name;
    G === "radio" &&
      Oe &&
      V &&
      e.querySelectorAll(`input[type="radio"][name="${Oe}"]`).forEach((j) => {
        if (j !== M) {
          let ue = Gn({
            isMasked: U,
            element: j,
            value: Ar(j, y, G),
            maskInputFn: u,
          });
          E(
            j,
            l
              ? { text: ue, isChecked: !V, userTriggered: !1 }
              : { text: ue, isChecked: !V }
          );
        }
      });
  }
  function E(g, M) {
    let H = Na.get(g);
    if (!H || H.text !== M.text || H.isChecked !== M.isChecked) {
      Na.set(g, M);
      let y = n.getId(g);
      O(t)(Object.assign(Object.assign({}, M), { id: y }));
    }
  }
  let C = (d.input === "last" ? ["change"] : ["input", "change"]).map((g) =>
      ce(g, O(T), e)
    ),
    A = e.defaultView;
  if (!A)
    return () => {
      C.forEach((g) => g());
    };
  let q = A.Object.getOwnPropertyDescriptor(
      A.HTMLInputElement.prototype,
      "value"
    ),
    v = [
      [A.HTMLInputElement.prototype, "value"],
      [A.HTMLInputElement.prototype, "checked"],
      [A.HTMLSelectElement.prototype, "value"],
      [A.HTMLTextAreaElement.prototype, "value"],
      [A.HTMLSelectElement.prototype, "selectedIndex"],
      [A.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    q &&
      q.set &&
      C.push(
        ...v.map((g) =>
          Ya(
            g[0],
            g[1],
            {
              set() {
                O(T)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            A
          )
        )
      ),
    O(() => {
      C.forEach((g) => g());
    })
  );
}
function Ur(t) {
  let e = [];
  function n(r, i) {
    if (
      (Dr("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule) ||
      (Dr("CSSMediaRule") && r.parentRule instanceof CSSMediaRule) ||
      (Dr("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule) ||
      (Dr("CSSConditionRule") && r.parentRule instanceof CSSConditionRule)
    ) {
      let o = Array.from(r.parentRule.cssRules).indexOf(r);
      i.unshift(o);
    } else if (r.parentStyleSheet) {
      let o = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
      i.unshift(o);
    }
    return i;
  }
  return n(t, e);
}
function st(t, e, n) {
  let r, i;
  return t
    ? (t.ownerNode ? (r = e.getId(t.ownerNode)) : (i = n.getId(t)),
      { styleId: i, id: r })
    : {};
}
function Xl(
  { styleSheetRuleCb: t, mirror: e, stylesheetManager: n },
  { win: r }
) {
  if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
  let i = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = new Proxy(i, {
    apply: O((d, l, f) => {
      let [h, m] = f,
        { id: _, styleId: T } = st(l, e, n.styleMirror);
      return (
        ((_ && _ !== -1) || (T && T !== -1)) &&
          t({ id: _, styleId: T, adds: [{ rule: h, index: m }] }),
        d.apply(l, f)
      );
    }),
  });
  let s = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = new Proxy(s, {
    apply: O((d, l, f) => {
      let [h] = f,
        { id: m, styleId: _ } = st(l, e, n.styleMirror);
      return (
        ((m && m !== -1) || (_ && _ !== -1)) &&
          t({ id: m, styleId: _, removes: [{ index: h }] }),
        d.apply(l, f)
      );
    }),
  });
  let o;
  r.CSSStyleSheet.prototype.replace &&
    ((o = r.CSSStyleSheet.prototype.replace),
    (r.CSSStyleSheet.prototype.replace = new Proxy(o, {
      apply: O((d, l, f) => {
        let [h] = f,
          { id: m, styleId: _ } = st(l, e, n.styleMirror);
        return (
          ((m && m !== -1) || (_ && _ !== -1)) &&
            t({ id: m, styleId: _, replace: h }),
          d.apply(l, f)
        );
      }),
    })));
  let a;
  r.CSSStyleSheet.prototype.replaceSync &&
    ((a = r.CSSStyleSheet.prototype.replaceSync),
    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
      apply: O((d, l, f) => {
        let [h] = f,
          { id: m, styleId: _ } = st(l, e, n.styleMirror);
        return (
          ((m && m !== -1) || (_ && _ !== -1)) &&
            t({ id: m, styleId: _, replaceSync: h }),
          d.apply(l, f)
        );
      }),
    })));
  let c = {};
  Cr("CSSGroupingRule")
    ? (c.CSSGroupingRule = r.CSSGroupingRule)
    : (Cr("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule),
      Cr("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule),
      Cr("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
  let u = {};
  return (
    Object.entries(c).forEach(([d, l]) => {
      (u[d] = {
        insertRule: l.prototype.insertRule,
        deleteRule: l.prototype.deleteRule,
      }),
        (l.prototype.insertRule = new Proxy(u[d].insertRule, {
          apply: O((f, h, m) => {
            let [_, T] = m,
              { id: E, styleId: R } = st(h.parentStyleSheet, e, n.styleMirror);
            return (
              ((E && E !== -1) || (R && R !== -1)) &&
                t({
                  id: E,
                  styleId: R,
                  adds: [{ rule: _, index: [...Ur(h), T || 0] }],
                }),
              f.apply(h, m)
            );
          }),
        })),
        (l.prototype.deleteRule = new Proxy(u[d].deleteRule, {
          apply: O((f, h, m) => {
            let [_] = m,
              { id: T, styleId: E } = st(h.parentStyleSheet, e, n.styleMirror);
            return (
              ((T && T !== -1) || (E && E !== -1)) &&
                t({ id: T, styleId: E, removes: [{ index: [...Ur(h), _] }] }),
              f.apply(h, m)
            );
          }),
        }));
    }),
    O(() => {
      (r.CSSStyleSheet.prototype.insertRule = i),
        (r.CSSStyleSheet.prototype.deleteRule = s),
        o && (r.CSSStyleSheet.prototype.replace = o),
        a && (r.CSSStyleSheet.prototype.replaceSync = a),
        Object.entries(c).forEach(([d, l]) => {
          (l.prototype.insertRule = u[d].insertRule),
            (l.prototype.deleteRule = u[d].deleteRule);
        });
    })
  );
}
function tc({ mirror: t, stylesheetManager: e }, n) {
  var r, i, s;
  let o = null;
  n.nodeName === "#document" ? (o = t.getId(n)) : (o = t.getId(n.host));
  let a =
      n.nodeName === "#document"
        ? (r = n.defaultView) === null || r === void 0
          ? void 0
          : r.Document
        : (s =
            (i = n.ownerDocument) === null || i === void 0
              ? void 0
              : i.defaultView) === null || s === void 0
        ? void 0
        : s.ShadowRoot,
    c = a?.prototype
      ? Object.getOwnPropertyDescriptor(a?.prototype, "adoptedStyleSheets")
      : void 0;
  return o === null || o === -1 || !a || !c
    ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: c.configurable,
        enumerable: c.enumerable,
        get() {
          var u;
          return (u = c.get) === null || u === void 0 ? void 0 : u.call(this);
        },
        set(u) {
          var d;
          let l =
            (d = c.set) === null || d === void 0 ? void 0 : d.call(this, u);
          if (o !== null && o !== -1)
            try {
              e.adoptStyleSheets(u, o);
            } catch {}
          return l;
        },
      }),
      O(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: c.configurable,
          enumerable: c.enumerable,
          get: c.get,
          set: c.set,
        });
      }));
}
function Jl(
  {
    styleDeclarationCb: t,
    mirror: e,
    ignoreCSSAttributes: n,
    stylesheetManager: r,
  },
  { win: i }
) {
  let s = i.CSSStyleDeclaration.prototype.setProperty;
  i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
    apply: O((a, c, u) => {
      var d;
      let [l, f, h] = u;
      if (n.has(l)) return s.apply(c, [l, f, h]);
      let { id: m, styleId: _ } = st(
        (d = c.parentRule) === null || d === void 0
          ? void 0
          : d.parentStyleSheet,
        e,
        r.styleMirror
      );
      return (
        ((m && m !== -1) || (_ && _ !== -1)) &&
          t({
            id: m,
            styleId: _,
            set: { property: l, value: f, priority: h },
            index: Ur(c.parentRule),
          }),
        a.apply(c, u)
      );
    }),
  });
  let o = i.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
      apply: O((a, c, u) => {
        var d;
        let [l] = u;
        if (n.has(l)) return o.apply(c, [l]);
        let { id: f, styleId: h } = st(
          (d = c.parentRule) === null || d === void 0
            ? void 0
            : d.parentStyleSheet,
          e,
          r.styleMirror
        );
        return (
          ((f && f !== -1) || (h && h !== -1)) &&
            t({
              id: f,
              styleId: h,
              remove: { property: l },
              index: Ur(c.parentRule),
            }),
          a.apply(c, u)
        );
      }),
    })),
    O(() => {
      (i.CSSStyleDeclaration.prototype.setProperty = s),
        (i.CSSStyleDeclaration.prototype.removeProperty = o);
    })
  );
}
function Ql({
  mediaInteractionCb: t,
  blockClass: e,
  blockSelector: n,
  unblockSelector: r,
  mirror: i,
  sampling: s,
  doc: o,
}) {
  let a = O((u) =>
      Yn(
        O((d) => {
          let l = zn(d);
          if (!l || De(l, e, n, r, !0)) return;
          let { currentTime: f, volume: h, muted: m, playbackRate: _ } = l;
          t({
            type: u,
            id: i.getId(l),
            currentTime: f,
            volume: h,
            muted: m,
            playbackRate: _,
          });
        }),
        s.media || 500
      )
    ),
    c = [
      ce("play", a(0), o),
      ce("pause", a(1), o),
      ce("seeked", a(2), o),
      ce("volumechange", a(3), o),
      ce("ratechange", a(4), o),
    ];
  return O(() => {
    c.forEach((u) => u());
  });
}
function Zl({ fontCb: t, doc: e }) {
  let n = e.defaultView;
  if (!n) return () => {};
  let r = [],
    i = new WeakMap(),
    s = n.FontFace;
  n.FontFace = function (c, u, d) {
    let l = new s(c, u, d);
    return (
      i.set(l, {
        family: c,
        buffer: typeof u != "string",
        descriptors: d,
        fontSource:
          typeof u == "string"
            ? u
            : JSON.stringify(Array.from(new Uint8Array(u))),
      }),
      l
    );
  };
  let o = Ns(e.fonts, "add", function (a) {
    return function (c) {
      return (
        setTimeout(
          O(() => {
            let u = i.get(c);
            u && (t(u), i.delete(c));
          }),
          0
        ),
        a.apply(this, [c])
      );
    };
  });
  return (
    r.push(() => {
      n.FontFace = s;
    }),
    r.push(o),
    O(() => {
      r.forEach((a) => a());
    })
  );
}
function ef(t) {
  let {
      doc: e,
      mirror: n,
      blockClass: r,
      blockSelector: i,
      unblockSelector: s,
      selectionCb: o,
    } = t,
    a = !0,
    c = O(() => {
      let u = e.getSelection();
      if (!u || (a && u?.isCollapsed)) return;
      a = u.isCollapsed || !1;
      let d = [],
        l = u.rangeCount || 0;
      for (let f = 0; f < l; f++) {
        let h = u.getRangeAt(f),
          {
            startContainer: m,
            startOffset: _,
            endContainer: T,
            endOffset: E,
          } = h;
        De(m, r, i, s, !0) ||
          De(T, r, i, s, !0) ||
          d.push({
            start: n.getId(m),
            startOffset: _,
            end: n.getId(T),
            endOffset: E,
          });
      }
      o({ ranges: d });
    });
  return c(), ce("selectionchange", c);
}
function tf({ doc: t, customElementCb: e }) {
  let n = t.defaultView;
  return !n || !n.customElements
    ? () => {}
    : Ns(n.customElements, "define", function (i) {
        return function (s, o, a) {
          try {
            e({ define: { name: s } });
          } catch {}
          return i.apply(this, [s, o, a]);
        };
      });
}
function nf(t, e = {}) {
  let n = t.doc.defaultView;
  if (!n) return () => {};
  let r = Za(t, t.doc),
    i = Wl(t),
    s = zl(t),
    o = ec(t),
    a = ql(t, { win: n }),
    c = Kl(t),
    u = Ql(t),
    d = Xl(t, { win: n }),
    l = tc(t, t.doc),
    f = Jl(t, { win: n }),
    h = t.collectFonts ? Zl(t) : () => {},
    m = ef(t),
    _ = tf(t);
  return O(() => {
    Zt.forEach((T) => T.reset()),
      r.disconnect(),
      i(),
      s(),
      o(),
      a(),
      c(),
      u(),
      d(),
      l(),
      f(),
      h(),
      m(),
      _();
  });
}
function Dr(t) {
  return typeof window[t] < "u";
}
function Cr(t) {
  return Boolean(
    typeof window[t] < "u" &&
      window[t].prototype &&
      "insertRule" in window[t].prototype &&
      "deleteRule" in window[t].prototype
  );
}
var $n = class {
    constructor(e) {
      (this.generateIdFn = e),
        (this.iframeIdToRemoteIdMap = new WeakMap()),
        (this.iframeRemoteIdToIdMap = new WeakMap());
    }
    getId(e, n, r, i) {
      let s = r || this.getIdToRemoteIdMap(e),
        o = i || this.getRemoteIdToIdMap(e),
        a = s.get(n);
      return a || ((a = this.generateIdFn()), s.set(n, a), o.set(a, n)), a;
    }
    getIds(e, n) {
      let r = this.getIdToRemoteIdMap(e),
        i = this.getRemoteIdToIdMap(e);
      return n.map((s) => this.getId(e, s, r, i));
    }
    getRemoteId(e, n, r) {
      let i = r || this.getRemoteIdToIdMap(e);
      if (typeof n != "number") return n;
      let s = i.get(n);
      return s || -1;
    }
    getRemoteIds(e, n) {
      let r = this.getRemoteIdToIdMap(e);
      return n.map((i) => this.getRemoteId(e, i, r));
    }
    reset(e) {
      if (!e) {
        (this.iframeIdToRemoteIdMap = new WeakMap()),
          (this.iframeRemoteIdToIdMap = new WeakMap());
        return;
      }
      this.iframeIdToRemoteIdMap.delete(e),
        this.iframeRemoteIdToIdMap.delete(e);
    }
    getIdToRemoteIdMap(e) {
      let n = this.iframeIdToRemoteIdMap.get(e);
      return n || ((n = new Map()), this.iframeIdToRemoteIdMap.set(e, n)), n;
    }
    getRemoteIdToIdMap(e) {
      let n = this.iframeRemoteIdToIdMap.get(e);
      return n || ((n = new Map()), this.iframeRemoteIdToIdMap.set(e, n)), n;
    }
  },
  us = class {
    constructor() {
      (this.crossOriginIframeMirror = new $n(ws)),
        (this.crossOriginIframeRootIdMap = new WeakMap());
    }
    addIframe() {}
    addLoadListener() {}
    attachIframe() {}
  },
  ds = class {
    constructor(e) {
      (this.iframes = new WeakMap()),
        (this.crossOriginIframeMap = new WeakMap()),
        (this.crossOriginIframeMirror = new $n(ws)),
        (this.crossOriginIframeRootIdMap = new WeakMap()),
        (this.mutationCb = e.mutationCb),
        (this.wrappedEmit = e.wrappedEmit),
        (this.stylesheetManager = e.stylesheetManager),
        (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
        (this.crossOriginIframeStyleMirror = new $n(
          this.stylesheetManager.styleMirror.generateId.bind(
            this.stylesheetManager.styleMirror
          )
        )),
        (this.mirror = e.mirror),
        this.recordCrossOriginIframes &&
          window.addEventListener("message", this.handleMessage.bind(this));
    }
    addIframe(e) {
      this.iframes.set(e, !0),
        e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
    }
    addLoadListener(e) {
      this.loadListener = e;
    }
    attachIframe(e, n) {
      var r;
      this.mutationCb({
        adds: [{ parentId: this.mirror.getId(e), nextId: null, node: n }],
        removes: [],
        texts: [],
        attributes: [],
        isAttachIframe: !0,
      }),
        (r = this.loadListener) === null || r === void 0 || r.call(this, e),
        e.contentDocument &&
          e.contentDocument.adoptedStyleSheets &&
          e.contentDocument.adoptedStyleSheets.length > 0 &&
          this.stylesheetManager.adoptStyleSheets(
            e.contentDocument.adoptedStyleSheets,
            this.mirror.getId(e.contentDocument)
          );
    }
    handleMessage(e) {
      let n = e;
      if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !e.source)
        return;
      let i = this.crossOriginIframeMap.get(e.source);
      if (!i) return;
      let s = this.transformCrossOriginEvent(i, n.data.event);
      s && this.wrappedEmit(s, n.data.isCheckout);
    }
    transformCrossOriginEvent(e, n) {
      var r;
      switch (n.type) {
        case w.FullSnapshot: {
          this.crossOriginIframeMirror.reset(e),
            this.crossOriginIframeStyleMirror.reset(e),
            this.replaceIdOnNode(n.data.node, e);
          let i = n.data.node.id;
          return (
            this.crossOriginIframeRootIdMap.set(e, i),
            this.patchRootIdOnNode(n.data.node, i),
            {
              timestamp: n.timestamp,
              type: w.IncrementalSnapshot,
              data: {
                source: k.Mutation,
                adds: [
                  {
                    parentId: this.mirror.getId(e),
                    nextId: null,
                    node: n.data.node,
                  },
                ],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0,
              },
            }
          );
        }
        case w.Meta:
        case w.Load:
        case w.DomContentLoaded:
          return !1;
        case w.Plugin:
          return n;
        case w.Custom:
          return (
            this.replaceIds(n.data.payload, e, [
              "id",
              "parentId",
              "previousId",
              "nextId",
            ]),
            n
          );
        case w.IncrementalSnapshot:
          switch (n.data.source) {
            case k.Mutation:
              return (
                n.data.adds.forEach((i) => {
                  this.replaceIds(i, e, ["parentId", "nextId", "previousId"]),
                    this.replaceIdOnNode(i.node, e);
                  let s = this.crossOriginIframeRootIdMap.get(e);
                  s && this.patchRootIdOnNode(i.node, s);
                }),
                n.data.removes.forEach((i) => {
                  this.replaceIds(i, e, ["parentId", "id"]);
                }),
                n.data.attributes.forEach((i) => {
                  this.replaceIds(i, e, ["id"]);
                }),
                n.data.texts.forEach((i) => {
                  this.replaceIds(i, e, ["id"]);
                }),
                n
              );
            case k.Drag:
            case k.TouchMove:
            case k.MouseMove:
              return (
                n.data.positions.forEach((i) => {
                  this.replaceIds(i, e, ["id"]);
                }),
                n
              );
            case k.ViewportResize:
              return !1;
            case k.MediaInteraction:
            case k.MouseInteraction:
            case k.Scroll:
            case k.CanvasMutation:
            case k.Input:
              return this.replaceIds(n.data, e, ["id"]), n;
            case k.StyleSheetRule:
            case k.StyleDeclaration:
              return (
                this.replaceIds(n.data, e, ["id"]),
                this.replaceStyleIds(n.data, e, ["styleId"]),
                n
              );
            case k.Font:
              return n;
            case k.Selection:
              return (
                n.data.ranges.forEach((i) => {
                  this.replaceIds(i, e, ["start", "end"]);
                }),
                n
              );
            case k.AdoptedStyleSheet:
              return (
                this.replaceIds(n.data, e, ["id"]),
                this.replaceStyleIds(n.data, e, ["styleIds"]),
                (r = n.data.styles) === null ||
                  r === void 0 ||
                  r.forEach((i) => {
                    this.replaceStyleIds(i, e, ["styleId"]);
                  }),
                n
              );
          }
      }
      return !1;
    }
    replace(e, n, r, i) {
      for (let s of i)
        (!Array.isArray(n[s]) && typeof n[s] != "number") ||
          (Array.isArray(n[s])
            ? (n[s] = e.getIds(r, n[s]))
            : (n[s] = e.getId(r, n[s])));
      return n;
    }
    replaceIds(e, n, r) {
      return this.replace(this.crossOriginIframeMirror, e, n, r);
    }
    replaceStyleIds(e, n, r) {
      return this.replace(this.crossOriginIframeStyleMirror, e, n, r);
    }
    replaceIdOnNode(e, n) {
      this.replaceIds(e, n, ["id", "rootId"]),
        "childNodes" in e &&
          e.childNodes.forEach((r) => {
            this.replaceIdOnNode(r, n);
          });
    }
    patchRootIdOnNode(e, n) {
      e.type !== Z.Document && !e.rootId && (e.rootId = n),
        "childNodes" in e &&
          e.childNodes.forEach((r) => {
            this.patchRootIdOnNode(r, n);
          });
    }
  },
  ls = class {
    init() {}
    addShadowRoot() {}
    observeAttachShadow() {}
    reset() {}
  },
  fs = class {
    constructor(e) {
      (this.shadowDoms = new WeakSet()),
        (this.restoreHandlers = []),
        (this.mutationCb = e.mutationCb),
        (this.scrollCb = e.scrollCb),
        (this.bypassOptions = e.bypassOptions),
        (this.mirror = e.mirror),
        this.init();
    }
    init() {
      this.reset(), this.patchAttachShadow(Element, document);
    }
    addShadowRoot(e, n) {
      if (!Pn(e) || this.shadowDoms.has(e)) return;
      this.shadowDoms.add(e);
      let r = Za(
        Object.assign(Object.assign({}, this.bypassOptions), {
          doc: n,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this,
        }),
        e
      );
      this.restoreHandlers.push(() => r.disconnect()),
        this.restoreHandlers.push(
          ec(
            Object.assign(Object.assign({}, this.bypassOptions), {
              scrollCb: this.scrollCb,
              doc: e,
              mirror: this.mirror,
            })
          )
        ),
        setTimeout(() => {
          e.adoptedStyleSheets &&
            e.adoptedStyleSheets.length > 0 &&
            this.bypassOptions.stylesheetManager.adoptStyleSheets(
              e.adoptedStyleSheets,
              this.mirror.getId(e.host)
            ),
            this.restoreHandlers.push(
              tc(
                {
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager,
                },
                e
              )
            );
        }, 0);
    }
    observeAttachShadow(e) {
      !e.contentWindow ||
        !e.contentDocument ||
        this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
    }
    patchAttachShadow(e, n) {
      let r = this;
      this.restoreHandlers.push(
        Ns(e.prototype, "attachShadow", function (i) {
          return function (s) {
            let o = i.call(this, s);
            return (
              this.shadowRoot &&
                Xa(this) &&
                r.addShadowRoot(this.shadowRoot, n),
              o
            );
          };
        })
      );
    }
    reset() {
      this.restoreHandlers.forEach((e) => {
        try {
          e();
        } catch {}
      }),
        (this.restoreHandlers = []),
        (this.shadowDoms = new WeakSet());
    }
  },
  ps = class {
    reset() {}
    freeze() {}
    unfreeze() {}
    lock() {}
    unlock() {}
  },
  hs = class {
    constructor(e) {
      (this.trackedLinkElements = new WeakSet()),
        (this.styleMirror = new ss()),
        (this.mutationCb = e.mutationCb),
        (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
    }
    attachLinkElement(e, n) {
      "_cssText" in n.attributes &&
        this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [{ id: n.id, attributes: n.attributes }],
        }),
        this.trackLinkElement(e);
    }
    trackLinkElement(e) {
      this.trackedLinkElements.has(e) ||
        (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
    }
    adoptStyleSheets(e, n) {
      if (e.length === 0) return;
      let r = { id: n, styleIds: [] },
        i = [];
      for (let s of e) {
        let o;
        this.styleMirror.has(s)
          ? (o = this.styleMirror.getId(s))
          : ((o = this.styleMirror.add(s)),
            i.push({
              styleId: o,
              rules: Array.from(s.rules || CSSRule, (a, c) => ({
                rule: Fa(a),
                index: c,
              })),
            })),
          r.styleIds.push(o);
      }
      i.length > 0 && (r.styles = i), this.adoptedStyleSheetCb(r);
    }
    reset() {
      this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet());
    }
    trackStylesheetInLinkElement(e) {}
  },
  ms = class {
    constructor() {
      (this.nodeMap = new WeakMap()),
        (this.loop = !0),
        this.periodicallyClear();
    }
    periodicallyClear() {
      requestAnimationFrame(() => {
        this.clear(), this.loop && this.periodicallyClear();
      });
    }
    inOtherBuffer(e, n) {
      let r = this.nodeMap.get(e);
      return r && Array.from(r).some((i) => i !== n);
    }
    add(e, n) {
      this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(n));
    }
    clear() {
      this.nodeMap = new WeakMap();
    }
    destroy() {
      this.loop = !1;
    }
  };
function te(t) {
  let e = t;
  return (e.timestamp = Lr()), e;
}
var Pr,
  je = ml();
function ct(t = {}) {
  let {
    emit: e,
    checkoutEveryNms: n,
    checkoutEveryNth: r,
    blockClass: i = "rr-block",
    blockSelector: s = null,
    unblockSelector: o = null,
    ignoreClass: a = "rr-ignore",
    ignoreSelector: c = null,
    maskAllText: u = !1,
    maskTextClass: d = "rr-mask",
    unmaskTextClass: l = null,
    maskTextSelector: f = null,
    unmaskTextSelector: h = null,
    inlineStylesheet: m = !0,
    maskAllInputs: _,
    maskInputOptions: T,
    slimDOMOptions: E,
    maskAttributeFn: R,
    maskInputFn: C,
    maskTextFn: A,
    packFn: q,
    sampling: v = {},
    dataURLOptions: g = {},
    mousemoveWait: M,
    recordCanvas: H = !1,
    recordCrossOriginIframes: y = !1,
    recordAfter: I = t.recordAfter === "DOMContentLoaded"
      ? t.recordAfter
      : "load",
    userTriggeredOnInput: G = !1,
    collectFonts: K = !1,
    inlineImages: V = !1,
    keepIframeSrcFn: pe = () => !1,
    ignoreCSSAttributes: U = new Set([]),
    errorHandler: Oe,
    onMutation: j,
    getCanvasManager: ue,
  } = t;
  $l(Oe);
  let ge = y ? window.parent === window : !0,
    Rt = !1;
  if (!ge)
    try {
      window.parent.document && (Rt = !1);
    } catch {
      Rt = !0;
    }
  if (ge && !e) throw new Error("emit function is required");
  M !== void 0 && v.mousemove === void 0 && (v.mousemove = M), je.reset();
  let It =
      _ === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : T !== void 0
        ? T
        : {},
    lt =
      E === !0 || E === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: E === "all",
            headMetaDescKeywords: E === "all",
          }
        : E || {};
  Gl();
  let an,
    cn = 0,
    Ks = (x) => (q && !Rt && (x = q(x)), x),
    J = (x, Qe) => {
      var Y;
      if (
        (((Y = Zt[0]) === null || Y === void 0 ? void 0 : Y.isFrozen()) &&
          x.type !== w.FullSnapshot &&
          !(x.type === w.IncrementalSnapshot && x.data.source === k.Mutation) &&
          Zt.forEach((se) => se.unfreeze()),
        ge)
      )
        e?.(Ks(x), Qe);
      else if (Rt) {
        let se = {
          type: "rrweb",
          event: Ks(x),
          origin: window.location.origin,
          isCheckout: Qe,
        };
        window.parent.postMessage(se, "*");
      }
      if (x.type === w.FullSnapshot) (an = x), (cn = 0);
      else if (x.type === w.IncrementalSnapshot) {
        if (x.data.source === k.Mutation && x.data.isAttachIframe) return;
        cn++;
        let se = r && cn >= r,
          $ = n && x.timestamp - an.timestamp > n;
        (se || $) && ni(!0);
      }
    },
    Vn = (x) => {
      J(
        te({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: k.Mutation }, x),
        })
      );
    },
    Xs = (x) =>
      J(
        te({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: k.Scroll }, x),
        })
      ),
    Qc = (x) =>
      J(
        te({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: k.CanvasMutation }, x),
        })
      ),
    Zc = (x) =>
      J(
        te({
          type: w.IncrementalSnapshot,
          data: Object.assign({ source: k.AdoptedStyleSheet }, x),
        })
      ),
    ft = new hs({ mutationCb: Vn, adoptedStyleSheetCb: Zc }),
    un =
      typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__
        ? new us()
        : new ds({
            mirror: je,
            mutationCb: Vn,
            stylesheetManager: ft,
            recordCrossOriginIframes: y,
            wrappedEmit: J,
          }),
    ti = new ms(),
    Js = ue
      ? ue({
          recordCanvas: H,
          blockClass: i,
          blockSelector: s,
          unblockSelector: o,
          sampling: v.canvas,
          dataURLOptions: g,
        })
      : new ps(),
    Kn =
      typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new ls()
        : new fs({
            mutationCb: Vn,
            scrollCb: Xs,
            bypassOptions: {
              onMutation: j,
              blockClass: i,
              blockSelector: s,
              unblockSelector: o,
              maskAllText: u,
              maskTextClass: d,
              unmaskTextClass: l,
              maskTextSelector: f,
              unmaskTextSelector: h,
              inlineStylesheet: m,
              maskInputOptions: It,
              dataURLOptions: g,
              maskAttributeFn: R,
              maskTextFn: A,
              maskInputFn: C,
              recordCanvas: H,
              inlineImages: V,
              sampling: v,
              slimDOMOptions: lt,
              iframeManager: un,
              stylesheetManager: ft,
              canvasManager: Js,
              keepIframeSrcFn: pe,
              processedNodeManager: ti,
            },
            mirror: je,
          }),
    ni = (x = !1) => {
      J(
        te({
          type: w.Meta,
          data: { href: window.location.href, width: Wa(), height: ja() },
        }),
        x
      ),
        ft.reset(),
        Kn.init(),
        Zt.forEach((Y) => Y.lock());
      let Qe = Pl(document, {
        mirror: je,
        blockClass: i,
        blockSelector: s,
        unblockSelector: o,
        maskAllText: u,
        maskTextClass: d,
        unmaskTextClass: l,
        maskTextSelector: f,
        unmaskTextSelector: h,
        inlineStylesheet: m,
        maskAllInputs: It,
        maskAttributeFn: R,
        maskInputFn: C,
        maskTextFn: A,
        slimDOM: lt,
        dataURLOptions: g,
        recordCanvas: H,
        inlineImages: V,
        onSerialize: (Y) => {
          qa(Y, je) && un.addIframe(Y),
            Va(Y, je) && ft.trackLinkElement(Y),
            is(Y) && Kn.addShadowRoot(Y.shadowRoot, document);
        },
        onIframeLoad: (Y, se) => {
          un.attachIframe(Y, se), Kn.observeAttachShadow(Y);
        },
        onStylesheetLoad: (Y, se) => {
          ft.attachLinkElement(Y, se);
        },
        keepIframeSrcFn: pe,
      });
      if (!Qe) return console.warn("Failed to snapshot the document");
      J(
        te({
          type: w.FullSnapshot,
          data: { node: Qe, initialOffset: $a(window) },
        }),
        x
      ),
        Zt.forEach((Y) => Y.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          ft.adoptStyleSheets(document.adoptedStyleSheets, je.getId(document));
    };
  Pr = ni;
  try {
    let x = [],
      Qe = (se) =>
        O(nf)(
          {
            onMutation: j,
            mutationCb: Vn,
            mousemoveCb: ($, eu) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: { source: eu, positions: $ },
                })
              ),
            mouseInteractionCb: ($) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.MouseInteraction }, $),
                })
              ),
            scrollCb: Xs,
            viewportResizeCb: ($) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.ViewportResize }, $),
                })
              ),
            inputCb: ($) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.Input }, $),
                })
              ),
            mediaInteractionCb: ($) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.MediaInteraction }, $),
                })
              ),
            styleSheetRuleCb: ($) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.StyleSheetRule }, $),
                })
              ),
            styleDeclarationCb: ($) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.StyleDeclaration }, $),
                })
              ),
            canvasMutationCb: Qc,
            fontCb: ($) =>
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.Font }, $),
                })
              ),
            selectionCb: ($) => {
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.Selection }, $),
                })
              );
            },
            customElementCb: ($) => {
              J(
                te({
                  type: w.IncrementalSnapshot,
                  data: Object.assign({ source: k.CustomElement }, $),
                })
              );
            },
            blockClass: i,
            ignoreClass: a,
            ignoreSelector: c,
            maskAllText: u,
            maskTextClass: d,
            unmaskTextClass: l,
            maskTextSelector: f,
            unmaskTextSelector: h,
            maskInputOptions: It,
            inlineStylesheet: m,
            sampling: v,
            recordCanvas: H,
            inlineImages: V,
            userTriggeredOnInput: G,
            collectFonts: K,
            doc: se,
            maskAttributeFn: R,
            maskInputFn: C,
            maskTextFn: A,
            keepIframeSrcFn: pe,
            blockSelector: s,
            unblockSelector: o,
            slimDOMOptions: lt,
            dataURLOptions: g,
            mirror: je,
            iframeManager: un,
            stylesheetManager: ft,
            shadowDomManager: Kn,
            processedNodeManager: ti,
            canvasManager: Js,
            ignoreCSSAttributes: U,
            plugins: [],
          },
          {}
        );
    un.addLoadListener((se) => {
      try {
        x.push(Qe(se.contentDocument));
      } catch ($) {
        console.warn($);
      }
    });
    let Y = () => {
      ni(), x.push(Qe(document));
    };
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? Y()
        : (x.push(
            ce("DOMContentLoaded", () => {
              J(te({ type: w.DomContentLoaded, data: {} })),
                I === "DOMContentLoaded" && Y();
            })
          ),
          x.push(
            ce(
              "load",
              () => {
                J(te({ type: w.Load, data: {} })), I === "load" && Y();
              },
              window
            )
          )),
      () => {
        x.forEach((se) => se()), ti.destroy(), (Pr = void 0), jl();
      }
    );
  } catch (x) {
    console.warn(x);
  }
}
function rf(t) {
  if (!Pr) throw new Error("please take full snapshot after start recording");
  Pr(t);
}
ct.mirror = je;
ct.takeFullSnapshot = rf;
var sf = 3,
  of = 5;
function Ds(t) {
  return t > 9999999999 ? t : t * 1e3;
}
function es(t) {
  return t > 9999999999 ? t / 1e3 : t;
}
function zr(t, e) {
  e.category !== "sentry.transaction" &&
    (["ui.click", "ui.input"].includes(e.category)
      ? t.triggerUserActivity()
      : t.checkAndHandleExpiredSession(),
    t.addUpdate(
      () => (
        t.throttledAddEvent({
          type: w.Custom,
          timestamp: (e.timestamp || 0) * 1e3,
          data: { tag: "breadcrumb", payload: fe(e, 10, 1e3) },
        }),
        e.category === "console"
      )
    ));
}
var af = "button,a";
function nc(t) {
  return t.closest(af) || t;
}
function rc(t) {
  let e = ic(t);
  return !e || !(e instanceof Element) ? e : nc(e);
}
function ic(t) {
  return cf(t) ? t.target : t;
}
function cf(t) {
  return typeof t == "object" && !!t && "target" in t;
}
var ot;
function uf(t) {
  return (
    ot || ((ot = []), df()),
    ot.push(t),
    () => {
      let e = ot ? ot.indexOf(t) : -1;
      e > -1 && ot.splice(e, 1);
    }
  );
}
function df() {
  W(L, "open", function (t) {
    return function (...e) {
      if (ot)
        try {
          ot.forEach((n) => n());
        } catch {}
      return t.apply(L, e);
    };
  });
}
function lf(t, e, n) {
  t.handleClick(e, n);
}
var _s = class {
    constructor(e, n, r = zr) {
      (this._lastMutation = 0),
        (this._lastScroll = 0),
        (this._clicks = []),
        (this._timeout = n.timeout / 1e3),
        (this._threshold = n.threshold / 1e3),
        (this._scollTimeout = n.scrollTimeout / 1e3),
        (this._replay = e),
        (this._ignoreSelector = n.ignoreSelector),
        (this._addBreadcrumbEvent = r);
    }
    addListeners() {
      let e = uf(() => {
        this._lastMutation = Da();
      });
      this._teardown = () => {
        e(),
          (this._clicks = []),
          (this._lastMutation = 0),
          (this._lastScroll = 0);
      };
    }
    removeListeners() {
      this._teardown && this._teardown(),
        this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
    }
    handleClick(e, n) {
      if (pf(n, this._ignoreSelector) || !hf(e)) return;
      let r = {
        timestamp: es(e.timestamp),
        clickBreadcrumb: e,
        clickCount: 0,
        node: n,
      };
      this._clicks.some(
        (i) => i.node === r.node && Math.abs(i.timestamp - r.timestamp) < 1
      ) ||
        (this._clicks.push(r),
        this._clicks.length === 1 && this._scheduleCheckClicks());
    }
    registerMutation(e = Date.now()) {
      this._lastMutation = es(e);
    }
    registerScroll(e = Date.now()) {
      this._lastScroll = es(e);
    }
    registerClick(e) {
      let n = nc(e);
      this._handleMultiClick(n);
    }
    _handleMultiClick(e) {
      this._getClicks(e).forEach((n) => {
        n.clickCount++;
      });
    }
    _getClicks(e) {
      return this._clicks.filter((n) => n.node === e);
    }
    _checkClicks() {
      let e = [],
        n = Da();
      this._clicks.forEach((r) => {
        !r.mutationAfter &&
          this._lastMutation &&
          (r.mutationAfter =
            r.timestamp <= this._lastMutation
              ? this._lastMutation - r.timestamp
              : void 0),
          !r.scrollAfter &&
            this._lastScroll &&
            (r.scrollAfter =
              r.timestamp <= this._lastScroll
                ? this._lastScroll - r.timestamp
                : void 0),
          r.timestamp + this._timeout <= n && e.push(r);
      });
      for (let r of e) {
        let i = this._clicks.indexOf(r);
        i > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(i, 1));
      }
      this._clicks.length && this._scheduleCheckClicks();
    }
    _generateBreadcrumbs(e) {
      let n = this._replay,
        r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
        i = e.mutationAfter && e.mutationAfter <= this._threshold,
        s = !r && !i,
        { clickCount: o, clickBreadcrumb: a } = e;
      if (s) {
        let c = Math.min(e.mutationAfter || this._timeout, this._timeout) * 1e3,
          u = c < this._timeout * 1e3 ? "mutation" : "timeout",
          d = {
            type: "default",
            message: a.message,
            timestamp: a.timestamp,
            category: "ui.slowClickDetected",
            data: {
              ...a.data,
              url: L.location.href,
              route: n.getCurrentRoute(),
              timeAfterClickMs: c,
              endReason: u,
              clickCount: o || 1,
            },
          };
        this._addBreadcrumbEvent(n, d);
        return;
      }
      if (o > 1) {
        let c = {
          type: "default",
          message: a.message,
          timestamp: a.timestamp,
          category: "ui.multiClick",
          data: {
            ...a.data,
            url: L.location.href,
            route: n.getCurrentRoute(),
            clickCount: o,
            metric: !0,
          },
        };
        this._addBreadcrumbEvent(n, c);
      }
    }
    _scheduleCheckClicks() {
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
        (this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3));
    }
  },
  ff = ["A", "BUTTON", "INPUT"];
function pf(t, e) {
  return !!(
    !ff.includes(t.tagName) ||
    (t.tagName === "INPUT" &&
      !["submit", "button"].includes(t.getAttribute("type") || "")) ||
    (t.tagName === "A" &&
      (t.hasAttribute("download") ||
        (t.hasAttribute("target") && t.getAttribute("target") !== "_self"))) ||
    (e && t.matches(e))
  );
}
function hf(t) {
  return !!(t.data && typeof t.data.nodeId == "number" && t.timestamp);
}
function Da() {
  return Date.now() / 1e3;
}
function mf(t, e) {
  try {
    if (!_f(e)) return;
    let { source: n } = e.data;
    if (
      (n === k.Mutation && t.registerMutation(e.timestamp),
      n === k.Scroll && t.registerScroll(e.timestamp),
      gf(e))
    ) {
      let { type: r, id: i } = e.data,
        s = ct.mirror.getNode(i);
      s instanceof HTMLElement && r === oe.Click && t.registerClick(s);
    }
  } catch {}
}
function _f(t) {
  return t.type === sf;
}
function gf(t) {
  return t.data.source === k.MouseInteraction;
}
function We(t) {
  return { timestamp: Date.now() / 1e3, type: "default", ...t };
}
var Fr;
(function (t) {
  (t[(t.Document = 0)] = "Document"),
    (t[(t.DocumentType = 1)] = "DocumentType"),
    (t[(t.Element = 2)] = "Element"),
    (t[(t.Text = 3)] = "Text"),
    (t[(t.CDATA = 4)] = "CDATA"),
    (t[(t.Comment = 5)] = "Comment");
})(Fr || (Fr = {}));
var Ef = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
]);
function yf(t) {
  let e = {};
  for (let n in t)
    if (Ef.has(n)) {
      let r = n;
      (n === "data-testid" || n === "data-test-id") && (r = "testId"),
        (e[r] = t[n]);
    }
  return e;
}
var Sf = (t) => (e) => {
  if (!t.isEnabled()) return;
  let n = Tf(e);
  if (!n) return;
  let r = e.name === "click",
    i = r && e.event;
  r &&
    t.clickDetector &&
    i &&
    !i.altKey &&
    !i.metaKey &&
    !i.ctrlKey &&
    !i.shiftKey &&
    lf(t.clickDetector, n, rc(e.event)),
    zr(t, n);
};
function sc(t, e) {
  let n = ct.mirror.getId(t),
    r = n && ct.mirror.getNode(n),
    i = r && ct.mirror.getMeta(r),
    s = i && vf(i) ? i : null;
  return {
    message: e,
    data: s
      ? {
          nodeId: n,
          node: {
            id: n,
            tagName: s.tagName,
            textContent: Array.from(s.childNodes)
              .map((o) => o.type === Fr.Text && o.textContent)
              .filter(Boolean)
              .map((o) => o.trim())
              .join(""),
            attributes: yf(s.attributes),
          },
        }
      : {},
  };
}
function Tf(t) {
  let { target: e, message: n } = bf(t);
  return We({ category: `ui.${t.name}`, ...sc(e, n) });
}
function bf(t) {
  let e = t.name === "click",
    n,
    r = null;
  try {
    (r = e ? rc(t.event) : ic(t.event)),
      (n = me(r, { maxStringLength: 200 }) || "<unknown>");
  } catch {
    n = "<unknown>";
  }
  return { target: r, message: n };
}
function vf(t) {
  return t.type === Fr.Element;
}
function Rf(t, e) {
  if (!t.isEnabled()) return;
  t.updateUserActivity();
  let n = If(e);
  !n || zr(t, n);
}
function If(t) {
  let { metaKey: e, shiftKey: n, ctrlKey: r, altKey: i, key: s, target: o } = t;
  if (!o || kf(o) || !s) return null;
  let a = e || r || i,
    c = s.length === 1;
  if (!a && c) return null;
  let u = me(o, { maxStringLength: 200 }) || "<unknown>",
    d = sc(o, u);
  return We({
    category: "ui.keyDown",
    message: u,
    data: { ...d.data, metaKey: e, shiftKey: n, ctrlKey: r, altKey: i, key: s },
  });
}
function kf(t) {
  return (
    t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable
  );
}
var Ca = { resource: Cf, paint: Nf, navigation: Df };
function wf(t) {
  return t.map(xf).filter(Boolean);
}
function xf(t) {
  return Ca[t.entryType] ? Ca[t.entryType](t) : null;
}
function rn(t) {
  return ((ie || L.performance.timeOrigin) + t) / 1e3;
}
function Nf(t) {
  let { duration: e, entryType: n, name: r, startTime: i } = t,
    s = rn(i);
  return { type: n, name: r, start: s, end: s + e, data: void 0 };
}
function Df(t) {
  let {
    entryType: e,
    name: n,
    decodedBodySize: r,
    duration: i,
    domComplete: s,
    encodedBodySize: o,
    domContentLoadedEventStart: a,
    domContentLoadedEventEnd: c,
    domInteractive: u,
    loadEventStart: d,
    loadEventEnd: l,
    redirectCount: f,
    startTime: h,
    transferSize: m,
    type: _,
  } = t;
  return i === 0
    ? null
    : {
        type: `${e}.${_}`,
        start: rn(h),
        end: rn(s),
        name: n,
        data: {
          size: m,
          decodedBodySize: r,
          encodedBodySize: o,
          duration: i,
          domInteractive: u,
          domContentLoadedEventStart: a,
          domContentLoadedEventEnd: c,
          loadEventStart: d,
          loadEventEnd: l,
          domComplete: s,
          redirectCount: f,
        },
      };
}
function Cf(t) {
  let {
    entryType: e,
    initiatorType: n,
    name: r,
    responseEnd: i,
    startTime: s,
    decodedBodySize: o,
    encodedBodySize: a,
    responseStatus: c,
    transferSize: u,
  } = t;
  return ["fetch", "xmlhttprequest"].includes(n)
    ? null
    : {
        type: `${e}.${n}`,
        start: rn(s),
        end: rn(i),
        name: r,
        data: {
          size: u,
          statusCode: c,
          decodedBodySize: o,
          encodedBodySize: a,
        },
      };
}
function Of(t) {
  let e = t.entries,
    n = e[e.length - 1],
    r = n ? n.element : void 0,
    i = t.value,
    s = rn(i);
  return {
    type: "largest-contentful-paint",
    name: "largest-contentful-paint",
    start: s,
    end: s,
    data: { value: i, size: i, nodeId: r ? ct.mirror.getId(r) : void 0 },
  };
}
function Mf(t) {
  function e(i) {
    t.performanceEntries.includes(i) || t.performanceEntries.push(i);
  }
  function n({ entries: i }) {
    i.forEach(e);
  }
  let r = [];
  return (
    ["navigation", "paint", "resource"].forEach((i) => {
      r.push(it(i, n));
    }),
    r.push(
      Mn(({ metric: i }) => {
        t.replayPerformanceEntries.push(Of(i));
      })
    ),
    () => {
      r.forEach((i) => i());
    }
  );
}
var Af =
  'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function Bf() {
  let t = new Blob([Af]);
  return URL.createObjectURL(t);
}
function ae(t, e) {
  !(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) ||
    (p.info(t), e && oc(t));
}
function en(t, e) {
  !(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) ||
    (p.info(t),
    e &&
      setTimeout(() => {
        oc(t);
      }, 0));
}
function oc(t) {
  S().addBreadcrumb(
    {
      category: "console",
      data: { logger: "replay" },
      level: "info",
      message: t,
    },
    { level: "info" }
  );
}
var jn = class extends Error {
    constructor() {
      super(`Event buffer exceeded maximum size of ${Is}.`);
    }
  },
  Gr = class {
    constructor() {
      (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    get hasEvents() {
      return this.events.length > 0;
    }
    get type() {
      return "sync";
    }
    destroy() {
      this.events = [];
    }
    async addEvent(e) {
      let n = JSON.stringify(e).length;
      if (((this._totalSize += n), this._totalSize > Is)) throw new jn();
      this.events.push(e);
    }
    finish() {
      return new Promise((e) => {
        let n = this.events;
        this.clear(), e(JSON.stringify(n));
      });
    }
    clear() {
      (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
    }
    getEarliestTimestamp() {
      let e = this.events.map((n) => n.timestamp).sort()[0];
      return e ? Ds(e) : null;
    }
  },
  gs = class {
    constructor(e) {
      (this._worker = e), (this._id = 0);
    }
    ensureReady() {
      return this._ensureReadyPromise
        ? this._ensureReadyPromise
        : ((this._ensureReadyPromise = new Promise((e, n) => {
            this._worker.addEventListener(
              "message",
              ({ data: r }) => {
                r.success ? e() : n();
              },
              { once: !0 }
            ),
              this._worker.addEventListener(
                "error",
                (r) => {
                  n(r);
                },
                { once: !0 }
              );
          })),
          this._ensureReadyPromise);
    }
    destroy() {
      ae("[Replay] Destroying compression worker"), this._worker.terminate();
    }
    postMessage(e, n) {
      let r = this._getAndIncrementId();
      return new Promise((i, s) => {
        let o = ({ data: a }) => {
          let c = a;
          if (c.method === e && c.id === r) {
            if ((this._worker.removeEventListener("message", o), !c.success)) {
              (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
                p.error("[Replay]", c.response),
                s(new Error("Error in compression worker"));
              return;
            }
            i(c.response);
          }
        };
        this._worker.addEventListener("message", o),
          this._worker.postMessage({ id: r, method: e, arg: n });
      });
    }
    _getAndIncrementId() {
      return this._id++;
    }
  },
  Es = class {
    constructor(e) {
      (this._worker = new gs(e)),
        (this._earliestTimestamp = null),
        (this._totalSize = 0),
        (this.hasCheckout = !1);
    }
    get hasEvents() {
      return !!this._earliestTimestamp;
    }
    get type() {
      return "worker";
    }
    ensureReady() {
      return this._worker.ensureReady();
    }
    destroy() {
      this._worker.destroy();
    }
    addEvent(e) {
      let n = Ds(e.timestamp);
      (!this._earliestTimestamp || n < this._earliestTimestamp) &&
        (this._earliestTimestamp = n);
      let r = JSON.stringify(e);
      return (
        (this._totalSize += r.length),
        this._totalSize > Is
          ? Promise.reject(new jn())
          : this._sendEventToWorker(r)
      );
    }
    finish() {
      return this._finishRequest();
    }
    clear() {
      (this._earliestTimestamp = null),
        (this._totalSize = 0),
        (this.hasCheckout = !1),
        this._worker.postMessage("clear");
    }
    getEarliestTimestamp() {
      return this._earliestTimestamp;
    }
    _sendEventToWorker(e) {
      return this._worker.postMessage("addEvent", e);
    }
    async _finishRequest() {
      let e = await this._worker.postMessage("finish");
      return (this._earliestTimestamp = null), (this._totalSize = 0), e;
    }
  },
  ys = class {
    constructor(e) {
      (this._fallback = new Gr()),
        (this._compression = new Es(e)),
        (this._used = this._fallback),
        (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded());
    }
    get type() {
      return this._used.type;
    }
    get hasEvents() {
      return this._used.hasEvents;
    }
    get hasCheckout() {
      return this._used.hasCheckout;
    }
    set hasCheckout(e) {
      this._used.hasCheckout = e;
    }
    destroy() {
      this._fallback.destroy(), this._compression.destroy();
    }
    clear() {
      return this._used.clear();
    }
    getEarliestTimestamp() {
      return this._used.getEarliestTimestamp();
    }
    addEvent(e) {
      return this._used.addEvent(e);
    }
    async finish() {
      return await this.ensureWorkerIsLoaded(), this._used.finish();
    }
    ensureWorkerIsLoaded() {
      return this._ensureWorkerIsLoadedPromise;
    }
    async _ensureWorkerIsLoaded() {
      try {
        await this._compression.ensureReady();
      } catch {
        ae(
          "[Replay] Failed to load the compression worker, falling back to simple buffer"
        );
        return;
      }
      await this._switchToCompressionWorker();
    }
    async _switchToCompressionWorker() {
      let { events: e, hasCheckout: n } = this._fallback,
        r = [];
      for (let i of e) r.push(this._compression.addEvent(i));
      (this._compression.hasCheckout = n), (this._used = this._compression);
      try {
        await Promise.all(r);
      } catch (i) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.warn("[Replay] Failed to add events when switching buffers.", i);
      }
    }
  };
function Lf({ useCompression: t, workerUrl: e }) {
  if (t && window.Worker) {
    let n = Uf(e);
    if (n) return n;
  }
  return ae("[Replay] Using simple buffer"), new Gr();
}
function Uf(t) {
  try {
    let e = t || Pf();
    if (!e) return;
    ae(`[Replay] Using compression worker${t ? ` from ${t}` : ""}`);
    let n = new Worker(e);
    return new ys(n);
  } catch {
    ae("[Replay] Failed to create compression worker");
  }
}
function Pf() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" ||
    !__SENTRY_EXCLUDE_REPLAY_WORKER__
    ? Bf()
    : "";
}
function Cs() {
  try {
    return "sessionStorage" in L && !!L.sessionStorage;
  } catch {
    return !1;
  }
}
function Ff(t) {
  Gf(), (t.session = void 0);
}
function Gf() {
  if (!!Cs())
    try {
      L.sessionStorage.removeItem(vs);
    } catch {}
}
function ac(t) {
  return t === void 0 ? !1 : Math.random() < t;
}
function Os(t) {
  if (!!Cs())
    try {
      L.sessionStorage.setItem(vs, JSON.stringify(t));
    } catch {}
}
function cc(t) {
  let e = Date.now(),
    n = t.id || P(),
    r = t.started || e,
    i = t.lastActivity || e,
    s = t.segmentId || 0,
    o = t.sampled,
    a = t.previousSessionId;
  return {
    id: n,
    started: r,
    lastActivity: i,
    segmentId: s,
    sampled: o,
    previousSessionId: a,
  };
}
function Hf(t, e) {
  return ac(t) ? "session" : e ? "buffer" : !1;
}
function Oa(
  { sessionSampleRate: t, allowBuffering: e, stickySession: n = !1 },
  { previousSessionId: r } = {}
) {
  let i = Hf(t, e),
    s = cc({ sampled: i, previousSessionId: r });
  return n && Os(s), s;
}
function Yf(t) {
  if (!Cs()) return null;
  try {
    let e = L.sessionStorage.getItem(vs);
    if (!e) return null;
    let n = JSON.parse(e);
    return en("[Replay] Loading existing session", t), cc(n);
  } catch {
    return null;
  }
}
function Ss(t, e, n = +new Date()) {
  return t === null || e === void 0 || e < 0 ? !0 : e === 0 ? !1 : t + e <= n;
}
function uc(
  t,
  { maxReplayDuration: e, sessionIdleExpire: n, targetTime: r = Date.now() }
) {
  return Ss(t.started, e, r) || Ss(t.lastActivity, n, r);
}
function dc(t, { sessionIdleExpire: e, maxReplayDuration: n }) {
  return !(
    !uc(t, { sessionIdleExpire: e, maxReplayDuration: n }) ||
    (t.sampled === "buffer" && t.segmentId === 0)
  );
}
function ts(
  {
    traceInternals: t,
    sessionIdleExpire: e,
    maxReplayDuration: n,
    previousSessionId: r,
  },
  i
) {
  let s = i.stickySession && Yf(t);
  return s
    ? dc(s, { sessionIdleExpire: e, maxReplayDuration: n })
      ? (en(
          "[Replay] Session in sessionStorage is expired, creating new one..."
        ),
        Oa(i, { previousSessionId: s.id }))
      : s
    : (en("[Replay] Creating new session", t), Oa(i, { previousSessionId: r }));
}
function $f(t) {
  return t.type === w.Custom;
}
function Ms(t, e, n) {
  return fc(t, e) ? (lc(t, e, n), !0) : !1;
}
function jf(t, e, n) {
  return fc(t, e) ? lc(t, e, n) : Promise.resolve(null);
}
async function lc(t, e, n) {
  if (!t.eventBuffer) return null;
  try {
    n && t.recordingMode === "buffer" && t.eventBuffer.clear(),
      n && (t.eventBuffer.hasCheckout = !0);
    let r = t.getOptions(),
      i = Wf(e, r.beforeAddRecordingEvent);
    return i ? await t.eventBuffer.addEvent(i) : void 0;
  } catch (r) {
    let i = r && r instanceof jn ? "addEventSizeExceeded" : "addEvent";
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && p.error(r),
      await t.stop({ reason: i });
    let s = S().getClient();
    s && s.recordDroppedEvent("internal_sdk_error", "replay");
  }
}
function fc(t, e) {
  if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) return !1;
  let n = Ds(e.timestamp);
  return n + t.timeouts.sessionIdlePause < Date.now()
    ? !1
    : n > t.getContext().initialTimestamp + t.getOptions().maxReplayDuration
    ? (ae(
        `[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,
        t.getOptions()._experiments.traceInternals
      ),
      !1)
    : !0;
}
function Wf(t, e) {
  try {
    if (typeof e == "function" && $f(t)) return e(t);
  } catch (n) {
    return (
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.error(
          "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
          n
        ),
      null
    );
  }
  return t;
}
function pc(t) {
  return !t.type;
}
function Ts(t) {
  return t.type === "transaction";
}
function zf(t) {
  return t.type === "replay_event";
}
function hc(t) {
  let e = Kf();
  return (n, r) => {
    if (!t.isEnabled() || (!pc(n) && !Ts(n))) return;
    let i = r && r.statusCode;
    if (!(e && (!i || i < 200 || i >= 300))) {
      if (Ts(n)) {
        qf(t, n);
        return;
      }
      Vf(t, n);
    }
  };
}
function qf(t, e) {
  let n = t.getContext();
  e.contexts &&
    e.contexts.trace &&
    e.contexts.trace.trace_id &&
    n.traceIds.size < 100 &&
    n.traceIds.add(e.contexts.trace.trace_id);
}
function Vf(t, e) {
  let n = t.getContext();
  if (
    (e.event_id && n.errorIds.size < 100 && n.errorIds.add(e.event_id),
    t.recordingMode !== "buffer" || !e.tags || !e.tags.replayId)
  )
    return;
  let { beforeErrorSampling: r } = t.getOptions();
  (typeof r == "function" && !r(e)) ||
    setTimeout(() => {
      t.sendBufferedReplayOrFlush();
    });
}
function Kf() {
  let t = S().getClient();
  if (!t) return !1;
  let e = t.getTransport();
  return (e && e.send.__sentry__baseTransport__) || !1;
}
function Xf(t, e) {
  return t.type ||
    !t.exception ||
    !t.exception.values ||
    !t.exception.values.length
    ? !1
    : !!(e.originalException && e.originalException.__rrweb__);
}
function Jf(t, e) {
  return t.recordingMode !== "buffer" ||
    e.message === Rs ||
    !e.exception ||
    e.type
    ? !1
    : ac(t.getOptions().errorSampleRate);
}
function Qf(t, e = !1) {
  let n = e ? hc(t) : void 0;
  return Object.assign(
    (r, i) =>
      t.isEnabled()
        ? zf(r)
          ? (delete r.breadcrumbs, r)
          : (!pc(r) && !Ts(r)) || !t.checkAndHandleExpiredSession()
          ? r
          : Xf(r, i) && !t.getOptions()._experiments.captureExceptions
          ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.log("[Replay] Ignoring error from rrweb internals", r),
            null)
          : ((Jf(t, r) || t.recordingMode === "session") &&
              (r.tags = { ...r.tags, replayId: t.getSessionId() }),
            n && n(r, { statusCode: 200 }),
            r)
        : r,
    { id: "Replay" }
  );
}
function qr(t, e) {
  return e.map(({ type: n, start: r, end: i, name: s, data: o }) => {
    let a = t.throttledAddEvent({
      type: w.Custom,
      timestamp: r,
      data: {
        tag: "performanceSpan",
        payload: {
          op: n,
          description: s,
          startTimestamp: r,
          endTimestamp: i,
          data: o,
        },
      },
    });
    return typeof a == "string" ? Promise.resolve(null) : a;
  });
}
function Zf(t) {
  let { from: e, to: n } = t,
    r = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: r,
    end: r,
    name: n,
    data: { previous: e },
  };
}
function ep(t) {
  return (e) => {
    if (!t.isEnabled()) return;
    let n = Zf(e);
    n !== null &&
      (t.getContext().urls.push(n.name),
      t.triggerUserActivity(),
      t.addUpdate(() => (qr(t, [n]), !1)));
  };
}
function tp(t, e) {
  return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    t.getOptions()._experiments.traceInternals
    ? !1
    : qi(e, S());
}
function Vr(t, e) {
  !t.isEnabled() ||
    (e !== null && (tp(t, e.name) || t.addUpdate(() => (qr(t, [e]), !0))));
}
function np(t) {
  let { startTimestamp: e, endTimestamp: n, fetchData: r, response: i } = t;
  if (!n) return null;
  let { method: s, url: o } = r;
  return {
    type: "resource.fetch",
    start: e / 1e3,
    end: n / 1e3,
    name: o,
    data: { method: s, statusCode: i ? i.status : void 0 },
  };
}
function rp(t) {
  return (e) => {
    if (!t.isEnabled()) return;
    let n = np(e);
    Vr(t, n);
  };
}
function ip(t) {
  let { startTimestamp: e, endTimestamp: n, xhr: r } = t,
    i = r[Ee];
  if (!e || !n || !i) return null;
  let { method: s, url: o, status_code: a } = i;
  return o === void 0
    ? null
    : {
        type: "resource.xhr",
        name: o,
        start: e / 1e3,
        end: n / 1e3,
        data: { method: s, statusCode: a },
      };
}
function sp(t) {
  return (e) => {
    if (!t.isEnabled()) return;
    let n = ip(e);
    Vr(t, n);
  };
}
function Hr(t, e) {
  if (!!t)
    try {
      if (typeof t == "string") return e.encode(t).length;
      if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
      if (t instanceof FormData) {
        let n = Ec(t);
        return e.encode(n).length;
      }
      if (t instanceof Blob) return t.size;
      if (t instanceof ArrayBuffer) return t.byteLength;
    } catch {}
}
function mc(t) {
  if (!t) return;
  let e = parseInt(t, 10);
  return isNaN(e) ? void 0 : e;
}
function _c(t) {
  if (typeof t == "string") return t;
  if (t instanceof URLSearchParams) return t.toString();
  if (t instanceof FormData) return Ec(t);
}
function gc(t, e) {
  if (!e) return null;
  let {
    startTimestamp: n,
    endTimestamp: r,
    url: i,
    method: s,
    statusCode: o,
    request: a,
    response: c,
  } = e;
  return {
    type: t,
    start: n / 1e3,
    end: r / 1e3,
    name: i,
    data: ne({ method: s, statusCode: o, request: a, response: c }),
  };
}
function Wn(t) {
  return { headers: {}, size: t, _meta: { warnings: ["URL_SKIPPED"] } };
}
function at(t, e, n) {
  if (!e && Object.keys(t).length === 0) return;
  if (!e) return { headers: t };
  if (!n) return { headers: t, size: e };
  let r = { headers: t, size: e },
    { body: i, warnings: s } = op(n);
  return (r.body = i), s && s.length > 0 && (r._meta = { warnings: s }), r;
}
function bs(t, e) {
  return Object.keys(t).reduce((n, r) => {
    let i = r.toLowerCase();
    return e.includes(i) && t[r] && (n[i] = t[r]), n;
  }, {});
}
function Ec(t) {
  return new URLSearchParams(t).toString();
}
function op(t) {
  if (!t || typeof t != "string") return { body: t };
  let e = t.length > Sa,
    n = ap(t);
  if (e) {
    let r = t.slice(0, Sa);
    return n
      ? { body: r, warnings: ["MAYBE_JSON_TRUNCATED"] }
      : { body: `${r}\u2026`, warnings: ["TEXT_TRUNCATED"] };
  }
  if (n)
    try {
      return { body: JSON.parse(t) };
    } catch {}
  return { body: t };
}
function ap(t) {
  let e = t[0],
    n = t[t.length - 1];
  return (e === "[" && n === "]") || (e === "{" && n === "}");
}
function Yr(t, e) {
  let n = cp(t);
  return Ae(n, e);
}
function cp(t, e = L.document.baseURI) {
  if (
    t.startsWith("http://") ||
    t.startsWith("https://") ||
    t.startsWith(L.location.origin)
  )
    return t;
  let n = new URL(t, e);
  if (n.origin !== new URL(e).origin) return t;
  let r = n.href;
  return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
}
async function up(t, e, n) {
  try {
    let r = await lp(t, e, n),
      i = gc("resource.fetch", r);
    Vr(n.replay, i);
  } catch (r) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.error("[Replay] Failed to capture fetch breadcrumb", r);
  }
}
function dp(t, e, n) {
  let { input: r, response: i } = e,
    s = yc(r),
    o = Hr(s, n.textEncoder),
    a = i ? mc(i.headers.get("content-length")) : void 0;
  o !== void 0 && (t.data.request_body_size = o),
    a !== void 0 && (t.data.response_body_size = a);
}
async function lp(t, e, n) {
  let { startTimestamp: r, endTimestamp: i } = e,
    {
      url: s,
      method: o,
      status_code: a = 0,
      request_body_size: c,
      response_body_size: u,
    } = t.data,
    d = Yr(s, n.networkDetailAllowUrls) && !Yr(s, n.networkDetailDenyUrls),
    l = d ? fp(n, e.input, c) : Wn(c),
    f = await pp(d, n, e.response, u);
  return {
    startTimestamp: r,
    endTimestamp: i,
    url: s,
    method: o,
    statusCode: a,
    request: l,
    response: f,
  };
}
function fp({ networkCaptureBodies: t, networkRequestHeaders: e }, n, r) {
  let i = mp(n, e);
  if (!t) return at(i, r, void 0);
  let s = yc(n),
    o = _c(s);
  return at(i, r, o);
}
async function pp(
  t,
  { networkCaptureBodies: e, textEncoder: n, networkResponseHeaders: r },
  i,
  s
) {
  if (!t && s !== void 0) return Wn(s);
  let o = Sc(i.headers, r);
  if (!e && s !== void 0) return at(o, s, void 0);
  try {
    let a = i.clone(),
      c = await hp(a),
      u = c && c.length && s === void 0 ? Hr(c, n) : s;
    return t ? (e ? at(o, u, c) : at(o, u, void 0)) : Wn(u);
  } catch {
    return at(o, s, void 0);
  }
}
async function hp(t) {
  try {
    return await t.text();
  } catch {
    return;
  }
}
function yc(t = []) {
  if (!(t.length !== 2 || typeof t[1] != "object")) return t[1].body;
}
function Sc(t, e) {
  let n = {};
  return (
    e.forEach((r) => {
      t.get(r) && (n[r] = t.get(r));
    }),
    n
  );
}
function mp(t, e) {
  return t.length === 1 && typeof t[0] != "string"
    ? Ma(t[0], e)
    : t.length === 2
    ? Ma(t[1], e)
    : {};
}
function Ma(t, e) {
  if (!t) return {};
  let n = t.headers;
  return n
    ? n instanceof Headers
      ? Sc(n, e)
      : Array.isArray(n)
      ? {}
      : bs(n, e)
    : {};
}
async function _p(t, e, n) {
  try {
    let r = Ep(t, e, n),
      i = gc("resource.xhr", r);
    Vr(n.replay, i);
  } catch (r) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.error("[Replay] Failed to capture xhr breadcrumb", r);
  }
}
function gp(t, e, n) {
  let { xhr: r, input: i } = e,
    s = Hr(i, n.textEncoder),
    o = r.getResponseHeader("content-length")
      ? mc(r.getResponseHeader("content-length"))
      : Hr(r.response, n.textEncoder);
  s !== void 0 && (t.data.request_body_size = s),
    o !== void 0 && (t.data.response_body_size = o);
}
function Ep(t, e, n) {
  let { startTimestamp: r, endTimestamp: i, input: s, xhr: o } = e,
    {
      url: a,
      method: c,
      status_code: u = 0,
      request_body_size: d,
      response_body_size: l,
    } = t.data;
  if (!a) return null;
  if (!Yr(a, n.networkDetailAllowUrls) || Yr(a, n.networkDetailDenyUrls)) {
    let E = Wn(d),
      R = Wn(l);
    return {
      startTimestamp: r,
      endTimestamp: i,
      url: a,
      method: c,
      statusCode: u,
      request: E,
      response: R,
    };
  }
  let f = o[Ee],
    h = f ? bs(f.request_headers, n.networkRequestHeaders) : {},
    m = bs(yp(o), n.networkResponseHeaders),
    _ = at(h, d, n.networkCaptureBodies ? _c(s) : void 0),
    T = at(m, l, n.networkCaptureBodies ? e.xhr.responseText : void 0);
  return {
    startTimestamp: r,
    endTimestamp: i,
    url: a,
    method: c,
    statusCode: u,
    request: _,
    response: T,
  };
}
function yp(t) {
  let e = t.getAllResponseHeaders();
  return e
    ? e
        .split(
          `\r
`
        )
        .reduce((n, r) => {
          let [i, s] = r.split(": ");
          return (n[i.toLowerCase()] = s), n;
        }, {})
    : {};
}
function Sp(t) {
  let e = S().getClient();
  try {
    let n = new TextEncoder(),
      {
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: i,
        networkCaptureBodies: s,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      } = t.getOptions(),
      c = {
        replay: t,
        textEncoder: n,
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: i,
        networkCaptureBodies: s,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      };
    e && e.on
      ? e.on("beforeAddBreadcrumb", (u, d) => Tp(c, u, d))
      : (F("fetch", rp(t)), F("xhr", sp(t)));
  } catch {}
}
function Tp(t, e, n) {
  if (!!e.data)
    try {
      bp(e) && Rp(n) && (gp(e, n, t), _p(e, n, t)),
        vp(e) && Ip(n) && (dp(e, n, t), up(e, n, t));
    } catch {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn("Error when enriching network breadcrumb");
    }
}
function bp(t) {
  return t.category === "xhr";
}
function vp(t) {
  return t.category === "fetch";
}
function Rp(t) {
  return t && t.xhr;
}
function Ip(t) {
  return t && t.response;
}
var Aa = null;
function kp(t) {
  return !!t.category;
}
var wp = (t) => (e) => {
  if (!t.isEnabled()) return;
  let n = xp(e);
  !n || zr(t, n);
};
function xp(t) {
  let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
  return Aa === e ||
    !e ||
    ((Aa = e),
    !kp(e) ||
      ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
        e.category
      ) ||
      e.category.startsWith("ui."))
    ? null
    : e.category === "console"
    ? Np(e)
    : We(e);
}
function Np(t) {
  let e = t.data && t.data.arguments;
  if (!Array.isArray(e) || e.length === 0) return We(t);
  let n = !1,
    r = e.map((i) => {
      if (!i) return i;
      if (typeof i == "string")
        return i.length > Nr ? ((n = !0), `${i.slice(0, Nr)}\u2026`) : i;
      if (typeof i == "object")
        try {
          let s = fe(i, 7);
          return JSON.stringify(s).length > Nr
            ? ((n = !0), `${JSON.stringify(s, null, 2).slice(0, Nr)}\u2026`)
            : s;
        } catch {}
      return i;
    });
  return We({
    ...t,
    data: {
      ...t.data,
      arguments: r,
      ...(n ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}),
    },
  });
}
function Dp(t) {
  let e = S().getScope(),
    n = S().getClient();
  e.addScopeListener(wp(t)), F("dom", Sf(t)), F("history", ep(t)), Sp(t);
  let r = Qf(t, !Ba(n));
  n && n.addEventProcessor ? n.addEventProcessor(r) : Bt(r),
    Ba(n) &&
      (n.on("afterSendEvent", hc(t)),
      n.on("createDsc", (i) => {
        let s = t.getSessionId();
        s &&
          t.isEnabled() &&
          t.recordingMode === "session" &&
          t.checkAndHandleExpiredSession() &&
          (i.replay_id = s);
      }),
      n.on("startTransaction", (i) => {
        t.lastTransaction = i;
      }),
      n.on("finishTransaction", (i) => {
        t.lastTransaction = i;
      }));
}
function Ba(t) {
  return !!(t && t.on);
}
async function Cp(t) {
  try {
    return Promise.all(qr(t, [Op(L.performance.memory)]));
  } catch {
    return [];
  }
}
function Op(t) {
  let { jsHeapSizeLimit: e, totalJSHeapSize: n, usedJSHeapSize: r } = t,
    i = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: i,
    end: i,
    data: {
      memory: { jsHeapSizeLimit: e, totalJSHeapSize: n, usedJSHeapSize: r },
    },
  };
}
function Mp(t, e, n) {
  let r,
    i,
    s,
    o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;
  function a() {
    return c(), (r = t()), r;
  }
  function c() {
    i !== void 0 && clearTimeout(i),
      s !== void 0 && clearTimeout(s),
      (i = s = void 0);
  }
  function u() {
    return i !== void 0 || s !== void 0 ? a() : r;
  }
  function d() {
    return (
      i && clearTimeout(i),
      (i = setTimeout(a, e)),
      o && s === void 0 && (s = setTimeout(a, o)),
      r
    );
  }
  return (d.cancel = c), (d.flush = u), d;
}
function Ap(t) {
  let e = !1;
  return (n, r) => {
    if (!t.checkAndHandleExpiredSession()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn("[Replay] Received replay event after session expired.");
      return;
    }
    let i = r || !e;
    (e = !0),
      t.clickDetector && mf(t.clickDetector, n),
      t.addUpdate(() => {
        if (
          (t.recordingMode === "buffer" && i && t.setInitialState(),
          !Ms(t, n, i))
        )
          return !0;
        if (!i) return !1;
        if ((Lp(t, i), t.session && t.session.previousSessionId)) return !0;
        if (t.recordingMode === "buffer" && t.session && t.eventBuffer) {
          let s = t.eventBuffer.getEarliestTimestamp();
          s &&
            (ae(
              `[Replay] Updating session start time to earliest event in buffer to ${new Date(
                s
              )}`,
              t.getOptions()._experiments.traceInternals
            ),
            (t.session.started = s),
            t.getOptions().stickySession && Os(t.session));
        }
        return t.recordingMode === "session" && t.flush(), !0;
      });
  };
}
function Bp(t) {
  let e = t.getOptions();
  return {
    type: w.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        sessionSampleRate: e.sessionSampleRate,
        errorSampleRate: e.errorSampleRate,
        useCompressionOption: e.useCompression,
        blockAllMedia: e.blockAllMedia,
        maskAllText: e.maskAllText,
        maskAllInputs: e.maskAllInputs,
        useCompression: t.eventBuffer ? t.eventBuffer.type === "worker" : !1,
        networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: e.networkCaptureBodies,
        networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: e.networkResponseHeaders.length > 0,
      },
    },
  };
}
function Lp(t, e) {
  !e || !t.session || t.session.segmentId !== 0 || Ms(t, Bp(t), !1);
}
function Up(t, e, n, r) {
  return ye(vn(t, Ot(t), r, n), [
    [{ type: "replay_event" }, t],
    [
      {
        type: "replay_recording",
        length:
          typeof e == "string" ? new TextEncoder().encode(e).length : e.length,
      },
      e,
    ],
  ]);
}
function Pp({ recordingData: t, headers: e }) {
  let n,
    r = `${JSON.stringify(e)}
`;
  if (typeof t == "string") n = `${r}${t}`;
  else {
    let s = new TextEncoder().encode(r);
    (n = new Uint8Array(s.length + t.length)), n.set(s), n.set(t, s.length);
  }
  return n;
}
async function Fp({ client: t, scope: e, replayId: n, event: r }) {
  let i =
      typeof t._integrations == "object" &&
      t._integrations !== null &&
      !Array.isArray(t._integrations)
        ? Object.keys(t._integrations)
        : void 0,
    s = { event_id: n, integrations: i };
  t.emit && t.emit("preprocessEvent", r, s);
  let o = await Dn(t.getOptions(), r, s, e, t);
  if (!o) return null;
  o.platform = o.platform || "javascript";
  let a = t.getSdkMetadata && t.getSdkMetadata(),
    { name: c, version: u } = (a && a.sdk) || {};
  return (
    (o.sdk = {
      ...o.sdk,
      name: c || "sentry.javascript.unknown",
      version: u || "0.0.0",
    }),
    o
  );
}
async function Gp({
  recordingData: t,
  replayId: e,
  segmentId: n,
  eventContext: r,
  timestamp: i,
  session: s,
}) {
  let o = Pp({ recordingData: t, headers: { segment_id: n } }),
    { urls: a, errorIds: c, traceIds: u, initialTimestamp: d } = r,
    l = S(),
    f = l.getClient(),
    h = l.getScope(),
    m = f && f.getTransport(),
    _ = f && f.getDsn();
  if (!f || !m || !_ || !s.sampled) return;
  let T = {
      type: Jd,
      replay_start_timestamp: d / 1e3,
      timestamp: i / 1e3,
      error_ids: c,
      trace_ids: u,
      urls: a,
      replay_id: e,
      segment_id: n,
      replay_type: s.sampled,
    },
    E = await Fp({ scope: h, client: f, replayId: e, event: T });
  if (!E) {
    f.recordDroppedEvent("event_processor", "replay", T),
      ae("An event processor returned `null`, will not send event.");
    return;
  }
  delete E.sdkProcessingMetadata;
  let R = Up(E, o, _, f.getOptions().tunnel),
    C;
  try {
    C = await m.send(R);
  } catch (q) {
    let v = new Error(Rs);
    try {
      v.cause = q;
    } catch {}
    throw v;
  }
  if (!C) return C;
  if (
    typeof C.statusCode == "number" &&
    (C.statusCode < 200 || C.statusCode >= 300)
  )
    throw new $r(C.statusCode);
  let A = In({}, C);
  if (Rn(A, "replay")) throw new jr(A);
  return C;
}
var $r = class extends Error {
    constructor(e) {
      super(`Transport returned status code ${e}`);
    }
  },
  jr = class extends Error {
    constructor(e) {
      super("Rate limit hit"), (this.rateLimits = e);
    }
  };
async function Tc(t, e = { count: 0, interval: rl }) {
  let { recordingData: n, options: r } = t;
  if (!!n.length)
    try {
      return await Gp(t), !0;
    } catch (i) {
      if (i instanceof $r || i instanceof jr) throw i;
      if (
        (yr("Replays", { _retryCount: e.count }),
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          r._experiments &&
          r._experiments.captureExceptions &&
          Ye(i),
        e.count >= il)
      ) {
        let s = new Error(`${Rs} - max retries exceeded`);
        try {
          s.cause = i;
        } catch {}
        throw s;
      }
      return (
        (e.interval *= ++e.count),
        new Promise((s, o) => {
          setTimeout(async () => {
            try {
              await Tc(t, e), s(!0);
            } catch (a) {
              o(a);
            }
          }, e.interval);
        })
      );
    }
}
var bc = "__THROTTLED",
  Hp = "__SKIPPED";
function Yp(t, e, n) {
  let r = new Map(),
    i = (a) => {
      let c = a - n;
      r.forEach((u, d) => {
        d < c && r.delete(d);
      });
    },
    s = () => [...r.values()].reduce((a, c) => a + c, 0),
    o = !1;
  return (...a) => {
    let c = Math.floor(Date.now() / 1e3);
    if ((i(c), s() >= e)) {
      let d = o;
      return (o = !0), d ? Hp : bc;
    }
    o = !1;
    let u = r.get(c) || 0;
    return r.set(c, u + 1), t(...a);
  };
}
var Ue = class {
  constructor({ options: e, recordingOptions: n }) {
    Ue.prototype.__init.call(this),
      Ue.prototype.__init2.call(this),
      Ue.prototype.__init3.call(this),
      Ue.prototype.__init4.call(this),
      Ue.prototype.__init5.call(this),
      Ue.prototype.__init6.call(this),
      (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = "session"),
      (this.timeouts = { sessionIdlePause: Qd, sessionIdleExpire: Zd }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: "",
      }),
      (this._recordingOptions = n),
      (this._options = e),
      (this._debouncedFlush = Mp(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay }
      )),
      (this._throttledAddEvent = Yp((o, a) => jf(this, o, a), 300, 5));
    let { slowClickTimeout: r, slowClickIgnoreSelectors: i } =
        this.getOptions(),
      s = r
        ? {
            threshold: Math.min(sl, r),
            timeout: r,
            scrollTimeout: ol,
            ignoreSelector: i ? i.join(",") : "",
          }
        : void 0;
    s && (this.clickDetector = new _s(this, s));
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  getOptions() {
    return this._options;
  }
  initializeSampling(e) {
    let { errorSampleRate: n, sessionSampleRate: r } = this._options;
    if (!(n <= 0 && r <= 0)) {
      if ((this._initializeSessionForSampling(e), !this.session)) {
        this._handleException(
          new Error("Unable to initialize and create session")
        );
        return;
      }
      this.session.sampled !== !1 &&
        ((this.recordingMode =
          this.session.sampled === "buffer" && this.session.segmentId === 0
            ? "buffer"
            : "session"),
        en(
          `[Replay] Starting replay in ${this.recordingMode} mode`,
          this._options._experiments.traceInternals
        ),
        this._initializeRecording());
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session")
      throw new Error("Replay recording is already in progress");
    if (this._isEnabled && this.recordingMode === "buffer")
      throw new Error(
        "Replay buffering is in progress, call `flush()` to save the replay"
      );
    en(
      "[Replay] Starting replay in session mode",
      this._options._experiments.traceInternals
    );
    let e = ts(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      }
    );
    (this.session = e), this._initializeRecording();
  }
  startBuffering() {
    if (this._isEnabled)
      throw new Error("Replay recording is already in progress");
    en(
      "[Replay] Starting replay in buffer mode",
      this._options._experiments.traceInternals
    );
    let e = ts(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      }
    );
    (this.session = e),
      (this.recordingMode = "buffer"),
      this._initializeRecording();
  }
  startRecording() {
    try {
      this._stopRecording = ct({
        ...this._recordingOptions,
        ...(this.recordingMode === "buffer" && { checkoutEveryNms: nl }),
        emit: Ap(this),
        onMutation: this._onMutationHandler,
      });
    } catch (e) {
      this._handleException(e);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (e) {
      return this._handleException(e), !1;
    }
  }
  async stop({ forceFlush: e = !1, reason: n } = {}) {
    if (!!this._isEnabled) {
      this._isEnabled = !1;
      try {
        ae(
          `[Replay] Stopping Replay${n ? ` triggered by ${n}` : ""}`,
          this._options._experiments.traceInternals
        ),
          this._removeListeners(),
          this.stopRecording(),
          this._debouncedFlush.cancel(),
          e && (await this._flush({ force: !0 })),
          this.eventBuffer && this.eventBuffer.destroy(),
          (this.eventBuffer = null),
          Ff(this);
      } catch (r) {
        this._handleException(r);
      }
    }
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      ae("[Replay] Pausing replay", this._options._experiments.traceInternals));
  }
  resume() {
    !this._isPaused ||
      !this._checkSession() ||
      ((this._isPaused = !1),
      this.startRecording(),
      ae(
        "[Replay] Resuming replay",
        this._options._experiments.traceInternals
      ));
  }
  async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
    if (this.recordingMode === "session") return this.flushImmediate();
    let n = Date.now();
    ae(
      "[Replay] Converting buffer to session",
      this._options._experiments.traceInternals
    ),
      await this.flushImmediate();
    let r = this.stopRecording();
    !e ||
      !r ||
      (this.recordingMode !== "session" &&
        ((this.recordingMode = "session"),
        this.session &&
          (this._updateUserActivity(n),
          this._updateSessionActivity(n),
          this._maybeSaveSession()),
        this.startRecording()));
  }
  addUpdate(e) {
    let n = e();
    this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._checkSession()) return;
      this.resume();
      return;
    }
    this.checkAndHandleExpiredSession(), this._updateSessionActivity();
  }
  updateUserActivity() {
    this._updateUserActivity(), this._updateSessionActivity();
  }
  conditionalFlush() {
    return this.recordingMode === "buffer"
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return this._debouncedFlush(), this._debouncedFlush.flush();
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId() {
    return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
    if (
      this._lastActivity &&
      Ss(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === "session"
    ) {
      this.pause();
      return;
    }
    return !!this._checkSession();
  }
  setInitialState() {
    let e = `${L.location.pathname}${L.location.hash}${L.location.search}`,
      n = `${L.location.origin}${e}`;
    (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = n),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(n);
  }
  throttledAddEvent(e, n) {
    let r = this._throttledAddEvent(e, n);
    if (r === bc) {
      let i = We({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !Ms(this, {
            type: of,
            timestamp: i.timestamp || 0,
            data: { tag: "breadcrumb", payload: i, metric: !0 },
          })
      );
    }
    return r;
  }
  getCurrentRoute() {
    let e = this.lastTransaction || S().getScope().getTransaction();
    if (!(!e || !["route", "custom"].includes(e.metadata.source)))
      return e.name;
  }
  _initializeRecording() {
    this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = Lf({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.startRecording();
  }
  _handleException(e) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.error("[Replay]", e),
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        this._options._experiments &&
        this._options._experiments.captureExceptions &&
        Ye(e);
  }
  _initializeSessionForSampling(e) {
    let n = this._options.errorSampleRate > 0,
      r = ts(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          traceInternals: this._options._experiments.traceInternals,
          previousSessionId: e,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: n,
        }
      );
    this.session = r;
  }
  _checkSession() {
    if (!this.session) return !1;
    let e = this.session;
    return dc(e, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
    })
      ? (this._refreshSession(e), !1)
      : !0;
  }
  async _refreshSession(e) {
    !this._isEnabled ||
      (await this.stop({ reason: "refresh session" }),
      this.initializeSampling(e.id));
  }
  _addListeners() {
    try {
      L.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange
      ),
        L.addEventListener("blur", this._handleWindowBlur),
        L.addEventListener("focus", this._handleWindowFocus),
        L.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (Dp(this), (this._hasInitializedCoreListeners = !0));
    } catch (e) {
      this._handleException(e);
    }
    this._performanceCleanupCallback = Mf(this);
  }
  _removeListeners() {
    try {
      L.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange
      ),
        L.removeEventListener("blur", this._handleWindowBlur),
        L.removeEventListener("focus", this._handleWindowFocus),
        L.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback();
    } catch (e) {
      this._handleException(e);
    }
  }
  __init() {
    this._handleVisibilityChange = () => {
      L.document.visibilityState === "visible"
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    };
  }
  __init2() {
    this._handleWindowBlur = () => {
      let e = We({ category: "ui.blur" });
      this._doChangeToBackgroundTasks(e);
    };
  }
  __init3() {
    this._handleWindowFocus = () => {
      let e = We({ category: "ui.focus" });
      this._doChangeToForegroundTasks(e);
    };
  }
  __init4() {
    this._handleKeyboardEvent = (e) => {
      Rf(this, e);
    };
  }
  _doChangeToBackgroundTasks(e) {
    !this.session ||
      uc(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      }) ||
      (e && this._createCustomBreadcrumb(e), this.conditionalFlush());
  }
  _doChangeToForegroundTasks(e) {
    if (!this.session) return;
    if (!this.checkAndHandleExpiredSession()) {
      ae("[Replay] Document has become active, but session has expired");
      return;
    }
    e && this._createCustomBreadcrumb(e);
  }
  _updateUserActivity(e = Date.now()) {
    this._lastActivity = e;
  }
  _updateSessionActivity(e = Date.now()) {
    this.session && ((this.session.lastActivity = e), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(e) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: w.Custom,
        timestamp: e.timestamp || 0,
        data: { tag: "breadcrumb", payload: e },
      });
    });
  }
  _addPerformanceEntries() {
    let e = wf(this.performanceEntries).concat(this.replayPerformanceEntries);
    return (
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      Promise.all(qr(this, e))
    );
  }
  _clearContext() {
    this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      (this._context.urls = []);
  }
  _updateInitialTimestampFromEventBuffer() {
    let { session: e, eventBuffer: n } = this;
    if (!e || !n || e.segmentId) return;
    let r = n.getEarliestTimestamp();
    r &&
      r < this._context.initialTimestamp &&
      (this._context.initialTimestamp = r);
  }
  _popEventContext() {
    let e = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };
    return this._clearContext(), e;
  }
  async _runFlush() {
    let e = this.getSessionId();
    if (!this.session || !this.eventBuffer || !e) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.error("[Replay] No session or eventBuffer found to flush.");
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      !(!this.eventBuffer || !this.eventBuffer.hasEvents) &&
        (await Cp(this), !!this.eventBuffer && e === this.getSessionId()))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        let n = Date.now();
        if (
          n - this._context.initialTimestamp >
          this._options.maxReplayDuration + 3e4
        )
          throw new Error("Session is too long, not sending replay");
        let r = this._popEventContext(),
          i = this.session.segmentId++;
        this._maybeSaveSession();
        let s = await this.eventBuffer.finish();
        await Tc({
          replayId: e,
          recordingData: s,
          segmentId: i,
          eventContext: r,
          session: this.session,
          options: this.getOptions(),
          timestamp: n,
        });
      } catch (n) {
        this._handleException(n), this.stop({ reason: "sendReplay" });
        let r = S().getClient();
        r && r.recordDroppedEvent("send_error", "replay");
      }
  }
  __init5() {
    this._flush = async ({ force: e = !1 } = {}) => {
      if (!this._isEnabled && !e) return;
      if (!this.checkAndHandleExpiredSession()) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          p.error(
            "[Replay] Attempting to finish replay event after session expired."
          );
        return;
      }
      if (!this.session) return;
      let n = this.session.started,
        i = Date.now() - n;
      this._debouncedFlush.cancel();
      let s = i < this._options.minReplayDuration,
        o = i > this._options.maxReplayDuration + 5e3;
      if (s || o) {
        ae(
          `[Replay] Session duration (${Math.floor(i / 1e3)}s) is too ${
            s ? "short" : "long"
          }, not sending replay.`,
          this._options._experiments.traceInternals
        ),
          s && this._debouncedFlush();
        return;
      }
      let a = this.eventBuffer;
      if (
        (a &&
          this.session.segmentId === 0 &&
          !a.hasCheckout &&
          ae(
            "[Replay] Flushing initial segment without checkout.",
            this._options._experiments.traceInternals
          ),
        !this._flushLock)
      ) {
        (this._flushLock = this._runFlush()),
          await this._flushLock,
          (this._flushLock = void 0);
        return;
      }
      try {
        await this._flushLock;
      } catch (c) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && p.error(c);
      } finally {
        this._debouncedFlush();
      }
    };
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && Os(this.session);
  }
  __init6() {
    this._onMutationHandler = (e) => {
      let n = e.length,
        r = this._options.mutationLimit,
        i = this._options.mutationBreadcrumbLimit,
        s = r && n > r;
      if (n > i || s) {
        let o = We({
          category: "replay.mutations",
          data: { count: n, limit: s },
        });
        this._createCustomBreadcrumb(o);
      }
      return s
        ? (this.stop({
            reason: "mutationLimit",
            forceFlush: this.recordingMode === "session",
          }),
          !1)
        : !0;
    };
  }
};
function Ln(t, e, n, r) {
  let i = typeof r == "string" ? r.split(",") : [],
    s = [...t, ...i, ...e];
  return (
    typeof n < "u" &&
      (typeof n == "string" && s.push(`.${n}`),
      console.warn(
        "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration."
      )),
    s.join(",")
  );
}
function $p({
  mask: t,
  unmask: e,
  block: n,
  unblock: r,
  ignore: i,
  blockClass: s,
  blockSelector: o,
  maskTextClass: a,
  maskTextSelector: c,
  ignoreClass: u,
}) {
  let d = ['base[href="/"]'],
    l = Ln(t, [".sentry-mask", "[data-sentry-mask]"], a, c),
    f = Ln(e, [".sentry-unmask", "[data-sentry-unmask]"]),
    h = {
      maskTextSelector: l,
      unmaskTextSelector: f,
      blockSelector: Ln(
        n,
        [".sentry-block", "[data-sentry-block]", ...d],
        s,
        o
      ),
      unblockSelector: Ln(r, [".sentry-unblock", "[data-sentry-unblock]"]),
      ignoreSelector: Ln(
        i,
        [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'],
        u
      ),
    };
  return (
    s instanceof RegExp && (h.blockClass = s),
    a instanceof RegExp && (h.maskTextClass = a),
    h
  );
}
function jp({
  el: t,
  key: e,
  maskAttributes: n,
  maskAllText: r,
  privacyOptions: i,
  value: s,
}) {
  return !r || (i.unmaskTextSelector && t.matches(i.unmaskTextSelector))
    ? s
    : n.includes(e) ||
      (e === "value" &&
        t.tagName === "INPUT" &&
        ["submit", "button"].includes(t.getAttribute("type") || ""))
    ? s.replace(/[\S]/g, "*")
    : s;
}
var La =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  Wp = ["content-length", "content-type", "accept"],
  Ua = !1,
  sn = class {
    static __initStatic() {
      this.id = "Replay";
    }
    constructor({
      flushMinDelay: e = el,
      flushMaxDelay: n = tl,
      minReplayDuration: r = al,
      maxReplayDuration: i = Ta,
      stickySession: s = !0,
      useCompression: o = !0,
      workerUrl: a,
      _experiments: c = {},
      sessionSampleRate: u,
      errorSampleRate: d,
      maskAllText: l = !0,
      maskAllInputs: f = !0,
      blockAllMedia: h = !0,
      mutationBreadcrumbLimit: m = 750,
      mutationLimit: _ = 1e4,
      slowClickTimeout: T = 7e3,
      slowClickIgnoreSelectors: E = [],
      networkDetailAllowUrls: R = [],
      networkDetailDenyUrls: C = [],
      networkCaptureBodies: A = !0,
      networkRequestHeaders: q = [],
      networkResponseHeaders: v = [],
      mask: g = [],
      maskAttributes: M = ["title", "placeholder"],
      unmask: H = [],
      block: y = [],
      unblock: I = [],
      ignore: G = [],
      maskFn: K,
      beforeAddRecordingEvent: V,
      beforeErrorSampling: pe,
      blockClass: U,
      blockSelector: Oe,
      maskInputOptions: j,
      maskTextClass: ue,
      maskTextSelector: ge,
      ignoreClass: Rt,
    } = {}) {
      this.name = sn.id;
      let It = $p({
        mask: g,
        unmask: H,
        block: y,
        unblock: I,
        ignore: G,
        blockClass: U,
        blockSelector: Oe,
        maskTextClass: ue,
        maskTextSelector: ge,
        ignoreClass: Rt,
      });
      if (
        ((this._recordingOptions = {
          maskAllInputs: f,
          maskAllText: l,
          maskInputOptions: { ...(j || {}), password: !0 },
          maskTextFn: K,
          maskInputFn: K,
          maskAttributeFn: (lt, an, cn) =>
            jp({
              maskAttributes: M,
              maskAllText: l,
              privacyOptions: It,
              key: lt,
              value: an,
              el: cn,
            }),
          ...It,
          slimDOMOptions: "all",
          inlineStylesheet: !0,
          inlineImages: !1,
          collectFonts: !0,
          errorHandler: (lt) => {
            try {
              lt.__rrweb__ = !0;
            } catch {}
          },
        }),
        (this._initialOptions = {
          flushMinDelay: e,
          flushMaxDelay: n,
          minReplayDuration: Math.min(r, cl),
          maxReplayDuration: Math.min(i, Ta),
          stickySession: s,
          sessionSampleRate: u,
          errorSampleRate: d,
          useCompression: o,
          workerUrl: a,
          blockAllMedia: h,
          maskAllInputs: f,
          maskAllText: l,
          mutationBreadcrumbLimit: m,
          mutationLimit: _,
          slowClickTimeout: T,
          slowClickIgnoreSelectors: E,
          networkDetailAllowUrls: R,
          networkDetailDenyUrls: C,
          networkCaptureBodies: A,
          networkRequestHeaders: Pa(q),
          networkResponseHeaders: Pa(v),
          beforeAddRecordingEvent: V,
          beforeErrorSampling: pe,
          _experiments: c,
        }),
        typeof u == "number" &&
          (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${u} })`),
          (this._initialOptions.sessionSampleRate = u)),
        typeof d == "number" &&
          (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${d} })`),
          (this._initialOptions.errorSampleRate = d)),
        this._initialOptions.blockAllMedia &&
          (this._recordingOptions.blockSelector = this._recordingOptions
            .blockSelector
            ? `${this._recordingOptions.blockSelector},${La}`
            : La),
        this._isInitialized && dr())
      )
        throw new Error(
          "Multiple Sentry Session Replay instances are not supported"
        );
      this._isInitialized = !0;
    }
    get _isInitialized() {
      return Ua;
    }
    set _isInitialized(e) {
      Ua = e;
    }
    setupOnce() {
      !dr() || (this._setup(), setTimeout(() => this._initialize()));
    }
    start() {
      !this._replay || this._replay.start();
    }
    startBuffering() {
      !this._replay || this._replay.startBuffering();
    }
    stop() {
      return this._replay
        ? this._replay.stop({
            forceFlush: this._replay.recordingMode === "session",
          })
        : Promise.resolve();
    }
    flush(e) {
      return !this._replay || !this._replay.isEnabled()
        ? Promise.resolve()
        : this._replay.sendBufferedReplayOrFlush(e);
    }
    getReplayId() {
      if (!(!this._replay || !this._replay.isEnabled()))
        return this._replay.getSessionId();
    }
    _initialize() {
      !this._replay || this._replay.initializeSampling();
    }
    _setup() {
      let e = zp(this._initialOptions);
      this._replay = new Ue({
        options: e,
        recordingOptions: this._recordingOptions,
      });
    }
  };
sn.__initStatic();
function zp(t) {
  let e = S().getClient(),
    n = e && e.getOptions(),
    r = { sessionSampleRate: 0, errorSampleRate: 0, ...ne(t) };
  return n
    ? (t.sessionSampleRate == null &&
        t.errorSampleRate == null &&
        n.replaysSessionSampleRate == null &&
        n.replaysOnErrorSampleRate == null &&
        console.warn(
          "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
        ),
      typeof n.replaysSessionSampleRate == "number" &&
        (r.sessionSampleRate = n.replaysSessionSampleRate),
      typeof n.replaysOnErrorSampleRate == "number" &&
        (r.errorSampleRate = n.replaysOnErrorSampleRate),
      r)
    : (console.warn("SDK client is not available."), r);
}
function Pa(t) {
  return [...Wp, ...t.map((e) => e.toLowerCase())];
}
var b = N,
  As = 0;
function Bs() {
  return As > 0;
}
function qp() {
  As++,
    setTimeout(() => {
      As--;
    });
}
function ut(t, e = {}, n) {
  if (typeof t != "function") return t;
  try {
    let i = t.__sentry_wrapped__;
    if (i) return i;
    if (_t(t)) return t;
  } catch {
    return t;
  }
  let r = function () {
    let i = Array.prototype.slice.call(arguments);
    try {
      n && typeof n == "function" && n.apply(this, arguments);
      let s = i.map((o) => ut(o, e));
      return t.apply(this, s);
    } catch (s) {
      throw (
        (qp(),
        $t((o) => {
          o.addEventProcessor(
            (a) => (
              e.mechanism && (Dt(a, void 0, void 0), Ie(a, e.mechanism)),
              (a.extra = { ...a.extra, arguments: i }),
              a
            )
          ),
            Ye(s);
        }),
        s)
      );
    }
  };
  try {
    for (let i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
  } catch {}
  tr(r, t), Pe(t, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable &&
      Object.defineProperty(r, "name", {
        get() {
          return t.name;
        },
      });
  } catch {}
  return r;
}
function Ps(t, e) {
  let n = Fs(t, e),
    r = { type: e && e.name, value: Jp(e) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === "" &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function Vp(t, e, n, r) {
  let s = S().getClient(),
    o = s && s.getOptions().normalizeDepth,
    a = {
      exception: {
        values: [
          {
            type: ht(e)
              ? e.constructor.name
              : r
              ? "UnhandledRejection"
              : "Error",
            value: Qp(e, { isUnhandledRejection: r }),
          },
        ],
      },
      extra: { __serialized__: fr(e, o) },
    };
  if (n) {
    let c = Fs(t, n);
    c.length && (a.exception.values[0].stacktrace = { frames: c });
  }
  return a;
}
function Ls(t, e) {
  return { exception: { values: [Ps(t, e)] } };
}
function Fs(t, e) {
  let n = e.stacktrace || e.stack || "",
    r = Xp(e);
  try {
    return t(n, r);
  } catch {}
  return [];
}
var Kp = /Minified React error #\d+;/i;
function Xp(t) {
  if (t) {
    if (typeof t.framesToPop == "number") return t.framesToPop;
    if (Kp.test(t.message)) return 1;
  }
  return 0;
}
function Jp(t) {
  let e = t && t.message;
  return e
    ? e.error && typeof e.error.message == "string"
      ? e.error.message
      : e
    : "No error message";
}
function vc(t, e, n, r) {
  let i = (n && n.syntheticException) || void 0,
    s = Kr(t, e, i, r);
  return (
    Ie(s),
    (s.level = "error"),
    n && n.event_id && (s.event_id = n.event_id),
    _e(s)
  );
}
function Rc(t, e, n = "info", r, i) {
  let s = (r && r.syntheticException) || void 0,
    o = Us(t, e, s, i);
  return (o.level = n), r && r.event_id && (o.event_id = r.event_id), _e(o);
}
function Kr(t, e, n, r, i) {
  let s;
  if (wt(e) && e.error) return Ls(t, e.error);
  if (Xn(e) || ii(e)) {
    let o = e;
    if ("stack" in e) s = Ls(t, e);
    else {
      let a = o.name || (Xn(o) ? "DOMError" : "DOMException"),
        c = o.message ? `${a}: ${o.message}` : a;
      (s = Us(t, c, n, r)), Dt(s, c);
    }
    return (
      "code" in o && (s.tags = { ...s.tags, "DOMException.code": `${o.code}` }),
      s
    );
  }
  return pt(e)
    ? Ls(t, e)
    : Te(e) || ht(e)
    ? ((s = Vp(t, e, n, i)), Ie(s, { synthetic: !0 }), s)
    : ((s = Us(t, e, n, r)),
      Dt(s, `${e}`, void 0),
      Ie(s, { synthetic: !0 }),
      s);
}
function Us(t, e, n, r) {
  let i = { message: e };
  if (r && n) {
    let s = Fs(t, n);
    s.length &&
      (i.exception = { values: [{ value: e, stacktrace: { frames: s } }] });
  }
  return i;
}
function Qp(t, { isUnhandledRejection: e }) {
  let n = pi(t),
    r = e ? "promise rejection" : "exception";
  return wt(t)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``
    : ht(t)
    ? `Event \`${Zp(t)}\` (type=${t.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function Zp(t) {
  try {
    let e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : void 0;
  } catch {}
}
function Ic(t, { metadata: e, tunnel: n, dsn: r }) {
  let i = {
      event_id: t.event_id,
      sent_at: new Date().toISOString(),
      ...(e && e.sdk && { sdk: { name: e.sdk.name, version: e.sdk.version } }),
      ...(!!n && !!r && { dsn: ve(r) }),
    },
    s = eh(t);
  return ye(i, [s]);
}
function eh(t) {
  return [{ type: "user_report" }, t];
}
var Xr = class extends Cn {
  constructor(e) {
    let n = b.SENTRY_SDK_SOURCE || bi();
    (e._metadata = e._metadata || {}),
      (e._metadata.sdk = e._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [{ name: `${n}:@sentry/browser`, version: Ne }],
        version: Ne,
      }),
      super(e),
      e.sendClientReports &&
        b.document &&
        b.document.addEventListener("visibilitychange", () => {
          b.document.visibilityState === "hidden" && this._flushOutcomes();
        });
  }
  eventFromException(e, n) {
    return vc(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return Rc(
      this._options.stackParser,
      e,
      n,
      r,
      this._options.attachStacktrace
    );
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    let n = Ic(e, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this._sendEnvelope(n);
  }
  _prepareEvent(e, n, r) {
    return (
      (e.platform = e.platform || "javascript"), super._prepareEvent(e, n, r)
    );
  }
  _flushOutcomes() {
    let e = this._clearOutcomes();
    if (e.length === 0) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.log("No dsn provided, will not send outcomes");
      return;
    }
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.log("Sending outcomes:", e);
    let n = Li(e, this._options.tunnel && ve(this._dsn));
    this._sendEnvelope(n);
  }
};
var qn;
function kc() {
  if (qn) return qn;
  if (gn(b.fetch)) return (qn = b.fetch.bind(b));
  let t = b.document,
    e = b.fetch;
  if (t && typeof t.createElement == "function")
    try {
      let n = t.createElement("iframe");
      (n.hidden = !0), t.head.appendChild(n);
      let r = n.contentWindow;
      r && r.fetch && (e = r.fetch), t.head.removeChild(n);
    } catch (n) {
      (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
    }
  return (qn = e.bind(b));
}
function wc() {
  qn = void 0;
}
function xc(t, e = kc()) {
  let n = 0,
    r = 0;
  function i(s) {
    let o = s.body.length;
    (n += o), r++;
    let a = {
      body: s.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: t.headers,
      keepalive: n <= 6e4 && r < 15,
      ...t.fetchOptions,
    };
    try {
      return e(t.url, a).then(
        (c) => (
          (n -= o),
          r--,
          {
            statusCode: c.status,
            headers: {
              "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": c.headers.get("Retry-After"),
            },
          }
        )
      );
    } catch (c) {
      return wc(), (n -= o), r--, Et(c);
    }
  }
  return jt(t, i);
}
var th = 4;
function Nc(t) {
  function e(n) {
    return new X((r, i) => {
      let s = new XMLHttpRequest();
      (s.onerror = i),
        (s.onreadystatechange = () => {
          s.readyState === th &&
            r({
              statusCode: s.status,
              headers: {
                "x-sentry-rate-limits": s.getResponseHeader(
                  "X-Sentry-Rate-Limits"
                ),
                "retry-after": s.getResponseHeader("Retry-After"),
              },
            });
        }),
        s.open("POST", t.url);
      for (let o in t.headers)
        Object.prototype.hasOwnProperty.call(t.headers, o) &&
          s.setRequestHeader(o, t.headers[o]);
      s.send(n.body);
    });
  }
  return jt(t, e);
}
var Jr = "?";
var nh = 30,
  rh = 40,
  ih = 50;
function Gs(t, e, n, r) {
  let i = { filename: t, function: e, in_app: !0 };
  return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
var sh =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  oh = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  ah = (t) => {
    let e = sh.exec(t);
    if (e) {
      if (e[2] && e[2].indexOf("eval") === 0) {
        let s = oh.exec(e[2]);
        s && ((e[2] = s[1]), (e[3] = s[2]), (e[4] = s[3]));
      }
      let [r, i] = Cc(e[1] || Jr, e[2]);
      return Gs(i, r, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
    }
  },
  ch = [nh, ah],
  uh =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  dh = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  lh = (t) => {
    let e = uh.exec(t);
    if (e) {
      if (e[3] && e[3].indexOf(" > eval") > -1) {
        let s = dh.exec(e[3]);
        s &&
          ((e[1] = e[1] || "eval"), (e[3] = s[1]), (e[4] = s[2]), (e[5] = ""));
      }
      let r = e[3],
        i = e[1] || Jr;
      return (
        ([i, r] = Cc(i, r)),
        Gs(r, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
      );
    }
  },
  fh = [ih, lh],
  ph =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  hh = (t) => {
    let e = ph.exec(t);
    return e ? Gs(e[2], e[1] || Jr, +e[3], e[4] ? +e[4] : void 0) : void 0;
  },
  mh = [rh, hh];
var _h = [ch, fh, mh],
  Dc = ir(..._h),
  Cc = (t, e) => {
    let n = t.indexOf("safari-extension") !== -1,
      r = t.indexOf("safari-web-extension") !== -1;
    return n || r
      ? [
          t.indexOf("@") !== -1 ? t.split("@")[0] : Jr,
          n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
        ]
      : [t, e];
  };
var Ce = class {
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  constructor(e) {
    (this.name = Ce.id),
      (this._options = { onerror: !0, onunhandledrejection: !0, ...e }),
      (this._installFunc = { onerror: gh, onunhandledrejection: Eh });
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    let e = this._options;
    for (let n in e) {
      let r = this._installFunc[n];
      r && e[n] && (Th(n), r(), (this._installFunc[n] = void 0));
    }
  }
};
Ce.__initStatic();
function gh() {
  F("error", (t) => {
    let [e, n, r] = Ac();
    if (!e.getIntegration(Ce)) return;
    let { msg: i, url: s, line: o, column: a, error: c } = t;
    if (Bs() || (c && c.__sentry_own_request__)) return;
    let u =
      c === void 0 && de(i)
        ? Sh(i, s, o, a)
        : Oc(Kr(n, c || i, void 0, r, !1), s, o, a);
    (u.level = "error"), Mc(e, c, u, "onerror");
  });
}
function Eh() {
  F("unhandledrejection", (t) => {
    let [e, n, r] = Ac();
    if (!e.getIntegration(Ce)) return;
    let i = t;
    try {
      "reason" in t
        ? (i = t.reason)
        : "detail" in t && "reason" in t.detail && (i = t.detail.reason);
    } catch {}
    if (Bs() || (i && i.__sentry_own_request__)) return !0;
    let s = xt(i) ? yh(i) : Kr(n, i, void 0, r, !0);
    (s.level = "error"), Mc(e, i, s, "onunhandledrejection");
  });
}
function yh(t) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(
            t
          )}`,
        },
      ],
    },
  };
}
function Sh(t, e, n, r) {
  let i =
      /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
    s = wt(t) ? t.message : t,
    o = "Error",
    a = s.match(i);
  return (
    a && ((o = a[1]), (s = a[2])),
    Oc({ exception: { values: [{ type: o, value: s }] } }, e, n, r)
  );
}
function Oc(t, e, n, r) {
  let i = (t.exception = t.exception || {}),
    s = (i.values = i.values || []),
    o = (s[0] = s[0] || {}),
    a = (o.stacktrace = o.stacktrace || {}),
    c = (a.frames = a.frames || []),
    u = isNaN(parseInt(r, 10)) ? void 0 : r,
    d = isNaN(parseInt(n, 10)) ? void 0 : n,
    l = de(e) && e.length > 0 ? e : ui();
  return (
    c.length === 0 &&
      c.push({ colno: u, filename: l, function: "?", in_app: !0, lineno: d }),
    t
  );
}
function Th(t) {
  (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
    p.log(`Global Handler attached: ${t}`);
}
function Mc(t, e, n, r) {
  Ie(n, { handled: !1, type: r }), t.captureEvent(n, { originalException: e });
}
function Ac() {
  let t = S(),
    e = t.getClient(),
    n = (e && e.getOptions()) || {
      stackParser: () => [],
      attachStacktrace: !1,
    };
  return [t, n.stackParser, n.attachStacktrace];
}
var bh = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  ze = class {
    static __initStatic() {
      this.id = "TryCatch";
    }
    constructor(e) {
      (this.name = ze.id),
        (this._options = {
          XMLHttpRequest: !0,
          eventTarget: !0,
          requestAnimationFrame: !0,
          setInterval: !0,
          setTimeout: !0,
          ...e,
        });
    }
    setupOnce() {
      this._options.setTimeout && W(b, "setTimeout", Bc),
        this._options.setInterval && W(b, "setInterval", Bc),
        this._options.requestAnimationFrame &&
          W(b, "requestAnimationFrame", vh),
        this._options.XMLHttpRequest &&
          "XMLHttpRequest" in b &&
          W(XMLHttpRequest.prototype, "send", Rh);
      let e = this._options.eventTarget;
      e && (Array.isArray(e) ? e : bh).forEach(Ih);
    }
  };
ze.__initStatic();
function Bc(t) {
  return function (...e) {
    let n = e[0];
    return (
      (e[0] = ut(n, {
        mechanism: {
          data: { function: le(t) },
          handled: !1,
          type: "instrument",
        },
      })),
      t.apply(this, e)
    );
  };
}
function vh(t) {
  return function (e) {
    return t.apply(this, [
      ut(e, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: le(t) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function Rh(t) {
  return function (...e) {
    let n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((i) => {
        i in n &&
          typeof n[i] == "function" &&
          W(n, i, function (s) {
            let o = {
                mechanism: {
                  data: { function: i, handler: le(s) },
                  handled: !1,
                  type: "instrument",
                },
              },
              a = _t(s);
            return a && (o.mechanism.data.handler = le(a)), ut(s, o);
          });
      }),
      t.apply(this, e)
    );
  };
}
function Ih(t) {
  let e = b,
    n = e[t] && e[t].prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty("addEventListener") ||
    (W(n, "addEventListener", function (r) {
      return function (i, s, o) {
        try {
          typeof s.handleEvent == "function" &&
            (s.handleEvent = ut(s.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: le(s), target: t },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return r.apply(this, [
          i,
          ut(s, {
            mechanism: {
              data: { function: "addEventListener", handler: le(s), target: t },
              handled: !1,
              type: "instrument",
            },
          }),
          o,
        ]);
      };
    }),
    W(n, "removeEventListener", function (r) {
      return function (i, s, o) {
        let a = s;
        try {
          let c = a && a.__sentry_wrapped__;
          c && r.call(this, i, c, o);
        } catch {}
        return r.call(this, i, a, o);
      };
    }));
}
var Qr = 1024,
  qe = class {
    static __initStatic() {
      this.id = "Breadcrumbs";
    }
    constructor(e) {
      (this.name = qe.id),
        (this.options = {
          console: !0,
          dom: !0,
          fetch: !0,
          history: !0,
          sentry: !0,
          xhr: !0,
          ...e,
        });
    }
    setupOnce() {
      if (
        (this.options.console && F("console", xh),
        this.options.dom && F("dom", wh(this.options.dom)),
        this.options.xhr && F("xhr", Nh),
        this.options.fetch && F("fetch", Dh),
        this.options.history && F("history", Ch),
        this.options.sentry)
      ) {
        let e = S().getClient();
        e && e.on && e.on("beforeSendEvent", kh);
      }
    }
  };
qe.__initStatic();
function kh(t) {
  S().addBreadcrumb(
    {
      category: `sentry.${t.type === "transaction" ? "transaction" : "event"}`,
      event_id: t.event_id,
      level: t.level,
      message: Re(t),
    },
    { event: t }
  );
}
function wh(t) {
  function e(n) {
    let r,
      i = typeof t == "object" ? t.serializeAttribute : void 0,
      s =
        typeof t == "object" && typeof t.maxStringLength == "number"
          ? t.maxStringLength
          : void 0;
    s &&
      s > Qr &&
      ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
        p.warn(
          `\`dom.maxStringLength\` cannot exceed ${Qr}, but a value of ${s} was configured. Sentry will use ${Qr} instead.`
        ),
      (s = Qr)),
      typeof i == "string" && (i = [i]);
    try {
      let o = n.event;
      r = Oh(o)
        ? me(o.target, { keyAttrs: i, maxStringLength: s })
        : me(o, { keyAttrs: i, maxStringLength: s });
    } catch {
      r = "<unknown>";
    }
    r.length !== 0 &&
      S().addBreadcrumb(
        { category: `ui.${n.name}`, message: r },
        { event: n.event, name: n.name, global: n.global }
      );
  }
  return e;
}
function xh(t) {
  let e = {
    category: "console",
    data: { arguments: t.args, logger: "console" },
    level: Ii(t.level),
    message: Jn(t.args, " "),
  };
  if (t.level === "assert")
    if (t.args[0] === !1)
      (e.message = `Assertion failed: ${
        Jn(t.args.slice(1), " ") || "console.assert"
      }`),
        (e.data.arguments = t.args.slice(1));
    else return;
  S().addBreadcrumb(e, { input: t.args, level: t.level });
}
function Nh(t) {
  let { startTimestamp: e, endTimestamp: n } = t,
    r = t.xhr[Ee];
  if (!e || !n || !r) return;
  let { method: i, url: s, status_code: o, body: a } = r,
    c = { method: i, url: s, status_code: o },
    u = { xhr: t.xhr, input: a, startTimestamp: e, endTimestamp: n };
  S().addBreadcrumb({ category: "xhr", data: c, type: "http" }, u);
}
function Dh(t) {
  let { startTimestamp: e, endTimestamp: n } = t;
  if (
    !!n &&
    !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST")
  )
    if (t.error) {
      let r = t.fetchData,
        i = {
          data: t.error,
          input: t.args,
          startTimestamp: e,
          endTimestamp: n,
        };
      S().addBreadcrumb(
        { category: "fetch", data: r, level: "error", type: "http" },
        i
      );
    } else {
      let r = { ...t.fetchData, status_code: t.response && t.response.status },
        i = {
          input: t.args,
          response: t.response,
          startTimestamp: e,
          endTimestamp: n,
        };
      S().addBreadcrumb({ category: "fetch", data: r, type: "http" }, i);
    }
}
function Ch(t) {
  let e = t.from,
    n = t.to,
    r = yn(b.location.href),
    i = yn(e),
    s = yn(n);
  i.path || (i = r),
    r.protocol === s.protocol && r.host === s.host && (n = s.relative),
    r.protocol === i.protocol && r.host === i.host && (e = i.relative),
    S().addBreadcrumb({ category: "navigation", data: { from: e, to: n } });
}
function Oh(t) {
  return !!t && !!t.target;
}
var Mh = "cause",
  Ah = 5,
  Ve = class {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    constructor(e = {}) {
      (this.name = Ve.id),
        (this._key = e.key || Mh),
        (this._limit = e.limit || Ah);
    }
    setupOnce() {}
    preprocessEvent(e, n, r) {
      let i = r.getOptions();
      fn(Ps, i.stackParser, i.maxValueLength, this._key, this._limit, e, n);
    }
  };
Ve.__initStatic();
var Ke = class {
  static __initStatic() {
    this.id = "HttpContext";
  }
  constructor() {
    this.name = Ke.id;
  }
  setupOnce() {}
  preprocessEvent(e) {
    if (!b.navigator && !b.location && !b.document) return;
    let n = (e.request && e.request.url) || (b.location && b.location.href),
      { referrer: r } = b.document || {},
      { userAgent: i } = b.navigator || {},
      s = {
        ...(e.request && e.request.headers),
        ...(r && { Referer: r }),
        ...(i && { "User-Agent": i }),
      },
      o = { ...e.request, ...(n && { url: n }), headers: s };
    e.request = o;
  }
};
Ke.__initStatic();
var Xe = class {
  static __initStatic() {
    this.id = "Dedupe";
  }
  constructor() {
    this.name = Xe.id;
  }
  setupOnce(e, n) {}
  processEvent(e) {
    if (e.type) return e;
    try {
      if (Bh(e, this._previousEvent))
        return (
          (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
            p.warn(
              "Event dropped due to being a duplicate of previously captured event."
            ),
          null
        );
    } catch {}
    return (this._previousEvent = e);
  }
};
Xe.__initStatic();
function Bh(t, e) {
  return e ? !!(Lh(t, e) || Uh(t, e)) : !1;
}
function Lh(t, e) {
  let n = t.message,
    r = e.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !Fc(t, e) ||
    !Pc(t, e)
  );
}
function Uh(t, e) {
  let n = Lc(e),
    r = Lc(t);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Fc(t, e) ||
    !Pc(t, e)
  );
}
function Pc(t, e) {
  let n = Uc(t),
    r = Uc(e);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let i = 0; i < r.length; i++) {
    let s = r[i],
      o = n[i];
    if (
      s.filename !== o.filename ||
      s.lineno !== o.lineno ||
      s.colno !== o.colno ||
      s.function !== o.function
    )
      return !1;
  }
  return !0;
}
function Fc(t, e) {
  let n = t.fingerprint,
    r = e.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  (n = n), (r = r);
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function Lc(t) {
  return t.exception && t.exception.values && t.exception.values[0];
}
function Uc(t) {
  let e = t.exception;
  if (e)
    try {
      return e.values[0].stacktrace.frames;
    } catch {
      return;
    }
}
var Hc = [
  new Tt.InboundFilters(),
  new Tt.FunctionToString(),
  new ze(),
  new qe(),
  new Ce(),
  new Ve(),
  new Xe(),
  new Ke(),
];
function Hs(t = {}) {
  t.defaultIntegrations === void 0 && (t.defaultIntegrations = Hc),
    t.release === void 0 &&
      (typeof __SENTRY_RELEASE__ == "string" &&
        (t.release = __SENTRY_RELEASE__),
      b.SENTRY_RELEASE &&
        b.SENTRY_RELEASE.id &&
        (t.release = b.SENTRY_RELEASE.id)),
    t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0),
    t.sendClientReports === void 0 && (t.sendClientReports = !0);
  let e = {
    ...t,
    stackParser: mi(t.stackParser || Dc),
    integrations: ji(t),
    transport: t.transport || (sr() ? xc : Nc),
  };
  zi(Xr, e), t.autoSessionTracking && Ph();
}
function Zr(t = {}, e = S()) {
  if (!b.document) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.error("Global document not defined in showReportDialog call");
    return;
  }
  let { client: n, scope: r } = e.getStackTop(),
    i = t.dsn || (n && n.getDsn());
  if (!i) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.error("DSN not configured for showReportDialog call");
    return;
  }
  r && (t.user = { ...r.getUser(), ...t.user }),
    t.eventId || (t.eventId = e.lastEventId());
  let s = b.document.createElement("script");
  (s.async = !0),
    (s.crossOrigin = "anonymous"),
    (s.src = $i(i, t)),
    t.onLoad && (s.onload = t.onLoad);
  let o = b.document.head || b.document.body;
  o
    ? o.appendChild(s)
    : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.error("Not injecting report dialog. No injection point found in HTML");
}
function Gc(t) {
  t.startSession({ ignoreDuration: !0 }), t.captureSession();
}
function Ph() {
  if (typeof b.document > "u") {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
      p.warn(
        "Session tracking in non-browser environment with @sentry/browser is not supported."
      );
    return;
  }
  let t = S();
  !t.captureSession ||
    (Gc(t),
    F("history", ({ from: e, to: n }) => {
      e === void 0 || e === n || Gc(S());
    }));
}
var Ys = {};
Qs(Ys, {
  Breadcrumbs: () => qe,
  Dedupe: () => Xe,
  GlobalHandlers: () => Ce,
  HttpContext: () => Ke,
  LinkedErrors: () => Ve,
  TryCatch: () => ze,
});
var Yc = {};
b.Sentry && b.Sentry.Integrations && (Yc = b.Sentry.Integrations);
var ab = { ...Yc, ...Tt, ...Ys };
function $s(t) {
  let e = { _metadata: {}, ...t };
  (e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [{ name: "npm:@sentry/react", version: Ne }],
    version: Ne,
  }),
    Hs(e);
}
var Wc = ri(tu()),
  Je = ri(Zs()),
  $c =
    "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx";
function Fh(t) {
  let e = t.match(/^([^.]+)/);
  return e !== null && parseInt(e[0]) >= 17;
}
var Gh = "unknown",
  jc = { componentStack: null, error: null, eventId: null };
function Hh(t, e) {
  let n = new WeakMap();
  function r(i, s) {
    if (!n.has(i)) {
      if (i.cause) return n.set(i, !0), r(i.cause, s);
      i.cause = s;
    }
  }
  r(t, e);
}
var on = class extends Je.Component {
  constructor(e) {
    super(e),
      on.prototype.__init.call(this),
      (this.state = jc),
      (this._openFallbackReportDialog = !0);
    let n = S().getClient();
    n &&
      n.on &&
      e.showDialog &&
      ((this._openFallbackReportDialog = !1),
      n.on("afterSendEvent", (r) => {
        !r.type &&
          r.event_id === this._lastEventId &&
          Zr({ ...e.dialogOptions, eventId: this._lastEventId });
      }));
  }
  componentDidCatch(e, { componentStack: n }) {
    let {
      beforeCapture: r,
      onError: i,
      showDialog: s,
      dialogOptions: o,
    } = this.props;
    $t((a) => {
      if (Fh(Je.version) && pt(e)) {
        let u = new Error(e.message);
        (u.name = `React ErrorBoundary ${e.name}`), (u.stack = n), Hh(e, u);
      }
      r && r(a, e, n), a.addEventProcessor((u) => (Ie(u, { handled: !1 }), u));
      let c = Ye(e, { contexts: { react: { componentStack: n } } });
      i && i(e, n, c),
        s &&
          ((this._lastEventId = c),
          this._openFallbackReportDialog && Zr({ ...o, eventId: c })),
        this.setState({ error: e, componentStack: n, eventId: c });
    });
  }
  componentDidMount() {
    let { onMount: e } = this.props;
    e && e();
  }
  componentWillUnmount() {
    let { error: e, componentStack: n, eventId: r } = this.state,
      { onUnmount: i } = this.props;
    i && i(e, n, r);
  }
  __init() {
    this.resetErrorBoundary = () => {
      let { onReset: e } = this.props,
        { error: n, componentStack: r, eventId: i } = this.state;
      e && e(n, r, i), this.setState(jc);
    };
  }
  render() {
    let { fallback: e, children: n } = this.props,
      r = this.state;
    if (r.error) {
      let i;
      return (
        typeof e == "function"
          ? (i = e({
              error: r.error,
              componentStack: r.componentStack,
              resetError: this.resetErrorBoundary,
              eventId: r.eventId,
            }))
          : (i = e),
        Je.isValidElement(i)
          ? i
          : (e &&
              (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
              p.warn("fallback did not produce a valid ReactElement"),
            null)
      );
    }
    return typeof n == "function" ? n() : n;
  }
};
function js(t, e) {
  let n = t.displayName || t.name || Gh,
    r = (i) =>
      Je.createElement(
        on,
        { ...e, __self: this, __source: { fileName: $c, lineNumber: 234 } },
        Je.createElement(t, {
          ...i,
          __self: this,
          __source: { fileName: $c, lineNumber: 235 },
        })
      );
  return (r.displayName = `errorBoundary(${n})`), (0, Wc.default)(r, t), r;
}
var Ws = ri(Zs());
function zc() {
  let t = N;
  if (!!t.__remixContext) return t.__remixContext.future;
}
function qc() {
  return kn([
    N,
    "access",
    (e) => e.__remixContext,
    "optionalAccess",
    (e) => e.state,
    "optionalAccess",
    (e) => e.loaderData,
    "optionalAccess",
    (e) => e.root,
    "optionalAccess",
    (e) => e.remixVersion,
  ]);
}
var Vc =
    "/home/runner/work/sentry-javascript/sentry-javascript/packages/remix/src/client/performance.tsx",
  Kc = { "routing.instrumentation": "remix-router" },
  dt,
  ei,
  zs,
  qs,
  Vs,
  Xc;
function Yh() {
  if (b && b.location) return b.location.pathname;
}
function $h(t) {
  return (
    t === 2 ||
    kn([zc, "call", (e) => e(), "optionalAccess", (e) => e.v2_errorBoundary]) ||
    !1
  );
}
function jh(t, e, n) {
  return (r, i = !0, s = !0) => {
    let o = Yh();
    i &&
      o &&
      (dt = r({
        name: o,
        op: "pageload",
        origin: "auto.pageload.remix",
        tags: Kc,
        metadata: { source: "url" },
      })),
      (ei = t),
      (zs = e),
      (qs = n),
      (Vs = r),
      (Xc = s);
  };
}
function Wh(t, e = { wrapWithErrorBoundary: !0, errorBoundaryOptions: {} }) {
  return (r) => {
    if (!ei || !zs || !qs || !Vs)
      return (
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) &&
          !gt() &&
          p.warn(
            "Remix SDK was unable to wrap your root because of one or more missing parameters."
          ),
        Ws.createElement(t, {
          ...r,
          __self: this,
          __source: { fileName: Vc, lineNumber: 117 },
        })
      );
    let i = !1,
      s = zs(),
      o = qs();
    return (
      ei(() => {
        dt && o && o.length && dt.setName(o[o.length - 1].id, "route"),
          (i = !0);
      }, []),
      ei(() => {
        if (i) {
          dt && dt.finish();
          return;
        }
        Xc &&
          o &&
          o.length &&
          (dt && dt.finish(),
          (dt = Vs({
            name: o[o.length - 1].id,
            op: "navigation",
            origin: "auto.navigation.remix",
            tags: Kc,
            metadata: { source: "route" },
          })));
      }, [s]),
      (i = !1),
      !$h(qc()) && e.wrapWithErrorBoundary
        ? js(t, e.errorBoundaryOptions)(r)
        : Ws.createElement(t, {
            ...r,
            __self: this,
            __source: { fileName: Vc, lineNumber: 168 },
          })
    );
  };
}
var zh = "npm:@sentry/";
function Jc(t, e) {
  (t._metadata = t._metadata || {}),
    (t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.remix",
      packages: e.map((n) => ({ name: `${zh}${n}`, version: Ne })),
      version: Ne,
    });
}
function Bb(t) {
  Jc(t, ["remix", "react"]),
    (t.environment = t.environment || "production"),
    $s(t),
    Er((e) => {
      e.setTag("runtime", "browser");
    });
}
export { xr as a, sn as b, jh as c, Wh as d, Bb as e };
