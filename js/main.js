(function () {
  "use strict";

  var I18N = window.SELF_I18N;
  // WhatsApp destination in international format, digits only (no + or spaces).
  var WHATSAPP_NUMBER = "201040932900";
  var state = {
    lang: (localStorage.getItem("self-lang") === "ar") ? "ar" : "en",
    form: { name: "", email: "", service: "", message: "" },
    errors: {},
    submitted: false
  };

  function t() { return I18N[state.lang]; }

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") e.className = attrs[k];
        else if (k === "text") e.textContent = attrs[k];
        else if (k === "html") e.innerHTML = attrs[k];
        else e.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }

  function setText(id, value) {
    var node = document.getElementById(id);
    if (node) node.textContent = value;
  }

  function renderNav() {
    var d = t();
    var navLinks = document.getElementById("navLinks");
    navLinks.innerHTML = "";
    d.navLinks.forEach(function (lnk) {
      navLinks.appendChild(el("a", { href: lnk.href, text: lnk.label }));
    });

    var footerLinks = document.getElementById("footerLinks");
    footerLinks.innerHTML = "";
    d.navLinks.forEach(function (lnk) {
      footerLinks.appendChild(el("a", { href: lnk.href, text: lnk.label }));
    });
    footerLinks.appendChild(el("a", { href: "https://www.instagram.com/self_center_/", target: "_blank", rel: "noopener", text: "Instagram" }));

    document.getElementById("langToggle").textContent = d.langBtn;
    document.getElementById("navCta").textContent = d.bookCta;
  }

  function renderHero() {
    var d = t();
    setText("heroTitle", d.heroTitle);
    setText("heroSub", d.heroSub);
    setText("heroCta", d.bookCta);
    setText("heroSecondary", d.heroSecondary);
  }

  function renderAbout() {
    var d = t();
    setText("aboutKicker", d.aboutKicker);
    setText("aboutTitle", d.aboutTitle);
    setText("aboutP1", d.aboutP1);
    setText("aboutP2", d.aboutP2);

    var stats = document.getElementById("aboutStats");
    stats.innerHTML = "";
    d.aboutStats.forEach(function (st) {
      stats.appendChild(el("div", { class: "about-stat" }, [
        el("div", { class: "about-stat-dot", style: "background:" + st.color }),
        el("div", { class: "about-stat-label", text: st.label })
      ]));
    });
  }

  function renderServices() {
    var d = t();
    setText("servicesKicker", d.servicesKicker);
    setText("servicesTitle", d.servicesTitle);
    setText("servicesSub", d.servicesSub);

    var grid = document.getElementById("servicesGrid");
    grid.innerHTML = "";
    d.services.forEach(function (svc, i) {
      var pair = I18N.ICON_PAIRS[i % I18N.ICON_PAIRS.length];
      var card = el("div", { class: "service-card", "data-reveal": "" }, [
        el("div", { class: "service-icon" }, [
          el("span", { style: "background:" + pair[0] }),
          el("span", { style: "background:" + pair[1] })
        ]),
        el("h3", { text: svc.name }),
        el("p", { text: svc.desc })
      ]);
      grid.appendChild(card);
    });
  }

  function initialsAvatar(text, colors) {
    return el("div", {
      class: "team-avatar",
      style: "background:linear-gradient(150deg," + colors[0] + "," + colors[1] + ")"
    }, [document.createTextNode(text)]);
  }

  function teamPhoto(m, name, initials) {
    if (!m.img) return initialsAvatar(initials, m.colors);
    var img = el("img", { src: m.img, alt: name, class: "team-avatar-img" });
    img.addEventListener("error", function () {
      img.replaceWith(initialsAvatar(initials, m.colors));
    }, { once: true });
    return img;
  }

  function renderTeam() {
    var d = t();
    setText("teamKicker", d.teamKicker);
    setText("teamTitle", d.teamTitle);
    setText("teamSub", d.teamSub);
    setText("teamMoreLink", d.teamMore + " →");

    var grid = document.getElementById("teamGrid");
    grid.innerHTML = "";
    I18N.TEAM_META.forEach(function (m) {
      var name = m[state.lang][0];
      var title = m[state.lang][1];
      var initials = m.initials[state.lang];
      var card = el("a", { href: "team.html", class: "team-card", "data-reveal": "" }, [
        teamPhoto(m, name, initials),
        el("div", { class: "team-card-body" }, [
          el("div", { class: "team-card-name", text: name }),
          el("div", { class: "team-card-title", text: title })
        ])
      ]);
      grid.appendChild(card);
    });
  }

  function renderValues() {
    var d = t();
    setText("valuesKicker", d.valuesKicker);
    setText("valuesTitle", d.valuesTitle);

    var grid = document.getElementById("valuesGrid");
    grid.innerHTML = "";
    d.values.forEach(function (v, i) {
      grid.appendChild(el("div", { class: "value-card", "data-reveal": "" }, [
        el("div", { class: "value-icon", style: "background:" + I18N.VALUE_COLORS[i % I18N.VALUE_COLORS.length] }),
        el("h3", { text: v.name }),
        el("p", { text: v.desc })
      ]));
    });
  }

  function renderTestimonials() {
    var d = t();
    setText("testiKicker", d.testiKicker);
    setText("testiTitle", d.testiTitle);
    setText("testiPlaceholderNote", d.testiPlaceholderNote);

    var grid = document.getElementById("testiGrid");
    grid.innerHTML = "";
    d.testimonials.forEach(function (tm, i) {
      var color = I18N.TESTI_COLORS[i % I18N.TESTI_COLORS.length];
      grid.appendChild(el("div", { class: "testi-card", "data-reveal": "" }, [
        el("div", { class: "testi-quote-mark", style: "color:" + color, text: "“" }),
        el("p", { text: tm.quote }),
        el("div", { class: "testi-who" }, [
          el("div", { class: "testi-avatar", style: "background:" + color }),
          el("span", { text: tm.who })
        ])
      ]));
    });
  }

  function renderFaq() {
    var d = t();
    setText("faqKicker", d.faqKicker);
    setText("faqTitle", d.faqTitle);

    var list = document.getElementById("faqList");
    list.innerHTML = "";
    d.faqs.forEach(function (f, i) {
      var item = el("div", { class: "faq-item", "data-reveal": "" });
      var question = el("button", { type: "button", class: "faq-question", "aria-expanded": "false" }, [
        el("span", { text: f.q }),
        el("span", { class: "faq-icon", text: "+" })
      ]);
      var answer = el("div", { class: "faq-answer" }, [el("p", { text: f.a })]);
      question.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        list.querySelectorAll(".faq-item.open").forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          }
        });
        item.classList.toggle("open", !isOpen);
        question.setAttribute("aria-expanded", String(!isOpen));
      });
      item.appendChild(question);
      item.appendChild(answer);
      list.appendChild(item);
    });
  }

  function renderContactStatic() {
    var d = t();
    setText("contactKicker", d.contactKicker);
    setText("contactTitle", d.contactTitle);
    setText("contactSub", d.contactSub);
    setText("cPhoneLabel", d.cPhone);
    setText("cEmailLabel", d.cEmail);
    setText("cLocationLabel", d.cLocation);
    setText("cAddress", d.cAddress);
    setText("cHoursLabel", d.cHours);
    setText("cHoursVal", d.cHoursVal);
    setText("footerWordmark", d.footerWordmark);
    setText("copyright", d.copyright);
  }

  function renderForm() {
    var d = t();
    setText("fNameLabel", d.fName);
    setText("fEmailLabel", d.fEmail);
    setText("fServiceLabel", d.fService);
    setText("fMessageLabel", d.fMessage);
    setText("fSubmit", d.fSubmit);
    setText("fPrivacy", d.fPrivacy);
    setText("successTitle", d.successTitle);
    setText("successSub", d.successSub);
    setText("successAgain", d.successAgain);

    var nameInput = document.getElementById("f-name");
    var emailInput = document.getElementById("f-email");
    var msgInput = document.getElementById("f-msg");
    nameInput.placeholder = d.fNamePh;
    emailInput.placeholder = d.fEmailPh;
    msgInput.placeholder = d.fMessagePh;
    nameInput.value = state.form.name;
    emailInput.value = state.form.email;
    msgInput.value = state.form.message;

    var select = document.getElementById("f-service");
    select.innerHTML = "";
    select.appendChild(el("option", { value: "", text: d.fSelectPh }));
    d.services.forEach(function (s) {
      select.appendChild(el("option", { value: s.name, text: s.name }));
    });
    select.value = state.form.service;

    applyFormErrors();
    toggleSuccessPanel();
  }

  function applyFormErrors() {
    var d = t();
    ["name", "email", "service"].forEach(function (key) {
      var field = document.getElementById("f-" + (key === "service" ? "service" : key)).closest(".field");
      var errNode = document.getElementById("err" + key.charAt(0).toUpperCase() + key.slice(1));
      var errKey = state.errors[key];
      if (errKey) {
        errNode.textContent = d[errKey];
        errNode.classList.add("show");
        field.classList.add("has-error");
      } else {
        errNode.textContent = "";
        errNode.classList.remove("show");
        field.classList.remove("has-error");
      }
    });
  }

  function toggleSuccessPanel() {
    document.getElementById("successPanel").hidden = !state.submitted;
    document.getElementById("bookingForm").hidden = state.submitted;
  }

  function renderAll() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = t().dir;
    renderNav();
    renderHero();
    renderAbout();
    renderServices();
    renderTeam();
    renderValues();
    renderTestimonials();
    renderFaq();
    renderContactStatic();
    renderForm();
    observeReveals();
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("self-lang", lang);
    renderAll();
  }

  var io;
  function observeReveals() {
    if (io) io.disconnect();
    var els = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (e) { e.classList.add("in-view"); });
      return;
    }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { e.classList.add("reveal-init"); io.observe(e); });
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function buildWhatsappUrl() {
    var d = t();
    var lines = [
      d.waIntro,
      "",
      d.fName + ": " + state.form.name.trim(),
      d.fEmail + ": " + state.form.email.trim(),
      d.fService + ": " + state.form.service,
      d.fMessage + ": " + (state.form.message.trim() || d.waNoMessage)
    ];
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();

    document.getElementById("langToggle").addEventListener("click", function () {
      setLang(state.lang === "ar" ? "en" : "ar");
    });

    document.getElementById("navMenuToggle").addEventListener("click", function () {
      var links = document.getElementById("navLinks");
      var expanded = links.classList.toggle("open");
      this.setAttribute("aria-expanded", String(expanded));
    });
    document.getElementById("navLinks").addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        this.classList.remove("open");
        document.getElementById("navMenuToggle").setAttribute("aria-expanded", "false");
      }
    });

    var form = document.getElementById("bookingForm");
    form.addEventListener("input", function (e) {
      var name = e.target.name;
      if (!name) return;
      state.form[name] = e.target.value;
      if (state.errors[name]) {
        delete state.errors[name];
        applyFormErrors();
      }
    });
    form.addEventListener("change", function (e) {
      var name = e.target.name;
      if (!name) return;
      state.form[name] = e.target.value;
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var errs = {};
      if (!state.form.name.trim()) errs.name = "errNameReq";
      if (!state.form.email.trim()) errs.email = "errEmailReq";
      else if (!validateEmail(state.form.email)) errs.email = "errEmailBad";
      if (!state.form.service) errs.service = "errServiceReq";
      state.errors = errs;
      if (Object.keys(errs).length) {
        applyFormErrors();
        return;
      }
      window.open(buildWhatsappUrl(), "_blank", "noopener");
      state.submitted = true;
      toggleSuccessPanel();
    });

    document.getElementById("successAgain").addEventListener("click", function () {
      state.submitted = false;
      state.form = { name: "", email: "", service: "", message: "" };
      state.errors = {};
      renderForm();
    });
  });
})();
