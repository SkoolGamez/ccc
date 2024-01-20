import { a as g } from "/build/_shared/chunk-ERJPHUOK.js";
import {
  a as i,
  b as a,
  c as s,
  e as c,
} from "/build/_shared/chunk-IPSZ3SW6.js";
import "/build/_shared/chunk-66MHU67D.js";
import { a as r, n as o, t as n } from "/build/_shared/chunk-KHL5ACVI.js";
import { a as _, b as y } from "/build/_shared/chunk-O4ZNHJCK.js";
import { b as S, d as t } from "/build/_shared/chunk-W6WK5VNR.js";
var m = S((e) => {
  "use strict";
  var u = g();
  (e.createRoot = u.createRoot), (e.hydrateRoot = u.hydrateRoot);
  var d;
});
var R = t(m());
var p = t(_()),
  l = t(y());
c({
  dsn: "https://8aba4f8614749ac171a6aedc04a516d2@o4505948697591808.ingest.sentry.io/4505948697722880",
  integrations: [
    new i({ routingInstrumentation: s(p.useEffect, r, o) }),
    new a(),
  ],
  tracesSampleRate: 0.1,
  tracePropagationTargets: [/^https:\/\/cheating\.store\/api/],
  replaysSessionSampleRate: 0.01,
  replaysOnErrorSampleRate: 1,
});
(0, R.hydrateRoot)(document, (0, l.jsx)(n, {}));
