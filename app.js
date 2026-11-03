/* ==========================================================================
   Presentatie Data-uitgifte – bediening en interactieve onderdelen
   Inhoud staat in js/content.js en index.html; hier zit alleen gedrag.
   ========================================================================== */
(function () {
  "use strict";

  var C = window.CONTENT || {};
  var STAGE_W = 1600, STAGE_H = 900, BAR_H = 56;
  var STATUS = {
    vast: "Vastgesteld",
    richting: "Richting",
    concept: "Voorstel",
    open: "Nog te besluiten",
    hold: "On hold"
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function (tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (html != null) n.innerHTML = html;
    return n;
  };
  var svgEl = function (tag, attrs) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var tag = function (status, label) { return '<span class="tag tag--' + status + '">' + esc(label || STATUS[status]) + "</span>"; };
  var pressOnly = function (buttons, active) {
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", b === active ? "true" : "false"); });
  };

  /* ------------------------------------------------------------------
     Navigatie
     ------------------------------------------------------------------ */
  var slides = $$(".slide");
  var total = slides.length;
  var current = 0;
  var stage = $("#stage");
  var flowMode = false;

  slides.forEach(function (s, i) {
    s.setAttribute("aria-roledescription", "dia");
    s.setAttribute("aria-label", (i + 1) + " van " + total + ": " + s.dataset.title);
    var num = $(".slide-num", s);
    if (num) num.textContent = (i + 1) + " / " + total;
  });

  var dots = $("#dots");
  slides.forEach(function (s, i) {
    var d = el("button", { "class": "dot", type: "button", "aria-label": "Ga naar dia " + (i + 1) + ": " + s.dataset.title });
    d.addEventListener("click", function () { go(i); });
    dots.appendChild(d);
  });

  function go(i, opts) {
    i = Math.max(0, Math.min(total - 1, i));
    current = i;
    slides.forEach(function (s, k) {
      var on = k === i;
      s.classList.toggle("is-active", on);
      if (!flowMode) {
        if (on) { s.removeAttribute("inert"); s.removeAttribute("aria-hidden"); }
        else { s.setAttribute("inert", ""); s.setAttribute("aria-hidden", "true"); }
      }
    });
    $$(".dot", dots).forEach(function (d, k) {
      if (k === i) d.setAttribute("aria-current", "step"); else d.removeAttribute("aria-current");
    });
    $("#counter").textContent = (i + 1) + " / " + total;
    $("#progressBar").style.width = ((i + 1) / total * 100) + "%";
    $("#btnPrev").disabled = i === 0;
    $("#btnNext").disabled = i === total - 1;
    if (!(opts && opts.silent)) $("#announcer").textContent = "Dia " + (i + 1) + " van " + total + ": " + slides[i].dataset.title;
    var hash = "#dia-" + (i + 1);
    if (location.hash !== hash) {
      try { history.replaceState(null, "", hash); } catch (e) { /* bestand lokaal geopend */ }
    }
  }

  $("#btnPrev").addEventListener("click", function () { go(current - 1); });
  $("#btnNext").addEventListener("click", function () { go(current + 1); });

  /* ---------- Schalen naar het scherm ---------- */
  function fit() {
    flowMode = window.innerWidth <= 820;
    document.body.classList.toggle("is-flow", flowMode);
    if (flowMode) {
      stage.style.transform = "";
      slides.forEach(function (s) { s.removeAttribute("inert"); s.removeAttribute("aria-hidden"); s.classList.add("is-active"); });
      return;
    }
    var s = Math.min((window.innerWidth - 16) / STAGE_W, (window.innerHeight - BAR_H - 8) / STAGE_H);
    stage.style.transform = "translate(-50%, -50%) scale(" + s + ")";
    go(current, { silent: true });
  }
  window.addEventListener("resize", fit);

  /* ---------- Overzicht ---------- */
  var overview = $("#overview");
  var ovGrid = $("#overviewGrid");
  var lastFocus = null;
  slides.forEach(function (s, i) {
    var b = el("button", { "class": "ov-card", type: "button" },
      '<span class="n">' + (i + 1) + "</span><strong>" + esc(s.dataset.title) + "</strong>");
    b.addEventListener("click", function () { closeOverview(); go(i); });
    ovGrid.appendChild(b);
  });
  function openOverview() {
    lastFocus = document.activeElement;
    $$(".ov-card", ovGrid).forEach(function (c, k) { c.setAttribute("aria-current", k === current ? "true" : "false"); });
    overview.hidden = false;
    $$(".ov-card", ovGrid)[current].focus();
  }
  function closeOverview() {
    overview.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $("#btnOverview").addEventListener("click", openOverview);
  $("#btnCloseOverview").addEventListener("click", closeOverview);

  /* ---------- Toetsenbord ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;

    if (!overview.hidden) {
      if (e.key === "Escape") { e.preventDefault(); closeOverview(); }
      if (e.key === "Tab") { // focus binnen overzicht houden
        var f = $$("button", overview), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      return;
    }
    if (flowMode) return;

    var onControl = t && (t.tagName === "BUTTON" || t.tagName === "SUMMARY" || t.getAttribute("role") === "button");
    switch (e.key) {
      case "ArrowRight": case "ArrowDown": case "PageDown":
        e.preventDefault(); go(current + 1); break;
      case "ArrowLeft": case "ArrowUp": case "PageUp":
        e.preventDefault(); go(current - 1); break;
      case " ":
        if (!onControl) { e.preventDefault(); go(e.shiftKey ? current - 1 : current + 1); }
        break;
      case "Home": e.preventDefault(); go(0); break;
      case "End": e.preventDefault(); go(total - 1); break;
      case "Escape": case "o": case "O": e.preventDefault(); openOverview(); break;
      default:
        if (/^[1-9]$/.test(e.key) && +e.key <= total) go(+e.key - 1);
    }
  });

  window.addEventListener("hashchange", function () {
    var m = /^#dia-(\d+)$/.exec(location.hash);
    if (m) go(+m[1] - 1);
  });

  /* ------------------------------------------------------------------
     Dia 2 · Ontwikkelingen
     ------------------------------------------------------------------ */
  (function forces() {
    var grid = $("#forceGrid"), detail = $("#forceDetail");
    if (!grid || !C.forces) return;
    var btns = [];
    C.forces.forEach(function (f) {
      var b = el("button", { "class": "force", type: "button", "aria-pressed": "false" }, esc(f.titel));
      b.addEventListener("click", function () {
        pressOnly(btns, b);
        detail.innerHTML = "<p>" + esc(f.tekst) + "</p>";
      });
      btns.push(b);
      grid.appendChild(b);
    });
  })();

  /* ------------------------------------------------------------------
     Dia 3 · Toekomstbeeld
     ------------------------------------------------------------------ */
  (function concepts() {
    var wrap = $("#conceptChips"), detail = $("#conceptDetail"), svg = $("#visionSvg");
    if (!wrap || !C.concepts) return;
    var zones = $$(".zone", svg);
    var btns = [];
    var hint = detail.innerHTML;
    C.concepts.forEach(function (c) {
      var b = el("button", { "class": "chip", type: "button", "aria-pressed": "false" }, esc(c.titel));
      b.addEventListener("click", function () {
        if (b.getAttribute("aria-pressed") === "true") {
          pressOnly(btns, null);
          svg.classList.remove("is-focused");
          zones.forEach(function (z) { z.classList.remove("is-lit"); });
          detail.innerHTML = hint;
          return;
        }
        pressOnly(btns, b);
        svg.classList.add("is-focused");
        zones.forEach(function (z) { z.classList.toggle("is-lit", c.zones.indexOf(z.dataset.zone) > -1); });
        detail.innerHTML = tag(c.status) + "<p>" + esc(c.tekst) + "</p>";
      });
      btns.push(b);
      wrap.appendChild(b);
    });
  })();

  /* ------------------------------------------------------------------
     Dia 4 · Lagen
     ------------------------------------------------------------------ */
  (function layers() {
    var wrap = $("#layers"), detail = $("#layerDetail");
    if (!wrap || !C.layers) return;
    var btns = [];
    var addedLine = false;
    C.layers.forEach(function (l) {
      if (!l.zichtbaar && !addedLine) {
        wrap.appendChild(el("div", { "class": "waterline", "aria-hidden": "true" }, "Onder de motorkap"));
        addedLine = true;
      }
      var b = el("button", { "class": "layer" + (l.zichtbaar ? " layer--front" : ""), type: "button", "aria-pressed": "false" },
        '<span class="layer__t">' + esc(l.titel) + '</span><span class="layer__q">' + esc(l.vraag) + "</span>");
      b.addEventListener("click", function () { show(l, b); });
      btns.push(b);
      wrap.appendChild(b);
    });

    function show(l, b) {
      pressOnly(btns, b);
      detail.innerHTML =
        '<p class="panel-label">' + (l.zichtbaar ? "Zichtbaar voor de aanvrager" : "Onder de motorkap") + "</p>" +
        "<h3>" + esc(l.titel) + "</h3>" +
        "<ul>" + l.punten.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
        '<p class="layer-detail__rol"><strong>Wie</strong>' + esc(l.rol) + "</p>";
    }
    show(C.layers[0], btns[0]);
  })();

  /* ------------------------------------------------------------------
     Dia 5 · Betrokkenen
     ------------------------------------------------------------------ */
  (function team() {
    var svg = $("#teamSvg"), card = $("#personCard");
    if (!svg || !C.team) return;
    var cx = 450, cy = 400, R1 = 205, R2 = 345;
    svg.appendChild(svgEl("circle", { cx: cx, cy: cy, r: R2 + 52, fill: "var(--green-25)" }));
    svg.appendChild(svgEl("circle", { cx: cx, cy: cy, r: R1 + 62, fill: "var(--blue-25)" }));
    svg.appendChild(svgEl("circle", { cx: cx, cy: cy, r: 96, fill: "var(--warm-grey)" }));
    [["Werkpakket", 390, 19, 500], ["Data-uitgifte", 420, 26, 700]].forEach(function (t) {
      var tx = svgEl("text", { x: cx, y: t[1], "text-anchor": "middle", "font-size": t[2], "font-weight": t[3], fill: "var(--white)" });
      tx.textContent = t[0];
      svg.appendChild(tx);
    });

    var nodes = [];
    function initials(p) {
      if (p.open) return "?";
      var parts = p.naam.split(" ");
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    function place(list, R, kind, r) {
      list.forEach(function (p, i) {
        var a = -Math.PI / 2 + i * 2 * Math.PI / list.length;
        var x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
        var g = svgEl("g", { "class": "node", tabindex: "0", role: "button", "aria-pressed": "false",
          "aria-label": p.naam + ", " + p.rol + (kind === "kern" ? ", kernteam" : ", schil") });
        var fill = p.open ? "var(--white)" : (kind === "kern" ? "var(--blue)" : "var(--green)");
        g.appendChild(svgEl("circle", { "class": "node__dot", cx: x, cy: y, r: r, fill: fill,
          stroke: p.open ? "var(--warm-grey)" : "var(--white)", "stroke-width": p.open ? 3 : 4,
          "stroke-dasharray": p.open ? "6 5" : "none" }));
        var ini = svgEl("text", { x: x, y: y + 8, "text-anchor": "middle", "font-size": 22, "font-weight": 700,
          fill: kind === "kern" && !p.open ? "var(--white)" : "var(--warm-grey)" });
        ini.textContent = initials(p);
        g.appendChild(ini);
        var words = p.naam.split(" ");
        var l1 = words.shift(), l2 = words.join(" ");
        [l1, l2].forEach(function (line, k) {
          if (!line) return;
          var tx = svgEl("text", { x: x, y: y + r + 24 + k * 23, "text-anchor": "middle", "font-size": 21,
            "font-weight": k === 0 ? 700 : 400, fill: "var(--warm-grey)" });
          tx.textContent = line;
          g.appendChild(tx);
        });
        var act = function () { select(p, g, kind); };
        g.addEventListener("click", act);
        g.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); act(); }
        });
        nodes.push(g);
        svg.appendChild(g);
      });
    }
    place(C.team.kern, R1, "kern", 36);
    place(C.team.schil, R2, "schil", 32);

    function select(p, g, kind) {
      nodes.forEach(function (n) { n.setAttribute("aria-pressed", n === g ? "true" : "false"); });
      var status = p.open ? tag("open", "Nog in te vullen") : tag(kind === "kern" ? "richting" : "concept", kind === "kern" ? "Kernteam" : "Schil");
      card.innerHTML = '<div class="legend">' + status + "</div><h3>" + esc(p.naam) + '</h3><p class="role">' + esc(p.rol) + "</p><p>" + esc(p.brengt) + "</p>";
    }
    select(C.team.kern[0], nodes[0], "kern");
  })();

  /* ------------------------------------------------------------------
     Dia 6 · Projecten
     ------------------------------------------------------------------ */
  (function projects() {
    var wrap = $("#projectGroups"), detail = $("#projectDetail");
    if (!wrap || !C.projects) return;
    var groups = [
      { label: "Binnen het thema Data-uitgifte", ids: ["binnen"], small: false },
      { label: "Ernaast en daarna", ids: ["naast", "volgt"], small: true }
    ];
    var btns = [];
    groups.forEach(function (g) {
      var items = C.projects.filter(function (p) { return g.ids.indexOf(p.groep) > -1; });
      if (!items.length) return;
      var sec = el("div", { "class": "pgroup" });
      sec.appendChild(el("p", { "class": "panel-label" }, esc(g.label)));
      var grid = el("div", { "class": "pgrid" + (g.small ? " pgrid--small" : "") });
      items.forEach(function (p) {
        var b = el("button", { "class": "pcard pcard--" + p.groep, type: "button", "aria-pressed": "false" },
          "<strong>" + esc(p.titel) + "</strong>" + tag(p.status, p.label));
        b.addEventListener("click", function () { show(p, b); });
        btns.push(b);
        grid.appendChild(b);
      });
      sec.appendChild(grid);
      wrap.appendChild(sec);
    });

    function show(p, b) {
      pressOnly(btns, b);
      detail.innerHTML =
        '<div class="legend">' + tag(p.status, p.label) + "</div>" +
        "<h3>" + esc(p.titel) + "</h3>" +
        "<dl>" +
        "<div><dt>Doel</dt><dd>" + esc(p.doel) + "</dd></div>" +
        "<div><dt>Status</dt><dd>" + esc(p.statusTekst) + "</dd></div>" +
        "<div><dt>Afhankelijk van</dt><dd>" + p.afh.map(esc).join(", ") + "</dd></div>" +
        "</dl>";
    }
    show(C.projects[0], btns[0]);
  })();

  /* ------------------------------------------------------------------
     Start
     ------------------------------------------------------------------ */
  var m = /^#dia-(\d+)$/.exec(location.hash);
  current = m ? Math.max(0, Math.min(total - 1, +m[1] - 1)) : 0;
  fit();
  go(current, { silent: true });
})();
