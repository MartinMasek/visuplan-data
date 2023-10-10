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
  /**
   * Unique id of the entity
   */
  id: string;
  /**
   * This could be used to connect this entity with an external system.
   */
  externalId?: string;
  /**
   * Barcode or QR code of the entity
   */
  code: string;
  name: string;
  unitOfMeasure: UnitOfMeasure;
  inventoryTracking: InventoryTrackingMethod;
  supplier?: Supplier;
  customProperties?: {
    [propertyId: string]: Omit<CustomPropertyDefinition, "id">;
  };
  /**
   * Provides functionality for managing substitution of this production entity
   * in the manufacturing process.
   */
  substitution?: ProductionEntityDefinition[];
}

/**
 * Represents a live instance of a production entity within the manufacturing process.
 * In contrast to the {@link ProductionEntityDefinition}, this represents an object in the real world
 * with specific attributes like weight, size, quantity, etc. This instance inherits properties
 * from the corresponding ProductionEntityDefinition, while allowing custom properties specific
 * to this instance.
 */
export interface ProductionEntityInstance
  extends Omit<
    ProductionEntityDefinition,
    "customProperties" | "substitution"
  > {
  customProperties?: {
    [propertyId: string]: Omit<CustomPropertyVariant, "id">;
  };
  quantity?: number;
  /**
   * This holds the id of the definition for this instance.
   * E.g. there is 1 definition for a steel bar which has id 10.
   * Then, the modeling in the real world uses 2 different steel bars
   * with ids 20 and 21. Both of them will have 'definitionId'
   * set to 10 (which is the steel bar definition)
   */
  definitionId: string;
  log?: ProductionLog;
}
