(function () {
// TVDYALEK — mid/bottom sections: Showcase, Pricing, Devices+Steps, Reasons, Quotes, FAQ, CTA, Footer, WhatsApp
const {
  PLANS,
  DEVICES,
  STEPS,
  QUOTES,
  FAQ,
  CHIPS,
  REASONS
} = window.TVD;
function Showcase() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0627\u0644\u0645\u062D\u062A\u0648\u0649"), /*#__PURE__*/React.createElement("h2", null, "\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A.. \u0641\u0648\u0631 \u0635\u062F\u0648\u0631\u0647\u0627"), /*#__PURE__*/React.createElement("p", null, "\u0645\u0643\u062A\u0628\u0629 \u0636\u062E\u0645\u0629 \u062A\u062A\u062C\u062F\u0651\u062F \u064A\u0648\u0645\u064A\u0627\u064B: \u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0648\u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u062C\u0648\u062F\u0629 4K\u060C \u062A\u064F\u0636\u0627\u0641 \u0641\u0648\u0631 \u0635\u062F\u0648\u0631\u0647\u0627 \u2014 \u0628\u062F\u0648\u0646 \u0627\u0646\u062A\u0638\u0627\u0631 \u0648\u0628\u062F\u0648\u0646 \u0625\u0639\u0644\u0627\u0646\u0627\u062A.")), /*#__PURE__*/React.createElement("div", {
    className: "showcase-rows"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "show-row-head"
  }, /*#__PURE__*/React.createElement("h3", null, "\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0634\u0627\u0647\u062F\u0629 \u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639"), /*#__PURE__*/React.createElement("span", null, "\u0623\u0641\u0644\u0627\u0645 \u0648\u0645\u0633\u0644\u0633\u0644\u0627\u062A \u0639\u0627\u0644\u0645\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "show-row"
  }, ['01', '02', '03', '05', '06', '07'].map((n, i) => /*#__PURE__*/React.createElement("image-slot", {
    key: n,
    id: 'show-world-' + (i + 1),
    radius: "12",
    fit: "contain",
    src: 'tvdyalek/posters/sm/world-' + n + '.webp',
    placeholder: 'بوستر عالمي ' + (i + 1)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "show-row-head"
  }, /*#__PURE__*/React.createElement("h3", null, "\u062F\u0631\u0627\u0645\u0627 \u0639\u0631\u0628\u064A\u0629"), /*#__PURE__*/React.createElement("span", null, "\u0623\u062D\u062F\u062B \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0627\u0644\u0645\u063A\u0631\u0628\u064A\u0629")), /*#__PURE__*/React.createElement("div", {
    className: "show-row"
  }, ['06', '07', '08', '09', '10', '11'].map((n, i) => /*#__PURE__*/React.createElement("image-slot", {
    key: n,
    id: 'show-arab-' + (i + 1),
    radius: "12",
    fit: "contain",
    src: 'tvdyalek/posters/sm/arab-' + n + '.webp',
    placeholder: 'بوستر عربي ' + (i + 1)
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "chips reveal"
  }, CHIPS.map(([label, count]) => /*#__PURE__*/React.createElement("span", {
    className: "chip",
    key: label
  }, label, " \xB7 ", /*#__PURE__*/React.createElement("b", null, count)))), /*#__PURE__*/React.createElement(MarqueeStrip, null)));
}
function Pricing({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0627\u0644\u0628\u0627\u0642\u0627\u062A \u0648\u0627\u0644\u0623\u0633\u0639\u0627\u0631"), /*#__PURE__*/React.createElement("h2", null, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0643"), /*#__PURE__*/React.createElement("p", null, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0628\u0627\u0644\u062F\u0631\u0647\u0645 \u0627\u0644\u0645\u063A\u0631\u0628\u064A\u060C \u062A\u064F\u062F\u0641\u0639 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u2014 \u0628\u062F\u0648\u0646 \u062A\u062C\u062F\u064A\u062F \u062A\u0644\u0642\u0627\u0626\u064A.")), /*#__PURE__*/React.createElement("div", {
    className: "plans"
  }, PLANS.map(p => /*#__PURE__*/React.createElement("article", {
    className: 'plan reveal' + (p.featured ? ' plan-featured' : ''),
    key: p.id
  }, p.featured && /*#__PURE__*/React.createElement("span", {
    className: "plan-flag"
  }, "\u0627\u0644\u0623\u0643\u062B\u0631 \u0637\u0644\u0628\u0627\u064B"), /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("div", {
    className: "plan-price"
  }, /*#__PURE__*/React.createElement("b", {
    className: "grad-text"
  }, p.price), /*#__PURE__*/React.createElement("span", null, "\u062F\u0631\u0647\u0645")), /*#__PURE__*/React.createElement("div", {
    className: "plan-note"
  }, p.note), /*#__PURE__*/React.createElement("ul", null, p.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", f))), /*#__PURE__*/React.createElement("button", {
    className: 'btn ' + (p.featured ? 'btn-primary' : 'btn-ghost'),
    onClick: () => onOrder(p)
  }, "\u0627\u0637\u0644\u0628 \u0647\u0630\u0647 \u0627\u0644\u0628\u0627\u0642\u0629")))), /*#__PURE__*/React.createElement(TrialBanner, {
    onOrder: onOrder
  }), /*#__PURE__*/React.createElement(TrustStrip, null)));
}
function Devices() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "install"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap devices-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '34px',
      marginTop: '8px'
    }
  }, "\u062B\u0644\u0627\u062B \u062E\u0637\u0648\u0627\u062A.. \u0648\u062A\u0628\u062F\u0623 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629"), /*#__PURE__*/React.createElement("div", {
    className: "steps",
    style: {
      marginTop: '34px'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: s.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-num"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker",
    style: {
      marginBottom: '16px'
    }
  }, "\u064A\u0634\u062A\u063A\u0644 \u0639\u0644\u0649 \u062C\u0645\u064A\u0639 \u0623\u062C\u0647\u0632\u062A\u0643"), /*#__PURE__*/React.createElement("div", {
    className: "device-list"
  }, DEVICES.map(d => /*#__PURE__*/React.createElement("div", {
    className: "device",
    key: d.name
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.icon
  }), d.name))))));
}
function Reasons() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "reasons"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reasons-head reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0644\u0645\u0627\u0630\u0627 TVDYALEK\u061F"), /*#__PURE__*/React.createElement("h2", null, "\u0623\u0633\u0628\u0627\u0628 \u0625\u0636\u0627\u0641\u064A\u0629 ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "\u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645"))), /*#__PURE__*/React.createElement("p", null, "\u062E\u062F\u0645\u0629 \u0645\u0635\u0645\u0645\u0629 \u0644\u0639\u0634\u0627\u0642 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629 \u0627\u0644\u062C\u0627\u062F\u0651\u064A\u0646 \u2014 \u0643\u0644 \u062A\u0641\u0635\u064A\u0644 \u0645\u0628\u0646\u064A \u062D\u0648\u0644 \u0627\u0644\u0627\u0633\u062A\u0642\u0631\u0627\u0631\u060C \u0627\u0644\u062C\u0648\u062F\u0629\u060C \u0648\u062A\u062C\u0631\u0628\u0629 \u062A\u0634\u062A\u063A\u0644 \u0645\u0646 \u0623\u0648\u0644 \u0645\u0631\u0629\u060C \u0623\u064A\u0646\u0645\u0627 \u0643\u0646\u062A \u0641\u064A \u0627\u0644\u0639\u0627\u0644\u0645.")), /*#__PURE__*/React.createElement("div", {
    className: "reasons"
  }, REASONS.map(r => /*#__PURE__*/React.createElement("article", {
    className: "reason reveal",
    key: r.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "reason-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon
  })), /*#__PURE__*/React.createElement("h3", null, r.title), /*#__PURE__*/React.createElement("p", null, r.text))))));
}
function QuoteCard({
  q
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "quote reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quote-mark",
    "aria-hidden": "true"
  }, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "quote-stars"
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: "star"
  }))), /*#__PURE__*/React.createElement("p", null, q.text), /*#__PURE__*/React.createElement("div", {
    className: "quote-by"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quote-av"
  }, q.img ? /*#__PURE__*/React.createElement("img", {
    src: q.img,
    alt: q.name
  }) : q.name[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, q.name), /*#__PURE__*/React.createElement("span", null, q.city)), /*#__PURE__*/React.createElement("span", {
    className: "quote-verified",
    title: "\u0645\u0634\u062A\u0631\u0643 \u0645\u0648\u062B\u0651\u0642"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }))));
}
function Quotes() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "quotes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0622\u0631\u0627\u0621 \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u064A\u0646"), /*#__PURE__*/React.createElement("h2", null, "\u0623\u0643\u062B\u0631 \u0645\u0646 43,000 \u0645\u0634\u062A\u0631\u0643 \u064A\u062B\u0642\u0648\u0646 \u0628\u0646\u0627"), /*#__PURE__*/React.createElement("p", null, "\u0645\u0646 \u0627\u0644\u0645\u063A\u0631\u0628 \u0625\u0644\u0649 \u0623\u0648\u0631\u0648\u0628\u0627 \u0648\u0627\u0644\u062E\u0644\u064A\u062C \u2014 \u0647\u0630\u0627 \u0645\u0627 \u064A\u0642\u0648\u0644\u0647 \u0645\u0634\u062A\u0631\u0643\u0648\u0646\u0627 \u0641\u0639\u0644\u0627\u064B")), /*#__PURE__*/React.createElement("div", {
    className: "rating-summary reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rating-big"
  }, "4.9", /*#__PURE__*/React.createElement("span", null, "/5")), /*#__PURE__*/React.createElement("div", {
    className: "rating-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rating-stars"
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: "star"
  }))), /*#__PURE__*/React.createElement("span", null, "\u0645\u062A\u0648\u0633\u0637 \u062A\u0642\u064A\u064A\u0645 \u0623\u0643\u062B\u0631 \u0645\u0646 43,000 \u0645\u0634\u062A\u0631\u0643"))), /*#__PURE__*/React.createElement("div", {
    className: "quotes-grid"
  }, QUOTES.map((q, i) => /*#__PURE__*/React.createElement(QuoteCard, {
    q: q,
    key: i
  })))));
}
function Faq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-alt",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-kicker"
  }, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629"), /*#__PURE__*/React.createElement("h2", null, "\u0639\u0646\u062F\u0643 \u0633\u0624\u0627\u0644\u061F \u0639\u0646\u062F\u0646\u0627 \u0627\u0644\u062C\u0648\u0627\u0628")), /*#__PURE__*/React.createElement("div", {
    className: "faq reveal"
  }, FAQ.map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: 'faq-item' + (open === i ? ' open' : ''),
    key: item.q
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, item.q, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron"
  })), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, /*#__PURE__*/React.createElement("p", null, item.a)))))));
}
function CtaBand({
  onOrder
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap reveal"
  }, /*#__PURE__*/React.createElement("h2", null, "\u0627\u0634\u062A\u0631\u0643 \u0627\u0644\u0622\u0646.. ", /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "\u0648\u0627\u0643\u062A\u0634\u0641 \u0639\u0627\u0644\u0645 \u0627\u0644\u062A\u0631\u0641\u064A\u0647 \u0628\u0644\u0627 \u062D\u062F\u0648\u062F")), /*#__PURE__*/React.createElement("p", null, "\u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642\u060C \u062F\u0639\u0645 \u0641\u0646\u064A \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629\u060C \u0648\u062C\u0648\u062F\u0629 \u062A\u0633\u062A\u062D\u0642\u0647\u0627 \u0644\u062D\u0638\u0627\u062A\u0643."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-shine",
    onClick: () => onOrder()
  }, "\u0627\u0634\u062A\u0631\u0643 \u0627\u0644\u0622\u0646")));
}
function Footer() {
  const [legal, setLegal] = React.useState(null);
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap footer-inner"
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    className: "footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "\u0627\u0644\u0645\u0645\u064A\u0632\u0627\u062A"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "\u0627\u0644\u0628\u0627\u0642\u0627\u062A"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629")), /*#__PURE__*/React.createElement("nav", {
    className: "footer-links footer-legal"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLegal('terms')
  }, "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLegal('refund')
  }, "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLegal('privacy')
  }, "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629")), /*#__PURE__*/React.createElement(PayMethods, {
    label: "\u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u0645\u062A\u0627\u062D\u0629"
  }), /*#__PURE__*/React.createElement("p", null, "\xA9 2026 TVDYALEK \u2014 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629")), legal && /*#__PURE__*/React.createElement(LegalModal, {
    doc: legal,
    onClose: () => setLegal(null)
  }));
}
function WhatsAppFloat() {
  return /*#__PURE__*/React.createElement("a", {
    className: "wa-float",
    href: WA_LINK,
    target: "_blank",
    rel: "noopener",
    title: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628",
    "aria-label": "\u0648\u0627\u062A\u0633\u0627\u0628"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp"
  }));
}
Object.assign(window, {
  Showcase,
  Pricing,
  Devices,
  Reasons,
  Quotes,
  Faq,
  CtaBand,
  Footer,
  WhatsAppFloat
});
})();
