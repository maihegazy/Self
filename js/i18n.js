/* Bilingual content for the Self Counseling Center site. Ported from the
   approved design (Self Website.dc.html). */
(function (global) {
  "use strict";

  var TEAM_META = [
    { img: "assets/team/1.png", initials: { en: "MZ", ar: "مز" }, en: ["Mahmoud Zaki", "Counseling Psychologist · Founder of Self Center"], ar: ["محمود زكي", "أخصائي نفسي · مؤسس مركز سيلف"], colors: ["#00B5E8", "#F89F1E"] },
    { img: "assets/team/2.png", initials: { en: "MA", ar: "مح" }, en: ["Dr. Mohamed Al-Hallag", "Consultant Psychiatrist"], ar: ["د. محمد الحلاج", "استشاري الطب النفسي"], colors: ["#00B5E8", "#575CA8"] },
    { img: "assets/team/6.png", initials: { en: "ME", ar: "ما" }, en: ["Dr. Magda Emara", "Psychotherapist & Couple Therapist"], ar: ["د. ماجدة عمارة", "معالجة نفسية ومعالجة أزواج"], colors: ["#F89F1E", "#37B34A"] },
    { img: "assets/team/14.png", initials: { en: "DM", ar: "دي" }, en: ["Dina Mouhran", "Counseling Psychologist & Couple Therapist"], ar: ["دينا مهران", "أخصائية نفسية إرشادية ومعالجة أزواج"], colors: ["#575CA8", "#F89F1E"] },
    { img: "assets/team/10.png", initials: { en: "SE", ar: "سل" }, en: ["Salma El-Baradie", "Existential Psychotherapist"], ar: ["سلمى البرادعي", "معالجة نفسية وجودية"], colors: ["#37B34A", "#00B5E8"] },
    { img: "assets/team/5.png", initials: { en: "HH", ar: "هب" }, en: ["Heba Hamza", "Clinical Psychologist · Perinatal Mental Health"], ar: ["هبة حمزة", "أخصائية نفسية إكلينيكية · متخصصة الصحة النفسية للأمهات"], colors: ["#00B5E8", "#F89F1E"] },
    { img: "assets/team/7.png", initials: { en: "IT", ar: "إي" }, en: ["Imane Tazi", "Clinical Psychologist"], ar: ["إيمان تازي", "أخصائية نفسية إكلينيكية"], colors: ["#575CA8", "#37B34A"] },
    { img: "assets/team/9.png", initials: { en: "FB", ar: "فب" }, en: ["Farida Badran", "Clinical Psychologist"], ar: ["فريدة بدران", "أخصائية نفسية إكلينيكية"], colors: ["#F89F1E", "#575CA8"] },
    { img: "assets/team/12.png", initials: { en: "HH", ar: "هن" }, en: ["Hana Habib", "Clinical Psychologist · Eating Disorders"], ar: ["هنا حبيب", "أخصائية نفسية إكلينيكية و معالجة اضطرابات الأكل"], colors: ["#37B34A", "#F89F1E"] },
    { img: "assets/team/3.png", initials: { en: "SS", ar: "سا" }, en: ["Sara Soliman", "Psychologist & ED Therapist"], ar: ["سارة سليمان", "أخصائية نفسية ومعالجة اضطرابات الأكل"], colors: ["#00B5E8", "#37B34A"] },
    { img: "assets/team/13.png", initials: { en: "SE", ar: "سه" }, en: ["Soha ElSokkary", "Counseling Psychologist"], ar: ["سها السكري", "أخصائية نفسية إرشادية"], colors: ["#575CA8", "#00B5E8"] },
    { img: "assets/team/8.png", initials: { en: "NM", ar: "نو" }, en: ["Nour Mahmoud", "Child Psychologist"], ar: ["نور محمود", "أخصائية نفسية للأطفال"], colors: ["#F89F1E", "#00B5E8"] },
    { img: "assets/team/4.png", initials: { en: "SH", ar: "سه" }, en: ["Sohila Hassan", "Nutritionist & ED Dietitian"], ar: ["سهيلة حسن", "أخصائية تغذية لاضطرابات الأكل"], colors: ["#37B34A", "#575CA8"] },
    { img: "assets/team/11.png", initials: { en: "FN", ar: "فن" }, en: ["Farida Naguib", "Therapist in Training"], ar: ["فريدة نجيب", "أخصائية تحت التدريب"], colors: ["#00B5E8", "#575CA8"] },
    { img: "assets/team/malak.png", initials: { en: "MH", ar: "فن" }, en: ["Malak Helal", "Clinical Psychologist"], ar: ["ملك هلال", "أخصائية نفسية إكلينيكية"], colors: ["#F89F1E", "#575CA8"] }

  ];

  var ICON_PAIRS = [
    ["#00B5E8", "#575CA8"], ["#F89F1E", "#37B34A"], ["#575CA8", "#F89F1E"], ["#37B34A", "#00B5E8"],
    ["#00B5E8", "#F89F1E"], ["#575CA8", "#37B34A"], ["#F89F1E", "#575CA8"], ["#37B34A", "#F89F1E"],
    ["#00B5E8", "#37B34A"], ["#575CA8", "#00B5E8"]
  ];

  var VALUE_COLORS = ["rgba(0,181,232,.35)", "rgba(248,159,30,.4)", "rgba(87,92,168,.35)", "rgba(55,179,74,.35)", "rgba(0,181,232,.22)"];
  var TESTI_COLORS = ["#00B5E8", "#F89F1E", "#575CA8"];

  var en = {
    dir: "ltr",
    langBtn: "العربية",
    bookCta: "Book a session",
    heroTitle: "Where Healing Begins.",
    heroSub: "Self Center is a multidisciplinary mental health center based in Cairo, Egypt, offering psychotherapy, psychiatry, and nutrition counseling. We provide compassionate, evidence-based care in a safe and welcoming environment, helping individuals and families heal, grow, and thrive.",
    heroSecondary: "Explore our services",
    aboutKicker: "About Self",
    aboutTitle: "Therapy that starts with understanding you",
    aboutP1: "At Self, we believe that seeking support is an act of strength. Our mission is to make high-quality, evidence-based mental health care accessible through a compassionate, ethical, and collaborative approach.",
    aboutP2: "Founded in Cairo, Egypt, Self brings together a multidisciplinary team of psychologists, psychiatrists, nutritionists, and mental health professionals supporting children, adolescents, adults, couples, and families. Rather than one-size-fits-all solutions, we tailor every treatment plan to your needs, goals, values, and life circumstances.",
    aboutStats: [
      { label: "A safe, judgment-free space", color: "#00B5E8" },
      { label: "Specialized, evidence-based care", color: "#F89F1E" },
      { label: "In-clinic & online sessions", color: "#575CA8" },
      { label: "Arabic, English & French", color: "#37B34A" }
    ],
    servicesKicker: "Services",
    servicesTitle: "How we can help",
    servicesSub: "Focused, specialized care, in the clinic or online.",
    services: [
      { name: "Individual Therapy", desc: "Personalized psychotherapy for adults, adolescents, and children, using evidence-based approaches." },
      { name: "Couples Therapy", desc: "Improving communication, resolving conflict, and rebuilding trust in relationships." },
      { name: "Family Therapy", desc: "Healthier communication patterns and support through life transitions, together." },
      { name: "Psychiatric Services", desc: "Comprehensive assessment, diagnosis, medication management, and integrated care." },
      { name: "Eating Disorder Treatment", desc: "Multidisciplinary care for anorexia, bulimia, binge eating, ARFID, and emotional eating." },
      { name: "Nutrition Counseling", desc: "Specialized nutritional support for eating disorders and a healthier relationship with food." },
      { name: "Psychological Assessments", desc: "Evidence-based evaluations for diagnosis, treatment planning, and personal development." },
      { name: "Groups & Workshops", desc: "Educational workshops and therapeutic groups on well-being, parenting, relationships, and stress." },
      { name: "Corporate Programs", desc: "Workshops, webinars, and consultation for employee well-being and healthier workplaces." },
      { name: "Online Therapy", desc: "Secure online sessions for clients inside and outside Egypt, in Arabic, English, or French." }
    ],
    teamKicker: "Meet the team",
    teamTitle: "The people behind Self",
    teamSub: "A multidisciplinary team of psychologists, psychiatrists, therapists, and nutritionists — chosen for their expertise, and for their empathy.",
    teamMore: "Meet the full team",
    valuesKicker: "Our approach",
    valuesTitle: "What we stand for",
    values: [
      { name: "Evidence-based practice", desc: "Methods grounded in current clinical research, never guesswork." },
      { name: "Compassionate care", desc: "Non-judgmental, human, and warm. You are heard before anything else." },
      { name: "Ethics & confidentiality", desc: "Professional ethics guide everything we do. What is said stays private." },
      { name: "Respect for diversity", desc: "Care that honors your individuality, culture, values, and language." },
      { name: "Continuous learning", desc: "A collaborative team committed to lifelong growth and development." }
    ],
    testiKicker: "Testimonials",
    testiTitle: "Words from our clients",
    testiPlaceholderNote: "",
    testimonials: [
      { quote: "For the first time I felt someone actually understood my relationship with food, without judging me.", who: "Client, eating disorder program" },
      { quote: "The sessions gave me tools I use every single day. I finally feel in control of my anxiety.", who: "Client, individual therapy" },
      { quote: "My performance on the field changed when my mindset did. This work matters as much as training.", who: "Athlete, sports psychology" }
    ],
    faqKicker: "FAQ",
    faqTitle: "Common questions",
    faqs: [
      { q: "How do I book a session?", a: "Use the booking form below, call us, or message us on Instagram. We’ll confirm a time that works for you, usually within one business day." },
      { q: "Is everything I share confidential?", a: "Yes. Confidentiality is the foundation of our work. Nothing you share leaves the session, except in the rare situations required by law or safety, which your therapist will explain in your first session." },
      { q: "Do you offer online sessions?", a: "Yes, secure video sessions in Arabic, English, or French, with the same care and structure as in-clinic sessions. Many clients combine both." },
      { q: "What should I expect in the first session?", a: "The first session is a gentle conversation: getting to know you, understanding what brings you in, and agreeing together on a way forward. There is nothing to prepare — just come as you are." }
    ],
    contactKicker: "Contact · Book",
    contactTitle: "Book your first session",
    contactSub: "Tell us a little about what you need, we usually reply within one business day.",
    fName: "Name", fNamePh: "Your full name",
    fEmail: "Email", fEmailPh: "you@example.com",
    fService: "Service", fMessage: "Message (optional)", fMessagePh: "Anything you would like us to know before your first session…",
    fSubmit: "Send booking request",
    fPrivacy: "Everything you share with us is confidential.",
    fSelectPh: "Choose a service…",
    errNameReq: "Please enter your name.",
    errEmailReq: "Please enter your email.",
    errEmailBad: "That email doesn’t look right.",
    errServiceReq: "Please choose a service.",
    successTitle: "Request received",
    successSub: "Thank you, we’ll get back to you shortly to confirm your session time.",
    successAgain: "Send another request",
    cPhone: "Phone", cEmail: "Email", cLocation: "Location",
    cAddress: "Sodic West, Sheikh Zayed, Giza, Egypt",
    cHours: "Hours", cHoursVal: "Sat – Thu · 10:00 AM – 10:00 PM",
    footerWordmark: "Counseling center",
    copyright: "© 2026 Self Counseling Center. All rights reserved.",
    navLinks: [
      { href: "#about", label: "About" }, { href: "#services", label: "Services" },
      { href: "#team", label: "Team" }, { href: "#faq", label: "FAQ" }, { href: "#contact", label: "Contact" }
    ]
  };

  var ar = {
    dir: "rtl",
    langBtn: "English",
    bookCta: "احجز جلسة",
    heroTitle: "حيث تبدأ راحتك النفسية",
    heroSub: "سيلف سنتر هو مركز متخصص في الصحة النفسية في القاهرة، مصر، يقدّم خدمات العلاج النفسي والاستشارات النفسية والغذائية. نوفر رعاية قائمة على الأدلة العلمية، تتسم بالتعاطف، داخل بيئة آمنة، لمساعدة الأفراد والأسر على التعافي والنمو وتحقيق حياة أكثر توازنًا وازدهارًا.",
    heroSecondary: "تعرّف على خدماتنا",
    aboutKicker: "عن سيلف",
    aboutTitle: "علاج نفسي يبدأ بفهمك لنفسك",
    aboutP1: "نؤمن في «سيلف» أن طلب المساعدة قوة. مهمتنا أن نقدم الرعاية و الدعم النفسي متاح بجودة عالية للجميع، من خلال رؤية احترافية وأخلاقية.",
    aboutP2: "تأسس «سيلف» في مصر، مكوناً من فريق متعدد التخصصات من الأخصائيين النفسيين والأطباء النفسيين وأخصائيي التغذية، لدعم الأطفال والمراهقين والبالغين والأزواج والأسر. يصمم فريقنا العلاجي كل خطة علاج وفق احتياجاتك وأهدافك وقيمك وظروف حياتك.",
    aboutStats: [
      { label: "مساحة آمنة خالية من الأحكام", color: "#00B5E8" },
      { label: "رعاية متخصصة قائمة على الأدلة", color: "#F89F1E" },
      { label: "جلسات في المركز وأونلاين", color: "#575CA8" },
      { label: "بالعربية والإنجليزية والفرنسية", color: "#37B34A" }
    ],
    servicesKicker: "خدماتنا",
    servicesTitle: "كيف يمكننا مساعدتك",
    servicesSub: "رعاية متخصصة ومركزة , في المركز أو أونلاين.",
    services: [
      { name: "العلاج الفردي", desc: "علاج نفسي مخصص للبالغين والمراهقين والأطفال بأساليب قائمة على الأدلة." },
      { name: "علاج الأزواج", desc: "تحسين التواصل وحل الخلافات وإعادة بناء الثقة في العلاقة." },
      { name: "العلاج الأسري", desc: "أنماط تواصل أكثر صحة ودعم للأسرة في مراحل التغيير , معًا." },
      { name: "خدمات الطب النفسي", desc: "تقييم شامل وتشخيص وإدارة للأدوية ورعاية متكاملة." },
      { name: "علاج اضطرابات الأكل", desc: "رعاية متعددة التخصصات لفقدان الشهية والشره ونوبات الأكل القهري والأكل العاطفي." },
      { name: "استشارات التغذية", desc: "دعم غذائي متخصص لاضطرابات الأكل وبناء علاقة أكثر صحة مع الطعام." },
      { name: "التقييمات النفسية", desc: "تقييمات قائمة على الأدلة للتشخيص وخطط العلاج والتطور الشخصي." },
      { name: "مجموعات وورش عمل", desc: "ورش تثقيفية ومجموعات علاجية حول الصحة النفسية والتربية والعلاقات والضغوط." },
      { name: "برامج الشركات", desc: "ورش وندوات واستشارات نفسية لرفاهية الموظفين وبيئات عمل أكثر صحة." },
      { name: "العلاج أونلاين", desc: "جلسات آمنة عبر الإنترنت للعملاء داخل مصر وخارجها , أبالعربية أو الإنجليزية أو الفرنسية." }
    ],
    teamKicker: "تعرّف على الفريق",
    teamTitle: "فريق مركز «سيلف»",
    teamSub: "فريق متعدد التخصصات من الأخصائيين والأطباء النفسيين والمعالجين وأخصائيي التغذية , اخترناهم لخبرتهم وإنسانيتهم.",
    teamMore: "تعرّف على الفريق كاملًا",
    valuesKicker: "نهجنا",
    valuesTitle: "قيمنا",
    values: [
      { name: "ممارسة قائمة على الأدلة", desc: "أساليب مبنية على أحدث الأبحاث العلمية , لا تخمين." },
      { name: "رعاية إنسانية", desc: "بلا أحكام، إنسانية ودافئة. تُسمَع قبل أي شيء آخر." },
      { name: "أخلاقيات المهنة والسرّية", desc: "أخلاقيات المهنة تحكم كل ما نقوم به؛ ما يُقال يبقى سرّيًا." },
      { name: "احترام التنوع و الاختلاف", desc: "رعاية تحترم فرديتك وثقافتك وقيمك ولغتك." },
      { name: "تعلّم مستمر", desc: "فريق متعاون ملتزم بالنمو والتعلم مدى الحياة." }
    ],
    testiKicker: "آراء عملائنا",
    testiTitle: "كلمات من عملائنا",
    testiPlaceholderNote:"",
    testimonials: [
      { quote: "لأول مرة شعرت أن أحدًا يفهم علاقتي بالطعام فعلًا — دون أن يحكم عليّ. ", who: "عميلة، برنامج اضطرابات الأكل" },
      { quote: "أعطتني الجلسات أدوات أستخدمها كل يوم. أخيرًا أشعر أنني أتعامل أفضل مع قلقي.", who: "عميل، علاج فردي" },
      { quote: "تغيّر أدائي في الملعب عندما تغيّرت عقليتي. الدعم النفسي لا يقل أهمية عن التدريب. ", who: "رياضي، علم النفس الرياضي" }
    ],
    faqKicker: "الأسئلة الشائعة",
    faqTitle: "أسئلة متكررة",
    faqs: [
      { q: "كيف أحجز جلسة؟", a: "استخدم نموذج الحجز بالأسفل، أو اتصل بنا، أو راسلنا على إنستغرام. سنؤكد لك موعدًا مناسبًا، عادةً خلال يوم عمل واحد." },
      { q: "هل كل ما أشاركه سرّي؟", a: "نعم. السرية أساس عملنا. لا يخرج شيء مما تشاركه من الجلسة، إلا في الحالات النادرة التي يقتضيها القانون أو السلامة، وسيشرحها لك معالجك في الجلسة الأولى." },
      { q: "هل تقدمون جلسات أونلاين؟", a: "نعم — جلسات فيديو آمنة بالعربية أو الإنجليزية، بنفس عناية وهيكل الجلسات في مركز. كثير من عملائنا يجمعون بين الاثنين." },
      { q: "ماذا أتوقع في الجلسة الأولى؟", a: "الجلسة الأولى حوار هادئ: نتعرف عليك، ونفهم ما الذي أتى بك، ونتفق معًا على الطريق. لا شيء تحتاج تحضيره , تعال كما أنت." }
    ],
    contactKicker: "تواصل · احجز",
    contactTitle: "احجز جلستك الأولى",
    contactSub: "أخبرنا قليلًا عمّا تحتاجه — نرد عادةً خلال يوم عمل واحد.",
    fName: "الاسم", fNamePh: "اسمك الكامل",
    fEmail: "البريد الإلكتروني", fEmailPh: "you@example.com",
    fService: "الخدمة", fMessage: "رسالتك (اختياري)", fMessagePh: "أي شيء تودّ أن نعرفه قبل جلستك الأولى…",
    fSubmit: "إرسال طلب الحجز",
    fPrivacy: "كل ما تشاركه معنا سرّي تمامًا.",
    fSelectPh: "اختر خدمة…",
    errNameReq: "من فضلك أدخل اسمك.",
    errEmailReq: "من فضلك أدخل بريدك الإلكتروني.",
    errEmailBad: "هذا البريد لا يبدو صحيحًا.",
    errServiceReq: "من فضلك اختر خدمة.",
    successTitle: "تم استلام طلبك",
    successSub: "شكرًا لك — سنتواصل معك قريبًا لتأكيد موعد جلستك.",
    successAgain: "إرسال طلب آخر",
    cPhone: "الهاتف", cEmail: "البريد", cLocation: "العنوان",
    cAddress: "سوديك ويست، الشيخ زايد، الجيزة، مصر",
    cHours: "مواعيد العمل", cHoursVal: "السبت – الخميس · ١٠ صباحًا – ١٠ مساءً",
    footerWordmark: "مركز استشارات نفسية",
    copyright: "© 2026 مركز سيلف للاستشارات النفسية. جميع الحقوق محفوظة.",
    navLinks: [
      { href: "#about", label: "عن المركز" }, { href: "#services", label: "الخدمات" },
      { href: "#team", label: "الفريق" }, { href: "#faq", label: "الأسئلة" }, { href: "#contact", label: "تواصل" }
    ]
  };

  global.SELF_I18N = {
    en: en,
    ar: ar,
    TEAM_META: TEAM_META,
    ICON_PAIRS: ICON_PAIRS,
    VALUE_COLORS: VALUE_COLORS,
    TESTI_COLORS: TESTI_COLORS
  };
})(window);
