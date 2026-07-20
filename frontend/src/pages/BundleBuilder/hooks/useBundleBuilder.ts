import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { getCameras } from "../../../api/cameras";
import { getSensors } from "../../../api/sensors";
import { getPlans } from "../../../api/plans";
import { getAccessoirs } from "../../../api/accessoirs";
import {
  loadBundle,
  saveBundle,
  prepareProducts,
  applySavedQuantities,
} from "../../../services/bundleStorage";
import type { BundleState } from "../types";

export function useBundleBuilder() {
  const [bundle, setBundle] = useState<BundleState>({
    cameras: [],
    sensors: [],
    plans: [],
    accessories: [],
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const [cameras, sensors, plans, accessories] = await Promise.all([
          getCameras(),
          getSensors(),
          getPlans(),
          getAccessoirs(),
        ]);

        const saved = loadBundle();

        setBundle({
          cameras: applySavedQuantities(
            prepareProducts(cameras),
            saved?.cameras,
          ),

          sensors: applySavedQuantities(
            prepareProducts(sensors),
            saved?.sensors,
          ),

          plans: applySavedQuantities(prepareProducts(plans), saved?.plans),

          accessories: applySavedQuantities(
            prepareProducts(accessories),
            saved?.accessories,
          ),
        });
      } catch (e) {
        console.error(e);

        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const updateQuantity = useCallback(
    (category: keyof BundleState, productId: number, quantity: number) => {
      setBundle((prev) => ({
        ...prev,

        [category]: prev[category].map((product) => {
          if (product.id !== productId) return product;

          if (!product.variants) {
            return {
              ...product,
              quantity,
            };
          }

          return {
            ...product,

            variants: product.variants.map((variant) =>
              variant.id === product.selectedVariantId
                ? {
                    ...variant,
                    quantity,
                  }
                : variant,
            ),
          };
        }),
      }));
    },
    [],
  );

  const selectVariant = useCallback((productId: number, variantId: string) => {
    setBundle((prev) => ({
      ...prev,

      cameras: prev.cameras.map((product) =>
        product.id === productId
          ? {
              ...product,
              selectedVariantId: variantId,
            }
          : product,
      ),
    }));
  }, []);

  const selectPlan = useCallback((planId: number) => {
    setBundle((prev) => ({
      ...prev,

      plans: prev.plans.map((plan) => ({
        ...plan,

        quantity: plan.id === planId ? (plan.quantity > 0 ? 0 : 1) : 0,
      })),
    }));
  }, []);

  const saveConfiguration = useCallback(() => {
    saveBundle(bundle);

    toast.success("Your security system has been saved.");
  }, [bundle]);

  const allProducts = useMemo(
    () => [
      ...bundle.cameras,
      ...bundle.sensors,
      ...bundle.plans,
      ...bundle.accessories,
    ],
    [bundle],
  );

  return {
    loading,
    error,
    bundle,
    allProducts,
    updateQuantity,
    selectVariant,
    selectPlan,
    saveConfiguration,
  };
}
