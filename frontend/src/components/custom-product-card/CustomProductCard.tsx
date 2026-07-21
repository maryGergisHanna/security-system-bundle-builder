import QuantityStepper from "../QuantityStepper/QuantityStepper";
import ProductBadge from "./components/ProductBadge";
import ProductDescription from "./components/ProductDescription";
import ProductHeader from "./components/ProductHeader";
import ProductImage from "./components/ProductImage";
import ProductPrice from "./components/ProductPrice";
import VariantSelector from "./components/VariantSelector";
import { useProductCard } from "./hooks/useProductCard";
import type { ProductCardProps } from "./types";

export default function CustomProductCard(props: ProductCardProps) {
  const { hideQuantity } = props;

  const {
    product,
    selectable,
    quantity,
    isActive,
    handleCardClick,
    handleVariantChange,
    handleQuantityChange,
  } = useProductCard(props);

  return (
    <div
      onClick={handleCardClick}
      className={`
        relative
        flex
        flex-row
        lg:flex-col
        w-full
        max-w-90.25
        h-auto
        lg:w-57
        lg:h-90
        gap-3
        rounded-[10px]
        border-2
        bg-white
        p-2.75
        transition-colors
        ${selectable ? "cursor-pointer" : "cursor-default"}
        ${isActive ? "border-[#4E2FD2]" : "border-transparent"}
      `}
    >
      <ProductBadge sale={product.sale} />

      <ProductImage src={product.image} alt={product.title} />

      <div className="flex flex-1 flex-col">
        <ProductHeader title={product.title} selectable={selectable} />

        <ProductDescription
          description={product.description}
          learnMoreUrl={product.learnMoreUrl}
        />

        {product.variants && (
          <VariantSelector
            variants={product.variants}
            selectedVariantId={product.selectedVariantId}
            onChange={handleVariantChange}
          />
        )}

        <div className="mt-auto flex items-center justify-between">
          {!hideQuantity && (
            <QuantityStepper
              className=""
              variant="card"
              value={quantity}
              onChange={handleQuantityChange}
            />
          )}

          <ProductPrice
            originalPrice={product.orginialPrice}
            salePrice={product.priceAfterSale}
            priceLabel={product.priceLabel}
          />
        </div>
      </div>
    </div>
  );
}
