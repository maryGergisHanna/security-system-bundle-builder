import { useMemo, useState } from "react";
import Accordion from "../../components/customAccordion";
import type { AccordionItemData } from "../../components/customAccordion";
import CustomProductCard from "../../components/custom-product-card/CustomProductCard";
import cameraIcon from "../../assets/icons/camera.svg";
import planIcon from "../../assets/icons/plans.svg";
import sensorIcon from "../../assets/icons/sensors.svg";
import protectionIcon from "../../assets/icons/protection.svg";

import type {
  BundleStep,
  BundleCategory,
  BundleBuilderProps,
} from "./types";

const STEPS: BundleStep[] = [
  {
    id: 1,
    category: "cameras",
    subtitle: "STEP 1 OF 4",
    title: "Choose your cameras",
    icon: <img src={cameraIcon} alt="" />,
    nextLabel: "Choose your plan",
  },
  {
    id: 2,
    category: "plans",
    subtitle: "STEP 2 OF 4",
    title: "Choose your plan",
    icon: <img src={planIcon} alt="" />,
    nextLabel: "Choose your sensors",
    selectable: true,
    hideQuantity: true,
  },
  {
    id: 3,
    category: "sensors",
    subtitle: "STEP 3 OF 4",
    title: "Choose your sensors",
    icon: <img src={sensorIcon} alt="" />,
    nextLabel: "Add extra protection",
  },
  {
    id: 4,
    category: "accessories",
    subtitle: "STEP 4 OF 4",
    title: "Add extra protection",
    icon: <img src={protectionIcon} alt="" />,
  },
];

export default function BundleBuilder({
  bundle,
  updateQuantity,
  selectVariant,
  selectPlan,
}: BundleBuilderProps) {
  const [openStep, setOpenStep] = useState(1);

  const getSelectedCount = (category: BundleCategory) => {
    return bundle[category].reduce((count, product) => {
      if (!product.variants) {
        return count + ((product.quantity ?? 0) > 0 ? 1 : 0);
      }

      return (
        count +
        product.variants.filter((v) => v.quantity > 0).length
      );
    }, 0);
  };

  const items = useMemo<AccordionItemData[]>(
    () =>
      STEPS.map((step) => ({
        id: step.id,
        subtitle: step.subtitle,
        title: step.title,
        icon: step.icon,
        selectedCount: getSelectedCount(step.category),
        nextLabel: step.nextLabel,
        content: (
          <div className="flex flex-wrap gap-4 px-2.5 justify-center items-center lg:justify-start lg:items-start">
            {bundle[step.category].map((product) => (
              <CustomProductCard
                key={product.id}
                product={product}
                selectable={step.selectable}
                hideQuantity={step.hideQuantity}
                selected={
                  step.category === "plans"
                    ? product.quantity > 0
                    : undefined
                }
                onSelect={() => {
                  if (step.category === "plans") {
                    selectPlan(product.id);
                  }
                }}
                onVariantChange={(variantId) =>
                  selectVariant(product.id, variantId)
                }
                onQuantityChange={(qty) =>
                  updateQuantity(
                    step.category,
                    product.id,
                    qty
                  )
                }
              />
            ))}
          </div>
        ),
      })),
    [bundle]
  );

  return (
    <Accordion
      items={items}
      openItem={openStep}
      onChange={setOpenStep}
    />
  );
}