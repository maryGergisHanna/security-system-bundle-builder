import type { ProductHeaderProps } from "../types";
import PlanTitle from "./PlanTitle";

export default function ProductHeader({
  title,
  selectable = false,
}: ProductHeaderProps) {
  return (
    <h3 className="font-gilroy-semibold text-[19px] text-[#1F1F1F]">
      {selectable ? (
        <PlanTitle title={title} />
      ) : (
        title
      )}
    </h3>
  );
}