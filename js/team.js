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

  var SITE = "https://selfcounselingcenter.com/";

  // Stable per-member anchor (from the English name) so the home page can
  // link straight to a clinician, e.g. team.html#dina-elsheikh.
  function slug(name) {
    return name.toLowerCase().replace(/^dr\.?\s+/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function renderMembers() {
    var list = document.getElementById("memberList");
    list.innerHTML = "";
    DATA.members.forEach(function (m, i) {
      var d = m[state.lang];

      // The first photos are above the fold; the rest load as they scroll in.
      var photoWrap = el("div", { class: "member-photo-wrap" }, [
        el("img", {
          src: m.img, alt: d.name, class: "member-photo", width: "860", height: "860",
          loading: i < 2 ? "eager" : "lazy", decoding: "async"
        })
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

      list.appendChild(el("article", { class: "member-card", id: slug(m.en.name), "data-reveal": "" }, [
        photoWrap,
        el("div", { class: "member-body" }, bodyChildren)
      ]));
    });

    var p = DATA.page[state.lang];
    list.appendChild(el("div", { class: "member-list-cta", "data-reveal": "" }, [
      el("a", { href: "/#contact", class: "btn btn-cta btn-lg", text: p.book })
    ]));
  }

  // Structured data for the team, built from the same data as the visible
  // cards so the two can't drift apart. Always English; Arabic name as alternate.
  function addStructuredData() {
    var people = DATA.members.map(function (m, i) {
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: m.en.name,
          alternateName: m.ar.name,
          jobTitle: m.en.title,
          image: SITE + m.img,
          url: SITE + "team.html#" + slug(m.en.name),
          worksFor: { "@id": SITE + "#clinic" }
        }
      };
    });
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": SITE + "team.html",
      url: SITE + "team.html",
      name: "Our psychologists, psychiatrists and nutritionists",
      isPartOf: { "@id": SITE + "#website" },
      about: { "@id": SITE + "#clinic" },
      mainEntity: { "@type": "ItemList", itemListElement: people }
    });
    document.head.appendChild(script);
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
    addStructuredData();
    // Cards are rendered by script, after the browser's own jump-to-anchor, and
    // late web fonts reflow the page (the two-row mobile nav changes height), so
    // re-align on layout changes for a few seconds, until the visitor scrolls.
    var hash = location.hash;
    var target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      // Hide the fragment while we position the card: otherwise the browser's own
      // late jump-to-anchor (at load) lands on the card mid-animation and overshoots.
      history.replaceState(null, "", location.pathname + location.search);
      var restoreHash = function () { history.replaceState(null, "", location.pathname + location.search + hash); };
      var nav = document.querySelector(".nav");
      // offsetTop ignores the reveal animation's transform, unlike getBoundingClientRect.
      var jump = function () {
        var top = 0;
        for (var n = target; n; n = n.offsetParent) top += n.offsetTop;
        window.scrollTo({ top: top - nav.offsetHeight - 12, behavior: "instant" });
      };
      jump();
      if (window.ResizeObserver) {
        var ro = new ResizeObserver(jump);
        ro.observe(nav);
        ro.observe(document.body);
        var stopped = false;
        var stop = function () { if (!stopped) { stopped = true; ro.disconnect(); } };
        ["wheel", "touchstart", "keydown", "mousedown"].forEach(function (ev) {
          window.addEventListener(ev, stop, { once: true, passive: true });
        });
        setTimeout(stop, 5000);
      }
      // The browser's own jump happens at load; after that the fragment can come back.
      window.addEventListener("load", function () { jump(); setTimeout(restoreHash, 0); }, { once: true });
    }
    document.getElementById("langToggle").addEventListener("click", function () {
      state.lang = (state.lang === "ar") ? "en" : "ar";
      localStorage.setItem("self-lang", state.lang);
      renderAll();
    });
  });
})();
