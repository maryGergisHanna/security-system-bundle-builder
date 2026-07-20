import { useMemo } from "react";
import type { ProductVariant, ProductCardProps } from "../types";

export function useProductCard({
  product,
  selectable = false,
  selected = false,
  onSelect,
  onVariantChange,
  onQuantityChange,
}: ProductCardProps) {
  const activeVariant = useMemo(
    () =>
      product.variants?.find(
        (variant) => variant.id === product.selectedVariantId
      ),
    [product.variants, product.selectedVariantId]
  );

  const quantity = useMemo(
    () => activeVariant?.quantity ?? product.quantity ?? 0,
    [activeVariant, product.quantity]
  );

  const hasSelectedVariant = useMemo(
    () =>
      product.variants?.some((variant) => variant.quantity > 0) ?? false,
    [product.variants]
  );

  const isActive = useMemo(
    () => selected || quantity > 0 || hasSelectedVariant,
    [selected, quantity, hasSelectedVariant]
  );

  const handleCardClick = () => {
    if (!selectable) return;

    onSelect?.();
  };

  const handleVariantChange = (variantId: ProductVariant["id"]) => {
    onVariantChange?.(variantId);
  };

  const handleQuantityChange = (nextQuantity: number) => {
    onQuantityChange?.(Math.max(0, nextQuantity));
  };

  return {
    product,
    selectable,
    quantity,
    activeVariant,
    isActive,
    handleCardClick,
    handleVariantChange,
    handleQuantityChange,
  };
}