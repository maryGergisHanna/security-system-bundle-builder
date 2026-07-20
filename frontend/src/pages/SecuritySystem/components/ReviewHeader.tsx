import type { ReviewHeaderProps } from "../types";

export default function ReviewHeader({
  label,
  title,
  description,
}: ReviewHeaderProps) {
  return (
    <>
      <p className="mb-8 lg:hidden font-gilroy-medium font-medium text-[10px] leading-[100%] tracking-[1.6px] uppercase text-[#484848]">
        {label}
      </p>

      <h2
        className={`font-gilroy-semibold text-[28px] font-bold leading-[100%] tracking-[0.6px] align-middle text-[#1F1F1F]`}
      >
        {title}
      </h2>

      <p className="mt-2 font-gilroy-medium text-[16px] leading-[1.3] tracking-[0.6px] align-middle text-[#1F1F1FBF]">
        {description}
      </p>
    </>
  );
}
