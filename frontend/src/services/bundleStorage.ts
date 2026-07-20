import type { Product } from "../components/custom-product-card/types";
import type { SavedBundle, SavedProduct } from "../types";

const STORAGE_KEY = "security-system-builder";

export const prepareProducts = (products: Product[]): Product[] => {
  return products.map((product) => ({
    ...product,

    quantity: product.quantity ?? 0,

    selectedVariantId: product.selectedVariantId ?? product.variants?.[0]?.id,

    variants: product.variants?.map((variant) => ({
      ...variant,
      quantity: variant.quantity ?? 0,
    })),
  }));
};

export const applySavedQuantities = (
  products: Product[],
  savedProducts?: SavedProduct[],
): Product[] => {
  return products.map((product) => {
    const saved = savedProducts?.find((p) => p.id === product.id);

    return {
      ...product,
      quantity: saved?.quantity ?? product.quantity ?? 0,
      selectedVariantId: saved?.selectedVariantId ?? product.selectedVariantId,
      variants: product.variants?.map((variant) => {
        const savedVariant = saved?.variants?.find((v) => v.id === variant.id);

        return {
          ...variant,
          quantity: savedVariant?.quantity ?? variant.quantity ?? 0,
        };
      }),
    };
  });
};

export const mapProductsForStorage = (products: Product[]): SavedProduct[] => {
  return products.map(({ id, quantity, selectedVariantId, variants }) => ({
    id,
    quantity,
    selectedVariantId,
    variants: variants?.map((variant) => ({
      id: variant.id,
      quantity: variant.quantity,
    })),
  }));
};

export const saveBundle = (bundle: {
  cameras: Product[];
  sensors: Product[];
  plans: Product[];
  accessories: Product[];
}) => {
  const data: SavedBundle = {
    cameras: mapProductsForStorage(bundle.cameras),
    sensors: mapProductsForStorage(bundle.sensors),
    plans: mapProductsForStorage(bundle.plans),
    accessories: mapProductsForStorage(bundle.accessories),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadBundle = (): SavedBundle | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return null;
    }

    return JSON.parse(saved);
  } catch (error) {
    console.error("Failed to parse saved bundle", error);

    return null;
  }
};

export const clearBundle = () => {
  localStorage.removeItem(STORAGE_KEY);
};
