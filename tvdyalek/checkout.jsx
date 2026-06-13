// TVDYALEK — checkout modal (visual mock, 3 steps) + main App with tweaks
const { PLANS } = window.TVD;
const CO_PLANS = [window.TVD.TRIAL].concat(PLANS);

/* ---------- Checkout modal ---------- */
function Checkout({ plan, onClose }) {
  const [step, setStep] = React.useState(1);
  const [sel, setSel] = React.useState(plan || PLANS[3]);
  const [pay, setPay] = React.useState('bank');
  const [form, setForm] = React.useState({ name: '', phone: '' });
  const [errs, setErrs] = React.useState({});

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

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
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-veil" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-head">
          <h3>{step === 3 ? 'تم استلام طلبك' : 'إتمام الاشتراك'}</h3>
          <span className="co-steps" aria-hidden="true">
            {[1, 2, 3].map((n) => <span key={n} className={'co-dot' + (step >= n ? ' on' : '')}></span>)}
          </span>
          <button className="modal-close" onClick={onClose} aria-label="إغلاق"><Icon name="close" /></button>
        </div>

        {step === 1 && (
          <div className="modal-body">
            <div className="field">
              <label>الباقة المختارة</label>
              <select value={sel.id} onChange={(e) => setSel(CO_PLANS.find((p) => p.id === e.target.value))}>
                {CO_PLANS.map((p) => <option key={p.id} value={p.id}>{p.name} — {p.price} درهم</option>)}
              </select>
            </div>
            <div className="co-plan">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <b>{sel.name}</b>
                <span>{sel.note || 'تفعيل فوري بعد الدفع'}</span>
              </div>
              <span className="co-price">{sel.price} درهم</span>
            </div>
            <div className="field">
              <label>الاسم الكامل</label>
              <input className={errs.name ? 'err' : ''} value={form.name} onChange={set('name')} placeholder="مثال: مصطفى العلوي" />
              {errs.name && <span className="field-err">{errs.name}</span>}
            </div>
            <div className="field">
              <label>رقم الواتساب (لإرسال بيانات التفعيل)</label>
              <input className={errs.phone ? 'err' : ''} value={form.phone} onChange={set('phone')} placeholder="06 XX XX XX XX" dir="ltr" style={{ textAlign: 'end' }} />
              {errs.phone && <span className="field-err">{errs.phone}</span>}
            </div>
            <button className="btn btn-primary" onClick={next}>متابعة إلى الدفع</button>
          </div>
        )}

        {step === 2 && (
          <div className="modal-body">
            <div className="field">
              <label>طريقة الدفع</label>
              <div className="pay-opts">
                <button className="pay-opt sel" type="button">
                  <Icon name="bank" /> تحويل بنكي
                </button>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.9 }}>
              بعد تأكيد الطلب، نرسل لك معلومات الحساب البنكي على واتساب مباشرة. يتم تفعيل اشتراكك فور التوصل بإشعار التحويل — عادة خلال دقائق.
            </p>
            <div className="co-plan">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <b>{sel.name}</b>
                <span>{form.name}</span>
              </div>
              <span className="co-price">{sel.price} درهم</span>
            </div>
            <button className="btn btn-primary" onClick={next}>تأكيد الطلب — {sel.price} درهم</button>
            <button className="btn btn-ghost" onClick={() => setStep(1)} style={{ padding: '10px' }}>رجوع</button>
            <div className="co-secure">
              <Icon name="lock" /> معاملة آمنة — تفعيل فوري بعد تأكيد التحويل
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="modal-body">
            <div className="co-success">
              <span className="co-success-icon"><Icon name="check" /></span>
              <h4>شكراً {form.name.split(' ')[0] || 'لك'}! 🎉</h4>
              <p>
                تم استلام طلب باقة <b style={{ color: 'var(--accent-soft)' }}>{sel.name}</b>.
                ستصلك بيانات التفعيل على الواتساب خلال دقائق.
              </p>
              <button className="btn btn-primary" onClick={onClose}>تم</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Checkout });
