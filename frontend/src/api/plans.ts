import type { Product } from "../components/custom-product-card/types";

export async function getPlans(): Promise<Product[]> {
  const response = await fetch("http://localhost:5000/api/plans");

  if (!response.ok) {
    throw new Error("Failed to fetch plans");
  }

  const plans = await response.json();

  return plans.map((plan: Product) => ({
    ...plan,
    image: `http://localhost:5000${plan.image}`,
  }));
}
