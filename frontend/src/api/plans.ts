import type { Product } from "../components/custom-product-card/types";
import { API_URL } from "../config/api";

export async function getPlans(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/plans`);

  if (!response.ok) {
    throw new Error("Failed to fetch plans");
  }

  const plans = await response.json();

  return plans.map((plan: Product) => ({
    ...plan,
    image: `${API_URL}${plan.image}`,
  }));
}
