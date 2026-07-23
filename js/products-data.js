/* ============================================================
   CELURES — PRODUCT DATA
   This is the ONLY file you need to edit to add, remove, or
   update a perfume. Every page (homepage, product page, cart)
   reads from this file automatically.

   TO ADD A NEW PERFUME:
   1. Copy one whole { ... } block below, paste it before the
      closing bracket "]" at the bottom.
   2. Change every field (see comments on each line).
   3. Upload your images to /images/products/ using the same
      file names you type into the "images" list below.

   TO REMOVE A PERFUME:
   Just delete its whole { ... } block (and its comma).
   ============================================================ */

const CELURES_PRODUCTS = [
  {
    slug: "phantom-elixir",                 // used in the URL: product.html?slug=phantom-elixir
    name: "Phantom Elixir",
    inspiredBy: "Inspired by Dior Sauvage Elixir",
    price: 890,                              // main price (30ml)
    addonPrice: 490,                         // price when added as an add-on from another product page
    tagline: "Bold, warm, unforgettable.",
    description: "Grapefruit, cinnamon, cardamom and nutmeg open sharp and spiced, before a lavender heart settles into sweet licorice, sandalwood, amber and patchouli. Rich, warm and long-lasting — this is the one you wear when you want to be remembered.",
    notes: {
      top: "Grapefruit, Cinnamon, Cardamom, Nutmeg",
      middle: "Lavender",
      base: "Licorice, Sandalwood, Amber, Patchouli"
    },
    images: [
      "images/products/phantom-elixir-1.webp",
      "images/products/phantom-elixir-2.webp",
      "images/products/phantom-elixir-3.webp"
    ]
  },
  {
    slug: "executive-bleu",
    name: "Executive Bleu",
    inspiredBy: "Inspired by Bleu de Chanel",
    price: 890,
    addonPrice: 490,
    tagline: "Clean. Sharp. Boardroom to dinner.",
    description: "Crisp grapefruit, lemon and mint open into ginger and jasmine, resting on a smooth base of cedar, sandalwood and musk. A versatile everyday classic that works from the office to date night.",
    notes: {
      top: "Grapefruit, Lemon, Mint",
      middle: "Ginger, Jasmine",
      base: "Cedar, Sandalwood, Musk"
    },
    images: [
      "images/products/executive-bleu-1.webp",
      "images/products/executive-bleu-2.webp"
    ]
  },
  {
    slug: "sport-homme",
    name: "Sport Homme",
    inspiredBy: "Inspired by Chanel Allure Homme Sport",
    price: 890,
    addonPrice: 490,
    tagline: "Fresh, athletic, effortless.",
    description: "Juicy orange and mandarin with a splash of sea notes open into a peppery-cedar heart, resting on a soft vanilla-tonka-musk base. Fresh, energetic, and easy to wear all day.",
    notes: {
      top: "Orange, Sea Notes, Mandarin",
      middle: "Pepper, Cedar, Neroli",
      base: "Vanilla, Tonka Bean, Musk"
    },
    images: [
      "images/products/sport-homme-1.webp",
      "images/products/sport-homme-2.webp"
    ]
  },
  {
    slug: "marine-cucumber",
    name: "Marine Cucumber",
    inspiredBy: "Inspired by Nautica Voyage",
    price: 890,
    addonPrice: 490,
    tagline: "Breezy. Fresh. Made for summer.",
    description: "Green apple and crisp leaves open bright and clean, into a watery lotus-mimosa heart, resting on cedar, musk and amber. A breezy, cucumber-fresh signature for hot Dhaka afternoons.",
    notes: {
      top: "Green Apple, Green Leaves",
      middle: "Lotus, Mimosa",
      base: "Cedar, Musk, Amber"
    },
    images: [
      "images/products/marine-cucumber-1.webp",
      "images/products/marine-cucumber-2.webp"
    ]
  },
  {
    slug: "pure-aura",
    name: "Pure Aura",
    inspiredBy: "Inspired by YSL MYSELF",
    price: 890,
    addonPrice: 490,
    tagline: "Modern, floral, effortlessly clean.",
    description: "Sparkling bergamot opens into a rich orange blossom heart, grounded by warm patchouli and soft musky woods. A modern, easy-to-wear scent that gets noticed without trying too hard.",
    notes: {
      top: "Bergamot",
      middle: "Orange Blossom",
      base: "Patchouli, Musky Woods"
    },
    images: [
      "images/products/pure-aura-1.webp",
      "images/products/pure-aura-2.webp"
    ]
  },
  {
    slug: "alpha-executive",
    name: "Alpha Executive",
    inspiredBy: "Inspired by YSL Y",
    price: 890,
    addonPrice: 490,
    tagline: "Confident, sharp, long-lasting.",
    description: "Green apple, ginger and bergamot open into an aromatic sage and geranium heart, deepening into cedar, vetiver, tonka bean and amberwood. Sharp, confident, and built to last the whole day.",
    notes: {
      top: "Apple, Ginger, Bergamot",
      middle: "Sage, Geranium",
      base: "Cedar, Vetiver, Tonka Bean, Amberwood"
    },
    images: [
      "images/products/alpha-executive-1.webp",
      "images/products/alpha-executive-2.webp"
    ]
  },
  {
    slug: "midnight-drive",
    name: "Midnight Drive",
    inspiredBy: "Inspired by Jean Paul Gaultier Ultra Male",
    price: 890,
    addonPrice: 490,
    tagline: "Sweet, seductive, made for the night.",
    description: "Juicy pear, lavender and mint open into warm cinnamon and clary sage, resting on black vanilla, amber and patchouli. Sweet, seductive, and built for nights out.",
    notes: {
      top: "Pear, Lavender, Mint",
      middle: "Cinnamon, Clary Sage",
      base: "Black Vanilla, Amber, Patchouli"
    },
    images: [
      "images/products/midnight-drive-1.webp",
      "images/products/midnight-drive-2.webp"
    ]
  },
  {
    slug: "tropical-island",
    name: "Tropical Island",
    inspiredBy: "Inspired by JPG Le Beau Paradise Garden",
    price: 890,
    addonPrice: 490,
    tagline: "Tropical, creamy, beach-ready.",
    description: "Zesty bergamot opens fresh and bright, into a creamy coconut heart, settling on smooth tonka bean. A tropical, beach-ready signature that feels like a holiday in a bottle.",
    notes: {
      top: "Bergamot",
      middle: "Coconut",
      base: "Tonka Bean"
    },
    images: [
      "images/products/tropical-island-1.webp",
      "images/products/tropical-island-2.webp"
    ]
  },
  {
    slug: "arctic-splash",
    name: "Arctic Splash",
    inspiredBy: "Inspired by Davidoff Cool Water",
    price: 890,
    addonPrice: 490,
    tagline: "The original clean aquatic classic.",
    description: "Sea water, mint and lavender open crisp and cool, into a heart of geranium, jasmine and neroli, resting on cedar, musk and light amber. The clean aquatic classic that started it all.",
    notes: {
      top: "Sea Water, Mint, Lavender",
      middle: "Geranium, Jasmine, Neroli",
      base: "Cedar, Musk, Amber"
    },
    images: [
      "images/products/arctic-splash-1.webp",
      "images/products/arctic-splash-2.webp"
    ]
  }
];

/* ============================================================
   CELURES — COMBOS
   Each combo bundles 2 specific perfumes at a fixed price.
   Same editing rules as CELURES_PRODUCTS above: copy a block to
   add one, delete a block to remove one. perfume1Slug/perfume2Slug
   must match a real "slug" from CELURES_PRODUCTS above.
   ============================================================ */
const CELURES_COMBOS = [
  {
    slug: "mens-legacy",
    name: "Men's Legacy Combo",
    price: 1380,
    perfume1Slug: "executive-bleu",
    perfume2Slug: "phantom-elixir",
    tagline: "Sharp by day, bold by night.",
    description: "A two-perfume set built for range — Executive Bleu's clean, boardroom-ready freshness for the day, and Phantom Elixir's warm, unforgettable intensity for the night.",
    images: [
      "images/combos/mens-legacy-1.webp",
      "images/combos/mens-legacy-2.webp"
    ]
  },
  {
    slug: "summer-for-men",
    name: "Summer For Men Combo",
    price: 1380,
    perfume1Slug: "executive-bleu",
    perfume2Slug: "arctic-splash",
    tagline: "Two fresh signatures for hot days.",
    description: "Executive Bleu's crisp citrus-cedar freshness paired with Arctic Splash's clean aquatic coolness — a combo built entirely around freshness for Dhaka's summer heat.",
    images: [
      "images/combos/summer-for-men-1.webp",
      "images/combos/summer-for-men-2.webp"
    ]
  },
  {
    slug: "executive-combo",
    name: "Executive Combo",
    price: 1380,
    perfume1Slug: "executive-bleu",
    perfume2Slug: "alpha-executive",
    tagline: "Confidence, covered from every angle.",
    description: "Two sharp, boardroom-ready signatures in one set — Executive Bleu's clean classic freshness and Alpha Executive's confident, long-lasting depth.",
    images: [
      "images/combos/executive-combo-1.webp",
      "images/combos/executive-combo-2.webp"
    ]
  },
  {
    slug: "dating-for-men",
    name: "Dating For Men Combo",
    price: 1380,
    perfume1Slug: "midnight-drive",
    perfume2Slug: "tropical-island",
    tagline: "Seductive nights, easy days.",
    description: "Midnight Drive's warm, seductive intensity for date nights, paired with Tropical Island's creamy, easygoing freshness for daytime dates.",
    images: [
      "images/combos/dating-for-men-1.webp",
      "images/combos/dating-for-men-2.webp"
    ]
  },
  {
    slug: "mens-outdoor",
    name: "Men's Outdoor Combo",
    price: 1380,
    perfume1Slug: "sport-homme",
    perfume2Slug: "marine-cucumber",
    tagline: "Fresh, athletic, built to move.",
    description: "Two energetic, fresh signatures made for an active lifestyle — Sport Homme's citrus-peppery energy and Marine Cucumber's breezy, cucumber-fresh coolness.",
    images: [
      "images/combos/mens-outdoor-1.webp",
      "images/combos/mens-outdoor-2.webp"
    ]
  },
  {
    slug: "compliment-magnet",
    name: "Compliment Magnet Combo",
    price: 1380,
    perfume1Slug: "pure-aura",
    perfume2Slug: "sport-homme",
    tagline: "The two most complimented scents, together.",
    description: "Pure Aura's modern floral warmth paired with Sport Homme's fresh, energetic edge — two of our most complimented signatures in one set.",
    images: [
      "images/combos/compliment-magnet-1.webp",
      "images/combos/compliment-magnet-2.webp"
    ]
  }
];

/* Helper: find a combo by its slug */
function getComboBySlug(slug) {
  return CELURES_COMBOS.find(c => c.slug === slug);
}

/* Helper: works for EITHER a perfume slug or a combo slug. Returns:
   - ownPrice: the price this item is meant to be added at as a "main" pick
     (890 for a perfume, 1380 for a combo) — used to gate ৳490 add-ons.
   - regularReference: what it would cost bought piece-by-piece at full
     price (890 for a perfume, 890+890=1780 for a combo) — used to show
     the "Normal Price" / discount breakdown at checkout. */
function getItemBySlug(slug) {
  const product = getProductBySlug(slug);
  if (product) {
    return { type: "product", item: product, ownPrice: product.price, regularReference: product.price };
  }
  const combo = getComboBySlug(slug);
  if (combo) {
    const p1 = getProductBySlug(combo.perfume1Slug);
    const p2 = getProductBySlug(combo.perfume2Slug);
    const regularReference = (p1 ? p1.price : 0) + (p2 ? p2.price : 0);
    return { type: "combo", item: combo, ownPrice: combo.price, regularReference: regularReference };
  }
  return null;
}

/* Delivery & free-delivery threshold — used by checkout.html and thank-you.html */
const CELURES_DELIVERY = {
  insideDhaka: 70,
  outsideDhaka: 110,
  freeDeliveryThreshold: 1500
};

/* Meta Pixel ID — used by every page */
const CELURES_PIXEL_ID = "1517308272696814";

/* Helper: find a product by its slug */
function getProductBySlug(slug) {
  return CELURES_PRODUCTS.find(p => p.slug === slug);
}
