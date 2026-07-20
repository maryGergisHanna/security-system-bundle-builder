import { useMemo } from "react";
import CustomCard from "../../components/custom-card/CustomCard";
import ReviewContent from "./components/ReviewContent";
import PricingSummary from "./components/PricingSummary";
import { buildReviewSections } from "./utils/review";
import { calculatePricing } from "./utils/pricing";
import type { SecuritySystemProps } from "./types";
import TwoColumnLayout from "../../components/custom-card/TwoColumnLayout";
import Satisfaction_Badge from "../../assets/images/Satisfaction_Badge.png";

export default function SecuritySystem({
  cameras,
  sensors,
  plans,
  accessories,
  label = "review",
  title = "Your security system",
  description = "Review your personalized protection system designed to keep what matters most safe.",
  checkoutLabel = "Checkout",
  saveForLaterLabel = "Save my system for later",
  onCheckout,
  onSaveForLater,
  updateQuantity,
}: SecuritySystemProps) {
  const sections = useMemo(
    () =>
      buildReviewSections({
        cameras,
        sensors,
        plans,
        accessories,
        updateQuantity,
      }),
    [cameras, sensors, plans, accessories, updateQuantity],
  );

  const pricing = useMemo(
    () => calculatePricing([...cameras, ...sensors, ...plans, ...accessories]),
    [cameras, sensors, plans, accessories],
  );

  return (
    <CustomCard>
      <TwoColumnLayout
        left={
          <ReviewContent
            label={label}
            title={title}
            description={description}
            sections={sections}
          />
        }
        right={
          <PricingSummary
            guarantee={
              <img src={Satisfaction_Badge} alt="Satisfaction Guarntee Badge" />
            }
            pricing={pricing}
            checkoutLabel={checkoutLabel}
            saveForLaterLabel={saveForLaterLabel}
            onCheckout={onCheckout}
            onSaveForLater={onSaveForLater}
          />
        }
      />
    </CustomCard>
  );
}
