export type BrandKitColor = string;

export type BrandService = {
  name: string;
  price: number;
  source: "user" | "ai"; // ✅ Added source
};

export type BrandTool = {
  name: string;
  checked: boolean;
  source: "user" | "ai"; // ✅ Added source
};

export type BrandKit = {
  id: string;
  user_id: string;
  logo_url: string; // ✅ Still used
  business_name: string;
  slogan: string;
  service_type: string;
  location: string;
  brand_colors: BrandKitColor[];
  services: BrandService[];
  tools: BrandTool[];
  is_paid: boolean;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
};
