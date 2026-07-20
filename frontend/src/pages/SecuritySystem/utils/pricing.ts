import type { Product } from "../../../components/custom-product-card/types";
import type { PricingInfo } from "../types";

const MONTHLY_BADGE = "as low as $19.19/mo";

const getProductQuantity = (product: Product): number => {
  if (!product.variants) {
    return product.quantity ?? 0;
  }

  return product.variants.reduce(
    (total, variant) => total + variant.quantity,
    0,
  );
};

export const calculatePricing = (products: Product[]): PricingInfo => {
  const originalTotal = products.reduce(
    (total, product) =>
      total + product.orginialPrice * getProductQuantity(product),
    0,
  );

  const finalTotal = products.reduce(
    (total, product) =>
      total +
      Number(product.priceAfterSale ?? product.orginialPrice) *
        getProductQuantity(product),
    0,
  );

  const savings = originalTotal - finalTotal;

  const hasDiscount = products.some(
    (product) =>
      getProductQuantity(product) > 0 &&
      product.priceAfterSale !== undefined &&
      product.priceAfterSale !== product.orginialPrice,
  );

  return {
    monthlyBadge: MONTHLY_BADGE,
    originalTotal: `$${originalTotal.toFixed(2)}`,
    finalTotal: `$${finalTotal.toFixed(2)}`,
    hasDiscount,
    savingsMessage:
      savings > 0
        ? `Congrats! You're saving $${savings.toFixed(
            2,
          )} on your security bundle!`
        : "",
  };
};
