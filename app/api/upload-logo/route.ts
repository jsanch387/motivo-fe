export const runtime = "nodejs"; // ✅ Force Node.js runtime (not Edge)

import { NextRequest, NextResponse } from "next/server";
import { uploadLogoBufferToStorage } from "@/lib/supabase/uploadLogoToStorage";
import { createClient } from "@/lib/supabase/server"; // ✅ Your Supabase server client

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { base64 } = body;

    if (!base64 || typeof base64 !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid base64 string" },
        { status: 400 }
      );
    }

    const parts = base64.split(",");
    if (parts.length !== 2 || !parts[1]) {
      return NextResponse.json(
        { error: "Invalid base64 format" },
        { status: 400 }
      );
    }

    // ✅ Get the Supabase user from server auth
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const buffer = Buffer.from(parts[1], "base64");
    const url = await uploadLogoBufferToStorage(user.id, buffer);

    return NextResponse.json({ url });
  } catch (err) {
    console.error("❌ Upload error:", err);
    return NextResponse.json(
      { error: "Failed to upload logo" },
      { status: 500 }
    );
  }
}
