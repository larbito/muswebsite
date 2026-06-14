// TVDYALEK — mid/bottom sections: Showcase, Pricing, Devices+Steps, Reasons, Quotes, FAQ, CTA, Footer, WhatsApp
const { PLANS, DEVICES, STEPS, QUOTES, FAQ, CHIPS, REASONS } = window.TVD;

function Showcase() {
  return (
    <section className="section section-alt" id="content">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">المحتوى</div>
          <h2>أحدث الأفلام والمسلسلات.. فور صدورها</h2>
          <p>مكتبة ضخمة تتجدّد يومياً: أحدث الأفلام والمسلسلات العالمية والعربية بجودة 4K، تُضاف فور صدورها — بدون انتظار وبدون إعلانات.</p>
        </div>
        <div className="showcase-rows">
          <div className="reveal">
            <div className="show-row-head">
              <h3>الأكثر مشاهدة هذا الأسبوع</h3>
              <span>أفلام ومسلسلات عالمية</span>
            </div>
            <div className="show-row">
              {['01', '02', '03', '05', '06', '07'].map((n, i) => (
                <image-slot key={n} id={'show-world-' + (i + 1)} radius="12" fit="contain" src={'tvdyalek/posters/sm/world-' + n + '.webp'} placeholder={'بوستر عالمي ' + (i + 1)}></image-slot>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="show-row-head">
              <h3>دراما عربية</h3>
              <span>أحدث الإنتاجات العربية والمغربية</span>
            </div>
            <div className="show-row">
              {['06', '07', '08', '09', '10', '11'].map((n, i) => (
                <image-slot key={n} id={'show-arab-' + (i + 1)} radius="12" fit="contain" src={'tvdyalek/posters/sm/arab-' + n + '.webp'} placeholder={'بوستر عربي ' + (i + 1)}></image-slot>
              ))}
            </div>
          </div>
        </div>
        <div className="chips reveal">
          {CHIPS.map(([label, count]) => (
            <span className="chip" key={label}>{label} · <b>{count}</b></span>
          ))}
        </div>
        <MarqueeStrip />
      </div>
    </section>
  );
}

function Pricing({ onOrder }) {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">الباقات والأسعار</div>
          <h2>اختر الباقة المناسبة لك</h2>
          <p>جميع الأسعار بالدرهم المغربي، تُدفع مرة واحدة — بدون تجديد تلقائي.</p>
        </div>
        <div className="plans">
          {PLANS.map((p) => (
            <article className={'plan reveal' + (p.featured ? ' plan-featured' : '')} key={p.id}>
              {p.featured && <span className="plan-flag">الأكثر طلباً</span>}
              <h3>{p.name}</h3>
              <div className="plan-price">
                <b className="grad-text">{p.price}</b>
                <span>درهم</span>
              </div>
              <div className="plan-note">{p.note}</div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}><Icon name="check" /> {f}</li>
                ))}
              </ul>
              <button className={'btn ' + (p.featured ? 'btn-primary' : 'btn-ghost')} onClick={() => onOrder(p)}>
                اطلب هذه الباقة
              </button>
            </article>
          ))}
        </div>
        <TrialBanner onOrder={onOrder} />
        <TrustStrip />
      </div>
    </section>
  );
}

function Devices() {
  return (
    <section className="section section-alt" id="install">
      <div className="wrap devices-grid">
        <div className="reveal">
          <div className="section-kicker">طريقة التشغيل</div>
          <h2 style={{ fontSize: '34px', marginTop: '8px' }}>ثلاث خطوات.. وتبدأ المشاهدة</h2>
          <div className="steps" style={{ marginTop: '34px' }}>
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className="section-kicker" style={{ marginBottom: '16px' }}>يشتغل على جميع أجهزتك</div>
          <div className="device-list">
            {DEVICES.map((d) => (
              <div className="device" key={d.name}>
                <Icon name={d.icon} />
                {d.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="section" id="reasons">
      <div className="wrap">
        <div className="reasons-head reveal">
          <div>
            <div className="section-kicker">لماذا TVDYALEK؟</div>
            <h2>أسباب إضافية <span className="grad-text">للانضمام</span></h2>
          </div>
          <p>خدمة مصممة لعشاق المشاهدة الجادّين — كل تفصيل مبني حول الاستقرار، الجودة، وتجربة تشتغل من أول مرة، أينما كنت في العالم.</p>
        </div>
        <div className="reasons">
          {REASONS.map((r) => (
            <article className="reason reveal" key={r.title}>
              <div className="reason-icon"><Icon name={r.icon} /></div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({ q }) {
  return (
    <article className="quote reveal">
      <span className="quote-mark" aria-hidden="true">”</span>
      <div className="quote-stars">
        {[1, 2, 3, 4, 5].map((n) => <Icon key={n} name="star" />)}
      </div>
      <p>{q.text}</p>
      <div className="quote-by">
        <span className="quote-av">{q.img ? <img src={q.img} alt={q.name} /> : q.name[0]}</span>
        <div>
          <b>{q.name}</b>
          <span>{q.city}</span>
        </div>
        <span className="quote-verified" title="مشترك موثّق"><Icon name="check" /></span>
      </div>
    </article>
  );
}

function Quotes() {
  return (
    <section className="section" id="quotes">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">آراء المشتركين</div>
          <h2>أكثر من 43,000 مشترك يثقون بنا</h2>
          <p>من المغرب إلى أوروبا والخليج — هذا ما يقوله مشتركونا فعلاً</p>
        </div>
        <div className="rating-summary reveal">
          <div className="rating-big">4.9<span>/5</span></div>
          <div className="rating-meta">
            <div className="rating-stars">{[1, 2, 3, 4, 5].map((n) => <Icon key={n} name="star" />)}</div>
            <span>متوسط تقييم أكثر من 43,000 مشترك</span>
          </div>
        </div>
        <div className="quotes-grid">
          {QUOTES.map((q, i) => <QuoteCard q={q} key={i} />)}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section section-alt" id="faq">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">الأسئلة الشائعة</div>
          <h2>عندك سؤال؟ عندنا الجواب</h2>
        </div>
        <div className="faq reveal">
          {FAQ.map((item, i) => (
            <div className={'faq-item' + (open === i ? ' open' : '')} key={item.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {item.q}
                <Icon name="chevron" />
              </button>
              <div className="faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ onOrder }) {
  return (
    <section className="cta-band">
      <div className="wrap reveal">
        <h2>اشترك الآن.. <span className="grad-text">واكتشف عالم الترفيه بلا حدود</span></h2>
        <p>تفعيل فوري خلال دقائق، دعم فني على مدار الساعة، وجودة تستحقها لحظاتك.</p>
        <button className="btn btn-primary btn-lg btn-shine" onClick={() => onOrder()}>اشترك الآن</button>
      </div>
    </section>
  );
}

function Footer() {
  const [legal, setLegal] = React.useState(null);
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Logo />
        <nav className="footer-links">
          <a href="#features">المميزات</a>
          <a href="#pricing">الباقات</a>
          <a href="#faq">الأسئلة الشائعة</a>
        </nav>
        <nav className="footer-links footer-legal">
          <button onClick={() => setLegal('terms')}>شروط الاستخدام</button>
          <button onClick={() => setLegal('refund')}>سياسة الاسترداد</button>
          <button onClick={() => setLegal('privacy')}>سياسة الخصوصية</button>
        </nav>
        <PayMethods label="طرق الدفع المتاحة" />
        <p>© 2026 TVDYALEK — جميع الحقوق محفوظة</p>
      </div>
      {legal && <LegalModal doc={legal} onClose={() => setLegal(null)} />}
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a className="wa-float" href={WA_LINK} target="_blank" rel="noopener" title="تواصل معنا عبر واتساب" aria-label="واتساب">
      <Icon name="whatsapp" />
    </a>
  );
}

Object.assign(window, { Showcase, Pricing, Devices, Reasons, Quotes, Faq, CtaBand, Footer, WhatsAppFloat });
