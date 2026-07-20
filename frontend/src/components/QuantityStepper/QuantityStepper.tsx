import { Minus, Plus } from "lucide-react";
import { stepperStyles } from "./styles";
import type { QuantityStepperProps } from "./types";

export default function QuantityStepper({
  value,
  onChange,
  min = 0,
  max,
  disabled = false,
  variant = "card",
  className = "",
}: QuantityStepperProps) {
  const styles = stepperStyles[variant];

  const decrease = () => {
    if (disabled) return;

    const next = Math.max(min, value - 1);

    if (next !== value) {
      onChange(next);
    }
  };

  const increase = () => {
    if (disabled) return;

    const next =
      max !== undefined ? Math.min(max, value + 1) : value + 1;

    if (next !== value) {
      onChange(next);
    }
  };

  return (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      <button
        type="button"
        onClick={decrease}
        disabled={disabled || value <= min}
        className={styles.button}
      >
        <Minus
          size={15}
          className={styles.icon}
        />
      </button>

      <span className={styles.value}>{value}</span>

      <button
        type="button"
        onClick={increase}
        disabled={disabled || (max !== undefined && value >= max)}
        className={styles.button}
      >
        <Plus
          size={15}
          className={styles.icon}
        />
      </button>
    </div>
  );
}