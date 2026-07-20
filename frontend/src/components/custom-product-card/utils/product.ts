import type { Product, ProductVariant } from "../types";

export function getActiveVariant(product: Product): ProductVariant | undefined {
  return product.variants?.find(
    (variant) => variant.id === product.selectedVariantId
  );
}

export function getProductQuantity(product: Product): number {
  const activeVariant = getActiveVariant(product);

  return activeVariant?.quantity ?? product.quantity ?? 0;
}

export function hasSelectedVariant(product: Product): boolean {
  return (
    product.variants?.some((variant) => variant.quantity > 0) ?? false
  );
}

export function isProductActive(
  product: Product,
  selected = false
): boolean {
  return (
    selected ||
    getProductQuantity(product) > 0 ||
    hasSelectedVariant(product)
  );
}

export function getDisplayPrice(product: Product): string {
  return (
    product.priceLabel ??
    `$${product.priceAfterSale ?? product.orginialPrice}`
  );
}

export function hasDiscount(product: Product): boolean {
  return (
    product.priceAfterSale !== undefined &&
    product.priceAfterSale !== product.orginialPrice
  );
}