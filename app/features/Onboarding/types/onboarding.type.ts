export type Service = {
  name: string;
  price: number;
};

export type OnboardingData = {
  current_step: number;

  // Step 1
  service_type: string;
  location: string;
  readiness_level: string;

  // Step 2
  business_name_suggestions: string[];
  selected_business_name: string;
  custom_name: string; // ✅ newly added

  // Step 3
  brand_color_options: string[][];
  selected_color_palette: string[];

  // Step 4
  logo_style_options: string[];
  selected_logo_style: string;
  selected_logo_id: string;

  // Step 5
  services: Service[];

  // Step 6
  tools: string[];

  // Step 7
  slogan: string;
};
