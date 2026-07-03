/* amar.jamale.org: Platform Console interactions */
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

  /* ---------- hero terminal: intro session + interactive shell ---------- */
  var termEl = document.getElementById("term-output");
  var termWrap = document.getElementById("term");
  var termInput = document.getElementById("term-input");

  if (termEl && termWrap && termInput) {
    var esc = function (s) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    var print = function (text, cls) {
      termEl.innerHTML += '<span class="' + (cls || "") + '">' + text + "</span>\n";
      termEl.scrollTop = termEl.scrollHeight;
    };

    var CAPABILITIES = [
      ["  ✓ backstage developer portal", "t-ok"],
      ["  ✓ crossplane control plane · 35+ platform APIs", "t-ok"],
      ["  ✓ flux gitops · hub-and-spoke fleet", "t-ok"],
      ["  ✓ zero-static-secrets workload identity", "t-ok"],
      ["  ✓ ansible fleet automation (1000+ nodes)", "t-ok"]
    ];

    // [text, cssClass, instant]
    var session = [
      ["$ ssh amar@platform.jamale.org", "t-prompt", false],
      ["Welcome to the platform. Uptime: 7+ years.", "t-dim", true],
      ["", "", true],
      ["$ amar --status", "t-prompt", false],
      ["  role:      Senior Platform Engineer", "t-key", true],
      ["  org:       CatalystOne Solutions AS", "t-key", true],
      ["  mission:   make shipping software boring", "t-key", true],
      ["", "", true],
      ["$ amar --capabilities | head -5", "t-prompt", false]
    ].concat(CAPABILITIES.map(function (c) { return [c[0], c[1], true]; }));

    var commands = {
      help: function () {
        print("  available commands:", "t-dim");
        print("    whoami          who is this guy", "t-key");
        print("    amar --help     the man himself, as a cli", "t-key");
        print("    experience      career history", "t-key");
        print("    capabilities    what i do", "t-key");
        print("    certs           certifications", "t-key");
        print("    awards          trophy cabinet", "t-key");
        print("    contact         get in touch", "t-key");
        print("    ls              look around", "t-key");
        print("    cat engineer.yaml", "t-key");
        print("    kubectl get pods", "t-key");
        print("    sudo hire amar", "t-key");
        print("    clear · exit · coffee · uptime", "t-dim");
      },
      whoami: function () {
        print("  amarnath-jamale · senior platform engineer @ catalystone solutions", "t-key");
      },
      experience: function () {
        print("  [2025 → now ] senior platform engineer · catalystone solutions as", "t-ok");
        print("  [2019 → 2025] tata consultancy services · for dnb bank asa", "t-key");
        print("                azure devops · ansible · unix/linux platform", "t-dim");
        print("  full detail: scroll to ## 02 · experience", "t-dim");
      },
      capabilities: function () {
        CAPABILITIES.forEach(function (c) { print(c[0], c[1]); });
      },
      certs: function () {
        print("  ✓ AZ-400 devops engineer expert", "t-ok");
        print("  ✓ AZ-204 azure developer associate", "t-ok");
        print("  ✓ AZ-104 azure administrator associate", "t-ok");
        print("  ✓ AZ-900 azure fundamentals", "t-ok");
        print("  ✓ google cloud badges · developer essentials, vm migration", "t-ok");
      },
      contact: function () {
        print('  email:    <a href="mailto:amar@jamale.org">amar@jamale.org</a>', "t-key");
        print('  linkedin: <a href="https://www.linkedin.com/in/amarnathjamale/" target="_blank" rel="noopener">linkedin.com/in/amarnathjamale</a>', "t-key");
        print('  github:   <a href="https://github.com/amarnathjamale" target="_blank" rel="noopener">github.com/amarnathjamale</a>', "t-key");
        print('  resume:   <a href="assets/docs/Amarnath Jamale Resume v1.1.pdf" download>resume.pdf</a> · <a href="assets/docs/Amarnath Jamale CV v4.0.pdf" download>cv.pdf</a>', "t-key");
      },
      awards: function () {
        print("  🏆 beyond excellence ×2 · best team ×3 · mvp ×3", "t-ok");
        print("  🏆 star of the month ×4 · on the spot ×6 · maitree prize", "t-ok");
        print("  $3.5M + 20,000 hours saved annually by patching automation", "t-key");
      },
      ls: function () {
        print("  engineer.yaml   golden-paths/   guardrails/   resume.pdf   cv.pdf", "t-key");
      },
      uptime: function () {
        print("  7+ years in infrastructure · 0 unplanned career restarts", "t-ok");
      },
      status: function () {
        print("  all systems operational. click the green dot up top for details.", "t-ok");
      },
      coffee: function () {
        print("  $ kubectl scale deployment/coffee --replicas=2", "t-dim");
        print("  deployment.apps/coffee scaled ☕☕", "t-ok");
      },
      exit: function () {
        print("  session persists. like a well-behaved statefulset.", "t-dim");
      },
      clear: function () {
        termEl.innerHTML = "";
      }
    };

    var runCommand = function (raw) {
      var cmd = raw.trim();
      print("$ " + esc(cmd), "t-prompt");
      if (!cmd) return;
      var lower = cmd.toLowerCase().replace(/\s+/g, " ");

      if (commands[lower]) return commands[lower]();
      if (lower === "skills") return commands.capabilities();
      if (lower === "amar" || lower === "amar --help" || lower === "amar -h") {
        print("  usage: amar [flag]", "t-dim");
        print("    --status         current assignment", "t-key");
        print("    --capabilities   what i do", "t-key");
        print("    --experience     career history", "t-key");
        print("    --certs          certifications", "t-key");
        print("    --contact        get in touch", "t-key");
        print("    --hire           skip the queue", "t-key");
        return;
      }
      if (lower === "amar --status") {
        print("  role:      Senior Platform Engineer", "t-key");
        print("  org:       CatalystOne Solutions AS", "t-key");
        print("  mission:   make shipping software boring", "t-key");
        return;
      }
      if (lower.indexOf("amar --capabilities") === 0) return commands.capabilities();
      if (lower === "amar --experience") return commands.experience();
      if (lower === "amar --certs") return commands.certs();
      if (lower === "amar --contact") return commands.contact();
      if (lower === "amar --hire") {
        print("  [amar] permission granted ✓", "t-ok");
        print('  opening hiring pipeline → <a href="https://www.linkedin.com/in/amarnathjamale/" target="_blank" rel="noopener">linkedin.com/in/amarnathjamale</a>', "t-key");
        window.open("https://www.linkedin.com/in/amarnathjamale/", "_blank", "noopener");
        return;
      }
      if (lower.indexOf("amar ") === 0) {
        print("  unknown flag. try 'amar --help'", "t-err");
        return;
      }
      if (lower === "cat engineer.yaml") {
        print("  kind: PlatformEngineer", "t-key");
        print("  spec: { focus: [idp, kubernetes, iac, automation] }", "t-key");
        print("  status: { phase: Running, caffeinated: true }", "t-ok");
        return;
      }
      if (lower === "cat resume.pdf" || lower === "cat cv.pdf") {
        print("  binary file. use 'contact' for download links.", "t-dim");
        return;
      }
      if (lower === "kubectl get pods") {
        print("  NAME                          READY   STATUS             RESTARTS", "t-dim");
        print("  backstage-7d4f9c-xk2pl        1/1     Running            0", "t-ok");
        print("  crossplane-controller-b8s2m   1/1     Running            0", "t-ok");
        print("  flux-reconciler-q9d7w         1/1     Running            0", "t-ok");
        print("  coffee-machine-0              0/1     CrashLoopBackOff   47", "t-err");
        return;
      }
      if (lower.indexOf("kubectl") === 0) {
        print("  error: try 'kubectl get pods'. RBAC says that's all you get.", "t-err");
        return;
      }
      if (lower === "sudo hire amar" || lower === "sudo hire" || lower === "hire" || lower === "hire amar") {
        print("  [sudo] permission granted ✓", "t-ok");
        print('  opening hiring pipeline → <a href="https://www.linkedin.com/in/amarnathjamale/" target="_blank" rel="noopener">linkedin.com/in/amarnathjamale</a>', "t-key");
        window.open("https://www.linkedin.com/in/amarnathjamale/", "_blank", "noopener");
        return;
      }
      if (lower.indexOf("sudo") === 0) {
        print("  user is not in the sudoers file. incident reported to /dev/null.", "t-err");
        return;
      }
      if (lower.indexOf("rm ") === 0 || lower === "rm") {
        print("  ✗ denied by kyverno policy 'protect-everything'. nice try.", "t-err");
        return;
      }
      if (lower.indexOf("ansible") === 0) {
        print("  PLAY RECAP: ok=1000  changed=0  failed=0", "t-ok");
        print("  the fleet is idempotent. nothing to do.", "t-dim");
        return;
      }
      if (lower === "ping") { print("  pong (0.42ms, platform-grade latency)", "t-ok"); return; }
      if (lower === "pwd") { print("  /home/amar/platforms", "t-key"); return; }
      print("  command not found: " + esc(cmd) + ". try 'help'", "t-err");
    };

    var activateShell = function () {
      print("", "");
      print("type 'help' to explore. the shell is real, the infra behind it is not", "t-dim");
      termWrap.classList.add("ready");
    };

    var history = [], histIdx = -1;
    termInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var val = termInput.value;
        termInput.value = "";
        if (val.trim()) { history.unshift(val); if (history.length > 30) history.pop(); }
        histIdx = -1;
        runCommand(val);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (histIdx < history.length - 1) { histIdx++; termInput.value = history[histIdx]; }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (histIdx > 0) { histIdx--; termInput.value = history[histIdx]; }
        else { histIdx = -1; termInput.value = ""; }
      }
    });
    termWrap.addEventListener("click", function (e) {
      // don't steal focus while the user is selecting text or clicking a link
      var sel = window.getSelection();
      if (sel && String(sel).length > 0) return;
      if (e.target.closest && e.target.closest("a")) return;
      if (termWrap.classList.contains("ready")) termInput.focus({ preventScroll: true });
    });
    // select-to-copy, like a real terminal
    termEl.addEventListener("mouseup", function () {
      var sel = window.getSelection();
      var text = sel ? String(sel) : "";
      if (text && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(function () {});
      }
    });

    // play the intro, then hand over the prompt
    if (reducedMotion) {
      session.forEach(function (l) { print(l[0], l[1]); });
      activateShell();
    } else {
      var line = 0;
      var playLine = function () {
        if (line >= session.length) { activateShell(); return; }
        var entry = session[line];
        if (entry[2]) {
          print(entry[0], entry[1]);
          line++;
          setTimeout(playLine, 120);
        } else {
          var ch = 0;
          var partial = document.createElement("span");
          partial.className = entry[1];
          termEl.appendChild(partial);
          var typeChar = function () {
            ch++;
            partial.textContent = entry[0].slice(0, ch);
            if (ch < entry[0].length) {
              setTimeout(typeChar, 28);
            } else {
              partial.remove();
              print(entry[0], entry[1]);
              line++;
              setTimeout(playLine, 320);
            }
          };
          typeChar();
        }
      };
      setTimeout(playLine, 400);
    }
  }

  /* ---------- status pill: cycling text + status-page popover ---------- */
  var statusBtn = document.getElementById("status-btn");
  var statusPop = document.getElementById("status-pop");
  var statusText = document.getElementById("status-text");
  if (statusBtn && statusPop && statusText) {
    var phrases = [
      "all systems operational",
      "reconciling: 35 resources in sync",
      "drift detected: none",
      "uptime 99.99% · coffee 12%",
      "0 tickets · golden paths paved"
    ];
    if (!reducedMotion) {
      var pIdx = 0;
      setInterval(function () {
        pIdx = (pIdx + 1) % phrases.length;
        statusText.style.opacity = "0";
        setTimeout(function () {
          statusText.textContent = phrases[pIdx];
          statusText.style.opacity = "1";
        }, 250);
      }, 6000);
    }
    statusBtn.addEventListener("click", function () {
      var open = !statusPop.hidden;
      statusPop.hidden = open;
      statusBtn.setAttribute("aria-expanded", String(!open));
    });
    document.addEventListener("click", function (e) {
      if (!statusPop.hidden && !(e.target.closest && e.target.closest(".status-wrap"))) {
        statusPop.hidden = true;
        statusBtn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !statusPop.hidden) {
        statusPop.hidden = true;
        statusBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- stat counters ---------- */
  var animateCount = function (el) {
    if (!el.hasAttribute("data-count")) return;
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

  /* ---------- theme picker ---------- */
  var themeBtn = document.getElementById("theme-btn");
  var themePop = document.getElementById("theme-pop");
  if (themeBtn && themePop) {
    var themeOpts = themePop.querySelectorAll(".theme-opt");
    var markActive = function () {
      var current = document.documentElement.getAttribute("data-theme") || "";
      themeOpts.forEach(function (o) {
        o.classList.toggle("active", o.getAttribute("data-theme-opt") === current);
      });
    };
    markActive();
    themeOpts.forEach(function (opt) {
      opt.addEventListener("click", function () {
        var v = opt.getAttribute("data-theme-opt");
        if (v) {
          document.documentElement.setAttribute("data-theme", v);
        } else {
          document.documentElement.removeAttribute("data-theme");
        }
        try {
          if (v) localStorage.setItem("theme", v);
          else localStorage.removeItem("theme");
        } catch (e) {}
        markActive();
        themePop.hidden = true;
        themeBtn.setAttribute("aria-expanded", "false");
      });
    });
    themeBtn.addEventListener("click", function () {
      var open = !themePop.hidden;
      themePop.hidden = open;
      themeBtn.setAttribute("aria-expanded", String(!open));
    });
    document.addEventListener("click", function (e) {
      if (!themePop.hidden && !(e.target.closest && e.target.closest(".theme-wrap"))) {
        themePop.hidden = true;
        themeBtn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !themePop.hidden) {
        themePop.hidden = true;
        themeBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- console easter egg ---------- */
  if (window.console && console.log) {
    console.log(
      "%c$ amar --hire\n%cGood instincts, checking the console. Let's talk: https://www.linkedin.com/in/amarnathjamale/",
      "color:#4ade80;font-family:monospace;font-size:14px;font-weight:bold",
      "color:#94a3b8;font-family:monospace;font-size:12px"
    );
  }
})();
