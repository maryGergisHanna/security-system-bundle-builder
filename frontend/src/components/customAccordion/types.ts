import type { ReactNode } from "react";

export interface AccordionItemData {
  id: number;
  title: string;
  subtitle: string;
  icon?: ReactNode;
  selectedCount?: number;
  content: ReactNode;
  nextLabel?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  openItem: number;
  onChange: (id: number) => void;
}

export interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
}

export interface AccordionBodyProps {
  id: number;
  isOpen: boolean;
  children: ReactNode;
}

export interface AccordionHeaderProps {
  id: number;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  selectedCount?: number;
  isOpen: boolean;
  onToggle: () => void;
}

export interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
  onNext: () => void;
}

export interface NextButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}