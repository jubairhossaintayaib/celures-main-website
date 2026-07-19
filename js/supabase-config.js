/* ============================================================
   CELURES ADMIN — SUPABASE CONNECTION
   Fill in these two values from Supabase → Project Settings → API.
   Use the "Project URL" and the "anon public" key — never the
   "service_role" key (that one must stay secret, server-side only).
   ============================================================ */

const SUPABASE_URL = "https://ilxhvchbyhvzylpadprh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlseGh2Y2hieWh2enlscGFkcHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NjcwMjEsImV4cCI6MjEwMDA0MzAyMX0.szmKreFfffeHy6xTjYooDEg7pwmK99b4C_VdACw7aT0";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
