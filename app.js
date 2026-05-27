/* ============================================================
   SAFE & SURE (INDIA) — KAMINI · App Logic
   Products data + cart + wishlist + search + header/footer render
   ============================================================ */

// ============== PRODUCT CATALOG ==============
const PRODUCTS = [
  {
    slug: "prabhakar-vati",
    name: "Prabhakar Vati",
    hindi: "प्रभाकर वटी",
    image: "assets/prabhakar-vati.png",
    sub: "Hridya Rog · Heart Care Support",
    concern: "Heart Care",
    category: "vati",
    price: 285,
    was: 320,
    rating: 4.83,
    reviews: 142,
    weight: "5 gm · 40 tablets",
    badge: "Bestseller",
    short: "A time-honoured cardiac tonic formulated to strengthen the heart and support healthy circulation. Recommended in classical texts (Ayurved Sar Sangrah, pg. 451) for general hridya rog.",
    uses: [
      "Helps maintain a healthy heart rhythm",
      "Supports normal blood circulation",
      "Calms palpitations and chest discomfort",
      "Useful in general weakness of the cardiovascular system"
    ],
    dosage: "1–2 tablets twice daily with warm milk or as directed by a registered Ayurvedic physician.",
    ingredients: "Akik Pishti, Praval Pishti, Mukta Pishti, Arjun Chhal, Pushkarmool, Jaharmohra Pishti, and other classical herbo-mineral ingredients.",
    caution: "For use under qualified Ayurvedic supervision. Keep out of reach of children. Not recommended during pregnancy without medical advice."
  },
  {
    slug: "vyoshadi-vati",
    name: "Vyoshadi Vati",
    hindi: "व्योषादि वटी",
    image: "assets/vyoshadi-vati.png",
    sub: "Kas · Shvas · Respiratory Wellness",
    concern: "Respiratory",
    category: "vati",
    price: 240,
    was: 275,
    rating: 4.78,
    reviews: 96,
    weight: "5 gm · 40 tablets",
    badge: "Hot",
    short: "A classical formulation for vataj kas (cough), shvas (breathlessness), kapha imbalance and stomach discomfort. Regular intake helps clear the channels and restore easy breathing.",
    uses: [
      "Eases productive and dry cough",
      "Helps relieve chest congestion",
      "Useful in mild asthma and bronchial discomfort",
      "Supports clearance of excess kapha"
    ],
    dosage: "1–2 tablets twice or thrice daily with warm water or honey, after meals.",
    ingredients: "Trikatu (Pippali, Maricha, Shunthi), Triphala, Vidanga, Yavakshara and other classical respiratory herbs.",
    caution: "Pregnant or lactating women should consult a physician before use."
  },
  {
    slug: "shool-vardhani-vati",
    name: "Shool Vardhani Vati",
    hindi: "शूल वर्धनी वटी",
    image: "assets/shool-vardhani-vati.png",
    sub: "Shool · Pain Relief & Spasm",
    concern: "Pain Relief",
    category: "vati",
    price: 265,
    was: 300,
    rating: 4.71,
    reviews: 118,
    badge: "Bestseller",
    weight: "5 gm · 40 tablets",
    short: "Indicated for abdominal cramps, colic and gastric pain. Take 1–2 tablets after meals with warm water, or as advised by the physician.",
    uses: [
      "Relieves stomach cramps and abdominal pain",
      "Helps in gas and bloating",
      "Useful in dysmenorrhea and intestinal spasm",
      "Calms irritated digestive nerves"
    ],
    dosage: "1–2 tablets after meals with warm water, twice daily.",
    ingredients: "Hingu, Yavakshara, Saindhav Lavan, Pippali, Maricha, and pain-soothing classical herbs.",
    caution: "Consult an Ayurvedic physician for chronic abdominal pain. Avoid if peptic ulcer is suspected."
  },
  {
    slug: "sanjeevni-vati",
    name: "Sanjeevni Vati",
    hindi: "सूंजीवनी वटी",
    image: "assets/sanjeevni-vati.png",
    sub: "Jwar · Immunity · Rejuvenation",
    concern: "Immunity",
    category: "vati",
    price: 250,
    was: 290,
    rating: 4.89,
    reviews: 214,
    badge: "Bestseller",
    weight: "5 gm · 40 tablets",
    short: "A classical immunity and recovery formulation, mentioned for fevers, indigestion and convalescence. Take one hour before sleep with warm milk, 1–2 tablets, or as directed.",
    uses: [
      "Supports recovery from viral and seasonal fevers",
      "Strengthens digestion (deepan-pachan)",
      "Acts as a general immunity tonic",
      "Useful in early-stage indigestion and amavisha"
    ],
    dosage: "1–2 tablets twice daily with warm water or as directed.",
    ingredients: "Vidanga, Nagarmotha, Pippali, Haritaki, Vibhitaki, Amalaki, Vacha, Guduchi, Bhallatak shuddha, Vatsanabh shuddha.",
    caution: "Strictly under supervision of a registered Ayurvedic physician."
  },
  {
    slug: "sarpagandhayan-vati",
    name: "Sarpagandhayan Vati",
    hindi: "सर्पगंधायन वटी",
    image: "assets/sarpagandhayan-vati.png",
    sub: "Rakta Chap · BP & Mind Calm",
    concern: "Blood Pressure",
    category: "vati",
    price: 295,
    was: 340,
    rating: 4.81,
    reviews: 173,
    badge: "Trending",
    weight: "5 gm · 40 tablets",
    short: "A trusted classical formulation containing Sarpagandha and supportive herbs, traditionally used to help maintain healthy blood pressure and a calm, settled mind.",
    uses: [
      "Helps maintain healthy blood pressure",
      "Calms an over-active, restless mind",
      "Supports natural, restorative sleep",
      "Reduces stress-driven palpitations"
    ],
    dosage: "1–2 tablets twice daily with warm milk, one hour before sleep, or as advised.",
    ingredients: "Sarpagandha (Rauwolfia serpentina) ghan, Jatamansi, Brahmi, Shankhpushpi, and classical adjuvants.",
    caution: "Take only under qualified Ayurvedic medical supervision. Not for pregnant women or those on prescription anti-hypertensives without doctor's advice."
  },
  {
    slug: "shukra-stambhan-gutika",
    name: "Shukra Stambhan Gutika",
    hindi: "शुक्र स्तम्भन गुटिका",
    image: "assets/shukra-stambhan-gutika.png",
    sub: "Purush Swasthya · Strength & Stamina",
    concern: "Men's Wellness",
    category: "gutika",
    price: 425,
    was: 490,
    rating: 4.86,
    reviews: 308,
    badge: "Bestseller",
    weight: "5 gm · 30 tablets",
    short: "A classical formulation supporting men's vitality and stamina. Indicated for general weakness, premature debility and reproductive wellness. Take with warm milk under physician guidance.",
    uses: [
      "Supports stamina and physical strength",
      "Helps in general male debility",
      "Promotes healthy dhatu (tissue) building",
      "Useful as a tonic for working men"
    ],
    dosage: "1–2 tablets twice daily with warm milk, after meals, or as directed by a physician.",
    ingredients: "Akarkara, Kaunch Beej, Shilajit shuddha, Ashwagandha, Safed Musli, Gokshur, Talimkhana and classical rasayanas.",
    caution: "For adult men only. Consult a registered Ayurvedic physician for personalised dosage."
  },
  {
    slug: "agnitundi-vati",
    name: "Agnitundi Vati",
    hindi: "अग्नितुण्डी वटी",
    image: "assets/agnitundi-vati.png",
    sub: "Pachan Agni · Digestion",
    concern: "Digestion",
    category: "vati",
    price: 220,
    was: 260,
    rating: 4.74,
    reviews: 89,
    weight: "5 gm · 40 tablets",
    short: "A digestive fire (agni) kindler. Ideal for sluggish digestion, loss of appetite, gas and bloating. Take after meals with warm water.",
    uses: [
      "Improves appetite and digestion",
      "Relieves indigestion, gas and acidity",
      "Helps clear ama (digestive toxins)",
      "Useful in chronic loss of taste (aruchi)"
    ],
    dosage: "1–2 tablets twice daily after meals with warm water.",
    ingredients: "Hingu, Pippali, Maricha, Shunthi, Saindhav Lavan, Yavakshara and digestive herbs.",
    caution: "Not recommended in active peptic ulcer. Consult physician for prolonged use."
  },
  {
    slug: "amar-sundari-vati",
    name: "Amar Sundari Vati",
    hindi: "अमर सुंदरी वटी",
    image: "assets/amar-sundari-vati.png",
    sub: "Stri Swasthya · Women's Care",
    concern: "Women's Health",
    category: "vati",
    price: 310,
    was: 360,
    rating: 4.79,
    reviews: 156,
    badge: "Bestseller",
    weight: "5 gm · 40 tablets",
    short: "A classical formulation for women's overall well-being. Supports menstrual regularity, hormonal balance and post-natal recovery. Consult a physician for personalised dosage.",
    uses: [
      "Supports regular menstrual cycles",
      "Helps in pre-menstrual discomfort",
      "Useful in white discharge and weakness",
      "Supports post-natal recovery"
    ],
    dosage: "1–2 tablets twice daily with warm milk or as directed.",
    ingredients: "Ashoka, Lodhra, Shatavari, Praval Pishti, Mukta Pishti and classical women's-wellness herbs.",
    caution: "Avoid during pregnancy unless explicitly prescribed."
  },
  {
    slug: "arogyavardhani-gutika",
    name: "Arogya Vardhani Gutika",
    hindi: "आरोग्य वर्धनी गुटिका",
    image: "assets/arogyavardhani-gutika.png",
    sub: "Yakrit · Twak · Liver & Skin",
    concern: "Liver & Skin",
    category: "gutika",
    price: 275,
    was: 310,
    rating: 4.84,
    reviews: 201,
    badge: "Trending",
    weight: "5 gm · 40 tablets",
    short: "One of Ayurveda's most respected formulations for liver health, skin clarity and metabolic balance. Useful in chronic skin issues, fatty liver and general detoxification.",
    uses: [
      "Supports healthy liver function",
      "Helps in chronic skin disorders",
      "Aids natural metabolism and weight balance",
      "Useful in general detoxification (ama-pachan)"
    ],
    dosage: "1–2 tablets twice daily after meals with warm water.",
    ingredients: "Kutaki, Triphala, Chitrak, Shilajit shuddha, Tamra Bhasma, Loha Bhasma, Abhrak Bhasma and Guggulu.",
    caution: "Under qualified Ayurvedic supervision only. Not for pregnant women."
  },
  {
    slug: "kapoor-ras",
    name: "Kapoor Ras",
    hindi: "कपूर रस",
    image: "assets/kapoor-ras.png",
    sub: "Sheetal · Cooling & Headache",
    concern: "Headache",
    category: "ras",
    price: 340,
    was: 385,
    rating: 4.77,
    reviews: 134,
    weight: "5 gm · 30 tablets",
    short: "A cooling classical preparation traditionally indicated for headaches, burning sensations and pitta-related discomfort. Take with cool water or as advised.",
    uses: [
      "Helps relieve common headache",
      "Cools internal heat and burning sensations",
      "Useful in summer pitta imbalance",
      "Calms anxiety related to heat-stress"
    ],
    dosage: "1 tablet twice daily with cool water or as directed.",
    ingredients: "Karpoor (camphor) shuddha, Pippali, Maricha, Shunthi and classical sheetal dravyas.",
    caution: "Avoid overdose. Children and pregnant women under medical advice only."
  },
  {
    slug: "dugdh-vati",
    name: "Dugdh Vati",
    hindi: "दुग्ध वटी",
    image: "assets/dugdh-vati.png",
    sub: "Stanyapan · Lactation Support",
    concern: "Women's Health",
    category: "vati",
    price: 295,
    was: 330,
    rating: 4.82,
    reviews: 87,
    badge: "New",
    weight: "5 gm · 40 tablets",
    short: "A galactagogue formulation supporting healthy milk flow in nursing mothers. To be taken with warm milk twice daily as directed.",
    uses: [
      "Supports healthy lactation",
      "Useful in low milk production",
      "Helps recovery after delivery",
      "Strengthens overall maternal nutrition"
    ],
    dosage: "1–2 tablets twice daily with warm milk after meals.",
    ingredients: "Shatavari, Vidari Kand, Yashtimadhu, Ashwagandha, Jeevak, Rishabhak and classical lactation herbs.",
    caution: "Under physician guidance during the post-natal phase."
  }
];

const CONCERNS = [
  { name: "Heart Care", icon: "heart", count: 1 },
  { name: "Respiratory", icon: "lungs", count: 1 },
  { name: "Pain Relief", icon: "pain", count: 1 },
  { name: "Immunity", icon: "shield", count: 1 },
  { name: "Blood Pressure", icon: "pulse", count: 1 },
  { name: "Men's Wellness", icon: "male", count: 1 },
  { name: "Digestion", icon: "digestion", count: 1 },
  { name: "Women's Health", icon: "female", count: 2 }
];

// ============== STATE — localStorage backed ==============
const LS = {
  CART: 'kamini_cart',
  WISHLIST: 'kamini_wishlist'
};

function getCart()     { try { return JSON.parse(localStorage.getItem(LS.CART) || '[]'); } catch { return []; } }
function setCart(v)    { localStorage.setItem(LS.CART, JSON.stringify(v)); updateHeaderCounts(); }
function getWishlist() { try { return JSON.parse(localStorage.getItem(LS.WISHLIST) || '[]'); } catch { return []; } }
function setWishlist(v){ localStorage.setItem(LS.WISHLIST, JSON.stringify(v)); updateHeaderCounts(); }

function findProduct(slug) { return PRODUCTS.find(p => p.slug === slug); }
function inr(n) { return '₹' + Number(n).toLocaleString('en-IN'); }

function addToCart(slug, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.slug === slug);
  if (existing) existing.qty += qty;
  else cart.push({ slug, qty });
  setCart(cart);
  showToast(findProduct(slug)?.name || 'Item', 'Added to bag');
}

function removeFromCart(slug) {
  setCart(getCart().filter(i => i.slug !== slug));
}

function setQty(slug, qty) {
  qty = Math.max(1, parseInt(qty) || 1);
  const cart = getCart();
  const item = cart.find(i => i.slug === slug);
  if (item) { item.qty = qty; setCart(cart); }
}

function toggleWishlist(slug) {
  const list = getWishlist();
  const i = list.indexOf(slug);
  if (i >= 0) { list.splice(i, 1); setWishlist(list); showToast(findProduct(slug)?.name || 'Item', 'Removed from wishlist'); }
  else        { list.push(slug); setWishlist(list); showToast(findProduct(slug)?.name || 'Item', 'Added to wishlist'); }
  document.querySelectorAll(`[data-fav-slug="${slug}"]`).forEach(el => el.classList.toggle('is-fav', list.includes(slug)));
}

function cartTotals() {
  const cart = getCart();
  let subtotal = 0, saved = 0, count = 0;
  cart.forEach(i => {
    const p = findProduct(i.slug);
    if (!p) return;
    subtotal += p.price * i.qty;
    if (p.was) saved += (p.was - p.price) * i.qty;
    count += i.qty;
  });
  const shipping = subtotal >= 1000 || subtotal === 0 ? 0 : 60;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;
  return { subtotal, shipping, tax, total, saved, count };
}

function updateHeaderCounts() {
  const { count } = cartTotals();
  const wishCount = getWishlist().length;
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'grid' : 'none';
  });
  document.querySelectorAll('[data-wish-count]').forEach(el => {
    el.textContent = wishCount;
    el.style.display = wishCount > 0 ? 'grid' : 'none';
  });
}

// ============== TOAST ==============
function showToast(name, label = 'Added to bag') {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.className = 'toast';
    t.innerHTML = '<div class="tick">✓</div><div><div class="tlabel"></div><div class="tname"></div></div>';
    document.body.appendChild(t);
  }
  t.querySelector('.tlabel').textContent = label;
  t.querySelector('.tname').textContent = name;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 2400);
}

// ============== SEARCH ==============
function openSearch() {
  const o = document.getElementById('search-overlay');
  if (!o) return;
  o.classList.add('open');
  setTimeout(() => o.querySelector('input')?.focus(), 50);
}
function closeSearch() { document.getElementById('search-overlay')?.classList.remove('open'); }
function runSearch(q) {
  const out = document.getElementById('search-results');
  if (!out) return;
  q = (q || '').trim().toLowerCase();
  if (!q) { out.innerHTML = ''; return; }
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.hindi.includes(q) ||
    p.sub.toLowerCase().includes(q) ||
    p.concern.toLowerCase().includes(q) ||
    (p.short || '').toLowerCase().includes(q)
  ).slice(0, 6);
  if (!matches.length) {
    out.innerHTML = '<div class="search-empty">No formulations match that. Try "vati", "heart" or "digestion".</div>';
    return;
  }
  out.innerHTML = matches.map(p => `
    <a class="search-result" href="product.html?slug=${p.slug}">
      <img src="${p.image}" alt="${p.name}"/>
      <div class="meta">
        <div class="name">${p.name}</div>
        <div class="sub">${p.sub}</div>
      </div>
      <div class="price">${inr(p.price)}</div>
    </a>
  `).join('');
}

// ============== HEADER + FOOTER RENDER ==============
function renderHeader(opts = {}) {
  const host = document.getElementById('site-header');
  if (!host) return;
  const { active = '' } = opts;
  const act = (key) => active === key ? 'style="border-bottom:1px solid var(--saffron);"' : '';
  host.innerHTML = `
    <div class="announce" aria-label="Announcements">
      <div class="announce-track">
        <span>Free shipping over ₹1000 <i></i></span>
        <span>Manufactured in Bengaluru by Safe &amp; Sure (India) <i></i></span>
        <span>Authentic classical Ayurveda · GMP certified <i></i></span>
        <span>Customer care: 8290268414 <i></i></span>
        <span>Free shipping over ₹1000 <i></i></span>
        <span>Manufactured in Bengaluru by Safe &amp; Sure (India) <i></i></span>
        <span>Authentic classical Ayurveda · GMP certified <i></i></span>
        <span>Customer care: 8290268414 <i></i></span>
      </div>
    </div>
    <header class="header">
      <div class="wide header-inner">
        <nav class="nav" aria-label="Primary">
          <a href="shop.html" ${act('shop')}>Shop All</a>
          <a href="shop.html#concerns" ${act('concerns')}>By Concern</a>
          <a href="about.html" ${act('about')}>Our Story</a>
          <a href="contact.html" ${act('contact')}>Consult</a>
        </nav>
        <a href="index.html" class="logo" aria-label="Safe &amp; Sure (India) — Kamini home">
          <img class="logo-img" src="assets/logo.png" alt="Kamini by Safe &amp; Sure (India)"/>
          <span class="logo-text">
            <span class="top">Kamini</span>
            <span class="sub">Safe &amp; Sure (India)</span>
          </span>
        </a>
        <div class="icons">
          <button class="icon-btn" aria-label="Search" onclick="openSearch()">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          </button>
          <a href="account.html" class="icon-btn desktop-only" aria-label="Account">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
          </a>
          <a href="wishlist.html" class="icon-btn desktop-only" aria-label="Wishlist">
            <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 4 0 5.5 4 4 7-2.5 4.5-9.5 9-9.5 9z"/></svg>
            <span class="dot" data-wish-count style="display:none;">0</span>
          </a>
          <a href="cart.html" class="icon-btn" aria-label="Cart">
            <svg viewBox="0 0 24 24"><path d="M5 8h14l-1.5 11a2 2 0 01-2 1.8h-9a2 2 0 01-2-1.8L3 8h2zM9 8V6a3 3 0 016 0v2"/></svg>
            <span class="dot" data-cart-count style="display:none;">0</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Search overlay -->
    <div id="search-overlay" class="search-overlay" onclick="if(event.target===this)closeSearch()">
      <div class="search-box">
        <div class="search-row">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          <input type="text" placeholder="Search formulations, concerns…" oninput="runSearch(this.value)" onkeydown="if(event.key==='Escape')closeSearch()"/>
          <button class="search-close" onclick="closeSearch()">Close</button>
        </div>
        <div id="search-results" class="search-results"></div>
        <div style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--mute);">
          Try: <a href="shop.html?c=Heart%20Care" style="text-decoration:underline;">Heart care</a> ·
          <a href="shop.html?c=Digestion" style="text-decoration:underline;">Digestion</a> ·
          <a href="shop.html?c=Women's%20Health" style="text-decoration:underline;">Women's wellness</a>
        </div>
      </div>
    </div>
  `;
  updateHeaderCounts();
}

function renderFooter() {
  const host = document.getElementById('site-footer');
  if (!host) return;
  host.innerHTML = `
    <footer class="footer">
      <div class="wide">
        <div class="footer-top">
          <div class="footer-col">
            <div class="logo">
              <img class="logo-img" src="assets/logo.png" alt="Kamini"/>
              <span class="logo-text">
                <span class="top">Kamini</span>
                <span class="sub">Safe &amp; Sure (India)</span>
              </span>
            </div>
            <p class="footer-lede">Authentic classical Ayurvedic proprietary medicine, formulated and manufactured by Safe &amp; Sure (India) — Bengaluru.</p>
            <div style="margin-top:24px;font-size:13px;color:rgba(255,255,255,.7);line-height:1.7;">
              SAFE &amp; SURE (INDIA)<br/>
              Gandhinagar, Keshapura,<br/>
              Bhoogani, Bengaluru – 307027<br/>
              <a href="tel:+918290268414" style="color:var(--paper);">+91 82902 68414</a><br/>
              <a href="mailto:care@safensure-india.com" style="color:var(--paper);">care@safensure-india.com</a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Shop</h5>
            <ul>
              <li><a href="shop.html">All formulations</a></li>
              <li><a href="shop.html?c=Heart%20Care">Heart care</a></li>
              <li><a href="shop.html?c=Digestion">Digestion</a></li>
              <li><a href="shop.html?c=Immunity">Immunity</a></li>
              <li><a href="shop.html?c=Women's%20Health">Women's wellness</a></li>
              <li><a href="shop.html?c=Men's%20Wellness">Men's wellness</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Help</h5>
            <ul>
              <li><a href="contact.html">Contact us</a></li>
              <li><a href="shipping-policy.html">Shipping policy</a></li>
              <li><a href="refund-policy.html">Refund &amp; returns</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="account.html">My account</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About Safe &amp; Sure</a></li>
              <li><a href="about.html#process">Manufacturing</a></li>
              <li><a href="terms-conditions.html">Terms &amp; conditions</a></li>
              <li><a href="privacy-policy.html">Privacy policy</a></li>
              <li><a href="contact.html">Distributorship</a></li>
            </ul>
          </div>
          <div class="footer-col footer-news">
            <h5>Wellness letters</h5>
            <p class="footer-lede">A short, occasional dispatch on classical Ayurveda, formulations, and seasonal protocols.</p>
            <form class="news-input" onsubmit="event.preventDefault();this.querySelector('input').value='Thank you ✓';">
              <input type="email" placeholder="your@email.com" aria-label="Email address" required />
              <button type="submit">Subscribe →</button>
            </form>
            <div class="socials" style="margin-top:8px;">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1 .5-2 2-2h2V3a20 20 0 00-3 0c-3 0-5 2-5 5v2H6v4h3v8h4z"/></svg></a>
              <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 4h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 4h6l4 6 6-6z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 Safe &amp; Sure (India) · All rights reserved · Mfg. Lic. No.: 625-Ayu</div>
          <div class="center">
            <a href="terms-conditions.html">Terms</a> &nbsp;·&nbsp;
            <a href="privacy-policy.html">Privacy</a> &nbsp;·&nbsp;
            <a href="refund-policy.html">Refund</a> &nbsp;·&nbsp;
            <a href="shipping-policy.html">Shipping</a>
          </div>
          <div class="right">
            <span class="pay">Visa</span>
            <span class="pay">M/C</span>
            <span class="pay">UPI</span>
            <span class="pay">Razorpay</span>
            <span class="pay">COD</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ============== PRODUCT CARD HTML ==============
function productCardHTML(p) {
  const wish = getWishlist().includes(p.slug);
  const badge = p.badge
    ? (p.badge.toLowerCase() === 'new'
        ? `<span class="badge badge-new">New</span>`
        : p.badge.toLowerCase() === 'hot'
          ? `<span class="badge badge-hot">${p.badge}</span>`
          : p.badge.toLowerCase() === 'trending'
            ? `<span class="badge badge-sale">${p.badge}</span>`
            : `<span class="badge badge-best">${p.badge}</span>`)
    : '';
  const stars = '★'.repeat(Math.round(p.rating)) + '<span class="mute">' + '★'.repeat(5 - Math.round(p.rating)) + '</span>';
  const wasHTML = p.was ? `<span class="was">${inr(p.was)}</span>` : '';
  return `
    <div class="product">
      <a href="product.html?slug=${p.slug}" class="product-media" style="background:var(--paper);text-decoration:none;">
        <div class="product-badges">${badge}</div>
        <button class="product-fav ${wish ? 'is-fav' : ''}" data-fav-slug="${p.slug}" onclick="event.preventDefault();event.stopPropagation();toggleWishlist('${p.slug}')" aria-label="Save">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14213A" stroke-width="1.6"><path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 4 0 5.5 4 4 7-2.5 4.5-9.5 9-9.5 9z"/></svg>
        </button>
        <img src="${p.image}" alt="${p.name}" style="object-fit:contain;padding:18px;" />
        <button class="product-quick" onclick="event.preventDefault();event.stopPropagation();addToCart('${p.slug}')">Add to bag +</button>
      </a>
      <a href="product.html?slug=${p.slug}" style="text-decoration:none;display:flex;flex-direction:column;gap:8px;">
        <div class="product-stars"><span style="color:var(--saffron);">${stars}</span> <b>${p.rating.toFixed(2)}</b> <span class="mute">· ${p.reviews} reviews</span></div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-sub">${p.sub}</p>
        <div class="product-price"><span class="now">${inr(p.price)}</span> ${wasHTML}</div>
      </a>
    </div>
  `;
}

// ============== SCROLL REVEAL ==============
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ============== INIT ON DOM READY ==============
document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ active: document.body.dataset.page || '' });
  renderFooter();
  initReveal();
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });
});
