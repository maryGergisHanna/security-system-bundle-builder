import type { AccordionBodyProps } from "../types";

export default function AccordionBody({
  id,
  isOpen,
  children,
}: AccordionBodyProps) {
  return (
    <div
      id={`accordion-content-${id}`}
      role="region"
      aria-labelledby={`accordion-header-${id}`}
      className={`
        overflow-hidden
        transition-all
        duration-300
        ease-in-out
        ${isOpen ? "max-h-[3000px]" : "max-h-0"}
      `}
    >
      <div className="px-7 pb-6">
        {children}
      </div>
    </div>
  );
}