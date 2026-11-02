/* ==========================================================================
   INHOUD VAN DE INTERACTIEVE ONDERDELEN
   --------------------------------------------------------------------------
   Hier pas je de teksten aan die verschijnen als je op iets klikt.
   Vaste teksten (titels, kernzinnen) staan direct in index.html.

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
   ========================================================================== */

window.CONTENT = {

  /* ---------- Scherm 2: ontwikkelingen die samenkomen ---------- */
  forces: [
    {
      id: "fusie",
      titel: "Fusie DICA-IKNL",
      kort: "Twee ketens worden één organisatie",
      tekst: "DICA en IKNL hebben elk sterke, maar verschillend ingerichte data- en informatieketens, met eigen bronnen, processen, governance en techniek. De fusie vraagt om één herkenbare dienstverlening.",
      bron: "PP 1.2"
    },
    {
      id: "veld",
      titel: "Verwachtingen van het veld",
      kort: "Sneller, actueler, complexer",
      tekst: "Er is meer vraag naar actuele, betrouwbare en herleidbare data, en het aantal complexe dataverzoeken neemt toe. Zorg, onderzoek en beleid vragen om snellere inzichten.",
      bron: "PD thema-dia; PP 1.2"
    },
    {
      id: "beschikbaar",
      titel: "Databeschikbaarheid",
      kort: "Waarde ontstaat bij gebruik",
      tekst: "DICA-IKNL heeft een groot en groeiend portfolio van data, dashboards en rapportages. We willen onze sterke positie rond databeschikbaarheid behouden. Die waarde ontstaat pas als gebruikers de producten kunnen vinden, begrijpen en toepassen.",
      bron: "OO; BR"
    },
    {
      id: "ehds",
      titel: "EHDS en HDAB-NL",
      kort: "Nieuwe eisen aan secundair gebruik",
      tekst: "Europese en nationale ontwikkelingen vragen dat datasets beter vindbaar, toegankelijk en herbruikbaar worden. Zonder één werkwijze kunnen we niet gestandaardiseerd en compliant leveren. Welke EHDS-rol DICA-IKNL krijgt, wordt nog verkend.",
      bron: "PD thema-dia; PP 1.2"
    },
    {
      id: "schaal",
      titel: "Schaalbaarheid en efficiëntie",
      kort: "Meer waarde, zelfde middelen",
      tekst: "De vraag naar data, informatie en ondersteuning groeit. Om met dezelfde middelen meer waarde te leveren, zijn standaardisatie, hergebruik, automatisering en samenwerking nodig.",
      bron: "OO"
    }
  ],

  /* ---------- Scherm 3: kernbegrippen toekomstbeeld ----------
     'zones' bepaalt welk deel van het schema oplicht:
     vragen | etalage | ingang | proces | kaders | levering            */
  concepts: [
    {
      id: "ingang",
      titel: "Eén ingang",
      zones: ["vragen", "etalage", "ingang"],
      tekst: "Eén centrale plek om data aan te vragen voor alle vier de domeinen: NKR, KR, KvL en PZ. Eén Etalage laat zien wát er beschikbaar is, Eén Loket regelt hóe je het krijgt.",
      status: "richting",
      bron: "OO; PD 1-dataloket"
    },
    {
      id: "uniform",
      titel: "Uniform",
      zones: ["proces"],
      tekst: "Elke aanvraag doorloopt dezelfde stappen: intake, toetsing, prioritering, levering en evaluatie. Hoe een aanvraag wordt behandeld, hangt dan niet meer af van het team of de medewerker. Uitgangspunt: één proces waar het kan, variatie waar het moet.",
      status: "richting",
      bron: "OO; PD thema-dia"
    },
    {
      id: "voorspelbaar",
      titel: "Voorspelbaar",
      zones: ["ingang", "proces", "levering"],
      tekst: "Aanvragers weten vooraf wat wel en niet kan en hoe lang het duurt. Voor 1-loket is als KPI voorgesteld: klanttevredenheid gemiddeld 8,0 of hoger, en 75% van de aanvragen binnen 100 dagen afgehandeld. De definitieve KPI's volgen na een nulmeting.",
      status: "concept",
      bron: "PD 1-dataloket; OO"
    },
    {
      id: "schaalbaar",
      titel: "Schaalbaar",
      zones: ["etalage", "levering"],
      tekst: "We hergebruiken liever dan maatwerk te maken. Wat vaak voorkomt, standaardiseren of automatiseren we, of bieden we aan via selfservice. Maatwerk blijft mogelijk waar het gerechtvaardigd is. De criteria daarvoor werkt het werkpakket uit.",
      status: "richting",
      bron: "OO"
    },
    {
      id: "veilig",
      titel: "Veilig & betrouwbaar",
      zones: ["kaders"],
      tekst: "Eén integraal toetsingskader voor de vier domeinen, aansluiting op de geplande centrale privacycommissie, en heldere kwaliteits-, privacy- en beveiligingseisen. Verwerking en analyse blijven gescheiden zolang de grondslagen verschillen.",
      status: "richting",
      bron: "OO; PD 1-dataloket"
    }
  ],

  /* ---------- Scherm 4: lagen die georganiseerd moeten worden ---------- */
  layers: [
    {
      id: "aanbod",
      titel: "Aanbod en portfolio",
      vraag: "Wat bieden we aan?",
      zichtbaar: true,
      punten: [
        "Visie en positionering: welke plek DICA-IKNL in het datalandschap wil innemen",
        "Eén overzicht van data- en informatieproducten, datasets en diensten",
        "Per product: doelgroep, gebruik, overlap, hiaten, eigenaar en levensfase",
        "Keuzes over standaardiseren, samenvoegen, hergebruiken of uitfaseren"
      ],
      rol: "Binnen de opdracht, samen met Eén Etalage",
      afhankelijk: ["Eén Etalage", "Communicatie (propositie)"],
      bron: "OO; PD 1-etalage"
    },
    {
      id: "loket",
      titel: "Klantinteractie en loket",
      vraag: "Hoe vraag je iets aan?",
      zichtbaar: true,
      punten: [
        "Eén centrale plek om data aan te vragen voor NKR, KR, KvL en PZ",
        "Eén aanvraagproces en één aanvraagformulier",
        "Vooraf duidelijk wat via selfservice kan, wat standaard is en wat maatwerk"
      ],
      rol: "Binnen de opdracht, uitgevoerd via Eén Loket",
      afhankelijk: ["Eén Loket", "Fusie-/integratieteam"],
      bron: "OO; PD 1-dataloket"
    },
    {
      id: "proces",
      titel: "Proces en werkwijze",
      vraag: "Hoe handelen we het af?",
      zichtbaar: false,
      punten: [
        "Dezelfde stappen voor elke aanvraag: intake, toetsing, prioritering, levering en evaluatie",
        "Criteria voor standaardiseren, automatiseren, selfservice of maatwerk",
        "Eén integraal toetsingskader voor de vier domeinen",
        "Een gezamenlijke backoffice voor administratie, ondertekening en facturatie"
      ],
      rol: "Binnen de opdracht",
      afhankelijk: ["Werkgroep wetenschappelijke commissies", "Werkgroep grondslagen", "MRDM"],
      bron: "OO; PD 1-dataloket"
    },
    {
      id: "data",
      titel: "Data en techniek",
      vraag: "Waarmee leveren we?",
      zichtbaar: false,
      punten: [
        "Levervormen: dashboards, beveiligde omgevingen, bestanden en API's",
        "Herbruikbare datasets, componenten en levervormen",
        "Minder handmatige stappen door automatisering",
        "Datakwaliteit, harmonisatie en standaardisatie als fundament"
      ],
      rol: "Data-uitgifte bepaalt de functionele eisen. Technische realisatie hoort bij Architectuur en het dataplatform (voorstel).",
      afhankelijk: ["Architectuur en dataplatform", "Datakwaliteit", "Harmonisatie & standaardisatie", "Dataverzameling & verwerking"],
      bron: "OO (besluitpunten, scope)"
    },
    {
      id: "kaders",
      titel: "Kaders en governance",
      vraag: "Wie beslist, binnen welke grenzen?",
      zichtbaar: false,
      punten: [
        "Rollen, mandaten en besluitvorming voor portfolio, proces, inhoud, privacy, architectuur, datakwaliteit en prioritering",
        "Aansluiting op de geplande centrale privacycommissie",
        "Juridische, privacy- en securitykaders, en aansluiting op EHDS en HDAB-NL",
        "KPI's en sturing, te beginnen met een nulmeting"
      ],
      rol: "Binnen de opdracht",
      afhankelijk: ["Privacycommissies (samenvoegen)", "EHDS", "Programmaleiding / stuurgroep"],
      bron: "OO; PD 1-dataloket"
    }
  ],

  /* ---------- Scherm 5: betrokkenen ----------
     Samenstelling volgens concept-opdrachtomschrijving (10 sep 2026).  */
  team: {
    kern: [
      { naam: "Thijs van Vegchel", rol: "Werkpakketleider", brengt: "Vertegenwoordigt NKR-analyse en de datastrategie. Eindverantwoordelijk voor samenhang, visie en besluitvorming." },
      { naam: "Mirthe Groothuis", rol: "Mede-werkpakketleider", brengt: "Strategische verbinding met de datastrategie. Kent de data- en informatieproducten van DICA en IKNL." },
      { naam: "Gemma Timmermans", rol: "Analist", brengt: "Vertegenwoordigt de huidige praktijk van NKR-analyse: processen, klanten, maatwerk en knelpunten. Product owner DataLOKET." },
      { naam: "Marjolein Verhoeven", rol: "Informatieanalist", brengt: "Vertegenwoordigt de DICA-praktijk: productportfolio, metadata en informatieproducten." },
      { naam: "Marc Klaassen", rol: "BI-specialist", brengt: "Vanuit team BI: kennis van dashboards, BI-producten en selfservice." },
      { naam: "Sandra van der Kooij", rol: "Informatie analist", brengt: "Verbindende schakel met Harmonisatie & Standaardisatie." }
    ],
    schil: [
      { naam: "Willem Schilte", rol: "Hoofd Software Development", brengt: "Architectuur, technische koers en aansluiting op het dataplatform." },
      { naam: "Remy Broos", rol: "Privacy officer", brengt: "Vertaalt privacyregels praktisch naar processen en projecten." },
      { naam: "Eva Mezei", rol: "Senior clinical data scientist", brengt: "Onderzoek, data science en het perspectief van de gebruiker." },
      { naam: "Annemarie Eeltink", rol: "Analist", brengt: "Verbindende schakel met het project Uitgeven niet-NKR-data." },
      { naam: "Rian Schobers", rol: "Software developer", brengt: "Gebruiksvriendelijkheid, toegankelijkheid en gebruikerservaring." },
      { naam: "Baukje Dijkstra", rol: "Communicatie", brengt: "Adoptie, stakeholdermanagement, positionering en communicatie." },
      { naam: "1 à 2 collega's DICA", rol: "Nog in te vullen", brengt: "Extra vertegenwoordiging vanuit de kwaliteitsregistraties of de dienstverlening van DICA.", open: true }
    ],
    afhankelijk: [
      "Harmonisatie & standaardisatie",
      "Architectuur & dataplatform",
      "Datakwaliteit",
      "Dataverzameling & verwerking",
      "EHDS",
      "Privacycommissies",
      "Werkgroep grondslagen",
      "Fusie-/integratieteam"
    ]
  },

  /* ---------- Scherm 6: projecten en activiteiten ---------- */
  projects: [
    {
      id: "strategie",
      groep: "binnen",
      titel: "Visie en strategie data-uitgifte",
      sub: "Dit werkpakket",
      status: "concept",
      label: "In concept",
      statusTekst: "Opdrachtomschrijving in concept (10 sep 2026)",
      doel: "Een gedragen visie, inrichting en roadmap voor data-uitgifte: toekomstbeeld, portfolio, governance, KPI's en een plan van aanpak.",
      relatie: "Geeft richting en kaders aan alle andere onderdelen. De operationele uitvoering volgt in vervolgstappen.",
      afh: ["Alle thema's van het programma", "Vaststelling opdracht door programmaleiding"],
      bron: "OO; PP 2.2.2"
    },
    {
      id: "etalage",
      groep: "binnen",
      titel: "Eén Etalage",
      sub: "Wat bieden we aan?",
      status: "concept",
      label: "Afrondend",
      statusTekst: "In afrondende fase volgens programmadeck",
      doel: "Het hele aanbod van data- en informatieproducten van DICA en IKNL in beeld brengen, met een beperkte marktverkenning (o.a. DHD, Palga, Vektis, NIVEL) en aanbevelingen voor het toekomstige portfolio.",
      relatie: "Vormt het 'wat' van de dienstverlening en is de basis voor portfoliokeuzes.",
      afh: ["Communicatie (propositie)", "Programma's dure geneesmiddelen, KvL en PZ"],
      bron: "PD WP1"
    },
    {
      id: "loket",
      groep: "binnen",
      titel: "Eén (data)loket",
      sub: "Hoe vraag je aan?",
      status: "open",
      label: "Start later",
      statusTekst: "Opdrachtomschrijving in concept; start later",
      doel: "Eén centrale plek op de website om data aan te vragen voor de vier domeinen, met één toetsingskader, een gezamenlijke backoffice en een plan om de privacycommissies samen te voegen.",
      relatie: "De zichtbare voorkant van het toekomstbeeld. De verkenning in 2024–2025 heeft nog niet tot implementatie geleid.",
      afh: ["Fusie-/integratieteam", "Werkgroep grondslagen", "MRDM", "EHDS (apart te beschouwen)"],
      bron: "PD WP6 en opdrachtomschrijving 1-dataloket"
    },
    {
      id: "koppelen",
      groep: "binnen",
      titel: "Koppelen DICA-IKNL",
      sub: "Koppeling tussen domeinen",
      status: "hold",
      label: "On hold",
      statusTekst: "On hold, in afwachting van grondslagen",
      doel: "Structurele koppelingen tussen datasets en domeinen voorbereiden. Scope en startmoment hangen af van besluiten over grondslagen.",
      relatie: "Maakt het mogelijk bronnen te combineren en te verrijken bij uitgifte.",
      afh: ["Werkgroep grondslagen", "Project implementatie kwaliteitsregistraties"],
      bron: "PP 2.2.2; PD WP7"
    },
    {
      id: "nietnkr",
      groep: "naast",
      titel: "Inlezen en uitgeven niet-NKR-data",
      sub: "Spoor 4 · Thema Dataverzameling",
      status: "open",
      label: "Status onbekend",
      statusTekst: "Actuele status niet in de bronnen",
      doel: "Een duurzame oplossing om niet-NKR-data (zoals KvL, PZ en aanvullende behandelinformatie) in te lezen en gekoppeld aan NKR-data uit te leveren.",
      relatie: "Breidt uit wat we kunnen leveren: nieuwe databronnen en meer passende data.",
      afh: ["Harmonisatie", "KvL Hub, R(H)ONDA, REINFORMM"],
      bron: "PP 2.2.1; PD Spoor 4"
    },
    {
      id: "harmonisatie",
      groep: "naast",
      titel: "Harmonisatie & standaardisatie",
      sub: "Thema 3",
      status: "richting",
      label: "Lopend thema",
      statusTekst: "Lopend thema in het programma",
      doel: "Minder verschillen in definities, datasets, coderingen en governance, zodat data beter vergelijkbaar en herbruikbaar worden.",
      relatie: "Voorwaarde om uniform en herbruikbaar te kunnen leveren.",
      afh: ["EHDS", "Landelijke trajecten"],
      bron: "PP 2.1"
    },
    {
      id: "architectuur",
      groep: "naast",
      titel: "Architectuur: huidige stromen",
      sub: "Thema 4",
      status: "richting",
      label: "Lopend thema",
      statusTekst: "Lopend thema in het programma",
      doel: "De huidige processen voor verzameling, verwerking, analyse én uitgifte voor de vier domeinen in kaart brengen.",
      relatie: "Levert het beeld van de huidige uitgifteroutes en de technische basis voor automatisering.",
      afh: ["MRDM", "Dataplatform"],
      bron: "PP 2.2.4"
    },
    {
      id: "kwaliteit",
      groep: "naast",
      titel: "Datakwaliteit",
      sub: "Thema 5",
      status: "richting",
      label: "Lopend thema",
      statusTekst: "Lopend thema in het programma",
      doel: "Datakwaliteit expliciet maken en borgen als randvoorwaarde voor betrouwbare producten.",
      relatie: "Betrouwbare uitgifte valt of staat met vertrouwen in de kwaliteit van de data.",
      afh: ["EHDS-kwaliteitskaders"],
      bron: "PP 2.1; PD"
    },
    {
      id: "ehds",
      groep: "naast",
      titel: "EHDS en CancerLink",
      sub: "Bestaande initiatieven",
      status: "open",
      label: "Uit te werken",
      statusTekst: "Raakvlak benoemd; uitwerking niet in de bronnen",
      doel: "Het werkpakket bouwt voort op bestaande initiatieven, waaronder EHDS en CancerLink. De bronnen beschrijven niet hoe die aansluiting eruitziet.",
      relatie: "Bepaalt mede aan welke externe eisen de uitgifte moet voldoen.",
      afh: ["Keuze EHDS-rol DICA-IKNL"],
      bron: "OO"
    },
    {
      id: "operationeel",
      groep: "volgt",
      titel: "Operationele projecten 2027",
      sub: "Volgt uit dit werkpakket",
      status: "open",
      label: "Nog te benoemen",
      statusTekst: "Nog te benoemen",
      doel: "Voor 2027 worden in elk geval de projecten benoemd die nodig zijn om het loket, het uitgifteproces, het portfolio en de governance verder te realiseren.",
      relatie: "De stap van visie naar uitvoering.",
      afh: ["Besluitvorming over het toekomstbeeld"],
      bron: "OO (roadmap)"
    }
  ]
};
