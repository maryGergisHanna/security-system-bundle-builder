import type { VariantSelectorProps } from "../types";

export default function VariantSelector({
  variants,
  selectedVariantId,
  onChange,
}: VariantSelectorProps) {
  return (
    <div className="mt-2 flex flex-wrap gap-0.75">
      {variants.map((variant) => {
        const isSelected = variant.id === selectedVariantId;

        return (
          <button
            key={variant.id}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onChange?.(variant.id);
            }}
            className={`
              flex
              h-6.5
              w-16.25
              items-center
              gap-1
              rounded-xs
              border
              px-2
              py-1
              transition-colors
              cursor-pointer
              ${
                isSelected
                  ? "border-[#0AA288] bg-[#1DF0BB0A]"
                  : "border-[#E6EBF0] hover:border-[#B8C0CC]"
              }
            `}
          >
            {variant.image && (
              <img
                src={variant.image}
                alt={variant.name}
                className="h-6 w-6 rounded-[5px] object-contain"
              />
            )}

            <span className="font-gilroy-medium text-[10px] font-medium leading-none whitespace-nowrap text-[#1F1F1F]">
              {variant.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}