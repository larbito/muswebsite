(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// TVDYALEK — standalone checkout PAGE.
// Reads the chosen plan from ?plan=<id>, collects name + WhatsApp, generates an
// order ID, posts it to the mailer (which notifies the admins by email), then
// sends the visitor to thank-you.html with the order details.
const {
  I,
  PLANS,
  TRIAL
} = window.TVD;
const CO_PLANS = [TRIAL].concat(PLANS);
const API_URL = 'https://api.tvdyalek.store/order.php';
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
function makeOrderId() {
  const s = Math.random().toString(36).slice(2, 7).toUpperCase();
  return 'TVD-' + s;
}
function CheckoutPage() {
  const params = new URLSearchParams(window.location.search);
  const initial = CO_PLANS.find(p => p.id === params.get('plan')) || PLANS[3];
  const [sel, setSel] = React.useState(initial);
  const [form, setForm] = React.useState({
    name: '',
    phone: ''
  });
  const [errs, setErrs] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const submit = async () => {
    const er = {};
    if (!form.name.trim()) er.name = 'المرجو إدخال اسمك الكامل';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 9) er.phone = 'المرجو إدخال رقم واتساب صحيح';
    setErrs(er);
    if (Object.keys(er).length) return;
    const orderId = makeOrderId();
    const payload = {
      orderId,
      planId: sel.id,
      planName: sel.name,
      price: sel.price,
      name: form.name.trim(),
      phone: form.phone.trim()
    };
    setBusy(true);
    // Best-effort: the admin email is supplementary to the WhatsApp flow, so we
    // proceed to the thank-you page even if the mail API is briefly unreachable.
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (e) {/* ignore — fall through to thank-you */}
    const q = new URLSearchParams({
      plan: sel.id,
      name: payload.name,
      oid: orderId
    });
    window.location.href = 'thank-you.html?' + q.toString();
  };
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
  }, "TVDYALEK")), /*#__PURE__*/React.createElement("a", {
    className: "page-back",
    href: "index.html"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron"
  }), " \u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0645\u0648\u0642\u0639")), /*#__PURE__*/React.createElement("main", {
    className: "page-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-card-head"
  }, /*#__PURE__*/React.createElement("h1", null, "\u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643"), /*#__PURE__*/React.createElement("p", null, "\u0627\u062E\u062A\u0631 \u0628\u0627\u0642\u062A\u0643 \u0648\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u2014 \u0627\u0644\u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u0628\u0639\u062F \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062F\u0641\u0639.")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629"), /*#__PURE__*/React.createElement("select", {
    value: sel.id,
    onChange: e => setSel(CO_PLANS.find(p => p.id === e.target.value))
  }, CO_PLANS.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.name, " \u2014 ", p.price, " \u062F\u0631\u0647\u0645")))), /*#__PURE__*/React.createElement("div", {
    className: "co-plan"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("b", null, sel.name), /*#__PURE__*/React.createElement("span", null, sel.note || 'تفعيل فوري بعد الدفع')), /*#__PURE__*/React.createElement("span", {
    className: "co-price"
  }, sel.price, " \u062F\u0631\u0647\u0645")), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644"), /*#__PURE__*/React.createElement("input", {
    className: errs.name ? 'err' : '',
    value: form.name,
    onChange: set('name'),
    placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0635\u0637\u0641\u0649 \u0627\u0644\u0639\u0644\u0648\u064A"
  }), errs.name && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, errs.name)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628 (\u0633\u0646\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0639\u0644\u064A\u0647)"), /*#__PURE__*/React.createElement("input", {
    className: errs.phone ? 'err' : '',
    value: form.phone,
    onChange: set('phone'),
    placeholder: "06 XX XX XX XX",
    dir: "ltr",
    style: {
      textAlign: 'end'
    }
  }), errs.phone && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, errs.phone)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639"), /*#__PURE__*/React.createElement("div", {
    className: "pay-opts"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pay-opt sel",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bank"
  }), " \u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A"))), /*#__PURE__*/React.createElement("p", {
    className: "co-note"
  }, "\u0628\u0639\u062F \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628\u060C \u0646\u0631\u0633\u0644 \u0644\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0628\u0646\u0643\u064A \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628 \u0645\u0628\u0627\u0634\u0631\u0629. \u064A\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0634\u062A\u0631\u0627\u0643\u0643 \u0641\u0648\u0631 \u0627\u0644\u062A\u0648\u0635\u0644 \u0628\u0625\u0634\u0639\u0627\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u2014 \u0639\u0627\u062F\u0629 \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: submit,
    disabled: busy
  }, busy ? 'جارٍ إرسال الطلب…' : 'تأكيد الطلب — ' + sel.price + ' درهم'), /*#__PURE__*/React.createElement("div", {
    className: "co-secure"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock"
  }), " \u0645\u0639\u0627\u0645\u0644\u0629 \u0622\u0645\u0646\u0629 \u2014 \u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u0628\u0639\u062F \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644"))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(CheckoutPage, null));
})();
