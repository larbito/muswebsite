// TVDYALEK — standalone thank-you PAGE shown after checkout.
// Reads ?plan=<id>&name=<name>&oid=<orderId> to personalise the confirmation,
// shows the order ID, and offers a prefilled WhatsApp button (including the
// order ID) so the visitor can complete the bank transfer.
const { I, PLANS, TRIAL } = window.TVD;
const CO_PLANS = [TRIAL].concat(PLANS);
const WA_NUMBER = '212714561749';

function Icon({ name, ...rest }) {
  return <span className="ico" dangerouslySetInnerHTML={{ __html: I[name] }} style={{ display: 'contents' }} {...rest}></span>;
}

function ThankYouPage() {
  const params = new URLSearchParams(window.location.search);
  const plan = CO_PLANS.find((p) => p.id === params.get('plan'));
  const name = (params.get('name') || '').trim();
  const orderId = (params.get('oid') || '').trim();
  const first = name.split(' ')[0] || 'لك';
  const waText = encodeURIComponent(
    'مرحباً 👋 لقد قمت بطلب' + (plan ? ' باقة ' + plan.name : ' اشتراك') + ' عبر موقع TVDYALEK' +
    (orderId ? '\nرقم الطلب: ' + orderId : '') +
    (name ? '\nالاسم: ' + name : '') +
    '\nالمرجو إرسال معلومات الدفع لإتمام الاشتراك. شكراً!'
  );
  const waLink = 'https://wa.me/' + WA_NUMBER + '?text=' + waText;

  return (
    <div className="page">
      <header className="page-head">
        <a className="logo" href="index.html">
          <span className="logo-mark"><Icon name="play" /></span>
          <span className="logo-text">TVDYALEK</span>
        </a>
      </header>

      <main className="page-main">
        <div className="thanks-card">
          <span className="thanks-icon"><Icon name="check" /></span>
          <h1>تم تأكيد طلبك، {first}! 🎉</h1>
          <p>
            تم استلام طلب {plan ? <b>باقة {plan.name}</b> : 'اشتراكك'}
            {plan ? <span className="thanks-price"> — {plan.price} درهم</span> : null}.
            أرسلنا لك تأكيداً على بريدك الإلكتروني، وسيتواصل معك أحد مسؤولينا قريباً عبر واتساب لإتمام الدفع.
          </p>

          {orderId && (
            <div className="order-id">
              <span>رقم طلبك</span>
              <b>{orderId}</b>
            </div>
          )}

          <a className="btn btn-primary btn-lg btn-shine wa-cta" href={waLink}>
            <Icon name="whatsapp" /> تواصل عبر واتساب الآن
          </a>
          <p className="thanks-hint">
            لم يصلك رد خلال 10 دقائق؟ تواصل معنا مباشرة عبر الزر أعلاه واذكر رقم طلبك
            {orderId ? <b> ({orderId})</b> : null}.
          </p>

          <ul className="thanks-steps">
            <li><Icon name="check" /> سنرسل لك معلومات الحساب البنكي على واتساب</li>
            <li><Icon name="check" /> يتم التفعيل فور التوصل بإشعار التحويل</li>
            <li><Icon name="headset" /> دعم 24/7 لمساعدتك في التشغيل على أي جهاز</li>
          </ul>
          <a className="page-back" href="index.html"><Icon name="chevron" /> العودة للصفحة الرئيسية</a>
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ThankYouPage />);
