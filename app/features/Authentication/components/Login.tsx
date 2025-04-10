"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { signInWithEmail } from "@/lib/supabase/client";
import TextInput from "@/app/components/ui/TextInput";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    const { error } = await signInWithEmail(email, password);

    if (error) {
      setErrorMsg(error.message || "Login failed. Please try again.");
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  return (
    <Card className="w-full max-w-md px-6 py-8 sm:px-8 sm:py-10">
      <div className="mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-sm sm:text-base text-gray-400">Log in to continue</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
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

        {errorMsg && (
          <div className="border border-red-600 text-white bg-zinc-900/70 text-sm px-4 py-3 rounded-lg flex items-center gap-3">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
            <span>{errorMsg}</span>
          </div>
        )}

        <Button className="w-full" type="primary" size="md" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>

      <p className="text-sm text-center mt-6 text-gray-400">
        Don’t have an account?{" "}
        <Link
          href="/signup"
          className="text-blue-500 hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </Card>
  );
}
