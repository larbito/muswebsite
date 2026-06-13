// TVDYALEK — top sections: Icon, Logo, Nav, Hero, Features
const { I, FEATURES, STATS, AVATARS } = window.TVD;

function Icon({ name, ...rest }) {
  return <span className="ico" dangerouslySetInnerHTML={{ __html: I[name] }} style={{ display: 'contents' }} {...rest}></span>;
}

function Logo({ small }) {
  return (
    <a className="logo" href="#top" aria-label="TVDYALEK">
      <span className="logo-mark"><Icon name="play" /></span>
      {!small && (
        <span className="logo-name">
          <b className="grad-text">TVDYALEK</b>
          <span>تلفازك .. على طريقتك</span>
        </span>
      )}
    </a>
  );
}

function Nav({ onOrder }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Logo />
        <nav className="nav-links">
          <a href="#features">المميزات</a>
          <a href="#content">المحتوى</a>
          <a href="#pricing">الباقات</a>
          <a href="#install">طريقة التشغيل</a>
          <a href="#faq">الأسئلة الشائعة</a>
        </nav>
        <button className="btn btn-primary" onClick={() => onOrder()}>اشترك الآن</button>
      </div>
    </header>
  );
}

function TvMock() {
  return (
    <div className="tv" aria-hidden="true">
      <div className="tv-frame">
        <div className="tv-screen">
          <div className="ui-top">
            <span className="logo-mark"><Icon name="play" /></span>
            <b className="grad-text">TVDYALEK</b>
            <span className="ui-top-icons">
              <Icon name="search" /><Icon name="heart" /><Icon name="user" />
            </span>
          </div>
          <div className="ui-banner">
            <image-slot id="tv-hero" shape="rect" src="tvdyalek/posters/sm/world-04.webp" placeholder="أسقط هنا صورة العمل المميز (بانر عريض)"></image-slot>
            <div className="ui-banner-meta">
              <div>
                <b>المحتوى الذي تحبه</b>
                <span>بجودة لم ترها من قبل...</span>
              </div>
              <span className="ui-badge">4K ULTRA HD</span>
            </div>
          </div>
          <div className="ui-cats">
            <span className="ui-cat active"><Icon name="tv" /> بث مباشر</span>
            <span className="ui-cat"><Icon name="film" /> أفلام</span>
            <span className="ui-cat"><Icon name="series" /> مسلسلات</span>
            <span className="ui-cat"><Icon name="kids" /> أطفال</span>
          </div>
          <div className="ui-row">
            {[1, 2, 3, 4, 5].map((n) => (
              <image-slot key={n} id={'tv-poster-' + n} radius="8" fit="contain" src={'tvdyalek/posters/sm/arab-0' + n + '.webp'} placeholder={'بوستر ' + n}></image-slot>
            ))}
          </div>
        </div>
      </div>
      <div className="tv-stand"></div>
      <div className="tv-base"></div>
    </div>
  );
}

function HeroSlider() {
  const slides = [
    { src: 'tvdyalek/hero/slide-haaland.jpg', pos: 'center 30%' },
    { src: 'tvdyalek/hero/slide-stars.avif', pos: 'center 28%' },
    { src: 'tvdyalek/hero/slide-neymar.jpg', pos: 'center 22%' },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-slider" aria-hidden="true">
      {slides.map((s, n) => (
        <div
          key={s.src}
          className={'hero-slide' + (n === i ? ' on' : '')}
          style={{ backgroundImage: 'url(' + s.src + ')', backgroundPosition: s.pos }}
        ></div>
      ))}
    </div>
  );
}

function Hero({ onOrder }) {
  return (
    <section className="hero" id="top">
      <HeroSlider />
      <div className="hero-veil" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <div>
          <span className="hero-kicker">✦ بث مباشر · أفلام · مسلسلات بجودة 4K</span>
          <h1>
            عالم كامل من <span className="grad-text">الترفيه</span>..
            <br />تعيشه بطريقتك
          </h1>
          <p className="hero-sub">
            أحدث الأفلام والمسلسلات العالمية والعربية، وآلاف القنوات المباشرة
            بجودة <strong>4K حقيقية</strong>.. بدون تقطيع، وبلا حدود.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg btn-shine" onClick={() => onOrder()}>اشترك الآن</button>
            <a className="btn btn-ghost btn-lg" href="#pricing">شاهد الباقات</a>
          </div>
          <div className="hero-rating">
            <div className="avatar-stack">
              {['m-beard', 'w-young', 'm-young', 'w-hijab', 'm-elder'].map((f, i) => (
                <img key={i} src={'tvdyalek/faces/' + f + '.webp'} alt="مشترك" />
              ))}
            </div>
            <div>
              <div className="hero-rating-stars">
                {[1, 2, 3, 4, 5].map((n) => <Icon key={n} name="star" />)}
              </div>
              <div className="hero-rating-text">4.9 / 5 من <b>+43,000</b> مشترك حول العالم</div>
            </div>
          </div>
          <div className="hero-badges">
            <span className="hero-badge"><Icon name="bolt" /> تفعيل فوري</span>
            <span className="hero-badge"><Icon name="tv" /> يعمل في جميع دول العالم</span>
            <span className="hero-badge"><Icon name="shield" /> ضمان استرداد يومين</span>
            <span className="hero-badge"><Icon name="lock" /> دفع آمن</span>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="hero-stat" key={s.label}>
                <b className="grad-text"><CountUp value={s.num} /></b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <TvMock />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-kicker">لماذا نحن؟</div>
          <h2>تجربة ترفيهية متكاملة.. كل ما تحتاجه في مكان واحد</h2>
        </div>
        <div className="features">
          {FEATURES.map((f) => (
            <article className="feature reveal" key={f.title}>
              <div className="feature-icon"><Icon name={f.icon} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Icon, Logo, Nav, Hero, HeroSlider, Features, TvMock });
