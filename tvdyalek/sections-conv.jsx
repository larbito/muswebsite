// TVDYALEK — conversion components: PromoBar, CountUp, MarqueeStrip, DuoOffer, TrustStrip, StickyCta
const { PLANS: CONV_PLANS } = window.TVD;

/* Countdown to next midnight (daily offer) */
function PromoBar() {
  const [left, setLeft] = React.useState('');
  React.useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now); end.setHours(24, 0, 0, 0);
      const d = Math.max(0, end - now);
      const h = String(Math.floor(d / 3600000)).padStart(2, '0');
      const m = String(Math.floor((d % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((d % 60000) / 1000)).padStart(2, '0');
      setLeft(h + ':' + m + ':' + s);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="promo">
      <span>🎁 عرض اليوم: شهر إضافي هدية مع باقة السنة — ينتهي خلال</span>
      <span className="time">{left}</span>
    </div>
  );
}

/* Animated number counter, e.g. "+20,000" or "99.9%" */
function CountUp({ value }) {
  const [txt, setTxt] = React.useState(value);
  React.useEffect(() => {
    const m = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!m) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const pre = m[1], post = m[3];
    const target = parseFloat(m[2].replace(/,/g, ''));
    const decimals = (m[2].split('.')[1] || '').replace(/,/g, '').length;
    const hasSep = m[2].includes(',');
    const t0 = performance.now(), dur = 1400;
    let raf;
    const frame = (t) => {
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
  return <React.Fragment>{txt}</React.Fragment>;
}

/* Auto-scrolling strip of fresh posters (decorative, duplicated for seamless loop) */
function MarqueeStrip() {
  const posters = [
    'arab-13', 'world-08', 'arab-14', 'world-09', 'arab-15',
    'world-10', 'world-11', 'world-12', 'world-13', 'world-14', 'world-15',
  ];
  const doubled = posters.concat(posters);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((p, i) => (
          <img key={i} src={'tvdyalek/posters/sm/' + p + '.webp'} alt="" />
        ))}
      </div>
    </div>
  );
}

/* Focused 2-choice pricing — month trial vs full year */
function DuoOffer({ onOrder }) {
  const m1 = CONV_PLANS[0], m12 = CONV_PLANS[3];
  return (
    <section className="section" id="offer">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">قرارك أسهل مما تظن</div>
          <h2>جرّب شهراً.. أو اربح سنة كاملة</h2>
          <p>أغلب مشتركينا يبدؤون بشهر، ثم يعودون لباقة السنة. وفّر على نفسك الطريق.</p>
        </div>
        <div className="duo">
          <article className="duo-card reveal">
            <h3>ابدأ بالتجربة</h3>
            <div className="duo-price"><b className="grad-text">{m1.price}</b><span>درهم / شهر</span></div>
            <div className="duo-sub"></div>
            <ul>
              <li><Icon name="check" /> كل المحتوى بدون استثناء</li>
              <li><Icon name="check" /> جودة 4K حقيقية</li>
              <li><Icon name="check" /> تفعيل فوري خلال دقائق</li>
            </ul>
            <button className="btn btn-ghost" onClick={() => onOrder(m1)}>ابدأ بشهر واحد</button>
          </article>
          <article className="duo-card duo-best reveal">
            <span className="duo-flag">الخيار الذكي — وفّر 45%</span>
            <h3>سنة كاملة من الترفيه</h3>
            <div className="duo-price">
              <b className="grad-text">{m12.price}</b><span>درهم / سنة</span>
            </div>
            <div className="duo-sub">≈ 29 درهماً في الشهر فقط + شهر إضافي هدية 🎁</div>
            <ul>
              <li><Icon name="check" /> 13 شهراً بأقل من ثلث سعر الاشتراك الشهري</li>
              <li><Icon name="check" /> تفعيل التطبيق مجاناً 🎁 — خاص بباقة السنة</li>
              <li><Icon name="check" /> سيرفر احتياطي مجاني وأولوية قصوى في الدعم</li>
              <li><Icon name="check" /> سعر مجمّد — بدون أي زيادة عند التجديد</li>
            </ul>
            <button className="btn btn-primary btn-shine" onClick={() => onOrder(m12)}>اشترك سنة كاملة الآن</button>
          </article>
        </div>
        <div className="duo-guarantee reveal">
          <Icon name="shield" />
          ضمان استرداد كامل خلال يومين — إن لم تعجبك الخدمة، نعيد لك المبلغ
        </div>
      </div>
    </section>
  );
}

/* Trust badges row */
function TrustStrip() {
  return (
    <div className="trust reveal">
      <span><Icon name="bolt" /> تفعيل فوري خلال دقائق</span>
      <span><Icon name="shield" /> ضمان استرداد يومين</span>
      <span><Icon name="lock" /> دفع آمن 100%</span>
      <span><Icon name="headset" /> دعم بشري 24/7</span>
    </div>
  );
}

/* Ambient animated background: twinkling star field + drifting glow orbs */
function AmbientBg() {
  const stars = React.useMemo(() => {
    const make = (n, big) => Array.from({ length: n }, () => {
      const x = (Math.random() * 100).toFixed(2);
      const y = (Math.random() * 100).toFixed(2);
      const spread = Math.random() < 0.25 ? '1px' : '0';
      return x + 'vw ' + y + 'vh 0 ' + spread + ' var(--accent-soft)';
    }).join(', ');
    return [make(70), make(45)];
  }, []);
  return (
    <div className="ambient" aria-hidden="true">
      <i className="stars s1" style={{ boxShadow: stars[0] }}></i>
      <i className="stars s2" style={{ boxShadow: stars[1] }}></i>
      <i className="orb o1"></i>
      <i className="orb o2"></i>
      <i className="orb o3"></i>
    </div>
  );
}

/* Channel wordmark (typographic, no logo) */
function ChanPill({ name }) {
  return (
    <span className="chan"><b>{name}</b></span>
  );
}

/* Two counter-scrolling channel carousels */
function Channels() {
  const { CHANNELS_A, CHANNELS_B } = window.TVD;
  return (
    <section className="section section-alt" id="channels">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">القنوات</div>
          <h2>+60,000 قناة <span className="grad-text">من كل العالم</span></h2>
          <p>رياضة، أخبار، أفلام، مسلسلات وقنوات أطفال — عربية وعالمية بجودة تصل إلى 4K</p>
        </div>
      </div>
      <div className="chan-rail reveal">
        <div className="chan-row">
          <div className="chan-track">
            {CHANNELS_A.concat(CHANNELS_A).map(([n, t], i) => <ChanPill key={i} name={n} tag={t} />)}
          </div>
        </div>
        <div className="chan-row chan-row-rev">
          <div className="chan-track">
            {CHANNELS_B.concat(CHANNELS_B).map(([n, t], i) => <ChanPill key={i} name={n} tag={t} />)}
          </div>
        </div>
      </div>
      <div className="chan-note">وهذه مجرد عيّنة — القائمة الكاملة تضم أكثر من 60,000 قناة من كل الدول</div>
      <ChannelCats />
    </section>
  );
}

/* Mid-page CTA: 1-day trial */
function MidCtaTrial({ onOrder }) {
  const trial = window.TVD.TRIAL;
  return (
    <div className="midcta">
      <div className="wrap">
        <div className="midcta-card reveal">
          <div className="midcta-copy">
            <div className="midcta-kicker">لست متأكداً بعد؟</div>
            <h3>جرّب 24 ساعة كاملة بثمن قهوة</h3>
            <p>كل القنوات والأفلام والمسلسلات — تفعيل فوري خلال دقائق، في أي دولة</p>
          </div>
          <div className="midcta-price"><span className="grad-text">20 درهماً</span><small>لمدة 24 ساعة</small></div>
          <button className="btn btn-ghost btn-lg" onClick={() => onOrder(trial)}>جرّب الآن</button>
        </div>
      </div>
    </div>
  );
}

/* Mid-page CTA: 1-year offer */
function MidCtaYear({ onOrder }) {
  const m12 = CONV_PLANS[3];
  return (
    <div className="midcta midcta-year">
      <div className="wrap">
        <div className="midcta-card reveal">
          <div className="midcta-copy">
            <div className="midcta-kicker">العرض الأكثر طلباً — وفّر 45%</div>
            <h3>سنة كاملة + شهر هدية + تفعيل مجاني 🎁</h3>
            <p>≈ 29 درهماً في الشهر فقط — مع تفعيل التطبيق مجاناً وسعر مجمّد بدون أي زيادة عند التجديد</p>
          </div>
          <div className="midcta-price"><span className="grad-text">{m12.price} درهم</span><small>لسنة كاملة</small></div>
          <button className="btn btn-primary btn-lg btn-shine" onClick={() => onOrder(m12)}>اشترك سنة كاملة</button>
        </div>
      </div>
    </div>
  );
}

/* How it works — connected 4-step process */
function HowItWorks({ onOrder }) {
  const m1 = CONV_PLANS[0];
  const trial = window.TVD.TRIAL;
  const steps = [
    { icon: 'check', title: 'اختر باقتك', text: 'اختر المدة التي تناسبك — من تجربة يوم واحد إلى سنة كاملة.' },
    { icon: 'mail', title: 'توصلك رسالة تأكيد', text: 'نرسل لك تأكيد الطلب عبر البريد أو واتساب مع كل تفاصيل إتمام الدفع.' },
    { icon: 'lock', title: 'أتمم الدفع بأمان', text: 'اتبع التعليمات لإتمام الدفع عبر تحويل بنكي بسيط وآمن.' },
    { icon: 'headset', title: 'نساعدك في التشغيل', text: 'يتواصل معك فريقنا بعد الدفع مباشرة ليرشدك خطوة بخطوة حتى تبدأ المشاهدة.' },
  ];
  return (
    <section className="section section-alt" id="how">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">كيف تتم العملية؟</div>
          <h2>من الطلب إلى المشاهدة في <span className="grad-text">4 خطوات</span></h2>
        </div>
        <div className="how">
          {steps.map((s, i) => (
            <article className="how-item reveal" key={s.title}>
              <div className="how-top">
                <span className="how-icon"><Icon name={s.icon} /></span>
                <div>
                  <div className="how-num">الخطوة {i + 1}</div>
                  <h3>{s.title}</h3>
                </div>
              </div>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <div className="how-cta reveal">
          <button className="btn btn-primary btn-lg btn-shine" onClick={() => onOrder(m1)}>
            ابدأ بشهر واحد بـ {m1.price} درهماً
          </button>
          <span className="how-cta-alt">
            أو <button onClick={() => onOrder(trial)}>جرّب يوماً كاملاً بـ 20 درهماً فقط</button>
          </span>
        </div>
      </div>
    </section>
  );
}

/* World Cup 2026 — timely event band */
function WorldCup({ onOrder }) {
  const m12 = CONV_PLANS[3];
  const trial = window.TVD.TRIAL;
  return (
    <section className="section wc" id="worldcup">
      <div className="wrap">
        <div className="wc-card reveal">
          <div className="wc-media" aria-hidden="true">
            <img src="tvdyalek/posters/sm/worldcup-banner.webp" alt="" />
          </div>
          <div className="wc-content">
            <div className="wc-live"><span className="wc-dot"></span> المونديال انطلق اليوم</div>
            <h2 className="wc-title">كأس العالم <span className="grad-text">2026</span> كاملاً بجودة <span className="grad-text">4K</span></h2>
            <p className="wc-text">
              من حفل الافتتاح إلى النهائي يوم 19 يوليوز — تابع كل مباريات المونديال
              على القنوات الرياضية العالمية والعربية، بتعليق عربي وبدون تقطيع، أينما كنت في العالم.
            </p>
            <div className="wc-facts">
              <div className="wc-fact"><b><CountUp value="104" /></b><span>مباراة</span></div>
              <div className="wc-fact"><b><CountUp value="48" /></b><span>منتخباً</span></div>
              <div className="wc-fact"><b><CountUp value="16" /></b><span>مدينة مضيفة</span></div>
              <div className="wc-fact"><b className="wc-fact-4k"><CountUp value="4K" /></b><span>جودة البث</span></div>
            </div>
            <div className="wc-ctas">
              <button className="btn btn-primary btn-lg btn-shine" onClick={() => onOrder(m12)}>
                اشترك سنة وتابع المونديال كاملاً
              </button>
              <button className="btn btn-ghost btn-lg" onClick={() => onOrder(trial)}>
                شاهد مباراة اليوم بـ 20 درهماً
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* One-day trial banner (10 DH) */
function TrialBanner({ onOrder }) {
  const trial = window.TVD.TRIAL;
  return (
    <div className="trial reveal">
      <span className="trial-icon"><Icon name="bolt" /></span>
      <div className="trial-copy">
        <b>غير متأكد بعد؟ جرّب يوماً كاملاً</b>
        <span>كل القنوات والمحتوى بجودة 4K — تفعيل فوري خلال دقائق</span>
      </div>
      <div className="trial-price"><span className="grad-text">20</span> <small>درهماً / 24 ساعة</small></div>
      <button className="btn btn-ghost" onClick={() => onOrder(trial)}>اطلب تجربة اليوم</button>
    </div>
  );
}

/* Mobile sticky CTA */
function StickyCta({ onOrder }) {
  return (
    <div className="sticky-cta">
      <div>
        <strong>باقات تبدأ من 99 درهماً</strong>
        <small>تفعيل فوري + ضمان يومين</small>
      </div>
      <button className="btn btn-primary" onClick={() => onOrder()}>اشترك الآن</button>
    </div>
  );
}

Object.assign(window, { PromoBar, CountUp, MarqueeStrip, DuoOffer, TrustStrip, StickyCta, TrialBanner, AmbientBg, Channels, MidCtaTrial, MidCtaYear, HowItWorks, WorldCup });
