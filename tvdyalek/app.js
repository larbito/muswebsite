(function () {
// TVDYALEK — App root: theme tweaks + page assembly
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "gold",
  "headFont": "Changa",
  "radius": 16,
  "promo": true,
  "ambient": true
} /*EDITMODE-END*/;
const THEME_LABELS = {
  "ذهبي": "gold",
  "أحمر": "red",
  "بنفسجي": "violet"
};
const THEME_NAMES = {
  gold: "ذهبي",
  red: "أحمر",
  violet: "بنفسجي"
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to :root
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = t.theme;
    root.style.setProperty('--radius', t.radius + 'px');
    root.style.setProperty('--font-head', `'${t.headFont}', sans-serif`);
  }, [t.theme, t.radius, t.headFont]);

  // Scroll reveal — with fallback when IntersectionObserver doesn't fire (some embeds)
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    const showAll = () => els.forEach(el => el.classList.add('in'));
    if (!('IntersectionObserver' in window)) {
      showAll();
      return;
    }
    let ioFired = false;
    const io = new IntersectionObserver(entries => {
      ioFired = true;
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach(el => io.observe(el));
    // IO always delivers an initial batch; if nothing arrives, reveal everything.
    const timer = setTimeout(() => {
      if (!ioFired) showAll();
    }, 700);
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  // Checkout is now a dedicated page (not a modal). Carry the chosen plan via ?plan=
  const openOrder = plan => {
    window.location.href = 'checkout.html' + (plan && plan.id ? '?plan=' + encodeURIComponent(plan.id) : '');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, t.ambient && /*#__PURE__*/React.createElement(AmbientBg, null), t.promo && /*#__PURE__*/React.createElement(PromoBar, null), /*#__PURE__*/React.createElement(Nav, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(Hero, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(LeagueLogos, null), /*#__PURE__*/React.createElement(Pricing, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(Channels, null), /*#__PURE__*/React.createElement(WorldCup, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(DuoOffer, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(Showcase, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(HowItWorks, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(MidCtaTrial, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(Devices, null), /*#__PURE__*/React.createElement(Reasons, null), /*#__PURE__*/React.createElement(MidCtaYear, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(Quotes, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(CtaBand, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(WhatsAppFloat, null), /*#__PURE__*/React.createElement(StickyCta, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(ScrollNudge, {
    onOrder: openOrder
  }), /*#__PURE__*/React.createElement(BackToTop, null), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0628\u0635\u0631\u064A\u0629"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\u0627\u0644\u062B\u064A\u0645",
    value: THEME_NAMES[t.theme],
    options: ["ذهبي", "أحمر", "بنفسجي"],
    onChange: v => setTweak('theme', THEME_LABELS[v])
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\u062E\u0637 \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646",
    value: t.headFont,
    options: ["Changa", "El Messiri", "Cairo"],
    onChange: v => setTweak('headFont', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "\u0627\u0633\u062A\u062F\u0627\u0631\u0629 \u0627\u0644\u0632\u0648\u0627\u064A\u0627",
    value: t.radius,
    min: 4,
    max: 28,
    unit: "px",
    onChange: v => setTweak('radius', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\u0634\u0631\u064A\u0637 \u0627\u0644\u0639\u0631\u0636 + \u0627\u0644\u0639\u062F\u0627\u062F \u0627\u0644\u062A\u0646\u0627\u0632\u0644\u064A",
    value: t.promo,
    onChange: v => setTweak('promo', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\u062E\u0644\u0641\u064A\u0629 \u0645\u062A\u062D\u0631\u0643\u0629 (\u0646\u062C\u0648\u0645 + \u062A\u0648\u0647\u062C)",
    value: t.ambient,
    onChange: v => setTweak('ambient', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
