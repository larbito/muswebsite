(function () {
// TVDYALEK — conversion components: PromoBar, CountUp, MarqueeStrip, DuoOffer, TrustStrip, StickyCta
const {
  PLANS: CONV_PLANS
} = window.TVD;

/* Countdown to next midnight (daily offer) */
function PromoBar() {
  const [left, setLeft] = React.useState('');
  React.useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      const d = Math.max(0, end - now);
      const h = String(Math.floor(d / 3600000)).padStart(2, '0');
      const m = String(Math.floor(d % 3600000 / 60000)).padStart(2, '0');
      const s = String(Math.floor(d % 60000 / 1000)).padStart(2, '0');
      setLeft(h + ':' + m + ':' + s);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "promo"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF81 \u0639\u0631\u0636 \u0627\u0644\u064A\u0648\u0645: \u0634\u0647\u0631 \u0625\u0636\u0627\u0641\u064A \u0647\u062F\u064A\u0629 \u0645\u0639 \u0628\u0627\u0642\u0629 \u0627\u0644\u0633\u0646\u0629 \u2014 \u064A\u0646\u062A\u0647\u064A \u062E\u0644\u0627\u0644"), /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, left));
}

/* Animated number counter, e.g. "+20,000" or "99.9%" */
function CountUp({
  value
}) {
  const [txt, setTxt] = React.useState(value);
  React.useEffect(() => {
    const m = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!m) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const pre = m[1],
      post = m[3];
    const target = parseFloat(m[2].replace(/,/g, ''));
    const decimals = (m[2].split('.')[1] || '').replace(/,/g, '').length;
    const hasSep = m[2].includes(',');
    const t0 = performance.now(),
      dur = 1400;
    let raf;
    const frame = t => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      let n = (target * eased).toFixed(decimals);
      if (hasSep) n = Number(n).toLocaleString('en-US');
      setTxt(pre + n + post);
      if (p < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, txt);
}

/* Auto-scrolling strip of fresh posters (decorative, duplicated for seamless loop) */
function MarqueeStrip() {
  const posters = ['arab-13', 'world-08', 'arab-14', 'world-09', 'arab-15', 'world-10', 'world-11', 'world-12', 'world-13', 'world-14', 'world-15'];
  const doubled = posters.concat(posters);
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, doubled.map((p, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: 'tvdyalek/posters/sm/' + p + '.webp',
    alt: ""
  }))));
}

/* Focused 2-choice pricing — month trial vs full year */
function DuoOffer({
  onOrder
}) {
  const m1 = CONV_PLANS[0],
    m12 = CONV_PLANS[3];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "offer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0642\u0631\u0627\u0631\u0643 \u0623\u0633\u0647\u0644 \u0645\u0645\u0627 \u062A\u0638\u0646"), /*#__PURE__*/React.createElement("h2", null, "\u062C\u0631\u0651\u0628 \u0634\u0647\u0631\u0627\u064B.. \u0623\u0648 \u0627\u0631\u0628\u062D \u0633\u0646\u0629 \u0643\u0627\u0645\u0644\u0629"), /*#__PURE__*/React.createElement("p", null, "\u0623\u063A\u0644\u0628 \u0645\u0634\u062A\u0631\u0643\u064A\u0646\u0627 \u064A\u0628\u062F\u0624\u0648\u0646 \u0628\u0634\u0647\u0631\u060C \u062B\u0645 \u064A\u0639\u0648\u062F\u0648\u0646 \u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0633\u0646\u0629. \u0648\u0641\u0651\u0631 \u0639\u0644\u0649 \u0646\u0641\u0633\u0643 \u0627\u0644\u0637\u0631\u064A\u0642.")), /*#__PURE__*/React.createElement("div", {
    className: "duo"
  }, /*#__PURE__*/React.createElement("article", {
    className: "duo-card reveal"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0627\u0628\u062F\u0623 \u0628\u0627\u0644\u062A\u062C\u0631\u0628\u0629"), /*#__PURE__*/React.createElement("div", {
    className: "duo-price"
  }, /*#__PURE__*/React.createElement("b", {
    className: "grad-text"
  }, m1.price), /*#__PURE__*/React.createElement("span", null, "\u062F\u0631\u0647\u0645 / \u0634\u0647\u0631")), /*#__PURE__*/React.createElement("div", {
    className: "duo-sub"
  }), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " \u0643\u0644 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0628\u062F\u0648\u0646 \u0627\u0633\u062A\u062B\u0646\u0627\u0621"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " \u062C\u0648\u062F\u0629 4K \u062D\u0642\u064A\u0642\u064A\u0629"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " \u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => onOrder(m1)
  }, "\u0627\u0628\u062F\u0623 \u0628\u0634\u0647\u0631 \u0648\u0627\u062D\u062F")), /*#__PURE__*/React.createElement("article", {
    className: "duo-card duo-best reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "duo-flag"
  }, "\u0627\u0644\u062E\u064A\u0627\u0631 \u0627\u0644\u0630\u0643\u064A \u2014 \u0648\u0641\u0651\u0631 45%"), /*#__PURE__*/React.createElement("h3", null, "\u0633\u0646\u0629 \u0643\u0627\u0645\u0644\u0629 \u0645\u0646 \u0627\u0644\u062A\u0631\u0641\u064A\u0647"), /*#__PURE__*/React.createElement("div", {
    className: "duo-price"
  }, /*#__PURE__*/React.createElement("b", {
    className: "grad-text"
  }, m12.price), /*#__PURE__*/React.createElement("span", null, "\u062F\u0631\u0647\u0645 / \u0633\u0646\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "duo-sub"
  }, "\u2248 29 \u062F\u0631\u0647\u0645\u0627\u064B \u0641\u064A \u0627\u0644\u0634\u0647\u0631 \u0641\u0642\u0637 + \u0634\u0647\u0631 \u0625\u0636\u0627\u0641\u064A \u0647\u062F\u064A\u0629 \uD83C\uDF81"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " 13 \u0634\u0647\u0631\u0627\u064B \u0628\u0623\u0642\u0644 \u0645\u0646 \u062B\u0644\u062B \u0633\u0639\u0631 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0627\u0644\u0634\u0647\u0631\u064A"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " \u0633\u064A\u0631\u0641\u0631 \u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0645\u062C\u0627\u0646\u064A \u0648\u0623\u0648\u0644\u0648\u064A\u0629 \u0642\u0635\u0648\u0649 \u0641\u064A \u0627\u0644\u062F\u0639\u0645"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " \u0633\u0639\u0631 \u0645\u062C\u0645\u0651\u062F \u2014 \u0628\u062F\u0648\u0646 \u0623\u064A \u0632\u064A\u0627\u062F\u0629 \u0639\u0646\u062F \u0627\u0644\u062A\u062C\u062F\u064A\u062F")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-shine",
    onClick: () => onOrder(m12)
  }, "\u0627\u0634\u062A\u0631\u0643 \u0633\u0646\u0629 \u0643\u0627\u0645\u0644\u0629 \u0627\u0644\u0622\u0646"))), /*#__PURE__*/React.createElement("div", {
    className: "duo-guarantee reveal"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield"
  }), "\u0636\u0645\u0627\u0646 \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u0643\u0627\u0645\u0644 \u062E\u0644\u0627\u0644 \u064A\u0648\u0645\u064A\u0646 \u2014 \u0625\u0646 \u0644\u0645 \u062A\u0639\u062C\u0628\u0643 \u0627\u0644\u062E\u062F\u0645\u0629\u060C \u0646\u0639\u064A\u062F \u0644\u0643 \u0627\u0644\u0645\u0628\u0644\u063A")));
}

/* Trust badges row */
function TrustStrip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "trust reveal"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  }), " \u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "shield"
  }), " \u0636\u0645\u0627\u0646 \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u064A\u0648\u0645\u064A\u0646"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "lock"
  }), " \u062F\u0641\u0639 \u0622\u0645\u0646 100%"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "headset"
  }), " \u062F\u0639\u0645 \u0628\u0634\u0631\u064A 24/7"));
}

/* Ambient animated background: twinkling star field + drifting glow orbs */
function AmbientBg() {
  const stars = React.useMemo(() => {
    const make = (n, big) => Array.from({
      length: n
    }, () => {
      const x = (Math.random() * 100).toFixed(2);
      const y = (Math.random() * 100).toFixed(2);
      const spread = Math.random() < 0.25 ? '1px' : '0';
      return x + 'vw ' + y + 'vh 0 ' + spread + ' var(--accent-soft)';
    }).join(', ');
    return [make(70), make(45)];
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ambient",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "stars s1",
    style: {
      boxShadow: stars[0]
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "stars s2",
    style: {
      boxShadow: stars[1]
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "orb o1"
  }), /*#__PURE__*/React.createElement("i", {
    className: "orb o2"
  }), /*#__PURE__*/React.createElement("i", {
    className: "orb o3"
  }));
}

/* Channel wordmark (typographic, no logo) */
function ChanPill({
  name
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "chan"
  }, /*#__PURE__*/React.createElement("b", null, name));
}

/* Two counter-scrolling channel carousels */
function Channels() {
  const {
    CHANNELS_A,
    CHANNELS_B
  } = window.TVD;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "channels"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0627\u0644\u0642\u0646\u0648\u0627\u062A"), /*#__PURE__*/React.createElement("h2", null, "+60,000 \u0642\u0646\u0627\u0629 ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "\u0645\u0646 \u0643\u0644 \u0627\u0644\u0639\u0627\u0644\u0645")), /*#__PURE__*/React.createElement("p", null, "\u0631\u064A\u0627\u0636\u0629\u060C \u0623\u062E\u0628\u0627\u0631\u060C \u0623\u0641\u0644\u0627\u0645\u060C \u0645\u0633\u0644\u0633\u0644\u0627\u062A \u0648\u0642\u0646\u0648\u0627\u062A \u0623\u0637\u0641\u0627\u0644 \u2014 \u0639\u0631\u0628\u064A\u0629 \u0648\u0639\u0627\u0644\u0645\u064A\u0629 \u0628\u062C\u0648\u062F\u0629 \u062A\u0635\u0644 \u0625\u0644\u0649 4K"))), /*#__PURE__*/React.createElement("div", {
    className: "chan-rail reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chan-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chan-track"
  }, CHANNELS_A.concat(CHANNELS_A).map(([n, t], i) => /*#__PURE__*/React.createElement(ChanPill, {
    key: i,
    name: n,
    tag: t
  })))), /*#__PURE__*/React.createElement("div", {
    className: "chan-row chan-row-rev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chan-track"
  }, CHANNELS_B.concat(CHANNELS_B).map(([n, t], i) => /*#__PURE__*/React.createElement(ChanPill, {
    key: i,
    name: n,
    tag: t
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "chan-note"
  }, "\u0648\u0647\u0630\u0647 \u0645\u062C\u0631\u062F \u0639\u064A\u0651\u0646\u0629 \u2014 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u062A\u0636\u0645 \u0623\u0643\u062B\u0631 \u0645\u0646 60,000 \u0642\u0646\u0627\u0629 \u0645\u0646 \u0643\u0644 \u0627\u0644\u062F\u0648\u0644"), /*#__PURE__*/React.createElement(ChannelCats, null));
}

/* Mid-page CTA: 1-day trial */
function MidCtaTrial({
  onOrder
}) {
  const trial = window.TVD.TRIAL;
  return /*#__PURE__*/React.createElement("div", {
    className: "midcta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "midcta-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "midcta-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "midcta-kicker"
  }, "\u0644\u0633\u062A \u0645\u062A\u0623\u0643\u062F\u0627\u064B \u0628\u0639\u062F\u061F"), /*#__PURE__*/React.createElement("h3", null, "\u062C\u0631\u0651\u0628 24 \u0633\u0627\u0639\u0629 \u0643\u0627\u0645\u0644\u0629 \u0628\u062B\u0645\u0646 \u0642\u0647\u0648\u0629"), /*#__PURE__*/React.createElement("p", null, "\u0643\u0644 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A \u2014 \u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642\u060C \u0641\u064A \u0623\u064A \u062F\u0648\u0644\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "midcta-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "20 \u062F\u0631\u0647\u0645\u0627\u064B"), /*#__PURE__*/React.createElement("small", null, "\u0644\u0645\u062F\u0629 24 \u0633\u0627\u0639\u0629")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-lg",
    onClick: () => onOrder(trial)
  }, "\u062C\u0631\u0651\u0628 \u0627\u0644\u0622\u0646"))));
}

/* Mid-page CTA: 1-year offer */
function MidCtaYear({
  onOrder
}) {
  const m12 = CONV_PLANS[3];
  return /*#__PURE__*/React.createElement("div", {
    className: "midcta midcta-year"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "midcta-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "midcta-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "midcta-kicker"
  }, "\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B \u2014 \u0648\u0641\u0651\u0631 45%"), /*#__PURE__*/React.createElement("h3", null, "\u0633\u0646\u0629 \u0643\u0627\u0645\u0644\u0629 + \u0634\u0647\u0631 \u0647\u062F\u064A\u0629 \uD83C\uDF81"), /*#__PURE__*/React.createElement("p", null, "\u2248 33 \u062F\u0631\u0647\u0645\u0627\u064B \u0641\u064A \u0627\u0644\u0634\u0647\u0631 \u0641\u0642\u0637 \u2014 \u0633\u0639\u0631 \u0645\u062C\u0645\u0651\u062F \u0628\u062F\u0648\u0646 \u0623\u064A \u0632\u064A\u0627\u062F\u0629 \u0639\u0646\u062F \u0627\u0644\u062A\u062C\u062F\u064A\u062F")), /*#__PURE__*/React.createElement("div", {
    className: "midcta-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, m12.price, " \u062F\u0631\u0647\u0645"), /*#__PURE__*/React.createElement("small", null, "\u0644\u0633\u0646\u0629 \u0643\u0627\u0645\u0644\u0629")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-shine",
    onClick: () => onOrder(m12)
  }, "\u0627\u0634\u062A\u0631\u0643 \u0633\u0646\u0629 \u0643\u0627\u0645\u0644\u0629"))));
}

/* How it works — connected 4-step process */
function HowItWorks({
  onOrder
}) {
  const m1 = CONV_PLANS[0];
  const trial = window.TVD.TRIAL;
  const steps = [{
    icon: 'check',
    title: 'اختر باقتك',
    text: 'اختر المدة التي تناسبك — من تجربة يوم واحد إلى سنة كاملة.'
  }, {
    icon: 'mail',
    title: 'توصلك رسالة تأكيد',
    text: 'نرسل لك تأكيد الطلب عبر البريد أو واتساب مع كل تفاصيل إتمام الدفع.'
  }, {
    icon: 'lock',
    title: 'أتمم الدفع بأمان',
    text: 'اتبع التعليمات لإتمام الدفع عبر تحويل بنكي بسيط وآمن.'
  }, {
    icon: 'headset',
    title: 'نساعدك في التشغيل',
    text: 'يتواصل معك فريقنا بعد الدفع مباشرة ليرشدك خطوة بخطوة حتى تبدأ المشاهدة.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0643\u064A\u0641 \u062A\u062A\u0645 \u0627\u0644\u0639\u0645\u0644\u064A\u0629\u061F"), /*#__PURE__*/React.createElement("h2", null, "\u0645\u0646 \u0627\u0644\u0637\u0644\u0628 \u0625\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629 \u0641\u064A ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "4 \u062E\u0637\u0648\u0627\u062A"))), /*#__PURE__*/React.createElement("div", {
    className: "how"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("article", {
    className: "how-item reveal",
    key: s.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "how-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "how-num"
  }, "\u0627\u0644\u062E\u0637\u0648\u0629 ", i + 1), /*#__PURE__*/React.createElement("h3", null, s.title))), /*#__PURE__*/React.createElement("p", null, s.text)))), /*#__PURE__*/React.createElement("div", {
    className: "how-cta reveal"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-shine",
    onClick: () => onOrder(m1)
  }, "\u0627\u0628\u062F\u0623 \u0628\u0634\u0647\u0631 \u0648\u0627\u062D\u062F \u0628\u0640 ", m1.price, " \u062F\u0631\u0647\u0645\u0627\u064B"), /*#__PURE__*/React.createElement("span", {
    className: "how-cta-alt"
  }, "\u0623\u0648 ", /*#__PURE__*/React.createElement("button", {
    onClick: () => onOrder(trial)
  }, "\u062C\u0631\u0651\u0628 \u064A\u0648\u0645\u0627\u064B \u0643\u0627\u0645\u0644\u0627\u064B \u0628\u0640 20 \u062F\u0631\u0647\u0645\u0627\u064B \u0641\u0642\u0637")))));
}

/* World Cup 2026 — timely event band */
function WorldCup({
  onOrder
}) {
  const m12 = CONV_PLANS[3];
  const trial = window.TVD.TRIAL;
  return /*#__PURE__*/React.createElement("section", {
    className: "section wc",
    id: "worldcup"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wc-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wc-media",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "tvdyalek/posters/sm/worldcup-banner.webp",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "wc-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wc-live"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wc-dot"
  }), " \u0627\u0644\u0645\u0648\u0646\u062F\u064A\u0627\u0644 \u0627\u0646\u0637\u0644\u0642 \u0627\u0644\u064A\u0648\u0645"), /*#__PURE__*/React.createElement("h2", {
    className: "wc-title"
  }, "\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "2026"), " \u0643\u0627\u0645\u0644\u0627\u064B \u0628\u062C\u0648\u062F\u0629 ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "4K")), /*#__PURE__*/React.createElement("p", {
    className: "wc-text"
  }, "\u0645\u0646 \u062D\u0641\u0644 \u0627\u0644\u0627\u0641\u062A\u062A\u0627\u062D \u0625\u0644\u0649 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u064A\u0648\u0645 19 \u064A\u0648\u0644\u064A\u0648\u0632 \u2014 \u062A\u0627\u0628\u0639 \u0643\u0644 \u0645\u0628\u0627\u0631\u064A\u0627\u062A \u0627\u0644\u0645\u0648\u0646\u062F\u064A\u0627\u0644 \u0639\u0644\u0649 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u060C \u0628\u062A\u0639\u0644\u064A\u0642 \u0639\u0631\u0628\u064A \u0648\u0628\u062F\u0648\u0646 \u062A\u0642\u0637\u064A\u0639\u060C \u0623\u064A\u0646\u0645\u0627 \u0643\u0646\u062A \u0641\u064A \u0627\u0644\u0639\u0627\u0644\u0645."), /*#__PURE__*/React.createElement("div", {
    className: "wc-facts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wc-fact"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(CountUp, {
    value: "104"
  })), /*#__PURE__*/React.createElement("span", null, "\u0645\u0628\u0627\u0631\u0627\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "wc-fact"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(CountUp, {
    value: "48"
  })), /*#__PURE__*/React.createElement("span", null, "\u0645\u0646\u062A\u062E\u0628\u0627\u064B")), /*#__PURE__*/React.createElement("div", {
    className: "wc-fact"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(CountUp, {
    value: "16"
  })), /*#__PURE__*/React.createElement("span", null, "\u0645\u062F\u064A\u0646\u0629 \u0645\u0636\u064A\u0641\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "wc-fact"
  }, /*#__PURE__*/React.createElement("b", {
    className: "wc-fact-4k"
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: "4K"
  })), /*#__PURE__*/React.createElement("span", null, "\u062C\u0648\u062F\u0629 \u0627\u0644\u0628\u062B"))), /*#__PURE__*/React.createElement("div", {
    className: "wc-ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-shine",
    onClick: () => onOrder(m12)
  }, "\u0627\u0634\u062A\u0631\u0643 \u0633\u0646\u0629 \u0648\u062A\u0627\u0628\u0639 \u0627\u0644\u0645\u0648\u0646\u062F\u064A\u0627\u0644 \u0643\u0627\u0645\u0644\u0627\u064B"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-lg",
    onClick: () => onOrder(trial)
  }, "\u0634\u0627\u0647\u062F \u0645\u0628\u0627\u0631\u0627\u0629 \u0627\u0644\u064A\u0648\u0645 \u0628\u0640 20 \u062F\u0631\u0647\u0645\u0627\u064B"))))));
}

/* One-day trial banner (10 DH) */
function TrialBanner({
  onOrder
}) {
  const trial = window.TVD.TRIAL;
  return /*#__PURE__*/React.createElement("div", {
    className: "trial reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "trial-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  })), /*#__PURE__*/React.createElement("div", {
    className: "trial-copy"
  }, /*#__PURE__*/React.createElement("b", null, "\u063A\u064A\u0631 \u0645\u062A\u0623\u0643\u062F \u0628\u0639\u062F\u061F \u062C\u0631\u0651\u0628 \u064A\u0648\u0645\u0627\u064B \u0643\u0627\u0645\u0644\u0627\u064B"), /*#__PURE__*/React.createElement("span", null, "\u0643\u0644 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0628\u062C\u0648\u062F\u0629 4K \u2014 \u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642")), /*#__PURE__*/React.createElement("div", {
    className: "trial-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "20"), " ", /*#__PURE__*/React.createElement("small", null, "\u062F\u0631\u0647\u0645\u0627\u064B / 24 \u0633\u0627\u0639\u0629")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => onOrder(trial)
  }, "\u0627\u0637\u0644\u0628 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u064A\u0648\u0645"));
}

/* Mobile sticky CTA */
function StickyCta({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sticky-cta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\u0628\u0627\u0642\u0627\u062A \u062A\u0628\u062F\u0623 \u0645\u0646 99 \u062F\u0631\u0647\u0645\u0627\u064B"), /*#__PURE__*/React.createElement("small", null, "\u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A + \u0636\u0645\u0627\u0646 \u064A\u0648\u0645\u064A\u0646")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onOrder()
  }, "\u0627\u0634\u062A\u0631\u0643 \u0627\u0644\u0622\u0646"));
}
Object.assign(window, {
  PromoBar,
  CountUp,
  MarqueeStrip,
  DuoOffer,
  TrustStrip,
  StickyCta,
  TrialBanner,
  AmbientBg,
  Channels,
  MidCtaTrial,
  MidCtaYear,
  HowItWorks,
  WorldCup
});
})();
