/* ==========================================================================
   INHOUD VAN DE INTERACTIEVE ONDERDELEN
   --------------------------------------------------------------------------
   Hier pas je de teksten aan die verschijnen als je op iets klikt.
   Vaste teksten (titels, kernzinnen) staan direct in index.html.

   Houd teksten kort: de presentatie is ingericht op kleine schermen.
   Richtlijn: titels max. ~25 tekens, toelichting max. 2 korte zinnen.

   Statuswaarden (bepalen het label en de kleur):
     "vast"     -> Vastgesteld
     "richting" -> Richting
     "concept"  -> Voorstel / concept
     "open"     -> Nog te besluiten / uit te werken
     "hold"     -> On hold

   Broncodes (zie docs/contentmodel.md):
     OO = concept-opdrachtomschrijving Data-uitgifte (10 sep 2026)
     PP = Programmaplan Datastrategie v0.1 (27 mei 2026)
     PD = Programmadeck Datastrategie (jan 2026 e.v.)
     BR = briefing van de opsteller
     TS = teamsamenstelling (oktober 2026)
   ========================================================================== */

window.CONTENT = {

  /* ---------- Dia 2: ontwikkelingen die samenkomen ---------- */
  forces: [
    {
      id: "fusie",
      titel: "Fusie DICA-IKNL",
      tekst: "Twee verschillend ingerichte dataketens worden één organisatie. Dat vraagt om één herkenbare dienstverlening.",
      bron: "PP 1.2"
    },
    {
      id: "veld",
      titel: "Verwachtingen van het veld",
      tekst: "Meer vraag naar actuele, betrouwbare data en meer complexe verzoeken. Gebruikers willen sneller inzicht.",
      bron: "PD thema-dia; PP 1.2"
    },
    {
      id: "beschikbaar",
      titel: "Databeschikbaarheid",
      tekst: "We willen onze sterke positie behouden. Data krijgt pas waarde als gebruikers die kunnen vinden en gebruiken.",
      bron: "OO; BR"
    },
    {
      id: "ehds",
      titel: "EHDS en HDAB-NL",
      tekst: "Data moet vindbaar, toegankelijk en herbruikbaar zijn. Onze rol in de EHDS wordt nog verkend.",
      bron: "PD thema-dia; PP 1.2"
    },
    {
      id: "schaal",
      titel: "Schaalbaarheid",
      tekst: "De vraag groeit, de middelen niet. Dat vraagt standaardisatie, hergebruik en automatisering.",
      bron: "OO"
    }
  ],

  /* ---------- Dia 3: kernbegrippen toekomstbeeld ----------
     'zones' bepaalt welk deel van het schema oplicht:
     vragen | etalage | ingang | proces | kaders | levering            */
  concepts: [
    {
      id: "ingang",
      titel: "Eén ingang",
      zones: ["vragen", "etalage", "ingang"],
      tekst: "Eén plek om data aan te vragen voor NKR, KR, KvL en PZ. De Etalage laat zien wát er is, het Loket regelt hóe je het krijgt.",
      status: "richting",
      bron: "OO; PD 1-dataloket"
    },
    {
      id: "uniform",
      titel: "Uniform",
      zones: ["proces"],
      tekst: "Elke aanvraag doorloopt dezelfde stappen, ongeacht team of medewerker. Eén proces waar het kan, variatie waar het moet.",
      status: "richting",
      bron: "OO; PD thema-dia"
    },
    {
      id: "voorspelbaar",
      titel: "Voorspelbaar",
      zones: ["ingang", "proces", "levering"],
      tekst: "Aanvragers weten vooraf wat kan en hoe lang het duurt. KPI-voorstel: gemiddeld een 8,0 en 75% binnen 100 dagen.",
      status: "concept",
      bron: "PD 1-dataloket; OO"
    },
    {
      id: "schaalbaar",
      titel: "Schaalbaar",
      zones: ["etalage", "levering"],
      tekst: "Wat vaak voorkomt, standaardiseren of automatiseren we. Maatwerk blijft mogelijk waar het nodig is.",
      status: "richting",
      bron: "OO"
    },
    {
      id: "veilig",
      titel: "Veilig & betrouwbaar",
      zones: ["kaders", "levering"],
      tekst: "Eén toetsingskader en één centrale privacycommissie. Indien nodig leveren we in een beveiligde omgeving.",
      status: "richting",
      bron: "OO; PD 1-dataloket"
    }
  ],

  /* ---------- Dia 4: lagen die georganiseerd moeten worden ---------- */
  layers: [
    {
      id: "aanbod",
      titel: "Aanbod",
      vraag: "Wat bieden we aan?",
      zichtbaar: true,
      punten: [
        "Eén overzicht van alle data- en informatieproducten",
        "Per product: doelgroep, gebruik en eigenaar",
        "Keuzes: behouden, samenvoegen of stoppen"
      ],
      rol: "Samen met Eén Etalage",
      bron: "OO; PD 1-etalage"
    },
    {
      id: "loket",
      titel: "Loket",
      vraag: "Hoe vraag je iets aan?",
      zichtbaar: true,
      punten: [
        "Eén plek om aan te vragen, voor vier domeinen",
        "Eén aanvraagformulier",
        "Vooraf duidelijk: selfservice, standaard of maatwerk"
      ],
      rol: "Uitgevoerd via Eén Loket",
      bron: "OO; PD 1-dataloket"
    },
    {
      id: "proces",
      titel: "Proces",
      vraag: "Hoe handelen we het af?",
      zichtbaar: false,
      punten: [
        "Vaste stappen van intake tot evaluatie",
        "Eén toetsingskader voor de vier domeinen",
        "Eén gezamenlijke backoffice"
      ],
      rol: "Binnen dit werkpakket",
      bron: "OO; PD 1-dataloket"
    },
    {
      id: "data",
      titel: "Data en techniek",
      vraag: "Waarmee leveren we?",
      zichtbaar: false,
      punten: [
        "Dashboards, bestanden en API's; indien nodig in een beveiligde omgeving",
        "Herbruikbare datasets en minder handwerk",
        "Goede datakwaliteit als fundament"
      ],
      rol: "Wij stellen de eisen, Architectuur en dataplatform bouwen (voorstel)",
      bron: "OO (besluitpunten, scope)"
    },
    {
      id: "kaders",
      titel: "Kaders en governance",
      vraag: "Wie beslist waarover?",
      zichtbaar: false,
      punten: [
        "Heldere rollen en mandaten",
        "Eén centrale privacycommissie",
        "KPI's, te beginnen met een nulmeting"
      ],
      rol: "Binnen dit werkpakket",
      bron: "OO; PD 1-dataloket"
    }
  ],

  /* ---------- Dia 5: betrokkenen ----------
     Samenstelling oktober 2026.
     Zet "open: true" bij een plek die nog niet is ingevuld.          */
  team: {
    kern: [
      { naam: "Thijs van Vegchel", rol: "Werkpakketleider", brengt: "Vertegenwoordigt NKR-analyse en de datastrategie. Eindverantwoordelijk voor samenhang, visie en besluitvorming." },
      { naam: "Mirthe Groothuis", rol: "Mede-werkpakketleider", brengt: "Strategische verbinding met de datastrategie. Kent de data- en informatieproducten van DICA en IKNL." },
      { naam: "Gemma Timmermans", rol: "Analist", brengt: "Vertegenwoordigt de huidige praktijk van NKR-analyse. Product owner DataLOKET." },
      { naam: "Marjolein Verhoeven", rol: "Informatieanalist", brengt: "Vertegenwoordigt de DICA-praktijk: productportfolio, metadata en informatieproducten." },
      { naam: "Marc Klaassen", rol: "BI-specialist", brengt: "Vanuit team BI: kennis van dashboards, BI-producten en selfservice." },
      { naam: "Sandra van der Kooij", rol: "Informatieanalist", brengt: "Verbindende schakel met Harmonisatie & Standaardisatie." }
    ],
    schil: [
      { naam: "Willem Schilte", rol: "Hoofd Software Development", brengt: "Architectuur, technische koers en aansluiting op het dataplatform." },
      { naam: "Remy Broos", rol: "Privacy officer", brengt: "Vertaalt privacyregels praktisch naar processen en projecten." },
      { naam: "Eva Mezei", rol: "Senior clinical data scientist", brengt: "Onderzoek, data science en het perspectief van de gebruiker." },
      { naam: "Annemarie Eeltink", rol: "Analist", brengt: "Verbindende schakel met het project Uitgeven niet-NKR-data." },
      { naam: "Rian Schobers", rol: "Software developer", brengt: "Gebruiksvriendelijkheid, toegankelijkheid en gebruikerservaring." },
      { naam: "Baukje Dijkstra", rol: "Communicatie", brengt: "Adoptie, stakeholdermanagement, positionering en communicatie." },
      { naam: "Collega's DICA", rol: "Nog in te vullen", brengt: "We zoeken nog meer collega's vanuit de kwaliteitsregistraties of de dienstverlening van DICA.", open: true }
    ]
  },

  /* ---------- Dia 6: projecten en activiteiten ----------
     groep: "binnen" (thema Data-uitgifte) | "naast" (raakvlak) | "volgt"  */
  projects: [
    {
      id: "strategie",
      groep: "binnen",
      titel: "Visie en strategie",
      status: "concept",
      label: "In concept",
      doel: "Toekomstbeeld, portfolio, governance, KPI's en plan van aanpak voor data-uitgifte.",
      statusTekst: "Opdrachtomschrijving in concept (10 sep 2026)",
      afh: ["Vaststelling door programmaleiding"],
      bron: "OO; PP 2.2.2"
    },
    {
      id: "etalage",
      groep: "binnen",
      titel: "Eén Etalage",
      status: "concept",
      label: "Afrondend",
      doel: "Het hele aanbod van DICA en IKNL in beeld, met aanbevelingen voor het portfolio.",
      statusTekst: "In afrondende fase volgens programmadeck",
      afh: ["Communicatie (propositie)"],
      bron: "PD WP1"
    },
    {
      id: "loket",
      groep: "binnen",
      titel: "Eén (data)loket",
      status: "open",
      label: "Start later",
      doel: "Eén plek op de website om data aan te vragen voor de vier domeinen.",
      statusTekst: "Opdrachtomschrijving in concept; start later",
      afh: ["Werkgroep grondslagen", "Fusie-/integratieteam"],
      bron: "PD WP6 en opdrachtomschrijving 1-dataloket"
    },
    {
      id: "koppelen",
      groep: "binnen",
      titel: "Koppelen DICA-IKNL",
      status: "hold",
      label: "On hold",
      doel: "Structurele koppelingen tussen datasets en domeinen voorbereiden.",
      statusTekst: "On hold, in afwachting van grondslagen",
      afh: ["Werkgroep grondslagen"],
      bron: "PP 2.2.2; PD WP7"
    },
    {
      id: "nietnkr",
      groep: "naast",
      titel: "Niet-NKR-data",
      status: "open",
      label: "Status onbekend",
      doel: "Niet-NKR-data (zoals KvL en PZ) inlezen en gekoppeld aan NKR-data uitleveren.",
      statusTekst: "Actuele status niet in de bronnen",
      afh: ["Harmonisatie"],
      bron: "PP 2.2.1; PD Spoor 4"
    },
    {
      id: "harmonisatie",
      groep: "naast",
      titel: "Harmonisatie",
      status: "richting",
      label: "Lopend",
      doel: "Minder verschillen in definities en coderingen, zodat data herbruikbaar wordt.",
      statusTekst: "Lopend thema in het programma",
      afh: ["EHDS"],
      bron: "PP 2.1"
    },
    {
      id: "architectuur",
      groep: "naast",
      titel: "Architectuur",
      status: "richting",
      label: "Lopend",
      doel: "De huidige stromen van verzameling tot uitgifte in kaart brengen.",
      statusTekst: "Lopend thema in het programma",
      afh: ["MRDM", "Dataplatform"],
      bron: "PP 2.2.4"
    },
    {
      id: "kwaliteit",
      groep: "naast",
      titel: "Datakwaliteit",
      status: "richting",
      label: "Lopend",
      doel: "Datakwaliteit expliciet maken en borgen als basis voor betrouwbare producten.",
      statusTekst: "Lopend thema in het programma",
      afh: ["EHDS-kwaliteitskaders"],
      bron: "PP 2.1; PD"
    },
    {
      id: "ehds",
      groep: "naast",
      titel: "EHDS en CancerLink",
      status: "open",
      label: "Opnieuw verbinden",
      doel: "Bestaande initiatieven waar het werkpakket op aansluit. De verbinding met de EHDS moet opnieuw worden gezocht.",
      statusTekst: "Aandachtspunt: geen vaste verbinding meer in het kernteam",
      afh: ["Keuze EHDS-rol DICA-IKNL"],
      bron: "OO; TS"
    },
    {
      id: "operationeel",
      groep: "volgt",
      titel: "Projecten 2027",
      status: "open",
      label: "Nog te benoemen",
      doel: "Projecten om loket, uitgifteproces, portfolio en governance verder te realiseren.",
      statusTekst: "Nog te benoemen",
      afh: ["Besluit over het toekomstbeeld"],
      bron: "OO (roadmap)"
    }
  ]
};
