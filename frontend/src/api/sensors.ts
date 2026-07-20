import type { Product } from "../components/custom-product-card/types";

export async function getSensors(): Promise<Product[]> {
  const response = await fetch("http://localhost:5000/api/sensors");

  if (!response.ok) {
    throw new Error("Failed to fetch sensors");
  }

  const sensors = await response.json();

  return sensors.map((sensor: Product) => ({
    ...sensor,
    image: `http://localhost:5000${sensor.image}`,
  }));
}
