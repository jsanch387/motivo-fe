import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/lib/supabase/server";

export async function uploadLogoBufferToStorage(
  userId: string,
  buffer: Buffer
): Promise<string> {
  const supabase = await createClient(); // Server-side Supabase client

  const filePath = `${userId}/${uuidv4()}.png`; // ✅ CORRECT path now

  const { error } = await supabase.storage
    .from("logos")
    .upload(filePath, buffer, {
      contentType: "image/png",
      upsert: true,
    });

  if (error) {
    throw new Error(`Failed to upload logo: ${error.message}`);
  }

  const { data } = supabase.storage.from("logos").getPublicUrl(filePath);
  return data.publicUrl;
}
