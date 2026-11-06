# Presentatie Uitgifte

Interactieve bestuurlijke briefing (9 schermen, ongeveer 10 minuten) over het werkpakket Uitgifte binnen het programma Datastrategie van DICA-IKNL.

## Openen

**Snelst:** dubbelklik op `dist/data-uitgifte-presentatie.html`. Dat is één los bestand met alles erin; je kunt het ook mailen.

**Bewerkbare versie:** open `index.html` in Chrome, Edge of Firefox. Je hebt geen server of installatie nodig.

Tip voor het gesprek: druk op **F11** (Windows) of **Ctrl+Cmd+F** (Mac) voor volledig scherm.

### Bediening

| Toets | Actie |
|---|---|
| → ↓ PageDown Spatie | volgende dia |
| ← ↑ PageUp | vorige dia |
| 1 – 9 | direct naar dia |
| Home / End | eerste / laatste dia |
| Esc of O | overzicht van alle dia's (nogmaals Esc sluit het) |

Je kunt ook op de bolletjes onderaan klikken. Elke dia heeft een eigen adres (`index.html#dia-7`), dus je kunt direct naar een dia linken.

Op een scherm smaller dan 820 px staan alle dia's onder elkaar (leesmodus).

## Structuur

```
data-uitgifte/
├── index.html               ← alle vaste teksten per dia (titels, kernzinnen, aandachtspunten, roadmap)
├── css/
│   ├── aurea-tokens.css     ← merkkleuren en lettertype uit het Aurea brand book
│   └── presentatie.css      ← layout en componenten
├── js/
│   ├── content.js           ← teksten van de interactieve onderdelen (klik-details)
│   └── app.js               ← alleen gedrag; hier hoef je niet in te zitten
├── docs/
│   └── contentmodel.md      ← per scherm: bron, en wat feit, voorstel of open punt is
├── tools/
│   └── bouw-enkel-bestand.py
└── dist/
    └── data-uitgifte-presentatie.html   ← gegenereerde versie in één bestand
```

## Tekst aanpassen

| Wat | Waar |
|---|---|
| Titels, kernzinnen, dia 2 (Waarom), roadmap, bestuurlijke aandachtspunten, slot | `index.html`: zoek op het commentaar `1 · OPENING`, `7 · ROADMAP` enzovoort |
| Kernbegrippen van het toekomstbeeld (dia 3) | `js/content.js` → `concepts` |
| Lagen achter het loket (dia 4) | `js/content.js` → `layers` |
| Kernteam, schil en afhankelijkheden (dia 5) | `js/content.js` → `team` |
| Projecten en statussen (dia 6) | `js/content.js` → `projects` |

Statussen gebruik je met deze waarden: `vast`, `richting`, `concept`, `open` of `hold`. Elke waarde heeft een vaste kleur uit de toegestane WCAG-combinaties.

Werk je in `index.html` of in `css/` of `js/`? Draai daarna `python3 tools/bouw-enkel-bestand.py` om de losse versie in `dist/` bij te werken.

## Achtergrond van de dia's kiezen

Er zijn vier varianten voor de lichte dia's (dia 2 t/m 8):

| Variant | Wat je ziet |
|---|---|
| **A · Donkere rand** | Warm Grey rond de dia |
| **B · Witte dia** | Witte dia op lichtgrijs, kaarten in lichtgrijs |
| **C · Blauwe kopbalk** | Titelbalk in Baseline Blue |
| **D · Lichtblauwe rand** | Baseline Blue 25% rond de dia (standaard) |

Wisselen tijdens het bekijken: druk op **Esc** en kies onderaan in het overzicht een variant. Je browser onthoudt de keuze; die gaat dan vóór de standaard.

De standaard voor iedereen zet je in `index.html`, op de regel `<body data-stijl="a">`: vervang `a` door `b`, `c` of `d`.

## Vormgeving

- **Ingericht op kleine schermen:** weinig tekst per dia en grote letters. De kleinste tekst op een dia is 20 px (op een laptop van 1366 px breed nog ruim 16 px). Houd nieuwe teksten even kort: titels tot ongeveer 25 tekens, toelichtingen maximaal twee korte zinnen. Details die van de dia's zijn gehaald, staan in `docs/contentmodel.md`.

- Er was geen CSS-bestand bijgevoegd. Het **Aurea brand book** (kleurenkaart en WCAG-richtlijnen) is gebruikt als stylesheet. Alle kleuren staan als tokens in `css/aurea-tokens.css`.
- Tekst gebruikt alleen de goedgekeurde contrastcombinaties (minimaal 4,5:1). Baseline Blue wordt alleen voor grote koppen gebruikt, zoals in het brand book zelf.
- Het lettertype DM Sans wordt via Google Fonts geladen. Zonder internet valt de presentatie terug op Segoe UI of Arial; de layout blijft dan intact.
- Bij de instelling 'beweging beperken' in het besturingssysteem zijn alle animaties uit.

## Voor het gesprek controleren

1. **Statussen van projecten** (dia 6) komen uit programmadocumenten van januari tot mei 2026. Werk ze bij als ze inmiddels zijn veranderd.
2. **Bemensing** (dia 5) is de teamsamenstelling van oktober 2026. Er wordt nog gezocht naar meer collega's vanuit DICA; die plek staat als 'nog in te vullen'.
3. **2028** is bewust als 'nog uit te werken' weergegeven, omdat de bronnen daar geen doelen voor noemen.

## Bestanden in je GitHub-repo zetten

Zet de bestanden in **dezelfde mappen** als hierboven (`css/`, `js/`, `docs/`, `tools/`, `dist/`). Staan ze los in de hoofdmap, dan laadt `index.html` oude versies uit de mappen en blijven dia's leeg.

Via github.com: open de repo, kies **Add file → Upload files** en sleep de **mappen** (niet de losse bestanden) uit de uitgepakte zip in het venster. Verwijder daarna de losse kopieën in de hoofdmap.
