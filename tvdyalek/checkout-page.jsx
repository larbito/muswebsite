// TVDYALEK — standalone checkout PAGE (replaces the old modal).
// Reads the chosen plan from ?plan=<id>, collects name + WhatsApp, then sends
// the visitor to thank-you.html with the order details in the query string.
const { I, PLANS, TRIAL } = window.TVD;
const CO_PLANS = [TRIAL].concat(PLANS);

function Icon({ name, ...rest }) {
  return <span className="ico" dangerouslySetInnerHTML={{ __html: I[name] }} style={{ display: 'contents' }} {...rest}></span>;
}

function CheckoutPage() {
  const params = new URLSearchParams(window.location.search);
  const initial = CO_PLANS.find((p) => p.id === params.get('plan')) || PLANS[3];
  const [sel, setSel] = React.useState(initial);
  const [form, setForm] = React.useState({ name: '', phone: '' });
  const [errs, setErrs] = React.useState({});
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'المرجو إدخال اسمك الكامل';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 9) er.phone = 'المرجو إدخال رقم واتساب صحيح';
    setErrs(er);
    if (Object.keys(er).length) return;
    const q = new URLSearchParams({ plan: sel.id, name: form.name.trim() });
    window.location.href = 'thank-you.html?' + q.toString();
  };

  return (
    <div className="page">
      <header className="page-head">
        <a className="logo" href="index.html">
          <span className="logo-mark"><Icon name="play" /></span>
          <span className="logo-text">TVDYALEK</span>
        </a>
        <a className="page-back" href="index.html"><Icon name="chevron" /> العودة للموقع</a>
      </header>

      <main className="page-main">
        <div className="co-card">
          <div className="co-card-head">
            <h1>إتمام الاشتراك</h1>
            <p>اختر باقتك وأدخل بياناتك — التفعيل فوري بعد تأكيد الدفع.</p>
          </div>

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

          <div className="field">
            <label>طريقة الدفع</label>
            <div className="pay-opts">
              <button className="pay-opt sel" type="button"><Icon name="bank" /> تحويل بنكي</button>
            </div>
          </div>
          <p className="co-note">
            بعد تأكيد الطلب، نرسل لك معلومات الحساب البنكي على واتساب مباشرة. يتم تفعيل اشتراكك فور
            التوصل بإشعار التحويل — عادة خلال دقائق.
          </p>

          <button className="btn btn-primary btn-lg" onClick={submit}>تأكيد الطلب — {sel.price} درهم</button>
          <div className="co-secure"><Icon name="lock" /> معاملة آمنة — تفعيل فوري بعد تأكيد التحويل</div>
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CheckoutPage />);
