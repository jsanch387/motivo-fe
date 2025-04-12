export type Service = {
  name: string;
  price: number;
  source: "user" | "ai";
};

export type Tool = {
  name: string;
  source: "user" | "ai";
  checked: boolean;
};

export type BrandKit = {
  logo_url: string;
  business_name: string;
  slogan: string;
  brand_colors: string[];
  service_type: string;
  location: string;
  is_paid: boolean;

  user_services: Service[];
  suggested_services: Service[];
  user_tools: Tool[];
  suggested_tools: Tool[];
};
