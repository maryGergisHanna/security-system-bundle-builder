import "./App.css";
import BundleBuilder from "./pages/BundleBuilder/BundleBuilder";
import SecuritySystem from "./pages/SecuritySystem/SecuritySystem";
import { useBundleBuilder } from "./pages/BundleBuilder/hooks/useBundleBuilder";

function App() {
  const {
    loading,
    error,
    bundle,
    updateQuantity,
    selectVariant,
    selectPlan,
    saveConfiguration,
  } = useBundleBuilder();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <BundleBuilder
        bundle={bundle}
        updateQuantity={updateQuantity}
        selectVariant={selectVariant}
        selectPlan={selectPlan}
      />

      <SecuritySystem
        cameras={bundle.cameras}
        sensors={bundle.sensors}
        plans={bundle.plans}
        accessories={bundle.accessories}
        updateQuantity={updateQuantity}
        onSaveForLater={saveConfiguration}
      />
    </div>
  );
}

export default App;
