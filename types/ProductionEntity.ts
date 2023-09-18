import {
  CustomPropertyDefinition,
  CustomPropertyVariant,
} from "./CustomProperties";
import { InventoryTrackingMethod } from "./Inventory";
import { ProductionLog } from "./ProductionLog";
import { Supplier } from "./Supplier";

export enum UnitOfMeasure {
  Kilogram = "kg",
  Gram = "g",
  Pound = "lb",
  Ton = "ton",
  Liter = "L",
  Milliliter = "mL",
  CubicMeter = "m³",
  CubicFoot = "ft³",
  Meter = "m",
  Centimeter = "cm",
  Millimeter = "mm",
  Foot = "ft",
  Inch = "in",
  SquareMeter = "m²",
  SquareFoot = "ft²",
  Piece = "pcs",
  Unit = "u",
  Carton = "ct",
  Joule = "J",
  Calorie = "cal",
}

/**
 * An entity used by resources for transformation.
 * This entity can represent both products and materials interchangeably.
 * Examples include carbon steel, wheat, bricks, cars, wardrobes, etc.
 * The specific attributes and usage may vary depending on the tenant and business context.
 */
export interface ProductionEntityDefinition {
  id: string;
  /**
   * This could be used to connect this entity with an external system.
   */
  externalId?: string;
  code: string;
  name: string;
  unitOfMeasure: UnitOfMeasure;
  inventoryTracking: InventoryTrackingMethod;
  supplier?: Supplier;
  customProperties?: {
    [propertyId: string]: Omit<CustomPropertyDefinition, "id">;
  };
}

/**
 * Represents a live instance of a production entity within the manufacturing process.
 * In contrast to the {@link ProductionEntityDefinition}, this represents an object in the real world
 * with specific attributes like weight, size, quantity, etc. This instance inherits properties
 * from the corresponding ProductionEntityDefinition, while allowing custom properties specific
 * to this instance.
 */
export interface ProductionEntityInstance
  extends Omit<ProductionEntityDefinition, "customProperties"> {
  customProperties?: {
    [propertyId: string]: Omit<CustomPropertyVariant, "id">;
  };
  quantity: number;
  log?: ProductionLog;
}
