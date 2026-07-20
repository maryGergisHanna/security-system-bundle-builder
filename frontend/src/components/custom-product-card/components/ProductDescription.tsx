import type { ProductDescriptionProps } from "../types";

export default function ProductDescription({
  description,
  learnMoreUrl,
}: ProductDescriptionProps) {
  return (
    <p className="font-gilroy-medium text-[14px] leading-[130%] tracking-[0.6px] text-[#1F1F1FBF]">
      {description}

      {learnMoreUrl && (
        <>
          <a
            href={learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Learn More...
          </a>
        </>
      )}
    </p>
  );
}