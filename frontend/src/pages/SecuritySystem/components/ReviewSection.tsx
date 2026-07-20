import ProductRow from "./ProductRow";
import type { ReviewSectionProps } from "../types";

export default function ReviewSection({ section }: ReviewSectionProps) {
  return (
    <section className="mt-6 first:mt-0">
      <p className="mt-7 mb-1 font-gilroy-regular font-normal text-[12px] leading-4 tracking-[3%] uppercase text-[#A8B2BD]">
        {section.label}
      </p>

      <div className="divide-y divide-gray-200">
        {section.items.map((item) => (
          <ProductRow
            key={item.id}
            item={item}
            onQtyChange={section.onQtyChange}
          />
        ))}
      </div>
    </section>
  );
}
