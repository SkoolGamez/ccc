import {
  c as J,
  q as j,
  t as V,
  w as P,
} from "/build/_shared/chunk-OC4OSYCW.js";
import { a as Y, c as u } from "/build/_shared/chunk-F6B3QIPL.js";
import { a as T } from "/build/_shared/chunk-5SJKL2HV.js";
import { a as l, b as d } from "/build/_shared/chunk-2HHCCEXY.js";
import { b as K, j as o, r as X } from "/build/_shared/chunk-KHL5ACVI.js";
import { a as W, b as x } from "/build/_shared/chunk-O4ZNHJCK.js";
import { d as p } from "/build/_shared/chunk-W6WK5VNR.js";
var i = p(W());
var B = "/build/_assets/modal_close-OTPV4PI7.svg";
var $ = "/build/_assets/logo-SEYJAV5T.webp";
var e = p(x()),
  N = [
    { name: "Marketplace", href: "/game/Valorant" },
    { name: "Subscriptions", href: "/subscriptions" },
    { name: "Dispute archive", href: "/disputes" },
    { name: "Discord", href: "https://discord.gg/YthBG7kJrv" },
    { name: "FAQ", href: "/faq" },
  ],
  ce = ({ user: a }) => {
    var q, R, _, D, I, O, S, A, G;
    let m = N,
      [v, k] = (0, i.useState)(!1),
      [M, H] = (0, i.useState)(!1),
      [z, b] = (0, i.useState)(!1),
      [g, h] = (0, i.useState)(!0),
      [U, y] = (0, i.useState)(!1),
      Z = {
        initial: {
          opacity: 0,
          x: -32,
          transition: { duration: 0.5, ease: [0.65, 0.05, 0.36, 1] },
        },
        open: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: [0.65, 0.05, 0.36, 1] },
        },
      },
      E = {
        initial: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0,
            staggerDirection: -1,
          },
        },
        open: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.8,
            staggerDirection: 1,
          },
        },
      };
    function L() {
      setTimeout(() => {
        document.body.setAttribute("overflow", "visible");
      }, 1300),
        k(!1);
    }
    let F = K(),
      n = X(),
      [c, Q] = (0, i.useState)(0);
    (0, i.useEffect)(() => {
      var t;
      if (a) {
        let r = 0;
        for (let f of (t = a.cartItems) != null ? t : [])
          console.log(f),
            (r +=
              f.quantity *
              f.subscription.price *
              (f.coupon ? 1 - f.coupon.discountPercentage / 100 : 1));
        Q(r);
      }
    }, [a, a == null ? void 0 : a.cartItems]);
    let w = (0, i.useRef)(null),
      C = (t) => {
        w.current && !w.current.contains(t.target) && y(!1);
      };
    return (
      (0, i.useEffect)(
        () => (
          document.addEventListener("mousedown", C),
          () => document.removeEventListener("mousedown", C)
        ),
        []
      ),
      (0, e.jsxs)("div", {
        className: "navbar box",
        children: [
          (0, e.jsxs)("div", {
            className: "w-full relative flex flex-col",
            children: [
              (0, e.jsx)(d, {
                children: U
                  ? (0, e.jsx)(l.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "fixed inset-0 bg-black/50 grid place-items-center",
                      children: (0, e.jsxs)("div", {
                        ref: w,
                        className:
                          "bg-[#060715] inline-flex flex-col items-start gap-5 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.25)] p-[45px] rounded-[30px]",
                        children: [
                          (0, e.jsxs)("div", {
                            className: "flex items-center gap-5",
                            children: [
                              (0, e.jsx)("img", {
                                alt: "",
                                className: "w-[35px] h-[24.272px]",
                                src: "/images/Check.svg",
                              }),
                              (0, e.jsxs)("div", {
                                className: "flex flex-col items-start gap-2.5",
                                children: [
                                  (0, e.jsx)("span", {
                                    className:
                                      "text-white text-xl not-italic font-medium leading-[normal]",
                                    children: "Confirm purchase with balance",
                                  }),
                                  (0, e.jsx)("span", {
                                    className:
                                      "text-white text-base not-italic font-normal leading-[normal]",
                                    children:
                                      "Are you sure you want to purchase these items with balance?",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            onClick: async (t) => {
                              y(!1),
                                await n.submit(
                                  { method: "card" },
                                  {
                                    method: "post",
                                    action: "api/cart/checkout",
                                  }
                                );
                            },
                            style: {
                              backgroundSize: "110%",
                              backgroundPosition: "0px 0px,-5px 0px",
                              backgroundImage:
                                "radial-gradient(50% 300% at 50% 50%, #7001D3 0%, #7001D300 100%),conic-gradient(from 0deg at 50% 50%, #7001D3 0%, #1ADBE3 14%, #1752CA 31%, #BD38FF 48%, #FE6272 82%, #7001D3 100%)",
                            },
                            className:
                              "text-white cursor-pointer text-sm not-italic font-medium leading-5 flex w-full justify-center items-center gap-3 border backdrop-blur-[5px] px-4 py-2 rounded-[100px] border-solid border-[#ffffff17]",
                            children: "Confirm",
                          }),
                        ],
                      }),
                    })
                  : null,
              }),
              (0, e.jsxs)("div", {
                className: "container min-w-full",
                children: [
                  (0, e.jsx)(o, {
                    to: "/",
                    className: "navbar_logo",
                    children: (0, e.jsx)("img", { src: $, alt: "" }),
                  }),
                  (0, e.jsx)("ul", {
                    className: "navbar_ul",
                    children: m.map((t, r) =>
                      (0, e.jsxs)(
                        o,
                        {
                          to: t.href,
                          children: [
                            (0, e.jsx)("li", {
                              className: "whitespace-nowrap",
                              children: t.name,
                            }),
                            (0, e.jsx)("li", {
                              className: "whitespace-nowrap",
                              children: t.name,
                            }),
                          ],
                        },
                        t.name
                      )
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: "nav_mobile",
                    children: [
                      (0, e.jsx)("div", {
                        className: "authorization",
                        children: a
                          ? (0, e.jsxs)("div", {
                              className:
                                "p-2 w-full items-center justify-center flex flex-row whitespace-nowrap",
                              children: [
                                (0, e.jsx)("div", {
                                  onClick: () => {
                                    H((t) => !t), b(!1), h(!0);
                                  },
                                  className:
                                    "h-full items-center flex flex-col justify-center mr-4 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:scale-[1.02] duration-300 hover:text-white text-2xl text-gray-300",
                                  children: (0, e.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, e.jsx)(J, {}),
                                      ((R =
                                        (q = a.notifications) == null
                                          ? void 0
                                          : q.filter((t) => t.read === !1)) ==
                                      null
                                        ? void 0
                                        : R.length) > 0
                                        ? (0, e.jsx)("div", {
                                            className: `bg-red-500 w-6 h-6 absolute transform -translate-y-[155%] -translate-x-[-45%] rounded-full 
                        flex items-center justify-center text-white text-sm`,
                                            children:
                                              ((D =
                                                (_ = a.notifications) == null
                                                  ? void 0
                                                  : _.filter(
                                                      (t) => t.read === !1
                                                    )) == null
                                                ? void 0
                                                : D.length) > 9
                                                ? "9+"
                                                : (O =
                                                    (I = a.notifications) ==
                                                    null
                                                      ? void 0
                                                      : I.filter(
                                                          (t) => t.read === !1
                                                        )) == null
                                                ? void 0
                                                : O.length,
                                          })
                                        : null,
                                    ],
                                  }),
                                }),
                                (0, e.jsx)("div", {
                                  onClick: () => {
                                    H(!1), b((t) => !t);
                                  },
                                  className:
                                    "ml-1 h-full items-center flex flex-col justify-center mr-4 cursor-pointer transition-all ease-in-out hover:-translate-y-1 hover:scale-[1.02] duration-300 hover:text-white text-2xl text-gray-300",
                                  children: (0, e.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, e.jsx)(P, {}),
                                      ((S = a.cartItems) != null ? S : [])
                                        .length > 0
                                        ? (0, e.jsx)("div", {
                                            className: `bg-red-500 w-6 h-6 absolute transform -translate-y-[155%] -translate-x-[-45%] rounded-full 
                        flex items-center justify-center text-white text-sm`,
                                            children:
                                              a.cartItems.length > 9
                                                ? "9+"
                                                : a.cartItems.length,
                                          })
                                        : null,
                                    ],
                                  }),
                                }),
                                (0, e.jsx)("div", {
                                  className: "flex",
                                  children: (0, e.jsx)("div", {
                                    className:
                                      "border-2 rounded-xl border-white/10 p-2 text-white transition ease-in-out hover:-translate-y-1 hover:scale-[1.02] duration-300",
                                    children: (0, e.jsxs)(o, {
                                      to: "/dashboard/balance",
                                      className: "flex flex-row",
                                      children: [
                                        (0, e.jsxs)("span", {
                                          className:
                                            "self-start bg-clip-text text-transparent bg-gradient-to-br from-green-100 via-green-400 to-green-800 bg-size-200 hover:bg-pos-100 transition-all duration-700",
                                          children: [
                                            "M$",
                                            Math.round(a.balance * 100) / 100,
                                          ],
                                        }),
                                        (0, e.jsx)("span", {
                                          className:
                                            "ml-1 self-start bg-clip-text text-transparent bg-gradient-to-br from-orange-100 via-orange-400 to-orange-800 bg-size-200 hover:bg-pos-0 bg-pos-100 transition-all duration-700",
                                          children:
                                            a.balanceOnHold > 0
                                              ? ` + M$${
                                                  Math.round(
                                                    a.balanceOnHold * 100
                                                  ) / 100
                                                }`
                                              : "",
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : (0, e.jsx)(e.Fragment, {
                              children: (0, e.jsxs)(o, {
                                to: "/login",
                                style: {
                                  backgroundSize: "110%",
                                  backgroundPosition: "0px 0px,-5px 0px",
                                  backgroundImage:
                                    "radial-gradient(50% 300% at 50% 50%, #7001D3 0%, #7001D300 100%),conic-gradient(from 0deg at 50% 50%, #7001D3 0%, #1ADBE3 14%, #1752CA 31%, #BD38FF 48%, #FE6272 82%, #7001D3 100%)",
                                },
                                className:
                                  "flex justify-center hover:-translate-y-1 duration-500 transition-all items-center gap-3 border backdrop-blur-[5px] px-6 py-2 rounded-[100px] border-solid border-[#ffffff17] ",
                                children: [
                                  "Sign in",
                                  (0, e.jsx)("img", {
                                    src: "/images/Vector.png",
                                    alt: "",
                                    className: "",
                                  }),
                                ],
                              }),
                            }),
                      }),
                      (0, e.jsxs)("div", {
                        className: "burger_btn",
                        onClick: () => {
                          document.body.setAttribute("overflow", "hidden"),
                            k(!0);
                        },
                        children: [
                          (0, e.jsx)("span", {}),
                          (0, e.jsx)("span", {}),
                          (0, e.jsx)("span", {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(d, {
                        children: M
                          ? (0, e.jsxs)(l.div, {
                              className: `mt-[4.5rem] max-h-[600px] overflow-y-auto sm:min-w-[415px] absolute sm:mr-8 mr-4 self-end
            } bg-neutral-900 ml-2 max-w-md border border-[#ffffff33] p-8 rounded-xl shadow-2xl transition-all duration-700`,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              children: [
                                (0, e.jsx)("div", {
                                  className: "flex flex-row items-center",
                                  children: (0, e.jsx)("div", {
                                    className: "font-bold text-white text-xl",
                                    children: "Notifications",
                                  }),
                                }),
                                (0, e.jsxs)("div", {
                                  className: "mt-2 flex flex-row gap-2",
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: `hover:scale-105 flex justify-center transition-all duration-700 cursor-pointer ${
                                        g
                                          ? "text-blue-500 border-blue-500"
                                          : "text-gray-300 border-[#ffffff33] text-sm font-extralight"
                                      } p-2 w-1/2 border rounded-xl`,
                                      onClick: () => h(!0),
                                      children: "Unread",
                                    }),
                                    (0, e.jsx)("div", {
                                      onClick: () => h(!1),
                                      className: `${
                                        g
                                          ? "text-gray-300 border-[#ffffff33] text-sm font-extralight"
                                          : "text-blue-500 border-blue-500"
                                      } hover:scale-105  transition-all duration-700 cursor-pointer flex items-center justify-center p-2 flex-col border w-1/2 rounded-xl`,
                                      children: "All",
                                    }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: "flex flex-col mt-4 gap-2",
                                  children:
                                    (A =
                                      a == null ? void 0 : a.notifications) ==
                                    null
                                      ? void 0
                                      : A.sort((t, r) => r.id - t.id)
                                          .filter((t) => (g ? !t.read : !0))
                                          .map((t) =>
                                            (0, e.jsx)(
                                              d,
                                              {
                                                children: (0, e.jsx)(l.div, {
                                                  initial: { opacity: 0 },
                                                  animate: { opacity: 1 },
                                                  exit: { opacity: 0 },
                                                  onClick: (r) => {
                                                    r.preventDefault(),
                                                      t.href && F(t.href);
                                                  },
                                                  className: `p-6 py-4 gap-1 bg-white/5 shadow-2xl ${
                                                    t.href
                                                      ? "hover:scale-105 cursor-pointer"
                                                      : ""
                                                  } transition-all duration-700 rounded-xl flex flex-col`,
                                                  children: (0, e.jsxs)("div", {
                                                    className:
                                                      "flex flex-row items-center gap-4",
                                                    children: [
                                                      t.read
                                                        ? null
                                                        : (0, e.jsxs)("span", {
                                                            className:
                                                              "relative flex h-3 w-3",
                                                            children: [
                                                              (0, e.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75",
                                                                }
                                                              ),
                                                              (0, e.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "relative inline-flex rounded-full h-3 w-3 bg-sky-500",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                      (0, e.jsxs)("div", {
                                                        className:
                                                          "w-full flex flex-col",
                                                        children: [
                                                          (0, e.jsx)("div", {
                                                            className:
                                                              "text-white text-sm",
                                                            children:
                                                              t.description,
                                                          }),
                                                          (0, e.jsxs)("span", {
                                                            className:
                                                              "text-gray-400 text-sm font-extralight",
                                                            children: [
                                                              Math.round(
                                                                (new Date().getTime() -
                                                                  new Date(
                                                                    t.date
                                                                  ).getTime()) /
                                                                  (1e3 *
                                                                    3600 *
                                                                    24)
                                                              ),
                                                              " ",
                                                              "days ago",
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              },
                                              t.id
                                            )
                                          ),
                                }),
                                (0, e.jsx)("div", {
                                  className: "mt-4 flex flex-row gap-2",
                                  children: (0, e.jsxs)("div", {
                                    onClick: async (t) => {
                                      await n.submit(
                                        {},
                                        {
                                          method: "post",
                                          action: "api/notifications/read",
                                        }
                                      );
                                    },
                                    className:
                                      "hover:scale-105 flex justify-center w-full cursor-pointer transition-all duration-700 bg-blue-900 border border-[#ffffff33] rounded-lg p-2 text-white",
                                    children: [
                                      "Mark",
                                      " ",
                                      (G =
                                        a == null ? void 0 : a.notifications) ==
                                      null
                                        ? void 0
                                        : G.filter((t) => t.read === !1).length,
                                      " ",
                                      "as read",
                                    ],
                                  }),
                                }),
                              ],
                            })
                          : null,
                      }),
                      (0, e.jsx)(d, {
                        children: z
                          ? (0, e.jsxs)(l.div, {
                              className: `mt-[4.5rem] max-h-[600px] overflow-y-auto sm:min-w-[415px] absolute sm:mr-8 mr-4 self-end
            } bg-neutral-900 ml-2 max-w-md border border-[#ffffff33] p-8 rounded-xl shadow-2xl transition-all duration-700`,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              children: [
                                (0, e.jsx)("div", {
                                  className: "flex flex-row items-center",
                                  children: (0, e.jsx)("div", {
                                    className: "font-bold text-white text-xl",
                                    children: "Shopping Cart",
                                  }),
                                }),
                                (0, e.jsx)("div", {
                                  className: "flex flex-col mt-4 gap-2",
                                  children:
                                    a == null
                                      ? void 0
                                      : a.cartItems.map((t) =>
                                          (0, e.jsx)(
                                            d,
                                            {
                                              children: (0, e.jsx)(l.div, {
                                                initial: { opacity: 0 },
                                                animate: { opacity: 1 },
                                                exit: { opacity: 0 },
                                                onClick: (r) => {
                                                  F(
                                                    `/game/${u(
                                                      t.subscription.product
                                                        .game.name
                                                    )}/${u(
                                                      t.subscription.product
                                                        .store.name
                                                    )}/${u(
                                                      t.subscription.product
                                                        .name
                                                    )}`
                                                  );
                                                },
                                                className: `p-6 gap-1 bg-white/5 shadow-2xl cursor-pointer
                          transition-all duration-700 rounded-xl flex flex-col`,
                                                children: (0, e.jsxs)("div", {
                                                  className:
                                                    "flex flex-row items-center gap-4",
                                                  children: [
                                                    (0, e.jsx)("div", {
                                                      className:
                                                        "w-[86px] flex items-center justify-center h-[50px] overflow-hidden",
                                                      children: (0, e.jsx)(
                                                        "img",
                                                        {
                                                          className:
                                                            "min-w-full rounded-lg ",
                                                          src: t.subscription
                                                            .product.bannerPath,
                                                          alt: "",
                                                        }
                                                      ),
                                                    }),
                                                    (0, e.jsxs)("div", {
                                                      className:
                                                        "w-full flex flex-col",
                                                      children: [
                                                        (0, e.jsx)("div", {
                                                          className:
                                                            "text-white text-sm",
                                                          children:
                                                            t.subscription
                                                              .product.name,
                                                        }),
                                                        (0, e.jsxs)("span", {
                                                          className:
                                                            "text-gray-400 text-sm font-extralight",
                                                          children: [
                                                            "Subscription: ",
                                                            t.subscription.name,
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, e.jsxs)("div", {
                                                      className:
                                                        "flex flex-row items-center h-[35px] justify-center gap-2",
                                                      children: [
                                                        (0, e.jsx)("div", {
                                                          onClick: () => {
                                                            n.submit(
                                                              {
                                                                subscriptionId:
                                                                  t.subscription.id.toString(),
                                                                add: "false",
                                                              },
                                                              {
                                                                method: "post",
                                                                action:
                                                                  "api/cart/update",
                                                              }
                                                            );
                                                          },
                                                          className:
                                                            "bg-primary_dark flex items-center justify-center text-center shadow-2xl h-full px-2 rounded-lg",
                                                          children: (0, e.jsx)(
                                                            j,
                                                            {}
                                                          ),
                                                        }),
                                                        (0, e.jsx)("div", {
                                                          className:
                                                            "bg-primary_dark flex items-center justify-center text-center shadow-2xl h-full px-3 rounded-lg",
                                                          children: t.quantity,
                                                        }),
                                                        (0, e.jsx)("div", {
                                                          onClick: () => {
                                                            n.submit(
                                                              {
                                                                subscriptionId:
                                                                  t.subscription.id.toString(),
                                                                add: "true",
                                                              },
                                                              {
                                                                method: "post",
                                                                action:
                                                                  "api/cart/update",
                                                              }
                                                            );
                                                          },
                                                          className:
                                                            "bg-primary_dark flex items-center justify-center text-center shadow-2xl h-full px-2 rounded-lg",
                                                          children: (0, e.jsx)(
                                                            V,
                                                            {}
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            t.subscription.id
                                          )
                                        ),
                                }),
                                (0, e.jsx)("div", {
                                  className: `items-center justify-center  ${
                                    a.balance < c ? "grid grid-cols-2" : "flex"
                                  } gap-2 mt-2`,
                                  children:
                                    a.balance < c
                                      ? (0, e.jsxs)(e.Fragment, {
                                          children: [
                                            (0, e.jsxs)("button", {
                                              onClick: async (t) => {
                                                await n.submit(
                                                  { method: "card" },
                                                  {
                                                    method: "post",
                                                    action: "api/cart/checkout",
                                                  }
                                                );
                                              },
                                              className:
                                                "flex flex-row shadow-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-800 transition-all duration-500 rounded-md items-center justify-center py-3 ",
                                              name: "method",
                                              value: "card",
                                              children: [
                                                "Pay ",
                                                c.toFixed(2),
                                                " with Card",
                                              ],
                                            }),
                                            (0, e.jsxs)("button", {
                                              onClick: async (t) => {
                                                await n.submit(
                                                  { method: "crypto" },
                                                  {
                                                    method: "post",
                                                    action: "api/cart/checkout",
                                                  }
                                                );
                                              },
                                              className:
                                                "flex flex-row  shadow-xl text-white font-semibold bg-orange-400 hover:bg-orange-500 transition-all duration-500 rounded-md items-center justify-center py-3",
                                              children: [
                                                "Pay ",
                                                c.toFixed(2),
                                                " with Crypto",
                                              ],
                                            }),
                                          ],
                                        })
                                      : c === 0
                                      ? (0, e.jsxs)("div", {
                                          className:
                                            "text-center gap-4 flex flex-col w-full text-red-400 font-bold text-xl",
                                          children: [
                                            "Your cart is empty ",
                                            " :(",
                                            (0, e.jsx)(o, {
                                              to: "/game/Valorant",
                                              className:
                                                "flex px-3 whitespace-nowrap flex-row shadow-xl w-full text-white font-semibold bg-indigo-600 hover:bg-indigo-800 transition-all duration-500 rounded-md items-center justify-center py-3",
                                              children: "Browse cheats",
                                            }),
                                          ],
                                        })
                                      : (0, e.jsxs)("button", {
                                          onClick: async (t) => {
                                            y(!0), b(!1);
                                          },
                                          className:
                                            "flex px-3 whitespace-nowrap flex-row shadow-xl w-full text-white font-semibold bg-indigo-600 hover:bg-indigo-800 transition-all duration-500 rounded-md items-center justify-center py-3",
                                          name: "method",
                                          value: "card",
                                          children: [
                                            "Pay ",
                                            c.toFixed(2),
                                            " with balance",
                                          ],
                                        }),
                                }),
                                n.data && n.data.status && n.data.status_color
                                  ? (0, e.jsx)("div", {
                                      className: `
                        mt-4 flex text-center font-medium ${n.data.status_color}`,
                                      children: n.data.status,
                                    })
                                  : null,
                              ],
                            })
                          : null,
                      }),
                    ],
                  })
                : null,
            ],
          }),
          (0, e.jsx)(d, {
            initial: !1,
            children:
              v &&
              (0, e.jsxs)(l.div, {
                className: "mobile_navbar",
                initial: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                animate: {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  transition: { duration: 0.8, ease: [0.27, 0.94, 0.48, 1] },
                },
                exit: {
                  clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                  transition: {
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.27, 0.94, 0.48, 1],
                  },
                },
                children: [
                  (0, e.jsxs)(l.div, {
                    className: "mobile_navbar_top_menu",
                    initial: { y: "-30px", opacity: 0 },
                    animate: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.65, 0.05, 0.36, 1],
                      },
                    },
                    exit: {
                      y: "-30px",
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0.65, 0.05, 0.36, 1],
                      },
                    },
                    children: [
                      (0, e.jsx)(o, {
                        to: "/",
                        className: "navbar_logo",
                        children: (0, e.jsx)("img", { src: $, alt: "" }),
                      }),
                      (0, e.jsx)("img", {
                        className: "mobile_navbar_close",
                        src: B,
                        alt: "",
                        onClick: () => L(),
                      }),
                    ],
                  }),
                  (0, e.jsx)(l.ul, {
                    className: "mobile_navbar_ul",
                    variants: E,
                    initial: "initial",
                    animate: "open",
                    exit: "initial",
                    children: m.map((t, r) =>
                      (0, e.jsx)(
                        o,
                        {
                          to: t.href,
                          children: (0, e.jsx)(l.li, {
                            variants: Z,
                            onClick: () => L(),
                            children: t.name,
                          }),
                        },
                        t.name
                      )
                    ),
                  }),
                ],
              }),
          }),
        ],
      })
    );
  };
var s = p(x()),
  ve = () => {
    let a = Y("/Logo_text.png");
    return (0, s.jsxs)("footer", {
      className: "hidden sm:inline mt-auto text-white/80 p-4 xl:p-0",
      children: [
        (0, s.jsx)("hr", { className: "border-0" }),
        (0, s.jsx)("div", {
          className: "w-full max-w-screen-xl mx-auto md:py-8",
          children: (0, s.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
              (0, s.jsx)(o, {
                to: "/",
                className: "flex items-center sm:mb-0",
                children: (0, s.jsx)(T, {
                  src: "/Logo_text.png",
                  className: `h-4 mr-2 opacity-0 ${
                    a ? "opacity-100" : ""
                  } transition-all ease-in-out hover:-translate-y-1 hover:scale-[1.02] duration-300`,
                  alt: "",
                }),
              }),
              (0, s.jsx)("ul", {
                className:
                  "flex flex-wrap items-center text-sm font-medium sm:mb-0",
                children: N.map((m, v) =>
                  (0, s.jsx)(
                    "li",
                    {
                      className:
                        "transition ease-in-out hover:-translate-y-1 hover:scale-[1.02] duration-300",
                      children: (0, s.jsx)(o, {
                        to: m.href,
                        className: "mr-2 sm:mr-4 hover:underline md:mr-6 ",
                        children: m.name,
                      }),
                    },
                    `footer-route-${v}`
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  };
export { ce as a, ve as b };
