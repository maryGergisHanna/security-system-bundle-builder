import ReviewHeader from "./ReviewHeader";
import ReviewSection from "./ReviewSection";
import type { ReviewContentProps } from "../types";

export default function ReviewContent({
  label,
  title,
  description,
  sections,
}: ReviewContentProps) {
  return (
    <div>
      <ReviewHeader
        label={label}
        title={title}
        description={description}
      />

      <div className="mt-6">
        {sections.map((section) => (
          <ReviewSection
            key={section.label}
            section={section}
          />
        ))}
      </div>
    </div>
  );
}