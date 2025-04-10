// lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Creates a Supabase client for the server — used in server components or actions.
 * This version is compatible with cookies() returning a Promise.
 */
export async function createClient() {
  const cookieStore = await cookies(); // ✅ Await to get the actual object

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(), // ✅ Now safe
        setAll: (cookiesToSet) => {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // It's fine to fail silently on set (in some server environments)
          }
        },
      },
    }
  );
}
