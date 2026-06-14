// TVDYALEK — standalone thank-you PAGE shown after checkout.
// Reads ?plan=<id>&name=<name> to personalise the confirmation, and offers a
// prefilled WhatsApp button so the visitor can complete the bank transfer.
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
  const first = name.split(' ')[0] || 'لك';
  const waText = encodeURIComponent(
    'مرحباً 👋 لقد طلبت' + (plan ? ' باقة ' + plan.name : ' اشتراكاً') + ' في TVDYALEK' +
    (name ? ' باسم ' + name : '') + '. المرجو إرسال معلومات الدفع. شكراً!'
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
          <h1>شكراً {first}! 🎉</h1>
          <p>
            تم استلام طلب {plan ? <b>باقة {plan.name}</b> : 'اشتراكك'}
            {plan ? <span className="thanks-price"> — {plan.price} درهم</span> : null}.
            تواصل معنا الآن عبر واتساب لإتمام الدفع والحصول على بيانات التفعيل خلال دقائق.
          </p>
          <a className="btn btn-primary btn-lg btn-shine wa-cta" href={waLink}>
            <Icon name="whatsapp" /> أكمل عبر واتساب
          </a>
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
