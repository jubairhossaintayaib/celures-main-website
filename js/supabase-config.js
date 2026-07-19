/* ============================================================
   CELURES ADMIN — SUPABASE CONNECTION
   Fill in these two values from Supabase → Project Settings → API.
   Use the "Project URL" and the "anon public" key — never the
   "service_role" key (that one must stay secret, server-side only).
   ============================================================ */

const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY_HERE";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
