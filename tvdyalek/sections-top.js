(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TVDYALEK — top sections: Icon, Logo, Nav, Hero, Features
const {
  I,
  FEATURES,
  STATS,
  AVATARS
} = window.TVD;
function Icon({
  name,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "ico",
    dangerouslySetInnerHTML: {
      __html: I[name]
    },
    style: {
      display: 'contents'
    }
  }, rest));
}
function Logo({
  small
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "#top",
    "aria-label": "TVDYALEK"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play"
  })), !small && /*#__PURE__*/React.createElement("span", {
    className: "logo-name"
  }, /*#__PURE__*/React.createElement("b", {
    className: "grad-text"
  }, "TVDYALEK"), /*#__PURE__*/React.createElement("span", null, "\u062A\u0644\u0641\u0627\u0632\u0643 .. \u0639\u0644\u0649 \u0637\u0631\u064A\u0642\u062A\u0643")));
}
function Nav({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"), /*#__PURE__*/React.createElement("a", {
    href: "#content"
  }, "\u0627\u0644\u0645\u062D\u062A\u0648\u0649"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "\u0627\u0644\u0628\u0627\u0642\u0627\u062A"), /*#__PURE__*/React.createElement("a", {
    href: "#install"
  }, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onOrder()
  }, "\u0627\u0634\u062A\u0631\u0643 \u0627\u0644\u0622\u0646")));
}
function TvMock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "tv",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tv-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tv-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ui-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play"
  })), /*#__PURE__*/React.createElement("b", {
    className: "grad-text"
  }, "TVDYALEK"), /*#__PURE__*/React.createElement("span", {
    className: "ui-top-icons"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "heart"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "user"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ui-banner"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "tv-hero",
    shape: "rect",
    src: "tvdyalek/posters/sm/world-04.webp",
    placeholder: "\u0623\u0633\u0642\u0637 \u0647\u0646\u0627 \u0635\u0648\u0631\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0645\u064A\u0632 (\u0628\u0627\u0646\u0631 \u0639\u0631\u064A\u0636)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ui-banner-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0630\u064A \u062A\u062D\u0628\u0647"), /*#__PURE__*/React.createElement("span", null, "\u0628\u062C\u0648\u062F\u0629 \u0644\u0645 \u062A\u0631\u0647\u0627 \u0645\u0646 \u0642\u0628\u0644...")), /*#__PURE__*/React.createElement("span", {
    className: "ui-badge"
  }, "4K ULTRA HD"))), /*#__PURE__*/React.createElement("div", {
    className: "ui-cats"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ui-cat active"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tv"
  }), " \u0628\u062B \u0645\u0628\u0627\u0634\u0631"), /*#__PURE__*/React.createElement("span", {
    className: "ui-cat"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "film"
  }), " \u0623\u0641\u0644\u0627\u0645"), /*#__PURE__*/React.createElement("span", {
    className: "ui-cat"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "series"
  }), " \u0645\u0633\u0644\u0633\u0644\u0627\u062A"), /*#__PURE__*/React.createElement("span", {
    className: "ui-cat"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "kids"
  }), " \u0623\u0637\u0641\u0627\u0644")), /*#__PURE__*/React.createElement("div", {
    className: "ui-row"
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("image-slot", {
    key: n,
    id: 'tv-poster-' + n,
    radius: "8",
    fit: "contain",
    src: 'tvdyalek/posters/sm/arab-0' + n + '.webp',
    placeholder: 'بوستر ' + n
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "tv-stand"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tv-base"
  }));
}
function HeroSlider() {
  const slides = [{
    src: 'tvdyalek/hero/slide-haaland.jpg',
    pos: 'center 30%'
  }, {
    src: 'tvdyalek/hero/slide-stars.avif',
    pos: 'center 28%'
  }, {
    src: 'tvdyalek/hero/slide-neymar.jpg',
    pos: 'center 22%'
  }];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-slider",
    "aria-hidden": "true"
  }, slides.map((s, n) => /*#__PURE__*/React.createElement("div", {
    key: s.src,
    className: 'hero-slide' + (n === i ? ' on' : ''),
    style: {
      backgroundImage: 'url(' + s.src + ')',
      backgroundPosition: s.pos
    }
  })));
}
function Hero({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement(HeroSlider, null), /*#__PURE__*/React.createElement("div", {
    className: "hero-veil",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hero-kicker"
  }, "\u2726 \u0628\u062B \u0645\u0628\u0627\u0634\u0631 \xB7 \u0623\u0641\u0644\u0627\u0645 \xB7 \u0645\u0633\u0644\u0633\u0644\u0627\u062A \u0628\u062C\u0648\u062F\u0629 4K"), /*#__PURE__*/React.createElement("h1", null, "\u0639\u0627\u0644\u0645 \u0643\u0627\u0645\u0644 \u0645\u0646 ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "\u0627\u0644\u062A\u0631\u0641\u064A\u0647"), "..", /*#__PURE__*/React.createElement("br", null), "\u062A\u0639\u064A\u0634\u0647 \u0628\u0637\u0631\u064A\u0642\u062A\u0643"), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064A\u0629\u060C \u0648\u0622\u0644\u0627\u0641 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0628\u062C\u0648\u062F\u0629 ", /*#__PURE__*/React.createElement("strong", null, "4K \u062D\u0642\u064A\u0642\u064A\u0629"), ".. \u0628\u062F\u0648\u0646 \u062A\u0642\u0637\u064A\u0639\u060C \u0648\u0628\u0644\u0627 \u062D\u062F\u0648\u062F."), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-shine",
    onClick: () => onOrder()
  }, "\u0627\u0634\u062A\u0631\u0643 \u0627\u0644\u0622\u0646"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost btn-lg",
    href: "#pricing"
  }, "\u0634\u0627\u0647\u062F \u0627\u0644\u0628\u0627\u0642\u0627\u062A")), /*#__PURE__*/React.createElement("div", {
    className: "hero-rating"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar-stack"
  }, ['m-beard', 'w-young', 'm-young', 'w-hijab', 'm-elder'].map((f, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: 'tvdyalek/faces/' + f + '.webp',
    alt: "\u0645\u0634\u062A\u0631\u0643"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-rating-stars"
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: "star"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-rating-text"
  }, "4.9 / 5 \u0645\u0646 ", /*#__PURE__*/React.createElement("b", null, "+43,000"), " \u0645\u0634\u062A\u0631\u0643 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-badges"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bolt"
  }), " \u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A"), /*#__PURE__*/React.createElement("span", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tv"
  }), " \u064A\u0639\u0645\u0644 \u0641\u064A \u062C\u0645\u064A\u0639 \u062F\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645"), /*#__PURE__*/React.createElement("span", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield"
  }), " \u0636\u0645\u0627\u0646 \u0627\u0633\u062A\u0631\u062F\u0627\u062F \u064A\u0648\u0645\u064A\u0646"), /*#__PURE__*/React.createElement("span", {
    className: "hero-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock"
  }), " \u062F\u0641\u0639 \u0622\u0645\u0646")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "hero-stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("b", {
    className: "grad-text"
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: s.num
  })), /*#__PURE__*/React.createElement("span", null, s.label))))), /*#__PURE__*/React.createElement(TvMock, null)));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0644\u0645\u0627\u0630\u0627 \u0646\u062D\u0646\u061F"), /*#__PURE__*/React.createElement("h2", null, "\u062A\u062C\u0631\u0628\u0629 \u062A\u0631\u0641\u064A\u0647\u064A\u0629 \u0645\u062A\u0643\u0627\u0645\u0644\u0629.. \u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F")), /*#__PURE__*/React.createElement("div", {
    className: "features"
  }, FEATURES.map(f => /*#__PURE__*/React.createElement("article", {
    className: "feature reveal",
    key: f.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon
  })), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.text))))));
}
Object.assign(window, {
  Icon,
  Logo,
  Nav,
  Hero,
  HeroSlider,
  Features,
  TvMock
});
})();
