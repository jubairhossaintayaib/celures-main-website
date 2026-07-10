/* ============================================================
   CELURES — CART LOGIC (shared across every page)
   Cart is stored in the browser's localStorage under "celures_cart".
   Each line item looks like:
   { key, slug, name, unitPrice, qty, tag }
   "key" = slug + "-" + unitPrice, so the same perfume bought as
   the page's main pick (৳890) and as an add-on (৳480) elsewhere
   are tracked as separate, clearly-priced lines.
   ============================================================ */

const CART_STORAGE_KEY = "celures_cart";

function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

/* Add one unit of a product to the cart (or increment if it already exists at this price tier) */
function cartAdd(slug, unitPrice, tag) {
  const product = getProductBySlug(slug);
  if (!product) return;
  const cart = getCart();
  const key = slug + "-" + unitPrice;
  const existing = cart.find(l => l.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key: key,
      slug: slug,
      name: product.name,
      unitPrice: unitPrice,
      qty: 1,
      tag: tag || ""
    });
  }
  saveCart(cart);
}

/* Remove one unit; deletes the line entirely once qty hits 0 */
function cartRemoveOne(key) {
  let cart = getCart();
  const line = cart.find(l => l.key === key);
  if (!line) return;
  line.qty -= 1;
  if (line.qty <= 0) {
    cart = cart.filter(l => l.key !== key);
  }
  saveCart(cart);
}

/* Delete a line completely regardless of quantity */
function cartRemoveLine(key) {
  const cart = getCart().filter(l => l.key !== key);
  saveCart(cart);
}

function cartGetQty(slug, unitPrice) {
  const cart = getCart();
  const key = slug + "-" + unitPrice;
  const line = cart.find(l => l.key === key);
  return line ? line.qty : 0;
}

function cartGetTotal() {
  return getCart().reduce((sum, l) => sum + (l.unitPrice * l.qty), 0);
}

function cartGetCount() {
  return getCart().reduce((sum, l) => sum + l.qty, 0);
}

/* Business rule: the ৳480 add-on price is only allowed once at least one
   perfume has been added at its full regular price (৳890) — otherwise
   someone could check out with only discounted add-ons and no "main" pick. */
function cartHasMainItem() {
  return getCart().some(function (line) {
    var product = getProductBySlug(line.slug);
    return product && line.unitPrice === product.price;
  });
}

function cartClear() {
  localStorage.removeItem(CART_STORAGE_KEY);
  updateCartBadge();
}

/* District → delivery charge. Any district containing "Dhaka" (but not "Dhaka" nearby
   districts like Gazipur, which are NOT the same) is treated as Inside Dhaka.
   We match on the exact district name "Dhaka" from the dropdown list. */
function isInsideDhaka(districtName) {
  return (districtName || "").trim().toLowerCase() === "dhaka";
}

function calculateDelivery(subtotal, districtName) {
  if (subtotal >= CELURES_DELIVERY.freeDeliveryThreshold) return 0;
  return isInsideDhaka(districtName) ? CELURES_DELIVERY.insideDhaka : CELURES_DELIVERY.outsideDhaka;
}

/* Updates every cart-count badge on the page (there may be one in desktop nav, one in mobile) */
function updateCartBadge() {
  const count = cartGetCount();
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadge);

/* Fix for the browser's back/forward cache (bfcache): when you navigate
   back to a page, some browsers restore the exact old snapshot instead
   of re-running scripts — so the cart badge and buttons can show stale
   data. This forces every page to re-check the real cart state whenever
   it's restored this way. */
window.addEventListener("pageshow", function (e) {
  if (e.persisted) updateCartBadge();
});
