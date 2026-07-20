import type { ProductBadgeProps } from "../types";

export default function ProductBadge({ sale }: ProductBadgeProps) {
  if (!sale) {
    return null;
  }

  return (
    <span
      className="
        absolute
        top-2
        left-2
        flex
        h-5.5
        w-15.75
        items-center
        justify-center
        rounded-[10px]
        bg-[#4E2FD2]
        px-1.5
        py-0.5
        font-gilroy-semibold
        text-[12px]
        text-white
      "
    >
      Save {sale}
    </span>
  );
}