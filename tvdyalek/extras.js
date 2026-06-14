(function () {
// TVDYALEK — extras: payment logos, legal modal, channel categories, scroll nudge, back-to-top
const WA_NUMBER = '212714561749';
const WA_LINK = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('مرحباً 👋 أريد الاشتراك في TVDYALEK، هل يمكنكم مساعدتي؟');

/* ---------- Payment method (bank transfer only) ---------- */
function PayLogos({
  compact
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'pay-logos' + (compact ? ' pay-logos-sm' : ''),
    "aria-label": "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pay-logo pay-logo-txt",
    title: "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bank"
  }), " \u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A"));
}

/* ---------- Legal modal (terms / refund / privacy) ---------- */
const LEGAL = {
  terms: {
    title: 'شروط الاستخدام',
    body: ['باشتراكك في خدمة TVDYALEK فأنت توافق على هذه الشروط. الاشتراك شخصي ولا يجوز إعادة بيعه أو مشاركته خارج الأجهزة المسموح بها في باقتك.', 'تلتزم TVDYALEK بتوفير الخدمة على مدار الساعة، مع إمكانية انقطاعات قصيرة للصيانة. في حال توقف الخدمة لأسباب تقنية من جهتنا لمدة تتجاوز 48 ساعة، يتم تعويض المدة في اشتراكك.', 'الأسعار المعروضة نهائية وتُدفع مرة واحدة عن مدة الاشتراك — لا يوجد أي تجديد تلقائي أو رسوم خفية.', 'يحق لنا إيقاف أي اشتراك يُستخدم بشكل مسيء (إعادة البث، البيع، محاولات الاختراق) دون تعويض.']
  },
  refund: {
    title: 'سياسة الاسترداد',
    body: ['نوفر ضمان استرداد كامل خلال يومين من تاريخ التفعيل على باقات 3 أشهر فما فوق، إذا لم تكن راضياً عن الخدمة لأي سبب.', 'لطلب الاسترداد، تواصل معنا عبر واتساب مع ذكر رقم طلبك. تتم إعادة المبلغ بنفس طريقة الدفع خلال 3 إلى 5 أيام عمل.', 'تجربة اليوم الواحد والباقة الشهرية غير قابلة للاسترداد نظراً لطبيعتها التجريبية وثمنها الرمزي.', 'في حال وجود مشكلة تقنية، ننصح بالتواصل مع الدعم أولاً — أغلب المشاكل تُحل في دقائق.']
  },
  privacy: {
    title: 'سياسة الخصوصية',
    body: ['نجمع الحد الأدنى من المعلومات اللازمة لتفعيل اشتراكك: الاسم ورقم الواتساب. لا نطلب أبداً معلومات حساسة غير ضرورية.', 'معلومات الدفع تتم معالجتها عبر بوابات دفع مشفّرة وآمنة — نحن لا نخزن أرقام البطاقات البنكية إطلاقاً.', 'لا نشارك بياناتك مع أي طرف ثالث، ولا نستخدمها إلا للتواصل معك بخصوص اشتراكك.', 'يمكنك في أي وقت طلب حذف بياناتك نهائياً بمراسلتنا على واتساب.']
  }
};
function LegalModal({
  doc,
  onClose
}) {
  const d = LEGAL[doc];
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (!d) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("h3", null, d.title), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body legal-body"
  }, d.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)), /*#__PURE__*/React.createElement("p", {
    className: "legal-note"
  }, "\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B: \u064A\u0648\u0646\u064A\u0648 2026 \u2014 \u0644\u0623\u064A \u0627\u0633\u062A\u0641\u0633\u0627\u0631\u060C \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628."))));
}

/* ---------- Channel categories breakdown ---------- */
function ChannelCats() {
  // Counts add up to the headline totals used across the site:
  // channels 12k+40k+3k+5k = 60,000 · VOD 70k+50k = 120,000
  const cats = [{
    icon: 'trophy',
    num: '+12,000',
    label: 'قناة رياضية مباشرة'
  }, {
    icon: 'tv',
    num: '+40,000',
    label: 'قناة عربية وعالمية'
  }, {
    icon: 'kids',
    num: '+3,000',
    label: 'قناة أطفال وعائلة'
  }, {
    icon: 'shield',
    num: '+5,000',
    label: 'قناة أخبار ووثائقيات'
  }, {
    icon: 'film',
    num: '+70,000',
    label: 'فيلم ومحتوى سينمائي'
  }, {
    icon: 'series',
    num: '+50,000',
    label: 'حلقة مسلسلات وعروض'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chan-cats reveal"
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    className: "chan-cat",
    key: c.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "chan-cat-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon
  })), /*#__PURE__*/React.createElement("b", {
    className: "chan-cat-num"
  }, c.num), /*#__PURE__*/React.createElement("span", {
    className: "chan-cat-label"
  }, c.label)))), /*#__PURE__*/React.createElement("div", {
    className: "chan-cats-note"
  }, "\u0643\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0645\u062A\u0648\u0641\u0631\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u0627\u0642\u0627\u062A \u2014 \u0628\u062F\u0648\u0646 \u0623\u064A \u0632\u064A\u0627\u062F\u0629 \u0641\u064A \u0627\u0644\u0633\u0639\u0631"));
}

/* ---------- Scroll-triggered trial nudge (once per session) ---------- */
function ScrollNudge({
  onOrder
}) {
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
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "nudge",
    role: "status"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nudge-close",
    onClick: () => setShow(false),
    "aria-label": "\u0625\u063A\u0644\u0627\u0642"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close"
  })), /*#__PURE__*/React.createElement("b", null, "\u0645\u0627 \u0632\u0644\u062A \u0645\u062A\u0631\u062F\u062F\u0627\u064B\u061F"), /*#__PURE__*/React.createElement("p", null, "\u062C\u0631\u0651\u0628 \u0627\u0644\u062E\u062F\u0645\u0629 \u0643\u0627\u0645\u0644\u0629 \u0644\u064A\u0648\u0645 \u0648\u0627\u062D\u062F \u0628\u0640 ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "20 \u062F\u0631\u0647\u0645\u0627\u064B"), " \u0641\u0642\u0637 \u2014 \u0628\u062F\u0648\u0646 \u0623\u064A \u0627\u0644\u062A\u0632\u0627\u0645."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => {
      setShow(false);
      onOrder(window.TVD.TRIAL);
    }
  }, "\u0627\u0637\u0644\u0628 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u064A\u0648\u0645"));
}

/* ---------- Sports leagues logo strip ---------- */
function LeagueLogos() {
  const logos = [{
    src: 'tvdyalek/logos/league-a.webp',
    name: 'beIN SPORTS'
  }, {
    src: 'tvdyalek/logos/nba.webp',
    name: 'NBA'
  }, {
    src: 'tvdyalek/logos/skysports.png',
    name: 'Sky Sports'
  }, {
    src: 'tvdyalek/logos/bundesliga.webp',
    name: 'Bundesliga'
  }, {
    src: 'tvdyalek/logos/ligue1.png',
    name: 'Ligue 1'
  }, {
    src: 'tvdyalek/logos/league-b.webp',
    name: 'بطولات عالمية'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section leagues",
    id: "leagues"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "leagues-kicker reveal"
  }, "\u0623\u0642\u0648\u0649 \u0627\u0644\u0628\u0637\u0648\u0644\u0627\u062A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F"), /*#__PURE__*/React.createElement("div", {
    className: "leagues-row reveal"
  }, logos.map(l => /*#__PURE__*/React.createElement("span", {
    className: "league-logo",
    key: l.name,
    title: l.name
  }, /*#__PURE__*/React.createElement("img", {
    src: l.src,
    alt: l.name,
    loading: "lazy"
  }))))));
}

/* ---------- Back to top ---------- */
function BackToTop() {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    className: 'to-top' + (on ? ' on' : ''),
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }),
    "aria-label": "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0644\u0649",
    title: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0644\u0649"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m5 14 7-7 7 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v13"
  })));
}
Object.assign(window, {
  PayLogos,
  LegalModal,
  ChannelCats,
  ScrollNudge,
  BackToTop,
  WA_LINK,
  LeagueLogos
});
})();
