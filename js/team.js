/* Reveal-on-scroll for the team page (static content, no i18n state). */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var els = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (e) { e.classList.add("in-view"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (e) { io.observe(e); });
  });
})();
