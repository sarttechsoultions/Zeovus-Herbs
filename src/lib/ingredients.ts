export type IngredientCategory = { id: string; title: string };
export type IngredientNavigation = {
  categories: IngredientCategory[];
  applications: { title: string; subcategories: string[] }[];
};
export function ingredientHref(filters: Record<string, string>) {
  return "/products?" + new URLSearchParams(filters).toString();
}
