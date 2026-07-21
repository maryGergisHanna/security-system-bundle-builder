import type { Product } from "../components/custom-product-card/types";
import { API_URL } from "../config/api";

export async function getCameras(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/cameras`);

  if (!response.ok) {
    throw new Error("Failed to fetch cameras");
  }

  const cameras = await response.json();

  return cameras.map((camera: Product) => ({
    ...camera,
    image: `${API_URL}${camera.image}`,
    variants: camera.variants?.map((variant) => ({
      ...variant,
      image: `${API_URL}${variant.image}`,
    })),
  }));
}
