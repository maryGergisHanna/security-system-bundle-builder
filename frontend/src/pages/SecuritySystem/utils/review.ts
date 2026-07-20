import type { Product } from "../../../components/custom-product-card/types";
import type { BundleCategory } from "../../BundleBuilder/types";
import type { ProductItem, ProductSection } from "../types";
import { getFastShippingGift } from "./FastShippingGift";

interface BuildReviewSectionsParams {
  cameras: Product[];
  sensors: Product[];
  plans: Product[];
  accessories: Product[];
  updateQuantity: (
    category: BundleCategory,
    productId: number,
    quantity: number,
  ) => void;
}

interface CreateSectionParams {
  label: string;
  category: BundleCategory;
  products: Product[];
  updateQuantity: (
    category: BundleCategory,
    productId: number,
    quantity: number,
  ) => void;
  hideQuantity?: boolean;
  extraItems?: ProductItem[];
}

function mapProductToItems(
  product: Product,
  label: string,
  hideQuantity: boolean,
): ProductItem[] {
  if (!product.variants) {
    if ((product.quantity ?? 0) === 0) {
      return [];
    }

    const finalPrice = product.priceAfterSale ?? product.orginialPrice;

    return [
      {
        id: product.id.toString(),
        productId: product.id,
        image: product.image ?? "",
        title: product.title,
        isPlan: label === "Plans",
        qty: product.quantity,
        hideQuantity,
        originalPrice:
          product.priceAfterSale !== undefined
            ? `$${product.orginialPrice}`
            : undefined,
        price: `$${product.priceAfterSale ?? product.orginialPrice}`,
        priceLabel: product.priceLabel,
        isFree: finalPrice === 0,
      },
    ];
  }

  return product.variants
    .filter((variant) => variant.quantity > 0)
    .map((variant) => ({
      id: `${product.id}-${variant.id}`,
      productId: product.id,
      variantId: variant.id,
      image: variant.image ?? "",
      title: `${product.title} (${variant.name})`,
      qty: variant.quantity,
      hideQuantity,
      originalPrice:
        product.priceAfterSale !== undefined
          ? `$${product.orginialPrice}`
          : undefined,
      price: `$${product.priceAfterSale ?? product.orginialPrice}`,
    }));
}

function createSection({
  label,
  category,
  products,
  updateQuantity,
  hideQuantity = false,
  extraItems = [],
}: CreateSectionParams): ProductSection {
  return {
    label,
    onQtyChange: (productId, quantity) =>
      updateQuantity(category, productId, quantity),
    items: [
      ...products.flatMap((product) =>
        mapProductToItems(product, label, hideQuantity),
      ),
      ...extraItems,
    ],
  };
}

export function buildReviewSections({
  cameras,
  sensors,
  plans,
  accessories,
  updateQuantity,
}: BuildReviewSectionsParams): ProductSection[] {
  const fastShippingGift = getFastShippingGift(plans);

  return [
    createSection({
      label: "Cameras",
      category: "cameras",
      products: cameras,
      updateQuantity,
    }),

    createSection({
      label: "Sensors",
      category: "sensors",
      products: sensors,
      updateQuantity,
    }),

    createSection({
      label: "Accessories",
      category: "accessories",
      products: accessories,
      updateQuantity,
    }),

    createSection({
      label: "Plans",
      category: "plans",
      products: plans,
      updateQuantity,
      hideQuantity: true,
      extraItems: fastShippingGift,
    }),
  ].filter((section) => section.items.length > 0);
}
