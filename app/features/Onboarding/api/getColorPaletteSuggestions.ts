// api/getColorPaletteSuggestions.ts
export async function getColorPaletteSuggestions(): Promise<string[][]> {
  await new Promise((res) => setTimeout(res, 300)); // simulate network delay

  return [
    ["#1E3A8A", "#3B82F6", "#BFDBFE"],
    ["#6B21A8", "#9333EA", "#E9D5FF"],
    ["#0F766E", "#14B8A6", "#A7F3D0"],
    ["#78350F", "#D97706", "#FCD34D"],
    ["#374151", "#6B7280", "#D1D5DB"],
  ];
}
