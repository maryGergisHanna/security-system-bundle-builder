export interface SavedVariant {
  id: string;
  quantity: number;
}

export interface SavedProduct {
  id: number;
  quantity: number;
  selectedVariantId?: string;
  variants?: SavedVariant[];
}

export interface SavedBundle {
  cameras: SavedProduct[];
  sensors: SavedProduct[];
  plans: SavedProduct[];
  accessories: SavedProduct[];
}
