"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

import { signUpWithEmail, createUserProfile } from "@/lib/supabase/client"; // 🔥 Make sure both are exported
import TextInput from "@/app/components/ui/TextInput";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";

export default function SignupForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirm) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { data, error } = await signUpWithEmail(email, password);

    if (error || !data?.user) {
      setErrorMsg(error?.message || "Signup failed.");
      setLoading(false);
      return;
    }

    // ✨ Create profile right after signup
    const { error: profileError } = await createUserProfile(
      data.user.id,
      email
    );

    if (profileError) {
      setErrorMsg("Something went wrong setting up your account.");
      setLoading(false);
      return;
    }

    // ✅ All good
    router.push("/dashboard");
    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md px-6 py-8 sm:px-8 sm:py-10">
      <div className="mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Create Your Account
        </h1>
        <p className="text-sm sm:text-base text-gray-400">
          Start your journey with us
        </p>
      </div>

      <form onSubmit={handleSignup} className="space-y-6">
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          error="Email is required"
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          error="Password is required"
        />
        <TextInput
          label="Confirm Password"
          name="confirm"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="••••••••"
          required
          error="Confirmation is required"
        />

        {errorMsg && (
          <div className="border border-red-600 text-white bg-zinc-900/70 text-sm px-4 py-3 rounded-lg flex items-center gap-3">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
            <span>{errorMsg}</span>
          </div>
        )}

        <Button className="w-full" type="primary" size="md" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
      </form>

      <p className="text-sm text-center mt-6 text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-500 hover:underline font-medium"
        >
          Log in
        </Link>
      </p>
    </Card>
  );
}
