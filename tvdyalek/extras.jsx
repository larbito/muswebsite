// TVDYALEK — extras: payment logos, legal modal, channel categories, scroll nudge, back-to-top
const WA_NUMBER = '212714561749';
const WA_LINK = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('مرحباً 👋 أريد الاشتراك في TVDYALEK، هل يمكنكم مساعدتي؟');

/* ---------- Payment method (bank transfer only) ---------- */
function PayLogos({ compact }) {
  return (
    <div className={'pay-logos' + (compact ? ' pay-logos-sm' : '')} aria-label="طريقة الدفع">
      <span className="pay-logo pay-logo-txt" title="تحويل بنكي"><Icon name="bank" /> تحويل بنكي</span>
    </div>
  );
}

/* ---------- Accepted payment methods (logos) ---------- */
const PAY_METHODS = [
  { src: 'tvdyalek/pay/baridbank.jpg', name: 'Barid Bank' },
  { src: 'tvdyalek/pay/cih.jpg', name: 'CIH Bank' },
  { src: 'tvdyalek/pay/cashplus.jpg', name: 'Cash Plus' },
  { src: 'tvdyalek/pay/wafacash.jpg', name: 'Wafacash' },
];
function PayMethods({ label }) {
  return (
    <div className="pay-methods-block">
      {label && <div className="pay-methods-label">{label}</div>}
      <div className="pay-methods">
        {PAY_METHODS.map((p) => (
          <span className="pay-chip" key={p.name} title={p.name}>
            <img src={p.src} alt={p.name} loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Legal modal (terms / refund / privacy) ---------- */
const LEGAL = {
  terms: {
    title: 'شروط الاستخدام',
    body: [
      'باشتراكك في خدمة TVDYALEK فأنت توافق على هذه الشروط. الاشتراك شخصي ولا يجوز إعادة بيعه أو مشاركته خارج الأجهزة المسموح بها في باقتك.',
      'تلتزم TVDYALEK بتوفير الخدمة على مدار الساعة، مع إمكانية انقطاعات قصيرة للصيانة. في حال توقف الخدمة لأسباب تقنية من جهتنا لمدة تتجاوز 48 ساعة، يتم تعويض المدة في اشتراكك.',
      'الأسعار المعروضة نهائية وتُدفع مرة واحدة عن مدة الاشتراك — لا يوجد أي تجديد تلقائي أو رسوم خفية.',
      'يحق لنا إيقاف أي اشتراك يُستخدم بشكل مسيء (إعادة البث، البيع، محاولات الاختراق) دون تعويض.',
    ],
  },
  refund: {
    title: 'سياسة الاسترداد',
    body: [
      'نوفر ضمان استرداد كامل خلال يومين من تاريخ التفعيل على باقات 3 أشهر فما فوق، إذا لم تكن راضياً عن الخدمة لأي سبب.',
      'لطلب الاسترداد، تواصل معنا عبر واتساب مع ذكر رقم طلبك. تتم إعادة المبلغ بنفس طريقة الدفع خلال 3 إلى 5 أيام عمل.',
      'تجربة اليوم الواحد والباقة الشهرية غير قابلة للاسترداد نظراً لطبيعتها التجريبية وثمنها الرمزي.',
      'في حال وجود مشكلة تقنية، ننصح بالتواصل مع الدعم أولاً — أغلب المشاكل تُحل في دقائق.',
    ],
  },
  privacy: {
    title: 'سياسة الخصوصية',
    body: [
      'نجمع الحد الأدنى من المعلومات اللازمة لتفعيل اشتراكك: الاسم ورقم الواتساب. لا نطلب أبداً معلومات حساسة غير ضرورية.',
      'معلومات الدفع تتم معالجتها عبر بوابات دفع مشفّرة وآمنة — نحن لا نخزن أرقام البطاقات البنكية إطلاقاً.',
      'لا نشارك بياناتك مع أي طرف ثالث، ولا نستخدمها إلا للتواصل معك بخصوص اشتراكك.',
      'يمكنك في أي وقت طلب حذف بياناتك نهائياً بمراسلتنا على واتساب.',
    ],
  },
};

function LegalModal({ doc, onClose }) {
  const d = LEGAL[doc];
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!d) return null;
  return (
    <div className="modal-veil" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-head">
          <h3>{d.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="إغلاق"><Icon name="close" /></button>
        </div>
        <div className="modal-body legal-body">
          {d.body.map((p, i) => <p key={i}>{p}</p>)}
          <p className="legal-note">آخر تحديث: يونيو 2026 — لأي استفسار، تواصل معنا عبر واتساب.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Channel categories breakdown ---------- */
function ChannelCats() {
  // Counts add up to the headline totals used across the site:
  // channels 12k+40k+3k+5k = 60,000 · VOD 70k+50k = 120,000
  const cats = [
    { icon: 'trophy', num: '+12,000', label: 'قناة رياضية مباشرة' },
    { icon: 'tv', num: '+40,000', label: 'قناة عربية وعالمية' },
    { icon: 'kids', num: '+3,000', label: 'قناة أطفال وعائلة' },
    { icon: 'shield', num: '+5,000', label: 'قناة أخبار ووثائقيات' },
    { icon: 'film', num: '+70,000', label: 'فيلم ومحتوى سينمائي' },
    { icon: 'series', num: '+50,000', label: 'حلقة مسلسلات وعروض' },
  ];
  return (
    <div className="wrap">
      <div className="chan-cats reveal">
        {cats.map((c) => (
          <div className="chan-cat" key={c.label}>
            <span className="chan-cat-ic"><Icon name={c.icon} /></span>
            <b className="chan-cat-num">{c.num}</b>
            <span className="chan-cat-label">{c.label}</span>
          </div>
        ))}
      </div>
      <div className="chan-cats-note">كل التصنيفات متوفرة في جميع الباقات — بدون أي زيادة في السعر</div>
    </div>
  );
}

/* ---------- Scroll-triggered trial nudge (once per session) ---------- */
function ScrollNudge({ onOrder }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    if (sessionStorage.getItem('tvd_nudge_v1')) return;
    const target = document.getElementById('content');
    if (!target) return;
    const onScroll = () => {
      if (window.scrollY > target.offsetTop) {
        sessionStorage.setItem('tvd_nudge_v1', '1');
        setShow(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="nudge" role="status">
      <button className="nudge-close" onClick={() => setShow(false)} aria-label="إغلاق"><Icon name="close" /></button>
      <b>ما زلت متردداً؟</b>
      <p>جرّب الخدمة كاملة ليوم واحد بـ <span className="grad-text">20 درهماً</span> فقط — بدون أي التزام.</p>
      <button className="btn btn-primary" onClick={() => { setShow(false); onOrder(window.TVD.TRIAL); }}>
        اطلب تجربة اليوم
      </button>
    </div>
  );
}

/* ---------- Sports leagues logo strip ---------- */
function LeagueLogos() {
  const logos = [
    { src: 'tvdyalek/logos/league-b.webp', name: 'Premier League' },
    { src: 'tvdyalek/logos/laliga.svg', name: 'LaLiga' },
    { src: 'tvdyalek/logos/champions-league.png', name: 'UEFA Champions League' },
    { src: 'tvdyalek/logos/europa-league.png', name: 'UEFA Europa League' },
    { src: 'tvdyalek/logos/conference-league.png', name: 'UEFA Conference League' },
    { src: 'tvdyalek/logos/bundesliga.webp', name: 'Bundesliga' },
    { src: 'tvdyalek/logos/ligue1.png', name: 'Ligue 1' },
    { src: 'tvdyalek/logos/nba.webp', name: 'NBA' },
  ];
  return (
    <section className="section leagues" id="leagues">
      <div className="wrap">
        <div className="leagues-kicker reveal">أقوى البطولات الرياضية في مكان واحد</div>
        <div className="leagues-row reveal">
          {logos.map((l) => (
            <span className="league-logo" key={l.name} title={l.name}>
              {/* hide a tile if its logo file isn't present yet */}
              <img src={l.src} alt={l.name} loading="lazy"
                   onError={(e) => { e.currentTarget.closest('.league-logo').style.display = 'none'; }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Back to top ---------- */
function BackToTop() {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      className={'to-top' + (on ? ' on' : '')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="العودة إلى الأعلى"
      title="العودة إلى الأعلى"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 14 7-7 7 7"></path><path d="M12 7v13"></path></svg>
    </button>
  );
}

Object.assign(window, { PayLogos, PayMethods, LegalModal, ChannelCats, ScrollNudge, BackToTop, WA_LINK, LeagueLogos });
