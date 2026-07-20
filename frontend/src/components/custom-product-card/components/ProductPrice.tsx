import type { ProductPriceProps } from "../types";

export default function ProductPrice({
  originalPrice,
  salePrice,
  priceLabel,
}: ProductPriceProps) {
  const displayPrice =
    priceLabel ?? `$${salePrice ?? originalPrice}`;

  const hasDiscount =
    salePrice !== undefined && salePrice !== originalPrice;

  return (
    <div className="flex items-center gap-1 text-right font-gilroy-regular text-[16px] font-normal">
      {hasDiscount && (
        <del className="text-[#D8392B]">
          ${originalPrice}
        </del>
      )}

      <span className="text-[#575757]">
        {displayPrice}
      </span>
    </div>
  );
}