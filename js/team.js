/* Team page: bilingual (EN/AR) rendering, language toggle shared with the
   home page via localStorage, RTL support, and reveal-on-scroll. */
(function () {
  "use strict";

  var DATA = window.SELF_TEAM;
  var state = { lang: (localStorage.getItem("self-lang") === "ar") ? "ar" : "en" };

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") e.className = attrs[k];
        else if (k === "text") e.textContent = attrs[k];
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

  function renderChrome() {
    var p = DATA.page[state.lang];
    setText("langToggle", p.langBtn);
    setText("backLink", p.back);
    setText("bookBtn", p.book);
    setText("heroKicker", p.kicker);
    setText("heroTitle", p.title);
    setText("heroSub", p.sub);
    setText("footerCopy", p.copyright);
  }

  function renderMembers() {
    var list = document.getElementById("memberList");
    list.innerHTML = "";
    DATA.members.forEach(function (m) {
      var d = m[state.lang];

      var photoWrap = el("div", { class: "member-photo-wrap" }, [
        el("img", { src: m.img, alt: d.name, class: "member-photo" })
      ]);

      var tags = el("div", { class: "member-tags" },
        d.tags.map(function (tg) { return el("span", { text: tg }); }));

      var bodyChildren = [
        el("h2", { text: d.name }),
        el("p", { class: "member-title", text: d.title }),
        tags
      ];
      d.paras.forEach(function (para) {
        bodyChildren.push(el("p", { text: para }));
      });

      list.appendChild(el("article", { class: "member-card", "data-reveal": "" }, [
        photoWrap,
        el("div", { class: "member-body" }, bodyChildren)
      ]));
    });

    var p = DATA.page[state.lang];
    list.appendChild(el("div", { class: "member-list-cta", "data-reveal": "" }, [
      el("a", { href: "index.html#contact", class: "btn btn-cta btn-lg", text: p.book })
    ]));
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
    }, { threshold: 0.08 });
    els.forEach(function (e) { e.classList.add("reveal-init"); io.observe(e); });
  }

  function renderAll() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = (state.lang === "ar") ? "rtl" : "ltr";
    renderChrome();
    renderMembers();
    observeReveals();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    document.getElementById("langToggle").addEventListener("click", function () {
      state.lang = (state.lang === "ar") ? "en" : "ar";
      localStorage.setItem("self-lang", state.lang);
      renderAll();
    });
  });
})();
