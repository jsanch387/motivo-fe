"use client"; // Required to run hooks and browser logic

import { useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr"; // Used to access Supabase from the browser
import { useAuthStore } from "./store/useAuthStore"; // Global store to track if user is logged in

export default function AuthInitializer() {
  // Get functions from our auth store to update user state
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  useEffect(() => {
    // 1. Create a Supabase client to talk to the backend from the browser
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // 2. Immediately ask Supabase: "Who is the current user?"
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        // ✅ User is logged in → store them globally
        setUser(data.user);
      } else {
        // ❌ No user found → clear any old user state
        clearUser();
      }
    });

    // 3. Listen for login/logout changes in real-time
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          // 🔑 Someone logged in → save the user
          setUser(session.user);
        } else {
          // 🔒 Someone logged out → clear the user
          clearUser();
        }
      }
    );

    // 4. Cleanup: if this component unmounts, stop listening
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [setUser, clearUser]);

  // 🔇 This component doesn’t render anything visible
  return null;
}
