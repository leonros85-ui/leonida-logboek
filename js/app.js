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
};

const STORAGE_KEY = "leonida-logboek-done";

const ITEMS = [
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
