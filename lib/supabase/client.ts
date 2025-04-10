// lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";

// ✅ Supabase browser client (used across all client-side calls)
const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * Get the current user's access token from Supabase (for client-side use).
 */
export async function getAccessToken() {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.warn("❌ Error fetching session:", error.message);
      return null;
    }

    if (!data.session) {
      console.warn("ℹ️ No active session found.");
      return null;
    }

    return data.session.access_token;
  } catch (unexpectedError) {
    console.error(
      "⚠️ Unexpected error fetching access token:",
      unexpectedError
    );
    return null;
  }
}

/**
 * 🔐 Sign up a new user with email + password.
 */
export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

/**
 * 🔑 Sign in an existing user with email + password.
 */
export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

/**
 * 🚪 Log out the current user.
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();
  return error;
}

export async function createUserProfile(userId: string, email: string) {
  const { error } = await supabase.from("profiles").insert({
    id: userId,
    email,
  });

  return { error };
}
