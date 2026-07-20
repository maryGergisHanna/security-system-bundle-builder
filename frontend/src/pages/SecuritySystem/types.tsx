import type { ReactNode } from "react";
import type { Product } from "../../components/custom-product-card/types";
import type { BundleCategory } from "../BundleBuilder/types";

export interface ProductItem {
  id: string;
  productId?: number;
  variantId?: string;
  image?: string;
  title: string;
  isPlan?: boolean;
  qty?: number;
  originalPrice?: string;
  price: string;
  hideQuantity?: boolean;
  priceLabel?: string;
  isFree?: boolean;
}

export interface ProductSection {
  label: string;
  items: ProductItem[];
  onQtyChange?: (productId: number, quantity: number) => void;
}

export interface PricingInfo {
  monthlyBadge: string;
  originalTotal: string;
  finalTotal: string;
  savingsMessage: string;
  hasDiscount: boolean;
}

export interface PricingSummaryProps {
  guarantee: ReactNode;
  pricing: PricingInfo;
  checkoutLabel: string;
  saveForLaterLabel: string;
  onCheckout?: () => void;
  onSaveForLater?: () => void;
}

export interface ProductRowProps {
  item: ProductItem;
  onQtyChange?: (productId: number, quantity: number) => void;
}

export interface ReviewContentProps {
  label: string;
  title: string;
  description: string;
  sections: ProductSection[];
}

export interface ReviewHeaderProps {
  label: string;
  title: string;
  description: string;
}

export interface ReviewSectionProps {
  section: ProductSection;
}

export interface SecuritySystemProps {
  cameras: Product[];
  sensors: Product[];
  plans: Product[];
  accessories: Product[];
  label?: string;
  title?: string;
  description?: string;
  checkoutLabel?: string;
  saveForLaterLabel?: string;
  onCheckout?: () => void;
  onSaveForLater?: () => void;
  updateQuantity: (
    category: BundleCategory,
    productId: number,
    quantity: number,
  ) => void;
}
