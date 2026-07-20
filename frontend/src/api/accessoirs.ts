import type { Product } from "../components/custom-product-card/types";

export async function getAccessoirs(): Promise<Product[]> {
  const response = await fetch("http://localhost:5000/api/accessoirs");

  if (!response.ok) {
    throw new Error("Failed to fetch accessoirs");
  }

  const accessoirs = await response.json();

  return accessoirs.map((accessoir: Product) => ({
    ...accessoir,
    image: `http://localhost:5000${accessoir.image}`,
  }));
}
