/* ============================================================
   CELURES ADMIN — AUTH GUARD
   Shared login/role checking used by orders.html, dispatch.html,
   and reports.html. Every protected page calls requireStaff() (or
   requireAdmin() for admin-only pages) before showing anything.
   ============================================================ */

/* Redirects to login.html if not logged in, or if logged in but
   not in the staff table. Returns the staff row {id, email, role}
   on success — use this to know the current user's role. */
async function requireStaff() {
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
      window.location.href = "login.html";
      return null;
    }
    const { data: staffRow, error } = await supabaseClient
      .from("staff")
      .select("*")
      .eq("id", session.user.id)
      .maybeSingle();

    if (error || !staffRow) {
      await supabaseClient.auth.signOut();
      window.location.href = "login.html?denied=1";
      return null;
    }
    return staffRow;
  } catch (e) {
    showAuthGuardError(e);
    return null;
  }
}

/* If something breaks unexpectedly (bad Supabase config, network
   issue, etc.) show a real error instead of hanging on "Checking
   access..." forever. */
function showAuthGuardError(e) {
  console.error("Celures admin — auth check failed:", e);
  const gate = document.getElementById("admin-loading-gate");
  if (gate) {
    gate.innerHTML =
      '<div style="text-align:center;max-width:320px;">' +
        '<div style="font-weight:700;margin-bottom:8px;">Couldn\'t connect</div>' +
        '<div style="font-size:13px;">Something\'s wrong with the connection to Supabase. Check js/supabase-config.js has the right URL and key, then reload.</div>' +
      '</div>';
  }
}

/* Same as requireStaff(), but also kicks non-admins back to
   orders.html — use this on reports.html only. */
async function requireAdmin() {
  const staffRow = await requireStaff();
  if (!staffRow) return null;
  if (staffRow.role !== "admin") {
    window.location.href = "orders.html";
    return null;
  }
  return staffRow;
}

async function adminLogout() {
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}
