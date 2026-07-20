import type { PricingSummaryProps } from "../types";
import Satisfaction_Badge from "../../../assets/images/Satisfaction_Badge.png";

export default function PricingSummary({
  pricing,
  checkoutLabel,
  saveForLaterLabel,
  onCheckout,
  onSaveForLater,
}: PricingSummaryProps) {
  return (
    <div>
      <div className="flex items-center justify-between lg:block">
        <div className="flex items-center gap-4 lg:gap-6">
          <img
            src={Satisfaction_Badge}
            alt="Satisfaction Guarantee Badge"
            className="max-w-none"
          />

          <div className="hidden lg:block font-gilroy-regular font-normal text-[18px] leading-[110%] tracking-[0.6px] text-[#1F1F1F]">
            <h4 className="mb-4 font-bold">30-day hassle-free returns</h4>
            <p className="text-[16px]">
              If you're not totally in love with the product, we will refund you
              100%.
            </p>
          </div>
        </div>

        <div className="flex items-baseline gap-2 lg:hidden">
          {pricing.hasDiscount && (
            <del className="font-gilroy-medium font-medium text-[18px] text-[#6F7882]">
              {pricing.originalTotal}
            </del>
          )}

          <span className="font-gilroy-bold font-bold text-[24px] text-[#4E2FD2]">
            {pricing.finalTotal}
          </span>
        </div>
      </div>

      <div className="hidden lg:flex mt-6 justify-between items-center">
        <div className="font-gilroy-medium font-medium text-[16px] leading-[100%] tracking-[-5%] rounded-[3px] p-2 text-[#FFFFFF] bg-[#4E2FD2]">
          {pricing.monthlyBadge}
        </div>

        <div className="flex items-baseline gap-2">
          {pricing.hasDiscount && (
            <del className="font-gilroy-medium font-medium text-[22px] leading-5 tracking-[0.25%] text-[#6F7882]">
              {pricing.originalTotal}
            </del>
          )}

          <span className="font-gilroy-bold font-bold text-[28px] leading-8 tracking-[-0.13%] text-[#4E2FD2]">
            {pricing.finalTotal}
          </span>
        </div>
      </div>

      {/* Savings */}
      {pricing.savingsMessage && (
        <p className="mt-5 font-gilroy-semibold font-semibold text-[14px] leading-[100%] tracking-[-0.06%] text-center text-[#0AA288]">
          {pricing.savingsMessage}
        </p>
      )}

      {/* Checkout */}
      <button
        type="button"
        onClick={onCheckout}
        className="mt-2 w-full rounded-sm bg-[#4E2FD2] px-4 py-3.25 font-tt-norms-pro text-[17px] font-bold text-[#FFFFFF] cursor-pointer"
      >
        {checkoutLabel}
      </button>

      {/* Save */}
      <button
        type="button"
        onClick={onSaveForLater}
        className="mt-2 w-full cursor-pointer font-gilroy-regular-italic text-[14px] leading-[120%] tracking-[-0.02%] text-center text-[#484848] underline"
      >
        {saveForLaterLabel}
      </button>
    </div>
  );
}
