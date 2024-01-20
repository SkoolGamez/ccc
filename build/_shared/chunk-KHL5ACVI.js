import { a as De } from "/build/_shared/chunk-O4ZNHJCK.js";
import { a as yt, d as xe } from "/build/_shared/chunk-W6WK5VNR.js";
function vt() {
  return (
    (vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    vt.apply(this, arguments)
  );
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function qt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function je(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function se(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function Ce(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? se(t) : t,
    a = er(n.pathname || "/", r);
  if (a == null) return null;
  let o = Kr(e);
  Na(o);
  let i = null;
  for (let l = 0; i == null && l < o.length; ++l) i = Ha(o[l], $a(a));
  return i;
}
function Kr(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (o, i, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (W(
        s.relativePath.startsWith(n),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(n.length)));
    let u = de([n, s.relativePath]),
      c = r.concat(s);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Kr(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: ja(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) a(o, i);
      else for (let s of Jr(o.path)) a(o, i, s);
    }),
    t
  );
}
function Jr(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [o, ""] : [o];
  let i = Jr(n.join("/")),
    l = [];
  return (
    l.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    a && l.push(...i),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Na(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Ba(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
function ja(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Wr) && (n += Ia),
    t && (n += Oa),
    r
      .filter((a) => !Wr(a))
      .reduce((a, o) => a + (Fa.test(o) ? Ua : o === "" ? Ta : ka), n)
  );
}
function Ba(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ha(e, t) {
  let { routesMeta: r } = e,
    n = {},
    a = "/",
    o = [];
  for (let i = 0; i < r.length; ++i) {
    let l = r[i],
      s = i === r.length - 1,
      u = a === "/" ? t : t.slice(a.length) || "/",
      c = Rt(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(n, c.params);
    let f = l.route;
    o.push({
      params: n,
      pathname: de([a, c.pathname]),
      pathnameBase: Ka(de([a, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (a = de([a, c.pathnameBase]));
  }
  return o;
}
function Rt(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = za(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    i = o.replace(/(.)\/+$/, "$1"),
    l = a.slice(1);
  return {
    params: n.reduce((u, c, f) => {
      if (c === "*") {
        let y = l[f] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Va(l[f] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function za(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    qt(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, l) => (n.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (a += "\\/*$")
      : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function $a(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      qt(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Va(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      qt(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ").")
      ),
      e
    );
  }
}
function er(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function tr(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = "",
  } = typeof e == "string" ? se(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Wa(r, t)) : t,
    search: Ja(n),
    hash: Ya(a),
  };
}
function Wa(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Zt(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function rr(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function nr(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string"
    ? (a = se(e))
    : ((a = vt({}, e)),
      W(
        !a.pathname || !a.pathname.includes("?"),
        Zt("?", "pathname", "search", a)
      ),
      W(
        !a.pathname || !a.pathname.includes("#"),
        Zt("#", "pathname", "hash", a)
      ),
      W(!a.search || !a.search.includes("#"), Zt("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "",
    i = o ? "/" : a.pathname,
    l;
  if (n || i == null) l = r;
  else {
    let f = t.length - 1;
    if (i.startsWith("..")) {
      let y = i.split("/");
      for (; y[0] === ".."; ) y.shift(), (f -= 1);
      a.pathname = y.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let s = tr(a, l),
    u = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && r.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
function fe(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var _e,
  Vr,
  Fa,
  Ua,
  Oa,
  Ta,
  ka,
  Ia,
  Wr,
  de,
  Ka,
  Ja,
  Ya,
  Ie,
  wt,
  Yr,
  fl,
  Xa,
  hl,
  ml,
  pl,
  ar = yt(() => {
    (function (e) {
      (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(_e || (_e = {}));
    (function (e) {
      (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
    })(Vr || (Vr = {}));
    (Fa = /^:\w+$/),
      (Ua = 3),
      (Oa = 2),
      (Ta = 1),
      (ka = 10),
      (Ia = -2),
      (Wr = (e) => e === "*");
    (de = (e) => e.join("/").replace(/\/\/+/g, "/")),
      (Ka = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/")),
      (Ja = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e)),
      (Ya = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e)),
      (Ie = class extends Error {}),
      (wt = function (t, r) {
        r === void 0 && (r = 302);
        let n = r;
        typeof n == "number"
          ? (n = { status: n })
          : typeof n.status > "u" && (n.status = 302);
        let a = new Headers(n.headers);
        return (
          a.set("Location", t), new Response(null, vt({}, n, { headers: a }))
        );
      });
    (Yr = ["post", "put", "patch", "delete"]),
      (fl = new Set(Yr)),
      (Xa = ["get", ...Yr]),
      (hl = new Set(Xa)),
      (ml =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u"),
      (pl = Symbol("deferred"));
  });
function Et() {
  return (
    (Et = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Et.apply(this, arguments)
  );
}
function Pe(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Be() || W(!1);
  let { basename: n, navigator: a } = v.useContext(ie),
    { hash: o, pathname: i, search: l } = Le(e, { relative: r }),
    s = i;
  return (
    n !== "/" && (s = i === "/" ? n : de([n, i])),
    a.createHref({ pathname: s, search: l, hash: o })
  );
}
function Be() {
  return v.useContext(qe) != null;
}
function G() {
  return Be() || W(!1), v.useContext(qe).location;
}
function Gr(e) {
  v.useContext(ie).static || v.useLayoutEffect(e);
}
function St() {
  let { isDataRoute: e } = v.useContext(ee);
  return e ? so() : qa();
}
function qa() {
  Be() || W(!1);
  let e = v.useContext(he),
    { basename: t, navigator: r } = v.useContext(ie),
    { matches: n } = v.useContext(ee),
    { pathname: a } = G(),
    o = JSON.stringify(rr(n).map((s) => s.pathnameBase)),
    i = v.useRef(!1);
  return (
    Gr(() => {
      i.current = !0;
    }),
    v.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let c = nr(s, JSON.parse(o), a, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : de([t, c.pathname])),
          (u.replace ? r.replace : r.push)(c, u.state, u);
      },
      [t, r, o, a, e]
    )
  );
}
function sr(e) {
  let t = v.useContext(ee).outlet;
  return t && v.createElement(eo.Provider, { value: e }, t);
}
function Le(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = v.useContext(ee),
    { pathname: a } = G(),
    o = JSON.stringify(rr(n).map((i) => i.pathnameBase));
  return v.useMemo(() => nr(e, JSON.parse(o), a, r === "path"), [e, o, a, r]);
}
function to(e, t, r) {
  Be() || W(!1);
  let { navigator: n } = v.useContext(ie),
    { matches: a } = v.useContext(ee),
    o = a[a.length - 1],
    i = o ? o.params : {},
    l = o ? o.pathname : "/",
    s = o ? o.pathnameBase : "/",
    u = o && o.route,
    c = G(),
    f;
  if (t) {
    var y;
    let d = typeof t == "string" ? se(t) : t;
    s === "/" || ((y = d.pathname) == null ? void 0 : y.startsWith(s)) || W(!1),
      (f = d);
  } else f = c;
  let S = f.pathname || "/",
    R = s === "/" ? S : S.slice(s.length) || "/",
    x = Ce(e, { pathname: R }),
    w = oo(
      x &&
        x.map((d) =>
          Object.assign({}, d, {
            params: Object.assign({}, i, d.params),
            pathname: de([
              s,
              n.encodeLocation
                ? n.encodeLocation(d.pathname).pathname
                : d.pathname,
            ]),
            pathnameBase:
              d.pathnameBase === "/"
                ? s
                : de([
                    s,
                    n.encodeLocation
                      ? n.encodeLocation(d.pathnameBase).pathname
                      : d.pathnameBase,
                  ]),
          })
        ),
      a,
      r
    );
  return t && w
    ? v.createElement(
        qe.Provider,
        {
          value: {
            location: Et(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: _e.Pop,
          },
        },
        w
      )
    : w;
}
function ro() {
  let e = Ae(),
    t = fe(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = "rgba(200,200,200, 0.5)",
    a = { padding: "0.5rem", backgroundColor: n },
    o = { padding: "2px 4px", backgroundColor: n };
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? v.createElement("pre", { style: a }, r) : null,
    null
  );
}
function ao(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = v.useContext(he);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    v.createElement(ee.Provider, { value: t }, n)
  );
}
function oo(e, t, r) {
  var n;
  if ((t === void 0 && (t = []), r === void 0 && (r = null), e == null)) {
    var a;
    if ((a = r) != null && a.errors) e = r.matches;
    else return null;
  }
  let o = e,
    i = (n = r) == null ? void 0 : n.errors;
  if (i != null) {
    let l = o.findIndex((s) => s.route.id && i?.[s.route.id]);
    l >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, s, u) => {
    let c = s.route.id ? i?.[s.route.id] : null,
      f = null;
    r && (f = s.route.errorElement || no);
    let y = t.concat(o.slice(0, u + 1)),
      S = () => {
        let R;
        return (
          c
            ? (R = f)
            : s.route.Component
            ? (R = v.createElement(s.route.Component, null))
            : s.route.element
            ? (R = s.route.element)
            : (R = l),
          v.createElement(ao, {
            match: s,
            routeContext: { outlet: l, matches: y, isDataRoute: r != null },
            children: R,
          })
        );
      };
    return r && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? v.createElement(or, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: c,
          children: S(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : S();
  }, null);
}
function io(e) {
  let t = v.useContext(he);
  return t || W(!1), t;
}
function et(e) {
  let t = v.useContext(Re);
  return t || W(!1), t;
}
function lo(e) {
  let t = v.useContext(ee);
  return t || W(!1), t;
}
function xt(e) {
  let t = lo(e),
    r = t.matches[t.matches.length - 1];
  return r.route.id || W(!1), r.route.id;
}
function ur() {
  return xt(oe.UseRouteId);
}
function Me() {
  return et(oe.UseNavigation).navigation;
}
function tt() {
  let { matches: e, loaderData: t } = et(oe.UseMatches);
  return v.useMemo(
    () =>
      e.map((r) => {
        let { pathname: n, params: a } = r;
        return {
          id: r.route.id,
          pathname: n,
          params: a,
          data: t[r.route.id],
          handle: r.route.handle,
        };
      }),
    [e, t]
  );
}
function cr() {
  let e = et(oe.UseLoaderData),
    t = xt(oe.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function dr() {
  let e = et(oe.UseActionData);
  return v.useContext(ee) || W(!1), Object.values(e?.actionData || {})[0];
}
function Ae() {
  var e;
  let t = v.useContext(Xr),
    r = et(oe.UseRouteError),
    n = xt(oe.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function fr() {
  let e = v.useContext(bt);
  return e?._data;
}
function Dt() {
  let e = v.useContext(bt);
  return e?._error;
}
function so() {
  let { router: e } = io(ir.UseNavigateStable),
    t = xt(oe.UseNavigateStable),
    r = v.useRef(!1);
  return (
    Gr(() => {
      r.current = !0;
    }),
    v.useCallback(
      function (a, o) {
        o === void 0 && (o = {}),
          r.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : e.navigate(a, Et({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function hr(e) {
  let { fallbackElement: t, router: r } = e,
    [n, a] = v.useState(r.state);
  v.useLayoutEffect(() => r.subscribe(a), [r, a]);
  let o = v.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (s) => r.navigate(s),
        push: (s, u, c) =>
          r.navigate(s, {
            state: u,
            preventScrollReset: c?.preventScrollReset,
          }),
        replace: (s, u, c) =>
          r.navigate(s, {
            replace: !0,
            state: u,
            preventScrollReset: c?.preventScrollReset,
          }),
      }),
      [r]
    ),
    i = r.basename || "/",
    l = v.useMemo(
      () => ({ router: r, navigator: o, static: !1, basename: i }),
      [r, o, i]
    );
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(
      he.Provider,
      { value: l },
      v.createElement(
        Re.Provider,
        { value: n },
        v.createElement(
          mr,
          {
            basename: r.basename,
            location: r.state.location,
            navigationType: r.state.historyAction,
            navigator: o,
          },
          r.state.initialized
            ? v.createElement(uo, { routes: r.routes, state: n })
            : t
        )
      )
    ),
    null
  );
}
function uo(e) {
  let { routes: t, state: r } = e;
  return to(t, void 0, r);
}
function _t(e) {
  return sr(e.context);
}
function mr(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = _e.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Be() && W(!1);
  let l = t.replace(/^\/*/, "/"),
    s = v.useMemo(() => ({ basename: l, navigator: o, static: i }), [l, o, i]);
  typeof n == "string" && (n = se(n));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: y = null,
      key: S = "default",
    } = n,
    R = v.useMemo(() => {
      let x = er(u, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: c, hash: f, state: y, key: S },
            navigationType: a,
          };
    }, [l, u, c, f, y, S, a]);
  return R == null
    ? null
    : v.createElement(
        ie.Provider,
        { value: s },
        v.createElement(qe.Provider, { children: r, value: R })
      );
}
function pr(e) {
  let { children: t, errorElement: r, resolve: n } = e;
  return v.createElement(
    lr,
    { resolve: n, errorElement: r },
    v.createElement(fo, null, t)
  );
}
function fo(e) {
  let { children: t } = e,
    r = fr(),
    n = typeof t == "function" ? t(r) : t;
  return v.createElement(v.Fragment, null, n);
}
function Qr(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: v.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: v.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
var v,
  he,
  Re,
  bt,
  ie,
  qe,
  ee,
  Xr,
  eo,
  no,
  or,
  ir,
  oe,
  q,
  co,
  lr,
  gr = yt(() => {
    v = xe(De());
    ar();
    ar();
    (he = v.createContext(null)),
      (Re = v.createContext(null)),
      (bt = v.createContext(null)),
      (ie = v.createContext(null)),
      (qe = v.createContext(null)),
      (ee = v.createContext({ outlet: null, matches: [], isDataRoute: !1 })),
      (Xr = v.createContext(null));
    eo = v.createContext(null);
    (no = v.createElement(ro, null)),
      (or = class extends v.Component {
        constructor(t) {
          super(t),
            (this.state = {
              location: t.location,
              revalidation: t.revalidation,
              error: t.error,
            });
        }
        static getDerivedStateFromError(t) {
          return { error: t };
        }
        static getDerivedStateFromProps(t, r) {
          return r.location !== t.location ||
            (r.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                error: t.error,
                location: t.location,
                revalidation: t.revalidation,
              }
            : {
                error: t.error || r.error,
                location: r.location,
                revalidation: t.revalidation || r.revalidation,
              };
        }
        componentDidCatch(t, r) {
          console.error(
            "React Router caught the following error during render",
            t,
            r
          );
        }
        render() {
          return this.state.error
            ? v.createElement(
                ee.Provider,
                { value: this.props.routeContext },
                v.createElement(Xr.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      });
    (function (e) {
      (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate");
    })(ir || (ir = {}));
    (function (e) {
      (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId");
    })(oe || (oe = {}));
    (function (e) {
      (e[(e.pending = 0)] = "pending"),
        (e[(e.success = 1)] = "success"),
        (e[(e.error = 2)] = "error");
    })(q || (q = {}));
    (co = new Promise(() => {})),
      (lr = class extends v.Component {
        constructor(t) {
          super(t), (this.state = { error: null });
        }
        static getDerivedStateFromError(t) {
          return { error: t };
        }
        componentDidCatch(t, r) {
          console.error(
            "<Await> caught the following error during render",
            t,
            r
          );
        }
        render() {
          let { children: t, errorElement: r, resolve: n } = this.props,
            a = null,
            o = q.pending;
          if (!(n instanceof Promise))
            (o = q.success),
              (a = Promise.resolve()),
              Object.defineProperty(a, "_tracked", { get: () => !0 }),
              Object.defineProperty(a, "_data", { get: () => n });
          else if (this.state.error) {
            o = q.error;
            let i = this.state.error;
            (a = Promise.reject().catch(() => {})),
              Object.defineProperty(a, "_tracked", { get: () => !0 }),
              Object.defineProperty(a, "_error", { get: () => i });
          } else
            n._tracked
              ? ((a = n),
                (o =
                  a._error !== void 0
                    ? q.error
                    : a._data !== void 0
                    ? q.success
                    : q.pending))
              : ((o = q.pending),
                Object.defineProperty(n, "_tracked", { get: () => !0 }),
                (a = n.then(
                  (i) => Object.defineProperty(n, "_data", { get: () => i }),
                  (i) => Object.defineProperty(n, "_error", { get: () => i })
                )));
          if (o === q.error && a._error instanceof Ie) throw co;
          if (o === q.error && !r) throw a._error;
          if (o === q.error)
            return v.createElement(bt.Provider, { value: a, children: r });
          if (o === q.success)
            return v.createElement(bt.Provider, { value: a, children: t });
          throw a;
        }
      });
  });
function T() {
  return (
    (T = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    T.apply(this, arguments)
  );
}
function hn(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let { pathname: o, search: i, hash: l } = n.location;
    return it(
      "",
      { pathname: o, search: i, hash: l },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : lt(a);
  }
  return mo(t, r, null, e);
}
function F(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function $e(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ho() {
  return Math.random().toString(36).substr(2, 8);
}
function qr(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function it(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    T(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ue(t) : t,
      { state: r, key: (t && t.key) || n || ho() }
    )
  );
}
function lt(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Ue(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function mo(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: a = document.defaultView, v5Compat: o = !1 } = n,
    i = a.history,
    l = K.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), i.replaceState(T({}, i.state, { idx: u }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    l = K.Pop;
    let w = c(),
      d = w == null ? null : w - u;
    (u = w), s && s({ action: l, location: x.location, delta: d });
  }
  function y(w, d) {
    l = K.Push;
    let D = it(x.location, w, d);
    r && r(D, w), (u = c() + 1);
    let L = qr(D, u),
      C = x.createHref(D);
    try {
      i.pushState(L, "", C);
    } catch {
      a.location.assign(C);
    }
    o && s && s({ action: l, location: x.location, delta: 1 });
  }
  function S(w, d) {
    l = K.Replace;
    let D = it(x.location, w, d);
    r && r(D, w), (u = c());
    let L = qr(D, u),
      C = x.createHref(D);
    i.replaceState(L, "", C),
      o && s && s({ action: l, location: x.location, delta: 0 });
  }
  function R(w) {
    let d = a.location.origin !== "null" ? a.location.origin : a.location.href,
      D = typeof w == "string" ? w : lt(w);
    return (
      F(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          D
      ),
      new URL(D, d)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(a, i);
    },
    listen(w) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(Zr, f),
        (s = w),
        () => {
          a.removeEventListener(Zr, f), (s = null);
        }
      );
    },
    createHref(w) {
      return t(a, w);
    },
    createURL: R,
    encodeLocation(w) {
      let d = R(w);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: y,
    replace: S,
    go(w) {
      return i.go(w);
    },
  };
  return x;
}
function go(e) {
  return e.index === !0;
}
function Rr(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, o) => {
      let i = [...r, o],
        l = typeof a.id == "string" ? a.id : i.join("-");
      if (
        (F(
          a.index !== !0 || !a.children,
          "Cannot specify children on an index route"
        ),
        F(
          !n[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        go(a))
      ) {
        let s = T({}, a, t(a), { id: l });
        return (n[l] = s), s;
      } else {
        let s = T({}, a, t(a), { id: l, children: void 0 });
        return (
          (n[l] = s), a.children && (s.children = Rr(a.children, t, i, n)), s
        );
      }
    })
  );
}
function at(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? Ue(t) : t,
    a = we(n.pathname || "/", r);
  if (a == null) return null;
  let o = mn(e);
  yo(o);
  let i = null;
  for (let l = 0; i == null && l < o.length; ++l) i = _o(o[l], Lo(a));
  return i;
}
function mn(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (o, i, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (F(
        s.relativePath.startsWith(n),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(n.length)));
    let u = Fe([n, s.relativePath]),
      c = r.concat(s);
    o.children &&
      o.children.length > 0 &&
      (F(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      mn(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: xo(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) a(o, i);
      else for (let s of pn(o.path)) a(o, i, s);
    }),
    t
  );
}
function pn(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [o, ""] : [o];
  let i = pn(n.join("/")),
    l = [];
  return (
    l.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    a && l.push(...i),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function yo(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Do(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
function xo(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(en) && (n += So),
    t && (n += wo),
    r
      .filter((a) => !en(a))
      .reduce((a, o) => a + (vo.test(o) ? Ro : o === "" ? Eo : bo), n)
  );
}
function Do(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _o(e, t) {
  let { routesMeta: r } = e,
    n = {},
    a = "/",
    o = [];
  for (let i = 0; i < r.length; ++i) {
    let l = r[i],
      s = i === r.length - 1,
      u = a === "/" ? t : t.slice(a.length) || "/",
      c = Co(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(n, c.params);
    let f = l.route;
    o.push({
      params: n,
      pathname: Fe([a, c.pathname]),
      pathnameBase: Uo(Fe([a, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (a = Fe([a, c.pathnameBase]));
  }
  return o;
}
function Co(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Po(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    i = o.replace(/(.)\/+$/, "$1"),
    l = a.slice(1);
  return {
    params: n.reduce((u, c, f) => {
      if (c === "*") {
        let y = l[f] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Mo(l[f] || "", c)), u;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Po(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    $e(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, l) => (n.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (a += "\\/*$")
      : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function Lo(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      $e(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Mo(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      $e(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ").")
      ),
      e
    );
  }
}
function we(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Ao(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = "",
  } = typeof e == "string" ? Ue(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : No(r, t)) : t,
    search: Oo(n),
    hash: To(a),
  };
}
function No(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function yr(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gn(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Fo(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string"
    ? (a = Ue(e))
    : ((a = T({}, e)),
      F(
        !a.pathname || !a.pathname.includes("?"),
        yr("?", "pathname", "search", a)
      ),
      F(
        !a.pathname || !a.pathname.includes("#"),
        yr("#", "pathname", "hash", a)
      ),
      F(!a.search || !a.search.includes("#"), yr("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "",
    i = o ? "/" : a.pathname,
    l;
  if (n || i == null) l = r;
  else {
    let f = t.length - 1;
    if (i.startsWith("..")) {
      let y = i.split("/");
      for (; y[0] === ".."; ) y.shift(), (f -= 1);
      a.pathname = y.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let s = Ao(a, l),
    u = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && r.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
function ko(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
function wn(e) {
  F(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let t;
  if (e.mapRouteProperties) t = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let h = e.detectErrorBoundary;
    t = (m) => ({ hasErrorBoundary: h(m) });
  } else t = Wo;
  let r = {},
    n = Rr(e.routes, t, void 0, r),
    a,
    o = e.basename || "/",
    i = T({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    l = null,
    s = new Set(),
    u = null,
    c = null,
    f = null,
    y = e.hydrationData != null,
    S = at(n, e.history.location, o),
    R = null;
  if (S == null) {
    let h = le(404, { pathname: e.history.location.pathname }),
      { matches: m, route: p } = un(n);
    (S = m), (R = { [p.id]: h });
  }
  let x =
      !S.some((h) => h.route.lazy) &&
      (!S.some((h) => h.route.loader) || e.hydrationData != null),
    w,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: S,
      initialized: x,
      navigation: vr,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || R,
      fetchers: new Map(),
      blockers: new Map(),
    },
    D = K.Pop,
    L = !1,
    C,
    j = !1,
    k = !1,
    Q = [],
    ce = [],
    H = new Map(),
    Ur = 0,
    Bt = -1,
    Je = new Map(),
    Ye = new Set(),
    Oe = new Map(),
    Se = new Map(),
    ge = new Map(),
    Ht = !1;
  function va() {
    return (
      (l = e.history.listen((h) => {
        let { action: m, location: p, delta: E } = h;
        if (Ht) {
          Ht = !1;
          return;
        }
        $e(
          ge.size === 0 || E != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let b = Hr({
          currentLocation: d.location,
          nextLocation: p,
          historyAction: m,
        });
        if (b && E != null) {
          (Ht = !0),
            e.history.go(E * -1),
            ht(b, {
              state: "blocked",
              location: p,
              proceed() {
                ht(b, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: p,
                }),
                  e.history.go(E);
              },
              reset() {
                Qe(b), Y({ blockers: new Map(w.state.blockers) });
              },
            });
          return;
        }
        return ye(m, p);
      })),
      d.initialized || ye(K.Pop, d.location),
      w
    );
  }
  function Ra() {
    l && l(),
      s.clear(),
      C && C.abort(),
      d.fetchers.forEach((h, m) => Vt(m)),
      d.blockers.forEach((h, m) => Qe(m));
  }
  function wa(h) {
    return s.add(h), () => s.delete(h);
  }
  function Y(h) {
    (d = T({}, d, h)), s.forEach((m) => m(d));
  }
  function Xe(h, m) {
    var p, E;
    let b =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        me(d.navigation.formMethod) &&
        d.navigation.state === "loading" &&
        ((p = h.state) == null ? void 0 : p._isRedirect) !== !0,
      M;
    m.actionData
      ? Object.keys(m.actionData).length > 0
        ? (M = m.actionData)
        : (M = null)
      : b
      ? (M = d.actionData)
      : (M = null);
    let A = m.loaderData
      ? sn(d.loaderData, m.loaderData, m.matches || [], m.errors)
      : d.loaderData;
    for (let [_] of ge) Qe(_);
    let P =
      L === !0 ||
      (d.navigation.formMethod != null &&
        me(d.navigation.formMethod) &&
        ((E = h.state) == null ? void 0 : E._isRedirect) !== !0);
    a && ((n = a), (a = void 0)),
      Y(
        T({}, m, {
          actionData: M,
          loaderData: A,
          historyAction: D,
          location: h,
          initialized: !0,
          navigation: vr,
          revalidation: "idle",
          restoreScrollPosition: zr(h, m.matches || d.matches),
          preventScrollReset: P,
          blockers: new Map(d.blockers),
        })
      ),
      j ||
        D === K.Pop ||
        (D === K.Push
          ? e.history.push(h, h.state)
          : D === K.Replace && e.history.replace(h, h.state)),
      (D = K.Pop),
      (L = !1),
      (j = !1),
      (k = !1),
      (Q = []),
      (ce = []);
  }
  async function Or(h, m) {
    if (typeof h == "number") {
      e.history.go(h);
      return;
    }
    let p = wr(
        d.location,
        d.matches,
        o,
        i.v7_prependBasename,
        h,
        m?.fromRouteId,
        m?.relative
      ),
      {
        path: E,
        submission: b,
        error: M,
      } = rn(i.v7_normalizeFormMethod, !1, p, m),
      A = d.location,
      P = it(d.location, E, m && m.state);
    P = T({}, P, e.history.encodeLocation(P));
    let _ = m && m.replace != null ? m.replace : void 0,
      U = K.Push;
    _ === !0
      ? (U = K.Replace)
      : _ === !1 ||
        (b != null &&
          me(b.formMethod) &&
          b.formAction === d.location.pathname + d.location.search &&
          (U = K.Replace));
    let I =
        m && "preventScrollReset" in m ? m.preventScrollReset === !0 : void 0,
      X = Hr({ currentLocation: A, nextLocation: P, historyAction: U });
    if (X) {
      ht(X, {
        state: "blocked",
        location: P,
        proceed() {
          ht(X, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: P,
          }),
            Or(h, m);
        },
        reset() {
          Qe(X), Y({ blockers: new Map(d.blockers) });
        },
      });
      return;
    }
    return await ye(U, P, {
      submission: b,
      pendingError: M,
      preventScrollReset: I,
      replace: m && m.replace,
    });
  }
  function Ea() {
    if (
      (zt(),
      Y({ revalidation: "loading" }),
      d.navigation.state !== "submitting")
    ) {
      if (d.navigation.state === "idle") {
        ye(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ye(D || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function ye(h, m, p) {
    C && C.abort(),
      (C = null),
      (D = h),
      (j = (p && p.startUninterruptedRevalidation) === !0),
      La(d.location, d.matches),
      (L = (p && p.preventScrollReset) === !0);
    let E = a || n,
      b = p && p.overrideNavigation,
      M = at(E, m, o);
    if (!M) {
      let $ = le(404, { pathname: m.pathname }),
        { matches: V, route: re } = un(E);
      Wt(), Xe(m, { matches: V, loaderData: {}, errors: { [re.id]: $ } });
      return;
    }
    if (
      d.initialized &&
      Go(d.location, m) &&
      !(p && p.submission && me(p.submission.formMethod))
    ) {
      Xe(m, { matches: M });
      return;
    }
    C = new AbortController();
    let A = nt(e.history, m, C.signal, p && p.submission),
      P,
      _;
    if (p && p.pendingError) _ = { [He(M).route.id]: p.pendingError };
    else if (p && p.submission && me(p.submission.formMethod)) {
      let $ = await ba(A, m, p.submission, M, { replace: p.replace });
      if ($.shortCircuited) return;
      (P = $.pendingActionData),
        (_ = $.pendingActionError),
        (b = T({ state: "loading", location: m }, p.submission)),
        (A = new Request(A.url, { signal: A.signal }));
    }
    let {
      shortCircuited: U,
      loaderData: I,
      errors: X,
    } = await Sa(
      A,
      m,
      M,
      b,
      p && p.submission,
      p && p.fetcherSubmission,
      p && p.replace,
      P,
      _
    );
    U ||
      ((C = null),
      Xe(
        m,
        T({ matches: M }, P ? { actionData: P } : {}, {
          loaderData: I,
          errors: X,
        })
      ));
  }
  async function ba(h, m, p, E, b) {
    zt();
    let M = T({ state: "submitting", location: m }, p);
    Y({ navigation: M });
    let A,
      P = Er(E, m);
    if (!P.route.action && !P.route.lazy)
      A = {
        type: z.error,
        error: le(405, {
          method: h.method,
          pathname: m.pathname,
          routeId: P.route.id,
        }),
      };
    else if (((A = await rt("action", h, P, E, r, t, o)), h.signal.aborted))
      return { shortCircuited: !0 };
    if (ze(A)) {
      let _;
      return (
        b && b.replace != null
          ? (_ = b.replace)
          : (_ = A.location === d.location.pathname + d.location.search),
        await Ge(d, A, { submission: p, replace: _ }),
        { shortCircuited: !0 }
      );
    }
    if (ot(A)) {
      let _ = He(E, P.route.id);
      return (
        (b && b.replace) !== !0 && (D = K.Push),
        { pendingActionData: {}, pendingActionError: { [_.route.id]: A.error } }
      );
    }
    if (Ne(A)) throw le(400, { type: "defer-action" });
    return { pendingActionData: { [P.route.id]: A.data } };
  }
  async function Sa(h, m, p, E, b, M, A, P, _) {
    let U = E;
    U ||
      (U = T(
        {
          state: "loading",
          location: m,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        b
      ));
    let I =
        b || M
          ? b || M
          : U.formMethod && U.formAction && U.formData && U.formEncType
          ? {
              formMethod: U.formMethod,
              formAction: U.formAction,
              formData: U.formData,
              formEncType: U.formEncType,
            }
          : void 0,
      X = a || n,
      [$, V] = nn(e.history, d, p, I, m, k, Q, ce, Oe, X, o, P, _);
    if (
      (Wt(
        (B) =>
          !(p && p.some((ne) => ne.route.id === B)) ||
          ($ && $.some((ne) => ne.route.id === B))
      ),
      $.length === 0 && V.length === 0)
    ) {
      let B = jr();
      return (
        Xe(
          m,
          T(
            { matches: p, loaderData: {}, errors: _ || null },
            P ? { actionData: P } : {},
            B ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!j) {
      V.forEach((ne) => {
        let ke = d.fetchers.get(ne.key),
          Gt = {
            state: "loading",
            data: ke && ke.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        d.fetchers.set(ne.key, Gt);
      });
      let B = P || d.actionData;
      Y(
        T(
          { navigation: U },
          B
            ? Object.keys(B).length === 0
              ? { actionData: null }
              : { actionData: B }
            : {},
          V.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
        )
      );
    }
    (Bt = ++Ur),
      V.forEach((B) => {
        B.controller && H.set(B.key, B.controller);
      });
    let re = () => V.forEach((B) => Te(B.key));
    C && C.signal.addEventListener("abort", re);
    let {
      results: Ze,
      loaderResults: Kt,
      fetcherResults: mt,
    } = await kr(d.matches, p, $, V, h);
    if (h.signal.aborted) return { shortCircuited: !0 };
    C && C.signal.removeEventListener("abort", re),
      V.forEach((B) => H.delete(B.key));
    let ve = cn(Ze);
    if (ve) return await Ge(d, ve, { replace: A }), { shortCircuited: !0 };
    let { loaderData: pt, errors: Jt } = ln(d, p, $, Kt, _, V, mt, Se);
    Se.forEach((B, ne) => {
      B.subscribe((ke) => {
        (ke || B.done) && Se.delete(ne);
      });
    });
    let Yt = jr(),
      Xt = Br(Bt),
      gt = Yt || Xt || V.length > 0;
    return T(
      { loaderData: pt, errors: Jt },
      gt ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function Tr(h) {
    return d.fetchers.get(h) || $o;
  }
  function xa(h, m, p, E) {
    if (Vo)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    H.has(h) && Te(h);
    let b = a || n,
      M = wr(d.location, d.matches, o, i.v7_prependBasename, p, m, E?.relative),
      A = at(b, M, o);
    if (!A) {
      $t(h, m, le(404, { pathname: M }));
      return;
    }
    let { path: P, submission: _ } = rn(i.v7_normalizeFormMethod, !0, M, E),
      U = Er(A, P);
    if (((L = (E && E.preventScrollReset) === !0), _ && me(_.formMethod))) {
      Da(h, m, P, U, A, _);
      return;
    }
    Oe.set(h, { routeId: m, path: P }), _a(h, m, P, U, A, _);
  }
  async function Da(h, m, p, E, b, M) {
    if ((zt(), Oe.delete(h), !E.route.action && !E.route.lazy)) {
      let Z = le(405, { method: M.formMethod, pathname: p, routeId: m });
      $t(h, m, Z);
      return;
    }
    let A = d.fetchers.get(h),
      P = T({ state: "submitting" }, M, {
        data: A && A.data,
        " _hasFetcherDoneAnything ": !0,
      });
    d.fetchers.set(h, P), Y({ fetchers: new Map(d.fetchers) });
    let _ = new AbortController(),
      U = nt(e.history, p, _.signal, M);
    H.set(h, _);
    let I = await rt("action", U, E, b, r, t, o);
    if (U.signal.aborted) {
      H.get(h) === _ && H.delete(h);
      return;
    }
    if (ze(I)) {
      H.delete(h), Ye.add(h);
      let Z = T({ state: "loading" }, M, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        d.fetchers.set(h, Z),
        Y({ fetchers: new Map(d.fetchers) }),
        Ge(d, I, { submission: M, isFetchActionRedirect: !0 })
      );
    }
    if (ot(I)) {
      $t(h, m, I.error);
      return;
    }
    if (Ne(I)) throw le(400, { type: "defer-action" });
    let X = d.navigation.location || d.location,
      $ = nt(e.history, X, _.signal),
      V = a || n,
      re =
        d.navigation.state !== "idle"
          ? at(V, d.navigation.location, o)
          : d.matches;
    F(re, "Didn't find any matches after fetcher action");
    let Ze = ++Ur;
    Je.set(h, Ze);
    let Kt = T({ state: "loading", data: I.data }, M, {
      " _hasFetcherDoneAnything ": !0,
    });
    d.fetchers.set(h, Kt);
    let [mt, ve] = nn(
      e.history,
      d,
      re,
      M,
      X,
      k,
      Q,
      ce,
      Oe,
      V,
      o,
      { [E.route.id]: I.data },
      void 0
    );
    ve
      .filter((Z) => Z.key !== h)
      .forEach((Z) => {
        let Qt = Z.key,
          $r = d.fetchers.get(Qt),
          Aa = {
            state: "loading",
            data: $r && $r.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        d.fetchers.set(Qt, Aa), Z.controller && H.set(Qt, Z.controller);
      }),
      Y({ fetchers: new Map(d.fetchers) });
    let pt = () => ve.forEach((Z) => Te(Z.key));
    _.signal.addEventListener("abort", pt);
    let {
      results: Jt,
      loaderResults: Yt,
      fetcherResults: Xt,
    } = await kr(d.matches, re, mt, ve, $);
    if (_.signal.aborted) return;
    _.signal.removeEventListener("abort", pt),
      Je.delete(h),
      H.delete(h),
      ve.forEach((Z) => H.delete(Z.key));
    let gt = cn(Jt);
    if (gt) return Ge(d, gt);
    let { loaderData: B, errors: ne } = ln(
        d,
        d.matches,
        mt,
        Yt,
        void 0,
        ve,
        Xt,
        Se
      ),
      ke = {
        state: "idle",
        data: I.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    d.fetchers.set(h, ke);
    let Gt = Br(Ze);
    d.navigation.state === "loading" && Ze > Bt
      ? (F(D, "Expected pending action"),
        C && C.abort(),
        Xe(d.navigation.location, {
          matches: re,
          loaderData: B,
          errors: ne,
          fetchers: new Map(d.fetchers),
        }))
      : (Y(
          T(
            { errors: ne, loaderData: sn(d.loaderData, B, re, ne) },
            Gt ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (k = !1));
  }
  async function _a(h, m, p, E, b, M) {
    let A = d.fetchers.get(h),
      P = T(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        M,
        { data: A && A.data, " _hasFetcherDoneAnything ": !0 }
      );
    d.fetchers.set(h, P), Y({ fetchers: new Map(d.fetchers) });
    let _ = new AbortController(),
      U = nt(e.history, p, _.signal);
    H.set(h, _);
    let I = await rt("loader", U, E, b, r, t, o);
    if (
      (Ne(I) && (I = (await xn(I, U.signal, !0)) || I),
      H.get(h) === _ && H.delete(h),
      U.signal.aborted)
    )
      return;
    if (ze(I)) {
      Ye.add(h), await Ge(d, I);
      return;
    }
    if (ot(I)) {
      let $ = He(d.matches, m);
      d.fetchers.delete(h),
        Y({ fetchers: new Map(d.fetchers), errors: { [$.route.id]: I.error } });
      return;
    }
    F(!Ne(I), "Unhandled fetcher deferred data");
    let X = {
      state: "idle",
      data: I.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    d.fetchers.set(h, X), Y({ fetchers: new Map(d.fetchers) });
  }
  async function Ge(h, m, p) {
    var E;
    let {
      submission: b,
      replace: M,
      isFetchActionRedirect: A,
    } = p === void 0 ? {} : p;
    m.revalidate && (k = !0);
    let P = it(
      h.location,
      m.location,
      T({ _isRedirect: !0 }, A ? { _isFetchActionRedirect: !0 } : {})
    );
    if (
      (F(P, "Expected a location on the redirect navigation"),
      vn.test(m.location) &&
        Rn &&
        typeof ((E = window) == null ? void 0 : E.location) < "u")
    ) {
      let V = e.history.createURL(m.location),
        re = we(V.pathname, o) == null;
      if (window.location.origin !== V.origin || re) {
        M
          ? window.location.replace(m.location)
          : window.location.assign(m.location);
        return;
      }
    }
    C = null;
    let _ = M === !0 ? K.Replace : K.Push,
      {
        formMethod: U,
        formAction: I,
        formEncType: X,
        formData: $,
      } = h.navigation;
    !b &&
      U &&
      I &&
      $ &&
      X &&
      (b = { formMethod: U, formAction: I, formEncType: X, formData: $ }),
      zo.has(m.status) && b && me(b.formMethod)
        ? await ye(_, P, {
            submission: T({}, b, { formAction: m.location }),
            preventScrollReset: L,
          })
        : A
        ? await ye(_, P, {
            overrideNavigation: {
              state: "loading",
              location: P,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
            },
            fetcherSubmission: b,
            preventScrollReset: L,
          })
        : await ye(_, P, {
            overrideNavigation: {
              state: "loading",
              location: P,
              formMethod: b ? b.formMethod : void 0,
              formAction: b ? b.formAction : void 0,
              formEncType: b ? b.formEncType : void 0,
              formData: b ? b.formData : void 0,
            },
            preventScrollReset: L,
          });
  }
  async function kr(h, m, p, E, b) {
    let M = await Promise.all([
        ...p.map((_) => rt("loader", b, _, m, r, t, o)),
        ...E.map((_) =>
          _.matches && _.match && _.controller
            ? rt(
                "loader",
                nt(e.history, _.path, _.controller.signal),
                _.match,
                _.matches,
                r,
                t,
                o
              )
            : { type: z.error, error: le(404, { pathname: _.path }) }
        ),
      ]),
      A = M.slice(0, p.length),
      P = M.slice(p.length);
    return (
      await Promise.all([
        dn(
          h,
          p,
          A,
          A.map(() => b.signal),
          !1,
          d.loaderData
        ),
        dn(
          h,
          E.map((_) => _.match),
          P,
          E.map((_) => (_.controller ? _.controller.signal : null)),
          !0
        ),
      ]),
      { results: M, loaderResults: A, fetcherResults: P }
    );
  }
  function zt() {
    (k = !0),
      Q.push(...Wt()),
      Oe.forEach((h, m) => {
        H.has(m) && (ce.push(m), Te(m));
      });
  }
  function $t(h, m, p) {
    let E = He(d.matches, m);
    Vt(h), Y({ errors: { [E.route.id]: p }, fetchers: new Map(d.fetchers) });
  }
  function Vt(h) {
    H.has(h) && Te(h),
      Oe.delete(h),
      Je.delete(h),
      Ye.delete(h),
      d.fetchers.delete(h);
  }
  function Te(h) {
    let m = H.get(h);
    F(m, "Expected fetch controller: " + h), m.abort(), H.delete(h);
  }
  function Ir(h) {
    for (let m of h) {
      let E = {
        state: "idle",
        data: Tr(m).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      d.fetchers.set(m, E);
    }
  }
  function jr() {
    let h = [],
      m = !1;
    for (let p of Ye) {
      let E = d.fetchers.get(p);
      F(E, "Expected fetcher: " + p),
        E.state === "loading" && (Ye.delete(p), h.push(p), (m = !0));
    }
    return Ir(h), m;
  }
  function Br(h) {
    let m = [];
    for (let [p, E] of Je)
      if (E < h) {
        let b = d.fetchers.get(p);
        F(b, "Expected fetcher: " + p),
          b.state === "loading" && (Te(p), Je.delete(p), m.push(p));
      }
    return Ir(m), m.length > 0;
  }
  function Ca(h, m) {
    let p = d.blockers.get(h) || tn;
    return ge.get(h) !== m && ge.set(h, m), p;
  }
  function Qe(h) {
    d.blockers.delete(h), ge.delete(h);
  }
  function ht(h, m) {
    let p = d.blockers.get(h) || tn;
    F(
      (p.state === "unblocked" && m.state === "blocked") ||
        (p.state === "blocked" && m.state === "blocked") ||
        (p.state === "blocked" && m.state === "proceeding") ||
        (p.state === "blocked" && m.state === "unblocked") ||
        (p.state === "proceeding" && m.state === "unblocked"),
      "Invalid blocker state transition: " + p.state + " -> " + m.state
    ),
      d.blockers.set(h, m),
      Y({ blockers: new Map(d.blockers) });
  }
  function Hr(h) {
    let { currentLocation: m, nextLocation: p, historyAction: E } = h;
    if (ge.size === 0) return;
    ge.size > 1 && $e(!1, "A router only supports one blocker at a time");
    let b = Array.from(ge.entries()),
      [M, A] = b[b.length - 1],
      P = d.blockers.get(M);
    if (
      !(P && P.state === "proceeding") &&
      A({ currentLocation: m, nextLocation: p, historyAction: E })
    )
      return M;
  }
  function Wt(h) {
    let m = [];
    return (
      Se.forEach((p, E) => {
        (!h || h(E)) && (p.cancel(), m.push(E), Se.delete(E));
      }),
      m
    );
  }
  function Pa(h, m, p) {
    if (
      ((u = h), (f = m), (c = p || ((E) => E.key)), !y && d.navigation === vr)
    ) {
      y = !0;
      let E = zr(d.location, d.matches);
      E != null && Y({ restoreScrollPosition: E });
    }
    return () => {
      (u = null), (f = null), (c = null);
    };
  }
  function La(h, m) {
    if (u && c && f) {
      let p = m.map((b) => fn(b, d.loaderData)),
        E = c(h, p) || h.key;
      u[E] = f();
    }
  }
  function zr(h, m) {
    if (u && c && f) {
      let p = m.map((M) => fn(M, d.loaderData)),
        E = c(h, p) || h.key,
        b = u[E];
      if (typeof b == "number") return b;
    }
    return null;
  }
  function Ma(h) {
    (r = {}), (a = Rr(h, t, void 0, r));
  }
  return (
    (w = {
      get basename() {
        return o;
      },
      get state() {
        return d;
      },
      get routes() {
        return n;
      },
      initialize: va,
      subscribe: wa,
      enableScrollRestoration: Pa,
      navigate: Or,
      fetch: xa,
      revalidate: Ea,
      createHref: (h) => e.history.createHref(h),
      encodeLocation: (h) => e.history.encodeLocation(h),
      getFetcher: Tr,
      deleteFetcher: Vt,
      dispose: Ra,
      getBlocker: Ca,
      deleteBlocker: Qe,
      _internalFetchControllers: H,
      _internalActiveDeferreds: Se,
      _internalSetRoutes: Ma,
    }),
    w
  );
}
function Ko(e) {
  return e != null && "formData" in e;
}
function wr(e, t, r, n, a, o, i) {
  let l, s;
  if (o != null && i !== "path") {
    l = [];
    for (let c of t)
      if ((l.push(c), c.route.id === o)) {
        s = c;
        break;
      }
  } else (l = t), (s = t[t.length - 1]);
  let u = Fo(
    a || ".",
    gn(l).map((c) => c.pathnameBase),
    we(e.pathname, r) || e.pathname,
    i === "path"
  );
  return (
    a == null && ((u.search = e.search), (u.hash = e.hash)),
    (a == null || a === "" || a === ".") &&
      s &&
      s.route.index &&
      !br(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    n &&
      r !== "/" &&
      (u.pathname = u.pathname === "/" ? r : Fe([r, u.pathname])),
    lt(u)
  );
}
function rn(e, t, r, n) {
  if (!n || !Ko(n)) return { path: r };
  if (n.formMethod && !qo(n.formMethod))
    return { path: r, error: le(405, { method: n.formMethod }) };
  let a;
  if (n.formData) {
    let l = n.formMethod || "get";
    if (
      ((a = {
        formMethod: e ? l.toUpperCase() : l.toLowerCase(),
        formAction: Sn(r),
        formEncType:
          (n && n.formEncType) || "application/x-www-form-urlencoded",
        formData: n.formData,
      }),
      me(a.formMethod))
    )
      return { path: r, submission: a };
  }
  let o = Ue(r),
    i = bn(n.formData);
  return (
    t && o.search && br(o.search) && i.append("index", ""),
    (o.search = "?" + i),
    { path: lt(o), submission: a }
  );
}
function Jo(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((a) => a.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function nn(e, t, r, n, a, o, i, l, s, u, c, f, y) {
  let S = y ? Object.values(y)[0] : f ? Object.values(f)[0] : void 0,
    R = e.createURL(t.location),
    x = e.createURL(a),
    w = y ? Object.keys(y)[0] : void 0,
    D = Jo(r, w).filter((C, j) => {
      if (C.route.lazy) return !0;
      if (C.route.loader == null) return !1;
      if (
        Yo(t.loaderData, t.matches[j], C) ||
        i.some((ce) => ce === C.route.id)
      )
        return !0;
      let k = t.matches[j],
        Q = C;
      return an(
        C,
        T(
          {
            currentUrl: R,
            currentParams: k.params,
            nextUrl: x,
            nextParams: Q.params,
          },
          n,
          {
            actionResult: S,
            defaultShouldRevalidate:
              o ||
              R.pathname + R.search === x.pathname + x.search ||
              R.search !== x.search ||
              En(k, Q),
          }
        )
      );
    }),
    L = [];
  return (
    s.forEach((C, j) => {
      if (!r.some((H) => H.route.id === C.routeId)) return;
      let k = at(u, C.path, c);
      if (!k) {
        L.push({
          key: j,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Q = Er(k, C.path);
      if (l.includes(j)) {
        L.push({
          key: j,
          routeId: C.routeId,
          path: C.path,
          matches: k,
          match: Q,
          controller: new AbortController(),
        });
        return;
      }
      an(
        Q,
        T(
          {
            currentUrl: R,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: x,
            nextParams: r[r.length - 1].params,
          },
          n,
          { actionResult: S, defaultShouldRevalidate: o }
        )
      ) &&
        L.push({
          key: j,
          routeId: C.routeId,
          path: C.path,
          matches: k,
          match: Q,
          controller: new AbortController(),
        });
    }),
    [D, L]
  );
}
function Yo(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function En(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function an(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
async function on(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let a = r[e.id];
  F(a, "No route found in manifest");
  let o = {};
  for (let i in n) {
    let s = a[i] !== void 0 && i !== "hasErrorBoundary";
    $e(
      !s,
      'Route "' +
        a.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !s && !po.has(i) && (o[i] = n[i]);
  }
  Object.assign(a, o), Object.assign(a, T({}, t(a), { lazy: void 0 }));
}
async function rt(e, t, r, n, a, o, i, l, s, u) {
  l === void 0 && (l = !1), s === void 0 && (s = !1);
  let c,
    f,
    y,
    S = (w) => {
      let d,
        D = new Promise((L, C) => (d = C));
      return (
        (y = () => d()),
        t.signal.addEventListener("abort", y),
        Promise.race([w({ request: t, params: r.params, context: u }), D])
      );
    };
  try {
    let w = r.route[e];
    if (r.route.lazy)
      if (w) f = (await Promise.all([S(w), on(r.route, o, a)]))[0];
      else if ((await on(r.route, o, a), (w = r.route[e]), w)) f = await S(w);
      else if (e === "action") {
        let d = new URL(t.url),
          D = d.pathname + d.search;
        throw le(405, { method: t.method, pathname: D, routeId: r.route.id });
      } else return { type: z.data, data: void 0 };
    else if (w) f = await S(w);
    else {
      let d = new URL(t.url),
        D = d.pathname + d.search;
      throw le(404, { pathname: D });
    }
    F(
      f !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (c = z.error), (f = w);
  } finally {
    y && t.signal.removeEventListener("abort", y);
  }
  if (Zo(f)) {
    let w = f.status;
    if (Ho.has(w)) {
      let L = f.headers.get("Location");
      if (
        (F(
          L,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !vn.test(L))
      )
        L = wr(new URL(t.url), n.slice(0, n.indexOf(r) + 1), i, !0, L);
      else if (!l) {
        let C = new URL(t.url),
          j = L.startsWith("//") ? new URL(C.protocol + L) : new URL(L),
          k = we(j.pathname, i) != null;
        j.origin === C.origin && k && (L = j.pathname + j.search + j.hash);
      }
      if (l) throw (f.headers.set("Location", L), f);
      return {
        type: z.redirect,
        status: w,
        location: L,
        revalidate: f.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (s) throw { type: c || z.data, response: f };
    let d,
      D = f.headers.get("Content-Type");
    return (
      D && /\bapplication\/json\b/.test(D)
        ? (d = await f.json())
        : (d = await f.text()),
      c === z.error
        ? { type: c, error: new Ve(w, f.statusText, d), headers: f.headers }
        : { type: z.data, data: d, statusCode: f.status, headers: f.headers }
    );
  }
  if (c === z.error) return { type: c, error: f };
  if (Qo(f)) {
    var R, x;
    return {
      type: z.deferred,
      deferredData: f,
      statusCode: (R = f.init) == null ? void 0 : R.status,
      headers:
        ((x = f.init) == null ? void 0 : x.headers) &&
        new Headers(f.init.headers),
    };
  }
  return { type: z.data, data: f };
}
function nt(e, t, r, n) {
  let a = e.createURL(Sn(t)).toString(),
    o = { signal: r };
  if (n && me(n.formMethod)) {
    let { formMethod: i, formEncType: l, formData: s } = n;
    (o.method = i.toUpperCase()),
      (o.body = l === "application/x-www-form-urlencoded" ? bn(s) : s);
  }
  return new Request(a, o);
}
function bn(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
  return t;
}
function Xo(e, t, r, n, a) {
  let o = {},
    i = null,
    l,
    s = !1,
    u = {};
  return (
    r.forEach((c, f) => {
      let y = t[f].route.id;
      if (
        (F(!ze(c), "Cannot handle redirect results in processLoaderData"),
        ot(c))
      ) {
        let S = He(e, y),
          R = c.error;
        n && ((R = Object.values(n)[0]), (n = void 0)),
          (i = i || {}),
          i[S.route.id] == null && (i[S.route.id] = R),
          (o[y] = void 0),
          s || ((s = !0), (l = ko(c.error) ? c.error.status : 500)),
          c.headers && (u[y] = c.headers);
      } else
        Ne(c)
          ? (a.set(y, c.deferredData), (o[y] = c.deferredData.data))
          : (o[y] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !s &&
            (l = c.statusCode),
          c.headers && (u[y] = c.headers);
    }),
    n && ((i = n), (o[Object.keys(n)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: u }
  );
}
function ln(e, t, r, n, a, o, i, l) {
  let { loaderData: s, errors: u } = Xo(t, r, n, a, l);
  for (let c = 0; c < o.length; c++) {
    let { key: f, match: y, controller: S } = o[c];
    F(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let R = i[c];
    if (!(S && S.signal.aborted))
      if (ot(R)) {
        let x = He(e.matches, y?.route.id);
        (u && u[x.route.id]) || (u = T({}, u, { [x.route.id]: R.error })),
          e.fetchers.delete(f);
      } else if (ze(R)) F(!1, "Unhandled fetcher revalidation redirect");
      else if (Ne(R)) F(!1, "Unhandled fetcher deferred data");
      else {
        let x = {
          state: "idle",
          data: R.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
        e.fetchers.set(f, x);
      }
  }
  return { loaderData: s, errors: u };
}
function sn(e, t, r, n) {
  let a = T({}, t);
  for (let o of r) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (a[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (a[i] = e[i]),
      n && n.hasOwnProperty(i))
    )
      break;
  }
  return a;
}
function He(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function un(e) {
  let t = e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function le(e, t) {
  let { pathname: r, routeId: n, method: a, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        a && r && n
          ? (l =
              "You made a " +
              a +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action" && (l = "defer() is not supported in actions"))
      : e === 403
      ? ((i = "Forbidden"),
        (l = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((i = "Not Found"), (l = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        a && r && n
          ? (l =
              "You made a " +
              a.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : a && (l = 'Invalid request method "' + a.toUpperCase() + '"')),
    new Ve(e || 500, i, new Error(l), !0)
  );
}
function cn(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (ze(r)) return r;
  }
}
function Sn(e) {
  let t = typeof e == "string" ? Ue(e) : e;
  return lt(T({}, t, { hash: "" }));
}
function Go(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Ne(e) {
  return e.type === z.deferred;
}
function ot(e) {
  return e.type === z.error;
}
function ze(e) {
  return (e && e.type) === z.redirect;
}
function Qo(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Zo(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function qo(e) {
  return Bo.has(e.toLowerCase());
}
function me(e) {
  return Io.has(e.toLowerCase());
}
async function dn(e, t, r, n, a, o) {
  for (let i = 0; i < r.length; i++) {
    let l = r[i],
      s = t[i];
    if (!s) continue;
    let u = e.find((f) => f.route.id === s.route.id),
      c = u != null && !En(u, s) && (o && o[s.route.id]) !== void 0;
    if (Ne(l) && (a || c)) {
      let f = n[i];
      F(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await xn(l, f, a).then((y) => {
          y && (r[i] = y || r[i]);
        });
    }
  }
}
async function xn(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: z.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: z.error, error: a };
      }
    return { type: z.data, data: e.deferredData.data };
  }
}
function br(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function fn(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function Er(e, t) {
  let r = typeof t == "string" ? Ue(t).search : t.search;
  if (e[e.length - 1].route.index && br(r || "")) return e[e.length - 1];
  let n = gn(e);
  return n[n.length - 1];
}
var K,
  Zr,
  z,
  po,
  vo,
  Ro,
  wo,
  Eo,
  bo,
  So,
  en,
  Fe,
  Uo,
  Oo,
  To,
  Ve,
  yn,
  Io,
  jo,
  Bo,
  Ho,
  zo,
  vr,
  $o,
  tn,
  vn,
  Rn,
  Vo,
  Wo,
  Sl,
  Dn = yt(() => {
    (function (e) {
      (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(K || (K = {}));
    Zr = "popstate";
    (function (e) {
      (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
    })(z || (z = {}));
    po = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    (vo = /^:\w+$/),
      (Ro = 3),
      (wo = 2),
      (Eo = 1),
      (bo = 10),
      (So = -2),
      (en = (e) => e === "*");
    (Fe = (e) => e.join("/").replace(/\/\/+/g, "/")),
      (Uo = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/")),
      (Oo = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e)),
      (To = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e)),
      (Ve = class {
        constructor(t, r, n, a) {
          a === void 0 && (a = !1),
            (this.status = t),
            (this.statusText = r || ""),
            (this.internal = a),
            n instanceof Error
              ? ((this.data = n.toString()), (this.error = n))
              : (this.data = n);
        }
      });
    (yn = ["post", "put", "patch", "delete"]),
      (Io = new Set(yn)),
      (jo = ["get", ...yn]),
      (Bo = new Set(jo)),
      (Ho = new Set([301, 302, 303, 307, 308])),
      (zo = new Set([307, 308])),
      (vr = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      }),
      ($o = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      }),
      (tn = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0,
      }),
      (vn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i),
      (Rn =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u"),
      (Vo = !Rn),
      (Wo = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }));
    Sl = Symbol("deferred");
  });
function ae() {
  return (
    (ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ae.apply(this, arguments)
  );
}
function Dr(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    o;
  for (o = 0; o < n.length; o++)
    (a = n[o]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Lt(e) {
  return e != null && typeof e.tagName == "string";
}
function li(e) {
  return Lt(e) && e.tagName.toLowerCase() === "button";
}
function si(e) {
  return Lt(e) && e.tagName.toLowerCase() === "form";
}
function ui(e) {
  return Lt(e) && e.tagName.toLowerCase() === "input";
}
function ci(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function di(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ci(e);
}
function fi(e, t, r) {
  let n,
    a = null,
    o,
    i;
  if (si(e)) {
    let l = t.submissionTrigger;
    if (t.action) a = t.action;
    else {
      let s = e.getAttribute("action");
      a = s ? we(s, r) : null;
    }
    (n = t.method || e.getAttribute("method") || Pt),
      (o = t.encType || e.getAttribute("enctype") || Sr),
      (i = new FormData(e)),
      l && l.name && i.append(l.name, l.value);
  } else if (li(e) || (ui(e) && (e.type === "submit" || e.type === "image"))) {
    let l = e.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    if (t.action) a = t.action;
    else {
      let s = e.getAttribute("formaction") || l.getAttribute("action");
      a = s ? we(s, r) : null;
    }
    (n =
      t.method ||
      e.getAttribute("formmethod") ||
      l.getAttribute("method") ||
      Pt),
      (o =
        t.encType ||
        e.getAttribute("formenctype") ||
        l.getAttribute("enctype") ||
        Sr),
      (i = new FormData(l)),
      e.name && i.append(e.name, e.value);
  } else {
    if (Lt(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    if (
      ((n = t.method || Pt),
      (a = t.action || null),
      (o = t.encType || Sr),
      e instanceof FormData)
    )
      i = e;
    else if (((i = new FormData()), e instanceof URLSearchParams))
      for (let [l, s] of e) i.append(l, s);
    else if (e != null) for (let l of Object.keys(e)) i.append(l, e[l]);
  }
  return { action: a, method: n.toLowerCase(), encType: o, formData: i };
}
function Pn(e, t) {
  return wn({
    basename: t?.basename,
    future: ae({}, t?.future, { v7_prependBasename: !0 }),
    history: hn({ window: t?.window }),
    hydrationData: t?.hydrationData || gi(),
    routes: e,
    mapRouteProperties: Qr,
  }).initialize();
}
function gi() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ae({}, t, { errors: yi(t.errors) })), t;
}
function yi(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new Ve(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      let o = new Error(a.message);
      (o.stack = ""), (r[n] = o);
    } else r[n] = a;
  return r;
}
function Cr(e) {
  let t = N.useContext(he);
  return t || F(!1), t;
}
function Ei(e) {
  let t = N.useContext(Re);
  return t || F(!1), t;
}
function bi(e, t) {
  let {
      target: r,
      replace: n,
      state: a,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    l = St(),
    s = G(),
    u = Le(e, { relative: i });
  return N.useCallback(
    (c) => {
      if (di(c, r)) {
        c.preventDefault();
        let f = n !== void 0 ? n : je(s) === je(u);
        l(e, { replace: f, state: a, preventScrollReset: o, relative: i });
      }
    },
    [s, l, u, n, a, r, e, o, i]
  );
}
function Si() {
  return Pr();
}
function Pr(e, t) {
  let { router: r } = Cr(st.UseSubmitImpl),
    { basename: n } = N.useContext(ie),
    a = ur();
  return N.useCallback(
    function (o, i) {
      if ((i === void 0 && (i = {}), typeof document > "u"))
        throw new Error(
          "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
        );
      let { action: l, method: s, encType: u, formData: c } = fi(o, i, n),
        f = {
          preventScrollReset: i.preventScrollReset,
          formData: c,
          formMethod: s,
          formEncType: u,
        };
      e
        ? (t == null && F(!1), r.fetch(e, t, l, f))
        : r.navigate(l, ae({}, f, { replace: i.replace, fromRouteId: a }));
    },
    [r, n, e, t, a]
  );
}
function An(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { basename: n } = N.useContext(ie),
    a = N.useContext(ee);
  a || F(!1);
  let [o] = a.matches.slice(-1),
    i = ae({}, Le(e || ".", { relative: r })),
    l = G();
  if (e == null && ((i.search = l.search), (i.hash = l.hash), o.route.index)) {
    let s = new URLSearchParams(i.search);
    s.delete("index"), (i.search = s.toString() ? "?" + s.toString() : "");
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (i.pathname = i.pathname === "/" ? n : Fe([n, i.pathname])),
    je(i)
  );
}
function xi(e, t) {
  return N.forwardRef((n, a) =>
    N.createElement(Mn, ae({}, n, { ref: a, fetcherKey: e, routeId: t }))
  );
}
function Nn() {
  var e;
  let { router: t } = Cr(st.UseFetcher),
    r = N.useContext(ee);
  r || F(!1);
  let n = (e = r.matches[r.matches.length - 1]) == null ? void 0 : e.route.id;
  n == null && F(!1);
  let [a] = N.useState(() => String(++Di)),
    [o] = N.useState(() => (n || F(!1), xi(a, n))),
    [i] = N.useState(() => (c) => {
      t || F(!1), n || F(!1), t.fetch(a, n, c);
    }),
    l = Pr(a, n),
    s = t.getFetcher(a),
    u = N.useMemo(() => ae({ Form: o, submit: l, load: i }, s), [s, o, l, i]);
  return (
    N.useEffect(
      () => () => {
        if (!t) {
          console.warn("No router available to clean up from useFetcher()");
          return;
        }
        t.deleteFetcher(a);
      },
      [t, a]
    ),
    u
  );
}
function Fn(e) {
  let { getKey: t, storageKey: r } = e === void 0 ? {} : e,
    { router: n } = Cr(st.UseScrollRestoration),
    { restoreScrollPosition: a, preventScrollReset: o } = Ei(
      xr.UseScrollRestoration
    ),
    i = G(),
    l = tt(),
    s = Me();
  N.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    []
  ),
    _i(
      N.useCallback(() => {
        if (s.state === "idle") {
          let u = (t ? t(i, l) : null) || i.key;
          Ct[u] = window.scrollY;
        }
        sessionStorage.setItem(r || _n, JSON.stringify(Ct)),
          (window.history.scrollRestoration = "auto");
      }, [r, t, s.state, i, l])
    ),
    typeof document < "u" &&
      (N.useLayoutEffect(() => {
        try {
          let u = sessionStorage.getItem(r || _n);
          u && (Ct = JSON.parse(u));
        } catch {}
      }, [r]),
      N.useLayoutEffect(() => {
        let u = n?.enableScrollRestoration(Ct, () => window.scrollY, t);
        return () => u && u();
      }, [n, t]),
      N.useLayoutEffect(() => {
        if (a !== !1) {
          if (typeof a == "number") {
            window.scrollTo(0, a);
            return;
          }
          if (i.hash) {
            let u = document.getElementById(i.hash.slice(1));
            if (u) {
              u.scrollIntoView();
              return;
            }
          }
          o !== !0 && window.scrollTo(0, 0);
        }
      }, [i, a, o]));
}
function _i(e, t) {
  let { capture: r } = t || {};
  N.useEffect(() => {
    let n = r != null ? { capture: r } : void 0;
    return (
      window.addEventListener("pagehide", e, n),
      () => {
        window.removeEventListener("pagehide", e, n);
      }
    );
  }, [e, r]);
}
var N,
  Pt,
  Sr,
  hi,
  mi,
  pi,
  vi,
  Ri,
  _r,
  Ln,
  wi,
  Mn,
  st,
  xr,
  Di,
  _n,
  Ct,
  Ee = yt(() => {
    N = xe(De());
    gr();
    gr();
    Dn();
    (Pt = "get"), (Sr = "application/x-www-form-urlencoded");
    (hi = [
      "onClick",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
    ]),
      (mi = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "children",
      ]),
      (pi = [
        "reloadDocument",
        "replace",
        "method",
        "action",
        "onSubmit",
        "fetcherKey",
        "routeId",
        "relative",
        "preventScrollReset",
      ]);
    (vi =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u"),
      (Ri = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i),
      (_r = N.forwardRef(function (t, r) {
        let {
            onClick: n,
            relative: a,
            reloadDocument: o,
            replace: i,
            state: l,
            target: s,
            to: u,
            preventScrollReset: c,
          } = t,
          f = Dr(t, hi),
          { basename: y } = N.useContext(ie),
          S,
          R = !1;
        if (typeof u == "string" && Ri.test(u) && ((S = u), vi))
          try {
            let D = new URL(window.location.href),
              L = u.startsWith("//") ? new URL(D.protocol + u) : new URL(u),
              C = we(L.pathname, y);
            L.origin === D.origin && C != null
              ? (u = C + L.search + L.hash)
              : (R = !0);
          } catch {}
        let x = Pe(u, { relative: a }),
          w = bi(u, {
            replace: i,
            state: l,
            target: s,
            preventScrollReset: c,
            relative: a,
          });
        function d(D) {
          n && n(D), D.defaultPrevented || w(D);
        }
        return N.createElement(
          "a",
          ae({}, f, {
            href: S || x,
            onClick: R || o ? n : d,
            ref: r,
            target: s,
          })
        );
      })),
      (Ln = N.forwardRef(function (t, r) {
        let {
            "aria-current": n = "page",
            caseSensitive: a = !1,
            className: o = "",
            end: i = !1,
            style: l,
            to: s,
            children: u,
          } = t,
          c = Dr(t, mi),
          f = Le(s, { relative: c.relative }),
          y = G(),
          S = N.useContext(Re),
          { navigator: R } = N.useContext(ie),
          x = R.encodeLocation ? R.encodeLocation(f).pathname : f.pathname,
          w = y.pathname,
          d =
            S && S.navigation && S.navigation.location
              ? S.navigation.location.pathname
              : null;
        a ||
          ((w = w.toLowerCase()),
          (d = d ? d.toLowerCase() : null),
          (x = x.toLowerCase()));
        let D =
            w === x || (!i && w.startsWith(x) && w.charAt(x.length) === "/"),
          L =
            d != null &&
            (d === x || (!i && d.startsWith(x) && d.charAt(x.length) === "/")),
          C = D ? n : void 0,
          j;
        typeof o == "function"
          ? (j = o({ isActive: D, isPending: L }))
          : (j = [o, D ? "active" : null, L ? "pending" : null]
              .filter(Boolean)
              .join(" "));
        let k = typeof l == "function" ? l({ isActive: D, isPending: L }) : l;
        return N.createElement(
          _r,
          ae({}, c, {
            "aria-current": C,
            className: j,
            ref: r,
            style: k,
            to: s,
          }),
          typeof u == "function" ? u({ isActive: D, isPending: L }) : u
        );
      })),
      (wi = N.forwardRef((e, t) => N.createElement(Mn, ae({}, e, { ref: t })))),
      (Mn = N.forwardRef((e, t) => {
        let {
            reloadDocument: r,
            replace: n,
            method: a = Pt,
            action: o,
            onSubmit: i,
            fetcherKey: l,
            routeId: s,
            relative: u,
            preventScrollReset: c,
          } = e,
          f = Dr(e, pi),
          y = Pr(l, s),
          S = a.toLowerCase() === "get" ? "get" : "post",
          R = An(o, { relative: u });
        return N.createElement(
          "form",
          ae(
            {
              ref: t,
              method: S,
              action: R,
              onSubmit: r
                ? i
                : (w) => {
                    if ((i && i(w), w.defaultPrevented)) return;
                    w.preventDefault();
                    let d = w.nativeEvent.submitter,
                      D = d?.getAttribute("formmethod") || a;
                    y(d || w.currentTarget, {
                      method: D,
                      replace: n,
                      relative: u,
                      preventScrollReset: c,
                    });
                  },
            },
            f
          )
        );
      }));
    (function (e) {
      (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmitImpl = "useSubmitImpl"),
        (e.UseFetcher = "useFetcher");
    })(st || (st = {}));
    (function (e) {
      (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(xr || (xr = {}));
    Di = 0;
    (_n = "react-router-scroll-positions"), (Ct = {});
  });
function J() {
  return (
    (J = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    J.apply(this, arguments)
  );
}
var g = xe(De());
Ee();
var O = xe(De());
Ee();
var Mt = class extends O.default.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  render() {
    return this.state.error
      ? O.default.createElement(this.props.component, {
          error: this.state.error,
        })
      : this.props.children;
  }
};
function We({ error: e }) {
  return (
    console.error(e),
    O.default.createElement(
      "html",
      { lang: "en" },
      O.default.createElement(
        "head",
        null,
        O.default.createElement("meta", { charSet: "utf-8" }),
        O.default.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        }),
        O.default.createElement("title", null, "Application Error!")
      ),
      O.default.createElement(
        "body",
        null,
        O.default.createElement(
          "main",
          { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
          O.default.createElement(
            "h1",
            { style: { fontSize: "24px" } },
            "Application Error"
          ),
          O.default.createElement(
            "pre",
            {
              style: {
                padding: "2rem",
                background: "hsla(10, 50%, 50%, 0.1)",
                color: "red",
                overflow: "auto",
              },
            },
            e.stack
          )
        ),
        O.default.createElement("script", {
          dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `,
          },
        })
      )
    )
  );
}
function Un() {
  let e = Ae();
  if (fe(e)) return O.default.createElement(jn, { caught: e });
  if (e instanceof Error) return O.default.createElement(We, { error: e });
  {
    let t =
      e == null
        ? "Unknown Error"
        : typeof e == "object" && "toString" in e
        ? e.toString()
        : JSON.stringify(e);
    return O.default.createElement(We, { error: new Error(t) });
  }
}
var On = O.default.createContext(void 0);
function Tn() {
  return (0, O.useContext)(On);
}
function kn({ catch: e, component: t, children: r }) {
  return e
    ? O.default.createElement(
        On.Provider,
        { value: e },
        O.default.createElement(t, null)
      )
    : O.default.createElement(O.default.Fragment, null, r);
}
function In() {
  let e = Tn();
  return O.default.createElement(jn, { caught: e });
}
function jn({ caught: e }) {
  return O.default.createElement(
    "html",
    { lang: "en" },
    O.default.createElement(
      "head",
      null,
      O.default.createElement("meta", { charSet: "utf-8" }),
      O.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      }),
      O.default.createElement("title", null, "Unhandled Thrown Response!")
    ),
    O.default.createElement(
      "body",
      null,
      O.default.createElement(
        "h1",
        { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
        e.status,
        " ",
        e.statusText
      ),
      O.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `,
        },
      })
    )
  );
}
function te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
Ee();
async function At(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch {
    return window.location.reload(), new Promise(() => {});
  }
}
function Bn(e, t, r) {
  let n = e
      .map((o) => {
        var i;
        let l = t[o.route.id];
        return (
          ((i = l.links) === null || i === void 0 ? void 0 : i.call(l)) || []
        );
      })
      .flat(1),
    a = Li(e, r);
  return Mi(n, a);
}
async function Hn(e) {
  if (!e.links) return;
  let t = e.links();
  if (!t) return;
  let r = [];
  for (let a of t)
    !Nt(a) &&
      a.rel === "stylesheet" &&
      r.push({ ...a, rel: "preload", as: "style" });
  let n = r.filter((a) => !a.media || window.matchMedia(a.media).matches);
  await Promise.all(n.map(Ci));
}
async function Ci(e) {
  return new Promise((t) => {
    let r = document.createElement("link");
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    (r.onload = () => {
      n(), t();
    }),
      (r.onerror = () => {
        n(), t();
      }),
      document.head.appendChild(r);
  });
}
function Nt(e) {
  return e != null && typeof e.page == "string";
}
function Pi(e) {
  return e == null
    ? !1
    : e.href == null
    ? e.rel === "preload" &&
      (typeof e.imageSrcSet == "string" || typeof e.imagesrcset == "string") &&
      (typeof e.imageSizes == "string" || typeof e.imagesizes == "string")
    : typeof e.rel == "string" && typeof e.href == "string";
}
async function zn(e, t, r) {
  return (
    await Promise.all(
      e.map(async (a) => {
        let o = await At(t.routes[a.route.id], r);
        return o.links ? o.links() : [];
      })
    )
  )
    .flat(1)
    .filter(Pi)
    .filter((a) => a.rel === "stylesheet" || a.rel === "preload")
    .map((a) =>
      a.rel === "preload"
        ? { ...a, rel: "prefetch" }
        : { ...a, rel: "prefetch", as: "style" }
    );
}
function Lr(e, t, r, n, a, o) {
  let i = Wn(e),
    l = (c, f) => (r[f] ? c.route.id !== r[f].route.id : !0),
    s = (c, f) => {
      var y;
      return (
        r[f].pathname !== c.pathname ||
        (((y = r[f].route.path) === null || y === void 0
          ? void 0
          : y.endsWith("*")) &&
          r[f].params["*"] !== c.params["*"])
      );
    };
  return o === "data" && a.search !== i.search
    ? t.filter((c, f) => {
        if (!n.routes[c.route.id].hasLoader) return !1;
        if (l(c, f) || s(c, f)) return !0;
        if (c.route.shouldRevalidate) {
          var S;
          let R = c.route.shouldRevalidate({
            currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
            currentParams:
              ((S = r[0]) === null || S === void 0 ? void 0 : S.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: c.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == "boolean") return R;
        }
        return !0;
      })
    : t.filter((c, f) => {
        let y = n.routes[c.route.id];
        return (o === "assets" || y.hasLoader) && (l(c, f) || s(c, f));
      });
}
function $n(e, t, r) {
  let n = Wn(e);
  return Mr(
    t
      .filter((a) => r.routes[a.route.id].hasLoader)
      .map((a) => {
        let { pathname: o, search: i } = n,
          l = new URLSearchParams(i);
        return l.set("_data", a.route.id), `${o}?${l}`;
      })
  );
}
function Vn(e, t) {
  return Mr(
    e
      .map((r) => {
        let n = t.routes[r.route.id],
          a = [n.module];
        return n.imports && (a = a.concat(n.imports)), a;
      })
      .flat(1)
  );
}
function Li(e, t) {
  return Mr(
    e
      .map((r) => {
        let n = t.routes[r.route.id],
          a = [n.module];
        return n.imports && (a = a.concat(n.imports)), a;
      })
      .flat(1)
  );
}
function Mr(e) {
  return [...new Set(e)];
}
function Mi(e, t) {
  let r = new Set(),
    n = new Set(t);
  return e.reduce((a, o) => {
    if (!Nt(o) && o.as === "script" && o.href && n.has(o.href)) return a;
    let l = JSON.stringify(o);
    return r.has(l) || (r.add(l), a.push(o)), a;
  }, []);
}
function Wn(e) {
  let t = se(e);
  return t.search === void 0 && (t.search = ""), t;
}
var Ai = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  Ni = /[&><\u2028\u2029]/g;
function ut(e) {
  return e.replace(Ni, (t) => Ai[t]);
}
function Ar(e) {
  return { __html: e };
}
var Kn = { state: "idle", submission: void 0, location: void 0, type: "idle" },
  Jn = {
    state: "idle",
    type: "init",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formData: void 0,
    formEncType: void 0,
    submission: void 0,
  };
function Xn() {
  let e = g.useContext(he);
  return (
    te(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    e
  );
}
function dt() {
  let e = g.useContext(Re);
  return (
    te(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    e
  );
}
var ft = g.createContext(void 0);
ft.displayName = "Remix";
function ue() {
  let e = g.useContext(ft);
  return te(e, "You must render this element inside a <Remix> element"), e;
}
function Gn({ id: e }) {
  let { routeModules: t, future: r } = ue();
  te(
    t,
    `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`
  );
  let { default: n, ErrorBoundary: a, CatchBoundary: o } = t[e];
  return (
    !n && (a || (!r.v2_errorBoundary && o)) && (n = _t),
    te(
      n,
      `Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`
    ),
    g.createElement(n, null)
  );
}
function Qn({ id: e }) {
  let { future: t, routeModules: r } = ue();
  te(
    r,
    `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`
  );
  let n = Ae(),
    { CatchBoundary: a, ErrorBoundary: o } = r[e];
  if (t.v2_errorBoundary) {
    if ((e === "root" && (o || (o = Un)), o)) return g.createElement(o, null);
    throw n;
  }
  if ((e === "root" && (a || (a = In), o || (o = We)), fe(n))) {
    let i = n;
    if (i?.error instanceof Error && i.status !== 404 && o)
      return g.createElement(o, { error: i.error });
    if (a) return g.createElement(kn, { component: a, catch: n });
  }
  if (n instanceof Error && o) return g.createElement(o, { error: n });
  throw n;
}
function Zn(e, t) {
  let [r, n] = g.useState(!1),
    [a, o] = g.useState(!1),
    {
      onFocus: i,
      onBlur: l,
      onMouseEnter: s,
      onMouseLeave: u,
      onTouchStart: c,
    } = t;
  g.useEffect(() => {
    e === "render" && o(!0);
  }, [e]);
  let f = () => {
      e === "intent" && n(!0);
    },
    y = () => {
      e === "intent" && (n(!1), o(!1));
    };
  return (
    g.useEffect(() => {
      if (r) {
        let S = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [r]),
    [
      a,
      {
        onFocus: ct(i, f),
        onBlur: ct(l, y),
        onMouseEnter: ct(s, f),
        onMouseLeave: ct(u, y),
        onTouchStart: ct(c, f),
      },
    ]
  );
}
var qn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ea = g.forwardRef(({ to: e, prefetch: t = "none", ...r }, n) => {
    let a = typeof e == "string" && qn.test(e),
      o = Pe(e),
      [i, l] = Zn(t, r);
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(Ln, J({ ref: n, to: e }, r, l)),
      i && !a ? g.createElement(Ut, { page: o }) : null
    );
  });
ea.displayName = "NavLink";
var ta = g.forwardRef(({ to: e, prefetch: t = "none", ...r }, n) => {
  let a = typeof e == "string" && qn.test(e),
    o = Pe(e),
    [i, l] = Zn(t, r);
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(_r, J({ ref: n, to: e }, r, l)),
    i && !a ? g.createElement(Ut, { page: o }) : null
  );
});
ta.displayName = "Link";
function ct(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
var Fi =
    "\u26A0\uFE0F REMIX FUTURE CHANGE: The behavior of links `imagesizes` and `imagesrcset` will be changing in v2. Only the React camel case versions will be valid. Please change to `imageSizes` and `imageSrcSet`.For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#links-imagesizes-and-imagesrcset",
  Ui =
    "\u26A0\uFE0F REMIX FUTURE CHANGE: `useTransition` will be removed in v2 in favor of `useNavigation`. You can prepare for this change at your convenience by updating to `useNavigation`.For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#usetransition",
  Oi =
    "\u26A0\uFE0F REMIX FUTURE CHANGE: `fetcher.type` will be removed in v2. Please use `fetcher.state`, `fetcher.formData`, and `fetcher.data` to achieve the same UX.For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher",
  Ti =
    "\u26A0\uFE0F REMIX FUTURE CHANGE : `fetcher.submission` will be removed in v2. The submission fields are now part of the fetcher object itself (`fetcher.formData`). For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher";
function ki() {
  let { manifest: e, routeModules: t } = ue(),
    { errors: r, matches: n } = dt(),
    a = r ? n.slice(0, n.findIndex((i) => r[i.route.id]) + 1) : n,
    o = g.useMemo(() => Bn(a, t, e), [a, t, e]);
  return (
    g.useEffect(() => {
      o.some((i) => "imagesizes" in i || "imagesrcset" in i) && void 0;
    }, [o]),
    g.createElement(
      g.Fragment,
      null,
      o.map((i) => {
        if (Nt(i)) return g.createElement(Ut, J({ key: i.page }, i));
        let l = null;
        return (
          "useId" in g
            ? (i.imagesrcset &&
                ((i.imageSrcSet = l = i.imagesrcset), delete i.imagesrcset),
              i.imagesizes &&
                ((i.imageSizes = i.imagesizes), delete i.imagesizes))
            : (i.imageSrcSet &&
                ((i.imagesrcset = l = i.imageSrcSet), delete i.imageSrcSet),
              i.imageSizes &&
                ((i.imagesizes = i.imageSizes), delete i.imageSizes)),
          g.createElement(
            "link",
            J({ key: i.rel + (i.href || "") + (l || "") }, i)
          )
        );
      })
    )
  );
}
function Ut({ page: e, ...t }) {
  let { router: r } = Xn(),
    n = g.useMemo(() => Ce(r.routes, e), [r.routes, e]);
  return n
    ? g.createElement(ji, J({ page: e, matches: n }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function Ii(e) {
  let { manifest: t, routeModules: r } = ue(),
    [n, a] = g.useState([]);
  return (
    g.useEffect(() => {
      let o = !1;
      return (
        zn(e, t, r).then((i) => {
          o || a(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function ji({ page: e, matches: t, ...r }) {
  let n = G(),
    { manifest: a } = ue(),
    { matches: o } = dt(),
    i = g.useMemo(() => Lr(e, t, o, a, n, "data"), [e, t, o, a, n]),
    l = g.useMemo(() => Lr(e, t, o, a, n, "assets"), [e, t, o, a, n]),
    s = g.useMemo(() => $n(e, i, a), [i, e, a]),
    u = g.useMemo(() => Vn(l, a), [l, a]),
    c = Ii(l);
  return g.createElement(
    g.Fragment,
    null,
    s.map((f) =>
      g.createElement(
        "link",
        J({ key: f, rel: "prefetch", as: "fetch", href: f }, r)
      )
    ),
    u.map((f) =>
      g.createElement("link", J({ key: f, rel: "modulepreload", href: f }, r))
    ),
    c.map((f) => g.createElement("link", J({ key: f.href }, f)))
  );
}
function Bi() {
  let { routeModules: e } = ue(),
    { errors: t, matches: r, loaderData: n } = dt(),
    a = G(),
    o = t ? r.slice(0, r.findIndex((s) => t[s.route.id]) + 1) : r,
    i = {},
    l = {};
  for (let s of o) {
    let u = s.route.id,
      c = n[u],
      f = s.params,
      y = e[u];
    if (y.meta) {
      let S =
        typeof y.meta == "function"
          ? y.meta({ data: c, parentsData: l, params: f, location: a })
          : y.meta;
      if (S && Array.isArray(S))
        throw new Error(
          "The route at " +
            s.route.path +
            " returns an array. This is only supported with the `v2_meta` future flag in the Remix config. Either set the flag to `true` or update the route's meta function to return an object.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta"
        );
      Object.assign(i, S);
    }
    l[u] = c;
  }
  return g.createElement(
    g.Fragment,
    null,
    Object.entries(i).map(([s, u]) => {
      if (!u) return null;
      if (["charset", "charSet"].includes(s))
        return g.createElement("meta", { key: "charSet", charSet: u });
      if (s === "title")
        return g.createElement("title", { key: "title" }, String(u));
      let c = /^(og|music|video|article|book|profile|fb):.+$/.test(s);
      return [u]
        .flat()
        .map((f) =>
          c
            ? g.createElement("meta", { property: s, content: f, key: s + f })
            : typeof f == "string"
            ? g.createElement("meta", { name: s, content: f, key: s + f })
            : g.createElement("meta", J({ key: s + JSON.stringify(f) }, f))
        );
    })
  );
}
function Hi() {
  let { routeModules: e } = ue(),
    { errors: t, matches: r, loaderData: n } = dt(),
    a = G(),
    o = t ? r.slice(0, r.findIndex((u) => t[u.route.id]) + 1) : r,
    i = [],
    l = null,
    s = [];
  for (let u = 0; u < o.length; u++) {
    let c = o[u],
      f = c.route.id,
      y = n[f],
      S = c.params,
      R = e[f],
      x = [],
      w = {
        id: f,
        data: y,
        meta: [],
        params: c.params,
        pathname: c.pathname,
        handle: c.route.handle,
        get route() {
          return (
            console.warn(
              "The meta function in " +
                c.route.path +
                " accesses the `route` property on `matches`. This is deprecated and will be removed in Remix version 2. See"
            ),
            c.route
          );
        },
      };
    if (
      ((s[u] = w),
      R != null && R.meta
        ? (x =
            typeof R.meta == "function"
              ? R.meta({ data: y, params: S, location: a, matches: s })
              : Array.isArray(R.meta)
              ? [...R.meta]
              : R.meta)
        : l && (x = [...l]),
      (x = x || []),
      !Array.isArray(x))
    )
      throw new Error(
        "The `v2_meta` API is enabled in the Remix config, but the route at " +
          c.route.path +
          ` returns an invalid value. In v2, all route meta functions must return an array of meta objects.

To reference the v1 meta function API, see https://remix.run/route/meta`
      );
    (w.meta = x), (s[u] = w), (i = [...x]), (l = i);
  }
  return g.createElement(
    g.Fragment,
    null,
    i.flat().map((u) => {
      if (!u) return null;
      if ("tagName" in u) {
        let c = u.tagName;
        return (
          delete u.tagName,
          zi(c)
            ? g.createElement(c, J({ key: JSON.stringify(u) }, u))
            : (console.warn(
                `A meta object uses an invalid tagName: ${c}. Expected either 'link' or 'meta'`
              ),
              null)
        );
      }
      if ("title" in u)
        return g.createElement("title", { key: "title" }, String(u.title));
      if (
        ("charset" in u &&
          (u.charSet ?? (u.charSet = u.charset), delete u.charset),
        "charSet" in u && u.charSet != null)
      )
        return typeof u.charSet == "string"
          ? g.createElement("meta", { key: "charSet", charSet: u.charSet })
          : null;
      if ("script:ld+json" in u) {
        let c = null;
        try {
          c = JSON.stringify(u["script:ld+json"]);
        } catch {}
        return (
          c != null &&
          g.createElement("script", {
            key: "script:ld+json",
            type: "application/ld+json",
            dangerouslySetInnerHTML: {
              __html: JSON.stringify(u["script:ld+json"]),
            },
          })
        );
      }
      return g.createElement("meta", J({ key: JSON.stringify(u) }, u));
    })
  );
}
function zi(e) {
  return typeof e == "string" && /^(meta|link)$/.test(e);
}
function $i() {
  let { future: e } = ue();
  return e != null && e.v2_meta
    ? g.createElement(Hi, null)
    : g.createElement(Bi, null);
}
function ra(e) {
  return g.createElement(pr, e);
}
var Ft = !1;
function Vi(e) {
  let { manifest: t, serverHandoffString: r, abortDelay: n } = ue(),
    { router: a, static: o, staticContext: i } = Xn(),
    { matches: l } = dt(),
    s = Me();
  g.useEffect(() => {
    Ft = !0;
  }, []);
  let u = [],
    c = g.useMemo(() => {
      var R;
      let x = i ? `window.__remixContext = ${r};` : " ",
        w = i?.activeDeferreds;
      x += w
        ? [
            "__remixContext.p = function(v,e,p,x) {",
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            "    p=Promise.reject(x);",
            "  } else {",
            "    p=Promise.resolve(v);",
            "  }",
            "  return p;",
            "};",
            "__remixContext.n = function(i,k) {",
            "  __remixContext.t = __remixContext.t || {};",
            "  __remixContext.t[i] = __remixContext.t[i] || {};",
            "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",
            typeof n == "number"
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${n});`
              : "",
            "  return p;",
            "};",
            "__remixContext.r = function(i,k,v,e,p,x) {",
            "  p = __remixContext.t[i][k];",
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            "    p.e(x);",
            "  } else {",
            "    p.r(v);",
            "  }",
            "};",
          ].join(`
`) +
          Object.entries(w).map(([D, L]) => {
            let C = new Set(L.pendingKeys),
              j = L.deferredKeys.map((k) => {
                if (C.has(k))
                  return (
                    u.push(
                      g.createElement(Yn, {
                        key: `${D} | ${k}`,
                        deferredData: L,
                        routeId: D,
                        dataKey: k,
                      })
                    ),
                    `${JSON.stringify(k)}:__remixContext.n(${JSON.stringify(
                      D
                    )}, ${JSON.stringify(k)})`
                  );
                {
                  let Q = L.data[k];
                  if (typeof Q._error < "u") {
                    let ce = {
                      message: "Unexpected Server Error",
                      stack: void 0,
                    };
                    return `${JSON.stringify(k)}:__remixContext.p(!1, ${ut(
                      JSON.stringify(ce)
                    )})`;
                  } else {
                    if (typeof Q._data > "u")
                      throw new Error(
                        `The deferred data for ${k} was not resolved, did you forget to return data from a deferred promise?`
                      );
                    return `${JSON.stringify(k)}:__remixContext.p(${ut(
                      JSON.stringify(Q._data)
                    )})`;
                  }
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(
              D
            )}], {${j}});`;
          }).join(`
`) +
          (u.length > 0 ? `__remixContext.a=${u.length};` : "")
        : "";
      let d = o
        ? `${
            (R = t.hmr) !== null && R !== void 0 && R.runtime
              ? `import ${JSON.stringify(t.hmr.runtime)};`
              : ""
          }import ${JSON.stringify(t.url)};
${l.map(
  (D, L) =>
    `import * as route${L} from ${JSON.stringify(t.routes[D.route.id].module)};`
).join(`
`)}
window.__remixRouteModules = {${l
            .map((D, L) => `${JSON.stringify(D.route.id)}:route${L}`)
            .join(",")}};

import(${JSON.stringify(t.entry.module)});`
        : " ";
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          "script",
          J({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Ar(x),
            type: void 0,
          })
        ),
        g.createElement(
          "script",
          J({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Ar(d),
            type: "module",
            async: !0,
          })
        )
      );
    }, []);
  if (!o && typeof __remixContext == "object" && __remixContext.a)
    for (let R = 0; R < __remixContext.a; R++)
      u.push(g.createElement(Yn, { key: R }));
  let f = g.useMemo(() => {
      if (s.location) {
        let R = Ce(a.routes, s.location);
        return te(R, `No routes match path "${s.location.pathname}"`), R;
      }
      return [];
    }, [s.location, a.routes]),
    y = l
      .concat(f)
      .map((R) => {
        let x = t.routes[R.route.id];
        return (x.imports || []).concat([x.module]);
      })
      .flat(1),
    S = Ft ? [] : t.entry.imports.concat(y);
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("link", {
      rel: "modulepreload",
      href: t.url,
      crossOrigin: e.crossOrigin,
    }),
    g.createElement("link", {
      rel: "modulepreload",
      href: t.entry.module,
      crossOrigin: e.crossOrigin,
    }),
    Ki(S).map((R) =>
      g.createElement("link", {
        key: R,
        rel: "modulepreload",
        href: R,
        crossOrigin: e.crossOrigin,
      })
    ),
    !Ft && c,
    !Ft && u
  );
}
function Yn({ dataKey: e, deferredData: t, routeId: r }) {
  return (
    typeof document > "u" &&
      t &&
      e &&
      r &&
      te(
        t.pendingKeys.includes(e),
        `Deferred data for route ${r} with key ${e} was not pending but tried to render a script for it.`
      ),
    g.createElement(
      g.Suspense,
      {
        fallback:
          typeof document > "u" && t && e && r
            ? null
            : g.createElement("script", {
                async: !0,
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: { __html: " " },
              }),
      },
      typeof document > "u" && t && e && r
        ? g.createElement(ra, {
            resolve: t.data[e],
            errorElement: g.createElement(Wi, { dataKey: e, routeId: r }),
            children: (n) =>
              g.createElement("script", {
                async: !0,
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                  __html: `__remixContext.r(${JSON.stringify(
                    r
                  )}, ${JSON.stringify(e)}, ${ut(JSON.stringify(n))});`,
                },
              }),
          })
        : g.createElement("script", {
            async: !0,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: " " },
          })
    )
  );
}
function Wi({ dataKey: e, routeId: t }) {
  let r = Dt(),
    n = { message: "Unexpected Server Error", stack: void 0 };
  return g.createElement("script", {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `__remixContext.r(${JSON.stringify(t)}, ${JSON.stringify(
        e
      )}, !1, ${ut(JSON.stringify(n))});`,
    },
  });
}
function Ki(e) {
  return [...new Set(e)];
}
function Nr() {
  let { routeModules: e } = ue(),
    t = tt();
  return g.useMemo(
    () =>
      t.map((r) => ({
        id: r.id,
        pathname: r.pathname,
        params: r.params,
        data: r.data,
        handle: e[r.id].handle,
      })),
    [t, e]
  );
}
function Ji() {
  return cr();
}
function Yi() {
  return dr();
}
function Xi() {
  let e = Me();
  return g.useEffect(() => {}, []), g.useMemo(() => Gi(e), [e]);
}
function Gi(e) {
  let {
    location: t,
    state: r,
    formMethod: n,
    formAction: a,
    formEncType: o,
    formData: i,
  } = e;
  if (!t) return Kn;
  let l =
    n != null && ["POST", "PUT", "PATCH", "DELETE"].includes(n.toUpperCase());
  if (r === "submitting" && n && a && o && i) {
    if (l)
      return {
        location: t,
        state: r,
        submission: {
          method: n.toUpperCase(),
          action: a,
          encType: o,
          formData: i,
          key: "",
        },
        type: "actionSubmission",
      };
    te(!1, "Encountered an unexpected navigation scenario in useTransition()");
  }
  if (r === "loading") {
    let { _isRedirect: u, _isFetchActionRedirect: c } = t.state || {};
    if (n && a && o && i) {
      if (u)
        return l
          ? {
              location: t,
              state: r,
              submission: {
                method: n.toUpperCase(),
                action: a,
                encType: o,
                formData: i,
                key: "",
              },
              type: "actionRedirect",
            }
          : {
              location: t,
              state: r,
              submission: {
                method: n.toUpperCase(),
                action: a,
                encType: o,
                formData: i,
                key: "",
              },
              type: "loaderSubmissionRedirect",
            };
      if (l)
        return {
          location: t,
          state: r,
          submission: {
            method: n.toUpperCase(),
            action: a,
            encType: o,
            formData: i,
            key: "",
          },
          type: "actionReload",
        };
      {
        let f = new URL(a, window.location.origin);
        return (
          (f.search = new URLSearchParams(i.entries()).toString()),
          {
            location: t,
            state: "submitting",
            submission: {
              method: n.toUpperCase(),
              action: f.pathname + f.search,
              encType: o,
              formData: i,
              key: "",
            },
            type: "loaderSubmission",
          }
        );
      }
    } else if (u)
      return c
        ? {
            location: t,
            state: r,
            submission: void 0,
            type: "fetchActionRedirect",
          }
        : { location: t, state: r, submission: void 0, type: "normalRedirect" };
  }
  return {
    location: t,
    state: "loading",
    submission: void 0,
    type: "normalLoad",
  };
}
function Qi() {
  let e = Nn();
  return g.useMemo(() => {
    let r = {
      ...qi({
        state: e.state,
        data: e.data,
        formMethod: e.formMethod,
        formAction: e.formAction,
        formData: e.formData,
        formEncType: e.formEncType,
        " _hasFetcherDoneAnything ": e[" _hasFetcherDoneAnything "],
      }),
      load: e.load,
      submit: e.submit,
      Form: e.Form,
    };
    return Zi(r), r;
  }, [e]);
}
function Zi(e) {
  let t = e.type;
  Object.defineProperty(e, "type", {
    get() {
      return t;
    },
    set(n) {
      t = n;
    },
    configurable: !0,
    enumerable: !0,
  });
  let r = e.submission;
  Object.defineProperty(e, "submission", {
    get() {
      return r;
    },
    set(n) {
      r = n;
    },
    configurable: !0,
    enumerable: !0,
  });
}
function qi(e) {
  let {
      state: t,
      formMethod: r,
      formAction: n,
      formEncType: a,
      formData: o,
      data: i,
    } = e,
    l =
      r != null && ["POST", "PUT", "PATCH", "DELETE"].includes(r.toUpperCase());
  if (t === "idle")
    return e[" _hasFetcherDoneAnything "] === !0
      ? {
          state: "idle",
          type: "done",
          formMethod: void 0,
          formAction: void 0,
          formData: void 0,
          formEncType: void 0,
          submission: void 0,
          data: i,
        }
      : Jn;
  if (t === "submitting" && r && n && a && o) {
    if (l)
      return {
        state: t,
        type: "actionSubmission",
        formMethod: r.toUpperCase(),
        formAction: n,
        formEncType: a,
        formData: o,
        submission: {
          method: r.toUpperCase(),
          action: n,
          encType: a,
          formData: o,
          key: "",
        },
        data: i,
      };
    te(!1, "Encountered an unexpected fetcher scenario in useFetcher()");
  }
  if (t === "loading" && r && n && a && o) {
    if (l)
      return i
        ? {
            state: t,
            type: "actionReload",
            formMethod: r.toUpperCase(),
            formAction: n,
            formEncType: a,
            formData: o,
            submission: {
              method: r.toUpperCase(),
              action: n,
              encType: a,
              formData: o,
              key: "",
            },
            data: i,
          }
        : {
            state: t,
            type: "actionRedirect",
            formMethod: r.toUpperCase(),
            formAction: n,
            formEncType: a,
            formData: o,
            submission: {
              method: r.toUpperCase(),
              action: n,
              encType: a,
              formData: o,
              key: "",
            },
            data: void 0,
          };
    {
      let u = new URL(n, window.location.origin);
      return (
        (u.search = new URLSearchParams(o.entries()).toString()),
        {
          state: "submitting",
          type: "loaderSubmission",
          formMethod: r.toUpperCase(),
          formAction: n,
          formEncType: a,
          formData: o,
          submission: {
            method: r.toUpperCase(),
            action: u.pathname + u.search,
            encType: a,
            formData: o,
            key: "",
          },
          data: i,
        }
      );
    }
  }
  return {
    state: "loading",
    type: "normalLoad",
    formMethod: void 0,
    formAction: void 0,
    formData: void 0,
    formEncType: void 0,
    submission: void 0,
    data: i,
  };
}
var el = () => null;
var be = xe(De());
Ee();
var na;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(na || (na = {}));
function aa(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
var oa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(oa || (oa = {}));
var Ke = class extends Error {},
  Ot = class {
    constructor(t, r) {
      (this.pendingKeysSet = new Set()),
        (this.subscribers = new Set()),
        (this.deferredKeys = []),
        aa(
          t && typeof t == "object" && !Array.isArray(t),
          "defer() only accepts plain objects"
        );
      let n;
      (this.abortPromise = new Promise((o, i) => (n = i))),
        (this.controller = new AbortController());
      let a = () => n(new Ke("Deferred data aborted"));
      (this.unlistenAbortSignal = () =>
        this.controller.signal.removeEventListener("abort", a)),
        this.controller.signal.addEventListener("abort", a),
        (this.data = Object.entries(t).reduce((o, i) => {
          let [l, s] = i;
          return Object.assign(o, { [l]: this.trackPromise(l, s) });
        }, {})),
        this.done && this.unlistenAbortSignal(),
        (this.init = r);
    }
    trackPromise(t, r) {
      if (!(r instanceof Promise)) return r;
      this.deferredKeys.push(t), this.pendingKeysSet.add(t);
      let n = Promise.race([r, this.abortPromise]).then(
        (a) => this.onSettle(n, t, null, a),
        (a) => this.onSettle(n, t, a)
      );
      return (
        n.catch(() => {}),
        Object.defineProperty(n, "_tracked", { get: () => !0 }),
        n
      );
    }
    onSettle(t, r, n, a) {
      return this.controller.signal.aborted && n instanceof Ke
        ? (this.unlistenAbortSignal(),
          Object.defineProperty(t, "_error", { get: () => n }),
          Promise.reject(n))
        : (this.pendingKeysSet.delete(r),
          this.done && this.unlistenAbortSignal(),
          n
            ? (Object.defineProperty(t, "_error", { get: () => n }),
              this.emit(!1, r),
              Promise.reject(n))
            : (Object.defineProperty(t, "_data", { get: () => a }),
              this.emit(!1, r),
              a));
    }
    emit(t, r) {
      this.subscribers.forEach((n) => n(t, r));
    }
    subscribe(t) {
      return this.subscribers.add(t), () => this.subscribers.delete(t);
    }
    cancel() {
      this.controller.abort(),
        this.pendingKeysSet.forEach((t, r) => this.pendingKeysSet.delete(r)),
        this.emit(!0);
    }
    async resolveData(t) {
      let r = !1;
      if (!this.done) {
        let n = () => this.cancel();
        t.addEventListener("abort", n),
          (r = await new Promise((a) => {
            this.subscribe((o) => {
              t.removeEventListener("abort", n), (o || this.done) && a(o);
            });
          }));
      }
      return r;
    }
    get done() {
      return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
      return (
        aa(
          this.data !== null && this.done,
          "Can only unwrap data on initialized and settled deferreds"
        ),
        Object.entries(this.data).reduce((t, r) => {
          let [n, a] = r;
          return Object.assign(t, { [n]: rl(a) });
        }, {})
      );
    }
    get pendingKeys() {
      return Array.from(this.pendingKeysSet);
    }
  };
function tl(e) {
  return e instanceof Promise && e._tracked === !0;
}
function rl(e) {
  if (!tl(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
var Tt = class {
  constructor(t, r, n, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = a),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
};
var ia = ["post", "put", "patch", "delete"],
  ns = new Set(ia),
  nl = ["get", ...ia],
  as = new Set(nl);
var os =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
var is = Symbol("deferred");
function la(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new Tt(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      let o = new Error(a.message);
      (o.stack = a.stack), (r[n] = o);
    } else r[n] = a;
  return r;
}
var Fr = xe(De());
Ee();
function ua(e) {
  return e instanceof Response && e.headers.get("X-Remix-Catch") != null;
}
function al(e) {
  return e instanceof Response && e.headers.get("X-Remix-Error") != null;
}
function ca(e) {
  return e instanceof Response && e.headers.get("X-Remix-Redirect") != null;
}
function da(e) {
  var t;
  return (
    e instanceof Response &&
    !!(
      (t = e.headers.get("Content-Type")) !== null &&
      t !== void 0 &&
      t.match(/text\/remix-deferred/)
    )
  );
}
async function fa(e, t) {
  let r = new URL(e.url);
  r.searchParams.set("_data", t);
  let n = { signal: e.signal };
  if (e.method !== "GET") {
    n.method = e.method;
    let o = e.headers.get("Content-Type");
    n.body =
      o && /\bapplication\/x-www-form-urlencoded\b/.test(o)
        ? new URLSearchParams(await e.text())
        : await e.formData();
  }
  let a = await fetch(r.href, n);
  if (al(a)) {
    let o = await a.json(),
      i = new Error(o.message);
    return (i.stack = o.stack), i;
  }
  return a;
}
var ol = "__deferred_promise:";
async function ha(e) {
  if (!e)
    throw new Error("parseDeferredReadableStream requires stream argument");
  let t,
    r = {};
  try {
    let n = il(e),
      o = (await n.next()).value;
    if (!o) throw new Error("no critical data");
    let i = JSON.parse(o);
    if (typeof i == "object" && i !== null)
      for (let [l, s] of Object.entries(i))
        typeof s != "string" ||
          !s.startsWith(ol) ||
          ((t = t || {}),
          (t[l] = new Promise((u, c) => {
            r[l] = {
              resolve: (f) => {
                u(f), delete r[l];
              },
              reject: (f) => {
                c(f), delete r[l];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let l of n) {
            let [s, ...u] = l.split(":"),
              c = u.join(":"),
              f = JSON.parse(c);
            if (s === "data")
              for (let [y, S] of Object.entries(f)) r[y] && r[y].resolve(S);
            else if (s === "error")
              for (let [y, S] of Object.entries(f)) {
                let R = new Error(S.message);
                (R.stack = S.stack), r[y] && r[y].reject(R);
              }
          }
          for (let [l, s] of Object.entries(r))
            s.reject(new Ke(`Deferred ${l} will never be resolved`));
        } catch (l) {
          for (let s of Object.values(r)) s.reject(l);
        }
      })(),
      new Ot({ ...i, ...t })
    );
  } catch (n) {
    for (let a of Object.values(r)) a.reject(n);
    throw n;
  }
}
async function* il(e) {
  let t = e.getReader(),
    r = [],
    n = [],
    a = !1,
    o = new TextEncoder(),
    i = new TextDecoder(),
    l = async () => {
      if (n.length > 0) return n.shift();
      for (; !a && n.length === 0; ) {
        let u = await t.read();
        if (u.done) {
          a = !0;
          break;
        }
        r.push(u.value);
        try {
          let f = i.decode(sa(...r)).split(`

`);
          if (
            (f.length >= 2 &&
              (n.push(...f.slice(0, -1)),
              (r = [
                o.encode(
                  f.slice(-1).join(`

`)
                ),
              ])),
            n.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        n.length > 0 ||
          (r.length > 0 &&
            ((n = i
              .decode(sa(...r))
              .split(
                `

`
              )
              .filter((c) => c)),
            (r = []))),
        n.shift()
      );
    },
    s = await l();
  for (; s; ) yield s, (s = await l());
}
function sa(...e) {
  let t = new Uint8Array(e.reduce((n, a) => n + a.length, 0)),
    r = 0;
  for (let n of e) t.set(n, r), (r += n.length);
  return t;
}
function pa(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      let n = r.parentId || "";
      t[n] || (t[n] = []), t[n].push(r);
    }),
    t
  );
}
function ga(e, t, r, n) {
  return kt(t, r, n, "", pa(t), e);
}
function kt(e, t, r, n = "", a = pa(e), o) {
  return (a[n] || []).map((i) => {
    let l =
        r.v2_errorBoundary === !0
          ? i.id === "root" || i.hasErrorBoundary
          : i.id === "root" || i.hasCatchBoundary || i.hasErrorBoundary,
      s = {
        caseSensitive: i.caseSensitive,
        element: Fr.createElement(Gn, { id: i.id }),
        errorElement: l ? Fr.createElement(Qn, { id: i.id }) : void 0,
        id: i.id,
        index: i.index,
        path: i.path,
        handle: void 0,
        loader: ma(i, t, !1),
        action: ma(i, t, !0),
        shouldRevalidate: ll(i, t, o),
      },
      u = kt(e, t, r, i.id, a, o);
    return u.length > 0 && (s.children = u), s;
  });
}
function ll(e, t, r) {
  let n = !1;
  return function (a) {
    let o = t[e.id];
    return (
      te(o, `Expected route module to be loaded for ${e.id}`),
      r !== void 0 && !n
        ? ((n = !0), r.has(e.id))
        : o.shouldRevalidate
        ? o.shouldRevalidate(a)
        : a.defaultShouldRevalidate
    );
  };
}
async function sl(e, t) {
  let r = await At(e, t);
  return await Hn(r), r;
}
function ma(e, t, r) {
  return async ({ request: n }) => {
    let a = sl(e, t);
    try {
      if (r && !e.hasAction) {
        let i = `Route "${e.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`;
        throw (console.error(i), new Error(i));
      } else if (!r && !e.hasLoader) return null;
      let o = await fa(n, e.id);
      if (o instanceof Error) throw o;
      if (ca(o)) throw ul(o);
      if (ua(o)) throw o;
      return da(o) && o.body ? await ha(o.body) : o;
    } finally {
      await a;
    }
  };
}
function ul(e) {
  let t = parseInt(e.headers.get("X-Remix-Status"), 10) || 302,
    r = e.headers.get("X-Remix-Redirect"),
    n = {},
    a = e.headers.get("X-Remix-Revalidate");
  return a && (n["X-Remix-Revalidate"] = a), wt(r, { status: t, headers: n });
}
var pe, It;
import.meta &&
  import.meta.hot &&
  import.meta.hot.accept(
    "remix:manifest",
    async ({ assetsManifest: e, needsRevalidation: t }) => {
      let r = [
        ...new Set(
          pe.state.matches
            .map((l) => l.route.id)
            .concat(Object.keys(window.__remixRouteModules))
        ),
      ];
      It && It.abort(), (It = new AbortController());
      let n = It.signal,
        a = Object.assign(
          {},
          window.__remixRouteModules,
          Object.fromEntries(
            (
              await Promise.all(
                r.map(async (l) => {
                  var s, u, c, f;
                  if (!e.routes[l]) return null;
                  let y = await import(
                    e.routes[l].module +
                      `?t=${
                        (s = e.hmr) === null || s === void 0
                          ? void 0
                          : s.timestamp
                      }`
                  );
                  return [
                    l,
                    {
                      ...y,
                      default: y.default
                        ? ((u = window.__remixRouteModules[l]) === null ||
                          u === void 0
                            ? void 0
                            : u.default) ?? y.default
                        : y.default,
                      CatchBoundary: y.CatchBoundary
                        ? ((c = window.__remixRouteModules[l]) === null ||
                          c === void 0
                            ? void 0
                            : c.CatchBoundary) ?? y.CatchBoundary
                        : y.CatchBoundary,
                      ErrorBoundary: y.ErrorBoundary
                        ? ((f = window.__remixRouteModules[l]) === null ||
                          f === void 0
                            ? void 0
                            : f.ErrorBoundary) ?? y.ErrorBoundary
                        : y.ErrorBoundary,
                    },
                  ];
                })
              )
            ).filter(Boolean)
          )
        );
      Object.assign(window.__remixRouteModules, a);
      let o = ga(
        t,
        e.routes,
        window.__remixRouteModules,
        window.__remixContext.future
      );
      pe._internalSetRoutes(o);
      let i = pe.subscribe((l) => {
        if (l.revalidation === "idle") {
          if ((i(), n.aborted)) return;
          setTimeout(() => {
            Object.assign(window.__remixManifest, e),
              window.$RefreshRuntime$.performReactRefresh();
          }, 1);
        }
      });
      pe.revalidate();
    }
  );
function cl(e) {
  if (!pe) {
    let n = kt(
        window.__remixManifest.routes,
        window.__remixRouteModules,
        window.__remixContext.future
      ),
      a = window.__remixContext.state;
    a && a.errors && (a = { ...a, errors: la(a.errors) }),
      (pe = Pn(n, {
        hydrationData: a,
        future: {
          v7_normalizeFormMethod:
            window.__remixContext.future.v2_normalizeFormMethod,
        },
      }));
  }
  let [t, r] = be.useState(pe.state.location);
  return (
    be.useLayoutEffect(
      () =>
        pe.subscribe((n) => {
          n.location !== t && r(n.location);
        }),
      [t]
    ),
    be.createElement(
      ft.Provider,
      {
        value: {
          manifest: window.__remixManifest,
          routeModules: window.__remixRouteModules,
          future: window.__remixContext.future,
        },
      },
      be.createElement(
        Mt,
        { location: t, component: We },
        be.createElement(hr, { router: pe, fallbackElement: null })
      )
    )
  );
}
Ee();
var jt = xe(De());
Ee();
var ya = "positions";
function dl({ getKey: e, ...t }) {
  let r = G(),
    n = Nr();
  Fn({ getKey: e, storageKey: ya });
  let a = jt.useMemo(() => {
      if (!e) return null;
      let i = e(r, n);
      return i !== r.key ? i : null;
    }, []),
    o = ((i, l) => {
      if (!window.history.state || !window.history.state.key) {
        let s = Math.random().toString(32).slice(2);
        window.history.replaceState({ key: s }, "");
      }
      try {
        let u = JSON.parse(sessionStorage.getItem(i) || "{}")[
          l || window.history.state.key
        ];
        typeof u == "number" && window.scrollTo(0, u);
      } catch (s) {
        console.error(s), sessionStorage.removeItem(i);
      }
    }).toString();
  return jt.createElement(
    "script",
    J({}, t, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${o})(${JSON.stringify(ya)}, ${JSON.stringify(a)})`,
      },
    })
  );
}
export {
  G as a,
  St as b,
  Me as c,
  _t as d,
  wi as e,
  Si as f,
  Nn as g,
  Ee as h,
  Tn as i,
  ta as j,
  ki as k,
  $i as l,
  Vi as m,
  Nr as n,
  Ji as o,
  Yi as p,
  Xi as q,
  Qi as r,
  el as s,
  cl as t,
  dl as u,
};
