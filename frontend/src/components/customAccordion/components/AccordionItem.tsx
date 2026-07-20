import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import NextButton from "./NextButton";
import type { AccordionItemProps } from "../types";

export default function AccordionItem({
  item,
  isOpen,
  onToggle,
  onNext,
}: AccordionItemProps) {
  return (
    <section
      className={`
        overflow-hidden
        rounded-[10px]
        transition-all
        duration-300
        ${isOpen ? "bg-[#EDF4FF] shadow-md" : "border border-gray-200 bg-white"}
      `}
    >
      <AccordionHeader
        id={item.id}
        title={item.title}
        subtitle={item.subtitle}
        icon={item.icon}
        selectedCount={item.selectedCount}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      <AccordionBody id={item.id} isOpen={isOpen}>
        {item.content}

        {item.nextLabel && (
          <NextButton label={item.nextLabel} onClick={onNext} />
        )}
      </AccordionBody>
    </section>
  );
}
