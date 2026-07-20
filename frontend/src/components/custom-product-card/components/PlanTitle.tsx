import type { PlanTitleProps } from "../types";

export default function PlanTitle({ title }: PlanTitleProps) {
  const [firstWord, ...rest] = title.split(" ");

  return (
    <span className="font-gilroy-bold font-bold text-[20px] leading-[100%] tracking-[-0.2%]">
      <span className="font-gilroy-bold text-[#4E2FD2]">{firstWord}</span>{" "}
      <span className="text-black">{rest.join(" ")}</span>
    </span>
  );
}