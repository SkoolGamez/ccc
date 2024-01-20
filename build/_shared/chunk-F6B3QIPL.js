import { a as c } from "/build/_shared/chunk-O4ZNHJCK.js";
import { d as i } from "/build/_shared/chunk-W6WK5VNR.js";
var n = i(c());
function p(e) {
  let [a, o] = (0, n.useState)(!1);
  return (
    (0, n.useEffect)(() => {
      if (!e) return;
      let r = new Image();
      (r.src = e),
        (r.onload = function () {
          o((t) => !0);
        });
    }, [e]),
    a
  );
}
function d(e) {
  let [a, o] = (0, n.useState)(new Map());
  return (
    (0, n.useEffect)(() => {
      e.forEach((r) => {
        if (!r.bannerPath) return;
        let t = new Image();
        (t.src = r.bannerPath),
          (t.onload = function () {
            o((s) => new Map([...s, [r.bannerPath, !0]]));
          }),
          t.complete && o((s) => new Map([...s, [r.bannerPath, !0]]));
      });
    }, [e]),
    a
  );
}
function m(e) {
  return e == null ? void 0 : e.replace(/\s/g, "-");
}
export { p as a, d as b, m as c };
