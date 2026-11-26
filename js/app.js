const CATEGORY_LABEL = {
  auto: "Auto’s",
  geld: "Geld",
  outfit: "Outfits",
  geheim: "Geheime plekken",
};

const FILTERS = [
  { value: "alle", label: "Alles" },
  { value: "auto", label: "Auto’s" },
  { value: "geld", label: "Geld" },
  { value: "outfit", label: "Outfits" },
  { value: "geheim", label: "Geheime plekken" },
];

const FACT_LABEL = {
  bevestigd: "Bevestigd",
  grotendeels: "Klopt grotendeels",
  onwaarschijnlijk: "Waarschijnlijk nep",
  gids: "Tip uit gidsen",
  fout: "Verkeerde locatie",
};

const STORAGE_KEY = "leonida-logboek-done";

const ITEMS = [
  {
    id: "bloodbath-phoenix",
    title: "Imponte Bloodbath Phoenix",
    category: "auto",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/bloodbath-phoenix.jpg",
        alt: "Zilver-rode Imponte Bloodbath Phoenix met supercharger, volgens de post van mr.nerf onder een metalen afdak bij Slator Towing in Salton.",
        label: "Post",
      },
      {
        src: "images/map-bloodbath-phoenix.jpg",
        alt: "Kaart van GTA6GPS met een pin op Slator Towing Inc in Salton, Vice City, bij de Bloodbath Phoenix.",
        label: "Kaart",
      },
    ],
    summary:
      "Onder het metalen afdak van Slator Towing Inc in Salton, Vice City, tussen SW 7th Avenue en SW 8th Avenue. De post van mr.nerf klopt.",
    tips: [
      "Ga via SW 8th Avenue naar de poort en klim over de lage muur links ervan, waar geen prikkeldraad staat.",
      "De rood-zwarte Phoenix staat in de open werkplaats, bij de rode motortakel.",
      "De auto is ontgrendeld, het alarm staat uit en er zit geen tracker in. Daarna kun je hem registreren bij Moses.",
      "Slator Towing is een illegale operatie met hoge beveiliging: verwacht bewakers en een hond. Trek een vest en een masker aan.",
      "In het kleine kantoor naast de werkplaats zit ook een kluis.",
    ],
    fact: {
      kind: "bevestigd",
      note: "De plek klopt. Onder het afdak bij Slator Towing in Salton, tussen SW 7th en SW 8th Ave.",
    },
    sources: [
      {
        href: "https://gta6gps.com/map/places/imponte-bloodbath-phoenix",
        label: "GTA6GPS",
      },
      {
        href: "https://getvicekeys.com/guides/gta-6-slator-towing-bloodbath-phoenix",
        label: "Vice Keys",
      },
      {
        href: "https://timesaver.gg/tools/gta-6/cars/free/bloodbath-phoenix",
        label: "TimeSaver",
      },
    ],
  },
  {
    id: "firebug-dominator",
    title: "Vapid Firebug Dominator",
    category: "auto",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/firebug-dominator.jpg",
        alt: "Blauwe Vapid Firebug Dominator uit de post van mr.nerf, die hem ten onrechte in Ambrosia plaatst.",
        label: "Post",
      },
      {
        src: "images/map-firebug-dominator.jpg",
        alt: "Kaart van GTA6GPS met de echte pin van de Firebug Dominator aan het strand van Port Gellhorn, niet in Ambrosia.",
        label: "Kaart",
      },
    ],
    summary:
      "De post van mr.nerf zet deze auto in een vrijstaande garage achter een vervallen huis ten westen van Ambrosia. Die plek klopt niet: daar staat de Classique Emancipator Stallion.",
    tips: [
      "De echte Firebug Dominator staat voor het verlaten La Cascara Motel, aan het strand van Gellhorn Avenue in Port Gellhorn (Kelly County).",
      "Het motel is een operatie van Kolt & Associates met hoge beveiliging en gewapende gangleden.",
      "De auto is op slot en het alarm gaat af. Er zit geen tracker in. Registreren kost ongeveer $2.950.",
      "De garage west van Ambrosia, soms Frogswater genoemd, hoort bij de Classique Emancipator Stallion. De code van het toetsenbord is 120113.",
    ],
    fact: {
      kind: "fout",
      note: "De auto bestaat, maar de plek in de post is verkeerd. Hij staat in Port Gellhorn, niet in Ambrosia.",
    },
    sources: [
      {
        href: "https://gta6gps.com/map/places/vapid-firebug-dominator",
        label: "GTA6GPS",
      },
      {
        href: "https://timesaver.gg/tools/gta-6/cars/free/firebug-dominator",
        label: "TimeSaver",
      },
      {
        href: "https://gamemaps.gg/game/grand-theft-auto-6/guides/standout-vehicle",
        label: "Game Maps",
      },
    ],
  },
  {
    id: "class-act-comet",
    title: "Pfister Class Act Comet",
    category: "auto",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/class-act-comet.jpg",
        alt: "Donkergroene Pfister Class Act Comet met goudkleurige velgen, volgens de post van mr.nerf op Starfish Island.",
        label: "Post",
      },
      {
        src: "images/map-class-act-comet.jpg",
        alt: "Kaart van GTA6GPS met een pin op de zuidwestkant van Starfish Island, bij de Class Act Comet.",
        label: "Kaart",
      },
    ],
    summary:
      "In de hoek van de oprit van een villa op de zuidwestkant van Starfish Island, voor twee garagedeuren. De post van mr.nerf klopt over de plek.",
    tips: [
      "Je hebt de Key Cloner nodig, die je in hoofdstuk 3 ontgrendelt. Zonder die tool start de auto niet.",
      "Er staat een alarm op en er zit een geavanceerde tracker in. Scan eerst met WAiNK.",
      "Na het stelen moet de tracker eraf, of je laat de auto registreren.",
      "Eén artikel noemt de oostkant van het eiland, maar GTA6GPS, TimeSaver en Game8 zetten hem allemaal in het zuidwesten, net als de post.",
    ],
    fact: {
      kind: "bevestigd",
      note: "De plek klopt. Let op: je hebt de Key Cloner uit hoofdstuk 3 nodig, en er zit een geavanceerde tracker in.",
    },
    sources: [
      {
        href: "https://gta6gps.com/map/places/pfister-class-act-comet",
        label: "GTA6GPS",
      },
      {
        href: "https://timesaver.gg/tools/gta-6/cars/free/class-act-comet",
        label: "TimeSaver",
      },
      {
        href: "https://game8.co/games/GTA-6/archives/639201",
        label: "Game8",
      },
    ],
  },
  {
    id: "cherry-bomb-chino",
    title: "Dundreary Cherry Bomb Chino",
    category: "auto",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/cherry-bomb-chino.jpg",
        alt: "Rode Dundreary Cherry Bomb Chino cabriolet met supercharger, volgens de post van mr.nerf bij Saber Shipping Yard in Little Cuba.",
        label: "Post",
      },
      {
        src: "images/map-cherry-bomb-chino.jpg",
        alt: "Kaart van GTA6GPS met een pin bij Saber Shipping Yard aan de rivier in Little Cuba, Vice City.",
        label: "Kaart",
      },
    ],
    summary:
      "Vlak achter de voorpoort van Saber Shipping Yard, aan Northbrook Drive in Little Cuba, Vice City. De post van mr.nerf klopt volgens de kaartgidsen.",
    tips: [
      "Het terrein is een operatie van de Guardia Brothers en is bewaakt. De auto is ontgrendeld, het alarm staat uit en er zit geen tracker in.",
      "Je kunt over een stuk hek zonder prikkeldraad klimmen, of stiller via de rivier en een open raam aan de achterkant van het noordelijke warehouse.",
      "GameRant zet de auto tussen de twee warehouses bij de uitgangspoort. GTA6GPS, TimeSaver en andere kaartgidsen houden het op vlak achter de voorpoort, bij de keet.",
    ],
    fact: {
      kind: "bevestigd",
      note: "De plek klopt volgens GTA6GPS en andere kaartgidsen: vlak achter de voorpoort van Saber Shipping Yard aan Northbrook Drive.",
    },
    sources: [
      {
        href: "https://gta6gps.com/map/places/dundreary-cherry-bomb-chino",
        label: "GTA6GPS",
      },
      {
        href: "https://timesaver.gg/tools/gta-6/cars/free/cherry-bomb-chino",
        label: "TimeSaver",
      },
      {
        href: "https://gamerant.com/gta-6-saber-shipping-yard-key-valuable-locations-safe-code/",
        label: "GameRant",
      },
    ],
  },
  {
    id: "caliente-picador",
    title: "Declasse Caliente Picador",
    category: "auto",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/caliente-picador.jpg",
        alt: "Blauwe Declasse Caliente Picador met gele streep en supercharger, volgens de post van mr.nerf in een gele container in Breakwater Quarry.",
        label: "Post",
      },
      {
        src: "images/map-caliente-picador.jpg",
        alt: "Kaart van GTA6GPS met een pin in de zuidelijke hoek van Breakwater Quarry, North Mariana County.",
        label: "Kaart",
      },
    ],
    summary:
      "In een gele container op de bouwplaats in de zuidelijke hoek van Breakwater Quarry, North Mariana County. De post van mr.nerf klopt over de plek.",
    tips: [
      "Zoek de rail- en containerwerf aan de zuidkant van de groeve, noordwest van Hamlet. Gebruik de gele bulldozer om de containers weg te schuiven die de gele Scoop-container blokkeren.",
      "Om de container te openen heb je de Cut-Off-tool nodig, die je in hoofdstuk 3 ontgrendelt. Zonder die tool kom je er niet in.",
      "De auto is daarna ontgrendeld, zonder alarm of tracker.",
      "In dezelfde yard staat een Royal Sanchez in een oranje container.",
    ],
    fact: {
      kind: "bevestigd",
      note: "De plek klopt. Je hebt wel de gele bulldozer en de Cut-Off-tool uit hoofdstuk 3 nodig; dat stond niet in de post.",
    },
    sources: [
      {
        href: "https://gta6gps.com/map/places/declasse-caliente-picador",
        label: "GTA6GPS",
      },
      {
        href: "https://getvicekeys.com/guides/gta-6-caliente-picador-container-bulldozer",
        label: "Vice Keys",
      },
      {
        href: "https://game8.co/games/GTA-6/archives/639408",
        label: "Game8",
      },
    ],
  },
  {
    id: "skyline-r34",
    title: "Nissan Skyline R34",
    category: "auto",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/skyline.jpg",
        alt: "Instagram-post van xash.tv over een blauwe Nissan Skyline R34, met een kaart van Little Havana en drie stappen om de auto te vinden.",
        label: "Post",
      },
    ],
    summary:
      "De post van xash.tv belooft een gratis blauwe Skyline R34 in Little Havana, Vice City: onder de oude overpass bij de spoorwegemplacementen, bij de graffitimuur.",
    tips: [
      "Waarschijnlijk nep: in GTA 6 heet die wijk Little Cuba, en geen gids noemt deze plek.",
      "Alternatief volgens TheBestMods (24 nov): een gratis Annis 90 Elegy op de oprit van een villa op Starfish Island.",
      "Ook: een Elegy Drifter in de garage achter Gellhorn Raceway. Die heeft wel een tracker.",
    ],
    fact: {
      kind: "onwaarschijnlijk",
      note: "De post is waarschijnlijk nep. Gebruik liever de alternatieven op Starfish Island of achter Gellhorn Raceway.",
    },
    sources: [],
  },
  {
    id: "code-1886",
    title: "Safe-code 1886",
    category: "geheim",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/code-1886.jpg",
        alt: "Kaart van Leonida met een rode cirkel op een zandschiereiland ten westen van Watson Bay, bij de post over code 1886.",
        label: "Kaart",
      },
    ],
    summary:
      "De kluis van Palmer Fishing Warehouse op Bobcat Key, ten westen van Watson Bay (Mariana County). Het is een operatie van La Polilla Negra. Code 1886 is bevestigd.",
    tips: [
      "Stil naar binnen via het gat in het hek aan de achterkant. Bij de kratten ligt een FF-SR-sniper.",
      "Boven, in de hoek van de lounge: de kluis met ca. $3.000–5.400 cash, een gouden KZ-59 en een Crowex-horloge.",
      "Beneden staat een GLR40-granaatwerper.",
      "Weggaan kan via de boot achter het gebouw.",
    ],
    fact: {
      kind: "bevestigd",
      note: "De plek en de code kloppen. Het is de kluis van Palmer Fishing Warehouse op Bobcat Key.",
    },
    sources: [
      { href: "https://gta6heists.com", label: "GTA 6 Heists" },
      { href: "https://beebom.com", label: "Beebom" },
    ],
  },
  {
    id: "soaring-phoenix",
    title: "Soaring Phoenix",
    category: "auto",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/soaring-phoenix.jpg",
        alt: "Gouden Soaring Phoenix met supercharger en een phoenix-tekening op de motorkap, uit een videogids.",
        label: "Video",
      },
    ],
    summary:
      "Gratis gouden Soaring Phoenix (Firebird) met supercharger in Watson Bay, in een klein garagehuisje naast een huis met rood dak, achter de werkplaats, ongeveer 200 m ten noorden van de watertoren.",
    tips: [
      "De oranje graafmachine maakt de weg vrij. Stap daarna over de pallets en open het rolluik rechts.",
      "Je kunt de auto vanaf hoofdstuk 2 houden via Moses.",
      "In de video: 0:05 de kaart, 0:26 de graafmachine, 1:00 de garage.",
    ],
    fact: {
      kind: "gids",
      note: "Locatie volgt een videogids. Handig om vanavond even te bekijken.",
    },
    video: {
      href: "https://www.youtube.com/watch?v=8geXn0rdqx4",
      label: "Video bekijken",
    },
    sources: [],
  },
  {
    id: "geld-hoofdstuk-3",
    title: "Geld in hoofdstuk 3",
    category: "geld",
    dateLabel: "26 nov 2026",
    images: [],
    summary:
      "Zo verdien je het best geld voor de garages. Die kosten $4.000–40.000 per stuk, alle acht samen ongeveer $160.000. Aan het eind van hoofdstuk 3 heb je typisch zo’n $120.000. Begin met Mitchell Auto Center in Port Gellhorn voor $4.000.",
    tips: [
      "Randy’s Wish List, na de missie “Clonin’ Keys, Makin’ GS”: 18 auto’s, $30.000+ per stuk in perfecte staat. Dit levert het meest op.",
      "Juwelierovervallen via Yasmani: $10.000–25.000 per stuk, inclusief de kluis achterin.",
      "Banken $5.000–45.000 en Payday Loans $2.000–25.000 (marked bills, na Credit Check).",
      "Pay ’n’ Spray: auto’s met tracker voor $2.500–4.000.",
    ],
    fact: {
      kind: "gids",
      note: "Bedragen komen uit gidsen en kunnen in de game anders uitvallen.",
    },
    sources: [
      {
        href: "https://leonidapayouts.com/money/by-chapter",
        label: "Leonida Payouts",
      },
      { href: "https://mobalytics.gg", label: "Mobalytics" },
    ],
  },
  {
    id: "tactical-outfit-jason",
    title: "Black tactical outfit voor Jason",
    category: "outfit",
    dateLabel: "26 nov 2026",
    images: [
      {
        src: "images/outfit-kleding.jpg",
        alt: "Overzicht van de zwarte tactical kledingstukken voor Jason, waaronder shirt, vest, broek, pet, boots en bandana.",
        label: "Kleding",
      },
      {
        src: "images/outfit-winkels.jpg",
        alt: "Kaart met de winkels Iron & Oak in Stockyard en Phil’s Ammu-Nation bij Southside voor de tactical outfit.",
        label: "Winkels",
      },
    ],
    summary:
      "De Instagram-post van @fazzy_gaming2024 stond als AI-content gemarkeerd, maar de winkels en kledingstukken zitten echt in de game. Op een paar punten wijkt de post af.",
    tips: [
      "Iron & Oak (Stockyard, Vice-Dale): loop langs de wapentoonbank naar de rekken aan de muur. Daar koop je de Quarter Zip Tactical Shirt in grijze camo, de Lightweight Tactical Boots en het zwarte vest.",
      "Phil’s Ammu-Nation (Southside, ten noordoosten van Hamlet, dus niet “ten zuiden van het vliegveld”): Kneepad Utility Cargos in Black Camo, de zwarte pet en de donkere bandana. De bandana zit hier, niet bij Iron & Oak.",
      "Het vest komt in de kofferbak van je auto terecht. Zet het aan via het itemwiel: L1, daarna R1.",
      "Snelle optie: bij Big Shots in Hamlet koop je voor $96 de complete Tactical Gear-set, maar dan in tan camo in plaats van zwart.",
    ],
    fact: {
      kind: "grotendeels",
      note: "Gecheckt op 26 nov 2026. Winkels en kleding kloppen, maar de bandana ligt bij Phil’s en niet bij Iron & Oak. Phil’s zit ten noordoosten van Hamlet.",
    },
    sources: [
      {
        href: "https://getvicekeys.com/guides/gta-6-jason-tactical-outfit",
        label: "Vice Keys",
      },
      {
        href: "https://www.keengamer.com/articles/guides/gta-6-all-tactical-and-military-outfit-locations/",
        label: "KeenGamer",
      },
    ],
  },
];

function loadDone() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveDone(done) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  } catch {
    // private mode or blocked storage: keep working in-memory
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const state = {
  filter: "alle",
  query: "",
  done: loadDone(),
  photo: {},
};

const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const metaEl = document.getElementById("meta");
const gridEl = document.getElementById("grid");
const emptyEl = document.getElementById("empty");

function visibleItems() {
  const q = state.query.trim().toLowerCase();
  return ITEMS.filter((item) => {
    if (state.filter !== "alle" && item.category !== state.filter) return false;
    if (!q) return true;
    const hay = [
      item.title,
      CATEGORY_LABEL[item.category],
      item.summary,
      item.fact.note,
      FACT_LABEL[item.fact.kind],
      ...(item.tips || []),
      ...((item.sources || []).map((s) => s.label)),
      item.video?.label ?? "",
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

function renderFilters() {
  filtersEl.innerHTML = FILTERS.map((option) => {
    const count =
      option.value === "alle"
        ? ITEMS.length
        : ITEMS.filter((item) => item.category === option.value).length;
    const pressed = state.filter === option.value;
    return `<button type="button" class="chip" data-filter="${option.value}" aria-pressed="${pressed}">${escapeHtml(option.label)} ${count}</button>`;
  }).join("");
}

function renderCard(item) {
  const done = Boolean(state.done[item.id]);
  const photoIndex = state.photo[item.id] ?? 0;
  const image = item.images[photoIndex];
  const tabs =
    item.images.length > 1
      ? `<div class="photo-tabs" role="tablist" aria-label="Foto’s">${item.images
          .map(
            (img, index) =>
              `<button type="button" class="photo-tab" data-photo="${item.id}:${index}" aria-pressed="${index === photoIndex}">${escapeHtml(img.label || "Foto " + (index + 1))}</button>`
          )
          .join("")}</div>`
      : "";
  const photo = image
    ? `${tabs}<div class="photo-frame"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}"></div>`
    : "";
  const tips = item.tips?.length
    ? `<ul class="tips">${item.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>`
    : "";
  const video = item.video
    ? `<a class="video-btn" href="${escapeHtml(item.video.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.video.label)}</a>`
    : "";
  const sources = (item.sources || [])
    .map(
      (source) =>
        `<a href="${escapeHtml(source.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)}</a>`
    )
    .join("");
  const links = video || sources ? `<div class="links">${video}${sources}</div>` : "";

  return `<article class="card${done ? " is-done" : ""}" data-id="${escapeHtml(item.id)}">
    ${photo}
    <div class="card-body">
      <div class="card-meta">
        <span class="category">${escapeHtml(CATEGORY_LABEL[item.category])}</span>
        <span class="date">${escapeHtml(item.dateLabel)}</span>
      </div>
      <h2>${escapeHtml(item.title)}</h2>
      <p class="fact-label ${item.fact.kind}">${escapeHtml(FACT_LABEL[item.fact.kind])}</p>
      <p class="fact-note">${escapeHtml(item.fact.note)}</p>
      <p class="summary">${escapeHtml(item.summary)}</p>
      ${tips}
      ${links}
      <button type="button" class="done-btn" data-done="${escapeHtml(item.id)}" aria-pressed="${done}">
        <span class="box" aria-hidden="true">${done ? "✓" : ""}</span>
        ${done ? "Gedaan" : "Markeer als gedaan"}
      </button>
    </div>
  </article>`;
}

function render() {
  renderFilters();
  const visible = visibleItems();
  const doneCount = ITEMS.filter((item) => state.done[item.id]).length;
  metaEl.textContent = `${visible.length} van ${ITEMS.length} tips · ${doneCount} gedaan`;
  gridEl.innerHTML = visible.map(renderCard).join("");
  emptyEl.hidden = visible.length > 0;
}

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.filter = button.getAttribute("data-filter");
  render();
});

gridEl.addEventListener("click", (event) => {
  const photoBtn = event.target.closest("[data-photo]");
  if (photoBtn) {
    const [id, index] = photoBtn.getAttribute("data-photo").split(":");
    state.photo[id] = Number(index);
    render();
    return;
  }
  const doneBtn = event.target.closest("[data-done]");
  if (doneBtn) {
    const id = doneBtn.getAttribute("data-done");
    state.done = { ...state.done, [id]: !state.done[id] };
    saveDone(state.done);
    render();
  }
});

searchEl.addEventListener("input", () => {
  state.query = searchEl.value;
  render();
});

render();
