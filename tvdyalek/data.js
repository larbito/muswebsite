// TVDYALEK — shared data + inline SVG icon paths (plain JS, no JSX)
(function () {
  const I = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg>',
    tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="m8 3 4 3 4-3M9 21h6"/></svg>',
    film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
    series: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M6 8V5h12v3M9 12h6"/></svg>',
    kids: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"/></svg>',
    quality: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="13" rx="2"/><path d="M9 21h6M8 9v5M8 11.5h2.5M10.5 9v5M13.5 9v5l3-2.5-3-2.5z" stroke-linejoin="round"/></svg>',
    speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4.5 17.5a9 9 0 1 1 15 0"/><path d="m12 13 4-4"/><circle cx="12" cy="14" r="1.6" fill="currentColor"/></svg>',
    devices: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="14" height="10" rx="2"/><path d="M6 19h6"/><rect x="16" y="9" width="6" height="10" rx="1.6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6z"/><path d="m9 12 2.2 2.2L15.5 9.8"/></svg>',
    headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4" height="6" rx="1.6"/><rect x="17" y="13" width="4" height="6" rx="1.6"/><path d="M19 19v1a2 2 0 0 1-2 2h-3"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 11a8 8 0 0 0-14.5-3.5M4 13a8 8 0 0 0 14.5 3.5"/><path d="M20 4v4h-4M4 20v-4h4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3.5" y="8" width="17" height="5" rx="1"/><path d="M5 13v7.5h14V13M12 8v12.5M12 8s-4.5.5-5.5-2C5.8 4 8.5 3 10 4.5 11.4 6 12 8 12 8zm0 0s4.5.5 5.5-2c.7-2-2-3-3.5-1.5C12.6 6 12 8 12 8z"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 3h10v5a5 5 0 0 1-10 0zM7 4H4v2a3.5 3.5 0 0 0 3 3.5M17 4h3v2a3.5 3.5 0 0 1-3 3.5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.5-.3-3 .8.8-2.9-.3-.5A8 8 0 0 1 12 4zm-3.1 4.3c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4z"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/></svg>',
    bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 9 5H3zM5 10v7M9.5 10v7M14.5 10v7M19 10v7M3 19.5h18"/></svg>',
    paypal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 20.5 9 4h6.5a4 4 0 0 1 4 4.5c-.4 3-2.7 4.5-5.5 4.5h-3l-1 7.5z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="5" width="16" height="11" rx="1.8"/><path d="M2 19h20"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 13h.01M11 13h6"/></svg>',
    apple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15.5 7.5c-1.3 0-2.3.7-3.5.7s-2.3-.7-3.5-.7C6 7.5 4 9.5 4 13c0 3.6 2.5 8 4.5 8 1 0 1.7-.7 3.5-.7s2.4.7 3.5.7c2 0 4.5-4.4 4.5-8 0-3.5-2-5.5-4.5-5.5z"/><path d="M12 7.2c0-2 1.5-3.7 3.5-4.2.1 2.1-1.6 4-3.5 4.2z"/></svg>',
    android: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 16a7 7 0 0 1 14 0z"/><path d="m7.5 6.5 1.5 2M16.5 6.5l-1.5 2M9.5 12.5h.01M14.5 12.5h.01"/></svg>',
  };

  const FEATURES = [
    { icon: 'quality', title: 'جودة 4K حقيقية', text: 'صورة فائقة الوضوح حتى 4K Ultra HD مع صوت محيطي، لتجربة سينمائية كاملة في بيتك.' },
    { icon: 'speed', title: 'سيرفرات قوية وسرعة عالية', text: 'بنية سيرفرات احترافية تضمن بثاً سلساً بدون تقطيع حتى في أوقات الذروة والمباريات الكبرى.' },
    { icon: 'devices', title: 'متوافق مع جميع الأجهزة', text: 'Smart TV، أندرويد، آيفون، كمبيوتر وأجهزة الاستقبال — اشتراك واحد يشتغل في كل مكان.' },
    { icon: 'shield', title: 'ثبات واستقرار 99.9%', text: 'خدمة مستقرة على مدار السنة مع أنظمة حماية ونسخ احتياطي تضمن استمرارية البث.' },
    { icon: 'headset', title: 'دعم فني 24/7', text: 'فريق دعم متواجد ليلاً ونهاراً عبر واتساب لمساعدتك في التفعيل وحل أي مشكلة بسرعة.' },
    { icon: 'refresh', title: 'تحديثات مستمرة للمحتوى', text: 'أحدث الأفلام والمسلسلات تُضاف فور صدورها، مع تحديث دائم لقوائم القنوات.' },
  ];

  const PLANS = [
    { id: 'm1', name: 'شهر واحد', price: 99, note: '', features: ['+60,000 قناة مباشرة', '+120,000 فيلم ومسلسل', 'جودة 4K حقيقية', 'دعم فني 24/7'] },
    { id: 'm3', name: '3 أشهر', price: 179, note: 'وفّر 40%', features: ['كل مميزات باقة الشهر', 'أولوية في الدعم الفني', 'تفعيل فوري', 'جهازان في نفس الوقت'] },
    { id: 'm6', name: '6 أشهر', price: 279, note: 'وفّر 53%', features: ['كل مميزات باقة 3 أشهر', 'سيرفر احتياطي مجاني', 'محتوى رياضي كامل', 'جهازان في نفس الوقت'] },
    { id: 'm12', name: '12 شهراً', price: 349, note: 'وفّر 71% — الأفضل قيمة', featured: true, features: ['كل المميزات بدون استثناء', 'شهر إضافي هدية', 'سيرفر احتياطي مجاني', 'أولوية قصوى في الدعم'] },
  ];

  const DEVICES = [
    { icon: 'tv', name: 'Smart TV' },
    { icon: 'android', name: 'أندرويد' },
    { icon: 'apple', name: 'آيفون / آيباد' },
    { icon: 'laptop', name: 'كمبيوتر' },
    { icon: 'box', name: 'أجهزة الاستقبال' },
    { icon: 'phone', name: 'هواتف ذكية' },
  ];

  const STEPS = [
    { title: 'اختر باقتك وأتمم الطلب', text: 'حدّد المدة المناسبة لك وأكمل عملية الشراء في أقل من دقيقتين.' },
    { title: 'تصلك بيانات التفعيل فوراً', text: 'نرسل لك كود التفعيل وروابط التطبيقات على واتساب أو بريدك الإلكتروني.' },
    { title: 'ثبّت التطبيق وابدأ المشاهدة', text: 'حمّل التطبيق على جهازك المفضل، أدخل الكود، واستمتع بعالم الترفيه كاملاً.' },
  ];

  const TRIAL = { id: 'd1', name: 'تجربة يوم واحد', price: 20, note: 'للتجربة فقط — تفعيل فوري', features: ['كل المحتوى بدون استثناء', 'جودة 4K حقيقية'] };

  const REASONS = [
    { icon: 'bolt', title: 'تفعيل خلال 60 ثانية', text: 'تصلك بيانات الاشتراك فور الدفع — بدون أجهزة إضافية وبدون رسوم تثبيت.' },
    { icon: 'shield', title: 'بث لا يتجمد وقت الذروة', text: 'سيرفرات مخصصة وخطوط احتياطية تضمن بثاً سلساً حتى في المباريات الكبرى.' },
    { icon: 'quality', title: 'جودة 4K UHD', text: 'Full HD كحد أدنى، و 4K على المحتوى المميز — أوضح من القمر الصناعي.' },
    { icon: 'tv', title: 'قنوات من كل العالم', text: 'رياضة عالمية، قنوات عربية وأوروبية وأمريكية وآسيوية — الخدمة تعمل في أي دولة.' },
    { icon: 'devices', title: 'يعمل على كل الأجهزة', text: 'Smart TV، Fire Stick، MAG، أندرويد، آيفون، حاسوب — مع أدلة تثبيت جاهزة.' },
    { icon: 'headset', title: 'دعم بشري 24/7', text: 'فريق حقيقي يرد على واتساب كل أيام السنة — أغلب المشاكل تُحل في دقائق.' },
    { icon: 'lock', title: 'دفع بسيط وآمن', text: 'تحويل بنكي مباشر — نرسل لك معلومات الحساب على واتساب ويُفعّل اشتراكك فوراً.' },
    { icon: 'refresh', title: 'ضمان استرداد المبلغ', text: 'ضمان يومين على باقات 3 أشهر فما فوق — استرداد كامل بدون أسئلة.' },
  ];

  const AVATARS = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/65.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/85.jpg',
  ];

  const QUOTES = [
    { name: 'محمد س.', city: 'مدريد — إسبانيا', img: 'tvdyalek/faces/m-beard.webp', text: 'جودة 4K حقيقية على شاشة 65 بوصة بدون تجمد حتى في ديربي نهاية الأسبوع. أفضل قرار هذه السنة.' },
    { name: 'سلمى ر.', city: 'باريس — فرنسا', img: 'tvdyalek/faces/w-young.webp', text: 'أكثر ما أعجبني هو سهولة التفعيل — طلبت الباقة وكنت أشاهد مسلسلي المفضل بعد أقل من ١٠ دقائق.' },
    { name: 'كريم ج.', city: 'لندن — بريطانيا', img: 'tvdyalek/faces/m-young.webp', text: 'جربت يوماً بـ 20 درهماً فقط، وفي اليوم الثاني أخذت باقة السنة. التجربة الصغيرة هذه فكرة ذكية فعلاً.' },
    { name: 'خديجة م.', city: 'الرباط — المغرب', img: 'tvdyalek/faces/w-hijab.webp', text: 'اشتركت لأجل الأطفال والمسلسلات، وبقيت لأجل كل شيء. حتى والدتي تستعمله بسهولة على التلفاز.' },
    { name: 'عمر ف.', city: 'مونتريال — كندا', img: 'tvdyalek/faces/m-elder.webp', text: 'أعيش في كندا وأتابع كل القنوات العربية والمباريات وكأني في البيت. الفارق الزمني لم يعد مشكلة مع نظام الإعادة.' },
    { name: 'نادية ق.', city: 'مراكش — المغرب', img: 'tvdyalek/faces/w-blouse.webp', text: 'الدعم على واتساب ممتاز — غيّروا لي الجهاز من التلفاز إلى الهاتف في أقل من ٥ دقائق وبدون أي تكلفة.' },
  ];

  const FAQ = [
    { q: 'كيف يتم التفعيل بعد الدفع؟', a: 'بمجرد إتمام الطلب، تصلك بيانات التفعيل (الكود وروابط التطبيقات) على واتساب أو بريدك الإلكتروني خلال دقائق، مع شرح مفصل خطوة بخطوة.' },
    { q: 'هل تشتغل الخدمة على جهازي؟', a: 'نعم — الخدمة متوافقة مع Smart TV بجميع أنواعها، هواتف أندرويد وآيفون، أجهزة الكمبيوتر، وأجهزة الاستقبال. إذا كان لديك شك، تواصل معنا قبل الشراء وسنتأكد معك.' },
    { q: 'كم جهازاً يمكنني استعمال الاشتراك عليه؟', a: 'الاشتراك يشتغل على جهاز واحد في نفس الوقت في الباقة الشهرية، وجهازين في باقات 3 أشهر فما فوق. يمكنك تثبيت التطبيق على عدة أجهزة والتنقل بينها.' },
    { q: 'ماذا لو واجهت مشكلة تقنية؟', a: 'فريق الدعم متواجد 24/7 عبر واتساب. أغلب المشاكل تُحل في أقل من 15 دقيقة، وإذا كان هناك عطل من جهتنا نعوضك بأيام إضافية في اشتراكك.' },
    { q: 'هل الخدمة تعمل خارج المغرب؟', a: 'نعم — الخدمة تعمل في جميع دول العالم. كل ما تحتاجه هو اتصال إنترنت مستقر، ولدينا مشتركون في أوروبا والخليج وأمريكا.' },
    { q: 'ما هي طريقة الدفع؟', a: 'الدفع يتم عبر التحويل البنكي. بعد تأكيد طلبك، نرسل لك معلومات الحساب البنكي على واتساب، ويتم التفعيل فور التوصل بإشعار التحويل. جميع الأسعار بالدرهم المغربي وشاملة، بدون أي رسوم خفية.' },
    { q: 'هل الأسعار نهائية أم هناك تجديد تلقائي؟', a: 'السعر الذي تراه هو ما تدفعه مرة واحدة — لا يوجد تجديد تلقائي ولا اقتطاعات مفاجئة. عند نهاية المدة نراسلك إن رغبت في التجديد.' },
    { q: 'هل يمكنني الترقية إلى باقة أطول لاحقاً؟', a: 'بالتأكيد — يمكنك الترقية في أي وقت، ونخصم قيمة المدة المتبقية من اشتراكك الحالي من سعر الباقة الجديدة. راسلنا على واتساب وسنرتب لك كل شيء.' },
  ];

  const STATS = [
    { num: '+60,000', label: 'قناة مباشرة' },
    { num: '+120,000', label: 'فيلم ومسلسل' },
    { num: '99.9%', label: 'ثبات واستقرار' },
    { num: '24/7', label: 'دعم فني' },
  ];

  const CHIPS = [
    ['قنوات مباشرة', '+60,000'], ['أفلام ومسلسلات', '+120,000'], ['رياضة وبطولات', '+12,000 قناة'],
    ['قنوات عربية وعالمية', '+40,000'], ['قنوات أطفال', '+3,000'], ['الجودة', '4K UHD'],
  ];

  const CHANNELS_A = [
    ['beIN SPORTS 1', 'رياضة'], ['beIN SPORTS 2', 'رياضة'], ['SSC 1', 'رياضة'], ['الكأس', 'رياضة'],
    ['أبوظبي الرياضية', 'رياضة'], ['الرياضية المغربية', 'رياضة'], ['الجزيرة', 'أخبار'], ['العربية', 'أخبار'],
    ['سكاي نيوز عربية', 'أخبار'], ['MBC 1', 'عامة'], ['MBC مصر', 'عامة'], ['الأولى', 'عامة'],
    ['2M', 'عامة'], ['ميدي 1', 'عامة'], ['دبي', 'عامة'], ['روتانا خليجية', 'عامة'],
  ];
  const CHANNELS_B = [
    ['MBC 2', 'أفلام'], ['MBC Action', 'أفلام'], ['روتانا سينما', 'أفلام'], ['ART أفلام', 'أفلام'],
    ['MBC دراما', 'مسلسلات'], ['نايل دراما', 'مسلسلات'], ['ON دراما', 'مسلسلات'], ['CBC', 'مسلسلات'],
    ['دبي ون', 'مسلسلات'], ['MBC 3', 'أطفال'], ['سبيستون', 'أطفال'], ['طيور الجنة', 'أطفال'],
    ['ماجد', 'أطفال'], ['كرتون نتورك بالعربية', 'أطفال'], ['وطنية 1', 'عامة'], ['الشارقة', 'عامة'],
  ];

  window.TVD = { I, FEATURES, PLANS, TRIAL, REASONS, AVATARS, DEVICES, STEPS, QUOTES, FAQ, STATS, CHIPS, CHANNELS_A, CHANNELS_B };
})();
