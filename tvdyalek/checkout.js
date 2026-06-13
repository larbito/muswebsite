(function () {
// TVDYALEK — checkout modal (visual mock, 3 steps) + main App with tweaks
const {
  PLANS
} = window.TVD;
const CO_PLANS = [window.TVD.TRIAL].concat(PLANS);

/* ---------- Checkout modal ---------- */
function Checkout({
  plan,
  onClose
}) {
  const [step, setStep] = React.useState(1);
  const [sel, setSel] = React.useState(plan || PLANS[3]);
  const [pay, setPay] = React.useState('bank');
  const [form, setForm] = React.useState({
    name: '',
    phone: ''
  });
  const [errs, setErrs] = React.useState({});
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const next = () => {
    if (step === 1) {
      const er = {};
      if (!form.name.trim()) er.name = 'المرجو إدخال اسمك الكامل';
      if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 9) er.phone = 'المرجو إدخال رقم واتساب صحيح';
      setErrs(er);
      if (Object.keys(er).length) return;
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
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
  }, /*#__PURE__*/React.createElement("h3", null, step === 3 ? 'تم استلام طلبك' : 'إتمام الاشتراك'), /*#__PURE__*/React.createElement("span", {
    className: "co-steps",
    "aria-hidden": "true"
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: 'co-dot' + (step >= n ? ' on' : '')
  }))), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose,
    "aria-label": "\u0625\u063A\u0644\u0627\u0642"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close"
  }))), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("label", null, "\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628 (\u0644\u0625\u0631\u0633\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0641\u0639\u064A\u0644)"), /*#__PURE__*/React.createElement("input", {
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
  }, errs.phone)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: next
  }, "\u0645\u062A\u0627\u0628\u0639\u0629 \u0625\u0644\u0649 \u0627\u0644\u062F\u0641\u0639")), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639"), /*#__PURE__*/React.createElement("div", {
    className: "pay-opts"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pay-opt sel",
    type: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bank"
  }), " \u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      fontSize: '14.5px',
      lineHeight: 1.9
    }
  }, "\u0628\u0639\u062F \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628\u060C \u0646\u0631\u0633\u0644 \u0644\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628 \u0627\u0644\u0628\u0646\u0643\u064A \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628 \u0645\u0628\u0627\u0634\u0631\u0629. \u064A\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0634\u062A\u0631\u0627\u0643\u0643 \u0641\u0648\u0631 \u0627\u0644\u062A\u0648\u0635\u0644 \u0628\u0625\u0634\u0639\u0627\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u2014 \u0639\u0627\u062F\u0629 \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642."), /*#__PURE__*/React.createElement("div", {
    className: "co-plan"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("b", null, sel.name), /*#__PURE__*/React.createElement("span", null, form.name)), /*#__PURE__*/React.createElement("span", {
    className: "co-price"
  }, sel.price, " \u062F\u0631\u0647\u0645")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: next
  }, "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u2014 ", sel.price, " \u062F\u0631\u0647\u0645"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => setStep(1),
    style: {
      padding: '10px'
    }
  }, "\u0631\u062C\u0648\u0639"), /*#__PURE__*/React.createElement("div", {
    className: "co-secure"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock"
  }), " \u0645\u0639\u0627\u0645\u0644\u0629 \u0622\u0645\u0646\u0629 \u2014 \u062A\u0641\u0639\u064A\u0644 \u0641\u0648\u0631\u064A \u0628\u0639\u062F \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644")), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "co-success-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("h4", null, "\u0634\u0643\u0631\u0627\u064B ", form.name.split(' ')[0] || 'لك', "! \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", null, "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628 \u0628\u0627\u0642\u0629 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent-soft)'
    }
  }, sel.name), ". \u0633\u062A\u0635\u0644\u0643 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0641\u0639\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628 \u062E\u0644\u0627\u0644 \u062F\u0642\u0627\u0626\u0642."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, "\u062A\u0645")))));
}
Object.assign(window, {
  Checkout
});
})();
