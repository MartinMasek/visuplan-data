// TODO

export enum InventoryTrackingMethod {
  Serialized = "serialized",
  Batch = "batch",
}

export interface Inventory {
  type: InventoryTrackingMethod;
  quantity: number;
}

export interface SerializedInventory extends Inventory {
  code: string;
}

export interface BulkInventory extends Inventory {}
