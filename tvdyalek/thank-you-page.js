(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TVDYALEK — standalone thank-you PAGE shown after checkout.
// Reads ?plan=<id>&name=<name> to personalise the confirmation, and offers a
// prefilled WhatsApp button so the visitor can complete the bank transfer.
const {
  I,
  PLANS,
  TRIAL
} = window.TVD;
const CO_PLANS = [TRIAL].concat(PLANS);
const WA_NUMBER = '212714561749';
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
function ThankYouPage() {
  const params = new URLSearchParams(window.location.search);
  const plan = CO_PLANS.find(p => p.id === params.get('plan'));
  const name = (params.get('name') || '').trim();
  const first = name.split(' ')[0] || 'لك';
  const waText = encodeURIComponent('مرحباً 👋 لقد طلبت' + (plan ? ' باقة ' + plan.name : ' اشتراكاً') + ' في TVDYALEK' + (name ? ' باسم ' + name : '') + '. المرجو إرسال معلومات الدفع. شكراً!');
  const waLink = 'https://wa.me/' + WA_NUMBER + '?text=' + waText;
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play"
  })), /*#__PURE__*/React.createElement("span", {
    className: "logo-text"
  }, "TVDYALEK"))), /*#__PURE__*/React.createElement("main", {
    className: "page-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "thanks-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "thanks-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("h1", null, "\u0634\u0643\u0631\u0627\u064B ", first, "! \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", null, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628 ", plan ? /*#__PURE__*/React.createElement("b", null, "\u0628\u0627\u0642\u0629 ", plan.name) : 'اشتراكك', plan ? /*#__PURE__*/React.createElement("span", {
    className: "thanks-price"
  }, " \u2014 ", plan.price, " \u062F\u0631\u0647\u0645") : null, ". \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0627\u0644\u0622\u0646 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628 \u0644\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u062F\u0641\u0639 \u0648\u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0641\u0639\u064A\u0644 \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642."), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-lg btn-shine wa-cta",
    href: waLink
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "whatsapp"
  }), " \u0623\u0643\u0645\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"), /*#__PURE__*/React.createElement("ul", {
    className: "thanks-steps"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " \u0633\u0646\u0631\u0633\u0644 \u0644\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0628\u0646\u0643\u064A \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " \u064A\u062A\u0645 \u0627\u0644\u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631 \u0627\u0644\u062A\u0648\u0635\u0644 \u0628\u0625\u0634\u0639\u0627\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "headset"
  }), " \u062F\u0639\u0645 24/7 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0639\u0644\u0649 \u0623\u064A \u062C\u0647\u0627\u0632")), /*#__PURE__*/React.createElement("a", {
    className: "page-back",
    href: "index.html"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron"
  }), " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ThankYouPage, null));
})();
