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
    addonPrice: 480,                         // price when added as an add-on from another product page
    tagline: "Bold, warm, unforgettable.",
    description: "Grapefruit, cinnamon, cardamom and nutmeg open sharp and spiced, before a lavender heart settles into sweet licorice, sandalwood, amber and patchouli. Rich, warm and long-lasting — this is the one you wear when you want to be remembered.",
    notes: {
      top: "Grapefruit, Cinnamon, Cardamom, Nutmeg",
      middle: "Lavender",
      base: "Licorice, Sandalwood, Amber, Patchouli"
    },
    images: [
      "images/products/phantom-elixir-1.jpg",
      "images/products/phantom-elixir-2.jpg",
      "images/products/phantom-elixir-3.jpg"
    ]
  },
  {
    slug: "executive-bleu",
    name: "Executive Bleu",
    inspiredBy: "Inspired by Bleu de Chanel",
    price: 890,
    addonPrice: 480,
    tagline: "Clean. Sharp. Boardroom to dinner.",
    description: "Crisp grapefruit, lemon and mint open into ginger and jasmine, resting on a smooth base of cedar, sandalwood and musk. A versatile everyday classic that works from the office to date night.",
    notes: {
      top: "Grapefruit, Lemon, Mint",
      middle: "Ginger, Jasmine",
      base: "Cedar, Sandalwood, Musk"
    },
    images: [
      "images/products/executive-bleu-1.jpg",
      "images/products/executive-bleu-2.jpg"
    ]
  },
  {
    slug: "sport-homme",
    name: "Sport Homme",
    inspiredBy: "Inspired by Chanel Allure Homme Sport",
    price: 890,
    addonPrice: 480,
    tagline: "Fresh, athletic, effortless.",
    description: "Juicy orange and mandarin with a splash of sea notes open into a peppery-cedar heart, resting on a soft vanilla-tonka-musk base. Fresh, energetic, and easy to wear all day.",
    notes: {
      top: "Orange, Sea Notes, Mandarin",
      middle: "Pepper, Cedar, Neroli",
      base: "Vanilla, Tonka Bean, Musk"
    },
    images: [
      "images/products/sport-homme-1.jpg",
      "images/products/sport-homme-2.jpg"
    ]
  },
  {
    slug: "marine-cucumber",
    name: "Marine Cucumber",
    inspiredBy: "Inspired by Nautica Voyage",
    price: 890,
    addonPrice: 480,
    tagline: "Breezy. Fresh. Made for summer.",
    description: "Green apple and crisp leaves open bright and clean, into a watery lotus-mimosa heart, resting on cedar, musk and amber. A breezy, cucumber-fresh signature for hot Dhaka afternoons.",
    notes: {
      top: "Green Apple, Green Leaves",
      middle: "Lotus, Mimosa",
      base: "Cedar, Musk, Amber"
    },
    images: [
      "images/products/marine-cucumber-1.jpg",
      "images/products/marine-cucumber-2.jpg"
    ]
  },
  {
    slug: "pure-aura",
    name: "Pure Aura",
    inspiredBy: "Inspired by YSL MYSELF",
    price: 890,
    addonPrice: 480,
    tagline: "Modern, floral, effortlessly clean.",
    description: "Sparkling bergamot opens into a rich orange blossom heart, grounded by warm patchouli and soft musky woods. A modern, easy-to-wear scent that gets noticed without trying too hard.",
    notes: {
      top: "Bergamot",
      middle: "Orange Blossom",
      base: "Patchouli, Musky Woods"
    },
    images: [
      "images/products/pure-aura-1.jpg",
      "images/products/pure-aura-2.jpg"
    ]
  },
  {
    slug: "alpha-executive",
    name: "Alpha Executive",
    inspiredBy: "Inspired by YSL Y",
    price: 890,
    addonPrice: 480,
    tagline: "Confident, sharp, long-lasting.",
    description: "Green apple, ginger and bergamot open into an aromatic sage and geranium heart, deepening into cedar, vetiver, tonka bean and amberwood. Sharp, confident, and built to last the whole day.",
    notes: {
      top: "Apple, Ginger, Bergamot",
      middle: "Sage, Geranium",
      base: "Cedar, Vetiver, Tonka Bean, Amberwood"
    },
    images: [
      "images/products/alpha-executive-1.jpg",
      "images/products/alpha-executive-2.jpg"
    ]
  },
  {
    slug: "midnight-drive",
    name: "Midnight Drive",
    inspiredBy: "Inspired by Jean Paul Gaultier Ultra Male",
    price: 890,
    addonPrice: 480,
    tagline: "Sweet, seductive, made for the night.",
    description: "Juicy pear, lavender and mint open into warm cinnamon and clary sage, resting on black vanilla, amber and patchouli. Sweet, seductive, and built for nights out.",
    notes: {
      top: "Pear, Lavender, Mint",
      middle: "Cinnamon, Clary Sage",
      base: "Black Vanilla, Amber, Patchouli"
    },
    images: [
      "images/products/midnight-drive-1.jpg",
      "images/products/midnight-drive-2.jpg"
    ]
  },
  {
    slug: "tropical-garden",
    name: "Tropical Garden",
    inspiredBy: "Inspired by Jean Paul Gaultier Le Beau",
    price: 890,
    addonPrice: 480,
    tagline: "Tropical, creamy, beach-ready.",
    description: "Zesty bergamot opens fresh and bright, into a creamy coconut heart, settling on smooth tonka bean. A tropical, beach-ready signature that feels like a holiday in a bottle.",
    notes: {
      top: "Bergamot",
      middle: "Coconut",
      base: "Tonka Bean"
    },
    images: [
      "images/products/tropical-garden-1.jpg",
      "images/products/tropical-garden-2.jpg"
    ]
  },
  {
    slug: "arctic-splash",
    name: "Arctic Splash",
    inspiredBy: "Inspired by Davidoff Cool Water",
    price: 890,
    addonPrice: 480,
    tagline: "The original clean aquatic classic.",
    description: "Sea water, mint and lavender open crisp and cool, into a heart of geranium, jasmine and neroli, resting on cedar, musk and light amber. The clean aquatic classic that started it all.",
    notes: {
      top: "Sea Water, Mint, Lavender",
      middle: "Geranium, Jasmine, Neroli",
      base: "Cedar, Musk, Amber"
    },
    images: [
      "images/products/arctic-splash-1.jpg",
      "images/products/arctic-splash-2.jpg"
    ]
  }
];

/* Delivery & free-delivery threshold — used by checkout.html and thank-you.html */
const CELURES_DELIVERY = {
  insideDhaka: 70,
  outsideDhaka: 110,
  freeDeliveryThreshold: 2000
};

/* Meta Pixel ID — used by every page */
const CELURES_PIXEL_ID = "1517308272696814";

/* Helper: find a product by its slug */
function getProductBySlug(slug) {
  return CELURES_PRODUCTS.find(p => p.slug === slug);
}
