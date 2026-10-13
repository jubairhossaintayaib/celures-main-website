/* ============================================================
   CELURES ADMIN — SUPABASE CONNECTION
   Fill in these two values from Supabase → Project Settings → API.
   Use the "Project URL" and the "anon public" key — never the
   "service_role" key (that one must stay secret, server-side only).
   ============================================================ */

const SUPABASE_URL = "https://ilxhvchbyhvzylpadprh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlseGh2Y2hieWh2enlscGFkcHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NjcwMjEsImV4cCI6MjEwMDA0MzAyMX0.szmKreFfffeHy6xTjYooDEg7pwmK99b4C_VdACw7aT0";

/* Some mobile networks in Bangladesh cannot reach *.supabase.co directly,
   which made every order fail on those phones. So every request goes to
   celures.com/sb/... first — vercel.json forwards that path to Supabase —
   and only falls back to the direct address if that route is unavailable
   (for example on localhost, where there is no Vercel in front). */
const SUPABASE_PROXY_PATH = "/sb";

function celuresSupabaseFetch(input, init) {
  const url = (typeof input === "string" || input instanceof URL) ? String(input) : "";
  const isLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || location.protocol === "file:";
  if (isLocal || url.indexOf(SUPABASE_URL) !== 0) return fetch(input, init);

  const proxied = SUPABASE_PROXY_PATH + url.slice(SUPABASE_URL.length);
  return fetch(proxied, Object.assign({}, init, { credentials: "omit" })).then(function (res) {
    /* Supabase always answers errors in JSON, so a non-JSON 404/405/50x
       means the celures.com route itself is missing or down. */
    const type = res.headers.get("content-type") || "";
    const routeDown = (res.status === 404 || res.status === 405 || res.status >= 502) && type.indexOf("json") === -1;
    return routeDown ? fetch(input, init) : res;
  }, function () {
    return fetch(input, init);
  });
}

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  global: { fetch: celuresSupabaseFetch }
});
