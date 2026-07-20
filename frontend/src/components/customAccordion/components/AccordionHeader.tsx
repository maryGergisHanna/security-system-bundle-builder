import ArrowDown from "../../../assets/arrowDown";
import ArrowUp from "../../../assets/arrowUp";
import type { AccordionHeaderProps } from "../types";

export default function AccordionHeader({
  id,
  title,
  subtitle,
  icon,
  selectedCount = 0,
  isOpen,
  onToggle,
}: AccordionHeaderProps) {
  return (
    <>
      {/* Subtitle */}
      <div className="text-[12px] text-[#484848] uppercase font-gilroy-medium font-normal px-3.75 pt-3.75 pb-1.5 border-b border-[#484848]">
        <p className="font-gilroy-medium  text-[12px] uppercase text-[#484848]">
          {subtitle}
        </p>
      </div>

      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        className="flex w-full cursor-pointer items-center justify-between px-7 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          {icon && <div className="shrink-0">{icon}</div>}

          <h2 className="text-[#0B0D10] text-[28px] font-gilroy-semibold font-semibold">
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-gilroy-medium text-[14px] font-semibold text-[#4E2FD2] whitespace-nowrap">
            {selectedCount} selected
          </span>

          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
      </button>
    </>
  );
}