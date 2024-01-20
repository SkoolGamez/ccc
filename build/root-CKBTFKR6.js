import { d as kt } from "/build/_shared/chunk-TXCJUWOY.js";
import { b as vt } from "/build/_shared/chunk-YG6H6D4M.js";
import { d as mt } from "/build/_shared/chunk-IPSZ3SW6.js";
import { a as V, b as pt } from "/build/_shared/chunk-3LCOG7QU.js";
import { f as ht, k as yt } from "/build/_shared/chunk-OC4OSYCW.js";
import "/build/_shared/chunk-3X7YUF4G.js";
import "/build/_shared/chunk-66MHU67D.js";
import "/build/_shared/chunk-ZPDUC2Y7.js";
import "/build/_shared/chunk-GPJUYIWZ.js";
import "/build/_shared/chunk-F6B3QIPL.js";
import { a as ut } from "/build/_shared/chunk-5SJKL2HV.js";
import "/build/_shared/chunk-2HHCCEXY.js";
import "/build/_shared/chunk-L5MIKURQ.js";
import "/build/_shared/chunk-WYHDUJBA.js";
import "/build/_shared/chunk-U2WZVRWG.js";
import "/build/_shared/chunk-QPJOCY54.js";
import "/build/_shared/chunk-ZGXOUVAF.js";
import {
  d as it,
  i as wt,
  k as Q,
  l as G,
  m as nt,
  o as ft,
  s as dt,
  u as ct,
} from "/build/_shared/chunk-KHL5ACVI.js";
import { a as bt, b as xt } from "/build/_shared/chunk-O4ZNHJCK.js";
import { b as at, d as F } from "/build/_shared/chunk-W6WK5VNR.js";
var zt = at((br, Tt) => {
  Tt.exports = {};
});
var Et = at((wr, Ct) => {
  Ct.exports = {};
});
var It = at((fr, St) => {
  St.exports = {};
});
var _t = "/build/_assets/app-2MKQZ72V.css";
var ar = F(zt()),
  Mt = F(bt()),
  Yt = F(Et()),
  ir = F(It());
var At = "/build/_assets/body-CIAHQ3AF.css";
var jt = "/build/_assets/Hero-VUTJTCRE.css";
var Rt = "/build/_assets/Navbar-UMM37TAT.css";
var Lt = "/build/_assets/Products-NZC6LZ7U.css";
var Ot = "/build/_assets/Pricing-ADQQV322.css";
var e = F(bt(), 1);
function Pt(t) {
  var r,
    n,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (r = 0; r < t.length; r++)
        t[r] && (n = Pt(t[r])) && (i && (i += " "), (i += n));
    else for (r in t) t[r] && (i && (i += " "), (i += r));
  return i;
}
function Qt() {
  for (var t, r, n = 0, i = ""; n < arguments.length; )
    (t = arguments[n++]) && (r = Pt(t)) && (i && (i += " "), (i += r));
  return i;
}
var L = Qt;
var $ = (t) => typeof t == "number" && !isNaN(t),
  Y = (t) => typeof t == "string",
  C = (t) => typeof t == "function",
  tt = (t) => (Y(t) || C(t) ? t : null),
  st = (t) => (0, e.isValidElement)(t) || Y(t) || C(t) || $(t);
function Gt(t, r, n) {
  n === void 0 && (n = 300);
  let { scrollHeight: i, style: l } = t;
  requestAnimationFrame(() => {
    (l.minHeight = "initial"),
      (l.height = i + "px"),
      (l.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (l.height = "0"), (l.padding = "0"), (l.margin = "0"), setTimeout(r, n);
      });
  });
}
function ot(t) {
  let {
    enter: r,
    exit: n,
    appendPosition: i = !1,
    collapse: l = !0,
    collapseDuration: s = 300,
  } = t;
  return function (a) {
    let {
        children: d,
        position: k,
        preventExitTransition: u,
        done: y,
        nodeRef: m,
        isIn: _,
      } = a,
      p = i ? `${r}--${k}` : r,
      b = i ? `${n}--${k}` : n,
      w = (0, e.useRef)(0);
    return (
      (0, e.useLayoutEffect)(() => {
        let c = m.current,
          g = p.split(" "),
          v = (z) => {
            z.target === m.current &&
              (c.dispatchEvent(new Event("d")),
              c.removeEventListener("animationend", v),
              c.removeEventListener("animationcancel", v),
              w.current === 0 &&
                z.type !== "animationcancel" &&
                c.classList.remove(...g));
          };
        c.classList.add(...g),
          c.addEventListener("animationend", v),
          c.addEventListener("animationcancel", v);
      }, []),
      (0, e.useEffect)(() => {
        let c = m.current,
          g = () => {
            c.removeEventListener("animationend", g), l ? Gt(c, y, s) : y();
          };
        _ ||
          (u
            ? g()
            : ((w.current = 1),
              (c.className += ` ${b}`),
              c.addEventListener("animationend", g)));
      }, [_]),
      e.default.createElement(e.default.Fragment, null, d)
    );
  };
}
function Dt(t, r) {
  return t != null
    ? {
        content: t.content,
        containerId: t.props.containerId,
        id: t.props.toastId,
        theme: t.props.theme,
        type: t.props.type,
        data: t.props.data || {},
        isLoading: t.props.isLoading,
        icon: t.props.icon,
        status: r,
      }
    : {};
}
var A = {
    list: new Map(),
    emitQueue: new Map(),
    on(t, r) {
      return (
        this.list.has(t) || this.list.set(t, []), this.list.get(t).push(r), this
      );
    },
    off(t, r) {
      if (r) {
        let n = this.list.get(t).filter((i) => i !== r);
        return this.list.set(t, n), this;
      }
      return this.list.delete(t), this;
    },
    cancelEmit(t) {
      let r = this.emitQueue.get(t);
      return r && (r.forEach(clearTimeout), this.emitQueue.delete(t)), this;
    },
    emit(t) {
      this.list.has(t) &&
        this.list.get(t).forEach((r) => {
          let n = setTimeout(() => {
            r(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(t) || this.emitQueue.set(t, []),
            this.emitQueue.get(t).push(n);
        });
    },
  },
  K = (t) => {
    let { theme: r, type: n, ...i } = t;
    return e.default.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        r === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  gt = {
    info: function (t) {
      return e.default.createElement(
        K,
        { ...t },
        e.default.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (t) {
      return e.default.createElement(
        K,
        { ...t },
        e.default.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (t) {
      return e.default.createElement(
        K,
        { ...t },
        e.default.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (t) {
      return e.default.createElement(
        K,
        { ...t },
        e.default.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return e.default.createElement("div", { className: "Toastify__spinner" });
    },
  };
function Vt(t) {
  let [, r] = (0, e.useReducer)((p) => p + 1, 0),
    [n, i] = (0, e.useState)([]),
    l = (0, e.useRef)(null),
    s = (0, e.useRef)(new Map()).current,
    a = (p) => n.indexOf(p) !== -1,
    d = (0, e.useRef)({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: t,
      containerId: null,
      isToastActive: a,
      getToast: (p) => s.get(p),
    }).current;
  function k(p) {
    let { containerId: b } = p,
      { limit: w } = d.props;
    !w ||
      (b && d.containerId !== b) ||
      ((d.count -= d.queue.length), (d.queue = []));
  }
  function u(p) {
    i((b) => (p == null ? [] : b.filter((w) => w !== p)));
  }
  function y() {
    let { toastContent: p, toastProps: b, staleId: w } = d.queue.shift();
    _(p, b, w);
  }
  function m(p, b) {
    let { delay: w, staleId: c, ...g } = b;
    if (
      !st(p) ||
      (function (I) {
        return (
          !l.current ||
          (d.props.enableMultiContainer &&
            I.containerId !== d.props.containerId) ||
          (s.has(I.toastId) && I.updateId == null)
        );
      })(g)
    )
      return;
    let { toastId: v, updateId: z, data: f } = g,
      { props: x } = d,
      O = () => u(v),
      P = z == null;
    P && d.count++;
    let T = {
      ...x,
      style: x.toastStyle,
      key: d.toastKey++,
      ...Object.fromEntries(
        Object.entries(g).filter((I) => {
          let [j, E] = I;
          return E != null;
        })
      ),
      toastId: v,
      updateId: z,
      data: f,
      closeToast: O,
      isIn: !1,
      className: tt(g.className || x.toastClassName),
      bodyClassName: tt(g.bodyClassName || x.bodyClassName),
      progressClassName: tt(g.progressClassName || x.progressClassName),
      autoClose:
        !g.isLoading &&
        ((D = g.autoClose),
        (X = x.autoClose),
        D === !1 || ($(D) && D > 0) ? D : X),
      deleteToast() {
        let I = Dt(s.get(v), "removed");
        s.delete(v), A.emit(4, I);
        let j = d.queue.length;
        if (
          ((d.count = v == null ? d.count - d.displayedToast : d.count - 1),
          d.count < 0 && (d.count = 0),
          j > 0)
        ) {
          let E = v == null ? d.props.limit : 1;
          if (j === 1 || E === 1) d.displayedToast++, y();
          else {
            let H = E > j ? j : E;
            d.displayedToast = H;
            for (let S = 0; S < H; S++) y();
          }
        } else r();
      },
    };
    var D, X;
    (T.iconOut = (function (I) {
      let { theme: j, type: E, isLoading: H, icon: S } = I,
        R = null,
        N = { theme: j, type: E };
      return (
        S === !1 ||
          (C(S)
            ? (R = S(N))
            : (0, e.isValidElement)(S)
            ? (R = (0, e.cloneElement)(S, N))
            : Y(S) || $(S)
            ? (R = S)
            : H
            ? (R = gt.spinner())
            : ((q) => q in gt)(E) && (R = gt[E](N))),
        R
      );
    })(T)),
      C(g.onOpen) && (T.onOpen = g.onOpen),
      C(g.onClose) && (T.onClose = g.onClose),
      (T.closeButton = x.closeButton),
      g.closeButton === !1 || st(g.closeButton)
        ? (T.closeButton = g.closeButton)
        : g.closeButton === !0 &&
          (T.closeButton = !st(x.closeButton) || x.closeButton);
    let B = p;
    (0, e.isValidElement)(p) && !Y(p.type)
      ? (B = (0, e.cloneElement)(p, { closeToast: O, toastProps: T, data: f }))
      : C(p) && (B = p({ closeToast: O, toastProps: T, data: f })),
      x.limit && x.limit > 0 && d.count > x.limit && P
        ? d.queue.push({ toastContent: B, toastProps: T, staleId: c })
        : $(w)
        ? setTimeout(() => {
            _(B, T, c);
          }, w)
        : _(B, T, c);
  }
  function _(p, b, w) {
    let { toastId: c } = b;
    w && s.delete(w);
    let g = { content: p, props: b };
    s.set(c, g),
      i((v) => [...v, c].filter((z) => z !== w)),
      A.emit(4, Dt(g, g.props.updateId == null ? "added" : "updated"));
  }
  return (
    (0, e.useEffect)(
      () => (
        (d.containerId = t.containerId),
        A.cancelEmit(3)
          .on(0, m)
          .on(1, (p) => l.current && u(p))
          .on(5, k)
          .emit(2, d),
        () => {
          s.clear(), A.emit(3, d);
        }
      ),
      []
    ),
    (0, e.useEffect)(() => {
      (d.props = t), (d.isToastActive = a), (d.displayedToast = n.length);
    }),
    {
      getToastToRender: function (p) {
        let b = new Map(),
          w = Array.from(s.values());
        return (
          t.newestOnTop && w.reverse(),
          w.forEach((c) => {
            let { position: g } = c.props;
            b.has(g) || b.set(g, []), b.get(g).push(c);
          }),
          Array.from(b, (c) => p(c[0], c[1]))
        );
      },
      containerRef: l,
      isToastActive: a,
    }
  );
}
function Bt(t) {
  return t.targetTouches && t.targetTouches.length >= 1
    ? t.targetTouches[0].clientX
    : t.clientX;
}
function Ht(t) {
  return t.targetTouches && t.targetTouches.length >= 1
    ? t.targetTouches[0].clientY
    : t.clientY;
}
function Kt(t) {
  let [r, n] = (0, e.useState)(!1),
    [i, l] = (0, e.useState)(!1),
    s = (0, e.useRef)(null),
    a = (0, e.useRef)({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    d = (0, e.useRef)(t),
    {
      autoClose: k,
      pauseOnHover: u,
      closeToast: y,
      onClick: m,
      closeOnClick: _,
    } = t;
  function p(f) {
    if (t.draggable) {
      f.nativeEvent.type === "touchstart" && f.nativeEvent.preventDefault(),
        (a.didMove = !1),
        document.addEventListener("mousemove", g),
        document.addEventListener("mouseup", v),
        document.addEventListener("touchmove", g),
        document.addEventListener("touchend", v);
      let x = s.current;
      (a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (a.boundingRect = x.getBoundingClientRect()),
        (x.style.transition = ""),
        (a.x = Bt(f.nativeEvent)),
        (a.y = Ht(f.nativeEvent)),
        t.draggableDirection === "x"
          ? ((a.start = a.x),
            (a.removalDistance = x.offsetWidth * (t.draggablePercent / 100)))
          : ((a.start = a.y),
            (a.removalDistance =
              x.offsetHeight *
              (t.draggablePercent === 80
                ? 1.5 * t.draggablePercent
                : t.draggablePercent / 100)));
    }
  }
  function b(f) {
    if (a.boundingRect) {
      let { top: x, bottom: O, left: P, right: T } = a.boundingRect;
      f.nativeEvent.type !== "touchend" &&
      t.pauseOnHover &&
      a.x >= P &&
      a.x <= T &&
      a.y >= x &&
      a.y <= O
        ? c()
        : w();
    }
  }
  function w() {
    n(!0);
  }
  function c() {
    n(!1);
  }
  function g(f) {
    let x = s.current;
    a.canDrag &&
      x &&
      ((a.didMove = !0),
      r && c(),
      (a.x = Bt(f)),
      (a.y = Ht(f)),
      (a.delta = t.draggableDirection === "x" ? a.x - a.start : a.y - a.start),
      a.start !== a.x && (a.canCloseOnClick = !1),
      (x.style.transform = `translate${t.draggableDirection}(${a.delta}px)`),
      (x.style.opacity = "" + (1 - Math.abs(a.delta / a.removalDistance))));
  }
  function v() {
    document.removeEventListener("mousemove", g),
      document.removeEventListener("mouseup", v),
      document.removeEventListener("touchmove", g),
      document.removeEventListener("touchend", v);
    let f = s.current;
    if (a.canDrag && a.didMove && f) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return l(!0), void t.closeToast();
      (f.style.transition = "transform 0.2s, opacity 0.2s"),
        (f.style.transform = `translate${t.draggableDirection}(0)`),
        (f.style.opacity = "1");
    }
  }
  (0, e.useEffect)(() => {
    d.current = t;
  }),
    (0, e.useEffect)(
      () => (
        s.current && s.current.addEventListener("d", w, { once: !0 }),
        C(t.onOpen) &&
          t.onOpen((0, e.isValidElement)(t.children) && t.children.props),
        () => {
          let f = d.current;
          C(f.onClose) &&
            f.onClose((0, e.isValidElement)(f.children) && f.children.props);
        }
      ),
      []
    ),
    (0, e.useEffect)(
      () => (
        t.pauseOnFocusLoss &&
          (document.hasFocus() || c(),
          window.addEventListener("focus", w),
          window.addEventListener("blur", c)),
        () => {
          t.pauseOnFocusLoss &&
            (window.removeEventListener("focus", w),
            window.removeEventListener("blur", c));
        }
      ),
      [t.pauseOnFocusLoss]
    );
  let z = { onMouseDown: p, onTouchStart: p, onMouseUp: b, onTouchEnd: b };
  return (
    k && u && ((z.onMouseEnter = c), (z.onMouseLeave = w)),
    _ &&
      (z.onClick = (f) => {
        m && m(f), a.canCloseOnClick && y();
      }),
    {
      playToast: w,
      pauseToast: c,
      isRunning: r,
      preventExitTransition: i,
      toastRef: s,
      eventHandlers: z,
    }
  );
}
function Nt(t) {
  let { closeToast: r, theme: n, ariaLabel: i = "close" } = t;
  return e.default.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (l) => {
        l.stopPropagation(), r(l);
      },
      "aria-label": i,
    },
    e.default.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      e.default.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function Jt(t) {
  let {
      delay: r,
      isRunning: n,
      closeToast: i,
      type: l = "default",
      hide: s,
      className: a,
      style: d,
      controlledProgress: k,
      progress: u,
      rtl: y,
      isIn: m,
      theme: _,
    } = t,
    p = s || (k && u === 0),
    b = {
      ...d,
      animationDuration: `${r}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: p ? 0 : 1,
    };
  k && (b.transform = `scaleX(${u})`);
  let w = L(
      "Toastify__progress-bar",
      k
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${_}`,
      `Toastify__progress-bar--${l}`,
      { "Toastify__progress-bar--rtl": y }
    ),
    c = C(a) ? a({ rtl: y, type: l, defaultClassName: w }) : L(w, a);
  return e.default.createElement("div", {
    role: "progressbar",
    "aria-hidden": p ? "true" : "false",
    "aria-label": "notification timer",
    className: c,
    style: b,
    [k && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      k && u < 1
        ? null
        : () => {
            m && i();
          },
  });
}
var tr = (t) => {
    let {
        isRunning: r,
        preventExitTransition: n,
        toastRef: i,
        eventHandlers: l,
      } = Kt(t),
      {
        closeButton: s,
        children: a,
        autoClose: d,
        onClick: k,
        type: u,
        hideProgressBar: y,
        closeToast: m,
        transition: _,
        position: p,
        className: b,
        style: w,
        bodyClassName: c,
        bodyStyle: g,
        progressClassName: v,
        progressStyle: z,
        updateId: f,
        role: x,
        progress: O,
        rtl: P,
        toastId: T,
        deleteToast: D,
        isIn: X,
        isLoading: B,
        iconOut: I,
        closeOnClick: j,
        theme: E,
      } = t,
      H = L(
        "Toastify__toast",
        `Toastify__toast-theme--${E}`,
        `Toastify__toast--${u}`,
        { "Toastify__toast--rtl": P },
        { "Toastify__toast--close-on-click": j }
      ),
      S = C(b)
        ? b({ rtl: P, position: p, type: u, defaultClassName: H })
        : L(H, b),
      R = !!O || !d,
      N = { closeToast: m, type: u, theme: E },
      q = null;
    return (
      s === !1 ||
        (q = C(s)
          ? s(N)
          : (0, e.isValidElement)(s)
          ? (0, e.cloneElement)(s, N)
          : Nt(N)),
      e.default.createElement(
        _,
        { isIn: X, done: D, position: p, preventExitTransition: n, nodeRef: i },
        e.default.createElement(
          "div",
          { id: T, onClick: k, className: S, ...l, style: w, ref: i },
          e.default.createElement(
            "div",
            {
              ...(X && { role: x }),
              className: C(c) ? c({ type: u }) : L("Toastify__toast-body", c),
              style: g,
            },
            I != null &&
              e.default.createElement(
                "div",
                {
                  className: L("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !B,
                  }),
                },
                I
              ),
            e.default.createElement("div", null, a)
          ),
          q,
          e.default.createElement(Jt, {
            ...(f && !R ? { key: `pb-${f}` } : {}),
            rtl: P,
            theme: E,
            delay: d,
            isRunning: r,
            isIn: X,
            closeToast: m,
            hide: y,
            type: u,
            style: z,
            className: v,
            controlledProgress: R,
            progress: O || 0,
          })
        )
      )
    );
  },
  et = function (t, r) {
    return (
      r === void 0 && (r = !1),
      {
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: r,
      }
    );
  },
  rr = ot(et("bounce", !0)),
  _r = ot(et("slide", !0)),
  Tr = ot(et("zoom")),
  zr = ot(et("flip")),
  Z = (0, e.forwardRef)((t, r) => {
    let { getToastToRender: n, containerRef: i, isToastActive: l } = Vt(t),
      { className: s, style: a, rtl: d, containerId: k } = t;
    function u(y) {
      let m = L(
        "Toastify__toast-container",
        `Toastify__toast-container--${y}`,
        { "Toastify__toast-container--rtl": d }
      );
      return C(s)
        ? s({ position: y, rtl: d, defaultClassName: m })
        : L(m, tt(s));
    }
    return (
      (0, e.useEffect)(() => {
        r && (r.current = i.current);
      }, []),
      e.default.createElement(
        "div",
        { ref: i, className: "Toastify", id: k },
        n((y, m) => {
          let _ = m.length ? { ...a } : { ...a, pointerEvents: "none" };
          return e.default.createElement(
            "div",
            { className: u(y), style: _, key: `container-${y}` },
            m.map((p, b) => {
              let { content: w, props: c } = p;
              return e.default.createElement(
                tr,
                {
                  ...c,
                  isIn: l(c.toastId),
                  style: { ...c.style, "--nth": b + 1, "--len": m.length },
                  key: `toast-${c.key}`,
                },
                w
              );
            })
          );
        })
      )
    );
  });
(Z.displayName = "ToastContainer"),
  (Z.defaultProps = {
    position: "top-right",
    transition: rr,
    autoClose: 5e3,
    closeButton: Nt,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
var lt,
  M = new Map(),
  U = [],
  or = 1;
function Ft() {
  return "" + or++;
}
function er(t) {
  return t && (Y(t.toastId) || $(t.toastId)) ? t.toastId : Ft();
}
function W(t, r) {
  return (
    M.size > 0 ? A.emit(0, t, r) : U.push({ content: t, options: r }), r.toastId
  );
}
function rt(t, r) {
  return { ...r, type: (r && r.type) || t, toastId: er(r) };
}
function J(t) {
  return (r, n) => W(r, rt(t, n));
}
function h(t, r) {
  return W(t, rt("default", r));
}
(h.loading = (t, r) =>
  W(
    t,
    rt("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...r,
    })
  )),
  (h.promise = function (t, r, n) {
    let i,
      { pending: l, error: s, success: a } = r;
    l && (i = Y(l) ? h.loading(l, n) : h.loading(l.render, { ...n, ...l }));
    let d = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      k = (y, m, _) => {
        if (m == null) return void h.dismiss(i);
        let p = { type: y, ...d, ...n, data: _ },
          b = Y(m) ? { render: m } : m;
        return i ? h.update(i, { ...p, ...b }) : h(b.render, { ...p, ...b }), _;
      },
      u = C(t) ? t() : t;
    return u.then((y) => k("success", a, y)).catch((y) => k("error", s, y)), u;
  }),
  (h.success = J("success")),
  (h.info = J("info")),
  (h.error = J("error")),
  (h.warning = J("warning")),
  (h.warn = h.warning),
  (h.dark = (t, r) => W(t, rt("default", { theme: "dark", ...r }))),
  (h.dismiss = (t) => {
    M.size > 0
      ? A.emit(1, t)
      : (U = U.filter((r) => t != null && r.options.toastId !== t));
  }),
  (h.clearWaitingQueue = function (t) {
    return t === void 0 && (t = {}), A.emit(5, t);
  }),
  (h.isActive = (t) => {
    let r = !1;
    return (
      M.forEach((n) => {
        n.isToastActive && n.isToastActive(t) && (r = !0);
      }),
      r
    );
  }),
  (h.update = function (t, r) {
    r === void 0 && (r = {}),
      setTimeout(() => {
        let n = (function (i, l) {
          let { containerId: s } = l,
            a = M.get(s || lt);
          return a && a.getToast(i);
        })(t, r);
        if (n) {
          let { props: i, content: l } = n,
            s = {
              delay: 100,
              ...i,
              ...r,
              toastId: r.toastId || t,
              updateId: Ft(),
            };
          s.toastId !== t && (s.staleId = t);
          let a = s.render || l;
          delete s.render, W(a, s);
        }
      }, 0);
  }),
  (h.done = (t) => {
    h.update(t, { progress: 1 });
  }),
  (h.onChange = (t) => (
    A.on(4, t),
    () => {
      A.off(4, t);
    }
  )),
  (h.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (h.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  A.on(2, (t) => {
    (lt = t.containerId || t),
      M.set(lt, t),
      U.forEach((r) => {
        A.emit(0, r.content, r.options);
      }),
      (U = []);
  }).on(3, (t) => {
    M.delete(t.containerId || t), M.size === 0 && A.off(0).off(1).off(5);
  });
var o = F(xt()),
  nr = ({ data: t }) => {
    if (!t || !t.store || t.store.owner.subscriptionId !== 3)
      return {
        charset: "utf-8",
        title:
          "CheatingStore: The most reliable marketplace for your cheating needs",
        viewport: "width=device-width,initial-scale=1",
        "theme-color": "#009cde",
        url: "https://cheating.store",
        type: "website",
        language: "english",
        robots: "index, follow",
        keywords:
          "Fortnite Hacks, Apex Cheats, Apex Legends Hacks, Call of Duty Hacks, Warzone Hacks, Modern Warfare Cheats, Vanguard Hacks, Valorant Hacks CheatingStore, EFT Hacks CheatingStore, Dead by Daylight Cheats, Warzone 2.0 Hacks, Among Us Hacks, PUBG Cheats, Overwatch Hacks, DayZ Cheats, Sea of Thieves Hacks, Bloodhunt Cheats, SCUM Hacks, Cycle Frontier Hacks, Ark Survival Cheats, Squad Hacks, Battlefield 2042 Hacks, Halo Infinite Cheats, Arma 3 Hacks, The Division 2 Cheats, Destiny 2 Hacks CheatingStore, Rogue Company Cheats, Rust Hacks, Rainbow Six Siege Cheats CheatingStore, R6S Hacks CheatingStore, Fortnite Aimbot, Apex Legends Aimbot, Call of Duty Aimbot, Warzone Aimbot, Overwatch 2 Aimbot, DayZ Aimbot, Sea of Thieves Aimbot, Bloodhunt Aimbot, SCUM Aimbot, Cycle Frontier Aimbot, Ark Survival Aimbot, Battlefield 2042 Aimbot, Halo Infinite Aimbot, Arma 3 Aimbot, The Division 2 Aimbot, Destiny 2 Aimbot, Rust Aimbot, Rainbow Six Siege Aimbot, R6S Aimbot, Fortnite ESP, Apex Legends ESP, Call of Duty ESP, Warzone ESP, Overwatch 2 ESP, DayZ ESP, Sea of Thieves ESP, Bloodhunt ESP, SCUM ESP, Cycle Frontier ESP, Ark Survival ESP, Battlefield 2042 ESP, Halo Infinite ESP, Arma 3 ESP, The Division 2 ESP, Destiny 2 ESP, Rust ESP, Rainbow Six Siege ESP, R6S ESP",
        description:
          "CheatingStore: Your reliable marketplace for game cheats. Wide range of hacks for Fortnite, Apex Legends, Call of Duty & more. Get an edge with our Valorant, EFT, Destiny 2 hacks & R6S cheats. One-stop shop for Warzone, DayZ, Overwatch 2 & more. Secure your win today!",
        "revisit-after": "1 days",
        "og:image": "https://cheating.store/Logo_Wide_trans.webp",
        "og:image:width": "352",
        "og:image:height": "146",
        "twitter:card": "summary_large_image",
      };
    let { store: r, hostname: n } = t;
    return {
      charset: "utf-8",
      title: r.name,
      viewport: "width=device-width,initial-scale=1",
      "theme-color": "#0000FF",
      url: `https://${n}`,
      type: "website",
      language: "english",
      robots: "index, follow",
      keywords:
        "Fortnite Hacks, Apex Cheats, Apex Legends Hacks, Call of Duty Hacks, Warzone Hacks, Modern Warfare Cheats, Vanguard Hacks, Valorant Hacks CheatingStore, EFT Hacks CheatingStore, Dead by Daylight Cheats, Warzone 2.0 Hacks, Among Us Hacks, PUBG Cheats, Overwatch Hacks, DayZ Cheats, Sea of Thieves Hacks, Bloodhunt Cheats, SCUM Hacks, Cycle Frontier Hacks, Ark Survival Cheats, Squad Hacks, Battlefield 2042 Hacks, Halo Infinite Cheats, Arma 3 Hacks, The Division 2 Cheats, Destiny 2 Hacks CheatingStore, Rogue Company Cheats, Rust Hacks, Rainbow Six Siege Cheats CheatingStore, R6S Hacks CheatingStore, Fortnite Aimbot, Apex Legends Aimbot, Call of Duty Aimbot, Warzone Aimbot, Overwatch 2 Aimbot, DayZ Aimbot, Sea of Thieves Aimbot, Bloodhunt Aimbot, SCUM Aimbot, Cycle Frontier Aimbot, Ark Survival Aimbot, Battlefield 2042 Aimbot, Halo Infinite Aimbot, Arma 3 Aimbot, The Division 2 Aimbot, Destiny 2 Aimbot, Rust Aimbot, Rainbow Six Siege Aimbot, R6S Aimbot, Fortnite ESP, Apex Legends ESP, Call of Duty ESP, Warzone ESP, Overwatch 2 ESP, DayZ ESP, Sea of Thieves ESP, Bloodhunt ESP, SCUM ESP, Cycle Frontier ESP, Ark Survival ESP, Battlefield 2042 ESP, Halo Infinite ESP, Arma 3 ESP, The Division 2 ESP, Destiny 2 ESP, Rust ESP, Rainbow Six Siege ESP, R6S ESP",
      description: r.description,
      "revisit-after": "1 days",
      "twitter:card": "summary_large_image",
      "og:type": "product",
    };
  };
function dr() {
  return [
    { rel: "stylesheet", href: _t },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "stylesheet", href: At },
    { rel: "stylesheet", href: jt },
    { rel: "stylesheet", href: Rt },
    { rel: "stylesheet", href: Lt },
    { rel: "stylesheet", href: Ot },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
      rel: "stylesheet",
    },
    { href: "/embed/style.css", rel: "stylesheet" },
  ];
}
var cr = () => {
  let { user: t, toast: r, devMode: n, store: i, hostname: l } = ft();
  return (
    (0, Mt.useEffect)(() => {
      r &&
        h(r.message, {
          type: r.type,
          icon: {
            error: () => (0, o.jsx)(vt, { className: "text-red-500" }),
            warning: () => (0, o.jsx)(kt, { className: "text-[#F1C30B]" }),
            info: () => (0, o.jsx)(yt, { className: "text-[#0C8CE9]" }),
            success: () => (0, o.jsx)(ht, { className: "text-[#94fe62]" }),
          }[r.type],
        });
    }, [r]),
    (0, o.jsxs)("html", {
      className: "h-full",
      lang: "en",
      children: [
        (0, o.jsxs)("head", {
          children: [
            (0, o.jsx)("link", {
              rel: "icon",
              type: "image/x-icon",
              href:
                l === "cheating.store"
                  ? "/Logo_small.webp"
                  : i && i.owner.subscriptionId === 3
                  ? i == null
                    ? void 0
                    : i.bannerPath
                  : "/Logo_small.webp",
            }),
            (0, o.jsx)("meta", { charSet: "utf-8" }),
            (0, o.jsx)("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1",
            }),
            (0, o.jsx)("meta", { name: "darkreader", content: "false" }),
            (0, o.jsx)(G, {}),
            (0, o.jsx)(Q, {}),
            (0, o.jsx)("script", {
              async: !0,
              src: "https://www.googletagmanager.com/gtag/js?id=G-5X9QKHQZXW",
            }),
            i && i.id === 64
              ? (0, o.jsx)("script", {
                  src: "//code.tidio.co/bikse0udkrtlgkejryeqyczrvyclhiwv.js",
                  async: !0,
                })
              : null,
            (0, o.jsx)("script", {
              async: !0,
              src: "https://www.googletagmanager.com/gtag/js?id=AW-11223483660",
            }),
            (0, o.jsx)("script", {
              dangerouslySetInnerHTML: {
                __html: `
                    window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5X9QKHQZXW');

        `,
              },
            }),
            (0, o.jsx)("script", {
              dangerouslySetInnerHTML: {
                __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11223483660');
  gtag('event', 'conversion', {
      'send_to': 'AW-11223483660/_F2TCLjRyqwYEIyK4-cp',
      'transactionId': ''
  });
        `,
              },
            }),
            (0, o.jsx)("script", { src: "/gtag.js" }),
            (0, o.jsx)("script", { src: "/ganalytics.js" }),
          ],
        }),
        i
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(it, {}),
                (0, o.jsx)(Z, { hideProgressBar: !0 }),
                (0, o.jsx)(ct, {}),
                (0, o.jsx)(nt, {}),
                n ? (0, o.jsx)(dt, {}) : null,
              ],
            })
          : (0, o.jsxs)("body", {
              className:
                "relative h-full w-full flex flex-col font-sans text-white/80 min-h-screen overflow-x-hidden",
              children: [
                (0, o.jsxs)("div", {
                  className: "flex-1 max-h-full",
                  children: [
                    (0, o.jsx)("div", {
                      style: { background: "#060715" },
                      className:
                        "flex w-full fixed -z-10 h-full justify-center items-center shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                      children: (0, o.jsx)(ut, {
                        src: "/images/Blur.png",
                        className:
                          "w-[70%] h-[80%] shrink-0 mix-blend-screen blur-[100px]",
                        alt: "",
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className:
                        "sm:px-[20px] py-[30px] h-full xl:px-[135px] flex justify-center items-center min-h-full",
                      children: [
                        (0, o.jsxs)("div", {
                          className:
                            "mb-24 pt-[30px] h-full w-full flex flex-col items-center",
                          children: [
                            (0, o.jsx)(V, { user: t }),
                            (0, o.jsx)(it, {}),
                          ],
                        }),
                        (0, o.jsx)("div", {
                          className: "absolute bottom-0 w-full",
                        }),
                      ],
                    }),
                  ],
                }),
                n
                  ? (0, o.jsx)("script", {
                      src: "https://cdn.jsdelivr.net/npm/fuse.js@6.6.2",
                    })
                  : (0, o.jsx)("script", {
                      src: "https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.min.js",
                    }),
                (0, o.jsx)("script", {
                  src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js",
                }),
                (0, o.jsx)(Z, { hideProgressBar: !0 }),
                (0, o.jsx)(ct, {}),
                (0, o.jsx)(nt, {}),
                n ? (0, o.jsx)(dt, {}) : null,
              ],
            }),
      ],
    })
  );
};
function pr({ error: t }) {
  return (
    console.error(t),
    (0, o.jsxs)("html", {
      lang: "en",
      children: [
        (0, o.jsxs)("head", {
          children: [(0, o.jsx)(G, {}), (0, o.jsx)(Q, {})],
        }),
        (0, o.jsxs)("body", {
          className:
            "flex flex-col text-white max-h-screen bg-[#111111] min-h-screen overflow-x-hidden text-center",
          children: [
            (0, o.jsx)(V, { user: null }),
            (0, o.jsxs)("div", {
              className:
                "m-auto font-sans flex flex-col items-center text-center w-full justify-center overflow-x-hidden bg-[#111111] max-w-[1000px] p-8 mx-auto",
              children: [
                (0, o.jsx)("h1", {
                  className: "font-header text-5xl font-bold",
                  children: ":/",
                }),
                (0, o.jsx)("h2", {
                  className: "mt-4 text-2xl font-medium",
                  children: "An unknown error occurred. Try again later!",
                }),
              ],
            }),
            (0, o.jsx)(pt, {}),
          ],
        }),
      ],
    })
  );
}
function sr() {
  let t = wt();
  return (
    console.error(t),
    (0, o.jsxs)("html", {
      lang: "en",
      children: [
        (0, o.jsxs)("head", {
          children: [(0, o.jsx)(G, {}), (0, o.jsx)(Q, {})],
        }),
        (0, o.jsxs)("body", {
          className:
            "flex flex-col text-white bg-[#111111] min-h-screen overflow-x-hidden text-center",
          children: [
            (0, o.jsx)(V, { user: null }),
            (0, o.jsxs)("div", {
              className:
                "m-auto font-sans flex flex-col items-center text-center w-full justify-center overflow-x-hidden bg-[#111111] max-w-[1000px] p-8 mx-auto",
              children: [
                (0, o.jsx)("h1", {
                  className: "font-header text-4xl font-bold text-red-500",
                  children: t.status,
                }),
                (0, o.jsx)("h2", {
                  className: "mt-4 text-5xl font-medium",
                  children: t.statusText,
                }),
              ],
            }),
            (0, o.jsx)(pt, {}),
          ],
        }),
      ],
    })
  );
}
var gr = mt(cr);
export {
  sr as CatchBoundary,
  pr as ErrorBoundary,
  gr as default,
  dr as links,
  nr as meta,
};
