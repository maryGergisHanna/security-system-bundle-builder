import { useCallback } from "react";
import type {
  AccordionItemData,
  AccordionItemProps,
  AccordionProps,
} from "../types";

export function useAccordion({
  items,
  openItem,
  onChange,
}: AccordionProps) {
  const handleToggle = useCallback(
    (id: number) => {
      onChange(id);
    },
    [onChange],
  );

  const handleNext = useCallback(
    (index: number) => {
      const nextItem = items[index + 1];

      if (nextItem) {
        onChange(nextItem.id);
      }
    },
    [items, onChange],
  );

  const getItemProps = useCallback(
    (
      item: AccordionItemData,
      index: number,
    ): AccordionItemProps => ({
      item,
      isOpen: openItem === item.id,
      onToggle: () => handleToggle(item.id),
      onNext: () => handleNext(index),
    }),
    [openItem, handleToggle, handleNext],
  );

  return {
    items,
    getItemProps,
  };
}