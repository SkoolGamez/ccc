import { b as l, c as a } from "/build/_shared/chunk-F6B3QIPL.js";
import { a as p } from "/build/_shared/chunk-5SJKL2HV.js";
import { a as f } from "/build/_shared/chunk-QPJOCY54.js";
import { j as n, o as s } from "/build/_shared/chunk-KHL5ACVI.js";
import { b as i } from "/build/_shared/chunk-O4ZNHJCK.js";
import { d as r } from "/build/_shared/chunk-W6WK5VNR.js";
var b = r(f());
var d = "/build/_assets/arrow_link-S74ZWROQ.svg";
var e = r(i());
function x() {
  let { most_sold_products: o } = s(),
    c = o.map((t) => ({ bannerPath: t.bannerPath })),
    m = l(c);
  return (0, e.jsxs)("div", {
    className:
      "inline-flex sm:px-[100px] xl:px-[306px] py-[50px] flex-col justify-center items-center gap-[45px]",
    children: [
      (0, e.jsxs)("div", {
        className: "flex flex-col items-center gap-[15px]",
        children: [
          (0, e.jsx)("div", {
            style: {
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%)",
            },
            className:
              "flex items-center gap-2 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.10),0px_4px_4px_0px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(0,0,0,0.05)] backdrop-blur-[10px] px-4 py-1.5 rounded-lg border-[0.5px] border-solid border-[rgba(255,255,255,0.07)]",
            children: (0, e.jsx)("span", {
              className:
                "text-white text-[13px] not-italic font-medium leading-5",
              children: "Escrow based marketplace \u2728",
            }),
          }),
          (0, e.jsx)("div", {
            className: "flex flex-col justify-center items-center gap-[30px]",
            children: (0, e.jsxs)("div", {
              className: "flex flex-col justify-center items-center gap-[25px]",
              children: [
                (0, e.jsx)("span", {
                  className:
                    "text-white text-center text-3xl lg:text-6xl not-italic font-semibold leading-[normal]",
                  children: "Cheating Store",
                }),
                (0, e.jsx)("span", {
                  className:
                    "text-[rgba(255,255,255,0.80)] text-center text-xl lg:text-3xl not-italic leading-[normal]",
                  children: "Buy directly from the manufacturers.",
                }),
                (0, e.jsxs)("span", {
                  className:
                    "text-[rgba(255,255,255,0.80)] text-center text-lg not-italic font-normal leading-[normal]",
                  children: [
                    "Meet a new level of accessibility and trust.",
                    (0, e.jsx)("br", {}),
                    "Buy cheats the way you like.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, e.jsx)("div", {
        className:
          "flex flex-row justify-center items-center gap-[10px] sm:gap-[50px]",
        children: o.map((t, g) =>
          (0, e.jsx)(
            n,
            {
              to: `/game/${a(t.game.name)}/${a(t.store.name)}/${a(t.name)}`,
              className: `col-span-1 ${
                g == 2 ? "hidden sm:inline" : ""
              } transition-all opacity-0 ${
                m.get(t.bannerPath) === !0 ? "opacity-100" : ""
              } ease-in-out hover:-translate-y-1 hover:scale-[1.02] duration-1000`,
              children: (0, e.jsx)(p, {
                className:
                  "h-24 w-full object-cover object-center border shadow-[0px_30px_60px_0px_rgba(0,0,0,0.50),0px_30px_60px_0px_rgba(0,0,0,0.10)] rounded-md border-solid border-[rgba(255,255,255,0.10)]",
                alt: "",
                src: t.bannerPath,
              }),
            },
            t.id
          )
        ),
      }),
      (0, e.jsxs)(n, {
        to: "https://smart-cheats.cheating.store",
        style: {
          backgroundSize: "110%",
          backgroundPosition: "0px 0px,-5px 0px",
          backgroundImage:
            "radial-gradient(50% 300% at 50% 50%, #7001D3 0%, #7001D300 100%),conic-gradient(from 0deg at 50% 50%, #7001D3 0%, #1ADBE3 14%, #1752CA 31%, #BD38FF 48%, #FE6272 82%, #7001D3 100%)",
        },
        className:
          "text-white w-fit duration-500 hover:-translate-y-1 font-medium cursor-pointer not-italic text-xl leading-5 flex justify-center items-center gap-3 border backdrop-blur-[5px] px-6 py-4 rounded-[100px] border-solid border-[#ffffff17]",
        children: [
          "Shop from our store",
          " ",
          (0, e.jsx)("img", { src: d, alt: "", style: { rotate: "-90deg" } }),
        ],
      }),
    ],
  });
}
export { x as default };
