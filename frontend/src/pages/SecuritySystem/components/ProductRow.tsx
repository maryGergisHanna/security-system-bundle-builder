import PlanTitle from "../../../components/custom-product-card/components/PlanTitle";
import QuantityStepper from "../../../components/QuantityStepper/QuantityStepper";
import type { ProductRowProps } from "../types";

export default function ProductRow({ item, onQtyChange }: ProductRowProps) {
  const {
    productId,
    image,
    title,
    isPlan,
    qty,
    originalPrice,
    price,
    hideQuantity,
    priceLabel,
    isFree,
  } = item;

  return (
    <div className="flex items-center justify-between py-3 first:pt-0">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-9 h-9 shrink-0 rounded-lg bg-white grid place-items-center">
          <img src={image} alt={title} className="w-12 object-contain" />
        </div>

        <div className="min-w-0">
          {isPlan ? (
            <PlanTitle title={title} />
          ) : (
            <span className="font-gilroy-medium font-medium text-[18px] leading-4 tracking-[0.5%] text-[#0B0D10]">
              {title}
            </span>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 shrink-0">
        {!hideQuantity && qty !== undefined && (
          <QuantityStepper
            variant="review"
            value={qty}
            disabled={isFree}
            onChange={(next) => {
              if (productId !== undefined) {
                onQtyChange?.(productId, next);
              }
            }}
          />
        )}

        <div className="flex items-baseline gap-2 w-24 justify-end">
          {originalPrice && (
            <del className="font-gilroy-medium font-normal text-[16px] leading-4 tracking-[0.5%] align-middle text-[#6F7882]">
              {originalPrice}
            </del>
          )}
          <span
            className={`font-gilroy-semibold font-semibold text-[16px] leading-4 tracking-[0.5%] align-middle text-[#4E2FD2]`}
          >
            {isFree ? priceLabel : price}
          </span>
        </div>
      </div>
    </div>
  );
}
