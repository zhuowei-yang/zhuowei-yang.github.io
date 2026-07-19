(function () {
  "use strict";

  /* ---------- theme toggle ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle-btn");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* follow system changes only when the user hasn't chosen explicitly */
  var mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener && mql.addEventListener("change", function (e) {
    var saved;
    try { saved = localStorage.getItem("theme"); } catch (err) {}
    if (!saved) setTheme(e.matches ? "dark" : "light");
  });

  /* ---------- lightbox for paper figures ---------- */
  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Image viewer");
  lb.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close">&times;</button>' +
    '<img class="lightbox-img" alt="">';
  document.body.appendChild(lb);

  var lbImg = lb.querySelector(".lightbox-img");
  var lbClose = lb.querySelector(".lightbox-close");
  var lastFocus = null;

  function openLightbox(src, alt) {
    lastFocus = document.activeElement;
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }

  function closeLightbox() {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener("click", function (e) {
    var img = e.target.closest && e.target.closest(".pub-thumb img");
    if (img) {
      openLightbox(img.currentSrc || img.src, img.alt);
      return;
    }
    if (lb.classList.contains("is-open") &&
        (e.target === lb || e.target === lbImg || e.target === lbClose)) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lb.classList.contains("is-open")) closeLightbox();
  });

  /* keyboard access for figures */
  Array.prototype.forEach.call(document.querySelectorAll(".pub-thumb img"), function (img) {
    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", "Enlarge figure: " + (img.alt || "paper figure"));
    img.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(img.currentSrc || img.src, img.alt);
      }
    });
  });

  /* ---------- scroll-spy nav ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var sections = links
    .map(function (link) {
      var id = link.getAttribute("href");
      if (!id || id.charAt(0) !== "#") return null;
      var el = document.querySelector(id);
      return el ? { link: link, el: el } : null;
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var match = sections.filter(function (s) { return s.el === entry.target; })[0];
            if (!match) return;
            links.forEach(function (l) { l.classList.remove("active"); });
            match.link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s.el); });
  }
})();
