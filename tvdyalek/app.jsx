// TVDYALEK — App root: theme tweaks + page assembly
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "gold",
  "headFont": "Changa",
  "radius": 16,
  "promo": true,
  "ambient": true
}/*EDITMODE-END*/;

const THEME_LABELS = { "ذهبي": "gold", "أحمر": "red", "بنفسجي": "violet" };
const THEME_NAMES = { gold: "ذهبي", red: "أحمر", violet: "بنفسجي" };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [order, setOrder] = React.useState(null); // null | {plan?}

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
    const showAll = () => els.forEach((el) => el.classList.add('in'));
    if (!('IntersectionObserver' in window)) { showAll(); return; }
    let ioFired = false;
    const io = new IntersectionObserver((entries) => {
      ioFired = true;
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    // IO always delivers an initial batch; if nothing arrives, reveal everything.
    const timer = setTimeout(() => { if (!ioFired) showAll(); }, 700);
    return () => { clearTimeout(timer); io.disconnect(); };
  }, []);

  const openOrder = (plan) => setOrder({ plan: plan || null });

  return (
    <React.Fragment>
      {t.ambient && <AmbientBg />}
      {t.promo && <PromoBar />}
      <Nav onOrder={openOrder} />
      <Hero onOrder={openOrder} />
      <LeagueLogos />
      <Pricing onOrder={openOrder} />
      <Channels />
      <WorldCup onOrder={openOrder} />
      <DuoOffer onOrder={openOrder} />
      <Showcase />
      <Features />
      <HowItWorks onOrder={openOrder} />
      <MidCtaTrial onOrder={openOrder} />
      <Devices />
      <Reasons />
      <MidCtaYear onOrder={openOrder} />
      <Quotes />
      <Faq />
      <CtaBand onOrder={openOrder} />
      <Footer />
      <WhatsAppFloat />
      <StickyCta onOrder={openOrder} />
      <ScrollNudge onOrder={openOrder} />
      <BackToTop />
      {order && <Checkout plan={order.plan} onClose={() => setOrder(null)} />}

      <TweaksPanel>
        <TweakSection label="الهوية البصرية" />
        <TweakRadio
          label="الثيم"
          value={THEME_NAMES[t.theme]}
          options={["ذهبي", "أحمر", "بنفسجي"]}
          onChange={(v) => setTweak('theme', THEME_LABELS[v])}
        />
        <TweakRadio
          label="خط العناوين"
          value={t.headFont}
          options={["Changa", "El Messiri", "Cairo"]}
          onChange={(v) => setTweak('headFont', v)}
        />
        <TweakSlider
          label="استدارة الزوايا"
          value={t.radius} min={4} max={28} unit="px"
          onChange={(v) => setTweak('radius', v)}
        />
        <TweakSection label="عناصر التحويل" />
        <TweakToggle
          label="شريط العرض + العداد التنازلي"
          value={t.promo}
          onChange={(v) => setTweak('promo', v)}
        />
        <TweakToggle
          label="خلفية متحركة (نجوم + توهج)"
          value={t.ambient}
          onChange={(v) => setTweak('ambient', v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
