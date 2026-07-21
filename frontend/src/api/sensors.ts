import type { Product } from "../components/custom-product-card/types";
import { API_URL } from "../config/api";

export async function getSensors(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/sensors`);

  if (!response.ok) {
    throw new Error("Failed to fetch sensors");
  }

  const sensors = await response.json();

  return sensors.map((sensor: Product) => ({
    ...sensor,
    image: `${API_URL}${sensor.image}`,
  }));
}
