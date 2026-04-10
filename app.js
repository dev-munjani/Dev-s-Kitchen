// ============================================================
// DATA
// ============================================================
const MENU = [
  { id: 1, cat: "Maggi Specials", catGu: "મેગી સ્પેશિયલ", name: "Classic Maggi", nameGu: "ક્લાસિક મેગી", desc: "Plain or Masala — the nostalgic comfort bowl.", descGu: "પ્લેન અથવા મસાલા — ક્લાસિક સ્વાદ.", price: 60, rating: 4.2, badge: "", imgs: ["dev_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 2, cat: "Maggi Specials", catGu: "મેગી સ્પેશિયલ", name: "Veggie Maggi", nameGu: "વેજી મેગી", desc: "Fresh seasonal vegetables — Plain or Masala.", descGu: "તાજા શાકભાજી સાથે — પ્લેન કે મસાલા.", price: 80, rating: 4.4, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 3, cat: "Maggi Specials", catGu: "મેગી સ્પેશિયલ", name: "Schezwan Maggi", nameGu: "Schezwan મેગી", desc: "Spicy Indo-Chinese twist with bold flavour.", descGu: "સ્પાઇસી ઇન્ડો ચાઇનીઝ સ્વાદ.", price: 80, rating: 4.6, badge: "Spicy", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 4, cat: "Maggi Specials", catGu: "મેગી સ્પેશિયલ", name: "Double Cheese Maggi", nameGu: "Double Cheese મેગી", desc: "Loaded with rich, melted, pull-out cheese.", descGu: "ભરપૂર મેલ્ટેડ ચીઝ સાથે.", price: 100, rating: 4.7, badge: "Popular", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 5, cat: "Maggi Specials", catGu: "મેગી સ્પેશિયલ", name: "Paneer Veg Maggi", nameGu: "Paneer Veg મેગી", desc: "Soft paneer with fresh vegetables.", descGu: "સોફ્ટ પનીર અને શાકભાજી.", price: 120, rating: 4.5, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 6, cat: "Maggi Specials", catGu: "મેગી સ્પેશિયલ", name: "Dev's Special Maggi", nameGu: "Dev's Special મેગી", desc: "Signature house-style Maggi — a must try!", descGu: "અમારી સ્પેશિયલ મેગી — અચૂક ટેસ્ટ કરો!", price: 120, rating: 4.8, badge: "Signature", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 7, cat: "Pasta Corner", catGu: "Pasta Corner", name: "Masala Penne Pasta", nameGu: "Masala Penne Pasta", desc: "Desi-style penne with bold Indian masala.", descGu: "દેશી સ્ટાઇલ મસાલા પેને પાસ્તા.", price: 70, rating: 4.3, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 8, cat: "Pasta Corner", catGu: "Pasta Corner", name: "White Sauce Penne", nameGu: "White Sauce Penne", desc: "Creamy, smooth white sauce classic penne.", descGu: "ક્રીમી વ્હાઇટ સોસ પાસ્તા.", price: 120, rating: 4.6, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 9, cat: "Pasta Corner", catGu: "Pasta Corner", name: "Red Sauce Penne", nameGu: "Red Sauce Penne", desc: "Tangy, rich tomato-based red sauce pasta.", descGu: "ચટપટા રેડ સોસ પાસ્તા.", price: 120, rating: 4.4, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 10, cat: "Pasta Corner", catGu: "Pasta Corner", name: "Pink Sauce Penne", nameGu: "Pink Sauce Penne", desc: "White + red blended — the perfect balance.", descGu: "વ્હાઇટ અને રેડ સોસ મિક્સ.", price: 120, rating: 4.7, badge: "Bestseller", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 11, cat: "Pasta Corner", catGu: "Pasta Corner", name: "Indian Mom-Style Pasta", nameGu: "Mom-Style Pasta", desc: "Desi comfort pasta with a homestyle touch.", descGu: "ઘરજેવા દેશી પાસ્તા.", price: 100, rating: 4.5, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 12, cat: "Pasta Corner", catGu: "Pasta Corner", name: "Spaghetti", nameGu: "Spaghetti", desc: "Aglio e Olio or Red Sauce — your choice.", descGu: "Agilo e Olio અથવા રેડ સોસ.", price: 180, rating: 4.6, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 13, cat: "Healthy Bowls", catGu: "હેલ્ધી બાઉલ્સ", name: "Cucumber Salad Bowl", nameGu: "Cucumber Salad Bowl", desc: "Refreshing cucumber with light, fresh seasoning.", descGu: "હળવું ફ્રેશ કાકડી સલાડ.", price: 100, rating: 4.2, badge: "Light", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 14, cat: "Healthy Bowls", catGu: "હેલ્ધી બાઉલ્સ", name: "Sauteed Vegetable Bowl", nameGu: "Vegetable Bowl", desc: "Lightly sauteed mixed vegetable medley.", descGu: "સોતે કરેલ તાજા શાકભાજી મિક્સ.", price: 120, rating: 4.3, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 15, cat: "Healthy Bowls", catGu: "હેલ્ધી બાઉલ્સ", name: "Masala Paneer Bowl", nameGu: "Paneer Bowl", desc: "Protein-rich spiced paneer in a hearty bowl.", descGu: "પ્રોટીનથી ભરપૂર મસાલા પનીર.", price: 150, rating: 4.6, badge: "High Protein", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 16, cat: "Dev's Kitchen Specials", catGu: "Dev's Specials", name: "Cheese Pull-Out Special", nameGu: "Cheese Pull-Out", desc: "Melty, stretchy cheese-loaded indulgence.", descGu: "ચીઝથી ભરપૂર સ્પેશિયલ.", price: 180, rating: 4.8, badge: "Must Try", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 17, cat: "Dev's Kitchen Specials", catGu: "Dev's Specials", name: "Tikka Pav (2 Pcs)", nameGu: "Tikka Pav (2 Pcs)", desc: "Spicy tikka filling inside soft, fluffy pav buns.", descGu: "સોફ્ટ પાવમાં સ્પાઇસી ટિક્કા.", price: 120, rating: 4.5, badge: "", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] },
  { id: 18, cat: "Dev's Kitchen Specials", catGu: "Dev's Specials", name: "Surti Time Pass (2 Pcs)", nameGu: "Surti Time Pass", desc: "Local street-style chatpata snack favourite.", descGu: "સ્ટ્રીટ-સ્ટાઇલ ચટપટો સ્થાનિક નાસ્તો.", price: 150, rating: 4.7, badge: "Local Fav", imgs: ["image_opt.jpg", "image_opt.jpg", "image_opt.jpg"] }
];

const ADDONS = [
  { name: "Cheese Slice", nameGu: "Cheese Slice", price: 20 },
  { name: "Extra Masala", nameGu: "Extra Masala", price: 10 }
];

const CATS = [...new Set(MENU.map(i => i.cat))];

const CATINFO = {
  "Maggi Specials": "Classic, spicy & customizable",
  "Pasta Corner": "Rich, creamy & flavourful",
  "Healthy Bowls": "Fresh, light & nutritious",
  "Dev's Kitchen Specials": "Unique street-style bites"
};

const FEEDBACKS = [
  { n: "Rahul S.", s: 5, t: "Dev's Special Maggi is genuinely the best I've had in my life. Period. I drive across town just for it.", tg: "Dev's Special Maggi — એકદમ બેસ્ટ. દૂરથી ખાસ ખાવા આવું છું." },
  { n: "Priya M.", s: 5, t: "The Pink Sauce Pasta is addictive. I order it 3 times a week. The creaminess is absolutely unmatched!", tg: "પિન્ક સોસ પાસ્તા — મસ્ત ક્રીમી. અઠવાડિયામાં 3 વાર મંગાવું છું!" },
  { n: "Amit K.", s: 4, t: "Great food, great price. The Cheese Pull-Out Special is pure theatre — worth every rupee.", tg: "ચીઝ પુલ-આઉટ સ્પેશિયલ તો જોરદાર છે — પૂરા પૈસા વસૂલ." },
  { n: "Sneha R.", s: 5, t: "Finally a street cart that does healthy bowls right. Fresh, tasty, and actually filling!", tg: "હેલ્ધી બાઉલ્સ — એકદમ તાજા અને સ્વાદિષ્ટ." },
  { n: "Vikram P.", s: 4, t: "Surti Time Pass hits different every time. That chatpata punch is genuine street food nostalgia.", tg: "સુરતી ટાઇમ પાસ — એકદમ ચટપટો સ્થાનિક સ્વાદ." },
  { n: "Ananya D.", s: 5, t: "Ordered bulk for our office party — flawless execution. Everyone was asking where it came from!", tg: "બલ્ક ઓર્ડરમાં પરફેક્ટ સર્વિસ! બધાને સ્વાદ ખૂબ ગમ્યો." }
];

const MQ_ITEMS = ["Classic Maggi", "Veggie Maggi", "Schezwan Maggi", "Double Cheese Maggi", "Dev's Special Maggi", "Masala Penne", "White Sauce Pasta", "Red Sauce Pasta", "Pink Sauce Pasta", "Spaghetti", "Cucumber Bowl", "Masala Paneer Bowl", "Cheese Pull-Out", "Tikka Pav", "Surti Time Pass"];

// ============================================================
// STATE
// ============================================================
let cart = [], cartAddons = {}, itemQtys = {}, itemAddons = {}, aCat = "All", oType = "pickup", lang = "en";
let prodItem = null, prodQty = 1, prodAddons = [], prodImgIdx = 0;

// ============================================================
// HELPERS
// ============================================================
const $ = id => document.getElementById(id);
const isGu = () => lang === "gu";
function stars(r) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += i <= Math.floor(r) ? "★" : "☆";
  return s;
}

// ============================================================
// TOAST
// ============================================================
function toast(msg) {
  const box = $("toasts"), el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  box.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 350); }, 2400);
}

// ============================================================
// MARQUEE
// ============================================================
function buildMarquee() {
  const items = [...MQ_ITEMS, ...MQ_ITEMS];
  $("mqInner").innerHTML = items.map(i => `<span class="mq-item"><span class="mq-dot"></span>${i}</span>`).join("");
}

// ============================================================
// THEME
// ============================================================
$("themeBtn").addEventListener("click", () => {
  const h = document.documentElement;
  const next = h.dataset.theme === "light" ? "dark" : "light";
  h.dataset.theme = next;
  localStorage.setItem("dk-th", next);
  $("sunIcon").style.display = next === "light" ? "" : "none";
  $("moonIcon").style.display = next === "dark" ? "" : "none";
});
(() => {
  const t = localStorage.getItem("dk-th") || "light";
  document.documentElement.dataset.theme = t;
  $("sunIcon").style.display = t === "light" ? "" : "none";
  $("moonIcon").style.display = t === "dark" ? "" : "none";
})();

// ============================================================
// LANGUAGE
// ============================================================
function applyLang() {
  // Only update leaf text nodes — skip elements that have child elements (SVGs, icons, etc.)
  document.querySelectorAll(`[data-${lang}]`).forEach(el => {
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return;
    if (el.children.length > 0) return; // skip containers with SVG/span children
    const val = el.getAttribute(`data-${lang}`);
    if (val) el.textContent = val;
  });
  const sb = $("searchBox");
  if (sb) sb.placeholder = sb.getAttribute(`data-ph-${lang}`) || sb.placeholder;
  $("langBtn").textContent = lang === "en" ? "EN" : "GU";
  renderCats(); renderMenu(sb ? sb.value : ""); renderFeedback(); updateCart();
}
$("langBtn").addEventListener("click", () => { lang = lang === "en" ? "gu" : "en"; applyLang(); });

// ============================================================
// HEADER SCROLL
// ============================================================
window.addEventListener("scroll", () => {
  $("hdr").classList.toggle("sm", window.scrollY > 50);
}, { passive: true });

// ============================================================
// NAV DRAWER
// ============================================================
function openNav() { $("navScrim").classList.add("on"); $("navDrw").classList.add("on"); $("hamBtn").classList.add("open"); }
function closeNav() { $("navScrim").classList.remove("on"); $("navDrw").classList.remove("on"); $("hamBtn").classList.remove("open"); }
$("hamBtn").addEventListener("click", openNav);
$("navX").addEventListener("click", closeNav);
$("navScrim").addEventListener("click", closeNav);

// ============================================================
// SCROLL REVEAL
// ============================================================
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); revObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
function initReveal() {
  document.querySelectorAll(".rv,.rv-l,.rv-r").forEach(el => revObs.observe(el));
}

// ============================================================
// CATEGORIES
// ============================================================
function renderCats() {
  const allT = isGu() ? "બધું" : "All";
  let h = `<button class="cat ${aCat === "All" ? "on" : ""}" onclick="fCat('All')">${allT}</button>`;
  CATS.forEach(c => {
    const item = MENU.find(m => m.cat === c);
    h += `<button class="cat ${aCat === c ? "on" : ""}" onclick="fCat('${c}')">${isGu() ? item.catGu : c}</button>`;
  });
  $("catsEl").innerHTML = h;
}
function fCat(c) { aCat = c; renderCats(); renderMenu($("searchBox").value); }

// ============================================================
// MENU RENDER
// ============================================================
function renderMenu(q = "") {
  const el = $("menuGrid"); q = q.toLowerCase();
  let fil = MENU.filter(i => {
    const mc = aCat === "All" || i.cat === aCat;
    const ms = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q);
    return mc && ms;
  });
  if (!fil.length) {
    el.innerHTML = `<div class="no-res"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><p>${isGu() ? "કોઈ વાનગી મળી નથી." : "No dishes found. Try a different search."}</p></div>`;
    return;
  }
  let grp = {}; fil.forEach(i => { if (!grp[i.cat]) grp[i.cat] = []; grp[i.cat].push(i); });
  let h = "";
  for (let cat in grp) {
    const fi = grp[cat][0];
    h += `<div class="cat-hd rv"><h2>${isGu() ? fi.catGu : cat}</h2><p>${CATINFO[cat] || ""}</p></div><div class="cat-hd-line rv"></div><div class="m-grid">`;
    grp[cat].forEach((item, idx) => {
      // ── Single source of truth: read qty & addons from cart ──
      const cartEntry = cart.find(c => c.id === item.id);
      const qty = cartEntry ? cartEntry.qty : 0;
      const ia = cartEntry ? cartEntry.ad : (itemAddons[item.id] || []);
      const adPrice = ia.reduce((s, n) => { const a = ADDONS.find(x => x.name === n); return s + (a ? a.price : 0); }, 0);
      const dispPrice = item.price + adPrice;
      const dCls = `d${(idx % 4) + 1}`;
      const minusDisabled = qty === 0 ? 'disabled style="opacity:.3;cursor:not-allowed;transform:none"' : '';
      // Add button label — reflects what happens on click
      const addLabel = qty > 0
        ? (isGu() ? `✓ ×${qty} — ₹${dispPrice * qty}` : `✓ ×${qty} — ₹${dispPrice * qty}`)
        : (isGu() ? 'ઉમેરો' : 'Add');
      h += `<div class="m-card rv ${dCls}">
        <div class="m-img" onclick="openProd(${item.id})">
          <div class="m-img-track">
            ${item.imgs.map(img => `<img src="${img}" alt="${item.name}" loading="lazy">`).join('')}
          </div>
          <div class="m-img-overlay"></div>
          ${item.badge ? `<span class="m-img-badge">${item.badge}</span>` : ''}
          <span class="m-img-count">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            ${item.imgs.length} photos
          </span>
          <span class="m-img-zoom"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span>
        </div>
        <div class="m-body">
          <div class="m-row">
            <span class="m-name">${isGu() ? item.nameGu : item.name}</span>
            <span class="m-price">
              ₹${dispPrice}
              ${adPrice > 0 ? `<span style="font-size:.62rem;font-weight:600;color:var(--accent);display:block;line-height:1.3;margin-top:2px">+₹${adPrice} add-ons</span>` : ''}
            </span>
          </div>
          <p class="m-desc">${isGu() ? item.descGu : item.desc}</p>
          <div class="m-rating"><span class="m-stars" style="color:#f59e0b">${stars(item.rating)}</span><span class="m-rnum">${item.rating}/5</span></div>
          <div class="m-actions">
            <div class="qty-wrap">
              <button class="qty-btn" onclick="chgQ(${item.id},-1)" ${minusDisabled}>−</button>
              <span class="qty-n">${qty}</span>
              <button class="qty-btn" onclick="chgQ(${item.id},1)">+</button>
            </div>
            <button class="add-btn" id="ab-${item.id}" onclick="addToCart(${item.id})" style="font-size:${qty > 0 ? '.72rem' : '.76rem'}">${addLabel}</button>
          </div>
          <div class="addon-row">${ADDONS.map(a => `<button class="addon ${ia.includes(a.name) ? 'on' : ''}" onclick="tgAd(${item.id},'${a.name}')">${isGu() ? a.nameGu : a.name} +₹${a.price}</button>`).join('')}</div>
        </div>
      </div>`;
    });
    h += `</div>`;
  }
  el.innerHTML = h; initReveal();
}

// ── + / - on card → directly updates cart (live) ──
function chgQ(id, delta) {
  const item = MENU.find(i => i.id === id);
  const cartIdx = cart.findIndex(c => c.id === id);

  if (delta > 0) {
    if (cartIdx >= 0) {
      cart[cartIdx].qty++;
    } else {
      // First add — use any pending addons already selected on card
      const ia = [...(itemAddons[id] || [])];
      cart.push({ id, name: item.name, nameGu: item.nameGu, price: item.price, qty: 1, ad: ia });
      itemAddons[id] = ia; // keep in sync
      // Badge pop animation
      const badge = $('cartBadge'); badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop');
      const adNote = ia.length ? ` + ${ia.join(', ')}` : '';
      const unitP = item.price + ia.reduce((s, n) => { const a = ADDONS.find(x => x.name === n); return s + (a ? a.price : 0); }, 0);
      toast(isGu() ? `${item.nameGu}${adNote} ઉ. — ₹${unitP}` : `${item.name}${adNote} added — ₹${unitP}`);
    }
  } else {
    if (cartIdx >= 0) {
      cart[cartIdx].qty--;
      if (cart[cartIdx].qty <= 0) {
        const n = isGu() ? cart[cartIdx].nameGu : cart[cartIdx].name;
        itemAddons[id] = [];
        cart.splice(cartIdx, 1);
        toast(isGu() ? `${n} કાઢ્યું` : `${n} removed`);
      }
    }
  }
  updateCart();
  renderMenu($('searchBox').value);
}

// ── Addon toggle → instantly updates the cart item's addons & price ──
function tgAd(id, n) {
  if (!itemAddons[id]) itemAddons[id] = [];
  const i = itemAddons[id].indexOf(n);
  i > -1 ? itemAddons[id].splice(i, 1) : itemAddons[id].push(n);

  // If item is already in cart, live-update its addons right now
  const cartItem = cart.find(c => c.id === id);
  if (cartItem) {
    cartItem.ad = [...itemAddons[id]];
    updateCart(); // recalculate cart total immediately
  }
  renderMenu($('searchBox').value);
}

// ============================================================
// PRODUCT MODAL (click image to open)
// ============================================================
function openProd(id) {
  prodItem = MENU.find(i => i.id === id);
  prodQty = 1; prodAddons = [...(itemAddons[id] || [])]; prodImgIdx = 0;
  renderProdModal();
  $("prodScrim").classList.add("on");
  document.body.style.overflow = "hidden";
}
function closeProd() {
  $("prodScrim").classList.remove("on");
  document.body.style.overflow = "";
}
$("prodClose").addEventListener("click", closeProd);
$("prodScrim").addEventListener("click", e => { if (e.target === $("prodScrim")) closeProd(); });

function renderProdModal() {
  const item = prodItem;
  // Gallery
  $("prodMainImg").src = item.imgs[prodImgIdx];
  $("prodMainImg").alt = item.name;
  $("prodThumbs").innerHTML = item.imgs.map((img, i) =>
    `<img src="${img}" class="prod-thumb ${i === prodImgIdx ? "on" : ""}" alt="Photo ${i + 1}" onclick="switchProdImg(${i})">`
  ).join("");
  // Info
  const ia = prodAddons;
  $("prodInfo").innerHTML = `
    ${item.badge ? `<span class="prod-badge">${item.badge}</span>` : ""}
    <h2 class="prod-name">${isGu() ? item.nameGu : item.name}</h2>
    ${(function () {
      const modalAdPrice = prodAddons.reduce((s, a) => { const x = ADDONS.find(o => o.name === a); return s + (x ? x.price : 0); }, 0);
      const modalUnit = item.price + modalAdPrice;
      const modalTotal = modalUnit * prodQty;
      return `
      <div class="prod-price">
        ₹${modalUnit}
        ${modalAdPrice > 0 ? `<span style="font-size:.72rem;font-weight:600;color:var(--accent);margin-left:8px">+₹${modalAdPrice} add-ons</span>` : ''}
      </div>
      <div class="prod-rating"><span style="color:#f59e0b;font-size:.9rem">${stars(item.rating)}</span><span style="font-size:.76rem;color:var(--text3);margin-left:6px">${item.rating}/5</span></div>
      <p class="prod-desc">${isGu() ? item.descGu : item.desc}</p>
      <div class="prod-addons-hd">${isGu() ? 'Add-ons' : 'Add-ons'}</div>
      <div class="prod-addons">${ADDONS.map(a => `<button class="addon ${ia.includes(a.name) ? 'on' : ''}" onclick="tgProdAd('${a.name}')">${isGu() ? a.nameGu : a.name} +₹${a.price}</button>`).join('')}</div>
      <div class="prod-qty" style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
        <button class="prod-qty-btn" onclick="chgProdQ(-1)" ${prodQty <= 1 ? 'disabled style="opacity:.35;cursor:not-allowed"' : ''}>−</button>
        <span class="prod-qty-n">${prodQty}</span>
        <button class="prod-qty-btn" onclick="chgProdQ(1)">+</button>
        <span style="font-size:.78rem;color:var(--text2);margin-left:4px">${prodQty > 1 ? `×${prodQty} = ₹${modalTotal}` : ''}</span>
      </div>
      <button class="prod-add-btn" onclick="addFromProd()">
        ${isGu() ? 'કાર્ટમાં ઉમેરો' : 'Add to Cart'} — ₹${modalTotal}
      </button>`;
    })()
    }
  `;
}

function switchProdImg(i) { prodImgIdx = i; renderProdModal(); }
function chgProdQ(d) { prodQty = Math.max(1, prodQty + d); renderProdModal(); }
function tgProdAd(n) {
  const i = prodAddons.indexOf(n);
  i > -1 ? prodAddons.splice(i, 1) : prodAddons.push(n);
  renderProdModal();
}
function addFromProd() {
  const item = prodItem;
  const ia = [...prodAddons];
  // Single entry per item id — merge qty and update addons
  const cartIdx = cart.findIndex(c => c.id === item.id);
  if (cartIdx >= 0) {
    cart[cartIdx].qty += prodQty;
    cart[cartIdx].ad = ia;  // update addons to whatever was selected in modal
  } else {
    cart.push({ id: item.id, name: item.name, nameGu: item.nameGu, price: item.price, qty: prodQty, ad: ia });
  }
  // Sync itemAddons so card reflects same addons
  itemAddons[item.id] = ia;
  const badge = $('cartBadge'); badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop');
  const adNoteProd = ia.length ? ` + ${ia.join(', ')}` : '';
  const adAmtProd = ia.reduce((s, n) => { const a = ADDONS.find(x => x.name === n); return s + (a ? a.price : 0); }, 0);
  toast(isGu()
    ? `${item.nameGu}${adNoteProd} ×${prodQty} — ₹${(item.price + adAmtProd) * prodQty}`
    : `${item.name}${adNoteProd} ×${prodQty} added — ₹${(item.price + adAmtProd) * prodQty}`);
  closeProd(); updateCart(); renderMenu($('searchBox').value);
}

// ============================================================
// ADD TO CART (from card button)
// ============================================================
// ── "Add" button on card = same as pressing + once ──
function addToCart(id) {
  chgQ(id, 1);
}

// ── "Add" from suggestion strip in cart ──
function quickAdd(id) {
  chgQ(id, 1);
}

// ============================================================
// CART PANEL
// ============================================================
function openCart() { $("cartScrim").classList.add("on"); $("cartPnl").classList.add("on"); updateCart(); }
function closeCart() { $("cartScrim").classList.remove("on"); $("cartPnl").classList.remove("on"); }
$("cartBtn").addEventListener("click", openCart);
$("cartX").addEventListener("click", closeCart);
$("cartScrim").addEventListener("click", closeCart);

function getAdPrice(adList) {
  return adList.reduce((s, a) => { const ad = ADDONS.find(x => x.name === a); return s + (ad ? ad.price : 0); }, 0);
}

function updateCart() {
  const cnt = cart.reduce((s, c) => s + c.qty, 0);
  $("cartBadge").textContent = cnt;
  const body = $("cartBody"), ft = $("cartFt");
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".3"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><p>${isGu() ? "તમારું કાર્ટ ખાલી છે." : "Your cart is empty."}</p></div>`;
    ft.style.display = "none"; return;
  }
  ft.style.display = "block";
  let h = "";
  cart.forEach((c, idx) => {
    const at = getAdPrice(c.ad);
    const it = (c.price + at) * c.qty;
    const adT = c.ad.length ? c.ad.join(", ") : "";
    const m = MENU.find(x => x.id === c.id);
    h += `<div class="cart-item" style="animation-delay:${idx * .05}s">
      <img src="${m ? m.imgs[0] : 'image.png'}" alt="${c.name}" onclick="openProd(${c.id})">
      <div class="ci"><h4>${isGu() ? c.nameGu : c.name}</h4>${adT ? `<div class="ci-add">+ ${adT}</div>` : ""}<div class="ci-p">₹${it}</div><button class="ci-rm" onclick="rmCart(${idx})">${isGu() ? "કાઢી નાખો" : "Remove"}</button></div>
      <div class="c-qty"><button class="c-qty-btn" onclick="cQty(${idx},-1)">−</button><span class="c-qty-n">${c.qty}</span><button class="c-qty-btn" onclick="cQty(${idx},1)">+</button></div>
    </div>`;
  });
  // Random suggestion
  const notIn = MENU.filter(m => !cart.find(c => c.id === m.id));
  if (notIn.length) {
    const s = notIn[Math.floor(Math.random() * notIn.length)];
    h += `<div class="c-sug"><h4>${isGu() ? "તમને કદાચ આ પણ ગમશે" : "You might also like"}</h4>
      <div class="c-sug-row"><img src="${s.imgs[0]}" alt="${s.name}" style="cursor:pointer" onclick="openProd(${s.id})">
        <div class="c-sug-info"><h5>${isGu() ? s.nameGu : s.name}</h5><p>₹${s.price}</p></div>
        <button class="c-sug-add" onclick="quickAdd(${s.id})">${isGu() ? "ઉમેરો" : "Add"}</button>
      </div></div>`;
  }
  body.innerHTML = h;
  const total = cart.reduce((s, c) => s + (c.price + getAdPrice(c.ad)) * c.qty, 0);
  $("cartTotal").textContent = `₹${total}`;
}

function cQty(i, d) {
  const itemId = cart[i].id;
  const newQty = cart[i].qty + d;
  if (newQty <= 0) {
    const n = isGu() ? cart[i].nameGu : cart[i].name;
    cart.splice(i, 1);
    itemAddons[itemId] = []; // clear card addons so card resets
    toast(isGu() ? `${n} કાઢ્યું` : `${n} removed`);
  } else {
    cart[i].qty = newQty;
  }
  updateCart();
  renderMenu($('searchBox').value); // keep cards in sync with cart
}
function rmCart(i) {
  const n = isGu() ? cart[i].nameGu : cart[i].name;
  const itemId = cart[i].id;
  cart.splice(i, 1);
  itemAddons[itemId] = []; // clear card addons
  toast(isGu() ? `${n} કાઢ્યું` : `${n} removed`);
  updateCart();
  renderMenu($('searchBox').value); // keep cards in sync
}

// ============================================================
// ORDER MODAL
// ============================================================
$("checkoutBtn").addEventListener("click", () => { closeCart(); $("orderModal").classList.add("on"); });
$("oBack").addEventListener("click", () => { $("orderModal").classList.remove("on"); openCart(); });

function setOT(t) {
  oType = t;
  document.querySelectorAll(".ot-tab").forEach(b => b.classList.toggle("on", b.dataset.type === t));
  document.querySelectorAll(".oform").forEach(f => f.classList.remove("on"));
  $("f-" + t).classList.add("on");
}

// ============================================================
// CONFIRM ORDER
// ============================================================
$("procBtn").addEventListener("click", () => {
  let nm = "", ph = "", ex = "", addr = "", tbl = "";
  if (oType === "pickup") { nm = $("p-n").value; ph = $("p-p").value; ex = $("p-d").value; }
  if (oType === "delivery") { nm = $("d-n").value; ph = $("d-p").value; addr = $("d-a").value; ex = $("d-d").value; }
  if (oType === "table") { nm = $("t-n").value; ph = $("t-p").value; tbl = $("t-t").value; ex = $("t-d").value; }
  if (!nm.trim() || !ph.trim()) { toast(isGu() ? "કૃપા કરીને નામ અને ફોન નંબર ભરો" : "Please fill name and phone"); return; }
  $("orderModal").classList.remove("on");
  const total = cart.reduce((s, c) => s + (c.price + getAdPrice(c.ad)) * c.qty, 0);
  const tl = oType === "pickup" ? "Pickup" : oType === "delivery" ? "Delivery" : "Dine-in (Table)";
  let ih = "", msg = `*NEW ORDER — Dev's Kitchen*\n\n*Type:* ${tl}\n*Name:* ${nm}\n*Phone:* ${ph}\n`;
  if (oType === "delivery") msg += `*Address:* ${addr}\n`;
  if (oType === "table") msg += `*Table:* ${tbl}\n`;
  if (ex) msg += `*Notes:* ${ex}\n`;
  msg += `\n*Items:*\n`;
  cart.forEach(c => {
    const at = getAdPrice(c.ad), it = (c.price + at) * c.qty;
    const adT = c.ad.length ? ` (+${c.ad.join(", ")})` : "";
    ih += `<div class="conf-item"><span>${c.name}${adT} ×${c.qty}</span><span>₹${it}</span></div>`;
    msg += `- ${c.name}${adT} ×${c.qty} = Rs.${it}\n`;
  });
  msg += `\n*TOTAL: Rs.${total}*\n\nThank you!`;
  let info = `<strong>Type:</strong> ${tl}<br><strong>Name:</strong> ${nm}<br><strong>Phone:</strong> ${ph}`;
  if (oType === "delivery") info += `<br><strong>Address:</strong> ${addr}`;
  if (oType === "table") info += `<br><strong>Table:</strong> ${tbl}`;
  if (ex) info += `<br><strong>Notes:</strong> ${ex}`;
  const waUrl = `https://wa.me/919023668571?text=${encodeURIComponent(msg)}`;
  $("confContent").innerHTML = `${ih}
    <div class="conf-total"><span>${isGu() ? "Total" : "Total"}</span><span>₹${total}</span></div>
    <div class="conf-info">${info}</div>
    <a href="${waUrl}" target="_blank" class="wa-btn" style="text-decoration:none;margin-top:6px">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      ${isGu() ? "WhatsApp પર ઓર્ડર મોકલો" : "Send Order on WhatsApp"}
    </a>`;
  $("confModal").classList.add("on");
});

$("cBack").addEventListener("click", () => { $("confModal").classList.remove("on"); $("orderModal").classList.add("on"); });

// ============================================================
// FEEDBACK
// ============================================================
function renderFeedback() {
  $("fbGrid").innerHTML = FEEDBACKS.map((f, i) => `
    <div class="fb-card rv d${(i % 3) + 1}">
      <div class="fb-stars">${"★".repeat(f.s)}${"☆".repeat(5 - f.s)}</div>
      <p class="fb-text">"${isGu() ? f.tg : f.t}"</p>
      <div class="fb-name">— ${f.n}</div>
    </div>`).join("");
  initReveal();
}

// ============================================================
// SEARCH
// ============================================================
$("searchBox").addEventListener("input", e => renderMenu(e.target.value));

// ============================================================
// KEYBOARD
// ============================================================
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeProd(); closeCart(); $("orderModal").classList.remove("on"); $("confModal").classList.remove("on"); }
});

// ============================================================
// HERO TITLE CHAR ANIMATION
// ============================================================
function animateHeroTitle() {
  const h1 = document.querySelector('.hero-h1');
  if (!h1) return;
  // Split each text node into letter spans
  const lines = h1.querySelectorAll('.hero-word, em.line2');
  lines.forEach((line, li) => {
    const txt = line.textContent;
    line.textContent = '';
    line.style.display = 'inline-block';
    [...txt].forEach((ch, ci) => {
      const s = document.createElement('span');
      s.className = 'ltr';
      s.textContent = ch === ' ' ? '\u00A0' : ch;
      s.style.animationDelay = `${(li * 0.18) + ci * 0.04}s`;
      line.appendChild(s);
    });
  });
}

// ============================================================
// STEAM PARTICLES (bubble-based)
// ============================================================
function spawnSteam(cardEl) {
  const rect = cardEl.getBoundingClientRect();
  const baseX = rect.left + rect.width * 0.5;
  const baseY = rect.top;

  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('steam-bubble');

    // random horizontal offset within card width
    const offsetX = (Math.random() * rect.width * 0.6) - (rect.width * 0.3);
    bubble.style.left = (baseX + offsetX) + 'px';
    bubble.style.top = baseY + 'px';

    // random size
    const size = 16 + Math.random() * 14;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // random duration
    const duration = 1.8 + Math.random() * 1.6;
    bubble.style.animationDuration = duration + 's';

    document.body.appendChild(bubble);

    // horizontal drift animation
    const drift = (Math.random() * 60 - 30);
    bubble.animate([
      { transform: `translate(0, 0) scale(0.6)`, opacity: 0.6 },
      { transform: `translate(${drift}px, -160px) scale(2.0)`, opacity: 0 }
    ], {
      duration: duration * 1000,
      easing: 'ease-out',
      fill: 'forwards'
    });

    setTimeout(() => bubble.remove(), duration * 1000 + 50);
  }

  // spawn 4-5 bubbles staggered
  for (let i = 0; i < 5; i++) {
    setTimeout(createBubble, i * 180);
  }
}

document.addEventListener('mouseover', e => {
  const card = e.target.closest('.m-img');
  if (card && !card._steaming) {
    card._steaming = true;
    spawnSteam(card);
    setTimeout(() => { card._steaming = false; }, 2200);
  }
});

// ============================================================
// INIT & LOADER
// ============================================================
(function initLoader() {
  // Lock scroll while loader is visible
  document.body.style.overflow = 'hidden';

  const startTime = Date.now();
  const MIN_SHOW = 2200; // ms — keep loader long enough to enjoy it

  function dismissLoader() {
    const elapsed = Date.now() - startTime;
    const delay = Math.max(0, MIN_SHOW - elapsed);
    setTimeout(() => {
      const gl = document.getElementById('globalLoader');
      if (gl) {
        gl.classList.add('fade-out');
        setTimeout(() => {
          gl.remove();
          document.body.style.overflow = ''; // unlock scroll
        }, 620);
      }
    }, delay);
  }

  if (document.readyState === 'complete') {
    dismissLoader();
  } else {
    window.addEventListener('load', dismissLoader);
  }
})();

buildMarquee();
renderCats();
renderMenu();
renderFeedback();
initReveal();
animatHeroTitle();

function animatHeroTitle() {
  const h1 = document.querySelector('.hero-h1');
  if (!h1) return;
  h1.querySelectorAll('.ltr-word').forEach((word, wi) => {
    const txt = word.dataset.text || word.textContent;
    word.dataset.text = txt;
    word.innerHTML = [...txt].map((c, ci) =>
      `<span class="ltr" style="animation-delay:${wi * 0.2 + ci * 0.045}s">${c === ' ' ? '&nbsp;' : c}</span>`
    ).join('');
  });
}

// ============================================================
// AUTO SWIPE IMAGES
// ============================================================
setInterval(() => {
  document.querySelectorAll('.m-img-track').forEach((track, idx) => {
    if (track.children.length > 1 && track.offsetParent !== null) {
      setTimeout(() => {
        let currentIdx = Math.round(track.scrollLeft / track.clientWidth);
        let nextIdx = currentIdx + 1;
        if (nextIdx >= track.children.length) nextIdx = 0;
        track.scrollTo({ left: nextIdx * track.clientWidth, behavior: 'smooth' });
      }, (idx % 3) * 600); // stagger animation
    }
  });
}, 4000); // 4 seconds

