export interface ProductVariant {
  id: string;
  name: string;
  backgroundColor: string;
  image?: string;
  quantity: number;
}

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  learnMoreUrl?: string;
  sale?: string;
  orginialPrice: number;
  priceAfterSale?: number;
  priceLabel?: string;
  quantity: number;
  variants?: ProductVariant[];
  selectedVariantId?: string;
}

export interface ProductCardProps {
  product: Product;
  onVariantChange?: (variantId: string) => void;
  onQuantityChange?: (quantity: number) => void;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
  hideQuantity?: boolean;
}

export interface PlanTitleProps {
  title: string;
}

export interface ProductBadgeProps {
  sale?: string;
}

export interface ProductDescriptionProps {
  description: string;
  learnMoreUrl?: string;
}

export interface ProductHeaderProps {
  title: string;
  selectable?: boolean;
}

export interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface ProductPriceProps {
  originalPrice: number;
  salePrice?: number;
  priceLabel?: string;
}

export interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId?: string;
  onChange?: (variantId: string) => void;
}