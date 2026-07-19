/* ============================================================
   CELURES ADMIN — CREATE STAFF USER (Supabase Edge Function)

   This is what makes the "Add Team Member" form on admin/team.html
   actually work. It runs on Supabase's servers (not in the browser),
   which is the only safe place to create new logins.

   ⚠️ ONE-TIME SETUP — deploy this from the Supabase dashboard,
   no command line needed:

   1. In Supabase, go to Edge Functions (left sidebar).
   2. Click "Deploy a new function" (or "Create a function").
   3. Name it exactly:  create-staff-user
   4. It'll open a code editor — delete whatever's there, and paste
      this ENTIRE file in.
   5. Click Deploy.

   That's it — no extra secrets to configure. Supabase automatically
   gives every Edge Function access to SUPABASE_URL, SUPABASE_ANON_KEY,
   and SUPABASE_SERVICE_ROLE_KEY behind the scenes; you never see or
   copy the service_role key yourself, which is what keeps this safe.

   If you ever need to update this file's code later, just edit it
   again in the Edge Functions section and click Deploy again.
   ============================================================ */

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Not logged in." }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    // Client that acts AS the person calling this — used only to find out who they are.
    const callerClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user: caller } } = await callerClient.auth.getUser();
    if (!caller) {
      return new Response(JSON.stringify({ error: "Not logged in." }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Privileged client — only this function ever holds this key.
    const adminClient = createClient(supabaseUrl, serviceRoleKey);

    // Confirm the caller is actually an admin before doing anything.
    const { data: callerStaff } = await adminClient
      .from("staff")
      .select("role")
      .eq("id", caller.id)
      .maybeSingle();

    if (!callerStaff || callerStaff.role !== "admin") {
      return new Response(JSON.stringify({ error: "Only admins can add team members." }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new Response(JSON.stringify({ error: "Missing email, password, or role." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (password.length < 6) {
      return new Response(JSON.stringify({ error: "Password must be at least 6 characters." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (role !== "admin" && role !== "staff") {
      return new Response(JSON.stringify({ error: "Role must be admin or staff." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create the login. email_confirm: true means no confirmation
    // email gets sent — they can log in immediately with what you set.
    const { data: newUser, error: createError } = await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createError) {
      return new Response(JSON.stringify({ error: createError.message }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { error: staffError } = await adminClient
      .from("staff")
      .insert({ id: newUser.user.id, email, role });

    if (staffError) {
      return new Response(JSON.stringify({ error: staffError.message }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message || "Unexpected error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
