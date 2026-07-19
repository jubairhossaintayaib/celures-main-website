/* ============================================================
   CELURES ADMIN — BANGLADESH TIME HELPERS
   The business runs on Bangladesh time (UTC+6, no daylight saving),
   regardless of what timezone a staff member's own phone/laptop is
   set to. Every "today", "yesterday", and the 8 PM dispatch cutoff
   is computed from a fixed +6:00 offset here — never from the
   browser's local clock — so it's correct for everyone, everywhere.
   ============================================================ */

const BD_OFFSET_MS = 6 * 60 * 60 * 1000;

/* The current moment as Bangladesh wall-clock time. Read it back
   using the UTC getters (.getUTCHours(), .getUTCDate(), etc) —
   NOT .getHours()/.getDate(), which would re-apply the browser's
   own timezone on top and give the wrong answer. */
function bdNow() {
  return new Date(Date.now() + BD_OFFSET_MS);
}

/* "YYYY-MM-DD" for today in Bangladesh, optionally offset by a
   number of days — e.g. bdDateString(-1) is yesterday in Dhaka. */
function bdDateString(offsetDays) {
  const shifted = new Date(Date.now() + BD_OFFSET_MS + (offsetDays || 0) * 86400000);
  const y = shifted.getUTCFullYear();
  const m = String(shifted.getUTCMonth() + 1).padStart(2, '0');
  const d = String(shifted.getUTCDate()).padStart(2, '0');
  return y + '-' + m + '-' + d;
}

/* Adds `days` (can be negative) to a "YYYY-MM-DD" string, correctly
   rolling over months/years. */
function addDaysToDateString(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/* The exact UTC instant of midnight at the START of a given
   Bangladesh calendar day — use this as the lower bound when
   filtering a timestamptz column (created_at, cancelled_at) by
   Bangladesh calendar day. */
function bdMidnightUTC(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d) - BD_OFFSET_MS).toISOString();
}

/* Business rule: an order confirmed before 8 PM Bangladesh time is
   scheduled to go out the same day; at or after 8 PM, the next day.
   Used to auto-fill Dispatch Date the moment "Confirmed" is toggled on. */
function suggestedDispatchDate() {
  const hour = bdNow().getUTCHours();
  return hour < 20 ? bdDateString(0) : bdDateString(1);
}

/* Sunday-start "this week" range, in Bangladesh calendar terms. */
function bdWeekStart() {
  const dayOfWeek = bdNow().getUTCDay(); // 0 = Sunday
  return bdDateString(-dayOfWeek);
}
