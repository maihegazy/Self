/* Bilingual content for the full team page (team.html).
   Edit member content here — each member has English (en) and Arabic (ar)
   name/title/tags/paras. Photos live in assets/team/. */
(function (global) {
  "use strict";

  var page = {
    en: {
      langBtn: "العربية",
      back: "← Back to home",
      book: "Book a session",
      kicker: "Our team",
      title: "Meet the team",
      sub: "Every clinician at Self is carefully selected not only for their professional qualifications, but for their empathy, integrity, and dedication to lifelong learning.",
      copyright: "© 2026 Self Counseling Center. All rights reserved."
    },
    ar: {
      langBtn: "English",
      back: "→ العودة للرئيسية",
      book: "احجز جلسة",
      kicker: "فريقنا",
      title: "تعرّف على الفريق",
      sub: "نختار كل أخصائي في «سيلف» بعناية، ليس فقط لمؤهلاته المهنية، بل لتعاطفه ونزاهته وسعيه الدائم للتعلّم والتطور.",
      copyright: "© 2026 مركز سيلف للاستشارات النفسية. جميع الحقوق محفوظة."
    }
  };

  var members = [
    {
      img: "assets/team/1.png",
      en: {
        name: "Mahmoud Zaki",
        title: "Counseling Psychologist · Founder of Self Center",
        tags: ["Eating disorders", "Sports psychology", "Addiction", "Body image"],
        paras: [
          "Mahmoud is a leading eating-disorders therapist in Egypt who has worked over the past 10 years with individuals and families to overcome maladaptive eating behaviors, bariatric surgery rehabilitation, addiction, and body-image issues — in addition to related struggles such as grief, trauma, mood, and personality disorders.",
          "He was trained with and is associated with the UK’s National Centre for Eating Disorders (NCFED) and the British National Centre of Excellence for Eating Disorders (NCEED), after completing his master’s degree in counseling psychology at the University of Westminster. He also holds a diploma in addiction and behavior management from the Net Institute (USA) and the Sports Mental Health Diploma from Western University, Canada.",
          "Mahmoud is the author of three Arabic books on mental health — “Bartaman Nutella,” “1/4 Gramme Sokar,” and “The Joker’s Tales” — and the founder of SELF-ED, the first Arabic/English online platform raising awareness about eating problems and mental health in the Middle East."
        ]
      },
      ar: {
        name: "محمود زكي",
        title: "أخصائي نفسي إرشادي · مؤسس مركز سيلف",
        tags: ["اضطرابات الأكل", "علم النفس الرياضي", "الإدمان", "صورة الجسد"],
        paras: [
          "محمود من أبرز معالجي اضطرابات الأكل في مصر، وقد عمل على مدى السنوات العشر الماضية مع الأفراد والأسر للتغلب على سلوكيات الأكل المضطربة، والتأهيل بعد جراحات السمنة، والإدمان، ومشكلات صورة الجسد — إلى جانب صعوبات مرتبطة كالفقد والصدمات واضطرابات المزاج والشخصية.",
          "تدرّب وارتبط بالمركز الوطني لاضطرابات الأكل في بريطانيا (NCFED) والمركز الوطني البريطاني للتميّز في اضطرابات الأكل (NCEED)، بعد حصوله على درجة الماجستير في علم النفس الإرشادي من جامعة وستمنستر. كما يحمل دبلومة في الإدمان وإدارة السلوك من معهد Net (الولايات المتحدة)، ودبلومة الصحة النفسية الرياضية من جامعة وسترن بكندا.",
          "محمود مؤلف ثلاثة كتب عربية عن الصحة النفسية — «برطمان نوتيلا»، و«ربع جرام سكر»، و«حواديت الجوكر» — ومؤسس «SELF-ED»، أول منصة عربية/إنجليزية للتوعية بمشكلات الأكل والصحة النفسية في الشرق الأوسط."
        ]
      }
    },
    {
      img: "assets/team/2.png",
      en: {
        name: "Dr. Mohamed Al-Hallag",
        title: "Consultant Psychiatrist",
        tags: ["Adult psychiatry", "Addiction", "Personality disorders", "DBT", "13 years"],
        paras: [
          "Dr. Al-Hallag is a seasoned psychiatrist with over 12 years of comprehensive clinical experience. A graduate of Tanta University’s Faculty of Medicine, he began his career as a psychiatry resident at Abbas Helmy Hospital with a six-year focus on addiction treatment, earned a DPP degree from Ain Shams University, a Diploma in Psychodynamics (2022), and advanced DBT-skills training from the Alexandria Institute of Psychotherapy and EACMED (2024).",
          "His practice spans hospitals, community mental health centers, and private practice, combining psychotherapy, psychopharmacology, and crisis intervention. His tenure with Médecins Sans Frontières (Doctors Without Borders) enriched his ability to deliver compassionate care across diverse contexts. Specialties include addiction, personality disorders, depression, anxiety, and bipolar disorder."
        ]
      },
      ar: {
        name: "د. محمد الحلاج",
        title: "استشاري الطب النفسي",
        tags: ["الطب النفسي للبالغين", "الإدمان", "اضطرابات الشخصية", "العلاج الجدلي السلوكي", "١٣ عامًا"],
        paras: [
          "الدكتور الحلاج طبيب نفسي متمرّس يمتلك أكثر من ١٢ عامًا من الخبرة الإكلينيكية الشاملة. تخرّج في كلية الطب بجامعة طنطا، وبدأ مسيرته طبيبًا مقيمًا للطب النفسي بمستشفى عباس حلمي مع تركيز على علاج الإدمان لمدة ست سنوات، وحصل على درجة DPP من جامعة عين شمس، ودبلومة في الديناميكا النفسية (٢٠٢٢)، وتدريب متقدم على مهارات العلاج الجدلي السلوكي من معهد الإسكندرية للعلاج النفسي وEACMED (٢٠٢٤).",
          "تمتد ممارسته عبر المستشفيات ومراكز الصحة النفسية المجتمعية والعيادات الخاصة، جامعًا بين العلاج النفسي والعلاج الدوائي والتدخل في الأزمات. وقد أثرَت فترة عمله مع منظمة أطباء بلا حدود قدرته على تقديم رعاية رحيمة في سياقات متنوعة. تشمل تخصصاته الإدمان واضطرابات الشخصية والاكتئاب والقلق واضطراب ثنائي القطب."
        ]
      }
    },
    {
      img: "assets/team/6.png",
      en: {
        name: "Dr. Magda Emara",
        title: "Psychotherapist & Couple Therapist",
        tags: ["Schema therapy", "Couples & family", "Psychodrama", "Addiction"],
        paras: [
          "Dr. Emara holds a PhD in Philosophy, a Diploma in Clinical Psychology, and specialized diplomas in Addiction Studies from the General Secretariat of Mental Health. She has reached the advanced level in Schema Therapy for individuals and couples through Schema Frankfurt and the Rakhawy Institute, with specialized training in psychodrama and sociodrama from the Uppsala Institute in Sweden.",
          "She has guided patients through some of the most difficult psychological challenges — psychosis, trauma, severe personality disorders, addiction, eating disorders, anxiety, and OCD. Her true passion today lies in marital and family therapy and in leading dynamic psychodrama and sociodrama groups for children and adolescents, involving parents to help families grow stronger together."
        ]
      },
      ar: {
        name: "د. ماجدة عمارة",
        title: "معالجة نفسية ومعالجة أزواج",
        tags: ["علاج المخططات", "الأزواج والأسرة", "السيكودراما", "الإدمان"],
        paras: [
          "تحمل الدكتورة عمارة درجة الدكتوراه في الفلسفة، ودبلومة في علم النفس الإكلينيكي، ودبلومات متخصصة في دراسات الإدمان من الأمانة العامة للصحة النفسية. وقد بلغت المستوى المتقدم في علاج المخططات (Schema Therapy) للأفراد والأزواج عبر Schema Frankfurt ومعهد الرخاوي، مع تدريب متخصص في السيكودراما والسوسيودراما من معهد أوبسالا في السويد.",
          "رافقت مرضاها عبر بعضٍ من أصعب التحديات النفسية — الذهان والصدمات واضطرابات الشخصية الحادة والإدمان واضطرابات الأكل والقلق والوسواس القهري. أما شغفها الحقيقي اليوم فيتمثّل في العلاج الزواجي والأسري، وفي قيادة مجموعات السيكودراما والسوسيودراما التفاعلية للأطفال والمراهقين بمشاركة الآباء لمساعدة الأسر على النمو معًا."
        ]
      }
    },
    {
      img: "assets/team/14.png",
      en: {
        name: "Dina Mouhran",
        title: "Counseling Psychologist & Couple Therapist",
        tags: ["Women’s issues", "Family dynamics", "Adolescents", "20 years"],
        paras: [
          "Dina is a counseling psychologist with nearly 20 years of experience. She holds an MA in Counseling Psychology from Breyer State University (USA) and a BA in Psychology from the American University in Cairo. She works with individuals, couples, and families, and is passionate about women’s issues — depression, anxiety, self-esteem, domestic violence, emotional manipulation, and support after miscarriage, abortion, or infertility.",
          "Dina spent several years working exclusively with adolescents at the AUC Student Counseling Center, and her family work focuses on family dynamics, role reversal, and counseling adult children of abusive parents. She uses a holistic, integrated approach drawing on CBT, philosophical therapy, and solution-focused therapy."
        ]
      },
      ar: {
        name: "دينا مهران",
        title: "أخصائية نفسية إرشادية ومعالجة أزواج",
        tags: ["قضايا المرأة", "ديناميكيات الأسرة", "المراهقون", "٢٠ عامًا"],
        paras: [
          "دينا أخصائية نفسية إرشادية تمتلك نحو ٢٠ عامًا من الخبرة. تحمل درجة الماجستير في علم النفس الإرشادي من جامعة Breyer State (الولايات المتحدة)، وبكالوريوس علم النفس من الجامعة الأمريكية بالقاهرة. تعمل مع الأفراد والأزواج والأسر، ولديها شغف بقضايا المرأة — الاكتئاب والقلق وتقدير الذات والعنف الأسري والتلاعب العاطفي، والدعم بعد الإجهاض أو فقدان الحمل أو صعوبات الإنجاب.",
          "قضت دينا سنوات في العمل حصريًا مع المراهقين في مركز الإرشاد الطلابي بالجامعة الأمريكية، ويتركّز عملها الأسري على ديناميكيات الأسرة وانعكاس الأدوار وإرشاد الأبناء البالغين لآباء مؤذين. وتتبنّى نهجًا شموليًا متكاملًا يستند إلى العلاج المعرفي السلوكي والعلاج الفلسفي والعلاج المركّز على الحلول."
        ]
      }
    },
    {
      img: "assets/team/10.png",
      en: {
        name: "Salma El-Baradie",
        title: "Existential Psychotherapist",
        tags: ["Trauma & recovery", "Existential & narrative", "12+ years"],
        paras: [
          "Salma is an existential psychotherapist working with adult individuals. With over 12 years supporting displaced and marginalised communities, she specialises in trauma and recovery. Her approach is grounded in existential and narrative therapy, with a strong emphasis on compassion-focused work.",
          "She has helped clients navigate self-esteem, anxiety, depression, relationship difficulties, gender and sexuality, sexual trauma, and gender-based violence. Salma holds an MSc in Health Psychology from Leiden University and is completing her doctorate at the New School of Existential Psychotherapy and Counselling in the UK."
        ]
      },
      ar: {
        name: "سلمى البرادعي",
        title: "معالجة نفسية وجودية",
        tags: ["الصدمات والتعافي", "العلاج الوجودي والسردي", "أكثر من ١٢ عامًا"],
        paras: [
          "سلمى معالجة نفسية وجودية تعمل مع البالغين. وبخبرة تتجاوز ١٢ عامًا في دعم المجتمعات النازحة والمهمَّشة، تتخصص في الصدمات والتعافي. ويقوم نهجها على العلاج الوجودي والسردي، مع تركيز قوي على العمل القائم على التعاطف.",
          "ساعدت عملاءها على تجاوز مسائل تقدير الذات والقلق والاكتئاب وصعوبات العلاقات والنوع الاجتماعي والجنسانية والصدمات الجنسية والعنف القائم على النوع. تحمل سلمى ماجستير علم النفس الصحي من جامعة لايدن، وتُكمل حاليًا الدكتوراه في المدرسة الجديدة للعلاج النفسي الوجودي والإرشاد في بريطانيا."
        ]
      }
    },
    {
      img: "assets/team/5.png",
      en: {
        name: "Heba Hamza",
        title: "Clinical Psychologist & Perinatal Mental Health Specialist",
        tags: ["Perinatal mental health", "Culturally competent", "6+ years"],
        paras: [
          "Heba is a clinical psychologist and mental health counselor who has been practicing for the past six years, with earlier experience through practicums and internships in varied settings. She uses an eclectic approach guided by each client’s individual needs, with a major focus on ensuring clients feel seen, heard, and validated in a non-judgmental, safe space.",
          "A culturally competent therapist, Heba practices cultural humility, working to dispel stigma within diverse and marginalized communities. Her experience spans psychiatric hospitals, non-profits, psychosocial counseling centers, private practice, psycho-educational programs, university student counseling, and academic research."
        ]
      },
      ar: {
        name: "هبة حمزة",
        title: "أخصائية نفسية إكلينيكية ومتخصصة في الصحة النفسية للأمومة",
        tags: ["الصحة النفسية للأمومة", "الكفاءة الثقافية", "أكثر من ٦ سنوات"],
        paras: [
          "هبة أخصائية نفسية إكلينيكية ومعالِجة للصحة النفسية، إلى جانب خبرة سابقة عبر تدريبات عملية في سياقات متنوعة. تتبنّى نهجًا انتقائيًا يسترشد باحتياجات كل عميل، مع تركيز كبير على أن يشعر العميل بأنه مرئي ومسموع ومتقبَّل في مساحة آمنة خالية من الأحكام.",
          "وبوصفها معالِجة ذات كفاءة ثقافية، تمارس هبة التواضع الثقافي وتعمل على تبديد وصمة العار داخل المجتمعات المتنوعة والمهمَّشة. تمتد خبرتها عبر مستشفيات الطب النفسي والمنظمات غير الربحية ومراكز الإرشاد النفسي والاجتماعي والعيادات الخاصة والبرامج النفسية التعليمية وإرشاد طلاب الجامعات والبحث الأكاديمي."
        ]
      }
    },
    {
      img: "assets/team/7.png",
      en: {
        name: "Imane Tazi",
        title: "Clinical Psychologist",
        tags: ["CBT & DBT", "Hypnotherapy", "Arabic · French · English"],
        paras: [
          "Imane holds a bachelor’s in Clinical Psychology from the University of Paris, a master’s in Integrative Psychology from the University of Geneva, and a diploma in Hypnotherapy from Université Paris-Sorbonne, with further training in CBT and DBT. Her experience spans mental health hospitals and therapy centers in Geneva and Paris, as well as corporate settings supporting employees from diverse backgrounds.",
          "With a holistic approach, she believes each person is unique and deserves personalized support to regain balance and harmony. She creates a trusting environment where clients feel heard, understood, and supported — in Arabic, French, or English."
        ]
      },
      ar: {
        name: "إيمان تازي",
        title: "أخصائية نفسية إكلينيكية",
        tags: ["العلاج المعرفي السلوكي والجدلي", "العلاج بالتنويم", "العربية · الفرنسية · الإنجليزية"],
        paras: [
          "تحمل إيمان بكالوريوس علم النفس الإكلينيكي من جامعة باريس، وماجستير علم النفس التكاملي من جامعة جنيف، ودبلومة في العلاج بالتنويم من جامعة باريس-السوربون، مع تدريب إضافي في العلاج المعرفي السلوكي والجدلي. تمتد خبرتها عبر مستشفيات ومراكز العلاج النفسي في جنيف وباريس، إضافةً إلى بيئات الشركات في دعم الموظفين من خلفيات متنوعة.",
          "بنهجٍ شمولي، تؤمن بأن كل شخص فريد ويستحق دعمًا مخصصًا لاستعادة توازنه وانسجامه. وتهيّئ بيئة تقوم على الثقة يشعر فيها العملاء بأنهم مسموعون ومفهومون ومدعومون — بالعربية أو الفرنسية أو الإنجليزية."
        ]
      }
    },
    {
      img: "assets/team/9.png",
      en: {
        name: "Farida Badran",
        title: "Clinical Psychologist",
        tags: ["CBT & DBT", "Assessment", "Arabic · English · French"],
        paras: [
          "Farida holds a Master’s in Clinical Psychology from Bircham University and a Bachelor’s in Psychology from King’s College London, with experience across outpatient therapy and hospital-based psychiatric settings, including clinical training at Behman Hospital.",
          "She works with anxiety, mood-related difficulties, trauma, emotional-regulation challenges, and personality-related patterns. Her integrative approach is primarily informed by CBT and DBT, combining structure with empathy. She is also trained in psychometric assessment and offers therapy in Arabic, English, and French."
        ]
      },
      ar: {
        name: "فريدة بدران",
        title: "أخصائية نفسية إكلينيكية",
        tags: ["العلاج المعرفي السلوكي والجدلي", "التقييم النفسي", "العربية · الإنجليزية · الفرنسية"],
        paras: [
          "تحمل فريدة ماجستير علم النفس الإكلينيكي من جامعة Bircham وبكالوريوس علم النفس من King’s College London، بخبرة تمتد عبر العلاج في العيادات الخارجية وبيئات الطب النفسي بالمستشفيات، بما في ذلك تدريب إكلينيكي في مستشفى بهمن.",
          "تعمل مع القلق وصعوبات المزاج والصدمات وتحديات تنظيم الانفعالات والأنماط المرتبطة بالشخصية. ويستند نهجها التكاملي أساسًا إلى العلاج المعرفي السلوكي والجدلي، جامعًا بين البنية والتعاطف. كما أنها مدرَّبة على التقييم النفسي القياسي، وتقدّم العلاج بالعربية والإنجليزية والفرنسية."
        ]
      }
    },
    {
      img: "assets/team/12.png",
      en: {
        name: "Hana Habib",
        title: "Clinical Psychologist & Eating Disorders Specialist",
        tags: ["Eating disorders", "UCL (Distinction)", "Assessments"],
        paras: [
          "Hana is a specialist clinical psychologist in eating disorders and a Registered Associate Nutritionist in the UK. She studied psychology at the American University in Cairo, then completed her MSc in Eating Disorders and Clinical Nutrition at University College London (UCL) with Distinction, training at St. Ann’s Hospital NHS in London’s outpatient and inpatient adult units.",
          "She works with adolescents and young adults on eating disorders, body-image concerns, low self-esteem, perfectionism, anxiety, depression, personality disorders, and OCD, and is trained in psychological assessments for adults. Hana believes in a holistic, eclectic approach centered on self-acceptance and personal empowerment."
        ]
      },
      ar: {
        name: "هنا حبيب",
        title: "أخصائية نفسية إكلينيكية ومتخصصة في اضطرابات الأكل",
        tags: ["اضطرابات الأكل", "UCL (بامتياز)", "التقييمات النفسية"],
        paras: [
          "هنا أخصائية نفسية إكلينيكية متخصصة في اضطرابات الأكل، وأخصائية تغذية مساعِدة مسجّلة في بريطانيا. درست علم النفس في الجامعة الأمريكية بالقاهرة، ثم أكملت ماجستير اضطرابات الأكل والتغذية الإكلينيكية في University College London (UCL) بامتياز، وتدرّبت في مستشفى St. Ann’s التابع للـNHS في وحدات البالغين الخارجية والداخلية بلندن.",
          "تعمل مع المراهقين والشباب في اضطرابات الأكل ومشكلات صورة الجسد وتدنّي تقدير الذات والكمالية والقلق والاكتئاب واضطرابات الشخصية والوسواس القهري، وهي مدرَّبة على التقييمات النفسية للبالغين. وتؤمن هنا بنهجٍ شمولي انتقائي محوره تقبّل الذات والتمكين الشخصي."
        ]
      }
    },
    {
      img: "assets/team/3.png",
      en: {
        name: "Sara Soliman",
        title: "Psychologist & ED Therapist",
        tags: ["Eating disorders", "Mind–body connection", "QMUL (Distinction)"],
        paras: [
          "Sara specializes in adolescent and adult mental health, with a strong focus on the relationship between psychological wellbeing and physical health. She holds a Master’s in Psychological Therapies from Queen Mary University of London (Distinction) and a first-class honors degree in Psychology from Coventry University. With over 500 hours of clinical training across Behman, Almashfa, and Al Horeya hospitals, she delivers assessments and individual psychotherapy for anxiety, depression, addiction, trauma, grief, and eating disorders.",
          "Sara holds a Diploma in Eating Disorders from the NCFED (UK), combining CBT, CBT-E, NLP, EFT, and Appetite Awareness Training. Beyond the clinic, she has supported children from Gaza through the Atfalna Hayah Project and worked extensively with Sudanese refugees. She is passionate about destigmatizing eating disorders across Egypt and the Middle East."
        ]
      },
      ar: {
        name: "سارة سليمان",
        title: "أخصائية نفسية ومعالجة اضطرابات أكل",
        tags: ["اضطرابات الأكل", "العلاقة بين النفس والجسد", "QMUL (بامتياز)"],
        paras: [
          "تتخصص سارة في الصحة النفسية للمراهقين والبالغين، مع تركيز قوي على العلاقة بين الصحة النفسية والصحة الجسدية. تحمل ماجستير العلاجات النفسية من جامعة Queen Mary بلندن (بامتياز)، ودرجة الشرف الأولى في علم النفس من جامعة كوفنتري. وبأكثر من ٥٠٠ ساعة من التدريب الإكلينيكي عبر مستشفيات بهمن والمشفى والحرية، تقدّم التقييمات والعلاج النفسي الفردي للقلق والاكتئاب والإدمان والصدمات والفقد واضطرابات الأكل.",
          "تحمل سارة دبلومة اضطرابات الأكل من NCFED (بريطانيا)، جامعةً بين العلاج المعرفي السلوكي وCBT-E والبرمجة اللغوية العصبية وتقنية الحرية النفسية (EFT) والتدريب على الوعي بالشهية. وخارج العيادة، دعمت أطفالًا من غزة عبر مشروع «أطفالنا حياة»، وعملت بشكل موسّع مع اللاجئين السودانيين. ولديها شغف بإزالة وصمة اضطرابات الأكل في مصر والشرق الأوسط."
        ]
      }
    },
    {
      img: "assets/team/13.png",
      en: {
        name: "Soha ElSokkary",
        title: "Counseling Psychologist",
        tags: ["Integrative", "Arabic · English · French · German"],
        paras: [
          "Soha completed her MSc in Counseling Psychology at the University of Sheffield and a Postgraduate Certificate in Professional Practice at the University of York, after a BA in Psychology from the American University in Cairo. She works with depression, anxiety, relationships, body image, self-esteem, suicidal thoughts and self-harm, domestic violence, family issues, grief, and divorce.",
          "Having studied and lived in Europe and the USA, Soha is deeply appreciative of cultural differences. She views her clients as the true experts of their own lives and herself as a guide along their journey — genuine, authentic, and focused on empowering clients through insight. Her integrative approach adapts to what each client needs, in Arabic, English, French, or German."
        ]
      },
      ar: {
        name: "سها السكري",
        title: "أخصائية نفسية إرشادية",
        tags: ["العلاج التكاملي", "العربية · الإنجليزية · الفرنسية · الألمانية"],
        paras: [
          "أكملت سها ماجستير علم النفس الإرشادي في جامعة شيفيلد، وشهادة الدراسات العليا في الممارسة المهنية من جامعة يورك، بعد بكالوريوس علم النفس من الجامعة الأمريكية بالقاهرة. تعمل مع الاكتئاب والقلق والعلاقات وصورة الجسد وتقدير الذات والأفكار الانتحارية وإيذاء الذات والعنف الأسري والمشكلات الأسرية والفقد والطلاق.",
          "وبعد دراستها وإقامتها في أوروبا والولايات المتحدة، تقدّر سها الاختلافات الثقافية تقديرًا عميقًا. ترى عملاءها الخبراء الحقيقيين بحياتهم، وترى نفسها مرشدةً في رحلتهم — بصدقٍ وأصالة وتركيز على تمكين العملاء عبر البصيرة. ويتكيّف نهجها التكاملي مع احتياج كل عميل، بالعربية أو الإنجليزية أو الفرنسية أو الألمانية."
        ]
      }
    },
    {
      img: "assets/team/8.png",
      en: {
        name: "Nour Mahmoud",
        title: "Child Psychologist",
        tags: ["Children & adolescents", "ADHD & autism", "Play-based"],
        paras: [
          "Nour is a child therapist supporting children and adolescents across emotional, behavioral, and developmental needs. She holds a BSc in Psychology from the University of Twente and a master’s in Mental Health in Children and Young People from the University of Edinburgh, with over 240 hours of clinical experience plus work as a school counselor for grades 4–6.",
          "Her experience includes ADHD, autism, anxiety, and self-esteem challenges, using social-emotional and play-based approaches. Nour is known for her warm, engaging, child-led style — creating a safe space where children feel seen, heard, and understood."
        ]
      },
      ar: {
        name: "نور محمود",
        title: "أخصائية نفسية للأطفال",
        tags: ["الأطفال والمراهقون", "فرط الحركة والتوحد", "العلاج باللعب"],
        paras: [
          "نور معالِجة أطفال تدعم الأطفال والمراهقين في احتياجاتهم الانفعالية والسلوكية والتطورية. تحمل بكالوريوس علم النفس من جامعة Twente، وماجستير الصحة النفسية للأطفال والشباب من جامعة إدنبرة، بأكثر من ٢٤٠ ساعة من الخبرة الإكلينيكية إلى جانب عملها مرشدةً مدرسية للصفوف من الرابع إلى السادس.",
          "تشمل خبرتها فرط الحركة وتشتت الانتباه والتوحد والقلق وتحديات تقدير الذات، مستخدمةً المناهج الاجتماعية-الانفعالية والعلاج باللعب. وتُعرف نور بأسلوبها الدافئ والجذّاب الذي يقوده الطفل — إذ تهيّئ مساحة آمنة يشعر فيها الأطفال بأنهم مرئيون ومسموعون ومفهومون."
        ]
      }
    },
    {
      img: "assets/team/4.png",
      en: {
        name: "Sohila Hassan",
        title: "Nutritionist & Eating Disorder Dietitian",
        tags: ["Integrative nutrition", "NCFED Master Practitioner", "Body trust"],
        paras: [
          "Sohila is a certified nutritionist with years of experience supporting people in healing their relationship with food and their bodies. With a foundation in pharmacy, she holds advanced certifications in Integrative Nutrition and Health Coaching from the Institute for Integrative Nutrition (USA) and completed the Master Practitioner Program in Eating Disorders and Obesity at the NCFED (UK).",
          "Her approach goes beyond diets and numbers — she sees food as joy, memory, medicine, and a path to balance. Guided by a bio-individual philosophy blending emotional awareness, nourishment, behavioral therapy, and spirituality, she helps clients move away from chronic dieting and body shame toward body trust and peace with food."
        ]
      },
      ar: {
        name: "سهيلة حسن",
        title: "أخصائية تغذية واضطرابات الأكل",
        tags: ["التغذية التكاملية", "ممارِسة معتمدة NCFED", "الثقة بالجسد"],
        paras: [
          "سهيلة أخصائية تغذية معتمدة بخبرة سنوات في مساعدة الناس على إصلاح علاقتهم بالطعام وبأجسادهم. وبخلفيةٍ في الصيدلة، تحمل شهادات متقدمة في التغذية التكاملية والتدريب الصحي من معهد Integrative Nutrition (الولايات المتحدة)، وأكملت برنامج الممارس المعتمد في اضطرابات الأكل والسمنة من NCFED (بريطانيا).",
          "يتجاوز نهجها الحميات والأرقام — فهي ترى الطعام فرحًا وذاكرةً ودواءً وطريقًا للتوازن. وباسترشادها بفلسفة فردية-حيوية تمزج الوعي الانفعالي والتغذية والعلاج السلوكي والجانب الروحي، تساعد العملاء على الابتعاد عن الحمية المزمنة وخجل الجسد نحو الثقة بالجسد والسلام مع الطعام."
        ]
      }
    },
    {
      img: "assets/team/malak.png",
      en: {
        name: "Malak Helal",
        title: "Clinical Psychologist",
        tags: ["Chronic illness & cancer", "CBT", "Assistant lecturer"],
        paras: [
          "Malak holds a BA in Psychology from Pennsylvania State University and a master’s in Psychological Therapies from Queen Mary University of London, and is currently an assistant lecturer at Coventry University. In Egypt she has supported oncology patients at 57357 Hospital and Baheya Breast Cancer Hospital, and worked with individuals facing suicidal ideation through Shout, a UK crisis text service.",
          "She specializes in supporting individuals with chronic illnesses and cancer through diagnosis, treatment, and survivorship — including diabetes, heart disease, and autoimmune conditions. Using an eclectic, evidence-based approach anchored in CBT, she fosters self-awareness, emotional resilience, and personal growth."
        ]
      },
      ar: {
        name: "ملك هلال",
        title: "أخصائية نفسية إكلينيكية",
        tags: ["الأمراض المزمنة والسرطان", "العلاج المعرفي السلوكي", "محاضِرة مساعدة"],
        paras: [
          "تحمل ملك بكالوريوس علم النفس من جامعة ولاية بنسلفانيا، وماجستير العلاجات النفسية من جامعة Queen Mary بلندن، وتعمل حاليًا محاضِرة مساعدة في جامعة كوفنتري. وفي مصر دعمت مرضى الأورام في مستشفى ٥٧٣٥٧ ومستشفى بهية لسرطان الثدي، وعملت مع أفراد يواجهون أفكارًا انتحارية عبر خدمة الرسائل النصية للأزمات البريطانية Shout.",
          "تتخصص في دعم الأفراد المصابين بالأمراض المزمنة والسرطان عبر مراحل التشخيص والعلاج والتعافي — بما في ذلك السكري وأمراض القلب واضطرابات المناعة الذاتية. وباستخدام نهجٍ انتقائي قائم على الأدلة ومرتكز على العلاج المعرفي السلوكي، تعزّز الوعي بالذات والمرونة الانفعالية والنمو الشخصي."
        ]
      }
    },
    {
      img: "assets/team/11.png",
      en: {
        name: "Farida Naguib",
        title: "Therapist in Training",
        tags: ["Therapist in training"],
        paras: [
          "Farida is a psychotherapist in training currently pursuing a master’s in psychotherapy and counselling with a specialization in existential psychotherapy. She is a student member of the UPCA. Farida holds a BA from the University of the Arts London and brings a unique perspective to her work, having transitioned from a different career path. Farida believes that everyone’s life experiences are unique, shaping who they are and how they make meaning of their world. Her aim is to explore and understand those experiences with you through a compassionate, client-centered, and phenomenological approach, addressing human issues from an existential lens. Farida is committed to fostering a safe, reflective and supportive space where clients can explore their experiences, navigate life’s complexities and embrace growth and healing."
        ]
      },
      ar: {
        name: "فريدة نجيب",
        title: "معالجة تحت التدريب",
        tags: ["معالجة تحت التدريب"],
        paras: [
          "فريدة معالِجة نفسية تحت التدريب، تدرس حاليًا لنيل الماجستير في العلاج النفسي والإرشاد مع تخصص في العلاج النفسي الوجودي، وهي عضو طالبة في UPCA. تحمل فريدة بكالوريوس من University of the Arts London، وتضفي على عملها منظورًا فريدًا بعد انتقالها من مسار مهني مختلف. تؤمن فريدة بأن تجارب حياة كل شخص فريدة تشكّل هويته وطريقة فهمه لعالمه. وهدفها أن تستكشف تلك التجارب وتفهمها معك عبر نهجٍ متعاطف يتمحور حول العميل وظاهراتي، يتناول القضايا الإنسانية من منظور وجودي. وتلتزم فريدة بتهيئة مساحة آمنة وتأمّلية وداعمة يستطيع فيها العملاء استكشاف تجاربهم والتعامل مع تعقيدات الحياة واحتضان النمو والتعافي."
        ]
      }
    }
  ];

  global.SELF_TEAM = { page: page, members: members };
})(window);
