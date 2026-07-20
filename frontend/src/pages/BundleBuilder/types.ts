import type { ReactNode } from "react";
import type { Product } from "../../components/custom-product-card/types";

export interface BundleState {
  cameras: Product[];
  sensors: Product[];
  plans: Product[];
  accessories: Product[];
}
export type BundleCategory =
  | "cameras"
  | "sensors"
  | "plans"
  | "accessories";

export interface BundleState {
  cameras: Product[];
  sensors: Product[];
  plans: Product[];
  accessories: Product[];
}

export interface BundleStep {
  id: number;
  category: BundleCategory;
  subtitle: string;
  title: string;
  icon: ReactNode;
  nextLabel?: string;
  selectable?: boolean;
  hideQuantity?: boolean;
}

export interface BundleBuilderProps {
  bundle: BundleState;

  updateQuantity: (
    category: BundleCategory,
    productId: number,
    quantity: number
  ) => void;

  selectVariant: (
    productId: number,
    variantId: string
  ) => void;

  selectPlan: (id: number) => void;
}
export interface UpdateQuantityParams {
  category: BundleCategory;
  productId: number;
  quantity: number;
}

export interface SelectVariantParams {
  productId: number;
  variantId: string;
}