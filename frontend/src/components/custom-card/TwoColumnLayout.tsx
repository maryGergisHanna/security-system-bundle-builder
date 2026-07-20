import type { TwoColumnLayoutProps } from "./types";
export default function TwoColumnLayout({
  left,
  right,
}: TwoColumnLayoutProps) {
  return (
    <div className={"flex flex-col md:flex-row gap-8 lg:gap-20 px-8 py-7"}>
      <div className={"flex-1 md:basis-[62%]"}>{left}</div>

      <div className={"flex-1 md:basis-[38%]"}>{right}</div>
    </div>
  );
}
