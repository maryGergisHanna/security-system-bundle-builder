export type QuantityStepperVariant = "card" | "review";

export interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  variant?: QuantityStepperVariant;
  className?: string;
}