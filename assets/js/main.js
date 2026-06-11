/* amar.jamale.org — Platform Console interactions */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- role typer ---------- */
  var roles = [
    "Senior Platform Engineer",
    "Internal Developer Platforms",
    "Kubernetes & Cloud Infrastructure",
    "Automation at Scale",
    "DevOps · GitOps · IaC"
  ];
  var roleEl = document.getElementById("role-typer");
  if (roleEl && !reducedMotion) {
    var roleIdx = 0, charIdx = roles[0].length, deleting = false;
    var tick = function () {
      var word = roles[roleIdx];
      if (deleting) {
        charIdx--;
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
      } else {
        charIdx++;
        if (charIdx === word.length) {
          deleting = true;
          roleEl.textContent = word;
          setTimeout(tick, 2600);
          return;
        }
      }
      roleEl.textContent = roles[roleIdx].slice(0, charIdx);
      setTimeout(tick, deleting ? 40 : 75);
    };
    setTimeout(function () { deleting = true; tick(); }, 2600);
  }

  /* ---------- hero terminal session ---------- */
  var termEl = document.getElementById("term-output");
  if (termEl) {
    // [text, cssClass, instant] — typed line by line like a real session
    var session = [
      ["$ ssh amar@platform.jamale.org", "t-prompt", false],
      ["Welcome to the platform. Uptime: 7+ years.", "t-dim", true],
      ["", "", true],
      ["$ amar --status", "t-prompt", false],
      ["  role:      Senior Platform Engineer", "t-key", true],
      ["  org:       CatalystOne Solutions AS", "t-key", true],
      ["  mission:   make shipping software boring", "t-key", true],
      ["", "", true],
      ["$ amar --capabilities | head -5", "t-prompt", false],
      ["  ✓ backstage developer portal", "t-ok", true],
      ["  ✓ crossplane control plane · 35+ platform APIs", "t-ok", true],
      ["  ✓ flux gitops · hub-and-spoke fleet", "t-ok", true],
      ["  ✓ zero-static-secrets workload identity", "t-ok", true],
      ["  ✓ ansible fleet automation (1000+ nodes)", "t-ok", true],
      ["", "", true],
      ["$ █", "t-prompt", true]
    ];

    var render = function (upTo, partial) {
      var html = "";
      for (var i = 0; i < upTo; i++) {
        html += '<span class="' + session[i][1] + '">' + session[i][0] + "</span>\n";
      }
      if (partial !== undefined) {
        html += '<span class="' + session[upTo][1] + '">' + session[upTo][0].slice(0, partial) + "</span>";
      }
      termEl.innerHTML = html;
    };

    if (reducedMotion) {
      render(session.length);
    } else {
      var line = 0;
      var playLine = function () {
        if (line >= session.length) return;
        var entry = session[line];
        if (entry[2]) { // instant line
          line++;
          render(line);
          setTimeout(playLine, 120);
        } else { // typed line
          var ch = 0;
          var typeChar = function () {
            ch++;
            render(line, ch);
            if (ch < entry[0].length) {
              setTimeout(typeChar, 28);
            } else {
              line++;
              render(line);
              setTimeout(playLine, 320);
            }
          };
          typeChar();
        }
      };
      setTimeout(playLine, 400);
    }
  }

  /* ---------- stat counters ---------- */
  var animateCount = function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (reducedMotion) { el.textContent = String(target); return; }
    var start = null, dur = 1400;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  var statsDone = false;
  var statEls = document.querySelectorAll(".stat-num");
  if (statEls.length) {
    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !statsDone) {
          statsDone = true;
          statEls.forEach(animateCount);
          statObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    statObserver.observe(statEls[0].closest(".hero-stats"));
  }

  /* ---------- scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(
    ".section-head, .stage, .ship-card, .stack-card, .cred-card, .about-text, .about-manifest, .contact-card"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealTargets.forEach(function (el) { revealObserver.observe(el); });

  /* ---------- nav active link ---------- */
  var navLinks = document.querySelectorAll(".nav-links a");
  var sections = Array.prototype.map.call(navLinks, function (a) {
    return document.querySelector(a.getAttribute("href"));
  });
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { if (s) sectionObserver.observe(s); });

  /* ---------- console easter egg ---------- */
  if (window.console && console.log) {
    console.log(
      "%c$ amar --hire\n%cGood instincts, checking the console. Let's talk: https://www.linkedin.com/in/amarnathjamale/",
      "color:#4ade80;font-family:monospace;font-size:14px;font-weight:bold",
      "color:#94a3b8;font-family:monospace;font-size:12px"
    );
  }
})();
