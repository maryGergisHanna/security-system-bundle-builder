export { default } from "./CustomProductCard";

export type {
  Product,
  ProductVariant,
  ProductCardProps,
} from "./types";

export {
  getActiveVariant,
  getProductQuantity,
  hasSelectedVariant,
  isProductActive,
  getDisplayPrice,
  hasDiscount,
} from "./utils/product";