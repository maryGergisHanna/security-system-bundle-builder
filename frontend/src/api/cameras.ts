import type { Product } from "../components/custom-product-card/types";

const BASE_URL = "http://localhost:5000";

export async function getCameras(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/api/cameras`);

  if (!response.ok) {
    throw new Error("Failed to fetch cameras");
  }

  const cameras = await response.json();

  return cameras.map((camera: Product) => ({
    ...camera,
    image: `${BASE_URL}${camera.image}`,
    variants: camera.variants?.map((variant) => ({
      ...variant,
      image: `${BASE_URL}${variant.image}`,
    })),
  }));
}







// import type { Product } from "../components/custom-product-card/types";

// export async function getCameras(): Promise<Product[]> {
//   const response = await fetch("http://localhost:5000/api/cameras");

//   if (!response.ok) {
//     throw new Error("Failed to fetch cameras");
//   }

//   const cameras = await response.json();

//   return cameras.map((camera: Product) => ({
//     ...camera,
//     image: `http://localhost:5000${camera.image}`,
//   }));
// }
