import type { QuantityStepperVariant } from "./types";

export const stepperStyles: Record<
  QuantityStepperVariant,
  {
    button: string;
    icon: string;
    value: string;
  }
> = {
  card: {
    button:
      "cursor-pointer flex h-5 w-5 items-center justify-center rounded-sm border-2 border-[#E6EBF0] bg-[#F0F4F7] disabled:opacity-40 disabled:cursor-not-allowed",
    icon: "text-[#575757]",
    value: "w-3 text-center",
  },
  review: {
    button:
      "cursor-pointer grid h-5 w-5 place-items-center rounded hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed",
    icon: "rounded-sm bg-white text-[#575757]",
    value: "w-3 text-center text-sm text-gray-700",
  },
};
