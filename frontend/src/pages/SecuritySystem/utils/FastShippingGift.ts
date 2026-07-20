import Fast_Shipping from "../../../assets/icons/Fast_Shipping.svg";
import type { Product } from "../../../components/custom-product-card/types";
import type { ProductItem } from "../types";

export function getFastShippingGift(plans: Product[]): ProductItem[] {
  const selectedPlan = plans.find((plan) => plan.quantity > 0);

  if (selectedPlan?.title !== "Cam Unlimited") {
    return [];
  }

  return [
    {
      id: "fast-shipping",
      image: Fast_Shipping,
      title: "Fast Shipping",
      hideQuantity: true,
      price: "FREE",
      originalPrice: "$5.99",
    },
  ];
}