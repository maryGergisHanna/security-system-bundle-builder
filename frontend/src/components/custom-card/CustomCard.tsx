import clsx from "clsx";
import type { CustomCardProps } from "./types";

export default function CustomCard({
  children,
  className,
}: CustomCardProps) {
  return (
    <section
      className={clsx(
        "mt-10 rounded-2xl bg-[#EDF4FF]",
        "p-0 sm:p-8",
        className,
      )}
    >
      {children}
    </section>
  );
}