import type { Product } from "../components/custom-product-card/types";
import { API_URL } from "../config/api";

export async function getAccessoirs(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/accessoirs`);

  if (!response.ok) {
    throw new Error("Failed to fetch accessoirs");
  }

  const accessoirs = await response.json();

  return accessoirs.map((accessoir: Product) => ({
    ...accessoir,
    image: `${API_URL}${accessoir.image}`,
  }));
}
