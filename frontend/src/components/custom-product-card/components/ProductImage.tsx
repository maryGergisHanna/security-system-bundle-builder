import type { ProductImageProps } from "../types";

export default function ProductImage({
  src,
  alt,
  className = "",
}: ProductImageProps) {
  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={alt}
        className={`
          h-38
          w-38
          object-contain
          py-2.5
          ${className}
        `}
      />
    </div>
  );
}