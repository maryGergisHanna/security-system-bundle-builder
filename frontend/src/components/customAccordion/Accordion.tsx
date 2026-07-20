import AccordionItem from "./components/AccordionItem";
import { useAccordion } from "./hooks/useAccordion";
import type { AccordionProps } from "./types";

export default function Accordion(props: AccordionProps) {
  const { items, getItemProps } = useAccordion(props);

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          {...getItemProps(item, index)}
        />
      ))}
    </div>
  );
}