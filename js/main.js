/* ============================================================
   CELURES — SHARED UI BEHAVIOR
   Hamburger menu, toast messages, and the 64-district list used
   by the searchable dropdown on the checkout page.
   ============================================================ */

function initNavDrawer() {
  const openBtn = document.querySelector(".hamburger-btn");
  const drawer = document.querySelector(".nav-drawer");
  const closeBtn = document.querySelector(".nav-drawer-close");
  const overlay = document.querySelector(".nav-drawer-overlay");
  if (!openBtn || !drawer) return;
  const open = () => drawer.classList.add("open");
  const close = () => drawer.classList.remove("open");
  openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (overlay) overlay.addEventListener("click", close);
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__celuresToastTimer);
  window.__celuresToastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.addEventListener("DOMContentLoaded", initNavDrawer);

function initCombosNav() {
  if (typeof CELURES_COMBOS === "undefined") return;
  const menu = document.getElementById("nav-combos-menu");
  const drawerList = document.getElementById("nav-drawer-combos");
  const linksHTML = CELURES_COMBOS.map(function (c) {
    return '<a href="combo.html?slug=' + c.slug + '">' + c.name + '</a>';
  }).join("");
  if (menu) menu.innerHTML = linksHTML;
  if (drawerList) drawerList.innerHTML = linksHTML;
}
document.addEventListener("DOMContentLoaded", initCombosNav);

/* All 64 districts of Bangladesh, alphabetically. Used on checkout.html. */
const BD_DISTRICTS = [
  "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogura",
  "Brahmanbaria", "Chandpur", "Chapainawabganj", "Chattogram", "Chuadanga",
  "Cox's Bazar", "Cumilla", "Dhaka", "Dinajpur", "Faridpur", "Feni",
  "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore",
  "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachhari", "Khulna",
  "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat",
  "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar",
  "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj",
  "Narsingdi", "Natore", "Netrokona", "Nilphamari", "Noakhali",
  "Pabna", "Panchagarh", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi",
  "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur",
  "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
];
