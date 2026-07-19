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
